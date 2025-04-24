
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    quote: "The authentication process gives me complete confidence when bidding on high-value items. I've added several exceptional pieces to my collection through Premium Auctions.",
    author: "David Chen",
    position: "Art Collector",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=120&h=120"
  },
  {
    quote: "As a seller, I appreciate the thorough vetting process and the quality of buyers. My vintage Porsche sold above reserve with minimal hassle.",
    author: "Sarah Williams",
    position: "Automotive Enthusiast",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=120&h=120"
  },
  {
    quote: "The customer service is impeccable. When I had questions about a rare watch, their expert provided detailed information that helped me make an informed decision.",
    author: "Michael Rodriguez",
    position: "Watch Collector",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=120&h=120"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-brand-purple bg-opacity-95">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto"></div>
          <p className="mt-6 text-lg text-white/80 max-w-3xl mx-auto">
            Hear from our community of collectors and enthusiasts who have experienced
            the Premium Auctions difference.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gradient-to-b from-brand-purple-light/30 to-brand-purple-dark/80 border-none shadow-xl">
              <CardContent className="p-8 text-white">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-brand-gold">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <p className="italic text-white/80 mb-6 text-center">
                  "{testimonial.quote}"
                </p>
                <div className="text-center">
                  <p className="font-semibold text-brand-gold">{testimonial.author}</p>
                  <p className="text-white/60 text-sm">{testimonial.position}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
