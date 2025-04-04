
import React from 'react';
import { 
  EventPerformanceOverview,
  DailyEngagementChart,
  SocialMediaImpactChart,
  EventROITable
} from './components';

interface EventAnalyticsReportProps {
  timeRange: 'week' | 'month' | 'quarter' | 'year';
}

const EventAnalyticsReport: React.FC<EventAnalyticsReportProps> = ({ timeRange }) => {
  // In a real application, we would filter data based on timeRange
  // and pass filtered data to each component
  
  return (
    <div className="space-y-8">
      <div className="mb-2 text-sm text-muted-foreground">
        Showing data for the last {timeRange}
      </div>
      
      <EventPerformanceOverview />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <DailyEngagementChart />
        <SocialMediaImpactChart />
      </div>

      <EventROITable />
    </div>
  );
};

export default EventAnalyticsReport;
