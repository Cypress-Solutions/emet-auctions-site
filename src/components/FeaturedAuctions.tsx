
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface AuctionItemProps {
  title: string;
  image: string;
  currentBid: string;
  timeLeft: string;
  bidCount: number;
  featured?: boolean;
}

const auctionItems = [
  {
    title: "1967 Ferrari 275 GTB/4",
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=600&h=400",
    currentBid: "$2,450,000",
    timeLeft: "2 days",
    bidCount: 24,
    featured: true
  },
  {
    title: "Rolex Daytona Platinum Ice Blue Dial",
    image: "https://images.unsplash.com/photo-1623998021446-45cd9b269c95?q=80&w=600&h=400",
    currentBid: "$78,500",
    timeLeft: "6 hours",
    bidCount: 36
  },
  {
    title: "Banksy Original 'Girl with Balloon'",
    image: "https://images.unsplash.com/photo-1578926375605-eaf7559b1458?q=80&w=600&h=400",
    currentBid: "$195,000",
    timeLeft: "4 days",
    bidCount: 19
  }
];

const AuctionItem: React.FC<AuctionItemProps> = ({ title, image, currentBid, timeLeft, bidCount, featured }) => {
  return (
    <Card className={`overflow-hidden border-none shadow-lg ${featured ? 'md:col-span-2' : ''}`}>
      <div className={`relative ${featured ? 'h-80' : 'h-64'}`}>
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        {featured && (
          <div className="absolute top-4 left-4">
            <Badge className="bg-brand-gold text-brand-purple-dark">Featured</Badge>
          </div>
        )}
        <div className="absolute top-4 right-4">
          <Badge variant="outline" className="bg-black/50 backdrop-blur-sm text-white">
            {timeLeft} left
          </Badge>
        </div>
      </div>
      <CardContent className="p-6 bg-white">
        <h3 className="text-xl font-semibold text-brand-purple-dark mb-2">{title}</h3>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-500">Current Bid</p>
            <p className="text-xl font-bold text-brand-purple">{currentBid}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500">{bidCount} bids</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0 bg-white">
        <Button className="w-full bg-brand-purple text-white hover:bg-brand-purple-dark">
          Place Bid
        </Button>
      </CardFooter>
    </Card>
  );
};

const FeaturedAuctions: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-purple-dark mb-4">
            Featured Auctions
          </h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our most exclusive auction items. These hand-selected pieces represent 
            the pinnacle of quality and desirability.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {auctionItems.map((item, index) => (
            <AuctionItem
              key={index}
              title={item.title}
              image={item.image}
              currentBid={item.currentBid}
              timeLeft={item.timeLeft}
              bidCount={item.bidCount}
              featured={item.featured}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" className="border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white">
            View All Auctions
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedAuctions;
