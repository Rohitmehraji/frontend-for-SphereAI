// app/tools/talent-hr/page.jsx
'use client';
import React, { useState } from 'react';
import { Users, UserPlus, TrendingUp } from 'lucide-react';

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
    <div>
      <div className="flex items-center space-x-4 mb-6">
        <Users className="w-8 h-8 text-cyan-600" />
        <h1 className="text-3xl font-bold text-gray-800">Talent & HR Optimization</h1>
      </div>

      <p className="text-lg text-gray-600 mb-8">
        Streamline recruitment with AI-powered candidate screening, analyze employee performance, and automate onboarding processes.
      </p>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">HR Analytics</h2>
        <div className="flex items-center space-x-4 mb-4">
          <select
            value={analysisType}
            onChange={(e) => setAnalysisType(e.target.value)}
            className="p-3 border rounded-lg"
          >
            <option value="candidate-screening">Candidate Screening</option>
            <option value="employee-performance">Employee Performance</option>
            <option value="onboarding-automation">Onboarding Automation</option>
          </select>
          <button
            onClick={handleAnalyze}
            disabled={loading}
            className="bg-cyan-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-cyan-700 transition disabled:bg-cyan-300"
          >
            {loading ? 'Analyzing...' : <><TrendingUp className="w-5 h-5 inline-block mr-2" />Analyze Data</>}
          </button>
        </div>

        {analysisResult && (
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">{analysisResult.title}</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-800">{analysisResult.summary}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
