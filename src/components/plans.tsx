import { Check } from "lucide-react";
import { ButtonLink } from "@/components/chrome";
import type { PublicPlan } from "@/lib/gymie-api";

export function MembershipPlans({
  available,
  currency,
  plans,
}: {
  available: boolean;
  currency: string;
  plans: PublicPlan[];
}) {
  const formatPrice = (amount: number) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency,
      maximumFractionDigits: 0,
    }).format(amount);

  if (!available) {
    return (
      <p className="border border-line bg-bone p-6 text-ink-soft" role="status">
        Membership details are temporarily unavailable. Contact the desk and we’ll help you find the right plan.
      </p>
    );
  }

  if (plans.length === 0) {
    return (
      <p className="border border-line bg-bone p-6 text-ink-soft" role="status">
        Membership options are being updated. Contact the desk for current availability.
      </p>
    );
  }

  return (
    <div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {plans.map((plan) => (
          <article key={plan.id} className="flex flex-col border border-line bg-bone p-6">
            <p className="font-display text-xs font-semibold uppercase tracking-brand text-brass">
              {plan.service || "Membership"}
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold leading-none">{plan.name}</h2>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
              {plan.description || "Ask the desk for details about this membership."}
            </p>
            <p className="mt-8 font-display text-4xl font-semibold tabular-nums leading-none">
              {formatPrice(plan.amount)}
            </p>
            <p className="mt-2 text-sm text-muted">
              {plan.days > 0 ? `${plan.days} day${plan.days === 1 ? "" : "s"}` : "Plan duration confirmed by the desk"}
            </p>
            <ul className="mt-6 flex-1 space-y-3">
              <li className="flex gap-3 text-sm leading-relaxed">
                <Check className="mt-0.5 size-4 shrink-0 text-brass" aria-hidden />
                <span>Current plan details from the gym</span>
              </li>
              <li className="flex gap-3 text-sm leading-relaxed">
                <Check className="mt-0.5 size-4 shrink-0 text-brass" aria-hidden />
                <span>Speak with the desk before joining</span>
              </li>
            </ul>
            <ButtonLink to="/visit" variant="ink" className="mt-6 w-full">
              Ask about {plan.name}
            </ButtonLink>
          </article>
        ))}
      </div>
    </div>
  );
}
