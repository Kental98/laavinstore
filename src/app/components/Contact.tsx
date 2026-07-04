import { motion } from "motion/react";
import { MessageCircle, Clock, Shield, Headphones } from "lucide-react";

const cs = [
  {
    id: 1,
    name: "Tylaa",
    role: "Customer Service",
    number: "6281260725938",
    display: "+62 812-6072-5938",
    handle: "@laavin_cs1",
    color: "#ec4899",
    glow: "rgba(236,72,153,0.35)",
    games: ["Genshin Impact", "Honkai Star Rail"],
    gameColors: ["#4ade80", "#818cf8"],
    available: "08.00 — 24.00 WIB",
  },
  {
    id: 2,
    name: "Repin",
    role: "Customer Service 2",
    number: "6287767654980",
    display: "+62 877-6765-4980",
    handle: "@laavin_cs2",
    color: "#a855f7",
    glow: "rgba(168,85,247,0.35)",
    games: ["Wuthering Waves", "Zenless Zone Zero"],
    gameColors: ["#06b6d4", "#f59e0b"],
    available: "08.00 — 24.00 WIB",
  },
];

const whyUs = [
  { icon: <Clock size={22} />, title: "Respon Cepat", desc: "Balas dalam hitungan menit, siap order kapan saja." },
  { icon: <Shield size={22} />, title: "100% Aman", desc: "Akun dijaga ketat, tidak pernah kena ban sejak 2022." },
  { icon: <Headphones size={22} />, title: "Pro Player", desc: "Dikerjakan oleh player berpengalaman di setiap game." },
  { icon: <MessageCircle size={22} />, title: "Update Berkala", desc: "Progress joki diupdate real-time via WhatsApp." },
];

export function Contact() {
  return (
    <section id="contact" style={{ padding: "6rem 1.5rem", position: "relative" }}>
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "radial-gradient(ellipse at 50% 100%, rgba(168,85,247,0.1) 0%, transparent 60%)",
      }} />

      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 18px",
            borderRadius: 100, border: "1px solid rgba(236,72,153,0.35)",
            background: "rgba(236,72,153,0.07)", marginBottom: "1.2rem",
          }}>
            <MessageCircle size={14} color="#f472b6" />
            <span style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 600, fontSize: "0.82rem", color: "#f472b6", letterSpacing: "0.1em" }}>
              HUBUNGI KAMI
            </span>
          </div>
          <h2 style={{
            fontFamily: "'Orbitron', sans-serif", fontWeight: 900,
            fontSize: "clamp(1.8rem, 4vw, 3rem)", marginBottom: "1rem",
            background: "linear-gradient(135deg, #f472b6, #a855f7)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>Order via WhatsApp</h2>
          <p style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "1.05rem", color: "#9980bb", maxWidth: 500, margin: "0 auto" }}>
            Hubungi customer service kami langsung melalui WhatsApp. Proses cepat, pembayaran fleksibel!
          </p>
        </div>

        {/* CS Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem", marginBottom: "4rem" }}>
          {cs.map((c, i) => (
            <motion.div key={c.id}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }} viewport={{ once: true }}
              style={{
                borderRadius: 20, padding: "2rem",
                border: `1px solid ${c.color}44`,
                background: `linear-gradient(145deg, ${c.color}0d, rgba(17,1,32,0.9))`,
                boxShadow: `0 0 30px ${c.color}15`,
                textAlign: "center",
              }}
            >
              {/* WA icon */}
              <div style={{
                width: 72, height: 72, borderRadius: "50%", margin: "0 auto 1.2rem",
                background: `linear-gradient(135deg, ${c.color}, ${c.color}88)`,
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: `0 0 24px ${c.glow}`,
              }}>
                <MessageCircle size={32} color="#fff" fill="#fff" />
              </div>

              <div style={{ fontFamily: "'Orbitron', sans-serif", fontWeight: 800, fontSize: "1.1rem", color: "#f0e8ff", marginBottom: 4 }}>
                {c.name}
              </div>
              <div style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "0.88rem", color: c.color, marginBottom: 6 }}>
                {c.role}
              </div>
              <div style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 600, fontSize: "1rem", color: "#c4a0e8", marginBottom: "0.5rem" }}>
                {c.display}
              </div>
              <div style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "0.85rem", color: "#9980bb", marginBottom: "1.2rem" }}>
                {c.handle}
              </div>

              {/* Games */}
              <div style={{ display: "flex", gap: 6, justifyContent: "center", marginBottom: "1rem", flexWrap: "wrap" }}>
                {c.games.map((g, gi) => (
                  <span key={g} style={{
                    padding: "3px 10px", borderRadius: 6, fontSize: "0.78rem",
                    fontFamily: "'Rajdhani', sans-serif", fontWeight: 600,
                    border: `1px solid ${c.gameColors[gi]}55`,
                    background: `${c.gameColors[gi]}15`, color: c.gameColors[gi],
                  }}>{g}</span>
                ))}
              </div>

              <div style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
                marginBottom: "1.5rem", fontFamily: "'Rajdhani', sans-serif",
                fontSize: "0.82rem", color: "#9980bb",
              }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ade80", display: "inline-block" }} />
                Online {c.available}
              </div>

              <a
                href={`https://wa.me/${c.number}?text=Halo%20LaaVin%20Store!%20Saya%20mau%20order%20joki%20game.`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                  padding: "13px 0", borderRadius: 10,
                  background: `linear-gradient(135deg, ${c.color}, ${c.color}99)`,
                  color: "#fff", textDecoration: "none",
                  fontFamily: "'Orbitron', sans-serif", fontWeight: 700, fontSize: "0.85rem",
                  letterSpacing: "0.04em", boxShadow: `0 0 20px ${c.glow}`,
                  transition: "all 0.2s",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = `0 0 35px ${c.glow}`; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = `0 0 20px ${c.glow}`; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
              >
                <MessageCircle size={17} />
                CHAT {c.name.toUpperCase()}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Why Us */}
        <div style={{
          borderRadius: 20, border: "1px solid rgba(168,85,247,0.2)",
          background: "rgba(17,1,32,0.6)", padding: "2.5rem",
        }}>
          <h3 style={{
            fontFamily: "'Orbitron', sans-serif", fontWeight: 700,
            fontSize: "1.2rem", color: "#f0e8ff", textAlign: "center", marginBottom: "2rem",
          }}>Kenapa Pilih LaaVin Store?</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem" }}>
            {whyUs.map(w => (
              <div key={w.title} style={{ textAlign: "center" }}>
                <div style={{
                  width: 52, height: 52, borderRadius: 14, margin: "0 auto 0.9rem",
                  background: "rgba(236,72,153,0.1)", border: "1px solid rgba(236,72,153,0.25)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#f472b6",
                }}>{w.icon}</div>
                <div style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, fontSize: "1rem", color: "#f0e8ff", marginBottom: 4 }}>{w.title}</div>
                <div style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "0.88rem", color: "#9980bb", lineHeight: 1.5 }}>{w.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
