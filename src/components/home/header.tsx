"use client";

import { Laptop, AlignJustify } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";

import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

const navLinkClass =
  "block w-full rounded-xl px-4 py-2 text-base transition-colors duration-200 hover:bg-white/[0.06] hover:text-primary md:text-lg";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const tNav = useTranslations("nav");
  const tA11y = useTranslations("a11y");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="w-full lg:absolute">
      <div className="container flex items-center justify-between gap-4 p-4 lg:justify-around">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-2"
          onClick={closeMenu}
        >
          <Laptop size={45} className="shrink-0 text-primary" />
          <span className="truncate text-xl font-bold tracking-tight text-white">
            DANIEL PATINO
          </span>
        </Link>

        <ul className="hidden flex-1 justify-center gap-1 sm:flex lg:gap-2">
          <li>
            <Link href="/" className={navLinkClass} onClick={closeMenu}>
              {tNav("home")}
            </Link>
          </li>
          <li>
            <Link href="/about" className={navLinkClass} onClick={closeMenu}>
              {tNav("about")}
            </Link>
          </li>
          <li>
            <Link href="/project" className={navLinkClass} onClick={closeMenu}>
              {tNav("projects")}
            </Link>
          </li>
          <li>
            <Link href="/contact" className={navLinkClass} onClick={closeMenu}>
              {tNav("contact")}
            </Link>
          </li>
        </ul>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <LanguageSwitcher className="hidden sm:flex" />

          <button
            type="button"
            className="block cursor-pointer text-white sm:hidden"
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-label={isOpen ? tA11y("closeMenu") : tA11y("openMenu")}
          >
            <AlignJustify size={40} />
          </button>
        </div>
      </div>

      <ul
        className={cn(
          "absolute z-50 w-full border-b border-white/10 bg-[#242424]/95 backdrop-blur-md transition-all duration-300 ease-out sm:hidden",
          isOpen
            ? "pointer-events-auto top-[4.5rem] max-h-[28rem] opacity-100"
            : "pointer-events-none top-[-400px] max-h-0 overflow-hidden opacity-0",
        )}
      >
        <li className="border-b border-white/5 px-4 py-3">
          <LanguageSwitcher />
        </li>
        <li className="border-b border-white/5 px-2 py-1">
          <Link href="/" className={navLinkClass} onClick={closeMenu}>
            {tNav("home")}
          </Link>
        </li>
        <li className="border-b border-white/5 px-2 py-1">
          <Link href="/about" className={navLinkClass} onClick={closeMenu}>
            {tNav("about")}
          </Link>
        </li>
        <li className="border-b border-white/5 px-2 py-1">
          <Link href="/project" className={navLinkClass} onClick={closeMenu}>
            {tNav("projects")}
          </Link>
        </li>
        <li className="px-2 py-1">
          <Link href="/contact" className={navLinkClass} onClick={closeMenu}>
            {tNav("contact")}
          </Link>
        </li>
      </ul>
    </header>
  );
}
