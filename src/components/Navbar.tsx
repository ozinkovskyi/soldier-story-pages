import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const navLinksKeys = [
  { labelKey: "nav.about", href: "#about" },
  { labelKey: "nav.book", href: "#book" },
] as const;

const Navbar = () => {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    requestAnimationFrame(() => {
      setTimeout(() => {
        const el = document.querySelector(href);
        el?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="font-display text-xl text-foreground"
        >
          Jingle <span className="text-crimson">Hellz</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinksKeys.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className={`font-sans text-sm tracking-wide transition-colors ${
                scrolled ? "text-muted-foreground hover:text-crimson" : "text-white hover:text-white/80"
              }`}
            >
              {t(link.labelKey)}
            </button>
          ))}
          <LanguageSwitcher light={!scrolled} />
          <button
            onClick={() => handleClick("#contact")}
            className="px-5 py-2 bg-primary text-primary-foreground font-sans text-sm font-semibold rounded hover:brightness-110 transition-all"
          >
            {t("nav.order")}
          </button>
        </div>

        <button
          className={`md:hidden transition-colors ${scrolled ? "text-foreground" : "text-white"}`}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-md border-t border-border overflow-hidden"
          >
            <div className="flex flex-col items-center gap-4 py-6">
              {navLinksKeys.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleClick(link.href)}
                  className="font-sans text-base text-muted-foreground hover:text-crimson transition-colors"
                >
                  {t(link.labelKey)}
                </button>
              ))}
              <LanguageSwitcher />
              <button
                onClick={() => handleClick("#contact")}
                className="px-6 py-3 bg-primary text-primary-foreground font-sans text-sm font-semibold rounded hover:brightness-110 transition-all"
              >
                {t("nav.order")}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
