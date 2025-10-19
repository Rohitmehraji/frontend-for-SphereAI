'use client';

import { usePathname } from 'next/navigation';
import Header from './Header';
import Sidebar from './Sidebar';

const PageWrapper = ({ children }) => {
  const pathname = usePathname();
  const isAuthPage = pathname === '/login' || pathname === '/signup' || pathname === '/';

  if (isAuthPage) {
    return <>{children}</>;
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1">
        {/* The Header could be part of the main content area in this layout */}
        {/* <Header /> */}
        <div className="p-8">
            {children}
        </div>
      </main>
    </div>
  );
};

export default PageWrapper;
