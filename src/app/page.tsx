import { Footer } from "@/components/home/footer";
import { Skils } from "@/components/home/skils";
import { ArrowDownToLine } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import daniel01 from "@/assets/daniel01.jpeg";

export default function Home() {
  return (
    <main>
      <section className="container mx-auto flex flex-col-reverse lg:flex-row justify-center items-center lg:justify-between lg:min-h-screen lg:py-8">
        <div className="w-full lg:w-1/2 text-center lg:text-left px-6 lg:px-12">
          <p className="text-3xl lg:text-6xl font-bold">Olá!, Eu sou o</p>
          <p className="font-bold text-4xl lg:text-6xl text-primary mt-2">
            Daniel Patino
          </p>
          <p className="text-2xl lg:text-3xl my-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-gradient-move">
            Desenvolvedor FrontEnd
          </p>
          <p className="text-base lg:text-lg mt-2">
            Eu desenvolvo websites usando React, TypeScript, Next.js, Tailwind
            CSS e outras tecnologias modernas para criar experiências web
            incríveis.
          </p>
          <Button className="mt-8">
            <a
              className="flex items-center"
              download="Currículo Daniel"
              href="https://drive.google.com/file/d/1fzhmJwIzvc732y4BUPNDDl8KYPwhnAre/view?usp=drive_link"
            >
              <ArrowDownToLine className="mr-2" />
              Download Currículo
            </a>
          </Button>
        </div>
        <div className="flex justify-center items-center w-full mt-6 lg:w-2/4 lg:h-[40rem] h-64 overflow-hidden">
          <div className="border-2 border-primary rounded-full w-64 h-64 lg:w-full lg:h-full">
            <Image
              src={daniel01}
              alt="Daniel"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </section>
      <section className="min-h-screen flex flex-col">
        <h1 className="w-full p-6 text-2xl text-center border-b border-primary">
          HABILIDADES
        </h1>
        <Skils />
        <Footer />
      </section>
    </main>
  );
}
