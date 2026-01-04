"use client";

import { useState } from "react";
import {
  Upload,
  Sparkles,
  Download,
  ArrowRight,
  Play,
  CheckCircle,
  FileText,
  Wand2,
  Settings,
  Zap
} from "lucide-react";

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: "01",
      icon: <Upload className="w-6 h-6" />,
      title: "Sync & Import",
      description:
        "Connect LinkedIn or upload an old PDF. Our AI instantly parses your history into a structured data format.",
      details: ["One-click LinkedIn sync", "PDF/Word parsing", "Smart auto-fill"],
      color: "from-blue-400 to-indigo-500",
      iconBg: "bg-blue-500/20 text-blue-400"
    },
    {
      number: "02",
      icon: <Sparkles className="w-6 h-6" />,
      title: "AI Optimization",
      description:
        "Our neural engine rewrites your bullet points to match the job description keywords and tone.",
      details: ["Keyword targeting", "Grammar polish", "Action verb boost"],
      color: "from-purple-400 to-pink-500",
      iconBg: "bg-purple-500/20 text-purple-400"
    },
    {
      number: "03",
      icon: <Download className="w-6 h-6" />,
      title: "Launch",
      description:
        "Export perfectly formatted PDF/Word documents that beat the ATS bots every single time.",
      details: ["ATS-friendly PDF", "Editable Word Doc", "Unique Link"],
      color: "from-emerald-400 to-green-500",
      iconBg: "bg-emerald-500/20 text-emerald-400"
    },
  ];

  return (
    <section className="py-24 bg-[#050505] text-white relative overflow-hidden">
      
      {/* --- BACKGROUND EFFECTS --- */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(255,255,255,0.02))] pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* --- HEADER --- */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-800 bg-gray-900/50 text-gray-400 text-xs font-mono mb-6">
            <Zap className="w-3 h-3 text-yellow-500" />
            WORKFLOW
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            From Zero to Hired in <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 animate-gradient">
              Three Simple Steps
            </span>
          </h2>
          <p className="text-lg text-gray-400">
            Stop fighting with formatting tools. Let SpaceZora handle the heavy lifting while you focus on the interview.
          </p>
        </div>

        {/* --- STEPS GRID --- */}
        <div className="grid lg:grid-cols-3 gap-8 mb-24 relative">
          
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-800 z-0">
             <div 
               className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-green-500 transition-all duration-700 ease-out"
               style={{ width: `${activeStep * 50}%` }}
             />
          </div>

          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group cursor-pointer z-10"
              onMouseEnter={() => setActiveStep(index)}
            >
              <div 
                className={`relative h-full bg-[#0A0A0A] border rounded-2xl p-8 transition-all duration-500 ${
                  activeStep === index 
                    ? "border-indigo-500/50 shadow-[0_0_50px_-12px_rgba(99,102,241,0.3)] -translate-y-2" 
                    : "border-white/5 hover:border-white/10"
                }`}
              >
                {/* Number Badge */}
                <div className={`absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#0A0A0A] border border-gray-800 flex items-center justify-center font-mono font-bold text-sm transition-colors duration-300 ${activeStep >= index ? 'text-white border-indigo-500 bg-indigo-500' : 'text-gray-500'}`}>
                  {step.number}
                </div>

                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl ${step.iconBg} flex items-center justify-center mb-6 mt-4 mx-auto`}>
                  {step.icon}
                </div>

                {/* Text */}
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Checklist */}
                <ul className="space-y-3 pt-6 border-t border-white/5">
                  {step.details.map((detail, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                      <CheckCircle className={`w-4 h-4 ${index === 0 ? 'text-blue-500' : index === 1 ? 'text-purple-500' : 'text-green-500'}`} />
                      {detail}
                    </li>
                  ))}
                </ul>

                {/* Hover Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl pointer-events-none`} />
              </div>
            </div>
          ))}
        </div>

        {/* --- DEMO VIDEO SECTION --- */}
        <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#0A0A0A]">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          
          <div className="grid lg:grid-cols-2">
            
            {/* Text Side */}
            <div className="p-8 lg:p-16 flex flex-col justify-center relative">
               <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-900/10 to-transparent pointer-events-none" />
               
               <div className="relative z-10">
                 <div className="inline-flex items-center gap-2 text-indigo-400 font-mono text-xs mb-4">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                    </span>
                    WATCH DEMO
                 </div>
                 <h3 className="text-3xl font-bold mb-4">See SpaceZora in Action</h3>
                 <p className="text-gray-400 mb-8 leading-relaxed">
                    Watch how Alex transformed a generic resume into a FAANG-ready application in under 4 minutes using our AI co-pilot.
                 </p>
                 
                 <div className="flex flex-wrap gap-4">
                    <button className="flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors">
                       <Play className="w-4 h-4 fill-current" />
                       Play Video
                    </button>
                    <div className="flex items-center gap-3 px-6 py-3 border border-white/10 rounded-lg text-sm text-gray-400">
                       <Settings className="w-4 h-4" />
                       View Features
                    </div>
                 </div>
               </div>
            </div>

            {/* Video Side */}
            <div className="relative bg-gray-900 aspect-video lg:aspect-auto group cursor-pointer overflow-hidden">
               {/* Thumbnail Image Placeholder */}
               <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 to-black mix-blend-overlay z-10" />
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80')] bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-700" />
               
               {/* Play Button */}
               <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_40px_rgba(255,255,255,0.1)]">
                     <Play className="w-8 h-8 text-white fill-white ml-1" />
                  </div>
               </div>

               {/* Video UI Overlay */}
               <div className="absolute bottom-4 left-4 right-4 z-20 flex justify-between items-end">
                  <div className="bg-black/60 backdrop-blur px-3 py-1 rounded text-xs font-mono">04:12</div>
                  <div className="flex gap-1">
                     <div className="w-1 h-4 bg-white/50 rounded-full animate-[equalizer_1s_ease-in-out_infinite]" />
                     <div className="w-1 h-6 bg-white/80 rounded-full animate-[equalizer_1.2s_ease-in-out_infinite]" />
                     <div className="w-1 h-3 bg-white/50 rounded-full animate-[equalizer_0.8s_ease-in-out_infinite]" />
                  </div>
               </div>
            </div>

          </div>
        </div>

        {/* --- BOTTOM CTA --- */}
        <div className="text-center mt-20">
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-lg transition-all duration-300 shadow-[0_0_20px_rgba(79,70,229,0.4)] group">
            Start Your Free Resume
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="text-gray-500 mt-4 text-sm">No credit card required • Cancel anytime</p>
        </div>

      </div>

      <style jsx>{`
        .animate-gradient {
             background-size: 200% auto;
             animation: gradient 4s linear infinite;
         }
         @keyframes gradient {
             0% { background-position: 0% 50%; }
             50% { background-position: 100% 50%; }
             100% { background-position: 0% 50%; }
         }
         @keyframes equalizer {
            0%, 100% { transform: scaleY(1); }
            50% { transform: scaleY(0.5); }
         }
      `}</style>
    </section>
  );
}