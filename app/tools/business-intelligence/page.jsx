// app/tools/business-intelligence/page.jsx
'use client';
import React, { useState } from 'react';
import { BarChart, Search } from 'lucide-react';

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
    <div>
      <div className="flex items-center space-x-4 mb-6">
        <BarChart className="w-8 h-8 text-indigo-600" />
        <h1 className="text-3xl font-bold text-gray-800">AI Business Intelligence Hub</h1>
      </div>

      <p className="text-lg text-gray-600 mb-8">
        Get real-time insights into market trends, competitive analysis, and financial forecasting to make data-driven decisions.
      </p>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Market Research Query</h2>
        <div className="flex space-x-4">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="e.g., 'E-commerce trends in Southeast Asia'"
            className="flex-grow p-3 border rounded-lg"
          />
          <button
            onClick={handleSearch}
            disabled={loading}
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-indigo-700 transition disabled:bg-indigo-300"
          >
            {loading ? 'Analyzing...' : <><Search className="w-5 h-5 inline-block mr-2" />Analyze Market</>}
          </button>
        </div>

        {results && (
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Analysis Results</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-500">Market Size</p>
                <p className="text-2xl font-bold text-gray-800">{results.marketSize}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-500">Growth Rate</p>
                <p className="text-2xl font-bold text-gray-800">{results.growthRate}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg col-span-2">
                <p className="text-sm text-gray-500">Key Trends</p>
                <ul className="list-disc list-inside mt-2">
                  {results.keyTrends.map((trend, index) => (
                    <li key={index} className="text-gray-700">{trend}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
