'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { FileText, Search, TrendingUp, Zap, Loader, AlertCircle } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { generateBusinessPlan, performMarketResearch, generateFinancialForecast } from '../../lib/aiToolsService';

const tabs = [
  { name: 'Business Plan', icon: FileText },
  { name: 'Market Research', icon: Search },
  { name: 'Financial Forecast', icon: TrendingUp },
];

const AIBusinessHubPage = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].name);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // State for each tool
  const [businessPlanInput, setBusinessPlanInput] = useState('');
  const [businessPlanOutput, setBusinessPlanOutput] = useState(null);
  const [marketResearchInput, setMarketResearchInput] = useState('');
  const [marketResearchOutput, setMarketResearchOutput] = useState(null);
  const [financialForecastInput, setFinancialForecastInput] = useState('');
  const [financialForecastOutput, setFinancialForecastOutput] = useState(null);

  const handleGenerate = async () => {
    setLoading(true);
    setError(null);
    const toastId = toast.loading(`Generating ${activeTab}...`);

    try {
      let result;
      if (activeTab === 'Business Plan') {
        result = await generateBusinessPlan({ description: businessPlanInput });
        setBusinessPlanOutput(result);
      } else if (activeTab === 'Market Research') {
        result = await performMarketResearch({ topic: marketResearchInput });
        setMarketResearchOutput(result);
      } else if (activeTab === 'Financial Forecast') {
        result = await generateFinancialForecast({ data: financialForecastInput });
        setFinancialForecastOutput(result);
      }
      toast.success(`${activeTab} generated successfully!`);
    } catch (err) {
      const errorMessage = err.response?.data?.message || `Failed to generate ${activeTab}.`;
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setLoading(false);
      toast.dismiss(toastId);
    }
  };

  const renderContent = () => {
    const content = {
        'Business Plan': (
            <div>
                <textarea value={businessPlanInput} onChange={(e) => setBusinessPlanInput(e.target.value)} className="w-full p-2 bg-gray-600 rounded-md" rows="4" placeholder="Describe your business idea..."></textarea>
                {businessPlanOutput && <pre className="mt-4 p-4 bg-gray-600 rounded-md whitespace-pre-wrap">{JSON.stringify(businessPlanOutput, null, 2)}</pre>}
            </div>
        ),
        'Market Research': (
            <div>
                <input type='text' value={marketResearchInput} onChange={(e) => setMarketResearchInput(e.target.value)} className="w-full p-2 bg-gray-600 rounded-md" placeholder="Enter a market or industry..."/>
                {marketResearchOutput && <pre className="mt-4 p-4 bg-gray-600 rounded-md whitespace-pre-wrap">{JSON.stringify(marketResearchOutput, null, 2)}</pre>}
            </div>
        ),
        'Financial Forecast': (
            <div>
                <textarea value={financialForecastInput} onChange={(e) => setFinancialForecastInput(e.target.value)} className="w-full p-2 bg-gray-600 rounded-md" rows="4" placeholder="Enter your financial data..."></textarea>
                {financialForecastOutput && <pre className="mt-4 p-4 bg-gray-600 rounded-md whitespace-pre-wrap">{JSON.stringify(financialForecastOutput, null, 2)}</pre>}
            </div>
        )
    };

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2 className="text-2xl font-semibold mb-4">{`AI ${activeTab} Generator`}</h2>
            <div className="bg-gray-700 p-6 rounded-lg">
                {content[activeTab]}
                <motion.button onClick={handleGenerate} disabled={loading} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mt-4 px-6 py-2 bg-purple-600 rounded-md flex items-center disabled:opacity-50">
                    {loading ? <><Loader className="animate-spin mr-2" /> Generating...</> : <><Zap className="inline-block mr-2" /> Generate</>}
                </motion.button>
                {error && <div className='text-red-400 mt-4 flex items-center'><AlertCircle className='mr-2'/>{error}</div>}
            </div>
        </motion.div>
    );
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
