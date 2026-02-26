import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  return (
    <section id="contact" className="section-padding bg-muted ">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-primary font-medium mb-2">
            {t("contact.subtitle")}
          </p>
          <h2 className="section-title">{t("contact.title")}</h2>
        </motion.div>

        <div className="grid grid-cols-1  ">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`${isRTL ? "text-right" : "text-left"} `}
          >
            <div className="h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-6">
                  {t("contact.subtitle")}
                </h3>
                <p className="mb-8 text-lg">{t("contact.ready")}</p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center me-4">
                      <span className="text-xl">📍</span>
                    </div>
                    <div>
                      <p className="font-bold">{t("contact.location")}</p>
                      <p className="text-muted-foreground">
                        <a
                          href="https://linktr.ee/Diamond.Aesthetics"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {t("contact.address")}
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center me-4">
                      <span className="text-xl">📞</span>
                    </div>
                    <div>
                      <p className="font-bold">{t("contact.phone")}</p>
                      <p className="text-muted-foreground">
                        <a
                          href="tel:+201558155330"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          +20 155 815 5330
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 rounded-lg blur-xl"></div>
                  <div className="bg-card border border-border rounded-lg p-6 relative z-10">
                    <h4 className="font-bold mb-2">
                      {t("contact.workingHours")}:
                    </h4>
                    <p>{t("contact.workingHours.saturday")}</p>
                    {/* <p>{t("contact.workingHours.sunday")}</p> */}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
