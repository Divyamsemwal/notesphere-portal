
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Menu, X, BookOpen, FileText, ExternalLink } from "lucide-react";
import { NavbarBrand } from "./navbar/NavbarBrand";
import { DesktopNavigation } from "./navbar/DesktopNavigation";
import { MobileNavigation } from "./navbar/MobileNavigation";
import { UserMenu } from "./navbar/UserMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navigationLinks = [
    { name: "Notes", path: "/notes", icon: <BookOpen className="w-5 h-5" /> },
    { name: "Previous Years", path: "/previous-years", icon: <FileText className="w-5 h-5" /> },
    { name: "Results", path: "/results", icon: <ExternalLink className="w-5 h-5" /> },
  ];

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
          <NavbarBrand />

          {/* Desktop Navigation */}
          <DesktopNavigation navigationLinks={navigationLinks} />

          {/* Auth Buttons (Desktop) */}
          <UserMenu />

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
      <MobileNavigation isOpen={isOpen} navigationLinks={navigationLinks} />
    </header>
  );
};

export default Navbar;
