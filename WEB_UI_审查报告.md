# grz 个人站 · Web 界面设计规范审查报告

- **项目**：`/Users/dawn/jl/grz`（React 18 + TypeScript + Vite + Tailwind v3 + framer-motion v12）
- **审查范围**：`src/` 全部 21 个文件
- **参照规范**：WCAG 2.1 AA、W3C HTML 语义化、响应式最佳实践、Apple HIG / Material 交互规范
- **审查日期**：2026-08-13

---

## 一、问题汇总

| 等级 | 数量 | 说明 |
|------|------|------|
| 🔴 关键 | 3 | 影响可访问性核心合规 / 移动端可用性 |
| 🟡 重要 | 6 | 对比度、语义地标、可靠性、死代码、窄屏溢出 |
| 🔵 建议 | 5 | 设计 token 集中化、清理冗余、SEO/性能 |

> 注：未发现构建期 TypeScript 错误（`tsc --noEmit` 结构正确），以下均为规范/体验层面问题。

---

## 二、🔴 关键问题

### 1. 全局缺少键盘可见焦点样式（WCAG 2.4.7 Focus Visible，Level A）
**位置**：全局（所有 `<a>` / `<button>`，如 `ContactButton.tsx:13`、`HeroSection.tsx:17,24`、`Footer.tsx:44`）
**问题**：项目未定义任何 `:focus-visible` 样式，且多处用内联 `outline`（如 `ContactButton.tsx:21` 的 `outline: "2px solid #fff"`）作为装饰边框，并不表示焦点。键盘 Tab 用户完全看不到当前焦点位置。
**修复**：在 `src/index.css` 增加全局焦点环（与品牌色 `#22D3EE` 一致）：
```css
a:focus-visible,
button:focus-visible,
[tabindex]:focus-visible {
  outline: 2px solid #22D3EE;
  outline-offset: 3px;
  border-radius: 6px;
}
```

### 2. 全站动画未适配 `prefers-reduced-motion`（WCAG 2.3.3 / 2.2.2，AA）
**位置**：`FadeIn.tsx:30-33`、`AnimatedText.tsx:41`、`MarqueeSection.tsx:18-36`、`Magnet.tsx:23-45`、`ProjectsSection.tsx:44-49`、`index.css:33`（`scroll-behavior: smooth`）
**问题**：整站大量滚动联动/视差/磁吸动画，且 grep 确认**完全没有** `prefers-reduced-motion` 或 `useReducedMotion` 处理。前庭功能敏感用户会被持续运动干扰；`scroll-behavior: smooth` 也与减动偏好冲突。
**修复（要点）**：
- CSS：`index.css` 增加
```css
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
}
```
- `FadeIn.tsx`：引入 `useReducedMotion`，减动时 `initial/whileInView` 直接为 `{opacity:1}`、`transition.duration=0`。
- `AnimatedText.tsx`：减动时 `opacity` 恒为 1。
- `Magnet.tsx`：减动时 `onMouseMove` 不修改 `transform`。
- `MarqueeSection.tsx`：减动时不绑定 scroll 位移（卡片静态排列）。
- `ProjectsSection.tsx`：减动时 `scale` 恒为 1。

### 3. 移动端（< md）导航完全缺失（WCAG 2.4.5 / 2.1.1）
**位置**：`HeroSection.tsx:23` — `nav` 为 `hidden md:flex`
**问题**：导航栏在 `md` 以下整体 `hidden`，且**没有任何替代入口**（无汉堡菜单、无 skip link、无底部导航）。移动用户只能滚动，无法在区块间快速跳转，区块锚点（`#projects` 等）形同虚设。
**修复**：增加一个受控的移动端菜单（带 `aria-expanded` / `aria-controls`）：
```tsx
const [open, setOpen] = useState(false);
// 在 nav 同级放一个 md:hidden 的按钮
<button aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(o => !o)}
  className="md:hidden ...">菜单</button>
{open && (
  <nav id="mobile-nav" className="md:hidden flex-col ...">
    {navLinks.map(l => <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>)}
  </nav>
)}
```

