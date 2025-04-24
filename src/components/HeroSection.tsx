
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Award, Gavel, Tag } from 'lucide-react';
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
    <section className="relative h-screen w-full bg-[#030009] flex items-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030009]/80 to-[#030009]/90"></div>
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-10 top-10 w-60 h-60 bg-[#5e17eb]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -left-20 bottom-10 w-80 h-80 bg-[#5e17eb]/10 rounded-full blur-3xl animate-pulse [animation-delay:2s]"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <img 
              src="/lovable-uploads/2d180b97-5ff3-42a4-84e2-35c59a3e7e07.png" 
              alt="EMET Auctions Logo" 
              className="h-20 animate-fade-up"
            />
            
            <h1 className="font-bold text-white leading-tight animate-fade-up [animation-delay:300ms]">
              <span className="block text-6xl md:text-7xl lg:text-8xl mb-4">EMET</span>
              <span className="block text-5xl md:text-6xl lg:text-7xl">Auctions</span>
            </h1>
            
            <p className="text-xl text-white/90 max-w-xl animate-fade-up [animation-delay:600ms]">
              Simple, direct, and professional auction services for buyers and sellers alike.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up [animation-delay:900ms]">
              <Dialog>
                <DialogTrigger asChild>
                  <Button 
                    size="lg" 
                    className="bg-[#5e17eb] text-white hover:bg-[#4a12c5] transition-all"
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
                className="border-[#5e17eb] text-[#5e17eb] bg-white hover:bg-[#5e17eb] hover:text-white"
              >
                Request a Callback
              </Button>
            </div>
          </div>
          
          {/* Right content - Features */}
          <div className="hidden md:flex flex-col space-y-6 animate-fade-up [animation-delay:1200ms]">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 transform transition-all hover:translate-y-[-5px]">
              <div className="flex items-start space-x-4">
                <div className="bg-[#5e17eb] p-3 rounded-lg">
                  <Gavel className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Professional Auctions</h3>
                  <p className="text-white/70">Expert services with transparent bidding and fair pricing.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 transform transition-all hover:translate-y-[-5px]">
              <div className="flex items-start space-x-4">
                <div className="bg-[#5e17eb] p-3 rounded-lg">
                  <Tag className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Competitive Prices</h3>
                  <p className="text-white/70">Get the best value for your items with our network of buyers.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 transform transition-all hover:translate-y-[-5px]">
              <div className="flex items-start space-x-4">
                <div className="bg-[#5e17eb] p-3 rounded-lg">
                  <Award className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Trusted Service</h3>
                  <p className="text-white/70">Join our community of satisfied buyers and sellers.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
