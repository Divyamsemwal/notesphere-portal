
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface DesktopNavItemProps {
  name: string;
  path: string;
  icon: React.ReactNode;
  isActive: boolean;
}

const DesktopNavItem = ({ name, path, icon, isActive }: DesktopNavItemProps) => {
  return (
    <Link
      to={path}
      className={`relative group flex items-center space-x-1 text-sm font-medium transition-colors ${
        isActive
          ? "text-primary"
          : "text-muted-foreground hover:text-white"
      }`}
    >
      <span className="hidden lg:block">{icon}</span>
      <span>{name}</span>
      {isActive && (
        <motion.div
          layoutId="navbar-indicator"
          className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-study-purple to-study-blue"
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
    </Link>
  );
};

export default DesktopNavItem;
