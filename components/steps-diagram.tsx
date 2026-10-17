// "Many into one": the problem (scattered rings), the fix (one tidy pipe of rings),
// then sorted (neat rows in orange). Built from the site's one shape, the ring.
// Positions come from a fixed formula, so the drawing is the same on every visit.

function scatter(n: number) {
  const pts: { x: number; y: number }[] = [];
  for (let i = 0; i < n; i++) {
    const a = Math.sin(i * 12.9898) * 43758.5453;
    const b = Math.sin(i * 78.233) * 12345.6789;
    pts.push({ x: 20 + (a - Math.floor(a)) * 300, y: 22 + (b - Math.floor(b)) * 176 });
  }
  return pts;
}

export function StepsDiagram({ vertical = false }: { vertical?: boolean }) {
  const loose = scatter(46);
  const ribbon: { x: number; y: number }[] = [];
  for (let c = 0; c < 14; c++) for (let r = 0; r < 3; r++) ribbon.push({ x: 360 + c * 20, y: 90 + r * 20 });
  const rows: { x: number; y: number }[] = [];
  for (let c = 0; c < 8; c++) for (let r = 0; r < 6; r++) rows.push({ x: 690 + c * 32, y: 30 + r * 32 });

  const all = [
    ...loose.map((p, i) => ({ ...p, c: i % 2 ? "var(--surface-strong)" : "var(--primary-tint)" })),
    ...ribbon.map((p) => ({ ...p, c: "var(--border-strong)" })),
    ...rows.map((p) => ({ ...p, c: "var(--primary)" })),
  ];

  return (
    <svg
      viewBox={vertical ? "0 0 220 960" : "0 0 960 220"}
      className="block h-auto w-full"
      role="img"
      aria-label="Scattered rings become one neat pipe, then tidy orange rows: your problem, our fix, sorted."
    >
      {all.map((p, i) => (
        <circle
          key={i}
          cx={vertical ? p.y : p.x}
          cy={vertical ? p.x : p.y}
          r="6.5"
          fill="none"
          stroke={p.c}
          strokeWidth="4"
        />
      ))}
    </svg>
  );
}
