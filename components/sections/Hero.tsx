"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Globe, Zap, Shield, Play } from "lucide-react";
import Image from "next/image";
import { heroData } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      
      {/* 1. BACKGROUND - Deep Midnight Blue with Subtle Pulse - MOVED TO GLOBAL or KEPT TRANSPARENT */}
      {/* Moving the contents to be just animated elements on top of global bg */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Base Gradient - REMOVED to allow global consistency */}
        
        {/* Elegant Breathing Glow (Right Side) */}
        <motion.div 
           animate={{
             opacity: [0.3, 0.5, 0.3],
             scale: [1, 1.1, 1],
           }}
           transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
           className="absolute top-1/2 right-[-10%] -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px]"
        />
        
        {/* Subtle Gold Hint (Left Side) - Kept very subtle as per "little moving animation" request */}
         <motion.div 
           animate={{
             opacity: [0.1, 0.2, 0.1],
           }}
           transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
           className="absolute bottom-0 left-[-10%] w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-[100px]"
        />
      </div>

      {/* 1.5 FULL SCREEN ROCKET BEAM */}
      <div className="absolute top-[45%] left-0 w-full h-2 overflow-visible z-20 pointer-events-none">
          <motion.div
            initial={{ left: "-40%", opacity: 0.7 }}
            animate={{ left: "120%", opacity: 1 }}
            transition={{ 
                duration: 2.2, 
                ease: "easeInOut",
                repeat: 4, 
                repeatDelay: 2, 
                delay: 1.5 
            }}
            className="absolute top-0 w-[500px] h-[2px] bg-gradient-to-r from-transparent via-gold-500/50 to-white shadow-[0_0_80px_8px_rgba(245,158,11,0.8)] mix-blend-screen rounded-full blur-[0.5px]"
          >
             {/* Bright Comet Head - The "Rocket" Core */}
             <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[120px] h-[4px] bg-white shadow-[0_0_40px_5px_#ffffff] rounded-full mix-blend-overlay" />
          </motion.div>
      </div>

      {/* 2. MAIN CONTENT - Exact Match to Screenshot */}
      <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        
        {/* Badge - [ INNOVATION AT SCALE ] */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-10 text-gray-500 font-mono text-xs tracking-[0.3em] uppercase"
        >
            [ INNOVATION AT SCALE ]
        </motion.div>

        {/* AGNOS - Unified Single Line Silver Gradient */}
        <div className="relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter leading-none select-none drop-shadow-2xl"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-gray-200 to-gray-500">
                AGNOS
              </span>
            </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 1, delay: 0.6 }}
           className="mt-12 max-w-3xl"
        >
            <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed">
              The Next Frontier of Enterprise Efficiency
            </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4" // Added flex container for buttons
        >
            <Link
                href="/contact"
                className="group relative inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 text-black font-bold hover:scale-105 hover:shadow-[0_0_20px_rgba(245,158,11,0.5)] transition-all duration-300"
            >
                {heroData.cta.primary}
                <ArrowRight size={16} className="text-black/70 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
                href="/about" 
                className="group relative inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-amber-500/10 hover:border-amber-500 hover:text-amber-500 hover:scale-105 hover:shadow-[0_0_15px_rgba(245,158,11,0.2)] transition-all duration-300 text-white font-medium"
              >
                {heroData.cta.secondary}
                <ArrowRight size={16} className="text-gray-400 group-hover:text-amber-500 group-hover:translate-x-1 transition-all" />
            </Link>
        </motion.div>

      </div>

      {/* 3. TRANSITION MASK - The "Void Split" */}
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-void to-transparent z-20 pointer-events-none" />

    </section>
  );
}
