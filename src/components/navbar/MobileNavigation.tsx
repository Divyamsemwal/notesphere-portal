
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { UserMenu } from "./UserMenu";

interface NavigationItem {
  name: string;
  path: string;
  icon: React.ReactNode;
}

interface MobileNavigationProps {
  isOpen: boolean;
  navigationLinks: NavigationItem[];
}

export const MobileNavigation = ({ isOpen, navigationLinks }: MobileNavigationProps) => {
  const location = useLocation();

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
      className="md:hidden glass-effect border-t border-white/10"
    >
      <div className="px-4 py-5 space-y-4">
        {navigationLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
              location.pathname === link.path
                ? "bg-white/10 text-white"
                : "text-muted-foreground hover:bg-white/5 hover:text-white"
            }`}
          >
            <span>{link.icon}</span>
            <span>{link.name}</span>
          </Link>
        ))}
        
        {/* Auth Links (Mobile) */}
        <div className="border-t border-white/10 pt-4 mt-4">
          <UserMenu variant="mobile" />
        </div>
      </div>
    </motion.div>
  );
};
