import { useState } from "react";
import { Link } from "react-router-dom";
import { INDUSTRIES } from "../data/mock";

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

export default function Industries() {
  const [active, setActive] = useState(INDUSTRIES[0]);

  return (
    <div>
      {/* Hero */}
      <section className="relative flex items-end pb-20 pt-36 overflow-hidden" style={{ backgroundColor: "#0C1E35", minHeight: "460px" }}>
        <img
          src="https://images.unsplash.com/photo-1563803444671-b8a07a3a79a6?w=1600&h=700&fit=crop&auto=format"
          alt="Industries served"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.22 }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #0C1E35 0%, rgba(12,30,53,0.5) 100%)" }} />
        <div className="relative max-w-screen-xl mx-auto px-6 lg:px-10 w-full">
          <SectionLabel>Sectors We Serve</SectionLabel>
          <h1
            className="text-white max-w-3xl"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(38px, 5vw, 72px)", fontWeight: 800, lineHeight: 1.0 }}
          >
            Industries
          </h1>
          <p className="mt-4 text-lg max-w-2xl" style={{ color: "rgba(255,255,255,0.65)" }}>
            Serving the most demanding engineering sectors across marine, energy, and industrial markets.
          </p>
        </div>
      </section>

      {/* Industry selector */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: "#fff" }}>
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* List */}
            <div>
              <p className="text-xs font-semibold mb-4 tracking-widest" style={{ color: "#A0B2C1", fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.14em" }}>
                SELECT AN INDUSTRY
              </p>
              <nav className="flex flex-col gap-1">
                {INDUSTRIES.map((ind) => (
                  <button
                    key={ind.id}
                    onClick={() => setActive(ind)}
                    className="text-left px-4 py-3.5 rounded transition-all duration-150"
                    style={{
                      backgroundColor: active.id === ind.id ? "#0C1E35" : "transparent",
                      color: active.id === ind.id ? "#fff" : "#5B6E82",
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontSize: "18px",
                      fontWeight: 600,
                      borderLeft: `3px solid ${active.id === ind.id ? "#E85C0D" : "transparent"}`,
                    }}
                  >
                    {ind.title}
                  </button>
                ))}
              </nav>
            </div>

            {/* Detail */}
            <div className="lg:col-span-2">
              <div key={active.id}>
                <div className="rounded-lg overflow-hidden mb-8" style={{ height: "300px", backgroundColor: "#1C354F" }}>
                  <img src={active.image} alt={active.title} className="w-full h-full object-cover" />
                </div>

                <h2 className="font-bold mb-4 text-4xl" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#0C1E35" }}>
                  {active.title}
                </h2>
                <p className="mb-6 leading-relaxed text-lg" style={{ color: "#5B6E82" }}>
                  {active.description}
                </p>

                <div className="grid sm:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="font-bold mb-3 text-lg" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#0C1E35" }}>
                      Services Delivered
                    </h4>
                    <ul className="flex flex-col gap-2">
                      {active.services.map((s) => (
                        <li key={s} className="flex items-center gap-3 text-sm" style={{ color: "#5B6E82" }}>
                          <span className="w-4 h-4 rounded-full flex items-center justify-center text-xs flex-shrink-0" style={{ backgroundColor: "#E85C0D", color: "#fff" }}>✓</span>
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-lg p-5" style={{ backgroundColor: "#F4F7F9", border: "1px solid #E8EEF3" }}>
                    <p className="text-xs font-semibold mb-2" style={{ color: "#E85C0D", letterSpacing: "0.1em", fontFamily: "'Barlow Condensed', sans-serif" }}>
                      OUR CLIENTS
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: "#5B6E82" }}>
                      {active.clients}
                    </p>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 font-semibold py-3 px-7 rounded"
                  style={{ backgroundColor: "#E85C0D", color: "#fff", fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.08em", fontSize: "15px" }}
                >
                  DISCUSS YOUR {active.title.toUpperCase()} PROJECT →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry stats */}
      <section className="py-20" style={{ backgroundColor: "#0C1E35" }}>
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "12+", label: "Industries Served" },
              { value: "8", label: "Countries Active" },
              { value: "40+", label: "Active Clients" },
              { value: "100%", label: "Repeat Client Rate" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-bold mb-1" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(36px, 5vw, 56px)", color: "#E85C0D", lineHeight: 1 }}>
                  {s.value}
                </div>
                <div className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
