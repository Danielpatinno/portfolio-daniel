"use client";

import { Laptop, AlignJustify } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="w-full lg:absolute">
      <div className="container flex justify-between lg:justify-around items-center p-4">
        <Link href="/" className="flex items-center">
          <Laptop size={45} className="text-primary" />
          <span className="ml-2 text-xl font-bold">DANIEL PATINO</span>
        </Link>

        <span className="sm:hidden text-3xl cursor-pointer block">
          <AlignJustify size={40} onClick={toggleMenu} />
        </span>

        <ul className="hidden sm:flex">
          <li className="hover:text-primary">
            <Link
              href="/"
              className="block w-full text-base md:text-lg px-4 py-2 rounded-lg"
              onClick={closeMenu}
            >
              HOME
            </Link>
          </li>
          <li className="hover:text-primary">
            <Link
              href="/about"
              className="block w-full text-base md:text-lg px-4 py-2 rounded-lg"
              onClick={closeMenu}
            >
              SOBRE
            </Link>
          </li>
          <li className="hover:text-primary">
            <Link
              href="/project"
              className="block w-full text-base md:text-lg px-4 py-2 rounded-lg"
              onClick={closeMenu}
            >
              PROJETOS
            </Link>
          </li>
          <li className="hover:text-primary">
            <Link
              href="/contact"
              className="block w-full text-base md:text-lg px-4 py-2 rounded-lg"
              onClick={closeMenu}
            >
              CONTATO
            </Link>
          </li>
        </ul>
      </div>

      <ul
        className={`absolute w-full bg-white text-black transition-all ease-in duration-500 ${isOpen ? "top-20 opacity-100" : "top-[-400px] opacity-0"}`}
      >
        <li className="px-4 py-2 hover:bg-primary hover:text-white">
          <Link
            href="/"
            className="block w-full text-xl px-4 py-2 rounded-lg"
            onClick={closeMenu}
          >
            HOME
          </Link>
        </li>
        <li className="px-4 py-2 hover:bg-primary hover:text-white">
          <Link
            href="/about"
            className="block w-full text-xl px-4 py-2 rounded-lg"
            onClick={closeMenu}
          >
            SOBRE
          </Link>
        </li>
        <li className="px-4 py-2 hover:bg-primary hover:text-white">
          <Link
            href="/project"
            className="block w-full text-xl px-4 py-2 rounded-lg"
            onClick={closeMenu}
          >
            PROJETOS
          </Link>
        </li>
        <li className="px-4 py-2 hover:bg-primary hover:text-white">
          <Link
            href="/contact"
            className="block w-full text-xl px-4 py-2 rounded-lg"
            onClick={closeMenu}
          >
            CONTATO
          </Link>
        </li>
      </ul>
    </header>
  );
}
