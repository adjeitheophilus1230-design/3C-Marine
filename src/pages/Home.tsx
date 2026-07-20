import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { STATS, SERVICES, PROJECTS, NEWS, TESTIMONIALS } from "../data/mock";
import PartnerLogos from "../components/PartnerLogos";
import { SERVICE_ICONS, ShieldIcon, LeafIcon, BadgeCheckIcon } from "../components/Icons";

function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, visible } = useFadeIn();
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function AnimatedCounter({ target, suffix, duration = 1600 }: { target: number; suffix: string; duration?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setStarted(true); obs.disconnect(); } },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  useEffect(() => {
    if (!started) return;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) { setCount(target); clearInterval(interval); }
      else setCount(Math.floor(current));
    }, duration / steps);
    return () => clearInterval(interval);
  }, [started, target, duration]);
  return (
    <div ref={ref} className="font-bold" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(40px, 5vw, 64px)", color: "#E85C0D", lineHeight: 1 }}>
      {count}{suffix}
    </div>
  );
}

const FEATURED_PROJECTS = PROJECTS.slice(0, 4);
const FEATURED_NEWS = NEWS.slice(0, 3);

const PARTNER_NAMES = [
  "Ghana Ports & Harbours Authority",
  "Tullow Oil",
  "Aker Energy",
  "Black Star Line",
  "Sentuo Refinery",
  "Meridian Port Services",
];

