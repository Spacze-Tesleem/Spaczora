"use client";

import { useEffect, useState } from "react";
import { 
  CheckCircle, 
  Globe, 
  TrendingUp, 
  Star, 
  Briefcase,
  ArrowUpRight,
  User
} from "lucide-react";

export default function SocialProof() {
  const [activeHire, setActiveHire] = useState(0);
  const [dotStates, setDotStates] = useState<boolean[]>([]);

  // Simulated "Live" Hires Data
  const recentHires = [
    { role: "UX Designer", company: "Spotify", location: "London, UK", time: "2m ago" },
    { role: "Product Manager", company: "Notion", location: "New York, USA", time: "5m ago" },
    { role: "Frontend Dev", company: "Vercel", location: "Berlin, DE", time: "12m ago" },
    { role: "Data Scientist", company: "OpenAI", location: "San Fran, USA", time: "18m ago" },
  ];

  // Generate random dot states on client-side only to avoid hydration mismatch
  useEffect(() => {
    setDotStates([...Array(48)].map(() => Math.random() > 0.8));
  }, []);

  // Cycle through hires
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveHire((prev) => (prev + 1) % recentHires.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-[#050505] text-white relative overflow-hidden">
      
      {/* --- BACKGROUND SUBTLETY --- */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.08),transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4">
              Proven results, <br />
              <span className="text-gray-500">at global scale.</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Join the fastest-growing community of professionals accelerating their careers with AI.
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm font-medium text-white border border-white/10 bg-white/5 px-4 py-2 rounded-full">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            System Status: Operational
          </div>
        </div>

        {/* --- BENTO GRID LAYOUT --- */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4">
          
          {/* CARD 1: LIVE HIRES MAP (Large) */}
          <div className="md:col-span-6 lg:col-span-8 row-span-2 bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 relative overflow-hidden group">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
            
            {/* Abstract Map Dots - Fixed hydration issue */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] grid grid-cols-12 gap-4">
                {[...Array(48)].map((_, i) => (
                   <div 
                     key={i} 
                     className={`w-1 h-1 rounded-full bg-white ${
                       dotStates[i] ? 'animate-pulse' : 'opacity-20'
                     }`} 
                   />
                ))}
              </div>
            </div>

            <div className="relative z-10 flex flex-col h-full justify-between">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-medium">Live Placements</h3>
                  <p className="text-sm text-gray-500">Real-time hiring data from our users</p>
                </div>
              </div>

              {/* Animated Live Notification */}
              <div className="space-y-4">
                 {recentHires.map((hire, idx) => (
                    <div 
                      key={idx}
                      className={`flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/5 transition-all duration-700 ease-in-out ${idx === activeHire ? 'opacity-100 translate-y-0 scale-100 border-indigo-500/30 bg-indigo-500/10' : 'opacity-30 scale-95'}`}
                      style={{ display: idx === activeHire ? 'flex' : idx === (activeHire + 1) % 4 ? 'flex' : 'none' }}
                    >
                       <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-gray-700 to-gray-600 flex items-center justify-center">
                          <Briefcase className="w-4 h-4 text-white" />
                       </div>
                       <div>
                          <div className="text-white font-medium text-sm flex items-center gap-2">
                            {hire.role} at <span className="font-bold">{hire.company}</span>
                            <span className="text-[10px] bg-green-500/20 text-green-400 px-1.5 py-0.5 rounded ml-2">HIRED</span>
                          </div>
                          <div className="text-xs text-gray-500 flex items-center gap-2 mt-0.5">
                             <span>{hire.location}</span> • <span>{hire.time}</span>
                          </div>
                       </div>
                    </div>
                 ))}
              </div>
            </div>
          </div>

          {/* CARD 2: BIG METRIC (Tall) */}
          <div className="md:col-span-3 lg:col-span-4 bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:border-white/20 transition-colors">
            <div className="absolute top-0 right-0 p-8 opacity-50 group-hover:scale-110 transition-transform duration-500">
               <ArrowUpRight className="w-12 h-12 text-gray-700" />
            </div>
            <div className="h-full flex flex-col justify-end">
               <div className="text-6xl font-medium tracking-tighter text-white mb-2">94%</div>
               <div className="h-1.5 w-full bg-gray-800 rounded-full mb-4 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-green-400 to-emerald-500 w-[94%]" />
               </div>
               <h3 className="text-lg font-medium text-white">Interview Success Rate</h3>
               <p className="text-sm text-gray-500 mt-1">Users land an interview within 30 days of using SpaceZora.</p>
            </div>
          </div>

          {/* CARD 3: TRUSTED COMPANIES (Medium) */}
          <div className="md:col-span-3 lg:col-span-4 bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 flex flex-col justify-between group hover:border-white/20 transition-colors">
             <div className="flex items-center gap-2 text-gray-400 mb-6">
                <CheckCircle className="w-5 h-5 text-indigo-500" />
                <span className="text-sm font-medium uppercase tracking-wider">Approved By</span>
             </div>
             <div className="grid grid-cols-2 gap-4 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                {["Google", "Microsoft", "Amazon", "Tesla"].map((logo, i) => (
                   <div key={i} className="text-lg font-bold text-white">{logo}</div>
                ))}
             </div>
          </div>

          {/* CARD 4: RATING (Medium) */}
          <div className="md:col-span-6 lg:col-span-8 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 blur-[80px] rounded-full pointer-events-none" />
            
            <div className="flex items-center gap-6 mb-6 md:mb-0 relative z-10">
               <div className="flex -space-x-4">
                  {[1,2,3,4].map(i => (
                     <div key={i} className="w-12 h-12 rounded-full border-2 border-indigo-500 bg-gray-300 flex items-center justify-center text-gray-600 font-bold text-xs">
                        <User className="w-6 h-6 opacity-50" />
                     </div>
                  ))}
                  <div className="w-12 h-12 rounded-full border-2 border-indigo-500 bg-[#0A0A0A] flex items-center justify-center text-white text-xs font-bold">
                     2M+
                  </div>
               </div>
               <div>
                  <div className="text-white text-lg font-medium">Join 2 Million+ Users</div>
                  <div className="flex items-center gap-1 text-indigo-200 text-sm">
                     <span className="flex">
                        {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                     </span>
                     4.9/5 Average Rating
                  </div>
               </div>
            </div>

            <button className="relative z-10 bg-white text-indigo-600 px-6 py-3 rounded-xl font-bold text-sm hover:bg-gray-100 transition-colors shadow-lg">
               Start Building Now
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}