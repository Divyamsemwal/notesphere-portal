
import { motion } from "framer-motion";
import { ExternalLink, Search } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Results = () => {
  const resultLinks = [
    {
      title: "Undergraduate Results",
      description: "BA, B.Sc, B.Com and other undergraduate course results",
      link: "https://results.puexam.in/HomePage.aspx?Sess=DHglHeX%2fl18%3d",
      delay: 1,
    },
    {
      title: "Postgraduate Results",
      description: "MA, M.Sc, M.Com and other postgraduate course results",
      link: "https://results.puexam.in/HomePage.aspx?Sess=DHglHeX%2fl18%3d",
      delay: 2,
    },
    {
      title: "Professional Course Results",
      description: "Results for professional courses like B.Tech, MBA, MCA, etc.",
      link: "https://results.puexam.in/HomePage.aspx?Sess=DHglHeX/l18=",
      delay: 3,
    },
    {
      title: "Entrance Examination Results",
      description: "Results for various entrance examinations",
      link: "https://results.puexam.in/EntranceHome2024.aspx",
      delay: 4,
    },
  ];

  const recentUpdates = [
    "B.Sc 4th Semester Results Announced",
    "MBA 2nd Semester Results Updated",
    "B.Tech CSE 6th Semester Results Available",
    "M.Sc Physics Results Published",
  ];

  return (
    <PageTransition>
      <div className="page-container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gradient">Examination Results</h1>
          <p className="text-muted-foreground">
            Quick access to Punjab University examination results and announcements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {resultLinks.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: item.delay * 0.1 }}
                >
                  <Card className="h-full glass-card card-effect border-white/10">
                    <CardHeader>
                      <CardTitle>{item.title}</CardTitle>
                      <CardDescription>{item.description}</CardDescription>
                    </CardHeader>
                    <CardFooter>
                      <Button
                        variant="outline"
                        onClick={() => window.open(item.link, "_blank")}
                        className="w-full border-study-purple/30 text-study-purple hover:bg-study-purple/10 hover:text-white transition-colors"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Visit Result Portal
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-8"
            >
              <Card className="glass-card border-white/10">
                <CardHeader>
                  <CardTitle>Direct Result Lookup</CardTitle>
                  <CardDescription>
                    Enter your roll number to directly check your results
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      window.open("https://puchd.ac.in/results.php", "_blank");
                    }}
                    className="flex flex-col space-y-4"
                  >
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
                      <input
                        type="text"
                        placeholder="Enter Roll Number"
                        className="w-full pl-10 py-2 bg-study-light-gray border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-study-purple/20 focus:border-study-purple"
                      />
                    </div>
                    <Button 
                      type="submit"
                      className="bg-gradient-to-r from-study-purple to-study-blue hover:brightness-110 transition-all"
                    >
                      Check Result
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Card className="h-full glass-card border-white/10">
              <CardHeader>
                <CardTitle>Recent Updates</CardTitle>
                <CardDescription>Latest result announcements</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {recentUpdates.map((update, index) => (
                    <li key={index} className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-study-purple mt-1.5 mr-3"></span>
                      <span className="text-sm">{update}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  variant="link"
                  onClick={() => window.open("https://puchd.ac.in/", "_blank")}
                  className="text-study-purple hover:text-study-blue transition-colors"
                >
                  View all announcements
                  <ExternalLink className="ml-2 h-3 w-3" />
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Results;
