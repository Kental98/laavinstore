import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logoImg from "../../imports/IMG-20260611-WA0059.jpg";

const navLinks = [
  { label: "Beranda", href: "#home" },
  { label: "Layanan", href: "#services" },
  { label: "Paket Harga", href: "#packages" },
  { label: "Testimoni", href: "#testimonials" },
  { label: "Kontak", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? "rgba(8,1,15,0.96)" : "transparent",
      borderBottom: scrolled ? "1px solid rgba(236,72,153,0.25)" : "none",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      transition: "all 0.3s ease",
    }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1.5rem" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>

          <a href="#home" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <img
              src={logoImg}
              alt="LaaVin Store"
              style={{ width: 42, height: 42, borderRadius: 10, objectFit: "cover", border: "2px solid rgba(236,72,153,0.5)", boxShadow: "0 0 16px rgba(236,72,153,0.4)" }}
            />
            <span style={{
              fontFamily: "'Orbitron', sans-serif",
              fontWeight: 900, fontSize: "1.15rem",
              background: "linear-gradient(135deg, #f472b6, #a855f7)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              letterSpacing: "0.06em",
            }}>LaaVin Store</span>
          </a>

          <div className="nav-desktop" style={{ display: "flex", alignItems: "center", gap: "1.8rem" }}>
            {navLinks.map(l => (
              <a key={l.href} href={l.href} style={{
                fontFamily: "'Rajdhani', sans-serif", fontWeight: 600, fontSize: "0.95rem",
                color: "#c4a0e8", textDecoration: "none", letterSpacing: "0.04em",
                transition: "color 0.2s",
              }}
                onMouseEnter={e => (e.currentTarget.style.color = "#f472b6")}
                onMouseLeave={e => (e.currentTarget.style.color = "#c4a0e8")}
              >{l.label}</a>
            ))}
            <a href="#contact" style={{
              fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, fontSize: "0.9rem",
              color: "#fff", textDecoration: "none", padding: "8px 22px", borderRadius: 8,
              background: "linear-gradient(135deg, #ec4899, #a855f7)",
              boxShadow: "0 0 18px rgba(236,72,153,0.45)",
              transition: "box-shadow 0.2s, transform 0.2s",
              letterSpacing: "0.04em",
            }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 0 28px rgba(236,72,153,0.75)"; e.currentTarget.style.transform = "translateY(-1px)"; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = "0 0 18px rgba(236,72,153,0.45)"; e.currentTarget.style.transform = "translateY(0)"; }}
            >ORDER SEKARANG</a>
          </div>

          <button className="nav-burger" onClick={() => setOpen(!open)}
            style={{ background: "none", border: "none", color: "#f472b6", cursor: "pointer", padding: 4, display: "none" }}>
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {open && (
          <div style={{
            background: "rgba(8,1,15,0.98)", borderTop: "1px solid rgba(236,72,153,0.2)",
            padding: "1rem 0", display: "flex", flexDirection: "column", gap: 4,
          }}>
            {navLinks.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} style={{
                fontFamily: "'Rajdhani', sans-serif", fontWeight: 600, fontSize: "1.05rem",
                color: "#f0e8ff", textDecoration: "none", padding: "10px 1.5rem",
              }}>{l.label}</a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} style={{
              margin: "8px 1.5rem", padding: "10px 20px", borderRadius: 8, textAlign: "center",
              background: "linear-gradient(135deg, #ec4899, #a855f7)", color: "#fff",
              fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, textDecoration: "none",
            }}>ORDER SEKARANG</a>
          </div>
        )}
      </div>

      <style>{`
        @media (min-width: 768px) { .nav-desktop { display: flex !important; } .nav-burger { display: none !important; } }
        @media (max-width: 767px) { .nav-desktop { display: none !important; } .nav-burger { display: block !important; } }
      `}</style>
    </nav>
  );
}
