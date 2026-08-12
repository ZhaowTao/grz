import FadeIn from "./FadeIn";
import { education } from "../data/resume";

export default function EducationSection() {
  return (
    <section
      id="education"
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn delay={0} y={40}>
        <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-center text-[clamp(3rem,12vw,160px)] mb-4 sm:mb-6">
          教育
        </h2>
      </FadeIn>
      <p className="text-center text-[#6B7A90] font-light tracking-[0.3em] uppercase text-xs sm:text-sm mb-14 sm:mb-20">
        Education
      </p>

      <FadeIn delay={0.1} y={30} className="max-w-4xl mx-auto">
        <div className="rounded-[32px] sm:rounded-[44px] border border-[#263043] bg-[#0B0F1A] p-7 sm:p-10 md:p-14">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
            <div>
              <h3 className="text-[#D7E2EA] font-black text-[clamp(1.6rem,4vw,3rem)] leading-tight">
                {education.school}
              </h3>
              <p className="text-[#9FB0C3] mt-3 text-[clamp(0.95rem,1.8vw,1.2rem)]">
                {education.major} · {education.degree}
              </p>
            </div>
            <div className="sm:text-right">
              <div className="hero-heading font-black text-[clamp(2.4rem,7vw,4.5rem)] leading-none">
                {education.highlight.value}
              </div>
              <div className="text-[#9FB0C3] text-sm mt-1">{education.highlight.unit}</div>
              <div className="text-[#6B7A90] text-xs mt-1">{education.highlight.note}</div>
            </div>
          </div>

          <div className="border-t border-[#1C2436] pt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {education.rows.map((r) => (
              <div key={r.label}>
                <div className="text-[#22D3EE] text-xs uppercase tracking-widest mb-2">
                  {r.label}
                </div>
                <div className="text-[#D7E2EA] leading-relaxed text-[clamp(0.9rem,1.6vw,1.05rem)]">
                  {r.value}
                </div>
              </div>
            ))}
          </div>

          <div className="text-[#6B7A90] text-sm mt-8">{education.period}</div>
        </div>
      </FadeIn>
    </section>
  );
}
