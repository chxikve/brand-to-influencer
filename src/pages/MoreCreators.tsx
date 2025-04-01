
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/navbar';
import Footer from '@/components/Footer';
import CreatorCard from '@/components/CreatorCard';
import { moreCreators, creators } from '@/data/creators';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MoreCreators = () => {
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
  
  // Combine both creator arrays for the full showcase
  const allCreators = [...creators, ...moreCreators];
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <Button 
                variant="ghost" 
                className="flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-800"
                asChild
              >
                <Link to="/">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Home
                </Link>
              </Button>
            </div>
            
            <div className="text-center max-w-2xl mx-auto mb-16 animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Discover Our Creator Community</h2>
              <p className="text-sponsify-secondary dark:text-gray-300">
                Connect with influential content creators across various niches who are driving engagement and building authentic connections with their audiences.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allCreators.map((creator, index) => (
                <CreatorCard 
                  key={creator.id} 
                  creator={creator} 
                  index={index} 
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MoreCreators;
