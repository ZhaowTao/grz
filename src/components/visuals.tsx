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

/* ----------------------------- Skill cards ----------------------------- */
const SKILL_CARD_BG = "linear-gradient(150deg,#0E1626 0%,#0A0F1C 100%)";

export function SkillCard({
  no,
  title,
  tags,
  accent,
}: {
  no: string;
  title: string;
  tags: string[];
  accent: string;
}) {
  return (
    <div
      className="w-[420px] h-[280px] rounded-2xl flex-shrink-0 overflow-hidden relative p-6 flex flex-col"
      style={{ background: SKILL_CARD_BG, boxShadow: `inset 0 0 0 1px ${accent}55` }}
    >
      <div className="absolute left-0 top-0 h-full w-[3px]" style={{ background: accent }} />
      <div className="flex items-baseline gap-3">
        <span className="font-black text-2xl leading-none" style={{ color: accent, fontFamily: "'Kanit', sans-serif" }}>
          {no}
        </span>
        <h3 className="hero-heading font-black text-[20px] leading-tight">{title}</h3>
      </div>
      <div className="mt-5 flex flex-wrap gap-2 content-start">
        {tags.map((t) => (
          <span
            key={t}
            className="text-[11px] leading-none px-2.5 py-1.5 rounded-full border border-[#263043] text-[#9FB0C3] bg-white/[0.02]"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
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
  const dims: [string, string, number][] = [
    ["E", "I", 70],
    ["S", "N", 65],
    ["T", "F", 75],
    ["J", "P", 62],
  ];
  return (
    <svg viewBox="0 0 600 360" className={className} aria-label="人森梦 MBTI 小程序 · 真实性格结果卡">
      <rect width="600" height="360" rx="24" fill="#0B1220" />
      <rect width="600" height="360" rx="24" fill="none" stroke={C.line} />
      {/* phone */}
      <rect x="36" y="36" width="160" height="288" rx="22" fill="#11192B" stroke={C.line} />
      <rect x="96" y="50" width="40" height="6" rx="3" fill={C.dim} />
      <text x="116" y="92" textAnchor="middle" fontFamily="'Noto Sans SC'" fontSize="13" fill={C.dim}>
        名人性格测试
      </text>
      <circle cx="116" cy="150" r="34" fill="none" stroke={C.fuchsia} strokeWidth="3" />
      <text x="116" y="158" textAnchor="middle" fontFamily="'Kanit'" fontSize="20" fontWeight="800" fill={C.fuchsia}>
        INFP
      </text>
      <text x="116" y="200" textAnchor="middle" fontFamily="'Noto Sans SC'" fontSize="14" fill={C.text}>
        调停者
      </text>
      {["理想", "共情", "探索"].map((t, i) => (
        <g key={t} transform={`translate(${60 + i * 42},222)`}>
          <rect width="38" height="20" rx="10" fill="#1B2540" />
          <text x="19" y="14" textAnchor="middle" fontFamily="'Noto Sans SC'" fontSize="11" fill={C.text}>
            {t}
          </text>
        </g>
      ))}
      <rect x="56" y="288" width="120" height="22" rx="11" fill="#1B1228" stroke={C.fuchsia} strokeOpacity="0.4" />
      <text x="116" y="303" textAnchor="middle" fontFamily="'Noto Sans SC'" fontSize="11" fill={C.fuchsia}>
        12,101 位用户已生成
      </text>
      {/* right: dimensions */}
      <text x="228" y="52" fontFamily="'Noto Sans SC'" fontSize="16" fill={C.text}>
        你的性格画像
      </text>
      {dims.map(([a, b, v], i) => (
        <g key={a + b} transform={`translate(228,${74 + i * 56})`}>
          <text x="0" y="2" fontFamily="'Kanit'" fontSize="13" fill={C.text}>
            {a}
          </text>
          <rect x="26" y="-6" width="280" height="14" rx="7" fill={C.line} />
          <rect x="26" y="-6" width={(280 * v) / 100} height="14" rx="7" fill="url(#mbtiGrad)" />
          <text x="306" y="2" textAnchor="end" fontFamily="'Kanit'" fontSize="13" fill={C.text}>
            {b}
          </text>
          <text x="318" y="2" fontFamily="'Kanit'" fontSize="12" fill={C.dim}>
            {v}%
          </text>
        </g>
      ))}
      <defs>
        <linearGradient id="mbtiGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={C.violet} />
          <stop offset="100%" stopColor={C.fuchsia} />
        </linearGradient>
      </defs>
    </svg>
  );
}

function SalaryMock({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 360" className={className} aria-label="大数据岗位薪资预测系统 · 预测卡">
      <rect width="600" height="360" rx="24" fill="#0B1220" />
      <rect width="600" height="360" rx="24" fill="none" stroke={C.line} />
      <text x="30" y="44" fontFamily="'Noto Sans SC'" fontSize="16" fill={C.text}>
        大数据岗位薪资预测
      </text>
      <text x="30" y="74" fontFamily="'Noto Sans SC'" fontSize="12" fill={C.dim}>
        输入条件
      </text>
      {["数据分析师", "一线城市", "3 年经验"].map((t, i) => (
        <g key={t} transform={`translate(${30 + i * 152},88)`}>
          <rect width="140" height="34" rx="17" fill="#0E1A2E" stroke={C.line} />
          <text x="70" y="22" textAnchor="middle" fontFamily="'Noto Sans SC'" fontSize="13" fill={C.text}>
            {t}
          </text>
        </g>
      ))}
      <text x="30" y="168" fontFamily="'Noto Sans SC'" fontSize="12" fill={C.dim}>
        预测结果
      </text>
      <text x="30" y="206" fontFamily="'Kanit'" fontSize="26" fontWeight="800" fill={C.cyan}>
        ¥14,200 – ¥18,600
      </text>
      <rect x="30" y="224" width="300" height="12" rx="6" fill={C.line} />
      <rect x="30" y="224" width="210" height="12" rx="6" fill="url(#salaryGrad)" />
      <g transform="translate(30,290)">
        <rect width="540" height="44" rx="10" fill="#0E1A2E" stroke={C.line} />
        <text x="18" y="28" fontFamily="'Kanit'" fontSize="14" fill={C.text}>
          R² 0.884 · MAE 1,453 元 · 46,000 条训练数据 · Stacking 融合
        </text>
      </g>
      <defs>
        <linearGradient id="salaryGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={C.cyan} />
          <stop offset="100%" stopColor={C.blue} />
        </linearGradient>
      </defs>
    </svg>
  );
}

function MedicalMock({ className = "" }: { className?: string }) {
  const feats: [string, number][] = [
    ["肿瘤半径", 120],
    ["纹理熵", 96],
    ["对称性", 72],
    ["凹点", 56],
  ];
  return (
    <svg viewBox="0 0 600 360" className={className} aria-label="乳腺癌智能诊断系统 · 报告卡">
      <rect width="600" height="360" rx="24" fill="#0B1220" />
      <rect width="600" height="360" rx="24" fill="none" stroke={C.line} />
      <text x="30" y="44" fontFamily="'Noto Sans SC'" fontSize="16" fill={C.text}>
        乳腺癌智能诊断报告
      </text>
      <text x="30" y="74" fontFamily="'Noto Sans SC'" fontSize="12" fill={C.dim}>
        输入特征
      </text>
      {feats.map(([f, w], i) => (
        <g key={f} transform={`translate(30,${92 + i * 36})`}>
          <text x="0" y="12" fontFamily="'Noto Sans SC'" fontSize="13" fill={C.text}>
            {f}
          </text>
          <rect x="92" y="4" width="150" height="10" rx="5" fill={C.line} />
          <rect x="92" y="4" width={w} height="10" rx="5" fill={C.mint} opacity="0.8" />
        </g>
      ))}
      {/* gauge */}
      <circle cx="468" cy="150" r="52" fill="none" stroke={C.line} strokeWidth="12" />
      <circle
        cx="468"
        cy="150"
        r="52"
        fill="none"
        stroke={C.mint}
        strokeWidth="12"
        strokeLinecap="round"
        strokeDasharray="307 327"
        transform="rotate(-90 468 150)"
      />
      <text x="468" y="146" textAnchor="middle" fontFamily="'Kanit'" fontSize="28" fontWeight="800" fill={C.mint}>
        94%
      </text>
      <text x="468" y="170" textAnchor="middle" fontFamily="'Noto Sans SC'" fontSize="12" fill={C.text}>
        恶性样本召回
      </text>
      <g transform="translate(360,232)">
        <rect width="216" height="34" rx="10" fill="#0E1A2E" stroke={C.line} />
        <text x="14" y="22" fontFamily="'Kanit'" fontSize="14" fill={C.mint}>
          97% 准确率 · 0.96 AUC
        </text>
      </g>
      <g transform="translate(30,300)">
        <rect width="540" height="34" rx="10" fill="#0E1A2E" stroke={C.line} />
        <text x="18" y="22" fontFamily="'Noto Sans SC'" fontSize="13" fill={C.dim}>
          初筛辅助 · 非临床诊断依据
        </text>
      </g>
    </svg>
  );
}
