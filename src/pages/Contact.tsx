import { useState } from "react";

function SectionLabel({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="w-8 h-px" style={{ backgroundColor: "#E85C0D" }} />
      <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#E85C0D", fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.16em" }}>
        {children}
      </span>
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative flex items-end pb-20 pt-36 overflow-hidden" style={{ backgroundColor: "#0C1E35", minHeight: "380px" }}>
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #0C1E35 0%, #1C354F 100%)" }} />
        <div className="relative max-w-screen-xl mx-auto px-6 lg:px-10 w-full">
          <SectionLabel>Get In Touch</SectionLabel>
          <h1 className="text-white max-w-3xl" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(38px, 5vw, 72px)", fontWeight: 800, lineHeight: 1.0 }}>
            Contact Us
          </h1>
          <p className="mt-4 text-lg max-w-xl" style={{ color: "rgba(255,255,255,0.65)" }}>
            Ready to discuss your project? Our team is available to respond to all enquiries within one business day.
          </p>
        </div>
      </section>

      {/* Contact body */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: "#F4F7F9" }}>
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 grid lg:grid-cols-3 gap-12">
          {/* Sidebar info */}
          <div>
            <h3 className="font-bold mb-8 text-2xl" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#0C1E35" }}>
              Our Office
            </h3>

            {[
              {
                label: "Head Office",
                icon: "📍",
                lines: ["Plot 14, Marine Drive", "Tema Industrial Area", "Tema, Greater Accra", "Ghana"],
              },
              {
                label: "Phone",
                icon: "📞",
                lines: ["+233 30 295 8400", "+233 20 811 4222"],
              },
              {
                label: "Email",
                icon: "✉️",
                lines: ["info@3cmarineengineering.com", "projects@3cmarineengineering.com"],
              },
              {
                label: "WhatsApp",
                icon: "💬",
                lines: ["+233 20 811 4222"],
              },
              {
                label: "Office Hours",
                icon: "⏰",
                lines: ["Mon–Fri: 08:00–17:00 GMT", "Emergency: 24/7 on-call"],
              },
            ].map((item) => (
              <div key={item.label} className="mb-7">
                <p className="text-xs font-semibold mb-2" style={{ color: "#E85C0D", letterSpacing: "0.1em", fontFamily: "'Barlow Condensed', sans-serif" }}>
                  {item.icon} {item.label.toUpperCase()}
                </p>
                {item.lines.map((line) => (
                  <p key={line} className="text-sm" style={{ color: "#5B6E82" }}>{line}</p>
                ))}
              </div>
            ))}

            {/* Map embed */}
            <div className="mt-8 rounded-lg overflow-hidden" style={{ height: "200px" }}>
              <a
                href="https://maps.google.com/?q=Tema+Industrial+Area,+Ghana"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full relative group"
              >
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&h=300&fit=crop&auto=format"
                  alt="Tema Port Industrial Area — click to open in Google Maps"
                  className="w-full h-full object-cover transition-opacity duration-200 group-hover:opacity-80"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ backgroundColor: "rgba(12,30,53,0.45)" }}>
                  <div className="text-2xl mb-1">📍</div>
                  <p className="text-white font-semibold text-sm" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Tema Industrial Area, Ghana</p>
                  <p className="text-xs text-white/70 mt-1">Click to open in Google Maps</p>
                </div>
              </a>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-2 bg-white rounded-xl p-8 lg:p-10" style={{ border: "1px solid #E8EEF3" }}>
            {submitted ? (
              <div className="text-center py-16">
                <div className="text-6xl mb-5">✅</div>
                <h3 className="font-bold text-3xl mb-3" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#0C1E35" }}>
                  Message Received
                </h3>
                <p className="text-lg mb-2" style={{ color: "#5B6E82" }}>
                  Thank you for contacting 3C Marine Engineering.
                </p>
                <p style={{ color: "#7A90A4" }}>
                  A member of our team will respond within one business day.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", company: "", email: "", phone: "", subject: "", message: "" }); }}
                  className="mt-8 font-semibold py-3 px-7 rounded"
                  style={{ backgroundColor: "#0C1E35", color: "#fff", fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.08em" }}
                >
                  SEND ANOTHER MESSAGE
                </button>
              </div>
            ) : (
              <>
                <h2 className="font-bold text-2xl mb-8" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#0C1E35" }}>
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-5">
                  {[
                    { label: "Full Name", key: "name", type: "text", placeholder: "Your full name", col: 1 },
                    { label: "Company / Organisation", key: "company", type: "text", placeholder: "Your company", col: 1 },
                    { label: "Email Address", key: "email", type: "email", placeholder: "your@email.com", col: 1 },
                    { label: "Phone Number", key: "phone", type: "tel", placeholder: "+233 XX XXX XXXX", col: 1 },
                    { label: "Subject", key: "subject", type: "text", placeholder: "e.g. Offshore Inspection Enquiry", col: 2 },
                  ].map((field) => (
                    <div key={field.key} className={field.col === 2 ? "sm:col-span-2" : ""}>
                      <label className="block text-xs font-semibold mb-1.5" style={{ color: "#5B6E82", letterSpacing: "0.08em" }}>
                        {field.label.toUpperCase()}
                      </label>
                      <input
                        type={field.type}
                        required
                        placeholder={field.placeholder}
                        value={form[field.key as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg outline-none text-sm"
                        style={{ border: "1px solid #C8D5DF", color: "#0C1E35" }}
                      />
                    </div>
                  ))}
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: "#5B6E82", letterSpacing: "0.08em" }}>
                      MESSAGE
                    </label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Describe your project or enquiry..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg outline-none text-sm resize-none"
                      style={{ border: "1px solid #C8D5DF", color: "#0C1E35" }}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      className="w-full font-bold py-4 rounded text-base"
                      style={{ backgroundColor: "#E85C0D", color: "#fff", fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.1em" }}
                    >
                      SEND MESSAGE
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
