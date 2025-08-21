
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useParams } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import WorkflowRunner from "./pages/WorkflowRunner";
import Layout from "./components/Layout";
import { AuthProvider } from "./components/auth/AuthProvider";

const queryClient = new QueryClient();

const WorkflowRedirect = () => {
  const { id } = useParams<{ id: string }>();
  return <Navigate to={`/workflow/${id}`} replace />;
};

// Universal workflow runner - handles all workflows via the registry

const App = () => (
  <div>
    <h1>Test App</h1>
    <p>If you can see this, React is working!</p>
  </div>
);

export default App;
