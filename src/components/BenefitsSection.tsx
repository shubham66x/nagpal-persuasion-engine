import { motion } from "framer-motion";
import { ShieldCheck, Users, HeartHandshake } from "lucide-react";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Unbiased Advice",
    desc: "We work with 20+ insurance companies — and recommend only what's right for you.",
  },
  {
    icon: Users,
    title: "Expert Guidance",
    desc: "15+ years of experience. Plain-language explanations — zero jargon, zero confusion.",
  },
  {
    icon: HeartHandshake,
    title: "Claim Support",
    desc: "When it matters most, we stand by you — full assistance from start to finish.",
  },
];

const BenefitsSection = () => (
  <section id="benefits" className="section-padding bg-muted/40">
    <div className="container-narrow">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12 max-w-2xl mx-auto"
      >
        <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Why WeSure</span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
          Three things that actually matter
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {benefits.map((b, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-2xl p-7 border border-border shadow-sm hover:shadow-lg transition-shadow"
          >
            <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
              <b.icon className="h-6 w-6 text-secondary" />
            </div>
            <h3 className="font-heading text-xl font-bold text-foreground mb-2">{b.title}</h3>
            <p className="text-base text-muted-foreground leading-relaxed">{b.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <a href="#cta" className="btn-primary-cta">Get Free Consultation</a>
        <p className="text-sm text-muted-foreground mt-3">No charge. No commitment.</p>
      </div>
    </div>
  </section>
);

export default BenefitsSection;
