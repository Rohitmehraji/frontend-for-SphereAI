// app/components/common/Header.jsx
'use client';
import Link from 'next/link';
import { UserCircle } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/dashboard" className="text-2xl font-bold text-indigo-700">
            Sphere.AI
          </Link>
          <div className="flex items-center space-x-4">
            <span className="text-gray-600">Welcome, Founder!</span>
            <UserCircle className="w-8 h-8 text-gray-500" />
          </div>
        </div>
      </div>
    </header>
  );
}
