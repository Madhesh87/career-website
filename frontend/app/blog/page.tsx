'use client';

import { useState } from 'react';

type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  slug: string;
};

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "How AI is Transforming Custom Software Development in 2026",
    excerpt: "Discover how we're using AI tools to cut development time by up to 60% while significantly improving code quality and user experience.",
    date: "March 28, 2026",
    readTime: "8 min read",
    category: "Technology",
    image: "🤖",
    slug: "ai-in-software-development-2026"
  },
  {
    id: 2,
    title: "Flutter vs React Native in 2026: Which One Should You Choose?",
    excerpt: "A detailed comparison based on 27 mobile apps we've shipped this year. Performance, development speed, and long-term maintenance.",
    date: "March 15, 2026",
    readTime: "12 min read",
    category: "Mobile Development",
    image: "📱",
    slug: "flutter-vs-react-native-2026"
  },
  {
    id: 3,
    title: "The 7 Must-Have Features Every SaaS Dashboard Needs",
    excerpt: "Lessons learned from building 14 SaaS platforms for our clients. These features consistently improve user retention and satisfaction.",
    date: "March 5, 2026",
    readTime: "10 min read",
    category: "UI/UX",
    image: "📊",
    slug: "saas-dashboard-features"
  },
  {
    id: 4,
    title: "Why We Switched to Next.js 15 for All New Web Projects",
    excerpt: "The real performance gains, developer experience improvements, and why App Router + Server Components changed everything for us.",
    date: "February 20, 2026",
    readTime: "7 min read",
    category: "Web Development",
    image: "⚡",
    slug: "why-nextjs-15"
  },
  {
    id: 5,
    title: "Building Secure Fintech Applications: Best Practices",
    excerpt: "From encryption to compliance — what we learned while developing a digital wallet that processes crores in transactions monthly.",
    date: "February 8, 2026",
    readTime: "15 min read",
    category: "Security",
    image: "🔒",
    slug: "secure-fintech-apps"
  }
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Technology", "Mobile Development", "UI/UX", "Web Development", "Security"];

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#4F46E5]/10 to-white py-24">
        <div className="max-w-screen-2xl mx-auto px-8 text-center">
          <span className="px-6 py-2 bg-white text-[#4F46E5] font-medium rounded-3xl text-sm">KNOWLEDGE HUB</span>
          <h1 className="heading-font text-7xl font-semibold tracking-tighter mt-6">Latest Insights</h1>
          <p className="mt-6 text-2xl text-slate-600 max-w-2xl mx-auto">
            Thoughts, tips, and trends from our team of software experts.
          </p>
        </div>
      </section>

      {/* Category Filters */}
      <div className="max-w-screen-2xl mx-auto px-8 py-8 border-b bg-white sticky top-[85px] z-40">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-8 py-3 rounded-3xl text-sm font-medium transition-all ${
                selectedCategory === category 
                  ? 'bg-[#4F46E5] text-white shadow-md' 
                  : 'bg-white border border-slate-200 hover:border-[#4F46E5] hover:text-[#4F46E5]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Posts Grid */}
      <section className="max-w-screen-2xl mx-auto px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <div 
              key={post.id}
              className="glass card-hover rounded-3xl overflow-hidden group cursor-pointer"
              onClick={() => window.open(`/blog/${post.slug}`, '_blank')}
            >
              {/* Image / Emoji Header */}
              <div className="h-56 flex items-center justify-center text-8xl bg-gradient-to-br from-slate-100 to-white border-b">
                {post.image}
              </div>

              <div className="p-8">
                <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-2xl font-semibold leading-tight mb-4 group-hover:text-[#4F46E5] transition-colors line-clamp-3">
                  {post.title}
                </h3>

                <p className="text-slate-600 line-clamp-3 mb-8">
                  {post.excerpt}
                </p>

                <div className="inline-flex items-center gap-x-2 text-sm font-medium text-[#4F46E5]">
                  Read Article 
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-2xl text-slate-500">No posts found in this category.</p>
          </div>
        )}
      </section>

      {/* Newsletter Section */}
      <section className="max-w-screen-2xl mx-auto px-8 py-24 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-4xl font-semibold mb-4">Stay Updated</h3>
          <p className="text-slate-600 mb-10">
            Get the latest insights on software development, design trends, and technology delivered to your inbox.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="your@email.com" 
              className="flex-1 px-6 py-5 rounded-3xl border border-slate-200 focus:border-[#4F46E5] outline-none"
            />
            <button className="btn-gradient px-10 py-5 text-white font-semibold rounded-3xl whitespace-nowrap">
              Subscribe
            </button>
          </div>
          <p className="text-xs text-slate-400 mt-6">We respect your inbox. Unsubscribe anytime.</p>
        </div>
      </section>
    </div>
  );
}