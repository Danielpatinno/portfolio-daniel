import Image, { StaticImageData } from "next/image";

import { FaGithubSquare } from "react-icons/fa";
import { GrDeploy } from "react-icons/gr";

interface CartProjectProps {
  project: {
    name: string;
    deployLink: string;
    srcImage: StaticImageData;
    gitHubLink: string;
    tecnologies: string;
  };
}

export function CartProject({ project }: CartProjectProps) {
  return (
    <div className="w-full bg-black border-b-4 border-transparent hover:border-primary">
      <Image
        src={project.srcImage}
        alt={project.name}
        className="mt-4 h-40 lg:h-52"
      />

      <div className="mb-2">
        <p className="text-center text-xl font-bold">{project.name}</p>
        <p className="text-center text-slate-400">
          Tecnologias: {project.tecnologies}
        </p>
      </div>

      <div className="flex justify-center items-center gap-2 mb-2">
        <a
          className="flex border-2 p-2 hover:border-primary items-center"
          target="_blank"
          rel="noopener noreferrer"
          href={project.deployLink}
        >
          <GrDeploy size={18} className="mr-2" />
          Deploy
        </a>

        <a
          className="flex border-2 p-2 hover:border-primary items-center"
          target="_blank"
          rel="noopener noreferrer"
          href={project.gitHubLink}
        >
          <FaGithubSquare size={20} className="mr-2" />
          GitHub
        </a>
      </div>
    </div>
  );
}
