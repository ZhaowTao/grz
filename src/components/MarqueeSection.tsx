import { useEffect, useRef } from "react";
import { GlyphCard } from "./visuals";

const COUNT = 22;
const variants = Array.from({ length: COUNT }, (_, i) => i);

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  const first = variants.slice(0, 11);
  const second = variants.slice(11);
  const row1 = [...first, ...first, ...first];
  const row2 = [...second, ...second, ...second];

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
          Data · AI · Product
        </p>
      </div>
      <div
        ref={row1Ref}
        className="flex gap-3 mb-3 will-change-transform"
        style={{ width: "max-content" }}
      >
        {row1.map((v, i) => (
          <GlyphCard key={`r1-${v}-${i}`} variant={v} />
        ))}
      </div>
      <div
        ref={row2Ref}
        className="flex gap-3 will-change-transform"
        style={{ width: "max-content" }}
      >
        {row2.map((v, i) => (
          <GlyphCard key={`r2-${v}-${i}`} variant={v} />
        ))}
      </div>
    </section>
  );
}
