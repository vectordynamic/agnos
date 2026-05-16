"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { siteConfig } from "@/lib/data";

export default function ContactPage() {
  return (
    <main className="bg-void min-h-screen text-white font-sans selection:bg-amber-500/30">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-48 pb-12 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-center">
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl font-bold mb-6 tracking-tight font-outfit"
            >
                Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Transformation</span>
            </motion.h1>
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
            >
               Ready to streamline your operations with Agnos? Let's discuss your business goals and how we can engineer your success.
            </motion.p>
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.1),transparent_70%)] -z-10 pointer-events-none" />
      </section>

      {/* Contact Section */}
      <section className="py-20">
         <div className="container mx-auto px-6 max-w-6xl">
             <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-[#0f1219] rounded-[2rem] border border-white/5 shadow-2xl overflow-hidden flex flex-col lg:flex-row"
             >
                 {/* Left Side: Contact Info Panel */}
                 <div className="lg:w-1/3 bg-gradient-to-b from-amber-500/10 to-transparent p-12 border-b lg:border-b-0 lg:border-r border-white/5 flex flex-col justify-between">
                     <div>
                         <h2 className="text-3xl font-bold mb-8 font-outfit">Contact Info</h2>
                         <div className="space-y-10">
                             <InfoItem icon={MapPin} title="Office Address" content={siteConfig.contact.address} />
                             <InfoItem icon={Mail} title="Email Us" content={siteConfig.contact.email} />
                             <InfoItem icon={Phone} title="Call Us" content={siteConfig.contact.phone} />
                         </div>
                     </div>
                     
                     <div className="mt-12 p-6 rounded-2xl bg-white/5 border border-white/10">
                        <p className="text-sm text-gray-400 italic">
                            "Our team typically responds to inquiries within 24 business hours."
                        </p>
                     </div>
                 </div>

                 {/* Right Side: Contact Form */}
                 <div className="lg:w-2/3 p-12">
                     <h2 className="text-3xl font-bold mb-8 font-outfit">Send us a Message</h2>
                     <form className="space-y-6">
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                             <div className="space-y-2">
                                 <label className="text-sm font-bold text-gray-400 uppercase tracking-wider">Name</label>
                                 <input type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 transition-all" />
                             </div>
                             <div className="space-y-2">
                                 <label className="text-sm font-bold text-gray-400 uppercase tracking-wider">Email</label>
                                 <input type="email" placeholder="john@company.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 transition-all" />
                             </div>
                         </div>
                         
                         <div className="space-y-2">
                             <label className="text-sm font-bold text-gray-400 uppercase tracking-wider">Company</label>
                             <input type="text" placeholder="Your Company Ltd." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 transition-all" />
                         </div>

                         <div className="space-y-2">
                             <label className="text-sm font-bold text-gray-400 uppercase tracking-wider">Message</label>
                             <textarea rows={5} placeholder="Tell us about your project..." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 transition-all resize-none" />
                         </div>

                         <button className="w-full py-4 bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl text-black font-bold text-lg hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(245,158,11,0.4)] transition-all duration-300 flex items-center justify-center gap-2">
                             Send Message <Send size={20} />
                         </button>
                     </form>
                 </div>
             </motion.div>
         </div>
      </section>

      <Footer />
    </main>
  );
}

function InfoItem({ icon: Icon, title, content }: { icon: any, title: string, content: string }) {
    return (
        <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500 shrink-0">
                <Icon size={24} />
            </div>
            <div>
                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">{title}</h4>
                <p className="text-lg text-white font-medium leading-relaxed">{content}</p>
            </div>
        </div>
    )
}
