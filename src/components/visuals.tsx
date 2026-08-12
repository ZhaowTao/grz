import type { ReactNode } from "react";

/* ------------------------------------------------------------------ *
 * Self-contained SVG / CSS visuals — no external image dependencies.
 * All themed for a data / AI resume (dark, neon, analytical motifs).
 * ------------------------------------------------------------------ */

const C = {
  bg: "#0C0C0C",
  line: "#263043",
  dim: "#3A465C",
  cyan: "#22D3EE",
  blue: "#3B82F6",
  violet: "#8B5CF6",
  fuchsia: "#E23FB5",
  orange: "#FB923C",
  mint: "#34D399",
  text: "#D7E2EA",
};

/* ----------------------------- Hero portrait ----------------------------- */
export function PortraitVisual({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 480 600" className={className} role="img" aria-label="赵文涛 数据主题头像">
      <defs>
        <linearGradient id="pvBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0E1726" />
          <stop offset="1" stopColor="#05070D" />
        </linearGradient>
        <radialGradient id="pvGlow" cx="0.5" cy="0.38" r="0.6">
          <stop offset="0" stopColor="#22D3EE" stopOpacity="0.45" />
          <stop offset="1" stopColor="#22D3EE" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="pvStroke" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#22D3EE" />
          <stop offset="0.5" stopColor="#8B5CF6" />
          <stop offset="1" stopColor="#E23FB5" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="480" height="600" rx="28" fill="url(#pvBg)" />
      <rect x="0" y="0" width="480" height="600" rx="28" fill="url(#pvGlow)" />

      {/* grid */}
      <g stroke={C.line} strokeWidth="1" opacity="0.5">
        {Array.from({ length: 11 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 48} y1="0" x2={i * 48} y2="600" />
        ))}
        {Array.from({ length: 13 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 48} x2="480" y2={i * 48} />
        ))}
      </g>

      {/* orbiting nodes */}
      <g>
        <circle cx="240" cy="240" r="150" fill="none" stroke="url(#pvStroke)" strokeWidth="1.5" opacity="0.6" />
        <circle cx="240" cy="240" r="110" fill="none" stroke="url(#pvStroke)" strokeWidth="1.5" opacity="0.4" />
        {[
          [240, 90], [390, 240], [240, 390], [90, 240], [346, 134], [134, 346], [346, 346], [134, 134],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 6 : 4} fill={i % 2 ? C.cyan : C.violet} />
        ))}
      </g>

      {/* monogram */}
      <text
        x="240"
        y="270"
        textAnchor="middle"
        fontFamily="'Noto Sans SC', sans-serif"
        fontWeight="900"
        fontSize="180"
        fill="url(#pvStroke)"
      >
        赵
      </text>
      <text x="240" y="330" textAnchor="middle" fontFamily="'Kanit', sans-serif" fontWeight="700" fontSize="26" letterSpacing="6" fill={C.text}>
        ZHAO WENTAO
      </text>

      {/* bottom ticker */}
      <g transform="translate(40,470)">
        <rect x="0" y="0" width="400" height="64" rx="14" fill="#0B1220" stroke={C.line} />
        <text x="20" y="28" fontFamily="'Kanit', sans-serif" fontSize="14" fill={C.cyan}>
          DATA · AI · PRODUCT
        </text>
        <text x="20" y="50" fontFamily="'Noto Sans SC', sans-serif" fontSize="13" fill={C.text} opacity="0.7">
          数据科学与大数据技术 · 本科（2026 届）
        </text>
      </g>
    </svg>
  );
}

/* ----------------------------- Marquee cards ----------------------------- */
const cardBg = "linear-gradient(145deg,#0E1626 0%,#0A0F1C 100%)";

function CardFrame({ children, ring }: { children: ReactNode; ring: string }) {
  return (
    <div
      className="w-[420px] h-[270px] rounded-2xl flex-shrink-0 overflow-hidden relative"
      style={{ background: cardBg, boxShadow: `inset 0 0 0 1px ${ring}` }}
    >
      {children}
    </div>
  );
}

function BarChart({ color }: { color: string }) {
  const bars = [40, 70, 55, 90, 65, 110, 85, 130];
  return (
    <svg viewBox="0 0 420 270" className="w-full h-full">
      <line x1="40" y1="210" x2="380" y2="210" stroke={C.line} />
      {bars.map((h, i) => (
        <rect key={i} x={50 + i * 40} y={210 - h} width="22" height={h} rx="4" fill={color} opacity={0.85} />
      ))}
      <text x="40" y="40" fontFamily="'Kanit'" fontSize="18" fill={C.text}>
        Growth
      </text>
    </svg>
  );
}

