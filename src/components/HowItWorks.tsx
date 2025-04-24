import React from 'react';
import { User, Gavel, Package, Tag } from 'lucide-react';

const buyerSteps = [
  {
    number: "01",
    title: "Browse Items",
    description: "Explore our current listings and upcoming auctions."
  },
  {
    number: "02",
    title: "Create Account",
    description: "Sign up to participate in purchases and auctions."
  },
  {
    number: "03",
    title: "Register for Auction",
    description: "Select the auction you'd like to participate in."
  },
  {
    number: "04",
    title: "Bid & Buy",
    description: "Place your bids, win items, and complete your purchase."
  }
];

const sellerSteps = [
  {
    number: "01",
    title: "List Your Item",
    description: "Upload photos and details of your goods."
  },
  {
    number: "02",
    title: "Review Process",
    description: "We'll evaluate and determine the best sale method."
  },
  {
    number: "03",
    title: "Sale or Auction",
    description: "Your item gets listed or added to an upcoming auction."
  },
  {
    number: "04",
    title: "Get Paid",
    description: "Receive payment once your item sells."
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-[#5e17eb]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How It Works</h2>
          <div className="w-24 h-1 bg-white mx-auto"></div>
        </div>
        
        <div className="space-y-16">
          {/* Buyers Section */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8 text-center">For Buyers</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {buyerSteps.map((step, index) => (
                <div key={index} className="relative group">
                  <div className="bg-white/10 rounded-lg p-8 border border-white/20 transition-all duration-300 hover:bg-white/20 hover:border-white">
                    <div className="text-4xl font-bold text-white mb-4">{step.number}</div>
                    <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                    <p className="text-white/70">{step.description}</p>
                  </div>
                  
                  {index < buyerSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-white/30"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Sellers Section */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8 text-center">For Sellers</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {sellerSteps.map((step, index) => (
                <div key={index} className="relative group">
                  <div className="bg-white/10 rounded-lg p-8 border border-white/20 transition-all duration-300 hover:bg-white/20 hover:border-white">
                    <div className="text-4xl font-bold text-white mb-4">{step.number}</div>
                    <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                    <p className="text-white/70">{step.description}</p>
                  </div>
                  
                  {index < sellerSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-white/30"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
