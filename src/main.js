const header = document.querySelector('[data-header]');
const menuButton = document.querySelector('[data-menu-button]');
const mobileMenu = document.querySelector('[data-mobile-menu]');
const glow = document.querySelector('.cursor-glow');
const spaceBackdrop = document.querySelector('.space-backdrop');
const starfield = document.querySelector('.starfield');
const heroNebula = document.querySelector('.hero-nebula');
const catStage = document.querySelector('[data-cat-stage]');
const modal = document.querySelector('[data-contact-modal]');
const modalDialog = modal?.querySelector('.contact-modal__dialog');
const modalClose = modal?.querySelector('.contact-modal__close');

const translations = {
  zh: {
    'meta.title': '小唐｜全栈设计与开发',
    'meta.description': '小唐的个人作品集——关注网页、软件与用户体验设计。',
    'common.skip': '跳到主要内容',
    'common.home': '返回首页',
    'common.navigation': '主要导航',
    'common.mobileNavigation': '移动端导航',
    'common.social': '社交链接',
    'common.email': '发送邮件',
    'common.viewWork': '查看作品',
    'nav.about': '关于我',
    'nav.work': '作品',
    'nav.journey': '方向',
    'nav.contact': '联系',
    'menu.open': '打开菜单',
    'menu.close': '关闭菜单',
    'language.toEnglish': '切换到英文',
    'language.toChinese': '切换到中文',
    'hero.eyebrow': '你好，我是',
    'hero.name': '小唐。',
    'hero.title': '我把脑海里的想法，<br />做成可以使用的产品。',
    'hero.copy': '我是一名正在朝着全栈设计师前进的创作者，喜欢探索网络世界、学习新知识，也喜欢亲手打磨网站和软件中的每一个细节。',
    'hero.work': '看看我的作品',
    'hero.status': '正在探索新的合作机会',
    'about.title': '关于我',
    'about.paragraph1': '你好！我是小唐。我喜欢探索网络世界、获取新知识，也喜欢把一个还停留在脑海里的想法，亲手变成真正可以打开、操作和持续使用的网站或软件。',
    'about.paragraph2': '我目前正朝着<strong>全栈设计师</strong>的方向前进：从需求梳理、内容组织和界面设计开始，再到前端开发、数据接入和体验迭代，尽量把一件事情从想法完整地做到可用。我做过数据可视化网站、英语学习工具和桌面陪伴应用，也在这些项目里逐渐建立起自己的产品判断。',
    'about.paragraph3': '我尤其在意那些容易被忽略的瞬间：第一次打开时是否知道从哪里开始，加载时有没有清晰反馈，复杂数据能不能被快速理解，用户犯错后是否还能自然地继续。我相信好的设计不只是漂亮的页面，而是让功能、内容和情绪都各就各位。',
    'about.paragraph4': '最近，我把时间放在真实项目的打磨上：继续学习地图渲染与数据可视化，完善 TypeWords 的学习流程，也尝试用更轻量、更有性格的视觉语言表达自己的作品。',
    'about.skills': '常用技术与工作方式：',
    'about.skillDesign': '产品与 UI/UX 设计',
    'about.portraitAlt': '戴着红色围巾的黑色像素风猫咪',
    'about.portraitNote': '保持好奇，持续创造。',
    'work.title': '我做过的一些作品',
    'project.featured': '重点作品',
    'project.openSite': '打开项目网站',
    'project.viewInterface': '查看真实界面',
    'animals.imageAlt': 'Animals 3D 濒危动物地球图谱界面',
    'animals.title': 'Animals 3D · 濒危动物地球图谱',
    'animals.paragraph1': '这是一个把 GBIF 与 iNaturalist 资料整理成可探索界面的数据可视化网站。用户可以先在可旋转的 3D 地球上观察物种分布，再连续过渡到 2D 地图，按区域、受威胁等级、名称和媒体资料逐步缩小范围。',
    'animals.paragraph2': '项目的重点不只是“把地图做出来”，而是让物种数据拥有清晰的阅读路径：左侧统计面板帮助建立全局认知，地图标记提供空间线索，底部筛选区则把搜索、等级和区域条件放在同一条探索链路里。',
    'animals.records': '条展示记录',
    'animals.projection': '连续投影',
    'animals.source': '数据来源',
    'typewords.badge': '输入，复习，真正记住。',
    'typewords.wordsAlt': 'TypeWords 官网真实的单词详情与跟写练习界面',
    'typewords.articlesAlt': 'TypeWords 官网真实的文章练习界面',
    'typewords.title': 'TypeWords · 英语单词训练软件',
    'typewords.paragraph1': 'TypeWords 把“背单词”改造成了一个以键入为核心的学习流程：不是反复点选答案，而是通过跟写、听写、自测、默写和随机复习等模式，让拼写、发音和记忆在一次次输入中建立联系。',
    'typewords.paragraph2': '产品同时覆盖单词、文章和学习资料。FSRS 间隔复习算法会根据记忆状态安排下一次复习，错词会自动回到循环里；数据默认保存在本地，打开网站即可使用，也为 Web、小程序和 VSCode 等不同场景保留了延展空间。',
    'typewords.modes': '种练习模式',
    'typewords.wordBanks': '内置词库',
    'typewords.localFirst': '本地优先',
    'typewords.offline': '离线学习',
    'qpet.imageAlt': 'Q-Pet Level 2 企鹅桌宠角色',
    'qpet.caption': '真实角色资源 · Level 2',
    'qpet.title': 'Q-Pet · 桌面陪伴与效率工具',
    'qpet.paragraph1': 'Q-Pet 是一个面向 Windows 的桌面陪伴工具，目标是在编码、学习和日常工作之间提供一个轻量的陪伴入口。项目把桌宠角色、专注记录、提醒与成长反馈放进同一个可持续使用的桌面体验里。',
    'qpet.paragraph2': '这次展示只使用项目资源包中的真实企鹅角色，不再虚构不存在的控制台截图。企鹅的等级、表情和动作资源可以作为桌宠状态的视觉反馈，让效率功能保持一点亲切感。',
    'qpet.localData': '本地数据',
    'cards.data.title': '真实数据整理',
    'cards.data.copy': '为动物图谱建立物种索引、详情数据与媒体授权流程，把复杂资料整理成可浏览的产品体验。',
    'cards.data.tag1': '数据清洗',
    'cards.data.tag2': '内容设计',
    'cards.data.tag3': '性能优化',
    'cards.usability.title': '细节与可用性',
    'cards.usability.copy': '在加载反馈、无障碍动效、异常提示和响应式布局上持续打磨，让产品不只“能用”，也更好用。',
    'cards.usability.tag1': 'UX 细节',
    'cards.usability.tag2': '无障碍',
    'cards.usability.tag3': '响应式',
    'cards.product.title': '从想法到产品',
    'cards.product.copy': '独立完成需求梳理、界面设计、技术实现和迭代验证，在真实项目中建立完整的产品视角。',
    'cards.product.tag1': '产品思维',
    'cards.product.tag2': '原型设计',
    'cards.product.tag3': '全栈实践',
    'journey.title': '我正在前往哪里',
    'journey.tabs': '成长方向',
    'journey.tabDesign': '全栈设计',
    'journey.tabProduct': '产品实践',
    'journey.tabCollab': '寻求合作',
    'journey.design.title': '把设计判断与开发能力放在一起',
    'journey.design.period': '现在 · 持续学习中',
    'journey.design.item1': '从用户目标出发，独立完成信息结构、视觉界面与交互实现。',
    'journey.design.item2': '继续补足前后端能力，让创意不受实现边界限制。',
    'journey.design.item3': '在每一次迭代中关注性能、可访问性与使用反馈。',
    'journey.product.title': '用真实作品验证想法',
    'journey.product.period': '3 个完整项目 · 仍在增加',
    'journey.product.item1': '桌面应用、学习工具与数据可视化网站都有实际落地经验。',
    'journey.product.item2': '不满足于静态展示，更关心产品在真实场景中的持续使用。',
    'journey.product.item3': '将复杂功能拆成清晰流程，并用细节降低学习成本。',
    'journey.collab.title': '和重视体验的人一起做点好东西',
    'journey.collab.period': '开放合作 · 欢迎交流',
    'journey.collab.item1': '愿意参与网站、桌面软件与创意交互产品的设计或开发。',
    'journey.collab.item2': '希望接触真实客户需求，在反馈中持续优化自己的方案。',
    'journey.collab.item3': '如果你有一个值得实现的想法，欢迎和我聊聊。',
    'contact.eyebrow': '04. 接下来呢？',
    'contact.title': '来聊聊吧',
    'contact.copy': '无论你有一个想做的网站、需要优化的软件体验，还是只想交流一个有趣的想法，我都很乐意收到你的消息。',
    'contact.cta': '向我打个招呼',
    'contact.open': '给我留言',
    'footer.madeBy': '由小唐设计与制作 · 2026',
    'footer.credit': '设计框架参考',
    'modal.close': '关闭联系弹窗',
    'modal.eyebrow': '保持联系',
    'modal.title': '你好，很高兴认识你',
    'modal.copy': '你好，我非常欢迎你来联系我，不管是提出建议或者学习交流，这是我的邮箱：',
    'modal.send': '发送邮件',
  },
  en: {
    'meta.title': 'Xiaotang | Full-Stack Design & Development',
    'meta.description': 'Xiaotang\'s portfolio, focused on websites, software, and thoughtful user experiences.',
    'common.skip': 'Skip to main content',
    'common.home': 'Back to home',
    'common.navigation': 'Primary navigation',
    'common.mobileNavigation': 'Mobile navigation',
    'common.social': 'Social links',
    'common.email': 'Send email',
    'common.viewWork': 'View work',
    'nav.about': 'About',
    'nav.work': 'Work',
    'nav.journey': 'Journey',
    'nav.contact': 'Contact',
    'menu.open': 'Open menu',
    'menu.close': 'Close menu',
    'language.toEnglish': 'Switch to English',
    'language.toChinese': '切换到中文',
    'hero.eyebrow': 'Hi, I\'m',
    'hero.name': 'Xiaotang.',
    'hero.title': 'I turn ideas in my head,<br />into products people can use.',
    'hero.copy': 'I\'m a creator moving toward full-stack design, drawn to the web, new ideas, and the small details that make websites and software feel good to use.',
    'hero.work': 'See my work',
    'hero.status': 'Open to new collaborations',
    'about.title': 'About me',
    'about.paragraph1': 'Hi! I\'m Xiaotang. I enjoy exploring the web and learning new things, but I especially enjoy turning an idea that only exists in my head into a website or piece of software people can actually open, use, and return to.',
    'about.paragraph2': 'I\'m moving toward becoming a <strong>full-stack designer</strong>: starting with requirements, content structure, and interface design, then carrying the work through frontend development, data integration, and product iteration. I\'ve built data visualization websites, English learning tools, and desktop companion apps, and each project has sharpened my product judgment.',
    'about.paragraph3': 'I care about the moments that are easy to overlook: whether a first-time visitor knows where to begin, whether loading states feel clear, whether complex data can be understood quickly, and whether an error still leaves a natural way forward. Good design is not just a polished surface; it gives function, content, and feeling the right place.',
    'about.paragraph4': 'Recently, I\'ve been refining real projects: continuing to learn map rendering and data visualization, improving the TypeWords learning flow, and exploring a lighter visual language with more personality.',
    'about.skills': 'Tools and ways of working:',
    'about.skillDesign': 'Product & UI/UX design',
    'about.portraitAlt': 'A black pixel-art cat wearing a red scarf',
    'about.portraitNote': 'Stay curious. Keep creating.',
    'work.title': 'A few things I\'ve made',
    'project.featured': 'Featured project',
    'project.openSite': 'Open project website',
    'project.viewInterface': 'View real interface',
    'animals.imageAlt': 'Animals 3D endangered animal atlas interface',
    'animals.title': 'Animals 3D · Endangered Animal Atlas',
    'animals.paragraph1': 'A data visualization website that turns GBIF and iNaturalist records into an explorable interface. Visitors can begin with species distributions on a rotatable 3D globe, transition into a 2D map, and narrow the view by region, threat level, name, and media.',
    'animals.paragraph2': 'The goal is not simply to draw a map, but to give species data a readable path: the statistics panel establishes context, map markers provide spatial clues, and the filter area keeps search, threat level, and region in one exploration flow.',
    'animals.records': 'records shown',
    'animals.projection': 'continuous projection',
    'animals.source': 'data source',
    'typewords.badge': 'Type. Review. Remember.',
    'typewords.wordsAlt': 'Real TypeWords word detail and guided typing interface',
    'typewords.articlesAlt': 'Real TypeWords article practice interface',
    'typewords.title': 'TypeWords · English vocabulary trainer',
    'typewords.paragraph1': 'TypeWords turns vocabulary study into a typing-first learning flow. Instead of repeatedly choosing answers, learners use guided typing, dictation, self-tests, recall, and random review to connect spelling, pronunciation, and memory through input.',
    'typewords.paragraph2': 'The product covers words, articles, and study materials. FSRS schedules reviews around memory state, missed words return to the loop automatically, and local-first storage keeps the experience ready to use across different learning contexts.',
    'typewords.modes': 'practice modes',
    'typewords.wordBanks': 'built-in word banks',
    'typewords.localFirst': 'Local-first',
    'typewords.offline': 'offline learning',
    'qpet.imageAlt': 'Q-Pet Level 2 penguin desktop companion',
    'qpet.caption': 'Real character asset · Level 2',
    'qpet.title': 'Q-Pet · Desktop companion & focus tool',
    'qpet.paragraph1': 'Q-Pet is a Windows desktop companion designed to add a light layer of presence across coding, study, and everyday work. It brings the pet character, focus records, reminders, and growth feedback into one experience built for regular use.',
    'qpet.paragraph2': 'This showcase uses only the real penguin asset from the project package instead of inventing a dashboard screenshot. Its level, expressions, and animation assets can act as visual feedback for the pet\'s state while keeping an efficiency tool warm and approachable.',
    'qpet.localData': 'Local data',
    'cards.data.title': 'Real data, carefully arranged',
    'cards.data.copy': 'Build species indexes, detail records, and media-licensing flows for the animal atlas, turning complex source material into a browsable product.',
    'cards.data.tag1': 'Data cleaning',
    'cards.data.tag2': 'Content design',
    'cards.data.tag3': 'Performance',
    'cards.usability.title': 'Details that make it usable',
    'cards.usability.copy': 'Keep refining loading feedback, accessible motion, error states, and responsive layouts so a product feels better, not merely functional.',
    'cards.usability.tag1': 'UX details',
    'cards.usability.tag2': 'Accessibility',
    'cards.usability.tag3': 'Responsive',
    'cards.product.title': 'From idea to product',
    'cards.product.copy': 'Handle requirements, interface design, implementation, and iteration independently to build a complete product perspective through real work.',
    'cards.product.tag1': 'Product thinking',
    'cards.product.tag2': 'Prototyping',
    'cards.product.tag3': 'Full-stack practice',
    'journey.title': 'Where I\'m heading',
    'journey.tabs': 'Growth direction',
    'journey.tabDesign': 'Full-stack design',
    'journey.tabProduct': 'Product practice',
    'journey.tabCollab': 'Work together',
    'journey.design.title': 'Bringing design judgment and development together',
    'journey.design.period': 'Now · Always learning',
    'journey.design.item1': 'Start from user goals and carry information structure, visual design, and interaction through to implementation.',
    'journey.design.item2': 'Keep building backend and frontend range so ideas are not boxed in by implementation limits.',
    'journey.design.item3': 'Pay attention to performance, accessibility, and feedback in every iteration.',
    'journey.product.title': 'Use real work to test ideas',
    'journey.product.period': '3 complete projects · still growing',
    'journey.product.item1': 'Hands-on experience across desktop apps, learning tools, and data visualization websites.',
    'journey.product.item2': 'Care about sustained use in real contexts, not just a convincing static presentation.',
    'journey.product.item3': 'Break complex features into clear flows and use detail to lower the learning curve.',
    'journey.collab.title': 'Make good things with people who care about experience',
    'journey.collab.period': 'Open to collaboration · Say hello',
    'journey.collab.item1': 'Happy to help design or build websites, desktop software, and creative interactive products.',
    'journey.collab.item2': 'Interested in real client needs and improving solutions through feedback.',
    'journey.collab.item3': 'If you have an idea worth making real, I\'d love to hear about it.',
    'contact.eyebrow': '04. What next?',
    'contact.title': 'Let\'s talk',
    'contact.copy': 'Whether you have a website to build, a software experience to improve, or simply an interesting idea to share, I\'d be glad to hear from you.',
    'contact.cta': 'Say hello',
    'contact.open': 'Get in touch',
    'footer.madeBy': 'Designed and built by Xiaotang · 2026',
    'footer.credit': 'Visual framework inspired by',
    'modal.close': 'Close contact dialog',
    'modal.eyebrow': 'Stay in touch',
    'modal.title': 'Hi, it\'s nice to meet you',
    'modal.copy': 'You are very welcome to contact me, whether you have a suggestion or would like to learn and exchange ideas. My email is:',
    'modal.send': 'Send email',
  },
};

