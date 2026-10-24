import { createFileRoute } from "@tanstack/react-router";
import { DeskCta, Eyebrow, PageHeader } from "@/components/chrome";
import { club, facilities } from "@/lib/data";
import { publicSeoMeta } from "@/lib/site-seo";

export const Route = createFileRoute("/club")({
  head: ({ matches }) => ({ meta: publicSeoMeta(matches, "About the Gym", "Learn about the facilities and fitness experience at :gym in :location.") }),
  component: ClubPage,
});

const rules = [
  "Shoes on the floor. Barefoot only in Restore.",
  "Re-rack what you take. The next class is not your cleaner.",
  "Phones stay off the rack. Music is house, and it is quiet.",
  "If the board says the hour is full, it is full.",
  "The plunge follows the card on the door. Sloan’s order, not yours.",
  "Guests sign in. They don’t wander.",
];

function ClubPage() {
  return (
    <div className="pt-16 md:pt-20">
      <PageHeader
        eyebrow="The club"
        title="A loft that learned to lift."
        lede="Halden took a former millinery building on Mercer and kept the bones: tall windows, a long east wall, and enough quiet that you can hear a brace."
      />
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 md:grid-cols-2 md:px-8 md:py-20">
        <img
          src="/club/detail.jpg"
          alt="Training floor with machines and open space between stations"
          className="aspect-video w-full object-cover"
        />
        <div>
          <Eyebrow>The building</Eyebrow>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-none">Two floors. One standard.</h2>
          <div className="mt-5 space-y-4 text-lg leading-relaxed text-ink-soft">
            <p>
              The strength floor and the lane share the lower level. Studios and the recovery suite sit above, with a members’ lounge at the Mercer windows. Eighteen thousand four hundred square feet, counted the ungenerous way.
            </p>
            <p>
              We opened in 2019 with a cap and kept it. Classes stop at eight, fourteen, or sixteen. The floor during Barbell stops at ten or twelve. That is the whole trick, and we do not apologize for it.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-bone-2">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
          <Eyebrow>Rooms</Eyebrow>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-none md:text-5xl">What the building holds.</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {facilities.map((room) => (
              <article key={room.title} className="bg-bone">
                <img src={room.image} alt="" className="aspect-video w-full object-cover" />
                <div className="p-5">
                  <h3 className="font-display text-3xl font-semibold leading-none">{room.title}</h3>
                  <p className="mt-3 text-ink-soft">{room.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-2 md:px-8">
        <div>
          <Eyebrow>House rules</Eyebrow>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-none">Short, and kept.</h2>
          <ul className="mt-6 space-y-4">
            {rules.map((rule) => (
              <li key={rule} className="border-l-2 border-brass pl-4 text-ink-soft">
                {rule}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-char p-8 text-bone">
          <Eyebrow light>Find us</Eyebrow>
          <p className="mt-4 font-display text-4xl font-semibold leading-none">{club.street}</p>
          <p className="mt-2 text-bone/80">{club.city}</p>
          <p className="mt-6 max-w-sm text-bone/80">
            Glass door on Mercer, iron stair to the desk. Prince Street station is one block south. The Broadway garage is the one we tell people to use.
          </p>
          <dl className="mt-8 space-y-3 text-sm">
            {club.hours.map((row) => (
              <div key={row.label} className="flex justify-between gap-4 border-b border-bone/15 pb-3">
                <dt>{row.label}</dt>
                <dd className="tabular-nums">{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
      <DeskCta />
    </div>
  );
}
