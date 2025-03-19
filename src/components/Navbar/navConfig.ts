
import { BookOpen, Calendar, ExternalLink, FileText } from "lucide-react";

export const navigationLinks = [
  { name: "Home", path: "/", icon: <BookOpen className="w-5 h-5" /> },
  { name: "Notes", path: "/notes", icon: <BookOpen className="w-5 h-5" /> },
  { name: "Previous Years", path: "/previous-years", icon: <FileText className="w-5 h-5" /> },
  { name: "Results", path: "/results", icon: <ExternalLink className="w-5 h-5" /> },
  { name: "Schedule", path: "/schedule", icon: <Calendar className="w-5 h-5" /> },
];
