import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Unbiased advice — we work with 20+ insurance companies, not just one",
  "Free policy comparison so you get the best coverage at lowest premium",
  "Dedicated claim assistance — we fight for your claim, not the company",
  "Personalized protection plans designed for your family's unique needs",
  "Doorstep service across Ludhiana, Jalandhar & entire Punjab",
  "Annual policy review to ensure your coverage grows with your life",
  "Zero extra cost — our service is absolutely free for you",
  "Instant WhatsApp support for all your insurance queries",
  "Tax-saving guidance under Section 80C and 80D",
  "Trusted by 5,000+ families across Punjab for 15+ years",
];

const BenefitsSection = () => (
  <section id="benefits" className="section-padding" style={{ background: "var(--gradient-hero)" }}>
    <div className="container-narrow">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
        <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Why Nagpal Insurance?</span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mt-3">
          10 Reasons Smart Families Choose Us
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
        {benefits.map((b, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
            className="flex items-start gap-3 bg-primary-foreground/5 rounded-lg p-4 backdrop-blur-sm"
          >
            <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
            <span className="text-primary-foreground/90 text-sm leading-relaxed">{b}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
