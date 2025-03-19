
import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";

interface MobileNavItemProps {
  name: string;
  path: string;
  icon: React.ReactNode;
  isActive: boolean;
}

const MobileNavItem = ({ name, path, icon, isActive }: MobileNavItemProps) => {
  return (
    <Link
      to={path}
      className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
        isActive
          ? "bg-white/10 text-white"
          : "text-muted-foreground hover:bg-white/5 hover:text-white"
      }`}
    >
      <span>{icon}</span>
      <span>{name}</span>
    </Link>
  );
};

export default MobileNavItem;
