import { getTranslations, setRequestLocale } from "next-intl/server";

import appsorteio from "@/assets/appsorteio.jpg";
import cronometro from "@/assets/cronometro.png";
import calculadora from "@/assets/calculadora.jpg";
import listaTarefa from "@/assets/listaTarefa.jpg";
import bestPizza from "@/assets/bestPizza.jpg";
import dashboard from "@/assets/dashboard.jpg";
import gerenciador from "@/assets/gerenciador.png";

import { Footer } from "@/components/home/footer";
import { CartProject } from "@/components/project/cart-project";
import { SectionHeader } from "@/components/layout/section-header";

const projectDefs = [
  {
    id: "taskManager" as const,
    deployLink: "https://task-manager-sand-two.vercel.app/",
    srcImage: gerenciador,
    gitHubLink: "https://github.com/Danielpatinno/task-manager.git",
  },
  {
    id: "bestPizza" as const,
    deployLink: "https://main--bestpiza.netlify.app/",
    srcImage: bestPizza,
    gitHubLink: "https://github.com/Danielpatinno/bestPizza",
  },
  {
    id: "dashboardBestPizza" as const,
    deployLink: "https://dashboard-best-pizza.netlify.app/",
    srcImage: dashboard,
    gitHubLink: "https://github.com/Danielpatinno/dashboard-best",
  },
  {
    id: "sorteio" as const,
    deployLink: "https://appsorteio.netlify.app",
    srcImage: appsorteio,
    gitHubLink: "https://github.com/Danielpatinno/sorteio_app",
  },
  {
    id: "todoList" as const,
    deployLink: "https://listarefa.netlify.app/",
    srcImage: listaTarefa,
    gitHubLink: "https://github.com/Danielpatinno/listaTarefas",
  },
  {
    id: "cronometro" as const,
    deployLink: "https://cronometroapk.netlify.app/",
    srcImage: cronometro,
    gitHubLink: "https://github.com/Danielpatinno/Cronometro",
  },
  {
    id: "calculadora" as const,
    deployLink: "https://danielpatinno.github.io/Calculadora/calc.html",
    srcImage: calculadora,
    gitHubLink: "https://github.com/Danielpatinno/Calculadora",
  },
];

export default async function ProjectPage({
  params,
}: {
  params: { locale: string };
}) {
  setRequestLocale(params.locale);
  const t = await getTranslations("projects");
  const ti = await getTranslations("projects.items");

  return (
    <main>
      <section className="flex min-h-screen flex-col pb-12">
        <SectionHeader
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("description")}
        />
        <div className="container mx-auto max-w-6xl flex-1 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
            {projectDefs.map((p) => (
              <CartProject
                key={p.id}
                project={{
                  deployLink: p.deployLink,
                  srcImage: p.srcImage,
                  gitHubLink: p.gitHubLink,
                  name: ti(`${p.id}.name`),
                  tecnologies: ti(`${p.id}.tech`),
                }}
                deployLabel={t("deploy")}
                githubLabel={t("github")}
              />
            ))}
          </div>
        </div>
        <Footer />
      </section>
    </main>
  );
}
