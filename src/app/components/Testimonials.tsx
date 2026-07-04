import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  { name: "Raiyan.exe", game: "Honkai Star Rail", rank: "MoC Full Clear", rating: 5, avatar: "R", color: "#818cf8", text: "Cepet banget! Ordernya malem, besok pagi MoC udah full clear semua. CS nya ramah dan responsif. Recommended banget!" },
  { name: "NinaSakura", game: "Genshin Impact", rank: "Spiral Abyss 36★", rating: 5, avatar: "N", color: "#4ade80", text: "Udah 3x order di LaaVin Store, selalu puas! Abyss 36 bintang dijamin, artifact juga udah difarmin sekalian. Worth it!" },
  { name: "ZeroKnight", game: "Zenless Zone Zero", rank: "Inter-Knot Level 50", rating: 5, avatar: "Z", color: "#f59e0b", text: "Mantap jiwa! IKL naik drastis dalam 2 hari, hollow zero juga udah clear. Harga murah, kualitas premium. 10/10 bro!" },
  { name: "CloudWalker", game: "Wuthering Waves", rank: "UL 60 + Abyss Clear", rating: 5, avatar: "C", color: "#06b6d4", text: "Profesional banget! Echo legendary udah kefarmin semua, UL langsung 60. Nggak perlu khawatir akun kena apa-apa." },
  { name: "AnimeGaming99", game: "Honkai Star Rail", rank: "Trailblaze Level 70", rating: 5, avatar: "A", color: "#818cf8", text: "Sudah pakai LaaVin Store 5x lebih. Pelayanannya konsisten bagus, on time, dan yang penting AMAN. Teman-teman juga saya rekomendasiin kesini!" },
  { name: "MilaReinholt", game: "Genshin Impact", rank: "AR 60 Full Farm", rating: 5, avatar: "M", color: "#4ade80", text: "Terima kasih LaaVin Store! Artifact & resin harian beres semua. Progress karakter aku nanjak drastis. CS baik dan fast response!" },
  { name: "RexBurner", game: "Zenless Zone Zero", rank: "Agen S-Rank Unlock", rating: 5, avatar: "R", color: "#f59e0b", text: "Baru pertama nyoba joki dan pilih LaaVin Store, langsung ketagihan. Prosesnya cepat, aman, dan hasilnya sesuai ekspektasi!" },
  { name: "StarlightMei", game: "Wuthering Waves", rank: "Echo Farm + UL 45", rating: 5, avatar: "S", color: "#06b6d4", text: "Nggak nyangka bisa secepat ini! Echo grade S udah banyak terkumpul. Joki-nya kerja keras banget. Love LaaVin Store!" },
  { name: "Pelanggan Setia", game: "Honkai Star Rail", rank: "Verified Customer", rating: 5, avatar: "P", color: "#f472b6", text: "Fast response, ramah, mantap sih dan cepet juga. Overall 10/10. Jadi ingin langganan tiap ada mommy 🩷" },
  { name: "Gamer Indonesia", game: "Wuthering Waves", rank: "Verified Customer", rating: 5, avatar: "G", color: "#06b6d4", text: "Semoga terus banyak Cust nya, dan banyakin diskon wkwkwk yg jelas semangat dah ngejalanin store nya semoga makin rame 🔥" },
];

function StarRating({ count }: { count: number }) {
  return (
    <div style={{ display: "flex", gap: 2 }}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={13} color="#f59e0b" fill="#f59e0b" />
      ))}
    </div>
  );
}

export function Testimonials() {
  const half = Math.ceil(testimonials.length / 2);
  const col1 = testimonials.slice(0, half);
  const col2 = testimonials.slice(half);

  return (
    <section id="testimonials" style={{ padding: "6rem 1.5rem", position: "relative", overflow: "hidden" }}>
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "radial-gradient(ellipse at 70% 50%, rgba(236,72,153,0.06) 0%, transparent 60%)",
      }} />

      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 18px",
            borderRadius: 100, border: "1px solid rgba(236,72,153,0.35)",
            background: "rgba(236,72,153,0.07)", marginBottom: "1.2rem",
          }}>
            <Star size={14} color="#f472b6" fill="#f472b6" />
            <span style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 600, fontSize: "0.82rem", color: "#f472b6", letterSpacing: "0.1em" }}>
              TESTIMONI PELANGGAN
            </span>
          </div>
          <h2 style={{
            fontFamily: "'Orbitron', sans-serif", fontWeight: 900,
            fontSize: "clamp(1.8rem, 4vw, 3rem)", marginBottom: "1rem",
            background: "linear-gradient(135deg, #f472b6, #a855f7)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>Ribuan Pelanggan Puas</h2>
          <p style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "1.05rem", color: "#9980bb", maxWidth: 480, margin: "0 auto" }}>
            Bergabung dengan ribuan gamer yang sudah mempercayakan progress game mereka ke LaaVin Store.
          </p>
        </div>

        {/* Masonry-style 2 col */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }} className="testi-grid">
          {[col1, col2].map((col, ci) => (
            <div key={ci} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {col.map((t, i) => (
                <motion.div key={t.name}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }} viewport={{ once: true }}
                  style={{
                    borderRadius: 14, padding: "1.4rem",
                    border: "1px solid rgba(168,85,247,0.15)",
                    background: "rgba(17,1,32,0.7)", backdropFilter: "blur(8px)",
                    position: "relative", overflow: "hidden",
                    transition: "border-color 0.3s, transform 0.3s",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = `${t.color}55`;
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(168,85,247,0.15)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  }}
                >
                  <Quote size={20} color="rgba(236,72,153,0.2)" style={{ position: "absolute", top: 12, right: 14 }} />
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: "0.8rem" }}>
                    <div style={{
                      width: 42, height: 42, borderRadius: "50%",
                      background: `linear-gradient(135deg, ${t.color}44, ${t.color}22)`,
                      border: `1.5px solid ${t.color}66`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontFamily: "'Orbitron', sans-serif", fontWeight: 900, fontSize: "1rem", color: t.color,
                      flexShrink: 0,
                    }}>{t.avatar}</div>
                    <div>
                      <div style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, fontSize: "1rem", color: "#f0e8ff" }}>{t.name}</div>
                      <div style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "0.8rem", color: t.color }}>{t.game} · {t.rank}</div>
                    </div>
                    <div style={{ marginLeft: "auto" }}><StarRating count={t.rating} /></div>
                  </div>
                  <p style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "0.92rem", color: "#c4a0e8", lineHeight: 1.65, margin: 0 }}>
                    "{t.text}"
                  </p>
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) { .testi-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
