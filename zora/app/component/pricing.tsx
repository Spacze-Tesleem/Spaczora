"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Check,
  X,
  Sparkles,
  Zap,
  Crown,
  ArrowRight,
  HelpCircle,
  Shield,
  CreditCard,
  Infinity,
} from "lucide-react";

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: "Starter",
      description: "For casual job seekers",
      monthlyPrice: 0,
      annualPrice: 0,
      icon: <Zap className="w-5 h-5" />,
      color: "gray",
      gradient: "from-slate-700 to-slate-600",
      popular: false,
      features: [
        { text: "3 Resume", included: true },
        { text: "Basic AI Writer", included: true },
        { text: "PDF Export", included: true },
        { text: "ATS Scoring", included: false },
        { text: "Cover Letters", included: false },
        { text: "LinkedIn Sync", included: false },
      ],
      cta: "Start Free",
      ctaVariant: "outline"
    },
    {
      name: "Pro",
      description: "For active career growth",
      monthlyPrice: 29,
      annualPrice: 19,
      icon: <Sparkles className="w-5 h-5" />,
      color: "indigo",
      gradient: "from-indigo-500 to-purple-500",
      popular: true,
      badge: "BEST VALUE",
      features: [
        { text: "Unlimited Resumes", included: true },
        { text: "Advanced AI Writer (GPT-4)", included: true },
        { text: "PDF & Word Export", included: true },
        { text: "Real-time ATS Scoring", included: true },
        { text: "AI Cover Letter Builder", included: true },
        { text: "LinkedIn Sync", included: false },
      ],
      cta: "Get Pro Access",
      ctaVariant: "primary"
    },
    {
      name: "Ultimate",
      description: "For power users",
      monthlyPrice: 49,
      annualPrice: 29,
      icon: <Crown className="w-5 h-5" />,
      color: "amber",
      gradient: "from-amber-400 to-orange-500",
      popular: false,
      features: [
        { text: "Everything in Pro", included: true },
        { text: "LinkedIn Profile Optimizer", included: true },
        { text: "Personal Website", included: true },
        { text: "Interview Prep AI", included: true },
        { text: "1-on-1 Career Review", included: true },
        { text: "Priority Support", included: true },
      ],
      cta: "Go Ultimate",
      ctaVariant: "gradient"
    },
  ];

  return (
    <section className="py-24 bg-[#030712] relative overflow-hidden text-white">
      
      {/* --- BACKGROUND --- */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-[#030712] to-[#030712]" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* --- HEADER --- */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-800 bg-gray-900/50 text-indigo-400 text-xs font-mono mb-6">
             <CreditCard className="w-3 h-3" />
             PRICING PLANS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
             Invest in your <br />
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Future Career</span>
          </h2>
          <p className="text-lg text-gray-400">
             Simple, transparent pricing. No hidden fees. Cancel anytime.
          </p>
        </div>

        {/* --- TOGGLE --- */}
        <div className="flex justify-center mb-16">
           <div className="relative flex items-center bg-white/5 p-1 rounded-full border border-white/10">
              <button 
                 onClick={() => setIsAnnual(false)}
                 className={`relative z-10 px-6 py-2 text-sm font-medium rounded-full transition-colors duration-300 ${!isAnnual ? 'text-white' : 'text-gray-400 hover:text-white'}`}
              >
                 Monthly
              </button>
              <button 
                 onClick={() => setIsAnnual(true)}
                 className={`relative z-10 px-6 py-2 text-sm font-medium rounded-full transition-colors duration-300 ${isAnnual ? 'text-white' : 'text-gray-400 hover:text-white'}`}
              >
                 Yearly <span className="text-[10px] ml-1 text-green-400 font-bold">-40%</span>
              </button>
              
              {/* Sliding Pill */}
              <div 
                 className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-gray-700/80 rounded-full transition-all duration-300 ease-out shadow-sm`}
                 style={{ left: isAnnual ? '50%' : '4px' }}
              />
           </div>
        </div>

        {/* --- PRICING CARDS --- */}
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative group rounded-3xl transition-all duration-500 ${
                plan.popular 
                  ? "bg-[#0f172a] border-indigo-500/50 shadow-[0_0_40px_-10px_rgba(99,102,241,0.3)] scale-105 z-10" 
                  : "bg-[#0A0A0A] border-white/5 hover:border-white/10 hover:bg-[#0f172a]"
              } border p-8 flex flex-col h-full`}
            >
              
              {/* Popular Badge */}
              {plan.popular && (
                 <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                    <Sparkles className="w-3 h-3 fill-current" /> {plan.badge}
                 </div>
              )}

              {/* Header */}
              <div className="mb-8">
                 <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center text-white shadow-lg mb-6`}>
                    {plan.icon}
                 </div>
                 <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                 <p className="text-sm text-gray-400 h-10">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="mb-8">
                 <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-white">$</span>
                    <span className="text-5xl font-bold text-white tracking-tight">
                       {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-gray-500 ml-2">/mo</span>
                 </div>
                 <div className="h-6 mt-2">
                    {isAnnual && plan.monthlyPrice > 0 && (
                       <span className="text-xs text-green-400 font-medium bg-green-400/10 px-2 py-1 rounded-full">
                          Billed ${plan.annualPrice * 12} yearly
                       </span>
                    )}
                 </div>
              </div>

              {/* CTA */}
              <Link
                href="#"
                className={`w-full py-4 rounded-xl font-bold text-sm text-center transition-all duration-300 mb-10 flex items-center justify-center gap-2 group/btn ${
                  plan.ctaVariant === 'primary' 
                    ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-[0_0_20px_rgba(79,70,229,0.3)]' 
                    : plan.ctaVariant === 'gradient'
                    ? 'bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white shadow-[0_0_20px_rgba(251,191,36,0.3)]'
                    : 'bg-white/10 hover:bg-white/20 text-white'
                }`}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>

              {/* Features List */}
              <div className="space-y-4 flex-1">
                 <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">What's included</p>
                 <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                       <li key={i} className="flex items-start gap-3 text-sm">
                          {feature.included ? (
                             <div className={`mt-0.5 w-5 h-5 rounded-full bg-gradient-to-br ${plan.gradient} flex items-center justify-center flex-shrink-0`}>
                                <Check className="w-3 h-3 text-white" />
                             </div>
                          ) : (
                             <div className="mt-0.5 w-5 h-5 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                                <X className="w-3 h-3 text-gray-600" />
                             </div>
                          )}
                          <span className={`${feature.included ? 'text-gray-300' : 'text-gray-600 line-through'}`}>
                             {feature.text}
                          </span>
                       </li>
                    ))}
                 </ul>
              </div>

            </div>
          ))}
        </div>

        {/* --- TRUST BADGES --- */}
        <div className="mt-20 pt-10 border-t border-white/5 flex flex-wrap justify-center gap-8 md:gap-16 opacity-60">
           <div className="flex items-center gap-2 text-sm font-medium text-gray-400">
              <Shield className="w-5 h-5" /> SSL Secure Payment
           </div>
           <div className="flex items-center gap-2 text-sm font-medium text-gray-400">
              <Infinity className="w-5 h-5" /> Cancel Anytime
           </div>
           <div className="flex items-center gap-2 text-sm font-medium text-gray-400">
              <HelpCircle className="w-5 h-5" /> 24/7 Support
           </div>
        </div>

      </div>
    </section>
  );
}