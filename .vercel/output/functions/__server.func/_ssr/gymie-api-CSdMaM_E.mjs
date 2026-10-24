import { n as TSS_SERVER_FUNCTION, t as createServerFn } from "./ssr.mjs";
import { a as object, i as number, n as array, o as string } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gymie-api-CSdMaM_E.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var publicPlanSchema = object({
	id: number(),
	name: string(),
	description: string().nullable(),
	service: string().nullable(),
	amount: number(),
	days: number()
});
var publicEnquirySchema = object({
	name: string().trim().min(2).max(255),
	email: string().trim().email().max(255),
	contact: string().trim().min(1, "Enter your phone number.").max(20).refine((value) => value.replace(/\D/g, "").length >= 7, "Enter a valid phone number."),
	interest: string().trim().min(2).max(100),
	preferred_time: string().trim().max(50).optional(),
	note: string().trim().max(255).optional()
});
var publicSiteConfigSchema = object({
	gym: object({
		name: string(),
		logo_url: string().nullable(),
		currency: string(),
		address: string(),
		city: string(),
		state: string(),
		country: string(),
		postal_code: string(),
		email: string(),
		phone: string()
	}),
	colors: object({
		primary: string(),
		accent: string(),
		surface: string(),
		text: string(),
		dark: string()
	}),
	services: array(object({
		id: number(),
		name: string(),
		description: string().nullable()
	}))
});
var defaultSiteConfig = {
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
		phone: ""
	},
	colors: {
		primary: "#7c4a28",
		accent: "#945832",
		surface: "#f3f0e8",
		text: "#141311",
		dark: "#121110"
	},
	services: []
};
function backendUrl() {
	const value = process.env.GYMIE_BACKEND_URL?.trim();
	return value ? value.replace(/\/+$/, "") : null;
}
var getPublicSiteConfig_createServerFn_handler = createServerRpc({
	id: "888628bf31cc03a431c0336b56b8ff87fc9d6491a0dcbb8d78adea906e4f375c",
	name: "getPublicSiteConfig",
	filename: "src/lib/gymie-api.ts"
}, (opts) => getPublicSiteConfig.__executeServer(opts));
var getPublicSiteConfig = createServerFn({ method: "GET" }).handler(getPublicSiteConfig_createServerFn_handler, async () => {
	const baseUrl = backendUrl();
	if (!baseUrl) return defaultSiteConfig;
	try {
		const response = await fetch(`${baseUrl}/api/v1/public/site`, {
			headers: { Accept: "application/json" },
			signal: AbortSignal.timeout(5e3)
		});
		if (!response.ok) return defaultSiteConfig;
		const parsed = publicSiteConfigSchema.safeParse(await response.json());
		return parsed.success ? parsed.data : defaultSiteConfig;
	} catch {
		return defaultSiteConfig;
	}
});
var getPublicMembershipPlans_createServerFn_handler = createServerRpc({
	id: "b6814a1b739bde8f42a631325b7f63f76da45fdf867216d260f04602b0f7e514",
	name: "getPublicMembershipPlans",
	filename: "src/lib/gymie-api.ts"
}, (opts) => getPublicMembershipPlans.__executeServer(opts));
var getPublicMembershipPlans = createServerFn({ method: "GET" }).handler(getPublicMembershipPlans_createServerFn_handler, async () => {
	const baseUrl = backendUrl();
	if (!baseUrl) return {
		available: false,
		currency: "INR",
		plans: []
	};
	try {
		const response = await fetch(`${baseUrl}/api/v1/public/membership-plans`, {
			headers: { Accept: "application/json" },
			signal: AbortSignal.timeout(5e3)
		});
		if (!response.ok) return {
			available: false,
			currency: "INR",
			plans: []
		};
		const payload = await response.json();
		const parsed = object({
			data: array(publicPlanSchema),
			currency: string().default("INR")
		}).safeParse(payload);
		if (!parsed.success) return {
			available: false,
			currency: "INR",
			plans: []
		};
		return {
			available: true,
			currency: parsed.data.currency,
			plans: parsed.data.data
		};
	} catch {
		return {
			available: false,
			currency: "INR",
			plans: []
		};
	}
});
var submitPublicEnquiry_createServerFn_handler = createServerRpc({
	id: "c4f8a8b215d63043e613f543c3992554f62eaa935c7d0c67b93359841bf97d8e",
	name: "submitPublicEnquiry",
	filename: "src/lib/gymie-api.ts"
}, (opts) => submitPublicEnquiry.__executeServer(opts));
var submitPublicEnquiry = createServerFn({ method: "POST" }).validator(publicEnquirySchema).handler(submitPublicEnquiry_createServerFn_handler, async ({ data }) => {
	const baseUrl = backendUrl();
	if (!baseUrl) return {
		success: false,
		message: "The enquiry form is temporarily unavailable. Please contact the gym directly."
	};
	try {
		const response = await fetch(`${baseUrl}/api/v1/public/enquiries`, {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data),
			signal: AbortSignal.timeout(8e3)
		});
		if (response.ok) return { success: true };
		if (response.status === 422) return {
			success: false,
			message: "Please check the details above and try again."
		};
		return {
			success: false,
			message: "We couldn’t send that just now. Please try again in a moment."
		};
	} catch {
		return {
			success: false,
			message: "We couldn’t reach the gym desk. Please try again in a moment."
		};
	}
});
//#endregion
export { getPublicMembershipPlans_createServerFn_handler, getPublicSiteConfig_createServerFn_handler, submitPublicEnquiry_createServerFn_handler };
