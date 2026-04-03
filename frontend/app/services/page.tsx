'use client';

const services = [
  {
    id: 1,
    icon: "🌐",
    title: "Web Development",
    description: "Modern, high-performance websites built with Next.js, React, Tailwind CSS, and Node.js. Fully responsive, SEO-optimized, and conversion-focused.",
    price: "₹1,49,000",
    priceLabel: "Starting from",
    features: [
      "Custom Design & Development",
      "SEO Optimization",
      "Fast Loading Speed",
      "Admin Dashboard",
      "Mobile Responsive",
      "3 Months Free Support"
    ],
    color: "#4F46E5"
  },
  {
    id: 2,
    icon: "📱",
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android using Flutter and React Native. Beautiful UI and smooth performance.",
    price: "₹2,99,000",
    priceLabel: "Starting from",
    features: [
      "Flutter or React Native",
      "iOS & Android Apps",
      "Push Notifications",
      "Offline Support",
      "App Store Deployment",
      "3 Months Free Support"
    ],
    color: "#22C55E"
  },
  {
    id: 3,
    icon: "🎨",
    title: "UI/UX Design",
    description: "User research, wireframing, high-fidelity prototypes, and complete design systems. We create interfaces that users love.",
    price: "₹89,000",
    priceLabel: "Starting from",
    features: [
      "User Research & Testing",
      "Wireframes & Prototypes",
      "High-Fidelity Designs",
      "Design System",
      "Figma Files Delivered",
      "Developer Handoff"
    ],
    color: "#F59E0B"
  },
  {
    id: 4,
    icon: "⚙️",
    title: "Custom Software",
    description: "Bespoke internal tools, CRMs, ERPs, dashboards, and automation platforms tailored to your exact business needs.",
    price: "₹4,99,000",
    priceLabel: "Starting from",
    features: [
      "Requirements Analysis",
      "Custom Architecture",
      "Database Design",
      "API Integration",
      "User Role Management",
      "Ongoing Maintenance"
    ],
    color: "#4F46E5"
  },
  {
    id: 5,
    icon: "🤝",
    title: "Freelance Projects",
    description: "Flexible development support for any duration. Hire expert developers for short-term or long-term projects.",
    price: "₹2,500",
    priceLabel: "Per Hour",
    features: [
      "Senior Developers",
      "Flexible Duration",
      "Daily/Weekly Reports",
      "Code Reviews",
      "Easy Onboarding",
      "Scalable Team Size"
    ],
    color: "#22C55E"
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#4F46E5]/5 to-white py-24">
        <div className="max-w-screen-2xl mx-auto px-8 text-center">
          <span className="px-6 py-2 bg-white text-[#4F46E5] font-medium rounded-3xl text-sm">SERVICES</span>
          <h1 className="heading-font text-7xl font-semibold tracking-tighter mt-6">End-to-End Digital Solutions</h1>
          <p className="mt-6 text-2xl text-slate-600 max-w-2xl mx-auto">
            From concept to launch — we handle everything with precision, creativity, and care.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-screen-2xl mx-auto px-8 py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="glass rounded-3xl p-10 hover:scale-[1.02] transition-all duration-300 border border-transparent hover:border-slate-200"
            >
              <div className="text-7xl mb-8" style={{ color: service.color }}>
                {service.icon}
              </div>
              
              <h3 className="text-3xl font-semibold mb-4">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-8">{service.description}</p>

              <div className="mb-10">
                <div className="text-xs text-slate-400 mb-1">{service.priceLabel}</div>
                <div className="text-5xl font-semibold text-slate-900">{service.price}</div>
              </div>

              <div className="space-y-4 mb-12">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-x-3">
                    <span className="text-[#22C55E] mt-1">✓</span>
                    <span className="text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => window.location.href = '/contact'}
                className="w-full btn-gradient text-white py-6 rounded-3xl font-semibold text-lg hover:shadow-xl"
              >
                Get a Quote
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-white py-24">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="heading-font text-5xl font-semibold">Our Simple Process</h2>
            <p className="text-slate-600 mt-4">4 steps from idea to live product</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "We understand your goals, users, and requirements" },
              { step: "02", title: "Design & Planning", desc: "Wireframes, UI design, and project roadmap" },
              { step: "03", title: "Development", desc: "Agile development with regular updates" },
              { step: "04", title: "Launch & Support", desc: "Testing, deployment, and ongoing maintenance" }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-6xl font-bold text-[#4F46E5] mb-4">{item.step}</div>
                <h4 className="text-2xl font-semibold mb-3">{item.title}</h4>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-screen-2xl mx-auto px-8 py-24 text-center">
        <div className="glass rounded-3xl p-16 max-w-3xl mx-auto">
          <h3 className="text-5xl font-semibold mb-6">Ready to Start Your Project?</h3>
          <p className="text-2xl text-slate-600 mb-10">
            Tell us about your idea and get a detailed quote within 4 hours.
          </p>
          <button 
            onClick={() => window.location.href = '/contact'}
            className="btn-gradient px-16 py-7 text-2xl font-semibold rounded-3xl text-white inline-flex items-center gap-x-4 hover:scale-105"
          >
            Start Your Project Now
            <span className="text-3xl">→</span>
          </button>
        </div>
      </section>
    </div>
  );
}