import { useState } from "react";
import { Link } from "react-router-dom";
import { useCMS } from "../context/CMSContext";
import { ShieldIcon, GlobeIcon, StarIcon, CheckIcon, ChevronRightIcon } from "../components/Icons";

function SectionLabel({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="w-8 h-px" style={{ backgroundColor: "#E85C0D" }} />
      <span
        className="text-xs font-semibold tracking-widest uppercase"
        style={{ color: "#E85C0D", fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.16em" }}
      >
        {children}
      </span>
    </div>
  );
}

function PageHero({ title, subtitle, image, altText }: { title: string; subtitle: string; image: string; altText?: string }) {
  return (
    <section
      className="relative flex items-end pb-20 pt-36 overflow-hidden"
      style={{ backgroundColor: "#0C1E35", minHeight: "480px" }}
    >
      <img src={image} alt={altText || `${title} - Tema, Ghana & West Africa Marine Operations`} className="absolute inset-0 w-full h-full object-cover scale-105 transition-transform duration-10000 opacity-25" />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #0C1E35 0%, rgba(12,30,53,0.6) 100%)" }} />
      <div className="relative max-w-screen-xl mx-auto px-6 lg:px-10 w-full">
        <SectionLabel>About 3C Marine Engineering</SectionLabel>
        <h1
          className="text-white max-w-3xl"
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: "clamp(38px, 5vw, 72px)",
            fontWeight: 800,
            lineHeight: 1.0,
          }}
        >
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg" style={{ color: "rgba(255,255,255,0.65)" }}>
          {subtitle}
        </p>
      </div>
    </section>
  );
}

