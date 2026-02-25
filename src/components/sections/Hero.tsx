import React from "react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../../context/LanguageContext";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Phone, ArrowRight } from "lucide-react";
import alaaImage from "../../assets/Alaa Hegazy.jpg";

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
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
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-background via-background to-primary/5"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Hero Text Content */}
          <motion.div
            className="md:w-1/2 text-center md:text-left mb-10 md:mb-0"
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col justify-center xl:items-start sm:items-center md:items-center">
              <p className="text-primary mb-2">{t("hero.greeting")}</p>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                {t("hero.name")}
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-muted-foreground">
                {t("hero.title")}
              </h2>
              <p className="text-lg mb-8 max-w-lg mx-auto md:mx-0">
                {t("hero.subtitle")}
              </p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center sm:justify-center md:justify-center xl:justify-start">
              <Button size="lg" asChild>
                <a href="#contact">
                  {t("hero.cta")}
                  <ArrowRight
                    className={`ml-2 h-4 w-4 ${isRTL ? "rotate-180" : ""}`}
                  />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#services">{t("nav.services")}</a>
              </Button>
            </div>
            {/* Social Media Links */}
            <div className="flex justify-center sm:justify-center md:justify-center xl:justify-start gap-4 my-6">
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
          </motion.div>

          {/* Hero Image */}
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl"></div>
              <img
                src={alaaImage}
                alt="Alaa Hegazy"
                className="rounded-3xl shadow-2xl relative mx-auto"
                style={{ maxHeight: "600px", objectFit: "cover" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
