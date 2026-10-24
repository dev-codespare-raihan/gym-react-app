import { defaultSiteConfig, type PublicSiteConfig } from "@/lib/gymie-api";
import type { CSSProperties } from "react";

type RouteMatchWithSite = {
  routeId: string;
  loaderData?: unknown;
};

export function publicSiteFromMatches(matches: RouteMatchWithSite[]): PublicSiteConfig {
  const rootLoaderData = matches.find((match) => match.routeId === "__root__")?.loaderData;

  if (typeof rootLoaderData !== "object" || rootLoaderData === null || !("gym" in rootLoaderData)) {
    return defaultSiteConfig;
  }

  return rootLoaderData as PublicSiteConfig;
}

export function publicSeoMeta(
  matches: RouteMatchWithSite[],
  pageTitle: string,
  description: string,
) {
  const { gym } = publicSiteFromMatches(matches);
  const location = [gym.city, gym.state, gym.country].filter(Boolean).join(", ");

  return [
    { title: `${pageTitle} | ${gym.name}` },
    {
      name: "description",
      content: `${description.replaceAll(":gym", gym.name).replaceAll(":location", location || "India")} Contact the gym for current availability and enquiries.`,
    },
  ];
}

export function siteColorVariables(config: PublicSiteConfig): CSSProperties {
  return {
    "--color-brass": config.colors.primary,
    "--color-brass-hot": config.colors.accent,
    "--color-brass-bright": config.colors.accent,
    "--color-bone": config.colors.surface,
    "--color-bone-2": `color-mix(in srgb, ${config.colors.surface} 88%, ${config.colors.text})`,
    "--color-ink": config.colors.text,
    "--color-ink-soft": config.colors.text,
    "--color-muted": `color-mix(in srgb, ${config.colors.text} 72%, ${config.colors.surface})`,
    "--color-line": `color-mix(in srgb, ${config.colors.text} 18%, ${config.colors.surface})`,
    "--color-dark": config.colors.dark,
    "--color-char": config.colors.dark,
    "--color-char-2": config.colors.dark,
  } as CSSProperties;
}
