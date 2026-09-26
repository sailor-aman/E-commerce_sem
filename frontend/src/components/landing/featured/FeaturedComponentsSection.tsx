import React, { useState } from 'react';
import { FEATURED_COMPONENTS } from '../../../features/landing/landingData';
import type { FeaturedComponent } from '../../../features/landing/landingData';
import { Star, ShieldCheck, ArrowRight, CheckSquare, Square } from 'lucide-react';

export const FeaturedComponentsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'Popular' | 'New Arrivals' | 'Best Rated' | 'Verified Suppliers'>('Popular');
  const [comparedIds, setComparedIds] = useState<string[]>([]);

  const toggleCompare = (id: string) => {
    setComparedIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const filteredComponents = FEATURED_COMPONENTS.filter(comp => {
    if (activeTab === 'Popular') return true;
    return comp.tags.includes(activeTab);
  });

  return (
    <section id="featured-components" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Featured Components
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Top trending components with verified supplier offers
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {(['Popular', 'New Arrivals', 'Best Rated', 'Verified Suppliers'] as const).map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                  activeTab === tab
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <a 
            href="#all-products" 
            className="hidden md:inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors group shrink-0"
          >
            View All Products
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredComponents.map((item: FeaturedComponent) => {
            const isCompared = comparedIds.includes(item.id);
            return (
              <div
                key={item.id}
                className="bg-white border-2 border-slate-200/90 rounded-2xl p-5 flex flex-col justify-between hover:shadow-2xl hover:border-blue-400 transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-extrabold text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                    <span className="text-xs font-semibold text-slate-500">
                      {item.manufacturer}
                    </span>
                  </div>

                  {/* Product Image Area */}
                  <div className="w-full h-52 rounded-xl bg-slate-900/5 overflow-hidden mb-4 relative border border-slate-200/80 group-hover:border-blue-300 transition-all">
                    <img
                      src={item.imageUrl}
                      alt={item.partNumber}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
                    
                    <div className="absolute top-3 right-3 bg-emerald-600 text-white text-xs font-bold px-2.5 py-1 rounded-md shadow-md flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" /> Verified
                    </div>
                  </div>

                  <h3 className="text-lg font-black text-slate-900 group-hover:text-blue-600 transition-colors">
                    {item.partNumber}
                  </h3>
                  <p className="text-xs font-bold text-slate-700 mt-0.5 line-clamp-1">
                    {item.name}
                  </p>
                  <p className="text-xs text-slate-500 mt-1.5 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="flex items-center gap-2 mt-3 text-xs">
                    <div className="flex items-center text-amber-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="font-extrabold text-slate-900 ml-1">{item.rating}</span>
                    </div>
                    <span className="text-slate-400 font-medium">({item.reviewsCount} reviews)</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">Indicative Offer Price</div>
                      <div className="text-xl font-black text-slate-900">{item.priceRange}</div>
                    </div>
                    <div className="text-right">
                      <span className="inline-block text-xs font-extrabold text-emerald-700 bg-emerald-50 border border-emerald-300 px-2.5 py-0.5 rounded-md">
                        {item.inStock ? 'In Stock' : 'Out of Stock'}
                      </span>
                      <div className="text-xs text-blue-600 font-bold mt-1">MOQ: {item.moq} units</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    <button
                      onClick={() => toggleCompare(item.id)}
                      className={`py-3 px-3 rounded-xl border-2 text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                        isCompared 
                          ? 'bg-blue-50 border-blue-400 text-blue-700 shadow-sm'
                          : 'border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300'
                      }`}
                    >
                      {isCompared ? (
                        <CheckSquare className="w-4 h-4 text-blue-600" />
                      ) : (
                        <Square className="w-4 h-4 text-slate-400" />
                      )}
                      Compare
                    </button>
                    <a
                      href={`#product-${item.id}`}
                      className="py-3 px-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold text-center transition-all shadow-md shadow-blue-600/20 hover:shadow-blue-600/30 flex items-center justify-center gap-1 cursor-pointer"
                    >
                      View Details
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
