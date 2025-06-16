
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <>
      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              Ready to transform your sponsorship game?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Join thousands of brands and creators who are already building meaningful partnerships on Sponsify.
            </p>
            <Button 
              size="lg" 
              className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 text-lg rounded-2xl font-semibold h-14 shadow-lg"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-6 lg:px-12 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Logo and description */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                  <span className="text-blue-500 font-bold text-lg">S</span>
                </div>
                <span className="text-xl font-bold text-gray-900 dark:text-white">Sponsify</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 max-w-md leading-relaxed">
                The modern platform connecting brands with creators through intelligent matching and seamless collaboration tools.
              </p>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-6 text-gray-900 dark:text-white">Platform</h4>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                <li><a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">For Brands</a></li>
                <li><a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">For Creators</a></li>
                <li><a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Analytics</a></li>
                <li><a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Pricing</a></li>
              </ul>
            </div>
            
            {/* Support */}
            <div>
              <h4 className="font-semibold mb-6 text-gray-900 dark:text-white">Support</h4>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                <li><a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 dark:border-gray-800 mt-16 pt-8 text-center">
            <p className="text-gray-600 dark:text-gray-400">
              &copy; 2024 Sponsify. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
