'use client';

const services = [
  { icon: "🌐", title: "Web Development", desc: "Blazing-fast, SEO-optimized websites", color: "#4F46E5" },
  { icon: "📱", title: "Mobile Apps", desc: "Native & cross-platform iOS/Android apps", color: "#22C55E" },
  { icon: "🎨", title: "UI/UX Design", desc: "Beautiful and intuitive user experiences", color: "#F59E0B" },
  { icon: "⚙️", title: "Custom Software", desc: "Tailored internal tools and platforms", color: "#4F46E5" },
  { icon: "🤝", title: "Freelance Projects", desc: "Flexible development on demand", color: "#22C55E" },
];

export default function ServicesOverview() {
  return (
    <div className="max-w-screen-2xl mx-auto px-8 py-20">
      <div className="text-center mb-12">
        <span className="px-6 py-2 bg-white text-[#4F46E5] font-medium rounded-3xl text-sm">OUR EXPERTISE</span>
        <h2 className="heading-font text-5xl font-semibold mt-4">What We Build</h2>
      </div>
      
      <div className="grid md:grid-cols-5 gap-6">
        {services.map((service, i) => (
          <div key={i} className="glass card-hover rounded-3xl p-8 cursor-pointer border border-transparent hover:border-[#4F46E5]/20" 
               onClick={() => window.location.href = '/services'}>
            <div className="text-5xl mb-6" style={{ color: service.color }}>{service.icon}</div>
            <h4 className="text-2xl font-semibold mb-2">{service.title}</h4>
            <p className="text-slate-600">{service.desc}</p>
            <div className="mt-8 text-[#4F46E5] flex items-center gap-x-2 text-sm font-medium">
              Learn more →
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}