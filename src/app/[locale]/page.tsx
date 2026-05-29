import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowDownToLine } from "lucide-react";
import Image from "next/image";

import daniel01 from "@/assets/daniel01.jpeg";
import { Footer } from "@/components/home/footer";
import { Skils } from "@/components/home/skils";
import { Button } from "@/components/ui/button";

export default async function HomePage({
  params,
}: {
  params: { locale: string };
}) {
  setRequestLocale(params.locale);
  const t = await getTranslations("home");

  return (
    <main>
      <section className="container mx-auto flex max-w-6xl flex-col-reverse items-center justify-center px-4 py-12 lg:min-h-screen lg:flex-row lg:justify-between lg:gap-12 lg:py-8">
        <div className="w-full px-2 text-center lg:w-1/2 lg:px-8 lg:text-left">
          <h1 className="text-3xl font-bold text-white lg:text-6xl">
            <span className="block">{t("greeting")}</span>
            <span className="mt-2 block text-4xl text-primary lg:text-6xl">
              Daniel Patino
            </span>
          </h1>
          <p className="my-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-2xl font-semibold text-transparent animate-gradient-move lg:text-3xl">
            {t("role")}
          </p>
          <p className="mt-2 text-base text-white/75 lg:text-lg">
            {t("intro")}
          </p>
          <Button className="mt-8">
            <a
              className="flex items-center"
              href={t("cvUrl")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ArrowDownToLine className="mr-2" />
              {t("downloadCv")}
            </a>
          </Button>
        </div>
        <div className="mb-8 mt-6 flex w-full justify-center lg:mb-0 lg:mt-0 lg:w-[42%]">
          <div className="relative h-64 w-64 shrink-0 lg:h-[min(36rem,70vh)] lg:w-[min(36rem,70vh)]">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 via-pink-500/20 to-cyan-400/20 blur-2xl" />
            <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-primary/70 p-1 ring-2 ring-white/10 ring-offset-4 ring-offset-[#242424]">
              <Image
                src={daniel01}
                alt={t("heroImageAlt")}
                className="h-full w-full rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="flex min-h-screen flex-col pt-6 lg:pt-24">
        <Skils />
        <div className="mt-auto">
          <Footer />
        </div>
      </section>
    </main>
  );
}
