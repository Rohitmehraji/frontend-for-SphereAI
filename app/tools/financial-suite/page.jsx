'use client';

import { motion } from 'framer-motion';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { DollarSign, FileText, TrendingUp, PlusCircle } from 'lucide-react';

// Mock Data
const cashFlowData = [
  { month: 'Jan', income: 4000, expenses: 2400 },
  { month: 'Feb', income: 3000, expenses: 1398 },
  { month: 'Mar', income: 2000, expenses: 9800 },
  { month: 'Apr', income: 2780, expenses: 3908 },
  { month: 'May', income: 1890, expenses: 4800 },
  { month: 'Jun', income: 2390, expenses: 3800 },
];

const invoices = [
  { id: 'INV-001', client: 'Innovate Inc.', amount: '$2,500', status: 'Paid' },
  { id: 'INV-002', client: 'Tech Solutions', amount: '$1,200', status: 'Pending' },
  { id: 'INV-003', client: 'Quantum Dynamics', amount: '$3,800', status: 'Overdue' },
  { id: 'INV-004', client: 'NextGen AI', amount: '$500', status: 'Paid' },
];

const FinancialSuitePage = () => {
    const getStatusClass = (status) => {
        switch (status) {
            case 'Paid': return 'text-green-400 bg-green-900';
            case 'Pending': return 'text-yellow-400 bg-yellow-900';
            case 'Overdue': return 'text-red-400 bg-red-900';
            default: return 'text-gray-400 bg-gray-700';
        }
    }
  return (
    <div className="p-8 bg-gray-900 text-white min-h-screen">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Automated Financial Suite
        </h1>
        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-4 py-2 bg-purple-600 rounded-md flex items-center">
            <PlusCircle className="mr-2"/> New Invoice
        </motion.button>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Key Metrics */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-gray-800 p-6 rounded-lg"><TrendingUp className="text-green-400 mb-2"/>Revenue YTD: $125,430</motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-gray-800 p-6 rounded-lg"><DollarSign className="text-red-400 mb-2"/>Expenses YTD: $68,970</motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-gray-800 p-6 rounded-lg"><FileText className="text-yellow-400 mb-2"/>Pending Invoices: $5,000</motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }} className="bg-gray-800 p-6 rounded-lg h-96">
            <h2 className="text-xl font-semibold mb-4">Cash Flow</h2>
            <ResponsiveContainer>
              <AreaChart data={cashFlowData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#4a5568" />
                <XAxis dataKey="month" stroke="#a0aec0"/>
                <YAxis stroke="#a0aec0"/>
                <Tooltip contentStyle={{ backgroundColor: '#1a202c', border: '1px solid #4a5568' }}/>
                <Area type="monotone" dataKey="income" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                <Area type="monotone" dataKey="expenses" stackId="1" stroke="#ffc658" fill="#ffc658" />
              </AreaChart>
            </ResponsiveContainer>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }} className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Recent Invoices</h2>
            <table className="w-full text-left">
              <thead><tr className="border-b border-gray-700"><th>ID</th><th>Client</th><th>Amount</th><th>Status</th></tr></thead>
              <tbody>
                {invoices.map(invoice => (
                  <tr key={invoice.id} className="border-b border-gray-700">
                    <td className="py-2">{invoice.id}</td>
                    <td>{invoice.client}</td>
                    <td>{invoice.amount}</td>
                    <td><span className={`px-2 py-1 text-xs font-bold rounded-full ${getStatusClass(invoice.status)}`}>{invoice.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
        </motion.div>
      </div>
    </div>
  );
};

export default FinancialSuitePage;
