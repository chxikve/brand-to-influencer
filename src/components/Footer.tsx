import React from 'react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <>
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Elevate Your Sponsorship Game?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join Sponsify today and discover a smarter way to build impactful partnerships.
          </p>
          <Button 
            size="lg" 
            className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-4 text-lg rounded-lg font-semibold"
          >
            Get Started Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and description */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                  <span className="text-blue-500 font-bold text-lg">S</span>
                </div>
                <span className="text-xl font-bold">Sponsify</span>
              </div>
              <p className="text-gray-400 max-w-md">
                Making partnerships smarter, simpler, and accessible to everyone.
              </p>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">For Creators</a></li>
              </ul>
            </div>
            
            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>info@sponsify.com</li>
                <li>+1 (555) 123-4567</li>
                <li>Follow Us:</li>
                <li className="flex gap-3">
                  <span>📧</span>
                  <span>🐦</span>
                  <span>📘</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Sponsify.ai. All rights reserved.</p>
            <p className="mt-2">Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
