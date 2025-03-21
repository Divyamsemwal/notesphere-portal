
import { authService } from "../services/authService";
import { ApiResponse } from "../utils/apiResponse";
import { User } from "../models/User";

export const authController = {
  login: (email: string, password: string): ApiResponse<{ user: User; token: string }> => {
    return authService.login(email, password);
  },
  
  register: (name: string, email: string, password: string, role: "student" | "teacher"): ApiResponse<{ user: User; token: string }> => {
    return authService.register(name, email, password, role);
  },
  
  validateToken: (token: string): ApiResponse<User> => {
    return authService.validateToken(token);
  }
};
