import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Home as HomeIcon,
  Info,
  Settings,
  Tag,
  MessageCircle,
} from "lucide-react";

import CompanyLogo from "@/assets/CompanyLogo.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleGetQuote = () => {
    console.log("Get quote clicked");
  };

  const navItems = [
    { label: "Home", icon: HomeIcon },
    { label: "About Us", icon: Info },
    { label: "Our Services", icon: Settings },
    { label: "Pricing", icon: Tag },
    { label: "FAQ", icon: MessageCircle },
  ];

  // Disable body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Header */}
      <header className="bg-white fixed top-0 z-50 w-full shadow-sm">
        <div className="container mx-auto px-5 lg:px-14 xl:px-16">
          <div className="flex h-[70px] lg:h-[90px] items-center justify-between">
            
            {/* Logo */}
            <img src={CompanyLogo} alt="Company Logo" className="h-8 lg:h-10" />

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8 xl:gap-12 text-base font-medium text-foreground">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  className="hover:text-primary transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Desktop CTA */}
            <button
              onClick={handleGetQuote}
              className="hidden lg:flex bg-primary text-white px-6 py-2 rounded-full font-medium hover:opacity-90 shadow-[0_0_12px_rgba(250,18,57,0.4)]"
            >
              Get A Quote
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-secondary lg:hidden animate-in fade-in duration-200 flex flex-col">
          <div className="px-6 py-6 flex justify-between items-center">
            <img src={CompanyLogo} alt="Company Logo" className="h-8" />

            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2"
            >
              <X className="h-6 w-6 text-primary" />
            </button>
          </div>

          <nav className="flex flex-col gap-6 px-6 mt-6">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.label}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-4 text-lg font-medium hover:text-primary"
                >
                  <Icon className="w-5 h-5" />
                  {item.label}
                </button>
              );
            })}
          </nav>

          <button
            onClick={() => {
              handleGetQuote();
              setIsMobileMenuOpen(false);
            }}
            className="mt-auto bg-primary text-white mx-6 mb-10 py-4 rounded-full text-base font-semibold uppercase shadow-[0_0_12px_rgba(250,18,57,0.4)]"
          >
            CONTACT US
          </button>
        </div>
      )}
    </>
  );
};

export default Header;
