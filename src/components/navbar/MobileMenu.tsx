
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import NavLinks from './NavLinks';

type MobileMenuProps = {
  isOpen: boolean;
  scrollToAbout: () => void;
  closeMobileMenu: () => void;
};

const MobileMenu = ({ isOpen, scrollToAbout, closeMobileMenu }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden glass-card dark:glass-card-dark absolute top-full left-0 w-full p-4 space-y-4 animate-fade-in">
      <NavLinks isMobile scrollToAbout={scrollToAbout} closeMobileMenu={closeMobileMenu} />
      <div className="pt-4 space-y-3">
        <Button variant="ghost" className="w-full justify-center" asChild>
          <Link to="/login" className="block text-sponsify-primary dark:text-sponsify-accent">
            Log in
          </Link>
        </Button>
        <Button variant="default" className="w-full justify-center dark:bg-sponsify-accent dark:hover:bg-sponsify-accent/90" asChild>
          <Link to="/register" className="block">
            Get Started
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default MobileMenu;
