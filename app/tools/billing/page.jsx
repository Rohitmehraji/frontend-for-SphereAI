'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, DollarSign, CheckCircle, Shield } from 'lucide-react';
import { toast } from 'react-hot-toast';
import PaymentModal from '../../../components/PaymentModal';

// Mock Data
const currentPlan = {
  name: 'Pro Plan',
  price: '$49/mo',
  features: [
    'Unlimited AI Generations',
    'Advanced Business Intelligence',
    '24/7 Priority Support',
    'Team Collaboration (3 seats)',
  ],
};

const paymentMethod = {
  brand: 'Visa',
  last4: '4242',
  expires: '12/26',
};

const transactionHistory = [
  { id: 1, date: '2023-10-15', amount: '$49.00', description: 'Monthly Subscription' },
  { id: 2, date: '2023-09-15', amount: '$49.00', description: 'Monthly Subscription' },
  { id: 3, date: '2023-08-15', amount: '$49.00', description: 'Monthly Subscription' },
];

const BillingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ isSuccess: true, message: '' });

  const handleUpgrade = () => {
    setModalContent({
      isSuccess: true,
      message: 'Your plan has been successfully upgraded! You now have access to all Pro features.',
    });
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <PaymentModal
        isOpen={isModalOpen}
        onClose={closeModal}
        isSuccess={modalContent.isSuccess}
        message={modalContent.message}
      />
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
          transition={{ delay: 0.2 }}
          className="lg:col-span-2 bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-4 flex items-center"><CheckCircle className="mr-2 text-green-400" /> Current Plan</h2>
          <div className="p-6 bg-gray-700 rounded-lg">
            <h3 className="text-3xl font-bold text-purple-400">{currentPlan.name}</h3>
            <p className="text-5xl font-extrabold my-4">{currentPlan.price}</p>
            <ul className="space-y-2 text-gray-300">
              {currentPlan.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle className="mr-2 text-green-500" size={16} /> {feature}
                </li>
              ))}
            </ul>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleUpgrade}
              className="mt-6 w-full py-3 font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-md hover:from-purple-600 hover:to-pink-600"
            >
              Upgrade Plan
            </motion.button>
          </div>
        </motion.div>

        {/* Payment Method Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-4 flex items-center"><CreditCard className="mr-2 text-blue-400" /> Payment Method</h2>
          <div className="p-6 bg-gray-700 rounded-lg flex items-center">
            <img src="https://img.icons8.com/color/48/000000/visa.png" alt="Visa" className="mr-4"/>
            <div>
              <p className="font-bold text-lg">{paymentMethod.brand} ending in {paymentMethod.last4}</p>
              <p className="text-gray-400">Expires {paymentMethod.expires}</p>
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
          transition={{ delay: 0.6 }}
          className="lg:col-span-3 bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-4 flex items-center"><DollarSign className="mr-2 text-yellow-400" /> Transaction History</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="py-2">Date</th>
                  <th className="py-2">Description</th>
                  <th className="py-2 text-right">Amount</th>
                </tr>
              </thead>
              <tbody>
                {transactionHistory.map(tx => (
                  <tr key={tx.id} className="border-b border-gray-700 hover:bg-gray-700">
                    <td className="py-4">{tx.date}</td>
                    <td className="py-4">{tx.description}</td>
                    <td className="py-4 text-right font-medium">{tx.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
    </>
  );
};

export default BillingPage;
