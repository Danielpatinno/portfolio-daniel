// imagens
import appsorteio from "@/assets/appsorteio.jpg";
import cronometro from "@/assets/cronometro.png";
import calculadora from "@/assets/calculadora.jpg";
import listaTarefa from "@/assets/listaTarefa.jpg";
import bestPizza from "@/assets/bestPizza.jpg";
import dashboard from "@/assets/dashboard.jpg";

import { CartProject } from "@/components/project/cart-project";

export default function Project() {
  const projects = [
    {
      name: "Best Pizza",
      deployLink: "https://main--bestpiza.netlify.app/",
      srcImage: bestPizza,
      gitHubLink: "https://github.com/Danielpatinno/bestPizza",
      tecnologies: "NextJs, Typescript, TailwindCss, Stripe",
    },
    {
      name: "Dashboard Best Pizza",
      deployLink: "https://dashboard-best-pizza.netlify.app/",
      srcImage: dashboard,
      gitHubLink: "https://github.com/Danielpatinno/dashboard-best",
      tecnologies: "NextJs, Typescript, TailwindCss, Stripe",
    },
    {
      name: "Sorteio",
      deployLink: "https://appsorteio.netlify.app",
      srcImage: appsorteio,
      gitHubLink: "https://github.com/Danielpatinno/sorteio_app",
      tecnologies: "ReactJS, Typescript e Tailwind CSS",
    },
    {
      name: "Lista de Tarefas",
      deployLink: "https://listarefa.netlify.app/",
      srcImage: listaTarefa,
      gitHubLink: "https://github.com/Danielpatinno/listaTarefas",
      tecnologies: "ReactJs, Typescript e Styled-Components",
    },
    {
      name: "Cronômetro",
      deployLink: "https://cronometroapk.netlify.app/",
      srcImage: cronometro,
      gitHubLink: "https://github.com/Danielpatinno/Cronometro",
      tecnologies: "HTML, CSS e Javascript",
    },
    {
      name: "Calculadora",
      deployLink: "https://danielpatinno.github.io/Calculadora/calc.html",
      srcImage: calculadora,
      gitHubLink: "https://github.com/Danielpatinno/Calculadora",
      tecnologies: "HTML, CSS e Javascript",
    },
  ];

  return (
    <main>
      <section className="container flex flex-col ">
        <h1 className="text-center text-primary text-3xl mb-2 lg:mt-14">
          Projetos
        </h1>
        <div className="grid grid-cols-auto sm:grid-cols-2 gap-10 ">
          {projects &&
            projects.map((project) => (
              <CartProject key={project.name} project={project} />
            ))}
        </div>
      </section>
    </main>
  );
}
