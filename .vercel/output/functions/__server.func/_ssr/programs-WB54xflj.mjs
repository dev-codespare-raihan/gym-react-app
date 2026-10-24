import { i as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/@hookform/resolvers+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { g as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { c as PageHeader, r as DeskCta, u as cn } from "./chrome-Ch5YLfDf.mjs";
import { _ as programs, u as disciplines } from "./router-Ccus8lty.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/programs-WB54xflj.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProgramsPage() {
	const [filter, setFilter] = (0, import_react.useState)("All");
	const list = (0, import_react.useMemo)(() => filter === "All" ? programs : programs.filter((program) => program.discipline === filter), [filter]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pt-16 md:pt-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				eyebrow: "Programs",
				title: "Train the thing you came for.",
				lede: "Six programs. Each one has a coach, a block, and a cap. Pick the room that matches the week you actually have."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2",
					role: "radiogroup",
					"aria-label": "Filter programs",
					children: ["All", ...disciplines].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						role: "radio",
						"aria-checked": filter === item,
						onClick: () => setFilter(item),
						className: cn("btn min-h-11 px-3 font-display text-xs font-semibold uppercase tracking-brand", filter === item ? "bg-ink text-bone" : "border border-line text-ink"),
						children: item
					}, item))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-6 md:grid-cols-2",
					children: list.map((program) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/programs/$slug",
						params: { slug: program.slug },
						className: "group grid overflow-hidden border border-line bg-bone sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "aspect-video overflow-hidden sm:aspect-auto sm:min-h-64",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: program.image,
								alt: "",
								className: "h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col p-5 md:p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-xs font-semibold uppercase tracking-brand text-brass",
									children: program.discipline
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-2 font-display text-4xl font-semibold leading-none",
									children: program.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 flex-1 text-sm leading-relaxed text-muted",
									children: program.summary
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-4 text-sm",
									children: [program.level, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-muted",
										children: [" · ", program.length]
									})]
								})
							]
						})]
					}, program.slug))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeskCta, {})
		]
	});
}
//#endregion
export { ProgramsPage as component };
