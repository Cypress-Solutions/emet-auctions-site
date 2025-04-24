
import React, { useState } from 'react';
import { Award } from 'lucide-react';
import SellForm from './SellForm';

const SellBanner: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-white via-[#f8f7ff] to-[#5e17eb]/5">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#5e17eb]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#5e17eb]/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center p-2 bg-[#5e17eb]/5 rounded-full mb-6">
            <Award className="w-6 h-6 text-[#5e17eb] mr-2" />
            <span className="text-sm font-medium text-[#5e17eb]">Premium Auction Service</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Transform Your Valuables into Opportunities
          </h2>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Join our exclusive auction platform where premium items find their perfect match. 
            Our expert team ensures maximum value for your cherished possessions.
          </p>
          
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center px-8 py-4 bg-[#5e17eb] text-white rounded-lg font-medium text-lg hover:bg-[#5e17eb]/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-[#5e17eb]/20"
          >
            Start Selling Today
          </button>
        </div>
      </div>

      <SellForm open={isModalOpen} onOpenChange={setIsModalOpen} />
    </section>
  );
};

export default SellBanner;
