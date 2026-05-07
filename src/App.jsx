import { useState, useEffect } from "react";

const FLAG_CODE = {
  "México":"mx","Sudáfrica":"za","Corea del Sur":"kr","Rep. Checa":"cz",
  "Canadá":"ca","Qatar":"qa","Suiza":"ch","Bosnia y Herz.":"ba",
  "Brasil":"br","Marruecos":"ma","Haití":"ht","Escocia":"gb-sct",
  "EE. UU.":"us","Paraguay":"py","Australia":"au","Turquía":"tr",
  "Alemania":"de","Curazao":"cw","C. de Marfil":"ci","Ecuador":"ec",
  "Países Bajos":"nl","Japón":"jp","Túnez":"tn","Suecia":"se",
  "Bélgica":"be","Egipto":"eg","Irán":"ir","Nueva Zelanda":"nz",
  "España":"es","Cabo Verde":"cv","Arabia Saudita":"sa","Uruguay":"uy",
  "Francia":"fr","Senegal":"sn","Noruega":"no","Irak":"iq",
  "Argentina":"ar","Argelia":"dz","Austria":"at","Jordania":"jo",
  "Portugal":"pt","Uzbekistán":"uz","Colombia":"co","R.D. del Congo":"cd",
  "Inglaterra":"gb-eng","Croacia":"hr","Ghana":"gh","Panamá":"pa",
};

function Flag({ team, size = 22 }) {
  const code = FLAG_CODE[team];
  if (!code) return null;
  return (
    <img
      src={`https://flagcdn.com/w40/${code}.png`}
      alt={team}
      style={{ width: size, height: size * 0.67, objectFit: "cover", borderRadius: 3, flexShrink: 0, verticalAlign: "middle", boxShadow: "0 1px 3px rgba(0,0,0,0.4)" }}
    />
  );
}

