// app/tools/productivity-workflow/page.jsx
'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Zap, FilePlus } from 'lucide-react';

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

export default function ProductivityWorkflowPage() {
  const [documentType, setDocumentType] = useState('meeting-summary');
  const [generatedDocument, setGeneratedDocument] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      if (documentType === 'meeting-summary') {
        setGeneratedDocument('**Meeting Summary**\\n\\n**Date:** 2023-10-27\\n\\n**Attendees:** John, Jane, Bob\\n\\n**Key Points:**\\n- Discussed Q4 roadmap\\n- Agreed on new marketing strategy');
      } else if (documentType === 'project-plan') {
        setGeneratedDocument('**Project Plan**\\n\\n**Project Name:** New Feature Launch\\n\\n**Timeline:** 4 weeks\\n\\n**Milestones:**\\n- Week 1: Design\\n- Week 2: Development');
      } else {
        setGeneratedDocument('**Task List**\\n\\n- [ ] Finalize budget\\n- [ ] Onboard new hire\\n- [ ] Schedule team offsite');
      }
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
        <Briefcase className="w-8 h-8 text-primary-600" />
        <h1 className="text-3xl font-bold text-gray-800">Productivity & Workflow Orchestration</h1>
      </div>

      <p className="text-lg text-gray-600 mb-8">
        Automate routine tasks, generate meeting summaries, and build custom workflows to streamline your operations and boost productivity.
      </p>

      <motion.div className="bg-white p-6 rounded-lg shadow-lg" variants={itemVariants}>
        <h2 className="text-xl font-semibold text-gray-700 mb-4">AI Document Generator</h2>
        <div className="flex items-center space-x-4 mb-4">
          <select
            value={documentType}
            onChange={(e) => setDocumentType(e.target.value)}
            className="p-3 border rounded-lg focus:ring-2 focus:ring-primary-500"
          >
            <option value="meeting-summary">Meeting Summary</option>
            <option value="project-plan">Project Plan</option>
            <option value="task-list">Task List</option>
          </select>
          <button
            onClick={handleGenerate}
            disabled={loading}
            className="bg-primary-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-primary-700 transition disabled:bg-primary-300"
          >
            {loading ? 'Generating...' : <><FilePlus className="w-5 h-5 inline-block mr-2" />Generate Document</>}
          </button>
        </div>

        {generatedDocument && (
          <motion.div
            className="mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Generated Document</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <pre className="whitespace-pre-wrap text-gray-800">{generatedDocument}</pre>
            </div>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}
