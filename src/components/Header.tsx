import { Heart, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import mamaCompassLogo from "@/assets/mama-compass-logo.svg";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-pink-500 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/home" className="flex items-center space-x-2" onClick={closeMobileMenu}>
            <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center">
              <img 
                src={mamaCompassLogo} 
                alt="Mama's Compass Logo" 
                className="h-full w-full object-contain"
              />
            </div>
            <span className="text-lg sm:text-xl font-bold text-white">Mama's Compass</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <Link to="/home" className="text-sm font-medium text-white hover:text-pink-100 transition-colors">
              Home
            </Link>
            <Link to="/infant-formula" className="text-sm font-medium text-white hover:text-pink-100 transition-colors">
              Infant Formula
            </Link>
            <Link to="/diapers" className="text-sm font-medium text-white hover:text-pink-100 transition-colors">
              Diapers
            </Link>
            <Link to="/feeding-nursery" className="text-sm font-medium text-white hover:text-pink-100 transition-colors">
              Feeding & Nursery
            </Link>
            <Link to="/baby-gear" className="text-sm font-medium text-white hover:text-pink-100 transition-colors">
              Baby Gear
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            <Button 
              size="sm" 
              className="bg-pink-600 hover:bg-pink-700 text-white hover:text-white text-xs lg:text-sm px-2 lg:px-4 py-2 rounded-md"
            >
              <span className="hidden lg:inline">Launch AI Companion</span>
              <span className="lg:hidden">AI</span>
            </Button>
            <Link to="/signin">
              <Button 
                size="sm" 
                className="border border-white bg-transparent text-white hover:bg-white hover:text-pink-500 text-xs lg:text-sm px-2 lg:px-4 py-2 rounded-md transition-colors"
              >
                Login
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden text-white hover:text-white hover:bg-pink-600"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-pink-600 border-t border-pink-400">
            <nav className="px-4 py-4 space-y-3">
              <Link 
                to="/home" 
                className="block text-sm font-medium text-white hover:text-pink-100 transition-colors py-2"
                onClick={closeMobileMenu}
              >
                Home
              </Link>
              <Link 
                to="/infant-formula" 
                className="block text-sm font-medium text-white hover:text-pink-100 transition-colors py-2"
                onClick={closeMobileMenu}
              >
                Infant Formula
              </Link>
              <Link 
                to="/diapers" 
                className="block text-sm font-medium text-white hover:text-pink-100 transition-colors py-2"
                onClick={closeMobileMenu}
              >
                Diapers
              </Link>
              <Link 
                to="/feeding-nursery" 
                className="block text-sm font-medium text-white hover:text-pink-100 transition-colors py-2"
                onClick={closeMobileMenu}
              >
                Feeding & Nursery
              </Link>
              <Link 
                to="/baby-gear" 
                className="block text-sm font-medium text-white hover:text-pink-100 transition-colors py-2"
                onClick={closeMobileMenu}
              >
                Baby Gear
              </Link>
              
              {/* Mobile Actions */}
              <div className="pt-4 border-t border-pink-400 space-y-3">
                <Button 
                  size="sm" 
                  className="w-full bg-pink-700 hover:bg-pink-800 text-white hover:text-white text-sm py-2 rounded-md"
                  onClick={closeMobileMenu}
                >
                  Launch AI Companion
                </Button>
                <Link to="/signin" onClick={closeMobileMenu}>
                  <Button 
                    size="sm" 
                    className="w-full border border-white bg-transparent text-white hover:bg-white hover:text-pink-500 text-sm py-2 rounded-md transition-colors"
                  >
                    Login
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
