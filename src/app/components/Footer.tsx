import { Zap, MessageCircle } from "lucide-react";
import logoImg from "../../imports/IMG-20260611-WA0059.jpg";

export function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid rgba(236,72,153,0.15)",
      background: "rgba(8,1,15,0.95)", padding: "3rem 1.5rem 2rem",
    }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "2.5rem", marginBottom: "2.5rem" }} className="footer-grid">

          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "1rem" }}>
              <img src={logoImg} alt="LaaVin Store" style={{ width: 38, height: 38, borderRadius: 9, objectFit: "cover", border: "1.5px solid rgba(236,72,153,0.4)" }} />
              <span style={{
                fontFamily: "'Orbitron', sans-serif", fontWeight: 900, fontSize: "1.1rem",
                background: "linear-gradient(135deg, #f472b6, #a855f7)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>LaaVin Store</span>
            </div>
            <p style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "0.9rem", color: "#9980bb", lineHeight: 1.7, maxWidth: 280, marginBottom: "1.2rem" }}>
              Joki game terpercaya sejak 2022. Melayani Wuthering Waves, Zenless Zone Zero, Honkai Star Rail, dan Genshin Impact dengan profesional.
            </p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {[
                { label: "CS WhatsApp", icon: "💬", href: "https://wa.me/6281260725938" },
                { label: "WA Group", icon: "👥", href: "https://chat.whatsapp.com/FqiW9K2NSXL2nsvUdEDC3M" },
                { label: "WA Channel", icon: "📢", href: "https://whatsapp.com/channel/0029Vb8pYXKJf05ijoxN2Q43" },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  aria-label={s.label}
                  title={s.label}
                  style={{
                    width: 36, height: 36, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center",
                    border: "1px solid rgba(236,72,153,0.25)", background: "rgba(236,72,153,0.07)",
                    fontSize: "1rem", textDecoration: "none", transition: "all 0.2s",
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(236,72,153,0.2)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(236,72,153,0.07)"; }}
                >{s.icon}</a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <div style={{ fontFamily: "'Orbitron', sans-serif", fontWeight: 700, fontSize: "0.8rem", color: "#f472b6", letterSpacing: "0.1em", marginBottom: "1rem" }}>NAVIGASI</div>
            {["Beranda", "Layanan", "Paket Harga", "Testimoni", "Kontak"].map(l => (
              <a key={l} href={`#${l === "Beranda" ? "home" : l === "Layanan" ? "services" : l === "Paket Harga" ? "packages" : l === "Testimoni" ? "testimonials" : "contact"}`}
                style={{ display: "block", fontFamily: "'Rajdhani', sans-serif", fontWeight: 500, fontSize: "0.92rem", color: "#9980bb", textDecoration: "none", marginBottom: "0.5rem", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#f472b6")}
                onMouseLeave={e => (e.currentTarget.style.color = "#9980bb")}
              >{l}</a>
            ))}
          </div>

          {/* Games */}
          <div>
            <div style={{ fontFamily: "'Orbitron', sans-serif", fontWeight: 700, fontSize: "0.8rem", color: "#f472b6", letterSpacing: "0.1em", marginBottom: "1rem" }}>GAME</div>
            {[
              { name: "Wuthering Waves", color: "#06b6d4" },
              { name: "Zenless Zone Zero", color: "#f59e0b" },
              { name: "Honkai Star Rail", color: "#818cf8" },
              { name: "Genshin Impact", color: "#4ade80" },
            ].map(g => (
              <div key={g.name} style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: "0.55rem" }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: g.color, flexShrink: 0 }} />
                <span style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 500, fontSize: "0.9rem", color: "#9980bb" }}>{g.name}</span>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontFamily: "'Orbitron', sans-serif", fontWeight: 700, fontSize: "0.8rem", color: "#f472b6", letterSpacing: "0.1em", marginBottom: "1rem" }}>KONTAK CS</div>
            {[
              { label: "Tylaa (GI & HSR)", num: "+62 812-6072-5938", href: "https://wa.me/6281260725938" },
              { label: "Repin (WuWa & ZZZ)", num: "+62 877-6765-4980", href: "https://wa.me/6287767654980" },
            ].map(c => (
              <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer"
                style={{ display: "block", marginBottom: "0.9rem", textDecoration: "none" }}>
                <div style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "0.78rem", color: "#9980bb", marginBottom: 2 }}>{c.label}</div>
                <div style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, fontSize: "0.92rem", color: "#4ade80" }}>{c.num}</div>
              </a>
            ))}
            <div style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "0.8rem", color: "#9980bb", marginTop: "0.5rem" }}>
              <span style={{ color: "#4ade80" }}>●</span> Online 08.00 — 24.00 WIB
            </div>
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(236,72,153,0.1)", paddingTop: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.5rem" }}>
          <span style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "0.85rem", color: "#9980bb" }}>
            © 2024 LaaVin Store. All rights reserved.
          </span>
          <span style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "0.85rem", color: "#9980bb", display: "flex", alignItems: "center", gap: 5 }}>
            Made with <Zap size={13} color="#f472b6" fill="#f472b6" /> for gamers
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 500px) { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  );
}
