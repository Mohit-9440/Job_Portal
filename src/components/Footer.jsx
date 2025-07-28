import {
  Phone,
  MapPin,
} from "lucide-react";
import logo from "../assets/logo.png";
import { footerLinks } from "../data/mockData";

const FooterLinkSection = ({ title, links }) => {
  return (
    <div>
      <h4 className="text-lg font-semibold mb-4 text-foreground">{title}</h4>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <span className="mb-2">
                <img src={logo} alt="JobHunt" style={{marginTop: '-40px'}} className="h-32 w-32" />
              </span>
              <p className="text-muted-foreground max-w-sm mb-4">
                Find your dream job with the best companies. We connect talented
                professionals with amazing opportunities. Our platform offers
                comprehensive job search tools, career counseling, and
                personalized job recommendations.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <FooterLinkSection
            title="Quick Links"
            links={footerLinks.quickLinks}
          />
          <FooterLinkSection title="Legal" links={footerLinks.legal} />
          <FooterLinkSection title="Follow Us" links={footerLinks.followUs} />

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center text-muted-foreground">
                <Phone className="h-4 w-4 mr-3" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <MapPin className="h-8 w-8 mr-3" />
                <span>123 Job Street, Tech City, TC 12345</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">© 2024 Jobhunt. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
