import { motion } from "framer-motion";
import { Phone, ArrowRight, Shield, Users, Award } from "lucide-react";
import nagpalPhoto from "@/assets/nagpal-photo.jpeg";

const stats = [
  { icon: Users, value: "5,000+", label: "Families Protected" },
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: Shield, value: "₹100Cr+", label: "Claims Settled" },
];

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />

      <div className="container-narrow section-padding relative z-10 pt-28 md:pt-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Copy */}
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-secondary text-sm font-semibold mb-6">
              Punjab's Most Trusted Insurance Advisor
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Your Family Deserves <br />
              <span className="text-gradient-gold">Complete Protection</span>
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed mb-8 max-w-lg">
              Don't leave your family's future to chance. Get expert guidance on Life, Health, Motor, Property & Travel insurance — all under one roof in Ludhiana.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <a href="tel:+919876000000" className="btn-primary-cta animate-pulse-glow">
                <Phone className="h-5 w-5" /> Get Free Consultation
              </a>
              <a href="#services" className="btn-outline-cta">
                Explore Plans <ArrowRight className="h-5 w-5" />
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {stats.map((s, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 + i * 0.15 }}
                  className="text-center lg:text-left"
                >
                  <s.icon className="h-5 w-5 text-secondary mb-1 mx-auto lg:mx-0" />
                  <div className="text-2xl font-bold text-primary-foreground">{s.value}</div>
                  <div className="text-xs text-primary-foreground/60">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Photo */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-72 h-80 sm:w-80 sm:h-96 rounded-2xl overflow-hidden border-4 border-secondary/30 shadow-2xl">
                <img src={nagpalPhoto} alt="Nagpal Insurance Services - Your Trusted Insurance Advisor" className="w-full h-full object-cover object-top" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-card rounded-xl p-3 shadow-lg border border-border">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-trust/10 flex items-center justify-center">
                    <Shield className="h-5 w-5 text-trust" />
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
