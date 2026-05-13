import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
  /** Use 2 quando a página já tiver um h1 principal (ex.: home). */
  headingLevel?: 1 | 2;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  className,
  headingLevel = 1,
}: SectionHeaderProps) {
  const TitleTag = headingLevel === 2 ? "h2" : "h1";
  const titleClassName =
    "mt-2 text-3xl font-bold sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-primary to-cyan-400";

  return (
    <header
      className={cn("w-full px-6 pb-8 pt-14 text-center sm:pt-16", className)}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary sm:text-sm">
        {eyebrow}
      </p>
      <TitleTag className={titleClassName}>{title}</TitleTag>
      {description ? (
        <p className="mx-auto mt-3 max-w-lg text-sm text-white/65 sm:text-base">
          {description}
        </p>
      ) : null}
      <div
        className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-pink-500 via-primary to-cyan-400 sm:w-28"
        aria-hidden
      />
    </header>
  );
}
