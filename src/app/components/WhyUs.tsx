import { motion, useReducedMotion } from "motion/react";
import { useLanguage } from "../LanguageContext";

export function WhyUs() {
  const shouldReduceMotion = useReducedMotion();
  const { t } = useLanguage();
  const w = t.whyUs;

  return (
    <section id="why-us" className="py-24 md:py-32" style={{ background: "#EDF2EE" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Two-column layout: heading left, grid right */}
        <div className="grid lg:grid-cols-5 gap-16 items-start">

          {/* Left: heading column */}
          <div className="lg:col-span-2 lg:sticky lg:top-32">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-6 bg-[#3E8A72]" />
              <span
                className="text-[#3E8A72] tracking-[0.32em] uppercase text-[14px]"
                style={{ fontFamily: "'Candara', sans-serif" }}
              >
                {w.label}
              </span>
            </div>

            <h2
              className="mb-8"
              style={{
                fontFamily: "'Candara', sans-serif",
                fontSize: "clamp(2rem, 3.8vw, 3rem)",
                fontWeight: 400,
                lineHeight: 1.2,
                color: "#0D1F0E",
              }}
            >
              <motion.span
                className="block"
                initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 2.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {w.h2}{" "}
                <motion.em
                  initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{
                    duration: shouldReduceMotion ? 0 : 2.7,
                    ease: [0.16, 1, 0.3, 1],
                    delay: shouldReduceMotion ? 0 : 0.6
                  }}
                  style={{ fontStyle: "italic", color: "#3E8A72", display: "inline-block" }}
                >{w.h2accent}</motion.em>
              </motion.span>
            </h2>

            <p
              style={{
                fontFamily: "'Candara', sans-serif",
                color: "#2E4A38",
                fontSize: "0.875rem",
                lineHeight: 1.9,
              }}
            >
              {w.body}
            </p>

            {/* Decorative rule */}
            <div className="mt-10 flex items-center gap-4">
              <div className="h-px flex-1" style={{ background: "rgba(62,138,114,0.2)" }} />
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#5A9E84" }} />
              <div className="h-px w-6" style={{ background: "rgba(62,138,114,0.2)" }} />
            </div>

            {/* Stat callout */}
            <div
              className="mt-8 p-6"
              style={{
                background: "linear-gradient(145deg, #1A3028, #1E3428)",
                borderLeft: "2px solid #5A9E84",
              }}
            >
              <div
                style={{
                  fontFamily: "'Candara', sans-serif",
                  fontSize: "2.5rem",
                  fontWeight: 300,
                  color: "#9DCFBC",
                  lineHeight: 1,
                }}
              >
                140+
              </div>
              <div
                className="mt-2"
                style={{
                  fontFamily: "'Candara', sans-serif",
                  color: "rgba(255,255,255,0.45)",
                  fontSize: "0.75rem",
                  lineHeight: 1.7,
                  letterSpacing: "0.04em",
                  whiteSpace: "pre-line",
                }}
              >
                {w.statLabel}
              </div>
            </div>
          </div>

          {/* Right: 2×2 edge cards */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-px" style={{ background: "rgba(62,138,114,0.12)" }}>
            {w.edges.map((edge) => (
              <div
                key={edge.title}
                className="group p-8 transition-all duration-300"
                style={{ background: "#EDF2EE" }}
              >
                <div
                  className="mb-5"
                  style={{
                    fontFamily: "'Candara', sans-serif",
                    color: "rgba(62,138,114,0.75)",
                    fontSize: "13px",
                    letterSpacing: "0.2em",
                  }}
                >
                  {edge.number}
                </div>
                <h3
                  className="mb-3"
                  style={{
                    fontFamily: "'Candara', sans-serif",
                    fontSize: "19px",
                    fontWeight: 500,
                    color: "#0D1F0E",
                    lineHeight: 1.3,
                  }}
                >
                  {edge.title}
                </h3>
                <div
                  className="mb-4 h-px w-8 transition-all duration-300 group-hover:w-16"
                  style={{ background: "#5A9E84" }}
                />
                <p
                  style={{
                    fontFamily: "'Candara', sans-serif",
                    color: "#2E4A38",
                    fontSize: "15px",
                    lineHeight: 1.85,
                    textAlign: "justify",
                    hyphens: "auto",
                  }}
                >
                  {edge.detail}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
