import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ButtonLink, Eyebrow } from "@/components/chrome";
import {
  coaches,
  dayNames,
  days,
  formatTime,
  getCoach,
  getProgram,
  notes,
  programs,
  sessions,
  type Day,
} from "@/lib/data";
import type { PlanListResult } from "@/lib/gymie-api";
import { cn } from "@/lib/cn";
import { useSiteConfig } from "@/components/site-config";

export function HomePage({ membership }: { membership: PlanListResult }) {
  const { gym, services } = useSiteConfig();
  const [day, setDay] = useState<Day>("Mon");
  const preview = sessions.filter((item) => item.day === day).slice(0, 4);
  const stats = [
    { value: String(membership.plans.length), label: "Membership plans" },
    { value: String(services.length), label: "Fitness services" },
    { value: membership.currency, label: "Currency" },
    { value: gym.country || "Local", label: "Gym location" },
  ];
  const formatPrice = (amount: number) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: membership.currency,
      maximumFractionDigits: 0,
    }).format(amount);

  return (
    <>
      <section className="relative min-h-svh bg-char text-bone">
        <img
          src="/club/hero.jpg"
          alt={`Training floor at ${gym.name}`}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-char/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-char via-char/55 to-char/20" />
        <div className="relative mx-auto flex min-h-svh max-w-7xl flex-col justify-end px-5 pt-28 pb-10 md:px-8 md:pb-14">
          <Eyebrow light>{[gym.city, gym.state].filter(Boolean).join(" · ") || "Fitness for every goal"}</Eyebrow>
          <h1 className="mt-4 max-w-4xl font-display text-6xl font-semibold leading-none sm:text-7xl lg:text-8xl">
            Train with
            <br />
            intention.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-bone/90">
            Explore membership plans and fitness services at {gym.name}.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink to="/visit" variant="brass" className="w-full sm:w-auto">
              Book a trial
            </ButtonLink>
            <ButtonLink to="/programs" variant="outlineLight" className="w-full sm:w-auto">
              View programs
            </ButtonLink>
          </div>
          <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-bone/20 pt-6 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dd className="font-display text-3xl font-semibold tabular-nums leading-none">{stat.value}</dd>
                <dt className="mt-2 text-xs font-medium uppercase tracking-widest text-bone/70">{stat.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-bone">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:gap-16 md:px-8 md:py-24">
          <div className="overflow-hidden">
            <img
              src="/club/floor.jpg"
              alt="Wide view of the training floor, bars racked and lanes open"
              className="aspect-video h-auto w-full object-cover md:aspect-portrait"
            />
          </div>
          <div>
            <Eyebrow>01 — The practice</Eyebrow>
            <h2 className="mt-3 font-display text-4xl font-semibold leading-none md:text-6xl">
              Not a room full of equipment. A room with a plan.
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink-soft">
              <p>
                Find a membership and training service that fits your goals, schedule, and experience.
              </p>
              <p>
                Contact the gym team for current availability, membership options, and help getting started.
              </p>
            </div>
            <ButtonLink to="/club" variant="outline" className="mt-8">
              Walk the club
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-bone-2">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Eyebrow>02 — Programs</Eyebrow>
              <h2 className="mt-3 max-w-xl font-display text-4xl font-semibold leading-none md:text-6xl">
                Six ways to train. One standard.
              </h2>
            </div>
            <ButtonLink to="/programs" variant="outline">
              All programs
            </ButtonLink>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map((program) => (
              <Link
                key={program.slug}
                to="/programs/$slug"
                params={{ slug: program.slug }}
                className="group flex flex-col bg-bone"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={program.image}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="font-display text-xs font-semibold uppercase tracking-brand text-brass">
                    {program.discipline}
                  </p>
                  <h3 className="mt-2 font-display text-3xl font-semibold leading-none">{program.name}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{program.summary}</p>
                  <p className="mt-4 text-sm font-medium">
                    {program.level}
                    <span className="text-muted"> · {program.length}</span>
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-bone">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <Eyebrow>03 — On the floor</Eyebrow>
          <div className="mt-3 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="max-w-xl font-display text-4xl font-semibold leading-none md:text-6xl">
              A sample {dayNames[day].toLowerCase()} schedule at {gym.name}.
            </h2>
            <div className="flex gap-2 overflow-x-auto" role="tablist" aria-label="Preview a day">
              {days.map((item) => (
                <button
                  key={item}
                  type="button"
                  role="tab"
                  aria-selected={day === item}
                  onClick={() => setDay(item)}
                  className={cn(
                    "btn min-h-11 shrink-0 px-3 font-display text-sm font-semibold uppercase tracking-brand",
                    day === item ? "bg-ink text-bone" : "bg-bone-2 text-ink",
                  )}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <ul className="mt-8 divide-y divide-line border-y border-line">
            {preview.map((session) => {
              const program = getProgram(session.program);
              const coach = getCoach(session.coach);
              return (
                <li key={session.id} className="grid gap-2 py-5 sm:grid-cols-[7rem_1fr_auto] sm:items-center sm:gap-6">
                  <p className="font-display text-lg font-semibold tabular-nums">{formatTime(session.time)}</p>
                  <div>
                    <p className="font-display text-2xl font-semibold leading-none">{program?.name}</p>
                    <p className="mt-1 text-sm text-muted">
                      {coach?.name} · {session.room} · {session.minutes} min
                    </p>
                  </div>
                  <p className="text-sm text-muted">{session.spots} places</p>
                </li>
              );
            })}
          </ul>
          <ButtonLink to="/schedule" variant="outline" className="mt-8">
            Full schedule
          </ButtonLink>
        </div>
      </section>

      <section className="border-t border-line bg-char text-bone">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Eyebrow light>04 — Coaches</Eyebrow>
              <h2 className="mt-3 font-display text-4xl font-semibold leading-none md:text-6xl">
                The people who write the week.
              </h2>
            </div>
            <ButtonLink to="/coaches" variant="outlineLight">
              Meet the staff
            </ButtonLink>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {coaches.map((coach) => (
              <Link
                key={coach.slug}
                to="/coaches/$slug"
                params={{ slug: coach.slug }}
                className="group"
              >
                <div className="aspect-portrait overflow-hidden bg-char-2">
                  <img
                    src={coach.image}
                    alt=""
                    className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <p className="mt-4 font-display text-xs font-semibold uppercase tracking-brand text-brass-bright">
                  {coach.role}
                </p>
                <h3 className="mt-1 font-display text-3xl font-semibold leading-none">{coach.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-bone/75">{coach.short}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-bone">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <Eyebrow>05 — Membership</Eyebrow>
          <h2 className="mt-3 max-w-2xl font-display text-4xl font-semibold leading-none md:text-6xl">
            Membership, made clear.
          </h2>
          {membership.available && membership.plans.length > 0 ? (
            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {membership.plans.slice(0, 3).map((plan) => (
                <article key={plan.id} className="flex flex-col border border-line bg-bone p-6">
                  <p className="font-display text-xs font-semibold uppercase tracking-brand text-brass">
                    {plan.service || "Membership"}
                  </p>
                  <h3 className="mt-3 font-display text-4xl font-semibold leading-none">{plan.name}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {plan.description || "Ask the desk for details about this membership."}
                  </p>
                  <p className="mt-8 font-display text-4xl font-semibold tabular-nums leading-none">
                    {formatPrice(plan.amount)}
                  </p>
                  <p className="mt-2 text-sm text-muted">
                    {plan.days > 0 ? `${plan.days} day${plan.days === 1 ? "" : "s"}` : "Duration confirmed by the desk"}
                  </p>
                  <ButtonLink to="/membership" variant="outline" className="mt-6 w-full">
                    See {plan.name}
                  </ButtonLink>
                </article>
              ))}
            </div>
          ) : (
            <p className="mt-8 max-w-2xl border border-line bg-bone p-6 text-ink-soft" role="status">
              {membership.available
                ? "Membership options are being updated. Contact the desk for current availability."
                : "Membership details are temporarily unavailable. Contact the desk and we’ll help you find the right plan."}
            </p>
          )}
        </div>
      </section>

      <section className="border-t border-line bg-bone-2">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <Eyebrow>06 — From the floor</Eyebrow>
          <div className="mt-8 grid gap-8 lg:grid-cols-3">
            {notes.map((note) => (
              <figure key={note.name} className="border-t border-ink pt-6">
                <blockquote className="font-display text-2xl font-medium leading-snug">“{note.quote}”</blockquote>
                <figcaption className="mt-5 text-sm text-muted">
                  <span className="font-medium text-ink">{note.name}</span>
                  <span> · {note.detail}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