let currentLanguage = localStorage.getItem('portfolio-language') === 'en' ? 'en' : 'zh';
let lastScroll = 0;
let lastContactTrigger = null;
let starfieldFrame = 0;
let starfieldScroll = window.scrollY;
let targetPointerX = 0;
let targetPointerY = 0;
let pointerX = 0;
let pointerY = 0;
let starfieldContext = null;
let stars = [];
let canvasDpr = 1;
let nebulaContext = null;
let nebulaParticles = [];
let nebulaDpr = 1;
let nebulaMotionEnabled = true;

function createStars(width, height) {
  const count = window.innerWidth < 768 ? 48 : 108;
  stars = Array.from({ length: count }, (_, index) => ({
    x: Math.random() * width,
    y: Math.random() * height,
    depth: 0.18 + Math.random() * 0.82,
    radius: 0.45 + Math.random() * 1.35,
    alpha: 0.24 + Math.random() * 0.58,
    phase: Math.random() * Math.PI * 2,
    twinkle: 0.45 + Math.random() * 1.3,
    hue: index % 7 === 0 ? 'warm' : 'cool',
  }));
}

function resizeStarfield() {
  if (!starfield) return;
  canvasDpr = Math.min(window.devicePixelRatio || 1, 1.5);
  const width = window.innerWidth;
  const height = window.innerHeight;
  starfield.width = Math.floor(width * canvasDpr);
  starfield.height = Math.floor(height * canvasDpr);
  starfield.style.width = `${width}px`;
  starfield.style.height = `${height}px`;
  starfieldContext = starfield.getContext('2d');
  starfieldContext?.setTransform(canvasDpr, 0, 0, canvasDpr, 0, 0);
  createStars(width, height);
  drawStarfield(performance.now());
}

