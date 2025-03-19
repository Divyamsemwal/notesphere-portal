
import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const Hero = () => {
  const { isAuthenticated } = useAuth();

  const textAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-study-purple/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-[500px] bg-gradient-to-t from-study-blue/20 to-transparent" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-block mb-4 px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-sm font-medium text-white"
        >
          <span className="text-study-gold">Punjab University</span> Study Portal
        </motion.div>

        <motion.h1
          initial="hidden"
          animate="visible"
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
        >
          <motion.span custom={0} variants={textAnimation} className="block">
            WELCOME TO
          </motion.span>
          <motion.span custom={1} variants={textAnimation} className="block mt-2 text-gradient">
            STUDY NOTION
          </motion.span>
          <motion.span custom={2} variants={textAnimation} className="block mt-2">
            CREATE NEW
          </motion.span>
          <motion.span custom={3} variants={textAnimation} className="block mt-2 text-gradient">
            EXPERIENCE
          </motion.span>
          <motion.span custom={4} variants={textAnimation} className="block mt-2 text-study-blue">
            WITH US
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="max-w-2xl mx-auto text-xl text-muted-foreground mb-12"
        >
          Access comprehensive study materials, previous year papers, and stay updated with your class schedule.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/notes"
              className="relative inline-flex items-center justify-center group"
            >
              <span className="absolute -inset-px rounded-full bg-gradient-to-r from-study-purple via-study-blue to-study-pink blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative inline-flex items-center gap-2 px-8 py-4 text-lg font-medium text-white bg-study-black rounded-full glass-effect border border-white/10 transition-transform duration-300 group-hover:translate-y-[-2px]">
                Get Started <Rocket className="h-5 w-5 ml-2" />
              </span>
            </Link>
            
            {!isAuthenticated && (
              <Link
                to="/register"
                className="px-8 py-4 text-lg font-medium text-white rounded-full glass-effect border border-white/10 transition-all duration-300 hover:border-study-purple/50 hover:bg-white/5"
              >
                Join Now
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
