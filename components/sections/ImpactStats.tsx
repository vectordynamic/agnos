"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { statsData } from "@/lib/data";

export default function ImpactStats() {
  return (
    <section className="py-24 relative overflow-hidden bg-void">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[50%] bg-gold-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {statsData.map((stat, i) => (
             <CounterItem key={i} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Helper to separate number from suffix (e.g., "10M+" -> { num: 10, suffix: "M+" })
function parseStatValue(value: string) {
  const match = value.match(/^([\d.]+)(.*)$/);
  return {
    num: match ? parseFloat(match[1]) : 0,
    suffix: match ? match[2] : value,
    hasDecimal: value.includes(".")
  };
}

function CounterItem({ stat }: { stat: any }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  
  const { num, suffix: valueSuffix, hasDecimal } = parseStatValue(stat.value);

  const rounded = useTransform(count, (latest: number) => {
    if (hasDecimal) {
       return latest.toFixed(1);
    }
    return Math.round(latest).toString();
  });
  
  useEffect(() => {
    if (isInView) {
      const controls = animate(count, num, { duration: 2.5, ease: "circOut" });
      return controls.stop;
    }
  }, [isInView, num, count]);

  return (
    <div ref={ref} className="group">
      <div className="flex justify-center items-baseline mb-2">
        <motion.span 
            className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white via-gold-200 to-gold-600 drop-shadow-[0_0_20px_rgba(234,179,8,0.3)] tabular-nums tracking-tight"
        >
            {rounded}
        </motion.span>
        <span className="text-3xl md:text-4xl text-gold-500 font-medium ml-1">
            {valueSuffix}{stat.suffix}
        </span>
      </div>
      <p className="text-sm md:text-base text-gray-400 font-medium tracking-widest uppercase group-hover:text-white transition-colors">
        {stat.label}
      </p>
    </div>
  )
}


