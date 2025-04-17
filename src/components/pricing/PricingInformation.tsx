
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronsRight } from "lucide-react";

const PricingInformation = () => {
  return (
    <div className="mt-12 p-6 bg-dabbewallah-peach/20 rounded-lg">
      <h3 className="text-xl font-bold mb-4">Important Information</h3>
      <ul className="space-y-2">
        <li className="flex items-start">
          <ChevronsRight className="h-5 w-5 text-dabbewallah-orange mr-2 shrink-0 mt-0.5" />
          <span>Monthly mess subscription prices vary based on meal type, frequency, and portion size.</span>
        </li>
        <li className="flex items-start">
          <ChevronsRight className="h-5 w-5 text-dabbewallah-orange mr-2 shrink-0 mt-0.5" />
          <span>Lunch time is 12:00 PM to 3:00 PM and dinner time is 7:00 PM to 10:00 PM.</span>
        </li>
        <li className="flex items-start">
          <ChevronsRight className="h-5 w-5 text-dabbewallah-orange mr-2 shrink-0 mt-0.5" />
          <span>Sunday dinner is closed.</span>
        </li>
        <li className="flex items-start">
          <ChevronsRight className="h-5 w-5 text-dabbewallah-orange mr-2 shrink-0 mt-0.5" />
          <span>No delivery of food to rooms. Dining is only allowed in the mess area.</span>
        </li>
        <li className="flex items-start">
          <ChevronsRight className="h-5 w-5 text-dabbewallah-orange mr-2 shrink-0 mt-0.5" />
          <span>For more details about terms and conditions, please visit our <Link to="/terms" className="text-dabbewallah-orange hover:underline">Terms page</Link>.</span>
        </li>
      </ul>
    </div>
  );
};

export default PricingInformation;
