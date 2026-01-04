"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
    ArrowRight,
    UploadCloud,
    FileText,
    Check,
    Cpu,
    Scan,
    Sparkles,
    Command,
    Globe,
} from "lucide-react";

export default function Hero() {
    const [activeRole, setActiveRole] = useState("Engineer");
    const roles = ["Engineer", "Designer", "Manager", "Marketer"];

    // Rotating text effect
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveRole((prev) => {
                const currentIndex = roles.indexOf(prev);
                return roles[(currentIndex + 1) % roles.length];
            });
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative w-full min-h-screen flex items-center bg-[#050505] text-white overflow-hidden pt-20 lg:pt-0">

            {/* --- CSS ANIMATIONS --- */}
            <style jsx>{`
        @keyframes scan {
          0%, 100% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        @keyframes float-y {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes float-x {
          0%, 100% { transform: translateX(0px); }
          50% { transform: translateX(10px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes grid-move {
          0% { background-position: 0 0; }
          100% { background-position: 40px 40px; }
        }
        
        .animate-scan { animation: scan 4s linear infinite; }
        .animate-float-y { animation: float-y 6s ease-in-out infinite; }
        .animate-float-x { animation: float-x 5s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .bg-grid-moving {
          background-size: 40px 40px;
          background-image: linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          animation: grid-move 20s linear infinite;
        }
      `}</style>

            {/* --- BACKGROUND --- */}
            <div className="absolute inset-0 z-0">
                {/* Moving Grid Floor */}
                <div className="absolute inset-0 bg-grid-moving opacity-20 transform perspective-1000 rotateX(60deg) scale-150 origin-top" />

                {/* Spotlight */}
                <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-indigo-600/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center w-full">

                {/* --- LEFT COLUMN: CONTENT --- */}
                <div className="space-y-8">

                    {/* Version Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-mono tracking-wide">
                        <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
                        V2.0 STABLE RELEASE
                    </div>

                    {/* Dynamic Headline */}
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-none">
                        Resume AI for <br />
                        <span className="relative inline-block mt-2">
                            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-indigo-400">
                                {activeRole}s
                            </span>
                            <svg className="absolute -bottom-2 left-0 w-full h-3 text-indigo-500/50" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                            </svg>
                        </span>
                    </h1>

                    <p className="text-lg text-gray-400 max-w-lg leading-relaxed">
                        SpaceZora analyzes millions of job descriptions to build a resume that
                        <span className="text-white font-medium"> passes the AI screeners</span> before they even see it.
                    </p>

                    {/* Action Area */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Link
                            href="#"
                            className="flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-bold text-lg rounded-lg hover:bg-gray-100 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                        >
                            <UploadCloud className="w-5 h-5" />
                            Upload Resume
                        </Link>

                        <Link
                            href="#"
                            className="flex items-center justify-center gap-3 px-8 py-4 bg-[#111] border border-gray-800 text-white font-medium rounded-lg hover:bg-[#222] transition-colors group"
                        >
                            Start from Scratch
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    {/* Tech Specs */}
                    <div className="pt-8 border-t border-white/10 grid grid-cols-2 gap-6">
                        <div className="flex items-start gap-3">
                            <div className="p-2 bg-gray-900 rounded-lg border border-gray-800">
                                <Cpu className="w-5 h-5 text-indigo-400" />
                            </div>
                            <div>
                                <h4 className="font-bold text-sm">GPT-4o Engine</h4>
                                <p className="text-xs text-gray-500 mt-1">Context-aware writing</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="p-2 bg-gray-900 rounded-lg border border-gray-800">
                                <Globe className="w-5 h-5 text-cyan-400" />
                            </div>
                            <div>
                                <h4 className="font-bold text-sm">Global Data</h4>
                                <p className="text-xs text-gray-500 mt-1">Localized formatting</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- RIGHT COLUMN: HOLOGRAPHIC SCANNER --- */}
                <div className="relative h-[600px] w-full flex items-center justify-center perspective-1000">

                    {/* Orbital Rings Background */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-[500px] h-[500px] border border-indigo-500/10 rounded-full animate-spin-slow" />
                        <div className="absolute w-[350px] h-[350px] border border-cyan-500/10 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '15s' }} />
                    </div>

                    {/* The Resume Card Container */}
                    <div className="relative w-[340px] md:w-[380px] h-[520px] bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl animate-float-y overflow-hidden transform rotate-y-[-10deg]">

                        {/* --- SCANNING BEAM --- */}
                        <div className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_20px_rgba(34,211,238,0.8)] z-30 animate-scan"></div>
                        <div className="absolute left-0 right-0 h-20 bg-gradient-to-b from-cyan-500/20 to-transparent z-20 animate-scan" style={{ transform: 'translateY(-100%)' }}></div>

                        {/* Resume Content (Blurred Glass Effect) */}
                        <div className="p-8 space-y-6 opacity-80">

                            {/* Header */}
                            <div className="flex gap-4 items-center border-b border-white/10 pb-6">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 animate-pulse" />
                                <div className="space-y-2 flex-1">
                                    <div className="h-4 w-3/4 bg-white/20 rounded" />
                                    <div className="h-3 w-1/2 bg-white/10 rounded" />
                                </div>
                            </div>

                            {/* Body */}
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <div className="h-3 w-20 bg-indigo-400/30 rounded" />
                                    <div className="h-3 w-12 bg-white/10 rounded" />
                                </div>
                                <div className="space-y-2">
                                    <div className="h-2 w-full bg-white/10 rounded" />
                                    <div className="h-2 w-full bg-white/10 rounded" />
                                    <div className="h-2 w-2/3 bg-white/10 rounded" />
                                </div>
                            </div>

                            <div className="space-y-4 pt-2">
                                <div className="flex justify-between items-center">
                                    <div className="h-3 w-24 bg-cyan-400/30 rounded" />
                                    <div className="h-3 w-12 bg-white/10 rounded" />
                                </div>
                                <div className="space-y-2">
                                    <div className="h-2 w-full bg-white/10 rounded" />
                                    <div className="h-2 w-5/6 bg-white/10 rounded" />
                                </div>
                            </div>

                            {/* Skills Area */}
                            <div className="pt-4 flex flex-wrap gap-2">
                                {[1, 2, 3, 4, 5].map(i => (
                                    <div key={i} className="h-6 w-12 bg-white/5 rounded-md border border-white/5" />
                                ))}
                            </div>
                        </div>

                        {/* Holographic Overlay Texture */}
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
                    </div>

                    {/* Floating Widget 1: Keywords */}
                    <div className="absolute right-0 lg:right-10 top-20 bg-[#0A0A0A] border border-green-900/50 p-4 rounded-xl shadow-xl animate-float-x backdrop-blur-md z-40">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-green-900/30 rounded-lg">
                                <Scan className="w-5 h-5 text-green-400" />
                            </div>
                            <div>
                                <div className="text-xs text-green-400 font-mono mb-1">ANALYZING</div>
                                <div className="text-sm font-bold text-white">Keywords Match</div>
                            </div>
                            <div className="text-xl font-bold text-green-400 ml-2">98%</div>
                        </div>
                    </div>

                    {/* Floating Widget 2: AI Rewrite */}
                    <div className="absolute left-0 lg:left-10 bottom-32 bg-[#0A0A0A] border border-indigo-900/50 p-4 rounded-xl shadow-xl animate-float-y z-40" style={{ animationDelay: '1s' }}>
                        <div className="flex items-start gap-3 w-48">
                            <div className="p-2 bg-indigo-900/30 rounded-lg">
                                <Sparkles className="w-4 h-4 text-indigo-400" />
                            </div>
                            <div className="space-y-2 w-full">
                                <div className="h-1.5 w-full bg-gray-800 rounded"></div>
                                <div className="h-1.5 w-3/4 bg-indigo-500 rounded animate-pulse"></div>
                                <div className="text-[10px] text-indigo-300 font-mono mt-1">Rewriting summary...</div>
                            </div>
                        </div>
                    </div>

                    {/* Floating Widget 3: File Type */}
                    <div className="absolute -bottom-4 right-20 bg-gray-900 border border-gray-700 px-3 py-1.5 rounded-md flex items-center gap-2 text-xs font-mono text-gray-400 animate-float-y" style={{ animationDelay: '2s' }}>
                        <FileText className="w-3 h-3" />
                        RESUME_FINAL_V2.PDF
                    </div>

                </div>
            </div>
        </section>
    );
}