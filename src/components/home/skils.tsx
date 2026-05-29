import { getTranslations } from "next-intl/server";
import { FaReact, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import {
  SiRedux,
  SiNextdotjs,
  SiFlutter,
  SiDart,
  SiSupabase,
  SiFirebase,
  SiGoogletagmanager,
} from "react-icons/si";
import { Skilscontainer } from "./skils-container";
import { RiTailwindCssFill } from "react-icons/ri";

const skillKeys = [
  { key: "html" as const, icon: FaHtml5, iconClassName: "text-[#E34F26]" },
  { key: "css" as const, icon: FaCss3Alt, iconClassName: "text-[#1572B6]" },
  {
    key: "javascript" as const,
    icon: IoLogoJavascript,
    iconClassName: "text-[#E8D44D]",
  },
  {
    key: "typescript" as const,
    icon: BiLogoTypescript,
    iconClassName: "text-[#3178C6]",
  },
  { key: "react" as const, icon: FaReact, iconClassName: "text-[#61DAFB]" },
  {
    key: "nextjs" as const,
    icon: SiNextdotjs,
    iconClassName: "text-white",
  },
  {
    key: "tailwind" as const,
    icon: RiTailwindCssFill,
    iconClassName: "text-[#38BDF8]",
  },
  { key: "redux" as const, icon: SiRedux, iconClassName: "text-[#AB47BC]" },
  { key: "git" as const, icon: FaGitAlt, iconClassName: "text-[#F05032]" },
  { key: "dart" as const, icon: SiDart, iconClassName: "text-[#0175C2]" },
  {
    key: "flutter" as const,
    icon: SiFlutter,
    iconClassName: "text-[#54C5F8]",
  },
  {
    key: "supabase" as const,
    icon: SiSupabase,
    iconClassName: "text-[#3FCF8E]",
  },
  {
    key: "firebase" as const,
    icon: SiFirebase,
    iconClassName: "text-[#FFCA28]",
  },
  {
    key: "gtm" as const,
    icon: SiGoogletagmanager,
    iconClassName: "text-[#246FDB]",
  },
];

export async function Skils() {
  const t = await getTranslations("skills");

  return (
    <div className="mx-auto w-full max-w-5xl flex-1 px-4 py-10 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 lg:gap-6">
        {skillKeys.map((item) => (
          <Skilscontainer
            key={item.key}
            Icon={item.icon}
            title={t(item.key)}
            iconClassName={item.iconClassName}
          />
        ))}
      </div>
    </div>
  );
}
