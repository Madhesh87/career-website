'use client';
import { useEffect, useState } from 'react';

type Project = {
  _id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  liveLink: string;
};

export default function PortfolioGrid() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetch('http://localhost:5000/api/projects')
      .then(res => res.json())
      .then(data => setProjects(data));
  }, []);

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section className="max-w-screen-2xl mx-auto px-8 py-24">
      <div className="flex justify-between items-baseline mb-12">
        <h2 className="heading-font text-5xl font-semibold">Featured Work</h2>
        
        <div className="flex gap-x-2 flex-wrap">
          {['all', 'web', 'app', 'design', 'custom'].map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-7 py-2 rounded-3xl text-sm font-medium ${filter === cat ? 'bg-[#4F46E5] text-white' : 'hover:bg-slate-100'}`}
            >
              {cat === 'all' ? 'All Projects' : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div key={project._id} className="glass card-hover rounded-3xl overflow-hidden cursor-pointer"
               onClick={() => window.open(project.liveLink, '_blank')}>
            <div className="h-60 flex items-center justify-center text-8xl bg-gradient-to-br from-slate-100 to-white">
              {project.image}
            </div>
            <div className="p-6">
              <div className="uppercase text-xs font-medium text-[#4F46E5] mb-1">{project.category}</div>
              <h4 className="font-semibold text-xl mb-2">{project.title}</h4>
              <p className="text-slate-600 text-sm line-clamp-2 mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="px-3 py-1 text-xs bg-white rounded-3xl border">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}