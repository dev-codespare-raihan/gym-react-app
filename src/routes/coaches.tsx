import { createFileRoute, Link } from "@tanstack/react-router";
import { DeskCta, PageHeader } from "@/components/chrome";
import { coaches } from "@/lib/data";
import { publicSeoMeta } from "@/lib/site-seo";

export const Route = createFileRoute("/coaches")({
  head: ({ matches }) => ({ meta: publicSeoMeta(matches, "Fitness Coaches", "Meet the coaching team at :gym in :location.") }),
  component: CoachesPage,
});

function CoachesPage() {
  return (
    <div className="pt-16 md:pt-20">
      <PageHeader
        eyebrow="Coaches"
        title="Six coaches. They know your name by week two."
        lede="No roaming trainers selling sessions between sets. The staff writes the programs, coaches the hours, and stays."
      />
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:grid-cols-2 md:px-8 md:py-16 lg:grid-cols-3">
        {coaches.map((coach) => (
          <Link key={coach.slug} to="/coaches/$slug" params={{ slug: coach.slug }} className="group">
            <div className="aspect-portrait overflow-hidden bg-bone-2">
              <img
                src={coach.image}
                alt={`${coach.name}, ${coach.role} at Halden`}
                className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <p className="mt-4 font-display text-xs font-semibold uppercase tracking-brand text-brass">{coach.focus}</p>
            <h2 className="mt-1 font-display text-3xl font-semibold leading-none">{coach.name}</h2>
            <p className="mt-1 text-sm text-muted">{coach.role}</p>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">{coach.short}</p>
          </Link>
        ))}
      </div>
      <DeskCta />
    </div>
  );
}
