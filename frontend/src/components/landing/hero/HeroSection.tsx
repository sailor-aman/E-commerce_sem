import React, { useState } from 'react';
import { Search, ShieldCheck, Globe, Cpu, FileSpreadsheet, ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onSearchSubmit?: (query: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onSearchSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearchSubmit) {
      onSearchSubmit(searchQuery);
    }
  };

  return (
    <section className="relative bg-[#070D1E] text-white pt-14 pb-20 overflow-hidden border-b border-slate-800">

      {/* Clear, High-Contrast PCB Microchip Background Image with Smooth Gradient Mask Fading */}
      <div className="absolute top-0 right-0 w-full lg:w-3/5 h-full pointer-events-none overflow-hidden select-none">
        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=80"
          alt="PCB Circuit Microchip Background"
          className="w-full h-full object-cover object-right opacity-70 contrast-125 saturate-125 scale-105 transition-opacity"
        />

        {/* Multi-Directional Gradient Fades (Left, Top, Bottom) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070D1E] via-[#070D1E]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070D1E] via-transparent to-[#070D1E]/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#070D1E]/80 via-transparent to-[#070D1E]" />

        {/* Vibrant Blue Glow Ambient Auras */}
        <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] bg-blue-600/30 rounded-full blur-[100px]" />
        <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-indigo-500/20 rounded-full blur-[90px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl space-y-7 text-left">

          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-400 text-xs font-bold uppercase tracking-wider shadow-sm">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            ELECTRONICS COMPONENT SOURCING
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12]">
            Source Electronic Components for Your{' '}
            <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300 bg-clip-text text-transparent drop-shadow-sm">
              Next Innovation
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-slate-300 text-base sm:text-xl font-normal leading-relaxed max-w-2xl">
            Compare suppliers, build BOM, and simplify procurement — all in one place.
          </p>

          {/* Large Sourcing Search Box */}
          <div className="pt-2 max-w-2xl">
            <form
              onSubmit={handleSubmit}
              className="bg-white p-2 rounded-2xl shadow-2xl flex flex-col sm:flex-row items-center gap-2 border-2 border-slate-200 focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-500/20 transition-all"
            >
              <div className="relative flex-1 w-full flex items-center">
                <Search className="w-6 h-6 text-slate-400 absolute left-4" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search components, suppliers, or applications..."
                  className="w-full pl-12 pr-4 py-3.5 text-base text-slate-900 placeholder-slate-400 bg-transparent border-none focus:outline-none focus:ring-0 font-medium"
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-base rounded-xl transition-all shadow-lg shadow-blue-600/30 hover:shadow-blue-600/40 flex items-center justify-center gap-2 shrink-0 cursor-pointer"
              >
                Search
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>

          {/* Feature Badges Grid */}
          <div className="pt-4 flex flex-wrap gap-3 max-w-3xl">
            <div className="bg-slate-900/90 backdrop-blur-md border border-slate-700/80 px-4 py-2.5 rounded-xl flex items-center gap-3 shadow-md">
              <div className="w-9 h-9 rounded-lg bg-blue-500/20 border border-blue-400/30 flex items-center justify-center shrink-0">
                <Cpu className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <div className="text-sm font-extrabold text-white">50K+</div>
                <div className="text-xs text-slate-400 font-medium">Components</div>
              </div>
            </div>

            <div className="bg-slate-900/90 backdrop-blur-md border border-slate-700/80 px-4 py-2.5 rounded-xl flex items-center gap-3 shadow-md">
              <div className="w-9 h-9 rounded-lg bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-indigo-400" />
              </div>
              <div>
                <div className="text-sm font-extrabold text-white">5K+</div>
                <div className="text-xs text-slate-400 font-medium">Verified Suppliers</div>
              </div>
            </div>

            <div className="bg-slate-900/90 backdrop-blur-md border border-slate-700/80 px-4 py-2.5 rounded-xl flex items-center gap-3 shadow-md">
              <div className="w-9 h-9 rounded-lg bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center shrink-0 text-base">
                🇮🇳
              </div>
              <div>
                <div className="text-sm font-extrabold text-white">India-Focused</div>
                <div className="text-xs text-slate-400 font-medium">Sourcing</div>
              </div>
            </div>

            <div className="bg-slate-900/90 backdrop-blur-md border border-slate-700/80 px-4 py-2.5 rounded-xl flex items-center gap-3 shadow-md">
              <div className="w-9 h-9 rounded-lg bg-sky-500/20 border border-sky-400/30 flex items-center justify-center shrink-0">
                <Globe className="w-5 h-5 text-sky-400" />
              </div>
              <div>
                <div className="text-sm font-extrabold text-white">Global</div>
                <div className="text-xs text-slate-400 font-medium">Components</div>
              </div>
            </div>

            <div className="bg-slate-900/90 backdrop-blur-md border border-slate-700/80 px-4 py-2.5 rounded-xl flex items-center gap-3 shadow-md">
              <div className="w-9 h-9 rounded-lg bg-amber-500/20 border border-amber-400/30 flex items-center justify-center shrink-0">
                <FileSpreadsheet className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <div className="text-sm font-extrabold text-white">BOM</div>
                <div className="text-xs text-slate-400 font-medium">& Procurement</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
