
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold text-noizify-blue">
          Noizify
        </a>
        
        {/* Mobile menu button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden focus:outline-none"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#how-it-works" className="text-gray-600 hover:text-gray-900">How It Works</a>
          <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
          <a href="#leaderboard" className="text-gray-600 hover:text-gray-900">Leaderboard</a>
          <a href="#innovation" className="text-gray-600 hover:text-gray-900">Innovation</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Sign In</a>
          <Button asChild className="bg-noizify-blue hover:bg-noizify-blue/90">
            <a href="#pre-order">Pre-Order Now</a>
          </Button>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg p-4 flex flex-col gap-4 md:hidden animate-fade-in">
            <a 
              href="#how-it-works" 
              className="text-gray-600 hover:text-gray-900 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#features" 
              className="text-gray-600 hover:text-gray-900 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#leaderboard" 
              className="text-gray-600 hover:text-gray-900 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Leaderboard
            </a>
            <a 
              href="#innovation" 
              className="text-gray-600 hover:text-gray-900 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Innovation
            </a>
            <a 
              href="#" 
              className="text-gray-600 hover:text-gray-900 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign In
            </a>
            <Button asChild className="bg-noizify-blue hover:bg-noizify-blue/90">
              <a 
                href="#pre-order"
                onClick={() => setIsMenuOpen(false)}
              >
                Pre-Order Now
              </a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
