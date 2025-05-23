
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import SellForm from './SellForm';

const HeroSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const scrollToSection = (id: string) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full bg-[#030009] flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#030009]/80 to-[#030009]/90"></div>
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-10 top-10 w-80 h-80 bg-[#5e17eb]/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute left-20 top-40 w-60 h-60 bg-[#5e17eb]/20 rounded-full blur-3xl animate-pulse [animation-delay:1s]"></div>
        <div className="absolute -left-20 bottom-10 w-96 h-96 bg-[#5e17eb]/20 rounded-full blur-3xl animate-pulse [animation-delay:2s]"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <div className="mb-8 animate-fade-up [animation-delay:200ms]">
          <img 
            src="/lovable-uploads/61c79282-c18e-4001-8fc5-32364efc8512.png" 
            alt="EMET Auctions" 
            className="w-48 h-48 mx-auto animate-pulse"
          />
        </div>

        <h1 className="w-full text-center font-bold text-white leading-tight tracking-tight">
          <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/80 animate-fade-up [animation-delay:400ms] hover:scale-105 transition-transform duration-500">
            EMET
          </span>
          <span className="relative block text-3xl sm:text-4xl md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/80 animate-fade-up [animation-delay:600ms] group">
            <span className="absolute -inset-1 bg-gradient-to-r from-[#5e17eb]/20 to-transparent blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></span>
            AUCTIONS
          </span>
        </h1>
        
        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4 sm:space-x-6 animate-fade-up [animation-delay:800ms]">
          <Button 
            size="lg" 
            onClick={() => setIsModalOpen(true)}
            className="w-full sm:w-auto bg-[#5e17eb] text-white hover:bg-[#5e17eb]/90 transition-all duration-500 shadow-lg shadow-[#5e17eb]/20 hover:shadow-[#5e17eb]/40 hover:scale-105 hover:-translate-y-1"
          >
            Sell Your Items
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => scrollToSection('#contact')}
            className="w-full sm:w-auto border-[#5e17eb] text-[#5e17eb] bg-white hover:bg-[#5e17eb] hover:text-white transition-all duration-500 shadow-lg hover:shadow-[#5e17eb]/40 hover:scale-105 hover:-translate-y-1"
          >
            Request a Callback
          </Button>
        </div>
      </div>

      <SellForm open={isModalOpen} onOpenChange={setIsModalOpen} />
    </section>
  );
};

export default HeroSection;
