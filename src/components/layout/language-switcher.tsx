"use client";

import { usePathname as useNextPathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { useCallback } from "react";

import { useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { stripLocalesFromPathname } from "@/lib/i18n-pathname";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ className }: { className?: string }) {
  const locale = useLocale();
  const fullPathname = useNextPathname();
  const pathname = stripLocalesFromPathname(fullPathname);
  const router = useRouter();
  const t = useTranslations("language");

  const handleChange = useCallback(
    (nextLocale: string) => {
      if (!(routing.locales as readonly string[]).includes(nextLocale)) {
        return;
      }
      if (nextLocale === locale) {
        return;
      }
      router.replace(pathname, {
        locale: nextLocale as (typeof routing.locales)[number],
      });
    },
    [locale, pathname, router],
  );

  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <label htmlFor="language-select" className="sr-only">
        {t("label")}
      </label>
      <select
        id="language-select"
        value={locale}
        onChange={(e) => {
          handleChange(e.target.value);
          e.currentTarget.blur();
        }}
        className={cn(
          "cursor-pointer rounded-xl border border-white/15 bg-white/[0.06] px-3 py-2 text-sm font-medium text-white/90",
          "ring-1 ring-inset ring-white/10 outline-none transition-colors",
          "hover:border-primary/50 hover:ring-primary/30 focus-visible:border-primary/60 focus-visible:ring-2 focus-visible:ring-primary/40",
        )}
      >
        {routing.locales.map((loc) => (
          <option key={loc} value={loc} className="bg-[#242424] text-white">
            {t(loc)}
          </option>
        ))}
      </select>
    </div>
  );
}
