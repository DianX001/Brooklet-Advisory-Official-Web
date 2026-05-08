const FOOTER_BG = "#13201A";
const LIGHT_BG = "#EDF2EE";

export function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{ background: FOOTER_BG }}>
      {/* Thin brooklet stream transition from light → footer dark */}
      <div style={{ background: LIGHT_BG }}>
        <svg
          viewBox="0 0 1440 28"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full block"
          style={{ height: "28px" }}
        >
          <path
            d="M0,18 C240,8 480,24 720,14 C960,4 1200,22 1440,12 L1440,28 L0,28 Z"
            fill={FOOTER_BG}
            opacity="0.35"
          />
          <path
            d="M0,20 C220,10 460,26 700,16 C940,6 1180,24 1440,14 L1440,28 L0,28 Z"
            fill={FOOTER_BG}
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-14">

          {/* Brand column */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <span className="flex flex-col items-start gap-0">
                <span
                  className="text-white text-xl leading-tight"
                  style={{ fontFamily: "'Candara', sans-serif", letterSpacing: "0.1em" }}
                >BROOKLET</span>
                <span
                  className="leading-tight text-[20px]"
                  style={{ fontFamily: "'Candara', sans-serif", letterSpacing: "0.1em", color: "#7DBFA4" }}
                >ADVISORY</span>
              </span>
            </div>
            <p
              className="mb-6 max-w-xs"
              style={{
                fontFamily: "'Candara', sans-serif",
                color: "rgba(255,255,255,0.3)",
                fontSize: "0.83rem",
                lineHeight: 1.9,
              }}
            >
              A Hong Kong specialist consultancy helping financial institutions
              with licensing, compliance, and regulatory scrutiny.
            </p>
            <div
              style={{
                fontFamily: "'Candara', sans-serif",
                color: "rgba(255,255,255,0.18)",
                lineHeight: 1.75,
                fontSize: "13px",
              }}
            >
              Level 20, One IFC · Central, Hong Kong
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="mb-5"
              style={{
                fontFamily: "'Candara', sans-serif",
                color: "rgba(255,255,255,0.3)",
                fontSize: "0.68rem",
                letterSpacing: "0.22em",
              }}
            >
              NAVIGATION
            </h4>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "#about" },
                { label: "Services", href: "#services" },
                { label: "The Brooklet Edge", href: "#why-us" },
                { label: "Our Team", href: "#team" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-white/35 hover:text-[#7DBFA4] transition-colors duration-300 text-sm bg-transparent border-none cursor-pointer p-0"
                    style={{ fontFamily: "'Candara', sans-serif", fontSize: "0.83rem" }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4
              className="mb-5"
              style={{
                fontFamily: "'Candara', sans-serif",
                color: "rgba(255,255,255,0.3)",
                fontSize: "0.68rem",
                letterSpacing: "0.22em",
              }}
            >
              SERVICES
            </h4>
            <ul className="space-y-3">
              {[
                "Licensing & Registration",
                "Ongoing Compliance Advisory",
                "Regulatory Inspection Support",
                "Specialised Advisory",
                "Compliance Training",
                "M&A Support",
              ].map((service) => (
                <li key={service}>
                  <span
                    className="text-white/35"
                    style={{ fontFamily: "'Candara', sans-serif", fontSize: "0.83rem" }}
                  >
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col md:flex-row items-start justify-between gap-6"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <div className="space-y-2">
            <div
              style={{
                fontFamily: "'Candara', sans-serif",
                color: "rgba(255,255,255,0.18)",
                letterSpacing: "0.04em",
                fontSize: "0.72rem",
              }}
            >
              © 2025 Brooklet Advisory Limited. All rights reserved.
            </div>
            <div
              style={{
                fontFamily: "'Candara', sans-serif",
                color: "rgba(255,255,255,0.13)",
                fontSize: "0.68rem",
                lineHeight: 1.7,
                maxWidth: "480px",
              }}
            >
              Brooklet Advisory Limited is not a law firm or tax advisor. All information
              provided is for general purposes only and does not constitute legal or tax advice.
            </div>
          </div>

          {/* Brooklet ripple motif — tiny, intimate */}
          <div className="flex items-end gap-1.5" style={{ opacity: 0.28 }}>
            {[2, 3, 4, 3, 2].map((size, i) => (
              <div
                key={i}
                className="rounded-full"
                style={{
                  width: `${size + 1}px`,
                  height: `${size + 1}px`,
                  background: "#7DBFA4",
                  animation: `rippleDot ${1.2 + i * 0.18}s ease-in-out infinite`,
                  animationDelay: `${i * 0.12}s`,
                }}
              />
            ))}
          </div>

          <div className="flex gap-5">
            {["Privacy Policy", "Terms of Use"].map((item) => (
              <button
                key={item}
                className="text-white/18 hover:text-white/38 transition-colors duration-300 bg-transparent border-none cursor-pointer p-0"
                style={{ fontFamily: "'Candara', sans-serif", fontSize: "0.72rem", letterSpacing: "0.04em" }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes rippleDot {
          0%, 100% { transform: translateY(0); opacity: 0.28; }
          50% { transform: translateY(-3px); opacity: 0.7; }
        }
      `}</style>
    </footer>
  );
}