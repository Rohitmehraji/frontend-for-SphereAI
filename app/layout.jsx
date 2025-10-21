import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import PageWrapper from '../components/PageWrapper';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Sphere.AI - The Ultimate AI Platform for Founders',
  description: 'Solve all your business-critical problems with AI-driven tools for business intelligence, finance, marketing, and more.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900`}>
        <Toaster position="top-center" reverseOrder={false} />
        <PageWrapper>
            {children}
        </PageWrapper>
      </body>
    </html>
  );
}