function AreaChart({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 420 270" className="w-full h-full">
      <defs>
        <linearGradient id="ag" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={color} stopOpacity="0.5" />
          <stop offset="1" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polyline points="30,200 90,150 150,170 210,90 270,120 330,60 390,90" fill="none" stroke={color} strokeWidth="3" />
      <polygon points="30,200 90,150 150,170 210,90 270,120 330,60 390,90 390,230 30,230" fill="url(#ag)" />
      <text x="30" y="40" fontFamily="'Kanit'" fontSize="18" fill={C.text}>
        Trend
      </text>
    </svg>
  );
}

function Donut({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 420 270" className="w-full h-full">
      <circle cx="210" cy="135" r="80" fill="none" stroke={C.line} strokeWidth="26" />
      <circle cx="210" cy="135" r="80" fill="none" stroke={color} strokeWidth="26" strokeDasharray="350 502" strokeLinecap="round" transform="rotate(-90 210 135)" />
      <text x="210" y="142" textAnchor="middle" fontFamily="'Kanit'" fontSize="34" fontWeight="800" fill={C.text}>
        70%
      </text>
      <text x="30" y="40" fontFamily="'Kanit'" fontSize="18" fill={C.text}>
        Split
      </text>
    </svg>
  );
}

function CodeBlock({ color }: { color: string }) {
  const lines = [120, 150, 90, 170, 110, 140, 100];
  return (
    <svg viewBox="0 0 420 270" className="w-full h-full">
      <text x="30" y="44" fontFamily="'Kanit'" fontSize="18" fill={C.text}>
        {"</> code"}
      </text>
      {lines.map((w, i) => (
        <rect key={i} x="40" y={70 + i * 26} width={w} height="10" rx="5" fill={i % 2 ? color : C.dim} opacity={0.9} />
      ))}
    </svg>
  );
}

