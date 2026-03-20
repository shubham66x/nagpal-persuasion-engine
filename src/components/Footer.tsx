import { Shield } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground/70 py-12 px-4 sm:px-6 lg:px-8">
    <div className="container-narrow">
      <div className="grid sm:grid-cols-3 gap-8 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Shield className="h-6 w-6 text-secondary" />
            <span className="font-heading text-lg font-bold text-primary-foreground">Nagpal Insurance</span>
          </div>
          <p className="text-sm leading-relaxed">Your trusted insurance partner in Punjab. Protecting families since 2009.</p>
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
          <h4 className="font-semibold text-primary-foreground text-sm mb-3">Service Areas</h4>
          <ul className="space-y-2 text-sm">
            <li>Ludhiana</li>
            <li>Jalandhar</li>
            <li>Amritsar</li>
            <li>Chandigarh</li>
            <li>All Punjab</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 pt-6 text-center text-xs">
        © {new Date().getFullYear()} Nagpal Insurance Services, Ludhiana. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
