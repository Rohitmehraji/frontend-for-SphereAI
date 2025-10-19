'use client';

import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Users, Mail, Megaphone, Search } from 'lucide-react';

// Mock Data
const leads = [
  { name: 'John Doe', company: 'Innovate Inc.', score: 92, status: 'Hot' },
  { name: 'Jane Smith', company: 'Tech Solutions', score: 85, status: 'Hot' },
  { name: 'Peter Jones', company: 'Quantum Dynamics', score: 71, status: 'Warm' },
  { name: 'Mary Johnson', company: 'NextGen AI', score: 63, status: 'Cold' },
];

const emailCampaignData = [
  { day: 'Mon', openRate: 22, clickRate: 4 },
  { day: 'Tue', openRate: 25, clickRate: 5 },
  { day: 'Wed', openRate: 31, clickRate: 7 },
  { day: 'Thu', openRate: 28, clickRate: 6 },
  { day: 'Fri', openRate: 35, clickRate: 9 },
];

const SalesMarketingPage = () => {
    const getStatusClass = (status) => {
        if (status === 'Hot') return 'text-red-400';
        if (status === 'Warm') return 'text-yellow-400';
        return 'text-blue-400';
    }
  return (
    <div className="p-8 bg-gray-900 text-white min-h-screen">
      <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        Sales & Marketing Automation
      </motion.h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* AI Lead Scoring */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4 flex items-center"><Users className="mr-2"/>AI Lead Scoring</h2>
          <table className="w-full text-left">
            <thead><tr><th>Name</th><th>Company</th><th>Score</th><th>Status</th></tr></thead>
            <tbody>
              {leads.map(lead => (
                <tr key={lead.name} className="border-b border-gray-700">
                  <td className="py-2">{lead.name}</td>
                  <td>{lead.company}</td>
                  <td>{lead.score}</td>
                  <td className={getStatusClass(lead.status)}>{lead.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Email Campaign Performance */}
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="bg-gray-800 p-6 rounded-lg h-96">
          <h2 className="text-xl font-semibold mb-4 flex items-center"><Mail className="mr-2"/>Email Campaign Performance</h2>
          <ResponsiveContainer>
            <LineChart data={emailCampaignData}>
              <XAxis dataKey="day" stroke="#a0aec0" />
              <YAxis stroke="#a0aec0" />
              <Tooltip contentStyle={{ backgroundColor: '#1a202c' }}/>
              <Legend />
              <Line type="monotone" dataKey="openRate" name="Open Rate (%)" stroke="#8884d8" />
              <Line type="monotone" dataKey="clickRate" name="Click Rate (%)" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        {/* AI Content Generation */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4 flex items-center"><Megaphone className="mr-2"/>AI Content Generator</h2>
          <textarea placeholder="e.g., A tweet about our new feature..." className="w-full bg-gray-700 p-2 rounded-md"></textarea>
          <button className="mt-2 px-4 py-2 bg-purple-600 rounded-md">Generate</button>
        </motion.div>

        {/* SEO Assistant */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4 flex items-center"><Search className="mr-2"/>SEO Assistant</h2>
          <input type="text" placeholder="Enter a keyword..." className="w-full bg-gray-700 p-2 rounded-md"/>
          <div className="mt-4">
            <h3 className="font-semibold">Suggestions:</h3>
            <div className="flex flex-wrap gap-2 mt-2">
                <span className="bg-gray-700 px-2 py-1 rounded-full text-sm">AI business tools</span>
                <span className="bg-gray-700 px-2 py-1 rounded-full text-sm">financial forecasting</span>
                <span className="bg-gray-700 px-2 py-1 rounded-full text-sm">automated marketing</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SalesMarketingPage;
