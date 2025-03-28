
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  Medal, 
  BarChart4, 
  Users, 
  Calendar, 
  MapPin, 
  AreaChart, 
  ArrowRight, 
  CheckCircle2 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { creators } from '@/data/creators';
import { Link } from 'react-router-dom';

const ForBrands = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Animate elements that come into view
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
    // Call once on initial load to animate elements already in view
    setTimeout(animateOnScroll, 100);
    
    return () => window.removeEventListener('scroll', animateOnScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        {/* Hero Section */}
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

        {/* How Sponsify Works Section */}
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

        {/* Featured Creators Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16 animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Content Creators</h2>
              <p className="text-sponsify-secondary dark:text-gray-300">
                Top-performing creators ready to collaborate with your brand
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {creators.slice(0, 3).map((creator, index) => (
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
              ))}
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

        {/* Upcoming Events Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16 animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Upcoming Events</h2>
              <p className="text-sponsify-secondary dark:text-gray-300">
                Connect with creators and industry experts at our exclusive events
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="animate-on-scroll hover-scale">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>Creator Summit 2023</CardTitle>
                      <CardDescription>Network with 200+ top creators</CardDescription>
                    </div>
                    <div className="bg-primary/10 p-3 rounded-lg flex flex-col items-center">
                      <span className="text-xl font-bold">15</span>
                      <span className="text-xs">NOV</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center mb-3">
                    <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm">November 15-17, 2023</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm">San Francisco, CA</span>
                  </div>
                  <p className="mt-4 text-muted-foreground">
                    Join us for three days of panels, workshops, and networking opportunities focused on creator-brand collaborations.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Register Now</Button>
                </CardFooter>
              </Card>

              <Card className="animate-on-scroll hover-scale" style={{ animationDelay: "100ms" }}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>Digital Marketing Masterclass</CardTitle>
                      <CardDescription>Learn from industry experts</CardDescription>
                    </div>
                    <div className="bg-primary/10 p-3 rounded-lg flex flex-col items-center">
                      <span className="text-xl font-bold">08</span>
                      <span className="text-xs">DEC</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center mb-3">
                    <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm">December 8, 2023</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm">Virtual Event</span>
                  </div>
                  <p className="mt-4 text-muted-foreground">
                    A virtual masterclass covering the latest trends in influencer marketing, content strategy, and measuring campaign success.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Save Your Spot</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Advertising Locations Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16 animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Advertising Locations</h2>
              <p className="text-sponsify-secondary dark:text-gray-300">
                Strategic placements to maximize your brand's visibility
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="animate-on-scroll hover-scale">
                <CardHeader>
                  <CardTitle>Social Media</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 mr-2 text-green-500" />
                      <span>Instagram Feed & Stories</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 mr-2 text-green-500" />
                      <span>YouTube Pre-roll & Integrations</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 mr-2 text-green-500" />
                      <span>TikTok Native Content</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 mr-2 text-green-500" />
                      <span>Twitter Sponsored Posts</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="animate-on-scroll hover-scale" style={{ animationDelay: "100ms" }}>
                <CardHeader>
                  <CardTitle>Content Formats</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 mr-2 text-green-500" />
                      <span>Product Reviews & Unboxings</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 mr-2 text-green-500" />
                      <span>Tutorial & How-To Content</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 mr-2 text-green-500" />
                      <span>Day-in-the-Life Features</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 mr-2 text-green-500" />
                      <span>Branded Challenges</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="animate-on-scroll hover-scale" style={{ animationDelay: "200ms" }}>
                <CardHeader>
                  <CardTitle>Additional Channels</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 mr-2 text-green-500" />
                      <span>Podcasts & Audio Content</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 mr-2 text-green-500" />
                      <span>Blogs & Written Reviews</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 mr-2 text-green-500" />
                      <span>Live Events & Streams</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 mr-2 text-green-500" />
                      <span>Newsletter Partnerships</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
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
