import { Link } from "react-router-dom";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer style={{ backgroundColor: "#060F1C", color: "rgba(255,255,255,0.75)" }}>
      {/* Top band */}
      <div className="border-b" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-9 h-9 rounded flex items-center justify-center font-bold text-sm"
                style={{ backgroundColor: "#E85C0D", color: "#fff", fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                3C
              </div>
              <div>
                <div
                  className="text-white font-bold leading-none"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "15px", letterSpacing: "0.04em" }}
                >
                  3C MARINE ENGINEERING
                </div>
                <div className="text-xs mt-0.5" style={{ color: "#5B6E82", letterSpacing: "0.1em" }}>
                  LIMITED
                </div>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.5)" }}>
              Delivering reliable engineering solutions through innovation, safety and technical expertise across marine, offshore, and industrial sectors.
            </p>
            <div className="flex gap-3">
              {["LinkedIn", "X"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="text-xs px-3 py-1.5 rounded border transition-colors hover:border-orange-500"
                  style={{ borderColor: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.6)", letterSpacing: "0.05em" }}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-white font-bold mb-5 text-sm tracking-widest uppercase"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.12em" }}
            >
              Services
            </h4>
            <ul className="flex flex-col gap-2.5">
              {[
                "Marine Engineering",
                "Offshore Engineering",
                "Onshore Engineering",
                "Fabrication",
                "Installation",
                "Inspection",
                "Maintenance",
                "Consultancy",
              ].map((s) => (
                <li key={s}>
                  <Link
                    to="/services"
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4
              className="text-white font-bold mb-5 text-sm tracking-widest uppercase"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.12em" }}
            >
              Company
            </h4>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: "About Us", to: "/about" },
                { label: "Projects", to: "/projects" },
                { label: "Industries", to: "/industries" },
                { label: "HSE", to: "/hse" },
                { label: "News & Insights", to: "/news" },
                { label: "Careers", to: "/careers" },
                { label: "Contact", to: "/contact" },
                { label: "Request Quote", to: "/request-quote" },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div>
            <h4
              className="text-white font-bold mb-5 text-sm tracking-widest uppercase"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.12em" }}
            >
              Contact
            </h4>
            <ul className="flex flex-col gap-3 mb-8">
              <li className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                <span className="block text-xs mb-1" style={{ color: "#E85C0D", letterSpacing: "0.08em" }}>ADDRESS</span>
                Plot 14, Marine Drive, Tema Industrial Area,<br /> Tema, Ghana
              </li>
              <li className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                <span className="block text-xs mb-1" style={{ color: "#E85C0D", letterSpacing: "0.08em" }}>EMAIL</span>
                info@3cmarineengineering.com
              </li>
              <li className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                <span className="block text-xs mb-1" style={{ color: "#E85C0D", letterSpacing: "0.08em" }}>PHONE</span>
                +233 30 295 8400
              </li>
            </ul>

            <h4
              className="text-white font-bold mb-3 text-sm tracking-widest uppercase"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.12em" }}
            >
              Newsletter
            </h4>
            {subscribed ? (
              <p className="text-sm" style={{ color: "#E85C0D" }}>Thank you for subscribing.</p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="flex-1 text-sm px-3 py-2 rounded outline-none"
                  style={{ backgroundColor: "rgba(255,255,255,0.07)", color: "#fff", border: "1px solid rgba(255,255,255,0.12)" }}
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded text-sm font-semibold text-white"
                  style={{ backgroundColor: "#E85C0D", fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.06em" }}
                >
                  JOIN
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
          © {new Date().getFullYear()} 3C Marine Engineering Limited. All rights reserved.
        </p>
        <div className="flex gap-5">
          {["Privacy Policy", "Terms of Use", "Sitemap"].map((l) => (
            <a key={l} href="#" className="text-xs transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.3)" }}>
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
