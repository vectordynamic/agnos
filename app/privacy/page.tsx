"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Shield, Lock, Eye, FileText } from "lucide-react";

export default function PrivacyPage() {
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
                    <Shield size={32} />
                    <span className="text-sm font-bold uppercase tracking-widest border border-amber-500/30 px-3 py-1 rounded-full bg-amber-500/10">Legal Compliance</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-white font-outfit mb-6">Privacy Policy</h1>
                <p className="text-xl text-gray-400 max-w-2xl">
                    Transparency is at the core of our business logic. Here is how we treat your data, with zero ambiguity.
                </p>
                <p className="mt-4 text-xs font-mono text-gray-500">Last Updated: January 12, 2026</p>
            </motion.div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-20">
          <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
              
              {/* Navigation / Table of Contents */}
              <div className="lg:col-span-3 lg:border-r border-white/10 pr-8 hidden lg:block">
                  <div className="sticky top-32 space-y-4">
                      {["Data Collection", "Usage Protocols", "Third-Party Sharing", "Your Rights", "Security Measures"].map((item, i) => (
                          <div key={item} className={`text-sm font-bold cursor-pointer transition-colors ${i===0 ? "text-amber-500" : "text-gray-500 hover:text-white"}`}>
                              {i+1}.0 {item}
                          </div>
                      ))}
                  </div>
              </div>

              {/* Document Text */}
              <div className="lg:col-span-9 space-y-16">
                  
                  <LegalSection 
                    title="1.0 Data Collection" 
                    icon={Eye}
                    content="We collect only the navigational information necessary to optimize your experience. This includes IP addresses, browser types, and referral sources. When you use our contact forms, we store the explicitly provided data (Name, Email, Company) in our secure CRM."
                  />
                  
                  <LegalSection 
                    title="2.0 Usage Protocols" 
                    icon={FileText}
                    content="Your data is used exclusively for: (a) Providing the services you requested, (b) Sending administrative notifications, (c) Improving our algorithms. We do not sell, rent, or trade your personal information to disparate third parties for marketing purposes."
                  />

                  <LegalSection 
                    title="3.0 Security Architecture" 
                    icon={Lock}
                    content="We employ enterprise-grade encryption (AES-256) for data at rest and TLS 1.3 for data in transit. Our infrastructure is hosted in ISO 27001 certified data centers with 24/7 biometric monitoring."
                  />

                  {/* Legal Disclaimer Box */}
                  <div className="p-8 bg-amber-500/5 border border-amber-500/20 rounded-2xl">
                      <h4 className="text-white font-bold mb-2 font-outfit">Critical Note on Third Parties</h4>
                      <p className="text-sm text-gray-400">
                          While we audit our partners rigorously, Agnos cannot be held liable for the privacy practices of external sites linked from our domain. We encourage you to read the privacy statements of every website that collects personally identifiable information.
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
