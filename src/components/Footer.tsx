
import { ChefHat, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dabbewallah-orange text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-2 mb-4">
              <ChefHat className="h-6 w-6" />
              <span className="text-xl font-bold">Dabbewallah</span>
            </div>
            <p className="text-center md:text-left">
              Serving delicious and homely meals with love and care.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="flex items-center space-x-2 mb-2">
              <Phone className="h-5 w-5" />
              <span>705-768-4137</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5" />
              <span>Hollywood Colony, Kathora Road, Amravati</span>
            </div>
          </div>
          
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4">Timing</h3>
            <p>Lunch: 12:00 PM - 3:00 PM</p>
            <p>Dinner: 7:00 PM - 10:00 PM</p>
            <p className="mt-2 italic">Sunday dinner closed</p>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-white/20 text-center">
          <p>&copy; {new Date().getFullYear()} Dabbewallah. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
