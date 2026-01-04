"use client";

import { useState } from "react";
import Link from "next/link";
import {
    ArrowRight,
    Eye,
    Check,
    Star,
    LayoutTemplate,
    Sparkles,
    Zap,
} from "lucide-react";

export default function TemplateShowcase() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    const categories = [
        { id: "All", label: "All Templates" },
        { id: "Modern", label: "Modern Tech" },
        { id: "Professional", label: "Corporate" },
        { id: "Creative", label: "Creative" },
        { id: "Simple", label: "Minimalist" },
    ];

    const templates = [
        {
            id: 1,
            name: "Nexus",
            category: "Modern",
            layout: "sidebar",
            color: "from-indigo-500 to-purple-600",
            accent: "bg-indigo-500",
            rating: 4.9,
            tags: ["Tech", "Startup"],
            popular: true,
        },
        {
            id: 2,
            name: "Summit",
            category: "Professional",
            layout: "classic",
            color: "from-slate-700 to-slate-900",
            accent: "bg-slate-700",
            rating: 4.8,
            tags: ["Finance", "Law"],
            popular: false,
        },
        {
            id: 3,
            name: "Aero",
            category: "Simple",
            layout: "minimal",
            color: "from-emerald-500 to-teal-600",
            accent: "bg-emerald-500",
            rating: 4.9,
            tags: ["General", "Entry"],
            popular: false,
        },
        {
            id: 4,
            name: "Prisma",
            category: "Creative",
            layout: "grid",
            color: "from-pink-500 to-rose-600",
            accent: "bg-pink-500",
            rating: 4.9,
            tags: ["Design", "Marketing"],
            popular: true,
        },
        {
            id: 5,
            name: "Vantage",
            category: "Modern",
            layout: "sidebar-right",
            color: "from-blue-500 to-cyan-600",
            accent: "bg-blue-500",
            rating: 4.7,
            tags: ["Product", "Sales"],
            popular: false,
        },
        {
            id: 6,
            name: "Titan",
            category: "Professional",
            layout: "classic",
            color: "from-amber-500 to-orange-600",
            accent: "bg-amber-500",
            rating: 4.8,
            tags: ["Executive", "Manager"],
            popular: true,
        },
    ];

    const filteredTemplates =
        activeCategory === "All"
            ? templates
            : templates.filter((t) => t.category === activeCategory);

    return (
        <section className="py-24 bg-[#030712] relative overflow-hidden text-white">

            {/* --- BACKGROUND --- */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900/10 via-[#030712] to-[#030712]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">

                {/* --- HEADER --- */}
                <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-800 bg-gray-900/50 text-indigo-400 text-xs font-mono mb-6">
                            <LayoutTemplate className="w-3 h-3" />
                            TEMPLATE GALLERY
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                            Design that <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                                Gets You Noticed
                            </span>
                        </h2>
                        <p className="text-lg text-gray-400">
                            ATS-friendly templates engineered by HR experts. Switch designs with one click.
                        </p>
                    </div>

                    <Link href="#" className="flex items-center gap-2 text-sm font-bold text-white hover:text-indigo-400 transition-colors group">
                        View All 50+ Designs
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                {/* --- FILTERS --- */}
                <div className="flex flex-wrap gap-2 mb-12 border-b border-white/10 pb-4">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === cat.id
                                    ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                                    : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10"
                                }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* --- TEMPLATE GRID --- */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredTemplates.map((template) => (
                        <div
                            key={template.id}
                            className="group relative"
                            onMouseEnter={() => setHoveredId(template.id)}
                            onMouseLeave={() => setHoveredId(null)}
                        >
                            <div className="relative bg-[#0A0A0A] border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] group-hover:border-white/20">

                                {/* Popular Badge */}
                                {template.popular && (
                                    <div className="absolute top-4 right-4 z-20 px-2 py-1 bg-yellow-500/20 text-yellow-400 border border-yellow-500/50 text-[10px] font-bold uppercase tracking-wider rounded backdrop-blur-md flex items-center gap-1">
                                        <Zap className="w-3 h-3 fill-current" /> Popular
                                    </div>
                                )}

                                {/* --- PREVIEW AREA (CSS MOCKUP) --- */}
                                <div className="relative aspect-[3/4] bg-[#111] p-6 overflow-hidden">

                                    {/* Background Glow */}
                                    <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br ${template.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />

                                    {/* Resume Paper Representation */}
                                    <div className="w-full h-full bg-white shadow-2xl rounded-sm p-4 relative transform transition-transform duration-500 group-hover:scale-[1.02]">

                                        {/* HEADER */}
                                        <div className={`flex gap-3 mb-4 ${template.layout === 'sidebar-right' ? 'flex-row-reverse' : ''}`}>
                                            <div className={`w-12 h-12 rounded-full ${template.accent} opacity-20`} />
                                            <div className="flex-1 space-y-2 py-1">
                                                <div className="h-2 w-32 bg-gray-800 rounded opacity-80" />
                                                <div className="h-1.5 w-20 bg-gray-400 rounded" />
                                            </div>
                                        </div>

                                        {/* BODY */}
                                        <div className={`flex gap-4 h-full ${template.layout.includes('sidebar') ? (template.layout === 'sidebar-right' ? 'flex-row-reverse' : 'flex-row') : 'flex-col'}`}>

                                            {/* Sidebar Column */}
                                            {template.layout.includes('sidebar') && (
                                                <div className="w-1/3 space-y-3">
                                                    <div className="h-1.5 w-full bg-gray-200 rounded" />
                                                    <div className="h-1.5 w-4/5 bg-gray-200 rounded" />
                                                    <div className="h-1.5 w-full bg-gray-200 rounded" />
                                                    <div className="mt-4 h-1.5 w-full bg-gray-200 rounded" />
                                                    <div className="h-1.5 w-3/4 bg-gray-200 rounded" />
                                                </div>
                                            )}

                                            {/* Main Column */}
                                            <div className="flex-1 space-y-3">
                                                {/* Section 1 */}
                                                <div className="space-y-1.5">
                                                    <div className="h-1.5 w-16 bg-gray-300 rounded mb-2" />
                                                    <div className="h-1 w-full bg-gray-100 rounded" />
                                                    <div className="h-1 w-full bg-gray-100 rounded" />
                                                    <div className="h-1 w-5/6 bg-gray-100 rounded" />
                                                </div>
                                                {/* Section 2 */}
                                                <div className="space-y-1.5 mt-2">
                                                    <div className="h-1.5 w-20 bg-gray-300 rounded mb-2" />
                                                    <div className="h-1 w-full bg-gray-100 rounded" />
                                                    <div className="h-1 w-4/5 bg-gray-100 rounded" />
                                                </div>
                                                {/* Visual Grid for Creative Layout */}
                                                {template.layout === 'grid' && (
                                                    <div className="grid grid-cols-2 gap-2 mt-2">
                                                        <div className="h-8 bg-gray-50 rounded" />
                                                        <div className="h-8 bg-gray-50 rounded" />
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* HOVER OVERLAY */}
                                    <div className={`absolute inset-0 bg-black/60 backdrop-blur-[2px] flex flex-col items-center justify-center gap-3 transition-all duration-300 ${hoveredId === template.id ? 'opacity-100' : 'opacity-0'}`}>
                                        <button className="flex items-center gap-2 px-6 py-2.5 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform">
                                            <Sparkles className="w-4 h-4" /> Use Template
                                        </button>
                                        <button className="flex items-center gap-2 px-6 py-2.5 bg-white/10 text-white font-medium rounded-full hover:bg-white/20 transition-colors backdrop-blur-md">
                                            <Eye className="w-4 h-4" /> Preview
                                        </button>
                                    </div>
                                </div>

                                {/* FOOTER INFO */}
                                <div className="p-5 bg-[#0F0F0F] border-t border-white/5">
                                    <div className="flex justify-between items-start mb-2">
                                        <div>
                                            <h3 className="font-bold text-white text-lg">{template.name}</h3>
                                            <div className="flex items-center gap-2 mt-1">
                                                <span className="text-xs font-mono text-gray-500 uppercase">{template.category}</span>
                                                <span className="w-1 h-1 rounded-full bg-gray-700" />
                                                <div className="flex items-center gap-1 text-xs text-yellow-500">
                                                    <Star className="w-3 h-3 fill-current" /> {template.rating}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex gap-1">
                                            {template.tags.slice(0, 1).map(tag => (
                                                <span key={tag} className="text-[10px] px-2 py-1 bg-white/5 text-gray-400 rounded border border-white/5">{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}