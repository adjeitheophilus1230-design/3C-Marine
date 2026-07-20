import { useState } from "react";
import { NEWS } from "../data/mock";

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

const CATEGORIES = ["All", "Company News", "HSE", "Industry Insights", "Technical", "Careers"];

export default function News() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selected, setSelected] = useState<typeof NEWS[0] | null>(null);

  const filtered = activeCategory === "All" ? NEWS : NEWS.filter((n) => n.category === activeCategory);

  return (
    <div>
      {/* Hero */}
      <section className="relative flex items-end pb-20 pt-36 overflow-hidden" style={{ backgroundColor: "#0C1E35", minHeight: "420px" }}>
        <img
          src="https://images.unsplash.com/photo-1498624854366-fe47b59658d7?w=1600&h=700&fit=crop&auto=format"
          alt="Marine engineering news"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.2 }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #0C1E35 0%, rgba(12,30,53,0.5) 100%)" }} />
        <div className="relative max-w-screen-xl mx-auto px-6 lg:px-10 w-full">
          <SectionLabel>Latest Updates</SectionLabel>
          <h1 className="text-white max-w-3xl" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(38px, 5vw, 72px)", fontWeight: 800, lineHeight: 1.0 }}>
            News & Insights
          </h1>
        </div>
      </section>

      {/* Articles */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: "#fff" }}>
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-12">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-5 py-2 rounded text-sm font-semibold transition-all duration-150"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  letterSpacing: "0.06em",
                  backgroundColor: activeCategory === cat ? "#0C1E35" : "#F4F7F9",
                  color: activeCategory === cat ? "#fff" : "#5B6E82",
                  border: `1px solid ${activeCategory === cat ? "#0C1E35" : "#E8EEF3"}`,
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured article */}
          {filtered[0] && (
            <button
              onClick={() => setSelected(filtered[0])}
              className="group block w-full rounded-xl overflow-hidden mb-8 bg-white border hover:border-orange-500 transition-colors duration-200 text-left"
              style={{ borderColor: "#E8EEF3" }}
            >
              <div className="grid lg:grid-cols-2">
                <div className="overflow-hidden" style={{ height: "320px", backgroundColor: "#1C354F" }}>
                  <img
                    src={filtered[0].image}
                    alt={filtered[0].title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-8 lg:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-semibold px-3 py-1 rounded" style={{ backgroundColor: "#FFF0E8", color: "#E85C0D", fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.08em" }}>
                      {filtered[0].category}
                    </span>
                    <span className="text-xs" style={{ color: "#A0B2C1" }}>{filtered[0].readTime}</span>
                  </div>
                  <h2
                    className="font-bold mb-4 group-hover:text-orange-500 transition-colors"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(24px, 3vw, 36px)", color: "#0C1E35", lineHeight: 1.15 }}
                  >
                    {filtered[0].title}
                  </h2>
                  <p className="leading-relaxed mb-6" style={{ color: "#7A90A4", fontSize: "16px" }}>
                    {filtered[0].excerpt}
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-xs" style={{ color: "#A0B2C1" }}>
                      {new Date(filtered[0].date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
                    </span>
                    <span style={{ color: "#E85C0D", fontSize: "14px" }}>→</span>
                  </div>
                </div>
              </div>
            </button>
          )}

          {/* Article grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.slice(1).map((article) => (
              <button
                key={article.id}
                onClick={() => setSelected(article)}
                className="group block text-left rounded-lg overflow-hidden bg-white border hover:border-orange-500 transition-colors duration-200"
                style={{ borderColor: "#E8EEF3" }}
              >
                <div className="overflow-hidden" style={{ height: "200px", backgroundColor: "#1C354F" }}>
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold px-2 py-1 rounded" style={{ backgroundColor: "#FFF0E8", color: "#E85C0D", fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.06em" }}>
                      {article.category}
                    </span>
                    <span className="text-xs" style={{ color: "#A0B2C1" }}>{article.readTime}</span>
                  </div>
                  <h3
                    className="font-bold mb-2 group-hover:text-orange-500 transition-colors"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "20px", color: "#0C1E35", lineHeight: 1.2 }}
                  >
                    {article.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#7A90A4" }}>
                    {article.excerpt.slice(0, 100)}...
                  </p>
                  <p className="text-xs mt-4" style={{ color: "#A0B2C1" }}>
                    {new Date(article.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Article modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(6,15,28,0.9)" }}
          onClick={() => setSelected(null)}
        >
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="relative" style={{ height: "280px", backgroundColor: "#1C354F" }}>
              <img src={selected.image} alt={selected.title} className="w-full h-full object-cover" />
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-white text-xl"
                style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
              >×</button>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-semibold px-3 py-1 rounded" style={{ backgroundColor: "#FFF0E8", color: "#E85C0D", fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.08em" }}>
                  {selected.category}
                </span>
                <span className="text-xs" style={{ color: "#A0B2C1" }}>{selected.readTime}</span>
                <span className="text-xs" style={{ color: "#A0B2C1" }}>
                  {new Date(selected.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
                </span>
              </div>
              <h2 className="font-bold mb-5" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "32px", color: "#0C1E35", lineHeight: 1.1 }}>
                {selected.title}
              </h2>
              <p className="leading-relaxed text-lg mb-4" style={{ color: "#5B6E82" }}>{selected.excerpt}</p>
              <p className="text-sm leading-relaxed" style={{ color: "#7A90A4" }}>
                This article is part of our ongoing series of industry insights and company updates. The full article will be available upon site launch with official client content.
              </p>
              <div className="mt-6 px-4 py-3 rounded-lg text-xs" style={{ backgroundColor: "#F4F7F9", color: "#A0B2C1", border: "1px solid #E8EEF3" }}>
                ✏️ <em>Sample content — replace with official 3C Marine Engineering article content.</em>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
