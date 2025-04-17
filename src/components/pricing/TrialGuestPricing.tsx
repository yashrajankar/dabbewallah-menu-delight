
import React from 'react';
import { UtensilsCrossed } from 'lucide-react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";

const TrialGuestPricing = () => {
  return (
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
  );
};

export default TrialGuestPricing;
