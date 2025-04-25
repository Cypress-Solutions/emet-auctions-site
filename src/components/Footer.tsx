import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#030009] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              EMET<span className="text-brand-gold"> Auctions</span>
            </h3>
            <p className="text-white/70 mb-4">
              Connecting collectors with extraordinary items through transparent, 
              secure auction processes.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-white/70 hover:text-brand-gold transition-colors">About Us</a></li>
              <li><a href="#auctions" className="text-white/70 hover:text-brand-gold transition-colors">Featured Auctions</a></li>
              <li><a href="#how-it-works" className="text-white/70 hover:text-brand-gold transition-colors">How It Works</a></li>
              <li><a href="#testimonials" className="text-white/70 hover:text-brand-gold transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-white/70 hover:text-brand-gold transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm">
            <h4 className="text-lg font-semibold mb-4">Join Our Exclusive Auctions</h4>
            <p className="text-white/70 mb-6">
              Be the first to know about upcoming auctions and receive exclusive invitations to premium events.
            </p>
            <form className="space-y-4">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="w-full bg-white/10 text-white px-4 py-3 rounded-lg outline-none focus:bg-white/20 transition-colors border border-white/20 focus:border-white/40" 
              />
              <button 
                type="submit" 
                className="w-full bg-white hover:bg-white/90 text-[#030009] px-6 py-3 rounded-lg font-semibold transition-colors shadow-lg"
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
        
        <hr className="border-white/10 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm">
            &copy; {new Date().getFullYear()} EMET Auctions. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white/50 text-sm hover:text-brand-gold transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/50 text-sm hover:text-brand-gold transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-white/50 text-sm hover:text-brand-gold transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
