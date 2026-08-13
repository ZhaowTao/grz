import FadeIn from "./FadeIn";
import { openSource } from "../data/resume";

export default function OpenSourceSection() {
  return (
    <section
      id="opensource"
      aria-label="开源"
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn delay={0} y={40}>
        <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-center text-[clamp(3rem,12vw,160px)] mb-4 sm:mb-6">
          开源
        </h2>
      </FadeIn>
      <p className="text-center text-[#7E8CA0] font-light tracking-[0.3em] uppercase text-xs sm:text-sm mb-14 sm:mb-20">
        Open Source
      </p>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-7">
        {openSource.map((repo, i) => (
          <FadeIn key={repo.name} delay={i * 0.1} y={30}>
            <a
              href={repo.url}
              target="_blank"
              rel="noreferrer"
              className="block h-full rounded-[28px] sm:rounded-[36px] border border-[#263043] bg-[#0B0F1A] p-6 sm:p-8 transition-colors duration-200 hover:border-[#22D3EE]/60"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-[#D7E2EA] font-bold text-[clamp(1.2rem,2.6vw,1.8rem)]">
                  {repo.name}
                </h3>
                <span className="rounded-full border border-[#263043] text-[#9FB0C3] text-xs px-3 py-1">
                  {repo.lang}
                </span>
              </div>
              <p className="text-[#9FB0C3] leading-relaxed text-[clamp(0.85rem,1.6vw,1rem)] mb-6">
                {repo.desc}
              </p>
              <div className="flex items-center gap-2 text-[#22D3EE] text-sm font-medium">
                ★ {repo.stars} <span className="text-[#7E8CA0]">· 在 GitHub 查看</span>
              </div>
            </a>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
