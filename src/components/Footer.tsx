import { Heart, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import mamaCompassLogo from "@/assets/mama-compass-logo.svg";

const Footer = () => {
  return (
    <footer className="bg-pink-500 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center">
                <img 
                  src={mamaCompassLogo} 
                  alt="Mama's Compass Logo" 
                  className="h-full w-full object-contain"
                />
              </div>
              <span className="text-xl font-bold">MAMA'S COMPASS</span>
            </div>
            <p className="text-sm text-white/80">
              Copyright © 2023 Mama's Compass. All Rights Reserved.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/home" className="text-white/80 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/instant-formula" className="text-white/80 hover:text-white transition-colors">
                  Instant Formula
                </Link>
              </li>
              <li>
                <Link to="/diapers" className="text-white/80 hover:text-white transition-colors">
                  Diapers
                </Link>
              </li>
              <li>
                <Link to="/feeding-solutions" className="text-white/80 hover:text-white transition-colors">
                  Feeding Solutions
                </Link>
              </li>
              <li>
                <Link to="/baby-gear" className="text-white/80 hover:text-white transition-colors">
                  Baby Gear
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-white/80 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-white/80 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-white/80 hover:text-white transition-colors">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link to="/compassion" className="text-white/80 hover:text-white transition-colors">
                  M.Compassion
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="flex items-center justify-center lg:justify-end space-x-4">
            <a href="#" className="text-white/80 hover:text-white transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
