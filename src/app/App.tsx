import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Menu, X, Zap, Users, Shield, Star, ChevronDown,
  MessageCircle, ArrowRight, Wind, Globe, Gamepad2,
  Rocket, Trophy, Clock, Sparkles
} from "lucide-react";
import logoImg from "../imports/IMG-20260611-WA0059.jpg";
import wuwaImg from "../imports/Rovers_in_Rinascita.jfif";
import hsrImg from "../imports/download__2_.jfif";
import zzzImg from "../imports/download__1_.jfif";
import giImg from "../imports/_aether__aethergenshinimpact__lumine__luminegenshinimpact__genshinimpact__genshin.jfif";

// ─── DESIGN TOKENS ────────────────────────────────────────────────────────────
const C = {
  bg:      "#04080f",
  card:    "#080f1e",
  card2:   "#0b1525",
  text:    "#e8f4ff",
  muted:   "#6b8aad",
  cyan:    "#00c9ff",
  purple:  "#7c3aed",
  violet:  "#a855f7",
  green:   "#10b981",
  amber:   "#f59e0b",
  indigo:  "#818cf8",
  border:  "rgba(0,201,255,0.12)",
  glass:   "rgba(8,15,30,0.7)",
};
const grad    = `linear-gradient(135deg, ${C.cyan}, ${C.purple})`;
const gradAlt = `linear-gradient(135deg, ${C.purple}, ${C.violet})`;

// ─── GLOBAL STYLES ─────────────────────────────────────────────────────────────
const GlobalStyle = () => (
  <style>{`
    * { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body { background: ${C.bg}; color: ${C.text}; font-family: 'Inter', sans-serif; overflow-x: hidden; }
    ::-webkit-scrollbar { width: 4px; }
    ::-webkit-scrollbar-track { background: ${C.bg}; }
    ::-webkit-scrollbar-thumb { background: ${C.cyan}66; border-radius: 2px; }

    /* Tech-grid background texture */
    .tech-grid-bg {
      position: relative;
    }
    .tech-grid-bg::before {
      content: '';
      position: absolute;
      inset: 0;
      background-image:
        linear-gradient(rgba(0,201,255,0.04) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0,201,255,0.04) 1px, transparent 1px);
      background-size: 48px 48px;
      pointer-events: none;
      z-index: 0;
    }

    /* Glassmorphism card */
    .glass-card {
      background: ${C.glass};
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid rgba(0,201,255,0.1);
    }

    /* Hover lift */
    .hover-lift { transition: transform 0.25s ease, box-shadow 0.25s ease; }
    .hover-lift:hover { transform: translateY(-5px); }

    /* Neon line divider */
    .neon-divider {
      height: 1px;
      background: linear-gradient(90deg, transparent, ${C.cyan}66, ${C.purple}66, transparent);
    }

    @keyframes float-y  { 0%,100%{transform:translateY(0)}   50%{transform:translateY(-14px)} }
    @keyframes float-y2 { 0%,100%{transform:translateY(-8px)} 50%{transform:translateY(6px)} }
    @keyframes spin-slow { to { transform: rotate(360deg); } }
    @keyframes pulse-ring { 0%,100%{opacity:.5;transform:scale(1)} 50%{opacity:1;transform:scale(1.08)} }
    @keyframes shimmer { 0%{background-position:-400px 0} 100%{background-position:400px 0} }
    @keyframes orbit-cw  { from{transform:rotate(0deg)}  to{transform:rotate(360deg)} }
    @keyframes orbit-ccw { from{transform:rotate(0deg)}  to{transform:rotate(-360deg)} }

    @media(min-width:768px){ .hdr-desktop{display:flex!important} .hdr-burger{display:none!important} }
    @media(max-width:767px){ .hdr-desktop{display:none!important} .hdr-burger{display:flex!important} }

    @media(min-width:900px){ .ftr-mobile{display:none!important} .ftr-desktop{display:flex!important} }
    @media(max-width:899px){ .ftr-mobile{display:block!important} .ftr-desktop{display:none!important} }
    @media(max-width:899px){ .ftr-copy{ flex-direction:column!important; align-items:center!important; text-align:center; gap:0.25rem!important; } }
    @media(min-width:900px){ .ftr-copy{ flex-direction:row!important; justify-content:space-between!important; } }

    @media(max-width:900px){ .hero-inner{flex-direction:column!important; text-align:center;} .hero-ctas{justify-content:center!important;} .hero-stats{justify-content:center!important;} }
    @media(max-width:767px){ .bento-grid{grid-template-columns:1fr!important;} .bento-hero-card{grid-column:1!important; grid-row:1!important;} }
    @media(max-width:640px){ .price-tabs{gap:0.4rem!important;} .testi-grid{grid-template-columns:1fr!important;} }
  `}</style>
);

