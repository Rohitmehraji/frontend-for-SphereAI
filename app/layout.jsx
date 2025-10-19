// app/layout.jsx
'use client';
import { Toaster } from 'react-hot-toast';
import { usePathname } from 'next/navigation';
import Header from './components/common/Header';
import Sidebar from './components/common/Sidebar';
import PageWrapper from './components/common/PageWrapper';
import './globals.css';

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isAppPage = pathname.startsWith('/tools') || pathname === '/dashboard';

  return (
    <html lang="en">
      <body>
        <Toaster />
        {isAppPage ? (
          <>
            <Header />
            <Sidebar />
            <PageWrapper>
              {children}
            </PageWrapper>
          </>
        ) : (
          children
        )}
      </body>
    </html>
  );
}
