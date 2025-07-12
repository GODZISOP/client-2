import React from 'react';
import { Zap, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden" style={{
      background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)'
    }}>
      {/* Divine Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Sacred Orbs */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              background: 'rgba(255, 165, 0, 0.4)',
              boxShadow: '0 0 15px rgba(255, 165, 0, 0.6)',
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${Math.random() * 3 + 2}s`
            }}
          />
        ))}
        
        {/* Divine Glow */}
        <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 w-96 h-96 rounded-full opacity-10"
             style={{
               background: 'radial-gradient(circle, rgba(255, 165, 0, 0.4) 0%, transparent 70%)',
               filter: 'blur(60px)'
             }}
        />
        
        {/* Sacred Light Rays */}
        <div className="absolute bottom-0 left-1/4 w-1 h-20 bg-gradient-to-t from-orange-400 to-transparent opacity-20 animate-pulse" />
        <div className="absolute bottom-0 right-1/3 w-1 h-16 bg-gradient-to-t from-orange-400 to-transparent opacity-20 animate-pulse" style={{animationDelay: '1.5s'}} />
        <div className="absolute bottom-0 right-1/4 w-1 h-12 bg-gradient-to-t from-orange-400 to-transparent opacity-20 animate-pulse" style={{animationDelay: '3s'}} />
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="relative">
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-3 rounded-lg relative z-10"
                     style={{
                       boxShadow: '0 0 30px rgba(255, 165, 0, 0.6)'
                     }}>
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg opacity-40 blur-md animate-pulse" />
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-white via-orange-200 to-white bg-clip-text text-transparent">
                LightWorks
              </span>
            </div>
            <p className="text-gray-300 max-w-md mb-6 leading-relaxed">
              Illuminating souls and empowering divine transformation through sacred coaching and celestial guidance for spiritual awakening.
            </p>
            
            {/* Sacred Contact Info */}
            <div className="mb-6 space-y-2">
              <div className="flex items-center space-x-2">
                <span className="text-orange-400 font-semibold">Sacred Email:</span>
                <span className="text-gray-300">chris@lightworks.love</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-orange-400 font-semibold">Divine Line:</span>
                <span className="text-gray-300">(703) 336-3923</span>
              </div>
            </div>
            
            <div className="flex space-x-4">
              {[
                { Icon: Facebook, href: "https://www.facebook.com/profile.php?id=61572367091196" },
                { Icon: Youtube, href: "https://youtube.com/@lightworks-soulgrowth" },
               
              ].map(({ Icon, href }, index) => (
                <a 
                  key={index}
                  href={href} 
                  className="relative group"
                  target={href.startsWith('http') ? '_blank' : '_self'}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  <div className="text-gray-400 hover:text-orange-400 transition-all duration-300 p-2 rounded-full hover:bg-orange-400/10"
                       style={{
                         boxShadow: '0 0 0 rgba(255, 165, 0, 0)',
                         transition: 'all 0.3s ease'
                       }}
                       onMouseEnter={(e) => {
                         e.target.style.boxShadow = '0 0 20px rgba(255, 165, 0, 0.4)';
                       }}
                       onMouseLeave={(e) => {
                         e.target.style.boxShadow = '0 0 0 rgba(255, 165, 0, 0)';
                       }}>
                    <Icon className="h-5 w-5" />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Sacred Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white relative">
              Sacred Paths
              <div className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full" />
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'Divine Home', href: '#home' },
                { name: 'Sacred Services', href: '#services' },
                { name: 'Holy Testimonials', href: '#testimonials' },
                { name: 'Divine Contact', href: '#contact' }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-orange-400 transition-colors duration-300 relative inline-block group"
                  >
                    {link.name}
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Divine Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white relative">
              Divine Services
              <div className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full" />
            </h3>
            <ul className="space-y-3">
              {[
                'Soul Awakening',
                'Divine Leadership',
                'Sacred Calling',
                'Celestial Mindset'
              ].map((service, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-orange-400 transition-colors duration-300 relative inline-block group"
                  >
                    {service}
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divine Separator */}
        <div className="relative mt-12 pt-8">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent opacity-30" />
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-px bg-gradient-to-r from-orange-400 to-orange-600 opacity-60" />
          
          <div className="text-center">
            <p className="text-gray-400 mb-2">
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent font-semibold">
                © 2024 LightWorks
              </span>
              <span className="mx-2">•</span>
              <span>All divine rights reserved</span>
            </p>
            <p className="text-gray-500 text-sm">
              <a href="#" className="hover:text-orange-400 transition-colors">Sacred Privacy</a>
              <span className="mx-2">•</span>
              <a href="#" className="hover:text-orange-400 transition-colors">Divine Terms</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;