function drawStarfield(timestamp) {
  if (!starfieldContext) return;
  const width = window.innerWidth;
  const height = window.innerHeight;
  const elapsed = timestamp * 0.001;
  const scrollDrift = starfieldScroll * 0.035;
  starfieldContext.clearRect(0, 0, width, height);

  for (const star of stars) {
    const driftX = Math.sin(elapsed * 0.18 * star.twinkle + star.phase) * (1.5 + star.depth * 4);
    const driftY = Math.cos(elapsed * 0.14 * star.twinkle + star.phase) * (1 + star.depth * 2.5);
    const x = star.x + pointerX * star.depth * 18 + driftX;
    const y = ((star.y + pointerY * star.depth * 12 + scrollDrift * star.depth + driftY) % height + height) % height;
    const twinkle = star.alpha + Math.sin(elapsed * star.twinkle + star.phase) * 0.12;
    const color = star.hue === 'warm' ? `rgba(255, 224, 171, ${twinkle})` : `rgba(173, 226, 255, ${twinkle})`;

    starfieldContext.beginPath();
    starfieldContext.fillStyle = color;
    starfieldContext.arc(x, y, star.radius, 0, Math.PI * 2);
    starfieldContext.fill();

    if (star.radius > 1.15) {
      starfieldContext.strokeStyle = star.hue === 'warm'
        ? `rgba(255, 224, 171, ${twinkle * 0.32})`
        : `rgba(104, 246, 210, ${twinkle * 0.28})`;
      starfieldContext.lineWidth = 0.6;
      starfieldContext.beginPath();
      starfieldContext.moveTo(x - star.radius * 3.2, y);
      starfieldContext.lineTo(x + star.radius * 3.2, y);
      starfieldContext.moveTo(x, y - star.radius * 3.2);
      starfieldContext.lineTo(x, y + star.radius * 3.2);
      starfieldContext.stroke();
    }
  }
}

