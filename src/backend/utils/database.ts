
import { User, users } from "../models/User";
import { Note, notes } from "../models/Notes";

// This file simulates a database with in-memory storage
// In a real application, this would connect to a real database

// Generic database operations
export const db = {
  // User operations
  users: {
    findAll: (): User[] => {
      return [...users];
    },
    
    findById: (id: string): User | undefined => {
      return users.find(user => user.id === id);
    },
    
    findByEmail: (email: string): User | undefined => {
      return users.find(user => user.email === email);
    },
    
    create: (userData: Omit<User, "id" | "createdAt">): User => {
      const newUser: User = {
        ...userData,
        id: (users.length + 1).toString(),
        createdAt: new Date().toISOString(),
      };
      
      users.push(newUser);
      return newUser;
    },
    
    update: (id: string, userData: Partial<Omit<User, "id" | "createdAt">>): User | undefined => {
      const index = users.findIndex(user => user.id === id);
      
      if (index === -1) {
        return undefined;
      }
      
      users[index] = {
        ...users[index],
        ...userData,
      };
      
      return users[index];
    },
    
    delete: (id: string): boolean => {
      const index = users.findIndex(user => user.id === id);
      
      if (index === -1) {
        return false;
      }
      
      users.splice(index, 1);
      return true;
    }
  },
  
  // Note operations
  notes: {
    findAll: (): Note[] => {
      return [...notes];
    },
    
    findById: (id: string): Note | undefined => {
      return notes.find(note => note.id === id);
    },
    
    findByCategory: (category: string): Note[] => {
      return notes.filter(note => category === "all" || note.category === category);
    },
    
    search: (searchTerm: string): Note[] => {
      if (!searchTerm) {
        return [...notes];
      }
      
      const term = searchTerm.toLowerCase();
      return notes.filter(
        note => note.title.toLowerCase().includes(term) || 
                note.description.toLowerCase().includes(term)
      );
    },
    
    create: (noteData: Omit<Note, "id" | "createdAt">, userId: string): Note => {
      const newNote: Note = {
        ...noteData,
        id: (notes.length + 1).toString(),
        createdBy: userId,
        createdAt: new Date().toISOString(),
      };
      
      notes.push(newNote);
      return newNote;
    },
    
    update: (id: string, noteData: Partial<Omit<Note, "id" | "createdAt">>): Note | undefined => {
      const index = notes.findIndex(note => note.id === id);
      
      if (index === -1) {
        return undefined;
      }
      
      notes[index] = {
        ...notes[index],
        ...noteData,
      };
      
      return notes[index];
    },
    
    delete: (id: string): boolean => {
      const index = notes.findIndex(note => note.id === id);
      
      if (index === -1) {
        return false;
      }
      
      notes.splice(index, 1);
      return true;
    }
  }
};
