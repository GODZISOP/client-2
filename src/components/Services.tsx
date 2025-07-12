import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Sparkles, Sun, Star, Zap, Heart, Users } from 'lucide-react';

const Services = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const wellnessServices = [
    {
      icon: Sparkles,
      title: 'Energy Healings',
      description: 'Experience profound transformation through Divine Light Healing that works on mind, body, soul, and spirit to remove impediments and restore your natural flow of divine energy.',
      color: 'from-orange-400 to-orange-600'
    },
    {
      icon: Heart,
      title: 'Mentoring Sessions',
      description: 'Receive personalized guidance from experienced practitioners who support your spiritual journey and help you grow beyond self-awareness into your divine purpose.',
      color: 'from-orange-500 to-orange-700'
    },
    {
      icon: Sun,
      title: 'Coaching Sessions',
      description: 'Work one-on-one with certified healers who have trained extensively and connected to the Divine Source to facilitate your spiritual transformation and healing.',
      color: 'from-orange-300 to-orange-500'
    }
  ];

  const divineLightFaqs = [
    {
      title: 'What is Divine Light Healing?',
      content: `It is one of the most powerful healing modalities that draws from the Divine a conscious higher vibration. This vibration heals the mind, body, soul, and spirit through removing the impediments that fixate our thoughts, drain our joy, and cripple our desire to grow beyond self.`,
      icon: Sparkles
    },
    {
      title: 'What is Divine Light?',
      content: `The little bit of God (our God-Image) in each of us that is always reestablishing our connection with God.\nA light energy (divine radiance or divine refulgence) of a cosmic source.\nPresent everywhere and in everything.\nFully accessible for anyone's use.`,
      icon: Sun
    },
    {
      title: 'Why Divine Light and not Another Healing Modality?',
      content: `Began more than 4000 years of proven results.\nCompliments and integrates well with western and eastern medical practices and philosophies.\nCan't be learned in a weekend.`,
      icon: Star
    },
    {
      title: 'What is Required?',
      content: `It requires a certified healer that has:\n- Entered a Spiritual Journey to grow beyond self awareness\n- Trained extensively for a minimum of five years\n- Connected to the Divine Source by raising their vibration from self awareness to growing spiritually\nAnd a recipient that is willing to receive!`,
      icon: Zap
    },
    {
      title: 'What is Meant by Vibration?',
      content: `It's a person's emotional state, the atmosphere of a place, or the associations of an object, as communicated to and felt by others.\n\nLower vibrations: Anxiety, Stress, Worry, Fear, Deceit, Anger, Hatred\n\nHigher vibrations: Love, Joy, Peace, Prosperity, Harmony, Balance, Inspiration`,
      icon: Heart
    }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-gradient-to-br from-orange-50 via-white to-orange-100">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              <Sun className="h-64 w-64 text-orange-400 animate-pulse" />
            </div>
            <div className="relative z-10">
              <h2 className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent mb-6">
                Wellness Services Offered
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-4">
                Our Lightworks Team is comprised from a diverse set of backgrounds who wish to come together 
                in support of each other's spiritual journeys.
              </p>
              <div className="flex justify-center mt-6 space-x-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-orange-400 fill-current animate-pulse" style={{animationDelay: `${i * 0.2}s`}} />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Wellness Services Cards */}
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {wellnessServices.map((service, index) => (
            <motion.div
              key={service.title}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-orange-100 hover:border-orange-200 transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,237,213,0.3) 100%)',
                boxShadow: '0 10px 30px rgba(255,165,0,0.1), 0 0 20px rgba(255,165,0,0.05)',
                animation: `glow ${3 + index * 0.5}s ease-in-out infinite alternate`
              }}
            >
              {/* Glowing Border Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-400 to-orange-600 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-sm"></div>
              
              <div className="relative z-10">
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <service.icon className="h-8 w-8" />
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-700 leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="flex items-center text-orange-600 font-medium">
                  <span className="text-sm">Learn More</span>
                  <motion.div
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    →
                  </motion.div>
                </div>
              </div>

              {/* Floating Light Effect */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-orange-400 rounded-full animate-ping opacity-50"></div>
            </motion.div>
          ))}
        </div>

        {/* Practitioner Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent mb-4">
              Find Your Practitioner
            </h3>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Find the practitioner located in your area that fits your needs below.
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 via-white to-orange-100 rounded-2xl p-8 border-2 border-orange-200 shadow-xl relative overflow-hidden">
            {/* Background Light Effects */}
            <div className="absolute inset-0 opacity-20">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 bg-gradient-to-t from-transparent via-orange-300/40 to-transparent"
                  style={{
                    height: '120%',
                    left: `${15 + i * 15}%`,
                    top: '-10%',
                    transformOrigin: 'bottom center',
                  }}
                  animate={{
                    rotate: [0, 3, -3, 0],
                    opacity: [0.4, 0.8, 0.4],
                  }}
                  transition={{
                    duration: 4 + i * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <motion.div 
                  className="w-40 h-40 bg-gradient-to-br from-orange-300 to-orange-500 rounded-full flex items-center justify-center shadow-2xl relative overflow-hidden"
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(251, 146, 60, 0.6)",
                      "0 0 40px rgba(251, 146, 60, 0.8)",
                      "0 0 20px rgba(251, 146, 60, 0.6)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Sun className="w-20 h-20 text-white" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                </motion.div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h4 className="text-3xl font-bold text-gray-900 mb-2">Chris</h4>
                <p className="text-orange-600 font-medium text-lg mb-4">Divine Light Practitioner & Spiritual Guide</p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  With over 5 years of extensive training and a deep connection to the Divine Source, 
                  Chris facilitates transformative healing sessions that help you grow beyond self-awareness 
                  and connect with your higher spiritual purpose. As a certified healer who has entered 
                  a spiritual journey of growth, Chris brings compassion, wisdom, and divine light to 
                  every session.
                </p>
                <motion.button
                  className="px-8 py-4 bg-gradient-to-r from-orange-400 to-orange-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 30px rgba(251, 146, 60, 0.6)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Connect with Chris
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Divine Light Healing Section */}
        <motion.div
          className="relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Divine Orange & White Glow Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-orange-100 rounded-2xl border-2 border-orange-200/50">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-100/30 via-white/50 to-orange-100/30"></div>
            
            {/* Animated Light Rays */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 bg-gradient-to-t from-transparent via-orange-300/40 to-transparent"
                style={{
                  height: '120%',
                  left: `${10 + i * 12}%`,
                  top: '-10%',
                  transformOrigin: 'bottom center',
                }}
                animate={{
                  rotate: [0, 5, -5, 0],
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  duration: 5 + i * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            ))}

            {/* Floating Particles */}
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-orange-400/70 rounded-full shadow-lg"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  boxShadow: '0 0 10px rgba(251, 146, 60, 0.5)'
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.4, 1, 0.4],
                  scale: [0.5, 1.2, 0.5],
                }}
                transition={{
                  duration: 4 + Math.random() * 3,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>

          <div className="relative z-10 p-8 md:p-12">
            {/* Enhanced Header */}
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center justify-center mb-8">
                <motion.div
                  className="p-6 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 text-white shadow-2xl"
                  animate={{
                    boxShadow: [
                      "0 0 30px rgba(251, 146, 60, 0.6)",
                      "0 0 60px rgba(251, 146, 60, 0.9)",
                      "0 0 90px rgba(251, 146, 60, 0.6)",
                      "0 0 30px rgba(251, 146, 60, 0.6)"
                    ]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <Sun className="w-12 h-12" />
                </motion.div>
              </div>
              
              <h3 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-orange-500 to-orange-700 mb-6">
                Divine Light Healing
              </h3>
              
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Discover the ancient art of divine healing through the power of cosmic light energy. 
                Connect with your higher self and experience transformation at the deepest level.
              </p>
            </motion.div>

            {/* Enhanced FAQ Cards */}
            <div className="space-y-6 max-w-5xl mx-auto">
              {divineLightFaqs.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white/90 backdrop-blur-sm border-2 border-orange-200 rounded-xl overflow-hidden shadow-lg"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    borderColor: 'rgba(251, 146, 60, 0.5)',
                    boxShadow: '0 0 25px rgba(251, 146, 60, 0.3)'
                  }}
                >
                  <button
                    onClick={() => toggle(index)}
                    className="w-full flex items-center justify-between px-8 py-6 text-left transition-all duration-300 hover:bg-orange-50/50"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="p-3 rounded-xl bg-gradient-to-r from-orange-100 to-orange-200 border border-orange-300">
                        <item.icon className="w-6 h-6 text-orange-600" />
                      </div>
                      <span className="font-semibold text-gray-800 text-xl">
                        {item.title}
                      </span>
                    </div>
                    
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-7 h-7 text-orange-500" />
                    </motion.div>
                  </button>
                  
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="border-t border-orange-200"
                      >
                        <div className="px-8 py-6 bg-gradient-to-r from-orange-50/50 to-white/50">
                          <motion.div
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.1 }}
                            className="text-gray-700 leading-relaxed whitespace-pre-line text-lg"
                          >
                            {item.content}
                          </motion.div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            {/* Call to Action */}
            <motion.div
              className="text-center mt-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <motion.button
                className="px-10 py-5 bg-gradient-to-r from-orange-400 to-orange-600 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 40px rgba(251, 146, 60, 0.6)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Begin Your Healing Journey
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Decoration */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 text-orange-600">
            <div className="h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent w-20"></div>
            <Sun className="h-10 w-10 text-orange-400" />
            <div className="h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent w-20"></div>
          </div>
          <p className="text-orange-600 mt-4 font-medium text-lg">
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

export default Services;