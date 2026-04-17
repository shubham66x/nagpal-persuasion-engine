import { useEffect, useState } from "react";
import { Sparkles, X, Clock } from "lucide-react";

const PromoBanner = () => {
  const [visible, setVisible] = useState(true);
  const [time, setTime] = useState({ h: 23, m: 59, s: 59 });

  useEffect(() => {
    const target = new Date();
    target.setHours(23, 59, 59, 999);
    const tick = () => {
      const now = new Date();
      const diff = Math.max(0, target.getTime() - now.getTime());
      const h = Math.floor(diff / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      setTime({ h, m, s });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  if (!visible) return null;

  const pad = (n: number) => n.toString().padStart(2, "0");

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-primary via-primary/95 to-primary text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{ background: "var(--gradient-gold-shine)", backgroundSize: "200% auto" }} />
      <div className="relative container-narrow px-4 py-2 flex items-center justify-center gap-3 text-xs sm:text-sm">
        <Sparkles className="h-4 w-4 text-secondary animate-pulse hidden sm:block" />
        <span className="font-medium">
          <span className="text-secondary font-bold">Limited Offer:</span>{" "}
          <span className="hidden sm:inline">Free policy review + ₹500 Amazon voucher on first consultation. </span>
          <span className="sm:hidden">Free review + ₹500 voucher. </span>
        </span>
        <div className="flex items-center gap-1.5 bg-primary-foreground/10 px-2 py-1 rounded-md backdrop-blur-sm border border-secondary/30">
          <Clock className="h-3 w-3 text-secondary" />
          <span className="font-mono font-bold tabular-nums text-secondary">
            {pad(time.h)}:{pad(time.m)}:{pad(time.s)}
          </span>
        </div>
        <button
          onClick={() => setVisible(false)}
          className="absolute right-3 text-primary-foreground/60 hover:text-primary-foreground transition-colors"
          aria-label="Close banner"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default PromoBanner;
