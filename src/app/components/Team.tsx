import { useState, useEffect } from "react";
import ThomasImg from "../../imports/TU.jpg";
import BenImg from "../../imports/BL.png";
import { motion, useReducedMotion } from "motion/react";

const team = [
  {
    name: "Thomas Uruma",
    role: "Director",
    image: ThomasImg,
    photoScale: 1.15,
    yearsValue: "25+",
    yearsLabel: "YEARS OF INDUSTRY EXPERIENCE",
    expertise: ["Brokerage", "Private Banking", "Commercial-to-Compliance"],
    languages: "English · Japanese · Cantonese · Putonghua",
    bio: [
      "Thomas has over 25 years of experience in both front-office and compliance roles. He began his career in sales and trading within private banking before moving to senior brokerage positions at OKASAN International, CITIC Securities, and HSBC.",
      "This front-office background provides him with a practical understanding of business pressures. He later transitioned to compliance, and as Regional Head of Client Services at a leading consultancy, he managed a portfolio of over 140 clients, from global investment banks to specialist asset managers. His experience allows him to deliver compliant and commercially astute solutions.",
      "Thomas holds a Master of Arts in Economics from Soka University and is fluent in English, Japanese, Cantonese, and Putonghua.",
    ],
  },
  {
    name: "Ben Li",
    role: "Director",
    image: BenImg,
    photoScale: 1.1,
    yearsValue: "12+",
    yearsLabel: "YEARS IN LEGAL & COMPLIANCE",
    expertise: ["Asset Management", "AML/CFT", "Regulatory Enforcement"],
    languages: "English · Putonghua",
    bio: [
      "Ben is a legal and compliance professional with over 12 years of experience across multiple jurisdictions, including Singapore, Hong Kong, China and Macao. His career has focused on designing and implementing compliance frameworks for asset managers, brokers, and innovative fintech platforms.",
      "As a former enforcement agent at HKEX, Ben conducted on-site inspections of brokerage firms, providing him with first-hand knowledge of how regulators assess compliance with trading and clearing rules.",
      "Most recently, Ben served as the Manager-in-Charge of Compliance for the Micro Connect Group. In this role, he built the alternative fund compliance framework and the AML/CFT architecture for the Micro Connect (Macao) Financial Assets Exchange from the ground up.",
      "Ben is a CFA charterholder, holds a Master of Laws (Chinese Law) from the University of Hong Kong, and is fluent in English and Putonghua.",
    ],
  },
];

const DARK_BG = "#1E3428";

type TeamMember = typeof team[number];

function BioModal({
  member,
  onClose,
}: {
  member: TeamMember;
  onClose: () => void;
}) {
  const [visible, setVisible] = useState(false);

  // Fade in on mount
  useEffect(() => {
    const t = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(t);
  }, []);

  // Fade out then call onClose
  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 260);
  };

  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  // Prevent body scroll while modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      style={{
        background: "rgba(8,16,10,0.78)",
        transition: "opacity 0.26s ease",
        opacity: visible ? 1 : 0,
      }}
      onClick={handleClose}
    >
      {/* Modal panel */}
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto flex flex-col md:flex-row"
        style={{
          background: "linear-gradient(145deg, #162B22, #1E3428)",
          border: "1px solid rgba(125,191,164,0.14)",
          transition: "opacity 0.26s ease, transform 0.26s ease",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(18px)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 z-10 flex items-center justify-center w-8 h-8 cursor-pointer"
          style={{
            background: "rgba(125,191,164,0.08)",
            border: "1px solid rgba(125,191,164,0.22)",
            color: "rgba(255,255,255,0.6)",
            fontFamily: "'Candara', sans-serif",
            fontSize: "18px",
            lineHeight: 1,
            transition: "background 0.2s, color 0.2s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = "rgba(125,191,164,0.18)";
            (e.currentTarget as HTMLButtonElement).style.color = "#fff";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = "rgba(125,191,164,0.08)";
            (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.6)";
          }}
          aria-label="Close"
        >
          ×
        </button>

        {/* Left — photo */}
        <div
          className="flex-shrink-0 overflow-hidden"
          style={{ width: "260px", minHeight: "360px", background: "#162B22" }}
        >
          <img
            src={member.image}
            alt={`${member.name}, ${member.role} at Brooklet Advisory`}
            className="w-full h-full object-cover"
            style={{
              objectPosition: "top",
              transform: `scale(${member.photoScale})`,
              transformOrigin: "top center",
              minHeight: "360px",
            }}
          />
        </div>

        {/* Right — bio content */}
        <div className="flex-1 p-8 md:p-10 flex flex-col justify-start">
          {/* Name & role */}
          <div className="mb-6">
            <h3
              className="text-white mb-2"
              style={{
                fontFamily: "'Candara', sans-serif",
                fontSize: "28px",
                fontWeight: 400,
                lineHeight: 1.15,
              }}
            >
              {member.name}
            </h3>
            <div
              style={{
                fontFamily: "'Candara', sans-serif",
                color: "#7DBFA4",
                fontSize: "13px",
                letterSpacing: "0.2em",
              }}
            >
              {member.role.toUpperCase()}
            </div>
          </div>

          {/* Divider */}
          <div
            style={{ height: "1px", background: "rgba(125,191,164,0.15)" }}
            className="mb-6"
          />

          {/* Bio paragraphs */}
          <div className="space-y-4">
            {member.bio.map((para, i) => (
              <p
                key={i}
                style={{
                  fontFamily: "'Candara', sans-serif",
                  color: "rgba(255,255,255,0.65)",
                  fontSize: "15px",
                  lineHeight: 1.5,
                }}
              >
                {para}
              </p>
            ))}
          </div>

          {/* Languages footer */}
          
        </div>
      </div>
    </div>
  );
}

