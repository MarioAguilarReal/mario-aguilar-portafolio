// ---- Content & translations (ported from the original design's DCLogic) -----

export type Lang = 'es' | 'en';
export type Theme = 'dark' | 'light';

export interface ProjectCopy {
  title: string;
  desc: string;
}

export interface JobCopy {
  role: string;
  company: string;
  dates: string;
  desc: string;
}

export interface Dict {
  nav_projects: string;
  nav_exp: string;
  nav_skills: string;
  nav_contact: string;
  nav_about: string;
  hero_badge: string;
  hero_title: string;
  hero_value: string;
  cta_projects: string;
  cta_contact: string;
  term_line: string;
  term_status: string;
  projects_h: string;
  exp_h: string;
  about_h: string;
  about_p1: string;
  about_p2: string;
  skills_h: string;
  contact_h: string;
  contact_sub: string;
  f_name: string;
  f_email: string;
  f_msg: string;
  f_send: string;
  badges: { live: string; prog: string; soon: string };
  projects: ProjectCopy[];
  slotPh: string[];
  jobs: JobCopy[];
}

export const I18N: Record<Lang, Dict> = {
  es: {
    nav_projects: 'Proyectos',
    nav_exp: 'Experiencia',
    nav_skills: 'Skills',
    nav_contact: 'Contacto',
    nav_about: 'Sobre mí',
    hero_badge: 'Disponible para proyectos freelance',
    hero_title: 'Software Engineer especializado en soluciones con IA generativa',
    hero_value:
      'Ayudo a negocios a automatizar operaciones con software a medida impulsado por IA, y aporto a equipos de ingeniería 4+ años de experiencia full-stack integrando LLMs en productos empresariales.',
    cta_projects: 'Ver proyectos',
    cta_contact: 'Contáctame',
    term_line: 'React · Django · AWS',
    term_status: 'disponible ',
    projects_h: 'Proyectos destacados',
    exp_h: 'Experiencia profesional',
    about_h: 'Sobre mí',
    about_p1:
      'Soy ingeniero de software full-stack y mi trabajo vive en la intersección entre la ingeniería sólida y la IA generativa. Me apasiona tomar capacidades como LLMs y agentes de IA y convertirlas en herramientas concretas que resuelven problemas reales: un bot que agenda citas, un flujo interno que se automatiza, un producto que antes no era posible.',
    about_p2:
      'Trabajo de punta a punta: desde la arquitectura del backend hasta la última micro-interacción del frontend. Disfruto construir sistemas que funcionan de forma confiable en el mundo real, no solo en la demo.',
    skills_h: 'Skills',
    contact_h: '¿Tienes un proyecto en mente? Hablemos.',
    contact_sub: 'Cuéntame qué quieres construir y te respondo en menos de 24 horas.',
    f_name: 'Tu nombre',
    f_email: 'Tu email',
    f_msg: 'Cuéntame sobre tu proyecto…',
    f_send: 'Enviar mensaje',
    badges: { live: 'LIVE', prog: 'EN DESARROLLO', soon: 'PRÓXIMAMENTE' },
    projects: [
      {
        title: 'POS Cloud Multi-Tienda',
        desc: 'Sistema punto de venta de escritorio para tiendas en México: interconexión LAN entre terminales vía WebSocket/HTTPS local, SQLite local para operar sin depender 100% de internet y lector de código de barras integrado. Desarrollado en solitario, de punta a punta.',
      },
      {
        title: 'CRM + Agendamiento por WhatsApp con IA',
        desc: 'CRM para negocios de citas (real estate, medicina cosmética) con bot de WhatsApp impulsado por Claude que agenda citas automáticamente. Arquitectura API-first: un mismo backend sirve landing pages estáticas, dashboard CRM y bot, cada uno con nivel de acceso distinto. Las landing pages siguen funcionando aunque el cliente cancele la suscripción.',
      },
      {
        title: 'Plataforma de Cotización para Drones Agrícolas',
        desc: 'Plataforma para administrar, cotizar y automatizar trabajos de drones agrícolas, con visualización de datos en tiempo real y mapa interactivo para generar cotizaciones aproximadas.',
      },
    ],
    slotPh: ['Suelta un screenshot del POS', 'Suelta un screenshot del CRM', 'Suelta un screenshot de la plataforma'],
    jobs: [
      {
        role: 'Software Engineer',
        company: 'Samsung Electronics',
        dates: 'jun 2024 — presente',
        desc: 'Productos web B2B globales e integración de LLMs en workflows internos.',
      },
      {
        role: 'Tech Lead · Software Engineer',
        company: 'ParkIT Technology Solutions',
        dates: 'jul 2023 — jun 2024',
        desc: 'Arquitectura de plataforma cloud-native, modernización de CI/CD y mentoría de equipo.',
      },
      {
        role: 'Full Stack Developer independiente',
        company: 'Freelance',
        dates: 'ago 2022 — jun 2023',
        desc: 'CRM a medida para digitalizar las operaciones manuales de un negocio.',
      },
    ],
  },
  en: {
    nav_projects: 'Projects',
    nav_exp: 'Experience',
    nav_skills: 'Skills',
    nav_contact: 'Contact',
    nav_about: 'About',
    hero_badge: 'Available for freelance projects',
    hero_title: 'Software Engineer specialized in generative AI solutions',
    hero_value:
      'I help businesses automate operations with custom AI-powered software, and bring engineering teams 4+ years of full-stack experience integrating LLMs into enterprise products.',
    cta_projects: 'View projects',
    cta_contact: 'Contact me',
    term_line: 'React · Django · AWS',
    term_status: 'available ',
    projects_h: 'Featured projects',
    exp_h: 'Professional experience',
    about_h: 'About me',
    about_p1:
      'I am a full-stack software engineer and my work lives at the intersection of solid engineering and generative AI. I love taking capabilities like LLMs and AI agents and turning them into concrete tools that solve real problems: a bot that books appointments, an internal workflow that runs itself, a product that was not possible before.',
    about_p2:
      'I work end to end: from backend architecture to the last frontend micro-interaction. I enjoy building systems that work reliably in the real world, not just in the demo.',
    skills_h: 'Skills',
    contact_h: 'Have a project in mind? Let’s talk.',
    contact_sub: 'Tell me what you want to build and I’ll reply within 24 hours.',
    f_name: 'Your name',
    f_email: 'Your email',
    f_msg: 'Tell me about your project…',
    f_send: 'Send message',
    badges: { live: 'LIVE', prog: 'IN PROGRESS', soon: 'COMING SOON' },
    projects: [
      {
        title: 'Multi-Store Cloud POS',
        desc: 'Desktop point-of-sale system for retail stores in Mexico: LAN interconnection between terminals via local WebSocket/HTTPS, local SQLite to operate without depending 100% on the internet, and integrated barcode scanner. Built solo, end to end.',
      },
      {
        title: 'CRM + AI WhatsApp Scheduling',
        desc: 'CRM for appointment-based businesses (real estate, cosmetic medicine) with a Claude-powered WhatsApp bot that books appointments automatically. API-first architecture: one backend serves static landing pages, the CRM dashboard and the bot, each with its own access level. Landing pages keep working even if the client cancels their subscription.',
      },
      {
        title: 'Agricultural Drone Quoting Platform',
        desc: 'Platform to manage, quote and automate agricultural drone jobs, with real-time data visualization and an interactive map to generate approximate quotes.',
      },
    ],
    slotPh: ['Drop a POS screenshot', 'Drop a CRM screenshot', 'Drop a platform screenshot'],
    jobs: [
      {
        role: 'Software Engineer',
        company: 'Samsung Electronics',
        dates: 'Jun 2024 — present',
        desc: 'Global B2B web products and LLM integration into internal workflows.',
      },
      {
        role: 'Tech Lead · Software Engineer',
        company: 'ParkIT Technology Solutions',
        dates: 'Jul 2023 — Jun 2024',
        desc: 'Cloud-native platform architecture, CI/CD modernization and team mentoring.',
      },
      {
        role: 'Independent Full Stack Developer',
        company: 'Freelance',
        dates: 'Aug 2022 — Jun 2023',
        desc: 'Custom CRM to digitize a business’s manual operations.',
      },
    ],
  },
};

