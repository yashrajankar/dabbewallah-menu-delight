
import React from 'react';
import TrialGuestPricing from './TrialGuestPricing';
import TenDaysPricing from './TenDaysPricing';
import FifteenDaysPricing from './FifteenDaysPricing';

const TrialPricingTab = () => {
  return (
    <div className="space-y-12">
      <TrialGuestPricing />
      <TenDaysPricing />
      <FifteenDaysPricing />
    </div>
  );
};

export default TrialPricingTab;
