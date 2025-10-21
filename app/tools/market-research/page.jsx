'use client';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ReactMarkdown from 'react-markdown';
import { researchMarket } from '../../../services/aiToolsService';

export default function MarketResearchTool() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);
  const userName = 'Sphere User';
  const userAvatar = 'https://api.dicebear.com/7.x/bottts/svg?seed=marketai';
  const userEmail = 'sphere@yourdomain.com';
  const isProUser = false;

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const res = await researchMarket({ prompt: input });
      setOutput(res.result || "Your market research is ready!");
      toast.success("Insights loaded!");
    } catch (err) {
      toast.error("Try again, error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-100 to-white flex flex-col items-center py-8 relative">
      <div className="flex justify-between w-full max-w-2xl px-4 mt-2 mb-2">
        <div className="flex items-center gap-3 bg-white rounded-full shadow px-5 py-2">
          <img src={userAvatar} alt="User" className="w-10 h-10 rounded-full border-2 border-cyan-400" />
          <div className="flex flex-col">
            <span className="font-bold text-cyan-700">{userName}</span>
            <span className="text-xs text-gray-500">{userEmail}</span>
          </div>
        </div>
      </div>
      <div className="w-full max-w-2xl bg-white/90 rounded-2xl p-8 shadow-xl flex flex-col items-center">
        <div className="flex items-center gap-2">
          <span className="text-5xl mb-0">📊</span>
          <h1 className="text-3xl font-bold text-cyan-700 mb-3">Market Research</h1>
        </div>
        <p className="text-lg mb-5 text-slate-600 text-center">Describe your product/market for instant research and trends.</p>
        <textarea className="w-full p-3 rounded-lg border text-lg resize-y mb-4"
          rows={4}
          placeholder="Describe what to research"
          value={input} onChange={e => setInput(e.target.value)} />
        <button className="bg-gradient-to-r from-cyan-400 to-blue-600 text-white px-8 py-2 rounded-lg font-bold shadow-md transition mb-6" onClick={handleGenerate} disabled={loading}>
          {loading ? "Researching..." : "Get Insights"}
        </button>
        {output && (
          <div className="w-full bg-gray-100 rounded-xl p-5 mt-2 border border-cyan-200 animate-fade-in">
            <h2 className="text-xl font-semibold mb-2 text-cyan-700">Result:</h2>
            <ReactMarkdown className="prose">{output}</ReactMarkdown>
          </div>
        )}
      </div>
      <iframe
        src="https://sphereai-chatbot-widget-url.example.com"
        title="Chatbot"
        className="fixed bottom-6 right-6 w-80 h-96 rounded-2xl shadow-2xl border-2 border-cyan-700 z-50"
        style={{ background: 'white' }}
      />
    </div>
  );
}
