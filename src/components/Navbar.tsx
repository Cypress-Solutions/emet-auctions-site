import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#5e17eb] shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center space-x-4">
            <img src="/lovable-uploads/7fd90f24-61ba-4d4c-9889-f111e221065c.png" alt="EMET Auctions" className="h-12 w-auto" />
            <span className="text-xl md:text-2xl font-bold text-white truncate">EMET Auctions</span>
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-white hover:text-white/80 transition-colors">About</a>
            <a href="#current-items" className="text-white hover:text-white/80 transition-colors">Auctions</a>
            <a href="#how-it-works" className="text-white hover:text-white/80 transition-colors">How It Works</a>
            <a href="#contact" className="text-white hover:text-white/80 transition-colors">Contact</a>
            <Button className="bg-white text-[#5e17eb] hover:bg-white/90 hover:text-[#5e17eb]">
              Online Auctions
            </Button>
          </div>
          
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            <Menu size={24} />
          </button>
        </div>
        
        {isMobileMenuOpen && (
          <div className="mt-4 py-4 md:hidden flex flex-col space-y-4 bg-[#5e17eb] animate-fade-in">
            <a href="#about" className="text-white hover:text-white/80 transition-colors px-4">About</a>
            <a href="#current-items" className="text-white hover:text-white/80 transition-colors px-4">Auctions</a>
            <a href="#how-it-works" className="text-white hover:text-white/80 transition-colors px-4">How It Works</a>
            <a href="#contact" className="text-white hover:text-white/80 transition-colors px-4">Contact</a>
            <div className="px-4">
              <Button className="w-full bg-white text-[#5e17eb] hover:bg-white/90 hover:text-[#5e17eb]">
                Online Auctions
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
