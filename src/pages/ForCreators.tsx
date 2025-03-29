
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  ArrowRight, 
  BadgeDollarSign, 
  Award, 
  Star, 
  Users
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const ForCreators = () => {
  // Benefits for creators
  const creatorBenefits = [
    {
      title: "Financial Support",
      description: "Receive necessary funding for your content creation, projects, and growth initiatives.",
      icon: <BadgeDollarSign className="h-8 w-8 text-green-500" />
    },
    {
      title: "Enhanced Credibility",
      description: "Being associated with reputable sponsors can enhance your credibility and prestige in your niche.",
      icon: <Award className="h-8 w-8 text-amber-500" />
    },
    {
      title: "Access to Resources",
      description: "In-kind sponsorship can provide access to resources, expertise, or technology that you may lack.",
      icon: <Star className="h-8 w-8 text-purple-500" />
    },
    {
      title: "Audience Reach",
      description: "Sponsors often have extensive networks and marketing channels, enabling you to reach a broader audience.",
      icon: <Users className="h-8 w-8 text-blue-500" />
    }
  ];

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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Take Your Content Creation to the Next Level</h1>
              <p className="text-xl mb-8 opacity-90">
                Connect with brands ready to sponsor your creative journey and help you grow your audience
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Join as a Creator
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits for Creators Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12 animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefits for Creators</h2>
              <p className="text-sponsify-secondary dark:text-gray-300 mb-6">
                Why partnering with brands through Sponsify can boost your content creation career
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {creatorBenefits.map((benefit, index) => (
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

        {/* How It Works Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12 animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works for Creators</h2>
              <p className="text-sponsify-secondary dark:text-gray-300 mb-6">
                Our simple process helps you find brands that align with your content and audience
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="animate-on-scroll hover-scale">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-xl font-bold text-primary">1</span>
                    </div>
                  </div>
                  <CardTitle>Create Your Profile</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">
                    Set up your creator profile showcasing your content style, audience demographics, and engagement metrics to attract the right brands.
                  </p>
                </CardContent>
              </Card>

              <Card className="animate-on-scroll hover-scale" style={{ animationDelay: "100ms" }}>
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-xl font-bold text-primary">2</span>
                    </div>
                  </div>
                  <CardTitle>Connect with Brands</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">
                    Browse sponsorship opportunities or receive offers directly from brands looking for creators like you.
                  </p>
                </CardContent>
              </Card>

              <Card className="animate-on-scroll hover-scale" style={{ animationDelay: "200ms" }}>
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-xl font-bold text-primary">3</span>
                    </div>
                  </div>
                  <CardTitle>Create & Earn</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">
                    Collaborate on campaigns, deliver authentic content, and get paid securely through our platform.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12 animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Creator Success Stories</h2>
              <p className="text-sponsify-secondary dark:text-gray-300 mb-6">
                See how creators like you have grown their audience and income through Sponsify
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="animate-on-scroll">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                      <img 
                        src="https://i.pravatar.cc/150?img=33" 
                        alt="Creator" 
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Sarah Johnson</CardTitle>
                      <CardDescription>Lifestyle Creator</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic mb-4">
                    "Sponsify helped me connect with brands that perfectly align with my audience. My income has tripled in just 6 months!"
                  </p>
                  <div className="flex justify-between text-sm">
                    <div>
                      <p className="font-semibold">Income Growth</p>
                      <p className="text-green-500">+320%</p>
                    </div>
                    <div>
                      <p className="font-semibold">Audience Growth</p>
                      <p className="text-green-500">+78%</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="animate-on-scroll" style={{ animationDelay: "100ms" }}>
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                      <img 
                        src="https://i.pravatar.cc/150?img=60" 
                        alt="Creator" 
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-lg">David Chen</CardTitle>
                      <CardDescription>Tech Reviewer</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic mb-4">
                    "The quality of brand deals on Sponsify is incredible. I've been able to work with premium tech brands I never thought possible."
                  </p>
                  <div className="flex justify-between text-sm">
                    <div>
                      <p className="font-semibold">Income Growth</p>
                      <p className="text-green-500">+175%</p>
                    </div>
                    <div>
                      <p className="font-semibold">Brand Deals</p>
                      <p className="text-green-500">12 in 3 months</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="animate-on-scroll" style={{ animationDelay: "200ms" }}>
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                      <img 
                        src="https://i.pravatar.cc/150?img=44" 
                        alt="Creator" 
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Maria Lopez</CardTitle>
                      <CardDescription>Fitness Influencer</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic mb-4">
                    "Sponsify's platform made negotiating deals so much easier. I now have long-term partnerships that provide stable income."
                  </p>
                  <div className="flex justify-between text-sm">
                    <div>
                      <p className="font-semibold">Income Growth</p>
                      <p className="text-green-500">+210%</p>
                    </div>
                    <div>
                      <p className="font-semibold">Partnership Length</p>
                      <p className="text-green-500">Avg. 8 months</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-sponsify-primary dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Grow Your Creator Career?</h2>
              <p className="text-xl mb-8 text-white/80">
                Join thousands of creators already finding success through brand partnerships on Sponsify
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-sponsify-primary hover:bg-white/90">
                  Create Your Profile
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Learn More
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

export default ForCreators;
