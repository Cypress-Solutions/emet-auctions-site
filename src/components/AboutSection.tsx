
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Package, Gavel, Tag } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#5e17eb] mb-4">
            About Us
          </h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            We're in the business of second chances – for goods and for people. 
            Our mission is to connect unwanted items with buyers who need them.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<Package className="h-12 w-12 text-[#5e17eb]" />}
            title="Buy & Sell"
            description="We purchase unwanted goods and connect them with buyers who see their value."
          />
          <FeatureCard 
            icon={<Gavel className="h-12 w-12 text-[#5e17eb]" />}
            title="Auctions"
            description="Participate in exciting auctions where treasures find new homes."
          />
          <FeatureCard 
            icon={<Tag className="h-12 w-12 text-[#5e17eb]" />}
            title="Simple Process"
            description="Whether buying or selling, we keep things straightforward and transparent."
          />
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <Card className="border border-gray-200 hover:border-[#5e17eb] transition-all duration-300">
      <CardContent className="p-6 text-center">
        <div className="flex justify-center mb-4">{icon}</div>
        <h3 className="text-xl font-semibold text-[#5e17eb] mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

export default AboutSection;
