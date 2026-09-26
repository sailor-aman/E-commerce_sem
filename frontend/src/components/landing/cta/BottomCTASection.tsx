import React from 'react';
import { Search, ArrowRight } from 'lucide-react';

export const BottomCTASection: React.FC = () => {
  return (
    <section className="py-14 bg-slate-900 border-b border-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 border border-blue-500/30">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-2xl text-center md:text-left space-y-2 relative z-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Build Your Next Product with Confidence
            </h2>
            <p className="text-blue-100 text-sm sm:text-base font-normal">
              Find the right components, the right suppliers, and the right prices — all in one place.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto relative z-10 shrink-0">
            <a
              href="#popular-categories"
              className="w-full sm:w-auto px-6 py-3 bg-white text-slate-900 hover:bg-slate-100 font-bold text-xs rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 group"
            >
              <Search className="w-4 h-4 text-blue-600" />
              Search Components
            </a>
            <a
              href="#signup"
              className="w-full sm:w-auto px-6 py-3 bg-slate-900 hover:bg-slate-950 text-white font-bold text-xs rounded-xl border border-blue-400/40 shadow-lg transition-all flex items-center justify-center gap-2 group"
            >
              Get Started
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