function animateStarfield(timestamp) {
  if (!document.hidden) {
    pointerX += (targetPointerX - pointerX) * 0.045;
    pointerY += (targetPointerY - pointerY) * 0.045;
    spaceBackdrop?.style.setProperty('--space-x', `${pointerX * 8}px`);
    spaceBackdrop?.style.setProperty('--space-y', `${pointerY * 6}px`);
    drawStarfield(timestamp);
    drawNebula(timestamp);
  }
  starfieldFrame = window.requestAnimationFrame(animateStarfield);
}

function createNebulaParticles(width, height) {
  const count = window.innerWidth < 768 ? 0 : 720;
  const maxRadius = Math.min(width, height) * 0.47;

  nebulaParticles = Array.from({ length: count }, (_, index) => {
    const isStreamParticle = index < count * 0.66;
    const progress = Math.pow(Math.random(), 0.82);
    const radius = isStreamParticle
      ? 10 + progress * maxRadius
      : Math.pow(Math.random(), 0.62) * maxRadius;
    const streamAngle = progress * Math.PI * 2.6 + (Math.random() - 0.5) * (0.7 + progress * 0.9);
    const angle = isStreamParticle
      ? streamAngle
      : Math.random() * Math.PI * 2 + progress * 1.3;
    const spread = isStreamParticle
      ? 5 + progress * 22
      : 8 + progress * 20;
    const radialDrift = isStreamParticle
      ? (Math.random() + Math.random() - 1) * spread
      : (Math.random() + Math.random() - 1) * spread * 1.35;
    const hueRoll = Math.random();

    return {
      angle,
      radius: radius + radialDrift,
      xOffset: (Math.random() + Math.random() - 1) * spread * 0.34,
      yOffset: (Math.random() + Math.random() - 1) * spread * 0.24,
      stream: isStreamParticle,
      depth: 0.25 + Math.random() * 0.75,
      size: isStreamParticle ? 0.34 + Math.random() * 1.45 : 0.25 + Math.random() * 1.05,
      alpha: isStreamParticle ? 0.16 + Math.random() * 0.62 : 0.08 + Math.random() * 0.34,
      phase: Math.random() * Math.PI * 2,
      twinkle: 0.35 + Math.random() * 1.2,
      speed: isStreamParticle ? 0.38 + Math.random() * 0.72 : 0.18 + Math.random() * 0.52,
      color: hueRoll < 0.56 ? [104, 246, 210] : hueRoll < 0.86 ? [126, 183, 255] : [177, 139, 255],
    };
  });
}

