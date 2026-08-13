import FadeIn from "./FadeIn";
import { research } from "../data/resume";

export default function ResearchSection() {
  return (
    <section
      id="research"
      aria-label="研究"
      className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn delay={0} y={40}>
        <h2 className="text-[#0C0C0C] font-black uppercase leading-none tracking-tight text-center text-[clamp(3rem,12vw,160px)] mb-4 sm:mb-6">
          研究
        </h2>
      </FadeIn>
      <p className="text-center text-[#3A3F47] font-light tracking-[0.3em] uppercase text-xs sm:text-sm mb-14 sm:mb-20">
        Research · Publication
      </p>

      <FadeIn delay={0.1} y={30} className="max-w-4xl mx-auto">
        <div className="rounded-[32px] sm:rounded-[44px] border border-[rgba(12,12,12,0.1)] bg-[#F6F7F9] p-7 sm:p-10 md:p-14">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="rounded-full bg-[#0C0C0C] text-white text-xs sm:text-sm font-semibold px-4 py-1.5">
              {research.venue}
            </span>
            <span className="rounded-full bg-[#0C0C0C]/[0.06] text-[#0C0C0C] text-xs sm:text-sm font-medium px-4 py-1.5">
              {research.status}
            </span>
          </div>

          <h3 className="text-[#0C0C0C] font-bold text-[clamp(1.4rem,3.4vw,2.6rem)] leading-tight mb-4">
            {research.title}
          </h3>

          <div className="text-[#3A3F47] text-[clamp(0.85rem,1.6vw,1.05rem)] mb-8">
            模型方法：<span className="font-semibold text-[#0C0C0C]">{research.models}</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
            <div className="rounded-2xl bg-[#0C0C0C] text-white px-6 py-5 text-center">
              <div className="font-black text-[clamp(1.6rem,4vw,2.6rem)] leading-none hero-heading-on-dark">
                {research.metric.value}
              </div>
              <div className="text-white/60 text-xs mt-2">{research.metric.label}</div>
            </div>
            <p className="text-[#4A4F57] leading-relaxed text-[clamp(0.9rem,1.7vw,1.1rem)] flex-1">
              {research.abstract}
            </p>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
