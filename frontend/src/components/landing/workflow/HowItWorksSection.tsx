import React from 'react';
import { HOW_IT_WORKS_STEPS } from '../../../features/landing/landingData';
import { Box, Search, Scale, FileText, ArrowRight } from 'lucide-react';

export const HowItWorksSection: React.FC = () => {

  const renderIcon = (name: string) => {
    switch (name) {
      case 'Box': return <Box className="w-5 h-5 text-blue-600" />;
      case 'Search': return <Search className="w-5 h-5 text-blue-600" />;
      case 'Scale': return <Scale className="w-5 h-5 text-blue-600" />;
      case 'FileText': return <FileText className="w-5 h-5 text-blue-600" />;
      default: return <Box className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="bom" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
            SIMPLE AND POWERFUL
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-3">
            How ElectroMart Works
          </h2>
          <p className="text-sm text-slate-500 mt-2">
            From application discovery to final purchase in 4 simple steps.
          </p>
        </div>

        {/* 4 Steps Grid Pipeline */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {HOW_IT_WORKS_STEPS.map((item, index) => (
            <div 
              key={item.step} 
              className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-left relative flex flex-col justify-between hover:shadow-lg hover:border-blue-300 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 border border-blue-200 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {renderIcon(item.iconName)}
                  </div>
                  <span className="w-7 h-7 rounded-full bg-blue-600 text-white font-extrabold text-xs flex items-center justify-center shadow-md">
                    {item.step}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {index < HOW_IT_WORKS_STEPS.length - 1 && (
                <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                  <div className="w-6 h-6 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 shadow-sm">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
