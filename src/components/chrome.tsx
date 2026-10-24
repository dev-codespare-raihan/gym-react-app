import { Link, useRouterState } from "@tanstack/react-router";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import { useEffect, useState, type ComponentProps, type ReactNode } from "react";
import { cn } from "@/lib/cn";
import { useSiteConfig } from "@/components/site-config";

const nav = [
  { to: "/", label: "Home" },
  { to: "/programs", label: "Programs" },
  { to: "/schedule", label: "Schedule" },
  { to: "/coaches", label: "Coaches" },
  { to: "/membership", label: "Membership" },
  { to: "/club", label: "The Club" },
] as const;

type Variant = "brass" | "ink" | "outline" | "outlineLight" | "ghost";

const variantClass: Record<Variant, string> = {
  brass: "bg-brass text-bone hover:bg-brass-hot",
  ink: "bg-ink text-bone hover:bg-ink-soft",
  outline: "border border-ink bg-transparent text-ink hover:bg-ink hover:text-bone",
  outlineLight: "border border-bone/40 bg-transparent text-bone hover:bg-bone hover:text-ink",
  ghost: "bg-transparent text-ink hover:bg-bone-2",
};

const buttonClass =
  "btn inline-flex min-h-12 items-center justify-center gap-2 px-5 text-center font-display text-sm font-semibold uppercase tracking-brand disabled:pointer-events-none disabled:opacity-50";

export function Button({
  variant = "brass",
  className,
  ...props
}: ComponentProps<"button"> & { variant?: Variant }) {
  return <button className={cn(buttonClass, variantClass[variant], className)} {...props} />;
}

export function ButtonLink({
  variant = "brass",
  className,
  ...props
}: ComponentProps<typeof Link> & { variant?: Variant }) {
  return <Link className={cn(buttonClass, variantClass[variant], className)} {...props} />;
}

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p
      className={cn(
        "font-display text-xs font-semibold uppercase tracking-brand",
        light ? "text-brass-bright" : "text-brass",
      )}
    >
      {children}
    </p>
  );
}

export function Wordmark({ light = false }: { light?: boolean }) {
  const { gym } = useSiteConfig();

  return (
    <Link to="/" className={cn("inline-flex min-w-0 items-center gap-3", light ? "text-bone" : "text-ink")}>
      {gym.logo_url ? (
        <img src={gym.logo_url} alt={gym.name} className="max-h-11 max-w-40 object-contain" />
      ) : (
        <span className="size-2 shrink-0 bg-brass" aria-hidden />
      )}
      <span className="max-w-48 truncate font-display text-lg font-bold tracking-tight">{gym.name}</span>
    </Link>
  );
}

function isCurrent(path: string, to: string) {
  return path === to || path.startsWith(`${to}/`);
}

