// app/tools/community-learning/page.jsx
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { HeartHandshake, BookOpen, Users } from 'lucide-react';

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

const mentors = [
  { name: 'Jane Doe', expertise: 'Marketing', avatar: 'https://i.pravatar.cc/150?img=1' },
  { name: 'John Smith', expertise: 'Finance', avatar: 'https://i.pravatar.cc/150?img=2' },
  { name: 'Peter Jones', expertise: 'Product', avatar: 'https://i.pravatar.cc/150?img=3' },
];

export default function CommunityLearningPage() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="flex items-center space-x-4 mb-6">
        <HeartHandshake className="w-8 h-8 text-primary-600" />
        <h1 className="text-3xl font-bold text-gray-800">Community & Learning Hub</h1>
      </div>

      <p className="text-lg text-gray-600 mb-8">
        Connect with experienced mentors, participate in peer forums, and access a curated library of resources to accelerate your entrepreneurial journey.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Mentor Matching */}
        <motion.div className="bg-white p-6 rounded-lg shadow-lg" variants={itemVariants}>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Find a Mentor</h2>
          <motion.div className="space-y-4" variants={containerVariants}>
            {mentors.map((mentor, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                variants={itemVariants}
              >
                <div className="flex items-center space-x-4">
                  <img src={mentor.avatar} alt={mentor.name} className="w-12 h-12 rounded-full" />
                  <div>
                    <p className="font-bold text-gray-800">{mentor.name}</p>
                    <p className="text-sm text-gray-500">{mentor.expertise}</p>
                  </div>
                </div>
                <button className="bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition">
                  Connect
                </button>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Resource Library */}
        <motion.div className="bg-white p-6 rounded-lg shadow-lg" variants={itemVariants}>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Resource Library</h2>
          <motion.ul className="space-y-3" variants={containerVariants}>
            <motion.li className="flex items-center space-x-3" variants={itemVariants}>
              <BookOpen className="w-5 h-5 text-primary-500" />
              <a href="#" className="text-gray-700 hover:text-primary-600">Pitch Deck Templates</a>
            </motion.li>
            <motion.li className="flex items-center space-x-3" variants={itemVariants}>
              <BookOpen className="w-5 h-5 text-primary-500" />
              <a href="#" className="text-gray-700 hover:text-primary-600">Guide to Fundraising</a>
            </motion.li>
            <motion.li className="flex items-center space-x-3" variants={itemVariants}>
              <BookOpen className="w-5 h-5 text-primary-500" />
              <a href="#" className="text-gray-700 hover:text-primary-600">Startup Legal Basics</a>
            </motion.li>
          </motion.ul>
        </motion.div>
      </div>
    </motion.div>
  );
}
