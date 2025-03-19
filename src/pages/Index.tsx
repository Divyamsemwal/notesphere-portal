
import { Code, Database, GraduationCap, LineChart, Rocket, Star } from "lucide-react";
import Hero from "@/components/Hero";
import CourseCard from "@/components/CourseCard";
import PageTransition from "@/components/PageTransition";

const Index = () => {
  const featuredCourses = [
    {
      title: "Web Development",
      description: "Learn modern web development with React and Node.js",
      icon: <Code className="w-6 h-6" />,
      link: "/notes",
      delay: 1,
    },
    {
      title: "Data Structures",
      description: "Master the fundamentals of data structures and algorithms",
      icon: <Database className="w-6 h-6" />,
      link: "/notes",
      delay: 2,
    },
    {
      title: "Machine Learning",
      description: "Dive into the world of AI and machine learning",
      icon: <LineChart className="w-6 h-6" />,
      link: "/notes",
      delay: 3,
    },
    {
      title: "Advanced Mathematics",
      description: "Explore advanced concepts in mathematics",
      icon: <Star className="w-6 h-6" />,
      link: "/notes",
      delay: 4,
    },
    {
      title: "Computer Science",
      description: "Understand core computer science principles",
      icon: <Rocket className="w-6 h-6" />,
      link: "/notes",
      delay: 5,
    },
    {
      title: "Engineering Physics",
      description: "Learn the physics behind modern engineering",
      icon: <GraduationCap className="w-6 h-6" />,
      link: "/notes",
      delay: 6,
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen">
        <Hero />

        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block text-gradient">
              Available Courses
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Access comprehensive study materials for a variety of courses offered by Punjab University.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course, index) => (
              <CourseCard
                key={index}
                title={course.title}
                description={course.description}
                icon={course.icon}
                link={course.link}
                delay={course.delay}
              />
            ))}
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Index;
