import Image, { StaticImageData } from "next/image";
import { FaGithubSquare } from "react-icons/fa";
import { GrDeploy } from "react-icons/gr";

import { SurfaceCard } from "@/components/layout/surface-card";
import { cn } from "@/lib/utils";

interface CartProjectProps {
  project: {
    name: string;
    deployLink: string;
    srcImage: StaticImageData;
    gitHubLink: string;
    tecnologies: string;
  };
  deployLabel: string;
  githubLabel: string;
}

const linkClass =
  "inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-3 py-2 text-sm font-medium text-white/90 transition-colors hover:border-primary/50 hover:bg-primary/10";

export function CartProject({
  project,
  deployLabel,
  githubLabel,
}: CartProjectProps) {
  return (
    <SurfaceCard
      interactive
      className="flex h-full flex-col overflow-hidden p-0"
    >
      <div className="relative aspect-video w-full overflow-hidden bg-zinc-900/50">
        <Image
          src={project.srcImage}
          alt={project.name}
          fill
          sizes="(max-width: 640px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex-1 space-y-2 text-center">
          <p className="text-lg font-bold text-white">{project.name}</p>
          <p className="text-sm leading-relaxed text-white/65">
            {project.tecnologies}
          </p>
        </div>

        <div className="mt-5 flex flex-wrap justify-center gap-2">
          <a
            className={cn(linkClass)}
            target="_blank"
            rel="noopener noreferrer"
            href={project.deployLink}
          >
            <GrDeploy size={18} className="text-primary" />
            {deployLabel}
          </a>

          <a
            className={cn(linkClass)}
            target="_blank"
            rel="noopener noreferrer"
            href={project.gitHubLink}
          >
            <FaGithubSquare size={20} className="text-primary" />
            {githubLabel}
          </a>
        </div>
      </div>
    </SurfaceCard>
  );
}
