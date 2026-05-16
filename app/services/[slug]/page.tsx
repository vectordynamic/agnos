"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useParams } from "next/navigation";
import { ArrowUpRight, CheckCircle2, FileText, ChevronRight, Zap } from "lucide-react";
import Link from "next/link";
import { servicesPageData } from "@/lib/data";

export default function ServicePage() {
  const params = useParams();
  const slug = params.slug as string;
  const data = servicesPageData[slug] || servicesPageData["default"];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } }
  };

  return (
    <main className="bg-[#030407] min-h-screen text-white font-sans selection:bg-amber-500/30 overflow-x-hidden">
      <Navbar />
      
      {/* 1. HERO: Cinematic & Immersive */}
      <section className="pt-52 pb-40 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-center">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="max-w-5xl mx-auto"
            >
               <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
                   <div className="p-1.5 bg-amber-500 rounded-full text-black">
                       <Zap size={14} fill="currentColor" />
                   </div>
                   <span className="text-amber-500 text-xs font-bold uppercase tracking-[0.2em]">{data.tagline}</span>
               </div>
               
               <h1 className="text-6xl md:text-9xl font-bold font-outfit mb-8 leading-[0.9] tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50">
                   {data.title}
               </h1>
               
               <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light mb-12">
                   {data.description}
               </p>

               <div className="flex flex-col md:flex-row gap-6 justify-center">
                   <Link href="#process" className="group px-8 py-4 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all flex items-center justify-center gap-3">
                       <span className="font-semibold text-white">How We Work</span>
                       <ChevronRight className="text-gray-400 group-hover:text-white transition-colors" size={18} />
                   </Link>
                   <Link href="/contact" className="px-10 py-4 bg-amber-500 text-black font-bold rounded-full hover:bg-amber-400 hover:scale-105 transition-all shadow-[0_0_40px_rgba(245,158,11,0.2)]">
                       Start Project
                   </Link>
               </div>
            </motion.div>
        </div>
        
        {/* Cinematic Backdrop */}
        <div className="absolute top-0 left-0 w-full h-[1000px] bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.08),transparent_60%)] -z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay -z-10" />
      </section>

      {/* 2. THE OBSTACLE: High-Contrast "Warning" Section */}
      <section className="py-32 relative border-t border-white/5 bg-gradient-to-b from-[#0a0c12] to-[#030407]">
          <div className="container mx-auto px-6">
              <div className="flex flex-col md:flex-row md:items-start gap-16 md:gap-24">
                  {/* Left: The Pain */}
                  <div className="md:w-1/3 sticky top-32">
                      <div className="flex items-center gap-3 text-red-500 mb-6">
                          <div className="w-8 h-[1px] bg-red-500" />
                          <span className="font-bold uppercase tracking-widest text-xs">The Challenge</span>
                      </div>
                      <h2 className="text-4xl md:text-5xl font-bold font-outfit mb-6 leading-tight">
                          {data.challenge.title}
                      </h2>
                      <p className="text-lg text-gray-400 leading-relaxed">
                          {data.challenge.subtitle}
                      </p>
                  </div>

                  {/* Right: The Evidence */}
                  <div className="md:w-2/3 grid grid-cols-1 gap-4">
                      {data.challenge.points.map((point: string, i: number) => (
                          <motion.div 
                              key={i}
                              initial={{ opacity: 0, x: 20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: i * 0.1 }}
                              className="p-8 rounded-2xl bg-[#080a10] border border-white/5 hover:border-red-500/20 transition-colors group"
                          >
                              <div className="flex items-start gap-6">
                                  <span className="font-mono text-red-500/50 text-xl font-bold">0{i+1}</span>
                                  <p className="text-xl text-gray-300 group-hover:text-white transition-colors">{point}</p>
                              </div>
                          </motion.div>
                      ))}
                  </div>
              </div>
          </div>
      </section>

      {/* 3. THE APPROACH: Philosophy Statement */}
      <section className="py-40 relative flex items-center justify-center">
          <div className="absolute inset-0 bg-amber-500/5 blur-[100px]" />
          <div className="container mx-auto px-6 relative z-10 text-center max-w-5xl">
              <span className="text-amber-500 font-bold uppercase tracking-widest text-xs mb-8 block">Our Philosophy</span>
              <h2 className="text-4xl md:text-7xl font-bold font-outfit mb-12 leading-tight">
                  {data.approach.title}
              </h2>
              <p className="text-2xl text-gray-400 font-light leading-relaxed">
                  &quot;{data.approach.description}&quot;
              </p>
          </div>
      </section>

      {/* 4. THE METHODOLOGY: Visual Circuit */}
      <section id="process" className="py-32 bg-[#05080f] relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
              <div className="mb-24 text-center">
                  <h2 className="text-4xl md:text-5xl font-bold font-outfit">The Process</h2>
                  <div className="w-px h-24 bg-gradient-to-b from-transparent via-amber-500 to-transparent mx-auto mt-8" />
              </div>

              <div className="relative max-w-5xl mx-auto">
                  {/* Central Line */}
                  <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 md:-ml-[1px]" />

                  <div className="space-y-24">
                      {data.process.steps.map((step: any, i: number) => (
                          <motion.div 
                              key={i}
                              initial={{ opacity: 0, y: 50 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true, margin: "-100px" }}
                              className={`relative flex flex-col md:flex-row gap-8 md:gap-16 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                          >
                              {/* Content Card */}
                              <div className="flex-1">
                                  <div className={`p-10 rounded-3xl bg-[#0a0d14] border border-white/5 hover:border-amber-500/30 hover:shadow-[0_0_30px_rgba(245,158,11,0.05)] transition-all duration-500 group ${i % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                                      <span className="text-amber-500 font-bold tracking-widest text-xs uppercase mb-4 block">Phase {step.number}</span>
                                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-amber-500 transition-colors">{step.title}</h3>
                                      <p className="text-gray-400 leading-relaxed">{step.desc}</p>
                                  </div>
                              </div>

                              {/* Center Node */}
                              <div className="relative z-10 flex-shrink-0 flex md:justify-center">
                                  <div className="w-14 h-14 rounded-full bg-[#030407] border border-white/10 flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,1)]">
                                      <div className="w-3 h-3 bg-amber-500 rounded-full animate-pulse" />
                                  </div>
                              </div>

                              {/* Spacer */}
                              <div className="flex-1 hidden md:block" />
                          </motion.div>
                      ))}
                  </div>
              </div>
          </div>
      </section>

      {/* 5. DELIVERABLES: Glass Grid */}
      <section className="py-32 border-t border-white/5 bg-[#030407]">
           <div className="container mx-auto px-6 max-w-6xl">
               <div className="flex flex-col md:flex-row md:items-center justify-between gap-12 mb-16">
                   <h3 className="text-3xl font-bold font-outfit">Concrete Deliverables</h3>
                   <p className="text-gray-500 max-w-md text-right">Tangible assets you own forever.</p>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                   {data.deliverables.map((item: string, i: number) => (
                       <div key={i} className="group p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-all flex flex-col gap-4 min-h-[160px] justify-between">
                           <FileText className="text-amber-500/50 group-hover:text-amber-500 transition-colors" size={32} />
                           <span className="font-bold text-lg text-gray-300 group-hover:text-white">{item}</span>
                       </div>
                   ))}
               </div>
           </div>
      </section>
      
      {/* FINAL CTA */}
      <section className="py-40 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-amber-500/5 pointer-events-none" />
          <div className="container mx-auto px-6 text-center relative z-10">
              <h2 className="text-5xl md:text-7xl font-bold mb-12 font-outfit tracking-tight">Ready to <span className="text-amber-500">Transform?</span></h2>
              <Link href="/contact" className="inline-flex items-center gap-4 px-12 py-5 bg-white text-black font-bold rounded-full text-lg hover:bg-gray-200 hover:scale-105 transition-all">
                  Schedule Consultation <ArrowUpRight size={22} />
              </Link>
          </div>
      </section>

      <Footer />
    </main>
  );
}
