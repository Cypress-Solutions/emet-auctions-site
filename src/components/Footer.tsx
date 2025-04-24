import React from 'react';
import { Link } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#030009] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              Premium<span className="text-brand-gold">Auctions</span>
            </h3>
            <p className="text-white/70 mb-4">
              Connecting collectors with extraordinary items through transparent, 
              secure auction processes.
            </p>
            <div className="flex space-x-4 mt-6">
              {['facebook', 'instagram', 'twitter', 'linkedin'].map((social) => (
                <a 
                  key={social}
                  href={`#${social}`} 
                  className="w-8 h-8 border border-white/30 rounded-full flex items-center justify-center hover:border-brand-gold hover:text-brand-gold transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <Link size={16} />
                </a>
              ))}
            </div>
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
          
          {/* Auction Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Auction Categories</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-brand-gold transition-colors">Fine Art</a></li>
              <li><a href="#" className="text-white/70 hover:text-brand-gold transition-colors">Luxury Vehicles</a></li>
              <li><a href="#" className="text-white/70 hover:text-brand-gold transition-colors">Watches & Jewelry</a></li>
              <li><a href="#" className="text-white/70 hover:text-brand-gold transition-colors">Collectibles</a></li>
              <li><a href="#" className="text-white/70 hover:text-brand-gold transition-colors">Rare Books</a></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
            <p className="text-white/70 mb-4">
              Subscribe to receive notifications about upcoming auctions.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/10 text-white px-4 py-2 rounded-l outline-none focus:bg-white/20 transition-colors flex-1"
              />
              <button 
                type="submit" 
                className="bg-brand-gold text-brand-purple-dark px-4 py-2 rounded-r font-medium hover:bg-white transition-colors"
              >
                Join
              </button>
            </form>
          </div>
        </div>
        
        <hr className="border-white/10 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm">
            &copy; {new Date().getFullYear()} Premium Auctions. All rights reserved.
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
