import React from 'react';
import { Cpu, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#070D1E] text-slate-400 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Main Footer Nav Grid */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          
          {/* Brand Info Column */}
          <div className="col-span-2 space-y-4">
            <a href="/" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold">
                <Cpu className="w-4 h-4" />
              </div>
              <span className="text-lg font-extrabold text-white tracking-tight">
                Electro<span className="text-blue-500">Mart</span>
              </span>
            </a>
            
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              A multi-vendor B2B marketplace for electronic components, helping innovators in India build the next generation of hardware products with transparent sourcing.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a href="#linkedin" className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 transition-colors" title="LinkedIn">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
              </a>
              <a href="#twitter" className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-500 transition-colors" title="Twitter">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#youtube" className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-rose-600 transition-colors" title="YouTube">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a href="#github" className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-colors" title="GitHub">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>
              </a>
            </div>
          </div>

          {/* Products Nav Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">Products</h4>
            <ul className="space-y-2">
              <li><a href="#popular-categories" className="hover:text-white transition-colors">All Components</a></li>
              <li><a href="#featured-components" className="hover:text-white transition-colors">New Arrivals</a></li>
              <li><a href="#featured-components" className="hover:text-white transition-colors">Best Rated</a></li>
              <li><a href="#popular-categories" className="hover:text-white transition-colors">Categories</a></li>
              <li><a href="#brands" className="hover:text-white transition-colors">Brands</a></li>
            </ul>
          </div>

          {/* Applications Nav Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">Applications</h4>
            <ul className="space-y-2">
              <li><a href="#applications" className="hover:text-white transition-colors">Drones</a></li>
              <li><a href="#applications" className="hover:text-white transition-colors">Smart Home</a></li>
              <li><a href="#applications" className="hover:text-white transition-colors">Robotics</a></li>
              <li><a href="#applications" className="hover:text-white transition-colors">Industrial Automation</a></li>
              <li><a href="#applications" className="hover:text-white transition-colors">Wearables</a></li>
              <li><a href="#applications" className="hover:text-white transition-colors">IoT & Communication</a></li>
            </ul>
          </div>

          {/* Suppliers Nav Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">Suppliers</h4>
            <ul className="space-y-2">
              <li><a href="#suppliers" className="hover:text-white transition-colors">Browse Suppliers</a></li>
              <li><a href="#suppliers" className="hover:text-white transition-colors">Become a Supplier</a></li>
              <li><a href="#suppliers" className="hover:text-white transition-colors">Supplier Login</a></li>
              <li><a href="#suppliers" className="hover:text-white transition-colors">Verified Suppliers</a></li>
            </ul>
          </div>

          {/* Company & Legal Nav Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">Resources & Legal</h4>
            <ul className="space-y-2">
              <li><a href="#bom" className="hover:text-white transition-colors">BOM Builder</a></li>
              <li><a href="#resources" className="hover:text-white transition-colors">Sourcing Guide</a></li>
              <li><a href="#resources" className="hover:text-white transition-colors">FAQs & Support</a></li>
              <li><a href="#terms" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="border-t border-slate-800/80 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} ElectroMart. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-rose-500 fill-current inline" /> for Electronics Innovators in India
          </div>
        </div>

      </div>
    </footer>
  );
};
