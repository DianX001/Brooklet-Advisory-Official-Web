import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "../LanguageContext";
import type { Lang } from "../i18n";

function LangToggle({
  lang,
  setLang,
}: {
  lang: Lang;
  setLang: (l: Lang) => void;
}) {
  return (
    <div
      className="flex items-center gap-1"
      style={{
        fontFamily: "'Candara', sans-serif",
        fontSize: "12px",
        letterSpacing: "0.1em",
      }}
    >
      <button
        lang="en"
        onClick={() => setLang("en")}
        className="cursor-pointer bg-transparent border-none transition-all duration-200"
        style={{
          fontLanguageOverride: "normal",
          color:
            lang === "en"
              ? "#7DBFA4"
              : "rgba(255,255,255,0.35)",
          fontWeight: lang === "en" ? 700 : 400,
          textDecoration: lang === "en" ? "underline" : "none",
          textUnderlineOffset: "3px",
          padding: "2px 4px",
        }}
      >
        EN
      </button>
      <span style={{ color: "rgba(255,255,255,0.2)" }}>|</span>
      <button
        onClick={() => setLang("zh")}
        className="cursor-pointer bg-transparent border-none transition-all duration-200"
        style={{
          fontFamily: "'Noto Serif SC', serif",
          color:
            lang === "zh"
              ? "#7DBFA4"
              : "rgba(255,255,255,0.35)",
          fontWeight: lang === "zh" ? 700 : 400,
          textDecoration: lang === "zh" ? "underline" : "none",
          textUnderlineOffset: "3px",
          padding: "2px 4px",
        }}
      >
        中文
      </button>
    </div>
  );
}

export function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.whyUs, href: "#why-us" },
    { label: t.nav.team, href: "#team" },
    { label: t.nav.contact, href: "#contact-form" },
  ];

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
        borderBottom: scrolled
          ? "1px solid rgba(125,191,164,0.12)"
          : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-3 group"
        >
          <div className="relative w-8 h-8" />
          <div
            className="grid items-baseline"
            style={{
              gridTemplateColumns: "max-content max-content",
              columnGap: "14px",
              rowGap: "4px",
            }}
          >
            <span
              lang="en"
              style={{
                fontFamily:
                  "Candara, 'Trebuchet MS', Arial, sans-serif",
                fontLanguageOverride: "normal",
                fontWeight: 700,
                fontSize: "20px",
                letterSpacing: "0.1em",
                color: "#FFFFFF",
                lineHeight: 1,
              }}
            >
              BROOKLET
            </span>
            <span
              style={{
                fontFamily: "'Noto Serif SC', serif",
                fontWeight: 700,
                fontSize: "17px",
                letterSpacing: "0.1em",
                color: "#FFFFFF",
                lineHeight: 1,
              }}
            >
              初源
            </span>
            <span
              lang="en"
              style={{
                fontFamily:
                  "Candara, 'Trebuchet MS', Arial, sans-serif",
                fontLanguageOverride: "normal",
                fontWeight: 700,
                fontSize: "20px",
                letterSpacing: "0.1em",
                color: "#7DBFA4",
                lineHeight: 1,
              }}
            >
              ADVISORY
            </span>
            <span
              style={{
                fontFamily: "'Noto Serif SC', serif",
                fontWeight: 700,
                fontSize: "17px",
                letterSpacing: "0.1em",
                color: "#7DBFA4",
                lineHeight: 1,
              }}
            >
              咨询
            </span>
          </div>
        </a>
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() =>
                handleNav(
                  link.label === t.nav.contact
                    ? "#contact"
                    : link.href,
                )
              }
              className="text-white/60 hover:text-[#7DBFA4] transition-colors duration-300 text-sm tracking-[0.14em] cursor-pointer bg-transparent border-none"
              style={{ fontFamily: "'Candara', sans-serif" }}
            >
              {link.label.toUpperCase()}
            </button>
          ))}
          <LangToggle lang={lang} setLang={setLang} />
          <button
            onClick={() => handleNav("#contact-form")}
            className="ml-2 px-5 py-2 border border-[#7DBFA4]/40 text-[#7DBFA4] hover:bg-[#7DBFA4]/10 transition-all duration-300 text-sm tracking-[0.14em] cursor-pointer"
            style={{ fontFamily: "'Candara', sans-serif" }}
          >
            {t.nav.getInTouch}
          </button>
        </nav>

        {/* Mobile right side: lang toggle + hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <LangToggle lang={lang} setLang={setLang} />
          <button
            className="text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
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
              onClick={() =>
                handleNav(
                  link.label === t.nav.contact
                    ? "#contact"
                    : link.href,
                )
              }
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
            {t.nav.getInTouch}
          </button>
        </div>
      )}
    </header>
  );
}