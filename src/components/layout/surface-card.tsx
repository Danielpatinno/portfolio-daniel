import * as React from "react";

import { cn } from "@/lib/utils";

export type SurfaceCardProps = React.HTMLAttributes<HTMLDivElement> & {
  interactive?: boolean;
};

export function SurfaceCard({
  className,
  interactive = false,
  children,
  ...props
}: SurfaceCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/10",
        "bg-gradient-to-b from-white/[0.08] to-white/[0.02]",
        "shadow-lg shadow-black/25",
        interactive &&
          "transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary/45 hover:shadow-xl hover:shadow-primary/20 group",
        className,
      )}
      {...props}
    >
      {interactive ? (
        <>
          <div
            aria-hidden
            className="pointer-events-none absolute -top-16 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-primary/25 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
          <div className="relative">{children}</div>
        </>
      ) : (
        children
      )}
    </div>
  );
}
