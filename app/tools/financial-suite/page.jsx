// app/tools/financial-suite/page.jsx
'use client';
import React, { useState } from 'react';
import { FileText, Upload, TrendingUp } from 'lucide-react';

export default function FinancialSuitePage() {
  const [reportType, setReportType] = useState('cash-flow');
  const [generatedReport, setGeneratedReport] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setGeneratedReport({
        title: `${reportType.replace('-', ' ')} Report`,
        period: 'Q3 2023',
        summary: 'Positive cash flow with strong revenue growth and controlled expenses.',
        data: [
          { month: 'July', revenue: 5000, expenses: 3000 },
          { month: 'August', revenue: 6200, expenses: 3500 },
          { month: 'September', revenue: 7500, expenses: 4000 },
        ],
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <div>
      <div className="flex items-center space-x-4 mb-6">
        <FileText className="w-8 h-8 text-blue-600" />
        <h1 className="text-3xl font-bold text-gray-800">Automated Financial Suite</h1>
      </div>

      <p className="text-lg text-gray-600 mb-8">
        Automate invoicing, expense management, and financial reporting to keep your business finances healthy and transparent.
      </p>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Financial Report Generator</h2>
        <div className="flex items-center space-x-4 mb-4">
          <select
            value={reportType}
            onChange={(e) => setReportType(e.target.value)}
            className="p-3 border rounded-lg"
          >
            <option value="cash-flow">Cash Flow Prediction</option>
            <option value="invoicing">Invoicing Summary</option>
            <option value="expense-management">Expense Management</option>
          </select>
          <button
            onClick={handleGenerate}
            disabled={loading}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition disabled:bg-blue-300"
          >
            {loading ? 'Generating...' : <><TrendingUp className="w-5 h-5 inline-block mr-2" />Generate Report</>}
          </button>
        </div>

        {generatedReport && (
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">{generatedReport.title} ({generatedReport.period})</h3>
            <p className="text-gray-600 mb-4">{generatedReport.summary}</p>
            {/* Placeholder for chart */}
            <div className="h-48 bg-gray-100 rounded-md flex items-center justify-center">
              <p className="text-gray-500">Chart for {generatedReport.title}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
