import { motion } from "motion/react";
import { Sparkles, Shield, Zap } from "lucide-react";
import logoImg from "../../imports/IMG-20260611-WA0059.jpg";

const stats = [
  { value: "5000+", label: "Order Selesai" },
  { value: "4.9★", label: "Rating" },
  { value: "24/7", label: "Layanan Aktif" },
  { value: "100%", label: "Aman & Terpercaya" },
];

export function Hero() {
  return (
    <section id="home" style={{
      minHeight: "100vh", position: "relative", display: "flex", alignItems: "center",
      overflow: "hidden",
      background: "radial-gradient(ellipse at 60% 40%, rgba(168,85,247,0.15) 0%, transparent 60%), radial-gradient(ellipse at 20% 70%, rgba(236,72,153,0.12) 0%, transparent 50%), #08010f",
    }}>
      {/* Background decorations */}
      <div style={{
        position: "absolute", top: "10%", right: "5%", width: 400, height: 400,
        borderRadius: "50%", background: "radial-gradient(circle, rgba(236,72,153,0.08) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "15%", left: "2%", width: 300, height: 300,
        borderRadius: "50%", background: "radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      {/* Grid lines */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.04,
        backgroundImage: "linear-gradient(rgba(236,72,153,1) 1px, transparent 1px), linear-gradient(90deg, rgba(236,72,153,1) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "6rem 1.25rem 7rem", width: "100%" }}>
        <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}>
          {/* Left: Text */}
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 16px",
              borderRadius: 100, border: "1px solid rgba(236,72,153,0.4)",
              background: "rgba(236,72,153,0.08)", marginBottom: "1.2rem",
            }}>
              <Sparkles size={14} color="#f472b6" />
              <span style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 600, fontSize: "0.82rem", color: "#f472b6", letterSpacing: "0.08em" }}>
                JOKI GAME TERPERCAYA #1
              </span>
            </div>

            <h1 style={{
              fontFamily: "'Orbitron', sans-serif", fontWeight: 900,
              fontSize: "clamp(1.9rem, 4.5vw, 3.8rem)", lineHeight: 1.1,
              marginBottom: "1.2rem",
            }}>
              <span style={{ color: "#f0e8ff" }}>Raih </span>
              <span style={{
                background: "linear-gradient(135deg, #f472b6, #a855f7)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>Rank Impian</span>
              <br />
              <span style={{ color: "#f0e8ff" }}>Bersama </span>
              <span style={{
                background: "linear-gradient(135deg, #a855f7, #06b6d4)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>LaaVin Store</span>
            </h1>

            <p style={{
              fontFamily: "'Rajdhani', sans-serif", fontSize: "1.05rem", lineHeight: 1.7,
              color: "#c4a0e8", marginBottom: "1.8rem", maxWidth: 480,
            }}>
              Layanan joki game profesional untuk <strong style={{ color: "#06b6d4" }}>Wuthering Waves</strong>, <strong style={{ color: "#f59e0b" }}>Zenless Zone Zero</strong>, <strong style={{ color: "#818cf8" }}>Honkai Star Rail</strong>, dan <strong style={{ color: "#4ade80" }}>Genshin Impact</strong>. Cepat, aman, terpercaya!
            </p>

            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginBottom: "2rem" }}>
              <a href="#contact" style={{
                padding: "13px 28px", borderRadius: 10, textDecoration: "none",
                background: "linear-gradient(135deg, #ec4899, #a855f7)",
                color: "#fff", fontFamily: "'Orbitron', sans-serif", fontWeight: 700,
                fontSize: "0.85rem", letterSpacing: "0.05em",
                boxShadow: "0 0 25px rgba(236,72,153,0.5)",
                transition: "all 0.2s", display: "inline-flex", alignItems: "center", gap: 8,
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 0 40px rgba(236,72,153,0.8)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 0 25px rgba(236,72,153,0.5)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
              >
                <Zap size={16} /> ORDER SEKARANG
              </a>
              <a href="#services" style={{
                padding: "13px 28px", borderRadius: 10, textDecoration: "none",
                border: "1px solid rgba(236,72,153,0.4)", color: "#f472b6",
                fontFamily: "'Orbitron', sans-serif", fontWeight: 700, fontSize: "0.85rem",
                letterSpacing: "0.05em", background: "rgba(236,72,153,0.06)",
                transition: "all 0.2s",
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(236,72,153,0.15)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(236,72,153,0.06)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
              >
                LIHAT LAYANAN
              </a>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#9980bb", fontSize: "0.85rem" }}>
              <Shield size={14} color="#4ade80" />
              <span style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 500 }}>100% Aman — Akun dijamin tidak kena ban</span>
            </div>
          </motion.div>

          {/* Right: Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-logo-wrap"
            style={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }}
          >
            <div style={{
              position: "absolute", width: 300, height: 300, borderRadius: "50%",
              background: "radial-gradient(circle, rgba(236,72,153,0.2) 0%, transparent 70%)",
              animation: "pulse-glow 3s ease-in-out infinite",
            }} />
            <img
              src={logoImg}
              alt="LaaVin Store - Joki Game Terpercaya"
              style={{
                width: "min(340px, 90vw)", height: "min(340px, 90vw)",
                borderRadius: 20, objectFit: "cover",
                border: "2px solid rgba(236,72,153,0.35)",
                boxShadow: "0 0 50px rgba(236,72,153,0.3), 0 0 100px rgba(168,85,247,0.15)",
                position: "relative", zIndex: 1,
              }}
            />
          </motion.div>
        </div>

        {/* Stats bar */}
        <div style={{
          marginTop: "3rem",
          borderTop: "1px solid rgba(236,72,153,0.15)",
          paddingTop: "2rem",
          display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap",
        }}>
          {stats.map(s => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div style={{
                fontFamily: "'Orbitron', sans-serif", fontWeight: 900, fontSize: "1.3rem",
                background: "linear-gradient(135deg, #f472b6, #a855f7)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>{s.value}</div>
              <div style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "0.78rem", color: "#9980bb", letterSpacing: "0.06em" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes pulse-glow {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.08); opacity: 1; }
        }
        @media (max-width: 767px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
            text-align: center;
          }
          .hero-logo-wrap {
            order: -1;
          }
          .hero-grid a { justify-content: center; }
        }
      `}</style>
    </section>
  );
}
