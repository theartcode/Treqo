"use client";

import React, { useState } from "react";
import { Plus, Minus, Sparkles, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = {
  "About Treqo": [
    {
      q: "What is Treqo and who runs it?",
      a: "Treqo is the flagship EdTech programme brand of TAC School of Modern Learning Private Limited, headquartered in Madhapur, Hyderabad. TAC stands for The Art Code — and Treqo is how that vision reaches students: a hands-on, founder-level marketing programme designed to produce marketers that companies actually want to hire. The programme is online and offline campus-based, built around one core idea: real work, real brands, real results."
    },
    {
      q: "What makes Treqo different from a typical digital marketing institute?",
      a: "Most institutes teach tools. Treqo teaches thinking. Traditional institutes produce 'digital marketers' who can run ads — Treqo produces marketers, strategists, and growth specialists who understand why a business grows and can make it happen. The curriculum is built around the CEO Challenge framework using real-world problems, not mock assignments. Every module maps to an actual Indian industry and company (16 industries covered). Students graduate with 30+ projects across real and simulated businesses."
    },
    {
      q: "Where is Treqo located? Is it online or offline?",
      a: "Treqo operates as an offline campus programme based in Madhapur, Hyderabad — the heart of Hyderabad's tech and startup ecosystem. The offline format is intentional: real peer pressure, real collaboration, and real accountability produce better marketers than solo video-watching. Contact: support@theartcode.org"
    },
  ],
  "Programme & Syllabus": [
    {
      q: "How long is the programme and what does it cover?",
      a: "The programme runs for 6 months, offline, in Madhapur, Hyderabad. It is structured across 12 phases and 15 modules: Phase 1–3 cover marketing clarity, customer thinking, and funnel logic. Phase 4–5 handle idea validation and 0-to-1 execution. Phase 6 covers brand strategy. Phase 7A–7D are deep dives into SEO, Google Ads, Meta Ads, and WhatsApp/Email. Phase 8–12 cover content, performance media, revenue operations, analytics, automation, AI-driven scale, and brand leadership. The learning split is 30–40% classroom strategy and 60–70% real-world execution."
    },
    {
      q: "What is the CEO Challenge?",
      a: "The CEO Challenge is the backbone of Treqo's out-of-class learning — not a homework assignment but a business simulation that runs every module. The core rule: 'One real problem. One instant solution. Timing + insight + action.' Each challenge pushes students through a real business scenario — defining problems, validating markets, designing offers, launching GTMs, and measuring revenue. By graduation, students complete 12+ CEO Challenges across different industries."
    },
    {
      q: "What industries and companies does the programme cover?",
      a: "Every module uses a different industry as the case study so students develop cross-industry fluency. The 16 industries covered include: Luxury/Jewelry (Tanishq), Healthcare (Apollo 24|7), Travel (MakeMyTrip), EV/Auto (Ola Electric), Gaming (Dream11), FMCG (Amul), Telecom (Airtel), InsurTech (Policybazaar), Home Services (Urban Company), Food Delivery (Zomato), Fitness (Cult.fit), Fintech (Zerodha), Global Sports (Nike India), Hospitality (OYO), Music/OTT (Spotify India), and F&B Retail (Starbucks India)."
    },
    {
      q: "What is the three-tier project framework?",
      a: "Every phase includes three types of projects. Project 1 — Replica Project: Recreate a strategy for a top company using simulated data. Project 2 — Independent Project: Apply the same framework to any brand of the student's choice globally. Project 3 — Live Business Project: Work on a real local business with actual data, real customers, and measurable outcomes. By graduation, students hold a portfolio of 30+ projects spanning 16+ industries."
    },
    {
      q: "What tools and platforms will students learn?",
      a: "Ads & PPC: Google Ads (Search, Display, YouTube, PMAX, Shopping), Meta Ads Manager, Amazon Ads/DSP. SEO: Ahrefs, SEMrush, Screaming Frog, SurferSEO, Google Search Console. Analytics: GA4, GTM, Looker Studio, Excel/Sheets pivot tables. CRM & Automation: HubSpot, Zoho CRM, WATI/AiSensy (WhatsApp), Mailchimp/Brevo, Zapier/Make. Design & AI: Canva AI, Leonardo AI, Midjourney, DALL-E 3. AI Suite: ChatGPT, Claude, Perplexity AI. E-commerce: Amazon Seller Central, Flipkart Seller Hub, Unicommerce."
    },
    {
      q: "Is there a gate or checkpoint in the programme?",
      a: "Yes. Phase 4 is a mandatory gate. Students cannot progress to the execution phases without passing Phase 4's CEO Gate Challenge. Students must submit: a validated problem statement, identified target customer with pain frequency and urgency data, evidence that existing solutions fail this customer, and a 'would a real company work on this?' judgement. This gate exists because the rest of the programme builds on real ideas — weak foundations produce weak marketers."
    },
  ],
  "Jobs & Career": [
    {
      q: "What kind of roles do Treqo graduates get placed into?",
      a: "Treqo graduates are positioned for premium roles: Performance Marketing Manager (runs paid media across Google, Meta, Amazon at scale), Growth Marketer/Manager (owns acquisition, conversion, and retention end-to-end), Brand Strategist (builds brand positioning and go-to-market plans), Marketing Analyst (GA4, attribution, cohort analysis, unit economics), Content Strategist (uses content as a revenue engine), and D2C/Marketplace Specialist (high-paying skill set across Amazon, Flipkart, Blinkit, Zepto)."
    },
    {
      q: "Which companies are Treqo graduates targeted at?",
      a: "Quick Commerce & Food: Zepto, Blinkit, Swiggy, Zomato. Fintech & BFSI: Razorpay, CRED, PhonePe, Zerodha, Groww, Policybazaar. E-commerce & D2C: Myntra, Meesho, Nykaa, boAt, Mamaearth, Lenskart. OTT & Entertainment: Netflix India, Spotify India, Disney+ Hotstar. SaaS & B2B Tech: Freshworks, Zoho, WebEngage, CleverTap. Healthcare & EV: Apollo 24|7, Ola Electric, Ather, Tata Motors. Global Tech: Google, Meta, Amazon, Microsoft. Agencies: Dentsu, GroupM, Publicis, Ogilvy, Performics."
    },
    {
      q: "How is Treqo's placement different from the '100% guarantee' you hear everywhere?",
      a: "Treqo has a 100% placement track record — but the language matters. Placement support is provided on a best-effort basis; the institute does not guarantee a specific package or employer. What Treqo guarantees is preparing students so well that companies want to hire them. Under Plan A, TAC has a literal financial stake in your placement — they earn 15% of your first CTC, so their incentive to place you well is perfectly aligned with yours."
    },
    {
      q: "What if a student wants to freelance or start their own business?",
      a: "The programme is equally suited for this path. Phase 5 (Idea to Market) and the CEO Challenge framework are literally built around launching and validating real businesses. By the end of the programme, students will have validated at least one real offer in the market, built a working GTM plan with a real local business, learned pricing logic, unit economics, CAC/LTV, and revenue operations, and mastered tools like Meta Ads, Google Ads, and WhatsApp automation — all billable freelance skills."
    },
    {
      q: "What certifications can students earn alongside the programme?",
      a: "Students can earn 20+ industry certifications. Free via Google Skillshop: Search, Display, Video, Shopping, PMAX, GA4 certifications. Free via HubSpot Academy: Inbound, Content, Email, Social Media, SEO, Digital Marketing. Free via SEMrush Academy: SEO, PPC, Content Marketing, Social Media. Free + Internationally Accredited: Google Fundamentals of Digital Marketing (co-recognized by IAB Europe and The Open University UK). Paid (Optional): Meta Blueprint certifications ($99–$150) for students targeting agency and Meta Ads roles."
    },
  ],
};

export default function FAQSection() {
  const [activeTab, setActiveTab] = useState("About Treqo");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section style={{
      background: "white",
      padding: "72px 5%",
      fontFamily: "'DM Sans','Segoe UI',system-ui,sans-serif",
      color: "#0F172A",
      width: "100%",
      boxSizing: "border-box",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%" }}>

        {/* HEADER */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 7,
            background: "#F5F3FF", border: "1px solid #EDE9FE",
            borderRadius: 999, padding: "5px 14px", marginBottom: 16,
          }}>
            <Sparkles size={12} color="#7C3AED" />
            <span style={{ fontSize: 10, fontWeight: 800, color: "#7C3AED", letterSpacing: "0.2em", textTransform: "uppercase" }}>
              Support Center
            </span>
          </div>
          <h2 style={{ margin: 0, lineHeight: 1.05 }}>
            <span style={{ display: "inline", fontSize: "clamp(28px, 3.5vw, 46px)", fontWeight: 900, color: "#0F172A", letterSpacing: "-0.03em" }}>
              Frequently Asked{" "}
            </span>
            <span style={{ display: "inline", fontSize: "clamp(28px, 3.5vw, 46px)", fontWeight: 900, fontStyle: "italic", color: "#7C3AED", letterSpacing: "-0.03em" }}>
              Questions
            </span>
          </h2>
        </div>

        {/* MAIN LAYOUT — fixed height container, this NEVER changes */}
        <div style={{
          height: "560px",           // ← THE KEY: fixed height on outer wrapper
          overflow: "hidden",        // ← clips everything inside
          display: "grid",
          gridTemplateColumns: "220px 1fr",
          gap: 28,
          alignItems: "start",
        }} className="faq-layout">

          {/* LEFT TABS */}
          <div className="faq-tabs" style={{
            display: "flex", flexDirection: "column", gap: 4,
            background: "#F8F7FF", border: "1px solid #EDE9FE",
            borderRadius: 20, padding: 8,
          }}>
            {Object.keys(faqData).map(tab => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => { setActiveTab(tab); setOpenIndex(null); }}
                  style={{
                    textAlign: "left", padding: "10px 14px", borderRadius: 12,
                    fontSize: 12, fontWeight: 700, border: "none", cursor: "pointer",
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    transition: "all 0.25s cubic-bezier(0.16,1,0.3,1)",
                    background: isActive ? "#5829E5" : "transparent",
                    color: isActive ? "white" : "#64748B",
                    transform: isActive ? "translateX(2px)" : "none",
                    boxShadow: isActive ? "0 4px 14px rgba(88,41,229,0.25)" : "none",
                  }}
                >
                  {tab}
                  <HelpCircle size={12} style={{ opacity: isActive ? 1 : 0 }} />
                </button>
              );
            })}
          </div>

          {/* RIGHT PANEL — scrolls inside, never pushes layout */}
          <div style={{
            height: "560px",         // ← same fixed height
            overflowY: "auto",
            overflowX: "hidden",
            position: "relative",
          }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.22 }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  paddingRight: 6,
                  paddingBottom: 8,
                }}
                className="faq-panel"
              >
                {faqData[activeTab as keyof typeof faqData].map((item, idx) => (
                  <AccordionItem
                    key={`${activeTab}-${idx}`}
                    question={item.q}
                    answer={item.a}
                    isOpen={openIndex === idx}
                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>

      <style>{`
        div::-webkit-scrollbar { width: 3px; }
        div::-webkit-scrollbar-thumb { background: #DDD6FE; border-radius: 99px; }

        @media (max-width: 900px) {
          .faq-layout {
            grid-template-columns: 180px 1fr !important;
            gap: 18px !important;
          }
        }

        @media (max-width: 640px) {
          .faq-layout {
            height: auto !important;
            overflow: visible !important;
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
          .faq-tabs {
            flex-direction: row !important;
            flex-wrap: wrap !important;
            position: static !important;
            padding: 6px !important;
            gap: 6px !important;
          }
          .faq-tabs > button {
            flex: 1 1 auto !important;
            text-align: center !important;
            justify-content: center !important;
            font-size: 11px !important;
            padding: 8px 10px !important;
          }
          .faq-panel {
            height: auto !important;
            overflow-y: visible !important;
          }
        }
      `}</style>
    </section>
  );
}

function AccordionItem({ question, answer, isOpen, onClick }: {
  question: string; answer: string; isOpen: boolean; onClick: () => void;
}) {
  return (
    <div style={{
      borderRadius: 16,
      overflow: "hidden",
      border: isOpen ? "1px solid #DDD6FE" : "1px solid #F1F5F9",
      background: isOpen ? "#FDFCFF" : "white",
      boxShadow: isOpen ? "0 4px 20px rgba(88,41,229,0.07)" : "0 1px 4px rgba(0,0,0,0.03)",
      transition: "all 0.3s ease",
      flexShrink: 0,
    }}>
      <button
        onClick={onClick}
        style={{
          width: "100%", display: "flex", alignItems: "center",
          justifyContent: "space-between", gap: 16,
          padding: "16px 20px", textAlign: "left",
          background: "transparent", border: "none", cursor: "pointer",
        }}
      >
        <span style={{ fontSize: 14, fontWeight: 700, color: "#0F172A", lineHeight: 1.4, flex: 1 }}>
          {question}
        </span>
        <div style={{
          width: 28, height: 28, borderRadius: "50%", flexShrink: 0,
          display: "flex", alignItems: "center", justifyContent: "center",
          background: isOpen ? "#5829E5" : "#F1F5F9",
          color: isOpen ? "white" : "#94A3B8",
          transition: "all 0.3s ease",
        }}>
          {isOpen ? <Minus size={14} /> : <Plus size={14} />}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <p style={{
              margin: 0, padding: "0 20px 18px",
              fontSize: 13, color: "#475569", lineHeight: 1.75, fontWeight: 500,
            }}>
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}