
import { createContext, useContext, useState, useEffect } from "react";
import { authService } from "@/backend/services/authService";
import { User } from "@/backend/models/User";

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isTeacher: boolean;
  isStudent: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    // Check localStorage for existing token
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      // Validate the token with our mock backend
      const response = authService.validateToken(storedToken);
      if (response.success) {
        setUser(response.data);
        setToken(storedToken);
      } else {
        // Clear invalid token
        localStorage.removeItem("token");
      }
    }
  }, []);

  const login = async (email: string, password: string) => {
    const response = authService.login(email, password);
    
    if (response.success) {
      setUser(response.data.user);
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      return true;
    }
    
    return false;
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isTeacher: user?.role === "teacher",
        isStudent: user?.role === "student",
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
