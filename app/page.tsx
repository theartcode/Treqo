"use client";

import { useEffect } from "react";

import { initPixel, trackLead } from "@/lib/metaPixel";

export const submitLead = async () => {
  const eventId = crypto.randomUUID();

  // Browser Pixel
  trackLead(eventId);

  // Server CAPI
  await fetch("/api/meta-event", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      event_name: "Lead",
      event_id: eventId,
      url: window.location.href
    })
  });
};
import Navbar from "@/components/strategy/Navbar";
import HeroSection from "@/components/strategy/HeroSection";
import WhyTreqo from "@/components/strategy/WhyTreqo";

import { ProgramsSection } from "@/components/strategy/ProgramsSection";
import { FrameworkSection } from "@/components/strategy/FrameworkSection";
import { TrustedBySlider } from "@/components/strategy/TrustedBySlider";

import TacExecutionPipeline from "@/components/strategy/TreqoTutors";
import TermToolsPage from "@/components/strategy/TermToolsSection";

import { ToolStackSection } from "@/components/strategy/ExecutionSection";

import Design2 from "@/components/strategy/Design2";


import Tools from "@/components/strategy/Tools";

import FAQSection from "@/components/strategy/FAQ";
import TacFooterLight from "@/components/strategy/footer";
import { LaptopShowcaseSection } from "@/components/strategy/laptop";
import TutorExperience from "@/components/strategy/TreqoTutors";
import { Selectionprocess } from "@/components/strategy/selectionprocess";

export default function Home() {
  useEffect(() => {
    initPixel();
  }, []);
  return (
    <>
      <Navbar />

      <div id="hero">
        <HeroSection />
      </div>

<div id="why-treqo">
  <WhyTreqo />
</div>


<Selectionprocess/>

<TutorExperience />

<div id="programs">
        <ProgramsSection />
      </div>

      <div id="framework">
        <FrameworkSection />
        <Design2 />
        <LaptopShowcaseSection />
      </div>

      <div id="tools">
        <TermToolsPage />
        {/* <TrustedBySlider /> */}
        <Tools />
        <ToolStackSection />
      </div>

      <div id="faq">
        <FAQSection />
      </div>

      <TacFooterLight />
    </>
  );
}