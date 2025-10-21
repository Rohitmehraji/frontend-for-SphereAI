'use client';
import React, { useState } from 'react';
import PaymentModal from '../components/PaymentModal';
import UsageStats from '../components/UsageStats';
import { Toaster } from 'react-hot-toast';


export default function Dashboard() {
  const [showPayment, setShowPayment] = useState(false);
<h1 className="text-6xl bg-red-500 font-extrabold p-8">
  THIS IS A TAILWIND TEST
</h1>

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-200">
      <Toaster />
      {/* Profile and Pro Badge */}
      <div className="flex justify-end w-full pr-10 pt-6 mb-3">
        <div className="flex items-center gap-3 bg-white rounded-full shadow px-5 py-2">
          <img
            src="https://api.dicebear.com/7.x/bottts/svg?seed=sphereai"
            alt="Profile"
            className="w-10 h-10 rounded-full border-2 border-indigo-400"
          />
          <div className="flex flex-col text-left">
            <span className="font-bold text-indigo-700 text-lg tracking-tight">Welcome, Sphere User</span>
            <span className="text-xs text-gray-500">sphere@yourdomain.com</span>
          </div>
          <span className="inline-flex items-center bg-gradient-to-tr from-yellow-400 to-orange-600 text-white text-xs font-bold px-2 py-1 rounded-full ml-2 animate-bounce shadow">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2l2.39 4.848 5.36.78-3.876 3.78.916 5.345L10 13.898l-4.79 2.525.916-5.344L2.25 7.629l5.36-.78L10 2z" /></svg>
            PRO
          </span>
        </div>
      </div>
      <header className="py-5 text-center">
        <h1 className="text-4xl font-extrabold text-indigo-700 mb-2 drop-shadow">AI Tools Dashboard</h1>
        <p className="text-lg text-black/70 mb-4 max-w-2xl mx-auto">Choose from SphereAI’s best tools to grow your business with AI superpowers and stunning productivity features.</p>
        <button
          onClick={() => setShowPayment(true)}
          className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-purple-700 font-bold shadow transition text-base"
        >
          Upgrade or Buy Credits 🚀
        </button>
      </header>
      {/* Tool cards */}
      <div className="flex flex-wrap justify-center gap-8 mt-8">
        {[
          { name: "Business Plan", route: "/tools/business-plan", color: "bg-purple-100", emoji: "📈", pro: true },
          { name: "Chatbot Builder", route: "/tools/chatbot-builder", color: "bg-blue-100", emoji: "🤖", pro: true },
          { name: "Content Generator", route: "/tools/content-generator", color: "bg-emerald-100", emoji: "📝", pro: false },
          { name: "Customer Support", route: "/tools/customer-support", color: "bg-yellow-50", emoji: "🧑‍💼", pro: false },
          { name: "Financial Forecast", route: "/tools/financial-forecast", color: "bg-pink-100", emoji: "💸", pro: true },
          { name: "Market Research", route: "/tools/market-research", color: "bg-cyan-100", emoji: "📊", pro: false },
          { name: "Pitch Deck", route: "/tools/pitch-deck", color: "bg-orange-100", emoji: "🎤", pro: true },
          { name: "Task Manager", route: "/tools/task-manager", color: "bg-lime-100", emoji: "📆", pro: false },
          { name: "Time Manager", route: "/tools/time-manager", color: "bg-fuchsia-100", emoji: "⏳", pro: false },
        ].map(tool => (
          <a
            key={tool.name}
            href={tool.route}
            className={`w-64 h-36 rounded-xl flex flex-col items-center justify-center shadow-md hover:scale-105 transition-all ${tool.color} text-xl font-semibold mb-2 relative group`}
          >
            <span className="text-4xl mb-2 drop-shadow">{tool.emoji}</span>
            <span>{tool.name}</span>
            {tool.pro && (
              <span className="absolute top-2 right-3 bg-gradient-to-tr from-yellow-400 to-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow flex items-center gap-1 group-hover:scale-110 transition">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2l2.39 4.848 5.36.78-3.876 3.78.916 5.345L10 13.898l-4.79 2.525.916-5.344L2.25 7.629l5.36-.78L10 2z" /></svg>
                PRO
              </span>
            )}
          </a>
        ))}
      </div>

      {/* Usage Graph - Paste at end of dashboard */}
      <UsageStats usage={[8, 19, 21, 17, 25, 34, 15]} />

      {/* Payment Modal */}
      {showPayment && <PaymentModal onClose={() => setShowPayment(false)} />}
    </div>
  );
}
