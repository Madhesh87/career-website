'use client';
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      
      if (data.success) {
        toast.success("Thank you! We'll reply within 4 hours.");
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (err) {
      toast.error("Failed to send message. Check if backend is running.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="max-w-screen-2xl mx-auto px-8 py-24">
      <div className="grid md:grid-cols-12 gap-x-16">
        <div className="md:col-span-5">
          <h2 className="heading-font text-6xl font-semibold">Let's Build Something Amazing Together</h2>
          <p className="mt-6 text-xl text-slate-600">Tell us about your project. We respond within 4 hours.</p>
          
          <div className="mt-12 space-y-8">
            <div className="flex items-center gap-x-6">
              <span className="text-4xl">✉️</span>
              <div>
                <div className="font-medium">Email us</div>
                <a href="mailto:hello@techtots.in" className="text-xl">hello@techtots.in</a>
              </div>
            </div>
            <div className="flex items-center gap-x-6">
              <span className="text-4xl">📱</span>
              <div>
                <div className="font-medium">WhatsApp</div>
                <a href="https://wa.me/919876543210" className="text-xl">+91 98765 43210</a>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-7 mt-12 md:mt-0">
          <form onSubmit={handleSubmit} className="glass rounded-3xl p-10 md:p-14">
            <div className="grid grid-cols-2 gap-6">
              <input 
                type="text" 
                placeholder="Your Name" 
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-6 py-5 rounded-3xl border border-slate-200 focus:border-[#4F46E5] outline-none"
              />
              <input 
                type="email" 
                placeholder="Business Email" 
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-6 py-5 rounded-3xl border border-slate-200 focus:border-[#4F46E5] outline-none"
              />
            </div>

            <input 
              type="tel" 
              placeholder="Phone (optional)"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              className="mt-6 w-full px-6 py-5 rounded-3xl border border-slate-200 focus:border-[#4F46E5] outline-none"
            />

            <textarea 
              rows={6} 
              placeholder="Tell us about your project..."
              required
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="mt-6 w-full px-6 py-5 rounded-3xl border border-slate-200 focus:border-[#4F46E5] outline-none resize-none"
            />

            <button 
              type="submit" 
              disabled={loading}
              className="mt-10 w-full btn-gradient text-white py-7 rounded-3xl font-semibold text-xl flex items-center justify-center gap-x-3 disabled:opacity-70"
            >
              {loading ? 'Sending...' : 'SEND MESSAGE'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}