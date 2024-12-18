"use client";

import React, { createContext, useState, useContext, useEffect } from "react";
import { ThemeContextType } from "../@types/theme";

const ThemeContext = createContext<ThemeContextType | null>(null);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  // Check if window is defined (to prevent errors during server-side rendering)
  const isWindowDefined = typeof window !== "undefined";

  // Set prefersDarkMode based on the system's color scheme preference
  const prefersDarkMode = isWindowDefined
    ? window.matchMedia("(prefers-color-scheme: dark)").matches
    : true;

  const [isDarkMode, setDarkMode] = useState<boolean>(prefersDarkMode);

  useEffect(() => {
    // Update CSS variables when the theme changes
    document.documentElement.style.setProperty(
      "--foreground-rgb",
      isDarkMode ? "255, 255, 255" : "0, 0, 0",
    );
    document.documentElement.style.setProperty(
      "--background-start-rgb",
      isDarkMode ? "22, 28, 45" : "214, 219, 220",
    );
    document.documentElement.style.setProperty(
      "--background-end-rgb",
      isDarkMode ? "22, 28, 45" : "255, 255, 255",
      // isDarkMode ? "28, 36, 52" : "255, 255, 255",
      // isDarkMode ? "28, 34, 49" : "255, 255, 255",
    );
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  return useContext(ThemeContext);
};

export { ThemeProvider, useTheme };
