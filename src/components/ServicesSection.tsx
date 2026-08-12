import FadeIn from "./FadeIn";
import { skills } from "../data/resume";

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn delay={0} y={40}>
        <h2 className="text-[#0C0C0C] font-black uppercase leading-none tracking-tight text-center text-[clamp(3rem,12vw,160px)] mb-4 sm:mb-6">
          技能
        </h2>
      </FadeIn>
      <p className="text-center text-[#0C0C0C]/50 font-light tracking-[0.3em] uppercase text-xs sm:text-sm mb-14 sm:mb-20">
        Skills · Toolkit
      </p>

      <div className="max-w-5xl mx-auto">
        {skills.map((skill, i) => (
          <FadeIn
            key={skill.no}
            delay={i * 0.06}
            className="py-8 sm:py-10 md:py-12 border-b border-[rgba(12,12,12,0.12)] last:border-b-0"
          >
            <div className="flex items-start gap-5 sm:gap-8 md:gap-12">
              <span className="text-[#0C0C0C] font-black text-[clamp(2rem,6vw,80px)] leading-none flex-shrink-0 opacity-20">
                {skill.no}
              </span>
              <div className="flex-1">
                <h3 className="text-[#0C0C0C] font-bold text-[clamp(1.1rem,2.6vw,2rem)] leading-tight mb-4">
                  {skill.title}
                </h3>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {skill.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[#0C0C0C]/[0.04] text-[#0C0C0C]/80 text-[clamp(0.72rem,1.4vw,0.95rem)] font-medium px-3.5 py-1.5 sm:px-4 sm:py-2 border border-[rgba(12,12,12,0.08)]"
                    >
                      {tag}
                    </span>
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
