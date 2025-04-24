
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Upload } from 'lucide-react';

const SellForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <section id="sell-form" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#5e17eb] mb-4">
            Sell Your Item
          </h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Let us help you turn your unwanted items into someone else's treasure.
            Fill out the form below to get started.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <Input 
                id="name"
                type="text" 
                placeholder="Your full name" 
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
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Contact Number
            </label>
            <Input 
              id="phone"
              type="tel" 
              placeholder="Your phone number" 
              required
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
              Item Description
            </label>
            <Textarea 
              id="description"
              placeholder="Please provide details about your item including condition, age, brand, etc." 
              className="min-h-[120px]"
              required
            />
          </div>

          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
              Asking Price (Optional)
            </label>
            <Input 
              id="price"
              type="text" 
              placeholder="Your desired selling price" 
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Preferred Sale Method
            </label>
            <div className="grid grid-cols-2 gap-4">
              <label className="flex items-center space-x-2 p-4 border rounded-lg cursor-pointer hover:border-[#5e17eb]">
                <input type="radio" name="saleMethod" value="direct" className="text-[#5e17eb]" />
                <span>Direct Sale</span>
              </label>
              <label className="flex items-center space-x-2 p-4 border rounded-lg cursor-pointer hover:border-[#5e17eb]">
                <input type="radio" name="saleMethod" value="auction" className="text-[#5e17eb]" />
                <span>Auction</span>
              </label>
            </div>
          </div>

          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-[#5e17eb] transition-all cursor-pointer">
            <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <p className="text-sm text-gray-600">
              Drop your photos here, or click to upload
            </p>
          </div>

          <Button 
            type="submit" 
            className="w-full bg-[#5e17eb] text-white hover:bg-[#5e17eb]/90"
          >
            Submit Item for Review
          </Button>
        </form>
      </div>
    </section>
  );
};

export default SellForm;
