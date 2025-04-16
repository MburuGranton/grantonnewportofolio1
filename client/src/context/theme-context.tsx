import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

// Create a default value to prevent undefined errors
const defaultThemeContext: ThemeContextType = {
  theme: "light",
  toggleTheme: () => {}
};

const ThemeContext = createContext<ThemeContextType>(defaultThemeContext);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<Theme>("light");

  // Run this effect only on client side to prevent hydration errors
  useEffect(() => {
    setMounted(true);
    // Check if theme is stored in localStorage
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    // Check if user has a system preference
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    // Set theme based on stored preference, system preference, or default to light
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
    setTheme(initialTheme);
    
    // Apply theme to document
    if (initialTheme === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    // Update localStorage when theme changes
    localStorage.setItem("theme", theme);
    
    // Update the document element class for CSS theme switching
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
  };

  // Prevent content flash by rendering children only after mounting
  if (!mounted) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  return context;
}