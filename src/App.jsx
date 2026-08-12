import { useEffect } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import OpenSource from "./components/OpenSource";
import Research from "./components/Research";
import Awards from "./components/Awards";
import Education from "./components/Education";
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -36px 0px" }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Nav />
      <main id="overview">
        <Hero />
        <Skills />
        <Projects />
        <OpenSource />
        <Research />
        <Awards />
        <Education />
      </main>
      <Footer />
    </>
  );
}
