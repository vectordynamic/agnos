"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Share2 } from "lucide-react";
import { blogPageData } from "@/constants";
import { blogContent } from "@/constants/blog-content";

export default function BlogPost() {
  const { slug } = useParams();
  
  // Find post data from constants
  const allPosts = [blogPageData.featuredPost, ...blogPageData.posts];
  const post = allPosts.find(p => p.slug === slug);
  const content = blogContent[slug as string];

  if (!post || !content) {
    return (
      <main className="bg-[#05080f] min-h-screen text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Link href="/blog" className="text-amber-500 hover:underline flex items-center gap-2 justify-center">
            <ArrowLeft size={18} /> Back to Journal
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-[#05080f] min-h-screen text-white font-sans selection:bg-amber-500/30">
      <Navbar />

      {/* Hero Section with Image */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-amber-500 transition-colors mb-12 group">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            Back to Journal
          </Link>
          
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-amber-500 mb-6">
                <span className="bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full">{post.category}</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-outfit leading-[1.1] mb-8">
                {post.title}
              </h1>
              
              <div className="flex items-center gap-6 border-t border-white/10 pt-8 mt-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500 font-bold border border-amber-500/20">
                    {post.author.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white uppercase tracking-widest">
                        {post.author} <span className="mx-2 text-gray-700">•</span> {post.date}
                    </p>
                  </div>
                </div>
                <div className="ml-auto flex gap-4">
                  <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors">
                    <Share2 size={18} className="text-gray-400" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Image */}
      <section className="mb-20">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative w-full h-[400px] md:h-[600px] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl"
          >
            <Image 
              src={post.image || "/placeholder.jpg"} 
              alt={post.title} 
              fill 
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-32">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <article className="prose prose-invert prose-amber max-w-none 
              prose-headings:font-outfit prose-headings:font-bold 
              prose-p:text-gray-300 prose-p:text-lg prose-p:leading-relaxed
              prose-strong:text-white prose-li:text-gray-300">
              {/* Using a simple renderer for markdown-like string */}
              {content.split('\n').map((line, i) => {
                if (line.startsWith('# ')) return <h1 key={i} className="text-4xl font-bold mb-8 mt-12">{line.replace('# ', '')}</h1>;
                if (line.startsWith('### ')) return <h3 key={i} className="text-2xl font-bold mb-4 mt-10">{line.replace('### ', '')}</h3>;
                if (line.startsWith('- ')) return <li key={i} className="ml-6 mb-2 list-disc">{line.replace('- ', '')}</li>;
                if (line.trim() === '') return <br key={i} />;
                return <p key={i} className="mb-6">{line}</p>;
              })}
            </article>


          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
