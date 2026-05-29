import type { ReactNode } from "react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

import { Footer } from "@/components/home/footer";
import { FormContact } from "@/components/contact/form-contact";
import { SocialCart } from "@/components/contact/social-cart";
import { SurfaceCard } from "@/components/layout/surface-card";

function ContactRow({
  icon,
  children,
}: {
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="flex items-start gap-3 text-white/90">
      <span className="mt-0.5 shrink-0 text-primary">{icon}</span>
      <span className="text-sm sm:text-base">{children}</span>
    </div>
  );
}

export default async function ContactPage({
  params,
}: {
  params: { locale: string };
}) {
  setRequestLocale(params.locale);
  const t = await getTranslations("contact");

  return (
    <main>
      <section className="flex flex-col">
        <div className="container mx-auto max-w-6xl px-4 pb-10 pt-4 sm:px-6 lg:px-8 lg:pt-28">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-14">
            <div className="flex w-full flex-col gap-8 lg:max-w-md">
              <SurfaceCard className="space-y-5 p-6 sm:p-8">
                <ContactRow icon={<MdEmail size={22} />}>
                  Neniade777@gmail.com
                </ContactRow>
                <ContactRow icon={<FaPhoneAlt size={20} />}>
                  (44) 99845-1188
                </ContactRow>
                <ContactRow icon={<FaLocationDot size={22} />}>
                  {t("location")}
                </ContactRow>
              </SurfaceCard>

              <SocialCart />
            </div>

            <div className="w-full flex-1 lg:max-w-xl">
              <FormContact key={params.locale} />
            </div>
          </div>
        </div>

        <Footer />
      </section>
    </main>
  );
}
