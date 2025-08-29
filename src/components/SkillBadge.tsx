// components/SkillBadge.tsx
import { IconType } from 'react-icons';

interface SkillBadgeProps {
  name: string;
  icon: IconType;
  color?: string;
}

export default function SkillBadge ({ name, icon: Icon, color = 'text-current' }: SkillBadgeProps) {
  return (
    <div className="flex flex-col items-center p-3 sm:p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-200">
      <Icon className={`text-2xl sm:text-3xl mb-1 sm:mb-2 ${color}`} />
      <span className="text-sm sm:text-base font-medium text-gray-700 dark:text-gray-200">
        {name}
      </span>
    </div>
  );
};

