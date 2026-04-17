import { Phone, MessageCircle } from "lucide-react";
import Logo from "./Logo";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground/70 py-12 px-4 sm:px-6 lg:px-8">
    <div className="container-narrow">
      <div className="grid sm:grid-cols-3 gap-8 mb-8">
        <div>
          <div className="mb-4">
            <Logo size="md" variant="light" />
          </div>
          <p className="text-sm leading-relaxed mb-4">Your trusted insurance partner. Protecting families across India since 2009.</p>
          <div className="space-y-2">
            <a href="tel:+919815742277" className="flex items-center gap-2 text-sm hover:text-primary-foreground transition-colors">
              <Phone className="h-4 w-4 text-secondary" /> +91 98157-42277
            </a>
            <a href="https://wa.me/919815742277" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm hover:text-primary-foreground transition-colors">
              <MessageCircle className="h-4 w-4 text-trust" /> WhatsApp Us
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-primary-foreground text-sm mb-3">Services</h4>
          <ul className="space-y-2 text-sm">
            <li>Term Life Insurance</li>
            <li>Health Insurance</li>
            <li>Motor Insurance</li>
            <li>Property Insurance</li>
            <li>Travel Insurance</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-primary-foreground text-sm mb-3">We Serve</h4>
          <ul className="space-y-2 text-sm">
            <li>🇮🇳 All Over India</li>
            <li>Head Office: Ludhiana</li>
            <li>Punjab & North India</li>
            <li>Remote Consultation Available</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 pt-6 text-center text-xs">
        © {new Date().getFullYear()} Nagpal Insurance Services, Ludhiana. Serving clients all across India. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
