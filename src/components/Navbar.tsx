import React, { useState, useEffect } from 'react';
import { Menu, X, Lightbulb, Sparkles } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/home' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-lg' 
        : 'bg-white/80 backdrop-blur-md border-b border-gray-200/30'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-orange-500 to-pink-500 rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-r from-amber-400 via-orange-500 to-pink-500 p-2.5 rounded-xl">
                <Lightbulb className="h-6 w-6 text-white" />
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-2xl font-bold bg-gradient-to-r from-amber-500 via-orange-500 to-pink-500 bg-clip-text text-transparent">
                Lightworks
              </span>
              <Sparkles className="h-4 w-4 text-amber-500 animate-pulse" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative text-gray-700 hover:text-orange-500 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 group"
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <span className="relative z-10">{item.name}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                </a>
              ))}
              <button className="ml-4 relative overflow-hidden bg-gradient-to-r from-amber-500 via-orange-500 to-pink-500 text-white px-6 py-2.5 rounded-full font-medium transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/25 hover:scale-105 group">
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-orange-500 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative p-2 text-gray-700 hover:text-orange-500 focus:outline-none transition-colors duration-200"
            >
              <div className="relative">
                {isOpen ? (
                  <X className="h-6 w-6 transform rotate-90 transition-transform duration-300" />
                ) : (
                  <Menu className="h-6 w-6 transform rotate-0 transition-transform duration-300" />
                )}
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3 bg-white/95 backdrop-blur-lg border-t border-gray-200/50 rounded-b-xl">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-orange-500 hover:bg-gradient-to-r hover:from-amber-50 hover:to-orange-50 transition-all duration-200"
                onClick={() => setIsOpen(false)}
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {item.name}
              </a>
            ))}
            <button 
              className="w-full mt-3 bg-gradient-to-r from-amber-500 via-orange-500 to-pink-500 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-200"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;