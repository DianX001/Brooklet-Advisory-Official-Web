import { FileCheck, ShieldCheck, Search, Lightbulb } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const services = [
  {
    icon: FileCheck,
    number: "01",
    title: "Licensing & Registration",
    tagline: "Market Entry & Authorisation",
    description:
      "End-to-end guidance through every stage of the application and approval process, from initial scoping to final authorisation.",
    bullets: [
      "SFC licence applications (Types 1–10)",
      "SFC Virtual Asset (VA) licensing & uplifts",
      "HKEX (SEHK & HKFE) Exchange Participantship",
      "HKEX China Connect (CCEP / TTEP) registration",
      "HKEX Market Maker Permit applications",
    ],
  },
  {
    icon: ShieldCheck,
    number: "02",
    title: "Ongoing Compliance Advisory",
    tagline: "Compliance Outsourcing",
    description:
      "Acting as your trusted, outsourced compliance partner — embedded in your operations, covering both SFC and HKEX obligations.",
    bullets: [
      "AML/CFT frameworks & KYC / investor suitability",
      "Cross-border fundraising & product distribution rules",
      "Pre-trade & post-trade controls, error trade advisory",
      "AI Governance policies and procedures",
      "BCAN generation & Northbound Investor ID Model",
    ],
  },
  {
    icon: Search,
    number: "03",
    title: "Regulatory Inspection Support",
    tagline: "Regulatory Defense & Crisis Management",
    description:
      "Preparing you for and guiding you through regulatory scrutiny — from proactive readiness to real-time inspection support.",
    bullets: [
      "SFC & HKEX on-site inspection readiness",
      "Mock regulatory audits & gap analyses",
      "Thematic review preparation",
      "Assistance with formal regulatory inquiries",
      "Incident remediation planning",
    ],
  },
  {
    icon: Lightbulb,
    number: "04",
    title: "Specialised Advisory",
    tagline: "Project Support & Training",
    description:
      "Targeted expertise for critical business events, policy needs, and capability building across your compliance function.",
    bullets: [
      "CPT-eligible compliance training for staff",
      "Compliance Manuals, PA Dealing & BCP drafting",
      "Incident response & remediation guidance",
      "M&A support for SFC licensed corporations",
      "Fund lifecycle compliance",
    ],
  },
];

const DARK_BG = "#1E3428";

export function Services() {
  const shouldReduceMotion = useReducedMotion();
  
  return (
    <section id="services" className="py-24 md:py-32" style={{ background: DARK_BG }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-10 bg-[#7DBFA4]/25" />
            <span
              className="text-[#7DBFA4]/65 tracking-[0.32em] uppercase text-[14px]"
              style={{ fontFamily: "'Candara', sans-serif" }}
            >
              What We Do
            </span>
            <div className="h-px w-10 bg-[#7DBFA4]/25" />
          </div>
          <motion.h2
            className="text-white"
            style={{
              fontFamily: "'Candara', sans-serif",
              fontSize: "clamp(2rem, 3.8vw, 3rem)",
              fontWeight: 300,
              lineHeight: 1.2,
            }}
            initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            Our Services
          </motion.h2>
          <p
            className="mt-4 max-w-lg mx-auto"
            style={{
              fontFamily: "'Candara', sans-serif",
              color: "rgba(255,255,255,0.4)",
              fontSize: "15px",
              lineHeight: 1.85,
            }}
          >
            End-to-end support across the full business lifecycle, from market entry
            to ongoing compliance and regulatory defense.
          </p>
        </div>

        {/* Services Grid — 2×2 */}
        <div className="grid md:grid-cols-2 gap-px" style={{ background: "rgba(255,255,255,0.04)" }}>
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group p-8 md:p-10 transition-all duration-500 cursor-default relative overflow-hidden"
                style={{ background: DARK_BG }}
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: "radial-gradient(ellipse at 50% 0%, rgba(125,191,164,0.08) 0%, transparent 70%)",
                  }}
                />
                {/* Top accent hairline */}
                <div
                  className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "linear-gradient(90deg, transparent 10%, #5A9E84 50%, transparent 90%)" }}
                />

                <div className="relative z-10">
                  {/* Number + Icon row */}
                  <div className="flex items-start justify-between mb-7">
                    
                    <span
                      style={{
                        display: "none",
                      }}
                    >
                      {service.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-white mb-1"
                    style={{
                      fontFamily: "'Candara', sans-serif",
                      fontSize: "25px",
                      fontWeight: 400,
                      letterSpacing: "0.01em",
                    }}
                  >
                    {service.title}
                  </h3>
                  <div
                    className="mb-4"
                    style={{
                      fontFamily: "'Candara', sans-serif",
                      color: "#7DBFA4",
                      fontSize: "14px",
                      letterSpacing: "0.14em",
                    }}
                  >
                    {service.tagline.toUpperCase()}
                  </div>

                  

                  {/* Bullet points */}
                  <ul className="space-y-2">
                    {service.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5">
                        <div
                          className="flex-shrink-0 w-1 h-1 rounded-full mt-2"
                          style={{ background: "#5A9E84" }}
                        />
                        <span
                          style={{
                            fontFamily: "'Candara', sans-serif",
                            color: "rgba(255,255,255,0.35)",
                            fontSize: "15px",
                            lineHeight: 1.7,
                          }}
                        >
                          {b}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}