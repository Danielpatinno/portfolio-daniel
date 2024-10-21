import { Footer } from "@/components/home/footer";
import { MapPin } from "lucide-react";
import Image from "next/image";
import daniel02 from "@/assets/daniel02.jpeg";

export default function About() {
  return (
    <main>
      <section className="flex flex-col sm:min-h-screen justify-center items-center">
        <div className="text-center lg:mt-14 text-3xl lg:text-4xl">
          <h1 className="mb-2 font-bold">
            Daniel <span className="text-primary">Patino</span>
          </h1>
          <p className="flex gap-2 justify-center items-center text-lg lg:text-xl">
            <MapPin className="text-primary" />
            Maringá-PR
          </p>
        </div>
        <div className="flex justify-center items-center h-52 w-52 lg:h-72 lg:w-72 rounded-full overflow-hidden border-2 border-primary mb-4">
          <Image
            src={daniel02}
            alt="Daniel"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container max-w-3xl text-lg lg:text-xl mt-6 lg:mt-8 leading-relaxed px-4">
          <p className="mb-4">
            Sou um apaixonado por tecnologia, com foco em desenvolvimento
            front-end. Atualmente, estou no terceiro ano de Engenharia de
            Software e possuo uma sólida experiência em programação com React,
            TypeScript, TailwindCSS e Styled-Components.
          </p>

          <p className="mb-4">
            Originalmente do Paraguai, nasci em Assunção e há dois anos resido
            no Brasil, onde tenho aprimorado minhas habilidades e conhecimentos
            na área de desenvolvimento web.
          </p>

          <p className="mb-4">
            Minha jornada no mundo da programação começou com um interesse
            genuíno em criar experiências digitais impactantes e intuitivas. Com
            o tempo, desenvolvi uma forte afinidade com o front-end, onde posso
            combinar minha criatividade e habilidades técnicas para construir
            interfaces de usuário modernas e eficientes.
          </p>

          <p className="mb-4">
            Além do meu foco no front-end, tenho conhecimento em back-end com
            Node.js, o que me permite compreender e colaborar efetivamente em
            projetos full-stack.
          </p>

          <p className="mb-4">
            Estou sempre em busca de novos desafios e oportunidades para
            aprender e crescer como desenvolvedor. Sinta-se à vontade para
            explorar meus projetos e entrar em contato comigo para colaborações
            ou para saber mais sobre meu trabalho.
          </p>

          <div className="flex justify-center mt-6">
            <a href="/project" className="flex items-center">
              Veja Meus Projetos
            </a>
          </div>
        </div>

        <Footer />
      </section>
    </main>
  );
}
