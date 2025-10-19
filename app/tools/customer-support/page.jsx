// app/tools/customer-support/page.jsx
'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Bot, Smile } from 'lucide-react';

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

export default function CustomerSupportPage() {
  const [chatHistory, setChatHistory] = useState([
    { sender: 'bot', text: 'Hello! How can I help you today?' },
  ]);
  const [userInput, setUserInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSendMessage = () => {
    if (!userInput) return;
    setLoading(true);
    setChatHistory([...chatHistory, { sender: 'user', text: userInput }]);
    setUserInput('');
    // Simulate API call
    setTimeout(() => {
      setChatHistory([
        ...chatHistory,
        { sender: 'user', text: userInput },
        { sender: 'bot', text: 'Thank you for your question. Here is a helpful article...' },
      ]);
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
        <MessageSquare className="w-8 h-8 text-secondary-600" />
        <h1 className="text-3xl font-bold text-gray-800">Customer Support Automation</h1>
      </div>

      <p className="text-lg text-gray-600 mb-8">
        Deploy a 24/7 AI chatbot to handle customer queries, automate ticket handling, and gain sentiment insights from customer interactions.
      </p>

      <motion.div className="bg-white p-6 rounded-lg shadow-lg" variants={itemVariants}>
        <h2 className="text-xl font-semibold text-gray-700 mb-4">AI Chatbot Demo</h2>
        <div className="border rounded-lg h-96 flex flex-col">
          <div className="flex-grow p-4 space-y-4 overflow-y-auto">
            {chatHistory.map((message, index) => (
              <motion.div
                key={index}
                className={`flex ${message.sender === 'bot' ? 'justify-start' : 'justify-end'}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className={`p-3 rounded-lg ${message.sender === 'bot' ? 'bg-gray-200' : 'bg-secondary-500 text-white'}`}>
                  {message.text}
                </div>
              </motion.div>
            ))}
          </div>
          <div className="p-4 border-t flex space-x-4">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-grow p-2 border rounded-lg focus:ring-2 focus:ring-secondary-500"
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <button
              onClick={handleSendMessage}
              disabled={loading}
              className="bg-secondary-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-secondary-700 transition disabled:bg-secondary-300"
            >
              Send
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
