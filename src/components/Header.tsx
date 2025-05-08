import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface HeaderProps {
  title: string;
}

const MyHeader: React.FC<HeaderProps> = ({ title }) => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <header className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">{title}</h1>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {theme === 'dark' ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </button>
      </div>
    </header>
  );
};

export default MyHeader;