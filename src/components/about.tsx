import React from 'react';
import { Heart, Users, Compass, Star, Lightbulb, Globe, Sparkles, Shield, Infinity } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "All Are Welcome",
      description: "A place where every soul is embraced, no matter race, color, gender, or sexual orientation. Our doors are open to all."
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Interfaith Unity",
      description: "We honor and respect all faiths, creating bridges between traditions while celebrating our shared human spirituality."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Like-Minded Hearts",
      description: "Connect with heart-centered souls who share your desire for spiritual growth and conscious living."
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Diverse Light Workers",
      description: "Led by a beautiful tapestry of light workers from various spiritual backgrounds and healing modalities."
    },
    {
      icon: <Compass className="h-8 w-8" />,
      title: "Virtual & Physical",
      description: "Experience community both online and in-person, making spiritual connection accessible wherever you are."
    },
    {
      icon: <Infinity className="h-8 w-8" />,
      title: "Lifetime Journey",
      description: "Supporting one another through all phases of our spiritual evolution during this precious lifetime."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white via-amber-50/30 to-orange-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-100 to-orange-100 px-6 py-3 rounded-full border border-amber-200/50 mb-6">
            <Star className="h-5 w-5 text-amber-600" />
            <span className="text-lg font-semibold text-amber-700">Who We Are</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Light Works 
            <span className="block bg-gradient-to-r from-amber-500 via-orange-500 to-pink-500 bg-clip-text text-transparent">
              Spiritual Community
            </span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Light Works Spiritual Community presents a place where <span className="font-semibold text-orange-600">all are welcome</span> no matter race, color, gender, or sexual orientation. We are an <span className="font-semibold text-pink-600">interfaith spiritual community</span> that respects all faiths and seek to commune with those that are <span className="font-semibold text-amber-600">like-minded and heart-centered</span>.
            </p>
            
            <div className="bg-gradient-to-r from-amber-100 via-orange-100 to-pink-100 p-8 rounded-3xl border border-amber-200/50 shadow-lg">
              <p className="text-lg text-gray-800 leading-relaxed">
                Led by a <span className="font-semibold text-orange-700">diverse set of light workers</span>, this community offers both <span className="font-semibold text-pink-700">virtual and physical spiritual community connections</span> to support one another in our spiritual journeys during this lifetime.
              </p>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="group relative bg-white/70 backdrop-blur-sm p-8 rounded-2xl border border-amber-200/30 hover:border-orange-300/50 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10 hover:-translate-y-2"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-orange-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-amber-500 via-orange-500 to-pink-500 rounded-2xl text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                  {value.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="text-center">
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-orange-400 to-pink-400 rounded-3xl transform rotate-1 opacity-10"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-400 via-orange-400 to-amber-400 rounded-3xl transform -rotate-1 opacity-10"></div>
            
            <div className="relative bg-white/90 backdrop-blur-sm p-12 rounded-3xl border border-white/50 shadow-2xl">
              <div className="flex items-center justify-center mb-6">
                <Sparkles className="h-8 w-8 text-amber-500 mr-3" />
                <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  Our Sacred Mission
                </h3>
                <Sparkles className="h-8 w-8 text-pink-500 ml-3" />
              </div>
              
              <p className="text-xl text-gray-800 leading-relaxed mb-6">
                To create a sanctuary of love, acceptance, and spiritual growth where every soul can flourish in their unique journey toward enlightenment and inner peace.
              </p>
              
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500"></div>
                <Shield className="h-6 w-6 text-orange-500" />
                <div className="w-12 h-0.5 bg-gradient-to-r from-orange-500 to-pink-500"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -z-10 top-20 left-10 w-40 h-40 bg-gradient-to-r from-amber-300 to-orange-300 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -z-10 bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-pink-300 to-orange-300 rounded-full opacity-20 blur-3xl"></div>
      </div>
    </section>
  );
};

export default About;