export default function Home() {
  return (
    <div>
      {/* ─── HERO ────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex items-end pb-24 lg:pb-36 overflow-hidden"
        style={{ backgroundColor: "#0C1E35" }}
      >
        <img
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1800&h=1100&fit=crop&auto=format"
          alt="Offshore engineering platform at sea"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.35 }}
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, #0C1E35 0%, rgba(12,30,53,0.7) 40%, rgba(12,30,53,0.3) 100%)",
          }}
        />
        {/* Diagonal cut */}
        <div
          className="absolute bottom-0 left-0 right-0 h-24"
          style={{ background: "linear-gradient(to bottom right, transparent 49.5%, #ffffff 50%)" }}
        />

        <div className="relative max-w-screen-xl mx-auto px-6 lg:px-10 w-full pt-32 lg:pt-40">
          {/* Overline Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping" />
            <span
              className="text-xs font-bold tracking-widest uppercase text-white"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.18em" }}
            >
              ISO 9001:2015 & ISO 45001 CERTIFIED · TEMA PORT BASE
            </span>
          </div>

          <h1
            className="text-white mb-6 max-w-4xl"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "clamp(44px, 7.5vw, 88px)",
              fontWeight: 800,
              lineHeight: 0.98,
              letterSpacing: "0.01em",
            }}
          >
            Engineering Solutions Built For <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-amber-300">Marine, Offshore</span> & Industrial Excellence
          </h1>

          <p
            className="mb-8 max-w-2xl text-steel-200"
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontSize: "19px",
              lineHeight: 1.6,
            }}
          >
            Delivering high-specification marine, deepwater offshore, and industrial fabrication engineering across West Africa through technical rigour, safety leadership, and international compliance.
          </p>

          {/* Quick Capability Tags */}
          <div className="flex flex-wrap gap-2 mb-10">
            {["Subsea Structural Repair", "FPSO Turret Overhaul", "Heavy Lift Installation", "Class Renewal Inspection", "ASME Steel Fabrication"].map((tag) => (
              <span key={tag} className="text-xs font-semibold px-3 py-1.5 rounded-md bg-navy-800/80 text-steel-200 border border-white/10" style={{ letterSpacing: "0.04em" }}>
                ✓ {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 font-semibold py-4 px-8 rounded shadow-lg transition-all duration-200 hover:bg-orange-600 hover:shadow-orange-500/20"
              style={{
                backgroundColor: "#E85C0D",
                color: "#fff",
                fontFamily: "'Barlow Condensed', sans-serif",
                letterSpacing: "0.08em",
                fontSize: "16px",
              }}
            >
              REQUEST CONSULTATION →
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 font-semibold py-4 px-8 rounded transition-all duration-200 hover:bg-white/20"
              style={{
                backgroundColor: "rgba(255,255,255,0.1)",
                color: "#fff",
                fontFamily: "'Barlow Condensed', sans-serif",
                letterSpacing: "0.08em",
                fontSize: "16px",
                border: "1px solid rgba(255,255,255,0.25)",
              }}
            >
              EXPLORE PORTFOLIO
            </Link>
          </div>
        </div>
      </section>

      {/* ─── STATS BAR ───────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#0C1E35" }}>
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 py-16 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-white/10">
          {STATS.map((s, i) => (
            <FadeIn key={s.label} delay={i * 80}>
              <div className="lg:px-10 text-center lg:text-left">
                <AnimatedCounter target={s.value} suffix={s.suffix} />
                <div
                  className="text-sm font-medium tracking-wide mt-1"
                  style={{ color: "rgba(255,255,255,0.5)", letterSpacing: "0.05em" }}
                >
                  {s.label}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ─── INTRO ───────────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: "#fff" }}>
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px" style={{ backgroundColor: "#E85C0D" }} />
                <span
                  className="text-xs font-semibold tracking-widest uppercase"
                  style={{ color: "#E85C0D", fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.16em" }}
                >
                  Who We Are
                </span>
              </div>
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
                West Africa's Premier Marine & Offshore Engineering Partner
              </h2>
              <p className="mb-5 leading-relaxed" style={{ color: "#5B6E82", fontSize: "17px" }}>
                3C Marine Engineering Limited is a full-service marine, offshore, and industrial engineering company headquartered in Tema, Ghana. Since 1999, we have delivered complex engineering projects for oil companies, port authorities, maritime operators, and government bodies.
              </p>
              <p className="mb-8 leading-relaxed" style={{ color: "#5B6E82", fontSize: "17px" }}>
                Our multidisciplinary team of engineers, inspectors, and technicians operates to international standards — bringing world-class capability to the West African engineering market.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 font-semibold text-sm transition-colors"
                style={{
                  color: "#E85C0D",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  letterSpacing: "0.08em",
                  fontSize: "15px",
                }}
              >
                LEARN MORE ABOUT US →
              </Link>
            </div>
          </FadeIn>
          <FadeIn delay={150}>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop&auto=format"
                alt="Engineers at work on offshore structure"
                className="w-full rounded-lg"
                style={{ aspectRatio: "4/3", objectFit: "cover" }}
              />
              <div
                className="absolute -bottom-6 -left-6 p-5 rounded-lg shadow-xl"
                style={{ backgroundColor: "#0C1E35" }}
              >
                <div
                  className="font-bold text-white text-2xl"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  ISO 9001:2015
                </div>
                <div className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.5)" }}>
                  Quality Certified
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── SERVICES ────────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: "#F4F7F9" }}>
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <FadeIn>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-px" style={{ backgroundColor: "#E85C0D" }} />
                  <span
                    className="text-xs font-semibold tracking-widest uppercase"
                    style={{ color: "#E85C0D", fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.16em" }}
                  >
                    What We Do
                  </span>
                </div>
                <h2
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: "clamp(32px, 4vw, 52px)",
                    fontWeight: 700,
                    color: "#0C1E35",
                    lineHeight: 1.05,
                  }}
                >
                  Engineering Services
                </h2>
              </div>
              <Link
                to="/services"
                className="text-sm font-semibold flex-shrink-0"
                style={{
                  color: "#E85C0D",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  letterSpacing: "0.08em",
                  fontSize: "14px",
                }}
              >
                VIEW ALL SERVICES →
              </Link>
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.slice(0, 6).map((s, i) => (
              <FadeIn key={s.id} delay={i * 60}>
                <Link to="/services" className="group block rounded-lg overflow-hidden bg-white hover:shadow-lg transition-shadow duration-300">
                  <div className="overflow-hidden" style={{ height: "180px", backgroundColor: "#1C354F" }}>
                    <img
                      src={s.image}
                      alt={s.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-start gap-3 mb-3">
                      <span className="flex items-center justify-center w-9 h-9 rounded-lg flex-shrink-0 mt-0.5" style={{ backgroundColor: "#FFF0E8" }}>
                        {(() => { const Icon = SERVICE_ICONS[s.icon]; return Icon ? <Icon size={18} color="#E85C0D" /> : null; })()}
                      </span>
                      <h3
                        className="font-bold text-xl"
                        style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#0C1E35" }}
                      >
                        {s.title}
                      </h3>
                    </div>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: "#5B6E82" }}>
                      {s.description.slice(0, 100)}...
                    </p>
                    <span
                      className="text-xs font-semibold"
                      style={{ color: "#E85C0D", letterSpacing: "0.08em", fontFamily: "'Barlow Condensed', sans-serif" }}
                    >
                      LEARN MORE →
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURED PROJECTS ───────────────────────────────────────── */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: "#0C1E35" }}>
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <FadeIn>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-px" style={{ backgroundColor: "#E85C0D" }} />
                  <span
                    className="text-xs font-semibold tracking-widest uppercase"
                    style={{ color: "#E85C0D", fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.16em" }}
                  >
                    Our Work
                  </span>
                </div>
                <h2
                  className="text-white"
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: "clamp(32px, 4vw, 52px)",
                    fontWeight: 700,
                    lineHeight: 1.05,
                  }}
                >
                  Featured Projects
                </h2>
              </div>
              <Link
                to="/projects"
                className="text-sm font-semibold flex-shrink-0"
                style={{
                  color: "#E85C0D",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  letterSpacing: "0.08em",
                  fontSize: "14px",
                }}
              >
                ALL PROJECTS →
              </Link>
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-2 gap-5">
            {FEATURED_PROJECTS.map((p, i) => (
              <FadeIn key={p.id} delay={i * 80}>
                <Link to={`/projects`} className="group block rounded-lg overflow-hidden relative" style={{ height: "300px", backgroundColor: "#132840" }}>
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ opacity: 0.5 }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to top, rgba(6,15,28,0.95) 0%, rgba(6,15,28,0.3) 60%)" }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div
                      className="text-xs mb-2 font-semibold"
                      style={{ color: "#E85C0D", letterSpacing: "0.1em", fontFamily: "'Barlow Condensed', sans-serif" }}
                    >
                      {p.category.toUpperCase()} · {p.year}
                    </div>
                    <h3
                      className="text-white font-bold mb-2"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "22px", lineHeight: 1.1 }}
                    >
                      {p.title}
                    </h3>
                    <p className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
                      {p.client} · {p.location}
                    </p>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SAFETY SECTION ──────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 relative overflow-hidden" style={{ backgroundColor: "#07131F" }}>
        <img
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1600&h=800&fit=crop&auto=format"
          alt="Safety-focused engineering team"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.08 }}
        />
        <div className="relative max-w-screen-xl mx-auto px-6 lg:px-10">
          <FadeIn>
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px" style={{ backgroundColor: "#E85C0D" }} />
                <span
                  className="text-xs font-semibold tracking-widest uppercase"
                  style={{ color: "#E85C0D", fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.16em" }}
                >
                  Health, Safety & Environment
                </span>
              </div>
              <h2
                className="text-white mb-8"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "clamp(32px, 4vw, 60px)",
                  fontWeight: 800,
                  lineHeight: 1.0,
                }}
              >
                Safety Is At The Core Of Everything We Do
              </h2>
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "HSE Commitment",
                body: "Every project begins and ends with safety. Our HSE management system meets ISO 45001:2018 standards and is enforced on every site, every day.",
                Icon: ShieldIcon,
              },
              {
                title: "Environmental Responsibility",
                body: "We are committed to minimising our environmental footprint across all operations — from waste management to spill prevention and marine ecosystem protection.",
                Icon: LeafIcon,
              },
              {
                title: "Quality Assurance",
                body: "ISO 9001:2015 certified quality management system ensures every deliverable meets or exceeds client and regulatory requirements.",
                Icon: BadgeCheckIcon,
              },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 100}>
                <div className="rounded-lg p-8" style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: "rgba(232,92,13,0.15)" }}>
                    <item.Icon size={20} color="#E85C0D" />
                  </div>
                  <h3
                    className="text-white font-bold mb-3 text-xl"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                    {item.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={200}>
            <Link
              to="/hse"
              className="inline-flex items-center gap-2 font-semibold py-3 px-7 rounded"
              style={{
                backgroundColor: "#E85C0D",
                color: "#fff",
                fontFamily: "'Barlow Condensed', sans-serif",
                letterSpacing: "0.08em",
                fontSize: "15px",
              }}
            >
              OUR HSE APPROACH →
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ─── TESTIMONIALS ────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: "#F4F7F9" }}>
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <FadeIn>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-px" style={{ backgroundColor: "#E85C0D" }} />
                  <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#E85C0D", fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.16em" }}>
                    Client Voices
                  </span>
                </div>
                <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700, color: "#0C1E35", lineHeight: 1.05 }}>
                  What Our Clients Say
                </h2>
              </div>
            </div>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <FadeIn key={t.id} delay={i * 100}>
                <div className="flex flex-col h-full rounded-xl p-8 bg-white" style={{ border: "1px solid #E8EEF3", boxShadow: "0 2px 16px rgba(12,30,53,0.06)" }}>
                  <div className="text-3xl mb-5" style={{ color: "#E85C0D", fontFamily: "Georgia, serif", lineHeight: 1 }}>"</div>
                  <p className="flex-1 leading-relaxed mb-6 text-base italic" style={{ color: "#5B6E82" }}>
                    {t.quote}
                  </p>
                  <div className="flex items-center gap-4 pt-5" style={{ borderTop: "1px solid #E8EEF3" }}>
                    <img src={t.image} alt={t.author} className="w-12 h-12 rounded-full object-cover flex-shrink-0" />
                    <div>
                      <div className="font-bold text-sm" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#0C1E35", fontSize: "16px" }}>{t.author}</div>
                      <div className="text-xs" style={{ color: "#A0B2C1" }}>{t.role}</div>
                      <div className="text-xs font-semibold mt-0.5" style={{ color: "#E85C0D" }}>{t.company}</div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CLIENTS / TRUST ─────────────────────────────────────────── */}
      <PartnerLogos />

      {/* ─── NEWS ────────────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: "#fff" }}>
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <FadeIn>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-px" style={{ backgroundColor: "#E85C0D" }} />
                  <span
                    className="text-xs font-semibold tracking-widest uppercase"
                    style={{ color: "#E85C0D", fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.16em" }}
                  >
                    Latest Updates
                  </span>
                </div>
                <h2
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: "clamp(32px, 4vw, 52px)",
                    fontWeight: 700,
                    color: "#0C1E35",
                    lineHeight: 1.05,
                  }}
                >
                  News & Insights
                </h2>
              </div>
              <Link
                to="/news"
                className="text-sm font-semibold flex-shrink-0"
                style={{
                  color: "#E85C0D",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  letterSpacing: "0.08em",
                  fontSize: "14px",
                }}
              >
                ALL NEWS →
              </Link>
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-3 gap-6">
            {FEATURED_NEWS.map((article, i) => (
              <FadeIn key={article.id} delay={i * 80}>
                <Link to="/news" className="group block rounded-lg overflow-hidden bg-white border hover:border-orange-500 transition-colors duration-200" style={{ borderColor: "#C8D5DF" }}>
                  <div className="overflow-hidden" style={{ height: "200px", backgroundColor: "#1C354F" }}>
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className="text-xs font-semibold px-2 py-1 rounded"
                        style={{
                          backgroundColor: "#F4F7F9",
                          color: "#E85C0D",
                          fontFamily: "'Barlow Condensed', sans-serif",
                          letterSpacing: "0.08em",
                        }}
                      >
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
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ──────────────────────────────────────────────── */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ backgroundColor: "#E85C0D" }}
      >
        <div className="relative max-w-screen-xl mx-auto px-6 lg:px-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h2
              className="text-white font-bold mb-2"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "clamp(28px, 4vw, 48px)",
                lineHeight: 1.05,
              }}
            >
              Ready to Start Your Next Project?
            </h2>
            <p className="text-white/80" style={{ fontSize: "17px" }}>
              Talk to our engineering team about your requirements.
            </p>
          </div>
          <div className="flex gap-4 flex-shrink-0">
            <Link
              to="/request-quote"
              className="font-semibold py-4 px-8 rounded transition-all duration-200 hover:bg-white/90"
              style={{
                backgroundColor: "#fff",
                color: "#E85C0D",
                fontFamily: "'Barlow Condensed', sans-serif",
                letterSpacing: "0.08em",
                fontSize: "15px",
              }}
            >
              REQUEST QUOTE
            </Link>
            <Link
              to="/contact"
              className="font-semibold py-4 px-8 rounded transition-all duration-200"
              style={{
                backgroundColor: "rgba(0,0,0,0.2)",
                color: "#fff",
                fontFamily: "'Barlow Condensed', sans-serif",
                letterSpacing: "0.08em",
                fontSize: "15px",
                border: "1px solid rgba(255,255,255,0.3)",
              }}
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
