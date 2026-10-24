import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const publicPlanSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string().nullable(),
  service: z.string().nullable(),
  amount: z.number(),
  days: z.number(),
});

const publicEnquirySchema = z.object({
  name: z.string().trim().min(2).max(255),
  email: z.string().trim().email().max(255),
  contact: z
    .string()
    .trim()
    .min(1, "Enter your phone number.")
    .max(20)
    .refine((value) => value.replace(/\D/g, "").length >= 7, "Enter a valid phone number."),
  interest: z.string().trim().min(2).max(100),
  preferred_time: z.string().trim().max(50).optional(),
  note: z.string().trim().max(255).optional(),
});

export type PublicPlan = z.infer<typeof publicPlanSchema>;
export type PublicEnquiry = z.infer<typeof publicEnquirySchema>;

const publicSiteConfigSchema = z.object({
  gym: z.object({
    name: z.string(),
    logo_url: z.string().nullable(),
    currency: z.string(),
    address: z.string(),
    city: z.string(),
    state: z.string(),
    country: z.string(),
    postal_code: z.string(),
    email: z.string(),
    phone: z.string(),
  }),
  colors: z.object({
    primary: z.string(),
    accent: z.string(),
    surface: z.string(),
    text: z.string(),
    dark: z.string(),
  }),
  services: z.array(z.object({
    id: z.number(),
    name: z.string(),
    description: z.string().nullable(),
  })),
});

export type PublicSiteConfig = z.infer<typeof publicSiteConfigSchema>;

export const defaultSiteConfig: PublicSiteConfig = {
  gym: {
    name: "Your Gym",
    logo_url: null,
    currency: "INR",
    address: "",
    city: "",
    state: "",
    country: "",
    postal_code: "",
    email: "",
    phone: "",
  },
  colors: {
    primary: "#7c4a28",
    accent: "#945832",
    surface: "#f3f0e8",
    text: "#141311",
    dark: "#121110",
  },
  services: [],
};

export type PlanListResult = {
  available: boolean;
  currency: string;
  plans: PublicPlan[];
};

type EnquiryResult =
  | { success: true }
  | { success: false; message: string };

function backendUrl(): string | null {
  const value = process.env.GYMIE_BACKEND_URL?.trim();
  return value ? value.replace(/\/+$/, "") : null;
}

export const getPublicSiteConfig = createServerFn({ method: "GET" }).handler(
  async (): Promise<PublicSiteConfig> => {
    const baseUrl = backendUrl();

    if (!baseUrl) {
      return defaultSiteConfig;
    }

    try {
      const response = await fetch(`${baseUrl}/api/v1/public/site`, {
        headers: { Accept: "application/json" },
        signal: AbortSignal.timeout(5000),
      });

      if (!response.ok) {
        return defaultSiteConfig;
      }

      const parsed = publicSiteConfigSchema.safeParse(await response.json());
      return parsed.success ? parsed.data : defaultSiteConfig;
    } catch {
      return defaultSiteConfig;
    }
  },
);

export const getPublicMembershipPlans = createServerFn({ method: "GET" }).handler(
  async (): Promise<PlanListResult> => {
    const baseUrl = backendUrl();

    if (!baseUrl) {
      return { available: false, currency: "INR", plans: [] };
    }

    try {
      const response = await fetch(`${baseUrl}/api/v1/public/membership-plans`, {
        headers: { Accept: "application/json" },
        signal: AbortSignal.timeout(5000),
      });

      if (!response.ok) {
        return { available: false, currency: "INR", plans: [] };
      }

      const payload: unknown = await response.json();
      const resultSchema = z.object({
        data: z.array(publicPlanSchema),
        currency: z.string().default("INR"),
      });
      const parsed = resultSchema.safeParse(payload);

      if (!parsed.success) {
        return { available: false, currency: "INR", plans: [] };
      }

      return { available: true, currency: parsed.data.currency, plans: parsed.data.data };
    } catch {
      return { available: false, currency: "INR", plans: [] };
    }
  },
);

export const submitPublicEnquiry = createServerFn({ method: "POST" })
  .validator(publicEnquirySchema)
  .handler(async ({ data }): Promise<EnquiryResult> => {
    const baseUrl = backendUrl();

    if (!baseUrl) {
      return { success: false, message: "The enquiry form is temporarily unavailable. Please contact the gym directly." };
    }

    try {
      const response = await fetch(`${baseUrl}/api/v1/public/enquiries`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        signal: AbortSignal.timeout(8000),
      });

      if (response.ok) {
        return { success: true };
      }

      if (response.status === 422) {
        return { success: false, message: "Please check the details above and try again." };
      }

      return { success: false, message: "We couldn’t send that just now. Please try again in a moment." };
    } catch {
      return { success: false, message: "We couldn’t reach the gym desk. Please try again in a moment." };
    }
  });
