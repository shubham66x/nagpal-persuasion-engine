import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, Shield } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#story" },
  { label: "Why Us", href: "#benefits" },
  { label: "Testimonials", href: "#proof" },
  { label: "Contact", href: "#cta" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border">
      <div className="container-narrow flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16 md:h-20">
        <a href="#hero" className="flex items-center gap-2">
          <Shield className="h-8 w-8 text-secondary" />
          <div>
            <span className="font-heading text-lg md:text-xl font-bold text-foreground">Nagpal</span>
            <span className="font-heading text-lg md:text-xl font-bold text-secondary"> Insurance</span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
          <a href="tel:+919815742277" className="btn-primary-cta !py-2.5 !px-5 !text-sm">
            <Phone className="h-4 w-4" /> Call Now
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-card border-b border-border overflow-hidden"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-sm font-medium text-muted-foreground hover:text-foreground">
                  {l.label}
                </a>
              ))}
              <a href="tel:+919815742277" className="btn-primary-cta !py-2.5 !text-sm w-full">
                <Phone className="h-4 w-4" /> Call Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
