import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Sun, Moon, Globe, Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const { t } = useTranslation();
  const { toggleLanguage, language, isRTL } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Update navbar style on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t("nav.home"), href: "#home" },
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.services"), href: "#services" },
    { name: t("nav.portfolio"), href: "#portfolio" },
    { name: t("nav.testimonials"), href: "#testimonials" },
    { name: t("nav.contact"), href: "#contact" },
  ];

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="text-xl font-bold text-foreground">
          <span className="text-primary">Mohamed</span> Elgorany
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <ul
            className={`flex ${
              isRTL ? "space-x-reverse space-x-6" : "space-x-6"
            }`}
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`text-foreground hover:text-primary transition-colors px-2 py-1 ${
                    isRTL ? "text-right" : "text-left"
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div
            className={`flex items-center ${
              isRTL ? "space-x-reverse space-x-3" : "space-x-3"
            }`}
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
              title={language === "en" ? "العربية" : "English"}
              className="rounded-full"
            >
              <Globe className="h-5 w-5" />
              <span className="sr-only">{t("language")}</span>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              title={theme === "dark" ? t("theme.light") : t("theme.dark")}
              className="rounded-full"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
              <span className="sr-only">
                {theme === "dark" ? t("theme.light") : t("theme.dark")}
              </span>
            </Button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="flex md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {!isMenuOpen && <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          className="fixed inset-0 bg-background/95 z-40 md:hidden pt-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          {/* Close Button */}
          <div className="absolute top-4 end-4">
            <Button
              variant="ghost"
              size="icon"
              className="w-10 h-10 rounded-full hover:bg-primary/10"
              onClick={() => setIsMenuOpen(false)}
            >
              <X className="h-6 w-6" />
            </Button>
          </div>

          <nav className="container mx-auto px-4 py-6">
            <ul className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`block text-lg py-2 text-foreground hover:text-primary transition-colors px-3 ${
                      isRTL ? "text-right" : "text-left"
                    }`}
                    onClick={closeMenu}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <div
              className={`flex items-center mt-6 ${
                isRTL ? "space-x-reverse space-x-4" : "space-x-4"
              }`}
            >
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  toggleLanguage();
                  closeMenu();
                }}
                className="flex-1"
              >
                <Globe className="h-4 w-4 mr-2" />
                {language === "en" ? "العربية" : "English"}
              </Button>

              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  toggleTheme();
                  closeMenu();
                }}
                className="flex-1"
              >
                {theme === "dark" ? (
                  <>
                    <Sun className="h-4 w-4 mr-2" />
                    {t("theme.light")}
                  </>
                ) : (
                  <>
                    <Moon className="h-4 w-4 mr-2" />
                    {t("theme.dark")}
                  </>
                )}
              </Button>
            </div>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
