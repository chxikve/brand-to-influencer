
import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Sponsify has transformed how we find and manage creator partnerships. The platform's intuitive design made it easy to find the perfect creators for our brand.",
    author: "Sarah Johnson",
    position: "Marketing Director",
    company: "TechNova"
  },
  {
    quote: "As a content creator, Sponsify has opened doors to premium brand partnerships that align perfectly with my audience. The payment process is seamless, and I love how easy it is to showcase my metrics.",
    author: "Michael Chen",
    position: "Content Creator",
    company: "Tech & Lifestyle"
  },
  {
    quote: "We've increased our ROI by over 40% since switching to Sponsify for our influencer campaigns. The data insights and campaign management tools are game-changers.",
    author: "Jessica Williams",
    position: "Brand Partnerships Lead",
    company: "Elevate Apparel"
  }
];

const TestimonialCard = ({ 
  quote, 
  author, 
  position, 
  company, 
  isActive 
}: { 
  quote: string, 
  author: string, 
  position: string, 
  company: string, 
  isActive: boolean 
}) => {
  return (
    <div 
      className={`absolute top-0 left-0 right-0 glass-card rounded-xl p-8 md:p-10 transition-all duration-700 ${
        isActive ? 'opacity-100 translate-y-0 z-10' : 'opacity-0 translate-y-8 -z-10'
      }`}
    >
      <Quote className="h-10 w-10 text-sponsify-primary/20 mb-6" />
      <p className="text-lg md:text-xl mb-8 leading-relaxed">{quote}</p>
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full bg-sponsify-light"></div>
        <div className="ml-4">
          <h4 className="font-medium">{author}</h4>
          <p className="text-sm text-sponsify-secondary">{position}, {company}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
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

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 section-padding">
      <div className="container mx-auto">
        <div 
          ref={sectionRef}
          className="text-center mb-16 transition-all duration-700 opacity-0 translate-y-10"
        >
          <span className="inline-block px-3 py-1 mb-3 text-xs font-medium bg-sponsify-light text-sponsify-primary rounded-full">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Users Say
          </h2>
          <p className="text-sponsify-secondary max-w-2xl mx-auto">
            Join the thousands of brands and creators who have found success with our platform.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative h-80 md:h-64">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                position={testimonial.position}
                company={testimonial.company}
                isActive={index === activeIndex}
              />
            ))}
          </div>

          <div className="mt-10 flex items-center justify-center space-x-4">
            <button 
              onClick={prevTestimonial} 
              className="p-2 rounded-full border border-sponsify-light hover:bg-sponsify-light transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5 text-sponsify-secondary" />
            </button>
            {testimonials.map((_, index) => (
              <button 
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === activeIndex ? 'bg-sponsify-primary w-6' : 'bg-sponsify-secondary/30'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
            <button 
              onClick={nextTestimonial} 
              className="p-2 rounded-full border border-sponsify-light hover:bg-sponsify-light transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5 text-sponsify-secondary" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
