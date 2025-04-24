
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  const scrollToSection = (id: string) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full bg-hero-pattern bg-cover bg-center flex items-center">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-purple-dark/80 to-brand-purple/90"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto md:mx-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 animate-fade-up">
            Exceptional Items, <br />
            <span className="text-brand-gold">Extraordinary</span> Experiences
          </h1>
          
          <p className="text-xl text-white/90 mb-8 max-w-xl animate-fade-up [animation-delay:200ms]">
            Join our exclusive community of collectors and enthusiasts. 
            Discover premium, verified items and participate in transparent auction processes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up [animation-delay:400ms]">
            <Button 
              size="lg" 
              className="bg-brand-gold text-brand-purple-dark hover:bg-white hover:text-brand-purple-dark transition-all"
            >
              Explore Auctions
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10"
              onClick={() => scrollToSection('#about')}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      <button 
        onClick={() => scrollToSection('#about')}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
};

export default HeroSection;
