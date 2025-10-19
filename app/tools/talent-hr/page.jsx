// app/tools/talent-hr/page.jsx
'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, UserPlus, TrendingUp } from 'lucide-react';

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

export default function TalentHrPage() {
  const [analysisType, setAnalysisType] = useState('candidate-screening');
  const [analysisResult, setAnalysisResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      if (analysisType === 'candidate-screening') {
        setAnalysisResult({
          title: 'Candidate Screening Summary',
          summary: 'Analyzed 50 resumes. Top candidates: Alice (95% match), Bob (92% match), Carol (88% match).',
        });
      } else if (analysisType === 'employee-performance') {
        setAnalysisResult({
          title: 'Employee Performance Insights',
          summary: 'Top performers in Q3: Team Alpha. Key achievements in marketing and sales departments.',
        });
      } else {
        setAnalysisResult({
          title: 'Onboarding Plan',
          summary: 'Generated a 30-day onboarding plan for new software engineers, including mentorship and training modules.',
        });
      }
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
        <Users className="w-8 h-8 text-secondary-600" />
        <h1 className="text-3xl font-bold text-gray-800">Talent & HR Optimization</h1>
      </div>

      <p className="text-lg text-gray-600 mb-8">
        Streamline recruitment with AI-powered candidate screening, analyze employee performance, and automate onboarding processes.
      </p>

      <motion.div className="bg-white p-6 rounded-lg shadow-lg" variants={itemVariants}>
        <h2 className="text-xl font-semibold text-gray-700 mb-4">HR Analytics</h2>
        <div className="flex items-center space-x-4 mb-4">
          <select
            value={analysisType}
            onChange={(e) => setAnalysisType(e.target.value)}
            className="p-3 border rounded-lg focus:ring-2 focus:ring-secondary-500"
          >
            <option value="candidate-screening">Candidate Screening</option>
            <option value="employee-performance">Employee Performance</option>
            <option value="onboarding-automation">Onboarding Automation</option>
          </select>
          <button
            onClick={handleAnalyze}
            disabled={loading}
            className="bg-secondary-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-secondary-700 transition disabled:bg-secondary-300"
          >
            {loading ? 'Analyzing...' : <><TrendingUp className="w-5 h-5 inline-block mr-2" />Analyze Data</>}
          </button>
        </div>

        {analysisResult && (
          <motion.div
            className="mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <h3 className="text-lg font-semibold text-gray-700 mb-4">{analysisResult.title}</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-800">{analysisResult.summary}</p>
            </div>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}
