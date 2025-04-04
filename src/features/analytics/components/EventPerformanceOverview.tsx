
import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend
} from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { attendanceData } from '@/components/analytics/data/eventData';

// Still using existing components, will transition to Material UI in next phase
const EventPerformanceOverview = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Event Performance Overview</CardTitle>
        <CardDescription>Key metrics for sponsored events</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-96 w-full">
          <ChartContainer 
            config={{
              attendance: { theme: { light: '#818cf8', dark: '#818cf8' } },
              leads: { theme: { light: '#22c55e', dark: '#22c55e' } },
              roi: { theme: { light: '#f59e0b', dark: '#f59e0b' } }
            }}
          >
            <BarChart 
              data={attendanceData}
              margin={{ top: 20, right: 30, left: 20, bottom: 70 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" angle={-45} textAnchor="end" height={70} />
              <YAxis yAxisId="left" orientation="left" />
              <YAxis yAxisId="right" orientation="right" />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Legend wrapperStyle={{ paddingTop: 20 }} />
              <Bar yAxisId="left" dataKey="attendance" name="Attendance" fill="var(--color-attendance)" />
              <Bar yAxisId="left" dataKey="leads" name="Leads Generated" fill="var(--color-leads)" />
              <Bar yAxisId="right" dataKey="roi" name="ROI (x)" fill="var(--color-roi)" />
            </BarChart>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default EventPerformanceOverview;
