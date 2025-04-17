
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

const FifteenDaysPricing = () => {
  return (
    <section>
      <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6">
        <Clock className="mr-2 h-6 w-6 text-dabbewallah-orange" />
        15 Days Plan
      </h2>

      <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-md">
        <Table>
          <TableHeader className="bg-gray-100">
            <TableRow>
              <TableHead className="text-center bg-dabbewallah-peach text-gray-900">Veg<br />Full tiffin<br />2 times</TableHead>
              <TableHead className="text-center bg-dabbewallah-soft-orange text-gray-900">Non-Veg<br />Full tiffin<br />2 times</TableHead>
              <TableHead className="text-center bg-dabbewallah-peach text-gray-900">Veg<br />Half tiffin<br />2 times</TableHead>
              <TableHead className="text-center bg-dabbewallah-soft-orange text-gray-900">Non-Veg<br />Half tiffin<br />2 times</TableHead>
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
  );
};

export default FifteenDaysPricing;
