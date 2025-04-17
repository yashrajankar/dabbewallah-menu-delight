
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

const MonthlyTiffinPricing = () => {
  return (
    <section>
      <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6">
        <UtensilsCrossed className="mr-2 h-6 w-6 text-dabbewallah-orange" />
        Tiffin (Monthly)
      </h2>

      <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-md">
        <Table>
          <TableHeader className="bg-gray-100">
            <TableRow>
              <TableHead className="text-center bg-dabbewallah-peach text-gray-900">Full Tiffin Veg<br />2 times</TableHead>
              <TableHead className="text-center bg-dabbewallah-soft-orange text-gray-900">Full Tiffin Non-veg<br />2 times</TableHead>
              <TableHead className="text-center bg-dabbewallah-peach text-gray-900">Full Tiffin Veg<br />1 time</TableHead>
              <TableHead className="text-center bg-dabbewallah-soft-orange text-gray-900">Full Tiffin Non-veg<br />1 time</TableHead>
              <TableHead className="text-center bg-dabbewallah-peach text-gray-900">Half Tiffin Veg<br />2 times</TableHead>
              <TableHead className="text-center bg-dabbewallah-soft-orange text-gray-900">Half Tiffin Non-veg<br />2 times</TableHead>
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
              <TableCell className="text-center font-bold bg-dabbewallah-peach/20">₹2300</TableCell>
              <TableCell className="text-center font-bold bg-dabbewallah-soft-orange/20">₹2400</TableCell>
              <TableCell className="text-center font-bold bg-dabbewallah-peach/20">₹1300</TableCell>
              <TableCell className="text-center font-bold bg-dabbewallah-soft-orange/20">₹1400</TableCell>
              <TableCell className="text-center font-bold bg-dabbewallah-peach/20">₹1600</TableCell>
              <TableCell className="text-center font-bold bg-dabbewallah-soft-orange/20">₹1800</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </section>
  );
};

export default MonthlyTiffinPricing;
