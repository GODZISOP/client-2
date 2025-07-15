import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About'; // Fixed: Capital 'A' - make sure your file is named 'About.jsx' not 'about.jsx'
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import Contact from './components/Contact';

const Home = () => (
  <>
    <Hero />
    <Services />
    <Testimonials />
    <Contact />
    <Footer />
  </>
);

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} /> {/* Fixed: changed from path="" to path="/" */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        
        {/* Fixed: Moved chatbot outside Routes and removed extra fragment */}
        <Chatbot isOpen={isChatOpen} onToggle={() => setIsChatOpen(!isChatOpen)} />
        
        {/* Updated chat button with orange/divine light theme */}
        {!isChatOpen && (
          <motion.button
            onClick={() => setIsChatOpen(true)}
            className="fixed bottom-6 right-6 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-400 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 border-2 border-orange-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </motion.button>
        )}
      </div>
    </Router>
  );
}

export default App;