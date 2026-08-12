export const profile = {
  name: "赵文涛",
  roles: ["数据分析师", "AI 应用开发工程师"],
  tagline:
    "数据科学与大数据技术本科在读，习惯用数据回答业务问题，也喜欢把想法做成真实可用的产品。",
  contact: {
    phone: "176-165-00107",
    email: "dawntao07@163.com",
    github: "github.com/ZhaowTao",
    birth: "2004.01",
  },
  stats: [
    { value: "12,101", label: "小程序上架近一个月累计用户" },
    { value: "4.01", label: "GPA / 5.0 · 专业前 2.3%" },
    { value: "0.884", label: "薪资预测模型 R² · MAE 1,453 元" },
    { value: "IEEE", label: "ICIPCA 2025 论文第一作者" },
  ],
};

export const education = {
  school: "青岛城市学院",
  major: "数据科学与大数据技术",
  degree: "本科",
  period: "2022.09 – 2026.06",
  highlight: { value: "4.01", unit: "GPA / 5.0", note: "均分 91.19 · 专业前 2.3%" },
  rows: [
    { label: "主修方向", value: "数据分析建模 · AI 应用开发 · 大数据工程" },
    { label: "英语能力", value: "CET-6 · IEEE 英文论文第一作者" },
    { label: "学术训练", value: "回归分析 · 空间计量（GWR/DID）· 多模型融合" },
  ],
};

export const skills = [
  {
    no: "01",
    title: "AI 应用开发",
    tags: [
      "API 集成",
      "Function Calling",
      "Prompt Engineering",
      "AI 输出质量控制",
      "AI 审核系统",
      "Codex",
      "Claude Code",
      "OpenClaw",
    ],
  },
  {
    no: "02",
    title: "编程语言",
    tags: ["Python", "SQL", "JavaScript / TypeScript", "WXML / WXSS"],
  },
  {
    no: "03",
    title: "数据分析与建模",
    tags: [
      "Pandas",
      "Scikit-learn",
      "CatBoost / XGBoost / LightGBM",
      "Stacking",
      "RFECV",
      "SHAP",
      "SparkML",
    ],
  },
  {
    no: "04",
    title: "数据可视化",
    tags: ["ECharts", "PowerBI", "Flask 可视化平台", "Canvas 2D"],
  },
  {
    no: "05",
    title: "数据采集与存储",
    tags: ["Selenium", "Scrapy", "MySQL"],
  },
  {
    no: "06",
    title: "大数据",
    tags: ["Spark", "Hadoop", "Hive"],
  },
  {
    no: "07",
    title: "开发与工具",
    tags: ["Git", "Linux", "微信云开发", "DeepSeek API", "Flask"],
  },
  {
    no: "08",
    title: "英语能力",
    tags: ["CET-6", "IEEE 英文论文第一作者"],
  },
];

