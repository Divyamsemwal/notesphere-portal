
export interface User {
  id: string;
  name: string;
  email: string;
  role: "student" | "teacher";
  createdAt: string;
}

// In a real backend, this would connect to a database
export const users: User[] = [
  {
    id: "1",
    name: "Test Student",
    email: "student@example.com",
    role: "student",
    createdAt: new Date().toISOString(),
  },
  {
    id: "2",
    name: "Test Teacher",
    email: "teacher@example.com",
    role: "teacher",
    createdAt: new Date().toISOString(),
  },
];
