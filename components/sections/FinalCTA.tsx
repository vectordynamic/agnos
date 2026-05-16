"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ctaData } from "@/lib/data";

export default function FinalCTA() {
  return (
    <section className="py-32 relative overflow-hidden flex items-center justify-center">
      {/* Radial Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold-600/20 via-void to-void" />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-7xl font-bold mb-6 tracking-tight"
        >
          {ctaData.heading}
        </motion.h2>
        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
          {ctaData.subheading}
        </p>

        <motion.div
           whileHover={{ scale: 1.05 }}
           whileTap={{ scale: 0.95 }}
        >
            <Link
            href="/contact"
            className="inline-block px-12 py-5 rounded-full bg-gold-gradient text-white text-lg font-bold shadow-[0_0_40px_rgba(245,158,11,0.4)] hover:shadow-[0_0_60px_rgba(245,158,11,0.6)] transition-shadow"
            >
            {ctaData.button}
            </Link>
        </motion.div>
      </div>
    </section>
  );
}
