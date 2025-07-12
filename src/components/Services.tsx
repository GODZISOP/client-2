import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Target, Users, Brain, Rocket, Heart, Award, Sparkles, Sun, Star, Zap } from 'lucide-react';

const Services = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const coreServices = [
    {
      icon: Target,
      title: 'Goal Setting & Achievement',
      description: 'Define clear, actionable goals and create a roadmap to achieve them with proven strategies.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Users,
      title: 'Leadership Development',
      description: 'Enhance your leadership skills and learn to inspire and motivate others effectively.',
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: Brain,
      title: 'Mindset Transformation',
      description: 'Overcome limiting beliefs and develop a growth mindset for sustained success.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Rocket,
      title: 'Career Acceleration',
      description: 'Accelerate your career growth with strategic planning and skill development.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Heart,
      title: 'Work-Life Balance',
      description: 'Create harmony between your professional and personal life for overall well-being.',
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: Award,
      title: 'Performance Optimization',
      description: 'Maximize your potential and achieve peak performance in all areas of life.',
      color: 'from-indigo-500 to-indigo-600'
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
    <section id="services" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Coaching Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive coaching solutions designed to address every aspect of your personal and professional growth journey.
          </p>
        </motion.div>

        {/* Core Services Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {coreServices.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${service.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="h-6 w-6" />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>

              <div className="mt-6 flex items-center text-blue-600 font-medium">
                <span className="text-sm">Learn More</span>
                <motion.div
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  →
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Divine Light Healing Section */}
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

            {/* Floating Particles */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-orange-400/70 rounded-full shadow-lg"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  boxShadow: '0 0 10px rgba(251, 146, 60, 0.5)'
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.4, 1, 0.4],
                  scale: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
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
              className="text-center mb-10"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center justify-center mb-6">
                <motion.div
                  className="p-4 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 text-white shadow-2xl"
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(251, 146, 60, 0.6)",
                      "0 0 40px rgba(251, 146, 60, 0.9)",
                      "0 0 60px rgba(251, 146, 60, 0.6)",
                      "0 0 20px rgba(251, 146, 60, 0.6)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Sun className="w-8 h-8" />
                </motion.div>
              </div>
              
              <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-orange-500 to-orange-700 mb-4">
                Divine Light Healing
              </h3>
              
              <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
                Discover the ancient art of divine healing through the power of cosmic light energy. 
                Connect with your higher self and experience transformation at the deepest level.
              </p>
            </motion.div>

            {/* Enhanced FAQ Cards */}
            <div className="space-y-4 max-w-4xl mx-auto">
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
                    boxShadow: '0 0 20px rgba(251, 146, 60, 0.3)'
                  }}
                >
                  <button
                    onClick={() => toggle(index)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left transition-all duration-300 hover:bg-orange-50/50"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="p-2 rounded-lg bg-gradient-to-r from-orange-100 to-orange-200 border border-orange-300">
                        <item.icon className="w-5 h-5 text-orange-600" />
                      </div>
                      <span className="font-semibold text-gray-800 text-lg">
                        {item.title}
                      </span>
                    </div>
                    
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-6 h-6 text-orange-500" />
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
                        <div className="px-6 py-5 bg-gradient-to-r from-orange-50/50 to-white/50">
                          <motion.div
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.1 }}
                            className="text-gray-700 leading-relaxed whitespace-pre-line"
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
              className="text-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-orange-400 to-orange-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(251, 146, 60, 0.6)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Begin Your Healing Journey
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;