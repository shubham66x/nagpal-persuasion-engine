import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  { name: "Harpreet Singh", location: "Ludhiana", text: "Meri factory mein fire lag gayi thi. WeSure team ne 48 ghante mein ₹18 lakh ka claim settle karwa diya. Yeh sirf insurance nahi — yeh dost hai.", rating: 5 },
  { name: "Rajveer Kaur", location: "Amritsar", text: "Husband ki sudden death ke baad mujhe ₹1 Crore term claim mila bina kisi taklif ke. Is insurance ne meri aur bachon ki zindagi bachaa li.", rating: 5 },
  { name: "Gurpreet Malhotra", location: "Chandigarh", text: "Health insurance ki poori family ke liye best deal mili. Cashless admit tha PGI mein — ek rupaya khud nahi dena pada.", rating: 5 },
  { name: "Amit Bansal", location: "Mumbai", text: "Best motor insurance advice! Zero depreciation cover liya, jab car damage hui toh full claim mila bina kisi deduction ke. Highly recommend!", rating: 5 },
  { name: "Priya Sharma", location: "Delhi", text: "Main ₹32,000 de rahi thi family health insurance ke liye. WeSure ne better coverage ₹22,000 mein dilwa diya. Saved ₹10,000!", rating: 5 },
  { name: "Neha Gupta", location: "Bangalore", text: "Europe trip ke liye travel insurance liya. Luggage lost ho gaya tha — claim smoothly process hua. Peace of mind worth every rupee!", rating: 5 },
];

const ProofSection = () => (
  <section id="proof" className="section-padding bg-muted/50">
    <div className="container-narrow">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
        <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Real Stories</span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
          Suniye Un Families Se Jinki Humne <span className="text-gradient-gold">Suraksha Ki</span>
        </h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          Sirf hamari baat mat maaniye. Dekhiye India bhar ke clients kya keh rahe hain WeSure ke baare mein.
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
