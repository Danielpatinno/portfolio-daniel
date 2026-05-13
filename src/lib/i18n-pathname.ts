import { routing } from "@/i18n/routing";

const locales = routing.locales as readonly string[];

/**
 * Remove leading locale segment(s) from a pathname.
 * Evita URLs quebradas tipo `/pt/es` quando o pathname do Next e o locale do
 * contexto ficam momentaneamente dessincronizados ao trocar o idioma rápido.
 */
export function stripLocalesFromPathname(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean);

  while (segments[0] && locales.includes(segments[0])) {
    segments.shift();
  }

  const tail = segments.join("/");
  return tail ? `/${tail}` : "/";
}
