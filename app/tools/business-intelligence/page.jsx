// app/tools/business-intelligence/page.jsx
'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart, Search, TrendingUp, Zap } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function BusinessIntelligencePage() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = () => {
    if (!query) return;
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setResults({
        marketSize: '$150B',
        growthRate: '12%',
        keyTrends: ['AI-driven personalization', 'Sustainable practices', 'Gig economy expansion'],
        competitors: ['Competitor A', 'Competitor B', 'Competitor C'],
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="flex items-center space-x-4 mb-6">
        <BarChart className="w-8 h-8 text-primary-600" />
        <h1 className="text-3xl font-bold text-gray-800">AI Business Intelligence Hub</h1>
      </div>

      <p className="text-lg text-gray-600 mb-8">
        Get real-time insights into market trends, competitive analysis, and financial forecasting to make data-driven decisions.
      </p>

      <motion.div className="bg-white p-6 rounded-lg shadow-lg" variants={itemVariants}>
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Market Research Query</h2>
        <div className="flex space-x-4">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="e.g., 'E-commerce trends in Southeast Asia'"
            className="flex-grow p-3 border rounded-lg focus:ring-2 focus:ring-primary-500"
          />
          <button
            onClick={handleSearch}
            disabled={loading}
            className="bg-primary-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-primary-700 transition disabled:bg-primary-300"
          >
            {loading ? 'Analyzing...' : <><Search className="w-5 h-5 inline-block mr-2" />Analyze Market</>}
          </button>
        </div>

        {results && (
          <motion.div
            className="mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Analysis Results</h3>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              variants={containerVariants}
            >
              <motion.div className="bg-gray-50 p-4 rounded-lg flex items-center space-x-4" variants={itemVariants}>
                <TrendingUp className="w-8 h-8 text-green-500" />
                <div>
                  <p className="text-sm text-gray-500">Market Size</p>
                  <p className="text-2xl font-bold text-gray-800">{results.marketSize}</p>
                </div>
              </motion.div>
              <motion.div className="bg-gray-50 p-4 rounded-lg flex items-center space-x-4" variants={itemVariants}>
                <Zap className="w-8 h-8 text-yellow-500" />
                <div>
                  <p className="text-sm text-gray-500">Growth Rate</p>
                  <p className="text-2xl font-bold text-gray-800">{results.growthRate}</p>
                </div>
              </motion.div>
              <motion.div className="bg-gray-50 p-4 rounded-lg col-span-2" variants={itemVariants}>
                <p className="text-sm text-gray-500 mb-2">Key Trends</p>
                <ul className="space-y-2">
                  {results.keyTrends.map((trend, index) => (
                    <motion.li key={index} className="flex items-center space-x-2 text-gray-700" variants={itemVariants}>
                      <div className="w-2 h-2 rounded-full bg-primary-500" />
                      <span>{trend}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}
