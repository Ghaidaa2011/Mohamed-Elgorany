import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";

import SportsRehabCase from "@/assets/SportsRehabCase.jpeg";
import ChampionshipCoverage from "@/assets/ChampionshipCoverage.jpeg";
import FieldSupport from "@/assets/FieldSupport.jpeg";
import RecoverySession from "@/assets/RecoverySession.jpeg";

const Portfolio: React.FC = () => {
  const { t } = useTranslation();

  const portfolioItems = [
    {
      id: 1,
      title: t("portfolio.case1"),
      image: SportsRehabCase,
      category: "rehabilitation",
    },
    {
      id: 2,
      title: t("portfolio.case2"),
      image: FieldSupport,
      category: "field",
    },
    {
      id: 3,
      title: t("portfolio.case3"),
      image: ChampionshipCoverage,
      category: "events",
    },
    {
      id: 4,
      title: t("portfolio.case4"),
      image: RecoverySession,
      category: "clinic",
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
    <section id="portfolio" className="section-padding bg-muted">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-primary font-medium mb-2">
            {t("portfolio.subtitle")}
          </p>
          <h2 className="section-title">{t("portfolio.title")}</h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {portfolioItems.map((item) => (
            <motion.div key={item.id} variants={itemVariants}>
              <Card className="overflow-hidden bg-transparent border-2  group">
                <CardContent className="p-0 relative">
                  <div className="relative overflow-hidden h-80">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* <div className="relative overflow-hidden h-80 bg-gradient-to-br from-primary to-secondary"> */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <h3 className="text-white text-xl font-bold">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </CardContent>
                <h3 className="text-dark text-xl font-bold text-center my-4 ">
                  {item.title}
                </h3>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
