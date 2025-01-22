import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import MobileSidebar from "./MobileSidebar";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);

  const navItems = [
    { name: "Home", link: "/home" },
    { name: "About", link: "/about" },
    { name: "Features", link: "/features" },
    { name: "Testimonials", link: "/testimonials" },
  ];

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // If scrolling down, hide the navbar
        setIsVisible(false);
      } else {
        // If scrolling up, show the navbar
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  useEffect(() => {
    if (user) {
      console.log("user is ", user);
    }
  }, [user]);

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ type: "tween", duration: 0.3 }}
      className="bg-white shadow-sm fixed top-0 left-0 w-full z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img
                src="https://ik.imagekit.io/deveoper99/EmotiPlay.png?updatedAt=1730409641226"
                alt="EmotiPlay"
                className="h-20 w-auto object-contain"
              />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.link}
                className="text-gray-600 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                {item.name}
              </Link>
            ))}
            {!user && (
              <Button
                onClick={() => navigate("/signup")}
                className="bg-purple-600 hover:bg-purple-700 text-white"
              >
                Sign Up
              </Button>
            )}
            {user && (
              <Button
                onClick={() => navigate("/user-dashboard")}
                className="bg-purple-600 hover:bg-purple-700 text-white"
              >
                <FaUserCircle size={24} color="#fff" />
              </Button>
            )}
          </div>
          <div className="md:hidden flex items-center">
            <MobileSidebar
              isOpen={isOpen}
              navItems={navItems}
              setIsOpen={setIsOpen}
            />
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
