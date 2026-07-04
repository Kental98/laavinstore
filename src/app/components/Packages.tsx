import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Tag, ChevronDown, MessageCircle } from "lucide-react";

type PriceItem = { name: string; price: string };
type Category = { title: string; items: PriceItem[]; note?: string };
type GameData = { color: string; border: string; glow: string; bg: string; categories: Category[] };

const gamePackages: Record<string, GameData> = {
  "Wuthering Waves": {
    color: "#06b6d4", border: "rgba(6,182,212,0.35)", glow: "rgba(6,182,212,0.2)", bg: "rgba(6,182,212,0.07)",
    categories: [
      {
        title: "🔮 Astrite",
        items: [
          { name: "1.600 Astrite", price: "Rp 30.000" },
          { name: "3.200 Astrite", price: "Rp 60.000" },
          { name: "4.800 Astrite", price: "Rp 100.000" },
          { name: "6.400 Astrite", price: "Rp 140.000" },
          { name: "8.000 Astrite", price: "Rp 180.000" },
          { name: "9.600 Astrite", price: "Rp 220.000" },
        ],
      },
      {
        title: "⚔️ Endgame Content",
        items: [
          { name: "Holograms Diff 1–4", price: "Rp 1.000" },
          { name: "Holograms Diff 5", price: "Rp 5.000" },
          { name: "Holograms Diff 6", price: "Rp 10.000" },
          { name: "Holograms Diff 1–6", price: "Rp 15.000" },
          { name: "ToA 2 Floors", price: "Rp 6.000" },
          { name: "ToA All Floors", price: "Rp 25.000" },
          { name: "Whiwa Floor 1–5", price: "Rp 3.000" },
          { name: "Whiwa Floor 6–8", price: "Rp 5.000" },
          { name: "Whiwa Floor 9–11", price: "Rp 15.000" },
          { name: "Whiwa Infinite", price: "Rp 10.000" },
        ],
      },
      {
        title: "🗺️ Joki Rinascita",
        items: [
          { name: "Ragunna", price: "Rp 5.000" },
          { name: "Anerardo Vault", price: "Rp 40.000" },
          { name: "Vault Underground", price: "Rp 35.000" },
          { name: "Whispering Wind", price: "Rp 40.000" },
          { name: "Septimont", price: "Rp 80.000" },
          { name: "Nimbus Sanctum", price: "Rp 40.000" },
          { name: "Thesseleo Fells", price: "Rp 40.000" },
          { name: "Fagacae Peninsula", price: "Rp 45.000" },
          { name: "Sanguis Palateus", price: "Rp 55.000" },
          { name: "Riccioli Island", price: "Rp 25.000" },
          { name: "Panitent's End", price: "Rp 40.000" },
          { name: "Anonileum", price: "Rp 40.000" },
          { name: "Beohr Water", price: "Rp 35.000" },
          { name: "All Rinascita", price: "Rp 250.000" },
        ],
      },
      {
        title: "🗺️ Joki Huanglong",
        items: [
          { name: "Jinzhou", price: "Rp 40.000" },
          { name: "Tigers Man", price: "Rp 50.000" },
          { name: "Wuming Bay", price: "Rp 35.000" },
          { name: "Port City", price: "Rp 75.000" },
          { name: "Whining Axe", price: "Rp 70.000" },
          { name: "Central Pain", price: "Rp 80.000" },
          { name: "Desorock Highland", price: "Rp 30.000" },
          { name: "Dim Forest", price: "Rp 80.000" },
          { name: "Mt. Firmament", price: "Rp 40.000" },
          { name: "Archipelago", price: "Rp 40.000" },
          { name: "Tethys Deep", price: "Rp 40.000" },
          { name: "Paket Huanglong", price: "Rp 250.000" },
        ],
      },
      {
        title: "🗺️ Joki Lahai-Roi",
        items: [
          { name: "Startoch Academy", price: "Rp 25.000" },
          { name: "Starward Riseaway", price: "Rp 20.000" },
          { name: "Manburrow Dessert", price: "Rp 20.000" },
          { name: "Giant's Gaze", price: "Rp 35.000" },
          { name: "Stagnant Run", price: "Rp 50.000" },
          { name: "Rebirth Uplands", price: "Rp 35.000" },
          { name: "Fansgpire Chasm", price: "Rp 50.000" },
          { name: "Bjart Wood", price: "Rp 50.000" },
          { name: "Etching Plains", price: "Rp 50.000" },
          { name: "All Lahai-Roi", price: "Rp 230.000" },
        ],
      },
      {
        title: "🗺️ Joki Roya Frostland",
        items: [
          { name: "Frostland Transit", price: "Rp 35.000" },
          { name: "Starblind Crashite", price: "Rp 45.000" },
          { name: "Mount Gajlar", price: "Rp 30.000" },
          { name: "Tidoelest Forest", price: "Rp 30.000" },
          { name: "Uphalf Ruin", price: "Rp 30.000" },
          { name: "All Roya Frostland", price: "Rp 120.000" },
        ],
      },
      {
        title: "📜 Quest",
        items: [
          { name: "Main Quest", price: "Rp 15.000–20.000" },
          { name: "Companion Quest", price: "Rp 10.000" },
          { name: "Exploration Quest", price: "Rp 7.000" },
          { name: "Side Quest", price: "Rp 3.000" },
        ],
      },
      {
        title: "🛡️ Rawat Akun",
        items: [
          { name: "1 Hari", price: "Rp 3.000" },
          { name: "3 Hari", price: "Rp 6.000" },
          { name: "1 Minggu", price: "Rp 27.000" },
          { name: "1 Patch", price: "Rp 100.000" },
        ],
        note: "Events & material? Chat admin. Joki lainnya boleh tanya CS.",
      },
    ],
  },

  "Honkai Star Rail": {
    color: "#818cf8", border: "rgba(129,140,248,0.35)", glow: "rgba(129,140,248,0.2)", bg: "rgba(129,140,248,0.07)",
    categories: [
      {
        title: "🗺️ Explore",
        items: [
          { name: "Space Station", price: "Rp 20.000" },
          { name: "Jarilo-VI", price: "Rp 35.000" },
          { name: "Xianzhou (Luofu)", price: "Rp 50.000" },
          { name: "Penacony", price: "Rp 60.000" },
          { name: "Amphoreus", price: "Rp 90.000" },
          { name: "Planarcadia", price: "Rp 80.000" },
        ],
      },
      {
        title: "💎 Stellar Jade",
        items: [
          { name: "1.600 Stellar Jade", price: "Rp 20.000" },
          { name: "3.200 Stellar Jade", price: "Rp 50.000" },
          { name: "4.800 Stellar Jade", price: "Rp 70.000" },
          { name: "6.400 Stellar Jade", price: "Rp 90.000" },
          { name: "8.000 Stellar Jade", price: "Rp 110.000" },
        ],
      },
      {
        title: "📜 Quest",
        items: [
          { name: "Main Quest", price: "Rp 15.000" },
          { name: "Quest Lanjutan", price: "Rp 15.000" },
          { name: "Quest Companion", price: "Rp 10.000" },
          { name: "Quest Petualangan", price: "Rp 5.000" },
        ],
      },
      {
        title: "⚔️ Endgame Content",
        items: [
          { name: "Pure Fiction", price: "Rp 20.000" },
          { name: "Apocalyptic Shadow", price: "Rp 20.000" },
          { name: "Memory of Chaos", price: "Rp 25.000" },
        ],
      },
      {
        title: "🎮 Event",
        items: [
          { name: "Current Event", price: "Rp 15.000–50.000" },
          { name: "Nostalgia Event", price: "Rp 10.000–45.000" },
        ],
        note: "Harga tergantung event.",
      },
      {
        title: "🛡️ Build Character",
        items: [
          { name: "Build Character", price: "Rp 70.000 / karakter" },
        ],
        note: "Include: Up level max, Up level light cone, Up level max trace.",
      },
      {
        title: "💼 Rawat Akun",
        items: [
          { name: "Daily", price: "Rp 5.000" },
          { name: "Weekly", price: "Rp 20.000" },
          { name: "Weekly (+ DU/SU/Event)", price: "Rp 45.000" },
          { name: "Monthly", price: "Rp 40.000" },
          { name: "Monthly (+ SU/DU/Event)", price: "Rp 70.000" },
        ],
      },
    ],
  },

  "Zenless Zone Zero": {
    color: "#f59e0b", border: "rgba(245,158,11,0.35)", glow: "rgba(245,158,11,0.2)", bg: "rgba(245,158,11,0.07)",
    categories: [
      {
        title: "👤 Agent, Event & Quest",
        items: [
          { name: "Agent Quest", price: "Rp 20.000" },
          { name: "Main Quest", price: "Rp 25.000" },
          { name: "Event Kecil", price: "Rp 30.000" },
          { name: "Event Besar", price: "Rp 50.000" },
          { name: "Build Agent", price: "Rp 75.000" },
        ],
      },
      {
        title: "⚔️ Endgame",
        items: [
          { name: "Deadly Assault", price: "Rp 25.000" },
          { name: "Shiyu Defend", price: "Rp 25.000" },
        ],
      },
      {
        title: "🎯 Threshold Simulation",
        items: [
          { name: "Easy", price: "Rp 20.000" },
          { name: "Hard", price: "Rp 40.000" },
        ],
      },
      {
        title: "💎 PolyChromes",
        items: [
          { name: "1.600 PolyChromes", price: "Rp 25.000" },
        ],
        note: "Harga naik jadi Rp 30.000/1600 Poly untuk late game account.",
      },
    ],
  },

  "Genshin Impact": {
    color: "#4ade80", border: "rgba(74,222,128,0.35)", glow: "rgba(74,222,128,0.2)", bg: "rgba(74,222,128,0.07)",
    categories: [
      {
        title: "💬 Tanyakan Admin",
        items: [
          { name: "Primogems / Rawat Akun", price: "Tanyakan CS" },
          { name: "Explore map / Quest", price: "Tanyakan CS" },
          { name: "Events / Endgame Content", price: "Tanyakan CS" },
          { name: "Build Character / Rawat Akun", price: "Tanyakan CS" },
        ],
        note: "Hubungi CS kami untuk info harga Genshin Impact.",
      },
    ],
  },
};

