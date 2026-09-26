import React from 'react';
import { APPLICATION_TEMPLATES } from '../../../features/landing/landingData';
import { ArrowRight, Layers } from 'lucide-react';

export const ApplicationExplorerSection: React.FC = () => {
  return (
    <section id="applications" className="py-16 bg-slate-900 text-white border-b border-slate-800 relative overflow-hidden">
      
      {/* Glow Background Gradient */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 uppercase tracking-wider mb-1">
              <Layers className="w-3.5 h-3.5" /> Application Sourcing Map
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Find Components by Application
            </h2>
            <p className="text-sm text-slate-400 mt-1 max-w-xl">
              Start with your target hardware project and get the full required component list instantly.
            </p>
          </div>
          <a
            href="#all-applications"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors group shrink-0"
          >
            View All Applications
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Application Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {APPLICATION_TEMPLATES.map(app => (
            <a
              key={app.id}
              href={`#app-${app.id}`}
              className="group relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-950/80 hover:border-blue-500/50 transition-all duration-300 shadow-xl flex flex-col justify-end min-h-[260px] p-6"
            >
              <div className="absolute inset-0 z-0">
                <img
                  src={app.imageUrl}
                  alt={app.title}
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-55 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-2">
                  <span className="bg-blue-600/30 text-blue-300 border border-blue-500/30 text-[11px] font-bold px-2.5 py-0.5 rounded-full backdrop-blur-sm">
                    {app.componentsCount}+ Required Components
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {app.title}
                </h3>
                <p className="text-xs text-slate-300 mt-2 line-clamp-2 leading-relaxed">
                  {app.description}
                </p>
                <div className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-blue-400 group-hover:text-white transition-colors">
                  Explore Component Map →
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
