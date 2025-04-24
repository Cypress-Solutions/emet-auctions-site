
import React from 'react';

const CurrentItems: React.FC = () => {
  return (
    <section id="current-items" className="relative py-32 overflow-hidden">
      {/* Premium animated background */}
      <div className="absolute inset-0 bg-[#5e17eb]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-[500px] h-[500px] rounded-full bg-white/20 -top-48 -left-24 blur-3xl animate-pulse"></div>
          <div className="absolute w-[400px] h-[400px] rounded-full bg-white/20 top-1/2 right-0 blur-3xl animate-pulse [animation-delay:2s]"></div>
          <div className="absolute w-[300px] h-[300px] rounded-full bg-white/20 bottom-0 left-1/3 blur-3xl animate-pulse [animation-delay:4s]"></div>
        </div>
      </div>

      {/* Content */}
      <div className="container relative mx-auto px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-up">
            Auction Listings Coming Soon
          </h2>
          <div className="w-24 h-1 bg-white/30 mx-auto mb-8"></div>
          <p className="text-xl text-white/80 leading-relaxed animate-fade-up [animation-delay:200ms]">
            We're preparing an exclusive collection of premium items for our upcoming auctions. 
            Stay tuned for extraordinary opportunities to acquire unique pieces.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CurrentItems;
