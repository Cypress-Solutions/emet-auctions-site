
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone } from 'lucide-react';

const ContactSection: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted');
    // Handle form submission logic
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-purple-dark mb-4">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Have questions or need assistance? Our team of experts is ready to help 
            with any inquiries about our auctions or services.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Information */}
          <div className="bg-brand-purple rounded-lg p-8 text-white">
            <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <Mail className="h-5 w-5 text-brand-gold" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-white/70">info@premiumauctions.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <Phone className="h-5 w-5 text-brand-gold" />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-white/70">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="text-lg font-medium mb-4">Business Hours</h4>
              <p className="text-white/70">Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p className="text-white/70">Saturday: 10:00 AM - 4:00 PM</p>
              <p className="text-white/70">Sunday: Closed</p>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <Input 
                  id="name"
                  type="text" 
                  placeholder="Your full name" 
                  className="w-full"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <Input 
                  id="email"
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <Input 
                  id="subject"
                  type="text" 
                  placeholder="How can we help?" 
                  className="w-full"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <Textarea 
                  id="message"
                  placeholder="Tell us more about your inquiry..." 
                  className="w-full min-h-32"
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-brand-purple hover:bg-brand-purple-dark text-white"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
