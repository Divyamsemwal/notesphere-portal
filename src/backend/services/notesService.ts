
import { Note } from "../models/Notes";
import { db } from "../utils/database";
import { ApiResponse, successResponse, errorResponse } from "../utils/apiResponse";

export const notesService = {
  getAllNotes: (): ApiResponse<Note[]> => {
    const allNotes = db.notes.findAll();
    return successResponse(allNotes, "Notes retrieved successfully");
  },
  
  getNotesByCategory: (category: string): ApiResponse<Note[]> => {
    const filteredNotes = db.notes.findByCategory(category);
    return successResponse(filteredNotes, "Notes retrieved successfully");
  },
  
  searchNotes: (searchTerm: string): ApiResponse<Note[]> => {
    const filteredNotes = db.notes.search(searchTerm);
    return successResponse(filteredNotes, "Search results retrieved");
  },
  
  addNote: (noteData: Omit<Note, "id" | "createdAt">, userId: string): ApiResponse<Note> => {
    const newNote = db.notes.create(noteData, userId);
    return successResponse(newNote, "Note added successfully");
  },
  
  getNoteById: (id: string): ApiResponse<Note> => {
    const note = db.notes.findById(id);
    
    if (!note) {
      return errorResponse("Note not found", "Retrieval failed");
    }
    
    return successResponse(note, "Note retrieved successfully");
  },
  
  updateNote: (id: string, noteData: Partial<Omit<Note, "id" | "createdAt">>): ApiResponse<Note> => {
    const updatedNote = db.notes.update(id, noteData);
    
    if (!updatedNote) {
      return errorResponse("Note not found", "Update failed");
    }
    
    return successResponse(updatedNote, "Note updated successfully");
  },
  
  deleteNote: (id: string): ApiResponse<boolean> => {
    const result = db.notes.delete(id);
    
    if (!result) {
      return errorResponse("Note not found", "Deletion failed");
    }
    
    return successResponse(true, "Note deleted successfully");
  }
};
