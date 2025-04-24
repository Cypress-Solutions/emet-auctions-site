
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-brand-purple-dark shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="text-white text-2xl font-bold tracking-tighter">
              Premium<span className="text-brand-gold">Auctions</span>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-white hover:text-brand-gold transition-colors">About</a>
            <a href="#auctions" className="text-white hover:text-brand-gold transition-colors">Auctions</a>
            <a href="#how-it-works" className="text-white hover:text-brand-gold transition-colors">How It Works</a>
            <a href="#testimonials" className="text-white hover:text-brand-gold transition-colors">Testimonials</a>
            <a href="#contact" className="text-white hover:text-brand-gold transition-colors">Contact</a>
            <Button className="bg-brand-gold text-brand-purple-dark hover:bg-white">
              Register Now
            </Button>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
        
        {isMobileMenuOpen && (
          <div className="mt-4 py-4 md:hidden flex flex-col space-y-4 bg-brand-purple-dark animate-fade-in">
            <a href="#about" className="text-white hover:text-brand-gold transition-colors px-4">About</a>
            <a href="#auctions" className="text-white hover:text-brand-gold transition-colors px-4">Auctions</a>
            <a href="#how-it-works" className="text-white hover:text-brand-gold transition-colors px-4">How It Works</a>
            <a href="#testimonials" className="text-white hover:text-brand-gold transition-colors px-4">Testimonials</a>
            <a href="#contact" className="text-white hover:text-brand-gold transition-colors px-4">Contact</a>
            <div className="px-4">
              <Button className="w-full bg-brand-gold text-brand-purple-dark hover:bg-white">
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
