import { IconType } from "react-icons";

import { SurfaceCard } from "@/components/layout/surface-card";
import { cn } from "@/lib/utils";

interface SkilsContainerProps {
  title: string;
  Icon: IconType;
  iconClassName?: string;
}

export function Skilscontainer({
  title,
  Icon,
  iconClassName,
}: SkilsContainerProps) {
  return (
    <SurfaceCard interactive className="p-6 text-center">
      <div className="flex flex-col items-center gap-3">
        <div
          className={cn(
            "flex h-16 w-16 items-center justify-center rounded-2xl",
            "bg-white/[0.06] ring-1 ring-inset ring-white/10",
            "transition-transform duration-300 group-hover:scale-105 group-hover:ring-primary/35",
          )}
        >
          <Icon className={cn("h-9 w-9 drop-shadow-sm", iconClassName)} />
        </div>
        <p className="text-sm font-semibold tracking-wide text-white/95">
          {title}
        </p>
      </div>
    </SurfaceCard>
  );
}
