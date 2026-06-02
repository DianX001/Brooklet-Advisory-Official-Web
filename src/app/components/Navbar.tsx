import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact-form" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? "rgba(30, 52, 40, 0.97)"
          : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(125,191,164,0.12)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="flex items-center gap-3 group"
        >
          <div className="relative w-8 h-8">
            
          </div>
          <span className="flex flex-col items-start gap-0">
            <span
              style={{ fontFamily: "'Candara', sans-serif", letterSpacing: "0.1em", fontWeight: 700 }}
              className="text-white text-xl leading-tight"
            >BROOKLET</span>
            <span
              style={{ fontFamily: "'Candara', sans-serif", letterSpacing: "0.1em", color: "#7DBFA4", fontWeight: 700 }}
              className="leading-tight text-[20px]"
            >ADVISORY</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.label === "Contact" ? "#contact" : link.href)}
              className="text-white/60 hover:text-[#7DBFA4] transition-colors duration-300 text-sm tracking-[0.14em] cursor-pointer bg-transparent border-none"
              style={{ fontFamily: "'Candara', sans-serif" }}
            >
              {link.label.toUpperCase()}
            </button>
          ))}
          <button
            onClick={() => handleNav("#contact-form")}
            className="ml-4 px-5 py-2 border border-[#7DBFA4]/40 text-[#7DBFA4] hover:bg-[#7DBFA4]/10 transition-all duration-300 text-sm tracking-[0.14em] cursor-pointer"
            style={{ fontFamily: "'Candara', sans-serif" }}
          >
            GET IN TOUCH
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="md:hidden px-6 pb-6 pt-2"
          style={{ background: "rgba(30, 52, 40, 0.99)" }}
        >
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.label === "Contact" ? "#contact" : link.href)}
              className="block w-full text-left py-3 text-white/60 hover:text-[#7DBFA4] transition-colors duration-300 text-[13px] tracking-[0.14em] border-b border-white/5 bg-transparent"
              style={{ fontFamily: "'Candara', sans-serif" }}
            >
              {link.label.toUpperCase()}
            </button>
          ))}
          <button
            onClick={() => handleNav("#contact-form")}
            className="mt-4 w-full py-3 border border-[#7DBFA4]/40 text-[#7DBFA4] text-[13px] tracking-[0.14em]"
            style={{ fontFamily: "'Candara', sans-serif" }}
          >
            GET IN TOUCH
          </button>
        </div>
      )}
    </header>
  );
}