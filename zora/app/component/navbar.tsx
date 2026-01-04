"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  ChevronDown,
  Rocket,
  Zap,
  Cpu,
  Globe,
  Shield,
  BarChart,
  Stars,
  Sparkles,
  ArrowRight,
  Bot,
  Layers,
  Code
} from "lucide-react";

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