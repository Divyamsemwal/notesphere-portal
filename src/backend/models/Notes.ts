
export interface Note {
  id: string;
  title: string;
  description: string;
  category: string;
  downloadUrl: string;
  viewUrl: string;
  createdBy: string;
  createdAt: string;
}

// Mock notes data
export const notes: Note[] = [
  {
    id: "1",
    title: "Data Structures and Algorithms",
    description: "Comprehensive notes on DSA including arrays, linked lists, trees, and graphs.",
    category: "computer-science",
    downloadUrl: "/sample-notes/dsa-notes.pdf",
    viewUrl: "https://drive.google.com/file/d/1piA8SNrO-VP6pWXiorJuKRN7cO4AnIRi/view?usp=drivesdk",
    createdBy: "2", // Teacher ID
    createdAt: new Date().toISOString(),
  },
  {
    id: "2",
    title: "Object-Oriented Programming",
    description: "Complete guide to OOP concepts, inheritance, polymorphism, and encapsulation.",
    category: "computer-science",
    downloadUrl: "/sample-notes/oop-notes.pdf",
    viewUrl: "https://example.com/view/oop-notes",
    createdBy: "2", // Teacher ID
    createdAt: new Date().toISOString(),
  },
  {
    id: "3",
    title: "Calculus I",
    description: "Detailed notes on limits, derivatives, and integrals with practice problems.",
    category: "mathematics",
    downloadUrl: "/sample-notes/calculus-notes.pdf",
    viewUrl: "https://example.com/view/calculus-notes",
    createdBy: "2", // Teacher ID
    createdAt: new Date().toISOString(),
  }
];
