import React from 'react';
import { VALUE_PROPOSITIONS } from '../../../features/landing/landingData';
import { Scale, FileText, ShieldCheck, BarChart3 } from 'lucide-react';

export const ValuePropositionSection: React.FC = () => {

  const renderIcon = (name: string) => {
    switch (name) {
      case 'Scale': return <Scale className="w-6 h-6 text-blue-600" />;
      case 'FileText': return <FileText className="w-6 h-6 text-indigo-600" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-emerald-600" />;
      case 'Flag': return <span className="text-xl">🇮🇳</span>;
      case 'BarChart3': return <BarChart3 className="w-6 h-6 text-sky-600" />;
      default: return <Scale className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">
            WHY CHOOSE ELECTROMART
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-2">
            Built for Electronics Innovators
          </h2>
          <p className="text-sm text-slate-500 mt-2">
            A unified procurement platform designed specifically to solve fragmented hardware sourcing.
          </p>
        </div>

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {VALUE_PROPOSITIONS.map(prop => (
            <div
              key={prop.id}
              className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-xl hover:border-blue-300 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-100 group-hover:bg-blue-50 flex items-center justify-center mb-4 transition-colors">
                {renderIcon(prop.iconName)}
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                {prop.title}
              </h3>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                {prop.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
