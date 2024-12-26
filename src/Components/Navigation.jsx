import { Bell, Code2, Search } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import UserMenu from './UserMenu.tsx'
import  ThemeToggle  from './ThemeToggle'
import { useState } from 'react';
import { useAuth } from '../Hooks/useAuth.ts'

export function Navigation() {
  // const {userC} = useAuth();
  const token = localStorage.getItem('token')

  return (
    <nav className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-between h-16">
        <NavLink to="/" className="flex items-center space-x-2">
          <Code2 className="w-8 h-8 text-primary-600" />
          <span className="text-xl font-bold">DevSpace</span>
        </NavLink>

        <div className="flex items-center space-x-4">
         {token &&(
           <div className="relative">
           <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
           <input
             type="search"
             placeholder="Search..."
             className="pl-10 pr-4 py-2 w-64 rounded-lg bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500"
           />
         </div>
         )}
{token &&(
  <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <Bell className="w-5 h-5" />
          </button>
)}
          
          
          <ThemeToggle />
          <UserMenu />
        </div>
      </div>
    </div>
  </nav>
  )
}
