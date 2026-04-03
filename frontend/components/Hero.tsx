'use client';

export default function Hero() {
  return (
    <section className="hero-bg min-h-screen flex items-center pt-16">
      <div className="max-w-screen-2xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-x-2 bg-white/80 backdrop-blur-md px-6 py-3 rounded-3xl border border-white shadow-sm">
            <div className="w-3 h-3 bg-[#22C55E] rounded-full animate-pulse"></div>
            <span className="font-semibold text-sm tracking-[1px] text-slate-600">PROFESSIONAL SOFTWARE DEVELOPMENT</span>
          </div>
          
          <h1 className="heading-font text-7xl md:text-8xl leading-none font-semibold tracking-tighter">
            Building Smart<br />Software Solutions<br />for Your Business
          </h1>
          
          <p className="text-2xl text-slate-600 max-w-lg">
            We turn your ideas into powerful digital products that drive real growth.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-gradient px-10 py-6 text-xl font-semibold rounded-3xl flex items-center gap-x-3 text-white">
              Get Your Free Quote
              <span className="text-xl">→</span>
            </button>
            
            <button 
              onClick={() => window.location.href = '/services'}
              className="px-10 py-6 text-xl font-semibold border-2 border-slate-300 hover:border-[#4F46E5] rounded-3xl">
              Explore Services
            </button>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-6 pt-6">
            <div className="flex items-center gap-x-4">
              <div className="text-5xl font-semibold text-[#4F46E5]">120+</div>
              <div className="text-sm leading-tight">PROJECTS<br /><span className="text-slate-500">Delivered</span></div>
            </div>
            <div className="flex items-center gap-x-4">
              <div className="text-5xl font-semibold text-[#22C55E]">85+</div>
              <div className="text-sm leading-tight">HAPPY CLIENTS<br /><span className="text-slate-500">Worldwide</span></div>
            </div>
            <div className="flex items-center gap-x-4">
              <div className="text-5xl font-semibold text-[#F59E0B]">6</div>
              <div className="text-sm leading-tight">YEARS<br /><span className="text-slate-500">of Excellence</span></div>
            </div>
          </div>
        </div>

        <div className="relative hidden md:block">
          <div className="glass rounded-3xl p-2 shadow-2xl">
            <div className="bg-white rounded-3xl p-8 relative overflow-hidden">
              <div className="flex justify-between mb-8">
                <div className="space-y-2">
                  <div className="h-3 w-40 bg-slate-200 rounded-full"></div>
                  <div className="h-3 w-60 bg-slate-200 rounded-full"></div>
                </div>
                <div className="px-5 py-2 bg-[#22C55E] text-white text-sm font-medium rounded-2xl">LIVE PROJECT</div>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2 bg-gradient-to-br from-[#4F46E5] to-[#22C55E] text-white rounded-3xl p-6">
                  <div className="text-sm opacity-75">Mobile App Launch</div>
                  <div className="text-6xl font-semibold">42k</div>
                  <div className="text-sm">Downloads</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}