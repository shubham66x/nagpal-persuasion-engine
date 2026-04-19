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
          <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Hamari Kahaani</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
            Ek Personal Loss Se Lekar <span className="text-gradient-gold">5,000+ Families Ki Suraksha</span> Tak
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Jab ek close family ko bina health insurance ke medical emergency face karni padi, unki ₹15 lakh ki savings raat-o-raat khatam ho gayi. Wo lamha humein hila ke rakh diya.
            </p>
            <p>
              <strong className="text-foreground">WeSure</strong> ek hi mission ke saath shuru hua: India mein koi bhi family galat insurance advice ki wajah se barbaad nahi honi chahiye.
            </p>
            <p>
              <strong className="text-foreground">15+ saal ka experience</strong> Ludhiana se, par service pure India ke liye. Hum sirf policy nahi bechte — hum personalized protection plans banate hain jo zarurat ke time kaam aate hain.
            </p>
            <p>
              Hum <strong className="text-foreground">20+ top insurance companies</strong> ke saath kaam karte hain — taaki aapke liye sahi coverage best price par mile.
            </p>
          </div>
          <div className="mt-8 flex items-center gap-4 p-4 rounded-xl bg-card border border-border shadow-sm">
            <div className="w-12 h-12 rounded-full bg-trust/10 flex items-center justify-center flex-shrink-0">
              <span className="text-trust text-xl font-bold">✓</span>
            </div>
            <div>
              <div className="font-semibold text-foreground text-sm">Hamara Vaada</div>
              <div className="text-muted-foreground text-sm">"Har client ka parivaar hum apna parivaar maante hain."</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default StorySection;
