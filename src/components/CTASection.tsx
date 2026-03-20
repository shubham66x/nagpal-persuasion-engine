import { motion } from "framer-motion";
import { Phone, MapPin, Clock, Mail } from "lucide-react";

const CTASection = () => (
  <section id="cta" className="section-padding bg-background">
    <div className="container-narrow">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Take Action Now</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
            Your Family's Protection is <span className="text-gradient-gold">One Call Away</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Every day without proper insurance is a risk your family doesn't deserve. Call us today for a free, no-obligation consultation. It takes just 15 minutes to secure your family's future.
          </p>

          <div className="space-y-4">
            <a href="tel:+919876000000" className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border card-hover">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                <Phone className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Call / WhatsApp</div>
                <div className="font-semibold text-foreground">+91 98760-00000</div>
              </div>
            </a>
            <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border">
              <div className="w-12 h-12 rounded-lg bg-trust/10 flex items-center justify-center">
                <MapPin className="h-6 w-6 text-trust" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Visit Us</div>
                <div className="font-semibold text-foreground text-sm">Ludhiana, Punjab, India</div>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border">
              <div className="w-12 h-12 rounded-lg bg-warm/10 flex items-center justify-center">
                <Clock className="h-6 w-6 text-warm" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Working Hours</div>
                <div className="font-semibold text-foreground text-sm">Mon – Sat, 9:00 AM – 7:00 PM</div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          className="bg-card rounded-2xl p-8 border border-border shadow-lg"
        >
          <h3 className="font-heading text-2xl font-bold text-foreground mb-2">Get Your Free Quote</h3>
          <p className="text-muted-foreground text-sm mb-6">Fill this form and we'll call you within 30 minutes.</p>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Your Full Name" className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50" />
            <input type="tel" placeholder="Phone / WhatsApp Number" className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50" />
            <select className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50">
              <option value="">Select Insurance Type</option>
              <option>Term Life Insurance</option>
              <option>Health Insurance</option>
              <option>Motor Insurance</option>
              <option>Property Insurance</option>
              <option>Travel Insurance</option>
            </select>
            <textarea placeholder="Any specific requirements?" rows={3} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 resize-none" />
            <button type="submit" className="btn-primary-cta w-full animate-pulse-glow">
              <Mail className="h-5 w-5" /> Get Free Quote Now
            </button>
            <p className="text-xs text-muted-foreground text-center">🔒 Your information is 100% secure and never shared.</p>
          </form>
        </motion.div>
      </div>
    </div>
  </section>
);

export default CTASection;