function Neural({ color }: { color: string }) {
  const layer = (cx: number, ys: number[]) =>
    ys.map((y, i) => <circle key={`${cx}-${i}`} cx={cx} cy={y} r="9" fill={color} />);
  const links = (x1: number, x2: number, ys1: number[], ys2: number[]) =>
    ys1.flatMap((y1) => ys2.map((y2) => <line key={`${x1}-${x2}-${y1}-${y2}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke={C.line} strokeWidth="1" />));
  const a = [60, 130, 200], b = [50, 110, 170, 230], c = [80, 150, 220], d = [110, 190];
  return (
    <svg viewBox="0 0 420 270" className="w-full h-full">
      {links(70, 150, a, b)}
      {links(150, 240, b, c)}
      {links(240, 330, c, d)}
      {layer(70, a)}
      {layer(150, b)}
      {layer(240, c)}
      {layer(330, d)}
      <text x="30" y="40" fontFamily="'Kanit'" fontSize="18" fill={C.text}>
        Model
      </text>
    </svg>
  );
}

function Scatter({ color }: { color: string }) {
  const pts = [[80,180],[120,140],[160,160],[200,110],[240,150],[280,90],[320,130],[360,80],[140,200],[300,180]];
  return (
    <svg viewBox="0 0 420 270" className="w-full h-full">
      <line x1="50" y1="210" x2="380" y2="210" stroke={C.line} />
      <line x1="50" y1="40" x2="50" y2="210" stroke={C.line} />
      {pts.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="6" fill={color} opacity="0.8" />
      ))}
      <text x="30" y="40" fontFamily="'Kanit'" fontSize="18" fill={C.text}>
        Scatter
      </text>
    </svg>
  );
}

function Gauge({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 420 270" className="w-full h-full">
      <path d="M70 200 A 140 140 0 0 1 350 200" fill="none" stroke={C.line} strokeWidth="20" strokeLinecap="round" />
      <path d="M70 200 A 140 140 0 0 1 300 90" fill="none" stroke={color} strokeWidth="20" strokeLinecap="round" />
      <text x="210" y="170" textAnchor="middle" fontFamily="'Kanit'" fontSize="40" fontWeight="800" fill={C.text}>
        0.88
      </text>
      <text x="30" y="40" fontFamily="'Kanit'" fontSize="18" fill={C.text}>
        R²
      </text>
    </svg>
  );
}

function Network({ color }: { color: string }) {
  const nodes = [[90,90],[180,60],[300,100],[120,180],[260,200],[350,170],[200,140]];
  const edges = [[0,1],[1,2],[0,3],[3,4],[4,5],[1,6],[2,5],[6,3],[6,4]];
  return (
    <svg viewBox="0 0 420 270" className="w-full h-full">
      {edges.map(([a, b], i) => (
        <line key={i} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} stroke={C.line} strokeWidth="1.5" />
      ))}
      {nodes.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i === 6 ? 12 : 8} fill={i === 6 ? color : C.violet} />
      ))}
      <text x="30" y="40" fontFamily="'Kanit'" fontSize="18" fill={C.text}>
        Graph
      </text>
    </svg>
  );
}

function Waveform({ color }: { color: string }) {
  let d = "M20 135";
  for (let x = 20; x <= 400; x += 20) {
    const y = 135 + Math.sin(x / 22) * (30 + Math.sin(x / 9) * 24);
    d += ` L${x} ${y.toFixed(1)}`;
  }
  return (
    <svg viewBox="0 0 420 270" className="w-full h-full">
      <path d={d} fill="none" stroke={color} strokeWidth="3" />
      <text x="30" y="40" fontFamily="'Kanit'" fontSize="18" fill={C.text}>
        Signal
      </text>
    </svg>
  );
}

const GLYPHS = [
  (c: string) => <BarChart color={c} />,
  (c: string) => <AreaChart color={c} />,
  (c: string) => <Donut color={c} />,
  (c: string) => <CodeBlock color={c} />,
  (c: string) => <Neural color={c} />,
  (c: string) => <Scatter color={c} />,
  (c: string) => <Gauge color={c} />,
  (c: string) => <Network color={c} />,
  (c: string) => <Waveform color={c} />,
];

const RING_COLORS = [C.cyan, C.violet, C.fuchsia, C.blue, C.mint, C.orange, C.cyan, C.violet, C.fuchsia];

export function GlyphCard({ variant }: { variant: number }) {
  const idx = ((variant % GLYPHS.length) + GLYPHS.length) % GLYPHS.length;
  const color = RING_COLORS[idx];
  return <CardFrame ring={color + "55"}>{GLYPHS[idx](color)}</CardFrame>;
}

/* ----------------------------- About decor ----------------------------- */
export function DecorOrb({ className = "", color = C.cyan }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <circle cx="100" cy="100" r="70" fill="none" stroke={color} strokeWidth="1.5" opacity="0.6" />
      <circle cx="100" cy="100" r="45" fill="none" stroke={color} strokeWidth="1.5" opacity="0.4" />
      <circle cx="100" cy="30" r="6" fill={color} />
      <circle cx="170" cy="100" r="5" fill={color} />
      <circle cx="100" cy="170" r="5" fill={color} />
      <circle cx="30" cy="100" r="5" fill={color} />
    </svg>
  );
}

export function DecorGrid({ className = "", color = C.violet }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <g stroke={color} strokeWidth="1" opacity="0.5">
        {Array.from({ length: 6 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 40} y1="0" x2={i * 40} y2="200" />
        ))}
        {Array.from({ length: 6 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 40} x2="200" y2={i * 40} />
        ))}
      </g>
      <circle cx="100" cy="100" r="14" fill={color} />
    </svg>
  );
}

/* ----------------------------- Project mockups ----------------------------- */
export function ProjectMockup({ kind, className = "" }: { kind: "mbti" | "salary" | "medical"; className?: string }) {
  if (kind === "mbti") return <MbtiMock className={className} />;
  if (kind === "salary") return <SalaryMock className={className} />;
  return <MedicalMock className={className} />;
}

function MbtiMock({ className = "" }: { className?: string }) {
  const dims = [
    ["E", "I", 72],
    ["S", "N", 35],
    ["T", "F", 60],
    ["J", "P", 80],
  ];
  return (
    <svg viewBox="0 0 600 360" className={className} aria-label="MBTI 小程序界面示意">
      <rect width="600" height="360" rx="24" fill="#0B1220" />
      <rect width="600" height="360" rx="24" fill="none" stroke={C.line} />
      {/* phone */}
      <rect x="40" y="40" width="150" height="280" rx="22" fill="#11192B" stroke={C.line} />
      <rect x="95" y="54" width="40" height="6" rx="3" fill={C.dim} />
      <text x="115" y="100" textAnchor="middle" fontFamily="'Noto Sans SC'" fontSize="14" fill={C.text}>
        名人性格
      </text>
      <circle cx="115" cy="160" r="34" fill="none" stroke={C.fuchsia} strokeWidth="3" />
      <text x="115" y="166" textAnchor="middle" fontFamily="'Kanit'" fontSize="16" fill={C.fuchsia}>
        INFP
      </text>
      <rect x="75" y="210" width="80" height="14" rx="7" fill={C.orange} opacity="0.8" />
      <rect x="75" y="234" width="60" height="14" rx="7" fill={C.violet} opacity="0.8" />
      <rect x="75" y="258" width="70" height="14" rx="7" fill={C.cyan} opacity="0.8" />
      {/* bars */}
      <g transform="translate(230,50)">
        <text x="0" y="0" fontFamily="'Kanit'" fontSize="16" fill={C.text}>
          MBTI Dimensions
        </text>
        {dims.map(([a, b, v], i) => (
          <g key={i} transform={`translate(0,${30 + i * 60})`}>
            <rect x="0" y="10" width="320" height="16" rx="8" fill={C.line} />
            <rect x="0" y="10" width={320 * (v as number) / 100} height="16" rx="8" fill={C.fuchsia} />
            <text x="0" y="6" fontFamily="'Kanit'" fontSize="13" fill={C.text}>
              {a as string}
            </text>
            <text x="320" y="6" textAnchor="end" fontFamily="'Kanit'" fontSize="13" fill={C.text}>
              {b as string}
            </text>
          </g>
        ))}
      </g>
    </svg>
  );
}

function SalaryMock({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 360" className={className} aria-label="薪资预测系统大屏示意">
      <rect width="600" height="360" rx="24" fill="#0B1220" />
      <rect width="600" height="360" rx="24" fill="none" stroke={C.line} />
      <text x="30" y="40" fontFamily="'Kanit'" fontSize="18" fill={C.text}>
        Salary Prediction · 46,000 条
      </text>
      {/* line + bars */}
      <polyline points="40,300 130,250 220,270 310,190 400,210 490,140 560,170" fill="none" stroke={C.cyan} strokeWidth="3" />
      {[60, 110, 80, 150, 120, 180, 150].map((h, i) => (
        <rect key={i} x={60 + i * 75} y={320 - h} width="36" height={h} rx="5" fill={C.blue} opacity="0.85" />
      ))}
      {/* metric chips */}
      <g transform="translate(380,250)">
        <rect width="170" height="44" rx="10" fill="#0E1A2E" stroke={C.line} />
        <text x="14" y="28" fontFamily="'Kanit'" fontSize="16" fill={C.cyan}>
          R² = 0.884
        </text>
      </g>
      <g transform="translate(40,250)">
        <rect width="170" height="44" rx="10" fill="#0E1A2E" stroke={C.line} />
        <text x="14" y="28" fontFamily="'Kanit'" fontSize="16" fill={C.orange}>
          MAE = 1,453
        </text>
      </g>
    </svg>
  );
}

function MedicalMock({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 360" className={className} aria-label="乳腺癌诊断系统示意">
      <rect width="600" height="360" rx="24" fill="#0B1220" />
      <rect width="600" height="360" rx="24" fill="none" stroke={C.line} />
      <text x="30" y="40" fontFamily="'Kanit'" fontSize="18" fill={C.text}>
        Diagnosis Report
      </text>
      {/* heatmap grid */}
      <g transform="translate(40,60)">
        {Array.from({ length: 6 }).map((_, r) =>
          Array.from({ length: 10 }).map((_, c) => {
            const v = (Math.sin(r * 1.3 + c * 0.7) + 1) / 2;
            return (
              <rect
                key={`${r}-${c}`}
                x={c * 26}
                y={r * 26}
                width="22"
                height="22"
                rx="4"
                fill={C.mint}
                opacity={(0.15 + v * 0.7).toFixed(2)}
              />
            );
          })
        )}
      </g>
      {/* gauge */}
      <g transform="translate(420,70)">
        <path d="M10 100 A 90 90 0 0 1 170 100" fill="none" stroke={C.line} strokeWidth="14" strokeLinecap="round" />
        <path d="M10 100 A 90 90 0 0 1 140 40" fill="none" stroke={C.mint} strokeWidth="14" strokeLinecap="round" />
        <text x="90" y="86" textAnchor="middle" fontFamily="'Kanit'" fontSize="26" fontWeight="800" fill={C.text}>
          97%
        </text>
        <text x="90" y="112" textAnchor="middle" fontFamily="'Kanit'" fontSize="12" fill={C.text} opacity="0.7">
          Accuracy
        </text>
      </g>
      <g transform="translate(420,210)">
        <rect width="150" height="40" rx="10" fill="#0E1A2E" stroke={C.line} />
        <text x="14" y="26" fontFamily="'Kanit'" fontSize="15" fill={C.mint}>
          AUC = 0.96
        </text>
      </g>
    </svg>
  );
}