function resizeNebula() {
  if (!heroNebula) return;
  const bounds = heroNebula.getBoundingClientRect();
  const width = bounds.width || 420;
  const height = bounds.height || 420;
  nebulaDpr = Math.min(window.devicePixelRatio || 1, 1.5);
  heroNebula.width = Math.floor(width * nebulaDpr);
  heroNebula.height = Math.floor(height * nebulaDpr);
  nebulaContext = heroNebula.getContext('2d');
  nebulaContext?.setTransform(nebulaDpr, 0, 0, nebulaDpr, 0, 0);
  createNebulaParticles(width, height);
  drawNebula(performance.now());
}

function drawNebula(timestamp) {
  if (!nebulaContext || !heroNebula || !nebulaParticles.length) return;
  const width = heroNebula.clientWidth;
  const height = heroNebula.clientHeight;
  const centerX = width * 0.52;
  const centerY = height * 0.5;
  const elapsed = timestamp * 0.001;
  const rotation = nebulaMotionEnabled ? elapsed * 0.055 : 0;

  nebulaContext.clearRect(0, 0, width, height);
  nebulaContext.save();
  nebulaContext.globalCompositeOperation = 'lighter';

  const core = nebulaContext.createRadialGradient(centerX, centerY, 0, centerX, centerY, width * 0.34);
  core.addColorStop(0, 'rgba(103, 186, 255, .14)');
  core.addColorStop(.32, 'rgba(104, 246, 210, .045)');
  core.addColorStop(1, 'rgba(104, 246, 210, 0)');
  nebulaContext.fillStyle = core;
  nebulaContext.fillRect(0, 0, width, height);

  for (const particle of nebulaParticles) {
    const wobble = nebulaMotionEnabled
      ? Math.sin(elapsed * particle.twinkle + particle.phase) * (0.5 + particle.depth * 1.8)
      : 0;
    const angle = particle.angle + rotation * particle.speed;
    const radius = particle.radius + wobble;
    const x = centerX + Math.cos(angle) * radius + particle.xOffset;
    const y = centerY + Math.sin(angle) * radius * 0.62 + particle.yOffset;
    const alpha = Math.max(.08, particle.alpha + Math.sin(elapsed * particle.twinkle + particle.phase) * .12);
    const [red, green, blue] = particle.color;

    nebulaContext.fillStyle = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
    nebulaContext.beginPath();
    nebulaContext.arc(x, y, particle.size, 0, Math.PI * 2);
    nebulaContext.fill();

    if (particle.size > 1.1 && particle.depth > .56) {
      nebulaContext.strokeStyle = `rgba(${red}, ${green}, ${blue}, ${alpha * .28})`;
      nebulaContext.lineWidth = .55;
      nebulaContext.beginPath();
      nebulaContext.moveTo(x - particle.size * 3, y);
      nebulaContext.lineTo(x + particle.size * 3, y);
      nebulaContext.moveTo(x, y - particle.size * 3);
      nebulaContext.lineTo(x, y + particle.size * 3);
      nebulaContext.stroke();
    }
  }

  nebulaContext.restore();
}

