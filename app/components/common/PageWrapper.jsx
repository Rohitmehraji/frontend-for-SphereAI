// app/components/common/PageWrapper.jsx
'use client';

export default function PageWrapper({ children }) {
  return (
    <div className="flex min-h-screen">
      <main className="flex-1 ml-64 p-8 bg-gray-50">
        <div className="mt-16">
          {children}
        </div>
      </main>
    </div>
  );
}
