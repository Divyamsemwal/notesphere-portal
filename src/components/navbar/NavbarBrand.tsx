
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const NavbarBrand = () => {
  return (
    <Link to="/" className="flex items-center space-x-2">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-2xl font-bold tracking-tight text-gradient">
          StudyBuddy
        </span>
      </motion.div>
    </Link>
  );
};
