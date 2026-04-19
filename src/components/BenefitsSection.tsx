import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Unbiased advice — hum 20+ insurance companies ke saath kaam karte hain, sirf ek se nahi",
  "FREE policy comparison — best coverage minimum premium par",
  "Dedicated claim assistance — hum aapke liye ladte hain, company ke liye nahi",
  "Personalized protection plans — aapke parivaar ki unique zaruraton ke hisaab se",
  "PAN India service — phone ya WhatsApp par kahin se bhi consultation",
  "Annual policy review — taaki coverage aapki life ke saath badhta rahe",
  "Zero extra cost — hamari service aapke liye bilkul FREE hai",
  "Instant WhatsApp support — har insurance query ke liye",
  "Tax-saving guidance — Section 80C aur 80D ke under",
  "5,000+ families ka bharosa, 15+ saal se pure India mein",
];

const BenefitsSection = () => (
  <section id="benefits" className="section-padding" style={{ background: "var(--gradient-hero)" }}>
    <div className="container-narrow">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
        <span className="text-sm font-semibold text-secondary uppercase tracking-wider">WeSure Kyun?</span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mt-3">
          10 Reasons Smart Families Humein Choose Karte Hain
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
        {benefits.map((b, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
            className="flex items-start gap-3 bg-primary-foreground/5 rounded-lg p-4 backdrop-blur-sm border border-primary-foreground/5 hover:bg-primary-foreground/10 transition-colors"
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
