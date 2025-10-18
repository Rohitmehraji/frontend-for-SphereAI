'use client';
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import ReactMarkdown from 'react-markdown';
import { handleCustomerSupport } from '../../../services/aiToolsService';

export default function CustomerSupportTool() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);
  const userName = 'Sphere User';
  const userAvatar = 'https://api.dicebear.com/7.x/bottts/svg?seed=supportai';
  const userEmail = 'sphere@yourdomain.com';
  const isProUser = false;

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const res = await handleCustomerSupport({ prompt: input });
      setOutput(res.data?.result || "AI support response generated!");
      toast.success("Response ready!");
    } catch (err) {
      toast.error("Please try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-white flex flex-col items-center py-8 relative">
      <Toaster />
      <div className="flex justify-between w-full max-w-2xl px-4 mt-2 mb-2">
        <div className="flex items-center gap-3 bg-white rounded-full shadow px-5 py-2">
          <img src={userAvatar} alt="User" className="w-10 h-10 rounded-full border-2 border-yellow-400" />
          <div className="flex flex-col">
            <span className="font-bold text-yellow-700">{userName}</span>
            <span className="text-xs text-gray-500">{userEmail}</span>
          </div>
        </div>
      </div>
      <div className="w-full max-w-2xl bg-white/90 rounded-2xl p-8 shadow-xl flex flex-col items-center">
        <div className="flex items-center gap-2">
          <span className="text-5xl mb-0">🧑‍💼</span>
          <h1 className="text-3xl font-bold text-yellow-600 mb-3">Customer Support AI</h1>
        </div>
        <p className="text-lg mb-5 text-slate-700 text-center">Describe any customer query or use-case for instant AI support.</p>
        <textarea className="w-full p-3 rounded-lg border text-lg resize-y mb-4"
          rows={4}
          placeholder="Ask your support question..."
          value={input} onChange={e => setInput(e.target.value)} />
        <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-8 py-2 rounded-lg font-bold shadow-md transition mb-6" onClick={handleGenerate} disabled={loading}>
          {loading ? "Thinking..." : "Get Response"}
        </button>
        {output && (
          <div className="w-full bg-yellow-50 rounded-xl p-5 mt-2 border border-yellow-200 animate-fade-in">
            <h2 className="text-xl font-semibold mb-2 text-yellow-700">Result:</h2>
            <ReactMarkdown className="prose">{output}</ReactMarkdown>
          </div>
        )}
      </div>
      <iframe
        src="https://sphereai-chatbot-widget-url.example.com"
        title="Chatbot"
        className="fixed bottom-6 right-6 w-80 h-96 rounded-2xl shadow-2xl border-2 border-yellow-400 z-50"
        style={{ background: 'white' }}
      />
    </div>
  );
}
