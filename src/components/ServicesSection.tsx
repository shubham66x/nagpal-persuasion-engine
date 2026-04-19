import { motion } from "framer-motion";
import { Heart, Activity, Car, Building2, Plane, ArrowRight } from "lucide-react";

const services = [
  { icon: Heart, title: "Term Life Insurance", desc: "Sirf ₹500/month se shuru — apne family ko ₹2 Crore tak ka cover dilao. Pure protection, zero compromise.", color: "text-warm", bg: "bg-warm/10" },
  { icon: Activity, title: "Health Insurance", desc: "10,000+ hospitals mein cashless treatment. Family floater ya individual — har plan mein zero room rent limit.", color: "text-trust", bg: "bg-trust/10" },
  { icon: Car, title: "Motor Insurance", desc: "Car ya bike — bumper-to-bumper protection. Instant claim, 24/7 roadside assistance, zero depreciation cover.", color: "text-secondary", bg: "bg-secondary/10" },
  { icon: Building2, title: "Property Insurance", desc: "Ghar, dukaan ya factory — fire, theft, flood aur natural disaster se poori suraksha. Commercial + residential.", color: "text-primary", bg: "bg-primary/10" },
  { icon: Plane, title: "Travel Insurance", desc: "Amritsar se Amsterdam tak — medical emergency, trip cancellation, lost baggage. Travel karo bina tension.", color: "text-warm", bg: "bg-warm/10" },
];

const ServicesSection = () => (
  <section id="services" className="section-padding bg-background">
    <div className="container-narrow">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
        <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Hamari Services</span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
          Poori Suraksha, <span className="text-gradient-gold">Ek Hi Trusted Advisor</span>
        </h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          Paanch alag-alag agents ke pas kyun bhaagein? Ek hi jagah se sab insurance ka expert advice paayein.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="bg-card rounded-xl p-6 border border-border card-hover group cursor-pointer"
          >
            <div className={`w-14 h-14 rounded-xl ${s.bg} flex items-center justify-center mb-5`}>
              <s.icon className={`h-7 w-7 ${s.color}`} />
            </div>
            <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>
            <span className="inline-flex items-center gap-1 text-sm font-medium text-secondary group-hover:gap-2 transition-all">
              Quote Lo <ArrowRight className="h-4 w-4" />
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
