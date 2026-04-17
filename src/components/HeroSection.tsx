import { motion } from "framer-motion";
import { Phone, ArrowRight, Shield, Users, Award, MessageCircle } from "lucide-react";
import nagpalPhoto from "@/assets/nagpal-photo.jpeg";

const stats = [
  { icon: Users, value: "5,000+", label: "Families Protected" },
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: Shield, value: "₹100Cr+", label: "Claims Settled" },
];

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      {/* Static gradient orbs (no animation for performance) */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />

      <div className="container-narrow section-padding relative z-10 pt-28 md:pt-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Copy */}
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-secondary text-sm font-semibold mb-6 backdrop-blur-sm border border-secondary/20"
            >
              🇮🇳 India's Trusted Insurance Advisor
            </motion.span>
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-primary-foreground leading-[1.05] mb-6 text-glow">
              Your Family Deserves <br />
              <span className="text-gradient-gold italic">Complete Protection</span>
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed mb-8 max-w-lg">
              Don't leave your family's future to chance. Get expert guidance on Life, Health, Motor, Property & Travel insurance — serving clients all across India.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <a href="tel:+919815742277" className="btn-primary-cta animate-pulse-glow">
                <Phone className="h-5 w-5" /> Get Free Consultation
              </a>
              <a href="https://wa.me/919815742277" target="_blank" rel="noopener noreferrer" className="btn-outline-cta !border-trust/40 hover:!bg-trust/10">
                <MessageCircle className="h-5 w-5" /> WhatsApp Us
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {stats.map((s, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 + i * 0.15 }}
                  className="text-center lg:text-left p-3 rounded-xl bg-primary-foreground/5 backdrop-blur-sm"
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
              <div className="absolute -inset-4 bg-gradient-to-br from-secondary/20 to-secondary/5 rounded-3xl blur-xl" />
              <div className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-2xl overflow-hidden border-4 border-secondary/30 shadow-2xl">
                <img src={nagpalPhoto} alt="Nagpal Insurance Services - Your Trusted Insurance Advisor" className="w-full h-full object-cover object-top" />
              </div>
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-card rounded-xl p-3 shadow-lg border border-border"
              >
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-trust/10 flex items-center justify-center">
                    <Shield className="h-5 w-5 text-trust" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-foreground">IRDAI Licensed</div>
                    <div className="text-xs text-muted-foreground">Certified Broker</div>
                  </div>
                </div>
              </motion.div>
              {/* Serving all India badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 }}
                className="absolute -top-3 -right-3 bg-secondary text-secondary-foreground rounded-lg px-3 py-1.5 shadow-lg text-xs font-bold"
              >
                🇮🇳 PAN India
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
