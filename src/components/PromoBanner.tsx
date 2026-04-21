import { ShieldCheck } from "lucide-react";

const PromoBanner = () => (
  <div className="fixed top-0 left-0 right-0 z-[60] bg-primary text-primary-foreground border-b border-secondary/20">
    <div className="container-narrow px-4 py-2 flex items-center justify-center gap-2 text-xs sm:text-sm text-center">
      <ShieldCheck className="h-4 w-4 text-secondary flex-shrink-0" />
      <span className="font-medium">
        IRDAI Licensed Broker · 5,000+ Families Served Across India
      </span>
    </div>
  </div>
);

export default PromoBanner;
