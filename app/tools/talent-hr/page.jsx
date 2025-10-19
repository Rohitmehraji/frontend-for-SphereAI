'use client';

import { motion } from 'framer-motion';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { Users, FileText, UserCheck } from 'lucide-react';

// Mock Data
const employeeData = [
  { subject: 'Communication', A: 85, fullMark: 100 },
  { subject: 'Teamwork', A: 90, fullMark: 100 },
  { subject: 'Leadership', A: 75, fullMark: 100 },
  { subject: 'Problem Solving', A: 95, fullMark: 100 },
  { subject: 'Productivity', A: 80, fullMark: 100 },
];

const onboardingTasks = [
    { text: "Sign HR Documents", completed: true },
    { text: "Set up Developer Environment", completed: true },
    { text: "Complete Security Training", completed: false },
    { text: "Meet with Mentor", completed: false },
];

const TalentHRPage = () => {
  return (
    <div className="p-8 bg-gray-900 text-white min-h-screen">
      <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        Talent & HR Optimization
      </motion.h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recruitment AI */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4 flex items-center"><FileText className="mr-2"/>Recruitment AI</h2>
          <div className="border-2 border-dashed border-gray-600 p-10 text-center rounded-lg">
            <p className="text-gray-400">Drag & Drop Resumes Here</p>
            <button className="mt-4 px-4 py-2 bg-purple-600 rounded-md">Or Upload Files</button>
          </div>
          <div className="mt-4">
              <h3 className="font-semibold">Analysis Results:</h3>
              <p className="text-sm text-gray-400 mt-2">No files analyzed yet.</p>
          </div>
        </motion.div>

        {/* Employee Analytics */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-gray-800 p-6 rounded-lg h-96">
          <h2 className="text-xl font-semibold mb-4 flex items-center"><Users className="mr-2"/>Employee Analytics</h2>
          <ResponsiveContainer>
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={employeeData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis />
              <Radar name="Performance" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
            </RadarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Onboarding Automation */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="lg:col-span-2 bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4 flex items-center"><UserCheck className="mr-2"/>Onboarding Automation</h2>
          <p className="text-sm mb-4">Onboarding progress for <span className="font-bold">New Developer Hire</span>:</p>
            <div className="space-y-3">
                {onboardingTasks.map((task, i) => (
                    <div key={i} className={`bg-gray-700 p-3 rounded-md flex items-center ${task.completed ? 'line-through text-gray-500' : ''}`}>
                        <input type="checkbox" checked={task.completed} readOnly className="form-checkbox h-5 w-5 bg-gray-600 text-purple-500 rounded focus:ring-0 mr-3"/>
                        <p>{task.text}</p>
                    </div>
                ))}
            </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TalentHRPage;
