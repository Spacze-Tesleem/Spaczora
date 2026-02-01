"use client";

import { useState } from "react";
import Link from "next/link";

// Inline SVG Icons
const ArrowRight = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
);

const Twitter = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7" />
  </svg>
);

const Linkedin = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
  </svg>
);

const Github = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const Mail = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const Rocket = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const Globe = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0016 5.5V3.935m0 2.946v2.071a2 2 0 104 0v-2.07a9 9 0 10-4 0z" />
  </svg>
);

const ArrowUpRight = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6" />
  </svg>
);

// 1. Define the shape of a link item
interface LinkItem {
  name: string;
  href: string;
  badge?: string; // Optional property
}

// 2. Define the shape of the links object
type FooterLinks = Record<string, LinkItem[]>;

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1500);
  };

  // 3. Apply the type to the object
  const links: FooterLinks = {
    Product: [
      { name: "AI Resume Builder", href: "#" },
      { name: "Template Gallery", href: "#", badge: "New" },
      { name: "Cover Letter Gen", href: "#" },
      { name: "Job Matcher", href: "#" },
      { name: "Pricing", href: "#" },
    ],
    Resources: [
      { name: "Career Blog", href: "#" },
      { name: "Resume Examples", href: "#" },
      { name: "Interview Prep", href: "#" },
      { name: "Salary Calculator", href: "#" },
      { name: "Help Center", href: "#" },
    ],
    Company: [
      { name: "About SpaceZora", href: "#" },
      { name: "Careers", href: "#", badge: "Hiring" },
      { name: "Press Kit", href: "#" },
      { name: "Affiliates", href: "#" },
      { name: "Contact", href: "#" },
    ],
    Legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Settings", href: "#" },
      { name: "Security", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: <Twitter className="w-4 h-4" />, href: "#", label: "Twitter" },
    { icon: <Github className="w-4 h-4" />, href: "#", label: "GitHub" },
    { icon: <Linkedin className="w-4 h-4" />, href: "#", label: "LinkedIn" },
    { icon: <Instagram className="w-4 h-4" />, href: "#", label: "Instagram" },
    { icon: <Youtube className="w-4 h-4" />, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-[#020617] text-white relative overflow-hidden border-t border-white/5">
      
      {/* --- BACKGROUND EFFECTS --- */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-indigo-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* --- TOP SECTION: NEWSLETTER --- */}
        <div className="py-20 border-b border-white/5">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
            <div className="max-w-xl">
              <h3 className="text-4xl font-bold tracking-tight mb-4">
                Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">future of work.</span>
              </h3>
              <p className="text-gray-400 text-lg">
                Get the latest career hacks, AI prompts, and resume templates delivered to your inbox weekly.
              </p>
            </div>

            <div className="w-full lg:w-auto">
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full sm:w-80 pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:bg-white/10 transition-all"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  className={`px-8 py-4 font-bold rounded-xl transition-all flex items-center justify-center gap-2 min-w-[160px] ${
                    status === "success" 
                      ? "bg-green-500 text-white" 
                      : "bg-white text-black hover:bg-gray-200"
                  }`}
                >
                  {status === "loading" ? (
                    <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                  ) : status === "success" ? (
                    <>
                      <CheckCircle2 className="w-5 h-5" /> Subscribed
                    </>
                  ) : (
                    <>
                      Subscribe <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
              <p className="text-gray-600 text-xs mt-3 pl-1">
                By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>

        {/* --- MIDDLE SECTION: LINKS --- */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10">
          
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
                <Rocket className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight">SpaceZora</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              The world's most advanced AI resume builder. Engineered to beat the ATS and help you land your dream job faster.
            </p>
            <div className="flex gap-2 pt-2">
               {socialLinks.map((social, i) => (
                 <a key={i} href={social.href} className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white transition-colors">
                   {social.icon}
                 </a>
               ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="font-bold text-white mb-6">{category}</h4>
              <ul className="space-y-4">
                {items.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-2 text-sm text-gray-400 hover:text-indigo-400 transition-colors"
                    >
                      <span className="transition-transform duration-300 group-hover:translate-x-1 inline-flex items-center gap-2">
                        {link.name}
                        {link.badge && (
                          <span className={`text-[10px] px-1.5 py-0.5 rounded font-semibold ${
                            link.badge === 'New' ? 'bg-indigo-500/20 text-indigo-300' : 'bg-green-500/20 text-green-400'
                          }`}>
                            {link.badge}
                          </span>
                        )}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* --- BOTTOM SECTION: LEGAL & STATUS --- */}
        <div className="py-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
           
           <div className="flex flex-col md:flex-row items-center gap-6">
              <p className="text-gray-600 text-xs">
                © {new Date().getFullYear()} SpaceZora Inc.
              </p>
              
              {/* System Status Indicator */}
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
                 <div className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                 </div>
                 <span className="text-xs font-medium text-green-400">All Systems Operational</span>
              </div>
           </div>

           <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-xs text-gray-500">
                 <Globe className="w-3 h-3" />
                 <span>English (US)</span>
              </div>
              <a href="#" className="flex items-center gap-1 text-xs text-gray-500 hover:text-white transition-colors">
                 Sitemap <ArrowUpRight className="w-3 h-3" />
              </a>
           </div>

        </div>
      </div>
    </footer>
  );
}
