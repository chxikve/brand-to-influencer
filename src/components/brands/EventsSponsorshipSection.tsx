
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, DollarSign, ArrowRight, Users } from 'lucide-react';
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
      details: "Join us for three days of panels, workshops, and networking opportunities focused on creator-brand collaborations.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      organizer: "CreatorCon Events",
      attendees: "200+ content creators, 50+ brands",
      sponsorshipLevels: [
        { 
          name: "Platinum", 
          price: "$15,000", 
          benefits: ["Keynote speech opportunity", "VIP lounge access", "Premier booth location", "10 VIP passes"] 
        },
        { 
          name: "Gold", 
          price: "$10,000", 
          benefits: ["Panel speaker spot", "Brand showcase", "Prime booth location", "5 VIP passes"] 
        },
        { 
          name: "Silver", 
          price: "$5,000", 
          benefits: ["Branded session", "Booth space", "3 VIP passes"] 
        }
      ]
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
      details: "A virtual masterclass covering the latest trends in influencer marketing, content strategy, and measuring campaign success.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      organizer: "Digital Marketing Institute",
      attendees: "500+ digital marketers, 100+ brands",
      sponsorshipLevels: [
        { 
          name: "Premier", 
          price: "$7,500", 
          benefits: ["Host branded workshops", "Full attendee list", "Prominent logo placement", "Virtual booth"] 
        },
        { 
          name: "Partner", 
          price: "$5,000", 
          benefits: ["Co-host session", "Partial attendee list", "Logo on materials", "Virtual booth"] 
        },
        { 
          name: "Supporter", 
          price: "$2,500", 
          benefits: ["Virtual booth", "Logo on event page", "Post-event metrics"] 
        }
      ]
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
      details: "The largest gathering of influencers and brands on the East Coast. Perfect for making connections and showcasing your products.",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      organizer: "InfluencerCon",
      attendees: "300+ influencers, 75+ brands",
      sponsorshipLevels: [
        { 
          name: "Diamond", 
          price: "$12,000", 
          benefits: ["Main stage presentation", "VIP dinner host", "Premium booth", "8 all-access passes"] 
        },
        { 
          name: "Ruby", 
          price: "$8,000", 
          benefits: ["Speaking opportunity", "Networking event sponsor", "Premium booth", "5 all-access passes"] 
        },
        { 
          name: "Sapphire", 
          price: "$4,000", 
          benefits: ["Branded area", "Standard booth", "3 all-access passes"] 
        }
      ]
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
      details: "A week-long industry event focusing on the future of social media marketing and creator collaborations.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      organizer: "SMW Global",
      attendees: "1000+ professionals, 150+ brands",
      sponsorshipLevels: [
        { 
          name: "Title Sponsor", 
          price: "$20,000", 
          benefits: ["Naming rights", "Keynote slot", "Executive roundtable", "VIP lounge", "10 full-week passes"] 
        },
        { 
          name: "Industry Partner", 
          price: "$12,500", 
          benefits: ["Industry track sponsor", "Panel moderation", "Deluxe booth", "7 full-week passes"] 
        },
        { 
          name: "Innovation Sponsor", 
          price: "$7,500", 
          benefits: ["Innovation showcase", "Demo area", "Standard booth", "4 full-week passes"] 
        }
      ]
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
      details: "Interactive workshop where brands can directly collaborate with creators to develop campaign concepts.",
      image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      organizer: "Creator Academy",
      attendees: "150+ creators, 30+ brands",
      sponsorshipLevels: [
        { 
          name: "Workshop Host", 
          price: "$5,000", 
          benefits: ["Host branded session", "Product showcase", "Demo opportunities", "Full attendee list"] 
        },
        { 
          name: "Co-Sponsor", 
          price: "$3,000", 
          benefits: ["Co-host session", "Brand features", "Partial attendee list"] 
        },
        { 
          name: "Exhibitor", 
          price: "$1,500", 
          benefits: ["Virtual booth", "Product mention", "Attendee contacts (opt-in only)"] 
        }
      ]
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
      details: "Premium event connecting luxury brands with high-end influencers for exclusive partnership opportunities.",
      image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      organizer: "Luxury Brand Network",
      attendees: "100+ luxury influencers, 50+ premium brands",
      sponsorshipLevels: [
        { 
          name: "Elite Sponsor", 
          price: "$18,000", 
          benefits: ["Exclusive dinner host", "Private meeting space", "Priority matchmaking", "6 premium passes"] 
        },
        { 
          name: "Premier Sponsor", 
          price: "$12,000", 
          benefits: ["Cocktail reception host", "Branded lounge", "Curated introductions", "4 premium passes"] 
        },
        { 
          name: "Select Sponsor", 
          price: "$8,000", 
          benefits: ["Showcase space", "Brand feature session", "2 premium passes"] 
        }
      ]
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
              <Card key={event.id} className="animate-on-scroll hover-scale overflow-hidden" style={{ animationDelay: `${index * 100}ms` }}>
                <Link to={`/event/${event.id}`} className="block">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                    <div className="absolute top-3 right-3 bg-primary/90 text-white p-3 rounded-lg flex flex-col items-center shadow-md">
                      <span className="text-xl font-bold">{event.day}</span>
                      <span className="text-xs">{event.month}</span>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle>{event.title}</CardTitle>
                    <CardDescription>{event.description}</CardDescription>
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
                    <div className="flex items-center mb-3">
                      <DollarSign className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span className="text-sm">Sponsorship: {event.price}</span>
                    </div>
                    <div className="flex items-center mb-4">
                      <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span className="text-sm">{event.attendees}</span>
                    </div>
                    <p className="text-muted-foreground line-clamp-2">
                      {event.details}
                    </p>
                  </CardContent>
                </Link>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link to={`/event/${event.id}`} className="flex items-center justify-center">
                      View Details <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
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
