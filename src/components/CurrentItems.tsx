
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const items = [
  {
    title: "Vintage Leather Armchair",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=600&h=400",
    price: "$450",
    type: "sale"
  },
  {
    title: "2023 MacBook Pro",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&h=400",
    startingBid: "$1,200",
    endsIn: "2 days",
    type: "auction"
  },
  {
    title: "Luxury Watch Collection",
    image: "https://images.unsplash.com/photo-1623998021446-45cd9b269c95?q=80&w=600&h=400",
    startingBid: "$3,500",
    endsIn: "5 days",
    type: "auction"
  }
];

const CurrentItems: React.FC = () => {
  return (
    <section id="current-items" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#5e17eb] mb-4">
            Current Listings
          </h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Browse our latest items for sale and upcoming auctions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-lg">
              <div className="h-64 relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge className={item.type === 'auction' ? 'bg-[#5e17eb] text-white' : 'bg-brand-gold text-[#5e17eb]'}>
                    {item.type === 'auction' ? 'Auction' : 'For Sale'}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-[#5e17eb] mb-2">{item.title}</h3>
                <div>
                  {item.type === 'auction' ? (
                    <>
                      <p className="text-sm text-gray-500">Starting Bid</p>
                      <p className="text-xl font-bold text-[#5e17eb]">{item.startingBid}</p>
                      <p className="text-sm text-gray-500 mt-2">Ends in: {item.endsIn}</p>
                    </>
                  ) : (
                    <>
                      <p className="text-sm text-gray-500">Price</p>
                      <p className="text-xl font-bold text-[#5e17eb]">{item.price}</p>
                    </>
                  )}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button className="w-full bg-[#5e17eb] text-white hover:bg-[#5e17eb]/90">
                  {item.type === 'auction' ? 'Place Bid' : 'Buy Now'}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurrentItems;
