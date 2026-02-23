import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import BookSection from "@/components/BookSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <BookSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
