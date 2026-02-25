import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import bookCover from "@/assets/book.jpeg";

const BookSection = () => {
  const { t } = useTranslation();
  const bullets = [t("book.bullet1"), t("book.bullet2"), t("book.bullet3"), t("book.bullet4")];
  return (
    <section id="book" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          <div className="order-2 md:order-1">
            <p className="text-crimson font-sans text-sm tracking-[0.3em] uppercase mb-4">
              {t("book.label")}
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
              Jingle <span className="text-crimson">{t("book.titleHighlight")}</span>
            </h2>
            <div className="space-y-4 text-muted-foreground font-sans leading-relaxed mb-8">
              <p>
                {t("book.description")}
              </p>
              <ul className="space-y-3">
                {bullets.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-sprout mt-1 flex-shrink-0">✦</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-sans font-semibold text-base tracking-wide rounded hover:brightness-110 transition-all"
            >
              {t("book.orderBook")}
            </a>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <motion.div
              whileHover={{ rotate: -2, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative"
            >
              <img
                src={bookCover}
                alt={t("book.imageAlt")}
                className="w-72 md:w-80 rounded-sm shadow-2xl shadow-black/50"
              />
              <div className="absolute inset-0 rounded-sm ring-1 ring-crimson/20" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BookSection;
