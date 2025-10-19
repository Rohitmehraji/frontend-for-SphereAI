'use client';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ReactMarkdown from 'react-markdown';
import { manageTime } from '../../../services/aiToolsService';

export default function TimeManagerTool() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);
  const userName = 'Sphere User';
  const userAvatar = 'https://api.dicebear.com/7.x/bottts/svg?seed=timeai';
  const userEmail = 'sphere@yourdomain.com';
  const isProUser = false;

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const res = await manageTime({ prompt: input });
      setOutput(res.data?.result || "Here's your optimized schedule!");
      toast.success("Time managed!");
    } catch (err) {
      toast.error("Schedule failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-fuchsia-100 to-white flex flex-col items-center py-8 relative">
      <div className="flex justify-between w-full max-w-2xl px-4 mt-2 mb-2">
        <div className="flex items-center gap-3 bg-white rounded-full shadow px-5 py-2">
          <img src={userAvatar} alt="User" className="w-10 h-10 rounded-full border-2 border-fuchsia-400" />
          <div className="flex flex-col">
            <span className="font-bold text-fuchsia-700">{userName}</span>
            <span className="text-xs text-gray-500">{userEmail}</span>
          </div>
        </div>
      </div>
      <div className="w-full max-w-2xl bg-white/90 rounded-2xl p-8 shadow-xl flex flex-col items-center">
        <div className="flex items-center gap-2">
          <span className="text-5xl mb-0">⏳</span>
          <h1 className="text-3xl font-bold text-fuchsia-700 mb-3">Time Manager</h1>
        </div>
        <p className="text-lg mb-5 text-slate-600 text-center">Optimize your daily, weekly, or project schedules instantly.</p>
        <textarea className="w-full p-3 rounded-lg border text-lg resize-y mb-4"
          rows={4}
          placeholder="Describe your time management challenge"
          value={input} onChange={e => setInput(e.target.value)} />
        <button className="bg-gradient-to-r from-fuchsia-400 to-purple-600 text-white px-8 py-2 rounded-lg font-bold shadow-md transition mb-6" onClick={handleGenerate} disabled={loading}>
          {loading ? "Organizing..." : "Organize My Time"}
        </button>
        {output && (
          <div className="w-full bg-gray-100 rounded-xl p-5 mt-2 border border-fuchsia-200 animate-fade-in">
            <h2 className="text-xl font-semibold mb-2 text-fuchsia-700">Result:</h2>
            <ReactMarkdown className="prose">{output}</ReactMarkdown>
          </div>
        )}
      </div>
      <iframe
        src="https://sphereai-chatbot-widget-url.example.com"
        title="Chatbot"
        className="fixed bottom-6 right-6 w-80 h-96 rounded-2xl shadow-2xl border-2 border-fuchsia-700 z-50"
        style={{ background: 'white' }}
      />
    </div>
  );
}
