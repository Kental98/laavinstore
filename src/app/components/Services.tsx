import { motion } from "motion/react";
import { Star, Sword, Zap, Wind, Globe } from "lucide-react";
import wuwaImg from "../../imports/Rovers_in_Rinascita.jfif";
import hsrImg from "../../imports/download__2_.jfif";
import zzzImg from "../../imports/download__1_.jfif";
import giImg from "../../imports/_aether__aethergenshinimpact__lumine__luminegenshinimpact__genshinimpact__genshin.jfif";

const games = [
  {
    id: "wuwa",
    name: "Wuthering Waves",
    tag: "WUWA",
    icon: <Wind size={32} />,
    color: "#06b6d4",
    glow: "rgba(6,182,212,0.25)",
    border: "rgba(6,182,212,0.35)",
    bg: "rgba(6,182,212,0.07)",
    desc: "Layanan joki profesional Wuthering Waves. Cepat, aman, dan terpercaya!",
    services: [
      "Astrite / Rawat akun",
      "Explore map / Quest",
      "Endgame content",
      "Event / permanen event",
      "Farming resources / Build Character",
    ],
    image: wuwaImg,
  },
  {
    id: "zzz",
    name: "Zenless Zone Zero",
    tag: "ZZZ",
    icon: <Zap size={32} />,
    color: "#f59e0b",
    glow: "rgba(245,158,11,0.25)",
    border: "rgba(245,158,11,0.35)",
    bg: "rgba(245,158,11,0.07)",
    desc: "Layanan joki profesional Zenless Zone Zero. Cepat, aman, dan terpercaya!",
    services: [
      "PolyChromes / Rawat akun",
      "Endgame content",
      "Build Character",
      "Quest / Rawat Akun",
      "Event",
    ],
    image: zzzImg,
  },
  {
    id: "hsr",
    name: "Honkai Star Rail",
    tag: "HSR",
    icon: <Star size={32} />,
    color: "#818cf8",
    glow: "rgba(129,140,248,0.25)",
    border: "rgba(129,140,248,0.35)",
    bg: "rgba(129,140,248,0.07)",
    desc: "Layanan joki profesional Honkai Star Rail. Cepat, aman, dan terpercaya!",
    services: [
      "Stellar Jade / Rawat akun",
      "Explore map / Quest",
      "Endgame Content",
      "Event / Nostalgia Event",
      "Farming Resources / Build Character",
    ],
    image: hsrImg,
  },
  {
    id: "gi",
    name: "Genshin Impact",
    tag: "GI",
    icon: <Globe size={32} />,
    color: "#4ade80",
    glow: "rgba(74,222,128,0.25)",
    border: "rgba(74,222,128,0.35)",
    bg: "rgba(74,222,128,0.07)",
    desc: "Layanan joki profesional Genshin Impact. Cepat, aman, dan terpercaya!",
    services: [
      "Primogems / Rawat Akun",
      "Explore map / Quest",
      "Events / Endgame Content",
      "Build Character / Rawat akun",
    ],
    image: giImg,
  },
];

export function Services() {
  return (
    <section id="services" style={{ padding: "5rem 1rem", position: "relative" }}>
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "radial-gradient(ellipse at 50% 0%, rgba(168,85,247,0.07) 0%, transparent 60%)",
      }} />

      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 18px",
            borderRadius: 100, border: "1px solid rgba(236,72,153,0.35)",
            background: "rgba(236,72,153,0.07)", marginBottom: "1.2rem",
          }}>
            <Sword size={14} color="#f472b6" />
            <span style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 600, fontSize: "0.82rem", color: "#f472b6", letterSpacing: "0.1em" }}>
              LAYANAN JOKI GAME
            </span>
          </div>
          <h2 style={{
            fontFamily: "'Orbitron', sans-serif", fontWeight: 900,
            fontSize: "clamp(1.6rem, 4vw, 3rem)", marginBottom: "1rem",
            background: "linear-gradient(135deg, #f472b6, #a855f7)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>
            4 Game Tersedia
          </h2>
          <p style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "1rem", color: "#9980bb", maxWidth: 500, margin: "0 auto" }}>
            Pilih game favoritmu dan biarkan kami yang urus progressnya. Pro player berpengalaman siap membantu!
          </p>
        </div>

        {/* Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem" }}>
          {games.map((g, i) => (
            <motion.div key={g.id}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }}
              style={{
                borderRadius: 16, border: `1px solid ${g.border}`,
                background: `linear-gradient(145deg, ${g.bg}, rgba(17,1,32,0.8))`,
                overflow: "hidden", transition: "transform 0.3s, box-shadow 0.3s",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
                (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 50px ${g.glow}`;
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              {/* Game banner */}
              <div style={{ position: "relative", height: 180, overflow: "hidden", background: "#0d0020" }}>
                <img src={g.image} alt={g.name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
                <div style={{
                  position: "absolute", inset: 0,
                  background: `linear-gradient(to bottom, transparent 20%, rgba(8,1,15,0.95) 100%)`,
                }} />
                <div style={{
                  position: "absolute", top: 12, left: 12, padding: "4px 12px",
                  borderRadius: 6, background: g.color, color: "#000",
                  fontFamily: "'Orbitron', sans-serif", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.1em",
                }}>{g.tag}</div>
                <div style={{ position: "absolute", bottom: 12, left: 14, color: g.color }}>{g.icon}</div>
              </div>

              {/* Content */}
              <div style={{ padding: "1.2rem 1.4rem 1.4rem" }}>
                <h3 style={{
                  fontFamily: "'Orbitron', sans-serif", fontWeight: 700, fontSize: "1rem",
                  color: "#f0e8ff", marginBottom: "0.5rem",
                }}>{g.name}</h3>
                <p style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "0.88rem", color: "#9980bb", lineHeight: 1.6, marginBottom: "1rem" }}>
                  {g.desc}
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6, marginBottom: "1.4rem" }}>
                  {g.services.map(s => (
                    <li key={s} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                      <span style={{ width: 6, height: 6, borderRadius: "50%", background: g.color, flexShrink: 0, marginTop: 6 }} />
                      <span style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 500, fontSize: "0.9rem", color: "#c4a0e8" }}>{s}</span>
                    </li>
                  ))}
                </ul>
                <a href="#contact" style={{
                  display: "block", textAlign: "center", padding: "10px 0", borderRadius: 8,
                  border: `1px solid ${g.border}`, background: g.bg, color: g.color,
                  fontFamily: "'Orbitron', sans-serif", fontWeight: 700, fontSize: "0.8rem",
                  textDecoration: "none", letterSpacing: "0.05em", transition: "all 0.2s",
                }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = g.glow; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = g.bg; }}
                >ORDER {g.tag}</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
