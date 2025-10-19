'use client';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ReactMarkdown from 'react-markdown';
import { generateContent } from '../../../services/aiToolsService';

export default function ContentGeneratorTool() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);
  const userName = 'Sphere User';
  const userAvatar = 'https://api.dicebear.com/7.x/bottts/svg?seed=aiwriter';
  const userEmail = 'sphere@yourdomain.com';
  const isProUser = false;

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const res = await generateContent({ prompt: input });
      setOutput(res.data?.result || "Here’s some fresh AI content!");
      toast.success("Content generated!");
    } catch (err) {
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-100 to-white flex flex-col items-center py-8 relative">
      <div className="flex justify-between w-full max-w-2xl px-4 mt-2 mb-2">
        <div className="flex items-center gap-3 bg-white rounded-full shadow px-5 py-2">
          <img src={userAvatar} alt="User" className="w-10 h-10 rounded-full border-2 border-emerald-400" />
          <div className="flex flex-col">
            <span className="font-bold text-emerald-700">{userName}</span>
            <span className="text-xs text-gray-500">{userEmail}</span>
          </div>
        </div>
      </div>
      <div className="w-full max-w-2xl bg-white/90 rounded-2xl p-8 shadow-xl flex flex-col items-center">
        <div className="flex items-center gap-2">
          <span className="text-5xl mb-0">📝</span>
          <h1 className="text-3xl font-bold text-emerald-700 mb-3">Content Generator</h1>
        </div>
        <p className="text-lg mb-5 text-slate-600 text-center">Let AI create articles, posts, or copy—just say what you need!</p>
        <textarea className="w-full p-3 rounded-lg border text-lg resize-y mb-4"
          rows={4}
          placeholder="What content do you want?"
          value={input} onChange={e => setInput(e.target.value)} />
        <button className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-8 py-2 rounded-lg font-bold shadow-md transition mb-6" onClick={handleGenerate} disabled={loading}>
          {loading ? "Writing..." : "Generate"}
        </button>
        {output && (
          <div className="w-full bg-gray-100 rounded-xl p-5 mt-2 border border-emerald-200 animate-fade-in">
            <h2 className="text-xl font-semibold mb-2 text-emerald-700">Result:</h2>
            <ReactMarkdown className="prose">{output}</ReactMarkdown>
          </div>
        )}
      </div>
      <iframe
        src="https://sphereai-chatbot-widget-url.example.com"
        title="Chatbot"
        className="fixed bottom-6 right-6 w-80 h-96 rounded-2xl shadow-2xl border-2 border-emerald-700 z-50"
        style={{ background: 'white' }}
      />
    </div>
  );
}
