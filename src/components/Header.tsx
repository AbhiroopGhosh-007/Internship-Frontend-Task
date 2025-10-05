import React, { useState } from 'react';
import { Menu, X, Home as HomeIcon, Info, Settings, Tag, MessageCircle } from 'lucide-react';
import logo from '@/assets/logo.svg';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleGetQuote = () => {
    console.log('Get quote clicked');
  };

  const navItems = [
    { label: 'Home', icon: HomeIcon },
    { label: 'About Us', icon: Info },
    { label: 'Our Services', icon: Settings },
    { label: 'Pricing', icon: Tag },
    { label: 'FAQ', icon: MessageCircle }
  ];

  return (
    <>
      <header className="bg-white fixed top-0 z-50 w-full shadow-sm">
        <div className="container mx-auto px-5 lg:px-20 xl:px-24">
          <div className="flex h-[70px] lg:h-[90px] items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <img src={logo} alt="Company Logo" className="h-8 lg:h-10" />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8 xl:gap-12 text-base font-medium text-foreground">
              {navItems.map((item) => (
                <button key={item.label} className="hover:text-primary transition-colors">
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Desktop CTA Button */}
            <button
              onClick={handleGetQuote}
              className="hidden lg:flex items-center justify-center bg-primary text-primary-foreground px-6 xl:px-8 py-3 rounded-full text-base font-medium hover:opacity-90 transition-opacity shadow-[0_0_12px_0_rgba(250,18,57,0.4)]"
            >
              Get A Quote
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2"
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-secondary lg:hidden animate-in fade-in duration-200">
          <div className="flex flex-col h-full px-6 py-6">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between mb-12">
              <img src={logo} alt="Company Logo" className="h-8" />
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2"
                aria-label="Close menu"
              >
                <X className="h-6 w-6 text-primary" />
              </button>
            </div>

            {/* Mobile Navigation */}
            <nav className="flex flex-col gap-6">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.label}
                    className="flex items-center gap-4 text-lg font-medium text-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Icon className="w-5 h-5" />
                    {item.label}
                  </button>
                );
              })}
            </nav>

            {/* Mobile CTA Button */}
            <button
              onClick={() => {
                handleGetQuote();
                setIsMobileMenuOpen(false);
              }}
              className="mt-auto bg-primary text-primary-foreground px-8 py-4 rounded-full text-base font-bold uppercase hover:opacity-90 transition-opacity shadow-[0_0_12px_0_rgba(250,18,57,0.4)]"
            >
              CONTACT US
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
