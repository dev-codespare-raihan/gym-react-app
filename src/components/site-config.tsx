import { createContext, useContext, useEffect, type ReactNode } from "react";
import { defaultSiteConfig, type PublicSiteConfig } from "@/lib/gymie-api";

const SiteConfigContext = createContext<PublicSiteConfig>(defaultSiteConfig);

export function SiteConfigProvider({
  config,
  children,
}: {
  config: PublicSiteConfig;
  children: ReactNode;
}) {
  useEffect(() => {
    document.title = document.title.replace(/\bHalden Athletic Club\b|\bHalden\b/g, config.gym.name);

    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (description) {
      const city = [config.gym.city, config.gym.state].filter(Boolean).join(", ");
      description.content = description.content.replace(/\bHalden Athletic Club\b|\bHalden\b/g, config.gym.name)
        .replaceAll("Tribeca", city || config.gym.name)
        .replaceAll("418 Mercer Street", config.gym.address || config.gym.name);
    }
  }, [config.gym.address, config.gym.city, config.gym.name, config.gym.state]);

  return <SiteConfigContext.Provider value={config}>{children}</SiteConfigContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useSiteConfig(): PublicSiteConfig {
  return useContext(SiteConfigContext);
}

