import { Phone, MessageCircle, ShieldCheck } from "lucide-react";
import Logo from "./Logo";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground/75 py-12 px-4 sm:px-6 lg:px-8">
    <div className="container-narrow">
      <div className="grid sm:grid-cols-3 gap-8 mb-8">
        <div>
          <div className="mb-4">
            <Logo size="md" variant="light" />
          </div>
          <p className="text-base leading-relaxed mb-4">
            WeSure — A brand of Nagpal Insurance Brokers. Trusted by Indian families since 2009.
          </p>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-secondary/15 border border-secondary/30 mb-4">
            <ShieldCheck className="h-4 w-4 text-secondary" />
            <span className="text-sm font-semibold text-primary-foreground">IRDAI Registered</span>
          </div>
          <div className="space-y-2">
            <a href="tel:+919815742277" className="flex items-center gap-2 text-base hover:text-primary-foreground transition-colors">
              <Phone className="h-4 w-4 text-secondary" /> +91 98157-42277
            </a>
            <a href="https://wa.me/919815742277" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-base hover:text-primary-foreground transition-colors">
              <MessageCircle className="h-4 w-4 text-secondary" /> WhatsApp
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-primary-foreground text-base mb-3">Services</h4>
          <ul className="space-y-2 text-base">
            <li>Term Life Insurance</li>
            <li>Health Insurance</li>
            <li>Motor Insurance</li>
            <li>Property Insurance</li>
            <li>Travel Insurance</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-primary-foreground text-base mb-3">Service Area</h4>
          <ul className="space-y-2 text-base">
            <li>🇮🇳 Serving All of India</li>
            <li>Head Office: Ludhiana, Punjab</li>
            <li>Remote Consultation Available</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 pt-6 text-center text-sm">
        © {new Date().getFullYear()} WeSure (Nagpal Insurance Brokers) · IRDAI Registered Insurance Broker · All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
