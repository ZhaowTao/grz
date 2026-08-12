import { useEffect, useRef } from "react";
import { SkillCard } from "./visuals";
import { skills } from "../data/resume";

const ACCENTS = [
  "#E23FB5", // 01 AI 应用开发
  "#22D3EE", // 02 编程语言
  "#34D399", // 03 数据分析与建模
  "#8B5CF6", // 04 数据可视化
  "#3B82F6", // 05 数据采集与存储
  "#FB923C", // 06 大数据
  "#E23FB5", // 07 开发与工具
  "#34D399", // 08 英语能力
];

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  const row1Items = skills.slice(0, 4);
  const row2Items = skills.slice(4);
  const row1 = [...row1Items, ...row1Items, ...row1Items];
  const row2 = [...row2Items, ...row2Items, ...row2Items];

  useEffect(() => {
    const update = () => {
      const section = sectionRef.current;
      const row1El = row1Ref.current;
      const row2El = row2Ref.current;
      if (!section || !row1El || !row2El) return;
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      row1El.style.transform = `translateX(${offset - 200}px)`;
      row2El.style.transform = `translateX(${-(offset - 200)}px)`;
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-16 sm:pt-20 md:pt-24 pb-10 overflow-hidden"
    >
      <div className="text-center mb-8 sm:mb-12">
        <p className="text-[#6B7A90] uppercase tracking-[0.4em] text-xs sm:text-sm font-medium">
          Skills · Stack · Tools
        </p>
        <h2 className="hero-heading font-black uppercase mt-3 text-[clamp(2rem,7vw,64px)] leading-none">
          我的技能栈
        </h2>
      </div>
      <div
        ref={row1Ref}
        className="flex gap-3 mb-3 will-change-transform"
        style={{ width: "max-content" }}
      >
        {row1.map((s, i) => (
          <SkillCard
            key={`r1-${i}`}
            no={s.no}
            title={s.title}
            tags={s.tags}
            accent={ACCENTS[Number(s.no) - 1]}
          />
        ))}
      </div>
      <div
        ref={row2Ref}
        className="flex gap-3 will-change-transform"
        style={{ width: "max-content" }}
      >
        {row2.map((s, i) => (
          <SkillCard
            key={`r2-${i}`}
            no={s.no}
            title={s.title}
            tags={s.tags}
            accent={ACCENTS[Number(s.no) - 1]}
          />
        ))}
      </div>
    </section>
  );
}
