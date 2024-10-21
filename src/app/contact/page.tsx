"use client";

import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

import { FormContact } from "@/components/contact/form-contact";
import { SocialCart } from "@/components/contact/social-cart";

export default function Contact() {
  return (
    <main>
      <section className="flex flex-col lg:min-h-screen lg:flex-row container items-center justify-center mb-2 lg:justify-between">
        <div className="flex flex-col gap-4 lg:mb-8">
          <h1 className="text-3xl text-primary font-bold mt-2">Contate-me</h1>

          <p className="mb-2 lg:text-xl">
            Por favor, complete o formulário e ficarei feliz em entrar em
            contato com você.
          </p>

          <div className="flex flex-col gap-6 mx-4 mb-10 lg:text-xl">
            <p className="flex items-center gap-2">
              <MdEmail size={20} />
              Neniade777@gmail.com
            </p>

            <p className="flex items-center gap-2">
              <FaPhoneAlt size={20} />
              (44) 99845-1188
            </p>

            <p className="flex items-center gap-2">
              <FaLocationDot size={20} />
              Maringá-PR
            </p>
          </div>

          <SocialCart />
        </div>

        <div className="w-full lg:w-1/2 mt-8">
          <FormContact />
        </div>
      </section>
    </main>
  );
}
