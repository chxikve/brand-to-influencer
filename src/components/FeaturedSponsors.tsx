
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const SponsorCard = ({ delay, category, title }: { delay: number, category: string, title: string }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={cardRef} 
      className="glass-card rounded-xl overflow-hidden transition-all duration-700 opacity-0 translate-y-10"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="h-44 bg-sponsify-light animate-pulse-light"></div>
      <div className="p-6">
        <span className="text-xs font-medium text-sponsify-secondary bg-sponsify-light px-2 py-1 rounded-full">{category}</span>
        <h3 className="mt-3 text-lg font-semibold">{title}</h3>
        <div className="mt-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-sponsify-secondary/10"></div>
            <div className="ml-2">
              <div className="w-20 h-3 bg-sponsify-secondary/10 rounded-full"></div>
              <div className="mt-1 w-16 h-2 bg-sponsify-secondary/10 rounded-full"></div>
            </div>
          </div>
          <span className="text-sponsify-primary font-medium">$2.5K</span>
        </div>
      </div>
    </div>
  );
};

const FeaturedSponsors = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="py-20 section-padding">
      <div className="container mx-auto">
        <div 
          ref={sectionRef} 
          className="mb-12 text-center transition-all duration-700 opacity-0 translate-y-10"
        >
          <span className="inline-block mb-3 px-3 py-1 bg-sponsify-light text-sponsify-primary text-xs font-medium rounded-full">
            Featured Opportunities
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trending Sponsorships
          </h2>
          <p className="text-sponsify-secondary max-w-2xl mx-auto">
            Discover the most popular sponsorship opportunities available right now. Connect with brands and creators making an impact.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SponsorCard delay={100} category="Tech" title="Mobile App Launch Campaign" />
          <SponsorCard delay={200} category="Fashion" title="Summer Collection Showcase" />
          <SponsorCard delay={300} category="Fitness" title="Workout Program Promotion" />
          <SponsorCard delay={400} category="Food" title="Healthy Recipe Series" />
          <SponsorCard delay={500} category="Travel" title="Destination Highlight" />
          <SponsorCard delay={600} category="Beauty" title="Skincare Routine Feature" />
        </div>

        <div className="mt-12 text-center">
          <Link to="/" className="btn-secondary inline-flex items-center">
            View all opportunities <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSponsors;
