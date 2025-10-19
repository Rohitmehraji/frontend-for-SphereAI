// app/dashboard/page.jsx
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, DollarSign, Zap, TrendingUp, Users, Target } from 'lucide-react';

// Mock data for demonstration
const kpiData = [
  { title: 'ROI Impact', value: '$12,450', icon: DollarSign, change: '+15%', changeType: 'increase' },
  { title: 'Efficiency Gain', value: '24%', icon: Zap, change: '+5%', changeType: 'increase' },
  { title: 'Tasks Automated', value: '1,280', icon: TrendingUp, change: '+80', changeType: 'increase' },
  { title: 'Active Projects', value: '12', icon: Target, change: '-1', changeType: 'decrease' },
];

const moduleProgress = [
    { name: "AI Business Intelligence Hub", progress: 75, color: "bg-primary-500" },
    { name: "Automated Financial Suite", progress: 60, color: "bg-secondary-500" },
    { name: "Sales & Marketing Automation", progress: 85, color: "bg-primary-500" },
    { name: "Customer Support Automation", progress: 40, color: "bg-secondary-500" },
    { name: "Productivity & Workflow Orchestration", progress: 90, color: "bg-primary-500" },
    { name: "Talent & HR Optimization", progress: 50, color: "bg-secondary-500" },
    { name: "Community & Learning Hub", progress: 20, color: "bg-primary-500" },
];

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

export default function Dashboard() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Welcome back, Founder!</h1>

      {/* KPI Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        variants={containerVariants}
      >
        {kpiData.map((kpi, index) => (
          <motion.div key={index} className="bg-white p-6 rounded-lg shadow-lg" variants={itemVariants}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">{kpi.title}</p>
                <p className="text-2xl font-bold text-gray-800">{kpi.value}</p>
                <p className={`text-sm ${kpi.changeType === 'increase' ? 'text-green-500' : 'text-red-500'}`}>
                  {kpi.change} vs last month
                </p>
              </div>
              <div className="bg-primary-100 p-3 rounded-full">
                <kpi.icon className="w-6 h-6 text-primary-600" />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Main Analytics Chart */}
      <motion.div className="bg-white p-6 rounded-lg shadow-lg mb-8" variants={itemVariants}>
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Overall Performance</h2>
        {/* Placeholder for a chart library like Recharts or Chart.js */}
        <div className="h-64 bg-gray-100 rounded-md flex items-center justify-center">
          <BarChart className="w-12 h-12 text-gray-400" />
          <p className="ml-4 text-gray-500">Advanced, animated analytics chart would be displayed here.</p>
        </div>
      </motion.div>

      {/* Module Progress Tracking */}
      <motion.div variants={itemVariants}>
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Module Progress</h2>
        <motion.div className="space-y-4" variants={containerVariants}>
          {moduleProgress.map((module, index) => (
            <motion.div key={index} className="bg-white p-4 rounded-lg shadow-lg" variants={itemVariants}>
              <div className="flex justify-between items-center mb-2">
                <p className="font-semibold text-gray-700">{module.name}</p>
                <p className="text-sm font-medium text-gray-600">{module.progress}%</p>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <motion.div
                  className={module.color + " h-2.5 rounded-full"}
                  initial={{ width: 0 }}
                  animate={{ width: `${module.progress}%` }}
                  transition={{ duration: 0.8 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
