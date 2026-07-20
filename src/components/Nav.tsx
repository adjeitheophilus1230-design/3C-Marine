import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from "./Icons";

const NAV_LINKS = [
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "Industries", to: "/industries" },
  { label: "HSE", to: "/hse" },
  { label: "News", to: "/news" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo({ top: 0 });
  }, [location.pathname]);

  const transparent = isHome && !scrolled && !menuOpen;

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md"
      style={{
        backgroundColor: transparent ? "rgba(12,30,53,0.4)" : "rgba(12,30,53,0.92)",
        borderBottom: transparent ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(255,255,255,0.12)",
        boxShadow: scrolled ? "0 4px 20px rgba(0,0,0,0.3)" : "none",
      }}
    >
      {/* Top Utility Bar */}
      <div className="hidden md:block bg-navy-950/60 border-b border-white/5 py-1.5 px-6 lg:px-10 text-xs">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between text-steel-300">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <strong className="text-white font-medium">Tema Port Base:</strong> Active 24/7 Operations
            </span>
            <span className="hidden lg:inline text-steel-400">|</span>
            <span className="hidden lg:inline-flex items-center gap-1.5">
              <MapPinIcon size={13} color="#E85C0D" />
              Tema Harbour Industrial Area, Ghana
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a href="tel:+233302958400" className="hover:text-orange-400 transition-colors flex items-center gap-1.5 font-medium">
              <PhoneIcon size={13} color="#E85C0D" />
              24/7 Emergency Response: +233 (0) 30 290 8899
            </a>
            <span className="text-steel-400">|</span>
            <a href="mailto:info@3cmarineengineering.com" className="hover:text-orange-400 transition-colors flex items-center gap-1.5">
              <EnvelopeIcon size={13} color="#E85C0D" />
              info@3cmarineengineering.com
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 lg:px-10 flex items-center justify-between h-[68px]">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 flex-shrink-0">
          <div
            className="w-9 h-9 rounded flex items-center justify-center font-display font-bold text-sm"
            style={{ backgroundColor: "#E85C0D", color: "#fff", fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            3C
          </div>
          <div className="hidden sm:block">
            <div
              className="text-white font-bold leading-none tracking-wide"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "17px", letterSpacing: "0.04em" }}
            >
              3C MARINE ENGINEERING
            </div>
            <div className="text-steel-300 text-xs tracking-widest mt-0.5" style={{ letterSpacing: "0.12em" }}>
              LIMITED
            </div>
          </div>
        </Link>

        {/* Desktop links */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm font-medium px-3 py-2 rounded transition-colors duration-150"
              style={{
                fontFamily: "'Barlow', sans-serif",
                color:
                  location.pathname === link.to
                    ? "#E85C0D"
                    : "rgba(255,255,255,0.8)",
                letterSpacing: "0.04em",
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <Link
            to="/request-quote"
            className="hidden md:inline-flex items-center gap-2 text-sm font-semibold px-5 py-2 rounded transition-all duration-150"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              backgroundColor: "#E85C0D",
              color: "#fff",
              letterSpacing: "0.06em",
              fontSize: "14px",
            }}
          >
            REQUEST QUOTE
          </Link>
          <button
            className="lg:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5 text-white"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span
              className="block w-5 h-0.5 bg-white transition-all duration-200"
              style={{ transform: menuOpen ? "rotate(45deg) translate(2px, 3px)" : "none" }}
            />
            <span
              className="block w-5 h-0.5 bg-white transition-all duration-200"
              style={{ opacity: menuOpen ? 0 : 1 }}
            />
            <span
              className="block w-5 h-0.5 bg-white transition-all duration-200"
              style={{ transform: menuOpen ? "rotate(-45deg) translate(2px, -3px)" : "none" }}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden border-t border-white/10" style={{ backgroundColor: "#0C1E35" }}>
          <nav className="max-w-screen-xl mx-auto px-6 py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-base py-2.5 px-3 rounded transition-colors"
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  color: location.pathname === link.to ? "#E85C0D" : "rgba(255,255,255,0.85)",
                  letterSpacing: "0.03em",
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/request-quote"
              className="mt-3 text-center font-semibold py-3 rounded"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                backgroundColor: "#E85C0D",
                color: "#fff",
                letterSpacing: "0.08em",
                fontSize: "15px",
              }}
            >
              REQUEST QUOTE
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
