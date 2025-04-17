
import React from 'react';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import MonthlyPricingTab from '@/components/pricing/MonthlyPricingTab';
import TrialPricingTab from '@/components/pricing/TrialPricingTab';
import PricingCallToAction from '@/components/pricing/PricingCallToAction';
import PricingInformation from '@/components/pricing/PricingInformation';

const Pricing = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container px-4 py-12 mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-gray-900">Pricing Plans</h1>
          <p className="mt-3 text-lg text-gray-600 max-w-3xl mx-auto">
            Choose the plan that works best for you. All plans include our delicious homemade food prepared with fresh ingredients.
          </p>
        </div>

        <Tabs defaultValue="monthly" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-dabbewallah-peach">
              <TabsTrigger value="monthly" className="data-[state=active]:bg-dabbewallah-orange data-[state=active]:text-white">
                Monthly Plans
              </TabsTrigger>
              <TabsTrigger value="trial" className="data-[state=active]:bg-dabbewallah-orange data-[state=active]:text-white">
                Trial & Short Plans
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="monthly">
            <MonthlyPricingTab />
          </TabsContent>

          <TabsContent value="trial">
            <TrialPricingTab />
          </TabsContent>
        </Tabs>

        <PricingCallToAction />
        <PricingInformation />
      </div>
    </div>
  );
};

export default Pricing;
