"use client";

import { useState } from "react";
import { Selectionprocess } from "@/components/strategy/selectionprocess";
import TutorExperience from "@/components/strategy/TreqoTutors";
import { FrameworkSection } from "@/components/strategy/FrameworkSection";
import TermToolsPage from "@/components/strategy/TermToolsSection";

const TABS = [
  { id: "selection", label: "Selection Process" },
  { id: "tutors", label: "Tutor Experience" },
  { id: "framework", label: "Framework" },
  { id: "curriculum", label: "Curriculum" },
];

export default function StrategyTabs() {
  const [active, setActive] = useState("selection");

  return (
    <section className="w-full bg-[#0a0a0a]">
      {/* Tab bar */}
      <div className="sticky top-0 z-30 w-full bg-[#0a0a0a]/95 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:flex sm:flex-row gap-2 py-3">
            {TABS.map((tab) => {
              const isActive = active === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActive(tab.id)}
                  className={`
                    w-full sm:flex-1 px-3 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium
                    transition-all duration-200 text-center
                    ${
                      isActive
                        ? "bg-violet-600 text-white shadow-lg shadow-violet-600/30"
                        : "text-gray-400 hover:text-white hover:bg-white/10 border border-white/10"
                    }
                  `}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Tab panels */}
      <div className="w-full">
        {active === "selection" && <Selectionprocess />}
        {active === "tutors" && <TutorExperience />}
        {active === "framework" && <FrameworkSection />}
        {active === "curriculum" && <TermToolsPage />}
      </div>
    </section>
  );
}
