"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function PartnersPage() {
  return (
    <main className="bg-void min-h-screen text-white font-sans selection:bg-amber-500/30">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-48 pb-24 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-center">
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl font-bold mb-8 tracking-tight font-outfit"
            >
                Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Alliances</span>
            </motion.h1>
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
            >
               Join forces with Bangladesh's leading Agnos integrator. We partner with technology providers, consultants, and agencies to deliver holistic business value.
            </motion.p>
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.1),transparent_70%)] -z-10 pointer-events-none" />
      </section>

      {/* Become a Partner CTA */}
      <section className="py-20 bg-white/5 border-y border-white/10">
         <div className="container mx-auto px-6 text-center">
             <h2 className="text-3xl font-bold mb-6 font-outfit">Why Partner with Us?</h2>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                 <div className="p-8 bg-[#0f1219] rounded-2xl border border-white/5">
                     <h3 className="text-xl font-bold text-amber-500 mb-4">Technical Expertise</h3>
                     <p className="text-gray-400">Access our stack of 500+ custom modules and certified developers.</p>
                 </div>
                 <div className="p-8 bg-[#0f1219] rounded-2xl border border-white/5">
                     <h3 className="text-xl font-bold text-amber-500 mb-4">Joint Marketing</h3>
                     <p className="text-gray-400">Co-branded case studies, webinars, and events to reach C-level execs.</p>
                 </div>
                 <div className="p-8 bg-[#0f1219] rounded-2xl border border-white/5">
                     <h3 className="text-xl font-bold text-amber-500 mb-4">Revenue Share</h3>
                     <p className="text-gray-400">Attractive referral commissions and implementation splitting.</p>
                 </div>
             </div>
         </div>
      </section>

      <Footer />
    </main>
  );
}
