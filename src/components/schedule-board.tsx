import { Link } from "@tanstack/react-router";
import * as Dialog from "@radix-ui/react-dialog";
import { useMemo, useState, type FormEvent } from "react";
import { Button } from "@/components/chrome";
import { submitPublicEnquiry } from "@/lib/gymie-api";
import {
  dayNames,
  days,
  disciplines,
  formatTime,
  getCoach,
  getProgram,
  sessions,
  type Day,
  type Discipline,
  type Session,
} from "@/lib/data";
import { cn } from "@/lib/cn";

type Filter = "All" | Discipline;

export function ScheduleBoard() {
  const [day, setDay] = useState<Day>("Mon");
  const [filter, setFilter] = useState<Filter>("All");
  const [active, setActive] = useState<Session | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [requestedSessionId, setRequestedSessionId] = useState<string | null>(null);

  const list = useMemo(
    () =>
      sessions.filter((session) => {
        if (session.day !== day) return false;
        if (filter === "All") return true;
        return getProgram(session.program)?.discipline === filter;
      }),
    [day, filter],
  );

  function closeDialog(open: boolean) {
    if (!open) {
      setActive(null);
      setError("");
      setEmail("");
      setPhone("");
      setName("");
    }
  }

  async function submitHold(event: FormEvent) {
    event.preventDefault();
    if (!active) return;
    const trimmed = name.trim();
    if (trimmed.length < 2) {
      setError("Enter the name the desk should use.");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email.trim())) {
      setError("Enter a valid email so the desk can confirm the request.");
      return;
    }
    if (phone.trim().length > 20 || phone.replace(/\D/g, "").length < 7) {
      setError("Enter a valid phone number with at least 7 digits.");
      return;
    }

    const program = getProgram(active.program);
    setIsSubmitting(true);

    try {
      const result = await submitPublicEnquiry({
        data: {
        name: trimmed,
        email: email.trim(),
        contact: phone.trim(),
        interest: "class",
        note: `${program?.name ?? "Class"} · ${dayNames[active.day]} at ${formatTime(active.time)} · ${activeCoach?.name ?? "Coach"}`,
        },
      });

      if (!result.success) {
        setError(result.message);
        return;
      }

      setRequestedSessionId(active.id);
      setActive(null);
      setEmail("");
      setPhone("");
      setName("");
      setError("");
    } finally {
      setIsSubmitting(false);
    }
  }

  const activeProgram = active ? getProgram(active.program) : undefined;
  const activeCoach = active ? getCoach(active.coach) : undefined;

  return (
    <div>
      <div className="sticky top-16 z-30 border-b border-line bg-bone md:top-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-4 md:px-8">
          <div className="flex gap-2 overflow-x-auto" role="tablist" aria-label="Day">
            {days.map((item) => {
              const count = sessions.filter((session) => session.day === item).length;
              return (
                <button
                  key={item}
                  type="button"
                  role="tab"
                  aria-selected={day === item}
                  onClick={() => setDay(item)}
                  className={cn(
                    "btn min-h-11 shrink-0 px-3 font-display text-sm font-semibold uppercase tracking-brand",
                    day === item ? "bg-ink text-bone" : "text-ink hover:bg-bone-2",
                  )}
                >
                  {item}
                  <span className={cn("tabular-nums", day === item ? "text-bone/70" : "text-muted")}>{count}</span>
                </button>
              );
            })}
          </div>
          <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="Discipline">
            {(["All", ...disciplines] as const).map((item) => (
              <button
                key={item}
                type="button"
                role="radio"
                aria-checked={filter === item}
                onClick={() => setFilter(item)}
                className={cn(
                  "btn min-h-11 px-3 font-display text-xs font-semibold uppercase tracking-brand",
                  filter === item ? "bg-brass text-bone" : "border border-line text-ink",
                )}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-8 md:px-8 md:py-12">
        <p className="text-sm text-muted">
          {dayNames[day]} · {list.length} {list.length === 1 ? "class" : "classes"}
          {filter !== "All" ? ` · ${filter}` : ""}
        </p>
        {list.length === 0 ? (
          <p className="mt-8 max-w-md text-lg">Nothing on the book for that mix. Try another day, or clear the discipline.</p>
        ) : (
          <ul className="mt-4 divide-y divide-line border-y border-line">
            {list.map((session) => {
              const program = getProgram(session.program);
              const coach = getCoach(session.coach);
              if (!program || !coach) return null;
              return (
                <li key={session.id} className="grid gap-4 py-5 lg:grid-cols-[6.5rem_1.4fr_1fr_0.8fr_auto] lg:items-center">
                  <p className="font-display text-xl font-semibold tabular-nums">{formatTime(session.time)}</p>
                  <div>
                    <Link
                      to="/programs/$slug"
                      params={{ slug: program.slug }}
                      className="font-display text-2xl font-semibold leading-none hover:text-brass"
                    >
                      {program.name}
                    </Link>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-brand text-brass">{program.discipline}</p>
                  </div>
                  <div className="text-sm">
                    <Link to="/coaches/$slug" params={{ slug: coach.slug }} className="font-medium hover:text-brass">
                      {coach.name}
                    </Link>
                    <p className="text-muted">{session.room}</p>
                  </div>
                  <p className="text-sm tabular-nums text-muted">
                    {session.minutes} min · {session.spots} places
                  </p>
                  {requestedSessionId === session.id ? (
                    <Button type="button" variant="outline" disabled>
                      Request sent
                    </Button>
                  ) : (
                    <Button
                      type="button"
                      variant="ink"
                      onClick={() => {
                        setActive(session);
                        setError("");
                      }}
                      aria-label={`Ask about ${program.name} on ${dayNames[session.day]} at ${formatTime(session.time)}`}
                    >
                      Ask the desk
                    </Button>
                  )}
                </li>
              );
            })}
          </ul>
        )}
      </div>

      <Dialog.Root open={Boolean(active)} onOpenChange={closeDialog}>
        <Dialog.Portal>
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <Dialog.Overlay className="absolute inset-0 bg-ink/60" />
            <Dialog.Content className="relative w-full max-w-md border border-line bg-bone p-6 text-ink">
              <Dialog.Title className="font-display text-3xl font-semibold leading-none">Ask about a place</Dialog.Title>
              <Dialog.Description className="mt-3 text-sm leading-relaxed text-muted">
                {activeProgram?.name} · {active ? dayNames[active.day] : ""} · {active ? formatTime(active.time) : ""}
                {activeCoach ? ` · ${activeCoach.name}` : ""} · {active?.room}. The desk will confirm availability by email.
              </Dialog.Description>
              <form onSubmit={submitHold} className="mt-6">
                <label htmlFor="hold-name" className="mb-2 block text-sm font-medium">
                  Name
                </label>
                <input
                  id="hold-name"
                  className="field"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  autoComplete="name"
                  placeholder="Alex Rivera"
                />
                <label htmlFor="hold-email" className="mb-2 mt-4 block text-sm font-medium">
                  Email
                </label>
                <input
                  id="hold-email"
                  className="field"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  autoComplete="email"
                  placeholder="alex@example.com"
                  required
                />
                <label htmlFor="hold-phone" className="mb-2 mt-4 block text-sm font-medium">
                  Phone
                </label>
                <input
                  id="hold-phone"
                  className="field"
                  type="tel"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  autoComplete="tel"
                  inputMode="tel"
                  maxLength={20}
                  placeholder="+91 98765 43210"
                  required
                />
                {error ? (
                  <p className="mt-2 text-sm text-brass" role="alert">
                    {error}
                  </p>
                ) : null}
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Button type="submit" variant="brass" className="flex-1" disabled={isSubmitting}>
                    {isSubmitting ? "Sending…" : "Send request"}
                  </Button>
                  <Dialog.Close className="btn min-h-12 flex-1 border border-ink px-5 font-display text-sm font-semibold uppercase tracking-brand">
                    Cancel
                  </Dialog.Close>
                </div>
              </form>
            </Dialog.Content>
          </div>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