---

## 三、🟡 重要问题

### 4. 白色区块次级文字对比度整体不达标（WCAG 1.4.3 Contrast，AA）
**位置**：
- `ResearchSection.tsx:15`（`text-[#0C0C0C]/50`，约 3.65:1）
- `ResearchSection.tsx:34`（`text-[#0C0C0C]/60`，约 2.7–3.2:1）
- `AwardsSection.tsx:15`（`/50`）、`:26`（`/55`）、`:33`（`/70` 约 2.0:1）
- `EducationSection.tsx:26`（`/55`）
**问题**：在白底区块上大量使用「黑色低透明度」当次要文字，等效为浅灰（#858585 量级），普通小字号（text-xs/sm）需 ≥4.5:1，实际远低于阈值。
**修复**：白色区块的次级文字改用**实色深灰**而非低透明度黑，例如 `text-[#3A3F47]`（对白底约 10.6:1，安全）。将上面所有 `/50 /55 /60 /70` 统一替换为实色。

### 5. 深色区块低对比次要文字（WCAG 1.4.3）
**位置**：`ProjectsSection.tsx:76`（`text-[#6B7A90] text-[0.7rem]`，约 4.48:1，压线未过）、`:106`（`text-[#6B7A90] text-[0.65rem]`）
**修复**：将 `#6B7A90` 提亮为 `#7E8CA0`（对 `#0C0C0C` 约 5.7:1）。

### 6. 渐变文字应用于小号/正文，对比度有风险（WCAG 1.4.3）
**位置**：`index.css:24` 定义的 `.hero-heading` 渐变（顶 `#646973` 约 3.54:1）；用于 `HeroSection.tsx:73,85,99`（标签 `text-[clamp(0.55rem,1.05vw,0.8rem)]`，极小号）、`:108`（tagline `font-medium` 小号）。
**问题**：渐变顶端 `#646973` 在 `#0C0C0C` 上仅 3.54:1，对 8–10px 的非加粗小字不满足 4.5:1。
**修复**：大号标题（h1/h2，≥24px 或加粗 ≥18.66px）保留渐变；**小号标签/正文改用实色** `#9FB0C3`（约 8.8:1）或 `#A9B7C6`。

### 7. 缺少 `<main>` 主地标，且各 `<section>` 未命名（WCAG 1.3.1 / 最佳实践）
**位置**：`App.tsx:13`（根节点为 `<div>`）、各 `Section` 组件（如 `HeroSection.tsx:8` 等）
**问题**：全站无 `<main>` 地标；`<section>` 仅有 `id` 无 `aria-label`/`aria-labelledby`，屏幕阅读器无法朗读区块名称。
**修复**：
- `App.tsx`：用 `<main style={{overflowX:"clip"}}>` 包裹各 Section（保留 `overflow-x` 行为）。
- 各 Section 增加 `aria-labelledby`，指向其内部 `<h2 id="...">`（或 `aria-label`）。

### 8. 死代码：`hero-heading-on-dark` 类未定义
**位置**：`ResearchSection.tsx:40` 引用 `hero-heading-on-dark`；`src/index.css` 仅定义了 `.hero-heading`，**该类从未定义**。
**问题**：该 `div`（研究区黑色指标卡上的数值）实际退化为普通白字，渐变意图丢失，且属于无效类名，影响视觉一致性。
**修复**：二选一——① 在 `index.css` 补定义 `.hero-heading-on-dark { ...同 .hero-heading... }`；② 直接删掉该类名（当前在黑卡上白字已可读）。推荐做法 ① 以统一标题观感。

