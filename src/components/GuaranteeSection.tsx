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
          Hamara Iron-Clad Vaada
        </h2>
        <p className="text-primary-foreground/80 text-lg leading-relaxed mb-6">
          Agar hum aapko better policy ya paise bachane wala plan na de paayein aapke current coverage ke comparison mein — toh hum aapko honestly bata denge. Koi pressure nahi, koi tricks nahi, koi hidden agenda nahi.
        </p>
        <p className="text-primary-foreground/80 leading-relaxed">
          Humne <strong className="text-primary-foreground">15 saal</strong> ek hi principle par reputation banayi hai: <strong className="text-secondary">aapka bharosa kisi bhi commission se zyada keemti hai.</strong> Isi liye 90% business referral se aata hai.
        </p>
      </motion.div>
    </div>
  </section>
);

export default GuaranteeSection;
