import React from 'react';
import { CheckCircle2, ArrowRight, Store } from 'lucide-react';

export const SupplierCTASection: React.FC = () => {
  return (
    <section id="suppliers" className="py-16 bg-white border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-br from-blue-900 via-indigo-950 to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative border border-slate-800">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider border border-blue-500/30">
                <Store className="w-3.5 h-3.5" /> FOR ELECTRONICS SUPPLIERS
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                Join ElectroMart as a Supplier
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
                List your products, reach thousands of verified hardware startups and engineers, and scale your component distribution business with our trusted marketplace.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 text-xs text-slate-200 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  Showcase your product catalogue
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-200 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  Reach startups and manufacturers
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-200 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  Get verified & build credibility
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-200 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  Manage orders & inquiries easily
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-3">
                <a
                  href="#supplier-register"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs rounded-xl shadow-lg shadow-blue-600/30 transition-all flex items-center gap-2 group"
                >
                  Become a Supplier
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#supplier-info"
                  className="px-6 py-3 bg-slate-800/80 hover:bg-slate-700 text-slate-200 font-semibold text-xs rounded-xl border border-slate-700 transition-all"
                >
                  Learn More
                </a>
              </div>

            </div>

            <div className="lg:col-span-5">
              <div className="bg-slate-900 border border-slate-700/80 rounded-2xl p-4 shadow-2xl backdrop-blur-xl">
                
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500" />
                    <div className="w-3 h-3 rounded-full bg-amber-500" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500" />
                    <span className="text-[11px] font-bold text-slate-400 ml-2">Supplier Portal</span>
                  </div>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded font-semibold border border-emerald-500/30">
                    Live Sync Active
                  </span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between text-[11px] text-slate-400 px-2 py-1 font-semibold border-b border-slate-800">
                    <span>Product Offer</span>
                    <span>Stock</span>
                    <span>Price</span>
                    <span>Status</span>
                  </div>

                  <div className="flex items-center justify-between bg-slate-800/60 p-2 rounded-lg text-[11px]">
                    <span className="font-semibold text-white">ESP32-WROOM-32</span>
                    <span className="text-slate-300">1,500</span>
                    <span className="text-emerald-400 font-bold">₹420</span>
                    <span className="bg-emerald-500/20 text-emerald-300 text-[10px] px-1.5 py-0.5 rounded">Active</span>
                  </div>

                  <div className="flex items-center justify-between bg-slate-800/60 p-2 rounded-lg text-[11px]">
                    <span className="font-semibold text-white">STM32F103 MCU</span>
                    <span className="text-slate-300">800</span>
                    <span className="text-emerald-400 font-bold">₹110</span>
                    <span className="bg-emerald-500/20 text-emerald-300 text-[10px] px-1.5 py-0.5 rounded">Active</span>
                  </div>

                  <div className="flex items-center justify-between bg-slate-800/60 p-2 rounded-lg text-[11px]">
                    <span className="font-semibold text-white">2212 BLDC Motor</span>
                    <span className="text-slate-300">250</span>
                    <span className="text-emerald-400 font-bold">₹850</span>
                    <span className="bg-emerald-500/20 text-emerald-300 text-[10px] px-1.5 py-0.5 rounded">Active</span>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
