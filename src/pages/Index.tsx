
import React, { useEffect } from 'react';
import Navbar from '@/components/navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import FeaturedSponsors from '@/components/FeaturedSponsors';
import HowItWorks from '@/components/HowItWorks';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Navbar />
      <main>
        <Hero />
        <About />
        <FeaturedSponsors />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
