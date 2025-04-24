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

        <h1 className="w-full text-center font-bold text-white leading-tight">
          <span className="block text-8xl md:text-9xl lg:text-[160px] mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/80 animate-fade-up [animation-delay:400ms]">
            EMET
          </span>
          <span className="block text-7xl md:text-8xl lg:text-[120px] bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/80 animate-fade-up [animation-delay:600ms]">
            AUCTIONS
          </span>
        </h1>
        
        <div className="mt-12 flex justify-center space-x-6 animate-fade-up [animation-delay:800ms]">
          <Button 
            size="lg" 
            onClick={() => setIsModalOpen(true)}
            className="bg-[#5e17eb] text-white hover:bg-[#4a12c5] transition-all duration-500 shadow-lg shadow-[#5e17eb]/20 hover:shadow-[#5e17eb]/40 hover:scale-105 hover:-translate-y-1"
          >
            Sell Your Items
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => scrollToSection('#contact')}
            className="border-[#5e17eb] text-[#5e17eb] bg-white hover:bg-[#5e17eb] hover:text-white transition-all duration-500 shadow-lg hover:shadow-[#5e17eb]/40 hover:scale-105 hover:-translate-y-1"
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
