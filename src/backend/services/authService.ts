
import { User } from "../models/User";
import { db } from "../utils/database";
import { ApiResponse, successResponse, errorResponse } from "../utils/apiResponse";

// Mock authentication service
export const authService = {
  login: (email: string, password: string): ApiResponse<{ user: User; token: string }> => {
    // In a real app, we would validate the password
    const user = db.users.findByEmail(email);
    
    if (!user) {
      return errorResponse("Invalid credentials", "Authentication failed");
    }
    
    // Generate a mock token (in a real app, this would be a JWT)
    const token = `mock-token-${user.id}-${Date.now()}`;
    
    return successResponse({ user, token }, "Login successful");
  },
  
  register: (name: string, email: string, password: string, role: "student" | "teacher"): ApiResponse<{ user: User; token: string }> => {
    // Check if user already exists
    if (db.users.findByEmail(email)) {
      return errorResponse("Email already in use", "Registration failed");
    }
    
    // Create a new user
    const newUser = db.users.create({
      name,
      email,
      role
    });
    
    // Generate a mock token
    const token = `mock-token-${newUser.id}-${Date.now()}`;
    
    return successResponse({ user: newUser, token }, "Registration successful");
  },
  
  validateToken: (token: string): ApiResponse<User> => {
    // Mock token validation
    if (!token || !token.startsWith("mock-token-")) {
      return errorResponse("Invalid token", "Authentication failed");
    }
    
    // Extract user ID from token
    const parts = token.split("-");
    const userId = parts[2];
    
    const user = db.users.findById(userId);
    
    if (!user) {
      return errorResponse("User not found", "Authentication failed");
    }
    
    return successResponse(user, "Token valid");
  }
};
