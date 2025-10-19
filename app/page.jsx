// app/page.jsx
'use client';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-indigo-700">Sphere.AI</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-indigo-600">Features</a>
              <a href="#pricing" className="text-gray-600 hover:text-indigo-600">Pricing</a>
              <a href="#contact" className="text-gray-600 hover:text-indigo-600">Contact</a>
            </nav>
            <div>
              <Link
                href="/dashboard"
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 font-bold shadow transition"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="pt-24">
        <section className="text-center py-20">
          <h1 className="text-5xl md:text-6xl font-extrabold text-indigo-800 mb-4">
            Unlock Your Business Potential with Sphere.AI
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            The ultimate AI-driven platform for founders and entrepreneurs to solve business-critical problems and accelerate growth.
          </p>
          <Link
            href="/dashboard"
            className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:scale-105 transform transition"
          >
            Start Your Free Trial 🚀
          </Link>
        </section>

        {/* Add other sections as needed, like features, testimonials, etc. */}

      </main>

      <footer className="bg-white py-8 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Sphere.AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
