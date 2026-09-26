import React from 'react';
import { POPULAR_CATEGORIES } from '../../../features/landing/landingData';
import { ArrowRight } from 'lucide-react';

export const PopularCategoriesSection: React.FC = () => {

  const renderCategoryIcon = (id: string) => {
    switch (id) {
      case 'microcontrollers':
        return (
          <svg className="w-10 h-10 drop-shadow-sm" viewBox="0 0 64 64" fill="none">
            <rect x="16" y="16" width="32" height="32" rx="4" fill="#3B82F6" stroke="#1D4ED8" strokeWidth="2"/>
            <rect x="22" y="22" width="20" height="20" rx="2" fill="#1E293B"/>
            <circle cx="26" cy="26" r="1.5" fill="#60A5FA"/>
            <path d="M20 10v6M28 10v6M36 10v6M44 10v6" stroke="#64748B" strokeWidth="2" strokeLinecap="round"/>
            <path d="M20 48v6M28 48v6M36 48v6M44 48v6" stroke="#64748B" strokeWidth="2" strokeLinecap="round"/>
            <path d="M10 20h6M10 28h6M10 36h6M10 44h6" stroke="#64748B" strokeWidth="2" strokeLinecap="round"/>
            <path d="M48 20h6M48 28h6M48 36h6M48 44h6" stroke="#64748B" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        );
      case 'sensors':
        return (
          <svg className="w-10 h-10 drop-shadow-sm" viewBox="0 0 64 64" fill="none">
            <rect x="14" y="20" width="36" height="24" rx="4" fill="#0EA5E9" stroke="#0284C7" strokeWidth="2"/>
            <circle cx="32" cy="32" r="8" fill="#1E293B" stroke="#38BDF8" strokeWidth="2"/>
            <circle cx="32" cy="32" r="3" fill="#38BDF8"/>
            <path d="M22 44v8M42 44v8" stroke="#64748B" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
        );
      case 'power-management':
        return (
          <svg className="w-10 h-10 drop-shadow-sm" viewBox="0 0 64 64" fill="none">
            <rect x="18" y="14" width="28" height="36" rx="3" fill="#F59E0B" stroke="#D97706" strokeWidth="2"/>
            <path d="M34 22l-6 10h8l-6 10" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M24 50v6M40 50v6" stroke="#64748B" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
        );
      case 'connectors':
        return (
          <svg className="w-10 h-10 drop-shadow-sm" viewBox="0 0 64 64" fill="none">
            <rect x="12" y="22" width="40" height="20" rx="3" fill="#10B981" stroke="#059669" strokeWidth="2"/>
            <path d="M20 28v8M28 28v8M36 28v8M44 28v8" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round"/>
            <path d="M20 42v6M28 42v6M36 42v6M44 42v6" stroke="#64748B" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
        );
      case 'motors-actuators':
        return (
          <svg className="w-10 h-10 drop-shadow-sm" viewBox="0 0 64 64" fill="none">
            <circle cx="32" cy="32" r="18" fill="#6366F1" stroke="#4F46E5" strokeWidth="2"/>
            <circle cx="32" cy="32" r="8" fill="#1E293B"/>
            <circle cx="32" cy="32" r="3" fill="#818CF8"/>
            <path d="M32 8v6M32 50v6M8 32h6M50 32h6" stroke="#64748B" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
        );
      case 'passive-components':
        return (
          <svg className="w-10 h-10 drop-shadow-sm" viewBox="0 0 64 64" fill="none">
            <rect x="20" y="24" width="24" height="16" rx="2" fill="#E11D48" stroke="#BE123C" strokeWidth="2"/>
            <path d="M26 24v16M32 24v16M38 24v16" stroke="#FDE047" strokeWidth="2"/>
            <path d="M8 32h12M44 32h12" stroke="#64748B" strokeWidth="3" strokeLinecap="round"/>
          </svg>
        );
      case 'communication':
        return (
          <svg className="w-10 h-10 drop-shadow-sm" viewBox="0 0 64 64" fill="none">
            <rect x="16" y="18" width="32" height="28" rx="3" fill="#8B5CF6" stroke="#7C3AED" strokeWidth="2"/>
            <path d="M26 28a6 6 0 0 1 12 0M23 25a10 10 0 0 1 18 0" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="32" cy="32" r="2" fill="#FFFFFF"/>
            <path d="M22 46v6M42 46v6" stroke="#64748B" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
        );
      case 'development-boards':
        return (
          <svg className="w-10 h-10 drop-shadow-sm" viewBox="0 0 64 64" fill="none">
            <rect x="12" y="14" width="40" height="36" rx="4" fill="#0284C7" stroke="#0369A1" strokeWidth="2"/>
            <rect x="18" y="20" width="14" height="14" rx="2" fill="#1E293B"/>
            <circle cx="42" cy="24" r="3" fill="#F59E0B"/>
            <path d="M18 42h28" stroke="#38BDF8" strokeWidth="3" strokeDasharray="2 2"/>
          </svg>
        );
      case 'displays':
        return (
          <svg className="w-10 h-10 drop-shadow-sm" viewBox="0 0 64 64" fill="none">
            <rect x="12" y="16" width="40" height="28" rx="3" fill="#1E293B" stroke="#475569" strokeWidth="2"/>
            <rect x="16" y="20" width="32" height="20" rx="1" fill="#0F172A"/>
            <path d="M20 30l6-4 6 6 8-8" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M24 44v6M40 44v6" stroke="#64748B" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
        );
      case 'enclosures':
        return (
          <svg className="w-10 h-10 drop-shadow-sm" viewBox="0 0 64 64" fill="none">
            <path d="M32 12L52 22V42L32 52L12 42V22L32 12Z" fill="#64748B" stroke="#475569" strokeWidth="2"/>
            <path d="M32 12V52M12 22L32 32L52 22" stroke="#94A3B8" strokeWidth="2"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section id="popular-categories" className="py-14 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Popular Categories
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Browse components across major electronics categories
            </p>
          </div>
          <a 
            href="#all-categories" 
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors group shrink-0"
          >
            View all Categories
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* 10 Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {POPULAR_CATEGORIES.map((category) => (
            <a
              key={category.id}
              href={`#category-${category.id}`}
              className="bg-white border border-slate-200/80 rounded-2xl p-4 text-center flex flex-col items-center justify-center hover:shadow-lg hover:border-blue-500 hover:-translate-y-1 transition-all duration-200 group cursor-pointer aspect-square sm:aspect-auto sm:h-36"
            >
              <div className="w-14 h-14 rounded-xl bg-slate-100/80 group-hover:bg-blue-50 flex items-center justify-center mb-3 transition-colors">
                {renderCategoryIcon(category.id)}
              </div>

              <h3 className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-blue-600 transition-colors line-clamp-1">
                {category.name}
              </h3>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