function getTranslation(key) {
  return translations[currentLanguage][key] ?? translations.zh[key] ?? key;
}

function updateLanguage() {
  document.documentElement.lang = currentLanguage === 'en' ? 'en' : 'zh-CN';
  document.title = getTranslation('meta.title');

  document.querySelectorAll('[data-i18n]').forEach(element => {
    element.textContent = getTranslation(element.dataset.i18n);
  });

  document.querySelectorAll('[data-i18n-html]').forEach(element => {
    element.innerHTML = getTranslation(element.dataset.i18nHtml);
  });

  document.querySelectorAll('[data-i18n-attr]').forEach(element => {
    const [attribute, key] = element.dataset.i18nAttr.split(':');
    element.setAttribute(attribute, getTranslation(key || attribute));
  });

  document.querySelectorAll('[data-language-toggle]').forEach(button => {
    button.textContent = currentLanguage === 'en' ? '中' : 'EN';
    button.setAttribute('aria-pressed', String(currentLanguage === 'en'));
    button.setAttribute('aria-label', getTranslation(currentLanguage === 'en' ? 'language.toChinese' : 'language.toEnglish'));
  });

  document.querySelector('meta[name="description"]')?.setAttribute('content', getTranslation('meta.description'));
  document.querySelectorAll('[data-menu-button]').forEach(button => {
    const isOpen = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-label', getTranslation(isOpen ? 'menu.close' : 'menu.open'));
  });
}

