'use client';
import { useState, useEffect } from 'react';

type Testimonial = {
  id: number;
  name: string;
  company: string;
  role: string;
  text: string;
  avatar: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Vikram Rao",
    company: "Finora India",
    role: "CEO",
    text: "Tech Tots delivered our banking app 3 weeks ahead of schedule. It has already processed over ₹18 Crores in transactions. Their attention to detail and communication is truly unmatched.",
    avatar: "💼"
  },
  {
    id: 2,
    name: "Sneha Patel",
    company: "Bloomly",
    role: "Founder",
    text: "The UI/UX they designed increased our conversion rate by 340%. The team understood our brand perfectly and delivered a design that users absolutely love.",
    avatar: "🌸"
  },
  {
    id: 3,
    name: "Karthik Menon",
    company: "LogiTrack",
    role: "CTO",
    text: "They built a custom ERP system for us in just 11 weeks. It saved us the cost of 4 full-time employees. The team felt like an extension of our own engineering department.",
    avatar: "📦"
  },
  {
    id: 4,
    name: "Ananya Sharma",
    company: "EduVista",
    role: "Product Manager",
    text: "Working with Tech Tots on our edtech platform was seamless. They delivered clean code, excellent documentation, and were always available for discussions.",
    avatar: "📚"
  }
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    // Resume auto-play after 8 seconds
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  return (
    <section className="max-w-screen-2xl mx-auto px-8 py-24 bg-white">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12">
        <div>
          <span className="text-[#22C55E] font-medium tracking-widest text-sm">TESTIMONIALS</span>
          <h2 className="heading-font text-5xl font-semibold mt-3">What Our Clients Say</h2>
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-x-3 mt-6 md:mt-0">
          <button 
            onClick={goToPrevious}
            className="w-12 h-12 border border-slate-200 hover:border-[#4F46E5] rounded-2xl flex items-center justify-center text-2xl transition-all hover:bg-slate-50"
          >
            ←
          </button>
          <button 
            onClick={goToNext}
            className="w-12 h-12 border border-slate-200 hover:border-[#4F46E5] rounded-2xl flex items-center justify-center text-2xl transition-all hover:bg-slate-50"
          >
            →
          </button>
        </div>
      </div>

      {/* Testimonial Card */}
      <div className="relative overflow-hidden">
        <div 
          className="flex transition-transform duration-700 ease-out" 
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="min-w-full px-4">
              <div className="glass rounded-3xl p-12 max-w-4xl mx-auto">
                <div className="flex items-center gap-x-6 mb-10">
                  <div className="text-7xl">{testimonial.avatar}</div>
                  <div>
                    <h4 className="font-semibold text-2xl">{testimonial.name}</h4>
                    <p className="text-[#22C55E]">{testimonial.role} at {testimonial.company}</p>
                  </div>
                </div>

                <blockquote className="text-2xl leading-relaxed text-slate-700 italic">
                  “{testimonial.text}”
                </blockquote>

                <div className="mt-12 flex items-center gap-x-2 text-amber-400">
                  ★★★★☆
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-x-3 mt-10">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex 
                ? 'bg-[#4F46E5] w-8' 
                : 'bg-slate-300 hover:bg-slate-400'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}