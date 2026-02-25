import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${heroBg})` }} />
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, hsla(0,0%,7%,0.15) 0%, hsla(0,0%,7%,0.7) 100%)",
        }}
      />
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <p className="text-crimson font-sans text-sm tracking-[0.3em] uppercase mb-6">Алексей Ануля</p>
          <h1 className="font-display text-6xl md:text-8xl text-foreground leading-tight mb-6">
            Jingle <span className="text-crimson">Bellz</span>
          </h1>
          <p className="font-sans text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Реальна історія українського воїна — про полон, колючий дріт, і{" "}
            <span className="text-sprout font-medium">незламну волю</span> до свободи.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#book"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-sans font-semibold text-base tracking-wide rounded hover:brightness-110 transition-all"
            >
              Замовити книгу
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-crimson-dim text-foreground font-sans font-semibold text-base tracking-wide rounded hover:bg-muted transition-all"
            >
              Зв'язатися з автором
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
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
          className="text-sprout opacity-60"
        >
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </motion.div>
    </section>
  );
};

export default HeroSection;