export default function About() {
  const { team, timeline } = useCMS();
  const [activeTab, setActiveTab] = useState<"mission" | "vision" | "values">("mission");

  const pillars = [
    {
      id: "mission",
      label: "Our Mission",
      title: "Engineering Reliability Into Every Maritime & Offshore Project",
      subtitle: "West Africa's Premier Engineering Execution Partner",
      body: "To deliver high-quality, safe, and innovative engineering solutions that meet the complex demands of marine, offshore, and industrial clients — contributing to the sustainable development of West Africa's energy and maritime sectors.",
      icon: ShieldIcon,
      stats: [
        { value: "100%", label: "Local Ghanaian Technical Ownership" },
        { value: "Zero LTIs", label: "Proven Safety Track Record" },
        { value: "150+", label: "Completed Offshore & Marine Contracts" }
      ],
      highlights: [
        "ISO 9001:2015 & ISO 45001 Certified Quality Systems",
        "Deepwater Subsea & FPSO Overhaul Capabilities",
        "4,500m² Dedicated Fabrication Yard in Tema Industrial Area",
        "24/7 Emergency Marine Maintenance & Underwater ROV Teams"
      ]
    },
    {
      id: "vision",
      label: "Our Vision",
      title: "Africa's Marine & Offshore Engineering Partner of Choice",
      subtitle: "International Standards Driven by Local Expertise",
      body: "To be the premier engineering company in West Africa, recognised internationally for technical excellence, operational safety, and the continuous development of local engineering talent across Ghana, Côte d'Ivoire, and Nigeria.",
      icon: GlobeIcon,
      stats: [
        { value: "2028", label: "Pan-African Expansion Horizon" },
        { value: "85+", label: "Certified Resident Engineering Specialists" },
        { value: "Top 3", label: "Sub-Saharan Marine Contractors" }
      ],
      highlights: [
        "Developing Next-Generation Ghanaian Marine Engineers",
        "Advanced NDT Laboratory & 3D Laser Scanning Technology",
        "Strategic Partnerships with Major International Oil Companies",
        "Expanding Supply Bases Across Gulf of Guinea Maritime Corridors"
      ]
    },
    {
      id: "values",
      label: "Our Values",
      title: "Unwavering Safety, Integrity, and Technical Excellence",
      subtitle: "The Principles Governing Every Project We Undertake",
      body: "We operate with an uncompromising commitment to safety above all else, conduct ourselves with absolute integrity in every client interaction, and pursue technical perfection across all engineering deliverables.",
      icon: StarIcon,
      stats: [
        { value: "1M+", label: "LTI-Free Cumulative Work Hours" },
        { value: "100%", label: "Regulatory & Class Society Compliance" },
        { value: "25 Yrs", label: "Unblemished Corporate Reputation" }
      ],
      highlights: [
        "Safety Above All: Zero Compromise on Personnel Protection",
        "Integrity: Transparent Tender Pricing & Quality Delivery",
        "Excellence: ASME & AWS Certified High-Spec Fabrication",
        "Sustainability: Eco-Friendly Marine Asset Maintenance"
      ]
    }
  ];

  const currentPillar = pillars.find((p) => p.id === activeTab) || pillars[0];
  const IconComp = currentPillar.icon;

  return (
    <div>
      <PageHero
        title="25 Years of Engineering Excellence in Marine & Offshore"
        subtitle="From humble beginnings in Tema's port district to becoming West Africa's most trusted marine engineering contractor."
        image="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1600&h=700&fit=crop&auto=format"
      />

      {/* ─── SLEEK INTERACTIVE MISSION / VISION / VALUES ───────────────── */}
      <section className="py-24 lg:py-32 relative overflow-hidden" style={{ backgroundColor: "#060F1C" }}>
        {/* Ambient Light Accent */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 relative z-10">
          <SectionLabel>Corporate Identity</SectionLabel>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
            <div>
              <h2
                className="text-white"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "clamp(32px, 4vw, 52px)",
                  fontWeight: 800,
                  lineHeight: 1.05,
                }}
              >
                Driven by Purpose. Defined by Integrity.
              </h2>
              <p className="text-slate-400 mt-2 max-w-xl text-base">
                Discover the core pillars that guide our engineering operations across West Africa.
              </p>
            </div>

            {/* Tab Controller Buttons */}
            <div className="flex bg-white/5 p-1.5 rounded-xl border border-white/10 backdrop-blur-md">
              {pillars.map((p) => {
                const isActive = activeTab === p.id;
                return (
                  <button
                    key={p.id}
                    onClick={() => setActiveTab(p.id as any)}
                    className={`px-6 py-3 rounded-lg font-bold text-xs transition-all duration-300 flex items-center gap-2 ${
                      isActive ? "bg-orange-600 text-white shadow-lg shadow-orange-600/30 scale-105" : "text-slate-400 hover:text-white hover:bg-white/5"
                    }`}
                    style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.08em" }}
                  >
                    {p.label.toUpperCase()}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Pillar Showcase Card */}
          <div className="rounded-3xl p-8 lg:p-12 border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-xl shadow-2xl relative transition-all duration-500">
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-wider" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  <IconComp size={16} />
                  <span>{currentPillar.subtitle}</span>
                </div>

                <h3 className="text-3xl lg:text-4xl font-extrabold text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif", lineHeight: 1.1 }}>
                  {currentPillar.title}
                </h3>

                <p className="text-slate-300 text-base leading-relaxed">
                  {currentPillar.body}
                </p>

                {/* Bullet Points */}
                <div className="grid sm:grid-cols-2 gap-3 pt-2">
                  {currentPillar.highlights.map((h, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckIcon size={12} />
                      </div>
                      <span className="text-xs text-slate-300 font-medium">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats & Key Performance Pillar Box */}
              <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-2xl p-6 lg:p-8 space-y-6 backdrop-blur-md">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-white/10 pb-3" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  BENCHMARK METRICS
                </h4>
                <div className="space-y-6">
                  {currentPillar.stats.map((st, i) => (
                    <div key={i} className="flex items-center justify-between group">
                      <div>
                        <div className="text-3xl font-extrabold text-orange-500 group-hover:scale-105 transition-transform origin-left" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                          {st.value}
                        </div>
                        <div className="text-xs text-slate-400 font-medium">{st.label}</div>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-orange-500/20 text-slate-400 group-hover:text-orange-400 flex items-center justify-center transition-colors">
                        <ChevronRightIcon size={16} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── COMPANY STORY WITH ENHANCED IMAGE GRID ───────────────────── */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: "#F4F7F9" }}>
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionLabel>Our Story</SectionLabel>
            <h2
              className="mb-6"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "clamp(32px, 4vw, 52px)",
                fontWeight: 700,
                color: "#0C1E35",
                lineHeight: 1.05,
              }}
            >
              Built on the Tema Waterfront. Trusted Across the Region.
            </h2>
            <p className="mb-4 leading-relaxed" style={{ color: "#5B6E82", fontSize: "17px" }}>
              3C Marine Engineering was founded in 1999 by a team of Ghanaian engineers who had spent their careers working for international contractors — and believed it was time to build that capability locally. Starting with a small marine maintenance team serving Tema's fishing and commercial fleet, we grew steadily through technical excellence and safety discipline.
            </p>
            <p className="mb-4 leading-relaxed" style={{ color: "#5B6E82", fontSize: "17px" }}>
              Today, we employ over 85 engineering professionals and maintain a modern fabrication yard, inspection division, and project management office serving clients across Ghana, Côte d'Ivoire, and Nigeria.
            </p>
            <p className="leading-relaxed" style={{ color: "#5B6E82", fontSize: "17px" }}>
              Our growth has been anchored by a simple principle: deliver what you promise, safely, every time.
            </p>

            {/* Quick Badges */}
            <div className="mt-8 flex flex-wrap gap-4 pt-6 border-t border-slate-200">
              <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-xl border border-slate-200 shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center font-bold">
                  🇬🇭
                </div>
                <div>
                  <div className="font-bold text-xs text-navy-900" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>100% GHANAIAN OWNED</div>
                  <div className="text-[11px] text-slate-500">Local Content Pioneer</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-xl border border-slate-200 shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
                  ISO
                </div>
                <div>
                  <div className="font-bold text-xs text-navy-900" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>ISO 9001 & 45001</div>
                  <div className="text-[11px] text-slate-500">Bureau Veritas Certified</div>
                </div>
              </div>
            </div>
          </div>

          {/* Dynamic Layered Image Composition */}
          <div className="relative">
            {/* Primary Main Image */}
            <div className="overflow-hidden rounded-2xl shadow-2xl border-4 border-white group">
              <img
                src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1000&h=750&fit=crop&auto=format"
                alt="Tema Port Marine Berth & Vessel Maintenance - 3C Marine Operations Ghana"
                className="w-full h-[400px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Secondary Overlapping Sub-Image */}
            <div className="absolute -bottom-10 -left-6 sm:-left-10 w-48 sm:w-64 rounded-xl overflow-hidden shadow-2xl border-4 border-white hidden sm:block group">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop&auto=format"
                alt="Ghanaian Engineering Team Onsite Tema Port Base"
                className="w-full h-36 sm:h-44 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -top-6 -right-6 bg-orange-600 text-white p-5 rounded-2xl shadow-xl flex flex-col items-center justify-center text-center animate-bounce-subtle" style={{ backgroundColor: "#E85C0D" }}>
              <span className="text-3xl font-extrabold" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>25+</span>
              <span className="text-[10px] font-bold tracking-wider uppercase" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Years Excellence</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ANIMATED TIMELINE (MILESTONES & GROWTH) ────────────────── */}
      <section className="py-24 lg:py-32 relative overflow-hidden" style={{ backgroundColor: "#0C1E35" }}>
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 relative z-10">
          <SectionLabel>Our Journey</SectionLabel>
          <h2
            className="text-white mb-14"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "clamp(32px, 4vw, 52px)",
              fontWeight: 700,
              lineHeight: 1.05,
            }}
          >
            Milestones & Growth
          </h2>

          <div className="relative">
            {/* Animated Glowing Vertical Connector Line */}
            <div
              className="absolute left-[88px] top-0 bottom-0 w-1 hidden lg:block rounded-full opacity-30"
              style={{ background: "linear-gradient(to bottom, #E85C0D, #254460, #E85C0D)" }}
            />

            <div className="flex flex-col gap-8 relative">
              {timeline.map((item, idx) => (
                <div
                  key={item.year}
                  className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-start group transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Year Node with Animated Pulse Halo */}
                  <div
                    className="flex-shrink-0 font-extrabold text-2xl lg:text-3xl w-24 text-right relative flex lg:block items-center gap-3"
                    style={{ color: "#E85C0D", fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    <span>{item.year}</span>

                    {/* Animated Glowing Node Dot */}
                    <div className="relative hidden lg:inline-block float-right -mr-4 mt-2">
                      <div className="w-4 h-4 rounded-full bg-orange-500 border-2 border-white shadow-lg transition-transform duration-300 group-hover:scale-125 group-hover:bg-white group-hover:border-orange-500" />
                      <div className="absolute inset-0 rounded-full bg-orange-500 animate-ping opacity-40 group-hover:opacity-80" />
                    </div>
                  </div>

                  {/* Card Container with Interactive Hover Border */}
                  <div
                    className="rounded-2xl p-6 lg:p-8 flex-1 border transition-all duration-300 group-hover:border-orange-500/50 group-hover:shadow-2xl group-hover:shadow-orange-500/10 group-hover:bg-white/[0.07]"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.04)",
                      borderColor: "rgba(255,255,255,0.08)",
                      backdropFilter: "blur(12px)"
                    }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3
                        className="font-bold text-white text-xl lg:text-2xl group-hover:text-orange-400 transition-colors"
                        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                      >
                        {item.title}
                      </h3>
                      <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-white/10 text-slate-300 uppercase tracking-widest" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                        MILESTONE 0{idx + 1}
                      </span>
                    </div>

                    <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── ANIMATED LEADERSHIP TEAM ──────────────────────────────── */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: "#fff" }}>
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <SectionLabel>Our People</SectionLabel>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
            <div>
              <h2
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "clamp(32px, 4vw, 52px)",
                  fontWeight: 700,
                  color: "#0C1E35",
                  lineHeight: 1.05,
                }}
              >
                Executive Leadership Team
              </h2>
              <p className="text-slate-500 text-sm mt-1">Seasoned maritime professionals driving engineering innovation in West Africa</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((person) => (
              <div
                key={person.name}
                className="group bg-slate-50 rounded-2xl p-4 border border-slate-200 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-orange-500/30 flex flex-col justify-between"
              >
                <div>
                  {/* Photo with Smooth Zoom & Color Reveal */}
                  <div
                    className="overflow-hidden rounded-xl mb-5 relative"
                    style={{ height: "280px", backgroundColor: "#1C354F" }}
                  >
                    <img
                      src={person.image}
                      alt={person.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-108 transition-all duration-700"
                    />
                    {/* Dark gradient vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

                    {/* Role Pill */}
                    <div className="absolute bottom-3 left-3 right-3">
                      <span className="inline-block px-3 py-1 rounded-md text-[11px] font-bold text-white bg-orange-600/90 backdrop-blur-md shadow" style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.08em" }}>
                        {person.role.toUpperCase()}
                      </span>
                    </div>
                  </div>

                  <h3
                    className="font-bold text-xl mb-1 group-hover:text-orange-600 transition-colors"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#0C1E35" }}
                  >
                    {person.name}
                  </h3>

                  <p className="text-xs leading-relaxed mb-4 text-slate-500">
                    {person.bio}
                  </p>
                </div>

                <a
                  href={person.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full pt-3 border-t border-slate-200 text-xs font-bold text-slate-700 group-hover:text-orange-600 transition-colors"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.06em" }}
                >
                  <span className="flex items-center gap-2">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-orange-500">
                      <path d="M19 0H5C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM8 19H5V8h3v11zM6.5 6.74A1.76 1.76 0 1 1 8.26 5a1.76 1.76 0 0 1-1.76 1.74zM20 19h-3v-5.6c0-3.37-4-3.12-4 0V19h-3V8h3v1.77C14.4 7.5 20 7.34 20 12.74V19z"/>
                    </svg>
                    CONNECT ON LINKEDIN
                  </span>
                  <ChevronRightIcon size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CALL TO ACTION ────────────────────────────────────────── */}
      <section className="py-20 relative overflow-hidden" style={{ backgroundColor: "#E85C0D" }}>
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
          <div>
            <h2
              className="text-white font-bold mb-2"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(28px, 4vw, 48px)", lineHeight: 1.05 }}
            >
              Partner With West Africa's Engineering Leader
            </h2>
            <p className="text-white/80 text-lg max-w-xl">Let's discuss your next marine, offshore, or industrial engineering requirement.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="font-semibold py-4 px-8 rounded-lg shadow-xl transition-transform hover:scale-105 active:scale-95"
              style={{ backgroundColor: "#fff", color: "#E85C0D", fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.08em", fontSize: "15px" }}
            >
              CONTACT OUR ENGINEERS
            </Link>
            <Link
              to="/careers"
              className="font-semibold py-4 px-8 rounded-lg transition-transform hover:scale-105 active:scale-95"
              style={{ backgroundColor: "rgba(0,0,0,0.2)", color: "#fff", fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.08em", fontSize: "15px", border: "1px solid rgba(255,255,255,0.3)" }}
            >
              JOIN OUR WORKFORCE
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
