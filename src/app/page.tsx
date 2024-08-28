import { Footer } from "@/components/home/footer";
import { Skils } from "@/components/home/skils";

import { ArrowDownToLine } from "lucide-react"
import { Button } from "@/components/ui/button"


export default function Home() {
  return (
    <main> 
      <section className="container mx-auto flex flex-col-reverse lg:flex-row justify-center lg:justify-around items-center lg:min-h-screen">
        <div className="w-11/12 lg:w-1/2 mb-24 lg:mb-2 mt-8 lg:mx-2">
          <p className="text-3xl lg:text-6xl lg:font-bold">
            Olá!, Eu sou o
          </p>

          <p className="font-bold text-3xl lg:text-4xl text-primary mt-2">
            Daniel Patino
          </p>

          <p className="text-2xl lg:text-3xl lg:my-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-gradient-move">
            Desenvolvedor FrontEnd
          </p>

          <p className="mt-2" >
            Eu desenvolvo websites usando React, TypeScript, Next.js, Tailwind CSS e outras tecnologias modernas para criar experiências web incríveis
          </p>

          <Button className="mt-8">
            <a 
              className="flex items-center"
              download="Currículo Daniel"
              href="https://drive.google.com/file/d/1ccTptwuMMCUPdTEEdZLQ4NWvwJrdYMO2/view?usp=drive_link"
            >
              <ArrowDownToLine/> Download Currículo 
            </a>
          </Button>
        </div>

        <div className="border-2 border-primary h-64 w-64 lg:w-1/2 lg:h-96 rounded-full">

        </div>
      </section>

      <section className="min-h-screen flex flex-col">
        <h1 className="w-full p-6 text-2xl text-center border-b border-primary ">HABILIDADES</h1>
          <Skils />

          <Footer />
      </section>
    </main>
  );
}
