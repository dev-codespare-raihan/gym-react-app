import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ButtonLink, DeskCta, Eyebrow, Missing } from "@/components/chrome";
import { getCoach, getProgram, programs } from "@/lib/data";
import { publicSeoMeta } from "@/lib/site-seo";

export const Route = createFileRoute("/programs/$slug")({
  beforeLoad: ({ params }) => {
    if (!getProgram(params.slug)) throw notFound();
  },
  head: ({ params, matches }) => {
    const program = getProgram(params.slug);
    return {
      meta: publicSeoMeta(matches, program?.name ?? "Training Program", program?.summary ?? "Explore a training program at :gym in :location."),
    };
  },
  component: ProgramPage,
  notFoundComponent: () => (
    <div className="pt-16 md:pt-20">
      <Missing title="That program isn’t on the board." body="It may have been renamed. The six we run are listed with the rest of the house." />
    </div>
  ),
});

function ProgramPage() {
  const { slug } = Route.useParams();
  const program = getProgram(slug);
  const coach = program ? getCoach(program.coach) : undefined;
  if (!program || !coach) return null;
  const related = programs.filter((item) => item.slug !== program.slug && item.discipline === program.discipline);

  return (
    <article className="pt-16 md:pt-20">
      <div className="relative h-72 bg-char md:h-96">
        <img src={program.image} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-char via-char/40 to-char/10" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-7xl px-5 pb-8 md:px-8">
          <Eyebrow light>{program.discipline}</Eyebrow>
          <h1 className="mt-2 font-display text-5xl font-semibold leading-none text-bone md:text-7xl">{program.name}</h1>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-12 md:px-8 md:py-16 lg:grid-cols-[1.4fr_0.8fr]">
        <div>
          <p className="max-w-2xl text-xl leading-relaxed text-ink-soft">{program.summary}</p>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">{program.outcome}</p>
          <dl className="mt-8 grid grid-cols-2 gap-6 border-y border-line py-6 sm:grid-cols-3">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-widest text-muted">Level</dt>
              <dd className="mt-1 font-medium">{program.level}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-widest text-muted">Length</dt>
              <dd className="mt-1 font-medium">{program.length}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-widest text-muted">Lead</dt>
              <dd className="mt-1 font-medium">{coach.name}</dd>
            </div>
          </dl>

          <h2 className="mt-12 font-display text-3xl font-semibold leading-none">Who it’s for</h2>
          <ul className="mt-5 space-y-3">
            {program.suited.map((item) => (
              <li key={item} className="border-l-2 border-brass pl-4 text-ink-soft">
                {item}
              </li>
            ))}
          </ul>

          <h2 className="mt-12 font-display text-3xl font-semibold leading-none">A session</h2>
          <ol className="mt-5 space-y-4">
            {program.session.map((item, index) => (
              <li key={item} className="grid grid-cols-[2.5rem_1fr] gap-3">
                <span className="font-display text-lg font-semibold tabular-nums text-brass">0{index + 1}</span>
                <span className="text-ink-soft">{item}</span>
              </li>
            ))}
          </ol>

          <h2 className="mt-12 font-display text-3xl font-semibold leading-none">The block</h2>
          <div className="mt-5 divide-y divide-line border-y border-line">
            {program.block.map((phase) => (
              <div key={phase.title} className="grid gap-2 py-5 md:grid-cols-[10rem_1fr]">
                <p className="font-display text-sm font-semibold uppercase tracking-brand text-brass">{phase.week}</p>
                <div>
                  <h3 className="font-display text-2xl font-semibold leading-none">{phase.title}</h3>
                  <p className="mt-2 text-ink-soft">{phase.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <aside className="h-fit border border-line bg-bone-2 p-6 lg:sticky lg:top-24">
          <p className="font-display text-xs font-semibold uppercase tracking-brand text-brass">Led by</p>
          <Link to="/coaches/$slug" params={{ slug: coach.slug }} className="mt-4 flex gap-4">
            <img src={coach.image} alt="" className="size-16 object-cover object-top" />
            <span>
              <span className="block font-display text-2xl font-semibold leading-none">{coach.name}</span>
              <span className="mt-1 block text-sm text-muted">{coach.role}</span>
            </span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-ink-soft">{coach.approach}</p>
          <div className="mt-6 flex flex-col gap-3">
            <ButtonLink to="/schedule" variant="brass">
              See the schedule
            </ButtonLink>
            <ButtonLink to="/membership" variant="outline">
              Membership
            </ButtonLink>
          </div>
        </aside>
      </div>

      {related.length > 0 && (
        <section className="border-t border-line">
          <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
            <h2 className="font-display text-3xl font-semibold leading-none">Also in {program.discipline}</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  to="/programs/$slug"
                  params={{ slug: item.slug }}
                  className="border border-line p-5 hover:border-ink"
                >
                  <p className="font-display text-2xl font-semibold leading-none">{item.name}</p>
                  <p className="mt-2 text-sm text-muted">{item.summary}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
      <DeskCta />
    </article>
  );
}
