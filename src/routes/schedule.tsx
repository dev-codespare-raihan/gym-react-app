import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/chrome";
import { ScheduleBoard } from "@/components/schedule-board";
import { publicSeoMeta } from "@/lib/site-seo";

export const Route = createFileRoute("/schedule")({
  head: ({ matches }) => ({ meta: publicSeoMeta(matches, "Sample Gym Schedule", "Browse a sample weekly class schedule at :gym in :location.") }),
  component: SchedulePage,
});

function SchedulePage() {
  return (
    <div className="pt-16 md:pt-20">
      <PageHeader
        eyebrow="Schedule"
        title="A sample week on the floor."
        lede="Browse an example timetable, then send an enquiry about a class time. The desk will confirm the current schedule and availability."
      />
      <ScheduleBoard />
    </div>
  );
}
