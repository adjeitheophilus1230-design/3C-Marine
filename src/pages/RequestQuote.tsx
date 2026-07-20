import { useState } from "react";
import { SERVICES } from "../data/mock";

export default function RequestQuote() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    service: "",
    projectType: "",
    timeline: "",
    budget: "",
    description: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const Field = ({
    label,
    children,
    span = 1,
  }: {
    label: string;
    children: React.ReactNode;
    span?: 1 | 2;
  }) => (
    <div className={span === 2 ? "md:col-span-2" : ""}>
      <label className="block text-xs font-semibold mb-2" style={{ color: "#5B6E82", letterSpacing: "0.1em" }}>
        {label}
      </label>
      {children}
    </div>
  );

  const inputStyle = {
    width: "100%",
    padding: "12px 16px",
    borderRadius: "8px",
    border: "1px solid #C8D5DF",
    color: "#0C1E35",
    fontSize: "14px",
    outline: "none",
    backgroundColor: "#fff",
  } as React.CSSProperties;

  return (
    <div>
      {/* Hero */}
      <section className="relative flex items-end pb-20 pt-36 overflow-hidden" style={{ backgroundColor: "#0C1E35", minHeight: "380px" }}>
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #07131F 0%, #1C354F 100%)" }} />
        <div className="relative max-w-screen-xl mx-auto px-6 lg:px-10 w-full">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px" style={{ backgroundColor: "#E85C0D" }} />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#E85C0D", fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.16em" }}>
              Project Enquiry
            </span>
          </div>
          <h1 className="text-white max-w-3xl" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(38px, 5vw, 72px)", fontWeight: 800, lineHeight: 1.0 }}>
            Request a Quote
          </h1>
          <p className="mt-4 text-lg max-w-xl" style={{ color: "rgba(255,255,255,0.65)" }}>
            Complete the form below and our engineering team will prepare a tailored response within 2 business days.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: "#F4F7F9" }}>
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 grid lg:grid-cols-3 gap-12">
          {/* Sidebar */}
          <div>
            <h3 className="font-bold text-2xl mb-6" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#0C1E35" }}>
              What To Expect
            </h3>
            <div className="flex flex-col gap-5">
              {[
                { step: "01", title: "Submit Enquiry", body: "Complete this form with as much project detail as possible." },
                { step: "02", title: "Technical Review", body: "Our engineering team reviews your requirements within 2 business days." },
                { step: "03", title: "Scoping Call", body: "We arrange a call to clarify requirements and align on scope." },
                { step: "04", title: "Formal Quotation", body: "You receive a detailed technical and commercial proposal." },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div
                    className="flex-shrink-0 w-8 h-8 rounded flex items-center justify-center font-bold text-sm"
                    style={{ backgroundColor: "#E85C0D", color: "#fff", fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    {item.step}
                  </div>
                  <div>
                    <p className="font-bold text-sm mb-1" style={{ color: "#0C1E35", fontFamily: "'Barlow Condensed', sans-serif" }}>
                      {item.title}
                    </p>
                    <p className="text-sm" style={{ color: "#7A90A4" }}>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-lg p-6" style={{ backgroundColor: "#0C1E35" }}>
              <p className="text-xs font-semibold mb-3" style={{ color: "#E85C0D", letterSpacing: "0.1em", fontFamily: "'Barlow Condensed', sans-serif" }}>
                URGENT ENQUIRIES
              </p>
              <p className="text-sm text-white mb-2">For emergency or time-sensitive projects:</p>
              <p className="font-bold text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>+233 20 811 4222</p>
              <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>24/7 emergency on-call</p>
            </div>
          </div>

          {/* Form panel */}
          <div className="lg:col-span-2 bg-white rounded-xl p-8 lg:p-10" style={{ border: "1px solid #E8EEF3" }}>
            {submitted ? (
              <div className="text-center py-16">
                <div className="text-6xl mb-5">📋</div>
                <h3 className="font-bold text-3xl mb-3" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#0C1E35" }}>
                  Enquiry Received
                </h3>
                <p className="text-lg mb-2" style={{ color: "#5B6E82" }}>
                  Thank you, {form.name.split(" ")[0]}. Your request has been submitted.
                </p>
                <p style={{ color: "#7A90A4" }}>
                  Our engineering team will review your requirements and respond within 2 business days.
                </p>
                <div className="mt-6 p-4 rounded-lg text-sm" style={{ backgroundColor: "#F4F7F9", color: "#5B6E82" }}>
                  A confirmation has been sent to <strong>{form.email}</strong>
                </div>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", company: "", email: "", phone: "", country: "", service: "", projectType: "", timeline: "", budget: "", description: "" }); }}
                  className="mt-8 font-semibold py-3 px-7 rounded"
                  style={{ backgroundColor: "#0C1E35", color: "#fff", fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.08em" }}
                >
                  SUBMIT ANOTHER ENQUIRY
                </button>
              </div>
            ) : (
              <>
                <h2 className="font-bold text-2xl mb-8" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#0C1E35" }}>
                  Project Enquiry Form
                </h2>

                <div className="px-4 py-3 rounded-lg text-xs mb-8" style={{ backgroundColor: "#F4F7F9", color: "#A0B2C1", border: "1px solid #E8EEF3" }}>
                  ✏️ <em>Sample prototype — all form submissions in this demo are simulated. Replace with official backend on site launch.</em>
                </div>

                <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-5">
                  <Field label="FULL NAME *">
                    <input type="text" required placeholder="Your full name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} style={inputStyle} />
                  </Field>

                  <Field label="COMPANY / ORGANISATION *">
                    <input type="text" required placeholder="Company name" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} style={inputStyle} />
                  </Field>

                  <Field label="EMAIL ADDRESS *">
                    <input type="email" required placeholder="your@email.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} style={inputStyle} />
                  </Field>

                  <Field label="PHONE NUMBER *">
                    <input type="tel" required placeholder="+233 XX XXX XXXX" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} style={inputStyle} />
                  </Field>

                  <Field label="COUNTRY">
                    <input type="text" placeholder="Country of operation" value={form.country} onChange={(e) => setForm({ ...form, country: e.target.value })} style={inputStyle} />
                  </Field>

                  <Field label="SERVICE REQUIRED *">
                    <select required value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} style={{ ...inputStyle, appearance: "none" }}>
                      <option value="">Select a service...</option>
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.id}>{s.title}</option>
                      ))}
                      <option value="multiple">Multiple Services</option>
                      <option value="unsure">Not Sure — Need Advice</option>
                    </select>
                  </Field>

                  <Field label="PROJECT TYPE">
                    <select value={form.projectType} onChange={(e) => setForm({ ...form, projectType: e.target.value })} style={{ ...inputStyle, appearance: "none" }}>
                      <option value="">Select...</option>
                      <option>New Construction</option>
                      <option>Maintenance & Repair</option>
                      <option>Inspection</option>
                      <option>Consultancy</option>
                      <option>Emergency Response</option>
                    </select>
                  </Field>

                  <Field label="EXPECTED TIMELINE">
                    <select value={form.timeline} onChange={(e) => setForm({ ...form, timeline: e.target.value })} style={{ ...inputStyle, appearance: "none" }}>
                      <option value="">Select...</option>
                      <option>Immediate / Emergency</option>
                      <option>Within 1 month</option>
                      <option>1–3 months</option>
                      <option>3–6 months</option>
                      <option>6–12 months</option>
                      <option>12+ months</option>
                    </select>
                  </Field>

                  <Field label="APPROXIMATE BUDGET (USD)" span={2}>
                    <select value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })} style={{ ...inputStyle, appearance: "none" }}>
                      <option value="">Prefer not to say / Unknown</option>
                      <option>Under $50,000</option>
                      <option>$50,000 – $250,000</option>
                      <option>$250,000 – $1,000,000</option>
                      <option>$1,000,000 – $5,000,000</option>
                      <option>Over $5,000,000</option>
                    </select>
                  </Field>

                  <Field label="PROJECT DESCRIPTION *" span={2}>
                    <textarea
                      required
                      rows={5}
                      placeholder="Please describe your project scope, location, key requirements, and any other relevant details..."
                      value={form.description}
                      onChange={(e) => setForm({ ...form, description: e.target.value })}
                      style={{ ...inputStyle, resize: "none" }}
                    />
                  </Field>

                  <div className="md:col-span-2">
                    <div className="rounded-lg p-4 text-xs mb-5" style={{ backgroundColor: "#F4F7F9", color: "#A0B2C1" }}>
                      📎 Document attachment (drawings, specs, RFQ documents) will be enabled on site launch. Please mention if you have documents to share and we will follow up by email.
                    </div>
                    <button
                      type="submit"
                      className="w-full font-bold py-4 rounded text-base"
                      style={{ backgroundColor: "#E85C0D", color: "#fff", fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.1em" }}
                    >
                      SUBMIT ENQUIRY
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
