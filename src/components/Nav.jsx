import { useEffect, useState } from "react";
import { navLinks } from "../data/resume";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("overview");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = navLinks.map((l) => l.id);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className={`nav ${scrolled ? "scrolled" : ""}`}>
      <a className="nav-brand" href="#top">
        <span className="nav-brand-mark mono">涛</span>
        <span className="nav-brand-name">赵文涛 · Dawn</span>
      </a>
      <nav className="nav-links" aria-label="主导航">
        {navLinks.map((l) => (
          <a
            key={l.id}
            className={`nav-link mono ${active === l.id ? "active" : ""}`}
            href={`#${l.id}`}
          >
            {l.label}
          </a>
        ))}
      </nav>
      <a className="nav-cta" href="mailto:dawntao07@163.com">
        联系我
      </a>
    </header>
  );
}
