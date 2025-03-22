
import { useState } from "react";
import PageTransition from "@/components/PageTransition";
import ResourceCard from "@/components/ResourceCard";
import { Archive, FileText, FolderOpen, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const PreviousYears = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState("all");
  
  const subjectCategories = [
    { id: "all", name: "All Subjects" },
    { id: "computer-science", name: "Computer Science" },
    { id: "mathematics", name: "Mathematics" },
    { id: "physics", name: "Physics" },
    { id: "chemistry", name: "Chemistry" },
  ];

  const yearOptions = [
    { value: "all", label: "All Years" },
    { value: "2023", label: "2023" },
    { value: "2022", label: "2022" },
    { value: "2021", label: "2021" },
    { value: "2020", label: "2020" },
    { value: "2019", label: "2019" },
  ];

  const papersData = [
    {
      id: 1,
      title: "Data Structures and Algorithms",
      description: "Previous year question paper for B.Tech Computer Science (2023)",
      category: "computer-science",
      year: "2023",
      downloadUrl: "/sample-papers/dsa-2023.pdf",
      viewUrl: "https://drive.google.com/file/d/13fcn3KFvKKzJbZelJAnrx1WGp8mcoh73/view?usp=drivesdk",
    },
    {
      id: 2,
      title: "Object-Oriented Programming",
      description: "Previous year question paper for B.Tech Computer Science (2023)",
      category: "computer-science",
      year: "2023",
      downloadUrl: "/sample-papers/oop-2023.pdf",
      viewUrl: "https://drive.google.com/file/d/1d5999oLwYyvupgJouf1Y8cqCM-CG0ETy/view?usp=drivesdk",
    },
    {
      id: 3,
      title: "Calculus I",
      description: "Previous year question paper for B.Sc Mathematics (2022)",
      category: "mathematics",
      year: "2022",
      downloadUrl: "/sample-papers/calculus-2022.pdf",
      viewUrl: "https://drive.google.com/file/d/1F8blsuzegCjUGtY2f12FMHDPUN0yXFLT/view?usp=drivesdk",
    },
    {
      id: 4,
      title: "Linear Algebra",
      description: "Previous year question paper for B.Sc Mathematics (2022)",
      category: "mathematics",
      year: "2022",
      downloadUrl: "/sample-papers/linear-algebra-2022.pdf",
      viewUrl: "https://drive.google.com/file/d/1BfhU7cchzJ7GhMNVONZ9_oiSJHvivfiT/view?usp=drivesdk",
    },
    {
      id: 5,
      title: "Quantum Mechanics",
      description: "Previous year question paper for B.Sc Physics (2021)",
      category: "physics",
      year: "2021",
      downloadUrl: "/sample-papers/quantum-mechanics-2021.pdf",
      viewUrl: "https://example.com/view/quantum-mechanics-2021",
    },
    {
      id: 6,
      title: "Organic Chemistry",
      description: "Previous year question paper for B.Sc Chemistry (2021)",
      category: "chemistry",
      year: "2021",
      downloadUrl: "/sample-papers/organic-chemistry-2021.pdf",
      viewUrl: "https://example.com/view/organic-chemistry-2021",
    },
    {
      id: 7,
      title: "Database Management",
      description: "Previous year question paper for B.Tech Computer Science (2020)",
      category: "computer-science",
      year: "2020",
      downloadUrl: "/sample-papers/dbms-2020.pdf",
      viewUrl: "https://example.com/view/dbms-2020",
    },
    {
      id: 8,
      title: "Electromagnetic Theory",
      description: "Previous year question paper for B.Sc Physics (2020)",
      category: "physics",
      year: "2020",
      downloadUrl: "/sample-papers/electromagnetic-theory-2020.pdf",
      viewUrl: "https://example.com/view/electromagnetic-theory-2020",
    },
    {
      id: 9,
      title: "Discrete Mathematics",
      description: "Previous year question paper for B.Sc Mathematics (2019)",
      category: "mathematics",
      year: "2019",
      downloadUrl: "/sample-papers/discrete-math-2019.pdf",
      viewUrl: "https://example.com/view/discrete-math-2019",
    },
  ];

  const filterPapers = (category: string, year: string, search: string) => {
    return papersData.filter((paper) => {
      const matchesCategory = category === "all" || paper.category === category;
      const matchesYear = year === "all" || paper.year === year;
      const matchesSearch =
        paper.title.toLowerCase().includes(search.toLowerCase()) ||
        paper.description.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesYear && matchesSearch;
    });
  };

  return (
    <PageTransition>
      <div className="page-container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gradient">Previous Year Papers</h1>
          <p className="text-muted-foreground">
            Access previous year question papers for all Punjab University courses to help you prepare better.
          </p>
        </div>

        <div className="mb-10 max-w-md mx-auto">
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              type="text"
              placeholder="Search papers..."
              className="pl-10 bg-study-light-gray border-white/10 focus:border-study-purple focus:ring-study-purple/20"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <Select value={selectedYear} onValueChange={setSelectedYear}>
            <SelectTrigger className="bg-study-light-gray border-white/10">
              <SelectValue placeholder="Select Year" />
            </SelectTrigger>
            <SelectContent>
              {yearOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
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
                {filterPapers(category.id, selectedYear, searchTerm).length > 0 ? (
                  filterPapers(category.id, selectedYear, searchTerm).map((paper, index) => (
                    <ResourceCard
                      key={paper.id}
                      title={paper.title}
                      description={paper.description}
                      icon={<FileText className="w-5 h-5" />}
                      downloadUrl={paper.downloadUrl}
                      viewUrl={paper.viewUrl}
                      delay={index}
                    />
                  ))
                ) : (
                  <div className="col-span-2 py-12 text-center">
                    <FolderOpen className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">No papers found. Try changing your filters.</p>
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

export default PreviousYears;
