
import { LogIn, LogOut, User, UserPlus } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/contexts/AuthContext";

export const UserMenu = () => {
  const { user, isAuthenticated, logout } = useAuth();

  if (!isAuthenticated) {
    return (
      <div className="hidden md:flex items-center space-x-4">
        <Link to="/login">
          <Button variant="ghost" className="text-muted-foreground hover:text-white">
            <LogIn className="mr-2 h-4 w-4" />
            Login
          </Button>
        </Link>
        <Link to="/register">
          <Button className="bg-study-purple hover:bg-study-purple/90 text-white">
            <UserPlus className="mr-2 h-4 w-4" />
            Register
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="hidden md:flex items-center space-x-4">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-10 w-10 rounded-full">
            <div className="flex h-full w-full items-center justify-center rounded-full bg-study-purple text-white">
              {user?.name?.charAt(0).toUpperCase()}
            </div>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56 bg-study-dark-gray border-white/10">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuLabel className="font-normal text-sm text-muted-foreground">
            {user?.email} ({user?.role})
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={logout} className="text-red-500 cursor-pointer">
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
