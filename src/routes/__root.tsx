import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { Footer, Header, Missing } from "@/components/chrome";
import { SiteConfigProvider } from "@/components/site-config";
import { getPublicSiteConfig } from "@/lib/gymie-api";
import { siteColorVariables } from "@/lib/site-seo";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
  loader: () => getPublicSiteConfig(),
  head: ({ loaderData }) => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: loaderData?.gym.name ?? "Gym" },
      {
        name: "description",
        content: `${loaderData?.gym.name ?? "Your Gym"} in ${[loaderData?.gym.city, loaderData?.gym.state, loaderData?.gym.country].filter(Boolean).join(", ") || "India"}. Explore fitness services and current membership plans, or contact the gym team.`,
      },
      { name: "theme-color", content: loaderData?.colors.dark ?? "#121110" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@500;600;700&family=Roboto:ital,wght@0,400;0,500;0,700;1,400&display=swap",
      },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
    ],
  }),
  component: RootComponent,
  notFoundComponent: () => (
    <Missing
      title="That page isn’t on the floor."
      body="The address doesn’t match a room at Halden. Try the programs, the schedule, or the desk."
    />
  ),
});

function RootComponent() {
  const siteConfig = Route.useLoaderData();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="bg-bone font-sans text-ink antialiased" style={siteColorVariables(siteConfig)}>
        <PreviewHostBridge />
        <AuthProvider>
          <SiteConfigProvider config={siteConfig}>
            <a
              href="#main"
              className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-bone focus:px-4 focus:py-3"
            >
              Skip to content
            </a>
            <Header />
            <main id="main">
              <Outlet />
            </main>
            <Footer />
          </SiteConfigProvider>
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}
