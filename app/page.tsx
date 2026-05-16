import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Narrative from "@/components/sections/Narrative";
import ProblemGrid from "@/components/sections/ProblemGrid";
import SolutionShowcase from "@/components/sections/SolutionShowcase";
import ThreeStepPlan from "@/components/sections/ThreeStepPlan";
import SuccessStories from "@/components/sections/SuccessStories";
import ImpactStats from "@/components/sections/ImpactStats";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-void text-white selection:bg-gold-500/30">
      <Navbar />
      <Hero />
      <Narrative />
      <ProblemGrid />
      <SolutionShowcase />
      <ThreeStepPlan />
      <SuccessStories />
      <ImpactStats />
      <FinalCTA />
      <FAQ />
      <Footer />
    </main>
  );
}
