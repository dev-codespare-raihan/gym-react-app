import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/home";
import { getPublicMembershipPlans } from "@/lib/gymie-api";
import { publicSeoMeta } from "@/lib/site-seo";

export const Route = createFileRoute("/")({
  loader: () => getPublicMembershipPlans(),
  head: ({ matches }) => ({ meta: publicSeoMeta(matches, "Gym & Fitness", "Explore gym memberships and fitness services at :gym in :location.") }),
  component: HomeRoute,
});

function HomeRoute() {
  return <HomePage membership={Route.useLoaderData()} />;
}
