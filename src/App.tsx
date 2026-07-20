import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { CMSProvider } from "./context/CMSContext";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Industries from "./pages/Industries";
import HSE from "./pages/HSE";
import News from "./pages/News";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import RequestQuote from "./pages/RequestQuote";
import Admin from "./pages/Admin";

function AppContent() {
  const location = useLocation();
  const isAdmin = location.pathname === "/admin";

  return (
    <div className="min-h-screen flex flex-col">
      {!isAdmin && <Nav />}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/hse" element={<HSE />} />
          <Route path="/news" element={<News />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/request-quote" element={<RequestQuote />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      {!isAdmin && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <CMSProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </CMSProvider>
  );
}
