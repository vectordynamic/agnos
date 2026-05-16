"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { problemData } from "@/lib/data";
import { cn } from "@/lib/utils";
import { MouseEvent } from "react";

export default function ProblemGrid() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-void">
      
      {/* Background Ambience - Red Warning Tone */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
          >
            {problemData.heading}
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="h-1 w-24 bg-gradient-to-r from-transparent via-red-500/50 to-transparent mx-auto" 
          />
        </div>

        {/* Bento Grid Layout - Fully Dynamic */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 auto-rows-[280px]">
          
          {problemData.cards.map((card, index) => {
            // Algorithmic Bento Pattern (Hero at 0, then flow)
            const isHero = index === 0;
            
            // Dynamic Spans based on index
            // 0: Large Hero (4 cols, 2 rows)
            // 1, 2: Standard (2 cols)
            // 3, 4: Wide (3 cols)
            // 5+: Standard (2 cols) or whatever fits
            let spanClass = "md:col-span-1 lg:col-span-2 lg:row-span-1"; // Default
            
            if (isHero) {
              spanClass = "md:col-span-2 lg:col-span-4 lg:row-span-2";
            } else if (index === 3 || index === 4) {
              spanClass = "md:col-span-1 lg:col-span-3 lg:row-span-1";
            }
            
            return (
              <BentoCard 
                key={index}
                data={card} 
                index={index}
                className={spanClass}
                isHero={isHero}
              />
            );
          })}

        </div>
      </div>
    </section>
  );
}

function BentoCard({ data, index, className, isHero = false }: { data: any, index: number, className?: string, isHero?: boolean }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      onMouseMove={handleMouseMove}
      className={cn(
        "group relative rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden flex flex-col justify-between p-8 md:p-10",
        "hover:border-gold-500/50 hover:shadow-[0_0_30px_rgba(245,158,11,0.1)] transition-all duration-500",
        className
      )}
    >
      {/* Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(245, 158, 11, 0.08),
              transparent 80%
            )
          `,
        }}
      />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10">
        <div className={cn(
          "mb-6 flex items-center justify-center rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 text-white/80 transition-transform duration-500 group-hover:scale-110 group-hover:text-gold-500 group-hover:border-gold-500/30",
          isHero ? "w-16 h-16" : "w-14 h-14"
        )}>
          <data.icon size={isHero ? 32 : 24} strokeWidth={1.5} />
        </div>
        
        <h3 className={cn(
          "font-bold text-white mb-3 group-hover:text-gold-100 transition-colors duration-300",
          isHero ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"
        )}>
          {data.title}
        </h3>
        
        <p className="text-gray-400 leading-relaxed max-w-md group-hover:text-gray-300 transition-colors duration-300">
          {data.description}
        </p>
      </div>

      {/* Decorative "Warning" UI Elements */}
      <div className="absolute top-4 right-4 flex gap-1.5 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
         <div className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse" />
         <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
         <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
      </div>

    </motion.div>
  );
}
