import { i as __toESM } from "../_runtime.mjs";
import { n as useForm, r as require_react, t as u } from "../_libs/@hookform/resolvers+[...].mjs";
import { g as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as object, o as string, t as _enum } from "../_libs/zod.mjs";
import { c as PageHeader, h as useSiteConfig, m as submitPublicEnquiry, t as Button } from "./chrome-Ch5YLfDf.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/visit-QUHClH5z.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var schema = object({
	name: string().trim().min(2, "Tell us your name."),
	email: string().trim().email("Use a valid email."),
	phone: string().trim().min(1, "Enter your phone number.").max(20, "Keep your phone number under 20 characters.").refine((value) => value.replace(/\D/g, "").length >= 7, "Enter a valid phone number."),
	interest: string().min(2, "Choose a service or tell us what you’re interested in."),
	window: _enum([
		"early",
		"midday",
		"evening",
		"weekend"
	]),
	note: string().trim().max(255, "Keep the note under 255 characters.")
});
var interests = [
	{
		value: "trial",
		label: "A coached trial"
	},
	{
		value: "membership",
		label: "Membership"
	},
	{
		value: "private",
		label: "Private coaching"
	},
	{
		value: "corporate",
		label: "A small company visit"
	}
];
var windows = [
	{
		value: "early",
		label: "Early morning"
	},
	{
		value: "midday",
		label: "Midday"
	},
	{
		value: "evening",
		label: "Evening"
	},
	{
		value: "weekend",
		label: "Weekend"
	}
];
function VisitForm() {
	const { services } = useSiteConfig();
	const [sent, setSent] = (0, import_react.useState)(null);
	const [submitError, setSubmitError] = (0, import_react.useState)("");
	const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
		resolver: u(schema),
		defaultValues: {
			name: "",
			email: "",
			phone: "",
			interest: "trial",
			window: "evening",
			note: ""
		}
	});
	if (sent) {
		const interest = interests.find((item) => item.value === sent.interest)?.label ?? "Your request";
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "border border-ink bg-bone p-6 md:p-8",
			role: "status",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-xs font-semibold uppercase tracking-brand text-brass",
					children: "Request received"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-3 font-display text-4xl font-semibold leading-none",
					children: [
						"We’ll write back, ",
						sent.name.split(" ")[0],
						"."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 text-lg leading-relaxed text-muted",
					children: [
						interest,
						" is with the desk. Expect a note at ",
						sent.email,
						" within one business day — not a newsletter, and not a charge."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					variant: "outline",
					className: "mt-8",
					onClick: () => setSent(null),
					children: "Send another"
				})
			]
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "border border-line bg-bone p-6 md:p-8",
		onSubmit: handleSubmit(async (values) => {
			setSubmitError("");
			const result = await submitPublicEnquiry({ data: {
				name: values.name,
				email: values.email,
				contact: values.phone,
				interest: values.interest,
				preferred_time: values.window,
				note: values.note || void 0
			} });
			if (result.success) setSent(values);
			else setSubmitError(result.message);
		}),
		noValidate: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-5 sm:grid-cols-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Name",
					error: errors.name?.message,
					htmlFor: "name",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: "name",
						className: "field",
						autoComplete: "name",
						...register("name")
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Email",
					error: errors.email?.message,
					htmlFor: "email",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: "email",
						className: "field",
						autoComplete: "email",
						inputMode: "email",
						...register("email")
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Phone",
					error: errors.phone?.message,
					htmlFor: "phone",
					hint: "Required",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: "phone",
						className: "field",
						autoComplete: "tel",
						inputMode: "tel",
						required: true,
						...register("phone")
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "I’m asking about",
					error: errors.interest?.message,
					htmlFor: "interest",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						id: "interest",
						className: "field",
						...register("interest"),
						children: [interests.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: item.value,
							children: item.label
						}, item.value)), services.map((service) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: service.name,
							children: service.name
						}, service.id))]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "A good window",
					error: errors.window?.message,
					htmlFor: "window",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						id: "window",
						className: "field",
						...register("window"),
						children: windows.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: item.value,
							children: item.label
						}, item.value))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "sm:col-span-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Anything the coach should know",
						error: errors.note?.message,
						htmlFor: "note",
						hint: "Optional",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							id: "note",
							className: "field",
							rows: 4,
							...register("note")
						})
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "We reply within one business day. We don’t add you to a list."
			}), submitError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-brass",
				role: "alert",
				children: submitError
			}) : null] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "submit",
				variant: "brass",
				disabled: isSubmitting,
				children: isSubmitting ? "Sending…" : "Send to the desk"
			})]
		})]
	});
}
function Field({ label, htmlFor, error, hint, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-2 flex items-baseline justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				htmlFor,
				className: "text-sm font-medium",
				children: label
			}), hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xs text-muted",
				children: hint
			}) : null]
		}),
		children,
		error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-sm text-brass",
			role: "alert",
			children: error
		}) : null
	] });
}
var trial = [
	"Forty-five minutes with a coach, not a tour guide.",
	"A short look at how you move, then one piece of real work.",
	"A walk of the floor, the lane, and the suite.",
	"A straight answer on which plan fits the hours you have."
];
function VisitPage() {
	const { gym } = useSiteConfig();
	const city = [
		gym.city,
		gym.state,
		gym.postal_code,
		gym.country
	].filter(Boolean).join(", ");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pt-16 md:pt-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "Visit",
			title: "Come in before you join.",
			lede: `Tell ${gym.name} what you want to know. The team will follow up using the contact details you provide.`
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-10 px-5 py-12 md:px-8 md:py-16 lg:grid-cols-[1.15fr_0.85fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VisitForm, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "space-y-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/club/light.jpg",
							alt: "The brighter side of the club, machines in rows and room to move",
							className: "aspect-video w-full object-cover"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border border-line p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-xs font-semibold uppercase tracking-brand text-brass",
								children: "The desk"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 font-display text-3xl font-semibold leading-none",
								children: gym.address || gym.name
							}),
							city ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-muted",
								children: city
							}) : null,
							gym.phone ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "font-medium underline decoration-line underline-offset-4",
									href: `tel:${gym.phone.replace(/[^+\d]/g, "")}`,
									children: gym.phone
								})
							}) : null,
							gym.email ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "font-medium underline decoration-line underline-offset-4",
								href: `mailto:${gym.email}`,
								children: gym.email
							}) }) : null,
							!gym.address && !city && !gym.phone && !gym.email ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm text-muted",
								children: "Add your address and contact details in the admin settings to display them here."
							}) : null
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border border-line p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-xs font-semibold uppercase tracking-brand text-brass",
							children: "A trial includes"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 space-y-3",
							children: trial.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "border-l-2 border-brass pl-4 text-sm leading-relaxed text-ink-soft",
								children: item
							}, item))
						})]
					})
				]
			})]
		})]
	});
}
//#endregion
export { VisitPage as component };
