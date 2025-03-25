
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { LogIn, LogOut, UserPlus } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

interface NavigationItem {
  name: string;
  path: string;
  icon: React.ReactNode;
}

interface MobileNavigationProps {
  isOpen: boolean;
  navigationLinks: NavigationItem[];
}

export const MobileNavigation = ({ isOpen, navigationLinks }: MobileNavigationProps) => {
  const location = useLocation();
  const { user, isAuthenticated, logout } = useAuth();

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
      className="md:hidden glass-effect border-t border-white/10"
    >
      <div className="px-4 py-5 space-y-4">
        {navigationLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
              location.pathname === link.path
                ? "bg-white/10 text-white"
                : "text-muted-foreground hover:bg-white/5 hover:text-white"
            }`}
          >
            <span>{link.icon}</span>
            <span>{link.name}</span>
          </Link>
        ))}
        
        {/* Auth Links (Mobile) */}
        {isAuthenticated ? (
          <div className="border-t border-white/10 pt-4 mt-4">
            <div className="px-4 py-2">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-study-purple text-white flex items-center justify-center">
                  {user?.name?.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className="text-sm font-medium">{user?.name}</p>
                  <p className="text-xs text-muted-foreground">{user?.role}</p>
                </div>
              </div>
            </div>
            <button
              onClick={logout}
              className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-red-500 hover:bg-white/5"
            >
              <LogOut className="h-5 w-5" />
              <span>Log out</span>
            </button>
          </div>
        ) : (
          <div className="border-t border-white/10 pt-4 mt-4 space-y-2">
            <Link
              to="/login"
              className="flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors text-muted-foreground hover:bg-white/5 hover:text-white"
            >
              <LogIn className="h-5 w-5" />
              <span>Login</span>
            </Link>
            <Link
              to="/register"
              className="flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors bg-study-purple/20 text-study-purple hover:bg-study-purple/30"
            >
              <UserPlus className="h-5 w-5" />
              <span>Register</span>
            </Link>
          </div>
        )}
      </div>
    </motion.div>
  );
};
