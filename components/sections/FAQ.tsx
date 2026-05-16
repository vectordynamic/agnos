"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqData } from "@/lib/data";
import { Plus, Minus } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-void relative">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {faqData.map((item, i) => (
            <motion.div 
               key={i} 
               initial={false} // Added initial={false}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === i ? "border-gold-500/50 bg-white/[0.03]" : "border-white/10 bg-transparent hover:border-gold-500/50"}`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center p-6 text-left group" // Added 'group' class
              >
                 <span className={`text-lg font-medium ${openIndex === i ? "text-white" : "text-gray-400 group-hover:text-gold-500"}`}>
                    {item.question}
                 </span>
                 <div className={`p-2 rounded-full ${openIndex === i ? "bg-gold-500 text-black" : "bg-white/5 text-gray-400"}`}>
                    {openIndex === i ? <Minus size={16} /> : <Plus size={16} />}
                 </div>
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5 mt-2">
                       {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
