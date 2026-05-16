"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/data";
import { cn } from "@/lib/utils";
import MegaMenu from "./MegaMenu";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-void/80 backdrop-blur-md border-b border-white/5 py-4"
            : "bg-transparent py-6"
        )}
      >
        <div className="container mx-auto px-6 flex items-center justify-between relative">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 relative z-[60]">
             <Image 
                src="/icons/logo.png" 
                alt={`${siteConfig.name} Logo`}
                width={56} 
                height={56} 
                className="h-14 w-auto object-contain"
                priority
             />
             <span className="text-3xl font-bold tracking-tighter font-outfit uppercase text-white">
                {siteConfig.name}
             </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 h-full">
            <Link href="/" className="text-sm font-bold text-white hover:text-amber-500 transition-all duration-300 py-4">Home</Link>
            
            <div 
                className="h-full flex items-center"
                onMouseEnter={() => setIsMegaMenuOpen(true)}
                onMouseLeave={() => setIsMegaMenuOpen(false)}
            >
                <button className={cn(
                    "text-sm font-bold transition-all duration-300 flex items-center gap-1 py-4 cursor-pointer",
                    isMegaMenuOpen ? "text-amber-500 scale-105" : "text-white hover:text-amber-500"
                )}>
                    Solutions
                    <span className={cn("w-1.5 h-1.5 rounded-full bg-amber-500 transition-opacity", isMegaMenuOpen ? "opacity-100" : "opacity-0")} />
                </button>
            </div>

            <Link href="/portfolio" className="text-sm font-bold text-white hover:text-amber-500 transition-all duration-300 py-4">Portfolio</Link>
            <Link href="/about" className="text-sm font-bold text-white hover:text-amber-500 transition-all duration-300 py-4">About</Link>
            <Link href="/blog" className="text-sm font-bold text-white hover:text-amber-500 transition-all duration-300 py-4">Blog</Link>
            <Link href="/contact" className="text-sm font-bold text-white hover:text-amber-500 transition-all duration-300 py-4">Contact</Link>
          </div>
 
           <div className="flex items-center gap-6">
             <Link
               href="/contact"
               className="hidden md:block px-6 py-2.5 rounded-full border border-amber-500/30 text-amber-500 text-sm font-semibold hover:bg-amber-500/10 hover:border-amber-500 transition-all"
             >
               Start Project
             </Link>
 
             {/* Mobile Menu Trigger */}
             <button 
                className="md:hidden text-white"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
             >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
             </button>
           </div>
        </div>

        {/* Mega Menu Rendered Absolute to Navbar */}
        <div 
          className="hidden md:block absolute top-full left-0 w-full"
          onMouseEnter={() => setIsMegaMenuOpen(true)}
          onMouseLeave={() => setIsMegaMenuOpen(false)}
        >
            <MegaMenu isOpen={isMegaMenuOpen} />
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-void border-b border-white/5 py-8 px-6 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
                <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-white">Home</Link>
                <Link href="/solutions" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-white">Solutions</Link>
                <Link href="/portfolio" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-white">Portfolio</Link>
                <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-white">About</Link>
                <Link href="/blog" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-white">Blog</Link>
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-white">Contact</Link>
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="w-full text-center py-4 bg-amber-500 text-black font-bold rounded-full">Start Project</Link>
            </div>
        )}
      </nav>
    </>
  );
}
