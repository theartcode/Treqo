"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  BarChart3, Globe, Search, Workflow,
  Target, Mail, MessageSquare, Zap, Sparkles, ArrowUpRight,
  Link2, Image, Bot, ShoppingBag, Layers
} from "lucide-react";

const marketingTools = [
  {
    name: "Google Ecosystem",
    category: "Core Platform",
    icon: <Globe />,
    color: "#4285F4",
    desc: "Master the world's most powerful advertising and analytics ecosystem — from search intent to conversion tracking, all under one roof.",
    level: "Core",
    tags: ["Google Ads", "Google Analytics 4", "Google Tag Manager", "Google Search Console", "Google Merchant Center", "Performance Max"],
  },
  {
    name: "Meta Ecosystem",
    category: "Paid Social",
    icon: <Target />,
    color: "#0082FB",
    desc: "Run full-funnel campaigns across Facebook & Instagram. Earn Meta Blueprint certifications that recruiters and agencies actively seek.",
    level: "Core",
    tags: ["Meta Certified Media Buyer", "Meta Certified Creative Strategy", "Meta Ads Manager", "Blueprint: Lead Gen", "Blueprint: E-Commerce", "Blueprint: Awareness"],
  },
  {
    name: "SEO Ecosystem",
    category: "SEO Strategy",
    icon: <Search />,
    color: "#7C3AED",
    desc: "Rank on Page 1 with a complete SEO command center — from technical audits and keyword research to the emerging frontiers of AEO and GEO.",
    level: "Advanced",
    tags: ["SEMrush", "SE Optimize", "AEO", "GEO", "Google Keyword Planner", "Screaming Frog", "Ahrefs"],
  },
  {
    name: "HubSpot Hub",
    category: "CRM & Inbound",
    icon: <ShoppingBag />,
    color: "#FF7A59",
    desc: "Build, nurture, and close leads with HubSpot's all-in-one CRM. From pipeline management to automated nurture sequences and reporting dashboards.",
    level: "Intermediate",
    tags: ["HubSpot CRM", "Marketing Hub", "Sales Hub", "Email Sequences", "Landing Pages", "Lead Scoring", "HubSpot Academy"],
  },
  {
    name: "Automation Ecosystem",
    category: "Automation",
    icon: <Workflow />,
    color: "#F97316",
    desc: "Eliminate repetitive tasks and build powerful cross-platform workflows without writing a single line of code.",
    level: "Intermediate",
    tags: ["Zapier", "Make (Integromat)", "n8n", "Pabbly Connect", "Webhooks", "API Triggers"],
  },
  {
    name: "Omnichannel Ecosystem",
    category: "Engagement",
    icon: <MessageSquare />,
    color: "#10B981",
    desc: "Reach your audience wherever they are — across WhatsApp, email, SMS, push notifications, and in-app messaging with unified data.",
    level: "Advanced",
    tags: ["WhatsApp Marketing", "Email Marketing", "SMS Campaigns", "Push Notifications", "In-App Messaging", "Klaviyo", "MoEngage"],
  },
  {
    name: "AI in Marketing",
    category: "AI Strategy",
    icon: <Bot />,
    color: "#8B5CF6",
    desc: "Harness the power of AI to write faster, research smarter, and build campaigns that outperform — using the tools shaping the future of marketing.",
    level: "Advanced",
    tags: ["Claude AI", "ChatGPT", "Perplexity AI", "Gemini", "Copy.ai", "Jasper", "AI Prompting"],
  },
  {
    name: "LinkedIn Hub",
    category: "B2B Growth",
    icon: <Link2 />,
    color: "#0A66C2",
    desc: "Turn LinkedIn into your highest-ROI B2B channel — with organic thought leadership, Sales Navigator prospecting, and precision-targeted LinkedIn Ads.",
    level: "Intermediate",
    tags: ["LinkedIn Ads", "Sales Navigator", "Thought Leadership", "Lead Gen Forms", "LinkedIn Analytics", "Personal Branding", "Company Pages"],
  },
  {
    name: "AI Image & Editing",
    category: "Creative AI",
    icon: <Image />,
    color: "#EC4899",
    desc: "Create scroll-stopping visuals, ad creatives, and video content at scale using the latest AI image and editing platforms.",
    level: "Intermediate",
    tags: ["Kling AI", "Grok (Aurora)", "Nano Banana", "Midjourney", "Adobe Firefly", "Canva AI", "RunwayML"],
  },
];

const levelColors: Record<string, { bg: string; text: string; border: string }> = {
  Core: { bg: 'rgba(34,197,94,0.1)', text: '#166534', border: 'rgba(34,197,94,0.2)' },
  Intermediate: { bg: 'rgba(234,179,8,0.1)', text: '#854d0e', border: 'rgba(234,179,8,0.2)' },
  Advanced: { bg: 'rgba(124,58,237,0.1)', text: '#5b21b6', border: 'rgba(124,58,237,0.2)' },
};

