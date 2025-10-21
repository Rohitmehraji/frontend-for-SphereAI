'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';
import { DollarSign, CheckCircle, XCircle, CreditCard, History, Loader } from 'lucide-react';
import { createPaymentOrder, verifyPayment } from '../../services/paymentService';
import { getSubscriptionDetails, getPaymentHistory } from '../../services/placeholderBillingService';

const SubscriptionCard = ({ plan, isActive, onSelectPlan, onCancel, isLoading }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: plan.delay }}
    className={`p-6 rounded-lg shadow-lg border-2 ${isActive ? 'border-purple-500 bg-gray-800' : 'bg-gray-700 border-gray-600'}`}
  >
    <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">{plan.name}</h3>
    <p className="text-4xl font-bold my-4">${plan.price}<span className="text-lg text-gray-400">/month</span></p>
    <ul className="space-y-2 text-gray-300">
      {plan.features.map((feature, i) => (
        <li key={i} className="flex items-center"><CheckCircle className="w-5 h-5 text-green-400 mr-2" />{feature}</li>
      ))}
    </ul>
    <button
      onClick={() => (isActive ? onCancel() : onSelectPlan(plan))}
      disabled={isLoading}
      className={`w-full mt-6 py-2 px-4 font-semibold rounded-md transition-transform duration-200 ${isActive
          ? 'bg-red-500 hover:bg-red-600'
          : 'bg-purple-500 hover:bg-purple-600'
        } text-white disabled:opacity-50 flex items-center justify-center`}
    >
      {isLoading && <Loader className="animate-spin mr-2" />}
      {isActive ? 'Cancel Subscription' : `Choose ${plan.name}`}
    </button>
  </motion.div>
);

const BillingPage = () => {
  const [subscription, setSubscription] = useState(null);
  const [paymentHistory, setPaymentHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState({ name: 'Sphere.AI User', email: 'user@sphere.ai' }); // Placeholder user data

  const plans = [
    { id: 'pro', name: 'Pro Plan', price: 49, features: ['Unlimited AI Generations', 'All AI Tools', 'Priority Support', 'Advanced Analytics'], delay: 0.1 },
    { id: 'starter', name: 'Starter Plan', price: 19, features: ['500 AI Generations/mo', 'Core AI Tools', 'Standard Support'], delay: 0.2 },
  ];

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);

    const loadBillingData = async () => {
      try {
        setIsLoading(true);
        const [subDetails, history] = await Promise.all([
          getSubscriptionDetails(),
          getPaymentHistory()
        ]);
        setSubscription(subDetails);
        setPaymentHistory(history);
      } catch (err) {
        setError('Failed to load billing information.');
        toast.error('Could not fetch billing details.');
      } finally {
        setIsLoading(false);
      }
    };
    loadBillingData();
  }, []);

  const handleSelectPlan = async (plan) => {
    setActionLoading(true);
    const toastId = toast.loading('Initiating payment...');

    try {
      const order = await createPaymentOrder({
        amount: plan.price * 100, // Amount in cents
        currency: 'USD',
        planId: plan.id,
      });

      toast.dismiss(toastId);

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: 'Sphere.AI',
        description: `Subscription to ${plan.name}`,
        order_id: order.id,
        handler: async function (response) {
          const verificationToast = toast.loading('Verifying payment...');
          try {
            await verifyPayment({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            });
            toast.dismiss(verificationToast);
            toast.success('Payment successful! Your plan is now active.');
            // Re-fetch subscription details to update UI
            const subDetails = await getSubscriptionDetails();
            setSubscription(subDetails);
          } catch (error) {
            toast.dismiss(verificationToast);
            toast.error('Payment verification failed. Please contact support.');
          }
        },
        prefill: {
            name: user.name,
            email: user.email,
        },
        theme: {
            color: "#6B21A8"
        }
      };

      const rzp = new window.Razorpay(options);
      rzp.open();

    } catch (err) {
      toast.dismiss(toastId);
      toast.error('Failed to create payment order. Please try again.');
    } finally {
      setActionLoading(false);
    }
  };

  const handleCancel = async () => {
      toast.error("Cancellation is not available at this time. Please contact support.");
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader className="w-12 h-12 animate-spin text-purple-400" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen text-red-400">
        <XCircle className="w-8 h-8 mr-2" />
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="p-8 bg-gray-900 text-white min-h-screen">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
      >
        Billing & Subscriptions
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-semibold mb-4 flex items-center"><CreditCard className="mr-2"/>Subscription Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {plans.map(plan => (
              <SubscriptionCard
                key={plan.id}
                plan={plan}
                isActive={subscription?.plan === plan.id}
                onSelectPlan={handleSelectPlan}
                onCancel={handleCancel}
                isLoading={actionLoading}
              />
            ))}
          </div>
        </div>

        {subscription && (
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Current Plan</h2>
            <p className="text-xl font-bold text-green-400">{subscription.planName}</p>
            <p className="text-gray-400">Renews on: {new Date(subscription.renewsOn).toLocaleDateString()}</p>
            <p className="mt-4 text-sm">Status: <span className={`px-2 py-1 rounded-full text-xs ${subscription.status === 'active' ? 'bg-green-500' : 'bg-red-500'}`}>{subscription.status}</span></p>
          </motion.div>
        )}
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4 flex items-center"><History className="mr-2"/>Payment History</h2>
        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <table className="min-w-full">
            <thead className="bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {paymentHistory.length > 0 ? (
                paymentHistory.map(item => (
                  <motion.tr key={item.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <td className="px-6 py-4 whitespace-nowrap">{new Date(item.date).toLocaleDateString()}</td>
                    <td className="px-6 py-4 whitespace-nowrap">${item.amount.toFixed(2)}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${item.status === 'Paid' ? 'bg-green-800 text-green-200' : 'bg-red-800 text-red-200'}`}>
                        {item.status}
                      </span>
                    </td>
                  </motion.tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="text-center py-8 text-gray-500">No payment history found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BillingPage;
