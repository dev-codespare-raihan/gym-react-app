import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ButtonLink, DeskCta, Eyebrow, Missing } from "@/components/chrome";
import { dayNames, formatTime, getCoach, getProgram, sessions } from "@/lib/data";
import { publicSeoMeta } from "@/lib/site-seo";

export const Route = createFileRoute("/coaches/$slug")({
  beforeLoad: ({ params }) => {
    if (!getCoach(params.slug)) throw notFound();
  },
  head: ({ params, matches }) => {
    const coach = getCoach(params.slug);
    return {
      meta: publicSeoMeta(matches, coach?.name ?? "Fitness Coach", coach?.short ?? "Meet a coach at :gym in :location."),
    };
  },
  component: CoachPage,
  notFoundComponent: () => (
    <div className="pt-16 md:pt-20">
      <Missing title="We don’t have that coach." body="The staff page lists everyone who writes a program here." />
    </div>
  ),
});

function CoachPage() {
  const { slug } = Route.useParams();
  const coach = getCoach(slug);
  if (!coach) return null;
  const book = sessions.filter((session) => session.coach === coach.slug);

  return (
    <article className="pt-16 md:pt-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-[0.8fr_1.2fr] md:px-8 md:py-16">
        <div className="aspect-portrait overflow-hidden bg-bone-2 md:sticky md:top-24 md:self-start">
          <img src={coach.image} alt={`${coach.name} coaching at Halden`} className="h-full w-full object-cover object-top" />
        </div>
        <div>
          <Eyebrow>
            {coach.focus} · {coach.years} years
          </Eyebrow>
          <h1 className="mt-3 font-display text-5xl font-semibold leading-none md:text-7xl">{coach.name}</h1>
          <p className="mt-3 font-display text-xl text-muted">{coach.role}</p>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink-soft">
            {coach.bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <p className="mt-6 border-l-2 border-brass pl-4 text-lg leading-relaxed">{coach.approach}</p>
          <ul className="mt-8 flex flex-wrap gap-2">
            {coach.credentials.map((item) => (
              <li key={item} className="border border-line px-3 py-2 text-sm">
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink to="/schedule" variant="brass">
              Their hours
            </ButtonLink>
            <ButtonLink to="/visit" variant="outline">
              Ask for a trial
            </ButtonLink>
          </div>
        </div>
      </div>

      <section className="border-t border-line bg-bone-2">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
          <h2 className="font-display text-3xl font-semibold leading-none">On the book this week</h2>
          <ul className="mt-6 divide-y divide-line border-y border-line">
            {book.map((session) => {
              const program = getProgram(session.program);
              return (
                <li key={session.id} className="grid gap-2 py-4 sm:grid-cols-[8rem_7rem_1fr] sm:items-center">
                  <span className="text-sm font-medium">{dayNames[session.day]}</span>
                  <span className="font-display text-lg font-semibold tabular-nums">{formatTime(session.time)}</span>
                  <span>
                    {program ? (
                      <Link to="/programs/$slug" params={{ slug: program.slug }} className="font-medium hover:text-brass">
                        {program.name}
                      </Link>
                    ) : null}
                    <span className="text-muted"> · {session.room}</span>
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      <DeskCta />
    </article>
  );
}
