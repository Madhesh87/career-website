'use client';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#4F46E5]/10 to-white py-24">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="max-w-3xl">
            <span className="px-6 py-2 bg-white text-[#4F46E5] font-medium rounded-3xl text-sm">OUR STORY</span>
            <h1 className="heading-font text-7xl font-semibold tracking-tighter mt-6 leading-none">
              We Build Software That Matters
            </h1>
            <p className="mt-8 text-2xl text-slate-600">
              Founded in Coimbatore, TECH TOTS is a team of passionate developers, designers, and problem solvers 
              dedicated to turning bold ideas into reliable digital solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-screen-2xl mx-auto px-8 py-24">
        <div className="grid md:grid-cols-2 gap-16">
          <div className="glass rounded-3xl p-12">
            <h2 className="text-4xl font-semibold mb-6">Our Mission</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              To empower businesses with high-quality, scalable software solutions that are delivered on time, 
              within budget, and with complete transparency. We believe technology should simplify operations 
              and create real business value.
            </p>
          </div>

          <div className="glass rounded-3xl p-12">
            <h2 className="text-4xl font-semibold mb-6">Our Vision</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              To become the most trusted software development partner for mid-sized companies across India 
              and globally. We aim to set new standards in quality, communication, and client satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-screen-2xl mx-auto px-8 py-20 bg-white">
        <div className="text-center mb-16">
          <h2 className="heading-font text-5xl font-semibold">Why Choose TECH TOTS?</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="glass rounded-3xl p-10 text-center">
            <div className="text-6xl mb-6">🔒</div>
            <h3 className="text-2xl font-semibold mb-4">100% Transparency</h3>
            <p className="text-slate-600">
              Fixed pricing, clear milestones, and regular updates. No hidden costs, no surprises.
            </p>
          </div>

          <div className="glass rounded-3xl p-10 text-center">
            <div className="text-6xl mb-6">⏱️</div>
            <h3 className="text-2xl font-semibold mb-4">On-Time Delivery</h3>
            <p className="text-slate-600">
              We take deadlines seriously. If we miss ours, we work extra until it's delivered.
            </p>
          </div>

          <div className="glass rounded-3xl p-10 text-center">
            <div className="text-6xl mb-6">🛠️</div>
            <h3 className="text-2xl font-semibold mb-4">Lifetime Support</h3>
            <p className="text-slate-600">
              90 days of free support after launch + optional long-term maintenance plans.
            </p>
          </div>
        </div>
      </section>

      {/* Journey / Timeline */}
      <section className="max-w-screen-2xl mx-auto px-8 py-24">
        <h2 className="heading-font text-5xl font-semibold text-center mb-16">Our Journey</h2>
        
        <div className="max-w-4xl mx-auto relative border-l-4 border-[#4F46E5] pl-12 space-y-16">
          <div className="relative">
            <div className="absolute -left-[22px] w-10 h-10 bg-white border-4 border-[#4F46E5] rounded-full flex items-center justify-center text-xl">2019</div>
            <h3 className="text-2xl font-semibold">Company Founded</h3>
            <p className="text-slate-600 mt-2">Started with 3 developers in a small office in Coimbatore with one goal — deliver exceptional software.</p>
          </div>

          <div className="relative">
            <div className="absolute -left-[22px] w-10 h-10 bg-white border-4 border-[#4F46E5] rounded-full flex items-center justify-center text-xl">2021</div>
            <h3 className="text-2xl font-semibold">First International Client</h3>
            <p className="text-slate-600 mt-2">Delivered a fintech platform for a UK-based startup. This marked our entry into global projects.</p>
          </div>

          <div className="relative">
            <div className="absolute -left-[22px] w-10 h-10 bg-white border-4 border-[#4F46E5] rounded-full flex items-center justify-center text-xl">2023</div>
            <h3 className="text-2xl font-semibold">Team Expansion</h3>
            <p className="text-slate-600 mt-2">Grew to 28 talented professionals and opened our second studio in Bangalore.</p>
          </div>

          <div className="relative">
            <div className="absolute -left-[22px] w-10 h-10 bg-white border-4 border-[#4F46E5] rounded-full flex items-center justify-center text-xl">2026</div>
            <h3 className="text-2xl font-semibold">Today</h3>
            <p className="text-slate-600 mt-2">120+ successful projects delivered. Ready to bring your vision to life.</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-screen-2xl mx-auto px-8 py-24 bg-white">
        <div className="text-center mb-16">
          <h2 className="heading-font text-5xl font-semibold">Meet The Dream Team</h2>
          <p className="text-slate-600 mt-4">Experienced professionals who care about your success</p>
        </div>

        <div className="grid md:grid-cols-4 gap-10">
          <div className="text-center">
            <div className="mx-auto w-48 h-48 bg-gradient-to-br from-[#4F46E5] to-[#22C55E] rounded-3xl flex items-center justify-center text-8xl mb-6 shadow-xl">👨‍💻</div>
            <h4 className="font-semibold text-xl">Arjun Menon</h4>
            <p className="text-[#22C55E]">Founder &amp; CEO</p>
            <p className="text-sm text-slate-500 mt-2">15+ years in full-stack development</p>
          </div>

          <div className="text-center">
            <div className="mx-auto w-48 h-48 bg-gradient-to-br from-[#F59E0B] to-[#4F46E5] rounded-3xl flex items-center justify-center text-8xl mb-6 shadow-xl">👩‍🎨</div>
            <h4 className="font-semibold text-xl">Priya Sharma</h4>
            <p className="text-[#F59E0B]">Head of Design</p>
            <p className="text-sm text-slate-500 mt-2">Ex-Google UX Designer</p>
          </div>

          <div className="text-center">
            <div className="mx-auto w-48 h-48 bg-gradient-to-br from-[#22C55E] to-[#F59E0B] rounded-3xl flex items-center justify-center text-8xl mb-6 shadow-xl">👨‍🔧</div>
            <h4 className="font-semibold text-xl">Rahul Krishnan</h4>
            <p className="text-[#22C55E]">Lead Mobile Architect</p>
            <p className="text-sm text-slate-500 mt-2">Flutter &amp; React Native Expert</p>
          </div>

          <div className="text-center">
            <div className="mx-auto w-48 h-48 bg-gradient-to-br from-[#4F46E5] to-[#F59E0B] rounded-3xl flex items-center justify-center text-8xl mb-6 shadow-xl">👩‍💼</div>
            <h4 className="font-semibold text-xl">Meera Iyer</h4>
            <p className="text-[#F59E0B]">Project Director</p>
            <p className="text-sm text-slate-500 mt-2">PMP Certified • 50+ Projects Delivered</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-screen-2xl mx-auto px-8 py-20 text-center">
        <div className="glass rounded-3xl p-16 max-w-2xl mx-auto">
          <h3 className="text-4xl font-semibold mb-6">Ready to Start Your Project?</h3>
          <p className="text-xl text-slate-600 mb-10">Let's discuss how we can help bring your idea to life.</p>
          <button 
            onClick={() => window.location.href = '/contact'}
            className="btn-gradient px-12 py-6 text-xl font-semibold rounded-3xl text-white">
            Get In Touch
          </button>
        </div>
      </section>
    </div>
  );
}