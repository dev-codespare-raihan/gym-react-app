import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { g as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { c as PageHeader, r as DeskCta } from "./chrome-Ch5YLfDf.mjs";
import { s as coaches } from "./router-Ccus8lty.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/coaches-QfTnbMU5.js
var import_jsx_runtime = require_jsx_runtime();
function CoachesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pt-16 md:pt-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				eyebrow: "Coaches",
				title: "Six coaches. They know your name by week two.",
				lede: "No roaming trainers selling sessions between sets. The staff writes the programs, coaches the hours, and stays."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:grid-cols-2 md:px-8 md:py-16 lg:grid-cols-3",
				children: coaches.map((coach) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/coaches/$slug",
					params: { slug: coach.slug },
					className: "group",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "aspect-portrait overflow-hidden bg-bone-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: coach.image,
								alt: `${coach.name}, ${coach.role} at Halden`,
								className: "h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 font-display text-xs font-semibold uppercase tracking-brand text-brass",
							children: coach.focus
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-1 font-display text-3xl font-semibold leading-none",
							children: coach.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: coach.role
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-ink-soft",
							children: coach.short
						})
					]
				}, coach.slug))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeskCta, {})
		]
	});
}
//#endregion
export { CoachesPage as component };
