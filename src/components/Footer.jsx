import { profile } from "../data/resume";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-kicker mono">保持联系 · GET IN TOUCH</p>
        <h2 className="footer-title">
          一起把数据变成
          <br />
          真实的产品
        </h2>
        <a className="btn btn-footer" href={`mailto:${profile.contact.email}`}>
          dawntao07@163.com
        </a>
        <div className="footer-meta mono">
          <span>{profile.contact.phone}</span>
          <span>{profile.contact.github}</span>
        </div>
      </div>
      <div className="footer-bar">
        <span className="mono">© 2026 赵文涛</span>
        <a className="mono back-top" href="#top">
          回到顶部 ↑
        </a>
      </div>
    </footer>
  );
}
