import { getTranslations, setRequestLocale } from "next-intl/server";

import bestPizza from "@/assets/bestPizza.jpg";
import dashboard from "@/assets/dashboard.jpg";

import { Footer } from "@/components/home/footer";
import { CartProject } from "@/components/project/cart-project";

const projectDefs = [
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
      <section className="flex flex-col">
        <div className="container mx-auto max-w-6xl px-4 pb-10 pt-4 sm:px-6 lg:px-8 lg:pt-28">
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
