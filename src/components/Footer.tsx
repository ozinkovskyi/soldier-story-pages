import { useTranslation } from "react-i18next";

const PATREON_URL = "https://www.patreon.com"; // Replace with your Patreon page URL
const FUND_INSTAGRAM_URL = "https://www.instagram.com/icf_cost_of_liberty?igsh=eXBsdzIwa240azVu";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-crimson font-display text-lg mb-4">{t("footer.glory")}</p>
        <div className="flex flex-col items-center gap-3 mb-4">
          <a
            href={PATREON_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sprout font-sans text-sm font-medium hover:underline"
          >
            {t("footer.supportPatreon")}
          </a>
        
          <a
            href={FUND_INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sprout font-sans text-sm font-medium hover:underline"
          >
            {t("footer.fundLink")}
          </a>
        </div>
        <p className="text-muted-foreground font-sans text-sm">
          {t("footer.copyright", { year: new Date().getFullYear() })}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
