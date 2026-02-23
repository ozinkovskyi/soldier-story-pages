const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-gold font-serif text-lg mb-2">Слава Україні! 🇺🇦</p>
        <p className="text-muted-foreground font-sans text-sm">
          © {new Date().getFullYear()} Усі права захищено.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
