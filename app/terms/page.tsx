"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Gavel, Scale, AlertTriangle, CheckSquare } from "lucide-react";

export default function TermsPage() {
  return (
    <main className="bg-[#05080f] min-h-screen text-gray-300 font-sans selection:bg-amber-500/30">
      <Navbar />
      
      {/* Header */}
      <section className="pt-48 pb-16 relative border-b border-white/10">
        <div className="container mx-auto px-6 relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <div className="flex items-center gap-3 mb-6 text-amber-500">
                    <Gavel size={32} />
                    <span className="text-sm font-bold uppercase tracking-widest border border-amber-500/30 px-3 py-1 rounded-full bg-amber-500/10">User Agreement</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-white font-outfit mb-6">Terms of Service</h1>
                <p className="text-xl text-gray-400 max-w-2xl">
                    The rules of engagement for using Agnos services and platforms. Please read carefully.
                </p>
                <p className="mt-4 text-xs font-mono text-gray-500">Last Updated: January 12, 2026</p>
            </motion.div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-20">
          <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
              
              {/* Navigation */}
              <div className="lg:col-span-3 lg:border-r border-white/10 pr-8 hidden lg:block">
                  <div className="sticky top-32 space-y-4">
                      {["Acceptance", "Intellectual Property", "Limitation of Liability", "Termination", "Governing Law"].map((item, i) => (
                          <div key={item} className={`text-sm font-bold cursor-pointer transition-colors ${i===0 ? "text-amber-500" : "text-gray-500 hover:text-white"}`}>
                              {i+1}.0 {item}
                          </div>
                      ))}
                  </div>
              </div>

              {/* Document Text */}
              <div className="lg:col-span-9 space-y-16">
                  
                  <LegalSection 
                    title="1.0 Acceptance of Terms" 
                    icon={CheckSquare}
                    content="By accessing or using the Agnos website and services, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the service."
                  />
                  
                  <LegalSection 
                    title="2.0 Intellectual Property" 
                    icon={Scale}
                    content="The Service and its original content, features, and functionality are and will remain the exclusive property of Agnos and its licensors. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Agnos."
                  />

                  <LegalSection 
                    title="3.0 Limitation of Liability" 
                    icon={AlertTriangle}
                    content="In no event shall Agnos, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses."
                  />

                  {/* Dispute Resolution */}
                  <div className="p-8 bg-[#0f1219] border border-white/10 rounded-2xl">
                      <h4 className="text-white font-bold mb-2 font-outfit">Dispute Resolution</h4>
                      <p className="text-sm text-gray-400">
                          Any disputes arising out of or related to these Terms shall be governed by and construed in accordance with the laws of Bangladesh, without regard to its conflict of law provisions. You agree to submit to the personal jurisdiction of the courts located in Dhaka.
                      </p>
                  </div>

              </div>
          </div>
      </section>

      <Footer />
    </main>
  );
}

function LegalSection({ title, content, icon: Icon }: { title: string, content: string, icon: any }) {
    return (
        <div>
            <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-amber-500">
                    <Icon size={20} />
                </div>
                <h2 className="text-2xl font-bold text-white font-outfit">{title}</h2>
            </div>
            <div className="pl-14 border-l border-white/10">
                <p className="text-lg leading-relaxed text-gray-400">{content}</p>
            </div>
        </div>
    )
}
