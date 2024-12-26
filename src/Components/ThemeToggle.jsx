import React from 'react';
import { Moon, Sun } from 'lucide-react';
import useThemes from './../Hooks/useThemes.ts'


export default function ThemeToggle() {
  const { theme, toggleTheme } = useThemes({});
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg hover:bg-primary-100 dark:hover:bg-primary-800 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
    </button>
  );
}