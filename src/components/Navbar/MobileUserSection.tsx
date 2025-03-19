
import { Link } from "react-router-dom";
import { LogIn, LogOut, UserPlus } from "lucide-react";
import { User } from "@/contexts/AuthContext";

interface MobileUserSectionProps {
  user: User | null;
  isAuthenticated: boolean;
  logout: () => void;
}

const MobileUserSection = ({ user, isAuthenticated, logout }: MobileUserSectionProps) => {
  if (isAuthenticated) {
    return (
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
    );
  }

  return (
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
  );
};

export default MobileUserSection;
