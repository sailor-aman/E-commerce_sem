import React, { useState, useEffect } from 'react';
import { Search, ShoppingCart, ChevronDown, Menu, X, Cpu } from 'lucide-react';

interface NavbarProps {
  cartCount?: number;
  onSearchSubmit?: (query: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount = 0, onSearchSubmit }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [productsDropdown, setProductsDropdown] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  // Scroll Spy Hook using IntersectionObserver
  useEffect(() => {
    const sectionIds = ['popular-categories', 'featured-components', 'applications', 'suppliers', 'bom', 'resources'];
    const sectionElements = sectionIds.map(id => document.getElementById(id)).filter(Boolean) as HTMLElement[];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120; // Header offset

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section.offsetTop <= scrollPosition) {
          const id = section.id;
          if (id === 'popular-categories' || id === 'featured-components') {
            setActiveSection('products');
          } else if (id === 'applications') {
            setActiveSection('applications');
          } else if (id === 'suppliers') {
            setActiveSection('suppliers');
          } else if (id === 'bom') {
            setActiveSection('bom');
          } else if (id === 'resources') {
            setActiveSection('resources');
          }
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Trigger initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string, sectionName: string) => {
    e.preventDefault();
    setActiveSection(sectionName);
    setMobileMenuOpen(false);

    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearchSubmit && searchQuery.trim()) {
      onSearchSubmit(searchQuery);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#070D1E] text-white border-b border-slate-800/90 shadow-xl backdrop-blur-md bg-opacity-95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 gap-4">
          
          {/* Brand Logo */}
          <a href="/" className="flex items-center gap-3 group shrink-0">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-200">
              <Cpu className="w-6 h-6 text-white" />
            </div>
            <div className="flex items-center">
              <span className="text-2xl font-black tracking-tight text-white">
                Electro<span className="text-blue-500">Mart</span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links with Active Scroll Spy Highlights */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-bold">
            
            {/* Products Dropdown Tab */}
            <div 
              className="relative py-5"
              onMouseEnter={() => setProductsDropdown(true)}
              onMouseLeave={() => setProductsDropdown(false)}
            >
              <a
                href="#popular-categories"
                onClick={(e) => handleNavClick(e, 'popular-categories', 'products')}
                className={`flex items-center gap-1.5 transition-colors py-1 ${
                  activeSection === 'products'
                    ? 'text-blue-400 font-extrabold'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                Products
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </a>
              
              {/* Active Indicator Underline Bar */}
              {activeSection === 'products' && (
                <span className="absolute bottom-1 left-0 w-full h-0.5 bg-blue-500 rounded-full animate-in fade-in" />
              )}

              {productsDropdown && (
                <div className="absolute top-full left-0 w-60 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl py-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <a 
                    href="#popular-categories" 
                    onClick={(e) => handleNavClick(e, 'popular-categories', 'products')}
                    className="block px-4 py-2.5 text-xs text-slate-300 hover:bg-blue-600 hover:text-white font-medium transition-colors"
                  >
                    Microcontrollers & ICs
                  </a>
                  <a 
                    href="#popular-categories" 
                    onClick={(e) => handleNavClick(e, 'popular-categories', 'products')}
                    className="block px-4 py-2.5 text-xs text-slate-300 hover:bg-blue-600 hover:text-white font-medium transition-colors"
                  >
                    Sensors & Actuators
                  </a>
                  <a 
                    href="#featured-components" 
                    onClick={(e) => handleNavClick(e, 'featured-components', 'products')}
                    className="block px-4 py-2.5 text-xs text-slate-300 hover:bg-blue-600 hover:text-white font-medium transition-colors"
                  >
                    Power Management
                  </a>
                  <div className="border-t border-slate-800 my-1.5" />
                  <a 
                    href="#featured-components" 
                    onClick={(e) => handleNavClick(e, 'featured-components', 'products')}
                    className="block px-4 py-2 text-xs text-blue-400 hover:bg-slate-800 font-bold"
                  >
                    View All Catalogue →
                  </a>
                </div>
              )}
            </div>

            {/* Applications Tab */}
            <div className="relative py-5">
              <a 
                href="#applications" 
                onClick={(e) => handleNavClick(e, 'applications', 'applications')}
                className={`transition-colors py-1 block ${
                  activeSection === 'applications'
                    ? 'text-blue-400 font-extrabold'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                Applications
              </a>
              {activeSection === 'applications' && (
                <span className="absolute bottom-1 left-0 w-full h-0.5 bg-blue-500 rounded-full animate-in fade-in" />
              )}
            </div>

            {/* Suppliers Tab */}
            <div className="relative py-5">
              <a 
                href="#suppliers" 
                onClick={(e) => handleNavClick(e, 'suppliers', 'suppliers')}
                className={`transition-colors py-1 block ${
                  activeSection === 'suppliers'
                    ? 'text-blue-400 font-extrabold'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                Suppliers
              </a>
              {activeSection === 'suppliers' && (
                <span className="absolute bottom-1 left-0 w-full h-0.5 bg-blue-500 rounded-full animate-in fade-in" />
              )}
            </div>

            {/* BOM Tab */}
            <div className="relative py-5">
              <a 
                href="#bom" 
                onClick={(e) => handleNavClick(e, 'bom', 'bom')}
                className={`transition-colors py-1 flex items-center gap-1.5 ${
                  activeSection === 'bom'
                    ? 'text-blue-400 font-extrabold'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                BOM <span className="bg-blue-600/30 text-blue-400 text-[10px] font-extrabold px-2 py-0.5 rounded border border-blue-500/40">TOOL</span>
              </a>
              {activeSection === 'bom' && (
                <span className="absolute bottom-1 left-0 w-full h-0.5 bg-blue-500 rounded-full animate-in fade-in" />
              )}
            </div>

            {/* Resources Tab */}
            <div className="relative py-5">
              <a 
                href="#resources" 
                onClick={(e) => handleNavClick(e, 'resources', 'resources')}
                className={`transition-colors py-1 block ${
                  activeSection === 'resources'
                    ? 'text-blue-400 font-extrabold'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                Resources
              </a>
              {activeSection === 'resources' && (
                <span className="absolute bottom-1 left-0 w-full h-0.5 bg-blue-500 rounded-full animate-in fade-in" />
              )}
            </div>

          </nav>

          {/* Right Header Actions */}
          <div className="flex items-center gap-4">
            
            {/* Cart Icon Button */}
            <a 
              href="#cart" 
              className="relative p-2.5 text-slate-300 hover:text-white hover:bg-slate-800 rounded-full transition-colors"
              title="Cart"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs font-black w-5 h-5 rounded-full flex items-center justify-center ring-2 ring-[#070D1E]">
                  {cartCount}
                </span>
              )}
            </a>

            {/* Auth Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <a 
                href="#login" 
                className="px-5 py-2.5 text-sm font-bold text-slate-200 border-2 border-slate-700 hover:bg-slate-800 hover:border-slate-600 rounded-xl transition-all shadow-sm"
              >
                Login
              </a>
              <a 
                href="#signup" 
                className="px-6 py-2.5 text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-lg shadow-blue-600/30 hover:shadow-blue-600/40 transition-all"
              >
                Sign Up
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-300 hover:text-white rounded-lg focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3">
          <form onSubmit={handleSearch} className="relative w-full">
            <input
              type="text"
              placeholder="Search components, suppliers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-800 text-sm text-slate-100 placeholder-slate-400 pl-9 pr-4 py-2.5 rounded-xl border border-slate-700 focus:outline-none focus:border-blue-500"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          </form>

          <div className="space-y-1 pt-2">
            <a 
              href="#popular-categories" 
              onClick={(e) => handleNavClick(e, 'popular-categories', 'products')}
              className={`block px-3 py-2 rounded-md text-sm font-semibold ${
                activeSection === 'products' ? 'bg-blue-600 text-white' : 'text-slate-200 hover:bg-slate-800'
              }`}
            >
              Products & Categories
            </a>
            <a 
              href="#applications" 
              onClick={(e) => handleNavClick(e, 'applications', 'applications')}
              className={`block px-3 py-2 rounded-md text-sm font-semibold ${
                activeSection === 'applications' ? 'bg-blue-600 text-white' : 'text-slate-200 hover:bg-slate-800'
              }`}
            >
              Applications
            </a>
            <a 
              href="#suppliers" 
              onClick={(e) => handleNavClick(e, 'suppliers', 'suppliers')}
              className={`block px-3 py-2 rounded-md text-sm font-semibold ${
                activeSection === 'suppliers' ? 'bg-blue-600 text-white' : 'text-slate-200 hover:bg-slate-800'
              }`}
            >
              Suppliers
            </a>
            <a 
              href="#bom" 
              onClick={(e) => handleNavClick(e, 'bom', 'bom')}
              className={`block px-3 py-2 rounded-md text-sm font-semibold ${
                activeSection === 'bom' ? 'bg-blue-600 text-white' : 'text-slate-200 hover:bg-slate-800'
              }`}
            >
              BOM Tool
            </a>
            <a 
              href="#resources" 
              onClick={(e) => handleNavClick(e, 'resources', 'resources')}
              className={`block px-3 py-2 rounded-md text-sm font-semibold ${
                activeSection === 'resources' ? 'bg-blue-600 text-white' : 'text-slate-200 hover:bg-slate-800'
              }`}
            >
              Resources
            </a>
          </div>

          <div className="pt-3 border-t border-slate-800 flex gap-3">
            <a href="#login" className="flex-1 text-center py-2.5 text-sm font-bold text-slate-200 border border-slate-700 rounded-xl">Login</a>
            <a href="#signup" className="flex-1 text-center py-2.5 text-sm font-bold text-white bg-blue-600 rounded-xl">Sign Up</a>
          </div>
        </div>
      )}
    </header>
  );
};
