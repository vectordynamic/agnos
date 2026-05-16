"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { heroData } from "@/lib/data";

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-void">
      
      {/* 1. INTERACTIVE BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated Spotlight that follows mouse */}
        <motion.div 
          className="absolute inset-0 z-0 opacity-30"
          style={{
            background: useTransform(
              [springX, springY],
              ([x, y]) => `radial-gradient(circle 600px at ${x}px ${y}px, rgba(245,158,11,0.15), transparent 80%)`
            )
          }}
        />

        {/* Subtle Mesh Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        {/* Floating Particles - Client Side Only to prevent hydration mismatch */}
        {mounted && [...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.2, 1],
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50]
            }}
            transition={{ 
              duration: 5 + Math.random() * 10, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute w-1 h-1 bg-amber-500/30 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* 1.5 FULL SCREEN ROCKET BEAM */}
      <div className="absolute top-[45%] left-0 w-full h-2 overflow-visible z-20 pointer-events-none">
          <motion.div
            initial={{ left: "-40%", opacity: 0.7 }}
            animate={{ left: "120%", opacity: 1 }}
            transition={{ 
                duration: 2.5, 
                ease: "easeInOut",
                repeat: Infinity, 
                repeatDelay: 4, 
                delay: 2 
            }}
            className="absolute top-0 w-[500px] h-[2px] bg-gradient-to-r from-transparent via-amber-500/50 to-white shadow-[0_0_80px_8px_rgba(245,158,11,0.8)] mix-blend-screen rounded-full blur-[0.5px]"
          >
             <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[120px] h-[4px] bg-white shadow-[0_0_40px_5px_#ffffff] rounded-full mix-blend-overlay" />
          </motion.div>
      </div>

      {/* 2. MAIN CONTENT */}
      <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        
        {/* Badge */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
        >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-[10px] font-bold uppercase tracking-[0.3em] text-amber-500/80 backdrop-blur-sm">
                <span className="w-1 h-1 rounded-full bg-amber-500 animate-pulse" />
                Innovation at Scale
            </span>
        </motion.div>

        {/* AGNOS with Shimmer Effect */}
        <div className="relative group">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="text-7xl sm:text-9xl md:text-[12rem] font-black tracking-tighter leading-none select-none relative"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-gray-200 to-gray-500 drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                AGNOS
              </span>
            </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 1, delay: 0.6 }}
           className="mt-8 max-w-2xl"
        >
            <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed tracking-wide">
              Architecting Digital <span className="text-white font-medium">Permanence</span>
            </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6"
        >
            <Link
                href="/contact"
                className="group relative inline-flex items-center gap-3 px-10 py-4 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 text-black font-bold hover:scale-105 hover:shadow-[0_0_30px_rgba(245,158,11,0.4)] transition-all duration-300"
            >
                {heroData.cta.primary}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
                href="/about" 
                className="group relative inline-flex items-center gap-3 px-10 py-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 hover:scale-105 transition-all duration-300 text-white font-medium backdrop-blur-md"
              >
                {heroData.cta.secondary}
                <ArrowRight size={18} className="text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
            </Link>
        </motion.div>

      </div>

      {/* Decorative Bottom Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-void via-void/80 to-transparent z-20 pointer-events-none" />

    </section>
  );
}
