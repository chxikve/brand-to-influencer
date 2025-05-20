
import React, { useEffect } from 'react';
import Navbar from '@/components/navbar';
import Hero from '@/components/Hero';
import FeaturedSponsors from '@/components/FeaturedSponsors';
import HowItWorks from '@/components/HowItWorks';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import CreatorProfiles from '@/components/CreatorProfiles';
import Footer from '@/components/Footer';
import EventSponsorship from '@/components/EventSponsorship';

const Index = () => {
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
        <Hero />
        <FeaturedSponsors />
        <HowItWorks />
        <EventSponsorship />
        <CreatorProfiles />
        <About />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
