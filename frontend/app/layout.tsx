import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AIChatbot from '@/components/AIChatbot';
import { Toaster } from 'react-hot-toast';

export const metadata: Metadata = {
  title: 'TECH TOTS | Smart Software Solutions',
  description: 'Professional Web Development, Mobile Apps, UI/UX & Custom Software in India',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#F9FAFB] antialiased">
        <Navbar />
        {children}
        <Footer />
        <AIChatbot />
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
