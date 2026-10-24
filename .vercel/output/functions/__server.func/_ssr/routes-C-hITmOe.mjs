import { i as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/@hookform/resolvers+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { g as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { h as useSiteConfig, i as Eyebrow, n as ButtonLink, u as cn } from "./chrome-Ch5YLfDf.mjs";
import { _ as programs, a as Route$8, c as dayNames, g as notes, h as getProgram, l as days, m as getCoach, p as formatTime, s as coaches, v as sessions } from "./router-Ccus8lty.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-C-hITmOe.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function HomePage({ membership }) {
	const { gym, services } = useSiteConfig();
	const [day, setDay] = (0, import_react.useState)("Mon");
	const preview = sessions.filter((item) => item.day === day).slice(0, 4);
	const stats = [
		{
			value: String(membership.plans.length),
			label: "Membership plans"
		},
		{
			value: String(services.length),
			label: "Fitness services"
		},
		{
			value: membership.currency,
			label: "Currency"
		},
		{
			value: gym.country || "Local",
			label: "Gym location"
		}
	];
	const formatPrice = (amount) => new Intl.NumberFormat("en-IN", {
		style: "currency",
		currency: membership.currency,
		maximumFractionDigits: 0
	}).format(amount);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative min-h-svh bg-char text-bone",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/club/hero.jpg",
					alt: `Training floor at ${gym.name}`,
					className: "absolute inset-0 h-full w-full object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-char/40" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-char via-char/55 to-char/20" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto flex min-h-svh max-w-7xl flex-col justify-end px-5 pt-28 pb-10 md:px-8 md:pb-14",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, {
							light: true,
							children: [gym.city, gym.state].filter(Boolean).join(" · ") || "Fitness for every goal"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-4 max-w-4xl font-display text-6xl font-semibold leading-none sm:text-7xl lg:text-8xl",
							children: [
								"Train with",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"intention."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-5 max-w-xl text-lg leading-relaxed text-bone/90",
							children: [
								"Explore membership plans and fitness services at ",
								gym.name,
								"."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-col gap-3 sm:flex-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
								to: "/visit",
								variant: "brass",
								className: "w-full sm:w-auto",
								children: "Book a trial"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
								to: "/programs",
								variant: "outlineLight",
								className: "w-full sm:w-auto",
								children: "View programs"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
							className: "mt-10 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-bone/20 pt-6 sm:grid-cols-4",
							children: stats.map((stat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "font-display text-3xl font-semibold tabular-nums leading-none",
								children: stat.value
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "mt-2 text-xs font-medium uppercase tracking-widest text-bone/70",
								children: stat.label
							})] }, stat.label))
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-bone",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:gap-16 md:px-8 md:py-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/club/floor.jpg",
						alt: "Wide view of the training floor, bars racked and lanes open",
						className: "aspect-video h-auto w-full object-cover md:aspect-portrait"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "01 — The practice" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-4xl font-semibold leading-none md:text-6xl",
						children: "Not a room full of equipment. A room with a plan."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 space-y-4 text-lg leading-relaxed text-ink-soft",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Find a membership and training service that fits your goals, schedule, and experience." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Contact the gym team for current availability, membership options, and help getting started." })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
						to: "/club",
						variant: "outline",
						className: "mt-8",
						children: "Walk the club"
					})
				] })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-line bg-bone-2",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col justify-between gap-6 md:flex-row md:items-end",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "02 — Programs" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 max-w-xl font-display text-4xl font-semibold leading-none md:text-6xl",
						children: "Six ways to train. One standard."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
						to: "/programs",
						variant: "outline",
						children: "All programs"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
					children: programs.map((program) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/programs/$slug",
						params: { slug: program.slug },
						className: "group flex flex-col bg-bone",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "aspect-video overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: program.image,
								alt: "",
								className: "h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-1 flex-col p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-xs font-semibold uppercase tracking-brand text-brass",
									children: program.discipline
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-2 font-display text-3xl font-semibold leading-none",
									children: program.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 flex-1 text-sm leading-relaxed text-muted",
									children: program.summary
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-4 text-sm font-medium",
									children: [program.level, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-muted",
										children: [" · ", program.length]
									})]
								})
							]
						})]
					}, program.slug))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-line bg-bone",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "03 — On the floor" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex flex-col justify-between gap-6 md:flex-row md:items-end",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "max-w-xl font-display text-4xl font-semibold leading-none md:text-6xl",
							children: [
								"A sample ",
								dayNames[day].toLowerCase(),
								" schedule at ",
								gym.name,
								"."
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex gap-2 overflow-x-auto",
							role: "tablist",
							"aria-label": "Preview a day",
							children: days.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								role: "tab",
								"aria-selected": day === item,
								onClick: () => setDay(item),
								className: cn("btn min-h-11 shrink-0 px-3 font-display text-sm font-semibold uppercase tracking-brand", day === item ? "bg-ink text-bone" : "bg-bone-2 text-ink"),
								children: item
							}, item))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-8 divide-y divide-line border-y border-line",
						children: preview.map((session) => {
							const program = getProgram(session.program);
							const coach = getCoach(session.coach);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "grid gap-2 py-5 sm:grid-cols-[7rem_1fr_auto] sm:items-center sm:gap-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-display text-lg font-semibold tabular-nums",
										children: formatTime(session.time)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-display text-2xl font-semibold leading-none",
										children: program?.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-1 text-sm text-muted",
										children: [
											coach?.name,
											" · ",
											session.room,
											" · ",
											session.minutes,
											" min"
										]
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-sm text-muted",
										children: [session.spots, " places"]
									})
								]
							}, session.id);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
						to: "/schedule",
						variant: "outline",
						className: "mt-8",
						children: "Full schedule"
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-line bg-char text-bone",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col justify-between gap-6 md:flex-row md:items-end",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, {
						light: true,
						children: "04 — Coaches"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-4xl font-semibold leading-none md:text-6xl",
						children: "The people who write the week."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
						to: "/coaches",
						variant: "outlineLight",
						children: "Meet the staff"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
					children: coaches.map((coach) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/coaches/$slug",
						params: { slug: coach.slug },
						className: "group",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "aspect-portrait overflow-hidden bg-char-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: coach.image,
									alt: "",
									className: "h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 font-display text-xs font-semibold uppercase tracking-brand text-brass-bright",
								children: coach.role
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-1 font-display text-3xl font-semibold leading-none",
								children: coach.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-bone/75",
								children: coach.short
							})
						]
					}, coach.slug))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-line bg-bone",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "05 — Membership" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 max-w-2xl font-display text-4xl font-semibold leading-none md:text-6xl",
						children: "Membership, made clear."
					}),
					membership.available && membership.plans.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid gap-5 lg:grid-cols-3",
						children: membership.plans.slice(0, 3).map((plan) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "flex flex-col border border-line bg-bone p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-xs font-semibold uppercase tracking-brand text-brass",
									children: plan.service || "Membership"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
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
									children: plan.days > 0 ? `${plan.days} day${plan.days === 1 ? "" : "s"}` : "Duration confirmed by the desk"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ButtonLink, {
									to: "/membership",
									variant: "outline",
									className: "mt-6 w-full",
									children: ["See ", plan.name]
								})
							]
						}, plan.id))
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 max-w-2xl border border-line bg-bone p-6 text-ink-soft",
						role: "status",
						children: membership.available ? "Membership options are being updated. Contact the desk for current availability." : "Membership details are temporarily unavailable. Contact the desk and we’ll help you find the right plan."
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-line bg-bone-2",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "06 — From the floor" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-8 lg:grid-cols-3",
					children: notes.map((note) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
						className: "border-t border-ink pt-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
							className: "font-display text-2xl font-medium leading-snug",
							children: [
								"“",
								note.quote,
								"”"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
							className: "mt-5 text-sm text-muted",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium text-ink",
								children: note.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [" · ", note.detail] })]
						})]
					}, note.name))
				})]
			})
		})
	] });
}
function HomeRoute() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomePage, { membership: Route$8.useLoaderData() });
}
//#endregion
export { HomeRoute as component };
