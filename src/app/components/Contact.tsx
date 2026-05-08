import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Phone, Send } from "lucide-react";

const LIGHT_BG = "#EDF2EE";
const DARK_PANEL = "#1E3428";

const EMAILJS_SERVICE_ID = "service_0qu7r0b";
const EMAILJS_TEMPLATE_ID = "template_2h0v1v4";
const EMAILJS_PUBLIC_KEY = "FoqlEL1hKlso76VtX";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
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

    // Validate required fields
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg("Please fill in all required fields: Full Name, Email Address, and Your Message.");
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
      setErrorMsg(
        "Something went wrong. Please try again or contact us directly at info@brookletadvisory.com."
      );
    } finally {
      setSending(false);
    }
  };

  const inputStyle = (field: string): React.CSSProperties => ({
    background: "rgba(255,255,255,0.04)",
    border: `1px solid ${focused === field ? "rgba(133,188,164,0.5)" : "rgba(255,255,255,0.09)"}`,
    color: "white",
    outline: "none",
    fontFamily: "'Candara', sans-serif",
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
              style={{ fontFamily: "'Candara', sans-serif", fontSize: "14px" }}
            >
              Get In Touch
            </span>
            <div className="h-px w-10 bg-[#3E8A72]/40" />
          </div>
          <h2
            style={{
              fontFamily: "'Candara', sans-serif",
              fontSize: "35px",
              fontWeight: 400,
              lineHeight: 1.2,
              color: "#0D1F0E",
            }}
          >
            Begin the Conversation
          </h2>
          <p
            className="mt-4 max-w-md mx-auto"
            style={{
              fontFamily: "'Candara', sans-serif",
              color: "#2E4A38",
              fontSize: "16px",
              lineHeight: 1.85,
            }}
          >
            Whether you have a specific compliance challenge or simply want to
            explore how Brooklet can support your business, we'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-10">
            <div>
              <div className="space-y-6">
                {[
                  {
                    icon: MapPin,
                    label: "Office",
                    detail: "Level 20, One IFC\nCentral, Hong Kong",
                  },
                  {
                    icon: Mail,
                    label: "Email",
                    detail: "info@brookletadvisory.com",
                  },
                  {
                    icon: Phone,
                    label: "Phone",
                    detail: "+852 9240 9588",
                  },
                ].map((item) => {
                  const Icon = item.icon;
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
                            fontFamily: "'Candara', sans-serif",
                            color: "#3E8A72",
                            fontSize: "14px",
                            letterSpacing: "0.14em",
                          }}
                        >
                          {item.label.toUpperCase()}
                        </div>
                        <div
                          style={{
                            fontFamily: "'Candara', sans-serif",
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

            {/* Forest stream quote block */}
            <div
              className="p-6"
              style={{
                background: "linear-gradient(145deg, #162B22, #1E3428)",
                borderTop: "none",
                borderRight: "none",
                borderBottom: "none",
                borderLeft: "2px solid #5A9E84",
              }}
            >
              <p
                className="text-white/70 mb-3"
                style={{
                  fontFamily: "'Candara', sans-serif",
                  fontSize: "16px",
                  fontStyle: "italic",
                  lineHeight: 1.78,
                }}
              >
                "We deliver compliant solutions that are commercially sound."
              </p>
              <div style={{ height: "1px", background: "rgba(90,158,132,0.2)" }} className="mb-3" />
              <span
                style={{
                  fontFamily: "'Candara', sans-serif",
                  fontSize: "14px",
                  letterSpacing: "0.16em",
                }}
              >
                <span style={{ color: "#ffffff" }}>BROOKLET</span>
                <span style={{ color: "#7DBFA4" }}> ADVISORY</span>
              </span>
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
                    fontFamily: "'Candara', sans-serif",
                    fontSize: "14px",
                    fontWeight: 300,
                  }}
                >
                  Message Received
                </h3>
                <p
                  style={{
                    fontFamily: "'Candara', sans-serif",
                    color: "rgba(255,255,255,0.55)",
                    fontSize: "14px",
                    maxWidth: "300px",
                    lineHeight: 1.85,
                  }}
                >
                  Your message has been sent. We will be in touch shortly.
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
                      style={{ fontFamily: "'Candara', sans-serif", fontSize: "14px", letterSpacing: "0.14em" }}
                    >
                      FULL NAME *
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
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label
                      className="block mb-2 text-white/45"
                      style={{ fontFamily: "'Candara', sans-serif", fontSize: "14px", letterSpacing: "0.14em" }}
                    >
                      COMPANY
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      onFocus={() => setFocused("company")}
                      onBlur={() => setFocused(null)}
                      style={inputStyle("company")}
                      placeholder="Your organisation"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label
                      className="block mb-2 text-white/45"
                      style={{ fontFamily: "'Candara', sans-serif", fontSize: "14px", letterSpacing: "0.14em" }}
                    >
                      EMAIL ADDRESS *
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
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label
                      className="block mb-2 text-white/45"
                      style={{ fontFamily: "'Candara', sans-serif", fontSize: "14px", letterSpacing: "0.14em" }}
                    >
                      PHONE NUMBER
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onFocus={() => setFocused("phone")}
                      onBlur={() => setFocused(null)}
                      style={inputStyle("phone")}
                      placeholder="+852/+86 XXXX XXXX"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label
                    className="block mb-2 text-white/45"
                    style={{ fontFamily: "'Candara', sans-serif", fontSize: "14px", letterSpacing: "0.14em" }}
                  >
                    SERVICE OF INTEREST
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    onFocus={() => setFocused("service")}
                    onBlur={() => setFocused(null)}
                    style={{ ...inputStyle("service"), appearance: "none" as const }}
                  >
                    <option value="" style={{ background: DARK_PANEL }}>Select a service...</option>
                    <option value="Licensing & Registration" style={{ background: DARK_PANEL }}>Licensing & Registration</option>
                    <option value="Ongoing Compliance Advisory" style={{ background: DARK_PANEL }}>Ongoing Compliance Advisory</option>
                    <option value="Regulatory Inspection Support" style={{ background: DARK_PANEL }}>Regulatory Inspection Support</option>
                    <option value="Specialised Advisory & Training" style={{ background: DARK_PANEL }}>Specialised Advisory & Training</option>
                    <option value="Other" style={{ background: DARK_PANEL }}>Other</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label
                    className="block mb-2 text-white/45"
                    style={{ fontFamily: "'Candara', sans-serif", fontSize: "14px", letterSpacing: "0.14em" }}
                  >
                    YOUR MESSAGE *
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
                    placeholder="Tell us about your compliance needs..."
                  />
                </div>

                {/* Error message */}
                {errorMsg && (
                  <div
                    className="mb-5 px-4 py-3"
                    style={{
                      background: "rgba(200,60,60,0.08)",
                      border: "1px solid rgba(200,60,60,0.25)",
                      fontFamily: "'Candara', sans-serif",
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
                    fontFamily: "'Candara', sans-serif",
                    letterSpacing: "0.16em",
                    fontSize: "14px",
                    color: "#0C1810",
                    border: "none",
                  }}
                >
                  <span>{sending ? "SENDING..." : "SEND MESSAGE"}</span>
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