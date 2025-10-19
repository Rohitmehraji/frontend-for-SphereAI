'use client';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ReactMarkdown from 'react-markdown';
// Swap this import for the correct tool API:
import { generateBusinessPlan } from '../../../services/aiToolsService';

export default function BusinessPlanTool() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);

  // You could get this info from props or user context!
  const userName = 'Sphere User';
  const userAvatar = 'https://api.dicebear.com/7.x/bottts/svg?seed=sphereai';
  const userEmail = 'sphere@yourdomain.com';
  const isProUser = true; // Toggle according to your auth/data!

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const res = await generateBusinessPlan({ prompt: input });
      setOutput(res.data?.result || "Here’s your AI-powered plan!");
      toast.success("Generated successfully!");
    } catch (err) {
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white flex flex-col items-center py-8 relative">
      {/* Profile/Avatar Card with PRO badge */}
      <div className="flex justify-between w-full max-w-2xl px-4 mt-2 mb-2">
        <div className="flex items-center gap-3 bg-white rounded-full shadow px-5 py-2">
          <img src={userAvatar} alt="User" className="w-10 h-10 rounded-full border-2 border-indigo-400" />
          <div className="flex flex-col">
            <span className="font-bold text-indigo-700">{userName}</span>
            <span className="text-xs text-gray-500">{userEmail}</span>
          </div>
          {isProUser && (
            <span className="inline-flex items-center bg-gradient-to-tr from-yellow-400 to-orange-600 text-white text-xs font-bold px-2 py-1 rounded-full ml-2 animate-bounce shadow">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2l2.39 4.848 5.36.78-3.876 3.78.916 5.345L10 13.898l-4.79 2.525.916-5.344L2.25 7.629l5.36-.78L10 2z" /></svg>
              PRO
            </span>
          )}
        </div>
        {/* Optional: usage mini-bar or quick stats here */}
      </div>

      {/* Pro Feature Overlay */}
      {isProUser && (
        <div className="flex items-center gap-3 bg-gradient-to-r from-orange-200 to-yellow-100 border-2 border-yellow-300 rounded-xl px-6 py-2 mb-5 shadow">
          <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2l2.39 4.848 5.36.78-3.876 3.78.916 5.345L10 13.898l-4.79 2.525.916-5.344L2.25 7.629l5.36-.78L10 2z" /></svg>
          <div>
            <span className="font-bold text-yellow-700 text-lg">Pro Feature</span>
            <span className="block text-xs text-yellow-900">Enjoy unlimited usage and advanced AI on this tool!</span>
          </div>
        </div>
      )}

      {/* Main Card */}
      <div className="w-full max-w-2xl bg-white/90 rounded-2xl p-8 shadow-xl flex flex-col items-center">
        <div className="flex items-center gap-2">
          <span className="text-5xl mb-0">📈</span>
          <h1 className="text-3xl font-bold text-indigo-700 mb-3">Business Plan Generator</h1>
          {isProUser && (
            <span className="inline-flex items-center bg-gradient-to-tr from-yellow-400 to-orange-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2l2.39 4.848 5.36.78-3.876 3.78.916 5.345L10 13.898l-4.79 2.525.916-5.344L2.25 7.629l5.36-.78L10 2z" /></svg>
              PRO
            </span>
          )}
        </div>
        <p className="text-lg mb-5 text-slate-600 text-center">Automate your business plan—just describe your idea.</p>
        <textarea className="w-full p-3 rounded-lg border text-lg resize-y mb-4"
          rows={4}
          placeholder="Describe your business/idea"
          value={input} onChange={e => setInput(e.target.value)} />
        <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-2 rounded-lg font-bold shadow-md transition mb-6" onClick={handleGenerate} disabled={loading}>
          {loading ? "Generating..." : "Generate"}
        </button>
        {output && (
          <div className="w-full bg-gray-100 rounded-xl p-5 mt-2 border border-indigo-200 animate-fade-in">
            <h2 className="text-xl font-semibold mb-2 text-indigo-700">Result:</h2>
            <ReactMarkdown className="prose">{output}</ReactMarkdown>
          </div>
        )}
      </div>

      {/* Floating Chatbot Widget */}
      <iframe
        src="https://sphereai-chatbot-widget-url.example.com"
        title="Chatbot"
        className="fixed bottom-6 right-6 w-80 h-96 rounded-2xl shadow-2xl border-2 border-indigo-700 z-50"
        style={{ background: 'white' }}
      />
    </div>
  );
}
