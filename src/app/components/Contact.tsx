import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useLanguage } from "../LanguageContext";

const LIGHT_BG = "#EDF2EE";
const DARK_PANEL = "#1E3428";

const EMAILJS_SERVICE_ID = "service_0qu7r0b";
const EMAILJS_TEMPLATE_ID = "template_2h0v1v4";
const EMAILJS_PUBLIC_KEY = "FoqlEL1hKlso76VtX";

const infoIcons = [MapPin, Mail, Phone];

export function Contact() {
  const shouldReduceMotion = useReducedMotion();
  const { t, lang } = useLanguage();
  const c = t.contact;
  const f = c.form;

  const [formData, setFormData] = useState({
    name: "", company: "", email: "", phone: "", service: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [focused, setFocused] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg(f.validationError);
      return;
    }

    setSending(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          service: formData.service,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );
      setSubmitted(true);
      setFormData({ name: "", company: "", email: "", phone: "", service: "", message: "" });
    } catch {
      setErrorMsg(f.serverError);
    } finally {
      setSending(false);
    }
  };

  const inputStyle = (field: string): React.CSSProperties => ({
    background: "rgba(255,255,255,0.04)",
    border: `1px solid ${focused === field ? "rgba(133,188,164,0.5)" : "rgba(255,255,255,0.09)"}`,
    color: "white",
    outline: "none",
    fontSize: "14px",
    transition: "border-color 0.3s",
    borderRadius: "1px",
    padding: "13px 15px",
    width: "100%",
  });

  return (
    <section id="contact" className="py-24 md:py-32" style={{ background: LIGHT_BG }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-10 bg-[#3E8A72]/40" />
            <span
              className="text-[#3E8A72] tracking-[0.32em] uppercase"
              style={{ fontSize: "14px" }}
            >
              {c.label}
            </span>
            <div className="h-px w-10 bg-[#3E8A72]/40" />
          </div>
          <motion.h2
            style={{
              fontSize: "35px",
              fontWeight: 400,
              lineHeight: 1.2,
              color: "#0D1F0E",
            }}
            initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{
              duration: shouldReduceMotion ? 0 : 2.7,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {c.h2}
          </motion.h2>
          <p
            className="mt-4 max-w-md mx-auto"
            style={{
              color: "#2E4A38",
              fontSize: "16px",
              lineHeight: 1.85,
            }}
            dangerouslySetInnerHTML={{ __html: c.subtitle }}
          />
        </div>

        <div className="grid lg:grid-cols-5 gap-12">

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-10">
            <div>
              <div className="space-y-6">
                {c.info.map((item, idx) => {
                  const Icon = infoIcons[idx];
                  return (
                    <div key={item.label} className="flex gap-4">
                      <div
                        className="flex-shrink-0 w-8 h-8 flex items-center justify-center mt-0.5"
                        style={{ border: "1px solid rgba(62,138,114,0.3)" }}
                      >
                        <Icon size={14} className="text-[#3E8A72]" strokeWidth={1.5} />
                      </div>
                      <div>
                        <div
                          className="mb-1"
                          style={{
                            color: "#3E8A72",
                            fontSize: "14px",
                            letterSpacing: "0.14em",
                          }}
                        >
                          {item.label.toUpperCase()}
                        </div>
                        <div
                          style={{
                            color: "#2E4A38",
                            fontSize: "14px",
                            lineHeight: 1.75,
                            whiteSpace: "pre-line",
                          }}
                        >
                          {item.detail}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quote block */}
            <div
              className="p-6"
              style={{
                background: "linear-gradient(145deg, #162B22, #1E3428)",
                borderLeft: "2px solid #5A9E84",
              }}
            >
              <p
                className="text-white/70 mb-3"
                style={{
                  fontSize: "16px",
                  fontStyle: "italic",
                  lineHeight: 1.78,
                }}
              >
                {c.quote}
              </p>
              <div style={{ height: "1px", background: "rgba(90,158,132,0.2)" }} className="mb-3" />
              <div className="flex items-center gap-[8px] sm:gap-[12px] whitespace-nowrap">
                <span
                  lang="en"
                  style={{
                    fontFamily: "'Candara', sans-serif",
                    fontLanguageOverride: "normal",
                    fontWeight: 700,
                    fontSize: "20px",
                    letterSpacing: "0.1em",
                    color: "#ffffff",
                    lineHeight: 1,
                  }}
                >
                  BROOKLET
                </span>
                <span
                  lang="en"
                  style={{
                    fontFamily: "'Candara', sans-serif",
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
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div
                className="h-full flex flex-col items-center justify-center py-20 text-center"
                style={{
                  background: "linear-gradient(145deg, #162B22, #1E3428)",
                  border: "1px solid rgba(125,191,164,0.12)",
                }}
              >
                <div
                  className="w-14 h-14 flex items-center justify-center mb-6"
                  style={{ border: "1px solid rgba(125,191,164,0.4)" }}
                >
                  <Send size={22} className="text-[#7DBFA4]" strokeWidth={1.5} />
                </div>
                <h3
                  className="text-white mb-3"
                  style={{
                    fontSize: "14px",
                    fontWeight: 300,
                  }}
                >
                  {f.successTitle}
                </h3>
                <p
                  style={{
                    color: "rgba(255,255,255,0.55)",
                    fontSize: "14px",
                    maxWidth: "300px",
                    lineHeight: 1.85,
                  }}
                >
                  {f.successBody}
                </p>
              </div>
            ) : (
              <form
                id="contact-form"
                onSubmit={handleSubmit}
                className="p-8 md:p-10"
                style={{
                  background: "linear-gradient(145deg, #162B22, #1E3428)",
                  border: "1px solid rgba(125,191,164,0.08)",
                }}
              >
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label
                      className="block mb-2 text-white/45"
                      style={{ fontSize: "14px", letterSpacing: "0.14em" }}
                    >
                      {f.fullName}
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocused("name")}
                      onBlur={() => setFocused(null)}
                      style={inputStyle("name")}
                      placeholder={f.placeholderName}
                    />
                  </div>
                  <div>
                    <label
                      className="block mb-2 text-white/45"
                      style={{ fontSize: "14px", letterSpacing: "0.14em" }}
                    >
                      {f.company}
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      onFocus={() => setFocused("company")}
                      onBlur={() => setFocused(null)}
                      style={inputStyle("company")}
                      placeholder={f.placeholderCompany}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label
                      className="block mb-2 text-white/45"
                      style={{ fontSize: "14px", letterSpacing: "0.14em" }}
                    >
                      {f.email}
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocused("email")}
                      onBlur={() => setFocused(null)}
                      style={inputStyle("email")}
                      placeholder={f.placeholderEmail}
                    />
                  </div>
                  <div>
                    <label
                      className="block mb-2 text-white/45"
                      style={{ fontSize: "14px", letterSpacing: "0.14em" }}
                    >
                      {f.phone}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onFocus={() => setFocused("phone")}
                      onBlur={() => setFocused(null)}
                      style={inputStyle("phone")}
                      placeholder={f.placeholderPhone}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label
                    className="block mb-2 text-white/45"
                    style={{ fontSize: "14px", letterSpacing: "0.14em" }}
                  >
                    {f.service}
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    onFocus={() => setFocused("service")}
                    onBlur={() => setFocused(null)}
                    style={{ ...inputStyle("service"), appearance: "none" as const }}
                  >
                    <option value="" style={{ background: DARK_PANEL }}>{f.selectDefault}</option>
                    {f.options.map((opt) => (
                      <option key={opt} value={opt} style={{ background: DARK_PANEL }}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div className="mb-6">
                  <label
                    className="block mb-2 text-white/45"
                    style={{ fontSize: "14px", letterSpacing: "0.14em" }}
                  >
                    {f.message}
                  </label>
                  <input
                    type="text"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    style={inputStyle("message")}
                    placeholder={f.placeholderMessage}
                  />
                </div>

                {errorMsg && (
                  <div
                    className="mb-5 px-4 py-3"
                    style={{
                      background: "rgba(200,60,60,0.08)",
                      border: "1px solid rgba(200,60,60,0.25)",
                      color: "rgba(255,160,140,0.9)",
                      fontSize: "13px",
                      lineHeight: 1.7,
                    }}
                  >
                    {errorMsg}
                  </div>
                )}

                <button
                  id="contact-submit"
                  type="submit"
                  disabled={sending}
                  className="w-full py-4 flex items-center justify-center gap-3 transition-all duration-300 hover:brightness-110 hover:gap-4 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{
                    background: "linear-gradient(135deg, #6CBAAA, #3E8A72)",
                    letterSpacing: "0.16em",
                    fontSize: "14px",
                    color: "#0C1810",
                    border: "none",
                  }}
                >
                  <span>{sending ? f.sending : f.send}</span>
                  {!sending && <Send size={13} />}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
