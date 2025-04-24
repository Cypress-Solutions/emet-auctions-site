
import React from 'react';
import { Button } from '@/components/ui/button';
import { Award, Gavel, Tag } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import SellForm from './SellForm';

const HeroSection: React.FC = () => {
  const scrollToSection = (id: string) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full bg-[#030009] flex flex-col items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030009]/80 to-[#030009]/90"></div>
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-10 top-10 w-60 h-60 bg-[#5e17eb]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -left-20 bottom-10 w-80 h-80 bg-[#5e17eb]/10 rounded-full blur-3xl animate-pulse [animation-delay:2s]"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        {/* Full Width EMET Auctions Title */}
        <h1 className="w-full text-center font-bold text-white leading-tight">
          <span className="block text-8xl md:text-9xl lg:text-[160px] mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/80 animate-fade-up">
            EMET
          </span>
          <span className="block text-7xl md:text-8xl lg:text-[120px] bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/80 animate-fade-up [animation-delay:400ms]">
            AUCTIONS
          </span>
        </h1>
        
        <div className="mt-8 flex justify-center space-x-4 animate-fade-up [animation-delay:1000ms]">
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                size="lg" 
                className="bg-[#5e17eb] text-white hover:bg-[#4a12c5] transition-all shadow-lg shadow-[#5e17eb]/20"
              >
                Sell Your Items
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">Sell Your Items</DialogTitle>
              </DialogHeader>
              <SellForm />
            </DialogContent>
          </Dialog>
          
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => scrollToSection('#contact')}
            className="border-[#5e17eb] text-[#5e17eb] bg-white hover:bg-[#5e17eb] hover:text-white transition-all shadow-lg"
          >
            Request a Callback
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
