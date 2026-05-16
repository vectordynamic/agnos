"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useParams } from "next/navigation";
import { CheckCircle, ArrowUpRight, AlertTriangle, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";
import { solutionsPageData } from "@/lib/data";

export default function SolutionPage() {
  const params = useParams();
  const slug = params.slug as string;
  const data = solutionsPageData[slug] || solutionsPageData["default"];

  // Framer Motion Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <main className="bg-[#05080f] min-h-screen text-white font-sans selection:bg-amber-500/30">
      <Navbar />
      
      {/* 1. HERO: The High-Stakes Hook */}
      <section className="pt-48 pb-32 relative overflow-hidden text-center">
        <div className="container mx-auto px-6 relative z-10">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
            >
               <div className="w-20 h-20 mx-auto bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-500 mb-8 border border-amber-500/20">
                   <data.icon size={40} />
               </div>
               <h1 className="text-5xl md:text-8xl font-bold font-outfit mb-6 tracking-tight">{data.title}</h1>
               <div className="px-5 py-2 border border-white/10 rounded-full bg-white/5 inline-block mb-8 text-amber-500 font-bold uppercase tracking-widest text-xs md:text-sm">
                   {data.tagline}
               </div>
               <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
                   {data.description}
               </p>
            </motion.div>
        </div>
        
        {/* Abstract BG */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-[radial-gradient(ellipse_at_top,rgba(245,158,11,0.15),transparent_70%)] -z-10 pointer-events-none" />
      </section>

      {/* 2. VILLAIN: The Problem (Dark/Alert Theme) */}
      <section className="py-24 bg-[#0a0c12] border-y border-white/5 relative">
          <div className="container mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                  <div>
                      <div className="flex items-center gap-3 text-red-500 mb-4">
                          <AlertTriangle size={24} />
                          <span className="font-bold uppercase tracking-widest text-sm">The Challenge</span>
                      </div>
                      <h2 className="text-4xl md:text-5xl font-bold font-outfit mb-6">{data.villain.title}</h2>
                      <p className="text-xl text-gray-400 leading-relaxed">
                          {data.villain.subtitle}
                      </p>
                  </div>
                  <div className="bg-[#0f1219] p-8 md:p-12 rounded-3xl border border-white/5">
                      <ul className="space-y-6">
                          {data.villain.problems.map((prob: string, i: number) => (
                              <li key={i} className="flex gap-4 items-start text-gray-300">
                                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2.5 flex-shrink-0" />
                                  <span className="text-lg">{prob}</span>
                              </li>
                          ))}
                      </ul>
                  </div>
              </div>
          </div>
      </section>

      {/* 3. GUIDE: The Empathy & Authority */}
      <section className="py-32 text-center relative overflow-hidden">
          <div className="container mx-auto px-6 max-w-4xl relative z-10">
              <ShieldCheck className="mx-auto text-amber-500 mb-6 h-12 w-12" />
              <h2 className="text-3xl md:text-5xl font-bold font-outfit mb-8">{data.guide.title}</h2>
              <p className="text-xl md:text-2xl text-gray-400 leading-relaxed font-light">
                  {data.guide.description}
              </p>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[100px] -z-10" />
      </section>

      {/* 4. PLAN: The 3-Step Process */}
      <section className="py-24 bg-[#0a0d14]">
          <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                  <span className="text-amber-500 font-bold uppercase tracking-widest text-sm">The Roadmap</span>
                  <h2 className="text-3xl md:text-4xl font-bold font-outfit mt-2">How We Get There</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {data.plan.map((step: any, i: number) => (
                      <div key={i} className="relative p-8 rounded-2xl bg-[#0f1219] border border-white/5 group hover:border-amber-500/30 transition-all">
                          <div className="absolute -top-6 left-8 text-6xl font-black text-white/5 group-hover:text-amber-500/10 transition-colors">0{i+1}</div>
                          <h3 className="text-xl font-bold text-white mb-3 pt-4 relative z-10">{step.title}</h3>
                          <p className="text-gray-400 relative z-10 text-sm leading-relaxed">{step.desc}</p>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* 5. SUCCESS: The Happy Ending */}
      <section className="py-24 relative">
          <div className="container mx-auto px-6">
              <div className="bg-gradient-to-br from-amber-500/10 to-transparent p-12 rounded-3xl border border-amber-500/20 text-center">
                   <h2 className="text-3xl md:text-4xl font-bold font-outfit mb-12">{data.success.title}</h2>
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                       {data.success.outcomes.map((outcome: string, i: number) => (
                           <div key={i} className="flex flex-col items-center gap-3">
                               <CheckCircle className="text-amber-500 h-8 w-8" />
                               <span className="text-lg font-bold text-white">{outcome}</span>
                           </div>
                       ))}
                   </div>
                   <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-4 bg-amber-500 text-black font-bold rounded-full hover:bg-amber-400 hover:scale-105 hover:shadow-[0_0_30px_rgba(245,158,11,0.4)] transition-all">
                      Start Transformation <ArrowUpRight size={20} />
                  </Link>
              </div>
          </div>
      </section>

      {/* 6. FEATURES: The Technical Specs (De-emphasized) */}
      <section className="py-24 border-t border-white/5">
          <div className="container mx-auto px-6">
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-8 text-center">Included Modules & Features</h3>
              <div className="flex flex-wrap justify-center gap-4">
                  {data.features.map((feat: string, i: number) => (
                      <span key={i} className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm hover:bg-white/10 transition-colors">
                          {feat}
                      </span>
                  ))}
              </div>
          </div>
      </section>

      <Footer />
    </main>
  );
}
