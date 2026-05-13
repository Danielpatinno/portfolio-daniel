import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";

import daniel02 from "@/assets/daniel02.jpeg";
import { Footer } from "@/components/home/footer";
import { SectionHeader } from "@/components/layout/section-header";
import { SurfaceCard } from "@/components/layout/surface-card";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";

export default async function AboutPage({
  params,
}: {
  params: { locale: string };
}) {
  setRequestLocale(params.locale);
  const t = await getTranslations("about");

  return (
    <main>
      <section className="flex min-h-screen flex-col pb-12">
        <SectionHeader
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("description")}
        />

        <div className="container mx-auto flex max-w-5xl flex-1 flex-col items-center gap-10 px-4 pb-8 sm:px-6 lg:flex-row lg:items-start lg:gap-12 lg:px-8">
          <SurfaceCard className="shrink-0 overflow-hidden p-1 sm:p-1.5">
            <div className="relative h-56 w-56 overflow-hidden rounded-[1.35rem] sm:h-72 sm:w-72">
              <Image
                src={daniel02}
                alt={t("profileImageAlt")}
                fill
                sizes="(max-width: 1024px) 288px, 288px"
                className="object-cover"
                priority
              />
            </div>
          </SurfaceCard>

          <SurfaceCard className="w-full max-w-2xl flex-1 p-6 sm:p-8">
            <div className="space-y-4 text-base leading-relaxed text-white/85 sm:text-lg">
              <p>{t("p1")}</p>
              <p>{t("p2")}</p>
              <p>{t("p3")}</p>
              <p>{t("p4")}</p>
              <p>{t("p5")}</p>
            </div>

            <div className="mt-8 flex justify-center lg:justify-start">
              <Button asChild>
                <Link href="/project">{t("cta")}</Link>
              </Button>
            </div>
          </SurfaceCard>
        </div>

        <Footer />
      </section>
    </main>
  );
}
