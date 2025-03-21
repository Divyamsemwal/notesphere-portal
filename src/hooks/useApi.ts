
import { useState } from "react";
import { api } from "../backend/api";
import { useAuth } from "@/contexts/AuthContext";

// Custom hook to interact with the backend API
export const useApi = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuth();
  
  // Generic function to handle API calls
  const callApi = async <T,>(
    apiFunction: (...args: any[]) => Promise<any>,
    ...args: any[]
  ): Promise<T | null> => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await apiFunction(...args);
      
      if (!response.success) {
        setError(response.error || "An error occurred");
        return null;
      }
      
      return response.data as T;
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unexpected error occurred");
      return null;
    } finally {
      setIsLoading(false);
    }
  };
  
  // Auth-related API calls
  const login = (email: string, password: string) => {
    return callApi(api.auth.login, email, password);
  };
  
  const register = (name: string, email: string, password: string, role: "student" | "teacher") => {
    return callApi(api.auth.register, name, email, password, role);
  };
  
  // Notes-related API calls
  const getNotes = () => {
    return callApi(api.notes.getAll);
  };
  
  const getNotesByCategory = (category: string) => {
    return callApi(api.notes.getByCategory, category);
  };
  
  const searchNotes = (searchTerm: string) => {
    return callApi(api.notes.search, searchTerm);
  };
  
  const addNote = (noteData: any) => {
    if (!user) {
      setError("You must be logged in to add notes");
      return Promise.resolve(null);
    }
    
    // Use the user.id from the User type in backend/models/User.ts
    return callApi(api.notes.add, noteData, user.id);
  };
  
  return {
    isLoading,
    error,
    login,
    register,
    getNotes,
    getNotesByCategory,
    searchNotes,
    addNote
  };
};
