"use client";

import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";

export function Footer() {
  const handleSendMessageWhatsapp = () => {
    const phoneNumber = "+55 44 998451188";
    const message = `Olá Daniel, gostei do seu perfil, podemos comversar ?`;
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message,
    )}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <footer className="border-t flex flex-col items-center justify-center h-20 border-primary">
      <p className="text-center">&copy;2024 - Daniel Patino</p>

      <div className="flex justify-center gap-4">
        <a href="https://github.com/Danielpatinno">
          <FaGithubSquare size={30} />
        </a>

        <a href="https://www.linkedin.com/in/daniel-patino-9a1341249/">
          <FaLinkedin size={30} />
        </a>

        <FaWhatsappSquare
          onClick={() => handleSendMessageWhatsapp()}
          size={30}
        />
      </div>
    </footer>
  );
}
