
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-sponsify-light pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <img 
                src="/lovable-uploads/a35b8538-ada9-4f9a-970c-bb0359d7d00d.png" 
                alt="Sponsify Logo" 
                className="h-10" 
              />
            </Link>
            <p className="text-sponsify-secondary mb-6 max-w-md">
              Connecting brands and creators through an innovative sponsorship marketplace. Simplify your sponsorship management with Sponsify.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-sponsify-secondary hover:text-sponsify-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-sponsify-secondary hover:text-sponsify-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-sponsify-secondary hover:text-sponsify-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-sponsify-secondary hover:text-sponsify-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase mb-6">Product</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="text-sponsify-secondary hover:text-sponsify-primary transition-colors">Features</Link></li>
              <li><Link to="/" className="text-sponsify-secondary hover:text-sponsify-primary transition-colors">Pricing</Link></li>
              <li><Link to="/" className="text-sponsify-secondary hover:text-sponsify-primary transition-colors">For Brands</Link></li>
              <li><Link to="/" className="text-sponsify-secondary hover:text-sponsify-primary transition-colors">For Creators</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase mb-6">Company</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="text-sponsify-secondary hover:text-sponsify-primary transition-colors">About</Link></li>
              <li><Link to="/" className="text-sponsify-secondary hover:text-sponsify-primary transition-colors">Careers</Link></li>
              <li><Link to="/" className="text-sponsify-secondary hover:text-sponsify-primary transition-colors">Blog</Link></li>
              <li><Link to="/" className="text-sponsify-secondary hover:text-sponsify-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase mb-6">Resources</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="text-sponsify-secondary hover:text-sponsify-primary transition-colors">Help Center</Link></li>
              <li><Link to="/" className="text-sponsify-secondary hover:text-sponsify-primary transition-colors">Platform Status</Link></li>
              <li><Link to="/" className="text-sponsify-secondary hover:text-sponsify-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/" className="text-sponsify-secondary hover:text-sponsify-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-sponsify-secondary/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-sponsify-secondary">
              © {new Date().getFullYear()} Sponsify. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li><Link to="/" className="text-sm text-sponsify-secondary hover:text-sponsify-primary transition-colors">Privacy</Link></li>
                <li><Link to="/" className="text-sm text-sponsify-secondary hover:text-sponsify-primary transition-colors">Terms</Link></li>
                <li><Link to="/" className="text-sm text-sponsify-secondary hover:text-sponsify-primary transition-colors">Cookies</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
