import { motion } from "framer-motion";
import { ShieldCheck, Users, Award } from "lucide-react";
import nagpalPhoto from "@/assets/nagpal-photo.jpeg";

const stats = [
  { icon: Users, value: "5,000+", label: "Families Served" },
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: ShieldCheck, value: "IRDAI", label: "Licensed Broker" },
];

const scrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
  document.getElementById("cta")?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container-narrow section-padding relative z-10 pt-28 md:pt-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-medium mb-6 backdrop-blur-sm border border-primary-foreground/20">
              <ShieldCheck className="h-4 w-4 text-secondary" />
              IRDAI Licensed · 100% Free Service
            </span>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-[1.1] mb-5">
              Free Insurance Guidance for Indian Families —{" "}
              <span className="text-gradient-gold">Without Confusion</span>
            </h1>

            <p className="text-lg text-primary-foreground/85 leading-relaxed mb-8 max-w-xl">
              Hum aapko best life aur health insurance choose karne mein help karte hain — bina kisi bias ke.
            </p>

            <div className="flex flex-col items-start gap-3 mb-10">
              <a href="#cta" onClick={scrollToForm} className="btn-primary-cta animate-pulse-glow">
                Free Consultation Lo
              </a>
              <p className="text-sm text-primary-foreground/75">
                Koi charge nahi. Koi commitment nahi. Sirf expert advice.
              </p>
              <a
                href="https://wa.me/919815742277?text=Namaste%2C%20mujhe%20insurance%20guidance%20chahiye"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-secondary hover:text-secondary/80 underline underline-offset-4 transition-colors"
              >
                Ya WhatsApp pe baat karein →
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="text-center lg:text-left p-3 rounded-xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10"
                >
                  <s.icon className="h-5 w-5 text-secondary mb-1 mx-auto lg:mx-0" />
                  <div className="text-xl font-bold text-primary-foreground">{s.value}</div>
                  <div className="text-xs text-primary-foreground/70">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-secondary/20 to-secondary/5 rounded-3xl blur-xl" />
              <div className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-2xl overflow-hidden border-4 border-secondary/30 shadow-2xl">
                <img
                  src={nagpalPhoto}
                  alt="WeSure - IRDAI Licensed Insurance Advisor"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-card rounded-xl p-3 shadow-lg border border-border">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                    <ShieldCheck className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-foreground">IRDAI Licensed</div>
                    <div className="text-xs text-muted-foreground">Certified Broker</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
