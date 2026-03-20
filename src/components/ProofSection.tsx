import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  { name: "Rajinder Singh", location: "Ludhiana", text: "Nagpal ji helped us get ₹18 lakh health claim settled in just 5 days when the hospital was creating problems. Lifesaver!", rating: 5 },
  { name: "Priya Sharma", location: "Delhi", text: "I was paying ₹32,000 for my family health insurance. Nagpal Insurance found me better coverage for just ₹22,000. Saved ₹10,000!", rating: 5 },
  { name: "Gurpreet Kaur", location: "Ludhiana", text: "After my husband's sudden passing, Nagpal ji personally handled the entire ₹1 Crore life insurance claim. Our family will forever be grateful.", rating: 5 },
  { name: "Amit Bansal", location: "Mumbai", text: "Best motor insurance advice! Got zero depreciation cover and when my car was damaged, got full claim without any deduction. Highly recommend!", rating: 5 },
  { name: "Hardeep Gill", location: "Chandigarh", text: "Nagpal Insurance reviewed all our old policies and restructured everything. Now we have better coverage and actually paying less. Brilliant service!", rating: 5 },
  { name: "Neha Gupta", location: "Bangalore", text: "Took travel insurance for our Europe trip. When my luggage was lost, the claim was processed smoothly. Peace of mind worth every rupee!", rating: 5 },
];

const ProofSection = () => (
  <section id="proof" className="section-padding bg-muted/50">
    <div className="container-narrow">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
        <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Real Results</span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
          Hear From Families We've <span className="text-gradient-gold">Protected</span>
        </h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          Don't just take our word for it. Here's what our clients across India say about their experience with us.
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
