import React from "react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../../context/LanguageContext";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import alaaImage from "../../assets/Alaa Hegazy Mohamed.jpg";

const About: React.FC = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  const stats = [
    { value: "5+", label: t("about.experience") },
    { value: "200+", label: t("about.clients") },
    { value: "10+", label: t("about.treatments") },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="about" className="section-padding bg-muted">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-primary font-medium mb-2">{t("about.subtitle")}</p>
          <h2 className="section-title">{t("about.title")}</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About Image */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-accent/10 rounded-lg rotate-6 transform"></div>
              <img
                src={alaaImage}
                alt="Coach Manar Anwar"
                className="rounded-lg shadow-lg relative z-10"
              />
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={`flex flex-col ${isRTL ? "text-right" : "text-left"}`}
          >
            <motion.p variants={itemVariants} className="text-lg mb-6">
              {t("about.description1")}
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg mb-8">
              {t("about.description2")}
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4"
            >
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="border-2 border-primary/10 bg-card/50 hover:bg-card transition-colors"
                >
                  <CardContent className="p-4 text-center">
                    <p className="text-3xl font-bold text-primary ">
                      {stat.value}
                    </p>
                    <p className="text-sm mt-2">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
