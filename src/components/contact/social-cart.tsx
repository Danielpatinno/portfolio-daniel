"use client";

import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";

export function SocialCart() {
  const handleSendMessageWhatsapp = () => {
    const phoneNumber = "+55 44 998451188";
    const message = "Olá Daniel, gostei do seu perfil, podemos comversar ?";

    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="flex justify-center gap-6">
      <div className="border-2 border-primary rounded-xl text-primary p-2">
        <a href="https://github.com/Danielpatinno" target="blank">
          <FaGithubSquare
            className="ease-in duration-300 hover:text-white hover:scale-110"
            size={45}
          />
        </a>
      </div>

      <div className="border-2 border-primary rounded-xl text-primary p-2">
        <a
          href="https://www.linkedin.com/in/daniel-patino-9a1341249/"
          target="blank"
        >
          <FaLinkedin
            className="ease-in duration-300 hover:text-white hover:scale-110"
            size={45}
          />
        </a>
      </div>

      <div className="border-2 border-primary rounded-xl text-primary p-2">
        <FaWhatsappSquare
          onClick={() => handleSendMessageWhatsapp()}
          size={45}
          className="ease-in duration-300 hover:text-white hover:scale-110"
        />
      </div>
    </div>
  );
}