const gameList = Object.keys(gamePackages);

function AccordionItem({ cat, color, border, bg, glow }: {
  cat: Category; color: string; border: string; bg: string; glow: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderRadius: 10, border: `1px solid ${open ? border : "rgba(168,85,247,0.12)"}`, overflow: "hidden", transition: "border-color 0.2s" }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "12px 16px", background: open ? bg : "rgba(17,1,32,0.5)",
          border: "none", cursor: "pointer", transition: "background 0.2s",
        }}
      >
        <span style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, fontSize: "0.95rem", color: open ? color : "#c4a0e8" }}>
          {cat.title}
        </span>
        <ChevronDown size={16} color={open ? color : "#9980bb"}
          style={{ transform: open ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.2s" }} />
      </button>
      {open && (
        <div style={{ padding: "4px 16px 14px", background: "rgba(8,1,15,0.6)" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: cat.note ? 8 : 0 }}>
            {cat.items.map(item => (
              <div key={item.name} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8 }}>
                <span style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "0.88rem", color: "#c4a0e8" }}>{item.name}</span>
                <span style={{
                  fontFamily: "'Orbitron', sans-serif", fontWeight: 700, fontSize: "0.78rem",
                  color, whiteSpace: "nowrap",
                  padding: "2px 8px", borderRadius: 5, background: `${color}18`, border: `1px solid ${color}44`,
                }}>{item.price}</span>
              </div>
            ))}
          </div>
          {cat.note && (
            <p style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "0.8rem", color: "#9980bb", fontStyle: "italic", marginTop: 6, borderTop: `1px solid rgba(255,255,255,0.05)`, paddingTop: 6 }}>
              ⚠️ {cat.note}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export function Packages() {
  const [activeGame, setActiveGame] = useState(gameList[0]);
  const pkg = gamePackages[activeGame];

  return (
    <section id="packages" style={{ padding: "5rem 1rem", position: "relative" }}>
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "radial-gradient(ellipse at 30% 50%, rgba(236,72,153,0.05) 0%, transparent 60%)",
      }} />

      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 18px",
            borderRadius: 100, border: "1px solid rgba(236,72,153,0.35)",
            background: "rgba(236,72,153,0.07)", marginBottom: "1.2rem",
          }}>
            <Tag size={14} color="#f472b6" />
            <span style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 600, fontSize: "0.82rem", color: "#f472b6", letterSpacing: "0.1em" }}>
              PAKET HARGA
            </span>
          </div>
          <h2 style={{
            fontFamily: "'Orbitron', sans-serif", fontWeight: 900,
            fontSize: "clamp(1.6rem, 4vw, 2.8rem)", marginBottom: "0.8rem",
            background: "linear-gradient(135deg, #f472b6, #a855f7)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>Harga Terjangkau, Hasil Maksimal</h2>
          <p style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "1rem", color: "#9980bb", maxWidth: 480, margin: "0 auto" }}>
            Pilih game & kategori, harga transparan tanpa biaya tersembunyi!
          </p>
        </div>

        {/* Game Tabs */}
        <div style={{ display: "flex", gap: "0.6rem", justifyContent: "center", marginBottom: "2rem", flexWrap: "wrap" }}>
          {gameList.map(g => {
            const c = gamePackages[g].color;
            const active = activeGame === g;
            return (
              <button key={g} onClick={() => setActiveGame(g)} style={{
                padding: "8px 18px", borderRadius: 8, cursor: "pointer",
                fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, fontSize: "0.88rem",
                border: `1px solid ${active ? c : "rgba(168,85,247,0.2)"}`,
                background: active ? `${c}22` : "transparent",
                color: active ? c : "#9980bb",
                transition: "all 0.2s",
              }}>
                {g === "Honkai Star Rail" ? "HSR" : g === "Zenless Zone Zero" ? "ZZZ" : g === "Wuthering Waves" ? "WuWa" : "GI"}
              </button>
            );
          })}
        </div>

        {/* Active game label */}
        <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
          <span style={{
            fontFamily: "'Orbitron', sans-serif", fontWeight: 800, fontSize: "1rem",
            color: pkg.color,
          }}>{activeGame}</span>
        </div>

        {/* Accordion Categories */}
        <motion.div
          key={activeGame}
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          style={{ display: "flex", flexDirection: "column", gap: "0.6rem", marginBottom: "2rem" }}
        >
          {pkg.categories.map(cat => (
            <AccordionItem key={cat.title} cat={cat}
              color={pkg.color} border={pkg.border} bg={pkg.bg} glow={pkg.glow} />
          ))}
        </motion.div>

        {/* CTA */}
        <div style={{
          textAlign: "center", padding: "1.5rem",
          borderRadius: 14, border: "1px solid rgba(236,72,153,0.2)",
          background: "rgba(17,1,32,0.5)",
        }}>
          <p style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "0.95rem", color: "#9980bb", marginBottom: "1rem" }}>
            Tidak menemukan yang kamu cari? Langsung tanyakan ke CS kami!
          </p>
          <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://wa.me/6281260725938?text=Halo%20LaaVin%20Store!%20Mau%20tanya%20harga%20joki."
              target="_blank" rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "10px 22px", borderRadius: 8, textDecoration: "none",
                background: "linear-gradient(135deg, #ec4899, #a855f7)",
                color: "#fff", fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, fontSize: "0.9rem",
                boxShadow: "0 0 18px rgba(236,72,153,0.4)",
              }}>
              <MessageCircle size={15} /> Tylaa (GI & HSR)
            </a>
            <a href="https://wa.me/6287767654980?text=Halo%20LaaVin%20Store!%20Mau%20tanya%20harga%20joki."
              target="_blank" rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "10px 22px", borderRadius: 8, textDecoration: "none",
                background: "linear-gradient(135deg, #a855f7, #818cf8)",
                color: "#fff", fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, fontSize: "0.9rem",
                boxShadow: "0 0 18px rgba(168,85,247,0.4)",
              }}>
              <MessageCircle size={15} /> Repin (WuWa & ZZZ)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
