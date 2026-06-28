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

function getQualifiedData(scores) {
  const groupKeys = Object.keys(GROUPS_DATA);
  const firstAndSecond = [];
  const thirdPlaces = [];

  groupKeys.forEach((gKey) => {
    const table = calcStandings(gKey, scores);
    firstAndSecond.push(
      { group: gKey, pos: 1, ...table[0] },
      { group: gKey, pos: 2, ...table[1] }
    );
    thirdPlaces.push({ group: gKey, pos: 3, ...table[2] });
  });

  const bestThirds = [...thirdPlaces]
    .sort((a, b) => b.pts - a.pts || b.gd - a.gd || b.gf - a.gf)
    .slice(0, 8)
    .map((t, idx) => ({ ...t, rank: idx + 1 }));

  return { firstAndSecond, bestThirds, thirdPlaces };
}

const ROUND_32_SLOTS = [
  { home: "A1", away: "T8" },
  { home: "B1", away: "T7" },
  { home: "C1", away: "T6" },
  { home: "D1", away: "T5" },
  { home: "E1", away: "T4" },
  { home: "F1", away: "T3" },
  { home: "G1", away: "T2" },
  { home: "H1", away: "T1" },
  { home: "I1", away: "L2" },
  { home: "J1", away: "K2" },
  { home: "K1", away: "J2" },
  { home: "L1", away: "I2" },
  { home: "A2", away: "H2" },
  { home: "B2", away: "G2" },
  { home: "C2", away: "F2" },
  { home: "D2", away: "E2" },
];

function parseLoadedScore(scores, key) {
  const sc = scores[key];
  if (!sc || sc.h === "" || sc.a === "") return null;
  const h = parseInt(sc.h, 10);
  const a = parseInt(sc.a, 10);
  if (isNaN(h) || isNaN(a)) return null;
  return { h, a };
}

function isPendingTeamName(name) {
  return !name || name.startsWith("Ganador ") || name === "Por definir";
}

function getMatchWinner(score, homeTeam, awayTeam) {
  if (!score || isPendingTeamName(homeTeam) || isPendingTeamName(awayTeam) || score.h === score.a) return null;
  return score.h > score.a ? homeTeam : awayTeam;
}

function createKnockoutMatch(label, scoreKey, homeTeam, awayTeam, scores) {
  const score = parseLoadedScore(scores, scoreKey);
  const winner = getMatchWinner(score, homeTeam, awayTeam);
  return {
    label,
    scoreKey,
    homeTeam: homeTeam || "Por definir",
    awayTeam: awayTeam || "Por definir",
    score,
    winner,
  };
}

function getKnockoutData(scores, firstAndSecond, bestThirds) {
  const slotToTeam = {};
  firstAndSecond.forEach((team) => {
    slotToTeam[`${team.group}${team.pos}`] = team.name;
  });
  bestThirds.forEach((team) => {
    slotToTeam[`T${team.rank}`] = team.name;
  });

  const roundOf32 = ROUND_32_SLOTS.map((slot, idx) =>
    createKnockoutMatch(
      `16avos ${idx + 1}`,
      `KO-R32-${idx}`,
      slotToTeam[slot.home],
      slotToTeam[slot.away],
      scores
    )
  );

  const roundOf16 = Array.from({ length: 8 }, (_, idx) => {
    const m1 = roundOf32[idx * 2];
    const m2 = roundOf32[idx * 2 + 1];
    return createKnockoutMatch(
      `Octavos ${idx + 1}`,
      `KO-R16-${idx}`,
      m1.winner || `Ganador ${m1.label}`,
      m2.winner || `Ganador ${m2.label}`,
      scores
    );
  });

  const quarterFinals = Array.from({ length: 4 }, (_, idx) => {
    const m1 = roundOf16[idx * 2];
    const m2 = roundOf16[idx * 2 + 1];
    return createKnockoutMatch(
      `Cuartos ${idx + 1}`,
      `KO-QF-${idx}`,
      m1.winner || `Ganador ${m1.label}`,
      m2.winner || `Ganador ${m2.label}`,
      scores
    );
  });

  const semiFinals = Array.from({ length: 2 }, (_, idx) => {
    const m1 = quarterFinals[idx * 2];
    const m2 = quarterFinals[idx * 2 + 1];
    return createKnockoutMatch(
      `Semifinal ${idx + 1}`,
      `KO-SF-${idx}`,
      m1.winner || `Ganador ${m1.label}`,
      m2.winner || `Ganador ${m2.label}`,
      scores
    );
  });

  const final = [
    createKnockoutMatch(
      "Final",
      "KO-FINAL-0",
      semiFinals[0].winner || `Ganador ${semiFinals[0].label}`,
      semiFinals[1].winner || `Ganador ${semiFinals[1].label}`,
      scores
    ),
  ];

  const champion = final[0].winner;

  return { roundOf32, roundOf16, quarterFinals, semiFinals, final, champion };
}

