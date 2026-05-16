"use client";

import { motion } from "framer-motion";

const clients = [
  { name: "Bangladesh Armed Service Board", industry: "Defense" },
  { name: "Alauddin Textile Mills", industry: "Manufacturing" },
  { name: "Aristo Food Export", industry: "Food & Beverage" },
  { name: "Baatighar Publishers", industry: "Publishing" },
  { name: "University Press Limited", industry: "Publishing" },
  { name: "Cross World", industry: "Logistics" },
  { name: "Easy Dhaka", industry: "Transportation" },
  { name: "Ekattor Media", industry: "Media" },
  { name: "Rajkumar Textile", industry: "Manufacturing" }
];

export default function TrustBar() {
  return (
    <section className="pt-10 pb-20 md:pt-16 md:pb-32 relative overflow-hidden">
      
      <div className="container mx-auto px-6 relative z-10 mb-8">
        
        {/* Header */}
        <motion.div 
          className="text-center px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Powering Bangladesh's{" "}
            </motion.span>
            <motion.span 
              className="relative inline-block text-amber-500"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              animate={{
                textShadow: [
                  "0 0 20px rgba(245, 158, 11, 0.3)",
                  "0 0 30px rgba(245, 158, 11, 0.5)",
                  "0 0 20px rgba(245, 158, 11, 0.3)",
                ]
              }}
            >
              New Economy
            </motion.span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl font-light max-w-2xl mx-auto">
            Trusted by 50+ leading organizations across industries
          </p>
        </motion.div>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full border-y border-white/5 bg-white/2 backdrop-blur-[2px]">
        
        {/* Fade Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 z-10 bg-gradient-to-r from-void via-void/90 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 z-10 bg-gradient-to-l from-void via-void/90 to-transparent pointer-events-none" />

        {/* Scrolling Track */}
        <div className="flex overflow-hidden group">
          <motion.div
            className="flex gap-8 md:gap-12 items-center py-8 md:py-10 px-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 60,
                ease: "linear",
              },
            }}
          >
            {/* Duplicated content for seamless loop */}
            {[...clients, ...clients, ...clients, ...clients].map((client, index) => (
              <div 
                key={index} 
                className="relative flex-shrink-0 w-[200px] md:w-[240px] group/item cursor-pointer"
              >
                {/* Logo Card with Border */}
                <div className="relative h-[120px] rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm flex items-center justify-center p-8 transition-all duration-300 group-hover/item:border-amber-500/50 group-hover/item:bg-white/10 group-hover/item:-translate-y-1">
                  
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src="/images/clients/71tv.webp" 
                    alt={client.name}
                    className="w-full h-full object-contain opacity-80 group-hover/item:opacity-100 transition-all duration-300 drop-shadow-md"
                  />
                  
                  {/* Subtle Glow inside card */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-amber-500/0 group-hover/item:from-amber-500/5 group-hover/item:to-transparent rounded-lg transition-all duration-300" />
                </div>

                {/* Industry Tag */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover/item:opacity-100 transition-all duration-300 transform translate-y-2 group-hover/item:translate-y-0 pointer-events-none">
                  <span className="text-amber-500 text-[10px] tracking-[0.2em] uppercase font-bold whitespace-nowrap bg-void/90 border border-amber-500/20 px-3 py-1 rounded-full">
                    {client.industry}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

    </section>
  );
}
