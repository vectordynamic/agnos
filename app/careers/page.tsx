"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { careersPageData } from "@/constants";

export default function CareersPage() {
    const { hero, benefits, jobs } = careersPageData;

    return (
        <main className="bg-void min-h-screen text-white font-sans selection:bg-amber-500/30">
            <Navbar />

            {/* Hero */}
            <section className="pt-48 pb-24 relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold mb-8 tracking-tight font-outfit"
                    >
                        {hero.title.split(" ").slice(0, 2).join(" ")} <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">{hero.title.split(" ").slice(2).join(" ")}</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
                    >
                        {hero.subtitle}
                    </motion.p>
                </div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.1),transparent_70%)] -z-10 pointer-events-none" />
            </section>

            {/* Benefits */}
            <section className="py-20 bg-white/5 border-y border-white/10">
                <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {benefits.map((benefit) => (
                        <div key={benefit.title}>
                            <h3 className="text-2xl font-bold text-white mb-2">{benefit.title}</h3>
                            <p className="text-sm text-gray-500">{benefit.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Job Listings */}
            <section className="py-20">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-3xl font-bold mb-12 font-outfit text-center">Open Positions</h2>

                    {jobs.length > 0 ? (
                        <div className="space-y-4">
                            {jobs.map((job) => (
                                <div key={job?.title} className="group p-6 rounded-xl bg-[#0f1219] border border-white/5 hover:border-amber-500/50 flex flex-col md:flex-row items-start md:items-center justify-between transition-all cursor-pointer">
                                    <div>
                                        <h3 className="text-xl font-bold text-white group-hover:text-amber-500 transition-colors">{job?.title}</h3>
                                        <p className="text-sm text-gray-400 mt-1">{job?.dept} • {job?.location}</p>
                                    </div>
                                    <div className="mt-4 md:mt-0 px-4 py-2 rounded-full bg-white/5 text-xs font-bold uppercase tracking-wide border border-white/10 group-hover:bg-amber-500 group-hover:text-black transition-colors">
                                        {job?.type}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 px-8 rounded-3xl bg-[#0f1219] border border-white/5 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
                            <p className="text-2xl font-bold text-white mb-4 font-outfit">No Current Openings</p>
                            <p className="text-gray-400 max-w-lg mx-auto leading-relaxed">
                                We aren't actively hiring for new positions at the moment, but we're always looking for elite engineering talent.
                                Follow us on our Journal or social channels to be the first to know when we expand our hub.
                            </p>
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </main>
    );
}
