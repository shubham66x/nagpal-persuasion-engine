import { motion } from "framer-motion";
import { Gift, FileCheck, BarChart3, Phone, Clock, Shield } from "lucide-react";

const bonuses = [
  { icon: FileCheck, title: "FREE Policy Audit", desc: "Aapki sabhi existing policies ka review aur gaps identify — worth ₹2,000" },
  { icon: BarChart3, title: "Custom Comparison Report", desc: "20+ companies ka side-by-side comparison — worth ₹1,500" },
  { icon: Gift, title: "Tax Saving Guide", desc: "80C aur 80D deductions ka maximum fayda uthao — worth ₹999" },
  { icon: Phone, title: "Lifetime Claim Support", desc: "Poori policy term tak dedicated claim assistance — Priceless" },
];

const OfferSection = () => (
  <section id="offer" className="section-padding bg-background">
    <div className="container-narrow">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
        <span className="text-sm font-semibold text-trust uppercase tracking-wider">Limited Time Offer</span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
          Free Consultation Book Karein, Aur <span className="text-gradient-gold">₹4,499 Worth</span> Ke Bonuses Paayein
        </h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          Limited time ke liye — har free consultation ke saath yeh exclusive bonuses bilkul muft.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
        {bonuses.map((b, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="flex gap-4 p-5 rounded-xl bg-card border border-border card-hover group"
          >
            <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
              <b.icon className="h-6 w-6 text-secondary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground text-sm mb-1">{b.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{b.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
        className="relative bg-card rounded-2xl border-2 border-secondary/30 p-8 text-center max-w-2xl mx-auto overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary via-warm to-secondary" />
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-warm/10 text-warm text-sm font-semibold mb-4">
          <Clock className="h-4 w-4" /> Sirf 10 FREE Slots Is Mahine
        </div>
        <h3 className="font-heading text-2xl font-bold text-foreground mb-3">Aapki FREE Consultation Wait Kar Rahi Hai</h3>
        <p className="text-muted-foreground text-sm mb-6">No cost. No obligation. Sirf honest, expert advice — aapke parivaar ke liye.</p>
        <a href="tel:+919815742277" className="btn-primary-cta">
          <Phone className="h-5 w-5" /> Call +91 98157-42277
        </a>
        <div className="flex items-center justify-center gap-2 mt-4 text-xs text-muted-foreground">
          <Shield className="h-3.5 w-3.5" /> 100% FREE — Koi Hidden Charge Nahi
        </div>
      </motion.div>
    </div>
  </section>
);

export default OfferSection;
