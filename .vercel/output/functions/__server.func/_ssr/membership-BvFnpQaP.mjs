import { a as AccordionTrigger, g as require_jsx_runtime, i as AccordionItem, n as AccordionContent, r as AccordionHeader, t as Accordion } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as Check, i as ChevronDown } from "../_libs/lucide-react.mjs";
import { c as PageHeader, n as ButtonLink } from "./chrome-Ch5YLfDf.mjs";
import { f as faqs, i as Route$5 } from "./router-Ccus8lty.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/membership-BvFnpQaP.js
var import_jsx_runtime = require_jsx_runtime();
function MembershipPlans({ available, currency, plans }) {
	const formatPrice = (amount) => new Intl.NumberFormat("en-IN", {
		style: "currency",
		currency,
		maximumFractionDigits: 0
	}).format(amount);
	if (!available) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "border border-line bg-bone p-6 text-ink-soft",
		role: "status",
		children: "Membership details are temporarily unavailable. Contact the desk and we’ll help you find the right plan."
	});
	if (plans.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "border border-line bg-bone p-6 text-ink-soft",
		role: "status",
		children: "Membership options are being updated. Contact the desk for current availability."
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-5 md:grid-cols-2 xl:grid-cols-3",
		children: plans.map((plan) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "flex flex-col border border-line bg-bone p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-xs font-semibold uppercase tracking-brand text-brass",
					children: plan.service || "Membership"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-4xl font-semibold leading-none",
					children: plan.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 flex-1 text-sm leading-relaxed text-muted",
					children: plan.description || "Ask the desk for details about this membership."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 font-display text-4xl font-semibold tabular-nums leading-none",
					children: formatPrice(plan.amount)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: plan.days > 0 ? `${plan.days} day${plan.days === 1 ? "" : "s"}` : "Plan duration confirmed by the desk"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-6 flex-1 space-y-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-3 text-sm leading-relaxed",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
							className: "mt-0.5 size-4 shrink-0 text-brass",
							"aria-hidden": true
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Current plan details from the gym" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-3 text-sm leading-relaxed",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
							className: "mt-0.5 size-4 shrink-0 text-brass",
							"aria-hidden": true
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Speak with the desk before joining" })]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ButtonLink, {
					to: "/visit",
					variant: "ink",
					className: "mt-6 w-full",
					children: ["Ask about ", plan.name]
				})
			]
		}, plan.id))
	}) });
}
function MembershipPage() {
	const membership = Route$5.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pt-16 md:pt-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				eyebrow: "Membership",
				title: "Pay for the hours you will use.",
				lede: "Compare the active plans, prices, and durations configured by the club. The desk can answer questions and help you choose before you join."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MembershipPlans, { ...membership })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-t border-line bg-bone-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-[0.7fr_1.3fr] md:px-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-4xl font-semibold leading-none",
						children: "Questions the desk actually gets."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-muted",
						children: "If yours isn’t here, write from the visit page. A person answers."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
						type: "single",
						collapsible: true,
						className: "border-t border-line",
						children: faqs.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
							value: item.q,
							className: "border-b border-line",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionTrigger, {
								className: "group flex min-h-14 w-full items-center justify-between gap-4 py-4 text-left font-display text-xl font-semibold",
								children: [item.q, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
									className: "size-5 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180",
									"aria-hidden": true
								})]
							}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
								className: "pb-5 text-ink-soft",
								children: item.a
							})]
						}, item.q))
					})]
				})
			})
		]
	});
}
//#endregion
export { MembershipPage as component };
