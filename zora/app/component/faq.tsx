"use client";

import { useState } from "react";
import {
  Plus,
  Minus,
  HelpCircle,
  MessageCircle,
  Mail,
  ArrowRight,
  ChevronDown,
  Search
} from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState("General");

  const categories = [
    {
      name: "General",
      faqs: [
        {
          question: "How does the AI Resume Builder work?",
          answer: "Our AI analyzes your input (experience, skills, education) and cross-references it with millions of successful resumes. It then rewrites your bullet points to be action-oriented, keyword-optimized, and ATS-friendly, ensuring you pass the initial screening bots.",
        },
        {
          question: "Is my data private and secure?",
          answer: "Absolutely. We use bank-level 256-bit encryption to store your data. We do not sell your personal information to third-party recruiters or data brokers. You can delete your account and all associated data permanently at any time.",
        },
        {
          question: "Can I import my existing resume?",
          answer: "Yes! You can upload an existing PDF or Word document. Our parser will extract the information and populate the builder automatically, allowing you to then optimize and reformat it using our templates.",
        },
      ],
    },
    {
      name: "Pricing",
      faqs: [
        {
          question: "Is there a free trial?",
          answer: "Yes, you can create your first resume for free to test our builder. To download the high-resolution PDF or access premium AI features like the Cover Letter Generator, you can upgrade to a Pro plan. All paid plans come with a 7-day money-back guarantee.",
        },
        {
          question: "Can I cancel my subscription anytime?",
          answer: "Yes, you can cancel your subscription instantly from your account settings. You will retain access to Pro features until the end of your current billing cycle.",
        },
      ],
    },
    {
      name: "Technical",
      faqs: [
        {
          question: "What is an ATS and why does it matter?",
          answer: "ATS stands for Applicant Tracking System. It's software used by 99% of Fortune 500 companies to filter resumes before a human sees them. SpaceZora templates are engineered to be 100% readable by these systems, preventing your application from being auto-rejected.",
        },
        {
          question: "Do you support multiple languages?",
          answer: "Currently, SpaceZora is optimized for English resumes to ensure the highest quality of AI writing suggestions. We plan to add support for Spanish, French, and German in Q4 2024.",
        },
      ],
    },
  ];

  const currentFaqs = categories.find((c) => c.name === activeCategory)?.faqs || [];

  return (
    <section className="py-24 bg-[#030712] relative overflow-hidden text-white">
      
      {/* --- BACKGROUND --- */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-[#030712] to-[#030712]" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-800 bg-gray-900/50 text-indigo-400 text-xs font-mono mb-6">
             <HelpCircle className="w-3 h-3" />
             SUPPORT CENTER
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
             Questions? <br />
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                We've got answers.
             </span>
          </h2>
          <p className="text-lg text-gray-400">
             Everything you need to know about the platform and billing.
          </p>
        </div>

        {/* --- SEARCH BAR (Visual Only) --- */}
        <div className="relative max-w-lg mx-auto mb-12">
           <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-500" />
           </div>
           <input 
              type="text" 
              placeholder="Search for answers..." 
              className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all"
           />
        </div>

        {/* --- CATEGORY TABS --- */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => {
                setActiveCategory(category.name);
                setOpenIndex(0);
              }}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.name
                  ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                  : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* --- ACCORDION --- */}
        <div className="space-y-4">
          {currentFaqs.map((faq, index) => (
            <div
              key={index}
              className={`group rounded-2xl border transition-all duration-500 overflow-hidden ${
                openIndex === index
                  ? "bg-[#0f172a] border-indigo-500/50 shadow-[0_0_30px_rgba(99,102,241,0.1)]"
                  : "bg-white/5 border-white/5 hover:border-white/10"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className={`text-lg font-medium transition-colors ${openIndex === index ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>
                  {faq.question}
                </span>
                <span className={`flex-shrink-0 ml-4 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                   <ChevronDown className={`w-5 h-5 ${openIndex === index ? 'text-indigo-400' : 'text-gray-500'}`} />
                </span>
              </button>

              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- CONTACT SUPPORT --- */}
        <div className="mt-20 pt-10 border-t border-white/5">
           <div className="bg-gradient-to-br from-[#0f172a] to-[#0A0A0A] border border-white/10 rounded-3xl p-8 lg:p-12 text-center">
              <h3 className="text-2xl font-bold text-white mb-2">Still stuck?</h3>
              <p className="text-gray-400 mb-8 max-w-md mx-auto">
                 Can't find the answer you're looking for? Our team is here to help you get hired.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                 <a href="#" className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-colors">
                    <MessageCircle className="w-4 h-4" /> Live Chat
                 </a>
                 <a href="mailto:help@spacezora.com" className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 bg-white/5 text-white font-medium rounded-xl hover:bg-white/10 border border-white/10 transition-colors">
                    <Mail className="w-4 h-4" /> Email Us
                 </a>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
}