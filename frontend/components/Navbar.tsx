'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <nav className="bg-white border-b border-slate-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-screen-2xl mx-auto">
        <div className="px-8 py-5 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-[#4F46E5] to-[#22C55E] rounded-2xl flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
              <span className="text-white text-2xl font-bold">T</span>
            </div>
            <div className="heading-font">
              <span className="text-3xl font-semibold tracking-tighter">TECH</span>
              <span className="text-3xl font-semibold tracking-tighter text-[#22C55E]">TOTS</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-x-9 text-base font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link py-2 relative ${isActive(link.href) 
                  ? 'text-[#4F46E5] font-semibold' 
                  : 'text-slate-700 hover:text-[#4F46E5]'}`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#4F46E5] to-[#22C55E] rounded"></span>
                )}
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-x-4">
            <Link 
              href="/contact"
              className="btn-gradient px-7 py-3.5 text-white font-semibold rounded-3xl flex items-center gap-x-2 shadow-lg hover:shadow-xl hidden md:flex"
            >
              Get a Quote →
            </Link>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="md:hidden w-11 h-11 flex items-center justify-center rounded-2xl hover:bg-slate-100 text-2xl"
            >
              {isMobileOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Menu - FIXED VERSION */}
        {isMobileOpen && (
          <div className="md:hidden border-t bg-white px-8 py-8">
            <div className="flex flex-col gap-y-6 text-lg font-medium">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`py-3 ${isActive(link.href) ? 'text-[#4F46E5] font-semibold' : 'text-slate-700'}`}
                  onClick={() => setIsMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="mt-10">
              <Link 
                href="/contact"
                onClick={() => setIsMobileOpen(false)}
                className="block w-full btn-gradient py-5 text-center text-white font-semibold rounded-3xl text-lg"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}