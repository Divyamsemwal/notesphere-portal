
import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar as CalendarIcon, Clock, MonitorPlay, Users, Video } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Schedule = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const upcomingClasses = [
    {
      id: 1,
      title: "Data Structures",
      description: "Advanced tree structures and balanced trees",
      date: "2023-08-10",
      time: "10:00 AM - 11:30 AM",
      instructor: "Dr. Sharma",
      meetLink: "https://meet.google.com/abc-defg-hij",
      type: "lecture",
    },
    {
      id: 2,
      title: "Database Systems",
      description: "Transaction management and concurrency control",
      date: "2023-08-10",
      time: "1:00 PM - 2:30 PM",
      instructor: "Prof. Gupta",
      meetLink: "https://meet.google.com/klm-nopq-rst",
      type: "lecture",
    },
    {
      id: 3,
      title: "Web Development Lab",
      description: "Building responsive UI with React",
      date: "2023-08-11",
      time: "9:00 AM - 11:00 AM",
      instructor: "Mr. Patel",
      meetLink: "https://meet.google.com/uvw-xyza-bcd",
      type: "practical",
    },
    {
      id: 4,
      title: "Computer Networks",
      description: "Network security protocols",
      date: "2023-08-12",
      time: "11:00 AM - 12:30 PM",
      instructor: "Dr. Singh",
      meetLink: "https://meet.google.com/efg-hijk-lmn",
      type: "lecture",
    },
    {
      id: 5,
      title: "Algorithms Design",
      description: "Dynamic programming advanced problems",
      date: "2023-08-13",
      time: "2:00 PM - 3:30 PM",
      instructor: "Prof. Kumar",
      meetLink: "https://meet.google.com/opq-rstu-vwx",
      type: "tutorial",
    },
  ];

  const recordedClasses = [
    {
      id: 1,
      title: "Introduction to Python",
      description: "Basics of Python programming language",
      date: "2023-08-05",
      duration: "1 hour 25 minutes",
      instructor: "Dr. Sharma",
      watchLink: "https://youtu.be/6i3EGqOBRiU?si=uzZQBd8kI2qkMqqr",
    },
    {
      id: 2,
      title: "Fundamentals of AI",
      description: "Introduction to artificial intelligence concepts",
      date: "2023-08-03",
      duration: "1 hour 45 minutes",
      instructor: "Prof. Gupta",
      watchLink: "https://youtu.be/pKeVMlkFpRc?si=4TUQ6fAqktuqz6C4",
    },
    {
      id: 3,
      title: "Operating Systems",
      description: "Process management and scheduling algorithms",
      date: "2023-08-01",
      duration: "1 hour 30 minutes",
      instructor: "Dr. Singh",
      watchLink: "https://example.com/watch/os-processes",
    },
  ];

  return (
    <PageTransition>
      <div className="page-container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gradient">Live Classes & Schedule</h1>
          <p className="text-muted-foreground">
            Your personalized schedule for live online classes and recordings.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-study-light-gray rounded-xl overflow-hidden glass-card border border-white/10 p-4 lg:col-span-1"
          >
            <h3 className="text-lg font-medium mb-4">Select Date</h3>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left font-normal bg-study-dark-gray border-white/10"
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 bg-study-dark-gray border-white/10">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                  className="bg-study-dark-gray text-white"
                />
              </PopoverContent>
            </Popover>

            <div className="mt-8">
              <h3 className="text-lg font-medium mb-4">Upcoming Today</h3>
              <div className="space-y-3">
                {upcomingClasses.slice(0, 2).map((cls) => (
                  <div
                    key={cls.id}
                    className="p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium">{cls.title}</h4>
                        <p className="text-sm text-muted-foreground">{cls.time}</p>
                      </div>
                      <Badge
                        variant="outline"
                        className={cn(
                          "text-xs",
                          cls.type === "lecture" && "border-study-blue text-study-blue",
                          cls.type === "practical" && "border-study-teal text-study-teal",
                          cls.type === "tutorial" && "border-study-orange text-study-orange"
                        )}
                      >
                        {cls.type}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Tabs defaultValue="upcoming" className="w-full">
              <TabsList className="grid grid-cols-2 bg-study-light-gray mb-6">
                <TabsTrigger
                  value="upcoming"
                  className="data-[state=active]:bg-study-purple data-[state=active]:text-white"
                >
                  Upcoming Classes
                </TabsTrigger>
                <TabsTrigger
                  value="recorded"
                  className="data-[state=active]:bg-study-purple data-[state=active]:text-white"
                >
                  Recorded Sessions
                </TabsTrigger>
              </TabsList>

              <TabsContent value="upcoming" className="mt-0 animate-fade-in">
                <div className="space-y-4">
                  {upcomingClasses.map((cls, index) => (
                    <motion.div
                      key={cls.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="glass-card border border-white/10 rounded-xl overflow-hidden"
                    >
                      <div className="p-5">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-xl font-medium">{cls.title}</h3>
                            <p className="text-muted-foreground">{cls.description}</p>
                          </div>
                          <Badge
                            variant="outline"
                            className={cn(
                              "text-xs font-medium",
                              cls.type === "lecture" && "border-study-blue text-study-blue",
                              cls.type === "practical" && "border-study-teal text-study-teal",
                              cls.type === "tutorial" && "border-study-orange text-study-orange"
                            )}
                          >
                            {cls.type}
                          </Badge>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div className="flex items-center">
                            <CalendarIcon className="w-4 h-4 text-muted-foreground mr-2" />
                            <span className="text-sm">{cls.date}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 text-muted-foreground mr-2" />
                            <span className="text-sm">{cls.time}</span>
                          </div>
                          <div className="flex items-center">
                            <Users className="w-4 h-4 text-muted-foreground mr-2" />
                            <span className="text-sm">{cls.instructor}</span>
                          </div>
                        </div>

                        <Button
                          onClick={() => window.open(cls.meetLink, "_blank")}
                          className="w-full bg-study-purple hover:bg-study-purple/90"
                        >
                          <Video className="mr-2 h-4 w-4" />
                          Join Live Session
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="recorded" className="mt-0 animate-fade-in">
                <div className="space-y-4">
                  {recordedClasses.map((cls, index) => (
                    <motion.div
                      key={cls.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="glass-card border border-white/10 rounded-xl overflow-hidden"
                    >
                      <div className="p-5">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-xl font-medium">{cls.title}</h3>
                            <p className="text-muted-foreground">{cls.description}</p>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                          <div className="flex items-center">
                            <CalendarIcon className="w-4 h-4 text-muted-foreground mr-2" />
                            <span className="text-sm">Recorded: {cls.date}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 text-muted-foreground mr-2" />
                            <span className="text-sm">Duration: {cls.duration}</span>
                          </div>
                          <div className="flex items-center">
                            <Users className="w-4 h-4 text-muted-foreground mr-2" />
                            <span className="text-sm">{cls.instructor}</span>
                          </div>
                        </div>

                        <Button
                          onClick={() => window.open(cls.watchLink, "_blank")}
                          variant="outline"
                          className="w-full border-study-purple/30 text-study-purple hover:bg-study-purple/10 hover:text-white"
                        >
                          <MonitorPlay className="mr-2 h-4 w-4" />
                          Watch Recording
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Schedule;
