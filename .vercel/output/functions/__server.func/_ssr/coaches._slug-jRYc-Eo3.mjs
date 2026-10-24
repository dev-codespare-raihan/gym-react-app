import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { g as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { i as Eyebrow, n as ButtonLink, r as DeskCta } from "./chrome-Ch5YLfDf.mjs";
import { c as dayNames, h as getProgram, m as getCoach, p as formatTime, r as Route$1, v as sessions } from "./router-Ccus8lty.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/coaches._slug-jRYc-Eo3.js
var import_jsx_runtime = require_jsx_runtime();
function CoachPage() {
	const { slug } = Route$1.useParams();
	const coach = getCoach(slug);
	if (!coach) return null;
	const book = sessions.filter((session) => session.coach === coach.slug);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "pt-16 md:pt-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-[0.8fr_1.2fr] md:px-8 md:py-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "aspect-portrait overflow-hidden bg-bone-2 md:sticky md:top-24 md:self-start",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: coach.image,
						alt: `${coach.name} coaching at Halden`,
						className: "h-full w-full object-cover object-top"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Eyebrow, { children: [
						coach.focus,
						" · ",
						coach.years,
						" years"
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 font-display text-5xl font-semibold leading-none md:text-7xl",
						children: coach.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 font-display text-xl text-muted",
						children: coach.role
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 space-y-4 text-lg leading-relaxed text-ink-soft",
						children: coach.bio.map((paragraph) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: paragraph }, paragraph))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 border-l-2 border-brass pl-4 text-lg leading-relaxed",
						children: coach.approach
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-8 flex flex-wrap gap-2",
						children: coach.credentials.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "border border-line px-3 py-2 text-sm",
							children: item
						}, item))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-col gap-3 sm:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
							to: "/schedule",
							variant: "brass",
							children: "Their hours"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
							to: "/visit",
							variant: "outline",
							children: "Ask for a trial"
						})]
					})
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-t border-line bg-bone-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-5 py-14 md:px-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl font-semibold leading-none",
						children: "On the book this week"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 divide-y divide-line border-y border-line",
						children: book.map((session) => {
							const program = getProgram(session.program);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "grid gap-2 py-4 sm:grid-cols-[8rem_7rem_1fr] sm:items-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm font-medium",
										children: dayNames[session.day]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display text-lg font-semibold tabular-nums",
										children: formatTime(session.time)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [program ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/programs/$slug",
										params: { slug: program.slug },
										className: "font-medium hover:text-brass",
										children: program.name
									}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-muted",
										children: [" · ", session.room]
									})] })
								]
							}, session.id);
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeskCta, {})
		]
	});
}
//#endregion
export { CoachPage as component };
