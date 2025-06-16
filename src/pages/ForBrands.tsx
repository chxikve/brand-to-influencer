
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/Footer';

// Importing the refactored components
import BenefitsSection from '@/components/brands/BenefitsSection';
import HowItWorksSection from '@/components/brands/HowItWorksSection';
import FeaturedCreatorsSection from '@/components/brands/FeaturedCreatorsSection';
import EventsSponsorshipSection from '@/components/brands/EventsSponsorshipSection';
import PhysicalLocationSection from '@/components/brands/PhysicalLocationSection';
import CallToAction from '@/components/brands/CallToAction';

const ForBrands = () => {
  const [eventFilter, setEventFilter] = useState('all');
  const [creatorFilter, setCreatorFilter] = useState('all');
  const [locationFilter, setLocationFilter] = useState('all');
  
  const [eventSearch, setEventSearch] = useState('');
  const [creatorSearch, setCreatorSearch] = useState('');
  const [locationSearch, setLocationSearch] = useState('');

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

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-20">
        <BenefitsSection />
        <HowItWorksSection />
        <FeaturedCreatorsSection 
          creatorFilter={creatorFilter}
          creatorSearch={creatorSearch}
          setCreatorFilter={setCreatorFilter}
          setCreatorSearch={setCreatorSearch}
        />
        <EventsSponsorshipSection 
          eventFilter={eventFilter}
          eventSearch={eventSearch}
          setEventFilter={setEventFilter}
          setEventSearch={setEventSearch}
        />
        <PhysicalLocationSection 
          locationFilter={locationFilter}
          locationSearch={locationSearch}
          setLocationFilter={setLocationFilter}
          setLocationSearch={setLocationSearch}
        />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default ForBrands;