export const projects = [
  {
    no: "01",
    title: "人森梦 — AI 名人 MBTI 性格探索小程序",
    status: "已上线 · 12,101 用户",
    role: "产品设计 & 独立开发",
    period: "2026.06",
    stack: ["微信小程序", "微信云开发", "DeepSeek API", "AI 审核系统", "Canvas 2D"],
    points: [
      "3 天从 0 到 1 完成产品设计、开发、上线全流程；上架近一个月累计用户 12,101，上线一周即达 4,056，日均新增 580+，搜索流量占比 89%，快速验证 PMF；两周内迭代至 v1.2.0",
      "集成 DeepSeek API 实现 AI 性格分析，设计三层输出质量控制系统（Schema 校验 + 白名单 + 规则过滤），引入百度百科事实锚点降低幻觉，自研 MBTI → 游戏八维性格跨体系语义对齐算法",
      "搭建 AI 自动化审核系统，对用户贡献角色进行 AI 审核 + 智能修改，大幅降低人工审核成本；配套金币激励体系（签到 / 分享 / 广告 / 共创）驱动用户增长与留存",
    ],
    metrics: [
      { value: "12,101", label: "上架近一个月累计用户" },
      { value: "580+", label: "日均新增" },
      { value: "89%", label: "搜索流量占比" },
    ],
  },
  {
    no: "02",
    title: "大数据岗位薪资分析预测系统",
    status: "独立开发",
    role: "独立开发",
    period: "2026.03 – 2026.04",
    stack: ["Python", "Flask", "MySQL", "XGBoost / LightGBM / CatBoost", "Stacking", "RFECV", "SHAP", "ECharts"],
    points: [
      "Selenium 爬取招聘网站数据，清洗后得到 46,000 条有效数据，面向求职者预测目标岗位薪资区间",
      "RFECV 筛选 8 个核心特征，Stacking 融合三大模型 + Ridge 元学习，MAE 1,453 元、R² 0.884，较 Ridge 基准 MAE 降低 77.3%",
      "Flask 后端 + MySQL 存储，ECharts 可视化大屏，集成 AI 助手（Function Calling）与 PDF 报告导出",
    ],
    metrics: [
      { value: "1,453", label: "MAE（元）" },
      { value: "0.884", label: "R²" },
      { value: "-77.3%", label: "相对 Ridge 基准 MAE" },
    ],
  },
  {
    no: "03",
    title: "乳腺癌智能诊断预测系统",
    status: "独立开发",
    role: "独立开发",
    period: "2025.05 – 2025.06",
    stack: ["Python", "SparkML", "PCA", "多模型融合"],
    points: [
      "面向医院初筛辅助诊断场景，构建可视化交互平台，输出诊断报告与特征分析",
      "下采样 + PCA 降维 + 多模型融合，实现 97% 准确率、0.96 AUC、94% 恶性样本召回率",
    ],
    metrics: [
      { value: "97%", label: "准确率" },
      { value: "0.96", label: "AUC" },
      { value: "94%", label: "恶性样本召回率" },
    ],
  },
];

export const research = {
  venue: "IEEE ICIPCA 2025",
  status: "录用 · 第一作者",
  title: "基于回归分析的网络犯罪预测研究",
  models: "GWR + DID 跨域预测模型",
  metric: { value: "R² = 0.78", label: "跨域预测拟合优度" },
  abstract:
    "面向网络犯罪时空演化问题，构建 GWR（地理加权回归）+ DID（双重差分）跨域预测模型，在跨地区、跨周期场景下对犯罪趋势进行量化预测与归因分析。",
};

export const openSource = [
  {
    name: "codex-mover",
    desc: "把 Codex 数据和工作区从满盘 C 盘迁移到其他磁盘（目录联接），原路径保持有效，全程备份校验与自动回滚；自带便携 GUI 与 CLI。",
    lang: "PowerShell",
    stars: 2,
    url: "https://github.com/ZhaowTao/codex-mover",
  },
  {
    name: "AI-narrator",
    desc: "AI 直播自动解说：直播过程中自动触发豆包，实时完成智能解说与弹幕播报。",
    lang: "Python",
    stars: 3,
    url: "https://github.com/ZhaowTao/AI-narrator",
  },
];

export const awards = [
  { title: "国家奖学金", note: "最高等级学业荣誉" },
  { title: "美国大学生数学建模竞赛 Honorable Mention", note: "全球前 30%" },
  { title: "“外研社·国才杯”英语综合能力公开赛", note: "全国一等奖" },
  { title: "睿抗机器人大数据竞赛", note: "全国二等奖" },
  { title: "山东省创客大赛", note: "省一等奖" },
  { title: "优秀毕业生 · 优秀学生标兵", note: "校级荣誉" },
  { title: "累计校级以上荣誉", note: "40 余项" },
];

export const campus = [
  {
    title: "二进制联盟社团副社长",
    note: "带领 5 支队伍参加国家级竞赛，4 支获奖，获奖率 80%",
  },
  {
    title: "党务助理团宣传部部长",
    note: "统筹宣传策划与内容产出",
  },
  {
    title: "省级先进班集体 · 安全委员",
    note: "班级建设与安全事务管理",
  },
  {
    title: "青岛马拉松等大型活动志愿者",
    note: "赛会服务与现场协调",
  },
];

export const navLinks = [
  { id: "overview", label: "概览" },
  { id: "skills", label: "技能" },
  { id: "projects", label: "项目" },
  { id: "opensource", label: "开源" },
  { id: "research", label: "研究" },
  { id: "honors", label: "荣誉" },
  { id: "education", label: "教育" },
];
