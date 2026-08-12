import { research } from "../data/resume";

export default function Research() {
  return (
    <section id="research" className="research reveal">
      <div className="research-inner">
        <div className="research-head">
          <span className="mono research-tag">学术成果 · RESEARCH</span>
          <span className="mono research-venue">{research.venue}</span>
        </div>
        <h2 className="research-title">{research.title}</h2>
        <p className="research-abstract">{research.abstract}</p>
        <div className="research-meta">
          <div className="research-metric">
            <span className="research-metric-value mono">{research.metric.value}</span>
            <span className="research-metric-label">{research.metric.label}</span>
          </div>
          <div className="research-facts mono">
            <span>{research.status}</span>
            <span>{research.models}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
