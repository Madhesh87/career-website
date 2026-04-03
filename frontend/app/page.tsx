import Hero from '@/components/Hero';
import ServicesOverview from '@/components/ServicesOverview';
import TestimonialSlider from '@/components/TestimonialSlider';
import PortfolioGrid from '@/components/PortfolioGrid';
import AIChatbot from '@/components/AIChatbot';

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <Hero />

      {/* QUICK SERVICES OVERVIEW */}
      <ServicesOverview />

      {/* TESTIMONIALS SLIDER */}
      <TestimonialSlider />

      {/* PORTFOLIO SECTION */}
      <PortfolioGrid />

      {/* FINAL CTA SECTION */}
      <section className="max-w-screen-2xl mx-auto px-8 py-24 bg-gradient-to-br from-[#4F46E5]/5 to-white">
        <div className="glass rounded-3xl p-16 text-center max-w-3xl mx-auto">
          <h2 className="heading-font text-5xl font-semibold mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl text-slate-600 mb-10">
            Let's turn your idea into a powerful digital product. 
            Get a detailed quote within 4 hours.
          </p>
          <a 
            href="/contact"
            className="inline-flex btn-gradient px-12 py-7 text-2xl font-semibold rounded-3xl text-white items-center gap-x-4 hover:scale-105 transition-transform"
          >
            Start Your Project Now
            <span className="text-3xl">→</span>
          </a>
        </div>
      </section>
    </>
  );
}