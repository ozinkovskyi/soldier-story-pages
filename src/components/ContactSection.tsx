import { motion } from "framer-motion";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({ title: "Будь ласка, заповніть усі поля", variant: "destructive" });
      return;
    }
    setSending(true);
    // Simulate sending
    setTimeout(() => {
      toast({ title: "Дякуємо!", description: "Ваше повідомлення надіслано." });
      setFormData({ name: "", email: "", message: "" });
      setSending(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-muted/30">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <p className="text-gold font-sans text-sm tracking-[0.3em] uppercase mb-4">
              Контакти
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Зв'яжіться з <span className="text-gold">автором</span>
            </h2>
            <p className="text-muted-foreground font-sans">
              Маєте питання, хочете замовити книгу або запросити на виступ? Напишіть нам.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-sans text-muted-foreground mb-2">
                Ваше ім'я
              </label>
              <input
                type="text"
                maxLength={100}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-card border border-border rounded font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring transition-colors"
                placeholder="Ваше ім'я"
              />
            </div>
            <div>
              <label className="block text-sm font-sans text-muted-foreground mb-2">
                Email
              </label>
              <input
                type="email"
                maxLength={255}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-card border border-border rounded font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring transition-colors"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-sans text-muted-foreground mb-2">
                Повідомлення
              </label>
              <textarea
                rows={5}
                maxLength={1000}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-card border border-border rounded font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring transition-colors resize-none"
                placeholder="Ваше повідомлення..."
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="w-full px-8 py-4 bg-primary text-primary-foreground font-sans font-semibold text-base tracking-wide rounded hover:brightness-110 transition-all disabled:opacity-50"
            >
              {sending ? "Надсилається..." : "Надіслати повідомлення"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
