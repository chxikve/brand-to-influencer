
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Award, Star, Gift, Ticket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const eventTypes = [
  {
    title: "In-Person Events",
    icon: <Calendar className="h-8 w-8 text-sponsify-primary dark:text-sponsify-accent" />,
    description: "Connect with audiences face-to-face through conferences, workshops, and meetups.",
    benefits: ["Direct audience engagement", "Tangible brand experience", "Networking opportunities"]
  },
  {
    title: "Virtual Events",
    icon: <Star className="h-8 w-8 text-sponsify-primary dark:text-sponsify-accent" />,
    description: "Reach global audiences with webinars, online conferences, and live streams.",
    benefits: ["Wider reach", "Lower cost per impression", "Detailed engagement analytics"]
  },
  {
    title: "Hybrid Experiences",
    icon: <Award className="h-8 w-8 text-sponsify-primary dark:text-sponsify-accent" />,
    description: "Get the best of both worlds with combined in-person and virtual event components.",
    benefits: ["Maximum audience coverage", "Content repurposing", "Extended event lifespan"]
  }
];

const EventSponsorship = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900/90 dark:to-gray-900/50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Power Your Brand Through Event Sponsorships</h2>
          <p className="text-sponsify-secondary dark:text-gray-300">
            Connect your brand with engaged audiences through strategic event partnerships
            that deliver measurable results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {eventTypes.map((event, index) => (
            <Card key={index} className="animate-on-scroll hover-scale bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700" style={{ animationDelay: `${index * 100}ms` }}>
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  {event.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">
                  {event.title}
                </h3>
                <p className="text-sponsify-secondary dark:text-gray-400 text-center mb-4">
                  {event.description}
                </p>
                <ul className="space-y-2">
                  {event.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center">
                      <Gift className="h-4 w-4 mr-2 text-green-500" />
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto animate-on-scroll">
          <div className="bg-gradient-to-r from-sponsify-primary/10 to-sponsify-primary/5 dark:from-sponsify-accent/20 dark:to-sponsify-accent/10 rounded-xl p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
                <div className="relative">
                  <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg">
                    <Ticket className="h-8 w-8 text-sponsify-primary dark:text-sponsify-accent" />
                  </div>
                  <img 
                    src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                    alt="Event Sponsorship" 
                    className="rounded-lg shadow-md w-48 h-48 object-cover"
                  />
                </div>
              </div>
              <div className="md:w-2/3 md:pl-8">
                <h3 className="text-2xl font-bold mb-3">Why Choose Event Sponsorships?</h3>
                <p className="text-sponsify-secondary dark:text-gray-300 mb-4">
                  Event sponsorships offer unique opportunities to build authentic connections with your target audience. 
                  Our platform connects you with events that align with your brand values and marketing objectives.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Star className="h-5 w-5 mr-2 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span>Access to pre-screened events with audience demographic data</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 mr-2 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span>Customizable sponsorship packages to match your budget and goals</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 mr-2 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span>Comprehensive analytics to measure ROI and engagement</span>
                  </li>
                </ul>
                <Button asChild size="lg" className="bg-sponsify-primary hover:bg-sponsify-primary/90 dark:bg-sponsify-accent dark:hover:bg-sponsify-accent/90">
                  <Link to="/for-brands">
                    Explore Event Opportunities
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white/50 to-transparent dark:from-slate-900/30 dark:to-transparent -z-10"></div>
    </section>
  );
};

export default EventSponsorship;
