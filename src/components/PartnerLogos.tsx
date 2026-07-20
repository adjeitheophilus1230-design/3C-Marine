export interface PartnerLogo {
  id: string;
  name: string;
  category: string;
  svg: React.ReactNode;
}

export const PARTNERS: PartnerLogo[] = [
  {
    id: "gpha",
    name: "Ghana Ports & Harbours Authority",
    category: "Port Authority",
    svg: (
      <svg className="h-10 w-auto max-w-[170px]" viewBox="0 0 200 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Seal Circle */}
        <circle cx="24" cy="24" r="21" fill="#0C2340" stroke="#D4AF37" strokeWidth="2" />
        <circle cx="24" cy="24" r="17" fill="none" stroke="#D4AF37" strokeWidth="0.8" strokeDasharray="2 1.5" />
        {/* Anchor & Star */}
        <path d="M24 10V33M18 16H30M15 28C15 33 19 35 24 35C29 35 33 33 33 28" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" />
        <polygon points="24,9 25.8,12.5 29.5,13.1 26.8,15.7 27.4,19.5 24,17.7 20.6,19.5 21.2,15.7 18.5,13.1 22.2,12.5" fill="#D4AF37" />
        {/* Typography */}
        <text x="54" y="22" fill="#0C1E35" fontFamily="'Barlow Condensed', sans-serif" fontWeight="800" fontSize="17" letterSpacing="0.05em">GPHA GHANA</text>
        <text x="54" y="34" fill="#E85C0D" fontFamily="'Barlow', sans-serif" fontWeight="700" fontSize="10" letterSpacing="0.12em">PORTS & HARBOURS</text>
      </svg>
    ),
  },
  {
    id: "tullow",
    name: "Tullow Oil",
    category: "Oil & Gas Operator",
    svg: (
      <svg className="h-10 w-auto max-w-[160px]" viewBox="0 0 180 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Tullow Flame Mark */}
        <g transform="translate(4, 4)">
          <path d="M12 4C12 4 4 15 4 24C4 30.0751 8.92487 35 15 35C21.0751 35 26 30.0751 26 24C26 15 18 4 18 4" fill="#00875A" />
          <path d="M22 10C22 10 16 19 16 26C16 30.4183 19.5817 34 24 34C28.4183 34 32 30.4183 32 26C32 19 26 10 26 10" fill="#FF5B00" />
        </g>
        {/* Tullow Wordmark */}
        <text x="44" y="27" fill="#111827" fontFamily="'Barlow Condensed', sans-serif" fontWeight="900" fontSize="23" letterSpacing="0.06em">TULLOW</text>
        <text x="44" y="38" fill="#FF5B00" fontFamily="'Barlow', sans-serif" fontWeight="800" fontSize="10" letterSpacing="0.25em">OIL PLC</text>
      </svg>
    ),
  },
  {
    id: "aker",
    name: "Aker Energy",
    category: "Deepwater Operator",
    svg: (
      <svg className="h-10 w-auto max-w-[160px]" viewBox="0 0 180 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Aker Triangle Mark */}
        <g transform="translate(6, 6)">
          <path d="M18 2L34 32H2L18 2Z" fill="#001E38" />
          <path d="M18 10L28 29H8L18 10Z" fill="#00A3E0" />
          <polygon points="18,17 23,27 13,27" fill="#FFFFFF" />
        </g>
        {/* Aker Typography */}
        <text x="48" y="24" fill="#001E38" fontFamily="'Barlow Condensed', sans-serif" fontWeight="800" fontSize="20" letterSpacing="0.08em">AKER</text>
        <text x="48" y="37" fill="#00A3E0" fontFamily="'Barlow Condensed', sans-serif" fontWeight="700" fontSize="14" letterSpacing="0.18em">ENERGY</text>
      </svg>
    ),
  },
  {
    id: "blackstar",
    name: "Black Star Line",
    category: "National Maritime",
    svg: (
      <svg className="h-10 w-auto max-w-[175px]" viewBox="0 0 190 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Helm & Black Star Emblem */}
        <circle cx="24" cy="24" r="20" fill="#0A0A0A" />
        <circle cx="24" cy="24" r="16" fill="none" stroke="#D4AF37" strokeWidth="1.5" />
        <polygon points="24,9 27.5,16.5 35.5,17.5 29.5,23 31.5,31 24,26.5 16.5,31 18.5,23 12.5,17.5 20.5,16.5" fill="#D4AF37" />
        {/* Text */}
        <text x="52" y="23" fill="#0A0A0A" fontFamily="'Barlow Condensed', sans-serif" fontWeight="800" fontSize="17" letterSpacing="0.06em">BLACK STAR LINE</text>
        <text x="52" y="35" fill="#D4AF37" fontFamily="'Barlow', sans-serif" fontWeight="700" fontSize="9" letterSpacing="0.16em">GHANA MARITIME</text>
      </svg>
    ),
  },
  {
    id: "sentuo",
    name: "Sentuo Oil Refinery",
    category: "Downstream Refining",
    svg: (
      <svg className="h-10 w-auto max-w-[185px]" viewBox="0 0 200 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Refinery Tower & Flame */}
        <rect x="6" y="8" width="32" height="32" rx="6" fill="#004D66" />
        <path d="M16 32V16H22V32" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
        <path d="M24 32V20H28V32" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
        <path d="M19 10C19 10 14 14 14 17C14 19 16 20 19 20C22 20 24 19 24 17C24 14 19 10 19 10Z" fill="#FF6B00" />
        {/* Typography */}
        <text x="46" y="22" fill="#004D66" fontFamily="'Barlow Condensed', sans-serif" fontWeight="800" fontSize="18" letterSpacing="0.05em">SENTUO</text>
        <text x="46" y="34" fill="#FF6B00" fontFamily="'Barlow', sans-serif" fontWeight="700" fontSize="10" letterSpacing="0.14em">OIL REFINERY LTD</text>
      </svg>
    ),
  },
  {
    id: "mps",
    name: "Meridian Port Services",
    category: "Terminal Operator",
    svg: (
      <svg className="h-10 w-auto max-w-[165px]" viewBox="0 0 180 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* MPS Crane Wave Logo */}
        <rect x="4" y="6" width="36" height="36" rx="6" fill="#003399" />
        <path d="M12 32H32M16 32V14L26 23H32" stroke="#FF6600" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="20" y="25" width="5" height="4" fill="#FFFFFF" />
        {/* Typography */}
        <text x="48" y="24" fill="#003399" fontFamily="'Barlow Condensed', sans-serif" fontWeight="900" fontSize="22" letterSpacing="0.08em">MPS</text>
        <text x="48" y="36" fill="#FF6600" fontFamily="'Barlow', sans-serif" fontWeight="800" fontSize="9" letterSpacing="0.15em">TEMA CONTAINER TERMINAL</text>
      </svg>
    ),
  },
  {
    id: "eni",
    name: "Eni Ghana",
    category: "Energy Major",
    svg: (
      <svg className="h-10 w-auto max-w-[150px]" viewBox="0 0 160 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Eni Yellow Square */}
        <rect x="4" y="4" width="40" height="40" rx="4" fill="#FFCC00" />
        {/* Eni Six-Legged Dog Silhouette */}
        <path d="M12 28C12 28 14 20 20 20C24 20 26 22 28 22C30 22 34 18 34 18M15 32V28M19 32V28M23 32V28M27 32V28M31 32V28" stroke="#000000" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M28 14C28 14 24 16 24 18C24 19 25 20 28 20C31 20 32 18 32 16" fill="#E30613" />
        {/* Typography */}
        <text x="52" y="28" fill="#000000" fontFamily="'Barlow Condensed', sans-serif" fontWeight="900" fontSize="24" letterSpacing="-0.02em">eni</text>
        <text x="52" y="38" fill="#E30613" fontFamily="'Barlow', sans-serif" fontWeight="800" fontSize="10" letterSpacing="0.18em">GHANA</text>
      </svg>
    ),
  },
  {
    id: "modec",
    name: "MODEC Offshore",
    category: "FPSO Operations",
    svg: (
      <svg className="h-10 w-auto max-w-[155px]" viewBox="0 0 170 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Wave Bar */}
        <rect x="4" y="8" width="36" height="32" rx="4" fill="#002B49" />
        <path d="M8 28C14 24 22 32 28 28C30 26 34 26 36 28" stroke="#00A8CC" strokeWidth="3" strokeLinecap="round" />
        <circle cx="20" cy="18" r="5" fill="#E85C0D" />
        {/* Typography */}
        <text x="48" y="25" fill="#002B49" fontFamily="'Barlow Condensed', sans-serif" fontWeight="900" fontSize="22" letterSpacing="0.08em">MODEC</text>
        <text x="48" y="36" fill="#00A8CC" fontFamily="'Barlow', sans-serif" fontWeight="700" fontSize="9" letterSpacing="0.18em">OFFSHORE GHANA</text>
      </svg>
    ),
  },
];

