
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Index from "./pages/Index";
import Notes from "./pages/Notes";
import PreviousYears from "./pages/PreviousYears";
import Results from "./pages/Results";
import Schedule from "./pages/Schedule";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import WelcomePage from "./pages/WelcomePage";
import { useAuth } from "./contexts/AuthContext";

const queryClient = new QueryClient();

// Helper component to handle auth-based redirects
const AuthRedirect = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();
  
  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }
  
  return <>{children}</>;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AnimatePresence mode="wait">
            <Routes>
              {/* Public routes */}
              <Route path="/welcome" element={
                <AuthRedirect>
                  <WelcomePage />
                </AuthRedirect>
              } />
              <Route path="/login" element={
                <AuthRedirect>
                  <Login />
                </AuthRedirect>
              } />
              <Route path="/register" element={
                <AuthRedirect>
                  <Register />
                </AuthRedirect>
              } />
              <Route path="/" element={<Navigate to="/welcome" replace />} />
              
              {/* Protected routes - with Navbar */}
              <Route path="/dashboard" element={
                <ProtectedRoute>
                  <>
                    <Navbar />
                    <Index />
                  </>
                </ProtectedRoute>
              } />
              <Route path="/notes" element={
                <ProtectedRoute>
                  <>
                    <Navbar />
                    <Notes />
                  </>
                </ProtectedRoute>
              } />
              <Route path="/previous-years" element={
                <ProtectedRoute>
                  <>
                    <Navbar />
                    <PreviousYears />
                  </>
                </ProtectedRoute>
              } />
              <Route path="/results" element={
                <ProtectedRoute>
                  <>
                    <Navbar />
                    <Results />
                  </>
                </ProtectedRoute>
              } />
              <Route path="/schedule" element={
                <ProtectedRoute>
                  <>
                    <Navbar />
                    <Schedule />
                  </>
                </ProtectedRoute>
              } />
              
              {/* Catch-all route */}
              <Route path="*" element={
                <ProtectedRoute>
                  <>
                    <Navbar />
                    <NotFound />
                  </>
                </ProtectedRoute>
              } />
            </Routes>
          </AnimatePresence>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
