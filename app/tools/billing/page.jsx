'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, DollarSign, CheckCircle, Shield, AlertCircle, XCircle, Loader } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { loadStripe } from '@stripe/stripe-js';
import PaymentModal from '../../../components/PaymentModal';
import { getSubscriptionDetails, getTransactionHistory, cancelSubscription } from '../../../lib/billingService';
import { createStripeCheckoutSession } from '../../../lib/paymentService';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const SkeletonLoader = ({ className }) => <div className={`bg-gray-700 animate-pulse rounded ${className}`}></div>;

const BillingPage = () => {
  const [subscription, setSubscription] = useState(null);
  const [history, setHistory] = useState(null);
  const [error, setError] = useState(null);
  const [isCancelling, setIsCancelling] = useState(false);
  const [isUpgrading, setIsUpgrading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [subDetails, transHistory] = await Promise.all([
          getSubscriptionDetails(),
          getTransactionHistory(),
        ]);
        setSubscription(subDetails);
        setHistory(transHistory);
      } catch (err) {
        setError('Failed to load billing information.');
        console.error(err);
      }
    };
    fetchData();
  }, []);

  const handleUpgrade = async () => {
    setIsUpgrading(true);
    const toastId = toast.loading('Redirecting to checkout...');
    try {
      const { sessionId } = await createStripeCheckoutSession({ plan: 'Pro', price: 9900 }); // Price in cents
      const stripe = await stripePromise;
      const { error } = await stripe.redirectToCheckout({ sessionId });
      if (error) {
        toast.error(error.message);
      }
    } catch (err) {
      toast.error('Failed to initiate checkout. Please try again.');
    } finally {
        toast.dismiss(toastId);
        setIsUpgrading(false);
    }
  };

  const handleCancelSubscription = async () => {
    if (window.confirm('Are you sure you want to cancel your subscription? This action cannot be undone.')) {
        setIsCancelling(true);
        const toastId = toast.loading('Cancelling your subscription...');
        try {
            const response = await cancelSubscription();
            toast.dismiss(toastId);
            toast.success(response.message);
            // Refetch data to show updated status
            const subDetails = await getSubscriptionDetails();
            setSubscription({ ...subDetails, plan: 'Free Plan', price: 0 }); // Simulate cancelled state
        } catch (err) {
            toast.dismiss(toastId);
            toast.error('Failed to cancel subscription. Please contact support.');
        } finally {
            setIsCancelling(false);
        }
    }
  };

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen text-red-400">
        <AlertCircle className="w-12 h-12 mr-4" />
        <div>
          <h2 className="text-2xl font-bold">Error</h2>
          <p>{error}</p>
        </div>
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Current Plan Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:col-span-2 bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-semibold mb-4 flex items-center"><CheckCircle className="mr-2 text-green-400" /> Current Plan</h2>
            <div className="p-6 bg-gray-700 rounded-lg">
                {subscription ? (
                    <>
                        <h3 className="text-3xl font-bold text-purple-400">{subscription.plan}</h3>
                        <p className="text-5xl font-extrabold my-4">${subscription.price}/mo</p>
                        <p className="text-gray-400 text-sm">Next billing date: {subscription.nextBillingDate}</p>
                        <motion.button
                            onClick={handleUpgrade}
                            disabled={isUpgrading}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="mt-6 w-full py-3 font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-md hover:from-purple-600 hover:to-pink-600 flex items-center justify-center disabled:opacity-50"
                            >
                            {isUpgrading ? <><Loader className="animate-spin mr-2"/> Processing...</> : 'Upgrade Plan'}
                        </motion.button>
                        <motion.button
                            onClick={handleCancelSubscription}
                            disabled={isCancelling}
                            className="mt-4 w-full py-2 font-semibold text-red-400 bg-transparent border border-red-400 rounded-md hover:bg-red-900/50"
                            >
                            {isCancelling ? 'Cancelling...' : 'Cancel Subscription'}
                        </motion.button>
                    </>
                ) : (
                    <>
                        <SkeletonLoader className="h-10 w-1/3 mb-4" />
                        <SkeletonLoader className="h-16 w-1/2 my-4" />
                        <SkeletonLoader className="h-6 w-1/4" />
                        <SkeletonLoader className="h-12 w-full mt-6" />
                    </>
                )}
            </div>
          </motion.div>

          {/* Payment Method Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-semibold mb-4 flex items-center"><CreditCard className="mr-2 text-blue-400" /> Payment Method</h2>
            <div className="p-6 bg-gray-700 rounded-lg flex items-center">
              <img src="https://img.icons8.com/color/48/000000/visa.png" alt="Visa" className="mr-4"/>
              <div>
                <p className="font-bold text-lg">Visa ending in 4242</p>
                <p className="text-gray-400">Expires 12/26</p>
              </div>
            </div>
            <button className="mt-4 w-full text-sm text-purple-400 hover:text-purple-300">
              Update Payment Method
            </button>
            <div className="mt-6 flex items-center text-sm text-gray-500">
                <Shield size={16} className="mr-2"/> Secure payments by Stripe.
            </div>
          </motion.div>

          {/* Transaction History Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-3 bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-semibold mb-4 flex items-center"><DollarSign className="mr-2 text-yellow-400" /> Transaction History</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="py-2">Date</th>
                    <th className="py-2">Amount</th>
                    <th className="py-2 text-right">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {history ? (
                    history.map(tx => (
                      <tr key={tx.id} className="border-b border-gray-700 hover:bg-gray-700">
                        <td className="py-4">{tx.date}</td>
                        <td className="py-4">${tx.amount.toFixed(2)}</td>
                        <td className="py-4 text-right font-medium text-green-400">{tx.status}</td>
                      </tr>
                    ))
                  ) : (
                    Array.from({ length: 3 }).map((_, i) => (
                        <tr key={i}><td colSpan="3" className='py-4'><SkeletonLoader className='h-6 w-full' /></td></tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </div>
  );
};

export default BillingPage;
