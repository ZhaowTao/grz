import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { SkillCard } from "./visuals";
import { skills } from "../data/resume";

// 4 个合并后的核心类目（数据源见 resume.ts，已涵盖原 8 类全部技能）
const ACCENTS = ["#E23FB5", "#34D399", "#22D3EE", "#8B5CF6"];

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  const row1Items = skills.slice(0, 2);
  const row2Items = skills.slice(2);
  const row1 = [...row1Items, ...row1Items, ...row1Items];
  const row2 = [...row2Items, ...row2Items, ...row2Items];

  const reduce = useReducedMotion();
  useEffect(() => {
    if (reduce) return; // 减动偏好：卡片保持静态排列，不做滚动联动位移
    let raf = 0;
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
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [reduce]);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="bg-[#0C0C0C] pt-16 sm:pt-20 md:pt-24 pb-10 overflow-hidden"
    >
      <div className="text-center mb-8 sm:mb-12">
        <p className="text-[#6B7A90] uppercase tracking-[0.4em] text-xs sm:text-sm font-medium">
          Skills · Stack · Tools
        </p>
        <h2 className="hero-heading font-black uppercase mt-3 text-[clamp(2rem,7vw,64px)] leading-none">
          技能栈
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