export function Team() {
  const [activeMember, setActiveMember] = useState<TeamMember | null>(null);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="team" className="py-24 md:py-32" style={{ background: DARK_BG }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-10 bg-[#7DBFA4]/25" />
            <span
              className="text-[#7DBFA4]/65 tracking-[0.32em] uppercase text-[14px]"
              style={{ fontFamily: "'Candara', sans-serif" }}
            >
              The Minds Behind Every Insight
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
            Leadership Team
          </motion.h2>
          <p
            className="mt-4 max-w-lg mx-auto"
            style={{
              fontFamily: "'Candara', sans-serif",
              color: "rgba(255,255,255,0.38)",
              fontSize: "0.875rem",
              lineHeight: 1.85,
            }}
          >
            Former regulators, front-office veterans, and legal professionals
            who have sat on both sides of the compliance table.
          </p>
        </div>

        {/* Team — 2-column */}
        <div className="flex flex-wrap justify-center gap-[7rem]">
          {team.map((member) => (
            <div
              key={member.name}
              className="group relative overflow-hidden cursor-pointer flex flex-col"
              style={{
                width: "260px",
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(125,191,164,0.1)",
                transition: "border-color 0.3s",
              }}
              onClick={() => setActiveMember(member)}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(125,191,164,0.28)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(125,191,164,0.1)";
              }}
            >
              {/* Portrait image */}
              <div className="relative overflow-hidden" style={{ height: "320px", background: "#1E3428" }}>
                <img
                  src={member.image}
                  alt={`${member.name}, ${member.role} at Brooklet Advisory`}
                  style={{ objectPosition: "top", transform: `scale(${member.photoScale})`, transformOrigin: "top center" }}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to top, rgba(10,18,12,0.55) 0%, transparent 45%)",
                  }}
                />
                {/* Name overlay on image bottom */}
                <div className="absolute bottom-0 left-0 right-0 px-6 pb-6">
                  <h3
                    className="text-white"
                    style={{
                      fontFamily: "'Candara', sans-serif",
                      fontSize: "26px",
                      fontWeight: 400,
                    }}
                  >
                    {member.name}
                  </h3>
                  <div
                    style={{
                      fontFamily: "'Candara', sans-serif",
                      color: "#7DBFA4",
                      fontSize: "15px",
                      letterSpacing: "0.14em",
                      marginTop: "3px",
                    }}
                  >
                    {member.role.toUpperCase()}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div style={{ height: "1px", background: "rgba(125,191,164,0.12)" }} className="mb-5" />

                {/* Years stat */}
                <div className="mb-5">
                  <div
                    style={{
                      fontFamily: "'Candara', sans-serif",
                      fontSize: "34px",
                      fontWeight: 400,
                      color: "rgba(255,255,255,0.72)",
                      lineHeight: 1,
                    }}
                  >
                    {member.yearsValue}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Candara', sans-serif",
                      fontSize: "13px",
                      letterSpacing: "0.18em",
                      color: "rgba(255,255,255,0.28)",
                      marginTop: "5px",
                    }}
                  >
                    {member.yearsLabel}
                  </div>
                </div>

                {/* Expertise tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {member.expertise.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1"
                      style={{
                        fontFamily: "'Candara', sans-serif",
                        background: "rgba(125,191,164,0.08)",
                        border: "1px solid rgba(125,191,164,0.18)",
                        color: "rgba(125,191,164,0.7)",
                        fontSize: "12px",
                        letterSpacing: "0.08em",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Languages */}
                <div
                  style={{
                    fontFamily: "'Candara', sans-serif",
                    color: "rgba(255,255,255,0.25)",
                    fontSize: "15px",
                    letterSpacing: "0.04em",
                  }}
                >
                  {member.languages}
                </div>

                {/* Read bio hint */}
                <div
                  className="mt-auto pt-5 flex items-center gap-2"
                  style={{
                    fontFamily: "'Candara', sans-serif",
                    color: "rgba(125,191,164,0.5)",
                    fontSize: "12px",
                    letterSpacing: "0.16em",
                  }}
                >
                  <span>VIEW FULL BIO</span>
                  <span style={{ fontSize: "10px" }}>→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Bio Modal */}
      {activeMember && (
        <BioModal member={activeMember} onClose={() => setActiveMember(null)} />
      )}
    </section>
  );
}