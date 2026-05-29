"use client";

import { useTranslations } from "next-intl";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";

import { cn } from "@/lib/utils";

const iconBtn =
  "rounded-xl p-2 text-white/80 ring-1 ring-white/10 transition-all duration-200 hover:bg-primary/15 hover:text-primary hover:ring-primary/40";

export function Footer() {
  const tA11y = useTranslations("a11y");
  const tWhatsapp = useTranslations("whatsapp");

  const handleSendMessageWhatsapp = () => {
    const phoneNumber = "5544998451188";
    const message = tWhatsapp("defaultMessage");
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message,
    )}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <footer className="flex flex-col items-center justify-center gap-4 border-t border-white/10 bg-black/20 px-4 py-10">
      <p className="text-center text-sm text-white/70">
        &copy; {new Date().getFullYear()} — Daniel Patino
      </p>

      <div className="flex justify-center gap-3">
        <a
          href="https://github.com/Danielpatinno"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(iconBtn)}
          aria-label={tA11y("github")}
        >
          <FaGithubSquare size={28} />
        </a>

        <a
          href="https://www.linkedin.com/in/daniel-patino-9a1341249/"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(iconBtn)}
          aria-label={tA11y("linkedin")}
        >
          <FaLinkedin size={28} />
        </a>

        <button
          type="button"
          onClick={() => handleSendMessageWhatsapp()}
          className={cn(iconBtn)}
          aria-label={tA11y("whatsapp")}
        >
          <FaWhatsappSquare size={28} />
        </button>
      </div>
    </footer>
  );
}
