import React from 'react';
import { Cpu, ShieldCheck, Users, CheckCircle2 } from 'lucide-react';

export const MetricsBannerSection: React.FC = () => {
  return (
    <section className="py-14 bg-[#0B132B] text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10">
          <span className="text-[11px] font-bold text-blue-400 uppercase tracking-widest">
            TRUSTED BY THE ELECTRONICS COMMUNITY
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-1 text-slate-100">
            A Growing Marketplace for Innovation
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl text-center backdrop-blur-sm hover:border-blue-500/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mx-auto mb-3">
              <Cpu className="w-5 h-5 text-blue-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white">50K+</div>
            <div className="text-xs text-slate-400 mt-1 font-medium">Catalog Components</div>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl text-center backdrop-blur-sm hover:border-indigo-500/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mx-auto mb-3">
              <ShieldCheck className="w-5 h-5 text-indigo-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white">5K+</div>
            <div className="text-xs text-slate-400 mt-1 font-medium">Verified Suppliers</div>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl text-center backdrop-blur-sm hover:border-sky-500/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mx-auto mb-3">
              <Users className="w-5 h-5 text-sky-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white">10K+</div>
            <div className="text-xs text-slate-400 mt-1 font-medium">Registered Buyers</div>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl text-center backdrop-blur-sm hover:border-emerald-500/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white">99%</div>
            <div className="text-xs text-slate-400 mt-1 font-medium">Supplier Verification</div>
          </div>
        </div>

      </div>
    </section>
  );
};
