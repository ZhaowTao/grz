import Section from "./Section";
import { projects } from "../data/resume";

export default function Projects() {
  return (
    <Section id="projects" no="03" title="项目经历" en="PROJECTS">
      <div className="projects">
        {projects.map((project) => (
          <article className="project" key={project.no}>
            <div className="project-meta">
              <span className="project-no mono">{project.no}</span>
              <span className="project-period mono">{project.period}</span>
              <span className="project-role mono">{project.role}</span>
            </div>
            <div className="project-main">
              <div className="project-title-row">
                <h3 className="project-title">{project.title}</h3>
                <span className="project-status mono">{project.status}</span>
              </div>
              <p className="project-stack mono">
                <span className="stack-label">技术栈</span>
                {project.stack.join(" · ")}
              </p>
              <ul className="project-points">
                {project.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <div className="project-metrics">
                {project.metrics.map((m) => (
                  <div className="metric" key={m.label}>
                    <span className="metric-value mono">{m.value}</span>
                    <span className="metric-label">{m.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
