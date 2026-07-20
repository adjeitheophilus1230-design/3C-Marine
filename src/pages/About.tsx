import { Link } from "react-router-dom";
import { useCMS } from "../context/CMSContext";

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

function PageHero({ title, subtitle, image }: { title: string; subtitle: string; image: string }) {
  return (
    <section
      className="relative flex items-end pb-20 pt-36 overflow-hidden"
      style={{ backgroundColor: "#0C1E35", minHeight: "480px" }}
    >
      <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover" style={{ opacity: 0.25 }} />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #0C1E35 0%, rgba(12,30,53,0.5) 100%)" }} />
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
  return (
    <div>
      <PageHero
        title="25 Years of Engineering Excellence in Marine & Offshore"
        subtitle="From humble beginnings in Tema's port district to becoming West Africa's most trusted marine engineering contractor."
        image="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1600&h=700&fit=crop&auto=format"
      />

      {/* ─── MISSION / VISION / VALUES ───────────────────────────── */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: "#fff" }}>
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 grid lg:grid-cols-3 gap-10">
          {[
            {
              label: "Our Mission",
              title: "Engineering Reliability Into Every Project",
              body: "To deliver high-quality, safe, and innovative engineering solutions that meet the complex demands of marine, offshore, and industrial clients — contributing to the sustainable development of West Africa's energy and maritime sectors.",
              color: "#0C1E35",
            },
            {
              label: "Our Vision",
              title: "Africa's Engineering Partner of Choice",
              body: "To be the premier engineering company in West Africa, recognised internationally for technical excellence, operational safety, and the development of local engineering talent.",
              color: "#0C1E35",
            },
            {
              label: "Our Values",
              title: "Safety · Integrity · Excellence",
              body: "We operate with an unwavering commitment to safety above all else, conduct ourselves with the highest integrity in every interaction, and pursue technical excellence in every deliverable.",
              color: "#0C1E35",
            },
          ].map((card) => (
            <div key={card.label} className="rounded-lg p-8" style={{ border: "1px solid #E8EEF3", backgroundColor: "#F4F7F9" }}>
              <div
                className="text-xs font-semibold mb-3 tracking-widest"
                style={{ color: "#E85C0D", fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.14em" }}
              >
                {card.label.toUpperCase()}
              </div>
              <h3
                className="font-bold mb-4 text-2xl"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", color: card.color }}
              >
                {card.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#5B6E82" }}>
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── COMPANY STORY ─────────────────────────────────────────── */}
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
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&h=600&fit=crop&auto=format"
              alt="Offshore operations"
              className="w-full rounded-lg"
              style={{ aspectRatio: "4/3", objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* ─── TIMELINE ──────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: "#0C1E35" }}>
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
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
            {/* Vertical line */}
            <div
              className="absolute left-[88px] top-0 bottom-0 w-px hidden lg:block"
              style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
            />
            <div className="flex flex-col gap-8 relative before:absolute before:left-4 before:top-4 before:bottom-4 before:w-px before:bg-orange-500/30">
            {timeline.map((item) => (
                <div key={item.year} className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-start">
                  <div
                    className="flex-shrink-0 font-bold text-2xl w-20 text-right relative"
                    style={{ color: "#E85C0D", fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    {item.year}
                    <div
                      className="absolute right-[-30px] top-[6px] w-3.5 h-3.5 rounded-full hidden lg:block"
                      style={{ backgroundColor: "#E85C0D" }}
                    />
                  </div>
                  <div
                    className="rounded-lg p-6 flex-1"
                    style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
                  >
                    <h3
                      className="font-bold text-white mb-2 text-xl"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── LEADERSHIP ────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: "#fff" }}>
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <SectionLabel>Our People</SectionLabel>
          <h2
            className="mb-14"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "clamp(32px, 4vw, 52px)",
              fontWeight: 700,
              color: "#0C1E35",
              lineHeight: 1.05,
            }}
          >
            Leadership Team
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((person) => (
              <div key={person.name} className="group">
                <div
                  className="overflow-hidden rounded-lg mb-5"
                  style={{ height: "280px", backgroundColor: "#1C354F" }}
                >
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div
                  className="text-xs mb-1 font-semibold"
                  style={{ color: "#E85C0D", letterSpacing: "0.1em", fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {person.role.toUpperCase()}
                </div>
                <h3
                  className="font-bold text-xl mb-2"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#0C1E35" }}
                >
                  {person.name}
                </h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#7A90A4" }}>
                  {person.bio.slice(0, 120)}...
                </p>
                <a
                  href={person.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold transition-colors hover:text-orange-500"
                  style={{ color: "#0C1E35", fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.06em" }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0H5C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM8 19H5V8h3v11zM6.5 6.74A1.76 1.76 0 1 1 8.26 5a1.76 1.76 0 0 1-1.76 1.74zM20 19h-3v-5.6c0-3.37-4-3.12-4 0V19h-3V8h3v1.77C14.4 7.5 20 7.34 20 12.74V19z"/>
                  </svg>
                  VIEW PROFILE
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ───────────────────────────────────────────────────── */}
      <section className="py-20" style={{ backgroundColor: "#E85C0D" }}>
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h2
              className="text-white font-bold mb-2"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(28px, 4vw, 48px)", lineHeight: 1.05 }}
            >
              Work With Our Team
            </h2>
            <p className="text-white/80 text-lg">Let's discuss your engineering challenge.</p>
          </div>
          <div className="flex gap-4">
            <Link
              to="/contact"
              className="font-semibold py-4 px-8 rounded"
              style={{ backgroundColor: "#fff", color: "#E85C0D", fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.08em", fontSize: "15px" }}
            >
              CONTACT US
            </Link>
            <Link
              to="/careers"
              className="font-semibold py-4 px-8 rounded"
              style={{ backgroundColor: "rgba(0,0,0,0.2)", color: "#fff", fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.08em", fontSize: "15px", border: "1px solid rgba(255,255,255,0.3)" }}
            >
              JOIN OUR TEAM
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
