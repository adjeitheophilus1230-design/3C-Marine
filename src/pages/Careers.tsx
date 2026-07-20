import { useState } from "react";
import { JOBS } from "../data/mock";
import { GlobeIcon, TrendingUpIcon, GraduationCapIcon, ShieldIcon, BadgeCheckIcon, MapPinIcon } from "../components/Icons";

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

export default function Careers() {
  const [applyJob, setApplyJob] = useState<typeof JOBS[0] | null>(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetModal = (job: typeof JOBS[0]) => {
    setApplyJob(job);
    setSubmitted(false);
    setCvFile(null);
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative flex items-end pb-20 pt-36 overflow-hidden" style={{ backgroundColor: "#0C1E35", minHeight: "460px" }}>
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&h=700&fit=crop&auto=format"
          alt="Engineering careers"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.22 }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #0C1E35 0%, rgba(12,30,53,0.5) 100%)" }} />
        <div className="relative max-w-screen-xl mx-auto px-6 lg:px-10 w-full">
          <SectionLabel>Join Our Team</SectionLabel>
          <h1 className="text-white max-w-3xl" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(38px, 5vw, 72px)", fontWeight: 800, lineHeight: 1.0 }}>
            Build Your Career in Marine & Offshore Engineering
          </h1>
          <p className="mt-4 text-lg max-w-2xl" style={{ color: "rgba(255,255,255,0.65)" }}>
            Join a team of over 85 engineers delivering complex projects for international clients across West Africa.
          </p>
        </div>
      </section>

      {/* Why work here */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: "#fff" }}>
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <SectionLabel>Why 3C Marine Engineering?</SectionLabel>
          <h2 className="mb-12" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700, color: "#0C1E35", lineHeight: 1.05 }}>
            Where Engineering Professionals Thrive
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { Icon: GlobeIcon, title: "International Projects", body: "Work on complex engineering projects for global oil companies, port authorities, and maritime operators." },
              { Icon: TrendingUpIcon, title: "Career Development", body: "Structured training programmes, mentorship, and clear progression pathways for all disciplines." },
              { Icon: GraduationCapIcon, title: "Graduate Programme", body: "A dedicated two-year graduate development programme placing engineers across all service lines." },
              { Icon: ShieldIcon, title: "Safety-First Culture", body: "Work in an environment where your safety is the number one priority — always." },
            ].map((item) => (
              <div key={item.title} className="rounded-lg p-6" style={{ backgroundColor: "#F4F7F9", border: "1px solid #E8EEF3" }}>
                <div className="w-11 h-11 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: "#FFF0E8" }}>
                  <item.Icon size={22} color="#E85C0D" />
                </div>
                <h3 className="font-bold mb-2 text-xl" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#0C1E35" }}>
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#7A90A4" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current openings */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: "#F4F7F9" }}>
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <SectionLabel>Vacancies</SectionLabel>
          <h2 className="mb-12" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700, color: "#0C1E35", lineHeight: 1.05 }}>
            Current Opportunities
          </h2>

          <div className="flex flex-col gap-4">
            {JOBS.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-lg p-6 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 border"
                style={{ borderColor: "#E8EEF3" }}
              >
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span
                      className="text-xs font-semibold px-2 py-0.5 rounded"
                      style={{ backgroundColor: job.type === "Graduate Programme" ? "#E8EEF3" : "#FFF0E8", color: job.type === "Graduate Programme" ? "#5B6E82" : "#E85C0D", fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.08em" }}
                    >
                      {job.type}
                    </span>
                    <span className="text-xs" style={{ color: "#A0B2C1" }}>{job.department}</span>
                  </div>
                  <h3 className="font-bold text-xl mb-1" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#0C1E35" }}>
                    {job.title}
                  </h3>
                  <p className="text-sm mb-2 flex items-center gap-1.5" style={{ color: "#A0B2C1" }}>
                    <MapPinIcon size={13} color="#E85C0D" />
                    {job.location}
                  </p>
                  <p className="text-sm" style={{ color: "#7A90A4" }}>{job.description}</p>
                </div>
                <button
                  onClick={() => resetModal(job)}
                  className="flex-shrink-0 font-semibold py-3 px-6 rounded transition-all duration-150 hover:opacity-90"
                  style={{ backgroundColor: "#0C1E35", color: "#fff", fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.08em", fontSize: "14px" }}
                >
                  APPLY NOW
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Graduate section */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: "#0C1E35" }}>
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionLabel>Graduate Programme</SectionLabel>
            <h2 className="text-white mb-6" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700, lineHeight: 1.05 }}>
              Start Your Engineering Career With 3C
            </h2>
            <p className="mb-5 leading-relaxed" style={{ color: "rgba(255,255,255,0.65)", fontSize: "17px" }}>
              Our Graduate Engineer Programme is a structured two-year development experience designed to give high-calibre engineering graduates exposure across all our service disciplines — marine, offshore, fabrication, and inspection.
            </p>
            <ul className="flex flex-col gap-3 mb-8">
              {[
                "Rotations across all engineering service lines",
                "Mentoring by senior Chartered Engineers",
                "Sponsorship towards professional chartership",
                "Site and offshore field exposure",
                "Fast-track to permanent engineering roles",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
                  <span style={{ color: "#E85C0D" }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <button
              onClick={() => resetModal(JOBS.find((j) => j.type === "Graduate Programme")!)}
              className="font-semibold py-3 px-7 rounded"
              style={{ backgroundColor: "#E85C0D", color: "#fff", fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.08em", fontSize: "15px" }}
            >
              APPLY TO THE GRADUATE PROGRAMME
            </button>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop&auto=format"
              alt="Graduate engineers"
              className="w-full rounded-lg"
              style={{ aspectRatio: "4/3", objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* Application modal */}
      {applyJob && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(6,15,28,0.9)" }}
          onClick={() => setApplyJob(null)}
        >
          <div className="bg-white rounded-xl max-w-lg w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <p className="text-xs font-semibold mb-1" style={{ color: "#E85C0D", letterSpacing: "0.1em", fontFamily: "'Barlow Condensed', sans-serif" }}>
                    APPLICATION
                  </p>
                  <h2 className="font-bold text-2xl" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#0C1E35" }}>
                    {applyJob.title}
                  </h2>
                  <p className="text-sm mt-1 flex items-center gap-1.5" style={{ color: "#A0B2C1" }}>
                    <MapPinIcon size={13} color="#E85C0D" />
                    {applyJob.location}
                  </p>
                </div>
                <button onClick={() => setApplyJob(null)} className="text-xl text-steel-400" style={{ color: "#A0B2C1" }}>×</button>
              </div>

              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: "#FFF0E8" }}>
                    <BadgeCheckIcon size={32} color="#E85C0D" />
                  </div>
                  <h3 className="font-bold text-xl mb-2" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#0C1E35" }}>Application Submitted</h3>
                  <p className="text-sm" style={{ color: "#7A90A4" }}>Thank you for your interest. Our HR team will review your application and be in touch within 5 working days.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  {[
                    { label: "Full Name", key: "name", type: "text", placeholder: "Your full name" },
                    { label: "Email Address", key: "email", type: "email", placeholder: "your@email.com" },
                    { label: "Phone Number", key: "phone", type: "tel", placeholder: "+233 XX XXX XXXX" },
                  ].map((field) => (
                    <div key={field.key}>
                      <label className="block text-xs font-semibold mb-1.5" style={{ color: "#5B6E82", letterSpacing: "0.08em" }}>
                        {field.label.toUpperCase()}
                      </label>
                      <input
                        type={field.type}
                        required
                        placeholder={field.placeholder}
                        value={form[field.key as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg outline-none text-sm transition-colors"
                        style={{ border: "1px solid #C8D5DF", color: "#0C1E35", backgroundColor: "#fff" }}
                      />
                    </div>
                  ))}
                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: "#5B6E82", letterSpacing: "0.08em" }}>
                      COVER NOTE
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about yourself and why you're interested in this role..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg outline-none text-sm resize-none"
                      style={{ border: "1px solid #C8D5DF", color: "#0C1E35" }}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: "#5B6E82", letterSpacing: "0.08em" }}>
                      UPLOAD CV / RESUME *
                    </label>
                    <label
                      className="flex items-center gap-3 w-full px-4 py-3 rounded-lg cursor-pointer transition-colors"
                      style={{ border: `2px dashed ${cvFile ? "#E85C0D" : "#C8D5DF"}`, backgroundColor: cvFile ? "#FFF0E8" : "#fff" }}
                    >
                      <span className="text-xl">{cvFile ? "📄" : "📎"}</span>
                      <span className="text-sm flex-1" style={{ color: cvFile ? "#E85C0D" : "#A0B2C1" }}>
                        {cvFile ? cvFile.name : "Click to upload your CV (PDF, DOC, DOCX — max 5MB)"}
                      </span>
                      {cvFile && (
                        <button type="button" onClick={(e) => { e.preventDefault(); setCvFile(null); }} className="text-xs" style={{ color: "#A0B2C1" }}>Remove</button>
                      )}
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                        className="hidden"
                        onChange={(e) => setCvFile(e.target.files?.[0] || null)}
                      />
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="font-semibold py-4 rounded mt-2"
                    style={{ backgroundColor: "#E85C0D", color: "#fff", fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.08em", fontSize: "15px" }}
                  >
                    SUBMIT APPLICATION
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
