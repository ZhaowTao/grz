import Section from "./Section";
import { education } from "../data/resume";

export default function Education() {
  return (
    <Section id="education" no="01" title="教育背景" en="EDUCATION">
      <div className="edu-grid">
        <div className="edu-left">
          <p className="edu-major">{education.major}</p>
          <p className="edu-school mono">
            {education.school} · {education.degree} · {education.period} · 已毕业
          </p>
        </div>
        <div className="edu-right">
          <div className="edu-highlight">
            <span className="edu-hl-value mono">{education.highlight.value}</span>
            <span className="edu-hl-unit mono">{education.highlight.unit}</span>
            <span className="edu-hl-note">{education.highlight.note}</span>
          </div>
          <dl className="edu-rows">
            {education.rows.map((row) => (
              <div className="edu-row" key={row.label}>
                <dt className="mono">{row.label}</dt>
                <dd>{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}
