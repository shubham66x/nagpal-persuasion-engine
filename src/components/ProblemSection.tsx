import { motion } from "framer-motion";
import { AlertTriangle, TrendingUp, HeartCrack, Car } from "lucide-react";

const problems = [
  { icon: HeartCrack, title: "Medical Emergency?", desc: "Ek hospital visit aapki saalon ki savings kha sakti hai. Average ICU cost ₹50,000/din hai India mein." },
  { icon: AlertTriangle, title: "Achaanak Loss?", desc: "Bina sahi life cover ke, aapka parivaar raat-o-raat financial mushkil mein aa sakta hai." },
  { icon: TrendingUp, title: "Badhti Costs?", desc: "Healthcare inflation 14% — aaj ka ₹5L cover kal kaafi nahi hoga. Time rehte plan karo." },
  { icon: Car, title: "Accident Ya Theft?", desc: "Ek road accident ₹2-10 lakh tak le sakta hai. Sirf third-party se kaam nahi chalega." },
];

const ProblemSection = () => (
  <section className="section-padding bg-background">
    <div className="container-narrow">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
        <span className="text-sm font-semibold text-warm uppercase tracking-wider">⚠ Reality Check</span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
          Kya Aap Apne Family Ke Future Ke Saath <span className="text-warm">Gamble</span> Kar Rahe Ho?
        </h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          India ke zyaadatar families khatarnaak roop se under-insured hain. Ek anhoni aapki zindagi bhar ki mehnat tabaah kar sakti hai.
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
