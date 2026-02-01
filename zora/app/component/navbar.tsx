"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

// Inline SVG Icons
const Menu = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const X = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const ChevronDown = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
  </svg>
);

const Bot = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
  </svg>
);

const Cpu = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 5a2 2 0 00-2 2v6a2 2 0 002 2h6a2 2 0 002-2V7a2 2 0 00-2-2m-6 13v2m6-2v2m6-11a2 2 0 011.995 1.85l.005.15v6a2 2 0 01-1.999 2H4a2 2 0 01-2-2v-6a2 2 0 011.994-1.995L3 9h18z" />
  </svg>
);

const Globe = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0016 5.5V3.935m0 2.946v2.071a2 2 0 104 0v-2.07a9 9 0 10-4 0z" />
  </svg>
);

const Shield = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const BarChart = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const Sparkles = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const ArrowRight = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
);

const Zap = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const Layers = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 1112 2.944a11.954 11.954 0 018.618 3.04A12.02 12.02 0 0121 12c0 6.627-5.373 12-12 12s-12-5.373-12-12c0-1.843.364-3.596 1.027-5.193" />
  </svg>
);

const Code = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

export default function SpaceZoraNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll for glass effect density
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Data for the menus
  const features = [
    { icon: <Bot className="w-5 h-5 text-cyan-400" />, title: "AI Copilot", desc: "Automate your workflow" },
    { icon: <Cpu className="w-5 h-5 text-purple-400" />, title: "Neural Engine", desc: "Advanced processing power" },
    { icon: <Globe className="w-5 h-5 text-blue-400" />, title: "Global CDN", desc: "Light-speed delivery" },
    { icon: <Shield className="w-5 h-5 text-emerald-400" />, title: "Space Shield", desc: "Enterprise-grade security" },
  ];

  const solutions = [
    { icon: <BarChart className="w-4 h-4" />, title: "For Startups" },
    { icon: <Layers className="w-4 h-4" />, title: "For Enterprise" },
    { icon: <Code className="w-4 h-4" />, title: "For Developers" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
          scrolled
            ? "bg-[#030712]/80 backdrop-blur-md border-white/10 py-3"
            : "bg-[#030712] border-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            
            {/* --- LOGO --- */}
            <Link href="/" className="flex items-center gap-2 group">
              <span className="text-2xl font-bold text-white tracking-tight">
                Spac<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Zora</span>
              </span>
            </Link>

            {/* --- DESKTOP NAV (HOVER BASED) --- */}
            <div className="hidden lg:flex items-center space-x-1">
              
              {/* Dropdown 1: Features */}
              <div className="group relative">
                <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors">
                  Features
                  <ChevronDown className="w-4 h-4 text-gray-500 group-hover:text-indigo-400 group-hover:rotate-180 transition-all duration-300" />
                </button>
                
                {/* The Mega Menu */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 w-[500px]">
                  <div className="bg-[#0f172a] border border-white/10 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden p-2">
                    <div className="grid grid-cols-2 gap-2">
                      {features.map((item, idx) => (
                        <Link 
                          key={idx} 
                          href="#" 
                          className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group/item"
                        >
                          <div className="p-2 bg-white/5 rounded-lg group-hover/item:bg-white/10 transition-colors">
                            {item.icon}
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-white group-hover/item:text-indigo-400 transition-colors">
                              {item.title}
                            </div>
                            <div className="text-xs text-gray-400 mt-1">{item.desc}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-2 p-3 bg-gradient-to-r from-indigo-900/30 to-purple-900/30 rounded-xl border border-white/5 flex justify-between items-center">
                      <span className="text-xs text-indigo-300 font-medium flex items-center gap-1">
                        <Sparkles className="w-3 h-3" /> New V2.0 Engine is live
                      </span>
                      <ArrowRight className="w-3 h-3 text-indigo-300" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Dropdown 2: Solutions */}
              <div className="group relative">
                <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors">
                  Solutions
                  <ChevronDown className="w-4 h-4 text-gray-500 group-hover:text-indigo-400 group-hover:rotate-180 transition-all duration-300" />
                </button>
                
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 w-48">
                  <div className="bg-[#0f172a] border border-white/10 rounded-xl shadow-xl overflow-hidden py-1">
                    {solutions.map((item, idx) => (
                      <Link 
                        key={idx} 
                        href="#" 
                        className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                      >
                        <span className="text-indigo-400">{item.icon}</span>
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link href="#" className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors">
                Pricing
              </Link>
              <Link href="#" className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors">
                Docs
              </Link>
            </div>

            {/* --- RIGHT ACTIONS --- */}
            <div className="hidden lg:flex items-center gap-4">
              <Link href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                Sign In
              </Link>
              <Link 
                href="#" 
                className="group relative px-6 py-2.5 bg-white text-black font-bold text-sm rounded-full overflow-hidden hover:scale-105 transition-transform duration-300"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-gradient"></span>
                <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors">
                  Get Started <Zap className="w-3 h-3 fill-current" />
                </span>
              </Link>
            </div>

            {/* --- MOBILE TOGGLE --- */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-300 hover:text-white"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* --- MOBILE MENU --- */}
        <div className={`lg:hidden absolute top-full left-0 w-full bg-[#030712] border-b border-white/10 shadow-2xl transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-6 py-6 space-y-4">
            <div className="space-y-2">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Features</p>
              {features.map((item, idx) => (
                <Link key={idx} href="#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 text-gray-300">
                  {item.icon}
                  <span className="text-sm">{item.title}</span>
                </Link>
              ))}
            </div>
            
            <div className="border-t border-white/10 pt-4 space-y-3">
              <Link href="#" className="block text-sm font-medium text-gray-300">Pricing</Link>
              <Link href="#" className="block text-sm font-medium text-gray-300">Documentation</Link>
            </div>

            <div className="border-t border-white/10 pt-4 flex flex-col gap-3">
              <Link href="#" className="w-full py-3 text-center text-sm font-medium text-white bg-white/10 rounded-lg">
                Sign In
              </Link>
              <Link href="#" className="w-full py-3 text-center text-sm font-bold text-black bg-gradient-to-r from-indigo-400 to-purple-400 rounded-lg">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