const GROUPS_DATA = {
  A: { teams: ["México","Sudáfrica","Corea del Sur","Rep. Checa"],
    matches: [
      {home:0,away:1,date:"Jue 11/6",time:"16:00"},{home:2,away:3,date:"Jue 11/6",time:"23:00"},
      {home:3,away:1,date:"Jue 18/6",time:"13:00"},{home:0,away:2,date:"Jue 18/6",time:"22:00"},
      {home:3,away:0,date:"Mié 24/6",time:"22:00"},{home:1,away:2,date:"Mié 24/6",time:"22:00"},
    ]},
  B: { teams: ["Canadá","Qatar","Suiza","Bosnia y Herz."],
    matches: [
      {home:0,away:3,date:"Vie 12/6",time:"16:00"},{home:1,away:2,date:"Sáb 13/6",time:"16:00"},
      {home:2,away:3,date:"Jue 18/6",time:"16:00"},{home:0,away:1,date:"Jue 18/6",time:"19:00"},
      {home:2,away:0,date:"Mié 24/6",time:"16:00"},{home:3,away:1,date:"Mié 24/6",time:"16:00"},
    ]},
  C: { teams: ["Brasil","Marruecos","Haití","Escocia"],
    matches: [
      {home:0,away:1,date:"Sáb 13/6",time:"19:00"},{home:2,away:3,date:"Sáb 13/6",time:"22:00"},
      {home:3,away:1,date:"Vie 19/6",time:"19:00"},{home:0,away:2,date:"Vie 19/6",time:"22:00"},
      {home:3,away:0,date:"Mié 24/6",time:"19:00"},{home:1,away:2,date:"Mié 24/6",time:"19:00"},
    ]},
  D: { teams: ["EE. UU.","Paraguay","Australia","Turquía"],
    matches: [
      {home:0,away:1,date:"Vie 12/6",time:"22:00"},{home:2,away:3,date:"Dom 14/6",time:"01:00"},
      {home:0,away:2,date:"Vie 19/6",time:"16:00"},{home:3,away:1,date:"Sáb 20/6",time:"01:00"},
      {home:3,away:0,date:"Jue 25/6",time:"23:00"},{home:1,away:2,date:"Jue 25/6",time:"23:00"},
    ]},
  E: { teams: ["Alemania","Curazao","C. de Marfil","Ecuador"],
    matches: [
      {home:0,away:1,date:"Dom 14/6",time:"14:00"},{home:2,away:3,date:"Dom 14/6",time:"20:00"},
      {home:0,away:2,date:"Sáb 20/6",time:"17:00"},{home:3,away:1,date:"Sáb 20/6",time:"21:00"},
      {home:3,away:0,date:"Jue 25/6",time:"17:00"},{home:1,away:2,date:"Jue 25/6",time:"17:00"},
    ]},
  F: { teams: ["Países Bajos","Japón","Túnez","Suecia"],
    matches: [
      {home:0,away:1,date:"Dom 14/6",time:"17:00"},{home:3,away:2,date:"Dom 14/6",time:"23:00"},
      {home:0,away:3,date:"Sáb 20/6",time:"14:00"},{home:2,away:1,date:"Dom 21/6",time:"01:00"},
      {home:2,away:0,date:"Jue 25/6",time:"20:00"},{home:1,away:3,date:"Jue 25/6",time:"20:00"},
    ]},
  G: { teams: ["Bélgica","Egipto","Irán","Nueva Zelanda"],
    matches: [
      {home:0,away:1,date:"Lun 15/6",time:"16:00"},{home:2,away:3,date:"Lun 15/6",time:"22:00"},
      {home:0,away:2,date:"Dom 21/6",time:"16:00"},{home:3,away:1,date:"Dom 21/6",time:"22:00"},
      {home:3,away:0,date:"Vie 27/6",time:"00:00"},{home:1,away:2,date:"Vie 27/6",time:"00:00"},
    ]},
  H: { teams: ["España","Cabo Verde","Arabia Saudita","Uruguay"],
    matches: [
      {home:0,away:1,date:"Lun 15/6",time:"13:00"},{home:2,away:3,date:"Lun 15/6",time:"19:00"},
      {home:0,away:2,date:"Dom 21/6",time:"13:00"},{home:3,away:1,date:"Dom 21/6",time:"19:00"},
      {home:3,away:0,date:"Vie 26/6",time:"21:00"},{home:1,away:2,date:"Vie 26/6",time:"21:00"},
    ]},
  I: { teams: ["Francia","Senegal","Noruega","Irak"],
    matches: [
      {home:0,away:1,date:"Mar 16/6",time:"16:00"},{home:3,away:2,date:"Mar 16/6",time:"19:00"},
      {home:0,away:3,date:"Lun 22/6",time:"18:00"},{home:2,away:1,date:"Lun 22/6",time:"21:00"},
      {home:2,away:0,date:"Vie 26/6",time:"16:00"},{home:1,away:3,date:"Vie 26/6",time:"16:00"},
    ]},
  J: { teams: ["Argentina","Argelia","Austria","Jordania"],
    matches: [
      {home:0,away:1,date:"Mar 16/6",time:"22:00"},{home:2,away:3,date:"Mié 17/6",time:"01:00"},
      {home:0,away:2,date:"Lun 22/6",time:"14:00"},{home:3,away:1,date:"Mar 23/6",time:"00:00"},
      {home:3,away:0,date:"Sáb 27/6",time:"23:00"},{home:1,away:2,date:"Sáb 27/6",time:"23:00"},
    ]},
  K: { teams: ["Portugal","Uzbekistán","Colombia","R.D. del Congo"],
    matches: [
      {home:0,away:3,date:"Mié 17/6",time:"14:00"},{home:1,away:2,date:"Mié 17/6",time:"23:00"},
      {home:0,away:1,date:"Mar 23/6",time:"14:00"},{home:2,away:3,date:"Mar 23/6",time:"23:00"},
      {home:2,away:0,date:"Sáb 27/6",time:"20:30"},{home:3,away:1,date:"Sáb 27/6",time:"20:30"},
    ]},
  L: { teams: ["Inglaterra","Croacia","Ghana","Panamá"],
    matches: [
      {home:0,away:1,date:"Mié 17/6",time:"17:00"},{home:2,away:3,date:"Mié 17/6",time:"20:00"},
      {home:0,away:2,date:"Mar 23/6",time:"17:00"},{home:3,away:1,date:"Mar 23/6",time:"20:00"},
      {home:3,away:0,date:"Sáb 27/6",time:"18:00"},{home:1,away:2,date:"Sáb 27/6",time:"18:00"},
    ]},
};

function calcStandings(gKey, scores) {
  const { teams, matches } = GROUPS_DATA[gKey];
  const st = teams.map((t) => ({ name: t, pts: 0, pj: 0, gf: 0, gc: 0 }));
  matches.forEach((m, idx) => {
    const sc = scores[`${gKey}-${idx}`];
    if (!sc || sc.h === "" || sc.a === "") return;
    const h = parseInt(sc.h), a = parseInt(sc.a);
    if (isNaN(h) || isNaN(a)) return;
    st[m.home].pj++; st[m.away].pj++;
    st[m.home].gf += h; st[m.home].gc += a;
    st[m.away].gf += a; st[m.away].gc += h;
    if (h > a) st[m.home].pts += 3;
    else if (h < a) st[m.away].pts += 3;
    else { st[m.home].pts++; st[m.away].pts++; }
  });
  return st.map((t) => ({ ...t, gd: t.gf - t.gc }))
    .sort((a, b) => b.pts - a.pts || b.gd - a.gd || b.gf - a.gf);
}

