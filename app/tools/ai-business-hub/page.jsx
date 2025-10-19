'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { FileText, Search, TrendingUp, Zap } from 'lucide-react';

// Mock Data
const marketResearchData = {
  marketSize: '$1.2B',
  growthRate: '15% YoY',
  competitors: [
    { name: 'Competitor A', share: 40 },
    { name: 'Competitor B', share: 25 },
    { name: 'Competitor C', share: 15 },
    { name: 'Others', share: 20 },
  ],
};

const financialForecastData = [
  { name: 'Q1', revenue: 4000, profit: 2400 },
  { name: 'Q2', revenue: 3000, profit: 1398 },
  { name: 'Q3', revenue: 2000, profit: 9800 },
  { name: 'Q4', revenue: 2780, profit: 3908 },
  { name: 'Q1+1', revenue: 1890, profit: 4800 },
];

const tabs = [
  { name: 'Business Plan', icon: FileText },
  { name: 'Market Research', icon: Search },
  { name: 'Financial Forecast', icon: TrendingUp },
];

const AIBusinessHubPage = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].name);

  const renderContent = () => {
    switch (activeTab) {
      case 'Business Plan':
        return (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2 className="text-2xl font-semibold mb-4">AI Business Plan Generator</h2>
            <div className="bg-gray-700 p-6 rounded-lg">
                <textarea className="w-full p-2 bg-gray-600 rounded-md" rows="4" placeholder="Describe your business idea..."></textarea>
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mt-4 px-6 py-2 bg-purple-600 rounded-md">
                    <Zap className="inline-block mr-2" /> Generate Plan
                </motion.button>
            </div>
          </motion.div>
        );
      case 'Market Research':
        return (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2 className="text-2xl font-semibold mb-4">Market Research Insights</h2>
            <div className="grid grid-cols-2 gap-6">
                <div className="bg-gray-700 p-4 rounded-lg">
                    <p>Market Size: {marketResearchData.marketSize}</p>
                    <p>Growth Rate: {marketResearchData.growthRate}</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg h-64">
                    <ResponsiveContainer>
                        <BarChart data={marketResearchData.competitors}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="share" fill="#8884d8" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
          </motion.div>
        );
      case 'Financial Forecast':
        return (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2 className="text-2xl font-semibold mb-4">Financial Forecast</h2>
            <div className="bg-gray-700 p-6 rounded-lg h-80">
                <ResponsiveContainer>
                    <LineChart data={financialForecastData}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
                        <Line type="monotone" dataKey="profit" stroke="#82ca9d" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-8 bg-gray-900 text-white min-h-screen">
      <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        AI Business Intelligence Hub
      </motion.h1>
      <div className="flex space-x-4 border-b border-gray-700 mb-6">
        {tabs.map(tab => (
          <button key={tab.name} onClick={() => setActiveTab(tab.name)} className={`flex items-center space-x-2 py-2 px-4 text-lg font-medium ${activeTab === tab.name ? 'text-purple-400 border-b-2 border-purple-400' : 'text-gray-400'}`}>
            <tab.icon />
            <span>{tab.name}</span>
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        {renderContent()}
      </AnimatePresence>
    </div>
  );
};

export default AIBusinessHubPage;
