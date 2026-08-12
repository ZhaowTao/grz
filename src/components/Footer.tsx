import FadeIn from "./FadeIn";
import ContactButton from "./ContactButton";
import { profile } from "../data/resume";

const CONTACTS = [
  { label: "电话", value: profile.contact.phone, href: `tel:${profile.contact.phone}` },
  { label: "邮箱", value: profile.contact.email, href: `mailto:${profile.contact.email}` },
  { label: "GitHub", value: profile.contact.github, href: "https://github.com/ZhaowTao" },
  { label: "出生", value: profile.contact.birth, href: undefined },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 pt-24 sm:pt-28 md:pt-36 pb-12"
    >
      <FadeIn delay={0} y={40}>
        <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-center text-[clamp(3rem,14vw,200px)]">
          联系我
        </h2>
      </FadeIn>
      <p className="text-center text-[#9FB0C3] font-light tracking-wide mt-4 max-w-xl mx-auto text-[clamp(0.9rem,1.8vw,1.15rem)]">
        无论是数据分析、AI 应用开发，还是产品合作，都欢迎随时联系。
      </p>

      <div className="flex justify-center mt-10">
        <ContactButton label="发送邮件" />
      </div>

      <div className="max-w-3xl mx-auto mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
        {CONTACTS.map((c) => {
          const inner = (
            <div className="rounded-2xl border border-[#1C2436] bg-[#0B0F1A] p-5 text-center">
              <div className="text-[#22D3EE] text-xs uppercase tracking-widest mb-2">
                {c.label}
              </div>
              <div className="text-[#D7E2EA] font-medium text-[clamp(0.85rem,1.6vw,1.05rem)] break-all">
                {c.value}
              </div>
            </div>
          );
          return c.href ? (
            <a key={c.label} href={c.href} target="_blank" rel="noreferrer" className="transition-opacity hover:opacity-80">
              {inner}
            </a>
          ) : (
            <div key={c.label}>{inner}</div>
          );
        })}
      </div>

      <div className="text-center text-[#6B7A90] text-xs mt-16">
        © 2026 赵文涛 · 数据分析师 / AI 应用开发工程师 · 青岛
      </div>
    </footer>
  );
}