function ScoreInput({ value, onChange }) {
  return (
    <input
      type="number" min="0" max="99"
      value={value} onChange={(e) => onChange(e.target.value)}
      placeholder="–"
      style={{
        width: 46, height: 38,
        background: value !== "" ? "#14532d" : "#0a1628",
        border: value !== "" ? "2px solid #22c55e" : "2px solid #334155",
        borderRadius: 8,
        color: value !== "" ? "#ffffff" : "#64748b",
        textAlign: "center", fontSize: 20, fontWeight: 900,
        outline: "none", fontFamily: "monospace", transition: "all 0.15s",
      }}
    />
  );
}

const ROUND_LABELS = ["Jornada 1", "Jornada 2", "Jornada 3"];

function GroupCard({ gKey, scores, onScore }) {
  const { teams, matches } = GROUPS_DATA[gKey];
  const standings = calcStandings(gKey, scores);
  const anyPlayed = matches.some((_, i) => { const s = scores[`${gKey}-${i}`]; return s && s.h !== "" && s.a !== ""; });
  const playedCount = matches.filter((_, i) => { const s = scores[`${gKey}-${i}`]; return s && s.h !== "" && s.a !== ""; }).length;

  return (
    <div style={{
      background: "linear-gradient(160deg,#0d1f3c 0%,#081020 100%)",
      borderRadius: 14, border: "1px solid #1e3a5f",
      overflow: "hidden", boxShadow: "0 6px 24px rgba(0,0,0,0.6)",
    }}>
      {/* Header */}
      <div style={{
        background: "linear-gradient(90deg,#14532d,#166534)",
        padding: "10px 16px", display: "flex", alignItems: "center",
      }}>
        <span style={{ fontSize: 22, fontWeight: 900, color: "#fde68a", letterSpacing: 2, fontFamily: "Georgia,serif" }}>
          GRUPO {gKey}
        </span>
        <span style={{ marginLeft: "auto", fontSize: 13, color: "#ffffff", fontFamily: "monospace", fontWeight: 700 }}>
          {playedCount}/6 ⚽
        </span>
      </div>

      <div style={{ padding: "12px 12px 14px" }}>
        {[0, 1, 2].map((rnd) => (
          <div key={rnd} style={{ marginBottom: 10 }}>
            {/* Jornada label */}
            <div style={{
              fontSize: 11, color: "#94a3b8", fontFamily: "monospace",
              letterSpacing: 2, textTransform: "uppercase", fontWeight: 700,
              borderBottom: "1px solid #1e3a5f", paddingBottom: 4, marginBottom: 6,
            }}>
              — {ROUND_LABELS[rnd]} —
            </div>

            {[rnd*2, rnd*2+1].map((mIdx) => {
              const m = matches[mIdx];
              const key = `${gKey}-${mIdx}`;
              const sc = scores[key] || { h: "", a: "" };
              const has = sc.h !== "" && sc.a !== "";
              const hv = parseInt(sc.h), av = parseInt(sc.a);
              const homeWin = has && hv > av;
              const awayWin = has && av > hv;

              return (
                <div key={mIdx} style={{
                  display: "grid",
                  gridTemplateColumns: "52px 1fr auto 1fr",
                  alignItems: "center", gap: 6,
                  padding: "6px 6px", borderRadius: 8, marginBottom: 4,
                  background: has ? "rgba(34,197,94,0.1)" : "rgba(255,255,255,0.03)",
                  border: has ? "1px solid rgba(34,197,94,0.15)" : "1px solid transparent",
                }}>
                  {/* Fecha y hora */}
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: 10, color: "#cbd5e1", fontFamily: "monospace", lineHeight: 1.5, fontWeight: 600 }}>{m.date}</div>
                    <div style={{ fontSize: 12, color: "#fde68a", fontFamily: "monospace", fontWeight: 900, lineHeight: 1.4 }}>{m.time}</div>
                  </div>

                  {/* Local */}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 6, minWidth: 0 }}>
                    <span style={{
                      fontSize: 13, fontWeight: homeWin ? 900 : 600,
                      color: homeWin ? "#fde68a" : "#ffffff",
                      whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
                      fontFamily: "system-ui,sans-serif",
                    }}>{teams[m.home]}</span>
                    <Flag team={teams[m.home]} size={22} />
                  </div>

                  {/* Marcador */}
                  <div style={{ display: "flex", alignItems: "center", gap: 4, flexShrink: 0 }}>
                    <ScoreInput value={sc.h} onChange={(v) => onScore(key, "h", v)} />
                    <span style={{ color: "#64748b", fontSize: 20, fontWeight: 900 }}>:</span>
                    <ScoreInput value={sc.a} onChange={(v) => onScore(key, "a", v)} />
                  </div>

                  {/* Visitante */}
                  <div style={{ display: "flex", alignItems: "center", gap: 6, minWidth: 0 }}>
                    <Flag team={teams[m.away]} size={22} />
                    <span style={{
                      fontSize: 13, fontWeight: awayWin ? 900 : 600,
                      color: awayWin ? "#fde68a" : "#ffffff",
                      whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
                      fontFamily: "system-ui,sans-serif",
                    }}>{teams[m.away]}</span>
                  </div>
                </div>
              );
            })}
          </div>
        ))}

        {/* Tabla de posiciones */}
        <div style={{ borderTop: "1px solid #1e3a5f", paddingTop: 10, marginTop: 4 }}>
          <div style={{ fontSize: 11, color: "#94a3b8", fontFamily: "monospace", letterSpacing: 2, textTransform: "uppercase", marginBottom: 8, fontWeight: 700 }}>
            — Posiciones —
          </div>
          {/* Cabecera */}
          <div style={{
            display: "grid", gridTemplateColumns: "22px 1fr 30px 30px 30px 36px 38px",
            gap: 2, marginBottom: 4, padding: "0 4px",
          }}>
            {["","","PJ","GF","GC","DG","Pts"].map((h, i) => (
              <span key={i} style={{
                fontSize: 11, color: "#94a3b8", textAlign: i > 1 ? "center" : "left",
                fontFamily: "monospace", fontWeight: 700,
              }}>{h}</span>
            ))}
          </div>
          {standings.map((team, idx) => {
            const q = anyPlayed && idx < 2;
            return (
              <div key={team.name} style={{
                display: "grid",
                gridTemplateColumns: "22px 1fr 30px 30px 30px 36px 38px",
                gap: 2, alignItems: "center",
                padding: "5px 4px", borderRadius: 7,
                background: q ? "rgba(34,197,94,0.12)" : idx % 2 === 0 ? "rgba(255,255,255,0.03)" : "transparent",
                marginBottom: 2,
              }}>
                <span style={{
                  width: 18, height: 18, borderRadius: "50%",
                  background: q ? "#16a34a" : "#1e293b",
                  fontSize: 10, display: "inline-flex", alignItems: "center",
                  justifyContent: "center", color: "#ffffff",
                  fontWeight: 900, fontFamily: "monospace",
                }}>{idx+1}</span>
                <div style={{ display: "flex", alignItems: "center", gap: 5, minWidth: 0 }}>
                  <Flag team={team.name} size={18} />
                  <span style={{
                    fontSize: 13, color: q ? "#86efac" : "#ffffff",
                    fontWeight: q ? 700 : 500, fontFamily: "system-ui,sans-serif",
                    whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
                  }}>{team.name}</span>
                </div>
                <span style={{ fontSize: 13, textAlign: "center", color: "#ffffff", fontFamily: "monospace", fontWeight: 600 }}>{team.pj}</span>
                <span style={{ fontSize: 13, textAlign: "center", color: "#ffffff", fontFamily: "monospace", fontWeight: 600 }}>{team.gf}</span>
                <span style={{ fontSize: 13, textAlign: "center", color: "#ffffff", fontFamily: "monospace", fontWeight: 600 }}>{team.gc}</span>
                <span style={{
                  fontSize: 13, textAlign: "center", fontFamily: "monospace", fontWeight: 700,
                  color: team.gd > 0 ? "#4ade80" : team.gd < 0 ? "#f87171" : "#94a3b8",
                }}>{team.gd > 0 ? `+${team.gd}` : team.gd}</span>
                <span style={{
                  fontSize: 18, textAlign: "center", color: "#fde68a",
                  fontFamily: "monospace", fontWeight: 900,
                }}>{team.pts}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const STORAGE_KEY = "mundial2026-scores";

function loadScores() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return {};
  return JSON.parse(saved);
}

export default function App() {
  const [scores, setScores] = useState(loadScores);

  // Guarda en localStorage cada vez que cambian los scores
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(scores));
  }, [scores]);

  const onScore = (key, side, val) =>
    setScores((p) => ({ ...p, [key]: { ...(p[key] || { h: "", a: "" }), [side]: val } }));

  const played = Object.values(scores).filter((v) => v.h !== "" && v.a !== "").length;

  const handleReset = () => {
    if (confirm("¿Resetear todos los resultados?")) {
      setScores({});
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  return (
    <div style={{ minHeight:"100vh", background:"#050d1a", paddingBottom:48 }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap');
        input[type=number]::-webkit-inner-spin-button,
        input[type=number]::-webkit-outer-spin-button { -webkit-appearance: none; }
        input[type=number] { -moz-appearance: textfield; }
        input:focus { border-color: #22c55e !important; box-shadow: 0 0 0 3px rgba(34,197,94,.25); }
        * { box-sizing: border-box; }
      `}</style>

      {/* HEADER */}
      <div style={{
        background:"linear-gradient(180deg,#041a0d 0%,#050d1a 100%)",
        borderBottom:"1px solid #14532d",
        padding:"28px 16px 22px", textAlign:"center", position:"relative",
      }}>
        <div style={{
          position:"absolute", inset:0,
          backgroundImage:"radial-gradient(ellipse at 25% 60%,rgba(34,197,94,.08) 0%,transparent 55%), radial-gradient(ellipse at 78% 15%,rgba(251,191,36,.05) 0%,transparent 45%)",
        }}/>
        <div style={{ position:"relative" }}>
          <div style={{ fontSize:12, letterSpacing:5, color:"#4ade80", fontFamily:"monospace", marginBottom:6, textTransform:"uppercase", fontWeight:700 }}>
            ⚽ Fixture Oficial · Fase de Grupos
          </div>
          <h1 style={{
            margin:"0 0 6px", fontSize:36,
            fontFamily:"'DM Serif Display',Georgia,serif",
            background:"linear-gradient(135deg,#fbbf24,#fef3c7)",
            WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent",
          }}>Copa Mundial FIFA 2026</h1>
          <div style={{ fontSize:14, color:"#e2e8f0", fontFamily:"monospace", marginBottom:4, fontWeight:600 }}>
            🇺🇸 EE.UU. · 🇲🇽 México · 🇨🇦 Canadá &nbsp;|&nbsp; 11 – 27 junio
          </div>
          <div style={{ fontSize:12, color:"#94a3b8", fontFamily:"monospace", marginBottom:18 }}>
            ⏰ Horarios hora Argentina · ET +3h · Col/Per +2h · Chi +1h · Méx +1h
          </div>

          {/* Barra de progreso */}
          <div style={{ maxWidth:320, margin:"0 auto 10px" }}>
            <div style={{ display:"flex", justifyContent:"space-between", marginBottom:5 }}>
              <span style={{ fontSize:12, color:"#94a3b8", fontFamily:"monospace", textTransform:"uppercase", letterSpacing:1 }}>Partidos cargados</span>
              <span style={{ fontSize:13, color:"#fde68a", fontFamily:"monospace", fontWeight:900 }}>{played} / 72</span>
            </div>
            <div style={{ height:6, background:"#0a1628", borderRadius:3, overflow:"hidden" }}>
              <div style={{
                height:"100%", width:`${(played/72)*100}%`,
                background:"linear-gradient(90deg,#16a34a,#4ade80)",
                borderRadius:3, transition:"width .3s",
              }}/>
            </div>
          </div>

          <button onClick={handleReset} style={{
            background:"transparent", border:"1px solid #334155",
            color:"#94a3b8", fontSize:11, padding:"5px 16px",
            borderRadius:20, cursor:"pointer",
            fontFamily:"monospace", letterSpacing:1, textTransform:"uppercase",
          }}>↺ Resetear todo</button>
        </div>
      </div>

      {/* GRUPOS */}
      <div style={{
        maxWidth:1400, margin:"0 auto",
        padding:"20px 14px 0",
        display:"grid",
        gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))",
        gap:16,
      }}>
        {Object.keys(GROUPS_DATA).map((gKey) => (
          <GroupCard key={gKey} gKey={gKey} scores={scores} onScore={onScore} />
        ))}
      </div>

      <div style={{ textAlign:"center", marginTop:20, padding:"0 16px" }}>
        <span style={{ fontSize:12, color:"#64748b", fontFamily:"monospace" }}>
          🟢 Top 2 de cada grupo clasifican directamente · ⭐ Los 8 mejores terceros también avanzan
        </span>
      </div>
    </div>
  );
}