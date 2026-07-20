import { useState } from "react";
import { PROJECTS } from "../data/mock";

const CATEGORIES = ["All", "Marine", "Offshore", "Fabrication", "Inspection"];

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

export default function Projects() {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState<typeof PROJECTS[0] | null>(null);

  const filtered = active === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  return (
    <div>
      {/* Hero */}
      <section
        className="relative flex items-end pb-20 pt-36 overflow-hidden"
        style={{ backgroundColor: "#0C1E35", minHeight: "460px" }}
      >
        <img
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1600&h=700&fit=crop&auto=format"
          alt="Offshore projects"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.22 }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #0C1E35 0%, rgba(12,30,53,0.5) 100%)" }} />
        <div className="relative max-w-screen-xl mx-auto px-6 lg:px-10 w-full">
          <SectionLabel>Project Portfolio</SectionLabel>
          <h1
            className="text-white max-w-3xl"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(38px, 5vw, 72px)", fontWeight: 800, lineHeight: 1.0 }}
          >
            Our Projects
          </h1>
          <p className="mt-4 text-lg max-w-2xl" style={{ color: "rgba(255,255,255,0.65)" }}>
            Over 150 completed projects across marine, offshore, fabrication, and industrial sectors in West Africa and beyond.
          </p>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: "#F4F7F9" }}>
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          {/* Filter bar */}
          <div className="flex flex-wrap items-center gap-2 mb-12">
            <span className="text-sm font-semibold mr-2" style={{ color: "#5B6E82", letterSpacing: "0.06em" }}>FILTER:</span>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className="px-5 py-2 rounded text-sm font-semibold transition-all duration-150"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  letterSpacing: "0.06em",
                  backgroundColor: active === cat ? "#0C1E35" : "#fff",
                  color: active === cat ? "#fff" : "#5B6E82",
                  border: `1px solid ${active === cat ? "#0C1E35" : "#C8D5DF"}`,
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Project grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <button
                key={p.id}
                onClick={() => setSelected(p)}
                className="group text-left rounded-lg overflow-hidden bg-white border hover:border-orange-500 transition-all duration-200"
                style={{ borderColor: "#C8D5DF" }}
              >
                <div className="overflow-hidden relative" style={{ height: "220px", backgroundColor: "#1C354F" }}>
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute top-3 left-3 px-2.5 py-1 rounded text-xs font-semibold"
                    style={{ backgroundColor: "#E85C0D", color: "#fff", fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.08em" }}
                  >
                    {p.category}
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs mb-2 font-semibold" style={{ color: "#A0B2C1", letterSpacing: "0.06em" }}>
                    {p.client} · {p.year}
                  </p>
                  <h3
                    className="font-bold mb-2 text-xl group-hover:text-orange-500 transition-colors"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#0C1E35", lineHeight: 1.2 }}
                  >
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#7A90A4" }}>
                    {p.scope.slice(0, 90)}...
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <span className="text-xs" style={{ color: "#A0B2C1" }}>📍 {p.location}</span>
                    <span style={{ color: "#C8D5DF" }}>·</span>
                    <span className="text-xs" style={{ color: "#A0B2C1" }}>⏱ {p.duration}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Project detail modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(6,15,28,0.9)" }}
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative" style={{ height: "300px", backgroundColor: "#1C354F" }}>
              <img src={selected.image} alt={selected.title} className="w-full h-full object-cover" />
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-white text-lg"
                style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
              >
                ×
              </button>
              <div
                className="absolute top-4 left-4 px-3 py-1 rounded text-xs font-semibold"
                style={{ backgroundColor: "#E85C0D", color: "#fff", fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.08em" }}
              >
                {selected.category}
              </div>
            </div>
            <div className="p-8">
              <p className="text-xs font-semibold mb-2" style={{ color: "#E85C0D", letterSpacing: "0.1em", fontFamily: "'Barlow Condensed', sans-serif" }}>
                {selected.client} · {selected.location} · {selected.year}
              </p>
              <h2 className="font-bold mb-6 text-3xl" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#0C1E35" }}>
                {selected.title}
              </h2>

              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div className="rounded-lg p-4" style={{ backgroundColor: "#F4F7F9" }}>
                  <p className="text-xs font-semibold mb-1" style={{ color: "#A0B2C1", letterSpacing: "0.1em" }}>DURATION</p>
                  <p className="font-semibold" style={{ color: "#0C1E35" }}>{selected.duration}</p>
                </div>
                <div className="rounded-lg p-4" style={{ backgroundColor: "#F4F7F9" }}>
                  <p className="text-xs font-semibold mb-1" style={{ color: "#A0B2C1", letterSpacing: "0.1em" }}>LOCATION</p>
                  <p className="font-semibold" style={{ color: "#0C1E35" }}>{selected.location}</p>
                </div>
              </div>

              {[
                { label: "Project Scope", value: selected.scope },
                { label: "Challenge", value: selected.challenge },
                { label: "Solution", value: selected.solution },
                { label: "Results", value: selected.results },
              ].map((item) => (
                <div key={item.label} className="mb-5">
                  <p className="text-xs font-semibold mb-2" style={{ color: "#E85C0D", letterSpacing: "0.1em", fontFamily: "'Barlow Condensed', sans-serif" }}>
                    {item.label.toUpperCase()}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "#5B6E82" }}>{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
