
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface CategoryCardProps {
  title: string;
  image: string;
  count: number;
}

const categories = [
  {
    title: "Fine Art",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=600&h=400",
    count: 42
  },
  {
    title: "Luxury Vehicles",
    image: "https://images.unsplash.com/photo-1494905998402-395d579af36f?q=80&w=600&h=400",
    count: 28
  },
  {
    title: "Timepieces",
    image: "https://images.unsplash.com/photo-1587925358603-c2eea5305bbc?q=80&w=600&h=400",
    count: 37
  },
  {
    title: "Collectibles",
    image: "https://images.unsplash.com/photo-1605142859862-978be7eba909?q=80&w=600&h=400",
    count: 56
  }
];

const CategoryCard: React.FC<CategoryCardProps> = ({ title, image, count }) => {
  return (
    <Card className="overflow-hidden border-none group cursor-pointer">
      <div className="relative h-64">
        <div className="absolute inset-0 bg-gradient-to-t from-brand-purple-dark to-transparent z-10"></div>
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute bottom-0 left-0 w-full p-4 z-20">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <div className="flex justify-between items-center mt-2">
            <Badge variant="outline" className="bg-brand-gold/20 text-brand-gold border-brand-gold">
              {count} auctions
            </Badge>
            <span className="text-white/80 text-sm">View All</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

const AuctionCategories: React.FC = () => {
  return (
    <section id="auctions" className="py-24 bg-gradient-to-b from-brand-purple to-brand-purple-dark">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Explore Our Categories
          </h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto"></div>
          <p className="mt-6 text-lg text-white/80 max-w-3xl mx-auto">
            Discover exceptional items across our diverse collection of premium categories.
            Each auction is carefully curated to ensure the highest quality.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              title={category.title}
              image={category.image}
              count={category.count}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AuctionCategories;
