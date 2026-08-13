import FadeIn from "./FadeIn";
import AnimatedText from "./AnimatedText";
import ContactButton from "./ContactButton";
import { profile } from "../data/resume";

const DECOR = [
  {
    src: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png",
    alt: "moon",
    className:
      "w-[120px] sm:w-[160px] md:w-[210px] top-[4%] left-[1%] sm:left-[2%] md:left-[4%]",
    delay: 0.1,
    x: -80,
  },
  {
    src: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png",
    alt: "3d object",
    className:
      "w-[100px] sm:w-[140px] md:w-[180px] bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%]",
    delay: 0.25,
    x: -80,
  },
  {
    src: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png",
    alt: "lego icon",
    className:
      "w-[120px] sm:w-[160px] md:w-[210px] top-[4%] right-[1%] sm:right-[2%] md:right-[4%]",
    delay: 0.15,
    x: 80,
  },
  {
    src: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png",
    alt: "3d group",
    className:
      "w-[130px] sm:w-[170px] md:w-[220px] bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%]",
    delay: 0.3,
    x: 80,
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      aria-label="关于我"
      className="min-h-screen relative flex flex-col items-center justify-center bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20"
    >
      {DECOR.map((d) => (
        <FadeIn
          key={d.alt}
          delay={d.delay}
          x={d.x}
          y={0}
          duration={0.9}
          className={`absolute ${d.className}`}
        >
          <img
            src={d.src}
            alt={d.alt}
            className="w-full h-auto object-contain"
            loading="lazy"
            decoding="async"
          />
        </FadeIn>
      ))}

      <FadeIn delay={0} y={40}>
        <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-center text-[clamp(3rem,12vw,160px)]">
          关于我
        </h2>
      </FadeIn>

      <div className="mt-10 sm:mt-14 md:mt-16 mb-16 sm:mb-20 md:mb-24 max-w-[640px]">
        <AnimatedText
          text={profile.about}
          className="text-[#D7E2EA] font-medium text-center leading-relaxed text-[clamp(0.95rem,2vw,1.3rem)]"
        />
      </div>

      <ContactButton />
    </section>
  );
}
