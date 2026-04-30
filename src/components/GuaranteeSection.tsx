import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const GuaranteeSection = () => (
  <section className="section-padding" style={{ background: "var(--gradient-hero)" }}>
    <div className="container-narrow">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        <ShieldCheck className="h-16 w-16 text-secondary mx-auto mb-6" />
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
          Our Iron-Clad Promise
        </h2>
        <p className="text-primary-foreground/80 text-lg leading-relaxed mb-6">
          If we can't offer you a better policy or save you money compared to your current coverage — we'll tell you honestly. No pressure, no tricks, no hidden agendas.
        </p>
        <p className="text-primary-foreground/80 leading-relaxed">
          We've built our reputation over <strong className="text-primary-foreground">15 years</strong> on a single principle: <strong className="text-secondary">your trust is worth more than any commission.</strong> That's why 90% of our business comes from referrals.
        </p>
      </motion.div>
    </div>
  </section>
);

export default GuaranteeSection;