function KnockoutMatchCard({ match, onScore }) {
  const sc = match.score || { h: "", a: "" };
  const has = match.score && sc.h !== "" && sc.a !== "";
  const homeWin = has && sc.h > sc.a;
  const awayWin = has && sc.a > sc.h;
  const draw = has && sc.h === sc.a;

  return (
    <div style={{
      background: "rgba(255,255,255,0.03)",
      border: "1px solid rgba(148,163,184,0.18)",
      borderRadius: 10,
      padding: 10,
    }}>
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 8,
      }}>
        <span style={{ color: "#fde68a", fontFamily: "monospace", fontWeight: 800, fontSize: 12 }}>{match.label}</span>
        {match.winner && <span style={{ color: "#86efac", fontFamily: "monospace", fontWeight: 700, fontSize: 11 }}>Clasifica</span>}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 8, alignItems: "center", marginBottom: 6 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6, minWidth: 0 }}>
          <Flag team={isPendingTeamName(match.homeTeam) ? null : match.homeTeam} size={18} />
          <span style={{ color: homeWin ? "#fde68a" : "#ffffff", fontWeight: homeWin ? 800 : 600, fontSize: 13, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            {match.homeTeam}
          </span>
        </div>
        <ScoreInput value={sc.h} onChange={(v) => onScore(match.scoreKey, "h", v)} />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 8, alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6, minWidth: 0 }}>
          <Flag team={isPendingTeamName(match.awayTeam) ? null : match.awayTeam} size={18} />
          <span style={{ color: awayWin ? "#fde68a" : "#ffffff", fontWeight: awayWin ? 800 : 600, fontSize: 13, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            {match.awayTeam}
          </span>
        </div>
        <ScoreInput value={sc.a} onChange={(v) => onScore(match.scoreKey, "a", v)} />
      </div>

      {draw && (
        <div style={{ marginTop: 8, color: "#fca5a5", fontSize: 11, fontFamily: "monospace" }}>
          En eliminación directa no puede haber empate.
        </div>
      )}
    </div>
  );
}

function BracketMatchSlot({ match, onScore, connector }) {
  const lineColor = "rgba(148,163,184,0.55)";

  return (
    <div style={{ position: "relative" }}>
      <KnockoutMatchCard match={match} onScore={onScore} />

      {connector && (
        <>
          <div style={{
            position: "absolute",
            right: -18,
            top: "50%",
            width: 18,
            height: 2,
            background: lineColor,
            transform: "translateY(-50%)",
          }} />
          <div style={{
            position: "absolute",
            right: -18,
            width: 2,
            height: 54,
            background: lineColor,
            top: connector === "top" ? "50%" : undefined,
            bottom: connector === "bottom" ? "50%" : undefined,
          }} />
        </>
      )}
    </div>
  );
}

function KnockoutBracketColumn({ title, matches, onScore, topOffset = 0, gap = 8, cardMinWidth = 260, showConnectors = false }) {
  return (
    <div style={{ marginTop: topOffset, minWidth: cardMinWidth }}>
      <div style={{
        fontSize: 12,
        color: "#94a3b8",
        fontFamily: "monospace",
        letterSpacing: 1,
        textTransform: "uppercase",
        marginBottom: 8,
        fontWeight: 700,
      }}>
        {title}
      </div>

      <div style={{ display: "grid", gap }}>
        {matches.map((match, idx) => (
          <BracketMatchSlot
            key={match.scoreKey}
            match={match}
            onScore={onScore}
            connector={showConnectors ? (idx % 2 === 0 ? "top" : "bottom") : null}
          />
        ))}
      </div>
    </div>
  );
}

function countPlayedGroupMatches(scores) {
  let count = 0;
  Object.keys(GROUPS_DATA).forEach((gKey) => {
    GROUPS_DATA[gKey].matches.forEach((_, idx) => {
      const sc = scores[`${gKey}-${idx}`];
      if (sc && sc.h !== "" && sc.a !== "") count += 1;
    });
  });
  return count;
}

const TOURNAMENT_FLOW = [
  "48 equipos",
  "12 grupos de 4",
  "Clasifican: 12 primeros · 12 segundos · 8 mejores terceros",
  "32 equipos",
  "16avos de final (32 → 16)",
  "Octavos de final (16 → 8)",
  "Cuartos de final (8 → 4)",
  "Semifinales (4 → 2)",
  "Final (2 → Campeón)",
];

