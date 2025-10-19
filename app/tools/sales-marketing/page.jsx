// app/tools/sales-marketing/page.jsx
'use client';
import React, { useState } from 'react';
import { Mic, Mail, BarChart2 } from 'lucide-react';

export default function SalesMarketingPage() {
  const [contentType, setContentType] = useState('email');
  const [generatedContent, setGeneratedContent] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      if (contentType === 'email') {
        setGeneratedContent('Subject: Following Up!\n\nHi [Lead Name],\n\nJust wanted to follow up on our recent conversation...');
      } else if (contentType === 'social') {
        setGeneratedContent('Excited to announce our new feature! 🚀 #AI #Startup #Innovation');
      } else {
        setGeneratedContent('<h1>The Future of AI in Business</h1><p>Here is an in-depth article about the impact of AI...</p>');
      }
      setLoading(false);
    }, 1500);
  };

  return (
    <div>
      <div className="flex items-center space-x-4 mb-6">
        <Mic className="w-8 h-8 text-emerald-600" />
        <h1 className="text-3xl font-bold text-gray-800">Sales & Marketing Automation</h1>
      </div>

      <p className="text-lg text-gray-600 mb-8">
        Generate personalized email campaigns, social media content, and SEO-optimized articles with our powerful AI content generator.
      </p>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">AI Content Generation</h2>
        <div className="flex items-center space-x-4 mb-4">
          <select
            value={contentType}
            onChange={(e) => setContentType(e.target.value)}
            className="p-3 border rounded-lg"
          >
            <option value="email">Personalized Email</option>
            <option value="social">Social Media Post</option>
            <option value="seo">SEO Article</option>
          </select>
          <button
            onClick={handleGenerate}
            disabled={loading}
            className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-emerald-700 transition disabled:bg-emerald-300"
          >
            {loading ? 'Generating...' : <><Mail className="w-5 h-5 inline-block mr-2" />Generate Content</>}
          </button>
        </div>

        {generatedContent && (
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Generated Content</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <pre className="whitespace-pre-wrap text-gray-800">{generatedContent}</pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
