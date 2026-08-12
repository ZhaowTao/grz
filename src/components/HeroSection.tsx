import FadeIn from "./FadeIn";
import Magnet from "./Magnet";
import ContactButton from "./ContactButton";
import { profile, navLinks } from "../data/resume";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative h-screen min-h-[700px] flex flex-col overflow-x-clip"
    >
      <FadeIn
        delay={0}
        y={-20}
        className="flex items-center justify-between px-6 md:px-10 pt-6 md:pt-8"
      >
        <a
          href="#home"
          className="font-black uppercase tracking-[0.3em] text-[#D7E2EA] text-lg md:text-xl"
        >
          赵文涛
        </a>
        <nav className="hidden md:flex flex-1 max-w-[720px] ml-auto justify-between px-4 md:px-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm lg:text-[1.1rem] transition-opacity duration-200 hover:opacity-70"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </FadeIn>

      <div className="flex-1 flex flex-col justify-start items-center relative pt-[6vh] md:pt-[8vh]">
        <h1 className="hero-heading font-black uppercase tracking-tight leading-[0.95] whitespace-nowrap w-full text-center text-[12vw] sm:text-[13vw] md:text-[14vw] lg:text-[15vw]">
          赵文涛
        </h1>
        <p className="text-center text-[#9FB0C3] font-light tracking-[0.3em] uppercase text-[clamp(0.7rem,1.6vw,1.1rem)] mt-2">
          Data Analyst · AI Engineer
        </p>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 z-10 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] opacity-95">
        <FadeIn delay={0.6} y={30}>
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
          >
            <img
              src="/avatar-3d.png"
              alt="赵文涛 3D 头像"
              className="w-full h-auto max-h-[55vh] object-contain drop-shadow-[0_12px_40px_rgba(182,0,168,0.28)]"
              style={{ willChange: "transform" }}
            />
          </Magnet>
        </FadeIn>
      </div>

      <div className="relative z-20 px-6 md:px-10 pb-7 sm:pb-8 md:pb-10">
        <FadeIn delay={0.35} y={20}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-7">
            {profile.stats.map((s) => (
              <div key={s.label} className="text-center sm:text-left">
                <div className="hero-heading font-black text-[clamp(1.4rem,3.4vw,2.6rem)] leading-none">
                  {s.value}
                </div>
                <div className="text-[#9FB0C3] text-[clamp(0.6rem,1.3vw,0.85rem)] mt-1 leading-snug">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
        <div className="flex justify-between items-end gap-4">
          <FadeIn delay={0.5} y={20}>
            <p className="text-[#D7E2EA] font-light tracking-wide leading-snug text-[clamp(0.75rem,1.4vw,1.1rem)] max-w-[260px] sm:max-w-[360px]">
              {profile.tagline}
            </p>
          </FadeIn>
          <FadeIn delay={0.65} y={20}>
            <ContactButton />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
