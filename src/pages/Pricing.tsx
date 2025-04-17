
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Table, 
  TableBody, 
  TableCaption, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronsRight, UtensilsCrossed, Utensils, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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

          <TabsContent value="monthly" className="space-y-12">
            {/* Monthly Plans Section */}
            <section>
              <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6">
                <UtensilsCrossed className="mr-2 h-6 w-6 text-dabbewallah-orange" />
                Tiffin (Monthly)
              </h2>

              <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-md">
                <Table>
                  <TableHeader className="bg-gray-100">
                    <TableRow>
                      <TableHead className="text-center bg-dabbewallah-peach text-gray-900">Full Tiffin Veg<br />2 time</TableHead>
                      <TableHead className="text-center bg-dabbewallah-soft-orange text-gray-900">Full Tiffin Non-veg<br />2 time</TableHead>
                      <TableHead className="text-center bg-dabbewallah-peach text-gray-900">Full Tiffin Veg<br />1 time</TableHead>
                      <TableHead className="text-center bg-dabbewallah-soft-orange text-gray-900">Full Tiffin Non-veg<br />1 time</TableHead>
                      <TableHead className="text-center bg-dabbewallah-peach text-gray-900">Half Tiffin Veg<br />2 time</TableHead>
                      <TableHead className="text-center bg-dabbewallah-soft-orange text-gray-900">Half Tiffin Non-veg<br />2 time</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="text-center bg-dabbewallah-peach/20">5-7 roti</TableCell>
                      <TableCell className="text-center bg-dabbewallah-soft-orange/20">5-7 roti</TableCell>
                      <TableCell className="text-center bg-dabbewallah-peach/20">5-7 roti</TableCell>
                      <TableCell className="text-center bg-dabbewallah-soft-orange/20">5-7 roti</TableCell>
                      <TableCell className="text-center bg-dabbewallah-peach/20">3 roti</TableCell>
                      <TableCell className="text-center bg-dabbewallah-soft-orange/20">3 roti</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="text-center font-bold bg-dabbewallah-peach/20">₹2300rs</TableCell>
                      <TableCell className="text-center font-bold bg-dabbewallah-soft-orange/20">₹2400rs</TableCell>
                      <TableCell className="text-center font-bold bg-dabbewallah-peach/20">₹1300</TableCell>
                      <TableCell className="text-center font-bold bg-dabbewallah-soft-orange/20">₹1400</TableCell>
                      <TableCell className="text-center font-bold bg-dabbewallah-peach/20">₹1600</TableCell>
                      <TableCell className="text-center font-bold bg-dabbewallah-soft-orange/20">₹1800</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </section>

            <section>
              <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6">
                <Utensils className="mr-2 h-6 w-6 text-dabbewallah-orange" />
                Dine In Full (Monthly)
              </h2>

              <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-md">
                <Table>
                  <TableHeader className="bg-gray-100">
                    <TableRow>
                      <TableHead className="text-center bg-dabbewallah-peach text-gray-900">Dine In<br />Veg Boys</TableHead>
                      <TableHead className="text-center bg-dabbewallah-peach text-gray-900">Dine In<br />Veg Girl</TableHead>
                      <TableHead className="text-center bg-dabbewallah-soft-orange text-gray-900">Dine In<br />Non-veg Boy</TableHead>
                      <TableHead className="text-center bg-dabbewallah-soft-orange text-gray-900">Dine In<br />Non-veg Girl</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="text-center bg-dabbewallah-peach/20">Unlimited for 1 person</TableCell>
                      <TableCell className="text-center bg-dabbewallah-peach/20">Unlimited for 1 person</TableCell>
                      <TableCell className="text-center bg-dabbewallah-soft-orange/20">Unlimited for 1 person</TableCell>
                      <TableCell className="text-center bg-dabbewallah-soft-orange/20">Unlimited for 1 person</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="text-center bg-dabbewallah-peach/20">2 time</TableCell>
                      <TableCell className="text-center bg-dabbewallah-peach/20">2 time</TableCell>
                      <TableCell className="text-center bg-dabbewallah-soft-orange/20">2 time</TableCell>
                      <TableCell className="text-center bg-dabbewallah-soft-orange/20">2 time</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="text-center font-bold bg-dabbewallah-peach/20">₹2300</TableCell>
                      <TableCell className="text-center font-bold bg-dabbewallah-peach/20">₹1800</TableCell>
                      <TableCell className="text-center font-bold bg-dabbewallah-soft-orange/20">₹2400</TableCell>
                      <TableCell className="text-center font-bold bg-dabbewallah-soft-orange/20">₹2000</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </section>

            <section>
              <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6">
                <Clock className="mr-2 h-6 w-6 text-dabbewallah-orange" />
                Dine In 1 Time (Monthly)
              </h2>

              <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-md">
                <Table>
                  <TableHeader className="bg-gray-100">
                    <TableRow>
                      <TableHead className="text-center bg-dabbewallah-peach text-gray-900">Dine In<br />Veg Boys</TableHead>
                      <TableHead className="text-center bg-dabbewallah-peach text-gray-900">Dine In<br />Veg Girl</TableHead>
                      <TableHead className="text-center bg-dabbewallah-soft-orange text-gray-900">Dine In<br />Non-veg Boy</TableHead>
                      <TableHead className="text-center bg-dabbewallah-soft-orange text-gray-900">Dine In<br />Non-veg Girl</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="text-center bg-dabbewallah-peach/20">Unlimited for 1 person</TableCell>
                      <TableCell className="text-center bg-dabbewallah-peach/20">Unlimited for 1 person</TableCell>
                      <TableCell className="text-center bg-dabbewallah-soft-orange/20">Unlimited for 1 person</TableCell>
                      <TableCell className="text-center bg-dabbewallah-soft-orange/20">Unlimited for 1 person</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="text-center bg-dabbewallah-peach/20">1 time</TableCell>
                      <TableCell className="text-center bg-dabbewallah-peach/20">1 time</TableCell>
                      <TableCell className="text-center bg-dabbewallah-soft-orange/20">1 time</TableCell>
                      <TableCell className="text-center bg-dabbewallah-soft-orange/20">1 time</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="text-center font-bold bg-dabbewallah-peach/20">₹1300</TableCell>
                      <TableCell className="text-center font-bold bg-dabbewallah-peach/20">₹1200</TableCell>
                      <TableCell className="text-center font-bold bg-dabbewallah-soft-orange/20">₹1400</TableCell>
                      <TableCell className="text-center font-bold bg-dabbewallah-soft-orange/20">₹1300</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </section>
          </TabsContent>

          <TabsContent value="trial" className="space-y-12">
            {/* Trial and Short Plans Section */}
            <section>
              <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6">
                <UtensilsCrossed className="mr-2 h-6 w-6 text-dabbewallah-orange" />
                Trial or Guest (Single)
              </h2>

              <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-md">
                <Table>
                  <TableHeader className="bg-gray-100">
                    <TableRow>
                      <TableHead className="text-center bg-dabbewallah-peach text-gray-900">Tiffin Veg</TableHead>
                      <TableHead className="text-center bg-dabbewallah-soft-orange text-gray-900">Tiffin Non-veg</TableHead>
                      <TableHead className="text-center bg-dabbewallah-peach text-gray-900">Dine In Veg</TableHead>
                      <TableHead className="text-center bg-dabbewallah-soft-orange text-gray-900">Dine In Non-veg</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="text-center bg-dabbewallah-peach/20">1 time</TableCell>
                      <TableCell className="text-center bg-dabbewallah-soft-orange/20">1 time</TableCell>
                      <TableCell className="text-center bg-dabbewallah-peach/20">1 time</TableCell>
                      <TableCell className="text-center bg-dabbewallah-soft-orange/20">1 time</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="text-center font-bold bg-dabbewallah-peach/20">₹90</TableCell>
                      <TableCell className="text-center font-bold bg-dabbewallah-soft-orange/20">₹130</TableCell>
                      <TableCell className="text-center font-bold bg-dabbewallah-peach/20">₹100</TableCell>
                      <TableCell className="text-center font-bold bg-dabbewallah-soft-orange/20">₹140</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </section>

            <section>
              <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6">
                <Utensils className="mr-2 h-6 w-6 text-dabbewallah-orange" />
                10 Days Plan
              </h2>

              <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-md">
                <Table>
                  <TableHeader className="bg-gray-100">
                    <TableRow>
                      <TableHead className="text-center bg-dabbewallah-peach text-gray-900">Veg<br />Full tiffin<br />2 time</TableHead>
                      <TableHead className="text-center bg-dabbewallah-soft-orange text-gray-900">Non-Veg<br />Full tiffin<br />2 time</TableHead>
                      <TableHead className="text-center bg-dabbewallah-peach text-gray-900">Veg<br />Half tiffin<br />2 time</TableHead>
                      <TableHead className="text-center bg-dabbewallah-soft-orange text-gray-900">Non-Veg<br />Half tiffin<br />2 time</TableHead>
                      <TableHead className="text-center bg-dabbewallah-peach text-gray-900">Veg<br />Full tiffin<br />1 time</TableHead>
                      <TableHead className="text-center bg-dabbewallah-soft-orange text-gray-900">Non-Veg<br />Full tiffin<br />1 time</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="text-center bg-dabbewallah-peach/20">5-7 roti</TableCell>
                      <TableCell className="text-center bg-dabbewallah-soft-orange/20">5-7 roti</TableCell>
                      <TableCell className="text-center bg-dabbewallah-peach/20">3 roti</TableCell>
                      <TableCell className="text-center bg-dabbewallah-soft-orange/20">3 roti</TableCell>
                      <TableCell className="text-center bg-dabbewallah-peach/20">5-7 roti</TableCell>
                      <TableCell className="text-center bg-dabbewallah-soft-orange/20">5-7 roti</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="text-center font-bold bg-dabbewallah-peach/20">₹800</TableCell>
                      <TableCell className="text-center font-bold bg-dabbewallah-soft-orange/20">₹900</TableCell>
                      <TableCell className="text-center font-bold bg-dabbewallah-peach/20">₹600</TableCell>
                      <TableCell className="text-center font-bold bg-dabbewallah-soft-orange/20">₹700</TableCell>
                      <TableCell className="text-center font-bold bg-dabbewallah-peach/20">₹400</TableCell>
                      <TableCell className="text-center font-bold bg-dabbewallah-soft-orange/20">₹450</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </section>

            <section>
              <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6">
                <Clock className="mr-2 h-6 w-6 text-dabbewallah-orange" />
                15 Days Plan
              </h2>

              <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-md">
                <Table>
                  <TableHeader className="bg-gray-100">
                    <TableRow>
                      <TableHead className="text-center bg-dabbewallah-peach text-gray-900">Veg<br />Full tiffin<br />2 time</TableHead>
                      <TableHead className="text-center bg-dabbewallah-soft-orange text-gray-900">Non-Veg<br />Full tiffin<br />2 time</TableHead>
                      <TableHead className="text-center bg-dabbewallah-peach text-gray-900">Veg<br />Half tiffin<br />2 time</TableHead>
                      <TableHead className="text-center bg-dabbewallah-soft-orange text-gray-900">Non-Veg<br />Half tiffin<br />2 time</TableHead>
                      <TableHead className="text-center bg-dabbewallah-peach text-gray-900">Veg<br />Full tiffin<br />1 time</TableHead>
                      <TableHead className="text-center bg-dabbewallah-soft-orange text-gray-900">Non-Veg<br />Full tiffin<br />1 time</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="text-center bg-dabbewallah-peach/20">5-7 roti</TableCell>
                      <TableCell className="text-center bg-dabbewallah-soft-orange/20">5-7 roti</TableCell>
                      <TableCell className="text-center bg-dabbewallah-peach/20">3 roti</TableCell>
                      <TableCell className="text-center bg-dabbewallah-soft-orange/20">3 roti</TableCell>
                      <TableCell className="text-center bg-dabbewallah-peach/20">5-7 roti</TableCell>
                      <TableCell className="text-center bg-dabbewallah-soft-orange/20">5-7 roti</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="text-center font-bold bg-dabbewallah-peach/20">₹1200</TableCell>
                      <TableCell className="text-center font-bold bg-dabbewallah-soft-orange/20">₹1300</TableCell>
                      <TableCell className="text-center font-bold bg-dabbewallah-peach/20">₹800</TableCell>
                      <TableCell className="text-center font-bold bg-dabbewallah-soft-orange/20">₹900</TableCell>
                      <TableCell className="text-center font-bold bg-dabbewallah-peach/20">₹600</TableCell>
                      <TableCell className="text-center font-bold bg-dabbewallah-soft-orange/20">₹650</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </section>
          </TabsContent>
        </Tabs>

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
      </div>
    </div>
  );
};

export default Pricing;
