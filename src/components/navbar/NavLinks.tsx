
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

type NavLinksProps = {
  isMobile?: boolean;
  scrollToAbout?: () => void;
  closeMobileMenu?: () => void;
};

const NavLinks = ({ isMobile = false, scrollToAbout, closeMobileMenu }: NavLinksProps) => {
  const handleAboutClick = () => {
    if (scrollToAbout) {
      scrollToAbout();
    }
    if (closeMobileMenu && isMobile) {
      closeMobileMenu();
    }
  };

  if (isMobile) {
    return (
      <>
        <Link to="/" className="block py-2 text-sponsify-secondary dark:text-gray-300 hover:text-sponsify-primary dark:hover:text-sponsify-accent">
          Home
        </Link>
        <div>
          <button className="flex items-center justify-between w-full py-2 text-sponsify-secondary dark:text-gray-300 hover:text-sponsify-primary dark:hover:text-sponsify-accent">
            Solutions <ChevronDown className="h-4 w-4" />
          </button>
          <div className="pl-4 mt-1 space-y-2">
            <Link to="/for-brands" className="block py-2 text-sm text-sponsify-secondary dark:text-gray-300 hover:text-sponsify-primary dark:hover:text-sponsify-accent">
              For Brands
            </Link>
            <Link to="/more-creators" className="block py-2 text-sm text-sponsify-secondary dark:text-gray-300 hover:text-sponsify-primary dark:hover:text-sponsify-accent">
              For Creators
            </Link>
          </div>
        </div>
        <div>
          <button className="flex items-center justify-between w-full py-2 text-sponsify-secondary dark:text-gray-300 hover:text-sponsify-primary dark:hover:text-sponsify-accent">
            Pricing <ChevronDown className="h-4 w-4" />
          </button>
          <div className="pl-4 mt-1 space-y-2">
            <Link to="/pricing" className="block py-2 text-sm text-sponsify-secondary dark:text-gray-300 hover:text-sponsify-primary dark:hover:text-sponsify-accent">
              Basic Plan ($99/mo)
            </Link>
            <Link to="/pricing" className="block py-2 text-sm text-sponsify-secondary dark:text-gray-300 hover:text-sponsify-primary dark:hover:text-sponsify-accent">
              Pro Plan ($199/mo)
            </Link>
            <Link to="/pricing" className="block py-2 text-sm text-sponsify-secondary dark:text-gray-300 hover:text-sponsify-primary dark:hover:text-sponsify-accent">
              Enterprise Plan
            </Link>
          </div>
        </div>
        <Link to="/analytics" className="block py-2 text-sponsify-secondary dark:text-gray-300 hover:text-sponsify-primary dark:hover:text-sponsify-accent">
          Analytics
        </Link>
        <button 
          onClick={handleAboutClick}
          className="block py-2 w-full text-left text-sponsify-secondary dark:text-gray-300 hover:text-sponsify-primary dark:hover:text-sponsify-accent cursor-pointer"
        >
          About
        </button>
      </>
    );
  }

  return (
    <>
      <Link to="/" className="text-sm font-medium text-sponsify-secondary dark:text-gray-300 hover:text-sponsify-primary dark:hover:text-sponsify-accent transition-colors">
        Home
      </Link>
      <div className="relative group">
        <button className="flex items-center text-sm font-medium text-sponsify-secondary dark:text-gray-300 hover:text-sponsify-primary dark:hover:text-sponsify-accent transition-colors">
          Solutions <ChevronDown className="ml-1 h-4 w-4" />
        </button>
        <div className="absolute left-0 mt-2 w-48 rounded-md shadow-md bg-white dark:bg-slate-800 p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left">
          <Link to="/for-brands" className="block px-4 py-2 text-sm rounded-md text-sponsify-secondary dark:text-gray-300 hover:bg-sponsify-light dark:hover:bg-slate-700">For Brands</Link>
          <Link to="/more-creators" className="block px-4 py-2 text-sm rounded-md text-sponsify-secondary dark:text-gray-300 hover:bg-sponsify-light dark:hover:bg-slate-700">For Creators</Link>
        </div>
      </div>
      <div className="relative group">
        <button className="flex items-center text-sm font-medium text-sponsify-secondary dark:text-gray-300 hover:text-sponsify-primary dark:hover:text-sponsify-accent transition-colors">
          Pricing <ChevronDown className="ml-1 h-4 w-4" />
        </button>
        <div className="absolute left-0 mt-2 w-48 rounded-md shadow-md bg-white dark:bg-slate-800 p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left">
          <Link to="/pricing" className="block px-4 py-2 text-sm rounded-md text-sponsify-secondary dark:text-gray-300 hover:bg-sponsify-light dark:hover:bg-slate-700">Basic Plan ($99/mo)</Link>
          <Link to="/pricing" className="block px-4 py-2 text-sm rounded-md text-sponsify-secondary dark:text-gray-300 hover:bg-sponsify-light dark:hover:bg-slate-700">Pro Plan ($199/mo)</Link>
          <Link to="/pricing" className="block px-4 py-2 text-sm rounded-md text-sponsify-secondary dark:text-gray-300 hover:bg-sponsify-light dark:hover:bg-slate-700">Enterprise Plan</Link>
          <Link to="/pricing" className="block px-4 py-2 text-sm rounded-md text-sponsify-secondary dark:text-gray-300 hover:bg-sponsify-light dark:hover:bg-slate-700">Compare Plans</Link>
        </div>
      </div>
      <Link to="/analytics" className="text-sm font-medium text-sponsify-secondary dark:text-gray-300 hover:text-sponsify-primary dark:hover:text-sponsify-accent transition-colors">
        Analytics
      </Link>
      <button 
        onClick={handleAboutClick}
        className="text-sm font-medium text-sponsify-secondary dark:text-gray-300 hover:text-sponsify-primary dark:hover:text-sponsify-accent transition-colors cursor-pointer"
      >
        About
      </button>
    </>
  );
};

export default NavLinks;
