import { motion } from "framer-motion";
import { Phone, MapPin, Clock, Mail, MessageCircle } from "lucide-react";

const CTASection = () => (
  <section id="cta" className="section-padding bg-background">
    <div className="container-narrow">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Abhi Action Lo</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
            Aapke Family Ki Suraksha <span className="text-gradient-gold">Ek Call Door Hai</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Bina sahi insurance ke har din ek risk hai jo aapka parivaar deserve nahi karta. Aaj hi free, no-obligation consultation ke liye call karein. Sirf 15 minutes mein future secure karein.
          </p>

          <div className="space-y-4">
            <a href="tel:+919815742277" className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border card-hover">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                <Phone className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Call Karein</div>
                <div className="font-semibold text-foreground">+91 98157-42277</div>
              </div>
            </a>
            <a href="https://wa.me/919815742277" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border card-hover">
              <div className="w-12 h-12 rounded-lg bg-trust/10 flex items-center justify-center">
                <MessageCircle className="h-6 w-6 text-trust" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">WhatsApp</div>
                <div className="font-semibold text-foreground">+91 98157-42277</div>
              </div>
            </a>
            <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border">
              <div className="w-12 h-12 rounded-lg bg-warm/10 flex items-center justify-center">
                <MapPin className="h-6 w-6 text-warm" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Head Office</div>
                <div className="font-semibold text-foreground text-sm">Ludhiana, Punjab — Pure India Mein Service</div>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                <Clock className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Working Hours</div>
                <div className="font-semibold text-foreground text-sm">Mon – Sat, 9:00 AM – 7:00 PM</div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          className="bg-card rounded-2xl p-8 border border-border shadow-lg relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <h3 className="font-heading text-2xl font-bold text-foreground mb-2 relative">FREE Quote Paayein</h3>
          <p className="text-muted-foreground text-sm mb-6 relative">Yeh form bharein, hum 30 minute mein aapko call karenge.</p>
          <form className="space-y-4 relative" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Aapka Pura Naam" className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-shadow" />
            <input type="tel" placeholder="Phone / WhatsApp Number" className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-shadow" />
            <select className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-shadow">
              <option value="">Insurance Type Choose Karein</option>
              <option>Term Life Insurance</option>
              <option>Health Insurance</option>
              <option>Motor Insurance</option>
              <option>Property Insurance</option>
              <option>Travel Insurance</option>
            </select>
            <textarea placeholder="Koi specific requirement?" rows={3} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 resize-none transition-shadow" />
            <button type="submit" className="btn-primary-cta w-full">
              <Mail className="h-5 w-5" /> FREE Quote Abhi Lein
            </button>
            <p className="text-xs text-muted-foreground text-center">🔒 Aapki information 100% secure hai aur kabhi share nahi hoti.</p>
          </form>
        </motion.div>
      </div>
    </div>
  </section>
);

export default CTASection;
