import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">EmotiPlay</h3>
            <p>Mood-based video recommendations</p>
          </div>
          <nav className="flex gap-4">
            <Link to={"/about"} className="hover:text-purple-300">
              About
            </Link>
            <Link to={"/privacy"} className="hover:text-purple-300">
              Privacy
            </Link>
            <Link to={"/terms"} className="hover:text-purple-300">
              Terms
            </Link>
            <Link to={"/contact"} className="hover:text-purple-300">
              Contact
            </Link>
          </nav>
        </div>
        <div className="mt-8 text-center text-sm">
          © {new Date().getFullYear()} EmotiPlay. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
