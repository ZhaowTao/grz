import FadeIn from "./FadeIn";

// 能力与真实作品的对应（避免与「技能栈」滚动带重复：这里展示技能“落地”到了哪些作品）
const skillProofs = [
  {
    no: "01",
    title: "AI 应用开发",
    accent: "from-fuchsia-500 to-pink-500",
    tags: ["DeepSeek API", "Function Calling", "Prompt Engineering", "AI 审核系统", "微信云开发", "Flask", "微信小程序"],
    works: [
      { name: "人森梦 MBTI 小程序", href: "#projects" },
      { name: "AI-narrator 开源", href: "#opensource" },
    ],
  },
  {
    no: "02",
    title: "数据建模与算法",
    accent: "from-sky-400 to-blue-600",
    tags: ["Pandas", "Scikit-learn", "XGBoost / LightGBM", "Stacking", "SHAP", "SparkML", "Selenium / Scrapy", "MySQL", "Spark / Hadoop"],
    works: [
      { name: "大数据薪资预测系统", href: "#projects" },
      { name: "乳腺癌智能诊断", href: "#projects" },
      { name: "IEEE 网络犯罪预测", href: "#research" },
    ],
  },
  {
    no: "03",
    title: "编程语言与工程",
    accent: "from-emerald-400 to-teal-600",
    tags: ["Python", "SQL", "JavaScript / TypeScript", "WXML / WXSS", "Git", "Linux"],
    works: [
      { name: "全部项目", href: "#projects" },
      { name: "codex-mover 开源", href: "#opensource" },
    ],
  },
  {
    no: "04",
    title: "可视化与表达",
    accent: "from-amber-400 to-orange-500",
    tags: ["ECharts", "PowerBI", "Canvas 2D", "CET-6", "IEEE 论文第一作者"],
    works: [
      { name: "薪资大屏可视化", href: "#projects" },
      { name: "IEEE 英文论文", href: "#research" },
    ],
  },
];

export default function SkillMapSection() {
  return (
    <section
      id="skillmap"
      aria-label="能力落地"
      className="bg-[#0C0C0C] px-6 md:px-10 py-20 sm:py-24 md:py-28"
    >
      <FadeIn delay={0} y={30}>
        <p className="text-[#9FB0C3] font-light tracking-[0.3em] uppercase text-xs sm:text-sm mb-3">
          Skills in Action
        </p>
        <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-[clamp(2.2rem,7vw,5rem)] mb-4">
          能力落地
        </h2>
        <p className="text-[#9FB0C3] text-[clamp(0.8rem,1.6vw,1.05rem)] max-w-2xl mb-12">
          同一套 4 类能力，如何变成真实作品——下面把每项技能与你做过的项目、研究、开源一一对应，看能力到底落到了哪里。
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        {skillProofs.map((s, i) => (
          <FadeIn key={s.no} delay={i * 0.06} className="h-full">
            <div className="h-full rounded-2xl border border-[#D7E2EA]/15 bg-[#111315] p-6 sm:p-7 hover:border-[#D7E2EA]/35 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <span className={`h-7 w-1.5 rounded-full bg-gradient-to-b ${s.accent}`} />
                <span className="text-[#9FB0C3] font-bold text-sm">{s.no}</span>
                <h3 className="text-[#E8EEF4] font-bold text-[clamp(1.05rem,2.2vw,1.5rem)]">
                  {s.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2 mb-5">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-[#D7E2EA]/15 text-[#A9B7C6] text-xs px-2.5 py-1"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="pt-4 border-t border-[#D7E2EA]/10">
                <p className="text-[#9FB0C3]/70 text-[0.7rem] uppercase tracking-[0.2em] mb-2.5">
                  落地于
                </p>
                <div className="flex flex-wrap gap-2">
                  {s.works.map((w) => (
                    <a
                      key={w.name}
                      href={w.href}
                      className="text-[#E8EEF4] text-sm font-medium bg-[#D7E2EA]/[0.06] hover:bg-[#D7E2EA]/[0.12] border border-[#D7E2EA]/10 rounded-lg px-3 py-1.5 transition-colors"
                    >
                      {w.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
