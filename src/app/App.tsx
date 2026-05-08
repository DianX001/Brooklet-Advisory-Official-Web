import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { WhyUs } from "./components/WhyUs";
import { Team } from "./components/Team";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

// Thin brooklet stream ribbon divider — from dark forest (above) to light (below)
function StreamDark({ from, to }: { from: string; to: string }) {
  return (
    <div style={{ background: from }}>
      {/* Primary stream ribbon */}
      
    </div>
  );
}

// Thin brooklet stream ribbon divider — from light (above) to dark forest (below)
function StreamLight({ from, to }: { from: string; to: string }) {
  return (
    <div style={{ background: from }}>
      <svg
        viewBox="0 0 1440 32"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full block"
        style={{ height: "32px" }}
      >
        <path
          d="M0,18 C240,28 480,10 720,20 C960,30 1200,12 1440,22 L1440,32 L0,32 Z"
          fill={to}
          opacity="0.35"
        />
        <path
          d="M0,20 C220,30 460,12 700,22 C940,32 1180,14 1440,24 L1440,32 L0,32 Z"
          fill={to}
        />
      </svg>
    </div>
  );
}

const DARK = "#1E3428"; // deep forest green — main color
const LIGHT = "#EDF2EE"; // cool sage-white

export default function App() {
  return (
    <div className="min-h-screen" style={{ fontFamily: "'Candara', sans-serif" }}>
      <Navbar />
      <Hero />

      {/* Hero → About */}
      <StreamDark from={DARK} to={LIGHT} />

      <About />

      {/* About → Services */}
      <StreamLight from={LIGHT} to={DARK} />

      <Services />

      {/* Services → WhyUs */}
      <StreamDark from={DARK} to={LIGHT} />

      <WhyUs />

      {/* WhyUs → Team */}
      <StreamLight from={LIGHT} to={DARK} />

      <Team />

      {/* Team → Contact */}
      <StreamDark from={DARK} to={LIGHT} />

      <Contact />

      <Footer />
    </div>
  );
}