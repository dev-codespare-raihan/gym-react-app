import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/chrome";
import { VisitForm } from "@/components/visit-form";
import { useSiteConfig } from "@/components/site-config";
import { publicSeoMeta } from "@/lib/site-seo";

export const Route = createFileRoute("/visit")({
  head: ({ matches }) => ({ meta: publicSeoMeta(matches, "Contact the Gym", "Contact :gym about membership, training services, or a visit in :location.") }),
  component: VisitPage,
});

const trial = [
  "Forty-five minutes with a coach, not a tour guide.",
  "A short look at how you move, then one piece of real work.",
  "A walk of the floor, the lane, and the suite.",
  "A straight answer on which plan fits the hours you have.",
];

function VisitPage() {
  const { gym } = useSiteConfig();
  const city = [gym.city, gym.state, gym.postal_code, gym.country].filter(Boolean).join(", ");

  return (
    <div className="pt-16 md:pt-20">
      <PageHeader
        eyebrow="Visit"
        title="Come in before you join."
        lede={`Tell ${gym.name} what you want to know. The team will follow up using the contact details you provide.`}
      />
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:px-8 md:py-16 lg:grid-cols-[1.15fr_0.85fr]">
        <VisitForm />
        <aside className="space-y-6">
          <div className="overflow-hidden">
            <img
              src="/club/light.jpg"
              alt="The brighter side of the club, machines in rows and room to move"
              className="aspect-video w-full object-cover"
            />
          </div>
          <div className="border border-line p-6">
            <p className="font-display text-xs font-semibold uppercase tracking-brand text-brass">The desk</p>
            <p className="mt-3 font-display text-3xl font-semibold leading-none">{gym.address || gym.name}</p>
            {city ? <p className="mt-1 text-muted">{city}</p> : null}
            {gym.phone ? <p className="mt-4"><a className="font-medium underline decoration-line underline-offset-4" href={`tel:${gym.phone.replace(/[^+\d]/g, "")}`}>{gym.phone}</a></p> : null}
            {gym.email ? <p><a className="font-medium underline decoration-line underline-offset-4" href={`mailto:${gym.email}`}>{gym.email}</a></p> : null}
            {!gym.address && !city && !gym.phone && !gym.email ? <p className="mt-4 text-sm text-muted">Add your address and contact details in the admin settings to display them here.</p> : null}
          </div>
          <div className="border border-line p-6">
            <p className="font-display text-xs font-semibold uppercase tracking-brand text-brass">A trial includes</p>
            <ul className="mt-4 space-y-3">
              {trial.map((item) => (
                <li key={item} className="border-l-2 border-brass pl-4 text-sm leading-relaxed text-ink-soft">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
