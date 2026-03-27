import Navbar from "@/components/strategy/Navbar";
import HeroSection from "@/components/strategy/HeroSection";
import WhyTreqo from "@/components/strategy/WhyTreqo";

import { ProgramsSection } from "@/components/strategy/ProgramsSection";
import { FrameworkSection } from "@/components/strategy/FrameworkSection";
import { TrustedBySlider } from "@/components/strategy/TrustedBySlider";

//import CaseStudiesSection from "@/components/strategy/CaseStudiesSection";
//import Case2StudiesSection from "@/components/strategy/casestudy2";

import TacExecutionPipeline from "@/components/strategy/TreqoTutors";
import TermToolsPage from "@/components/strategy/TermToolsSection";

import { ToolStackSection } from "@/components/strategy/ExecutionSection";
//import MarketingGrowthEngine from "@/components/strategy/Digital";

import Design2 from "@/components/strategy/Design2";
//import DigitalMarketingFuture from "@/components/strategy/why";

//import Tacsuite from "@/components/strategy/TACsuite";
//import FriendlyKnowledgeHub from "@/components/strategy/Courses";
import Tools from "@/components/strategy/Tools";

import Testimonials from "@/components/strategy/Testimonials";
import FAQSection from "@/components/strategy/FAQ";
import TacFooterLight from "@/components/strategy/footer";
import { LaptopShowcaseSection } from "@/components/strategy/laptop";

export default function Home() {
  return (
    <>
      <Navbar />

      <HeroSection />

      <WhyTreqo />

      <ProgramsSection />

      <FrameworkSection />

      <Design2 />
      <LaptopShowcaseSection />

      <TermToolsPage />

      <TrustedBySlider />

      <Tools />
      <ToolStackSection />








      {/* <Testimonials /> */}

      <FAQSection />

      <TacFooterLight />
    </>
  );
}