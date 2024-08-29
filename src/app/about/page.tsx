import { Footer } from "@/components/home/footer";
import { MapPin } from "lucide-react";

export default function About() {
  return (
    <main>
      <section className="flex flex-col sm:min-h-screen justify-center items-center">
        <div className="text-center lg:mt-14 text-2xl">
          <h1 className="mb-4">
            Daniel
            <span className="text-primary">Patino</span>
          </h1>
          <p className="flex gap-2 justify-center items-center text-xl">
            <MapPin />
            Maringá-PR
          </p>
        </div>
        <div className="flex m-auto h-52 border-b">FOTO AQUI</div>

        <div className="container text-xl mt-2">
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
        </div>
        <Footer />
      </section>
    </main>
  );
}
