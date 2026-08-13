import FadeIn from "./FadeIn";
import { awards, campus } from "../data/resume";

export default function AwardsSection() {
  return (
    <section
      id="honors"
      aria-label="荣誉"
      className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn delay={0} y={40}>
        <h2 className="text-[#0C0C0C] font-black uppercase leading-none tracking-tight text-center text-[clamp(3rem,12vw,160px)] mb-4 sm:mb-6">
          荣誉
        </h2>
      </FadeIn>
      <p className="text-center text-[#3A3F47] font-light tracking-[0.3em] uppercase text-xs sm:text-sm mb-14 sm:mb-20">
        Honors &amp; Campus
      </p>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {awards.map((a, i) => (
          <FadeIn key={a.title} delay={i * 0.05} y={24}>
            <div className="h-full rounded-3xl border border-[rgba(12,12,12,0.1)] bg-[#F6F7F9] p-6">
              <div className="text-[#0C0C0C] font-bold text-[clamp(1rem,2vw,1.3rem)] leading-snug mb-2">
                {a.title}
              </div>
              <div className="text-[#3A3F47] text-sm">{a.note}</div>
            </div>
          </FadeIn>
        ))}
      </div>

      <div className="max-w-5xl mx-auto mt-12 sm:mt-16">
        <h3 className="text-[#4A4F57] font-semibold tracking-wide text-sm uppercase mb-5 sm:mb-7">
          校园经历 · Campus
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {campus.map((c, i) => (
            <FadeIn key={c.title} delay={i * 0.05} y={20}>
              <div className="flex gap-4 items-start rounded-2xl border border-[rgba(12,12,12,0.08)] p-5">
                <span className="mt-1 w-2.5 h-2.5 rounded-full bg-[#0C0C0C] flex-shrink-0" />
                <div>
                  <div className="text-[#0C0C0C] font-semibold text-[clamp(0.95rem,1.8vw,1.15rem)]">
                    {c.title}
                  </div>
                  <div className="text-[#3A3F47] text-sm mt-1">{c.note}</div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
