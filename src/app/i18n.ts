// =============================================================================
// BROOKLET ADVISORY — BILINGUAL CONTENT (English / 简体中文)
//
// All Chinese translations are stored in the `zh` object below.
// To update Chinese text, find the matching key inside `zh: { ... }` and edit
// the string value. Do NOT change any key names — only the string values.
// =============================================================================

export type Lang = "en" | "zh";

const en = {
  nav: {
    about: "About",
    services: "Services",
    whyUs: "Why Us",
    team: "Team",
    contact: "Contact",
    getInTouch: "GET IN TOUCH",
  },

  hero: {
    label: "Compliance Advisory",
    line1: "Brooklet Advisory,",
    line2: "Where Clarity",
    accent: "Begins",
    tagline:
      "A Hong Kong specialist consultancy helping financial institutions with licensing, compliance, and regulatory engagement.",
    ctaServices: "OUR SERVICES",
    ctaLearn: "LEARN MORE",
  },

  about: {
    label: "About Brooklet",
    h2line1: "Regulatory Expertise,",
    h2line2: "Commercially Sound.",
    p1: "Brooklet Advisory is a specialist consulting firm providing expert guidance on Hong Kong's regulatory landscape. Founded by industry professionals who combine decades of in-house experience at global investment banks, brokerages, asset management firms, and the Hong Kong Exchanges with strong legal and compliance credentials.",
    p2: "Our practical approach helps clients navigate licensing, manage ongoing compliance obligations, and confidently handle regulatory scrutiny — delivering solutions that are both compliant and commercially sound.",
    stats: [
      { value: "140+", label: "Institutional Clients" },
      { value: "25+", label: "Years in Financial Industry" },
      { value: "4", label: "Regulatory Frameworks\n(SFC · HKEX · MAS · AMCM)" },
      { value: "3", label: "Markets\n(Hong Kong, Macao, Mainland)" },
    ],
  },

  services: {
    label: "What We Do",
    h2: "Our Services",
    subtitle:
      "End-to-end support across the full business lifecycle, from market entry to ongoing compliance and regulatory defense.",
    items: [
      {
        number: "01",
        title: "Licensing & Registration",
        tagline: "Market Entry & Authorisation",
        description:
          "End-to-end guidance through every stage of the application and approval process, from initial scoping to final authorisation.",
        bullets: [
          "SFC licence applications (Types 1–10)",
          "SFC Virtual Asset (VA) licensing & uplifts",
          "HKEX (SEHK & HKFE) Exchange Participantship",
          "HKEX China Connect (CCEP / TTEP) registration",
          "HKEX Market Maker Permit applications",
        ],
      },
      {
        number: "02",
        title: "Ongoing Compliance Advisory",
        tagline: "Compliance Outsourcing",
        description:
          "Acting as your trusted, outsourced compliance partner — embedded in your operations, covering both SFC and HKEX obligations.",
        bullets: [
          "AML/CFT frameworks & KYC / investor suitability",
          "Cross-border fundraising & product distribution rules",
          "Pre-trade & post-trade controls, error trade advisory",
          "AI Governance policies and procedures",
          "BCAN generation & Northbound Investor ID Model",
        ],
      },
      {
        number: "03",
        title: "Regulatory Inspection Support",
        tagline: "Regulatory Defense & Crisis Management",
        description:
          "Preparing you for and guiding you through regulatory scrutiny — from proactive readiness to real-time inspection support.",
        bullets: [
          "SFC & HKEX on-site inspection readiness",
          "Mock regulatory audits & gap analyses",
          "Thematic review preparation",
          "Assistance with formal regulatory inquiries",
          "Incident remediation planning",
        ],
      },
      {
        number: "04",
        title: "Specialised Advisory",
        tagline: "Project Support & Training",
        description:
          "Targeted expertise for critical business events, policy needs, and capability building across your compliance function.",
        bullets: [
          "CPT-eligible compliance training for staff",
          "Compliance Manuals, PA Dealing & BCP drafting",
          "Incident response & remediation guidance",
          "M&A support for SFC licensed corporations",
          "Fund lifecycle compliance",
        ],
      },
    ],
  },

  whyUs: {
    label: "The Brooklet Edge",
    h2: "Why",
    h2accent: "Brooklet?",
    body: "We believe compliance should be a business enabler, not a barrier. Our edge is built on practicality, experience, reliability, and regional fluency, not just knowledge of rules.",
    statLabel: "Financial institutions supported\nacross Asia",
    edges: [
      {
        number: "-01",
        title: "Former Regulators & Enforcers",
        detail:
          "Our firsthand experience within HKEX Enforcement provides a practical understanding of how regulators assess compliance and manage risk — we know what they look for because we have looked ourselves.",
      },
      {
        number: "-02",
        title: "Commercial-to-Compliance Perspective",
        detail:
          "With decades of experience in global investment banks and front-office roles at HSBC, CITIC Securities, and Goldman Sachs, we understand the commercial realities and operational pressures you face.",
      },
      {
        number: "-03",
        title: "Proven Institutional Scale",
        detail:
          "Our leadership has supported the compliance needs of over 140+ financial institutions, ranging from global investment banks to boutique asset managers across Asia.",
      },
      {
        number: "-04",
        title: "Cross-Border Specialists",
        detail:
          "Deep expertise bridging Mainland China, Macao, and Hong Kong regulatory frameworks, including SFC, HKEX, MAS, and AMCM — with native linguistic and regulatory fluency.",
      },
    ],
  },

  team: {
    label: "The Minds Behind Every Insight",
    h2: "Leadership Team",
    subtitle:
      "Former regulators, front-office veterans, and legal professionals who have sat on both sides of the compliance table.",
    viewBio: "VIEW FULL BIO",
    members: [
      {
        name: "Thomas Uruma",
        role: "Director",
        yearsValue: "25+",
        yearsLabel: "YEARS OF INDUSTRY EXPERIENCE",
        expertise: ["Brokerage", "Private Banking", "Commercial-to-Compliance"],
        languages: "English · Japanese · Cantonese · Putonghua",
        bio: [
          "Thomas has over 25 years of experience in both front-office and compliance roles. He began his career in sales and trading within private banking before moving to senior brokerage positions at OKASAN International, CITIC Securities, and HSBC.",
          "This front-office background provides him with a practical understanding of business pressures. He later transitioned to compliance, and as Regional Head of Client Services at a leading consultancy, he managed a portfolio of over 140 clients, from global investment banks to specialist asset managers. His experience allows him to deliver compliant and commercially astute solutions.",
          "Thomas holds a Master of Arts in Economics from Soka University and is fluent in English, Japanese, Cantonese, and Putonghua.",
        ],
      },
      {
        name: "Ben Li",
        role: "Director",
        yearsValue: "12+",
        yearsLabel: "YEARS IN LEGAL & COMPLIANCE",
        expertise: ["Asset Management", "AML/CFT", "Regulatory Enforcement"],
        languages: "English · Putonghua",
        bio: [
          "Ben is a legal and compliance professional with over 12 years of experience across multiple jurisdictions, including Singapore, Hong Kong, China and Macao. His career has focused on designing and implementing compliance frameworks for asset managers, brokers, and innovative fintech platforms.",
          "As a former enforcement agent at HKEX, Ben conducted on-site inspections of brokerage firms, providing him with first-hand knowledge of how regulators assess compliance with trading and clearing rules.",
          "Most recently, Ben served as the Manager-in-Charge of Compliance for the Micro Connect Group. In this role, he built the alternative fund compliance framework and the AML/CFT architecture for the Micro Connect (Macao) Financial Assets Exchange from the ground up.",
          "Ben is a CFA charterholder, holds a Master of Laws (Chinese Law) from the University of Hong Kong, and is fluent in English and Putonghua.",
        ],
      },
    ],
  },

  contact: {
    label: "Get In Touch",
    h2: "Begin the Conversation",
    subtitle:
      "Whether you have a specific compliance challenge or simply want to explore how Brooklet can support your business, we'd love to hear from you.",
    info: [
      { label: "Office", detail: "Level 20, One IFC\nCentral, Hong Kong" },
      { label: "Email", detail: "info@brookletadvisory.com" },
      { label: "Phone", detail: "+852 9240 9588" },
    ],
    quote: '"We deliver compliant solutions that are commercially sound."',
    form: {
      fullName: "FULL NAME *",
      company: "COMPANY",
      email: "EMAIL ADDRESS *",
      phone: "PHONE NUMBER",
      service: "SERVICE OF INTEREST",
      message: "YOUR MESSAGE *",
      placeholderName: "Your full name",
      placeholderCompany: "Your organisation",
      placeholderEmail: "your@email.com",
      placeholderPhone: "+852/+86 XXXX XXXX",
      placeholderMessage: "Tell us about your compliance needs...",
      selectDefault: "Select a service...",
      options: [
        "Licensing & Registration",
        "Ongoing Compliance Advisory",
        "Regulatory Inspection Support",
        "Specialised Advisory & Training",
        "Other",
      ],
      send: "SEND MESSAGE",
      sending: "SENDING...",
      successTitle: "Message Received",
      successBody: "Your message has been sent. We will be in touch shortly.",
      validationError:
        "Please fill in all required fields: Full Name, Email Address, and Your Message.",
      serverError:
        "Something went wrong. Please try again or contact us directly at info@brookletadvisory.com.",
    },
  },

  footer: {
    tagline:
      "A Hong Kong specialist consultancy helping financial institutions with licensing, compliance, and regulatory engagement.",
    navigation: "NAVIGATION",
    services: "SERVICES",
    navLinks: [
      { label: "About Us", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "The Brooklet Edge", href: "#why-us" },
      { label: "Our Team", href: "#team" },
      { label: "Contact", href: "#contact" },
    ],
    serviceLinks: [
      "Licensing & Registration",
      "Ongoing Compliance Advisory",
      "Regulatory Inspection Support",
      "Specialised Advisory",
      "Compliance Training",
      "M&A Support",
    ],
    copyright: "© 2025 Brooklet Advisory Limited. All rights reserved.",
    disclaimer:
      "Brooklet Advisory Limited is not a law firm or tax advisor. All information provided is for general purposes only and does not constitute legal or tax advice.",
    privacyPolicy: "Privacy Policy",
    termsOfUse: "Terms of Use",
  },
};

