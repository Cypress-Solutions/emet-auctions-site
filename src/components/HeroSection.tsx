
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
    <section className="relative h-screen w-full bg-[#030009] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-b from-[#030009]/80 to-[#030009]/90"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto md:mx-0">
          <img 
            src="/lovable-uploads/2d180b97-5ff3-42a4-84e2-35c59a3e7e07.png" 
            alt="EMET Auctions Logo" 
            className="h-20 mb-8 animate-fade-up"
          />
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 animate-fade-up">
            Transform Your Unwanted Items <br />
            Into Someone's <span className="text-[#5e17eb]">Treasure</span>
          </h1>
          
          <p className="text-xl text-white/90 mb-8 max-w-xl animate-fade-up [animation-delay:200ms]">
            Simple, direct, and professional auction services for buyers and sellers alike.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up [animation-delay:400ms]">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('#current-items')}
              className="bg-[#5e17eb] text-white hover:bg-white hover:text-[#5e17eb] transition-all"
            >
              View Items
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-[#030009]"
              onClick={() => scrollToSection('#sell-form')}
            >
              Sell Your Items
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
