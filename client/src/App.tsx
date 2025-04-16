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
  const { theme } = useTheme();
  
  useEffect(() => {
    // Initialize animations when the page loads
    checkInView();

    // Check for animations when scrolling
    window.addEventListener("scroll", checkInView);
    return () => {
      window.removeEventListener("scroll", checkInView);
    };
  }, []);

  return (
    <>
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
