// app/page.jsx
'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BarChart, Bot, Briefcase, FileText, HeartHandshake, Mic, Users } from 'lucide-react';

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
});

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      <header className="fixed top-0 left-0 w-full z-50 bg-gray-900/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center space-x-2"
            >
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-400">Sphere.AI</span>
            </motion.div>
            <nav className="hidden md:flex space-x-8">
              <Link href="#features" className="text-gray-300 hover:text-white">Features</Link>
              <Link href="#pricing" className="text-gray-300 hover:text-white">Pricing</Link>
              <Link href="#contact" className="text-gray-300 hover:text-white">Contact</Link>
            </nav>
            <div>
              <Link
                href="/dashboard"
                className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 font-bold shadow-lg transition"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="pt-24 relative">
        <div className="absolute inset-0 z-0">
          {/* Animated background shapes */}
        </div>
        <section className="text-center py-20 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-7xl font-extrabold mb-4"
          >
            The Future of Business is Here.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg text-gray-400 max-w-3xl mx-auto mb-8"
          >
            Sphere.AI is the world's most advanced AI-driven platform, empowering founders to build, manage, and scale their businesses with unparalleled intelligence.
          </motion.p>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link
              href="/dashboard"
              className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:scale-105 transform transition"
            >
              Unlock Your Potential 🚀
            </Link>
          </motion.div>
        </section>

        {/* Animated icons section */}
        <section className="py-20">
          <div className="flex justify-center space-x-12">
            <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate">
              <BarChart className="w-16 h-16 text-primary-400" />
            </motion.div>
            <motion.div variants={iconVariants(3)} initial="initial" animate="animate">
              <Bot className="w-16 h-16 text-secondary-400" />
            </motion.div>
            <motion.div variants={iconVariants(4)} initial="initial" animate="animate">
              <Briefcase className="w-16 h-16 text-primary-400" />
            </motion.div>
            <motion.div variants={iconVariants(3.5)} initial="initial" animate="animate">
              <FileText className="w-16 h-16 text-secondary-400" />
            </motion.div>
          </div>
        </section>

      </main>

      <footer className="py-8 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Sphere.AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
