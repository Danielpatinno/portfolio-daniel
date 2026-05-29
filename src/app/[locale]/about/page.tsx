import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";

import daniel02 from "@/assets/daniel02.jpeg";
import { Footer } from "@/components/home/footer";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";

const storyParagraphs = ["p2", "p3", "p4", "p5"] as const;

export default async function AboutPage({
  params,
}: {
  params: { locale: string };
}) {
  setRequestLocale(params.locale);
  const t = await getTranslations("about");

  return (
    <main>
      <section className="flex flex-col">
        <div className="container mx-auto max-w-6xl px-4 pb-12 pt-4 sm:px-6 lg:px-8 lg:pt-28">
          <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:gap-16 xl:gap-20">
            <div className="w-full shrink-0 lg:sticky lg:top-28 lg:w-[44%] xl:w-[42%]">
              <div className="relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-none">
                <div
                  className="absolute -inset-3 rounded-[2rem] bg-primary/15 blur-2xl sm:-inset-4"
                  aria-hidden
                />
                <div className="relative overflow-hidden rounded-[1.75rem] shadow-[0_16px_32px_-12px_rgba(0,0,0,0.35),0_0_20px_-10px_rgba(158,94,255,0.2)] ring-1 ring-white/10">
                  <div className="relative aspect-[3/4] w-full sm:aspect-[4/5] lg:aspect-[3/4] lg:min-h-[520px] xl:min-h-[580px]">
                    <Image
                      src={daniel02}
                      alt={t("profileImageAlt")}
                      fill
                      sizes="(max-width: 1024px) 448px, 520px"
                      className="object-cover object-top"
                      priority
                    />
                    <div
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#242424]/50 via-transparent to-transparent"
                      aria-hidden
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full flex-1 lg:pt-2">
              <div className="mb-8 lg:mb-10">
                <h2 className="text-3xl font-bold text-white sm:text-4xl">
                  Daniel Patino
                </h2>
                <p className="mt-2 bg-gradient-to-r from-pink-400 via-primary to-cyan-400 bg-clip-text text-lg font-semibold text-transparent sm:text-xl">
                  {t("role")}
                </p>
              </div>

              <div className="space-y-6 border-l-2 border-primary/35 pl-6 sm:pl-8 lg:pl-10">
                <p className="text-lg font-medium leading-relaxed text-white/95 sm:text-xl sm:leading-8">
                  {t("p1")}
                </p>

                <div className="space-y-5 text-base leading-relaxed text-white/72 sm:text-[17px] sm:leading-8">
                  {storyParagraphs.map((key) => (
                    <p key={key}>{t(key)}</p>
                  ))}
                </div>
              </div>

              <div className="mt-10 lg:mt-12">
                <Button asChild size="lg">
                  <Link href="/project">{t("cta")}</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </section>
    </main>
  );
}
