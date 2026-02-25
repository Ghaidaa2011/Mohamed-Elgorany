import React from "react";
import { useTranslation } from "react-i18next";
import { Facebook, Instagram, Phone } from "lucide-react";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Facebook",
      icon: <Facebook className="h-5 w-5" />,
      url: "https://www.facebook.com/share/15Lt2wMDen/?mibextid=wwXIfr",
    },
    {
      name: "Instagram",
      icon: <Instagram className="h-5 w-5" />,
      url: "https://www.instagram.com/dr_alaa_hegazy_?igsh=MXNseTVmNHExYWtvag==",
    },
    {
      name: "WhatsApp",
      icon: <Phone className="h-5 w-5" />,
      url: "https://wa.me/+201111106322",
    },
  ];

  return (
    <footer className="bg-card text-card-foreground pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">Alaa Hegazy Mohamed</h3>
            <p className="text-muted-foreground mb-4">{t("hero.subtitle")}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t("nav.home")}</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t("nav.about")}
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t("nav.services")}
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t("nav.portfolio")}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t("nav.contact")}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t("contact.title")}</h3>
            <div className="text-muted-foreground">
              <p className="mb-2">
                {t("contact.phone")}:{" "}
                <a href="https://wa.me/+201111106322">+20 111 110 6322</a>
              </p>
              <p>
                {t("contact.location")}: {t("contact.address")}
              </p>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center gap-4 my-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary/10 hover:bg-primary/20 p-2 rounded-full transition-colors"
              aria-label={link.name}
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center border-t border-border pt-6 text-sm text-muted-foreground">
          <p>
            © {currentYear} Alaa Hegazy Mohamed. {t("footer.rights")}.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
