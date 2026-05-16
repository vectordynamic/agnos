"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { servicesPageData } from "@/lib/data";

interface MegaMenuProps {
  isOpen: boolean;
}

export default function MegaMenu({ isOpen }: MegaMenuProps) {
  const serviceKeys = Object.keys(servicesPageData).filter(key => key !== 'default');

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-[#05080f]/95 backdrop-blur-xl border-t border-b border-white/10 shadow-2xl overflow-hidden py-12"
        >
          <div className="container mx-auto px-6">
             <div className="grid grid-cols-12 gap-12">
                
                {/* Column 2: Detailed Links (5 cols) */}
                <div className="col-span-6 flex flex-col">
                   <h3 className="text-amber-500 font-bold uppercase tracking-wider text-sm mb-6 flex items-center gap-2">
                       <span className="w-8 h-[1px] bg-amber-500"></span> Core Capabilities
                   </h3>
                   <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                      {serviceKeys.map((key, index) => (
                          <DetailLink 
                            key={key}
                            href={`/solutions/${key}`} 
                            title={servicesPageData[key].title} 
                            desc={servicesPageData[key].tagline} 
                            index={index + 1} 
                          />
                      ))}
                   </div>
                </div>

                {/* Vertical Divider */}
                <div className="col-span-1 flex justify-center">
                    <div className="w-[1px] h-full bg-white/10" />
                </div>

                {/* Column 3: Resources (3 cols) */}
                 <div className="col-span-2 flex flex-col">
                   <h3 className="text-amber-500 font-bold uppercase tracking-wider text-sm mb-6 flex items-center gap-2">
                       <span className="w-8 h-[1px] bg-amber-500"></span> Insights
                   </h3>
                   <div className="space-y-4">
                      <SimpleLink href="/portfolio" label="Success Stories" />
                      <SimpleLink href="/blog" label="Engineering Blog" />
                      <SimpleLink href="/about" label="Our Methodology" />
                      <SimpleLink href="/careers" label="Join the Team" />
                   </div>
                </div>

                {/* Column 4: Featured (3 cols) */}
                <div className="col-span-3">
                    <Link href="/blog/autonomous-enterprise-agents">
                        <motion.div
                           initial={{ opacity: 0, x: 20 }}
                           animate={{ opacity: 1, x: 0 }}
                           transition={{ delay: 0.2 }}
                           className="group relative h-full min-h-[250px] rounded-2xl overflow-hidden cursor-pointer"
                        >
                            <Image 
                                src="/ai-agents.png" 
                                alt="Featured Research" 
                                fill 
                                className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                            />
                             {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent p-6 flex flex-col justify-end">
                                <span className="text-amber-500 text-xs font-bold uppercase tracking-widest mb-2">Featured Research</span>
                                <h4 className="text-white text-lg font-bold leading-tight mb-3 group-hover:text-amber-400 transition-colors">
                                    Transforming Enterprise Operations with Autonomous Agents.
                                </h4>
                                <div className="flex items-center text-white text-xs font-bold uppercase tracking-wider group-hover:gap-2 transition-all">
                                    Read More <ArrowRight size={14} className="ml-2" />
                                </div>
                            </div>
                        </motion.div>
                    </Link>
                </div>

             </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function DetailLink({ href, title, desc, index }: { href: string, title: string, desc: string, index: number }) {
    return (
        <Link href={href} className="group block">
            <h4 className="text-white text-base font-bold flex items-center gap-2 group-hover:text-amber-500 group-hover:drop-shadow-[0_0_15px_rgba(245,158,11,0.8)] transition-all duration-300">
                {title} <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
            </h4>
            <p className="text-gray-500 text-xs group-hover:text-gray-400 transition-colors line-clamp-1">{desc}</p>
        </Link>
    )
}

function SimpleLink({ href, label }: { href: string, label: string }) {
    return (
        <Link href={href} className="block text-gray-400 hover:text-amber-500 hover:translate-x-2 hover:drop-shadow-[0_0_10px_rgba(245,158,11,0.6)] transition-all duration-300 text-sm font-medium">
            {label}
        </Link>
    )
}
