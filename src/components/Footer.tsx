
import { ChefHat, Phone, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dabbewallah-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center mb-4">
              <div className="flex items-end">
                <span className="text-white text-2xl font-bold tracking-tight">dabbe</span>
                <span className="text-dabbewallah-orange text-2xl font-bold tracking-tight">wallah</span>
              </div>
            </div>
            <p className="text-center md:text-left text-gray-300 mt-2">
              Serving delicious and homely meals with love and care since 2015.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-white hover:text-dabbewallah-orange transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-dabbewallah-orange transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-semibold mb-4 text-dabbewallah-orange">Contact Info</h3>
            <div className="flex items-start space-x-3 mb-3">
              <Phone className="h-5 w-5 text-dabbewallah-yellow mt-0.5" />
              <span className="text-gray-300">705-768-4137</span>
            </div>
            <div className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 text-dabbewallah-yellow mt-0.5" />
              <span className="text-gray-300">Hollywood Colony, Kathora Road, Amravati</span>
            </div>
          </div>
          
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-semibold mb-4 text-dabbewallah-orange">Business Hours</h3>
            <div className="flex items-start space-x-3 mb-3">
              <Clock className="h-5 w-5 text-dabbewallah-yellow mt-0.5" />
              <div>
                <p className="text-gray-300">Lunch: 12:00 PM - 3:00 PM</p>
                <p className="text-gray-300">Dinner: 7:00 PM - 10:00 PM</p>
                <p className="text-gray-300 mt-2 italic">Sunday dinner closed</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Dabbewallah. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <Link to="/" className="text-gray-400 hover:text-dabbewallah-orange text-sm transition-colors">
                Home
              </Link>
              <Link to="/menu" className="text-gray-400 hover:text-dabbewallah-orange text-sm transition-colors">
                Menu
              </Link>
              <Link to="/contact" className="text-gray-400 hover:text-dabbewallah-orange text-sm transition-colors">
                Contact
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-dabbewallah-orange text-sm transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
