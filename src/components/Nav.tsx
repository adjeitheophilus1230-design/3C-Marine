import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

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
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: transparent ? "transparent" : "#0C1E35",
        borderBottom: transparent ? "none" : "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10 flex items-center justify-between h-[72px]">
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
