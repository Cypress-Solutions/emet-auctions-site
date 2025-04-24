
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Upload } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const SellForm: React.FC<{ open: boolean; onOpenChange: (open: boolean) => void }> = ({ open, onOpenChange }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-white p-0">
        <DialogHeader className="px-6 pt-6">
          <DialogTitle className="text-2xl md:text-3xl font-bold text-[#5e17eb]">Sell Your Item</DialogTitle>
        </DialogHeader>
        
        <div className="px-6 pb-6">
          <p className="mt-2 text-gray-600">Let us help you turn your unwanted items into someone else's treasure.</p>
          
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
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
                  className="border-gray-200 focus:border-[#5e17eb] focus:ring-[#5e17eb]"
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
                  className="border-gray-200 focus:border-[#5e17eb] focus:ring-[#5e17eb]"
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
                className="border-gray-200 focus:border-[#5e17eb] focus:ring-[#5e17eb]"
              />
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                Item Description
              </label>
              <Textarea 
                id="description"
                placeholder="Please provide details about your item including condition, age, brand, etc." 
                className="min-h-[120px] border-gray-200 focus:border-[#5e17eb] focus:ring-[#5e17eb]"
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
                className="border-gray-200 focus:border-[#5e17eb] focus:ring-[#5e17eb]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Preferred Sale Method
              </label>
              <div className="grid grid-cols-2 gap-4">
                <label className="flex items-center space-x-2 p-4 border rounded-lg cursor-pointer hover:border-[#5e17eb] transition-all">
                  <input type="radio" name="saleMethod" value="direct" className="text-[#5e17eb]" />
                  <span>Direct Sale</span>
                </label>
                <label className="flex items-center space-x-2 p-4 border rounded-lg cursor-pointer hover:border-[#5e17eb] transition-all">
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
              className="w-full bg-[#5e17eb] text-white hover:bg-[#5e17eb]/90 py-6"
            >
              Submit Item for Review
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SellForm;
