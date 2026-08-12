import Section from "./Section";
import { openSource } from "../data/resume";

export default function OpenSource() {
  return (
    <Section id="opensource" no="03" title="开源项目" en="OPEN SOURCE">
      <div className="opensource">
        {openSource.map((repo) => (
          <a className="repo" href={repo.url} target="_blank" rel="noreferrer" key={repo.name}>
            <div className="repo-head">
              <h3 className="repo-name mono">{repo.name}</h3>
              <span className="repo-arrow" aria-hidden="true">
                ↗
              </span>
            </div>
            <p className="repo-desc">{repo.desc}</p>
            <p className="repo-meta mono">
              <span>{repo.lang}</span>
              <span>{repo.stars} stars</span>
              <span>GitHub</span>
            </p>
          </a>
        ))}
      </div>
      <p className="opensource-more mono">
        更多仓库见{" "}
        <a href="https://github.com/ZhaowTao" target="_blank" rel="noreferrer">
          github.com/ZhaowTao
        </a>
      </p>
    </Section>
  );
}
