
import { Note, notes } from "../models/Notes";
import { ApiResponse, successResponse, errorResponse } from "../utils/apiResponse";

export const notesService = {
  getAllNotes: (): ApiResponse<Note[]> => {
    return successResponse(notes, "Notes retrieved successfully");
  },
  
  getNotesByCategory: (category: string): ApiResponse<Note[]> => {
    const filteredNotes = category === "all" 
      ? notes 
      : notes.filter(note => note.category === category);
      
    return successResponse(filteredNotes, "Notes retrieved successfully");
  },
  
  searchNotes: (searchTerm: string): ApiResponse<Note[]> => {
    if (!searchTerm) {
      return successResponse(notes, "All notes retrieved");
    }
    
    const term = searchTerm.toLowerCase();
    const filteredNotes = notes.filter(
      note => note.title.toLowerCase().includes(term) || 
              note.description.toLowerCase().includes(term)
    );
    
    return successResponse(filteredNotes, "Search results retrieved");
  },
  
  addNote: (noteData: Omit<Note, "id" | "createdAt">, userId: string): ApiResponse<Note> => {
    const newNote: Note = {
      ...noteData,
      id: (notes.length + 1).toString(),
      createdBy: userId,
      createdAt: new Date().toISOString(),
    };
    
    // In a real app, we would save to database
    notes.push(newNote);
    
    return successResponse(newNote, "Note added successfully");
  }
};
