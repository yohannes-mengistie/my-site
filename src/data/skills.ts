
import { FaReact, FaHtml5, FaGitAlt } from 'react-icons/fa';
import { SiJavascript, SiMongodb, SiPhp, SiLaravel, SiNextdotjs, SiTypescript,SiGo, SiDjango,SiPython } from 'react-icons/si';
import { IconType } from 'react-icons';

interface Skill {
  name: string;
  icon: IconType;
  color?: string;
}

export const skills: Skill[] = [
  { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
  { name: 'React', icon: FaReact, color: 'text-blue-500' },
  { name: 'HTML', icon: FaHtml5, color: 'text-orange-500' },
  { name: 'CSS', icon: FaHtml5, color: 'text-blue-500' }, // Using HTML5 icon for CSS as example
  { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
  { name: 'Django', icon: SiDjango },
  { name: 'LARAVEL', icon: SiLaravel, color: 'text-pink-500' },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'GOLANG', icon: SiGo, color: 'text-green-600' },
  { name: 'Git', icon: FaGitAlt, color: 'text-orange-600' },
  {name:'PHP',icon:SiPhp,color:'text-white'},
  {name:'PYTHON', icon:SiPython, color:'text-blue-600'}
];

export {skills as default};