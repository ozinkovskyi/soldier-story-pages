import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import authorImage from "@/assets/author.jpeg";

const AboutSection = () => {
  const { t } = useTranslation();
  return (
    <section id="about" className="py-24 px-6 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          <div>
            <p className="text-crimson font-sans text-sm tracking-[0.3em] uppercase mb-4">
              {t("about.label")}
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
              {t("about.title")}{" "}
              <span className="text-sprout">{t("about.titleHighlight")}</span>
            </h2>
            <div className="space-y-4 text-muted-foreground font-sans leading-relaxed">
              <p>
                {t("about.p1")}
              </p>
              <p>
                {t("about.p2")}
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[3/4] bg-secondary rounded-sm overflow-hidden border border-border">
              <img
                src={authorImage}
                alt={t("about.photoCaption")}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-crimson-dim rounded-sm -z-10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
