"use client";

import { useState } from "react";
import {
  Sparkles,
  Target,
  Zap,
  Palette,
  Briefcase,
  Check,
  Search,
  Scan,
  ArrowRight,
  Fingerprint
} from "lucide-react";

export default function Features() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      id: "job-targeting",
      icon: <Target className="w-5 h-5" />,
      title: "Smart Job Targeting",
      subtitle: "Match your resume to any JD",
      description: "Paste a job description, and our AI will rewrite your bullet points to match the keywords and skills required, instantly boosting your match score.",
      stats: [
        { label: "Keyword Match", value: "98%" },
        { label: "Relevance", value: "High" }
      ],
      visual: "radar", 
      color: "from-cyan-400 to-blue-500",
      accent: "text-cyan-400"
    },
    {
      id: "ai-writing",
      icon: <Sparkles className="w-5 h-5" />,
      title: "AI Writer Copilot",
      subtitle: "Write like a pro",
      description: "Stuck on what to say? Our AI suggests powerful, action-oriented bullet points based on your role, industry, and experience level.",
      stats: [
        { label: "Writing Speed", value: "10x" },
        { label: "Impact Score", value: "+45%" }
      ],
      visual: "code",
      color: "from-indigo-400 to-purple-500",
      accent: "text-indigo-400"
    },
    {
      id: "job-search",
      icon: <Search className="w-5 h-5" />,
      title: "Intelligent Job Search",
      subtitle: "Find hidden opportunities",
      description: "Our crawler finds jobs that perfectly match your resume's unique skill fingerprint, filtering out irrelevant listings automatically.",
      stats: [
        { label: "Daily Matches", value: "50+" },
        { label: "Accuracy", value: "95%" }
      ],
      visual: "list",
      color: "from-emerald-400 to-green-500",
      accent: "text-emerald-400"
    },
    {
      id: "ats-scan",
      icon: <Scan className="w-5 h-5" />,
      title: "ATS Simulator",
      subtitle: "Beat the bots",
      description: "See exactly what the Applicant Tracking System sees. We identify parsing errors and format issues before you hit send.",
      stats: [
        { label: "Parse Rate", value: "100%" },
        { label: "Errors Found", value: "0" }
      ],
      visual: "scan",
      color: "from-orange-400 to-red-500",
      accent: "text-orange-400"
    }
  ];

  return (
    <section className="py-24 bg-[#030712] text-white relative overflow-hidden">
      
      {/* --- BACKGROUND --- */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-[#030712] to-[#030712]" />
      <div className="absolute left-0 top-1/2 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* --- HEADER --- */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-indigo-300 text-xs font-mono mb-6">
            <Fingerprint className="w-3 h-3" />
            CORE CAPABILITIES
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Engineered for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-indigo-400 animate-gradient">
              Maximum Impact
            </span>
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
            SpaceZora isn't just a document editor. It's a comprehensive career intelligence platform that connects your skills to the market.
          </p>
        </div>

        {/* --- SPLIT LAYOUT --- */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* LEFT: FEATURE NAVIGATION */}
          <div className="lg:col-span-5 flex flex-col gap-4">
             {features.map((feature, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveFeature(idx)}
                  className={`group text-left p-6 rounded-2xl border transition-all duration-300 relative overflow-hidden ${
                    activeFeature === idx 
                      ? "bg-white/5 border-indigo-500/50 shadow-[0_0_30px_rgba(99,102,241,0.1)]" 
                      : "bg-transparent border-transparent hover:bg-white/5"
                  }`}
                >
                   {/* Active Indicator Bar */}
                   {activeFeature === idx && (
                      <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${feature.color}`} />
                   )}
                   
                   <div className="flex items-start gap-4">
                      <div className={`mt-1 p-2 rounded-lg bg-gray-900 border border-gray-800 transition-colors ${activeFeature === idx ? feature.accent : 'text-gray-500 group-hover:text-gray-300'}`}>
                         {feature.icon}
                      </div>
                      <div>
                         <h3 className={`font-bold text-lg mb-1 transition-colors ${activeFeature === idx ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
                            {feature.title}
                         </h3>
                         <p className={`text-sm transition-colors ${activeFeature === idx ? 'text-gray-400' : 'text-gray-600'}`}>
                            {feature.subtitle}
                         </p>
                      </div>
                   </div>
                </button>
             ))}
          </div>

          {/* RIGHT: INTERACTIVE PREVIEW */}
          <div className="lg:col-span-7 relative">
             <div className="sticky top-10">
                {/* The "Screen" Container */}
                <div className="relative aspect-square md:aspect-[4/3] bg-[#0A0A0A] rounded-3xl border border-white/10 shadow-2xl overflow-hidden flex flex-col">
                   
                   {/* Top Bar */}
                   <div className="h-12 border-b border-white/5 bg-white/5 flex items-center px-6 justify-between">
                      <div className="flex gap-2">
                         <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                         <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                         <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                      </div>
                      <div className={`text-xs font-mono ${features[activeFeature].accent} opacity-80 uppercase tracking-wider`}>
                         Module: {features[activeFeature].id}
                      </div>
                   </div>

                   {/* Main Content Area */}
                   <div className="flex-1 p-8 md:p-12 relative">
                      
                      {/* Background Grid */}
                      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

                      {/* Content Animation Container */}
                      <div key={activeFeature} className="relative z-10 animate-fade-in-up h-full flex flex-col">
                         
                         <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${features[activeFeature].color} flex items-center justify-center mb-6 shadow-lg`}>
                            <div className="text-white">
                               {features[activeFeature].icon}
                            </div>
                         </div>

                         <h3 className="text-3xl font-bold text-white mb-4">
                            {features[activeFeature].title}
                         </h3>
                         <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            {features[activeFeature].description}
                         </p>

                         {/* Dynamic Visualization based on Feature Type */}
                         <div className="mt-auto bg-[#151515] rounded-xl border border-white/10 p-4">
                            {features[activeFeature].visual === 'radar' && (
                               <div className="flex items-center justify-between">
                                  <div className="space-y-1">
                                     <div className="text-xs text-gray-500 uppercase">Input: Job Description</div>
                                     <div className="text-sm font-mono text-cyan-400 truncate w-48">"Looking for Senior React Dev..."</div>
                                  </div>
                                  <ArrowRight className="text-gray-600 w-4 h-4" />
                                  <div className="space-y-1 text-right">
                                     <div className="text-xs text-gray-500 uppercase">Match Score</div>
                                     <div className="text-xl font-bold text-white">98%</div>
                                  </div>
                               </div>
                            )}

                            {features[activeFeature].visual === 'code' && (
                               <div className="font-mono text-xs space-y-2">
                                  <div className="text-gray-500">// AI Suggestion</div>
                                  <div className="text-indigo-300">"Spearheaded the migration to Next.js 14..."</div>
                                  <div className="text-indigo-300">"Reduced load times by 40% via optimization..."</div>
                               </div>
                            )}

                            {features[activeFeature].visual === 'list' && (
                               <div className="space-y-2">
                                  <div className="flex items-center justify-between text-sm p-2 bg-white/5 rounded">
                                     <span className="text-gray-300">Frontend Engineer @ Netflix</span>
                                     <span className="text-green-400 font-bold">99% Match</span>
                                  </div>
                                  <div className="flex items-center justify-between text-sm p-2 bg-white/5 rounded opacity-60">
                                     <span className="text-gray-300">UI Developer @ Apple</span>
                                     <span className="text-green-400 font-bold">94% Match</span>
                                  </div>
                               </div>
                            )}

                             {features[activeFeature].visual === 'scan' && (
                               <div className="flex items-center gap-4">
                                  <div className="relative w-8 h-10 border border-white/20 bg-white/5 rounded overflow-hidden">
                                     <div className="absolute top-0 w-full h-1 bg-orange-500 animate-[scan_2s_ease-in-out_infinite]" />
                                  </div>
                                  <div>
                                     <div className="text-white font-bold text-sm">Parsing Analysis</div>
                                     <div className="text-orange-400 text-xs">No errors detected</div>
                                  </div>
                               </div>
                            )}
                         </div>

                         {/* Stats Grid */}
                         <div className="grid grid-cols-2 gap-4 mt-6">
                            {features[activeFeature].stats.map((stat, i) => (
                               <div key={i}>
                                  <div className="text-gray-500 text-xs uppercase tracking-wider mb-1">{stat.label}</div>
                                  <div className="text-white font-bold text-lg">{stat.value}</div>
                               </div>
                            ))}
                         </div>
                      </div>
                   </div>

                   {/* Glow Effect */}
                   <div className={`absolute -bottom-20 -right-20 w-64 h-64 bg-gradient-to-br ${features[activeFeature].color} opacity-20 blur-[80px]`} />
                </div>
             </div>
          </div>

        </div>

        {/* --- BOTTOM PILLS --- */}
        <div className="mt-20 pt-10 border-t border-white/5 flex flex-wrap justify-center gap-6">
           {["ISO 27001 Certified", "GDPR Compliant", "256-bit Encryption"].map((text, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-gray-500">
                 <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                 {text}
              </div>
           ))}
        </div>
      </div>

      <style jsx>{`
         @keyframes scan {
            0%, 100% { top: 0% }
            50% { top: 100% }
         }
         .animate-fade-in-up {
            animation: fadeInUp 0.5s ease-out forwards;
         }
         @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
         }
         .animate-gradient {
             background-size: 200% auto;
             animation: gradient 4s linear infinite;
         }
         @keyframes gradient {
             0% { background-position: 0% 50%; }
             50% { background-position: 100% 50%; }
             100% { background-position: 0% 50%; }
         }
      `}</style>
    </section>
  );
}