
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import AuctionCategories from '@/components/AuctionCategories';
import HowItWorks from '@/components/HowItWorks';
import FeaturedAuctions from '@/components/FeaturedAuctions';
import Testimonials from '@/components/Testimonials';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <AuctionCategories />
      <HowItWorks />
      <FeaturedAuctions />
      <Testimonials />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
