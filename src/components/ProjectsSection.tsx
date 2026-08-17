import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import FadeIn from "./FadeIn";
import { ProjectMockup } from "./visuals";
import { projects } from "../data/resume";
import type { Project } from "../data/resume";

function QRCodeModal({ src, label, onClose }: { src: string; label: string; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.2 }}
        className="relative bg-[#141A26] border-2 border-[#D7E2EA] rounded-3xl p-6 sm:p-8 max-w-xs w-full mx-4 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#D7E2EA] text-[#0C0C0C] font-bold text-lg leading-none flex items-center justify-center hover:opacity-80 transition-opacity"
          aria-label="关闭"
        >
          ×
        </button>
        <img
          src={src}
          alt={label}
          className="w-full h-auto rounded-xl"
        />
        <p className="text-center text-[#9FB0C3] text-sm mt-4">{label}</p>
      </motion.div>
    </div>
  );
}

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
  const [showQR, setShowQR] = useState(false);

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
              {(project.github || project.cta) && (
                <div className="text-right">
                  <div className="flex items-center justify-end gap-2 flex-wrap">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA] px-5 py-2.5 text-[#D7E2EA] text-xs sm:text-sm font-semibold transition-opacity hover:opacity-80"
                      >
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                          <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.07 11.07 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14 0 1.55-.01 2.8-.01 3.18 0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
                        </svg>
                        在 GitHub 查看
                      </a>
                    )}
                    {project.cta?.href ? (
                      <a
                        href={project.cta.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA] px-5 py-2.5 text-[#D7E2EA] text-xs sm:text-sm font-semibold transition-opacity hover:opacity-80"
                      >
                        {project.cta.label}
                      </a>
                    ) : project.cta ? (
                      <button
                        type="button"
                        onClick={() => setShowQR(true)}
                        className="inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA] px-5 py-2.5 text-[#D7E2EA] text-xs sm:text-sm font-semibold transition-opacity hover:opacity-80 cursor-pointer bg-transparent"
                      >
                        {project.cta.label}
                      </button>
                    ) : null}
                  </div>
                  {project.cta?.note && (
                    <div className="mt-2 text-[#7E8CA0] text-[0.7rem] sm:text-[0.78rem]">
                      {project.cta.note}
                    </div>
                  )}
                </div>
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
          {showQR && project.cta && (
            <QRCodeModal
              src="/rensendream-qrcode.jpg"
              label={project.cta.label}
              onClose={() => setShowQR(false)}
            />
          )}
        </div>
      </div>
    </div>
  );
}
