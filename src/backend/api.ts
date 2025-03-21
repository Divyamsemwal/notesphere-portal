
import { authController } from "./controllers/authController";
import { notesController } from "./controllers/notesController";

// This is a mock API client that simulates API requests to a backend server
export const api = {
  auth: {
    login: (email: string, password: string) => {
      // Simulate network request delay
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(authController.login(email, password));
        }, 1000);
      });
    },
    
    register: (name: string, email: string, password: string, role: "student" | "teacher") => {
      // Simulate network request delay
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(authController.register(name, email, password, role));
        }, 1500);
      });
    },
    
    validateToken: (token: string) => {
      // Simulate network request delay
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(authController.validateToken(token));
        }, 800);
      });
    }
  },
  
  notes: {
    getAll: () => {
      // Simulate network request delay
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(notesController.getAllNotes());
        }, 1000);
      });
    },
    
    getByCategory: (category: string) => {
      // Simulate network request delay
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(notesController.getNotesByCategory(category));
        }, 1000);
      });
    },
    
    search: (searchTerm: string) => {
      // Simulate network request delay
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(notesController.searchNotes(searchTerm));
        }, 800);
      });
    },
    
    add: (noteData, userId) => {
      // Simulate network request delay
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(notesController.addNote(noteData, userId));
        }, 1500);
      });
    }
  }
};
