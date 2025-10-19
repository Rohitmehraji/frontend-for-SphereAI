// app/components/common/Sidebar.jsx
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BarChart, Bot, Briefcase, FileText, HeartHandshake, Home, MessageSquare, Mic, Search, Settings, Users } from 'lucide-react';

const navLinks = [
  { href: '/dashboard', icon: Home, label: 'Dashboard' },
  { href: '/tools/business-intelligence', icon: BarChart, label: 'AI Business Intelligence' },
  { href: '/tools/financial-suite', icon: FileText, label: 'Automated Financial Suite' },
  { href: '/tools/sales-marketing', icon: Mic, label: 'Sales & Marketing Automation' },
  { href: '/tools/customer-support', icon: MessageSquare, label: 'Customer Support Automation' },
  { href: '/tools/productivity-workflow', icon: Briefcase, label: 'Productivity & Workflow' },
  { href: '/tools/talent-hr', icon: Users, label: 'Talent & HR Optimization' },
  { href: '/tools/community-learning', icon: HeartHandshake, label: 'Community & Learning Hub' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white shadow-md h-full fixed top-0 left-0 pt-20">
      <div className="p-4">
        <nav className="space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                pathname === link.href
                  ? 'bg-indigo-100 text-indigo-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <link.icon className="w-5 h-5" />
              <span>{link.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
}