function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', getTranslation('menu.open'));
  mobileMenu.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('menu-open');
}

function openModal(trigger) {
  if (!modal || !modalDialog) return;
  lastContactTrigger = trigger;
  closeMenu();
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  const focusModal = () => (modalClose || modalDialog)?.focus({ preventScroll: true });
  focusModal();
  window.requestAnimationFrame(focusModal);
  window.setTimeout(focusModal, 80);
}

function closeModal() {
  if (!modal) return;
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
  lastContactTrigger?.focus();
  lastContactTrigger = null;
}

window.addEventListener('scroll', () => {
  const current = window.scrollY;
  header.classList.toggle('scrolled', current > 24);
  header.classList.toggle('hidden', current > lastScroll && current > 160);
  lastScroll = current;
  starfieldScroll = current;
}, { passive: true });

menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  menuButton.setAttribute('aria-label', getTranslation(open ? 'menu.open' : 'menu.close'));
  mobileMenu.setAttribute('aria-hidden', String(open));
  document.body.classList.toggle('menu-open', !open);
});

mobileMenu.querySelectorAll('a[href^="#"]').forEach(link => link.addEventListener('click', closeMenu));

document.querySelectorAll('[data-language-toggle]').forEach(button => {
  button.addEventListener('click', () => {
    currentLanguage = currentLanguage === 'en' ? 'zh' : 'en';
    localStorage.setItem('portfolio-language', currentLanguage);
    updateLanguage();
  });
});

