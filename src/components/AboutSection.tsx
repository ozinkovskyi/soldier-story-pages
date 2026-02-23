import { motion } from "framer-motion";

const AboutSection = () => {
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
              Про автора
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
              Алексей Ануля.{" "}
              <span className="text-crimson">Незламний.</span>
            </h2>
            <div className="space-y-4 text-muted-foreground font-sans leading-relaxed">
              <p>
                Український воїн, який пройшов через пекло полону і повернувся, 
                щоб розповісти правду. Його історія — це свідчення про мужність 
                та незламність людського духу в найтемніші часи.
              </p>
              <p>
                «Jingle Bell» — не просто мемуари. Це документ епохи, написаний 
                кров'ю та колючим дротом, який має прочитати кожен, хто хоче 
                зрозуміти справжню ціну свободи.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[3/4] bg-secondary rounded-sm overflow-hidden border border-border flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-muted border-2 border-crimson-dim flex items-center justify-center">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-crimson">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <p className="text-muted-foreground font-sans text-sm">
                  Фото автора
                </p>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-crimson-dim rounded-sm -z-10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
