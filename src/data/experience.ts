export type Milestone = {
  period: string;
  title: string;
  org: string;
  detail: string;
};

export const experience: Milestone[] = [
  {
    period: "2021 — Present",
    title: "BSc, Electrical & Computer Engineering",
    org: "Addis Ababa University",
    detail:
      "Computer Engineering track. Coursework and projects in algorithms, distributed systems, embedded/IoT, and software architecture. Fifth-year, building production-shaped backends.",
  },
  {
    period: "Selected work",
    title: "Product & systems projects",
    org: "Independent + client",
    detail:
      "Shipped Prompt-Share, an ERP core, LiveFlow matchmaking chat, a Flutter ops app, and a live farm storefront. Mix of APIs, auth, realtime, and product UI.",
  },
  {
    period: "Focus",
    title: "Backend, reliability, integration",
    org: "Practice",
    detail:
      "I care about the unglamorous layer: auth, data models, APIs, and the path from hardware or cloud into something a person can use.",
  },
];
