import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { Link, useNavigate } from "react-router-dom";

interface NavItem {
  name: string;
  link: string;
}

interface MobileSidebarProps {
  isOpen: boolean;
  setIsOpen: (a: boolean) => void;
  navItems: NavItem[];
}

const MobileSidebar = ({ isOpen, setIsOpen, navItems }: MobileSidebarProps) => {
  const navigate = useNavigate();

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="p-2">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col mt-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.link}
              className="text-gray-600 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Button
            onClick={() => navigate("/signup")}
            className="bg-purple-600 hover:bg-purple-700 text-white mt-4"
          >
            Sign Up
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
