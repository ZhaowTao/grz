export default function Section({ id, no, title, en, children }) {
  return (
    <section id={id} className="section reveal">
      <div className="section-head">
        <span className="section-no mono">{no}</span>
        <h2 className="section-title">{title}</h2>
        <span className="section-en mono">{en}</span>
      </div>
      <div className="section-body">{children}</div>
    </section>
  );
}
