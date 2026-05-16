"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useTransform, useSpring, animate } from "framer-motion";
import { solutionData } from "@/lib/data";
import { cn } from "@/lib/utils";
import { GripVertical } from "lucide-react";

export default function SolutionShowcase() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  // ROI Counter Animation
  const roiCount = useMotionValue(0);
  const roundedRoi = useTransform(roiCount, (latest) => Math.round(latest));

  useEffect(() => {
    // Animate ROI when slider moves past 60%
    if (sliderPosition < 40) {
      animate(roiCount, 127, { duration: 2, ease: "easeOut" }); // Animate to 127%
    } else {
      roiCount.set(0); // Reset if hidden
    }
  }, [sliderPosition, roiCount]);


  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging.current || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  };

  const handleMouseDown = () => { isDragging.current = true; };
  const handleMouseUp = () => { isDragging.current = false; };

  // Mobile touch support
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
     if (!isDragging.current || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  };

  useEffect(() => {
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchend", handleMouseUp);
    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, []);


  // Glitch Effect - Generate random values on client side only to prevent hydration mismatch
  const [glitches, setGlitches] = useState<{ top: string; left: string; width: string; height: string; animation: string }[]>([]);

  useEffect(() => {
    const newGlitches = Array.from({ length: 6 }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      width: `${Math.random() * 200 + 50}px`,
      height: `${Math.random() * 50 + 2}px`,
      animation: `pulse ${Math.random() * 2 + 0.5}s infinite`
    }));
    setGlitches(newGlitches);
  }, []);

  return (
    <section className="py-24 md:py-32 bg-void relative overflow-hidden">
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
        >
          {solutionData.heading}
        </motion.h2>
        <p className="text-gray-400 mb-12 text-lg md:text-xl font-light max-w-2xl mx-auto">
          {solutionData.subheading}
        </p>

        {/* COMPARISON SLIDER CONTAINER */}
        <div 
          ref={containerRef}
          className="relative mx-auto max-w-6xl h-[400px] md:h-[600px] rounded-2xl border border-white/10 bg-void overflow-hidden shadow-2xl cursor-col-resize select-none"
          onMouseMove={handleMouseMove}
          onMouseDown={handleMouseDown}
          onTouchMove={handleTouchMove}
          onTouchStart={handleMouseDown}
        >
          
          {/* 1. LAYER: CHAOS (RED) - The 'Before' State (Background/Bottom Layer) */}
          <div 
            className="absolute inset-0 bg-[#0a0505] flex items-center justify-center overflow-hidden"
            style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
          >
             
             {/* Broken Grid Background */}
             <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#ef444420_1px,transparent_1px),linear-gradient(to_bottom,#ef444420_1px,transparent_1px)] bg-[size:40px_40px]" />
             
             {/* Red Vignette & Noise */}
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#450a0a_100%)] opacity-60" />
             <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0MDAnIGhlaWdodD0nNDAwJz48ZmlsdGVyIGlkPSdub2lzZUZpbHRlcic+PGZlVHVyYnVsZW5jZSB0eXBlPSdmcmFjdGFsTm9pc2UnIGJhc2VGcmVxdWVuY3k9JzAuNjUnIG51bU9jdGF2ZXM9JzMnIHN0aXRjaFRpbGVzPSdzdGl0Y2gnLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWx0ZXI9J3VybCgjbm9pc2VGaWx0ZXInKSBvcGFjaXR5PScwLjQnLz48L3N2Zz4=')]" />
             
             {/* Chaos UI Elements */}
             <div className="absolute inset-0 flex items-center justify-center">
                {/* Random Glitch Rectangles */}
                {glitches.map((style, i) => (
                  <div 
                    key={`glitch-${i}`}
                    className="absolute bg-red-500/10 pointer-events-none"
                    style={style}
                  />
                ))}

                <div className="relative w-full max-w-4xl h-[70%] border-2 border-dashed border-red-500/20 rounded-xl bg-black/40 backdrop-blur-sm p-8 flex flex-col items-center justify-center">
                    
                    {/* Background Error Codes */}
                    <div className="absolute top-4 left-4 text-[10px] font-mono text-red-500/30 leading-tight">
                       ERR_CONNECTION_REFUSED<br/>
                       FATAL_EXCEPTION_0x82<br/>
                       DATA_CORRUPTION_DETECTED
                    </div>

                    <h3 className="relative z-10 text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-red-500/50 to-transparent tracking-tighter mb-8 scale-y-150 opacity-50 blur-[1px]">
                       CHAOS
                    </h3>

                    <div className="absolute inset-0 flex items-center justify-center mix-blend-overlay">
                       <h3 className="text-6xl md:text-8xl font-black text-red-500 opacity-20 tracking-tighter scale-y-150 animate-pulse">
                         CHAOS
                       </h3>
                    </div>
                    
                    {/* Scattering Files & Broken Links */}
                    <div className="relative w-full h-full">
                       {[1,2,3,4,5].map(i => (
                          <motion.div 
                            key={i} 
                            initial={{ x: 0, y: 0 }}
                            animate={{ 
                              y: [0, -10, 0], 
                              x: [0, 5, 0],
                              rotate: [(i - 3) * 10, (i - 3) * 15, (i - 3) * 10]
                            }}
                            transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute w-28 h-36 bg-neutral-900 border border-red-500/30 rounded flex flex-col items-center justify-center shadow-xl"
                            style={{ 
                              top: `${40 + (i%2)*20}%`, 
                              left: `${20 + i*12}%`,
                              zIndex: i
                            }}
                          >
                             <div className="w-12 h-16 bg-red-500/10 mb-2 rounded border border-red-500/20" />
                             <div className="w-16 h-2 bg-red-500/20 rounded" />
                             <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">!</div>
                          </motion.div>
                       ))}
                    </div>

                    {/* Floating Alert Badges */}
                    <div className="absolute top-[20%] right-[10%] bg-red-500 text-black font-bold px-3 py-1 rounded-sm text-xs rotate-12 shadow-[0_0_15px_rgba(239,68,68,0.6)] animate-bounce">
                      SYSTEM FAILURE
                    </div>
                </div>
             </div>
          </div>


          {/* 2. LAYER: CLARITY (GOLD) - The 'After' State (Top Layer, Clipped) */}
          <div 
             className="absolute inset-0 bg-gradient-to-br from-void to-black flex items-center justify-center overflow-hidden"
             style={{ clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)` }}
          >
             {/* Agnos Dashboard UI */}
             <div className="absolute inset-4 rounded-xl border border-gold-500/20 bg-white/5 backdrop-blur-md flex flex-col overflow-hidden shadow-2xl">
                {/* Header */}
                <div className="h-14 border-b border-white/5 bg-white/5 flex items-center px-6 gap-4">
                   <div className="w-auto h-8 px-2 rounded-lg bg-gold-500 flex items-center justify-center text-black font-bold text-xs shadow-[0_0_15px_#f59e0b]">Agnos</div>
                   <div className="h-2 w-24 bg-white/10 rounded-full" />
                   <div className="ml-auto flex gap-3">
                      <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-xs text-green-400 font-medium tracking-wide">SYSTEM OPTIMAL</span>
                   </div>
                </div>
                
                {/* Dashboard Content */}
                <div className="flex-1 p-8 grid grid-cols-12 gap-6 relative">
                   {/* Sidebar */}
                   <div className="col-span-2 hidden md:block space-y-3 border-r border-white/5 pr-4">
                      {[1,2,3,4,5].map(i => (
                        <div key={i} className={`h-8 w-full rounded-md ${i===1 ? "bg-gold-500/20 border border-gold-500/30" : "bg-white/5"}`} />
                      ))}
                   </div>
                   
                   {/* Main Charts */}
                   <div className="col-span-12 md:col-span-10 grid grid-cols-2 gap-6">
                      {/* Metric Card 1 (ROI) */}
                      <div className="col-span-1 h-32 md:h-40 rounded-xl bg-gradient-to-br from-gold-500/10 to-transparent border border-gold-500/20 p-6 flex flex-col justify-center relative overflow-hidden">
                         <div className="absolute top-0 right-0 p-4 opacity-50"><div className="w-2 h-2 bg-gold-500 rounded-full" /></div>
                         <span className="text-sm text-gold-400/80 uppercase tracking-widest mb-1">ROI Growth</span>
                         <div className="flex items-baseline gap-1">
                            <span className="text-4xl md:text-5xl font-bold text-white">+</span>
                            <motion.span className="text-4xl md:text-5xl font-bold text-white">
                                {roundedRoi}
                            </motion.span>
                            <span className="text-4xl md:text-5xl font-bold text-white">%</span>
                         </div>
                         <div className="absolute bottom-0 left-0 right-0 h-10 flex items-end gap-1 px-6 opacity-30">
                            {[40, 60, 45, 70, 80, 60, 90, 100].map((h, i) => (
                              <div key={i} className="flex-1 bg-gold-500" style={{ height: `${h}%` }} />
                            ))}
                         </div>
                      </div>

                      {/* Metric Card 2 */}
                      <div className="col-span-1 h-32 md:h-40 rounded-xl bg-white/5 border border-white/10 p-6 flex flex-col justify-center">
                         <span className="text-sm text-gray-500 uppercase tracking-widest mb-2">Efficiency</span>
                         <div className="h-4 w-full bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full w-[94%] bg-green-500 shadow-[0_0_10px_#22c55e]" />
                         </div>
                         <div className="mt-2 text-right text-xs text-green-400">94% Optimized</div>
                      </div>

                      {/* Bottom Chart */}
                      <div className="col-span-2 h-48 rounded-xl bg-white/5 border border-white/10 relative overflow-hidden flex items-end">
                          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:20px_20px]" />
                          <div className="w-full h-3/4 bg-gradient-to-t from-gold-500/20 to-transparent clip-path-polygon" style={{ clipPath: "polygon(0 100%, 0 80%, 20% 60%, 40% 70%, 60% 40%, 80% 30%, 100% 10%, 100% 100%)" }} />
                      </div>
                   </div>
                </div>
             </div>
          </div>

          {/* 3. SLIDER HANDLE */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white/20 z-30 cursor-ew-resize flex items-center justify-center group"
            style={{ left: `${sliderPosition}%` }}
          >
             <div className="w-12 h-12 rounded-full bg-white border-4 border-void shadow-[0_0_20px_rgba(255,255,255,0.3)] flex items-center justify-center transform transition-transform group-hover:scale-110">
                <GripVertical className="text-void w-5 h-5" />
             </div>
             <div className="absolute top-0 bottom-0 w-px bg-white/50 shadow-[0_0_15px_white]" />
          </div>

        </div>

        {/* Labels below slider */}
        <div className="mt-8 flex justify-between max-w-6xl mx-auto px-4 text-sm font-medium tracking-widest uppercase">
           <span className="text-red-500/50">Chaos (The Old Way)</span>
           <span className="text-gold-500">Clarity (The New Way)</span>
        </div>

        {/* Feature List */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-12">
            {solutionData.features.map((feature, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + (i * 0.1) }}
                  className="flex items-center gap-3 text-gray-300"
                >
                    <div className={`p-2 rounded-full bg-gold-500/10 text-gold-500 shadow-[0_0_10px_rgba(245,158,11,0.2)]`}>
                        <feature.icon size={18} />
                    </div>
                    <span className="font-medium">{feature.text}</span>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
