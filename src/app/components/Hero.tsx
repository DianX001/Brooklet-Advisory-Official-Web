import { ChevronDown } from "lucide-react";
import ConceptMap from "../../imports/concept_map.jpg";
import { motion, useReducedMotion } from "motion/react";
import { useLanguage } from "../LanguageContext";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const { t, lang } = useLanguage();
  const h = t.hero;

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "#1E3428" }}
    >
      {/* Background: concept map image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${ConceptMap})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(2px) brightness(1.05)",
          transform: "scale(1.05)",
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, rgba(18,38,28,0.58) 0%, rgba(26,48,34,0.32) 40%, rgba(18,38,28,0.68) 100%)",
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 58%, rgba(18,38,28,0) 18%, rgba(18,38,28,0.52) 85%)",
        }}
      />

      <div
        className="absolute top-0 right-0 w-2/3 h-2/3 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 80% 10%, rgba(160,210,185,0.08) 0%, transparent 55%)",
          animation: "dapple 8s ease-in-out infinite",
        }}
      />
      <div
        className="absolute bottom-1/3 left-1/4 w-1/2 h-1/2 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 30% 70%, rgba(140,197,173,0.07) 0%, transparent 60%)",
          animation: "dapple 12s ease-in-out infinite reverse",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Pre-heading label */}
        <div className="flex items-center justify-center gap-4 mb-10 mt-10">
          <div className="h-px w-10 bg-[#8EC5AD]/60" />
          <span
            className="text-[#C8EAE0] text-sm tracking-[0.35em] uppercase"
          >{h.label}</span>
          <div className="h-px w-10 bg-[#8EC5AD]/60" />
        </div>

        {/* Main heading */}
        <h1
          className="text-white mb-6"
          style={{
            fontSize: "65px",
            fontWeight: 500,
            lineHeight: 1.08,
            letterSpacing: "-0.01em",
            textShadow: "0 2px 18px rgba(8,18,10,0.8), 0 1px 4px rgba(8,18,10,0.6)",
          }}
        >
          <motion.span
            className="block"
            initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 3.6,
              ease: [0.16, 1, 0.3, 1],
              delay: shouldReduceMotion ? 0 : 1.2
            }}
          >
            {lang === "zh" ? (
              <span dangerouslySetInnerHTML={{ __html: h.line1 }} />
            ) : (
              <>
                Brooklet <span style={{ color: "#7DBFA4", fontWeight: 500 }}>Advisory,</span>
              </>
            )}
          </motion.span>
          <motion.span
            className="block"
            initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 20, scale: shouldReduceMotion ? 1 : 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 3.6,
              ease: [0.16, 1, 0.3, 1],
              delay: shouldReduceMotion ? 0 : 1.8
            }}
          >
            {lang === "zh" ? (
              <span dangerouslySetInnerHTML={{ __html: h.line2 }} style={{ letterSpacing: "0.32em", marginRight: "-0.32em", display: "inline-block" }} />
            ) : (
              <>
                {h.line2}{" "}
                <em style={{ fontStyle: "italic", color: "#7DBFA4", fontWeight: 500 }}>{h.accent}</em>
              </>
            )}
          </motion.span>
        </h1>

        {/* Tagline */}
        <p
          className="text-white/80 mb-14 max-w-lg mx-auto"
          style={{
            fontSize: "0.95rem",
            letterSpacing: "0.03em",
            lineHeight: 1.85,
            textShadow: "0 1px 10px rgba(8,18,10,0.7)",
          }}
        >
          {h.tagline}
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })}
            className={`py-3.5 w-[200px] text-sm cursor-pointer transition-all duration-300 hover:brightness-110 hover:scale-[1.02] flex items-center justify-center ${
              lang === "zh" ? "tracking-[0.4em] pl-[0.4em]" : "tracking-[0.18em]"
            }`}
            style={{
              background: "linear-gradient(135deg, #8EC5AD, #5A9E84)",
              color: "#111C0F",
              border: "none",
            }}
          >
            {h.ctaServices}
          </button>
          <button
            onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
            className={`py-3.5 w-[200px] border border-white/20 text-white/85 text-sm cursor-pointer hover:border-[#8EC5AD]/60 hover:text-[#B4DFD0] transition-all duration-300 flex items-center justify-center ${
              lang === "zh" ? "tracking-[0.4em] pl-[0.4em]" : "tracking-[0.18em]"
            }`}
          >
            {h.ctaLearn}
          </button>
        </div>
      </div>

      <style>{`
        @keyframes dapple {
          0%, 100% { opacity: 1; transform: scale(1) translate(0, 0); }
          50% { opacity: 0.7; transform: scale(1.05) translate(10px, -8px); }
        }
        @keyframes scrollBounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(8px); }
        }
      `}</style>
    </section>
  );
}
