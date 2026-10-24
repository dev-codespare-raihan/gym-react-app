import { g as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { c as PageHeader, i as Eyebrow, r as DeskCta } from "./chrome-Ch5YLfDf.mjs";
import { d as facilities, o as club } from "./router-Ccus8lty.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/club-WqKWkNQi.js
var import_jsx_runtime = require_jsx_runtime();
var rules = [
	"Shoes on the floor. Barefoot only in Restore.",
	"Re-rack what you take. The next class is not your cleaner.",
	"Phones stay off the rack. Music is house, and it is quiet.",
	"If the board says the hour is full, it is full.",
	"The plunge follows the card on the door. Sloan’s order, not yours.",
	"Guests sign in. They don’t wander."
];
function ClubPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pt-16 md:pt-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				eyebrow: "The club",
				title: "A loft that learned to lift.",
				lede: "Halden took a former millinery building on Mercer and kept the bones: tall windows, a long east wall, and enough quiet that you can hear a brace."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 md:grid-cols-2 md:px-8 md:py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/club/detail.jpg",
					alt: "Training floor with machines and open space between stations",
					className: "aspect-video w-full object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "The building" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-4xl font-semibold leading-none",
						children: "Two floors. One standard."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 space-y-4 text-lg leading-relaxed text-ink-soft",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The strength floor and the lane share the lower level. Studios and the recovery suite sit above, with a members’ lounge at the Mercer windows. Eighteen thousand four hundred square feet, counted the ungenerous way." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We opened in 2019 with a cap and kept it. Classes stop at eight, fourteen, or sixteen. The floor during Barbell stops at ten or twelve. That is the whole trick, and we do not apologize for it." })]
					})
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-t border-line bg-bone-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-5 py-16 md:px-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Rooms" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-4xl font-semibold leading-none md:text-5xl",
							children: "What the building holds."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10 grid gap-6 md:grid-cols-2",
							children: facilities.map((room) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "bg-bone",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: room.image,
									alt: "",
									className: "aspect-video w-full object-cover"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-3xl font-semibold leading-none",
										children: room.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-ink-soft",
										children: room.copy
									})]
								})]
							}, room.title))
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-2 md:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "House rules" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-4xl font-semibold leading-none",
						children: "Short, and kept."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 space-y-4",
						children: rules.map((rule) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "border-l-2 border-brass pl-4 text-ink-soft",
							children: rule
						}, rule))
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-char p-8 text-bone",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, {
							light: true,
							children: "Find us"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 font-display text-4xl font-semibold leading-none",
							children: club.street
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-bone/80",
							children: club.city
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-sm text-bone/80",
							children: "Glass door on Mercer, iron stair to the desk. Prince Street station is one block south. The Broadway garage is the one we tell people to use."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
							className: "mt-8 space-y-3 text-sm",
							children: club.hours.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between gap-4 border-b border-bone/15 pb-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: row.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "tabular-nums",
									children: row.value
								})]
							}, row.label))
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeskCta, {})
		]
	});
}
//#endregion
export { ClubPage as component };
