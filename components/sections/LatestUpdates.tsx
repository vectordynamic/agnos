"use client";

import { motion } from "framer-motion";
import { updatesData } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";

export default function LatestUpdates() {
  return (
    <section className="py-24 bg-void relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
                <h2 className="text-3xl font-bold mb-2">Latest From Agnos</h2>
                <p className="text-gray-400">Industry insights and company news.</p>
            </div>
            <button className="text-gold-500 hover:text-gold-400 hover:drop-shadow-[0_0_8px_rgba(251,191,36,0.5)] transition-all flex items-center gap-2 mt-4 md:mt-0 group">
                View All <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
            {updatesData.map((update, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-gold-500/30 transition-colors h-full flex flex-col cursor-pointer overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gold-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="flex justify-between items-start mb-4 relative z-10">
                        <span className="text-xs font-bold text-gold-500 bg-gold-500/10 px-2 py-1 rounded">{update.category}</span>
                        <span className="text-xs text-gray-500">{update.date}</span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-white mb-4 group-hover:text-gold-400 transition-colors relative z-10">
                        {update.title}
                    </h3>
                    
                    <div className="mt-auto relative z-10">
                         <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-gold-500 group-hover:text-black transition-colors">
                            <ArrowUpRight size={14} />
                         </div>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
