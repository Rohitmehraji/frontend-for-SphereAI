'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
    LayoutDashboard, PieChart, BarChart2, MessageCircle, ClipboardCheck, Users, Menu, X, DollarSign, BrainCircuit, Briefcase, CreditCard, ShoppingCart
} from 'lucide-react';

const navLinks = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'AI Business Hub', href: '/tools/ai-business-hub', icon: BrainCircuit },
  { name: 'Financial Suite', href: '/tools/financial-suite', icon: DollarSign },
  { name: 'Sales & Marketing', href: '/tools/sales-marketing', icon: ShoppingCart },
  { name: 'Customer Support', href: '/tools/customer-support', icon: MessageCircle },
  { name: 'Productivity', href: '/tools/productivity-workflow', icon: ClipboardCheck },
  { name: 'Talent & HR', href: '/tools/talent-hr', icon: Users },
  { name: 'Billing', href: '/tools/billing', icon: CreditCard },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const sidebarVariants = {
    open: { x: 0, transition: { type: 'spring', stiffness: 300, damping: 30 } },
    closed: { x: '-100%', transition: { type: 'spring', stiffness: 300, damping: 30 } },
  };

  const NavContent = () => (
    <nav className="flex flex-col p-4">
      <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-10">
        Sphere.AI
      </div>
      <ul className="space-y-2">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link href={link.href}>
              <div className={`flex items-center p-3 rounded-lg cursor-pointer transition-colors ${
                  pathname === link.href
                    ? 'bg-purple-600 text-white'
                    : 'text-gray-300 hover:bg-gray-700'
                }`}
              >
                <link.icon className="mr-3" />
                {link.name}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );

  return (
    <>
      {/* Mobile Menu Button */}
      <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-gray-800 rounded-md">
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={sidebarVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="lg:hidden fixed inset-y-0 left-0 w-64 bg-gray-800 z-40 shadow-xl"
          >
            <NavContent />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar */}
      <div className="hidden lg:block w-64 bg-gray-800 min-h-screen shadow-lg">
        <NavContent />
      </div>
    </>
  );
};

export default Sidebar;
