
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Gavel, Check } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-brand-purple-dark">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About Premium Auctions
          </h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto"></div>
          <p className="mt-6 text-lg text-white/80 max-w-3xl mx-auto">
            We connect discerning collectors with extraordinary items through transparent, 
            secure auction processes. Every item in our catalog undergoes rigorous verification 
            to ensure authenticity and quality.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<Shield className="h-12 w-12 text-brand-gold" />}
            title="Secure Transactions"
            description="Our platform ensures both buyers and sellers are protected with escrow services and identity verification."
          />
          <FeatureCard 
            icon={<Gavel className="h-12 w-12 text-brand-gold" />}
            title="Exclusive Auctions"
            description="Access carefully curated auctions for premium collectibles, art, vehicles, and luxury items."
          />
          <FeatureCard 
            icon={<Check className="h-12 w-12 text-brand-gold" />}
            title="Verified Authenticity"
            description="Every item is thoroughly examined by our experts to guarantee authenticity and condition."
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
    <Card className="bg-brand-purple border border-brand-purple-light hover:border-brand-gold transition-all duration-300">
      <CardContent className="p-6 text-center">
        <div className="flex justify-center mb-4">{icon}</div>
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-white/70">{description}</p>
      </CardContent>
    </Card>
  );
};

export default AboutSection;