// ─── NAV ──────────────────────────────────────────────────────────────────────
const navLinks = [
  { label: "Beranda", href: "#home" },
  { label: "Layanan", href: "#services" },
  { label: "Game", href: "#games" },
  { label: "Harga", href: "#pricing" },
  { label: "Testimoni", href: "#testimonials" },
  { label: "Kontak", href: "#contact" },
];

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <header className="hdr-wrap" style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
      background: scrolled ? "rgba(4,8,15,0.94)" : "transparent",
      borderBottom: scrolled ? `1px solid ${C.border}` : "none",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      transition: "all 0.35s",
    }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1.5rem" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
          {/* Brand */}
          <a href="#home" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", flexShrink: 0 }}>
            <div style={{ width: 38, height: 38, borderRadius: "50%", overflow: "hidden", border: `2px solid ${C.cyan}55`, boxShadow: `0 0 14px ${C.cyan}44`, flexShrink: 0 }}>
              <img src={logoImg} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: "clamp(1rem,2.5vw,1.18rem)", background: grad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", whiteSpace: "nowrap" }}>LaaVin Store</span>
          </a>

          {/* Desktop nav */}
          <nav className="hdr-desktop" style={{ display: "flex", alignItems: "center", gap: "1.6rem" }}>
            {navLinks.map(l => (
              <a key={l.href} href={l.href} style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "0.875rem", color: C.muted, textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = C.cyan)}
                onMouseLeave={e => (e.currentTarget.style.color = C.muted)}
              >{l.label}</a>
            ))}
            <a href="#contact" style={{ padding: "8px 22px", borderRadius: 8, textDecoration: "none", background: grad, color: "#04080f", fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "0.82rem", boxShadow: `0 0 18px ${C.cyan}44`, transition: "opacity 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
            >ORDER</a>
          </nav>

          {/* Burger */}
          <button className="hdr-burger" onClick={() => setOpen(o => !o)} style={{ background: "none", border: `1px solid ${C.cyan}44`, borderRadius: 8, color: C.cyan, cursor: "pointer", padding: "6px 8px", display: "none", alignItems: "center", justifyContent: "center" }}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
              style={{ overflow: "hidden", borderTop: `1px solid ${C.border}`, background: "rgba(4,8,15,0.98)" }}>
              <div style={{ padding: "0.5rem 0 0.75rem", display: "flex", flexDirection: "column" }}>
                {navLinks.map(l => (
                  <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                    style={{ padding: "11px 1.25rem", fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "0.95rem", color: C.text, textDecoration: "none", borderBottom: `1px solid rgba(0,201,255,0.05)`, transition: "color 0.2s, background 0.2s" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = C.cyan; (e.currentTarget as HTMLElement).style.background = "rgba(0,201,255,0.06)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = C.text; (e.currentTarget as HTMLElement).style.background = "transparent"; }}
                  >{l.label}</a>
                ))}
                <div style={{ padding: "0.75rem 1.25rem" }}>
                  <a href="#contact" onClick={() => setOpen(false)} style={{ display: "block", padding: "12px", borderRadius: 10, textAlign: "center", background: grad, color: "#04080f", fontFamily: "'Poppins', sans-serif", fontWeight: 700, textDecoration: "none" }}>ORDER SEKARANG</a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

// ─── HERO ─────────────────────────────────────────────────────────────────────
function HeroVisual() {
  // Floating game cards arranged around center logo
  const floaters = [
    { img: wuwaImg,  label: "WuWa",  color: C.cyan,   top: "8%",   left: "5%",  anim: "float-y",  delay: "0s",    size: 70 },
    { img: hsrImg,   label: "HSR",   color: C.indigo,  top: "5%",   right: "8%", anim: "float-y2", delay: "0.5s",  size: 65 },
    { img: zzzImg,   label: "ZZZ",   color: C.amber,   bottom: "12%",left: "2%", anim: "float-y2", delay: "1s",    size: 68 },
    { img: giImg,    label: "GI",    color: C.green,   bottom: "8%", right: "5%",anim: "float-y",  delay: "1.5s",  size: 66 },
  ];

  return (
    <div style={{ position: "relative", width: "min(480px, 100%)", height: 480, flexShrink: 0 }}>
      {/* Neon glow backing */}
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 320, height: 320, borderRadius: "50%", background: `radial-gradient(circle, rgba(0,201,255,0.14) 0%, rgba(124,58,237,0.1) 50%, transparent 70%)`, animation: "pulse-ring 4s ease-in-out infinite", pointerEvents: "none" }} />

      {/* Orbit ring */}
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 380, height: 380, borderRadius: "50%", border: "1px dashed rgba(0,201,255,0.18)", animation: "orbit-cw 30s linear infinite" }} />
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 280, height: 280, borderRadius: "50%", border: "1px dashed rgba(124,58,237,0.2)", animation: "orbit-ccw 20s linear infinite" }} />

      {/* Center logo */}
      <div style={{
        position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
        width: 180, height: 180, borderRadius: 28, overflow: "hidden", zIndex: 3,
        border: `2px solid rgba(0,201,255,0.4)`,
        boxShadow: `0 0 40px rgba(0,201,255,0.3), 0 0 80px rgba(124,58,237,0.2), 0 25px 60px rgba(0,0,0,0.5)`,
      }}>
        <img src={logoImg} alt="LaaVin Store" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>

      {/* Floating game cards */}
      {floaters.map(f => (
        <div key={f.label} style={{
          position: "absolute",
          top: f.top, left: f.left, right: f.right, bottom: f.bottom,
          animation: `${f.anim} 3.5s ease-in-out ${f.delay} infinite`,
          zIndex: 4,
        }}>
          <div style={{
            width: f.size, height: f.size, borderRadius: 16, overflow: "hidden",
            border: `2px solid ${f.color}55`,
            boxShadow: `0 8px 32px rgba(0,0,0,0.4), 0 0 20px ${f.color}33`,
            background: C.card,
          }}>
            <img src={f.img} alt={f.label} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
          </div>
          <div style={{ marginTop: 5, textAlign: "center", fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "0.62rem", color: f.color, letterSpacing: "0.08em" }}>{f.label}</div>
        </div>
      ))}
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="tech-grid-bg" style={{ minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: 68, position: "relative", overflow: "hidden" }}>
      {/* Ambient gradients */}
      <div style={{ position: "absolute", top: "-10%", right: "-5%", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 65%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "0%", left: "-8%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,201,255,0.08) 0%, transparent 65%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "3rem 1.5rem", width: "100%", position: "relative", zIndex: 1 }}>
        <div className="hero-inner" style={{ display: "flex", alignItems: "center", gap: "4rem", justifyContent: "space-between" }}>

          {/* LEFT — Text */}
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}
            style={{ flex: "0 0 auto", maxWidth: 560 }}>
            {/* Eyebrow */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: 7, padding: "5px 14px", borderRadius: 100, border: `1px solid ${C.cyan}33`, background: "rgba(0,201,255,0.07)", marginBottom: "1.5rem" }}>
              <Zap size={11} color={C.cyan} fill={C.cyan} />
              <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: "0.72rem", color: C.cyan, letterSpacing: "0.12em" }}>JOKI GAME TERPERCAYA #1</span>
            </div>

            <h1 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 900, fontSize: "clamp(2.6rem,5.5vw,4.4rem)", lineHeight: 1.08, marginBottom: "1.5rem", color: C.text }}>
              Naikkan Level<br />
              <span style={{ background: grad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "inline-block" }}>Game-mu</span>
              <br />
              <span style={{ fontWeight: 400, fontSize: "0.65em", color: C.muted }}>Bersama Kami</span>
            </h1>

            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.05rem", lineHeight: 1.8, color: C.muted, marginBottom: "2.4rem", maxWidth: 480 }}>
              Layanan joki profesional untuk{" "}
              <span style={{ color: C.cyan, fontWeight: 600 }}>Wuthering Waves</span>,{" "}
              <span style={{ color: C.amber, fontWeight: 600 }}>ZZZ</span>,{" "}
              <span style={{ color: C.indigo, fontWeight: 600 }}>Honkai Star Rail</span>, dan{" "}
              <span style={{ color: C.green, fontWeight: 600 }}>Genshin Impact</span>.
            </p>

            <div className="hero-ctas" style={{ display: "flex", gap: "0.85rem", flexWrap: "wrap", marginBottom: "3rem" }}>
              <a href="#contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 30px", borderRadius: 10, background: grad, color: "#04080f", fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "0.9rem", textDecoration: "none", boxShadow: `0 0 24px ${C.cyan}44`, transition: "all 0.2s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = `0 0 40px ${C.cyan}66`; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = `0 0 24px ${C.cyan}44`; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
              ><Zap size={15} /> ORDER SEKARANG</a>
              <a href="#pricing" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 26px", borderRadius: 10, border: `1px solid ${C.cyan}33`, color: C.cyan, fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: "0.9rem", textDecoration: "none", background: "rgba(0,201,255,0.07)", transition: "all 0.2s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(0,201,255,0.14)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(0,201,255,0.07)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
              >Lihat Harga <ArrowRight size={14} /></a>
            </div>

            <div className="hero-stats" style={{ display: "flex", gap: "2.5rem", flexWrap: "wrap" }}>
              {[["20+","Order Selesai"],["4.9★","Rating"],["24/7","Support"],["100%","Aman"]].map(([v,l]) => (
                <div key={l}>
                  <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 900, fontSize: "1.5rem", background: grad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{v}</div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.72rem", color: C.muted, marginTop: 2 }}>{l}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — Visual */}
          <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.2 }} style={{ flex: "0 0 auto" }} className="hero-visual">
            <HeroVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── SERVICES — BENTO GRID ───────────────────────────────────────────────────
function Services() {
  const cards = [
    {
      icon: <Shield size={32} color={C.green} />,
      title: "Keamanan Akun 100%",
      desc: "Akun dijaga ketat dengan metode yang telah terbukti aman sejak 2022. Data kamu tidak akan pernah bocor. Zero-ban track record.",
      color: C.green,
      glow: "rgba(16,185,129,0.15)",
      hero: true,
    },
    {
      icon: <Users size={22} color={C.indigo} />,
      title: "Account Progress",
      desc: "Leveling, farming, unlock karakter dan quest semua game.",
      color: C.indigo,
      glow: "rgba(129,140,248,0.12)",
    },
    {
      icon: <Trophy size={22} color={C.amber} />,
      title: "Endgame Content",
      desc: "MoC, Spiral Abyss 36★, Holograms, Shiyu Defense dan lainnya.",
      color: C.amber,
      glow: "rgba(245,158,11,0.12)",
    },
    {
      icon: <Clock size={22} color={C.cyan} />,
      title: "Fast Response",
      desc: "CS aktif 08.00–24.00 WIB. Progress update real-time via WhatsApp.",
      color: C.cyan,
      glow: "rgba(0,201,255,0.12)",
    },
  ];

  return (
    <section id="services" className="tech-grid-bg" style={{ padding: "7rem 1.5rem", position: "relative" }}>
      <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at 30% 50%, rgba(124,58,237,0.07) 0%, transparent 55%)`, pointerEvents: "none", zIndex: 0 }} />
      <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} style={{ marginBottom: "3.5rem" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 7, padding: "5px 14px", borderRadius: 100, border: `1px solid ${C.cyan}33`, background: "rgba(0,201,255,0.07)", marginBottom: "1rem" }}>
            <Sparkles size={11} color={C.cyan} />
            <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: "0.72rem", color: C.cyan, letterSpacing: "0.12em" }}>LAYANAN KAMI</span>
          </div>
          <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: "clamp(1.8rem,3.5vw,2.9rem)", color: C.text, maxWidth: 520 }}>
            Layanan Terbaik dari{" "}
            <span style={{ background: grad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>LaaVin Store</span>
          </h2>
        </motion.div>

        {/* BENTO GRID */}
        <div className="bento-grid" style={{ display: "grid", gridTemplateColumns: "1.7fr 1fr 1fr", gridTemplateRows: "auto auto", gap: "1rem" }}>
          {/* HERO CARD — spans 2 rows */}
          <motion.div className="glass-card hover-lift bento-hero-card"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }} viewport={{ once: true }}
            style={{
              gridColumn: "1", gridRow: "1 / 3",
              padding: "2.5rem", borderRadius: 24,
              background: `linear-gradient(145deg, rgba(16,185,129,0.08), ${C.glass})`,
              border: `1px solid rgba(16,185,129,0.2)`,
              boxShadow: `0 0 60px rgba(16,185,129,0.08)`,
              position: "relative", overflow: "hidden",
            }}
          >
            {/* BG accent */}
            <div style={{ position: "absolute", bottom: -40, right: -40, width: 200, height: 200, borderRadius: "50%", background: "radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
            <div style={{ width: 60, height: 60, borderRadius: 18, background: "rgba(16,185,129,0.12)", border: "1px solid rgba(16,185,129,0.25)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
              <Shield size={30} color={C.green} />
            </div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "3px 10px", borderRadius: 20, background: "rgba(16,185,129,0.12)", border: "1px solid rgba(16,185,129,0.25)", marginBottom: "1rem" }}>
              <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "0.65rem", color: C.green, letterSpacing: "0.1em" }}>UNGGULAN</span>
            </div>
            <h3 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "1.45rem", color: C.text, marginBottom: "1rem", lineHeight: 1.25 }}>Keamanan Akun <span style={{ color: C.green }}>100%</span> Terjamin</h3>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.95rem", color: C.muted, lineHeight: 1.75, marginBottom: "2rem" }}>
              Akun dijaga ketat dengan metode yang telah terbukti aman sejak 2022. Data kamu tidak akan pernah bocor ke pihak manapun. Track record zero-ban selama bertahun-tahun.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {["Zero-ban track record", "Data akun aman & privat", "Proses profesional & terukur"].map(t => (
                <div key={t} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 20, height: 20, borderRadius: "50%", background: "rgba(16,185,129,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <div style={{ width: 7, height: 7, borderRadius: "50%", background: C.green }} />
                  </div>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.88rem", color: "#94c5a9" }}>{t}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Small cards */}
          {[cards[1], cards[2], cards[3]].map((card, i) => (
            <motion.div key={card.title} className="glass-card hover-lift"
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (i + 1) * 0.1 }} viewport={{ once: true }}
              style={{
                padding: "1.75rem", borderRadius: 20,
                background: `linear-gradient(145deg, ${card.glow}, ${C.glass})`,
                border: `1px solid ${card.color}22`,
                position: "relative", overflow: "hidden",
              }}
            >
              <div style={{ position: "absolute", top: -20, right: -20, width: 80, height: 80, borderRadius: "50%", background: `radial-gradient(circle, ${card.glow} 0%, transparent 70%)`, pointerEvents: "none" }} />
              <div style={{ width: 46, height: 46, borderRadius: 14, background: `${card.color}18`, border: `1px solid ${card.color}30`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem" }}>
                {card.icon}
              </div>
              <h3 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "0.97rem", color: C.text, marginBottom: "0.6rem" }}>{card.title}</h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.84rem", color: C.muted, lineHeight: 1.6 }}>{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── GAMES ────────────────────────────────────────────────────────────────────
const gameList = [
  { name: "Wuthering Waves", tag: "WUWA", color: C.cyan,  img: wuwaImg, icon: <Wind size={18} />,    services: ["Astrite / Rawat akun","Explore map / Quest","Endgame content","Event / permanen event","Farming resources / Build Character"] },
  { name: "Zenless Zone Zero", tag: "ZZZ", color: C.amber, img: zzzImg,  icon: <Zap size={18} />,     services: ["PolyChromes / Rawat akun","Endgame content","Build Character","Quest / Rawat Akun","Event"] },
  { name: "Honkai Star Rail",  tag: "HSR", color: C.indigo,img: hsrImg,  icon: <Star size={18} />,    services: ["Stellar Jade / Rawat akun","Explore map / Quest","Endgame Content","Event / Nostalgia Event","Farming Resources / Build Character"] },
  { name: "Genshin Impact",    tag: "GI",  color: C.green, img: giImg,   icon: <Globe size={18} />,   services: ["Primogems / Rawat Akun","Explore map / Quest","Events / Endgame Content","Build Character / Rawat akun"] },
];

function Games() {
  return (
    <section id="games" style={{ padding: "7rem 1.5rem", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at 70% 30%, rgba(0,201,255,0.05) 0%, transparent 55%)`, pointerEvents: "none" }} />
      <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 7, padding: "5px 14px", borderRadius: 100, border: `1px solid ${C.cyan}33`, background: "rgba(0,201,255,0.07)", marginBottom: "1rem" }}>
            <Gamepad2 size={11} color={C.cyan} />
            <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: "0.72rem", color: C.cyan, letterSpacing: "0.12em" }}>4 GAME TERSEDIA</span>
          </div>
          <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: "clamp(1.8rem,3.5vw,2.8rem)", color: C.text }}>
            Pilih <span style={{ background: grad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Game Favoritmu</span>
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px,1fr))", gap: "1.25rem" }}>
          {gameList.map((g, i) => (
            <motion.div key={g.tag}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }}
              style={{ borderRadius: 20, overflow: "hidden", background: C.card, border: `1px solid rgba(255,255,255,0.05)`, cursor: "default", transition: "all 0.3s" }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.border = `1px solid ${g.color}44`;
                el.style.transform = "translateY(-6px) scale(1.01)";
                el.style.boxShadow = `0 20px 50px ${g.color}22, 0 0 30px ${g.color}11`;
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.border = `1px solid rgba(255,255,255,0.05)`;
                el.style.transform = "translateY(0) scale(1)";
                el.style.boxShadow = "none";
              }}
            >
              {/* Banner */}
              <div style={{ height: 175, position: "relative", overflow: "hidden", background: "#04080f" }}>
                <img src={g.img} alt={g.name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", transition: "transform 0.4s" }}
                  onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.06)")}
                  onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 25%, rgba(8,15,30,0.96) 100%)" }} />
                <div style={{ position: "absolute", top: 12, left: 12, display: "flex", alignItems: "center", gap: 6, padding: "4px 10px", borderRadius: 7, background: g.color, color: "#04080f" }}>
                  {g.icon}
                  <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: "0.65rem", letterSpacing: "0.1em" }}>{g.tag}</span>
                </div>
              </div>
              {/* Content */}
              <div style={{ padding: "1.25rem 1.35rem 1.35rem" }}>
                <h3 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "0.97rem", color: C.text, marginBottom: "0.8rem" }}>{g.name}</h3>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.2rem", display: "flex", flexDirection: "column", gap: 6 }}>
                  {g.services.map(s => (
                    <li key={s} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <div style={{ width: 5, height: 5, borderRadius: "50%", background: g.color, flexShrink: 0 }} />
                      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.82rem", color: C.muted }}>{s}</span>
                    </li>
                  ))}
                </ul>
                <a href="#contact" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, padding: "9px", borderRadius: 10, border: `1px solid ${g.color}44`, background: `${g.color}10`, color: g.color, fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "0.78rem", textDecoration: "none", letterSpacing: "0.05em", transition: "background 0.2s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = `${g.color}22`; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = `${g.color}10`; }}
                >ORDER {g.tag} <ArrowRight size={13} /></a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── PRICING ──────────────────────────────────────────────────────────────────
