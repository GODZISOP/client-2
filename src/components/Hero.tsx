import React from 'react';
import { ArrowRight, Play, Heart, Users, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16 bg-gradient-to-br from-amber-50 via-orange-50 to-pink-50">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center space-x-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full border border-amber-200/50 mb-6">
            <Star className="h-4 w-4 text-amber-500" />
            <span className="text-sm font-medium text-amber-700">Welcome to Our Community</span>
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Community Healing &
            <span className="block bg-gradient-to-r from-amber-500 via-orange-500 to-pink-500 bg-clip-text text-transparent">
              Soul Growth
            </span>
          </h1>
          
          <p className="text-xl text-gray-700 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Our offerings are eclectic as we each come from diverse pathways that practice 
            <span className="font-semibold text-orange-600"> meditation and coaching</span> to assist members in finding their 
            <span className="font-semibold text-pink-600"> inner peace</span> and enrich their everyday lives.
          </p>
          
          <div className="bg-gradient-to-r from-amber-100 via-orange-100 to-pink-100 p-6 rounded-2xl border border-amber-200/50 mb-8">
            <p className="text-lg text-gray-800 font-medium text-center lg:text-left">
              We are a <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent font-bold">Light Work Spiritual Community</span> where 
              <span className="font-semibold text-pink-600"> all are welcome</span> no matter the race, color, gender, or sexual orientation.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
           <Link
             to="https://calendly.com/chris-lightworks/30min"
             target="_blank"
             rel="noopener noreferrer"
             className="ml-4 relative overflow-hidden bg-gradient-to-r from-amber-500 via-orange-500 to-pink-500 text-white px-6 py-2.5 rounded-full font-medium transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/25 hover:scale-105 group"
           >
             <span className="relative z-10">Get Started</span>
           </Link>
            
      
          </div>
          
          <div className="flex items-center justify-center lg:justify-start space-x-8">
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Unity</div>
              <div className="text-gray-600">In Diversity</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">Peace</div>
              <div className="text-gray-600">Inner Harmony</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-amber-600 bg-clip-text text-transparent">Growth</div>
              <div className="text-gray-600">Soul Evolution</div>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="relative">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-orange-400 to-pink-400 rounded-3xl transform rotate-2 opacity-20"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-400 via-orange-400 to-amber-400 rounded-3xl transform -rotate-1 opacity-20"></div>
            
            <div className="relative bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-white/50">
              <img 
                src="https://images.pexels.com/photos/3820369/pexels-photo-3820369.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Diverse community in meditation and spiritual healing"
                className="w-full h-96 object-cover rounded-2xl"
              />
              
              {/* Floating Cards */}
              <div className="absolute -top-4 -left-4 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-xl border border-amber-200/50 animate-pulse">
                <div className="flex items-center space-x-2">
                  <Heart className="h-4 w-4 text-pink-500" />
                  <span className="text-sm font-medium text-gray-700">All Welcome</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-xl border border-orange-200/50 animate-bounce">
                <div className="text-center">
                  <Users className="h-6 w-6 text-orange-500 mx-auto mb-1" />
                  <div className="text-xs text-gray-600">Community</div>
                </div>
              </div>
              
              <div className="absolute top-1/2 -right-6 bg-gradient-to-r from-amber-500 to-orange-500 p-3 rounded-full shadow-lg">
                <div className="w-3 h-3 bg-white rounded-full animate-ping"></div>
              </div>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -z-10 top-10 right-10 w-32 h-32 bg-gradient-to-r from-amber-300 to-orange-300 rounded-full opacity-30 blur-xl"></div>
          <div className="absolute -z-10 bottom-10 left-10 w-24 h-24 bg-gradient-to-r from-pink-300 to-orange-300 rounded-full opacity-30 blur-xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;