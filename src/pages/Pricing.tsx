
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, XCircle, ArrowRight, Info } from 'lucide-react';
import Navbar from '@/components/navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      description: "Perfect for individuals and small content creators",
      price: "$99",
      period: "per month",
      popular: false,
      features: [
        { name: "Access to creator database", included: true },
        { name: "Up to 10 campaign requests", included: true },
        { name: "Basic analytics dashboard", included: true },
        { name: "Email support", included: true },
        { name: "API access", included: false },
        { name: "Dedicated account manager", included: false },
        { name: "Custom reporting", included: false },
        { name: "White-label solutions", included: false },
      ],
      cta: "Get Started",
      link: "/register?plan=basic"
    },
    {
      name: "Pro",
      description: "Ideal for growing brands and mid-sized agencies",
      price: "$199",
      period: "per month",
      popular: true,
      features: [
        { name: "Access to creator database", included: true },
        { name: "Up to 50 campaign requests", included: true },
        { name: "Advanced analytics dashboard", included: true },
        { name: "Priority email & chat support", included: true },
        { name: "API access", included: true },
        { name: "Dedicated account manager", included: false },
        { name: "Custom reporting", included: true },
        { name: "White-label solutions", included: false },
      ],
      cta: "Get Started",
      link: "/register?plan=pro"
    },
    {
      name: "Enterprise",
      description: "For large brands and agencies with complex needs",
      price: "Custom",
      period: "pricing",
      popular: false,
      features: [
        { name: "Unlimited access to creator database", included: true },
        { name: "Unlimited campaign requests", included: true },
        { name: "Enterprise analytics suite", included: true },
        { name: "24/7 priority support", included: true },
        { name: "Advanced API access", included: true },
        { name: "Dedicated account manager", included: true },
        { name: "Custom reporting & dashboards", included: true },
        { name: "White-label solutions", included: true },
      ],
      cta: "Contact Sales",
      link: "/contact?inquiry=enterprise"
    }
  ];

  // FAQ section content
  const faqs = [
    {
      question: "Can I change my plan later?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle."
    },
    {
      question: "Is there a free trial available?",
      answer: "We offer a 14-day free trial for our Basic and Pro plans so you can test the platform before committing."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and for Enterprise plans, we can set up invoicing."
    },
    {
      question: "Is there a setup fee?",
      answer: "No, there are no hidden fees or setup costs. You only pay for your subscription."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes, you can cancel your subscription at any time. You'll have access until the end of your current billing period."
    },
    {
      question: "Do you offer discounts for annual billing?",
      answer: "Yes, we offer a 15% discount when you choose annual billing over monthly billing."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero section */}
        <section className="py-12 md:py-24 bg-gradient-to-r from-sponsify-light to-white dark:from-gray-900 dark:to-gray-800">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Transparent Pricing for Every Need
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
              Choose the plan that works best for your business. No hidden fees, no surprises.
            </p>
            <div className="inline-block bg-white dark:bg-gray-800 p-1 rounded-full shadow-md">
              <div className="flex items-center space-x-2">
                <button className="px-4 py-2 rounded-full bg-sponsify-primary text-white">
                  Monthly Billing
                </button>
                <button className="px-4 py-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
                  Annual Billing (Save 15%)
                </button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Pricing plans */}
        <section className="py-16 container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative ${plan.popular ? 'border-sponsify-primary dark:border-sponsify-accent shadow-lg' : 'border-gray-200 dark:border-gray-700'}`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                    <span className="bg-sponsify-primary dark:bg-sponsify-accent text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-gray-500 dark:text-gray-400 ml-2">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        {feature.included ? (
                          <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                        ) : (
                          <XCircle className="h-5 w-5 text-gray-300 dark:text-gray-600 mr-2 shrink-0" />
                        )}
                        <span className={feature.included ? "" : "text-gray-400 dark:text-gray-500"}>
                          {feature.name}
                          {feature.name === "API access" && (
                            <TooltipProvider delayDuration={300}>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Info className="h-4 w-4 inline ml-1 text-gray-400 cursor-help" />
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p className="w-60">Access our API to integrate creator data directly into your existing tools and workflows.</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-sponsify-primary dark:bg-sponsify-accent hover:bg-sponsify-primary/90 dark:hover:bg-sponsify-accent/90' : ''}`}
                    asChild
                  >
                    <Link to={plan.link}>
                      {plan.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-medium mb-3">{faq.question}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Have more questions about our pricing or features?
              </p>
              <Button variant="outline" asChild>
                <Link to="/contact">Contact Our Sales Team</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-sponsify-primary dark:bg-gray-800">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Grow Your Brand?</h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Join thousands of brands already leveraging creator partnerships through Sponsify's platform.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" variant="default" className="bg-white text-sponsify-primary hover:bg-gray-100" asChild>
                <Link to="/register">Start Your Free Trial</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10" asChild>
                <Link to="/demo">Request a Demo</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Pricing;
