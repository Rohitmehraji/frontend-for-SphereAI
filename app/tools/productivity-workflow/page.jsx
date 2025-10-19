'use client';

import { motion } from 'framer-motion';
import { CheckSquare, FileText, Bot, Zap, Plus, ArrowRight } from 'lucide-react';

// Mock Data
const tasks = [
  { id: 1, text: 'Draft Q4 marketing report', priority: 'High' },
  { id: 2, text: 'Follow up with Innovate Inc.', priority: 'Medium' },
  { id: 3, text: 'Prepare for Friday team sync', priority: 'Low' },
  { id: 4, text: 'Review new landing page copy', priority: 'High' },
];

const meetingSummaries = [
    {id: 1, title: "Q3 Sales Strategy", summary: "Key takeaways included focusing on enterprise clients and expanding a marketing..."},
    {id: 2, title: "Product Roadmap Sync", summary: "Discussed prioritizing the new AI features and pushing back the UI refresh..."},
];

const ProductivityWorkflowPage = () => {
    const getPriorityClass = (priority) => {
        if (priority === 'High') return 'border-l-4 border-red-500';
        if (priority === 'Medium') return 'border-l-4 border-yellow-500';
        return 'border-l-4 border-green-500';
    }
  return (
    <div className="p-8 bg-gray-900 text-white min-h-screen">
      <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        Productivity & Workflow
      </motion.h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* AI-Powered Tasks */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4 flex items-center"><CheckSquare className="mr-2"/>AI-Powered Tasks</h2>
            <div className="space-y-3">
                {tasks.map(task => (
                    <div key={task.id} className={`bg-gray-700 p-3 rounded-md flex justify-between items-center ${getPriorityClass(task.priority)}`}>
                        <p>{task.text}</p>
                        <input type="checkbox" className="form-checkbox h-5 w-5 bg-gray-600 text-purple-500 rounded focus:ring-0"/>
                    </div>
                ))}
            </div>
            <div className="mt-4 flex">
                <input type="text" placeholder="Add a new task..." className="flex-grow bg-gray-600 p-2 rounded-l-md"/>
                <button className="bg-purple-600 px-4 py-2 rounded-r-md"><Plus /></button>
            </div>
        </motion.div>

        {/* Meeting Summaries */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4 flex items-center"><Bot className="mr-2"/>Meeting Summaries</h2>
          <div className="space-y-4">
              {meetingSummaries.map(meeting => (
                  <div key={meeting.id} className="bg-gray-700 p-4 rounded-md">
                      <h3 className="font-bold">{meeting.title}</h3>
                      <p className="text-sm text-gray-400">{meeting.summary}</p>
                  </div>
              ))}
          </div>
        </motion.div>

        {/* Workflow Builder */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4 flex items-center"><Zap className="mr-2"/>Workflow Builder (Demo)</h2>
          <div className="flex items-center justify-around p-4 bg-gray-700 rounded-lg">
              <div className="text-center">
                  <div className="bg-purple-500 p-3 rounded-lg">New Lead</div>
              </div>
              <ArrowRight className="text-gray-400"/>
              <div className="text-center">
                  <div className="bg-blue-500 p-3 rounded-lg">Send Email</div>
              </div>
              <ArrowRight className="text-gray-400"/>
              <div className="text-center">
                  <div className="bg-green-500 p-3 rounded-lg">Follow Up</div>
              </div>
          </div>
        </motion.div>

        {/* Document Generator */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4 flex items-center"><FileText className="mr-2"/>Document Generator</h2>
          <select className="w-full bg-gray-700 p-2 rounded-md mb-2">
            <option>Business Report</option>
            <option>Invoice</option>
            <option>Legal Agreement</option>
          </select>
          <textarea placeholder="Provide key details for the document..." className="w-full bg-gray-700 p-2 rounded-md h-24"></textarea>
          <button className="mt-2 px-4 py-2 bg-purple-600 rounded-md">Generate Document</button>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductivityWorkflowPage;
