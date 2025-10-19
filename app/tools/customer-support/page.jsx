// app/tools/customer-support/page.jsx
'use client';
import React, { useState } from 'react';
import { MessageSquare, Bot, Smile } from 'lucide-react';

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
    <div>
      <div className="flex items-center space-x-4 mb-6">
        <MessageSquare className="w-8 h-8 text-yellow-600" />
        <h1 className="text-3xl font-bold text-gray-800">Customer Support Automation</h1>
      </div>

      <p className="text-lg text-gray-600 mb-8">
        Deploy a 24/7 AI chatbot to handle customer queries, automate ticket handling, and gain sentiment insights from customer interactions.
      </p>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">AI Chatbot Demo</h2>
        <div className="border rounded-lg h-96 flex flex-col">
          <div className="flex-grow p-4 space-y-4 overflow-y-auto">
            {chatHistory.map((message, index) => (
              <div key={index} className={`flex ${message.sender === 'bot' ? 'justify-start' : 'justify-end'}`}>
                <div className={`p-3 rounded-lg ${message.sender === 'bot' ? 'bg-gray-200' : 'bg-blue-500 text-white'}`}>
                  {message.text}
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 border-t flex space-x-4">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-grow p-2 border rounded-lg"
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <button
              onClick={handleSendMessage}
              disabled={loading}
              className="bg-yellow-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-yellow-700 transition disabled:bg-yellow-300"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
