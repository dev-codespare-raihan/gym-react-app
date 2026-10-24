import { zodResolver } from "@hookform/resolvers/zod";
import { useState, type ReactNode } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/chrome";
import { submitPublicEnquiry } from "@/lib/gymie-api";
import { useSiteConfig } from "@/components/site-config";

const schema = z.object({
  name: z.string().trim().min(2, "Tell us your name."),
  email: z.string().trim().email("Use a valid email."),
  phone: z
    .string()
    .trim()
    .min(1, "Enter your phone number.")
    .max(20, "Keep your phone number under 20 characters.")
    .refine((value) => value.replace(/\D/g, "").length >= 7, "Enter a valid phone number."),
  interest: z.string().min(2, "Choose a service or tell us what you’re interested in."),
  window: z.enum(["early", "midday", "evening", "weekend"]),
  note: z.string().trim().max(255, "Keep the note under 255 characters."),
});

type FormValues = z.infer<typeof schema>;

const interests: { value: string; label: string }[] = [
  { value: "trial", label: "A coached trial" },
  { value: "membership", label: "Membership" },
  { value: "private", label: "Private coaching" },
  { value: "corporate", label: "A small company visit" },
];

const windows: { value: FormValues["window"]; label: string }[] = [
  { value: "early", label: "Early morning" },
  { value: "midday", label: "Midday" },
  { value: "evening", label: "Evening" },
  { value: "weekend", label: "Weekend" },
];

export function VisitForm() {
  const { services } = useSiteConfig();
  const [sent, setSent] = useState<FormValues | null>(null);
  const [submitError, setSubmitError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      interest: "trial",
      window: "evening",
      note: "",
    },
  });

  if (sent) {
    const interest = interests.find((item) => item.value === sent.interest)?.label ?? "Your request";
    return (
      <div className="border border-ink bg-bone p-6 md:p-8" role="status">
        <p className="font-display text-xs font-semibold uppercase tracking-brand text-brass">Request received</p>
        <h2 className="mt-3 font-display text-4xl font-semibold leading-none">We’ll write back, {sent.name.split(" ")[0]}.</h2>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          {interest} is with the desk. Expect a note at {sent.email} within one business day — not a newsletter, and not a charge.
        </p>
        <Button type="button" variant="outline" className="mt-8" onClick={() => setSent(null)}>
          Send another
        </Button>
      </div>
    );
  }

  return (
    <form
      className="border border-line bg-bone p-6 md:p-8"
      onSubmit={handleSubmit(async (values) => {
        setSubmitError("");
        const result = await submitPublicEnquiry({
          data: {
          name: values.name,
          email: values.email,
            contact: values.phone,
            interest: values.interest,
            preferred_time: values.window,
            note: values.note || undefined,
          },
        });

        if (result.success) {
          setSent(values);
        } else {
          setSubmitError(result.message);
        }
      })}
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" error={errors.name?.message} htmlFor="name">
          <input id="name" className="field" autoComplete="name" {...register("name")} />
        </Field>
        <Field label="Email" error={errors.email?.message} htmlFor="email">
          <input id="email" className="field" autoComplete="email" inputMode="email" {...register("email")} />
        </Field>
        <Field label="Phone" error={errors.phone?.message} htmlFor="phone" hint="Required">
          <input id="phone" className="field" autoComplete="tel" inputMode="tel" required {...register("phone")} />
        </Field>
        <Field label="I’m asking about" error={errors.interest?.message} htmlFor="interest">
          <select id="interest" className="field" {...register("interest")}>
            {interests.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
            {services.map((service) => (
              <option key={service.id} value={service.name}>
                {service.name}
              </option>
            ))}
          </select>
        </Field>
        <Field label="A good window" error={errors.window?.message} htmlFor="window">
          <select id="window" className="field" {...register("window")}>
            {windows.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </Field>
        <div className="sm:col-span-2">
          <Field label="Anything the coach should know" error={errors.note?.message} htmlFor="note" hint="Optional">
            <textarea id="note" className="field" rows={4} {...register("note")} />
          </Field>
        </div>
      </div>
      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-muted">We reply within one business day. We don’t add you to a list.</p>
          {submitError ? <p className="mt-2 text-sm text-brass" role="alert">{submitError}</p> : null}
        </div>
        <Button type="submit" variant="brass" disabled={isSubmitting}>
          {isSubmitting ? "Sending…" : "Send to the desk"}
        </Button>
      </div>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  hint,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <div className="mb-2 flex items-baseline justify-between gap-3">
        <label htmlFor={htmlFor} className="text-sm font-medium">
          {label}
        </label>
        {hint ? <span className="text-xs text-muted">{hint}</span> : null}
      </div>
      {children}
      {error ? (
        <p className="mt-2 text-sm text-brass" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