export function Header() {
  const path = useRouterState({ select: (state) => state.location.pathname });
  const overlay = path === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const solid = !overlay || scrolled;
  const light = !solid;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [path]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-colors duration-200",
        solid ? "border-b border-line bg-bone text-ink" : "bg-transparent text-bone",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 md:h-20 md:px-8">
        <Wordmark light={light} />
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "font-display text-sm font-semibold uppercase tracking-brand",
                isCurrent(path, item.to) ? (light ? "text-brass-bright" : "text-brass") : "",
              )}
              aria-current={isCurrent(path, item.to) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ButtonLink to="/visit" variant="brass" className="hidden sm:inline-flex">
            Book a trial
          </ButtonLink>
          <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
              <button
                type="button"
                className={cn(
                  "btn inline-flex size-11 items-center justify-center lg:hidden",
                  light ? "text-bone" : "text-ink",
                )}
                aria-label="Open menu"
              >
                <Menu className="size-6" />
              </button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 z-50 bg-ink/40" />
              <Dialog.Content className="fixed inset-0 z-50 flex flex-col bg-bone p-5 text-ink">
                <Dialog.Title className="sr-only">Menu</Dialog.Title>
                <div className="flex items-center justify-between">
                  <Wordmark />
                  <Dialog.Close className="btn inline-flex size-11 items-center justify-center" aria-label="Close menu">
                    <X className="size-6" />
                  </Dialog.Close>
                </div>
                <nav className="mt-8 flex flex-col" aria-label="Mobile">
                  {nav.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className="border-b border-line py-4 font-display text-4xl font-semibold leading-none"
                      aria-current={isCurrent(path, item.to) ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Link to="/visit" className="border-b border-line py-4 font-display text-4xl font-semibold leading-none">
                    Visit
                  </Link>
                </nav>
                <div className="mt-auto pt-8">
                  <ButtonLink to="/visit" variant="brass" className="w-full">
                    Book a trial
                  </ButtonLink>
                </div>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  const { gym, services } = useSiteConfig();
  const address = [gym.address, [gym.city, gym.state, gym.postal_code, gym.country].filter(Boolean).join(", ")]
    .filter(Boolean);

  return (
    <footer className="border-t border-line bg-char text-bone">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-12 md:px-8">
        <div className="md:col-span-4">
          <p className="font-display text-2xl font-bold tracking-tight">{gym.name}</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-bone/75">
            Membership, coaching, and fitness services from {gym.name}.
          </p>
        </div>
        <div className="md:col-span-3">
          <p className="font-display text-xs font-semibold uppercase tracking-brand text-brass-bright">Visit</p>
          <address className="mt-4 space-y-2 text-sm not-italic leading-relaxed text-bone/85">
            {address.map((line) => <p key={line}>{line}</p>)}
            {gym.phone ? <p className="pt-2"><a className="underline decoration-bone/30 underline-offset-4" href={`tel:${gym.phone.replace(/[^+\d]/g, "")}`}>{gym.phone}</a></p> : null}
            {gym.email ? <p><a className="underline decoration-bone/30 underline-offset-4" href={`mailto:${gym.email}`}>{gym.email}</a></p> : null}
          </address>
        </div>
        <div className="md:col-span-2">
          <p className="font-display text-xs font-semibold uppercase tracking-brand text-brass-bright">Our services</p>
          <ul className="mt-4 space-y-2 text-sm text-bone/85">
            {services.map((service) => (
              <li key={service.id}>{service.name}</li>
            ))}
          </ul>
        </div>
        <nav className="md:col-span-3" aria-label="Footer">
          <p className="font-display text-xs font-semibold uppercase tracking-brand text-brass-bright">The house</p>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-bone/85 hover:text-bone">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/visit" className="text-bone/85 hover:text-bone">
                Book a trial
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="border-t border-bone/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-bone/55 sm:flex-row sm:items-center sm:justify-between md:px-8">
          <p>© 2026 {gym.name}. All rights reserved.</p>
          <p>Developed and maintained by Codespare Technologies.</p>
        </div>
      </div>
    </footer>
  );
}

export function PageHeader({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede: string;
}) {
  return (
    <header className="border-b border-line">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-3 max-w-4xl font-display text-5xl font-semibold leading-none text-ink md:text-7xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{lede}</p>
      </div>
    </header>
  );
}

export function DeskCta() {
  return (
    <section className="bg-char text-bone">
      <div className="mx-auto grid max-w-7xl items-end gap-8 px-5 py-16 md:grid-cols-2 md:px-8 md:py-20">
        <div>
          <Eyebrow light>The desk</Eyebrow>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-none md:text-5xl">
            See the floor before you decide.
          </h2>
        </div>
        <div className="flex flex-col gap-6 md:items-start">
          <p className="max-w-md text-lg leading-relaxed text-bone/80">
            A trial is forty-five minutes with a coach. No contract attached, and no one walks you past a rate card on the way out.
          </p>
          <ButtonLink to="/visit" variant="brass">
            Book a trial
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

export function Missing({ title, body }: { title: string; body: string }) {
  return (
    <div className="mx-auto max-w-3xl px-5 py-24 md:px-8">
      <Eyebrow>Not on the book</Eyebrow>
      <h1 className="mt-3 font-display text-5xl font-semibold leading-none">{title}</h1>
      <p className="mt-4 max-w-xl text-lg text-muted">{body}</p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <ButtonLink to="/" variant="ink">
          Back home
        </ButtonLink>
        <ButtonLink to="/programs" variant="outline">
          Browse programs
        </ButtonLink>
      </div>
    </div>
  );
}
