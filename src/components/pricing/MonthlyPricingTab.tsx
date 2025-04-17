
import React from 'react';
import MonthlyTiffinPricing from './MonthlyTiffinPricing';
import MonthlyDineInFullPricing from './MonthlyDineInFullPricing';
import MonthlyDineInOnePricing from './MonthlyDineInOnePricing';

const MonthlyPricingTab = () => {
  return (
    <div className="space-y-12">
      <MonthlyTiffinPricing />
      <MonthlyDineInFullPricing />
      <MonthlyDineInOnePricing />
    </div>
  );
};

export default MonthlyPricingTab;
