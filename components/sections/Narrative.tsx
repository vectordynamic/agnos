"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Narrative() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax for the floating elements
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="pt-32 pb-16 md:pt-48 md:pb-24 relative overflow-hidden -mt-20 z-10">
      
      {/* Background Ambience - Removing bg-void overlay to match global flow */}
      <motion.div style={{ y: y }} className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/images/backgrounds/narrative-mesh.png" 
            alt="Abstract Agnos Mesh" 
            className="w-full h-full object-cover opacity-40 mix-blend-screen"
          />
      </motion.div>
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-void to-void opacity-50 z-1" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          <motion.div style={{ opacity }} className="space-y-8">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Business growth isn't just about <span className="text-gray-500">more customers.</span>
            </h2>
            
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              It's about having the <span className="text-gradient-gold">architecture</span> to handle them.
            </h2>
            
            <div className="h-16" /> {/* Spacer */}
            
            <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-2xl mx-auto">
              We don't just patch software. We re-engineer your entire operational DNA using Agnos, turning manual chaos into automated clarity.
            </p>


          </motion.div>

        </div>
      </div>
      
      {/* Decorative vertical line removed for cleaner look */}

    </section>
  );
}
