"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData, ctaData } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image"; // Added
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function PortfolioPage() {
  const [filter, setFilter] = useState("All");

  const filteredItems = filter === "All" 
    ? portfolioData.items 
    : portfolioData.items.filter(item => item.category === filter);

  return (
    <main className="bg-void min-h-screen text-white font-sans selection:bg-amber-500/30">
      <Navbar />
      
      {/* Hero Section - Cinematic Image Background */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-32 pb-20">
        
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
            <Image 
                src="/images/portfolio-hero.png" 
                alt="Architecture Background" 
                fill 
                priority
                className="object-cover opacity-60"
            />
            {/* Gradient Overlays for Readability and Mood */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#05080f]/90 via-[#05080f]/50 to-[#05080f] mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#05080f] via-transparent to-black/60" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
            
            {/* Badge */}
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-black/40 text-amber-500 text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-md"
            >
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse shadow-[0_0_10px_rgba(245,158,11,0.8)]" />
                Trusted by Industry Leaders
            </motion.div>

            <motion.h1 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-6xl md:text-8xl font-bold mb-8 tracking-tight font-outfit drop-shadow-2xl"
            >
                Our Valued <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-amber-200 to-amber-500 drop-shadow-[0_0_35px_rgba(245,158,11,0.4)]">
                    Clients
                </span>
            </motion.h1>

            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed font-light drop-shadow-md"
            >
                We take pride in powering the operations of visionary enterprises with world-class engineering, AI automation, and bespoke software ecosystems.
            </motion.p>
        </div>
      </section>

      {/* Elegant Filter Tabs */}
      <section className="mb-24">
        <div className="container mx-auto px-6 flex justify-center flex-wrap gap-4">
            {portfolioData.categories.map((cat, idx) => (
                <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`px-8 py-3 rounded-full border text-sm uppercase tracking-widest font-bold transition-all duration-300 ${
                        filter === cat 
                        ? "bg-amber-500 text-black border-amber-500 scale-105 shadow-[0_0_20px_rgba(245,158,11,0.4)]" 
                        : "bg-[#1e293b]/80 border-white/20 text-gray-300 hover:text-white hover:border-amber-500/50 hover:bg-[#1e293b] backdrop-blur-md"
                    }`}
                >
                    {cat}
                </button>
            ))}
        </div>
      </section>

      {/* Client Success Grid */}
      <section className="pb-40">
        <div className="container mx-auto px-6">
            <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredItems.map((item) => (
                    <ClientCard key={item.id} item={item} />
                ))}
            </motion.div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-32 border-t border-white/5 bg-neutral-900/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(245,158,11,0.1),transparent_70%)]" />
        <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-outfit">{ctaData.heading}</h2>
            <p className="text-xl text-gray-400 mb-12 max-w-xl mx-auto">{ctaData.subheading}</p>
            <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-12 py-5 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 text-black font-bold text-lg hover:scale-105 hover:shadow-[0_0_40px_rgba(245,158,11,0.5)] transition-all duration-300"
            >
                {ctaData.button} <ArrowUpRight size={22} />
            </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function ClientCard({ item }: { item: any }) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="group relative h-full bg-[#0f1219] rounded-2xl border border-white/10 p-8 flex flex-col hover:border-amber-500/50 hover:shadow-[0_0_30px_rgba(245,158,11,0.15)] transition-all duration-300"
        >
            {/* Image Section */}
            <div className="relative h-48 mb-8 rounded-xl overflow-hidden border border-white/5 group-hover:border-amber-500/30 transition-colors">
                <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1219] via-transparent to-transparent opacity-60" />
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col items-center text-center">
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors font-outfit">
                    {item.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-6">
                    {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {item.tags.map((tag: string) => (
                        <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 border border-amber-500/20">
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Visible "Action" Button */}
                <div className="mt-auto pt-6 border-t border-white/5 w-full">
                    <button className="w-full py-2 bg-white/5 rounded-lg text-xs font-bold uppercase tracking-widest text-gray-300 hover:bg-amber-500 hover:text-black transition-all duration-300 flex items-center justify-center gap-2">
                        View Project <ArrowUpRight size={12} />
                    </button>
                </div>
            </div>

            {/* Bottom Glow */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500/0 to-transparent group-hover:via-amber-500/50 transition-all duration-500" />
        </motion.div>
    )
}
