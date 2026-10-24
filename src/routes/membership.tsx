import { createFileRoute } from "@tanstack/react-router";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { PageHeader } from "@/components/chrome";
import { MembershipPlans } from "@/components/plans";
import { faqs } from "@/lib/data";
import { getPublicMembershipPlans } from "@/lib/gymie-api";
import { publicSeoMeta } from "@/lib/site-seo";

export const Route = createFileRoute("/membership")({
  loader: () => getPublicMembershipPlans(),
  head: ({ matches }) => ({ meta: publicSeoMeta(matches, "Gym Membership Plans", "Compare current gym membership prices and plan durations at :gym in :location.") }),
  component: MembershipPage,
});

function MembershipPage() {
  const membership = Route.useLoaderData();

  return (
    <div className="pt-16 md:pt-20">
      <PageHeader
        eyebrow="Membership"
        title="Pay for the hours you will use."
        lede="Compare the active plans, prices, and durations configured by the club. The desk can answer questions and help you choose before you join."
      />
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
        <MembershipPlans {...membership} />
      </div>
      <section className="border-t border-line bg-bone-2">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-[0.7fr_1.3fr] md:px-8">
          <div>
            <h2 className="font-display text-4xl font-semibold leading-none">Questions the desk actually gets.</h2>
            <p className="mt-4 text-muted">If yours isn’t here, write from the visit page. A person answers.</p>
          </div>
          <Accordion.Root type="single" collapsible className="border-t border-line">
            {faqs.map((item) => (
              <Accordion.Item key={item.q} value={item.q} className="border-b border-line">
                <Accordion.Header>
                  <Accordion.Trigger className="group flex min-h-14 w-full items-center justify-between gap-4 py-4 text-left font-display text-xl font-semibold">
                    {item.q}
                    <ChevronDown className="size-5 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180" aria-hidden />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="pb-5 text-ink-soft">{item.a}</Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </section>
    </div>
  );
}
