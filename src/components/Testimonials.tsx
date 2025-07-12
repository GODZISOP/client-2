import React from 'react';
import { Star, Quote, Heart, Sun } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Donna',
      role: 'Spiritual Seeker',
      content: 'As a result of Chris\' efforts, these meetings have enriched my spiritual life and deepened my relationship with the Divine, and her vision continues to inspire me. I can\'t thank Chris enough for sharing her gifts, knowledge, compassion, and love to lead others and fulfill their calling.',
      blessing: 'Love, Light, and Blessings',
      avatar: 'https://images.pexels.com/photos/3760514/pexels-photo-3760514.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5
    },
    {
      name: 'Amy',
      role: 'Light Worker',
      content: 'I just wanted to share how much I love the Light Works Group Discussion you\'ve created in Mighty Networks. It\'s wonderful to have a community of like-minded souls to exchange ideas, inspiration, and experiences with. I especially enjoy hearing everyone\'s experiences and thoughts about the topics you generate. You\'ve created such a safe and comfortable space for sharing, and I\'m truly grateful for this supportive and inspiring community.',
      blessing: 'With Gratitude',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5
    },
    {
      name: 'Kathleen',
      role: 'Journey of Self-Discovery',
      content: 'I am realizing that throughout my journey of self-discovery, forgiving myself is a recurring process. It is an ongoing task that requires continuous effort. To the ones that are reading this don\'t get frustrated in this process. Take it one step at a time. Realize there are no right or wrong answers. No judgement. Those moment of "WOW" will come I know because they have come for me as I continue this journey. It\'s not a race, it\'s a sprint. Ultimately, it\'s worth the effort.',
      blessing: 'In Light and Love',
      avatar: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-orange-50 via-white to-orange-100 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <Sun className="h-64 w-64 text-orange-400 animate-pulse" />
          </div>
          <div className="relative z-10">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent mb-6">
              Sacred Testimonials
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Hear from our beloved community members as they share their transformative journeys 
              of spiritual growth, divine connection, and inner awakening.
            </p>
            <div className="flex justify-center mt-6 space-x-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-orange-400 fill-current animate-pulse" style={{animationDelay: `${i * 0.2}s`}} />
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-orange-100 hover:border-orange-200 transform hover:-translate-y-2"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,237,213,0.3) 100%)',
                boxShadow: '0 10px 30px rgba(255,165,0,0.1), 0 0 20px rgba(255,165,0,0.05)',
                animation: `glow ${3 + index * 0.5}s ease-in-out infinite alternate`
              }}
            >
              {/* Glowing Border Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-400 to-orange-600 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-sm"></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Profile Section */}
                <div className="flex items-center mb-6">
                  <div className="relative">
                    <img 
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-3 border-orange-200 shadow-lg"
                    />
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center">
                      <Heart className="h-3 w-3 text-white fill-current" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900 text-lg">{testimonial.name}</h4>
                    <p className="text-orange-600 text-sm font-medium">{testimonial.role}</p>
                  </div>
                </div>

                {/* Rating Stars */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-orange-400 fill-current" />
                  ))}
                </div>

                {/* Quote Icon */}
                <Quote className="h-8 w-8 text-orange-300 opacity-30 absolute top-6 right-6" />

                {/* Testimonial Content */}
                <p className="text-gray-700 leading-relaxed italic mb-4 text-sm">
                  "{testimonial.content}"
                </p>

                {/* Blessing */}
                <div className="border-t border-orange-100 pt-4">
                  <p className="text-orange-600 font-medium text-sm text-center">
                    {testimonial.blessing}
                  </p>
                </div>
              </div>

              {/* Floating Light Effect */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-orange-400 rounded-full animate-ping opacity-50"></div>
            </div>
          ))}
        </div>

        {/* Bottom Decoration */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 text-orange-600">
            <div className="h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent w-16"></div>
            <Sun className="h-8 w-8 text-orange-400" />
            <div className="h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent w-16"></div>
          </div>
          <p className="text-orange-600 mt-4 font-medium">
            Join our sacred community and begin your own journey of transformation
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes glow {
          0% {
            box-shadow: 0 10px 30px rgba(255,165,0,0.1), 0 0 20px rgba(255,165,0,0.05);
          }
          100% {
            box-shadow: 0 15px 40px rgba(255,165,0,0.2), 0 0 30px rgba(255,165,0,0.1);
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;