import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import FadeIn from "./FadeIn";
import { ProjectMockup } from "./visuals";
import { projects } from "../data/resume";
import type { Project } from "../data/resume";

export default function ProjectsSection() {
  const totalCards = projects.length;
  return (
    <section
      id="projects"
      className="relative z-10 bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 pb-24 sm:pb-28 md:pb-40"
    >
      <FadeIn delay={0} y={40}>
        <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-center text-[clamp(3rem,12vw,160px)] mb-12 sm:mb-16">
          项目
        </h2>
      </FadeIn>
      <div className="max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.no}
            project={project}
            index={index}
            totalCards={totalCards}
          />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  totalCards,
}: {
  project: Project;
  index: number;
  totalCards: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end 0"],
  });
  const reduce = useReducedMotion();
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scrollScale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);
  const scale = reduce ? 1 : scrollScale;

  return (
    <div ref={containerRef} className="h-[85vh]">
      <div className="sticky top-24 md:top-32 flex items-start justify-center">
        <div className="w-full" style={{ transform: `translateY(${index * 28}px)` }}>
          <motion.div
            style={{ scale }}
            className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8"
          >
            <div className="flex items-center justify-between gap-4 flex-wrap mb-5 sm:mb-7">
              <div className="flex items-center gap-4">
                <span className="text-[#22D3EE] font-black text-[clamp(2rem,7vw,90px)] leading-none">
                  {project.no}
                </span>
                <span
                  className={`inline-block rounded-full bg-gradient-to-r ${project.accent} text-white text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1.5`}
                >
                  {project.status}
                </span>
              </div>
              {project.cta ? (
                <div className="text-right">
                  {project.cta.href ? (
                    <a
                      href={project.cta.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA] px-5 py-2.5 text-[#D7E2EA] text-xs sm:text-sm font-semibold transition-opacity hover:opacity-80"
                    >
                      {project.cta.label}
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA] px-5 py-2.5 text-[#D7E2EA] text-xs sm:text-sm font-semibold">
                      {project.cta.label}
                    </span>
                  )}
                  {project.cta.note && (
                    <div className="mt-2 text-[#7E8CA0] text-[0.7rem] sm:text-[0.78rem]">
                      {project.cta.note}
                    </div>
                  )}
                </div>
              ) : (
                <span />
              )}
            </div>

            <h3 className="text-[#D7E2EA] font-black tracking-tight text-[clamp(1.2rem,2.6vw,2.2rem)] mb-2">
              {project.title}
            </h3>
            <p className="text-[#7E8CA0] text-[clamp(0.8rem,1.5vw,1rem)] mb-6">
              {project.role} · {project.period}
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-7">
              <ProjectMockup kind={project.mockup} className="w-full h-auto rounded-2xl" />

              <div className="flex flex-col gap-5">
                <div className="grid grid-cols-3 gap-3">
                  {project.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="rounded-2xl bg-[#0E1626] border border-[#1C2436] p-3 sm:p-4 text-center"
                    >
                      <div className="hero-heading font-black text-[clamp(1rem,2.4vw,1.8rem)] leading-none">
                        {m.value}
                      </div>
                      <div className="text-[#7E8CA0] text-[0.65rem] sm:text-[0.72rem] mt-2 leading-snug">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.stack.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-[#0E1626] border border-[#1C2436] text-[#9FB0C3] text-[0.7rem] sm:text-[0.8rem] px-3 py-1.5"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <ul className="space-y-2.5">
                  {project.points.map((p, i) => (
                    <li
                      key={i}
                      className="flex gap-2.5 text-[#9FB0C3] text-[0.8rem] sm:text-[0.92rem] leading-relaxed"
                    >
                      <span className="text-[#22D3EE] mt-1 flex-shrink-0">▹</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
