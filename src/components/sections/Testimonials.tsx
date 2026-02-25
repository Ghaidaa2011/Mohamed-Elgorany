import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useLanguage } from "../../context/LanguageContext";

const Testimonials: React.FC = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  const testimonials = [
    {
      id: 1,
      name: t("testimonials.client1.name"),
      text: t("testimonials.client1.text"),
      avatar: "https://randomuser.me/api/portraits/women/60.jpg",
    },
    {
      id: 2,
      name: t("testimonials.client2.name"),
      text: t("testimonials.client2.text"),
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 3,
      name: t("testimonials.client3.name"),
      text: t("testimonials.client3.text"),
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
  ];

  return (
    <section id="testimonials" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-primary font-medium mb-2">
            {t("testimonials.subtitle")}
          </p>
          <h2 className="section-title">{t("testimonials.title")}</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-card border border-primary/10 h-full shadow-lg">
                <CardContent
                  className={`pt-6 ${isRTL ? "text-right" : "text-left"}`}
                >
                  <div className="mb-4 text-3xl text-primary">❞</div>
                  <p className="mb-4">{testimonial.text}</p>
                </CardContent>
                <CardFooter className={"border-t pt-4 flex"}>
                  <div
                    className={`flex items-center ${
                      isRTL ? "space-x-reverse" : ""
                    } space-x-4`}
                  >
                    {/* <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      /> */}
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-primary flex items-center justify-center text-white text-xl font-bold">
                      {testimonial.name && testimonial.name[0]}
                    </div>
                    <div>
                      <p className="font-bold flex items-center gap-2">
                        {testimonial.name}
                      </p>
                      <span className="text-yellow-400 text-base">★★★★★</span>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
