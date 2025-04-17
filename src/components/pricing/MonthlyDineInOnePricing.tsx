
import React from 'react';
import { Clock } from 'lucide-react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";

const MonthlyDineInOnePricing = () => {
  return (
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
              <TableHead className="text-center bg-dabbewallah-peach text-gray-900">Dine In<br />Veg Girls</TableHead>
              <TableHead className="text-center bg-dabbewallah-soft-orange text-gray-900">Dine In<br />Non-veg Boys</TableHead>
              <TableHead className="text-center bg-dabbewallah-soft-orange text-gray-900">Dine In<br />Non-veg Girls</TableHead>
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
  );
};

export default MonthlyDineInOnePricing;
