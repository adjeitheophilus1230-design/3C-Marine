import { useState } from "react";
import { Link } from "react-router-dom";
import { SERVICES } from "../data/mock";

function SectionLabel({ children, light = false }: { children: string; light?: boolean }) {
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

export default function Services() {
  const [activeService, setActiveService] = useState(SERVICES[0]);

  return (
    <div>
      {/* Hero */}
      <section
        className="relative flex items-end pb-20 pt-36 overflow-hidden"
        style={{ backgroundColor: "#0C1E35", minHeight: "460px" }}
      >
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&h=700&fit=crop&auto=format"
          alt="Engineering services"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.2 }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #0C1E35 0%, rgba(12,30,53,0.5) 100%)" }} />
        <div className="relative max-w-screen-xl mx-auto px-6 lg:px-10 w-full">
          <SectionLabel>Engineering Capability</SectionLabel>
          <h1
            className="text-white max-w-3xl"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(38px, 5vw, 72px)", fontWeight: 800, lineHeight: 1.0 }}
          >
            Our Services
          </h1>
          <p className="mt-4 text-lg max-w-2xl" style={{ color: "rgba(255,255,255,0.65)" }}>
            Nine integrated engineering disciplines, delivered from one experienced team to international standards.
          </p>
        </div>
      </section>

      {/* Service detail panel */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: "#fff" }}>
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Sidebar tabs */}
            <div>
              <p
                className="text-xs font-semibold mb-4 tracking-widest"
                style={{ color: "#A0B2C1", fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.14em" }}
              >
                SELECT A SERVICE
              </p>
              <nav className="flex flex-col gap-1">
                {SERVICES.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setActiveService(s)}
                    className="flex items-center gap-3 text-left px-4 py-3 rounded transition-all duration-150"
                    style={{
                      backgroundColor: activeService.id === s.id ? "#0C1E35" : "transparent",
                      color: activeService.id === s.id ? "#fff" : "#5B6E82",
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontSize: "17px",
                      fontWeight: 600,
                      letterSpacing: "0.02em",
                      borderLeft: activeService.id === s.id ? "3px solid #E85C0D" : "3px solid transparent",
                    }}
                  >
                    <span>{s.icon}</span>
                    {s.title}
                  </button>
                ))}
              </nav>
            </div>

            {/* Detail panel */}
            <div className="lg:col-span-2">
              <div key={activeService.id}>
                <div
                  className="rounded-lg overflow-hidden mb-8"
                  style={{ height: "320px", backgroundColor: "#1C354F" }}
                >
                  <img
                    src={activeService.image}
                    alt={activeService.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{activeService.icon}</span>
                  <h2
                    style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "36px", fontWeight: 700, color: "#0C1E35" }}
                  >
                    {activeService.title}
                  </h2>
                </div>

                <p className="mb-8 leading-relaxed text-lg" style={{ color: "#5B6E82" }}>
                  {activeService.description}
                </p>

                <div className="grid sm:grid-cols-2 gap-10 mb-10">
                  <div>
                    <h4
                      className="font-bold mb-4 text-lg"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#0C1E35" }}
                    >
                      Core Capabilities
                    </h4>
                    <ul className="flex flex-col gap-2.5">
                      {activeService.capabilities.map((c) => (
                        <li key={c} className="flex items-start gap-3 text-sm" style={{ color: "#5B6E82" }}>
                          <span className="mt-1 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-xs" style={{ backgroundColor: "#E85C0D", color: "#fff" }}>✓</span>
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4
                      className="font-bold mb-4 text-lg"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#0C1E35" }}
                    >
                      Equipment & Technology
                    </h4>
                    <ul className="flex flex-col gap-2.5">
                      {activeService.equipment.map((e) => (
                        <li key={e} className="flex items-start gap-3 text-sm" style={{ color: "#5B6E82" }}>
                          <span style={{ color: "#E85C0D" }}>▸</span>
                          {e}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Link
                  to="/request-quote"
                  className="inline-flex items-center gap-2 font-semibold py-3 px-7 rounded"
                  style={{ backgroundColor: "#E85C0D", color: "#fff", fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.08em", fontSize: "15px" }}
                >
                  REQUEST A QUOTE FOR {activeService.title.toUpperCase()}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process section */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: "#0C1E35" }}>
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <SectionLabel>How We Work</SectionLabel>
          <h2
            className="text-white mb-14"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700, lineHeight: 1.05 }}
          >
            Our Delivery Process
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Enquiry & Scope", body: "We engage closely with the client to fully understand technical requirements, site conditions, and commercial constraints." },
              { step: "02", title: "Engineering & Planning", body: "Our engineers develop detailed designs, method statements, and project execution plans reviewed by senior management." },
              { step: "03", title: "Execution", body: "Mobilised teams deliver work to the approved scope with daily HSE and quality monitoring throughout." },
              { step: "04", title: "Close-out & Handover", body: "Thorough documentation, as-built records, and formal handover ensure a clean transition to operations." },
            ].map((item) => (
              <div key={item.step} className="rounded-lg p-6" style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div
                  className="font-bold mb-3 text-5xl"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "rgba(232,92,13,0.25)" }}
                >
                  {item.step}
                </div>
                <h3
                  className="font-bold text-white text-xl mb-3"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
