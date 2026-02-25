import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({ title: t("contact.toastError"), variant: "destructive" });
      return;
    }
    setSending(true);
    setTimeout(() => {
      toast({ title: t("contact.toastSuccess"), description: t("contact.toastSuccessDesc") });
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
            <p className="text-crimson font-sans text-sm tracking-[0.3em] uppercase mb-4">
              {t("contact.label")}
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
              {t("contact.heading")} <span className="text-crimson">{t("contact.headingAuthor")}</span>
            </h2>
            <p className="text-muted-foreground font-sans">
              {t("contact.intro")}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-sans text-muted-foreground mb-2">{t("contact.labelName")}</label>
              <input type="text" maxLength={100} value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-card border border-border rounded font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring transition-colors"
                placeholder={t("contact.placeholderName")} />
            </div>
            <div>
              <label className="block text-sm font-sans text-muted-foreground mb-2">{t("contact.labelEmail")}</label>
              <input type="email" maxLength={255} value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-card border border-border rounded font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring transition-colors"
                placeholder={t("contact.placeholderEmail")} />
            </div>
            <div>
              <label className="block text-sm font-sans text-muted-foreground mb-2">{t("contact.labelMessage")}</label>
              <textarea rows={5} maxLength={1000} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-card border border-border rounded font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring transition-colors resize-none"
                placeholder={t("contact.placeholderMessage")} />
            </div>
            <button type="submit" disabled={sending}
              className="w-full px-8 py-4 bg-primary text-primary-foreground font-sans font-semibold text-base tracking-wide rounded hover:brightness-110 transition-all disabled:opacity-50">
              {sending ? t("contact.sending") : t("contact.submit")}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
