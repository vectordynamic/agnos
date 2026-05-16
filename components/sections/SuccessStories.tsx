"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { testimonialsData } from "@/lib/data";
import { ChevronLeft, ChevronRight, Play, Pause, ArrowRight } from "lucide-react";

export default function SuccessStories() {
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const scrollAmount = 400; // Approx card width + gap
      const newScrollLeft = direction === "left" 
        ? containerRef.current.scrollLeft - scrollAmount
        : containerRef.current.scrollLeft + scrollAmount;
      
      containerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="py-32 bg-void relative overflow-hidden">
      <div className="container mx-auto px-6 mb-16 relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
           <h2 className="text-3xl md:text-5xl font-bold mb-4">{testimonialsData.heading}</h2>
           <p className="text-xl text-gray-400 max-w-2xl">{testimonialsData.subheading}</p>
        </div>
        
        {/* Navigation Buttons */}
        <div className="flex gap-4">
            <button 
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-gold-500 hover:text-black hover:border-gold-500 transition-all active:scale-95"
            >
                <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-gold-500 hover:text-black hover:border-gold-500 transition-all active:scale-95"
            >
                <ChevronRight size={24} />
            </button>
        </div>
      </div>

      {/* Video Carousel - Manual Horizontal Scroll with hidden scrollbar */}
      <div 
        ref={containerRef}
        className="relative w-full overflow-x-auto pb-8 hide-scrollbar cursor-grab active:cursor-grabbing snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} 
      >
        <div className="flex gap-8 px-6 w-max min-w-full">
          {testimonialsData.items.map((story) => (
             <div key={story.id} className="snap-center">
               <QuoteCard story={story} />
             </div>
          ))}
          {/* Duplicate strictly for feeling full */}
          {testimonialsData.items.map((story) => (
             <div key={`dup-${story.id}`} className="snap-center">
                 <QuoteCard story={story} />
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuoteCard({ story }: { story: any }) {
  return (
    <motion.div 
      className="relative w-[300px] md:w-[450px] min-h-[350px] rounded-3xl p-10 bg-[#0f1219] border border-white/5 group hover:border-amber-500/30 transition-all duration-500 flex flex-col justify-between shadow-2xl"
    >
       {/* Quote Icon */}
       <div className="absolute top-8 right-10 text-amber-500/10 group-hover:text-amber-500/20 transition-colors">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12C14.017 12.5523 13.5693 13 13.017 13H11.017V4H21.017V15C21.017 18.3137 18.3307 21 15.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V12C5.0166 12.5523 4.56888 13 4.0166 13H2.0166V4H12.0166V15C12.0166 18.3137 9.3303 21 6.0166 21H5.0166Z" />
          </svg>
       </div>

       <div className="relative z-10">
          <p className="text-white text-xl md:text-2xl font-medium leading-relaxed mb-10 group-hover:text-amber-50 transition-colors">
            "{story.quote}"
          </p>
       </div>

       <div className="relative z-10 flex items-center justify-between mt-auto">
          <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500 font-bold text-xl border border-amber-500/20">
                  {story.author.charAt(0)}
              </div>
              <div>
                 <h3 className="text-lg font-bold text-white leading-tight">{story.author}</h3>
                 <p className="text-sm text-gray-500">{story.role}</p>
              </div>
          </div>
          
          <div className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 text-amber-500 text-xs font-bold border border-amber-500/20 uppercase tracking-widest">
             {story.stat}
          </div>
       </div>
    </motion.div>
  );
}
