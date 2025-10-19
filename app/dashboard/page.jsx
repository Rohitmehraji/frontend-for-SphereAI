// app/dashboard/page.jsx
'use client';
import React from 'react';
import { BarChart, DollarSign, Zap, TrendingUp, Users, Target } from 'lucide-react';

// Mock data for demonstration
const kpiData = [
  { title: 'ROI Impact', value: '$12,450', icon: DollarSign, change: '+15%', changeType: 'increase' },
  { title: 'Efficiency Gain', value: '24%', icon: Zap, change: '+5%', changeType: 'increase' },
  { title: 'Tasks Automated', value: '1,280', icon: TrendingUp, change: '+80', changeType: 'increase' },
  { title: 'Active Projects', value: '12', icon: Target, change: '-1', changeType: 'decrease' },
];

const moduleProgress = [
    { name: "AI Business Intelligence Hub", progress: 75, color: "bg-purple-500" },
    { name: "Automated Financial Suite", progress: 60, color: "bg-blue-500" },
    { name: "Sales & Marketing Automation", progress: 85, color: "bg-emerald-500" },
    { name: "Customer Support Automation", progress: 40, color: "bg-yellow-500" },
    { name: "Productivity & Workflow Orchestration", progress: 90, color: "bg-pink-500" },
    { name: "Talent & HR Optimization", progress: 50, color: "bg-cyan-500" },
    { name: "Community & Learning Hub", progress: 20, color: "bg-orange-500" },
];

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Welcome back, Founder!</h1>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {kpiData.map((kpi, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">{kpi.title}</p>
              <p className="text-2xl font-bold text-gray-800">{kpi.value}</p>
              <p className={`text-sm ${kpi.changeType === 'increase' ? 'text-green-500' : 'text-red-500'}`}>
                {kpi.change} vs last month
              </p>
            </div>
            <div className="bg-indigo-100 p-3 rounded-full">
              <kpi.icon className="w-6 h-6 text-indigo-600" />
            </div>
          </div>
        ))}
      </div>

      {/* Main Analytics Chart */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Overall Performance</h2>
        {/* Placeholder for a chart library like Recharts or Chart.js */}
        <div className="h-64 bg-gray-100 rounded-md flex items-center justify-center">
          <BarChart className="w-12 h-12 text-gray-400" />
          <p className="ml-4 text-gray-500">Analytics chart would be displayed here.</p>
        </div>
      </div>

      {/* Module Progress Tracking */}
      <div>
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Module Progress</h2>
        <div className="space-y-4">
          {moduleProgress.map((module, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-2">
                <p className="font-semibold text-gray-700">{module.name}</p>
                <p className="text-sm font-medium text-gray-600">{module.progress}%</p>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className={module.color + " h-2.5 rounded-full"} style={{ width: `${module.progress}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
