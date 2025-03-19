
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { navigationLinks } from "./navConfig";
import DesktopNavItem from "./DesktopNavItem";
import MobileNavItem from "./MobileNavItem";
import UserMenu from "./UserMenu";
import MobileUserSection from "./MobileUserSection";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { user, isAuthenticated, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-2xl font-bold tracking-tight text-gradient">
                StudyNotion
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationLinks.map((link) => (
              <DesktopNavItem
                key={link.path}
                name={link.name}
                path={link.path}
                icon={link.icon}
                isActive={location.pathname === link.path}
              />
            ))}
          </nav>

          {/* Auth Buttons (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <UserMenu 
              user={user} 
              isAuthenticated={isAuthenticated} 
              logout={logout} 
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden glass-effect border-t border-white/10"
        >
          <div className="px-4 py-5 space-y-4">
            {navigationLinks.map((link) => (
              <MobileNavItem
                key={link.path}
                name={link.name}
                path={link.path}
                icon={link.icon}
                isActive={location.pathname === link.path}
              />
            ))}
            
            {/* Auth Links (Mobile) */}
            <MobileUserSection 
              user={user} 
              isAuthenticated={isAuthenticated} 
              logout={logout} 
            />
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
