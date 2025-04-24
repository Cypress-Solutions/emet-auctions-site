
import React from 'react';

const steps = [
  {
    number: "01",
    title: "Create an Account",
    description: "Register to get full access to our premium auctions and personalized notifications."
  },
  {
    number: "02",
    title: "Browse & Research",
    description: "Explore our curated selection of verified items and review detailed descriptions."
  },
  {
    number: "03",
    title: "Place Your Bids",
    description: "Set your maximum bid and let our system automatically bid on your behalf up to your limit."
  },
  {
    number: "04",
    title: "Win & Collect",
    description: "Upon winning, complete secure payment and arrange collection or delivery of your item."
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-brand-purple">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How It Works</h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto"></div>
          <p className="mt-6 text-lg text-white/80 max-w-3xl mx-auto">
            Our streamlined auction process makes it easy to find and bid on exceptional items.
            Follow these simple steps to start your premium auction experience.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-brand-purple-light/20 rounded-lg p-8 border border-brand-purple-light hover:border-brand-gold transition-all duration-300">
                <div className="text-4xl font-bold text-brand-gold mb-4">{step.number}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-white/70">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-brand-gold/30"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
