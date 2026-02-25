import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Services: React.FC = () => {
  const { t } = useTranslation();

  const services = [
    {
      title: t("services.laser.title"),
      description: t("services.laser.description"),
      icon: "⚡",
      color: "from-purple-400 to-indigo-500",
    },
    {
      title: t("services.contouring.title"),
      description: t("services.contouring.description"),
      icon: "✨",
      color: "from-blue-400 to-cyan-500",
    },
    {
      title: t("services.nutrition.title"),
      description: t("services.nutrition.description"),
      icon: "🥗",
      color: "from-green-400 to-emerald-500",
    },
    {
      title: t("services.consultation.title"),
      description: t("services.consultation.description"),
      icon: "👩‍⚕️",
      color: "from-yellow-400 to-orange-500",
    },
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
    <section id="services" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-primary font-medium mb-2">
            {t("services.subtitle")}
          </p>
          <h2 className="section-title">{t("services.title")}</h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="bg-card h-full border-2 border-primary/5 hover:border-primary/20 transition-all duration-300 overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                <CardHeader>
                  <div className="text-3xl mb-2">{service.icon}</div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