// =============================================================================
// 中文翻译内容（简体中文）
// Chinese Simplified translations — edit string values here to update Chinese text
// =============================================================================

const zh: typeof en = {
  nav: {
    about: "关于我们",
    services: "服务范围",
    whyUs: "为何选择我们",
    team: "团队成员",
    contact: "联系我们",
    getInTouch: "立即联系",
  },

  hero: {
    label: "合规咨询",
    line1: "Brooklet Advisory，",
    line2: "清晰始于",
    accent: "此",
    tagline: "一家立足香港的专业监管与合规咨询机构，协助金融机构应对发牌、管理持续性合规义务，并从容面对监管审查。",
    ctaServices: "服务范围",
    ctaLearn: "了解更多",
  },

  about: {
    label: "关于初源",
    h2line1: "专业监管合规咨询，",
    h2line2: "商业务实为先。",
    p1: "初源咨询是一家专业合规咨询公司，为客户提供香港监管事务方面的专业指导。公司由资深业内人士创立，团队成员曾任职于全球顶级投资银行、经纪行、资产管理公司及香港交易所，兼具深厚的法律与合规专业背景。",
    p2: "我们以务实的方式协助客户申请牌照、履行持续合规义务，并自信地应对监管审查，提供兼顾合规与商业效益的解决方案。",
    stats: [
      { value: "140+", label: "机构客户" },
      { value: "25+", label: "金融行业从业年资" },
      { value: "4", label: "监管框架\n（SFC · HKEX · MAS · AMCM）" },
      { value: "3", label: "覆盖市场\n（香港、澳门、内地）" },
    ],
  },

  services: {
    label: "业务范围",
    h2: "我们的服务",
    subtitle: "全程支持业务全生命周期，从市场准入到持续合规及监管应对。",
    items: [
      {
        number: "01",
        title: "牌照申请与注册",
        tagline: "市场准入与授权",
        description:
          "全程指导申请及审批各阶段，从初步规划到最终授权，提供一站式专业支持。",
        bullets: [
          "证监会牌照申请（第1至10类）",
          "证监会虚拟资产（VA）牌照申请及升级",
          "香港交易所（联交所及期交所）交易所参与者资格",
          "香港交易所互联互通（CCEP / TTEP）注册",
          "香港交易所庄家许可证申请",
        ],
      },
      {
        number: "02",
        title: "持续合规顾问",
        tagline: "外部合规咨询",
        description:
          "作为您信赖的外包合规伙伴，深度嵌入运营体系，全面覆盖证监会及香港交易所的合规要求。",
        bullets: [
          "反洗钱/反恐融资框架及KYC/投资者适合性评估",
          "跨境募资及产品分销规则",
          "交易前后控制及错误交易咨询",
          "人工智能治理政策与程序",
          "BCAN生成及北向投资者识别码模式",
        ],
      },
      {
        number: "03",
        title: "监管检查支持",
        tagline: "监管应对及危机管理",
        description:
          "协助您应对监管审查，从主动备审到实时检查支持，全程陪伴。",
        bullets: [
          "证监会及香港交易所现场检查备审",
          "模拟监管审计及差距分析",
          "主题审查备审",
          "协助处理正式监管查询",
          "事件整改规划",
        ],
      },
      {
        number: "04",
        title: "专项顾问服务",
        tagline: "项目支持与培训",
        description:
          "针对关键业务事项、政策需求及合规团队能力提升，提供专项专业支持。",
        bullets: [
          "符合持续专业培训（CPT）的合规培训",
          "合规手册、个人账户买卖及业务持续计划（BCP）起草",
          "事件应对及整改指导",
          "证监会持牌法团并购支持",
          "基金募投管退全生命周期合规",
        ],
      },
    ],
  },

  whyUs: {
    label: "初源的优势",
    h2: "为何选择",
    h2accent: "初源？",
    body: "我们相信合规应是业务的助力，而非障碍。我们的优势建立于务实精神、丰富经验、高度可靠性及对地区市场的深刻理解，而不仅仅是规则知识。",
    statLabel: "亚洲各地受服务\n金融机构数目",
    edges: [
      {
        number: "-01",
        title: "前监管官员及执法人员",
        detail:
          "团队成员曾任职于香港交易所执法部门，深刻了解监管机构评估合规状况及管理风险的实际方向——我们知道监管机构关注什么，因为我们亦曾亲身参与。",
      },
      {
        number: "-02",
        title: "商业与合规的双重视角",
        detail:
          "凭借在全球投资银行及汇丰银行、中信证券、高盛前台部门的数十年从业经验，我们深刻理解您所面对的商业现实与运营压力。",
      },
      {
        number: "-03",
        title: "经验证的机构规模服务能力",
        detail:
          "团队管理层曾为逾140家金融机构提供合规支持，涵盖全球投资银行至亚洲精品资产管理公司。",
      },
      {
        number: "-04",
        title: "跨境市场专家",
        detail:
          "深度掌握内地、澳门及香港监管框架的专业知识，包括证监会、香港交易所、MAS及AMCM，兼具本地语言及监管的双重流畅度。",
      },
    ],
  },

  team: {
    label: "专业深耕，洞见有据",
    h2: "领导团队",
    subtitle: "前监管官员、前台资深人士及法律专业人士，横跨合规监管的两端。",
    viewBio: "查看完整简历",
    members: [
      {
        name: "Thomas Uruma",
        role: "董事",
        yearsValue: "25+",
        yearsLabel: "年行业经验",
        expertise: ["经纪业务", "私人银行", "商业转合规"],
        languages: "英语 · 日语 · 粤语 · 普通话",
        bio: [
          "Thomas 拥有超过 25 年的经验，其职业生涯覆盖前台业务与合规领域，能为客户提供独特的专业视角。他的职业生涯始于私人银行的销售与交易岗位，随后在 OKASAN International (冈三国际)、中信证券及汇丰银行 (HSBC) 等国际机构担任证券和期货经纪业务的高级职位。",
          "丰富的前台市场经验使他对业务运营中的商业压力有着切身的理解。他后期转型专注于合规领域，并曾在一家知名咨询公司担任客户服务区域总监，负责管理超过 140 家机构客户，涵盖全球投资银行及专业资产管理公司。这一背景使他能够提供既严谨合规又富于商业智慧的解决方案。",
          "Thomas 持有日本创价大学经济学硕士学位，能流利使用英语、日语、粤语和普通话。",
        ],
      },
      {
        name: "李浩",
        role: "董事",
        yearsValue: "12+",
        yearsLabel: "年法律及合规经验",
        expertise: ["资产管理", "反洗钱/反恐融资", "监管执法"],
        languages: "英语 · 普通话",
        bio: [
          "李浩是一位法律与合规专业人士，拥有超过 12 年的从业经验，其工作足迹遍布新加坡、香港、中国内地和澳门等多个司法管辖区。他的职业生涯专注于为资产管理公司、券商及创新金融科技平台设计并实施合规框架。",
          "李浩曾任香港交易所 (HKEX) 执法人员，负责对券商进行现场检查，这使他对监管机构如何评估交易与清算规则的合规情况拥有第一手的经验。",
          "在联合创立初源之前，李浩担任滴灌通集团的合规事务主管 (MIC)。在此期间，他从零开始为集团的另类基金业务搭建了合规框架，并为滴灌通（澳门）金融资产交易所搭建了反洗钱/反恐怖主义融资 (AML/CFT) 架构。",
          "李浩是特许金融分析师 (CFA)，持有香港大学法学硕士 (中国法) 学位，能流利使用英语和普通话。",
        ],
      },
    ],
  },

  contact: {
    label: "联系我们",
    h2: "开始对话",
    subtitle:
      "无论您面临特定的合规挑战，还是希望探索初源如何支持您的业务发展，我们期待与您交流。",
    info: [
      { label: "办公室", detail: "香港中环国际金融中心一期20楼" },
      { label: "电邮", detail: "info@brookletadvisory.com" },
      { label: "电话", detail: "+852 9240 9588" },
    ],
    quote: "「我们提供兼顾合规要求与商业效益的解决方案。」",
    form: {
      fullName: "姓名 *",
      company: "公司",
      email: "电邮地址 *",
      phone: "电话号码",
      service: "意向服务",
      message: "留言内容 *",
      placeholderName: "您的全名",
      placeholderCompany: "您的机构名称",
      placeholderEmail: "your@email.com",
      placeholderPhone: "+852/+86 XXXX XXXX",
      placeholderMessage: "请告知您的合规需求……",
      selectDefault: "请选择服务……",
      options: [
        "牌照申请与注册",
        "持续合规顾问",
        "监管检查支持",
        "专项顾问及培训",
        "其他",
      ],
      send: "发送留言",
      sending: "发送中……",
      successTitle: "消息已收到",
      successBody: "您的留言已成功发送，我们将尽快与您联系。",
      validationError: "请填写所有必填项：姓名、电邮地址及留言内容。",
      serverError:
        "发送失败，请重试或直接发送邮件至 info@brookletadvisory.com。",
    },
  },

  footer: {
    tagline:
      "香港专业合规咨询公司，为金融机构提供牌照申请、持续合规及监管审查应对等专业支持。",
    navigation: "导航",
    services: "服务范围",
    navLinks: [
      { label: "关于我们", href: "#about" },
      { label: "服务范围", href: "#services" },
      { label: "初源优势", href: "#why-us" },
      { label: "我们的团队", href: "#team" },
      { label: "联系我们", href: "#contact" },
    ],
    serviceLinks: [
      "牌照申请与注册",
      "持续合规顾问",
      "监管检查支持",
      "专项顾问服务",
      "合规培训",
      "并购支持",
    ],
    copyright: "© 2025 初源咨询有限公司 版权所有。",
    disclaimer:
      "初源咨询有限公司并非律师事务所或税务顾问。所有信息仅供一般参考，不构成法律或税务意见。",
    privacyPolicy: "隐私政策",
    termsOfUse: "使用条款",
  },
};

export const translations = { en, zh };
export type Translations = typeof en;
