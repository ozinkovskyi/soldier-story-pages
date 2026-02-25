import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { supportedLngs, languageNames, type SupportedLng } from "@/i18n";

const LanguageSwitcher = ({ light = false }: { light?: boolean }) => {
  const { i18n } = useTranslation();

  const currentLng = (() => {
    const raw = i18n.language?.slice(0, 2) || "en";
    return raw === "uk" ? "ua" : raw;
  })() as SupportedLng;
  const resolved = supportedLngs.includes(currentLng) ? currentLng : "en";

  const setLanguage = (lng: SupportedLng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={light ? "text-white hover:text-white/80" : "text-muted-foreground hover:text-foreground"}
          aria-label="Change language"
        >
          <Globe className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {supportedLngs.map((lng) => (
          <DropdownMenuItem
            key={lng}
            onClick={() => setLanguage(lng)}
            className={resolved === lng ? "bg-muted font-medium" : ""}
          >
            {languageNames[lng]}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
