import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation';

export default function Layout() {
  return (
    <div>
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
    </div>
  );
}