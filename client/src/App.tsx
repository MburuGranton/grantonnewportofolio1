import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
import { useEffect } from "react";
import { useTheme } from "@/context/theme-context";
import { checkInView } from "@/lib/animation";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function AppContent() {
  const { theme, toggleTheme } = useTheme();
  
  useEffect(() => {
    // Initialize animations when the page loads
    checkInView();

    // Check for animations when scrolling
    window.addEventListener("scroll", checkInView);
    return () => {
      window.removeEventListener("scroll", checkInView);
    };
  }, []);

  // Debug theme in console when it changes
  useEffect(() => {
    console.log("App component theme:", theme);
    console.log("HTML element has dark class:", document.documentElement.classList.contains("dark"));
  }, [theme]);

  // Manual theme debug function
  const forceToggleTheme = () => {
    console.log("Force toggling theme from:", theme);
    toggleTheme();
    
    // Force toggle class for debugging
    const isDark = document.documentElement.classList.contains("dark");
    if (isDark) {
      document.documentElement.classList.remove("dark");
      console.log("Removed dark class");
    } else {
      document.documentElement.classList.add("dark");
      console.log("Added dark class");
    }
  };

  return (
    <>
      {/* Debug button - only visible in development */}
      <button 
        onClick={forceToggleTheme}
        style={{
          position: "fixed",
          bottom: "10px",
          right: "10px",
          zIndex: 9999,
          background: "#ff5555",
          color: "white",
          border: "none",
          padding: "5px 10px",
          borderRadius: "4px",
          cursor: "pointer",
          fontSize: "12px"
        }}
      >
        Debug Theme ({theme})
      </button>
      <Router />
      <Toaster />
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContent />
    </QueryClientProvider>
  );
}

export default App;
