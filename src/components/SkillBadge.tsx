import { cn } from "@/lib/utils";
import { getSkillIcon } from "@/lib/skillIcons";

type SkillBadgeProps = {
  skill: string;
  size?: "sm" | "md";
  tone?: "blue" | "green" | "orange" | "purple" | "neutral";
  className?: string;
};

const toneClasses: Record<NonNullable<SkillBadgeProps["tone"]>, string> = {
  blue: "bg-gradient-to-r from-blue-500/20 via-indigo-500/10 to-sky-500/10 text-blue-50 border-blue-400/40",
  green: "bg-gradient-to-r from-emerald-500/20 via-green-500/10 to-teal-500/10 text-emerald-50 border-emerald-400/40",
  orange: "bg-gradient-to-r from-amber-500/20 via-orange-500/10 to-red-500/10 text-amber-50 border-amber-400/40",
  purple: "bg-gradient-to-r from-purple-500/25 via-fuchsia-500/10 to-indigo-500/10 text-purple-50 border-purple-400/40",
  neutral: "bg-gradient-to-r from-gray-800/80 via-gray-800/60 to-gray-900/80 text-gray-100 border-white/10"
};

const sizeClasses: Record<NonNullable<SkillBadgeProps["size"]>, string> = {
  sm: "text-[10px] sm:text-xs px-2.5 py-1",
  md: "text-xs sm:text-sm px-3 py-1.5"
};

const SkillBadge = ({ skill, size = "md", tone = "neutral", className }: SkillBadgeProps) => {
  const iconSrc = getSkillIcon(skill);

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border shadow-[0_10px_30px_rgba(0,0,0,0.25)] backdrop-blur-md",
        "transition-transform duration-200 hover:-translate-y-[1px]",
        toneClasses[tone],
        sizeClasses[size],
        className
      )}
    >
      {iconSrc && (
        <span
          className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/10"
          aria-hidden="true"
        >
          <img
            src={iconSrc}
            alt=""
            className="h-3.5 w-3.5 sm:h-4 sm:w-4 object-contain"
            loading="lazy"
            decoding="async"
          />
        </span>
      )}
      <span className="leading-none">{skill}</span>
    </span>
  );
};

export default SkillBadge;
