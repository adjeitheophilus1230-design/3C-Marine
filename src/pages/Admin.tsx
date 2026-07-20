import { useState } from "react";
import { useCMS } from "../context/CMSContext";
import {
  WrenchIcon,
  SearchIcon,
  BadgeCheckIcon,
  BuildingIcon,
  UsersIcon,
  EnvelopeIcon,
  ShieldIcon,
  CheckIcon,
  UploadIcon,
  GlobeIcon,
  TrendingUpIcon,
  ChatIcon,
  AttachIcon,
  StarIcon,
  ChevronRightIcon,
} from "../components/Icons";

export default function Admin() {
  const cms = useCMS();
  const [authenticated, setAuthenticated] = useState(false);
  const [email, setEmail] = useState("admin@3cmarineengineering.com");
  const [password, setPassword] = useState("admin123");
  const [darkMode, setDarkMode] = useState(false);

  type ModuleId =
    | "dashboard"
    | "company"
    | "services"
    | "projects"
    | "news"
    | "media"
    | "forms"
    | "careers"
    | "testimonials"
    | "seo"
    | "analytics"
    | "users"
    | "settings";

  const [activeModule, setActiveModule] = useState<ModuleId>("dashboard");

  // Forms hub state filter
  const [formSubTab, setFormSubTab] = useState<"quotes" | "contacts" | "careers" | "newsletters">("quotes");

  // Active modal editing state
  const [editingProject, setEditingProject] = useState<any | null>(null);
  const [editingService, setEditingService] = useState<any | null>(null);
  const [editingNews, setEditingNews] = useState<any | null>(null);
  const [editingTeam, setEditingTeam] = useState<any | null>(null);
  const [editingJob, setEditingJob] = useState<any | null>(null);
  const [editingTestimonial, setEditingTestimonial] = useState<any | null>(null);

  // Notifications & Helpers
  const [notification, setNotification] = useState<string | null>(null);
  const notify = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      setAuthenticated(true);
    }
  };

  const exportJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify({
      stats: cms.stats,
      services: cms.services,
      projects: cms.projects,
      team: cms.team,
      timeline: cms.timeline,
      news: cms.news,
      jobs: cms.jobs,
      industries: cms.industries,
      certifications: cms.certifications,
      testimonials: cms.testimonials,
    }, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "3c_marine_enterprise_cms_backup.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    notify("Enterprise Database exported successfully!");
  };

  // Mock Form Submissions Data for Forms Hub
  const submissions = {
    quotes: [
      { id: "RFQ-1092", name: "Kwame Nkrumah", company: "Tullow Oil Ghana", service: "Offshore Engineering", date: "2024-11-18", status: "New", budget: "$250,000 - $1,000,000" },
      { id: "RFQ-1091", name: "David Miller", company: "Meridian Port Services", service: "Marine Civil Works", date: "2024-11-17", status: "In Review", budget: "Over $1,000,000" },
      { id: "RFQ-1090", name: "Sarah Jenkins", company: "Eni Ghana", service: "Subsea Inspection", date: "2024-11-15", status: "Processed", budget: "$50,000 - $250,000" },
    ],
    contacts: [
      { id: "MSG-4021", name: "Ing. Seth Baah", email: "seth.baah@gpha.gov.gh", subject: "Tema Dry Dock Facility Query", date: "2024-11-18", status: "New" },
      { id: "MSG-4020", name: "Elena Rostova", email: "e.rostova@lukoil.com", subject: "Deepwater Support Tug Enquiry", date: "2024-11-16", status: "Processed" },
    ],
    careers: [
      { id: "APP-803", applicant: "Ing. Joseph Osei", role: "Senior Marine Structural Engineer", date: "2024-11-18", status: "Under Review" },
      { id: "APP-802", applicant: "Anita Mensah", role: "Graduate Engineer (2025)", date: "2024-11-17", status: "Shortlisted" },
    ],
  };

  // Mock Asset Manager Data
  const assets = [
    { id: "ast-1", name: "Tema_Port_Berth_Maintenance.jpg", size: "2.4 MB", type: "Image", folder: "Projects", date: "2024-11-10" },
    { id: "ast-2", name: "FPSO_Turret_Overhaul_Diagram.pdf", size: "8.1 MB", type: "Document", folder: "Technical", date: "2024-11-08" },
    { id: "ast-3", name: "ISO_9001_Certificate_2024.pdf", size: "1.2 MB", type: "Document", folder: "Certifications", date: "2024-10-25" },
    { id: "ast-4", name: "Offshore_Support_Vessel_Underwater.jpg", size: "4.7 MB", type: "Image", folder: "Services", date: "2024-10-14" },
  ];

  if (!authenticated) {
    return (
      <div className="min-h-screen w-full flex flex-col justify-between p-6 sm:p-10 relative overflow-x-hidden" style={{ backgroundColor: "#060F1C" }}>
        {/* Marine Engineering Background Image & Dark Navy Radial Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1920&h=1080&fit=crop&auto=format"
            alt="3C Marine Engineering Offshore Operations"
            className="w-full h-full object-cover opacity-35 scale-105"
            style={{ filter: "brightness(0.4) contrast(1.2)" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(circle at center, rgba(6,15,28,0.7) 0%, rgba(6,15,28,0.96) 100%)",
            }}
          />
        </div>

        {/* Top Header Bar */}
        <header className="relative z-10 flex items-center justify-between max-w-7xl w-full mx-auto">
          <a href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white text-lg shadow-lg" style={{ backgroundColor: "#E85C0D", fontFamily: "'Barlow Condensed', sans-serif" }}>
              3C
            </div>
            <div>
              <div className="font-bold text-white text-lg leading-tight tracking-wider" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>3C MARINE ENGINEERING</div>
              <div className="text-[10px] text-slate-400 font-semibold tracking-widest uppercase">Limited · Tema, Ghana</div>
            </div>
          </a>
          <a href="/" className="text-xs font-bold text-slate-300 hover:text-white px-4 py-2.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/15 transition-all flex items-center gap-1.5" style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.05em" }}>
            ← RETURN TO WEBSITE
          </a>
        </header>

        {/* Perfectly Centered Login Card */}
        <div className="relative z-10 max-w-md w-full bg-white/95 backdrop-blur-md rounded-2xl p-10 shadow-2xl border border-white/30 mx-auto my-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-white text-xl shadow-md" style={{ backgroundColor: "#E85C0D", fontFamily: "'Barlow Condensed', sans-serif" }}>
              3C
            </div>
            <div>
              <h1 className="font-bold text-2xl" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#0C1E35" }}>3C ENTERPRISE CMS</h1>
              <p className="text-xs text-slate-500 font-medium tracking-wide">3C Marine Engineering Limited</p>
            </div>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-xs font-bold mb-1.5" style={{ color: "#5B6E82", letterSpacing: "0.05em" }}>ADMINISTRATOR EMAIL</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg text-sm border outline-none focus:border-orange-500 transition-colors"
                style={{ borderColor: "#C8D5DF", color: "#0C1E35" }}
                required
              />
            </div>
            <div>
              <label className="block text-xs font-bold mb-1.5" style={{ color: "#5B6E82", letterSpacing: "0.05em" }}>SECURE PASSWORD</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg text-sm border outline-none focus:border-orange-500 transition-colors"
                style={{ borderColor: "#C8D5DF", color: "#0C1E35" }}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 rounded-lg font-bold text-white shadow-lg transition-all hover:opacity-90 active:scale-[0.99]"
              style={{ backgroundColor: "#E85C0D", fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.08em", fontSize: "16px" }}
            >
              ACCESS EXECUTIVE CMS STUDIO →
            </button>
          </form>
          <p className="text-center text-xs text-slate-400 mt-6">Enterprise Portal v3.4 · Auth SSO Ready</p>
        </div>

        {/* Bottom Copyright Notice */}
        <footer className="relative z-10 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} 3C Marine Engineering Limited. All rights reserved. Executive Management Platform.
        </footer>
      </div>
    );
  }

  const bgStyle = darkMode ? { backgroundColor: "#07131F", color: "#F4F7F9" } : { backgroundColor: "#F4F7F9", color: "#0C1E35" };
  const cardBgStyle = darkMode ? { backgroundColor: "#0C1E35", borderColor: "rgba(255,255,255,0.1)", color: "#fff" } : { backgroundColor: "#fff", borderColor: "#E8EEF3", color: "#0C1E35" };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row font-sans" style={bgStyle}>
      {/* ─── LEFT SIDEBAR (DEEP NAVY) ────────────────────────────────── */}
      <aside className="w-full lg:w-72 flex-shrink-0 border-r" style={{ backgroundColor: "#060F1C", borderColor: "rgba(255,255,255,0.08)" }}>
        <div className="p-6 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-white text-base" style={{ backgroundColor: "#E85C0D", fontFamily: "'Barlow Condensed', sans-serif" }}>
              3C
            </div>
            <div>
              <div className="text-white font-bold leading-none" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "16px", letterSpacing: "0.04em" }}>
                3C ENTERPRISE CMS
              </div>
              <div className="text-[10px] text-slate-400 mt-0.5" style={{ letterSpacing: "0.08em" }}>
                EXECUTIVE PLATFORM
              </div>
            </div>
          </div>
        </div>

        {/* User Badge */}
        <div className="p-4 mx-4 my-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
          <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&auto=format" alt="Admin" className="w-9 h-9 rounded-full object-cover border border-orange-500" />
          <div className="overflow-hidden">
            <div className="text-xs font-bold text-white truncate" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Kofi Mensah</div>
            <div className="text-[11px] text-orange-400 font-medium">Super Administrator</div>
          </div>
        </div>

        {/* Navigation Categories */}
        <nav className="p-4 space-y-6 text-xs">
          {[
            {
              category: "EXECUTIVE",
              items: [
                { id: "dashboard", label: "Dashboard", icon: TrendingUpIcon },
                { id: "analytics", label: "Analytics & KPIs", icon: GlobeIcon },
              ],
            },
            {
              category: "CONTENT MODULES",
              items: [
                { id: "company", label: "Company Profile", icon: BuildingIcon },
                { id: "services", label: "Services (9)", icon: WrenchIcon },
                { id: "projects", label: "Projects Portfolio", icon: BadgeCheckIcon },
                { id: "news", label: "News & Insights", icon: EnvelopeIcon },
                { id: "media", label: "Media Assets", icon: AttachIcon },
              ],
            },
            {
              category: "COMMUNICATIONS & FORMS",
              items: [
                { id: "forms", label: "Forms & RFQs Hub", icon: ChatIcon },
                { id: "careers", label: "Careers & Jobs", icon: UsersIcon },
                { id: "testimonials", label: "Client Testimonials", icon: StarIcon },
              ],
            },
            {
              category: "SYSTEM & CONTROL",
              items: [
                { id: "seo", label: "SEO Centre", icon: SearchIcon },
                { id: "users", label: "Users & Roles", icon: UsersIcon },
                { id: "settings", label: "Platform Settings", icon: ShieldIcon },
              ],
            },
          ].map((cat) => (
            <div key={cat.category}>
              <div className="text-[10px] font-bold text-slate-500 mb-2 px-3 tracking-widest uppercase" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                {cat.category}
              </div>
              <div className="space-y-1">
                {cat.items.map((item) => {
                  const isActive = activeModule === item.id;
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveModule(item.id as ModuleId)}
                      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-semibold transition-all ${
                        isActive ? "bg-orange-600 text-white shadow" : "text-slate-300 hover:bg-white/5 hover:text-white"
                      }`}
                      style={{
                        backgroundColor: isActive ? "#E85C0D" : "transparent",
                        fontFamily: "'Barlow Condensed', sans-serif",
                        letterSpacing: "0.04em",
                        fontSize: "14px",
                      }}
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon size={16} color={isActive ? "#fff" : "#A0B2C1"} />
                        {item.label}
                      </div>
                      {isActive && <ChevronRightIcon size={14} color="#fff" />}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>
      </aside>

      {/* ─── MAIN CONTENT WORKSPACE ──────────────────────────────────── */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Workspace Top Bar */}
        <header className="py-4 px-6 lg:px-10 border-b flex flex-wrap items-center justify-between gap-4" style={{ backgroundColor: darkMode ? "#0C1E35" : "#fff", borderColor: darkMode ? "rgba(255,255,255,0.1)" : "#E8EEF3" }}>
          <div>
            <span className="text-[11px] font-bold text-orange-600 uppercase tracking-widest" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              3C EXECUTIVE WORKSPACE
            </span>
            <h2 className="text-2xl font-bold uppercase" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: darkMode ? "#fff" : "#0C1E35" }}>
              {activeModule.toUpperCase()} MANAGEMENT
            </h2>
          </div>

          <div className="flex items-center gap-3">
            {/* Dark/Light mode toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="px-3 py-2 rounded-lg text-xs font-semibold border transition-colors"
              style={{ borderColor: darkMode ? "rgba(255,255,255,0.2)" : "#C8D5DF", color: darkMode ? "#fff" : "#5B6E82" }}
            >
              {darkMode ? "☀️ LIGHT WORKSPACE" : "🌙 DARK WORKSPACE"}
            </button>

            <button
              onClick={exportJSON}
              className="px-4 py-2 rounded-lg text-xs font-bold text-white flex items-center gap-2 transition-all hover:opacity-90"
              style={{ backgroundColor: "#E85C0D", fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              <UploadIcon size={14} /> EXPORT DATABASE (JSON)
            </button>

            <button
              onClick={() => setAuthenticated(false)}
              className="px-3 py-2 rounded-lg text-xs font-medium text-slate-400 hover:text-slate-600"
            >
              Sign Out
            </button>
          </div>
        </header>

        {/* Notification Toast */}
        {notification && (
          <div className="fixed top-5 right-5 z-50 bg-emerald-600 text-white px-6 py-3 rounded-lg shadow-xl text-sm font-semibold flex items-center gap-2 animate-bounce">
            <CheckIcon size={18} /> {notification}
          </div>
        )}

        {/* Module Content Switcher */}
        <main className="p-6 lg:p-10 flex-1 overflow-y-auto">
          {/* ───────────────────────────────────────────────────────────── */}
          {/* 1. DASHBOARD MODULE */}
          {/* ───────────────────────────────────────────────────────────── */}
          {activeModule === "dashboard" && (
            <div className="space-y-8">
              {/* Executive KPI Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
                {[
                  { label: "Monthly Website Visitors", value: "14,250", change: "+18% vs last mo", icon: GlobeIcon, color: "#3B82F6" },
                  { label: "Active Projects Portfolio", value: `${cms.projects.length}`, change: "All Verified", icon: BadgeCheckIcon, color: "#10B981" },
                  { label: "Pending RFQ Quotes", value: `${submissions.quotes.filter(q => q.status === "New").length}`, change: "Requires Review", icon: ChatIcon, color: "#E85C0D" },
                  { label: "Career Applications", value: `${submissions.careers.length}`, change: "2 New Candidates", icon: UsersIcon, color: "#8B5CF6" },
                ].map((kpi) => (
                  <div key={kpi.label} className="p-6 rounded-2xl border shadow-sm flex flex-col justify-between" style={cardBgStyle}>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-semibold text-slate-400">{kpi.label}</span>
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${kpi.color}15` }}>
                        <kpi.icon size={18} color={kpi.color} />
                      </div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{kpi.value}</div>
                      <div className="text-xs font-semibold text-emerald-600 mt-1">{kpi.change}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* System Health & Status Bar */}
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="p-6 rounded-2xl border shadow-sm" style={cardBgStyle}>
                  <h3 className="font-bold text-lg mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>System Health & Storage</h3>
                  <div className="space-y-4 text-xs">
                    <div>
                      <div className="flex justify-between font-semibold mb-1">
                        <span>Website Health Status</span>
                        <span className="text-emerald-500 font-bold">99.8% Operational</span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                        <div className="bg-emerald-500 h-full w-[99.8%]"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between font-semibold mb-1">
                        <span>Storage Usage</span>
                        <span>1.4 GB / 10 GB</span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                        <div className="bg-orange-500 h-full w-[14%]"></div>
                      </div>
                    </div>
                    <div className="pt-2 border-t text-slate-400 flex justify-between">
                      <span>Last Automated Backup:</span>
                      <span className="font-bold text-slate-700">Today, 13:45 GMT</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-2 p-6 rounded-2xl border shadow-sm" style={cardBgStyle}>
                  <h3 className="font-bold text-lg mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Recent Activity Stream</h3>
                  <div className="space-y-3">
                    {[
                      { text: "New Quote Request RFQ-1092 received from Tullow Oil Ghana", time: "12 mins ago", type: "RFQ" },
                      { text: "Updated Tema Port Marine Maintenance project status to Completed", time: "1 hour ago", type: "PROJECT" },
                      { text: "Published article: The Future of Deepwater Engineering in West Africa", time: "3 hours ago", type: "NEWS" },
                      { text: "New Job Application received for Senior Marine Structural Engineer", time: "5 hours ago", type: "CAREERS" },
                    ].map((act, i) => (
                      <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 text-xs">
                        <div className="flex items-center gap-3">
                          <span className="px-2 py-0.5 rounded font-bold bg-orange-100 text-orange-600" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{act.type}</span>
                          <span className="font-medium">{act.text}</span>
                        </div>
                        <span className="text-slate-400 flex-shrink-0">{act.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ───────────────────────────────────────────────────────────── */}
          {/* 2. COMPANY MODULE */}
          {/* ───────────────────────────────────────────────────────────── */}
          {activeModule === "company" && (
            <div className="space-y-8">
              <div className="p-8 rounded-2xl border shadow-sm" style={cardBgStyle}>
                <h3 className="font-bold text-2xl mb-6" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Company Overview & Mission</h3>
                <div className="grid lg:grid-cols-2 gap-6 text-sm">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 mb-2">CORPORATE MISSION STATEMENT</label>
                    <textarea rows={3} defaultValue="Engineering Reliability Into Every Marine, Offshore, and Industrial Project Across West Africa." className="w-full p-4 rounded-xl border text-sm" style={{ borderColor: "#C8D5DF", color: "#0C1E35" }} />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 mb-2">CORPORATE VISION STATEMENT</label>
                    <textarea rows={3} defaultValue="To be Africa's engineering partner of choice, recognized globally for technical excellence, safety leadership, and sustainable innovation." className="w-full p-4 rounded-xl border text-sm" style={{ borderColor: "#C8D5DF", color: "#0C1E35" }} />
                  </div>
                </div>
              </div>

              {/* Leadership Team Table */}
              <div className="p-8 rounded-2xl border shadow-sm" style={cardBgStyle}>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold text-2xl" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Executive Leadership Team</h3>
                  <button
                    onClick={() => setEditingTeam({
                      name: "Executive Leader Name",
                      role: "Director of Marine Services",
                      bio: "Executive profile biography...",
                      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&auto=format",
                      linkedin: "https://linkedin.com"
                    })}
                    className="px-4 py-2 rounded-lg text-xs font-bold text-white bg-orange-600"
                    style={{ backgroundColor: "#E85C0D", fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    + ADD EXECUTIVE
                  </button>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {cms.team.map((t) => (
                    <div key={t.name} className="p-5 rounded-xl border border-slate-200 dark:border-white/10 text-center">
                      <img src={t.image} alt={t.name} className="w-20 h-20 rounded-full object-cover mx-auto mb-3 border-2 border-orange-500" />
                      <div className="font-bold text-base" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{t.name}</div>
                      <div className="text-xs text-orange-600 font-semibold mb-2">{t.role}</div>
                      <button onClick={() => setEditingTeam({ ...t })} className="text-xs font-semibold text-slate-500 underline">Edit Profile</button>
                    </div>
                  ))}
                </div>

                {editingTeam && (
                  <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl max-w-xl w-full p-8 text-slate-900">
                      <h4 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#0C1E35" }}>Edit Profile: {editingTeam.name}</h4>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-600 mb-1">NAME</label>
                          <input type="text" value={editingTeam.name} onChange={(e) => setEditingTeam({ ...editingTeam, name: e.target.value })} className="w-full px-4 py-2.5 rounded-lg border text-sm" />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-600 mb-1">ROLE / POSITION</label>
                          <input type="text" value={editingTeam.role} onChange={(e) => setEditingTeam({ ...editingTeam, role: e.target.value })} className="w-full px-4 py-2.5 rounded-lg border text-sm" />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-600 mb-1">BIOGRAPHY</label>
                          <textarea rows={4} value={editingTeam.bio} onChange={(e) => setEditingTeam({ ...editingTeam, bio: e.target.value })} className="w-full px-4 py-2.5 rounded-lg border text-sm" />
                        </div>
                        <div className="flex justify-end gap-3 pt-4 border-t">
                          <button onClick={() => setEditingTeam(null)} className="px-5 py-2.5 rounded-lg text-sm text-slate-600">Cancel</button>
                          <button
                            onClick={() => {
                              const idx = cms.team.findIndex((t) => t.name === editingTeam.name);
                              if (idx >= 0) {
                                const updated = [...cms.team];
                                updated[idx] = editingTeam;
                                cms.updateTeam(updated);
                              } else {
                                cms.updateTeam([...cms.team, editingTeam]);
                              }
                              setEditingTeam(null);
                              notify("Profile saved!");
                            }}
                            className="px-6 py-2.5 rounded-lg text-sm font-bold text-white bg-orange-600"
                            style={{ backgroundColor: "#E85C0D" }}
                          >
                            SAVE PROFILE
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ───────────────────────────────────────────────────────────── */}
          {/* 3. SERVICES MODULE */}
          {/* ───────────────────────────────────────────────────────────── */}
          {activeModule === "services" && (
            <div className="p-8 rounded-2xl border shadow-sm" style={cardBgStyle}>
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="font-bold text-2xl" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Engineering Services Directory</h3>
                  <p className="text-xs text-slate-500">Manage all 9 active service lines, capabilities, equipment, and media</p>
                </div>
              </div>

              <div className="grid gap-4">
                {cms.services.map((s) => (
                  <div key={s.id} className="p-5 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-4" style={{ borderColor: "#E8EEF3" }}>
                    <div className="flex items-center gap-4">
                      <img src={s.image} alt={s.title} className="w-24 h-16 rounded-lg object-cover flex-shrink-0" />
                      <div>
                        <span className="text-xs font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-700 mr-2" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>PUBLISHED</span>
                        <h4 className="font-bold text-lg" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{s.title}</h4>
                        <p className="text-xs text-slate-500 max-w-xl">{s.description.slice(0, 100)}...</p>
                      </div>
                    </div>
                    <button onClick={() => setEditingService({ ...s })} className="px-4 py-2 rounded-lg text-xs font-bold border border-slate-300 hover:bg-slate-50">EDIT SERVICE</button>
                  </div>
                ))}
              </div>

              {editingService && (
                <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
                  <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 text-slate-900">
                    <h4 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#0C1E35" }}>
                      Edit Service: {editingService.title}
                    </h4>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-600 mb-1">SERVICE TITLE</label>
                        <input
                          type="text"
                          value={editingService.title}
                          onChange={(e) => setEditingService({ ...editingService, title: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-lg border text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-600 mb-1">DESCRIPTION</label>
                        <textarea
                          rows={3}
                          value={editingService.description}
                          onChange={(e) => setEditingService({ ...editingService, description: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-lg border text-sm"
                        />
                      </div>
                      <div className="flex items-center justify-end gap-3 pt-4 border-t">
                        <button onClick={() => setEditingService(null)} className="px-5 py-2.5 rounded-lg text-sm text-slate-600">Cancel</button>
                        <button
                          onClick={() => {
                            const idx = cms.services.findIndex((s) => s.id === editingService.id);
                            if (idx >= 0) {
                              const updated = [...cms.services];
                              updated[idx] = editingService;
                              cms.updateServices(updated);
                            }
                            setEditingService(null);
                            notify("Service updated successfully!");
                          }}
                          className="px-6 py-2.5 rounded-lg text-sm font-bold text-white bg-orange-600"
                          style={{ backgroundColor: "#E85C0D" }}
                        >
                          SAVE SERVICE
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ───────────────────────────────────────────────────────────── */}
          {/* 4. PROJECTS MODULE */}
          {/* ───────────────────────────────────────────────────────────── */}
          {activeModule === "projects" && (
            <div className="p-8 rounded-2xl border shadow-sm" style={cardBgStyle}>
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="font-bold text-2xl" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Projects Portfolio Manager</h3>
                  <p className="text-xs text-slate-500">Add, edit, or publish engineering project case studies</p>
                </div>
                <button
                  onClick={() => setEditingProject({
                    id: `prj-${Date.now()}`,
                    title: "New Engineering Project",
                    client: "Client Corporation",
                    location: "Tema, Ghana",
                    duration: "12 months",
                    year: "2024",
                    category: "Offshore",
                    scope: "Detailed project scope description...",
                    challenge: "Technical challenges overcome...",
                    solution: "Engineering solutions deployed...",
                    results: "Project outcome metrics...",
                    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=500&fit=crop&auto=format",
                    gallery: ["https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=700&h=450&fit=crop&auto=format"]
                  })}
                  className="px-4 py-2.5 rounded-lg text-xs font-bold text-white"
                  style={{ backgroundColor: "#E85C0D", fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  + CREATE NEW PROJECT
                </button>
              </div>

              <div className="grid gap-4">
                {cms.projects.map((p) => (
                  <div key={p.id} className="p-5 rounded-xl border flex flex-col md:flex-row md:items-center justify-between gap-4" style={{ borderColor: "#E8EEF3" }}>
                    <div className="flex items-center gap-4">
                      <img src={p.image} alt={p.title} className="w-24 h-16 rounded-lg object-cover flex-shrink-0" />
                      <div>
                        <span className="text-xs font-bold px-2 py-0.5 rounded bg-orange-100 text-orange-600 mr-2" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{p.category}</span>
                        <span className="text-xs text-slate-400">{p.client} · {p.year}</span>
                        <h4 className="font-bold text-lg" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{p.title}</h4>
                        <p className="text-xs text-slate-500">📍 {p.location} | ⏱ {p.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button onClick={() => setEditingProject({ ...p })} className="px-4 py-2 rounded-lg text-xs font-bold border border-slate-300">EDIT</button>
                    </div>
                  </div>
                ))}
              </div>

              {editingProject && (
                <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
                  <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 text-slate-900">
                    <h4 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#0C1E35" }}>
                      Edit Project: {editingProject.title}
                    </h4>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-600 mb-1">PROJECT TITLE</label>
                        <input type="text" value={editingProject.title} onChange={(e) => setEditingProject({ ...editingProject, title: e.target.value })} className="w-full px-4 py-2.5 rounded-lg border text-sm" />
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-600 mb-1">CLIENT</label>
                          <input type="text" value={editingProject.client} onChange={(e) => setEditingProject({ ...editingProject, client: e.target.value })} className="w-full px-4 py-2.5 rounded-lg border text-sm" />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-600 mb-1">LOCATION</label>
                          <input type="text" value={editingProject.location} onChange={(e) => setEditingProject({ ...editingProject, location: e.target.value })} className="w-full px-4 py-2.5 rounded-lg border text-sm" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-600 mb-1">SCOPE</label>
                        <textarea rows={3} value={editingProject.scope} onChange={(e) => setEditingProject({ ...editingProject, scope: e.target.value })} className="w-full px-4 py-2.5 rounded-lg border text-sm" />
                      </div>
                      <div className="flex justify-end gap-3 pt-4 border-t">
                        <button onClick={() => setEditingProject(null)} className="px-5 py-2.5 rounded-lg text-sm text-slate-600">Cancel</button>
                        <button
                          onClick={() => {
                            const idx = cms.projects.findIndex((p) => p.id === editingProject.id);
                            if (idx >= 0) {
                              const updated = [...cms.projects];
                              updated[idx] = editingProject;
                              cms.updateProjects(updated);
                            } else {
                              cms.updateProjects([editingProject, ...cms.projects]);
                            }
                            setEditingProject(null);
                            notify("Project saved successfully!");
                          }}
                          className="px-6 py-2.5 rounded-lg text-sm font-bold text-white bg-orange-600"
                          style={{ backgroundColor: "#E85C0D" }}
                        >
                          SAVE PROJECT
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ───────────────────────────────────────────────────────────── */}
          {/* 5. NEWS MODULE */}
          {/* ───────────────────────────────────────────────────────────── */}
          {activeModule === "news" && (
            <div className="p-8 rounded-2xl border shadow-sm" style={cardBgStyle}>
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-2xl" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Newsroom & Insights</h3>
                <button
                  onClick={() => setEditingNews({
                    id: Date.now(),
                    title: "New Corporate Announcement",
                    category: "Company News",
                    date: new Date().toISOString().split("T")[0],
                    excerpt: "Announcement summary text...",
                    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&h=450&fit=crop&auto=format",
                    readTime: "3 min read"
                  })}
                  className="px-4 py-2.5 rounded-lg text-xs font-bold text-white bg-orange-600"
                  style={{ backgroundColor: "#E85C0D", fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  + NEW ARTICLE
                </button>
              </div>

              <div className="grid gap-4">
                {cms.news.map((n) => (
                  <div key={n.id} className="p-5 rounded-xl border flex flex-col md:flex-row md:items-center justify-between gap-4" style={{ borderColor: "#E8EEF3" }}>
                    <div className="flex items-center gap-4">
                      <img src={n.image} alt={n.title} className="w-24 h-16 rounded-lg object-cover flex-shrink-0" />
                      <div>
                        <span className="text-xs font-bold text-orange-600 mr-2">{n.category}</span>
                        <span className="text-xs text-slate-400">{n.date}</span>
                        <h4 className="font-bold text-lg" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{n.title}</h4>
                      </div>
                    </div>
                    <button onClick={() => setEditingNews({ ...n })} className="px-4 py-2 rounded-lg text-xs font-bold border border-slate-300">EDIT</button>
                  </div>
                ))}
              </div>

              {editingNews && (
                <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
                  <div className="bg-white rounded-2xl max-w-2xl w-full p-8 text-slate-900">
                    <h4 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#0C1E35" }}>Edit News Article</h4>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-600 mb-1">ARTICLE TITLE</label>
                        <input type="text" value={editingNews.title} onChange={(e) => setEditingNews({ ...editingNews, title: e.target.value })} className="w-full px-4 py-2.5 rounded-lg border text-sm" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-600 mb-1">EXCERPT / BODY</label>
                        <textarea rows={3} value={editingNews.excerpt} onChange={(e) => setEditingNews({ ...editingNews, excerpt: e.target.value })} className="w-full px-4 py-2.5 rounded-lg border text-sm" />
                      </div>
                      <div className="flex justify-end gap-3 pt-4 border-t">
                        <button onClick={() => setEditingNews(null)} className="px-5 py-2.5 rounded-lg text-sm text-slate-600">Cancel</button>
                        <button
                          onClick={() => {
                            const idx = cms.news.findIndex((item) => item.id === editingNews.id);
                            if (idx >= 0) {
                              const updated = [...cms.news];
                              updated[idx] = editingNews;
                              cms.updateNews(updated);
                            } else {
                              cms.updateNews([editingNews, ...cms.news]);
                            }
                            setEditingNews(null);
                            notify("Article saved!");
                          }}
                          className="px-6 py-2.5 rounded-lg text-sm font-bold text-white bg-orange-600"
                          style={{ backgroundColor: "#E85C0D" }}
                        >
                          SAVE ARTICLE
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ───────────────────────────────────────────────────────────── */}
          {/* 6. MEDIA CENTRE MODULE */}
          {/* ───────────────────────────────────────────────────────────── */}
          {activeModule === "media" && (
            <div className="p-8 rounded-2xl border shadow-sm space-y-6" style={cardBgStyle}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="font-bold text-2xl" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Digital Asset Media Centre</h3>
                  <p className="text-xs text-slate-500">Manage high-resolution images, CAD drawings, and RFQ documents</p>
                </div>
                <button onClick={() => notify("Media upload dialog opened")} className="px-4 py-2.5 rounded-lg text-xs font-bold text-white bg-orange-600 flex items-center gap-2" style={{ backgroundColor: "#E85C0D", fontFamily: "'Barlow Condensed', sans-serif" }}>
                  <UploadIcon size={14} /> BULK UPLOAD ASSETS
                </button>
              </div>

              {/* Assets Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {assets.map((ast) => (
                  <div key={ast.id} className="p-4 rounded-xl border flex flex-col justify-between" style={{ borderColor: "#E8EEF3" }}>
                    <div>
                      <div className="w-full h-32 rounded-lg bg-slate-100 dark:bg-white/5 flex items-center justify-center mb-3 text-slate-400 font-bold text-xs uppercase" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                        {ast.type} PREVIEW
                      </div>
                      <div className="font-bold text-xs truncate" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{ast.name}</div>
                      <div className="text-[11px] text-slate-400 mt-0.5">{ast.folder} · {ast.size}</div>
                    </div>
                    <button onClick={() => notify(`Copied URL for ${ast.name}`)} className="mt-3 text-xs font-bold text-orange-600 underline text-left">Copy URL</button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ───────────────────────────────────────────────────────────── */}
          {/* 7. FORMS HUB MODULE */}
          {/* ───────────────────────────────────────────────────────────── */}
          {activeModule === "forms" && (
            <div className="p-8 rounded-2xl border shadow-sm space-y-6" style={cardBgStyle}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="font-bold text-2xl" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Form Submissions & RFQ Hub</h3>
                  <p className="text-xs text-slate-500">Manage client enquiries, project RFQs, and candidate applications</p>
                </div>
                <button onClick={() => notify("Form submissions exported to CSV")} className="px-4 py-2 rounded-lg text-xs font-bold border border-slate-300">
                  EXPORT SUBMISSIONS (CSV)
                </button>
              </div>

              {/* Sub-tabs */}
              <div className="flex border-b text-xs font-bold gap-6" style={{ borderColor: "#E8EEF3", fontFamily: "'Barlow Condensed', sans-serif" }}>
                {[
                  { id: "quotes", label: "RFQ QUOTE REQUESTS" },
                  { id: "contacts", label: "CONTACT MESSAGES" },
                  { id: "careers", label: "JOB APPLICATIONS" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setFormSubTab(tab.id as any)}
                    className={`pb-3 border-b-2 transition-colors ${formSubTab === tab.id ? "border-orange-500 text-orange-600" : "border-transparent text-slate-400"}`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Submissions Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b text-slate-400 font-semibold" style={{ borderColor: "#E8EEF3" }}>
                      <th className="py-3 px-4">REF ID</th>
                      <th className="py-3 px-4">NAME / COMPANY</th>
                      <th className="py-3 px-4">DETAILS</th>
                      <th className="py-3 px-4">DATE</th>
                      <th className="py-3 px-4">STATUS</th>
                      <th className="py-3 px-4">ACTION</th>
                    </tr>
                  </thead>
                  <tbody>
                    {formSubTab === "quotes" && submissions.quotes.map((q) => (
                      <tr key={q.id} className="border-b hover:bg-slate-50 dark:hover:bg-white/5" style={{ borderColor: "#E8EEF3" }}>
                        <td className="py-3.5 px-4 font-bold text-orange-600">{q.id}</td>
                        <td className="py-3.5 px-4 font-semibold">{q.name}<br /><span className="text-slate-400">{q.company}</span></td>
                        <td className="py-3.5 px-4">{q.service}<br /><span className="text-slate-400">{q.budget}</span></td>
                        <td className="py-3.5 px-4 text-slate-400">{q.date}</td>
                        <td className="py-3.5 px-4"><span className="px-2 py-0.5 rounded font-bold bg-orange-100 text-orange-700">{q.status}</span></td>
                        <td className="py-3.5 px-4"><button onClick={() => notify(`Opening ${q.id}`)} className="font-bold underline text-slate-600">Review</button></td>
                      </tr>
                    ))}

                    {formSubTab === "contacts" && submissions.contacts.map((c) => (
                      <tr key={c.id} className="border-b hover:bg-slate-50 dark:hover:bg-white/5" style={{ borderColor: "#E8EEF3" }}>
                        <td className="py-3.5 px-4 font-bold text-blue-600">{c.id}</td>
                        <td className="py-3.5 px-4 font-semibold">{c.name}<br /><span className="text-slate-400">{c.email}</span></td>
                        <td className="py-3.5 px-4">{c.subject}</td>
                        <td className="py-3.5 px-4 text-slate-400">{c.date}</td>
                        <td className="py-3.5 px-4"><span className="px-2 py-0.5 rounded font-bold bg-blue-100 text-blue-700">{c.status}</span></td>
                        <td className="py-3.5 px-4"><button onClick={() => notify(`Opening ${c.id}`)} className="font-bold underline text-slate-600">Review</button></td>
                      </tr>
                    ))}

                    {formSubTab === "careers" && submissions.careers.map((app) => (
                      <tr key={app.id} className="border-b hover:bg-slate-50 dark:hover:bg-white/5" style={{ borderColor: "#E8EEF3" }}>
                        <td className="py-3.5 px-4 font-bold text-purple-600">{app.id}</td>
                        <td className="py-3.5 px-4 font-semibold">{app.applicant}</td>
                        <td className="py-3.5 px-4">{app.role}</td>
                        <td className="py-3.5 px-4 text-slate-400">{app.date}</td>
                        <td className="py-3.5 px-4"><span className="px-2 py-0.5 rounded font-bold bg-purple-100 text-purple-700">{app.status}</span></td>
                        <td className="py-3.5 px-4"><button onClick={() => notify(`Opening ${app.id}`)} className="font-bold underline text-slate-600">View CV</button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ───────────────────────────────────────────────────────────── */}
          {/* CAREERS MODULE */}
          {/* ───────────────────────────────────────────────────────────── */}
          {activeModule === "careers" && (
            <div className="p-8 rounded-2xl border shadow-sm space-y-6" style={cardBgStyle}>
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="font-bold text-2xl" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Careers & Vacancies Manager</h3>
                  <p className="text-xs text-slate-500 font-medium">Post open engineering positions and manage candidate recruitment</p>
                </div>
                <button
                  onClick={() => setEditingJob({
                    id: Date.now(),
                    title: "New Engineering Position",
                    department: "Engineering",
                    location: "Tema, Ghana",
                    type: "Full-time",
                    description: "Position overview..."
                  })}
                  className="px-4 py-2.5 rounded-lg text-xs font-bold text-white bg-orange-600"
                  style={{ backgroundColor: "#E85C0D", fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  + POST NEW VACANCY
                </button>
              </div>

              <div className="grid gap-4">
                {cms.jobs.map((j) => (
                  <div key={j.id} className="p-5 rounded-xl border flex flex-col md:flex-row md:items-center justify-between gap-4" style={{ borderColor: "#E8EEF3" }}>
                    <div>
                      <span className="text-xs font-bold text-orange-600 mr-2">{j.type}</span>
                      <span className="text-xs text-slate-400">{j.department}</span>
                      <h4 className="font-bold text-lg" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{j.title}</h4>
                      <p className="text-xs text-slate-500">📍 {j.location}</p>
                    </div>
                    <div className="flex gap-2">
                      <button onClick={() => setEditingJob({ ...j })} className="px-3.5 py-1.5 rounded-lg text-xs font-bold border border-slate-300">EDIT</button>
                      <button
                        onClick={() => {
                          cms.updateJobs(cms.jobs.filter((item) => item.id !== j.id));
                          notify("Vacancy removed!");
                        }}
                        className="px-3 py-1.5 rounded-lg text-xs font-bold text-rose-600"
                      >
                        DELETE
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {editingJob && (
                <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
                  <div className="bg-white rounded-2xl max-w-xl w-full p-8 text-slate-900">
                    <h4 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#0C1E35" }}>Edit Vacancy</h4>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-600 mb-1">JOB TITLE</label>
                        <input type="text" value={editingJob.title} onChange={(e) => setEditingJob({ ...editingJob, title: e.target.value })} className="w-full px-4 py-2.5 rounded-lg border text-sm" />
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-600 mb-1">DEPARTMENT</label>
                          <input type="text" value={editingJob.department} onChange={(e) => setEditingJob({ ...editingJob, department: e.target.value })} className="w-full px-4 py-2.5 rounded-lg border text-sm" />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-600 mb-1">TYPE</label>
                          <input type="text" value={editingJob.type} onChange={(e) => setEditingJob({ ...editingJob, type: e.target.value })} className="w-full px-4 py-2.5 rounded-lg border text-sm" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-600 mb-1">LOCATION</label>
                        <input type="text" value={editingJob.location} onChange={(e) => setEditingJob({ ...editingJob, location: e.target.value })} className="w-full px-4 py-2.5 rounded-lg border text-sm" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-600 mb-1">DESCRIPTION</label>
                        <textarea rows={3} value={editingJob.description} onChange={(e) => setEditingJob({ ...editingJob, description: e.target.value })} className="w-full px-4 py-2.5 rounded-lg border text-sm" />
                      </div>
                      <div className="flex justify-end gap-3 pt-4 border-t">
                        <button onClick={() => setEditingJob(null)} className="px-5 py-2.5 rounded-lg text-sm text-slate-600">Cancel</button>
                        <button
                          onClick={() => {
                            const existingIndex = cms.jobs.findIndex((item) => item.id === editingJob.id);
                            if (existingIndex >= 0) {
                              const updated = [...cms.jobs];
                              updated[existingIndex] = editingJob;
                              cms.updateJobs(updated);
                            } else {
                              cms.updateJobs([editingJob, ...cms.jobs]);
                            }
                            setEditingJob(null);
                            notify("Vacancy saved!");
                          }}
                          className="px-6 py-2.5 rounded-lg text-sm font-bold text-white bg-orange-600"
                          style={{ backgroundColor: "#E85C0D" }}
                        >
                          SAVE VACANCY
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ───────────────────────────────────────────────────────────── */}
          {/* TESTIMONIALS MODULE */}
          {/* ───────────────────────────────────────────────────────────── */}
          {activeModule === "testimonials" && (
            <div className="p-8 rounded-2xl border shadow-sm space-y-6" style={cardBgStyle}>
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="font-bold text-2xl" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Client Testimonials Manager</h3>
                  <p className="text-xs text-slate-500 font-medium">Manage executive client quotes, organization logos, and endorsements</p>
                </div>
                <button
                  onClick={() => setEditingTestimonial({
                    id: Date.now(),
                    quote: "3C Marine Engineering delivered exceptional technical performance.",
                    author: "Client Executive",
                    role: "Operations Director",
                    company: "Client Organization",
                    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop&auto=format"
                  })}
                  className="px-4 py-2.5 rounded-lg text-xs font-bold text-white bg-orange-600"
                  style={{ backgroundColor: "#E85C0D", fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  + ADD TESTIMONIAL
                </button>
              </div>

              <div className="grid gap-4">
                {cms.testimonials.map((t) => (
                  <div key={t.id} className="p-5 rounded-xl border flex flex-col md:flex-row md:items-center justify-between gap-4" style={{ borderColor: "#E8EEF3" }}>
                    <div>
                      <p className="italic text-sm mb-2">"{t.quote}"</p>
                      <div className="text-xs font-bold">{t.author} — <span className="text-orange-600">{t.company}</span> ({t.role})</div>
                    </div>
                    <div className="flex gap-2">
                      <button onClick={() => setEditingTestimonial({ ...t })} className="px-3.5 py-1.5 rounded-lg text-xs font-bold border border-slate-300">EDIT</button>
                      <button
                        onClick={() => {
                          cms.updateTestimonials(cms.testimonials.filter((item) => item.id !== t.id));
                          notify("Testimonial removed!");
                        }}
                        className="px-3 py-1.5 rounded-lg text-xs font-bold text-rose-600"
                      >
                        DELETE
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {editingTestimonial && (
                <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
                  <div className="bg-white rounded-2xl max-w-xl w-full p-8 text-slate-900">
                    <h4 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#0C1E35" }}>Edit Testimonial</h4>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-600 mb-1">CLIENT QUOTE</label>
                        <textarea rows={3} value={editingTestimonial.quote} onChange={(e) => setEditingTestimonial({ ...editingTestimonial, quote: e.target.value })} className="w-full px-4 py-2.5 rounded-lg border text-sm" />
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-600 mb-1">AUTHOR NAME</label>
                          <input type="text" value={editingTestimonial.author} onChange={(e) => setEditingTestimonial({ ...editingTestimonial, author: e.target.value })} className="w-full px-4 py-2.5 rounded-lg border text-sm" />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-600 mb-1">COMPANY</label>
                          <input type="text" value={editingTestimonial.company} onChange={(e) => setEditingTestimonial({ ...editingTestimonial, company: e.target.value })} className="w-full px-4 py-2.5 rounded-lg border text-sm" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-600 mb-1">ROLE / TITLE</label>
                        <input type="text" value={editingTestimonial.role} onChange={(e) => setEditingTestimonial({ ...editingTestimonial, role: e.target.value })} className="w-full px-4 py-2.5 rounded-lg border text-sm" />
                      </div>
                      <div className="flex justify-end gap-3 pt-4 border-t">
                        <button onClick={() => setEditingTestimonial(null)} className="px-5 py-2.5 rounded-lg text-sm text-slate-600">Cancel</button>
                        <button
                          onClick={() => {
                            const existingIndex = cms.testimonials.findIndex((item) => item.id === editingTestimonial.id);
                            if (existingIndex >= 0) {
                              const updated = [...cms.testimonials];
                              updated[existingIndex] = editingTestimonial;
                              cms.updateTestimonials(updated);
                            } else {
                              cms.updateTestimonials([editingTestimonial, ...cms.testimonials]);
                            }
                            setEditingTestimonial(null);
                            notify("Testimonial saved!");
                          }}
                          className="px-6 py-2.5 rounded-lg text-sm font-bold text-white bg-orange-600"
                          style={{ backgroundColor: "#E85C0D" }}
                        >
                          SAVE TESTIMONIAL
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ───────────────────────────────────────────────────────────── */}
          {/* 8. SEO CENTRE MODULE */}
          {/* ───────────────────────────────────────────────────────────── */}
          {activeModule === "seo" && (
            <div className="p-8 rounded-2xl border shadow-sm space-y-6" style={cardBgStyle}>
              <h3 className="font-bold text-2xl" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>SEO & Open Graph Centre</h3>
              <div className="space-y-4 text-xs">
                <div>
                  <label className="block font-bold text-slate-500 mb-1">GLOBAL DEFAULT META TITLE</label>
                  <input type="text" defaultValue="3C Marine Engineering Limited | Marine, Offshore & Industrial Engineering" className="w-full p-3 rounded-lg border" style={{ borderColor: "#C8D5DF" }} />
                </div>
                <div>
                  <label className="block font-bold text-slate-500 mb-1">GLOBAL META DESCRIPTION</label>
                  <textarea rows={2} defaultValue="3C Marine Engineering Limited is West Africa's leading marine, offshore, and industrial engineering contractor based in Tema, Ghana." className="w-full p-3 rounded-lg border" style={{ borderColor: "#C8D5DF" }} />
                </div>
                <div className="pt-4 border-t flex items-center justify-between">
                  <div>
                    <span className="font-bold text-emerald-600">Sitemap XML Generator:</span> Active (Generated automatically at /sitemap.xml)
                  </div>
                  <button onClick={() => notify("Sitemap regenerated")} className="px-4 py-2 rounded-lg font-bold text-white bg-orange-600" style={{ backgroundColor: "#E85C0D" }}>REGENERATE SITEMAP</button>
                </div>
              </div>
            </div>
          )}

          {/* ───────────────────────────────────────────────────────────── */}
          {/* 9. ANALYTICS MODULE */}
          {/* ───────────────────────────────────────────────────────────── */}
          {activeModule === "analytics" && (
            <div className="p-8 rounded-2xl border shadow-sm space-y-6" style={cardBgStyle}>
              <h3 className="font-bold text-2xl" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Executive Traffic & Conversion Analytics</h3>
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="p-5 rounded-xl border border-slate-200">
                  <div className="text-xs text-slate-400 font-semibold mb-1">MOST VISITED PAGE</div>
                  <div className="font-bold text-lg" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>/services/marine-engineering</div>
                  <div className="text-xs text-emerald-600 mt-1 font-bold">3,840 views this month</div>
                </div>
                <div className="p-5 rounded-xl border border-slate-200">
                  <div className="text-xs text-slate-400 font-semibold mb-1">RFQ CONVERSION RATE</div>
                  <div className="font-bold text-2xl" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>4.2%</div>
                  <div className="text-xs text-emerald-600 mt-1 font-bold">+0.8% higher than industry benchmark</div>
                </div>
                <div className="p-5 rounded-xl border border-slate-200">
                  <div className="text-xs text-slate-400 font-semibold mb-1">DEVICE BREAKDOWN</div>
                  <div className="font-bold text-sm" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Desktop: 62% | Mobile: 31% | Tablet: 7%</div>
                </div>
              </div>
            </div>
          )}

          {/* ───────────────────────────────────────────────────────────── */}
          {/* 10. USERS MODULE */}
          {/* ───────────────────────────────────────────────────────────── */}
          {activeModule === "users" && (
            <div className="p-8 rounded-2xl border shadow-sm space-y-6" style={cardBgStyle}>
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-2xl" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>User Roles & Access Control</h3>
                <button onClick={() => notify("User invite sent")} className="px-4 py-2 rounded-lg text-xs font-bold text-white bg-orange-600" style={{ backgroundColor: "#E85C0D", fontFamily: "'Barlow Condensed', sans-serif" }}>+ INVITE USER</button>
              </div>
              <div className="space-y-3 text-xs">
                {[
                  { name: "Kofi Mensah", role: "Super Admin", email: "k.mensah@3cmarineengineering.com" },
                  { name: "Abena Asante-Boateng", role: "Administrator", email: "a.asante@3cmarineengineering.com" },
                  { name: "Sandra Osei", role: "Safety / HSE Manager", email: "s.osei@3cmarineengineering.com" },
                  { name: "Marketing Lead", role: "Content Manager", email: "media@3cmarineengineering.com" },
                ].map((usr) => (
                  <div key={usr.email} className="p-4 rounded-xl border flex items-center justify-between" style={{ borderColor: "#E8EEF3" }}>
                    <div>
                      <div className="font-bold text-sm">{usr.name}</div>
                      <div className="text-slate-400">{usr.email}</div>
                    </div>
                    <span className="px-3 py-1 rounded font-bold bg-orange-100 text-orange-700">{usr.role}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ───────────────────────────────────────────────────────────── */}
          {/* 11. SETTINGS MODULE */}
          {/* ───────────────────────────────────────────────────────────── */}
          {activeModule === "settings" && (
            <div className="p-8 rounded-2xl border shadow-sm space-y-6" style={cardBgStyle}>
              <h3 className="font-bold text-2xl" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Platform Settings & Backup</h3>
              <p className="text-xs text-slate-500">Configure global settings, backup database, and manage branding tokens</p>
              <div className="flex flex-wrap gap-4 pt-4 border-t">
                <button onClick={exportJSON} className="px-6 py-3.5 rounded-xl font-bold text-white bg-navy-900 flex items-center gap-2" style={{ backgroundColor: "#0C1E35", fontFamily: "'Barlow Condensed', sans-serif" }}>
                  <UploadIcon size={16} /> EXPORT FULL DATABASE (JSON)
                </button>
                <button
                  onClick={() => {
                    if (window.confirm("Are you sure you want to reset all content back to factory default values?")) {
                      cms.resetToDefaults();
                      notify("Factory defaults restored!");
                    }
                  }}
                  className="px-6 py-3.5 rounded-xl font-bold text-rose-600 border border-rose-200 hover:bg-rose-50"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  RESET FACTORY DEFAULTS
                </button>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
