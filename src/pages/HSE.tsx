import { Link } from "react-router-dom";
import { CERTIFICATIONS } from "../data/mock";
import { ShieldIcon, LeafIcon, BadgeCheckIcon } from "../components/Icons";

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

const HSE_STATS = [
  { value: "1M+", label: "Man-Hours Without LTI" },
  { value: "0", label: "Fatalities in 25 Years" },
  { value: "ISO 45001", label: "OHS Certified" },
  { value: "ISO 14001", label: "Env. Management" },
];

export default function HSE() {
  return (
    <div>
      {/* Hero */}
      <section className="relative flex items-end pb-20 pt-36 overflow-hidden" style={{ backgroundColor: "#0C1E35", minHeight: "500px" }}>
        <img
          src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1600&h=700&fit=crop&auto=format"
          alt="Safety engineering team"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.25 }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #0C1E35 0%, rgba(12,30,53,0.5) 100%)" }} />
        <div className="relative max-w-screen-xl mx-auto px-6 lg:px-10 w-full">
          <SectionLabel>Health, Safety & Environment</SectionLabel>
          <h1
            className="text-white max-w-3xl"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(38px, 5vw, 72px)", fontWeight: 800, lineHeight: 1.0 }}
          >
            Safety Is Not A Priority — It's A Value
          </h1>
          <p className="mt-4 text-lg max-w-2xl" style={{ color: "rgba(255,255,255,0.65)" }}>
            At 3C Marine Engineering, no project, deadline, or commercial objective ever overrides the safety of our people and the protection of the environment.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section style={{ backgroundColor: "#E85C0D" }}>
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 py-12 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-white/20">
          {HSE_STATS.map((s) => (
            <div key={s.label} className="lg:px-10 text-center lg:text-left">
              <div className="font-bold mb-1 text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(32px, 4vw, 52px)", lineHeight: 1 }}>
                {s.value}
              </div>
              <div className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.75)" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Safety Philosophy */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: "#fff" }}>
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionLabel>Safety Philosophy</SectionLabel>
            <h2 className="mb-6" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700, color: "#0C1E35", lineHeight: 1.05 }}>
              Every Worker Home Safe. Every Day.
            </h2>
            <p className="mb-5 leading-relaxed text-lg" style={{ color: "#5B6E82" }}>
              Our HSE management system is built around the belief that all accidents are preventable. We invest continuously in training, equipment, procedures, and leadership behaviours to build a safety culture where every individual feels empowered to stop unsafe work.
            </p>
            <p className="mb-8 leading-relaxed" style={{ color: "#5B6E82", fontSize: "17px" }}>
              Our HSE team operates independently with direct reporting to the Managing Director, ensuring safety is never compromised by operational or commercial pressures.
            </p>
            <ul className="flex flex-col gap-3">
              {[
                "Stop work authority for every employee",
                "Daily pre-task safety briefings (toolbox talks)",
                "Near-miss reporting and learning system",
                "Monthly HSE audits across all sites",
                "Annual emergency response drills",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm" style={{ color: "#5B6E82" }}>
                  <span className="w-5 h-5 rounded-full flex items-center justify-center text-xs flex-shrink-0" style={{ backgroundColor: "#E85C0D", color: "#fff" }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop&auto=format"
              alt="Safety team"
              className="w-full rounded-lg"
              style={{ aspectRatio: "4/3", objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* Three pillars */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: "#F4F7F9" }}>
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <SectionLabel>Our HSE Framework</SectionLabel>
          <h2 className="mb-14" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700, color: "#0C1E35", lineHeight: 1.05 }}>
            Three Pillars of Responsible Engineering
          </h2>

          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                Icon: ShieldIcon,
                title: "Health & Safety",
                points: [
                  "ISO 45001:2018 certified OHS system",
                  "Behavioural safety programme",
                  "Competency-based training matrix",
                  "Incident investigation and CAPA",
                  "Health surveillance for high-risk roles",
                ],
              },
              {
                Icon: LeafIcon,
                title: "Environmental Responsibility",
                points: [
                  "ISO 14001:2015 certified EMS",
                  "Marine pollution prevention plans",
                  "Waste segregation and disposal protocols",
                  "Chemical and fuel spill response",
                  "Emissions monitoring and reporting",
                ],
              },
              {
                Icon: BadgeCheckIcon,
                title: "Quality Management",
                points: [
                  "ISO 9001:2015 certified QMS",
                  "Third-party inspection and verification",
                  "Detailed inspection and test plans",
                  "Non-conformance management",
                  "Continuous improvement programme",
                ],
              },
            ].map((pillar) => (
              <div key={pillar.title} className="rounded-lg p-8 bg-white" style={{ border: "1px solid #E8EEF3" }}>
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-5" style={{ backgroundColor: "#FFF0E8" }}>
                  <pillar.Icon size={24} color="#E85C0D" />
                </div>
                <h3 className="font-bold mb-5 text-2xl" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#0C1E35" }}>
                  {pillar.title}
                </h3>
                <ul className="flex flex-col gap-3">
                  {pillar.points.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-sm" style={{ color: "#5B6E82" }}>
                      <span style={{ color: "#E85C0D", marginTop: "2px" }}>▸</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: "#0C1E35" }}>
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <SectionLabel>Accreditations</SectionLabel>
          <h2 className="text-white mb-12" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700, lineHeight: 1.05 }}>
            Certifications & Standards
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CERTIFICATIONS.map((cert) => (
              <div key={cert.name} className="rounded-lg p-6" style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <div className="font-bold text-2xl mb-1" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#E85C0D" }}>
                  {cert.name}
                </div>
                <div className="font-semibold text-white mb-1" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "17px" }}>
                  {cert.body}
                </div>
                <div className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>Issued by {cert.issuer}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: "#E85C0D" }}>
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-white font-bold mb-2" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(28px, 4vw, 48px)", lineHeight: 1.05 }}>
              Request Our HSE Documentation
            </h2>
            <p className="text-white/80 text-lg">Pre-qualification packages and safety statistics available on request.</p>
          </div>
          <Link
            to="/contact"
            className="font-semibold py-4 px-8 rounded flex-shrink-0"
            style={{ backgroundColor: "#fff", color: "#E85C0D", fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.08em", fontSize: "15px" }}
          >
            GET IN TOUCH
          </Link>
        </div>
      </section>
    </div>
  );
}