type PriceItem = { name: string; price: string };
type PriceCat  = { title: string; emoji: string; color: string; items: PriceItem[]; note?: string };

const priceData: Record<string, { color: string; cats: PriceCat[] }> = {
  "Wuthering Waves": { color: C.cyan, cats: [
    { title: "Astrite", emoji: "🔮", color: C.cyan, items: [{name:"1.600",price:"Rp 30K"},{name:"3.200",price:"Rp 60K"},{name:"4.800",price:"Rp 100K"},{name:"6.400",price:"Rp 140K"},{name:"8.000",price:"Rp 180K"},{name:"9.600",price:"Rp 220K"}] },
    { title: "Endgame", emoji: "⚔️", color: "#e879f9", items: [{name:"Holograms 1–4",price:"Rp 1K"},{name:"Holograms 5",price:"Rp 5K"},{name:"Holograms 6",price:"Rp 10K"},{name:"ToA 2 Floors",price:"Rp 6K"},{name:"ToA All",price:"Rp 25K"},{name:"Whiwa 1–5",price:"Rp 3K"},{name:"Whiwa 9–11",price:"Rp 15K"}] },
    { title: "Rinascita", emoji: "🗺️", color: C.amber, items: [{name:"Ragunna",price:"Rp 5K"},{name:"Septimont",price:"Rp 80K"},{name:"Sanguis Palateus",price:"Rp 55K"},{name:"Fagacae Peninsula",price:"Rp 45K"},{name:"All Rinascita",price:"Rp 250K"}] },
    { title: "Quest & Rawat", emoji: "📜", color: C.green, items: [{name:"Main Quest",price:"Rp 15–20K"},{name:"Companion",price:"Rp 10K"},{name:"1 Hari",price:"Rp 3K"},{name:"1 Minggu",price:"Rp 27K"},{name:"1 Patch",price:"Rp 100K"}], note:"Events & material? Chat admin." },
  ]},
  "Honkai Star Rail": { color: C.indigo, cats: [
    { title: "Stellar Jade", emoji: "💎", color: C.indigo, items: [{name:"1.600 SJ",price:"Rp 20K"},{name:"3.200 SJ",price:"Rp 50K"},{name:"4.800 SJ",price:"Rp 70K"},{name:"6.400 SJ",price:"Rp 90K"},{name:"8.000 SJ",price:"Rp 110K"}] },
    { title: "Explore", emoji: "🗺️", color: C.purple, items: [{name:"Space Station",price:"Rp 20K"},{name:"Jarilo-VI",price:"Rp 35K"},{name:"Xianzhou",price:"Rp 50K"},{name:"Penacony",price:"Rp 60K"},{name:"Amphoreus",price:"Rp 90K"}] },
    { title: "Endgame", emoji: "⚔️", color: "#f472b6", items: [{name:"Pure Fiction",price:"Rp 20K"},{name:"Apocalyptic Shadow",price:"Rp 20K"},{name:"Memory of Chaos",price:"Rp 25K"}] },
    { title: "Rawat & Build", emoji: "🛡️", color: C.green, items: [{name:"Daily",price:"Rp 5K"},{name:"Weekly",price:"Rp 20K"},{name:"Monthly",price:"Rp 40K"},{name:"Build Char",price:"Rp 70K"}], note:"Build include up level max, light cone & trace." },
  ]},
  "Genshin Impact": { color: C.green, cats: [
    { title: "Primogems", emoji: "💠", color: C.green, items: [{name:"1.600",price:"Rp 30K"},{name:"3.200",price:"Rp 60K"},{name:"4.800",price:"Rp 100K"},{name:"6.400",price:"Rp 140K"},{name:"8.000",price:"Rp 180K"}] },
    { title: "Explore", emoji: "🗺️", color: C.amber, items: [{name:"Mondstadt",price:"Rp 30K"},{name:"Liyue",price:"Rp 35K"},{name:"Inazuma",price:"Rp 40K"},{name:"Fontaine",price:"Rp 40K"},{name:"Natlan",price:"Rp 40K"},{name:"Dragonspine",price:"Rp 60K"},{name:"Enkanomiya",price:"Rp 65K"}], note:"Harga per region." },
    { title: "Fate / IF", emoji: "🎴", color: "#a78bfa", items: [{name:"10 Fate",price:"Rp 30K"},{name:"20 Fate",price:"Rp 60K"},{name:"30 Fate",price:"Rp 80K"},{name:"40 Fate",price:"Rp 120K"},{name:"50 Fate",price:"Rp 150K"}] },
    { title: "Rawat & Bonus", emoji: "🛡️", color: C.green, items: [{name:"3 Hari",price:"Rp 35K"},{name:"1 Minggu",price:"Rp 65K"},{name:"1 Bulan",price:"Rp 77K"},{name:"Hangout Quest",price:"Rp 5K/char"},{name:"World Quest",price:"Rp 45K"}] },
  ]},
  "Zenless Zone Zero": { color: C.amber, cats: [
    { title: "PolyChromes", emoji: "💎", color: C.amber, items: [{name:"1.600 Poly",price:"Rp 25K"}], note:"Rp 30K untuk late game account." },
    { title: "Endgame", emoji: "⚔️", color: "#f97316", items: [{name:"Deadly Assault",price:"Rp 25K"},{name:"Shiyu Defend",price:"Rp 25K"},{name:"Threshold Easy",price:"Rp 20K"},{name:"Threshold Hard",price:"Rp 40K"}] },
    { title: "Quest & Agent", emoji: "📜", color: C.indigo, items: [{name:"Agent Quest",price:"Rp 20K"},{name:"Main Quest",price:"Rp 25K"},{name:"Event Kecil",price:"Rp 30K"},{name:"Event Besar",price:"Rp 50K"},{name:"Build Agent",price:"Rp 75K"}] },
  ]},
};
const priceGames = ["Wuthering Waves","Honkai Star Rail","Genshin Impact","Zenless Zone Zero"];

