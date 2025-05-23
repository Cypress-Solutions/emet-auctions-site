
import React from 'react';
import { ShoppingBag, ClipboardList, Calendar, CreditCard } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const buyerSteps = [
  {
    number: "01",
    title: "Browse Items",
    description: "Explore our current listings and upcoming auctions.",
    icon: <ShoppingBag size={24} />
  },
  {
    number: "02",
    title: "Create Account",
    description: "Sign up to participate in purchases and auctions.",
    icon: <ClipboardList size={24} />
  },
  {
    number: "03",
    title: "Register for Auction",
    description: "Select the auction you'd like to participate in.",
    icon: <Calendar size={24} />
  },
  {
    number: "04",
    title: "Bid & Buy",
    description: "Place your bids, win items, and complete your purchase.",
    icon: <CreditCard size={24} />
  }
];

const sellerSteps = [
  {
    number: "01",
    title: "List Your Item",
    description: "Upload photos and details of your goods.",
    icon: <ShoppingBag size={24} />
  },
  {
    number: "02",
    title: "Review Process",
    description: "We'll evaluate and determine the best sale method.",
    icon: <ClipboardList size={24} />
  },
  {
    number: "03",
    title: "Sale or Auction",
    description: "Your item gets listed or added to an upcoming auction.",
    icon: <Calendar size={24} />
  },
  {
    number: "04",
    title: "Get Paid",
    description: "Receive payment once your item sells.",
    icon: <CreditCard size={24} />
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-br from-white via-[#f8f7ff] to-[#5e17eb]/5 relative overflow-hidden">
      {/* Enhanced decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#5e17eb]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#5e17eb]/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-[#5e17eb]/3 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#030009] mb-4">How It Works</h2>
          <div className="w-24 h-1 bg-[#5e17eb] mx-auto"></div>
        </div>
        
        <div className="space-y-20">
          {/* Buyers Section */}
          <div>
            <h3 className="text-2xl font-semibold text-[#030009] mb-12 text-center">For Buyers</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {/* Flow animation line - positioned behind cards */}
              <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-[#5e17eb]/0 via-[#5e17eb]/20 to-[#5e17eb]/0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#5e17eb] to-transparent animate-flow"></div>
              </div>
              
              {/* Cards positioned above the line */}
              {buyerSteps.map((step, index) => (
                <Card key={index} className="relative z-10 group bg-white hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105">
                  <CardContent className="p-8">
                    <div className="bg-[#5e17eb] text-white rounded-xl w-14 h-14 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      {step.icon}
                    </div>
                    <div className="text-4xl font-bold text-[#5e17eb]/20 mb-4">{step.number}</div>
                    <h3 className="text-xl font-semibold text-[#030009] mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sellers Section */}
          <div>
            <h3 className="text-2xl font-semibold text-[#030009] mb-12 text-center">For Sellers</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {/* Flow animation line - positioned behind cards */}
              <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-[#5e17eb]/0 via-[#5e17eb]/20 to-[#5e17eb]/0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#5e17eb] to-transparent animate-flow"></div>
              </div>
              
              {/* Cards positioned above the line */}
              {sellerSteps.map((step, index) => (
                <Card key={index} className="relative z-10 group bg-white hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105">
                  <CardContent className="p-8">
                    <div className="bg-[#5e17eb] text-white rounded-xl w-14 h-14 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      {step.icon}
                    </div>
                    <div className="text-4xl font-bold text-[#5e17eb]/20 mb-4">{step.number}</div>
                    <h3 className="text-xl font-semibold text-[#030009] mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
