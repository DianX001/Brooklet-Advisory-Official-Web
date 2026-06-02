import { FileCheck, ShieldCheck, Search, Lightbulb } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useLanguage } from "../LanguageContext";

const icons = [FileCheck, ShieldCheck, Search, Lightbulb];

const DARK_BG = "#1E3428";

export function Services() {
  const shouldReduceMotion = useReducedMotion();
  const { t } = useLanguage();
  const s = t.services;

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
              {s.label}
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
              duration: shouldReduceMotion ? 0 : 2.7,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {s.h2}
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
            {s.subtitle}
          </p>
        </div>

        {/* Services Grid — 2×2 */}
        <div className="grid md:grid-cols-2 gap-px" style={{ background: "rgba(255,255,255,0.04)" }}>
          {s.items.map((service, idx) => {
            const Icon = icons[idx];
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
                    <span style={{ display: "none" }}>{service.number}</span>
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
