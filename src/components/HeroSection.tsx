import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, hsla(40,15%,8%,0.3) 0%, hsla(40,15%,8%,0.85) 100%)",
        }}
      />
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <p className="text-gold font-sans text-sm tracking-[0.3em] uppercase mb-6">
            Книга, що змінює погляд на війну
          </p>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground leading-tight mb-6">
            Полон.{" "}
            <span className="text-gold italic">Шлях додому</span>
          </h1>
          <p className="font-sans text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Особиста історія українського воїна — про стійкість духу, 
            нелюдські умови полону та незламну волю до свободи.
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
              className="inline-flex items-center justify-center px-8 py-4 border border-gold-dim text-foreground font-sans font-semibold text-base tracking-wide rounded hover:bg-muted transition-all"
            >
              Зв'язатися з автором
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
          className="text-gold opacity-60"
        >
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </motion.div>
    </section>
  );
};

export default HeroSection;
