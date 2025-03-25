
import { NavigationLink } from "./NavigationLink";

interface NavigationItem {
  name: string;
  path: string;
  icon: React.ReactNode;
}

interface DesktopNavigationProps {
  navigationLinks: NavigationItem[];
}

export const DesktopNavigation = ({ navigationLinks }: DesktopNavigationProps) => {
  return (
    <nav className="hidden md:flex items-center space-x-8">
      {navigationLinks.map((link) => (
        <NavigationLink
          key={link.path}
          path={link.path}
          name={link.name}
          icon={link.icon}
        />
      ))}
    </nav>
  );
};