document.querySelectorAll('[data-contact-trigger]').forEach(trigger => {
  trigger.addEventListener('click', event => {
    event.preventDefault();
    openModal(trigger);
  });
});

modal?.querySelectorAll('[data-modal-close]').forEach(button => {
  button.addEventListener('click', closeModal);
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -60px' });

document.querySelectorAll('.reveal').forEach(element => revealObserver.observe(element));

document.querySelectorAll('[data-tab]').forEach(button => {
  button.addEventListener('click', () => {
    const target = button.dataset.tab;
    document.querySelectorAll('[data-tab]').forEach(tab => tab.setAttribute('aria-selected', String(tab === button)));
    document.querySelectorAll('[data-panel]').forEach(panel => { panel.hidden = panel.dataset.panel !== target; });
  });
});

if (window.matchMedia('(pointer: fine)').matches) {
  window.addEventListener('pointermove', event => {
    if (glow) {
      glow.style.setProperty('--x', `${event.clientX}px`);
      glow.style.setProperty('--y', `${event.clientY}px`);
    }
    targetPointerX = (event.clientX / window.innerWidth - 0.5) * 2;
    targetPointerY = (event.clientY / window.innerHeight - 0.5) * 2;
  }, { passive: true });
}

if (catStage) {
  const updateCatTilt = event => {
    const bounds = catStage.getBoundingClientRect();
    const center = bounds.left + bounds.width / 2;
    const direction = event.clientX < center ? -1 : 1;
    catStage.style.setProperty('--cat-tilt', `${direction * 3.2}deg`);
  };

  catStage.addEventListener('pointermove', updateCatTilt, { passive: true });
  catStage.addEventListener('pointerleave', () => catStage.style.removeProperty('--cat-tilt'));
  catStage.addEventListener('focusin', () => catStage.style.setProperty('--cat-tilt', '3.2deg'));
  catStage.addEventListener('focusout', () => catStage.style.removeProperty('--cat-tilt'));
}

if (starfield) {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  nebulaMotionEnabled = !reducedMotion.matches;
  resizeStarfield();
  window.addEventListener('resize', resizeStarfield, { passive: true });
  if (heroNebula) {
    resizeNebula();
    window.addEventListener('resize', resizeNebula, { passive: true });
  }
  if (!reducedMotion.matches) {
    starfieldFrame = window.requestAnimationFrame(animateStarfield);
    reducedMotion.addEventListener?.('change', () => {
      nebulaMotionEnabled = !reducedMotion.matches;
      if (reducedMotion.matches) {
        window.cancelAnimationFrame(starfieldFrame);
        drawStarfield(performance.now());
        drawNebula(performance.now());
      } else {
        starfieldFrame = window.requestAnimationFrame(animateStarfield);
      }
    });
  } else {
    drawNebula(performance.now());
  }
}

window.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    closeModal();
    closeMenu();
  }
});

updateLanguage();
