import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const API_BASE = 'https://chris-backend.vercel.app';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

   try {
  const response = await fetch(`${API_BASE}/api/contact`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  const result = await response.json();

  if (response.ok) {
    setSubmitStatus({ type: 'success', message: 'Divine message sent successfully!' });
    setFormData({ name: '', email: '', message: '' });
  } else {
    console.error('Server error:', result);
    setSubmitStatus({ type: 'error', message: result.error || result.message || 'Failed to send message' });
  }

} catch (error) {
  console.error('Network or unexpected error:', error);
  setSubmitStatus({ type: 'error', message: 'Network error. Please try again.' });
}
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="min-h-screen py-20 px-4 relative overflow-hidden" style={{
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)'
    }}>
      {/* Divine Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Orbs */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              background: 'rgba(255, 165, 0, 0.6)',
              boxShadow: '0 0 20px rgba(255, 165, 0, 0.8)',
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 2 + 2}s`
            }}
          />
        ))}
        
        {/* Radial Glow */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-20"
             style={{
               background: 'radial-gradient(circle, rgba(255, 165, 0, 0.3) 0%, transparent 70%)',
               filter: 'blur(40px)'
             }}
        />
        
        {/* Divine Rays */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-32 bg-gradient-to-b from-orange-400 to-transparent opacity-30 animate-pulse" />
        <div className="absolute bottom-0 right-1/4 transform translate-x-1/2 w-1 h-24 bg-gradient-to-t from-orange-400 to-transparent opacity-30 animate-pulse" style={{animationDelay: '1s'}} />
        <div className="absolute top-1/4 right-0 transform -translate-y-1/2 w-24 h-1 bg-gradient-to-l from-orange-400 to-transparent opacity-30 animate-pulse" style={{animationDelay: '2s'}} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold mb-4 relative inline-block">
            <span className="bg-gradient-to-r from-white via-orange-200 to-white bg-clip-text text-transparent">
              Divine Connection
            </span>
            <div className="absolute -inset-2 bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg opacity-20 blur-xl animate-pulse" />
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Reach out to us throuh the ethereal realm of communication. Let divine guidance illuminate your path to transformation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-3xl font-semibold text-white mb-8 relative">
              Sacred Channels
              <div className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full" />
            </h3>
            
            <div className="space-y-6">
              {[
                { icon: Mail, title: "Divine Email", info: "chris@lightworks.love" },
                { icon: Phone, title: "Sacred Line", info: "(703) 336-3923" },
                { icon: MapPin, title: "Heavenly Location", info: "New York, NY" }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-4 group">
                  <div className="relative">
                    <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-4 rounded-full relative z-10 group-hover:shadow-2xl transition-all duration-300"
                         style={{
                           boxShadow: '0 0 30px rgba(255, 165, 0, 0.5)'
                         }}>
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full opacity-30 blur-md group-hover:opacity-60 transition-opacity duration-300" />
                  </div>
                  <div className="text-white">
                    <h4 className="font-semibold text-lg">{item.title}</h4>
                    <p className="text-gray-300">{item.info}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 rounded-xl relative overflow-hidden backdrop-blur-sm"
                 style={{
                   background: 'rgba(255, 255, 255, 0.1)',
                   border: '1px solid rgba(255, 165, 0, 0.3)',
                   boxShadow: '0 0 40px rgba(255, 165, 0, 0.2)'
                 }}>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400/10 to-orange-600/10 rounded-xl" />
              <div className="relative z-10">
                <h4 className="font-semibold text-white mb-3 text-lg">Sacred Hours</h4>
                <div className="space-y-1 text-gray-300">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Meditation & Rest</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 rounded-2xl opacity-20 blur-xl" />
            <div className="relative z-10 p-8 rounded-2xl backdrop-blur-sm"
                  style={{
                    background: 'rgba(255, 255, 255, 0.95)',
                    border: '1px solid rgba(255, 165, 0, 0.3)',
                    boxShadow: '0 0 50px rgba(255, 165, 0, 0.3)'
                  }}>
              <h3 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
                Send Divine Message
              </h3>
              
              {/* Status Message */}
              {submitStatus && (
                <div className={`mb-6 p-4 rounded-lg text-center ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-100 text-green-800 border border-green-300' 
                    : 'bg-red-100 text-red-800 border border-red-300'
                }`}>
                  {submitStatus.message}
                </div>
              )}
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Sacred Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border-2 border-orange-200 rounded-lg focus:border-orange-400 focus:outline-none transition-all duration-300 bg-white/70 backdrop-blur-sm disabled:opacity-50"
                    style={{
                      boxShadow: '0 0 20px rgba(255, 165, 0, 0.1)'
                    }}
                    placeholder="Enter your divine name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Ethereal Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border-2 border-orange-200 rounded-lg focus:border-orange-400 focus:outline-none transition-all duration-300 bg-white/70 backdrop-blur-sm disabled:opacity-50"
                    style={{
                      boxShadow: '0 0 20px rgba(255, 165, 0, 0.1)'
                    }}
                    placeholder="Enter your sacred email"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Divine Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border-2 border-orange-200 rounded-lg focus:border-orange-400 focus:outline-none transition-all duration-300 resize-none bg-white/70 backdrop-blur-sm disabled:opacity-50"
                    style={{
                      boxShadow: '0 0 20px rgba(255, 165, 0, 0.1)'
                    }}
                    placeholder="Share your divine aspirations and sacred goals..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-300 relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    background: 'linear-gradient(135deg, #ff8c00 0%, #ffa500 100%)',
                    boxShadow: '0 0 30px rgba(255, 165, 0, 0.5)',
                    color: 'white'
                  }}
                  onMouseEnter={(e) => {
                    if (!isSubmitting) {
                      e.target.style.boxShadow = '0 0 50px rgba(255, 165, 0, 0.8)';
                      e.target.style.transform = 'translateY(-2px)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSubmitting) {
                      e.target.style.boxShadow = '0 0 30px rgba(255, 165, 0, 0.5)';
                      e.target.style.transform = 'translateY(0)';
                    }
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  <Send className="h-5 w-5 relative z-10" />
                  <span className="relative z-10">
                    {isSubmitting ? 'Sending Sacred Message...' : 'Send Sacred Message'}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;