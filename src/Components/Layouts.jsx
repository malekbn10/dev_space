import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation';
import { Toaster } from 'react-hot-toast';

export default function Layouts() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Navigation />
      <Toaster position="top-right" toastOptions={{ duration: 3000 }} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
      <Outlet />
      </main>
    </div>
  );
}