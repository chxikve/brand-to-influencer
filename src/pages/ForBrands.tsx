import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FilterBar from '@/components/FilterBar';
import { 
  Medal, 
  BarChart4, 
  Users, 
  Calendar, 
  MapPin, 
  ArrowRight, 
  CheckCircle2,
  DollarSign,
  Award,
  Star,
  BadgePercent,
  BadgeDollarSign,
  Handshake,
  Gift
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { creators } from '@/data/creators';
import { Link } from 'react-router-dom';

const eventFilterOptions = [
  { label: 'All Events', value: 'all' },
  { label: 'In-Person', value: 'in-person' },
  { label: 'Virtual', value: 'virtual' },
  { label: 'Conferences', value: 'conferences' },
  { label: 'Workshops', value: 'workshops' },
];

const creatorFilterOptions = [
  { label: 'All Creators', value: 'all' },
  { label: 'Lifestyle', value: 'lifestyle' },
  { label: 'Tech', value: 'tech' },
  { label: 'Fitness', value: 'fitness' },
  { label: 'Beauty', value: 'beauty' },
  { label: 'Gaming', value: 'gaming' },
];

const locationFilterOptions = [
  { label: 'All Locations', value: 'all' },
  { label: 'Retail Stores', value: 'retail' },
  { label: 'Bars & Restaurants', value: 'bars' },
  { label: 'Supermarkets', value: 'supermarkets' },
  { label: 'Shopping Malls', value: 'malls' },
  { label: 'Entertainment Venues', value: 'entertainment' },
];

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

const advertisingLocations = [
  {
    title: "Retail Stores",
    items: [
      "In-store product displays",
      "Point-of-purchase materials",
      "Interactive kiosks",
      "Checkout counter promotions"
    ]
  },
  {
    title: "Food & Beverage",
    items: [
      "Restaurant table displays",
      "Bar promotional events",
      "Coffee shop branded items",
      "Menu advertising"
    ]
  },
  {
    title: "Public Spaces",
    items: [
      "Shopping mall displays",
      "Airport advertising",
      "Transit station promotions",
      "Event venue sponsorships"
    ]
  }
];

const ForBrands = () => {
  const [eventFilter, setEventFilter] = useState('all');
  const [creatorFilter, setCreatorFilter] = useState('all');
  const [locationFilter, setLocationFilter] = useState('all');
  
  const [eventSearch, setEventSearch] = useState('');
  const [creatorSearch, setCreatorSearch] = useState('');
  const [locationSearch, setLocationSearch] = useState('');

  const filteredCreators = creators
    .filter(creator => {
      if (creatorFilter !== 'all' && creator.niche.toLowerCase() !== creatorFilter) {
        return false;
      }
      if (creatorSearch && !creator.name.toLowerCase().includes(creatorSearch.toLowerCase())) {
        return false;
      }
      return true;
    })
    .slice(0, 3);

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

  const filteredLocations = advertisingLocations.filter(location => {
    if (locationFilter !== 'all') {
      const categoryMatches = 
        (locationFilter === 'retail' && location.title === "Retail Stores") ||
        (locationFilter === 'bars' && location.title === "Food & Beverage") ||
        (locationFilter === 'supermarkets' && location.title.includes("Food")) ||
        (locationFilter === 'malls' && location.title.includes("Public")) ||
        (locationFilter === 'entertainment' && location.title.includes("Public"));
      
      if (!categoryMatches) return false;
    }
    
    if (locationSearch) {
      const titleMatch = location.title.toLowerCase().includes(locationSearch.toLowerCase());
      const itemMatch = location.items.some(item => 
        item.toLowerCase().includes(locationSearch.toLowerCase())
      );
      if (!titleMatch && !itemMatch) return false;
    }
    
    return true;
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('in-view');
        }
      });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    setTimeout(animateOnScroll, 100);
    
    return () => window.removeEventListener('scroll', animateOnScroll);
  }, []);

  const sponsorBenefits = [
    {
      title: "Brand Exposure",
      description: "Gain visibility and exposure to your target audience through various channels associated with the sponsored entity.",
      icon: <Star className="h-8 w-8 text-amber-500" />
    },
    {
      title: "Brand Association",
      description: "Align your brand with the values and image of the sponsored entity, enhancing your brand perception.",
      icon: <Handshake className="h-8 w-8 text-blue-500" />
    },
    {
      title: "Marketing Opportunities",
      description: "Leverage platforms for product promotion, customer engagement, and market expansion.",
      icon: <Award className="h-8 w-8 text-purple-500" />
    },
    {
      title: "Corporate Social Responsibility",
      description: "Sponsorship of charitable or community events aligns with CSR goals, improving brand reputation.",
      icon: <Gift className="h-8 w-8 text-green-500" />
    },
    {
      title: "Audience Reach",
      description: "Access extensive networks and marketing channels, enabling your brand to reach a broader audience.",
      icon: <BadgePercent className="h-8 w-8 text-red-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center animate-on-scroll">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Connect Your Brand with Top Content Creators</h1>
              <p className="text-xl mb-8 opacity-90">
                Drive authentic engagement and increase your ROI with creator partnerships tailored to your brand
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Start Your Campaign
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12 animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefits for Brands</h2>
              <p className="text-sponsify-secondary dark:text-gray-300 mb-6">
                Discover the advantages of partnering with creators through our platform
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {sponsorBenefits.map((benefit, index) => (
                <Card key={index} className="animate-on-scroll hover-scale" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      {benefit.icon}
                    </div>
                    <CardTitle className="text-xl text-center">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-muted-foreground">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16 animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How Sponsify Works</h2>
              <p className="text-sponsify-secondary dark:text-gray-300">
                Our simple, effective process helps you find and collaborate with creators that align with your brand.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="animate-on-scroll hover-scale">
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>1. Find Your Creators</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Browse our curated network of verified content creators across various niches and platforms. Filter by audience demographics, engagement rates, and content style to find your perfect match.
                  </p>
                </CardContent>
              </Card>

              <Card className="animate-on-scroll hover-scale" style={{ animationDelay: "100ms" }}>
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <BarChart4 className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>2. Build Your Campaign</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Define your campaign goals, budget, and content requirements. Our platform helps you create clear briefs and negotiate terms that work for both you and your chosen creators.
                  </p>
                </CardContent>
              </Card>

              <Card className="animate-on-scroll hover-scale" style={{ animationDelay: "200ms" }}>
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Medal className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>3. Measure Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Track performance with our comprehensive analytics dashboard. Monitor engagement, reach, conversions, and ROI across all your campaigns in real-time.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-8 animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Content Creators</h2>
              <p className="text-sponsify-secondary dark:text-gray-300">
                Top-performing creators ready to collaborate with your brand
              </p>
            </div>
            
            <FilterBar 
              title="Filter Creators"
              filterOptions={creatorFilterOptions}
              searchPlaceholder="Search creators..."
              onFilterChange={setCreatorFilter}
              onSearch={setCreatorSearch}
              className="animate-on-scroll"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {filteredCreators.length > 0 ? (
                filteredCreators.map((creator, index) => (
                  <Card key={creator.id} className="overflow-hidden animate-on-scroll" style={{ animationDelay: `${index * 100}ms` }}>
                    <CardHeader className="pb-0">
                      <div className="flex items-center">
                        <div className="h-14 w-14 rounded-full overflow-hidden mr-4 border-2" style={{ borderColor: creator.color }}>
                          <img 
                            src={creator.avatar} 
                            alt={creator.name} 
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{creator.name}</CardTitle>
                          <CardDescription>{creator.niche}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <div className="flex justify-between mb-4">
                        <div className="text-center">
                          <p className="text-sm text-muted-foreground">Followers</p>
                          <p className="font-semibold">{creator.followers}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-sm text-muted-foreground">Engagement</p>
                          <p className="font-semibold">{creator.engagementRate}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-sm text-muted-foreground">Avg. Comments</p>
                          <p className="font-semibold">{creator.avgComments}</p>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="bg-gray-50 dark:bg-gray-800 pt-4">
                      <Button variant="ghost" className="text-primary w-full flex justify-center items-center" asChild>
                        <Link to={`/creator/${creator.id}`}>
                          View Profile <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))
              ) : (
                <div className="col-span-3 text-center py-8">
                  <p className="text-muted-foreground">No creators found matching your criteria.</p>
                </div>
              )}
            </div>

            <div className="mt-12 text-center">
              <Button variant="outline" size="lg" asChild>
                <Link to="/more-creators">
                  View All Creators
                </Link>
              </Button>
            </div>
          </div>
        </section>

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

        <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-8 animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Physical Advertising Locations</h2>
              <p className="text-sponsify-secondary dark:text-gray-300">
                Strategic physical placements to maximize your brand's visibility
              </p>
            </div>
            
            <FilterBar 
              title="Filter Locations"
              filterOptions={locationFilterOptions}
              searchPlaceholder="Search locations..."
              onFilterChange={setLocationFilter}
              onSearch={setLocationSearch}
              className="animate-on-scroll"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {filteredLocations.length > 0 ? (
                filteredLocations.map((location, index) => (
                  <Card key={location.title} className="animate-on-scroll hover-scale" style={{ animationDelay: `${index * 100}ms` }}>
                    <CardHeader>
                      <CardTitle>{location.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {location.items.map((item, idx) => (
                          <li key={idx} className="flex items-center">
                            <CheckCircle2 className="h-5 w-5 mr-2 text-green-500" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <div className="col-span-3 text-center py-8">
                  <p className="text-muted-foreground">No locations found matching your criteria.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Launch Your Campaign?</h2>
              <p className="text-xl mb-8 opacity-90">
                Connect with our team to create a customized creator marketing strategy for your brand.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  Schedule a Demo
                </Button>
                <Button size="lg" variant="outline" className="border-white hover:bg-white/10">
                  Download Media Kit
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ForBrands;
