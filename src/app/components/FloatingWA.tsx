import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

const cs = [
  { name: "Tylaa — GI & HSR", number: "6281260725938", color: "#ec4899" },
  { name: "Repin — WuWa & ZZZ", number: "6287767654980", color: "#a855f7" },
];

export function FloatingWA() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ position: "fixed", bottom: 24, right: 24, zIndex: 200, display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 10 }}>
      {open && (
        <div style={{
          borderRadius: 16, border: "1px solid rgba(236,72,153,0.35)",
          background: "rgba(8,1,15,0.97)", backdropFilter: "blur(16px)",
          padding: "1.2rem", width: 240,
          boxShadow: "0 8px 40px rgba(236,72,153,0.3)",
          animation: "fade-up 0.2s ease",
        }}>
          <div style={{ fontFamily: "'Orbitron', sans-serif", fontWeight: 700, fontSize: "0.78rem", color: "#f472b6", letterSpacing: "0.08em", marginBottom: "0.8rem" }}>
            PILIH CS KAMI
          </div>
          {cs.map(c => (
            <a key={c.name}
              href={`https://wa.me/${c.number}?text=Halo%20LaaVin%20Store!%20Mau%20order%20joki%20game.`}
              target="_blank" rel="noopener noreferrer"
              style={{
                display: "flex", alignItems: "center", gap: 10,
                padding: "10px 12px", borderRadius: 10, marginBottom: 8,
                border: `1px solid ${c.color}33`, background: `${c.color}0d`,
                textDecoration: "none", transition: "background 0.2s",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = `${c.color}22`; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = `${c.color}0d`; }}
            >
              <div style={{
                width: 32, height: 32, borderRadius: "50%",
                background: `linear-gradient(135deg, ${c.color}, ${c.color}88)`,
                display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
              }}>
                <MessageCircle size={15} color="#fff" />
              </div>
              <span style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 600, fontSize: "0.88rem", color: "#f0e8ff" }}>{c.name}</span>
            </a>
          ))}
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        style={{
          width: 56, height: 56, borderRadius: "50%", border: "none", cursor: "pointer",
          background: "linear-gradient(135deg, #ec4899, #a855f7)",
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 0 24px rgba(236,72,153,0.55), 0 4px 20px rgba(0,0,0,0.4)",
          transition: "transform 0.2s, box-shadow 0.2s",
        }}
        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1.1)"; }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}
        aria-label="WhatsApp"
      >
        {open ? <X size={22} color="#fff" /> : <MessageCircle size={24} color="#fff" fill="#fff" />}
      </button>

      <style>{`
        @keyframes fade-up { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
}