function TournamentFlowCard() {
  return (
    <div style={{
      maxWidth: 1400,
      margin: "18px auto 0",
      padding: "0 14px",
    }}>
      <div style={{
        background: "linear-gradient(160deg,#0d1f3c 0%,#081020 100%)",
        borderRadius: 14,
        border: "1px solid #1e3a5f",
        boxShadow: "0 6px 24px rgba(0,0,0,0.6)",
        overflow: "hidden",
      }}>
        <div style={{
          background: "linear-gradient(90deg,#0f766e,#0e7490)",
          padding: "10px 16px",
          fontSize: 18,
          fontWeight: 800,
          color: "#ccfbf1",
          letterSpacing: 1,
          fontFamily: "Georgia,serif",
        }}>
          Formato del Torneo
        </div>

        <div style={{
          padding: "16px 12px",
          display: "grid",
          justifyContent: "center",
          gap: 4,
        }}>
          {TOURNAMENT_FLOW.map((step, idx) => (
            <div key={step} style={{ display: "grid", justifyItems: "center", gap: 6 }}>
              <div style={{
                minWidth: 320,
                maxWidth: 540,
                textAlign: "center",
                border: "1px solid #1e3a5f",
                background: idx >= 4 ? "rgba(127,29,29,0.18)" : "rgba(34,197,94,0.10)",
                borderRadius: 10,
                padding: "8px 12px",
                color: "#e2e8f0",
                fontFamily: "monospace",
                fontWeight: 700,
                fontSize: 13,
              }}>
                {step}
              </div>
              {idx < TOURNAMENT_FLOW.length - 1 && (
                <div style={{ color: "#94a3b8", fontFamily: "monospace", fontWeight: 800 }}>▼</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ScoreInput({ value, onChange }) {
  const handleChange = (e) => {
    const v = e.target.value;
    // Permitir solo números o vacío
    if (v === "" || /^\d+$/.test(v)) {
      // Limitar a máximo 2 dígitos (0-99)
      if (v === "" || parseInt(v) <= 99) {
        onChange(v);
      }
    }
  };

  return (
    <input
      type="text" inputMode="numeric"
      value={value} onChange={handleChange}
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

  const played = countPlayedGroupMatches(scores);
  const { firstAndSecond, bestThirds } = getQualifiedData(scores);
  const { roundOf32, roundOf16, quarterFinals, semiFinals, final, champion } = getKnockoutData(scores, firstAndSecond, bestThirds);

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

      {/* RESUMEN DE CLASIFICADOS */}
      <div style={{ maxWidth: 1400, margin: "18px auto 0", padding: "0 14px" }}>
        <div style={{
          background: "linear-gradient(160deg,#0d1f3c 0%,#081020 100%)",
          borderRadius: 14,
          border: "1px solid #1e3a5f",
          boxShadow: "0 6px 24px rgba(0,0,0,0.6)",
          overflow: "hidden",
        }}>
          <div style={{
            background: "linear-gradient(90deg,#14532d,#166534)",
            padding: "10px 16px",
            fontSize: 18,
            fontWeight: 800,
            color: "#fde68a",
            letterSpacing: 1,
            fontFamily: "Georgia,serif",
          }}>
            Clasificados de Fase de Grupos
          </div>

          <div style={{ padding: "12px" }}>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(270px,1fr))",
              gap: 12,
            }}>
              <div style={{
                border: "1px solid #1e3a5f",
                borderRadius: 10,
                padding: 10,
                background: "rgba(255,255,255,0.02)",
              }}>
                <div style={{
                  fontSize: 12,
                  color: "#94a3b8",
                  fontFamily: "monospace",
                  letterSpacing: 1,
                  textTransform: "uppercase",
                  marginBottom: 8,
                  fontWeight: 700,
                }}>
                  1ros y 2dos de cada grupo
                </div>

                {firstAndSecond.map((team) => (
                  <div key={`${team.group}-${team.pos}-${team.name}`} style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "6px 0",
                    borderBottom: "1px solid rgba(148,163,184,0.12)",
                  }}>
                    <span style={{
                      width: 20,
                      textAlign: "center",
                      color: "#86efac",
                      fontWeight: 800,
                      fontFamily: "monospace",
                      fontSize: 12,
                    }}>
                      {team.group}{team.pos}
                    </span>
                    <Flag team={team.name} size={18} />
                    <span style={{ color: "#ffffff", fontSize: 13, fontWeight: 600, minWidth: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                      {team.name}
                    </span>
                    <span style={{ marginLeft: "auto", color: "#fde68a", fontFamily: "monospace", fontWeight: 800, fontSize: 12 }}>
                      {team.pts} pts
                    </span>
                  </div>
                ))}
              </div>

              <div style={{
                border: "1px solid #1e3a5f",
                borderRadius: 10,
                padding: 10,
                background: "rgba(255,255,255,0.02)",
              }}>
                <div style={{
                  fontSize: 12,
                  color: "#94a3b8",
                  fontFamily: "monospace",
                  letterSpacing: 1,
                  textTransform: "uppercase",
                  marginBottom: 8,
                  fontWeight: 700,
                }}>
                  Ranking mejores terceros (Top 8)
                </div>

                {bestThirds.map((team) => (
                  <div key={`third-${team.group}-${team.name}`} style={{
                    display: "grid",
                    gridTemplateColumns: "24px 1fr 34px 34px 40px",
                    alignItems: "center",
                    gap: 6,
                    padding: "6px 0",
                    borderBottom: "1px solid rgba(148,163,184,0.12)",
                  }}>
                    <span style={{ color: "#86efac", fontWeight: 800, fontFamily: "monospace", fontSize: 12 }}>{team.rank}</span>
                    <div style={{ display: "flex", alignItems: "center", gap: 6, minWidth: 0 }}>
                      <Flag team={team.name} size={18} />
                      <span style={{ color: "#ffffff", fontSize: 13, fontWeight: 600, minWidth: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                        {team.group}3 {team.name}
                      </span>
                    </div>
                    <span style={{ color: "#fde68a", fontFamily: "monospace", fontWeight: 800, fontSize: 12, textAlign: "center" }}>{team.pts}</span>
                    <span style={{ color: "#e2e8f0", fontFamily: "monospace", fontWeight: 700, fontSize: 12, textAlign: "center" }}>{team.gf}</span>
                    <span style={{
                      color: team.gd > 0 ? "#4ade80" : team.gd < 0 ? "#f87171" : "#94a3b8",
                      fontFamily: "monospace",
                      fontWeight: 700,
                      fontSize: 12,
                      textAlign: "center",
                    }}>
                      {team.gd > 0 ? `+${team.gd}` : team.gd}
                    </span>
                  </div>
                ))}

                <div style={{ marginTop: 8, color: "#94a3b8", fontFamily: "monospace", fontSize: 11 }}>
                  Orden: Pts, DG, GF.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <TournamentFlowCard />

      {/* FASE ELIMINATORIA */}
      <div style={{ maxWidth: 1400, margin: "18px auto 0", padding: "0 14px" }}>
        <div style={{
          background: "linear-gradient(160deg,#0d1f3c 0%,#081020 100%)",
          borderRadius: 14,
          border: "1px solid #1e3a5f",
          boxShadow: "0 6px 24px rgba(0,0,0,0.6)",
          overflow: "hidden",
        }}>
          <div style={{
            background: "linear-gradient(90deg,#7f1d1d,#991b1b)",
            padding: "10px 16px",
            fontSize: 18,
            fontWeight: 800,
            color: "#fde68a",
            letterSpacing: 1,
            fontFamily: "Georgia,serif",
          }}>
            Fase Eliminatoria
          </div>

          <div style={{ padding: 12 }}>
            <div style={{
              border: "1px solid #1e3a5f",
              borderRadius: 10,
              background: "rgba(255,255,255,0.02)",
              padding: 10,
              overflowX: "auto",
            }}>
              <div style={{
                minWidth: 1500,
                display: "grid",
                gridTemplateColumns: "280px 280px 280px 280px 280px",
                gap: 26,
                alignItems: "start",
              }}>
                <KnockoutBracketColumn title="16avos" matches={roundOf32} onScore={onScore} topOffset={0} gap={8} showConnectors />
                <KnockoutBracketColumn title="Octavos" matches={roundOf16} onScore={onScore} topOffset={26} gap={34} showConnectors />
                <KnockoutBracketColumn title="Cuartos" matches={quarterFinals} onScore={onScore} topOffset={70} gap={84} showConnectors />
                <KnockoutBracketColumn title="Semifinales" matches={semiFinals} onScore={onScore} topOffset={155} gap={170} showConnectors />
                <KnockoutBracketColumn title="Final" matches={final} onScore={onScore} topOffset={255} gap={8} />
              </div>
            </div>

            <div style={{
              border: "1px solid #1e3a5f",
              borderRadius: 10,
              padding: "12px 14px",
              background: champion ? "linear-gradient(90deg,rgba(250,204,21,0.12),rgba(34,197,94,0.12))" : "rgba(255,255,255,0.02)",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}>
              <span style={{ fontSize: 13, color: "#94a3b8", fontFamily: "monospace", textTransform: "uppercase", letterSpacing: 1 }}>
                Campeón proyectado
              </span>
              {champion ? (
                <>
                  <Flag team={champion} size={20} />
                  <span style={{ color: "#fde68a", fontWeight: 900, fontSize: 16 }}>{champion}</span>
                </>
              ) : (
                <span style={{ color: "#cbd5e1", fontSize: 14, fontWeight: 600 }}>Completa resultados hasta la final</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}