### 9. 固定宽度技能卡在窄屏溢出（响应式）
**位置**：`visuals.tsx:101`（`w-[420px] h-[270px]`）、`:294`（`w-[420px] h-[280px]`）；被 `MarqueeSection.tsx:57,72` 使用
**问题**：横向跑马灯卡片固定 420px，在 320–390px 手机上被 `overflow-hidden` 裁切，单卡仅露出约 75%，文字/标签可读性差。
**修复**：卡片宽度改为响应式（如 `w-[280px] sm:w-[360px] lg:w-[420px]`），或窄屏改为竖向网格堆叠。

---

## 四、🔵 建议级

### 10. 设计 token 未集中（可维护性 / 视觉一致性）
**位置**：`tailwind.config.js:1`（`theme.extend` 为空），全站硬编码 `#0C0C0C / #D7E2EA / #22D3EE` 等
**建议**：在 `tailwind.config.js` 的 `theme.extend.colors` 中定义 `ink / mist / cyan` 等语义色，统一引用，避免日后调色遗漏。

### 11. 未使用的组件/导出堆积
**位置**：
- `LiveProjectButton.tsx`（grep 全项目仅自身，从未被 import）
- `visuals.tsx` 中 `PortraitVisual`、`DecorOrb`、`DecorGrid`、`GlyphCard` 均未被引用
**建议**：删除或接入使用；若为备用素材请加目录注释，避免误判。

### 12. 外部 Figma 图片依赖（可靠性 / 性能）
**位置**：`AboutSection.tsx:8-38`（4 张图来自 `shrug-person-78902957.figma.site`）
**问题**：装饰图依赖第三方 Figma 预览域名，该域名随时可能失效/防盗链，导致图片 404；且为额外网络请求。
**建议**：下载到 `public/` 本地引用，或改为 `visuals.tsx` 中已有的 SVG 装饰（`DecorOrb`/`DecorGrid`）。

### 13. SEO / 社交分享不完整
**位置**：`index.html:1`
**建议**：补充 Open Graph（`og:title/og:description/og:image`）、`theme-color`（深色 `#0C0C0C`）、以及 `<script type="application/ld+json">` 的 Person 结构化数据，利于社媒分享与搜索引擎。

### 14. 图片体积与冗余资源
**位置**：`public/`（hero 用 `avatar-3d.png` 702KB；另有未使用的 `Glossy_3D_rendered_avatar…png` 1.6MB 与 `avatar-3d_副本.png`）
**建议**：压缩 hero 头像（转 WebP，可降至 ~150KB）；清理未使用/副本资源。

### 15. `AnimatedText` 滚动联动透明度导致文字初始极低可见度
**位置**：`AnimatedText.tsx:41`（`opacity` 从 0.2 起，随滚动渐显）
**问题**：「关于我」正文初始 `opacity:0.2`，需滚动到特定进度才完全可读；若用户直接定位到区块或 JS 异常，可读性受损。
**建议**：下限提高到 `0.55` 以上，或减动偏好下直接 `opacity:1`。

---

## 五、值得肯定的做法 ✅
- `index.html` 已设 `lang="zh-CN"`、title、meta description、内联 SVG favicon、字体 `preconnect`/`display=swap`。
- `AnimatedText.tsx:19` 已加 `aria-label` 覆盖拆分字符，屏幕阅读器可正确朗读。
- `visuals.tsx` 中的 SVG（含 `ProjectMockup`、`PortraitVisual`）均带 `aria-label`/`role="img"`，自包含无外链，做法规范。
- 标题层级合理（单 `<h1>` + 各区块 `<h2>`），断点 `sm/md/lg` 使用一致。
- 外链均带 `rel="noreferrer"`，`loading="lazy"`/`decoding="async"` 已用于装饰图。

---

## 六、优先修复顺序
1. 🔴 #1 焦点可见性（一行 CSS，合规与可用性立竿见影）
2. 🔴 #2 减动偏好适配（无障碍合规硬指标）
3. 🔴 #3 移动端导航（否则移动端不可导航）
4. 🟡 #4/#5/#6 对比度（AA 硬性指标，批量替换为实色即可）
5. 🟡 #7 主地标 + 区块命名
6. 其余 🟡/🔵 按迭代推进
