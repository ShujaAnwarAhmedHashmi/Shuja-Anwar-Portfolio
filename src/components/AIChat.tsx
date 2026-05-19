import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Send, X, Bot, User } from 'lucide-react';
import { cn } from '@/src/lib/utils.ts';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Assalamu Alaikum! I'm Shuja's AI assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });
      const data = await response.json();
      
      if (data.text) {
        setMessages(prev => [...prev, { role: 'assistant', content: data.text }]);
      } else {
        throw new Error(data.error || "Something went wrong");
      }
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'assistant', content: "I'm having trouble connecting right now. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 w-[350px] sm:w-[400px] h-[500px] glass rounded-[2rem] shadow-2xl border border-white/10 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-6 bg-brand-blue flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-black/20 rounded-xl">
                  <Bot className="text-black w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-black font-bold">Studio AI</h3>
                  <p className="text-black/60 text-xs font-medium">Assistant for Shuja Anwar</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-black/10 rounded-lg transition-colors"
              >
                <X className="text-black" />
              </button>
            </div>

            {/* Messages */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-hide"
            >
              {messages.map((msg, i) => (
                <div 
                  key={i} 
                  className={cn(
                    "flex gap-3",
                    msg.role === 'user' ? "flex-row-reverse" : "flex-row"
                  )}
                >
                  <div className={cn(
                    "w-8 h-8 rounded-lg flex items-center justify-center shrink-0",
                    msg.role === 'user' ? "bg-brand-blue" : "bg-white/10"
                  )}>
                    {msg.role === 'user' ? <User className="w-5 h-5 text-black" /> : <Bot className="w-5 h-5 text-brand-blue" />}
                  </div>
                  <div className={cn(
                    "max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed",
                    msg.role === 'user' 
                      ? "bg-brand-blue text-black rounded-tr-none font-medium" 
                      : "bg-white/5 text-gray-200 rounded-tl-none border border-white/5"
                  )}>
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <Bot className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div className="bg-white/5 p-4 rounded-2xl rounded-tl-none border border-white/5">
                    <div className="flex gap-1">
                      <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1 }} className="w-2 h-2 bg-brand-blue rounded-full" />
                      <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-2 h-2 bg-brand-blue rounded-full" />
                      <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-2 h-2 bg-brand-blue rounded-full" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-6 pt-0">
              <div className="relative">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask me about Shuja's work..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-brand-blue/50 transition-colors"
                />
                <button 
                  onClick={handleSend}
                  disabled={isLoading}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-brand-blue text-black rounded-xl hover:scale-105 transition-transform"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-brand-blue rounded-full shadow-[0_0_30px_rgba(0,209,255,0.4)] flex items-center justify-center group"
      >
        {isOpen ? <X className="text-black" /> : <MessageSquare className="text-black group-hover:animate-bounce" />}
      </motion.button>
    </div>
  );
}
