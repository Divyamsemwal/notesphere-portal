
import { User } from "../models/User";

export const authenticateUser = (token: string): User | null => {
  // In a real backend, this would verify a JWT token
  // For mock purposes, we'll just check if the token exists
  if (!token || token === "invalid") {
    return null;
  }
  
  // Mock user lookup based on token
  // In a real implementation, you would decode the JWT and get the user ID
  return {
    id: "1",
    name: "Test Student",
    email: "student@example.com",
    role: "student",
    createdAt: new Date().toISOString(),
  };
};

export const authorizeRole = (user: User, roles: Array<"student" | "teacher">): boolean => {
  if (!user) return false;
  return roles.includes(user.role);
};
