import { motion } from "framer-motion";
import nagpalPhoto from "@/assets/nagpal-photo-2.jpg";

const StorySection = () => (
  <section id="story" className="section-padding bg-muted/50">
    <div className="container-narrow">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <div className="relative">
            <div className="absolute -inset-3 bg-gradient-to-br from-secondary/20 to-transparent rounded-3xl blur-lg" />
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img src={nagpalPhoto} alt="WeSure founder" className="w-full h-80 lg:h-[420px] object-cover object-top" />
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Our Story</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
            From One Personal Loss to <span className="text-gradient-gold">5,000+ Families Protected</span>
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              When a close family member faced a medical emergency without health insurance, ₹15 lakh in savings vanished overnight. That moment changed everything for us.
            </p>
            <p>
              <strong className="text-foreground">WeSure</strong> was born with a single mission: no Indian family should ever be ruined by bad insurance advice.
            </p>
            <p>
              <strong className="text-foreground">15+ years of experience</strong> rooted in Ludhiana, serving families across India. We don't just sell policies — we build personalized protection plans that actually work when you need them.
            </p>
            <p>
              We work with <strong className="text-foreground">20+ leading insurance companies</strong> so you get the right coverage at the best possible price.
            </p>
          </div>
          <div className="mt-8 flex items-center gap-4 p-4 rounded-xl bg-card border border-border shadow-sm">
            <div className="w-12 h-12 rounded-full bg-trust/10 flex items-center justify-center flex-shrink-0">
              <span className="text-trust text-xl font-bold">✓</span>
            </div>
            <div>
              <div className="font-semibold text-foreground text-sm">Our Promise</div>
              <div className="text-muted-foreground text-sm">"Every client's family is treated like our own."</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default StorySection;
