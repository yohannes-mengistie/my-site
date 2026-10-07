import {
  FaGitAlt,
  FaHtml5,
  FaReact,
} from "react-icons/fa";
import {
  SiCss3,
  SiDjango,
  SiGo,
  SiJavascript,
  SiLaravel,
  SiMongodb,
  SiNextdotjs,
  SiPhp,
  SiPython,
  SiTypescript,
} from "react-icons/si";
import type { IconType } from "react-icons";

export type Skill = {
  name: string;
  icon: IconType;
  color?: string;
};

export const skills: Skill[] = [
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
  { name: "TypeScript", icon: SiTypescript, color: "text-sky-400" },
  { name: "React", icon: FaReact, color: "text-sky-300" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-foreground" },
  { name: "Python", icon: SiPython, color: "text-blue-400" },
  { name: "Django", icon: SiDjango, color: "text-emerald-400" },
  { name: "Go", icon: SiGo, color: "text-cyan-400" },
  { name: "PHP", icon: SiPhp, color: "text-indigo-300" },
  { name: "Laravel", icon: SiLaravel, color: "text-rose-400" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-400" },
  { name: "Git", icon: FaGitAlt, color: "text-orange-400" },
  { name: "HTML", icon: FaHtml5, color: "text-orange-500" },
  { name: "CSS", icon: SiCss3, color: "text-blue-400" },
];

export const skillGroups = [
  {
    title: "Languages",
    items: [
      { name: "TypeScript", icon: SiTypescript, color: "text-sky-400" },
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
      { name: "Python", icon: SiPython, color: "text-blue-400" },
      { name: "Go", icon: SiGo, color: "text-cyan-400" },
      { name: "PHP", icon: SiPhp, color: "text-indigo-300" },
      { name: "Dart", icon: SiJavascript, color: "text-sky-300" },
      { name: "SQL", icon: SiPhp, color: "text-slate-400" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Laravel", icon: SiLaravel, color: "text-rose-400" },
      { name: "Node.js", icon: SiJavascript, color: "text-green-400" },
      { name: "Django", icon: SiDjango, color: "text-emerald-400" },
      { name: "REST APIs", icon: SiPhp, color: "text-blue-400" },
      { name: "Auth & RBAC", icon: SiLaravel, color: "text-indigo-300" },
      { name: "MySQL", icon: SiPhp, color: "text-sky-300" },
      { name: "MongoDB", icon: SiMongodb, color: "text-green-400" },
    ],
  },
  {
    title: "Product UI",
    items: [
      { name: "Next.js", icon: SiNextdotjs, color: "text-foreground" },
      { name: "React", icon: FaReact, color: "text-sky-300" },
      { name: "Flutter", icon: SiJavascript, color: "text-sky-400" },
      { name: "Tailwind CSS", icon: SiCss3, color: "text-blue-400" },
      { name: "Framer Motion", icon: SiNextdotjs, color: "text-pink-400" },
    ],
  },
  {
    title: "Systems",
    items: [
      { name: "Git", icon: FaGitAlt, color: "text-orange-400" },
      { name: "Linux", icon: SiPhp, color: "text-yellow-400" },
      { name: "Docker", icon: SiPhp, color: "text-blue-400" },
      { name: "Firebase", icon: SiPhp, color: "text-amber-400" },
      { name: "Vercel", icon: SiNextdotjs, color: "text-foreground" },
      { name: "IoT integration", icon: SiPhp, color: "text-cyan-400" },
    ],
  },
];
