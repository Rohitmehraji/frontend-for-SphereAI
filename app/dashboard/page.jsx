'use client';

import { motion } from 'framer-motion';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Activity, DollarSign, BrainCircuit, Zap } from 'lucide-react';

// Mock Data
const kpiData = [
  { title: 'AI Generations', value: '1,204', icon: BrainCircuit, color: 'text-purple-400' },
  { title: 'Projects Created', value: '78', icon: Zap, color: 'text-green-400' },
  { title: 'Tasks Completed', value: '452', icon: Activity, color: 'text-blue-400' },
  { title: 'Potential Savings', value: '$12,300', icon: DollarSign, color: 'text-yellow-400' },
];

const engagementData = [
  { name: 'Mon', value: 400 },
  { name: 'Tue', value: 300 },
  { name: 'Wed', value: 600 },
  { name: 'Thu', value: 800 },
  { name: 'Fri', value: 700 },
  { name: 'Sat', value: 900 },
  { name: 'Sun', value: 1200 },
];

const activityFeed = [
    { id: 1, user: 'You', action: 'generated a new financial forecast.', time: '2m ago' },
    { id: 2, user: 'AI Assistant', action: 'summarized the Q3 sales meeting.', time: '1h ago' },
    { id: 3, user: 'You', action: 'created a new marketing email campaign.', time: '3h ago' },
    { id: 4, user: 'You', action: 'onboarded a new team member.', time: 'yesterday' },
];

const Dashboard = () => {
  return (
    <div className="p-4 sm:p-8 bg-gray-900 text-white min-h-screen">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
      >
        Dashboard
      </motion.h1>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {kpiData.map((kpi, index) => (
          <motion.div
            key={kpi.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gray-800 p-6 rounded-lg shadow-lg flex items-center justify-between"
          >
            <div>
              <p className="text-sm text-gray-400">{kpi.title}</p>
              <p className="text-3xl font-bold">{kpi.value}</p>
            </div>
            <kpi.icon className={`w-12 h-12 ${kpi.color}`} />
          </motion.div>
        ))}
      </div>

      {/* Main Chart and Activity Feed */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-2 bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-xl font-semibold mb-4">User Engagement</h2>
          <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
              <AreaChart data={engagementData}>
                <defs>
                  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#4a5568" />
                <XAxis dataKey="name" stroke="#a0aec0" />
                <YAxis stroke="#a0aec0" />
                <Tooltip contentStyle={{ backgroundColor: '#1a202c', border: '1px solid #4a5568' }} />
                <Area type="monotone" dataKey="value" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-xl font-semibold mb-4">Activity Feed</h2>
          <ul className="space-y-4">
            {activityFeed.map(item => (
              <li key={item.id} className="flex items-start text-sm">
                <div className="w-8 h-8 rounded-full bg-purple-500 flex-shrink-0 mr-3"></div>
                <div>
                  <p className="text-gray-300">
                    <span className="font-bold">{item.user}</span> {item.action}
                  </p>
                  <p className="text-xs text-gray-500">{item.time}</p>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