function Pricing() {
  const [active, setActive] = useState(priceGames[0]);
  const [openCat, setOpenCat] = useState<string | null>(null);
  const pkg = priceData[active];

  return (
    <section id="pricing" className="tech-grid-bg" style={{ padding: "7rem 1.5rem", position: "relative" }}>
      <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at 20% 60%, rgba(124,58,237,0.07) 0%, transparent 55%)`, pointerEvents: "none", zIndex: 0 }} />
      <div style={{ maxWidth: 1000, margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} style={{ textAlign: "center", marginBottom: "3rem" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 7, padding: "5px 14px", borderRadius: 100, border: `1px solid ${C.cyan}33`, background: "rgba(0,201,255,0.07)", marginBottom: "1rem" }}>
            <Rocket size={11} color={C.cyan} />
            <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: "0.72rem", color: C.cyan, letterSpacing: "0.12em" }}>PAKET HARGA</span>
          </div>
          <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: "clamp(1.8rem,3.5vw,2.8rem)", color: C.text }}>
            Harga <span style={{ background: grad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Santai</span> Proses Cepat Selesai
          </h2>
        </motion.div>

        {/* Game tabs */}
        <div className="price-tabs" style={{ display: "flex", gap: "0.6rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "2.5rem" }}>
          {priceGames.map(g => {
            const col = priceData[g].color;
            const isActive = active === g;
            const short = g === "Honkai Star Rail" ? "HSR" : g === "Zenless Zone Zero" ? "ZZZ" : g === "Wuthering Waves" ? "WuWa" : "GI";
            return (
              <button key={g} onClick={() => { setActive(g); setOpenCat(null); }} style={{
                padding: "9px 20px", borderRadius: 10, cursor: "pointer",
                fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "0.85rem",
                border: `1px solid ${isActive ? col : "rgba(255,255,255,0.08)"}`,
                background: isActive ? `${col}20` : "transparent",
                color: isActive ? col : C.muted, transition: "all 0.2s",
              }}>{short}</button>
            );
          })}
        </div>

        {/* Active game label */}
        <motion.div key={active} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}>
          <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
            <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: "1rem", color: pkg.color }}>{active}</span>
          </div>

          {/* Category GRID cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "1rem", marginBottom: "2rem" }}>
            {pkg.cats.map(cat => {
              const isOpen = openCat === cat.title;
              return (
                <div key={cat.title}
                  style={{ borderRadius: 16, border: `1px solid ${isOpen ? cat.color + "55" : "rgba(255,255,255,0.07)"}`, background: isOpen ? `${cat.color}0a` : C.card, overflow: "hidden", transition: "border-color 0.2s, background 0.2s" }}
                >
                  <button onClick={() => setOpenCat(isOpen ? null : cat.title)} style={{
                    width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
                    padding: "14px 16px", background: "none", border: "none", cursor: "pointer",
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <span style={{ fontSize: "1.1rem" }}>{cat.emoji}</span>
                      <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "0.88rem", color: isOpen ? cat.color : C.text }}>{cat.title}</span>
                    </div>
                    <ChevronDown size={15} color={isOpen ? cat.color : C.muted} style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.22s" }} />
                  </button>

                  {isOpen && (
                    <div style={{ padding: "4px 16px 14px", borderTop: `1px solid ${cat.color}22` }}>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px 8px", marginBottom: cat.note ? 8 : 0 }}>
                        {cat.items.map(item => (
                          <div key={item.name} style={{ display: "flex", flexDirection: "column", padding: "8px 10px", borderRadius: 9, background: `${cat.color}0c`, border: `1px solid ${cat.color}22` }}>
                            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", color: C.muted, marginBottom: 3 }}>{item.name}</span>
                            <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: "0.85rem", color: cat.color }}>{item.price}</span>
                          </div>
                        ))}
                      </div>
                      {cat.note && <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.74rem", color: C.muted, fontStyle: "italic", borderTop: `1px solid rgba(255,255,255,0.05)`, paddingTop: 7, marginTop: 4 }}>⚠️ {cat.note}</p>}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA */}
        <div style={{ textAlign: "center", padding: "1.5rem", borderRadius: 16, border: `1px solid ${C.border}`, background: C.glass, backdropFilter: "blur(12px)" }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", color: C.muted, marginBottom: "1rem" }}>Ada pertanyaan tentang harga atau request custom?</p>
          <a href="#contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "11px 28px", borderRadius: 10, background: grad, color: "#04080f", fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "0.88rem", textDecoration: "none", boxShadow: `0 0 18px ${C.cyan}33`, transition: "opacity 0.2s" }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
          ><MessageCircle size={15} /> Hubungi CS Kami</a>
        </div>
      </div>
    </section>
  );
}

// ─── TESTIMONIALS ─────────────────────────────────────────────────────────────
const testimonials = [
  { name: "Customer 1", color: C.cyan,   avatar: "C", text: "Sangat responsif, cepet banget...td baru minta joki pagi2 trs udah selesai malamnya...the best pokoknya." },
  { name: "Customer 2", color: C.indigo, avatar: "D", text: "Admin ramah as always, benefit dapat bonus banyak banget, worker admin juga baik banget jirlah. next time joki bakal lebih banyak lagi." },
  { name: "Customer 3", color: C.green,  avatar: "M", text: "Makasih banyak untuk admin... adminya responsif, humble udah ketiga kalinya aku joki di Laavin Store... the best pokonya 😋" },
  { name: "Customer 4", color: "#f472b6",avatar: "A", text: "admin fast respon, ramah, mantap sih dan cepet juga. overall 10/10 jadi ingin langganan tiap ada mommy" },
  { name: "Customer 5", color: C.amber,  avatar: "U", text: "CEPET BANGET ternyata Cuma 48 menit dari pertama kali aku minta joki udh dikerjain juga. Lain kali wajib joki lagi disini! 🤗🤗 Smoga rame terus wgwgwg 😻" },
  { name: "Customer 6", color: C.violet, avatar: "R", text: "Mimin nya ramah banget, kalo telat bakalan di kasi extra reward sama mimin nya, pokoknya worth it banget sih. Semoga makin improve yaa" },
];

function Testimonials() {
  return (
    <section id="testimonials" style={{ padding: "7rem 1.5rem", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at 60% 50%, rgba(0,201,255,0.05) 0%, transparent 55%)`, pointerEvents: "none" }} />
      <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 7, padding: "5px 14px", borderRadius: 100, border: `1px solid ${C.cyan}33`, background: "rgba(0,201,255,0.07)", marginBottom: "1rem" }}>
            <Star size={11} color={C.cyan} fill={C.cyan} />
            <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: "0.72rem", color: C.cyan, letterSpacing: "0.12em" }}>TESTIMONI</span>
          </div>
          <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: "clamp(1.8rem,3.5vw,2.8rem)", color: C.text }}>
            Gamer <span style={{ background: grad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Sudah Puas</span>
          </h2>
        </motion.div>

        <div className="testi-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.25rem" }}>
          {testimonials.map((t, i) => (
            <motion.div key={t.name} className="glass-card hover-lift"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }} viewport={{ once: true }}
              style={{ padding: "1.6rem", borderRadius: 18, position: "relative", overflow: "hidden" }}
            >
              <div style={{ position: "absolute", top: -20, right: -20, width: 80, height: 80, borderRadius: "50%", background: `radial-gradient(circle, ${t.color}18, transparent 70%)`, pointerEvents: "none" }} />
              {/* Stars */}
              <div style={{ display: "flex", gap: 3, marginBottom: "1rem" }}>
                {[1,2,3,4,5].map(s => <Star key={s} size={13} color="#f59e0b" fill="#f59e0b" />)}
              </div>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", color: "#b0c8e0", lineHeight: 1.7, marginBottom: "1.2rem" }}>"{t.text}"</p>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: `linear-gradient(135deg, ${t.color}44, ${t.color}22)`, border: `1.5px solid ${t.color}66`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: "0.9rem", color: t.color, flexShrink: 0 }}>{t.avatar}</div>
                <div>
                  <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "0.85rem", color: C.text }}>{t.name}</div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.72rem", color: t.color }}>LaaVin Store</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CONTACT ──────────────────────────────────────────────────────────────────
