// components/TestimonialCarousel.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ArrowLeft, ArrowRight, Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  text: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "John Smith",
    role: "Chief Executive Officer",
    company: "Tech Corp Global",
    image: "/avatars/john.jpg",
    text: "An exceptional developer who delivered our project ahead of schedule. Their attention to detail and problem-solving skills are simply remarkable.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Head of Product",
    company: "StartupXYZ",
    image: "/avatars/sarah.jpg",
    text: "Working with them was a pleasure. They brought creative solutions to challenging problems and communicated effectively throughout the entire lifecycle.",
    rating: 5,
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "CTO & Co-Founder",
    company: "InnovateLab",
    image: "/avatars/michael.jpg",
    text: "Outstanding technical skills combined with great attention to detail. They transformed our complex vision into reality with exceptional code quality.",
    rating: 5,
  },
];

const AUTOPLAY_DURATION = 6000;

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const progressRef = useRef<HTMLDivElement>(null);

  // Auto-play logic
  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      handleNext();
    }, AUTOPLAY_DURATION);

    return () => clearInterval(timer);
  }, [isAutoPlaying, currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleManualChange = (fn: () => void) => {
    setIsAutoPlaying(false);
    fn();
    // Optional: Resume autoplay after interaction
    // setTimeout(() => setIsAutoPlaying(true), 10000); 
  };

  return (
    <section className="relative w-full py-24 bg-[#030712] overflow-hidden flex items-center justify-center min-h-[600px]">

      {/* --- Background Elements --- */}

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-[0.15]" />

      {/* Ambient Glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 mb-12"
        >
          <div className="h-px w-8 bg-blue-500" />
          <span className="text-blue-400 font-medium tracking-wider text-sm uppercase">Success Stories</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* --- LEFT COLUMN: Typography & Quote --- */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative"
              >
                <Quote className="absolute -top-10 -left-6 w-16 h-16 text-gray-800/50 rotate-180" />

                <h3 className="text-3xl md:text-5xl font-medium text-white leading-[1.2] tracking-tight mb-8 relative z-10">
                  &ldquo;{testimonials[currentIndex].text}&rdquo;
                </h3>

                {/* Rating Stars */}
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < testimonials[currentIndex].rating ? "fill-yellow-500 text-yellow-500" : "fill-gray-800 text-gray-800"}`}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* --- RIGHT COLUMN: Profile Card --- */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full max-w-md mx-auto lg:ml-auto">
              {/* Card Background Blur Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-violet-600 rounded-3xl blur-2xl opacity-20 transform rotate-6 scale-90" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 0.9, x: 20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.95, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="relative bg-[#0b1121] border border-gray-800 p-8 rounded-3xl shadow-2xl"
                >
                  <div className="flex items-center gap-6 mb-6">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-500 p-[2px]">
                        <div className="w-full h-full rounded-full bg-[#0b1121]" />
                      </div>
                      <img
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        className="relative w-20 h-20 rounded-full object-cover border-4 border-[#0b1121]"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = `https://ui-avatars.com/api/?name=${testimonials[currentIndex].name}&background=0f172a&color=fff&size=100`;
                        }}
                      />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-1">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-blue-400 font-medium text-sm">
                        {testimonials[currentIndex].role}
                      </p>
                      <p className="text-gray-500 text-sm">
                        {testimonials[currentIndex].company}
                      </p>
                    </div>
                  </div>

                  <div className="h-px w-full bg-gray-800 mb-6" />

                  {/* Tech / Company Logo Placeholder (Optional decoration) */}
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      <div className="w-2 h-2 rounded-full bg-red-500/20" />
                      <div className="w-2 h-2 rounded-full bg-yellow-500/20" />
                      <div className="w-2 h-2 rounded-full bg-green-500/20" />
                    </div>
                    <span className="text-xs font-mono text-gray-600">VERIFIED CLIENT</span>
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* --- CONTROLS --- */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-8 border-t border-gray-800/50 pt-8">

          {/* Progress Bar */}
          <div className="w-full md:w-64 h-1 bg-gray-800 rounded-full overflow-hidden relative">
            {isAutoPlaying && (
              <motion.div
                key={currentIndex} // Reset animation on slide change
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: AUTOPLAY_DURATION / 1000, ease: "linear" }}
                className="absolute top-0 left-0 h-full bg-blue-500"
              />
            )}
            {!isAutoPlaying && (
              <div className="absolute top-0 left-0 h-full bg-gray-600 w-full opacity-30" />
            )}
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleManualChange(handlePrev)}
              className="group relative flex items-center justify-center w-12 h-12 rounded-full border border-gray-700 bg-transparent hover:bg-gray-800 hover:border-gray-600 transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
            </button>
            <div className="text-gray-500 font-mono text-sm">
              <span className="text-white">0{currentIndex + 1}</span> / 0{testimonials.length}
            </div>
            <button
              onClick={() => handleManualChange(handleNext)}
              className="group relative flex items-center justify-center w-12 h-12 rounded-full border border-gray-700 bg-transparent hover:bg-gray-800 hover:border-gray-600 transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}