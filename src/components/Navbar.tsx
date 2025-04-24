
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
      isScrolled ? 'bg-[#030009] shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center space-x-2">
            <img src="/lovable-uploads/ce8e26a2-dfb1-4d47-8ed2-cf35d7678396.png" alt="EMET Auctions" className="h-10 w-auto" />
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-white hover:text-[#5e17eb] transition-colors">About</a>
            <a href="#current-items" className="text-white hover:text-[#5e17eb] transition-colors">Current Items</a>
            <a href="#how-it-works" className="text-white hover:text-[#5e17eb] transition-colors">How It Works</a>
            <a href="#sell-form" className="text-white hover:text-[#5e17eb] transition-colors">Sell Items</a>
            <a href="#contact" className="text-white hover:text-[#5e17eb] transition-colors">Contact</a>
            <Button className="bg-[#5e17eb] text-white hover:bg-white hover:text-[#5e17eb]">
              Register Now
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
          <div className="mt-4 py-4 md:hidden flex flex-col space-y-4 bg-[#030009] animate-fade-in">
            <a href="#about" className="text-white hover:text-[#5e17eb] transition-colors px-4">About</a>
            <a href="#current-items" className="text-white hover:text-[#5e17eb] transition-colors px-4">Current Items</a>
            <a href="#how-it-works" className="text-white hover:text-[#5e17eb] transition-colors px-4">How It Works</a>
            <a href="#sell-form" className="text-white hover:text-[#5e17eb] transition-colors px-4">Sell Items</a>
            <a href="#contact" className="text-white hover:text-[#5e17eb] transition-colors px-4">Contact</a>
            <div className="px-4">
              <Button className="w-full bg-[#5e17eb] text-white hover:bg-white hover:text-[#5e17eb]">
                Register Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
