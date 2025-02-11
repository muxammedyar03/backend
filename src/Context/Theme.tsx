import React, { createContext, useState, useContext, ReactNode } from 'react';
import { TChildren, Theme, TThemeVariables } from '../utils/types';

// Define the theme styles
export const themeVariables : TThemeVariables = {
  light: {
    background: 'bg-gray-100',
    text: 'text-zinc-800',
    secondaryText: 'text-zinc-600',
    secondaryBg: 'bg-gray-50',
    borderSecondary: "border border-gray-200",
    card: 'bg-white',
    input: 'bg-gray-50 border-gray-300',
    button: 'bg-blue-600 hover:bg-blue-500 text-white disabled:bg-blue-500 disabled:hover:bg-blue-500',
    buttonSecondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800',
    solidButton: 'bg-white hover:bg-gray-200 text-gray-800 disabled:hover:bg-white disabled:text-gray-500 cursor-pointer transition-all',
  },
  dark: {
    background: 'bg-gray-900',
    text: 'text-gray-100',
    secondaryText: 'text-zinc-400',
    borderSecondary: "border border-gray-800",
    secondaryBg: 'bg-[#151e31]',
    card: 'bg-gray-800',
    input: 'bg-gray-700 border-gray-600',
    button: 'bg-blue-500 hover:bg-blue-600 text-white disabled:bg-blue-500 disabled:hover:bg-blue-500',
    buttonSecondary: 'bg-gray-700 hover:bg-gray-600 text-gray-100',
    solidButton: 'bg-gray-800 hover:bg-gray-700 text-white disabled:bg-gray-800 disabled:text-gray-400 cursor-pointer transition-all',
  },
};

// Create the context with default values
export const ThemeContext = createContext<{
  theme: Theme;
  toggleTheme: () => void;
}>({
  theme: 'light', 
  toggleTheme: () => {},
});

// ThemeProvider component
export const ThemeProvider:React.FC<TChildren> = ({ children}) => {
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme
export const useTheme = () => useContext(ThemeContext);
