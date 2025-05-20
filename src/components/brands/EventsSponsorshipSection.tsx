
import React from 'react';
import { Calendar, MapPin, DollarSign, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import FilterBar from '@/components/FilterBar';
import { Event, FilterOption } from '@/types/forBrands';

interface EventsSponsorshipSectionProps {
  eventFilter: string;
  eventSearch: string;
  setEventFilter: (filter: string) => void;
  setEventSearch: (search: string) => void;
}

const EventsSponsorshipSection: React.FC<EventsSponsorshipSectionProps> = ({
  eventFilter,
  eventSearch,
  setEventFilter,
  setEventSearch
}) => {
  const eventFilterOptions: FilterOption[] = [
    { label: 'All Events', value: 'all' },
    { label: 'In-Person', value: 'in-person' },
    { label: 'Virtual', value: 'virtual' },
    { label: 'Conferences', value: 'conferences' },
    { label: 'Workshops', value: 'workshops' },
  ];

  const eventsData: Event[] = [
    {
      id: 1,
      title: "Creator Summit 2023",
      description: "Network with 200+ top creators",
      date: "November 15-17, 2023",
      location: "San Francisco, CA",
      price: "$5,000 - $15,000",
      type: "in-person",
      category: "conferences",
      day: "15",
      month: "NOV",
      details: "Join us for three days of panels, workshops, and networking opportunities focused on creator-brand collaborations."
    },
    {
      id: 2,
      title: "Digital Marketing Masterclass",
      description: "Learn from industry experts",
      date: "December 8, 2023",
      location: "Virtual Event",
      price: "$2,500 - $7,500",
      type: "virtual",
      category: "workshops",
      day: "08",
      month: "DEC",
      details: "A virtual masterclass covering the latest trends in influencer marketing, content strategy, and measuring campaign success."
    },
    {
      id: 3,
      title: "Influencer Expo 2023",
      description: "Meet 300+ content creators",
      date: "October 22-24, 2023",
      location: "New York, NY",
      price: "$4,000 - $12,000",
      type: "in-person",
      category: "conferences",
      day: "22",
      month: "OCT",
      details: "The largest gathering of influencers and brands on the East Coast. Perfect for making connections and showcasing your products."
    },
    {
      id: 4,
      title: "Social Media Week",
      description: "Global conference series",
      date: "January 15-19, 2024",
      location: "Chicago, IL",
      price: "$7,500 - $20,000",
      type: "in-person",
      category: "conferences",
      day: "15",
      month: "JAN",
      details: "A week-long industry event focusing on the future of social media marketing and creator collaborations."
    },
    {
      id: 5,
      title: "Content Creator Workshop",
      description: "Hands-on learning experience",
      date: "November 29, 2023",
      location: "Virtual Event",
      price: "$1,500 - $5,000",
      type: "virtual",
      category: "workshops",
      day: "29",
      month: "NOV",
      details: "Interactive workshop where brands can directly collaborate with creators to develop campaign concepts."
    },
    {
      id: 6,
      title: "Brand Collaboration Summit",
      description: "Exclusive networking event",
      date: "February 5-7, 2024",
      location: "Miami, FL",
      price: "$8,000 - $18,000",
      type: "in-person",
      category: "conferences",
      day: "05",
      month: "FEB",
      details: "Premium event connecting luxury brands with high-end influencers for exclusive partnership opportunities."
    }
  ];

  const filteredEvents = eventsData.filter(event => {
    if (eventFilter !== 'all') {
      if (eventFilter === 'in-person' && event.type !== 'in-person') return false;
      if (eventFilter === 'virtual' && event.type !== 'virtual') return false;
      if (eventFilter === 'conferences' && event.category !== 'conferences') return false;
      if (eventFilter === 'workshops' && event.category !== 'workshops') return false;
    }
    
    if (eventSearch) {
      const searchLower = eventSearch.toLowerCase();
      const titleMatch = event.title.toLowerCase().includes(searchLower);
      const locationMatch = event.location.toLowerCase().includes(searchLower);
      const descriptionMatch = event.description.toLowerCase().includes(searchLower);
      
      if (!titleMatch && !locationMatch && !descriptionMatch) return false;
    }
    
    return true;
  });

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-8 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Events For Sponsorship</h2>
          <p className="text-sponsify-secondary dark:text-gray-300">
            Connect with creators and industry experts at our exclusive events
          </p>
        </div>
        
        <FilterBar 
          title="Filter Events"
          filterOptions={eventFilterOptions}
          searchPlaceholder="Search events..."
          onFilterChange={setEventFilter}
          onSearch={setEventSearch}
          className="animate-on-scroll"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event, index) => (
              <Card key={event.id} className="animate-on-scroll hover-scale" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{event.title}</CardTitle>
                      <CardDescription>{event.description}</CardDescription>
                    </div>
                    <div className="bg-primary/10 p-3 rounded-lg flex flex-col items-center">
                      <span className="text-xl font-bold">{event.day}</span>
                      <span className="text-xs">{event.month}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center mb-3">
                    <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center mb-3">
                    <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  <div className="flex items-center mb-4">
                    <DollarSign className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm">Sponsorship: {event.price}</span>
                  </div>
                  <p className="text-muted-foreground">
                    {event.details}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Register Interest</Button>
                </CardFooter>
              </Card>
            ))
          ) : (
            <div className="col-span-3 text-center py-8">
              <p className="text-muted-foreground">No events found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default EventsSponsorshipSection;
