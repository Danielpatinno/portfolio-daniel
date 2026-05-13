"use client";

import { useTranslations } from "next-intl";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";

import { SurfaceCard } from "@/components/layout/surface-card";
import { cn } from "@/lib/utils";

export function SocialCart() {
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

  const iconWrap =
    "flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.06] ring-1 ring-inset ring-white/10 transition-all duration-300 hover:scale-105 hover:bg-primary/15 hover:ring-primary/35";

  return (
    <SurfaceCard className="p-4 sm:p-5">
      <div className="flex justify-center gap-4 sm:gap-5">
        <a
          href="https://github.com/Danielpatinno"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(iconWrap, "text-white/90")}
          aria-label={tA11y("github")}
        >
          <FaGithubSquare size={28} className="text-primary" />
        </a>

        <a
          href="https://www.linkedin.com/in/daniel-patino-9a1341249/"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(iconWrap, "text-white/90")}
          aria-label={tA11y("linkedin")}
        >
          <FaLinkedin size={28} className="text-primary" />
        </a>

        <button
          type="button"
          onClick={() => handleSendMessageWhatsapp()}
          className={cn(iconWrap, "text-white/90")}
          aria-label={tA11y("whatsapp")}
        >
          <FaWhatsappSquare size={28} className="text-primary" />
        </button>
      </div>
    </SurfaceCard>
  );
}
