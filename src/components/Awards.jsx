import Section from "./Section";
import { awards, campus } from "../data/resume";

export default function Awards() {
  return (
    <Section id="honors" no="04" title="荣誉与经历" en="HONORS & ACTIVITIES">
      <div className="awards-grid">
        <div className="awards-col">
          <h3 className="col-title mono">荣誉奖项</h3>
          <ul className="awards-list">
            {awards.map((award, i) => (
              <li className="award" key={award.title}>
                <span className="award-no mono">{String(i + 1).padStart(2, "0")}</span>
                <div className="award-text">
                  <span className="award-title">{award.title}</span>
                  <span className="award-note mono">{award.note}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="campus-col">
          <h3 className="col-title mono">校园经历</h3>
          <ol className="campus-list">
            {campus.map((item) => (
              <li className="campus-item" key={item.title}>
                <span className="campus-dot" aria-hidden="true" />
                <div className="campus-text">
                  <span className="campus-title">{item.title}</span>
                  <span className="campus-note">{item.note}</span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}
