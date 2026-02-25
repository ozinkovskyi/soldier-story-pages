import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${heroBg})` }} />
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, hsla(0,0%,7%,0.4) 0%, hsla(0,0%,7%,0.92) 100%)",
        }}
      />
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto w-full flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex flex-col items-center w-full"
        >
          <p className="text-white font-sans text-sm font-semibold tracking-[0.3em] uppercase mb-10">{t("hero.author")}</p>
          <h1 className="font-display text-6xl md:text-8xl text-foreground leading-tight mb-10 text-center">
            Jingle <span className="text-crimson">{t("hero.titleHighlight")}</span>
          </h1>
          <p className="font-sans text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-14 leading-relaxed font-medium text-center">
            {t("hero.subtitleBefore")}
            <span className="text-sprout font-medium">{t("hero.subtitleHighlight")}</span>
            {t("hero.subtitleAfter")}
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-crimson-dim text-foreground font-sans font-semibold text-base tracking-wide rounded hover:bg-muted transition-all"
            >
              {t("hero.contactAuthor")}
            </a>
          </div>
        </motion.div>
      </div>
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-crimson opacity-60"
        >
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </motion.div>
    </section>
  );
};

export default HeroSection;