const csData = [
  { name: "Tylaa", number: "6281260725938", display: "+62 812-6072-5938", color: C.cyan,   glow: `rgba(0,201,255,0.3)` },
  { name: "Repin", number: "6287767654980", display: "+62 877-6765-4980", color: C.violet, glow: `rgba(168,85,247,0.3)` },
];
const socialLinks = [
  { label: "💬", href: "https://wa.me/6281260725938",                              title: "CS WhatsApp" },
  { label: "👥", href: "https://chat.whatsapp.com/FqiW9K2NSXL2nsvUdEDC3M",        title: "WA Group" },
  { label: "📢", href: "https://whatsapp.com/channel/0029Vb8pYXKJf05ijoxN2Q43",   title: "WA Channel" },
];

function Contact() {
  return (
    <section id="contact" className="tech-grid-bg" style={{ padding: "7rem 1.5rem", position: "relative" }}>
      <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at 50% 100%, rgba(124,58,237,0.09) 0%, transparent 55%)`, pointerEvents: "none", zIndex: 0 }} />
      <div style={{ maxWidth: 900, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 7, padding: "5px 14px", borderRadius: 100, border: `1px solid ${C.cyan}33`, background: "rgba(0,201,255,0.07)", marginBottom: "1rem" }}>
            <MessageCircle size={11} color={C.cyan} />
            <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: "0.72rem", color: C.cyan, letterSpacing: "0.12em" }}>HUBUNGI KAMI</span>
          </div>
          <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: "clamp(1.8rem,3.5vw,2.8rem)", color: C.text }}>
            Order via <span style={{ background: grad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>WhatsApp</span>
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem", color: C.muted, maxWidth: 440, margin: "0.75rem auto 0" }}>
            CS siap melayani 08.00–24.00 WIB. Proses cepat, pembayaran fleksibel.
          </p>
        </motion.div>

        {/* CS Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "1.25rem", marginBottom: "2.5rem" }}>
          {csData.map((c, i) => (
            <motion.div key={c.name} className="glass-card"
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.12 }} viewport={{ once: true }}
              style={{ padding: "2rem", borderRadius: 20, textAlign: "center", border: `1px solid ${c.color}33`, background: `linear-gradient(145deg, ${c.color}0c, ${C.glass})`, boxShadow: `0 0 40px ${c.color}0f` }}
            >
              <div style={{ width: 68, height: 68, borderRadius: "50%", margin: "0 auto 1rem", background: `linear-gradient(135deg, ${c.color}, ${c.color}99)`, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: `0 0 22px ${c.glow}` }}>
                <MessageCircle size={28} color="#fff" fill="#fff" />
              </div>
              <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: "1.05rem", color: C.text, marginBottom: 6 }}>{c.name}</div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "3px 12px", borderRadius: 20, background: `rgba(0,201,255,0.08)`, border: `1px solid ${C.cyan}25`, marginBottom: "0.8rem" }}>
                <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: "0.68rem", color: C.cyan, letterSpacing: "0.08em" }}>Menerima Semua Game</span>
              </div>
              <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: "0.95rem", color: "#9dc6d8", marginBottom: "0.6rem" }}>{c.display}</div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, marginBottom: "1.4rem", fontFamily: "'Inter', sans-serif", fontSize: "0.76rem", color: C.muted }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: C.green, display: "inline-block" }} /> Online 08.00–24.00 WIB
              </div>
              <a href={`https://wa.me/${c.number}?text=Halo%20LaaVin%20Store!%20Saya%20mau%20order%20joki%20game.`} target="_blank" rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "12px", borderRadius: 12, background: `linear-gradient(135deg, ${c.color}, ${c.color}99)`, color: "#fff", textDecoration: "none", fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "0.88rem", boxShadow: `0 0 18px ${c.glow}`, transition: "all 0.2s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = "0.85"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = "1"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
              ><MessageCircle size={16} /> CHAT {c.name.toUpperCase()}</a>
            </motion.div>
          ))}
        </div>

        {/* Community */}
        <div className="glass-card" style={{ padding: "1.5rem", borderRadius: 16, textAlign: "center" }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.87rem", color: C.muted, marginBottom: "1rem" }}>Bergabung ke komunitas LaaVin Store</p>
          <div style={{ display: "flex", justifyContent: "center", gap: "0.75rem", flexWrap: "wrap" }}>
            {[{ label: "👥 WA Group", href: "https://chat.whatsapp.com/FqiW9K2NSXL2nsvUdEDC3M" }, { label: "📢 WA Channel", href: "https://whatsapp.com/channel/0029Vb8pYXKJf05ijoxN2Q43" }].map(l => (
              <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
                style={{ padding: "9px 20px", borderRadius: 9, textDecoration: "none", border: `1px solid ${C.border}`, background: `rgba(0,201,255,0.08)`, color: C.cyan, fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: "0.84rem", transition: "background 0.2s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(0,201,255,0.15)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(0,201,255,0.08)"; }}
              >{l.label}</a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────
function Footer() {
  const footerLinks = [["Beranda","#home"],["Layanan","#services"],["Game","#games"],["Harga","#pricing"],["Testimoni","#testimonials"],["Kontak","#contact"]];
  const games = [["Wuthering Waves",C.cyan],["Zenless Zone Zero",C.amber],["Honkai Star Rail",C.indigo],["Genshin Impact",C.green]];
  const csLinks = [["Tylaa","+62 812-6072-5938","https://wa.me/6281260725938"],["Repin","+62 877-6765-4980","https://wa.me/6287767654980"]];

  const ColHead = ({ text }: { text: string }) => (
    <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "0.7rem", color: C.cyan, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1rem" }}>{text}</div>
  );

  const BrandBlock = ({ centered }: { centered?: boolean }) => (
    <div style={{ display: "flex", flexDirection: "column", alignItems: centered ? "center" : "flex-start" }}>
      <div style={{ width: centered ? 70 : 60, height: centered ? 70 : 60, borderRadius: "50%", overflow: "hidden", border: `2px solid ${C.cyan}55`, boxShadow: `0 0 20px ${C.cyan}33`, marginBottom: "0.7rem" }}>
        <img src={logoImg} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
      <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: centered ? "1.1rem" : "1.02rem", background: grad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", marginBottom: "0.55rem" }}>LaaVin Store</span>
      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.82rem", color: C.muted, lineHeight: 1.7, maxWidth: centered ? 270 : 250, textAlign: centered ? "center" : "left", marginBottom: "1rem" }}>
        Joki game terpercaya sejak 2022. Melayani WuWa, ZZZ, HSR, dan Genshin Impact dengan profesional.
      </p>
      <div style={{ display: "flex", gap: 8, justifyContent: centered ? "center" : "flex-start" }}>
        {socialLinks.map(s => (
          <a key={s.title} href={s.href} target="_blank" rel="noopener noreferrer" title={s.title}
            style={{ width: 34, height: 34, borderRadius: 9, display: "flex", alignItems: "center", justifyContent: "center", border: `1px solid ${C.border}`, background: "rgba(0,201,255,0.08)", fontSize: "0.95rem", textDecoration: "none", transition: "background 0.2s" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(0,201,255,0.18)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(0,201,255,0.08)"; }}
          >{s.label}</a>
        ))}
      </div>
    </div>
  );

  return (
    <footer style={{ borderTop: "none", background: C.card, position: "relative", overflow: "hidden" }}>
      {/* Neon top divider */}
      <div className="neon-divider" />
      {/* Subtle grid texture */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: `linear-gradient(rgba(0,201,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,201,255,0.03) 1px, transparent 1px)`, backgroundSize: "48px 48px", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "3.5rem 1.5rem 0", position: "relative", zIndex: 1 }}>

        {/* MOBILE layout */}
        <div className="ftr-mobile">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem 1.25rem", marginBottom: "1.75rem" }}>
            <div>
              <ColHead text="Navigasi" />
              {footerLinks.map(([l,h]) => (
                <a key={l} href={h} style={{ display: "block", fontFamily: "'Inter', sans-serif", fontSize: "0.87rem", color: C.muted, textDecoration: "none", marginBottom: "0.45rem", transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = C.cyan)}
                  onMouseLeave={e => (e.currentTarget.style.color = C.muted)}
                >{l}</a>
              ))}
            </div>
            <div>
              <ColHead text="Game" />
              {games.map(([n,c]) => (
                <div key={n as string} style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: "0.48rem" }}>
                  <div style={{ width: 5, height: 5, borderRadius: "50%", background: c as string, flexShrink: 0 }} />
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.83rem", color: C.muted }}>{n}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ paddingBottom: "1.75rem", borderBottom: `1px solid rgba(0,201,255,0.07)`, marginBottom: "2rem" }}>
            <ColHead text="Kontak CS" />
            {csLinks.map(([l,n,h]) => (
              <a key={l as string} href={h as string} target="_blank" rel="noopener noreferrer" style={{ display: "block", textDecoration: "none", marginBottom: "0.7rem" }}>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.73rem", color: C.muted }}>{l}</div>
                <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: "0.88rem", color: C.green }}>{n}</div>
              </a>
            ))}
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.74rem", color: C.muted }}><span style={{ color: C.green }}>●</span> Online 08.00–24.00 WIB</div>
          </div>
          <div style={{ display: "flex", justifyContent: "center", paddingBottom: "1rem" }}>
            <BrandBlock centered />
          </div>
        </div>

        {/* DESKTOP layout */}
        <div className="ftr-desktop" style={{ display: "none", gap: "2rem", marginBottom: "2.5rem" }}>
          <div style={{ flexShrink: 0, width: 240 }}><BrandBlock /></div>
          <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr 1.3fr", gap: "1.5rem" }}>
            <div>
              <ColHead text="Navigasi" />
              {footerLinks.map(([l,h]) => (
                <a key={l} href={h} style={{ display: "block", fontFamily: "'Inter', sans-serif", fontSize: "0.87rem", color: C.muted, textDecoration: "none", marginBottom: "0.5rem", transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = C.cyan)}
                  onMouseLeave={e => (e.currentTarget.style.color = C.muted)}
                >{l}</a>
              ))}
            </div>
            <div>
              <ColHead text="Game" />
              {games.map(([n,c]) => (
                <div key={n as string} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: "0.52rem" }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: c as string, flexShrink: 0 }} />
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.87rem", color: C.muted }}>{n}</span>
                </div>
              ))}
            </div>
            <div>
              <ColHead text="Kontak CS" />
              {csLinks.map(([l,n,h]) => (
                <a key={l as string} href={h as string} target="_blank" rel="noopener noreferrer" style={{ display: "block", textDecoration: "none", marginBottom: "0.9rem" }}>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.73rem", color: C.muted, marginBottom: 2 }}>{l}</div>
                  <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: "0.9rem", color: C.green }}>{n}</div>
                </a>
              ))}
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.76rem", color: C.muted }}><span style={{ color: C.green }}>●</span> Online 08.00–24.00 WIB</div>
            </div>
          </div>
        </div>

        {/* Copyright bar */}
        <div className="neon-divider" style={{ marginBottom: "1.1rem" }} />
        <div className="ftr-copy" style={{ display: "flex", paddingBottom: "1.5rem", gap: "0.4rem", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.78rem", color: C.muted }}>© 2026 LaaVin Store. All rights reserved.</span>
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.78rem", color: C.muted, display: "flex", alignItems: "center", gap: 5 }}>Made with <Zap size={11} color={C.cyan} fill={C.cyan} /> for gamers</span>
        </div>
      </div>
    </footer>
  );
}

// ─── FLOATING WA ──────────────────────────────────────────────────────────────
function FloatingWA() {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ position: "fixed", bottom: 24, right: 24, zIndex: 300, display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 10 }}>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: 10, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 10, scale: 0.95 }} transition={{ duration: 0.18 }}
            style={{ borderRadius: 16, border: `1px solid ${C.border}`, background: "rgba(4,8,15,0.97)", backdropFilter: "blur(16px)", padding: "1.1rem", width: 230, boxShadow: `0 8px 40px rgba(0,201,255,0.18)` }}
          >
            <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "0.7rem", color: C.cyan, letterSpacing: "0.1em", marginBottom: "0.7rem" }}>PILIH CS KAMI</div>
            {[{ name: "Tylaa", sub: "Semua Game", num: "6281260725938", c: C.cyan }, { name: "Repin", sub: "Semua Game", num: "6287767654980", c: C.violet }].map(cs => (
              <a key={cs.name} href={`https://wa.me/${cs.num}?text=Halo%20LaaVin%20Store!%20Mau%20order%20joki.`} target="_blank" rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", gap: 9, padding: "9px 10px", borderRadius: 10, marginBottom: 7, border: `1px solid ${cs.c}22`, background: `${cs.c}0c`, textDecoration: "none", transition: "background 0.2s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = `${cs.c}1e`; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = `${cs.c}0c`; }}
              >
                <div style={{ width: 30, height: 30, borderRadius: "50%", background: `linear-gradient(135deg, ${cs.c}, ${cs.c}88)`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <MessageCircle size={13} color="#fff" />
                </div>
                <div>
                  <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "0.82rem", color: C.text }}>{cs.name}</div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", color: C.muted }}>{cs.sub}</div>
                </div>
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button onClick={() => setOpen(o => !o)}
        style={{ width: 52, height: 52, borderRadius: "50%", border: "none", cursor: "pointer", background: grad, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: `0 0 22px ${C.cyan}44, 0 4px 18px rgba(0,0,0,0.4)`, transition: "transform 0.2s" }}
        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1.1)"; }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}
        aria-label="Chat WhatsApp"
      >
        {open ? <X size={20} color="#04080f" /> : <MessageCircle size={22} color="#04080f" fill="#04080f" />}
      </button>
    </div>
  );
}

// ─── APP ──────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <>
      <GlobalStyle />
      <div style={{ minHeight: "100vh", background: C.bg }}>
        <Header />
        <Hero />
        <Services />
        <Games />
        <Pricing />
        <Testimonials />
        <Contact />
        <Footer />
        <FloatingWA />
      </div>
    </>
  );
}
