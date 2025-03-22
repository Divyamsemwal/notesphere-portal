
import { useState } from "react";
import PageTransition from "@/components/PageTransition";
import ResourceCard from "@/components/ResourceCard";
import { BookOpen, FileText, FolderOpen, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Notes = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const subjectCategories = [
    { id: "all", name: "All Subjects" },
    { id: "computer-science", name: "Computer Science" },
    { id: "mathematics", name: "Mathematics" },
    { id: "physics", name: "Physics" },
    { id: "chemistry", name: "Chemistry" },
  ];

  const notesData = [
    {
      id: 1,
      title: "Data Structures and Algorithms",
      description: "Comprehensive notes on DSA including arrays, linked lists, trees, and graphs.",
      category: "computer-science",
      downloadUrl: "/sample-notes/dsa-notes.pdf",
      viewUrl: "https://drive.google.com/file/d/12Zms4FAPDC509smcSHLFECDAILJkdRAw/view?usp=drivesdk",
    },
    {
      id: 2,
      title: "Object-Oriented Programming",
      description: "Complete guide to OOP concepts, inheritance, polymorphism, and encapsulation.",
      category: "computer-science",
      downloadUrl: "/sample-notes/oop-notes.pdf",
      viewUrl: "https://drive.google.com/file/d/12bIhsIUdA2XZ8kmUJlmmj0meiWuvTnLi/view?usp=drivesdk",
    },
    {
      id: 3,
      title: "Calculus I",
      description: "Detailed notes on limits, derivatives, and integrals with practice problems.",
      category: "mathematics",
      downloadUrl: "/sample-notes/calculus-notes.pdf",
      viewUrl: "https://example.com/view/calculus-notes",
    },
    {
      id: 4,
      title: "Linear Algebra",
      description: "Comprehensive notes on vectors, matrices, and linear transformations.",
      category: "mathematics",
      downloadUrl: "/sample-notes/linear-algebra-notes.pdf",
      viewUrl: "https://example.com/view/linear-algebra-notes",
    },
    {
      id: 5,
      title: "Quantum Mechanics",
      description: "Introduction to quantum physics principles with solved examples.",
      category: "physics",
      downloadUrl: "/sample-notes/quantum-mechanics-notes.pdf",
      viewUrl: "https://example.com/view/quantum-mechanics-notes",
    },
    {
      id: 6,
      title: "Organic Chemistry",
      description: "Detailed notes on organic compounds, reactions, and mechanisms.",
      category: "chemistry",
      downloadUrl: "/sample-notes/organic-chemistry-notes.pdf",
      viewUrl: "https://example.com/view/organic-chemistry-notes",
    },
    {
      id: 7,
      title: "Database Management",
      description: "Comprehensive guide to database design, SQL, and normalization.",
      category: "computer-science",
      downloadUrl: "/sample-notes/dbms-notes.pdf",
      viewUrl: "https://example.com/view/dbms-notes",
    },
    {
      id: 8,
      title: "Electromagnetic Theory",
      description: "Complete notes on electromagnetic fields, Maxwell's equations, and applications.",
      category: "physics",
      downloadUrl: "/sample-notes/electromagnetic-theory-notes.pdf",
      viewUrl: "https://example.com/view/electromagnetic-theory-notes",
    },
    {
      id: 9,
      title: "Discrete Mathematics",
      description: "Notes on logic, set theory, combinatorics, and graph theory.",
      category: "mathematics",
      downloadUrl: "/sample-notes/discrete-math-notes.pdf",
      viewUrl: "https://example.com/view/discrete-math-notes",
    },
  ];

  const filterNotes = (category: string, search: string) => {
    return notesData.filter((note) => {
      const matchesCategory = category === "all" || note.category === category;
      const matchesSearch =
        note.title.toLowerCase().includes(search.toLowerCase()) ||
        note.description.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  };

  return (
    <PageTransition>
      <div className="page-container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gradient">Study Notes</h1>
          <p className="text-muted-foreground">
            Access comprehensive lecture notes, tutorials, and study materials for all Punjab University courses.
          </p>
        </div>

        <div className="mb-10 max-w-md mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              type="text"
              placeholder="Search notes..."
              className="pl-10 bg-study-light-gray border-white/10 focus:border-study-purple focus:ring-study-purple/20"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <Tabs defaultValue="all" className="max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2 bg-study-light-gray p-1 mb-8">
            {subjectCategories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="data-[state=active]:bg-study-purple data-[state=active]:text-white"
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {subjectCategories.map((category) => (
            <TabsContent
              key={category.id}
              value={category.id}
              className="mt-0 animate-fade-in"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filterNotes(category.id, searchTerm).length > 0 ? (
                  filterNotes(category.id, searchTerm).map((note, index) => (
                    <ResourceCard
                      key={note.id}
                      title={note.title}
                      description={note.description}
                      icon={<BookOpen className="w-5 h-5" />}
                      downloadUrl={note.downloadUrl}
                      viewUrl={note.viewUrl}
                      delay={index}
                    />
                  ))
                ) : (
                  <div className="col-span-2 py-12 text-center">
                    <FolderOpen className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">No notes found. Try changing your search terms.</p>
                  </div>
                )}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </PageTransition>
  );
};

export default Notes;
