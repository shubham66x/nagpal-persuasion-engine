import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  { name: "Harpreet Singh", location: "Ludhiana", text: "A fire broke out at my factory. The WeSure team settled my ₹18 lakh claim within 48 hours. This isn't just insurance — it's a friend you can count on.", rating: 5 },
  { name: "Rajveer Kaur", location: "Amritsar", text: "After my husband's sudden death, I received the ₹1 Crore term claim without any hassle. This insurance saved my life and my children's future.", rating: 5 },
  { name: "Gurpreet Malhotra", location: "Chandigarh", text: "Got the best family health insurance deal. My admission at PGI was fully cashless — I didn't pay a single rupee out of pocket.", rating: 5 },
  { name: "Amit Bansal", location: "Mumbai", text: "Best motor insurance advice ever. Took zero depreciation cover, and when my car was damaged I got the full claim with no deductions. Highly recommend!", rating: 5 },
  { name: "Priya Sharma", location: "Delhi", text: "I was paying ₹32,000 for family health insurance. WeSure got me better coverage for ₹22,000. Saved ₹10,000 — every year!", rating: 5 },
  { name: "Neha Gupta", location: "Bangalore", text: "Took travel insurance for our Europe trip. My luggage was lost — the claim was processed smoothly. Peace of mind worth every rupee.", rating: 5 },
];

const ProofSection = () => (
  <section id="proof" className="section-padding bg-muted/50">
    <div className="container-narrow">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
        <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Real Stories</span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
          Hear from Families We've <span className="text-gradient-gold">Protected</span>
        </h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          Don't just take our word for it. See what clients across India are saying about WeSure.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="bg-card rounded-xl p-6 border border-border card-hover relative group"
          >
            <Quote className="h-8 w-8 text-secondary/20 absolute top-4 right-4 group-hover:text-secondary/40 transition-colors" />
            <div className="flex gap-0.5 mb-4">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} className="h-4 w-4 fill-secondary text-secondary" />
              ))}
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-5">"{t.text}"</p>
            <div className="border-t border-border pt-3">
              <div className="font-semibold text-foreground text-sm">{t.name}</div>
              <div className="text-xs text-muted-foreground">{t.location}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProofSection;
