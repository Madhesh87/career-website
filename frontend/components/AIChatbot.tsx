'use client';
import { useState, useRef, useEffect } from 'react';

type Message = {
  id: number;
  text: string;
  isBot: boolean;
};

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hi! I'm Tech Tots AI Assistant. How can I help you today?", isBot: true }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userMessage: string): string => {
    const msg = userMessage.toLowerCase();

    if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey')) {
      return "Hello! 👋 How can I assist you with your software project today?";
    }
    if (msg.includes('service') || msg.includes('what do you do')) {
      return "We specialize in Web Development, Mobile Apps, UI/UX Design, Custom Software, and Freelance projects. Which service interests you?";
    }
    if (msg.includes('price') || msg.includes('cost') || msg.includes('how much')) {
      return "Pricing starts from ₹89,000 for UI/UX Design and goes up based on project scope. Would you like a custom quote?";
    }
    if (msg.includes('time') || msg.includes('how long') || msg.includes('duration')) {
      return "Most websites take 6-10 weeks, mobile apps 10-14 weeks. We provide exact timelines after understanding your requirements.";
    }
    if (msg.includes('portfolio') || msg.includes('work') || msg.includes('example')) {
      return "You can check our featured projects on the Portfolio page. We have delivered 120+ projects across various industries.";
    }
    if (msg.includes('location') || msg.includes('where are you')) {
      return "We are based in Coimbatore, Tamil Nadu, India. We work with clients across India and internationally.";
    }
    if (msg.includes('contact') || msg.includes('talk to human')) {
      return "Sure! You can reach us at hello@techtots.in or fill the contact form. Our team usually replies within 4 hours.";
    }
    if (msg.includes('thank')) {
      return "You're welcome! 😊 Feel free to ask anything else.";
    }

    // Default response
    return "Thanks for your question! Our team can provide detailed information. Would you like me to connect you with a human expert?";
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: input.trim(),
      isBot: false
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate thinking time
    setTimeout(() => {
      const botReply: Message = {
        id: Date.now() + 1,
        text: getBotResponse(input),
        isBot: true
      };
      setMessages(prev => [...prev, botReply]);
      setIsTyping(false);
    }, 800);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-br from-[#4F46E5] to-[#22C55E] text-white rounded-3xl flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all z-[9999] text-3xl"
        aria-label="Open AI Chatbot"
      >
        🤖
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-28 right-8 w-96 bg-white rounded-3xl shadow-2xl overflow-hidden z-[10000] chatbot-window border border-slate-100">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-[#4F46E5] to-[#22C55E] px-6 py-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-x-3">
              <div className="w-9 h-9 bg-white/20 rounded-2xl flex items-center justify-center text-xl">🤖</div>
              <div>
                <div className="font-semibold">Tech Tots AI Assistant</div>
                <div className="text-xs opacity-75">Always here to help</div>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-2xl hover:text-white/70 transition-colors"
            >
              ✕
            </button>
          </div>

          {/* Messages Area */}
          <div className="h-96 p-6 overflow-y-auto bg-slate-50 space-y-6" id="chat-messages">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div 
                  className={`max-w-[80%] px-5 py-4 rounded-3xl text-sm leading-relaxed
                    ${msg.isBot 
                      ? 'bg-white rounded-tl-none border border-slate-100' 
                      : 'bg-[#4F46E5] text-white rounded-tr-none'}`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white px-5 py-4 rounded-3xl rounded-tl-none border border-slate-100">
                  <div className="flex gap-x-1">
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 border-t bg-white flex gap-x-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask anything about our services..."
              className="flex-1 px-6 py-4 rounded-3xl border border-slate-200 focus:border-[#4F46E5] outline-none text-sm"
            />
            <button
              onClick={sendMessage}
              disabled={!input.trim()}
              className="w-14 h-14 bg-[#4F46E5] hover:bg-[#4338CA] disabled:bg-slate-300 text-white rounded-3xl flex items-center justify-center transition-colors"
            >
              <span className="text-xl">↑</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}