
import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft,
  Calendar,
  MapPin, 
  DollarSign,
  Users,
  Globe,
  Mail,
  Star,
  Clock,
  Tag,
  Briefcase
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardFooter 
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/navbar';
import Footer from '@/components/Footer';

// This is a temporary data source - in a real app, you'd fetch this from an API
const eventsData = [
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

const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = eventsData.find(event => event.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const goBack = () => {
    navigate(-1);
  };

  if (!event) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main className="container mx-auto px-4 py-32">
          <div className="flex items-center mb-8">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={goBack} 
              className="mr-2"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <h1 className="text-2xl font-bold">Event not found</h1>
          </div>
          <p>Sorry, the event you're looking for doesn't exist or has been removed.</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="container mx-auto px-4 py-24">
        {/* Back Button */}
        <div className="mb-8">
          <Button 
            variant="ghost" 
            className="flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={goBack}
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Events
          </Button>
        </div>

        {/* Event Header */}
        <div className="rounded-lg overflow-hidden mb-8">
          <div className="relative h-80 md:h-96">
            <img 
              src={event.image} 
              alt={event.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 md:p-8 text-white">
              <div className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-md text-sm mb-3">
                {event.type === "in-person" ? "In-Person Event" : "Virtual Event"}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{event.title}</h1>
              <div className="flex items-center gap-4 text-sm md:text-base">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {event.date}
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  {event.location}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Event Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="md:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>About This Event</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg mb-6">{event.details}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <Users className="h-5 w-5 mr-3 text-primary mt-1" />
                    <div>
                      <h3 className="font-medium">Attendees</h3>
                      <p className="text-sm text-muted-foreground">{event.attendees}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Briefcase className="h-5 w-5 mr-3 text-primary mt-1" />
                    <div>
                      <h3 className="font-medium">Organizer</h3>
                      <p className="text-sm text-muted-foreground">{event.organizer}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Tag className="h-5 w-5 mr-3 text-primary mt-1" />
                    <div>
                      <h3 className="font-medium">Category</h3>
                      <p className="text-sm text-muted-foreground capitalize">{event.category}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Sponsorship Opportunities</CardTitle>
                <CardDescription>Choose the level that's right for your brand</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {event.sponsorshipLevels?.map((level, index) => (
                    <div key={index} className="p-4 border rounded-lg bg-gray-50 dark:bg-gray-800">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
                        <h3 className="font-semibold text-lg">{level.name}</h3>
                        <div className="mt-2 sm:mt-0">
                          <Badge variant="outline" className="font-bold text-primary border-primary">
                            {level.price}
                          </Badge>
                        </div>
                      </div>
                      <Separator className="my-4" />
                      <h4 className="text-sm font-medium mb-2">Benefits:</h4>
                      <ul className="space-y-2">
                        {level.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start">
                            <Star className="h-4 w-4 text-amber-500 mr-2 mt-0.5" />
                            <span className="text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 pt-4 border-t">
                        <Button size="sm" className="w-full sm:w-auto">Apply for {level.name} Sponsorship</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Event Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-3 text-primary" />
                  <div>
                    <h3 className="font-medium">Date</h3>
                    <p className="text-sm text-muted-foreground">{event.date}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-3 text-primary" />
                  <div>
                    <h3 className="font-medium">Duration</h3>
                    <p className="text-sm text-muted-foreground">
                      {event.date.includes("-") ? "Multi-day event" : "One day event"}
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-3 text-primary" />
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p className="text-sm text-muted-foreground">{event.location}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <DollarSign className="h-5 w-5 mr-3 text-primary" />
                  <div>
                    <h3 className="font-medium">Sponsorship Range</h3>
                    <p className="text-sm text-muted-foreground">{event.price}</p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-center">
                  <Globe className="h-5 w-5 mr-3 text-primary" />
                  <div>
                    <h3 className="font-medium">Website</h3>
                    <a href="#" className="text-sm text-primary hover:underline">Visit event website</a>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 text-primary" />
                  <div>
                    <h3 className="font-medium">Contact</h3>
                    <a href="#" className="text-sm text-primary hover:underline">events@sponsify.com</a>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Register Interest</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Related Events</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {eventsData
                    .filter(relatedEvent => 
                      relatedEvent.id !== event.id && 
                      (relatedEvent.category === event.category || relatedEvent.type === event.type)
                    )
                    .slice(0, 2)
                    .map(relatedEvent => (
                      <Link to={`/event/${relatedEvent.id}`} key={relatedEvent.id} className="block group">
                        <div className="flex gap-3">
                          <div className="w-20 h-20 overflow-hidden rounded-md flex-shrink-0">
                            <img 
                              src={relatedEvent.image} 
                              alt={relatedEvent.title} 
                              className="h-full w-full object-cover group-hover:scale-105 transition-transform"
                            />
                          </div>
                          <div>
                            <h3 className="font-medium group-hover:text-primary transition-colors">
                              {relatedEvent.title}
                            </h3>
                            <p className="text-sm text-muted-foreground">{relatedEvent.date}</p>
                            <p className="text-sm text-muted-foreground">{relatedEvent.location}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/for-brands">View All Events</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EventDetails;
