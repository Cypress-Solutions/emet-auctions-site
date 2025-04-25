
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ContactSection: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted');
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#030009] mb-4">
            Contact Us - Sell Your Items
          </h2>
          <div className="w-24 h-1 bg-[#5e17eb] mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to turn your valuable items into profit? Connect with our auction experts 
            and start your selling journey today.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Information */}
          <Card className="bg-gradient-to-br from-[#5e17eb] to-[#4a12c5] text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-8">Auction Selling Inquiries</h3>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <Mail className="h-6 w-6 text-white/80" />
                  </div>
                  <div>
                    <p className="font-medium text-lg">Email Auction Team</p>
                    <p className="text-white/80 text-lg">sellers@emetauctions.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <Phone className="h-6 w-6 text-white/80" />
                  </div>
                  <div>
                    <p className="font-medium text-lg">Seller Hotline</p>
                    <p className="text-white/80 text-lg">+27 76 444 3584</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h4 className="text-xl font-medium mb-4">Auction Consultation Hours</h4>
                <div className="space-y-2 text-white/80 text-lg">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Consultation by Appointment</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Contact Form */}
          <Card className="shadow-xl border-none">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <Input id="name" type="text" placeholder="Your full name" className="w-full py-3" required />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <Input id="email" type="email" placeholder="Your email address" className="w-full py-3" required />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Auction Item Type
                  </label>
                  <Input id="subject" type="text" placeholder="What item are you looking to sell?" className="w-full py-3" required />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Item Description
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Provide details about your auction item..." 
                    className="w-full min-h-32 resize-none" 
                    required 
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg"
                  className="w-full bg-[#5e17eb] hover:bg-[#4a12c5] text-white shadow-lg hover:shadow-[#5e17eb]/20"
                >
                  Submit Auction Inquiry
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

