import { motion } from "framer-motion";

interface LogoProps {
  variant?: "dark" | "light";
  size?: "sm" | "md" | "lg";
}

const Logo = ({ variant = "dark", size = "md" }: LogoProps) => {
  const sizes = {
    sm: { icon: 32, title: "text-base", sub: "text-[9px]" },
    md: { icon: 42, title: "text-xl md:text-2xl", sub: "text-[10px] md:text-[11px]" },
    lg: { icon: 56, title: "text-3xl md:text-4xl", sub: "text-xs" },
  }[size];

  const titleColor = variant === "light" ? "text-primary-foreground" : "text-foreground";
  const subColor = variant === "light" ? "text-primary-foreground/70" : "text-muted-foreground";

  return (
    <div className="flex items-center gap-3">
      <motion.div
        initial={{ rotate: -10, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="relative"
        style={{ width: sizes.icon, height: sizes.icon }}
      >
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_0_8px_hsl(45_90%_60%/0.5)]">
          <defs>
            <linearGradient id="shieldGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(48, 100%, 75%)" />
              <stop offset="50%" stopColor="hsl(45, 90%, 55%)" />
              <stop offset="100%" stopColor="hsl(38, 90%, 45%)" />
            </linearGradient>
            <linearGradient id="shieldDark" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(215, 65%, 22%)" />
              <stop offset="100%" stopColor="hsl(215, 70%, 12%)" />
            </linearGradient>
          </defs>
          <path d="M32 4 L56 14 L56 32 C56 46 45 56 32 60 C19 56 8 46 8 32 L8 14 Z" fill="url(#shieldDark)" stroke="url(#shieldGold)" strokeWidth="2" />
          <path d="M32 12 L48 19 L48 32 C48 42 41 49 32 52 C23 49 16 42 16 32 L16 19 Z" fill="url(#shieldGold)" opacity="0.15" />
          <text x="32" y="40" textAnchor="middle" fontFamily="Cormorant Garamond, serif" fontSize="26" fontWeight="700" fill="url(#shieldGold)">W</text>
          <circle cx="32" cy="50" r="1.5" fill="url(#shieldGold)" />
        </svg>
      </motion.div>

      <div className="flex flex-col leading-none">
        <span className={`font-heading font-bold tracking-wide ${sizes.title} ${titleColor}`}>
          We<span className="text-gradient-gold">Sure</span>
        </span>
        <span className={`font-body uppercase tracking-[0.25em] ${sizes.sub} ${subColor} mt-0.5`}>
          Insurance · Trust · Suraksha
        </span>
      </div>
    </div>
  );
};

export default Logo;
