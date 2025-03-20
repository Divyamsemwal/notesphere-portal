
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight, LogIn, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";

const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <div 
      className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: "url('/library-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      
      <div className="fixed top-0 w-full z-10">
        <header className="flex items-center justify-end p-6 max-w-7xl mx-auto">
          <div className="flex gap-4">
            <Button 
              variant="ghost" 
              className="text-white hover:bg-white/20"
              onClick={() => navigate('/login')}
            >
              <LogIn className="mr-2 h-4 w-4" />
              Login
            </Button>
            <Button 
              className="bg-study-purple hover:bg-study-purple/90"
              onClick={() => navigate('/register')}
            >
              <UserPlus className="mr-2 h-4 w-4" />
              Register
            </Button>
          </div>
        </header>
      </div>

      <div className="container relative z-10 px-4 py-16 flex flex-col items-center justify-center text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
            Welcome to StudyNotion
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
            Your ultimate learning companion for academic excellence
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="max-w-2xl w-full glass-card p-8 rounded-2xl"
        >
          <h2 className="text-2xl font-semibold mb-4">Unlock Your Academic Potential</h2>
          <p className="text-white/70 mb-6">
            Access comprehensive study materials, previous year papers, 
            class schedules, and exam results all in one place.
          </p>
          <Button 
            onClick={() => navigate('/login')} 
            className="w-full bg-gradient-to-r from-study-purple to-study-blue hover:opacity-90 text-lg py-6"
            size="lg"
          >
            Get Started <ArrowRight className="ml-2" />
          </Button>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-16 flex flex-col md:flex-row gap-8 justify-center items-center"
        >
          <div className="glass-card p-6 rounded-xl max-w-xs text-center">
            <h3 className="text-xl font-medium mb-2">Study Notes</h3>
            <p className="text-white/70">Access comprehensive study materials for all subjects</p>
          </div>
          <div className="glass-card p-6 rounded-xl max-w-xs text-center">
            <h3 className="text-xl font-medium mb-2">Previous Years</h3>
            <p className="text-white/70">Practice with past examination papers</p>
          </div>
          <div className="glass-card p-6 rounded-xl max-w-xs text-center">
            <h3 className="text-xl font-medium mb-2">Class Schedule</h3>
            <p className="text-white/70">Never miss an important class or lecture</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WelcomePage;
