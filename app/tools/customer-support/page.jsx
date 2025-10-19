'use client';

import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { MessageSquare, Ticket, Smile, Meh, Frown } from 'lucide-react';

// Mock Data
const tickets = [
  { id: '#1234', subject: 'Login Issue', user: 'john@example.com', status: 'Open' },
  { id: '#1235', subject: 'Billing Question', user: 'jane@example.com', status: 'In Progress' },
  { id: '#1236', subject: 'Feature Request', user: 'peter@example.com', status: 'Closed' },
  { id: '#1237', subject: 'API Bug', user: 'mary@example.com', status: 'Open' },
];

const sentimentData = [
  { name: 'Positive', value: 70, color: '#22c55e' },
  { name: 'Neutral', value: 20, color: '#facc15' },
  { name: 'Negative', value: 10, color: '#ef4444' },
];

const CustomerSupportPage = () => {
    const getStatusClass = (status) => {
        if (status === 'Open') return 'text-green-400';
        if (status === 'In Progress') return 'text-yellow-400';
        return 'text-gray-500';
    }
  return (
    <div className="p-8 bg-gray-900 text-white min-h-screen">
      <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        Customer Support Automation
      </motion.h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* AI Chatbot */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="lg:col-span-2 bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4 flex items-center"><MessageSquare className="mr-2"/>AI Chatbot</h2>
          <div className="bg-gray-700 h-96 rounded-lg p-4 flex flex-col">
              <div className="flex-grow overflow-y-auto space-y-4">
                <div className="flex justify-start"><span className="bg-purple-600 px-4 py-2 rounded-lg">Hello! How can I help you today?</span></div>
                <div className="flex justify-end"><span className="bg-gray-600 px-4 py-2 rounded-lg">I'm having trouble logging in.</span></div>
              </div>
              <div className="mt-4 flex">
                  <input type="text" placeholder="Type your message..." className="flex-grow bg-gray-600 p-2 rounded-l-md"/>
                  <button className="bg-purple-600 px-4 py-2 rounded-r-md">Send</button>
              </div>
          </div>
        </motion.div>

        {/* Sentiment Analysis */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Sentiment Insights</h2>
          <div className="h-64">
              <ResponsiveContainer>
                <PieChart>
                  <Pie data={sentimentData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                    {sentimentData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                  </Pie>
                  <Tooltip contentStyle={{ backgroundColor: '#1a202c' }}/>
                </PieChart>
              </ResponsiveContainer>
          </div>
          <div className="flex justify-around mt-4 text-sm">
            <span className="flex items-center text-green-400"><Smile className="mr-1"/>Positive</span>
            <span className="flex items-center text-yellow-400"><Meh className="mr-1"/>Neutral</span>
            <span className="flex items-center text-red-400"><Frown className="mr-1"/>Negative</span>
          </div>
        </motion.div>

        {/* Ticket Management */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="lg:col-span-3 bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4 flex items-center"><Ticket className="mr-2"/>Ticket Management</h2>
          <table className="w-full text-left">
            <thead><tr><th>Ticket ID</th><th>Subject</th><th>User</th><th>Status</th></tr></thead>
            <tbody>
              {tickets.map(ticket => (
                <tr key={ticket.id} className="border-b border-gray-700">
                  <td className="py-2">{ticket.id}</td><td>{ticket.subject}</td><td>{ticket.user}</td><td className={getStatusClass(ticket.status)}>{ticket.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </div>
  );
};

export default CustomerSupportPage;
