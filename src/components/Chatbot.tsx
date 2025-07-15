import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Bot, User, Calendar } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

interface ChatbotProps {
  isOpen: boolean;
  onToggle: () => void;
}

const Chatbot: React.FC<ChatbotProps> = ({ isOpen, onToggle }) => {
const API_BASE = 'https://chris-backend.vercel.app'; // <-- Deployed backend on Vercel


  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm your coaching assistant. I can help you learn about our services and book a meeting with our coaches. How can I assist you today?",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [bookingMode, setBookingMode] = useState(false);
  const [bookingData, setBookingData] = useState({ name: '', email: '' });
  const [conversationContext, setConversationContext] = useState({
    interestedInBooking: false,
    askedAboutGoals: false,
    askedAboutExperience: false,
    askedAboutTimeframe: false,
    readyToBook: false,
  });
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll chat to bottom on new messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const addMessage = (text: string, isBot: boolean) => {
    setMessages((prev) => [
      ...prev,
      { id: Date.now().toString(), text, isBot, timestamp: new Date() },
    ]);
  };

  const handleBooking = async (name: string, email: string) => {
    try {
      setIsLoading(true);
      const response = await fetch(`${API_BASE}/api/book-meeting`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email }),
      });
      const data = await response.json();

      if (response.ok) {
        addMessage(`Great! ${data.message} You'll receive an email with the booking link shortly.`, true);
        setBookingMode(false);
        setBookingData({ name: '', email: '' });
        setConversationContext({
          interestedInBooking: false,
          askedAboutGoals: false,
          askedAboutExperience: false,
          askedAboutTimeframe: false,
          readyToBook: false,
        });
      } else {
        throw new Error(data.error || 'Failed to book meeting');
      }
    } catch (error) {
      console.error('Booking error:', error);
      addMessage('There was an issue booking your meeting. Please try again or contact us directly.', true);
    } finally {
      setIsLoading(false);
    }
  };

  const getNextQuestion = () => {
    if (!conversationContext.askedAboutGoals) return 'Great! What are your main goals with coaching?';
    if (!conversationContext.askedAboutExperience) return 'Have you worked with a coach before, or is this your first time?';
    if (!conversationContext.askedAboutTimeframe) return 'When are you looking to get started? Soon or later?';
    return 'Would you like me to help you schedule a consultation with a coach?';
  };

  const updateConversationContext = (userMessage: string) => {
  const lower = userMessage.toLowerCase();
  let updatedContext = { ...conversationContext };

  if (!updatedContext.askedAboutGoals) {
    updatedContext.askedAboutGoals = true;
  } else if (!updatedContext.askedAboutExperience) {
    updatedContext.askedAboutExperience = true;
  } else if (!updatedContext.askedAboutTimeframe) {
    updatedContext.askedAboutTimeframe = true;
  } else if (!updatedContext.readyToBook) {
    const yesWords = ['yes', 'ok', 'sure', 'please', 'book', 'schedule'];
    if (yesWords.some((word) => lower.includes(word))) {
      updatedContext.readyToBook = true;
      setConversationContext(updatedContext);
      return { updated: updatedContext, showBooking: true };
    }
  }

  setConversationContext(updatedContext);
  return { updated: updatedContext, showBooking: false };
};

  const extractName = (text: string): string | null => {
  // Check for phrases like "My name is Zain" or "I'm Zain"
  const nameMatch = text.match(/my name is (\w+)/i) || text.match(/i(?:'| a)m (\w+)/i);
  return nameMatch ? nameMatch[1] : null;
};

const handleSendMessage = async () => {
  if (!inputText.trim()) return;

  const userMessage = inputText.trim();
  addMessage(userMessage, false);
  setInputText('');
  setIsLoading(true);

  // Try to extract name from the user's message
  const extractedName = extractName(userMessage);
  if (extractedName) {
    // If a name is found, store it in bookingData
    setBookingData((prev) => ({ ...prev, name: extractedName }));
    addMessage(`Hi ${extractedName}!`, true);  // Respond with "Hi [name]!"
    setIsLoading(false);
    return; // Skip the rest of the logic if the name is recognized
  }

  const bookingKeywords = ['book', 'schedule', 'meeting', 'appointment', 'consultation'];
  const wantsToBook = bookingKeywords.some((k) => userMessage.toLowerCase().includes(k));

  if (wantsToBook && !conversationContext.interestedInBooking) {
    setConversationContext((prev) => ({ ...prev, interestedInBooking: true }));
    addMessage(getNextQuestion(), true);
    setIsLoading(false);
    return;
  }

  if (conversationContext.interestedInBooking && !conversationContext.readyToBook) {
    const showBookingForm = updateConversationContext(userMessage);
    if (showBookingForm) {
      setBookingMode(true);
      addMessage("Great! Please share your name and email so I can schedule your meeting.", true);
      setIsLoading(false);
      return;
    } else {
      addMessage(getNextQuestion(), true);
      setIsLoading(false);
      return;
    }
  }

  // Normal chat fallback (call backend chat API)
  try {
    const response = await fetch(`${API_BASE}/api/chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: userMessage }),
    });
    const data = await response.json();
    if (response.ok) {
      addMessage(data.response, true);
    } else {
      throw new Error(data.error || 'Chat API error');
    }
  } catch (error) {
    console.error('Chat error:', error);
    addMessage('I had trouble connecting. You can still book a meeting by entering your name and email.', true);
  } finally {
    setIsLoading(false);
  }
};


  const handleBookingSubmit = () => {
    if (bookingData.name && bookingData.email) {
      handleBooking(bookingData.name, bookingData.email);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-20 right-6 w-96 h-[600px] bg-white rounded-2xl shadow-2xl border border-orange-200 overflow-hidden z-40"
          style={{
            boxShadow: '0 25px 50px -12px rgba(251, 146, 60, 0.25), 0 0 30px rgba(251, 146, 60, 0.1)',
            background: 'linear-gradient(135deg, #ffffff 0%, #fff7ed 100%)'
          }}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 p-4 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 via-white/10 to-orange-600/20 animate-pulse"></div>
            <div className="relative z-10 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20"
                     style={{
                       background: 'radial-gradient(circle, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.2) 100%)',
                       boxShadow: '0 0 20px rgba(255,255,255,0.3)'
                     }}>
                  <Bot className="h-6 w-6 text-white drop-shadow-lg" />
                </div>
                <div>
                  <h3 className="font-semibold text-white drop-shadow-sm">Divine Assistant</h3>
                  <p className="text-sm text-white/90 drop-shadow-sm">Guiding with light</p>
                </div>
              </div>
              <button onClick={onToggle} className="hover:text-white/90 transition-colors">
                <X className="h-6 w-6 drop-shadow-sm" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 h-[400px]" 
               style={{
                 background: 'linear-gradient(180deg, #ffffff 0%, #fefbf3 50%, #fff7ed 100%)'
               }}>
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div className={`flex items-start space-x-2 max-w-[80%] ${msg.isBot ? '' : 'flex-row-reverse space-x-reverse'}`}>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-white shadow-lg ${
                      msg.isBot 
                        ? 'bg-gradient-to-br from-orange-400 to-orange-600' 
                        : 'bg-gradient-to-br from-orange-300 to-orange-500'
                    }`}
                    style={{
                      boxShadow: msg.isBot 
                        ? '0 4px 15px rgba(251, 146, 60, 0.4), 0 0 20px rgba(251, 146, 60, 0.2)' 
                        : '0 4px 15px rgba(251, 146, 60, 0.3)'
                    }}
                  >
                    {msg.isBot ? <Bot className="h-4 w-4" /> : <User className="h-4 w-4" />}
                  </div>
                  <div
                    className={`p-3 rounded-lg backdrop-blur-sm ${
                      msg.isBot 
                        ? 'bg-white/80 text-gray-800 border border-orange-100' 
                        : 'bg-gradient-to-r from-orange-400 to-orange-500 text-white'
                    }`}
                    style={{
                      boxShadow: msg.isBot 
                        ? '0 8px 25px rgba(251, 146, 60, 0.1), 0 0 15px rgba(255, 255, 255, 0.5)' 
                        : '0 8px 25px rgba(251, 146, 60, 0.3)'
                    }}
                  >
                    <p className="text-sm">{msg.text}</p>
                    <p className="text-xs mt-1 opacity-70">
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            {isLoading && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center shadow-lg"
                       style={{
                         boxShadow: '0 4px 15px rgba(251, 146, 60, 0.4), 0 0 20px rgba(251, 146, 60, 0.2)'
                       }}>
                    <Bot className="h-4 w-4 text-white" />
                  </div>
                  <div className="bg-white/80 p-3 rounded-lg backdrop-blur-sm border border-orange-100"
                       style={{
                         boxShadow: '0 8px 25px rgba(251, 146, 60, 0.1), 0 0 15px rgba(255, 255, 255, 0.5)'
                       }}>
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce delay-100" />
                      <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce delay-200" />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-orange-200 bg-white/90 backdrop-blur-sm">
            {bookingMode ? (
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Your name"
                  value={bookingData.name}
                  onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                  className="w-full p-2 border border-orange-200 rounded-lg text-sm focus:ring-2 focus:ring-orange-400 focus:border-orange-400 bg-white/80 backdrop-blur-sm"
                  style={{
                    boxShadow: '0 4px 15px rgba(251, 146, 60, 0.1)'
                  }}
                  required
                />
                <input
                  type="email"
                  placeholder="Your email"
                  value={bookingData.email}
                  onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
                  className="w-full p-2 border border-orange-200 rounded-lg text-sm focus:ring-2 focus:ring-orange-400 focus:border-orange-400 bg-white/80 backdrop-blur-sm"
                  style={{
                    boxShadow: '0 4px 15px rgba(251, 146, 60, 0.1)'
                  }}
                  required
                />
                <button
                  onClick={handleBookingSubmit}
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-orange-400 to-orange-600 text-white p-2 rounded-lg hover:from-orange-500 hover:to-orange-700 disabled:opacity-50 transition-all duration-200 shadow-lg"
                  style={{
                    boxShadow: '0 8px 25px rgba(251, 146, 60, 0.3), 0 0 20px rgba(251, 146, 60, 0.2)'
                  }}
                >
                  {isLoading ? 'Booking...' : 'Book Meeting'}
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <textarea
                  rows={1}
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 resize-none p-2 border border-orange-200 rounded-lg text-sm focus:ring-2 focus:ring-orange-400 focus:border-orange-400 bg-white/80 backdrop-blur-sm"
                  style={{
                    boxShadow: '0 4px 15px rgba(251, 146, 60, 0.1)'
                  }}
                  disabled={isLoading}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={isLoading || !inputText.trim()}
                  className="p-2 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 text-white hover:from-orange-500 hover:to-orange-700 disabled:opacity-50 transition-all duration-200 shadow-lg"
                  style={{
                    boxShadow: '0 8px 25px rgba(251, 146, 60, 0.3), 0 0 20px rgba(251, 146, 60, 0.2)'
                  }}
                  aria-label="Send"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Chatbot;