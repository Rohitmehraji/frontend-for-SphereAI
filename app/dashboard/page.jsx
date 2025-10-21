'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { Activity, DollarSign, BrainCircuit, Zap, Users, AlertCircle } from 'lucide-react';
import { getDashboardKPIs, getRevenueChartData, getUserGrowthData, getActivityFeed } from '../../lib/dashboardService';

const KPI_CARDS_CONFIG = [
  { key: 'aiGenerations', title: 'AI Generations', icon: BrainCircuit, color: 'text-purple-400' },
  { key: 'projectsCreated', title: 'Projects Created', icon: Zap, color: 'text-green-400' },
  { key: 'tasksCompleted', title: 'Tasks Completed', icon: Activity, color: 'text-blue-400' },
  { key: 'potentialSavings', title: 'Potential Savings', icon: DollarSign, color: 'text-yellow-400', format: 'currency' },
];

const SkeletonLoader = () => (
  <div className="bg-gray-800 p-6 rounded-lg shadow-lg animate-pulse">
    <div className="h-8 bg-gray-700 rounded w-3/4 mb-4"></div>
    <div className="h-4 bg-gray-700 rounded w-1/2"></div>
  </div>
);

const ChartSkeleton = () => (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg animate-pulse h-[300px] w-full"></div>
)

const Dashboard = () => {
  const [kpis, setKpis] = useState(null);
  const [revenueData, setRevenueData] = useState(null);
  const [userGrowthData, setUserGrowthData] = useState(null);
  const [activity, setActivity] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [kpiData, revenueData, userGrowth, activityData] = await Promise.all([
          getDashboardKPIs(),
          getRevenueChartData(),
          getUserGrowthData(),
          getActivityFeed(),
        ]);
        setKpis(kpiData);
        setRevenueData(revenueData);
        setUserGrowthData(userGrowth);
        setActivity(activityData);
      } catch (err) {
        setError('Failed to load dashboard data. Please try again later.');
        console.error(err);
      }
    };
    fetchData();
  }, []);

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center text-red-400">
          <AlertCircle className="w-12 h-12 mx-auto mb-4" />
          <h2 className="text-2xl font-bold">An Error Occurred</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-8 bg-gray-900 text-white min-h-screen">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
      >
        Founder's Dashboard
      </motion.h1>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {kpis ? (
          KPI_CARDS_CONFIG.map((config, index) => (
            <motion.div
              key={config.key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg flex items-center justify-between"
            >
              <div>
                <p className="text-sm text-gray-400">{config.title}</p>
                <p className="text-3xl font-bold">
                  {config.format === 'currency' && '$'}
                  {kpis[config.key].toLocaleString()}
                </p>
              </div>
              <config.icon className={`w-12 h-12 ${config.color}`} />
            </motion.div>
          ))
        ) : (
          Array.from({ length: 4 }).map((_, i) => <SkeletonLoader key={i} />)
        )}
      </div>

      {/* Charts and Activity Feed */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-2 bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-xl font-semibold mb-4">Revenue Growth</h2>
          <div style={{ width: '100%', height: 300 }}>
            {revenueData ? (
                <ResponsiveContainer>
                <AreaChart data={revenueData}>
                    <defs>
                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                    </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#4a5568" />
                    <XAxis dataKey="name" stroke="#a0aec0" />
                    <YAxis stroke="#a0aec0" />
                    <Tooltip contentStyle={{ backgroundColor: '#1a202c', border: '1px solid #4a5568' }} />
                    <Area type="monotone" dataKey="revenue" stroke="#8884d8" fillOpacity={1} fill="url(#colorRevenue)" />
                </AreaChart>
                </ResponsiveContainer>
            ) : <ChartSkeleton />}
          </div>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
            >
            <h2 className="text-xl font-semibold mb-4">User Growth</h2>
            <div style={{ width: '100%', height: 300 }}>
                {userGrowthData ? (
                <ResponsiveContainer>
                    <BarChart data={userGrowthData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#4a5568" />
                    <XAxis dataKey="name" stroke="#a0aec0" />
                    <YAxis stroke="#a0aec0" />
                    <Tooltip contentStyle={{ backgroundColor: '#1a202c', border: '1px solid #4a5568' }} />
                    <Bar dataKey="users" fill="#82ca9d" />
                    </BarChart>
                </ResponsiveContainer>
                 ) : <ChartSkeleton />}
            </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="lg:col-span-3 bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <ul className="space-y-4">
            {activity ? (
              activity.map(item => (
                <li key={item.id} className="flex items-start text-sm">
                  <div className="w-8 h-8 rounded-full bg-purple-500 flex-shrink-0 mr-3 flex items-center justify-center font-bold">
                    {item.user.charAt(0)}
                  </div>
                  <div>
                    <p className="text-gray-300">
                      <span className="font-bold">{item.user}</span> {item.action}
                    </p>
                    <p className="text-xs text-gray-500">{item.timestamp}</p>
                  </div>
                </li>
              ))
            ) : (
                <p className='text-gray-400'>Loading activity...</p>
            )}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
