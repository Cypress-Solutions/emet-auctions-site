
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import CurrentItems from '@/components/CurrentItems';
import HowItWorks from '@/components/HowItWorks';
import SellBanner from '@/components/SellBanner';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CurrentItems />
      <HowItWorks />
      <SellBanner />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