// Language-independent metadata --------------------------------------------------
export type BadgeKey = 'live' | 'prog' | 'soon';

export interface ProjectMeta {
  slotId: string;
  badgeKey: BadgeKey;
  badgeColor: string;
  stack: string[];
}

export const PROJECT_META: ProjectMeta[] = [
  { slotId: 'proj-pos', badgeKey: 'live', badgeColor: 'var(--acc)', stack: ['Electron', 'React 19', 'TypeScript', 'WebSocket', 'SQLite'] },
  { slotId: 'proj-crm', badgeKey: 'prog', badgeColor: 'var(--amber)', stack: ['Claude Haiku 4.5', 'WhatsApp API', 'API-first', 'CRM'] },
  { slotId: 'proj-drones', badgeKey: 'soon', badgeColor: 'var(--violet)', stack: ['Real-time', 'Mapas', 'Data viz'] },
];

export interface SkillGroup {
  label: string;
  items: string[];
}

export const SKILL_GROUPS: SkillGroup[] = [
  { label: 'AI ENGINEERING', items: ['LLMs', 'RAG', 'AI Agents', 'Prompt Engineering'] },
  { label: 'FRONTEND', items: ['React', 'Next.js', 'TypeScript'] },
  { label: 'BACKEND', items: ['Django', 'FastAPI', 'Laravel', 'Node.js'] },
  { label: 'CLOUD', items: ['AWS', 'Azure', 'GCP'] },
];

export const CONTACT_EMAIL = 'mario.33a.r@gmail.com';
export const LINKS = {
  linkedin: 'https://www.linkedin.com/in/mario-aguilar-real/',
  github: 'https://github.com/MarioAguilarReal',
};
