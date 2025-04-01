
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const EventROITable = () => {
  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle>Event ROI Analysis</CardTitle>
        <CardDescription>Detailed breakdown of investment and returns by event</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Event Name</TableHead>
                <TableHead>Investment</TableHead>
                <TableHead>Leads Generated</TableHead>
                <TableHead>Conversions</TableHead>
                <TableHead>Revenue</TableHead>
                <TableHead>ROI</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Creator Summit</TableCell>
                <TableCell>$15,000</TableCell>
                <TableCell>350</TableCell>
                <TableCell>42</TableCell>
                <TableCell>$36,000</TableCell>
                <TableCell className="text-green-600">2.4x</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Marketing Expo</TableCell>
                <TableCell>$12,000</TableCell>
                <TableCell>215</TableCell>
                <TableCell>26</TableCell>
                <TableCell>$21,600</TableCell>
                <TableCell className="text-green-600">1.8x</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Tech Conference</TableCell>
                <TableCell>$18,000</TableCell>
                <TableCell>420</TableCell>
                <TableCell>58</TableCell>
                <TableCell>$55,800</TableCell>
                <TableCell className="text-green-600">3.1x</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Industry Meetup</TableCell>
                <TableCell>$8,000</TableCell>
                <TableCell>180</TableCell>
                <TableCell>19</TableCell>
                <TableCell>$12,000</TableCell>
                <TableCell className="text-green-600">1.5x</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Brand Workshop</TableCell>
                <TableCell>$5,000</TableCell>
                <TableCell>125</TableCell>
                <TableCell>14</TableCell>
                <TableCell>$11,000</TableCell>
                <TableCell className="text-green-600">2.2x</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default EventROITable;
