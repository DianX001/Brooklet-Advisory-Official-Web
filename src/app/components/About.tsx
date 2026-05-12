import { motion, useReducedMotion } from "motion/react";

const stats = [
  { value: "140+", label: "Institutional Clients" },
  { value: "25+", label: "Years in Financial Industry" },
  { value: "4", label: "Regulatory Frameworks\n(SFC · HKEX · MAS · AMCM)" },
  { value: "3", label: "Markets\n(Hong Kong, Macao, Mainland)" },
];

export function About() {
  const shouldReduceMotion = useReducedMotion();
  
  return (
    <section id="about" className="py-24 md:py-32" style={{ background: "#EDF2EE" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Stats — left column on desktop, below text on mobile */}
          <div className="order-2 lg:order-1 grid grid-cols-2 gap-5 lg:self-center">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="pl-4"
                style={{ borderLeft: "2px solid rgba(62,138,114,0.45)" }}
              >
                <div
                  style={{
                    fontFamily: "'Candara', sans-serif",
                    fontSize: "36px",
                    fontWeight: 400,
                    color: "#0C1810",
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </div>
                <div
                  className="mt-1"
                  style={{
                    fontFamily: "'Candara', sans-serif",
                    fontSize: "14px",
                    color: "#4A6552",
                    letterSpacing: "0.04em",
                    lineHeight: 1.5,
                    whiteSpace: "pre-line",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Content — right column on desktop, top on mobile */}
          <div className="order-1 lg:order-2">
            {/* Section label */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-6 bg-[#3E8A72]" />
              <span
                className="text-[#3E8A72] tracking-[0.32em] uppercase text-[13px]"
                style={{ fontFamily: "'Candara', sans-serif" }}
              >
                About Brooklet
              </span>
            </div>

            <h2
              className="mb-6"
              style={{
                fontFamily: "'Candara', sans-serif",
                fontSize: "clamp(2rem, 3.8vw, 3rem)",
                fontWeight: 400,
                lineHeight: 1.2,
                color: "#0C1810",
              }}
            >
              <motion.span
                className="block"
                initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.9,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                Regulatory Expertise,
              </motion.span>
              <motion.em
                className="block"
                initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.9,
                  ease: [0.16, 1, 0.3, 1],
                  delay: shouldReduceMotion ? 0 : 0.2
                }}
                style={{ fontStyle: "italic", color: "#3E8A72" }}
              >
                Commercially Sound.
              </motion.em>
            </h2>

            <p
              className="mb-5"
              style={{
                fontFamily: "'Candara', sans-serif",
                color: "#2E4A38",
                lineHeight: 1.9,
                fontSize: "15px",
              }}
            >
              Brooklet Advisory is a specialist consulting firm providing expert guidance on
              Hong Kong's regulatory landscape. Founded by industry professionals who combine
              decades of in-house experience at global investment banks, brokerages, asset
              management firms, and the Hong Kong Exchanges with strong legal and compliance
              credentials.
            </p>

            <p
              className="mb-10"
              style={{
                fontFamily: "'Candara', sans-serif",
                color: "#2E4A38",
                lineHeight: 1.9,
                fontSize: "15px",
              }}
            > Our practical approach helps clients navigate licensing, manage ongoing compliance obligations, and confidently handle regulatory scrutiny — delivering solutions that are both compliant and commercially sound.</p>
          </div>

        </div>
      </div>
    </section>
  );
}