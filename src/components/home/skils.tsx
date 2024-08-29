import { FaReact, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { SiRedux } from "react-icons/si";
import { Skilscontainer } from "./skils-container";
import { RiTailwindCssFill } from "react-icons/ri";

export function Skils() {
  const tecnologias = [
    {
      title: "HTML",
      icon: FaHtml5,
    },
    {
      title: "CSS",
      icon: FaCss3Alt,
    },
    {
      title: "Javascript",
      icon: IoLogoJavascript,
    },
    {
      title: "Typescript",
      icon: BiLogoTypescript,
    },
    {
      title: "ReactJs",
      icon: FaReact,
    },
    {
      title: "Tailwind CSS",
      icon: RiTailwindCssFill,
    },
    {
      title: "Redux",
      icon: SiRedux,
    },
    {
      title: "Git",
      icon: FaGitAlt,
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {tecnologias.map((item) => (
        <Skilscontainer key={item.title} Icon={item.icon} title={item.title} />
      ))}
    </div>
  );
}
