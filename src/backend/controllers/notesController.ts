
import { notesService } from "../services/notesService";
import { ApiResponse } from "../utils/apiResponse";
import { Note } from "../models/Notes";

export const notesController = {
  getAllNotes: (): ApiResponse<Note[]> => {
    return notesService.getAllNotes();
  },
  
  getNotesByCategory: (category: string): ApiResponse<Note[]> => {
    return notesService.getNotesByCategory(category);
  },
  
  searchNotes: (searchTerm: string): ApiResponse<Note[]> => {
    return notesService.searchNotes(searchTerm);
  },
  
  addNote: (noteData: Omit<Note, "id" | "createdAt">, userId: string): ApiResponse<Note> => {
    return notesService.addNote(noteData, userId);
  }
};