export function ToolStackSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section style={{
      position: 'relative',
      background: '#E6D7F3',
      padding: '120px 0',
      overflow: 'hidden',
      fontFamily: "'DM Sans', 'Segoe UI', system-ui, sans-serif",
    }}>

      {/* GRID BACKGROUND */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0, opacity: 0.4 }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }} />
      </div>

      <div style={{ position: 'relative', zIndex: 10, maxWidth: '1300px', margin: '0 auto', padding: '0 5%' }}>

        {/* HEADER */}
        <div style={{ textAlign: 'center', marginBottom: '72px' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'white', border: '1px solid rgba(255,255,255,0.6)',
            borderRadius: '999px', padding: '6px 16px', marginBottom: '24px',
            boxShadow: '0 4px 12px rgba(124,58,237,0.08)'
          }}>
            <Sparkles size={12} color="#7C3AED" />
            <span style={{ fontSize: '10px', fontWeight: 800, color: '#7C3AED', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Curriculum Stack</span>
          </div>

          <h2 style={{ margin: '0 auto 20px', lineHeight: 1.05, letterSpacing: '-0.04em' }}>
            <span style={{
              display: 'block', fontSize: 'clamp(42px, 5.5vw, 72px)', fontWeight: 900,
              background: 'linear-gradient(135deg, #1A0B35 0%, #5829E5 50%, #1A0B35 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
            }}>Master The</span>
            <span style={{
              display: 'block', fontSize: 'clamp(42px, 5.5vw, 72px)', fontWeight: 900,
              color: '#0F172A', fontStyle: 'italic'
            }}>Marketing System.</span>
          </h2>

          <p style={{ maxWidth: '480px', fontSize: '16px', color: '#475569', fontWeight: 500, lineHeight: 1.7, margin: '0 auto' }}>
            Master the exact professional toolkit used by global growth operators to architect high-performance digital campaigns.
          </p>
        </div>

        {/* GRID */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          {marketingTools.map((tool, i) => {
            const isHov = hovered === i;
            const lvl = levelColors[tool.level];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  position: 'relative',
                  borderRadius: '28px',
                  background: isHov ? 'white' : 'rgba(255,255,255,0.4)',
                  border: `1px solid ${isHov ? 'white' : 'rgba(255,255,255,0.6)'}`,
                  padding: '32px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '300px',
                  transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
                  transform: isHov ? 'translateY(-8px)' : 'none',
                  boxShadow: isHov ? '0 30px 60px rgba(124,58,237,0.15)' : '0 4px 12px rgba(0,0,0,0.02)',
                  cursor: 'default',
                  overflow: 'hidden',
                  backdropFilter: 'blur(8px)'
                }}
              >
                {/* Top row: icon + arrow */}
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                  <div style={{
                    width: '52px', height: '52px', borderRadius: '16px',
                    background: isHov ? tool.color : 'white',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'all 0.3s',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
                  }}>
                    {React.cloneElement(tool.icon as React.ReactElement<any>, {
                      size: 24,
                      color: isHov ? 'white' : tool.color,
                    })}
                  </div>
                  <ArrowUpRight size={18} color={isHov ? tool.color : '#94A3B8'} />
                </div>

                {/* Title + desc */}
                <div style={{ marginTop: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <span style={{ fontSize: '9px', fontWeight: 800, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.15em' }}>{tool.category}</span>
                    <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: lvl.text }} />
                    <span style={{ fontSize: '9px', fontWeight: 800, color: lvl.text, textTransform: 'uppercase' }}>{tool.level}</span>
                  </div>
                  <h4 style={{ margin: 0, fontSize: '22px', fontWeight: 900, color: '#0F172A', letterSpacing: '-0.02em' }}>{tool.name}</h4>
                  <p style={{
                    margin: '10px 0 0', fontSize: '13px',
                    color: '#475569',
                    lineHeight: 1.6,
                    opacity: isHov ? 1 : 0.7,
                    transition: 'opacity 0.3s ease',
                  }}>{tool.desc}</p>
                </div>

                {/* Glossy tag pills — always visible, glow on hover */}
                <div style={{
                  display: 'flex', flexWrap: 'wrap', gap: '7px', marginTop: '20px',
                }}>
                  {tool.tags.map((tag, t) => (
                    <span key={t} style={{
                      fontSize: '10px',
                      fontWeight: 800,
                      letterSpacing: '0.03em',
                      color: isHov ? tool.color : '#334155',
                      background: isHov
                        ? `linear-gradient(135deg, ${tool.color}18 0%, ${tool.color}08 100%)`
                        : 'rgba(255,255,255,0.75)',
                      border: `1px solid ${isHov ? tool.color + '40' : 'rgba(255,255,255,0.9)'}`,
                      borderRadius: '999px',
                      padding: '5px 11px',
                      backdropFilter: 'blur(6px)',
                      boxShadow: isHov
                        ? `0 2px 8px ${tool.color}22, inset 0 1px 0 rgba(255,255,255,0.6)`
                        : '0 1px 4px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.9)',
                      transition: 'all 0.3s cubic-bezier(0.23,1,0.32,1)',
                      whiteSpace: 'nowrap',
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* BOTTOM STRIP */}
        <div style={{
          marginTop: '64px',
          padding: '24px 40px',
          borderRadius: '24px',
          background: 'white',
          border: '1px solid rgba(255,255,255,0.8)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: '20px',
          boxShadow: '0 10px 30px rgba(124,58,237,0.05)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#22C55E', boxShadow: '0 0 12px #22C55E' }} />
            <span style={{ fontSize: '14px', fontWeight: 700, color: '#1E293B' }}>
              Enterprise standard tools included in your fee. Full access provided.
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '11px', fontWeight: 800, color: '#7C3AED', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Industry Certified Stack</span>
            <Zap size={18} color="#EAB308" fill="#EAB308" />
          </div>
        </div>
      </div>
    </section>
  );
}
