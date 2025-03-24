
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, User, Users, HandshakeIcon, CreditCard } from 'lucide-react';

const ProcessStep = ({ 
  icon, 
  number, 
  title, 
  description, 
  delay 
}: { 
  icon: React.ReactNode, 
  number: string, 
  title: string, 
  description: string, 
  delay: number 
}) => {
  const stepRef = useRef<HTMLDivElement>(null);

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

    if (stepRef.current) {
      observer.observe(stepRef.current);
    }

    return () => {
      if (stepRef.current) {
        observer.unobserve(stepRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={stepRef}
      className="relative transition-all duration-700 opacity-0 translate-y-10"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-sponsify-light text-sponsify-primary">
            {icon}
          </div>
        </div>
        <div className="ml-6">
          <span className="inline-block px-2 py-1 mb-2 text-xs font-medium bg-sponsify-light text-sponsify-primary rounded-full">
            Step {number}
          </span>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-sponsify-secondary">{description}</p>
        </div>
      </div>
    </div>
  );
};

const HowItWorks = () => {
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
    <section className="py-20 section-padding bg-sponsify-light">
      <div className="container mx-auto">
        <div 
          ref={sectionRef}
          className="mb-16 text-center max-w-2xl mx-auto transition-all duration-700 opacity-0 translate-y-10"
        >
          <span className="inline-block px-3 py-1 mb-3 text-xs font-medium bg-white text-sponsify-primary rounded-full">
            Simple Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How Sponsify Works
          </h2>
          <p className="text-sponsify-secondary">
            Our platform makes sponsorship management effortless with a streamlined process that connects brands and creators efficiently.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-10 lg:gap-20">
          <div className="space-y-14">
            <ProcessStep 
              icon={<User className="h-6 w-6" />} 
              number="01" 
              title="Create Your Profile" 
              description="Build your brand or creator profile highlighting your audience, niche, and sponsorship preferences."
              delay={100}
            />
            <ProcessStep 
              icon={<Users className="h-6 w-6" />} 
              number="02" 
              title="Find Perfect Matches" 
              description="Our AI-driven platform suggests ideal partnerships based on audience alignment and goals."
              delay={300}
            />
            <ProcessStep 
              icon={<HandshakeIcon className="h-6 w-6" />} 
              number="03" 
              title="Negotiate & Collaborate" 
              description="Communicate directly, agree on deliverables, and formalize your partnership with our tools."
              delay={500}
            />
          </div>

          <div className="relative">
            <div className="sticky top-28">
              <div className="glass-card rounded-xl overflow-hidden shadow-medium transition-all duration-700 opacity-0 translate-y-10"
                   ref={el => {
                     if (el) {
                       setTimeout(() => {
                         el.classList.add('opacity-100');
                         el.classList.remove('opacity-0', 'translate-y-10');
                       }, 200);
                     }
                   }}>
                <div className="h-96 bg-white flex items-center justify-center">
                  <div className="max-w-xs mx-auto text-center">
                    <div className="mx-auto mb-6 w-16 h-16 flex items-center justify-center rounded-full bg-sponsify-light text-sponsify-primary">
                      <CheckCircle className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Ready to get started?</h3>
                    <p className="text-sponsify-secondary mb-6">Join thousands of brands and creators already using Sponsify.</p>
                    <Link to="/" className="btn-primary block">
                      Create free account
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div 
            className="glass-card p-8 rounded-xl text-center transition-all duration-700 opacity-0 translate-y-10"
            ref={el => {
              if (el) {
                setTimeout(() => {
                  el.classList.add('opacity-100');
                  el.classList.remove('opacity-0', 'translate-y-10');
                }, 400);
              }
            }}
          >
            <div className="text-3xl font-bold mb-2">2,500+</div>
            <p className="text-sponsify-secondary">Active Sponsorships</p>
          </div>
          <div 
            className="glass-card p-8 rounded-xl text-center transition-all duration-700 opacity-0 translate-y-10"
            ref={el => {
              if (el) {
                setTimeout(() => {
                  el.classList.add('opacity-100');
                  el.classList.remove('opacity-0', 'translate-y-10');
                }, 600);
              }
            }}
          >
            <div className="text-3xl font-bold mb-2">$10M+</div>
            <p className="text-sponsify-secondary">Sponsorship Value</p>
          </div>
          <div 
            className="glass-card p-8 rounded-xl text-center transition-all duration-700 opacity-0 translate-y-10"
            ref={el => {
              if (el) {
                setTimeout(() => {
                  el.classList.add('opacity-100');
                  el.classList.remove('opacity-0', 'translate-y-10');
                }, 800);
              }
            }}
          >
            <div className="text-3xl font-bold mb-2">15,000+</div>
            <p className="text-sponsify-secondary">Creators & Brands</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
