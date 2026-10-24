import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { DeskCta, PageHeader } from "@/components/chrome";
import { disciplines, programs, type Discipline } from "@/lib/data";
import { cn } from "@/lib/cn";
import { publicSeoMeta } from "@/lib/site-seo";

export const Route = createFileRoute("/programs")({
  head: ({ matches }) => ({ meta: publicSeoMeta(matches, "Fitness Programs", "Browse fitness and training programs at :gym in :location.") }),
  component: ProgramsPage,
});

type Filter = "All" | Discipline;

function ProgramsPage() {
  const [filter, setFilter] = useState<Filter>("All");
  const list = useMemo(
    () => (filter === "All" ? programs : programs.filter((program) => program.discipline === filter)),
    [filter],
  );

  return (
    <div className="pt-16 md:pt-20">
      <PageHeader
        eyebrow="Programs"
        title="Train the thing you came for."
        lede="Six programs. Each one has a coach, a block, and a cap. Pick the room that matches the week you actually have."
      />
      <div className="mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-14">
        <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="Filter programs">
          {(["All", ...disciplines] as const).map((item) => (
            <button
              key={item}
              type="button"
              role="radio"
              aria-checked={filter === item}
              onClick={() => setFilter(item)}
              className={cn(
                "btn min-h-11 px-3 font-display text-xs font-semibold uppercase tracking-brand",
                filter === item ? "bg-ink text-bone" : "border border-line text-ink",
              )}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {list.map((program) => (
            <Link
              key={program.slug}
              to="/programs/$slug"
              params={{ slug: program.slug }}
              className="group grid overflow-hidden border border-line bg-bone sm:grid-cols-2"
            >
              <div className="aspect-video overflow-hidden sm:aspect-auto sm:min-h-64">
                <img
                  src={program.image}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col p-5 md:p-6">
                <p className="font-display text-xs font-semibold uppercase tracking-brand text-brass">{program.discipline}</p>
                <h2 className="mt-2 font-display text-4xl font-semibold leading-none">{program.name}</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{program.summary}</p>
                <p className="mt-4 text-sm">
                  {program.level}
                  <span className="text-muted"> · {program.length}</span>
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <DeskCta />
    </div>
  );
}
