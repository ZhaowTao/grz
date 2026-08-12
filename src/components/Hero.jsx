import { profile } from "../data/resume";
import Seal from "./Seal";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-main">
        <p className="hero-kicker mono reveal d1">
          个人档案 <span className="dot">·</span> PERSONAL DOSSIER <span className="dot">·</span> 2026
        </p>
        <h1 className="hero-name reveal d2">{profile.name}</h1>
        <p className="hero-role reveal d3">
          {profile.roles.map((role, i) => (
            <span key={role}>
              {role}
              {i < profile.roles.length - 1 && <span className="role-sep"> / </span>}
            </span>
          ))}
        </p>
        <p className="hero-tagline reveal d3">{profile.tagline}</p>

        <dl className="hero-meta reveal d4">
          {[
            ["电话", profile.contact.phone],
            ["邮箱", profile.contact.email],
            ["GitHub", profile.contact.github],
            ["出生", profile.contact.birth],
          ].map(([label, value]) => (
            <div className="meta-row" key={label}>
              <dt className="mono">{label}</dt>
              <dd className="mono">{value}</dd>
            </div>
          ))}
        </dl>

        <div className="hero-actions reveal d5">
          <a className="btn btn-primary" href="#projects">
            查看项目
          </a>
          <a className="btn btn-ghost" href="mailto:dawntao07@163.com">
            发送邮件
          </a>
        </div>
      </div>

      <div className="hero-side reveal d4" aria-hidden="true">
        <Seal size={118} />
        <p className="hero-side-note mono">青岛 · 2026 届本科毕业</p>
      </div>

      <div className="hero-stats reveal d5">
        {profile.stats.map((s) => (
          <div className="stat" key={s.label}>
            <span className="stat-value mono">{s.value}</span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
