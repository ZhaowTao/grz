import Section from "./Section";
import { skills } from "../data/resume";

export default function Skills() {
  return (
    <Section id="skills" no="02" title="专业技能" en="SKILL SET">
      <div className="skills-grid">
        {skills.map((skill) => (
          <article className="skill" key={skill.no}>
            <div className="skill-head">
              <span className="skill-no mono">{skill.no}</span>
              <h3 className="skill-title">{skill.title}</h3>
            </div>
            <p className="skill-tags mono">
              {skill.tags.map((tag, i) => (
                <span className="skill-tag" key={tag}>
                  {tag}
                  {i < skill.tags.length - 1 && <span className="tag-sep"> · </span>}
                </span>
              ))}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
