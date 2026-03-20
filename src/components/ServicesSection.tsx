import { motion } from "framer-motion";
import { Heart, Activity, Car, Building2, Plane, ArrowRight } from "lucide-react";

const services = [
  { icon: Heart, title: "Term Life Insurance", desc: "Secure your family's future with affordable pure protection plans starting at just ₹500/month. Cover up to ₹2 Crore.", color: "text-warm", bg: "bg-warm/10" },
  { icon: Activity, title: "Health Insurance", desc: "Comprehensive cashless health coverage across 10,000+ hospitals. Individual & family floater plans with no room rent limits.", color: "text-trust", bg: "bg-trust/10" },
  { icon: Car, title: "Motor Insurance", desc: "Complete car & bike insurance with instant claims, roadside assistance, and zero depreciation. Own damage + third-party.", color: "text-secondary", bg: "bg-secondary/10" },
  { icon: Building2, title: "Property Insurance", desc: "Protect your home, shop, or factory against fire, theft, natural disasters, and more. Commercial & residential coverage.", color: "text-primary", bg: "bg-primary/10" },
  { icon: Plane, title: "Travel Insurance", desc: "Travel worry-free with coverage for medical emergencies, trip cancellation, lost baggage & passport assistance worldwide.", color: "text-warm", bg: "bg-warm/10" },
];

const ServicesSection = () => (
  <section id="services" className="section-padding bg-background">
    <div className="container-narrow">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
        <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Our Services</span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
          Complete Protection, <span className="text-gradient-gold">One Trusted Advisor</span>
        </h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          Why run to five different agents? Get expert advice on all your insurance needs from a single trusted partner.
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
              Get Quote <ArrowRight className="h-4 w-4" />
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
