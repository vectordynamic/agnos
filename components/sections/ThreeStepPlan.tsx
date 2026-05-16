"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { processData } from "@/lib/data";
import { Search, Cpu, Rocket, LucideIcon } from "lucide-react";

// Map icons manually since they aren't in data.ts yet
const icons: LucideIcon[] = [Search, Cpu, Rocket];

export default function ThreeStepPlan() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} className="py-32 bg-void relative overflow-hidden">
      
      {/* Background Circuit Trace (Decoration) */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            {processData.heading}
          </motion.h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          
          {/* THE CONNECTION BEAM (Central Line) */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-1 bg-white/10 -translate-x-1/2 rounded-full overflow-hidden">
             <motion.div 
               style={{ scaleY, transformOrigin: "top" }}
               className="w-full h-full bg-gradient-to-b from-gold-500 via-amber-400 to-gold-600 shadow-[0_0_20px_#f59e0b]"
             />
          </div>

          <div className="space-y-24 md:space-y-32">
            {processData.steps.map((step, index) => {
              const Icon = icons[index % icons.length];
              return (
                <StepNode 
                  key={index} 
                  step={step} 
                  index={index} 
                  Icon={Icon} 
                />
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

function StepNode({ step, index, Icon }: { step: any, index: number, Icon: LucideIcon }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16 ${
        !isEven ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* CENTER NODE (The connection point) */}
      <div className="absolute left-[20px] md:left-1/2 top-0 md:top-1/2 -translate-x-1/2 -translate-y-0 md:-translate-y-1/2 z-20">
         <div className="w-10 h-10 rounded-full bg-neutral-900 border-2 border-white/20 flex items-center justify-center group overflow-hidden shadow-lg">
            {/* Active Glow (triggered by scroll view) */}
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="absolute inset-0 bg-gold-500 shadow-[0_0_30px_#f59e0b]"
            />
         </div>
      </div>

      {/* ICON CARD */}
      <div className={`flex-1 w-full pl-12 md:pl-0 flex ${isEven ? "md:justify-end" : "md:justify-start"}`}>
          <div className="relative w-24 h-24 rounded-2xl bg-neutral-900/80 border border-white/20 backdrop-blur-md flex items-center justify-center group hover:border-gold-500/50 transition-all duration-500 shadow-2xl z-10">
             <div className="absolute inset-0 bg-gold-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
             <Icon className="w-10 h-10 text-gold-500 group-hover:scale-110 transition-transform duration-500" />
             
             {/* Connecting Line to Center (Desktop only) */}
             <div className={`absolute top-1/2 w-8 h-px bg-white/20 hidden md:block ${isEven ? "-right-8" : "-left-8"}`} />
          </div>
      </div>

      {/* TEXT CONTENT */}
      <div className={`flex-1 w-full pl-12 md:pl-0 ${!isEven ? "md:text-right" : "md:text-left"}`}>
         <div className="relative">
             <h3 className="text-2xl md:text-4xl font-bold text-white mb-4 relative z-10">
               {step.title}
             </h3>
             <p className="text-gray-400 text-lg relative z-10 max-w-md ml-0 md:mx-0">
               {step.description}
             </p>
         </div>
      </div>

    </motion.div>
  )
}
