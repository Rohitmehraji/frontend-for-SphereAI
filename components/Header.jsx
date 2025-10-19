'use client';

import { motion } from 'framer-motion';
import { Bell, User } from 'lucide-react';
import Link from 'next/link';

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-gray-800 text-white p-4 flex justify-between items-center shadow-md"
    >
      <Link href="/dashboard">
          <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Sphere.AI
          </div>
      </Link>
      <div className="flex items-center space-x-6">
        <Bell className="cursor-pointer hover:text-purple-400" />
        <div className="flex items-center space-x-2">
            <User className="w-8 h-8 rounded-full bg-gray-600 p-1"/>
            <span className="text-sm">Welcome, User!</span>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
