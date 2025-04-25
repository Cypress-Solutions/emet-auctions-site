import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import SellForm from './SellForm';

const CurrentItems: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="current-items" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#5e17eb]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-[500px] h-[500px] rounded-full bg-white/20 -top-48 -left-24 blur-3xl animate-pulse"></div>
          <div className="absolute w-[400px] h-[400px] rounded-full bg-white/20 top-1/2 right-0 blur-3xl animate-pulse [animation-delay:2s]"></div>
          <div className="absolute w-[300px] h-[300px] rounded-full bg-white/20 bottom-0 left-1/3 blur-3xl animate-pulse [animation-delay:4s]"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-up">
            Online Auctions Platform
          </h2>
          <div className="w-24 h-1 bg-white/30 mx-auto mb-8"></div>
          <p className="text-xl text-white/80 leading-relaxed animate-fade-up [animation-delay:200ms] mb-12">
            Experience the thrill of live bidding from anywhere in the world. Our online auction platform 
            brings exclusive items directly to your screen, with real-time bidding and instant notifications.
          </p>
          
          <Button 
            size="lg"
            onClick={() => setIsModalOpen(true)}
            className="w-full sm:w-auto bg-white text-[#5e17eb] hover:bg-white/90 transition-all duration-500 animate-fade-up [animation-delay:400ms] shadow-lg hover:shadow-white/20 hover:scale-105 hover:-translate-y-1 group px-8 py-6 text-lg font-semibold"
          >
            Join Online Auctions
            <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>

      <SellForm open={isModalOpen} onOpenChange={setIsModalOpen} />
    </section>
  );
};

export default CurrentItems;
