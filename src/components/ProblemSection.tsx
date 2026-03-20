import { motion } from "framer-motion";
import { AlertTriangle, TrendingUp, HeartCrack, Car } from "lucide-react";

const problems = [
  { icon: HeartCrack, title: "Medical Emergency?", desc: "One hospital visit can wipe out years of savings. Average ICU costs ₹50,000/day across India." },
  { icon: AlertTriangle, title: "Unexpected Loss?", desc: "Without proper life cover, your family could face financial devastation overnight." },
  { icon: TrendingUp, title: "Rising Costs?", desc: "Healthcare inflation at 14% means today's ₹5L cover won't be enough tomorrow." },
  { icon: Car, title: "Accident or Theft?", desc: "One road accident can cost ₹2-10 lakhs. Are you covered beyond basic third-party?" },
];

const ProblemSection = () => (
  <section className="section-padding bg-background">
    <div className="container-narrow">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
        <span className="text-sm font-semibold text-warm uppercase tracking-wider">The Reality Check</span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
          Are You <span className="text-warm">Gambling</span> With Your Family's Future?
        </h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          Most Indian families are dangerously underinsured. One unexpected event can undo a lifetime of hard work.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-6">
        {problems.map((p, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="bg-card rounded-xl p-6 border border-border card-hover group"
          >
            <div className="w-12 h-12 rounded-lg bg-warm/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <p.icon className="h-6 w-6 text-warm" />
            </div>
            <h3 className="font-heading text-xl font-semibold text-foreground mb-2">{p.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;
