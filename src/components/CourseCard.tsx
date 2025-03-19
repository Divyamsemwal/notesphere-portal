
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface CourseCardProps {
  title: string;
  description: string;
  icon: JSX.Element;
  link: string;
  delay: number;
}

const CourseCard = ({ title, description, icon, link, delay }: CourseCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-study-purple to-study-blue opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 rounded-2xl" />
      <Link
        to={link}
        className="relative block glass-card rounded-2xl card-effect overflow-hidden"
      >
        <div className="p-8">
          <div className="w-12 h-12 mb-6 flex items-center justify-center rounded-xl bg-white/5 text-study-purple">
            {icon}
          </div>
          <h3 className="text-xl font-semibold mb-3">{title}</h3>
          <p className="text-muted-foreground mb-6">{description}</p>
          <div className="flex items-center text-sm font-medium text-study-purple">
            <span className="mr-2">Explore</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default CourseCard;
