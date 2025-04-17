
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const PricingCallToAction = () => {
  return (
    <div className="mt-16 text-center space-y-6">
      <h2 className="text-2xl font-bold">Ready to Enjoy Delicious Homemade Food?</h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Subscribe to our mess service and enjoy healthy, homely meals every day. Contact us to get started!
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link to="/contact">
          <Button className="bg-dabbewallah-orange hover:bg-dabbewallah-orange/90 text-white">
            Contact Us
          </Button>
        </Link>
        <Link to="/menu">
          <Button variant="outline" className="border-dabbewallah-orange text-dabbewallah-orange hover:bg-dabbewallah-orange/10">
            View Menu
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default PricingCallToAction;