export default function PartnerLogos() {
  const doublePartners = [...PARTNERS, ...PARTNERS];

  return (
    <section className="py-16 overflow-hidden relative border-y" style={{ backgroundColor: "#F8FAFC", borderColor: "#E2E8F0" }}>
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10 mb-10 text-center">
        <div className="flex items-center justify-center gap-3 mb-2">
          <div className="w-8 h-px" style={{ backgroundColor: "#E85C0D" }} />
          <span
            className="text-xs font-bold tracking-widest uppercase"
            style={{ color: "#E85C0D", fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.2em" }}
          >
            TRUSTED BY LEADING ORGANISATIONS
          </span>
          <div className="w-8 h-px" style={{ backgroundColor: "#E85C0D" }} />
        </div>
        <p className="text-sm font-medium" style={{ color: "#64748B" }}>
          Delivering critical engineering infrastructure for international energy and maritime leaders
        </p>
      </div>

      {/* Marquee viewport with fade edges */}
      <div className="relative w-full overflow-hidden">
        {/* Left fade gradient */}
        <div
          className="absolute left-0 top-0 bottom-0 w-24 lg:w-48 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to right, #F8FAFC 0%, rgba(248,250,252,0) 100%)",
          }}
        />

        {/* Scrolling content */}
        <div className="animate-logo-marquee flex items-center gap-8 py-3">
          {doublePartners.map((partner, index) => (
            <div
              key={`${partner.id}-${index}`}
              className="flex items-center justify-center px-7 py-4 rounded-xl bg-white shadow-xs border border-slate-200 hover:border-orange-500 hover:shadow-lg transition-all duration-300 flex-shrink-0 group cursor-pointer"
              style={{ minWidth: "240px", height: "76px" }}
            >
              <div className="transition-transform duration-300 group-hover:scale-105">
                {partner.svg}
              </div>
            </div>
          ))}
        </div>

        {/* Right fade gradient */}
        <div
          className="absolute right-0 top-0 bottom-0 w-24 lg:w-48 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to left, #F8FAFC 0%, rgba(248,250,252,0) 100%)",
          }}
        />
      </div>
    </section>
  );
}
