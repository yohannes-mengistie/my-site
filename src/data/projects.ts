export type ProjectCategory = "Web" | "Mobile" | "Backend" | "Product";

export type Project = {
  slug: string;
  title: string;
  year: string;
  category: ProjectCategory;
  featured?: boolean;
  summary: string;
  description: string;
  highlights: string[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  accent: string;
};

export const projects: Project[] = [
  {
    slug: "prompt-share",
    title: "Prompt-Share",
    year: "2025",
    category: "Web",
    featured: true,
    summary:
      "A prompt marketplace where people publish, browse, and manage AI prompts with a clean product surface.",
    description:
      "Built an end-to-end prompt sharing platform with structured content, discovery, and account workflows. The focus was a scalable Next.js architecture and a UI that makes browsing prompts feel fast, not cluttered.",
    highlights: [
      "Publish, browse, and manage prompt collections",
      "Typed Next.js app with a production Vercel deploy",
      "Designed for growth: clear content model, not a one-off demo",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    liveUrl: "https://share-prompt-two-zeta.vercel.app",
    githubUrl: "https://github.com/yohannes-mengistie/share-prompt",
    accent: "#c8f542",
  },
  {
    slug: "erp-system",
    title: "ERP System",
    year: "2025",
    category: "Backend",
    featured: true,
    summary:
      "Modular ERP with auth, roles, and database-driven business workflows.",
    description:
      "A Laravel-backed ERP designed around real operations: authentication, role-based access, CRUD, and business flows. Architecture, security, and performance were first-class concerns rather than afterthoughts.",
    highlights: [
      "Role-based authorization and authenticated workflows",
      "Modular domain structure for business processes",
      "React front-end on a Laravel API/core",
    ],
    technologies: ["Laravel", "PHP", "React", "MySQL", "Tailwind CSS"],
    githubUrl: "https://github.com/yohannes-mengistie/erp-system",
    accent: "#7dd3fc",
  },
  {
    slug: "liveflow",
    title: "LiveFlow",
    year: "2024",
    category: "Product",
    summary:
      "Random-match chat that pairs strangers for instant, real-time conversation.",
    description:
      "LiveFlow is a matchmaking chat product: users get paired with someone new and talk immediately. The interesting part is pairing strategy, session lifecycle, and keeping the realtime path simple enough to scale.",
    highlights: [
      "Instant pairing instead of a contact list",
      "Realtime conversation as the core loop",
      "Designed around session state, not static pages",
    ],
    technologies: ["React", "Laravel", "PHP", "Realtime", "Tailwind CSS"],
    githubUrl: "https://github.com/yohannes-mengistie/LiveFlow",
    accent: "#f0abfc",
  },
  {
    slug: "ecommerce-app",
    title: "E-Commerce App",
    year: "2024",
    category: "Mobile",
    summary:
      "Flutter-based e-commerce app for managing product listings.",
    description:
      "A Flutter e-commerce app enabling users to create, view, update, and delete product listings with seamless navigation and smooth transition animations for an intuitive experience.",
    highlights: [
      "Create, view, update, and delete product listings",
      "Seamless navigation across screens",
      "Smooth transition animations enhancing user flow",
    ],
    technologies: ["Flutter", "Dart", "REST API", "Firebase"],
    githubUrl:
      "https://github.com/yohannes-mengistie/2024-project-phase-mobile-tasks",
    accent: "#86efac",
  },
  {
    slug: "sun-farms",
    title: "Sun Farms",
    year: "2024",
    category: "Web",
    summary:
      "Responsive storefront for Ethiopian farm products — catalog, story, and conversion.",
    description:
      "A client-facing farm products site built for clarity on mobile and desktop. Content, layout, and conversion paths were the product, shipped on WordPress with a custom visual system.",
    highlights: [
      "Live production site for a real farm brand",
      "Responsive catalog and marketing pages",
      "Editorial layout tuned for product photography",
    ],
    technologies: ["WordPress", "Elementor", "CSS Grid"],
    liveUrl: "https://yohannes.zergaw.et/",
    accent: "#fbbf24",
  },
  {
    slug: "portfolio",
    title: "This Portfolio",
    year: "2026",
    category: "Web",
    summary:
      "Personal site rebuilt as a product: motion, filters, and a system you can actually browse.",
    description:
      "The previous version was a generic template. This rebuild treats the portfolio like a product: typography, interaction, project storytelling, and performance instead of stacked cards and skill bars.",
    highlights: [
      "Next.js App Router, typed data, and a designed system",
      "Project filtering, details, and keyboard-friendly UI",
      "Shipped as the public face of the work",
    ],
    technologies: ["Next.js", "TypeScript", "Framer Motion", "Vercel"],
    githubUrl: "https://github.com/yohannes-mengistie/my-site",
    accent: "#a5b4fc",
  },
];

export const projectCategories: Array<"All" | ProjectCategory> = [
  "All",
  "Web",
  "Backend",
  "Mobile",
  "Product",
];
