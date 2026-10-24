import { i as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/@hookform/resolvers+[...].mjs";
import { b as Link, p as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { g as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as TSS_SERVER_FUNCTION, r as getServerFnById, t as createServerFn } from "./ssr.mjs";
import { a as object, o as string } from "../_libs/zod.mjs";
import { r as Menu, t as X } from "../_libs/lucide-react.mjs";
import { a as DialogOverlay, c as DialogTrigger, n as DialogClose, o as DialogPortal, r as DialogContent, s as DialogTitle, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/chrome-Ch5YLfDf.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var publicEnquirySchema = object({
	name: string().trim().min(2).max(255),
	email: string().trim().email().max(255),
	contact: string().trim().min(1, "Enter your phone number.").max(20).refine((value) => value.replace(/\D/g, "").length >= 7, "Enter a valid phone number."),
	interest: string().trim().min(2).max(100),
	preferred_time: string().trim().max(50).optional(),
	note: string().trim().max(255).optional()
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
var getPublicSiteConfig = createServerFn({ method: "GET" }).handler(createSsrRpc("888628bf31cc03a431c0336b56b8ff87fc9d6491a0dcbb8d78adea906e4f375c"));
var getPublicMembershipPlans = createServerFn({ method: "GET" }).handler(createSsrRpc("b6814a1b739bde8f42a631325b7f63f76da45fdf867216d260f04602b0f7e514"));
var submitPublicEnquiry = createServerFn({ method: "POST" }).validator(publicEnquirySchema).handler(createSsrRpc("c4f8a8b215d63043e613f543c3992554f62eaa935c7d0c67b93359841bf97d8e"));
var SiteConfigContext = (0, import_react.createContext)(defaultSiteConfig);
function SiteConfigProvider({ config, children }) {
	(0, import_react.useEffect)(() => {
		document.title = document.title.replace(/\bHalden Athletic Club\b|\bHalden\b/g, config.gym.name);
		const description = document.querySelector("meta[name=\"description\"]");
		if (description) {
			const city = [config.gym.city, config.gym.state].filter(Boolean).join(", ");
			description.content = description.content.replace(/\bHalden Athletic Club\b|\bHalden\b/g, config.gym.name).replaceAll("Tribeca", city || config.gym.name).replaceAll("418 Mercer Street", config.gym.address || config.gym.name);
		}
	}, [
		config.gym.address,
		config.gym.city,
		config.gym.name,
		config.gym.state
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteConfigContext.Provider, {
		value: config,
		children
	});
}
function useSiteConfig() {
	return (0, import_react.useContext)(SiteConfigContext);
}
var nav = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/programs",
		label: "Programs"
	},
	{
		to: "/schedule",
		label: "Schedule"
	},
	{
		to: "/coaches",
		label: "Coaches"
	},
	{
		to: "/membership",
		label: "Membership"
	},
	{
		to: "/club",
		label: "The Club"
	}
];
var variantClass = {
	brass: "bg-brass text-bone hover:bg-brass-hot",
	ink: "bg-ink text-bone hover:bg-ink-soft",
	outline: "border border-ink bg-transparent text-ink hover:bg-ink hover:text-bone",
	outlineLight: "border border-bone/40 bg-transparent text-bone hover:bg-bone hover:text-ink",
	ghost: "bg-transparent text-ink hover:bg-bone-2"
};
var buttonClass = "btn inline-flex min-h-12 items-center justify-center gap-2 px-5 text-center font-display text-sm font-semibold uppercase tracking-brand disabled:pointer-events-none disabled:opacity-50";
function Button({ variant = "brass", className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		className: cn(buttonClass, variantClass[variant], className),
		...props
	});
}
function ButtonLink({ variant = "brass", className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		className: cn(buttonClass, variantClass[variant], className),
		...props
	});
}
function Eyebrow({ children, light = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: cn("font-display text-xs font-semibold uppercase tracking-brand", light ? "text-brass-bright" : "text-brass"),
		children
	});
}
function Wordmark({ light = false }) {
	const { gym } = useSiteConfig();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/",
		className: cn("inline-flex min-w-0 items-center gap-3", light ? "text-bone" : "text-ink"),
		children: [gym.logo_url ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: gym.logo_url,
			alt: gym.name,
			className: "max-h-11 max-w-40 object-contain"
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "size-2 shrink-0 bg-brass",
			"aria-hidden": true
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "max-w-48 truncate font-display text-lg font-bold tracking-tight",
			children: gym.name
		})]
	});
}
function isCurrent(path, to) {
	return path === to || path.startsWith(`${to}/`);
}
function Header() {
	const path = useRouterState({ select: (state) => state.location.pathname });
	const overlay = path === "/";
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	const solid = !overlay || scrolled;
	const light = !solid;
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 12);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		setOpen(false);
	}, [path]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: cn("fixed inset-x-0 top-0 z-40 transition-colors duration-200", solid ? "border-b border-line bg-bone text-ink" : "bg-transparent text-bone"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 md:h-20 md:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wordmark, { light }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-7 lg:flex",
					"aria-label": "Primary",
					children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						className: cn("font-display text-sm font-semibold uppercase tracking-brand", isCurrent(path, item.to) ? light ? "text-brass-bright" : "text-brass" : ""),
						"aria-current": isCurrent(path, item.to) ? "page" : void 0,
						children: item.label
					}, item.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
						to: "/visit",
						variant: "brass",
						className: "hidden sm:inline-flex",
						children: "Book a trial"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, {
						open,
						onOpenChange: setOpen,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: cn("btn inline-flex size-11 items-center justify-center lg:hidden", light ? "text-bone" : "text-ink"),
								"aria-label": "Open menu",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-6" })
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, { className: "fixed inset-0 z-50 bg-ink/40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
							className: "fixed inset-0 z-50 flex flex-col bg-bone p-5 text-ink",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
									className: "sr-only",
									children: "Menu"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wordmark, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose, {
										className: "btn inline-flex size-11 items-center justify-center",
										"aria-label": "Close menu",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-6" })
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
									className: "mt-8 flex flex-col",
									"aria-label": "Mobile",
									children: [nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: item.to,
										className: "border-b border-line py-4 font-display text-4xl font-semibold leading-none",
										"aria-current": isCurrent(path, item.to) ? "page" : void 0,
										children: item.label
									}, item.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/visit",
										className: "border-b border-line py-4 font-display text-4xl font-semibold leading-none",
										children: "Visit"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-auto pt-8",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
										to: "/visit",
										variant: "brass",
										className: "w-full",
										children: "Book a trial"
									})
								})
							]
						})] })]
					})]
				})
			]
		})
	});
}
function Footer() {
	const { gym, services } = useSiteConfig();
	const address = [gym.address, [
		gym.city,
		gym.state,
		gym.postal_code,
		gym.country
	].filter(Boolean).join(", ")].filter(Boolean);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-line bg-char text-bone",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-12 md:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-2xl font-bold tracking-tight",
						children: gym.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 max-w-xs text-sm leading-relaxed text-bone/75",
						children: [
							"Membership, coaching, and fitness services from ",
							gym.name,
							"."
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-xs font-semibold uppercase tracking-brand text-brass-bright",
						children: "Visit"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("address", {
						className: "mt-4 space-y-2 text-sm not-italic leading-relaxed text-bone/85",
						children: [
							address.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: line }, line)),
							gym.phone ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "pt-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "underline decoration-bone/30 underline-offset-4",
									href: `tel:${gym.phone.replace(/[^+\d]/g, "")}`,
									children: gym.phone
								})
							}) : null,
							gym.email ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "underline decoration-bone/30 underline-offset-4",
								href: `mailto:${gym.email}`,
								children: gym.email
							}) }) : null
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-xs font-semibold uppercase tracking-brand text-brass-bright",
						children: "Our services"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-2 text-sm text-bone/85",
						children: services.map((service) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: service.name }, service.id))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "md:col-span-3",
					"aria-label": "Footer",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-xs font-semibold uppercase tracking-brand text-brass-bright",
						children: "The house"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-4 space-y-2 text-sm",
						children: [nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							className: "text-bone/85 hover:text-bone",
							children: item.label
						}) }, item.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/visit",
							className: "text-bone/85 hover:text-bone",
							children: "Book a trial"
						}) })]
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-bone/10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-bone/55 sm:flex-row sm:items-center sm:justify-between md:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© 2026 ",
					gym.name,
					". All rights reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Developed and maintained by Codespare Technologies." })]
			})
		})]
	});
}
function PageHeader({ eyebrow, title, lede }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "border-b border-line",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: eyebrow }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 max-w-4xl font-display text-5xl font-semibold leading-none text-ink md:text-7xl",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-2xl text-lg leading-relaxed text-muted",
					children: lede
				})
			]
		})
	});
}
function DeskCta() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-char text-bone",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl items-end gap-8 px-5 py-16 md:grid-cols-2 md:px-8 md:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, {
				light: true,
				children: "The desk"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 font-display text-4xl font-semibold leading-none md:text-5xl",
				children: "See the floor before you decide."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-6 md:items-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-md text-lg leading-relaxed text-bone/80",
					children: "A trial is forty-five minutes with a coach. No contract attached, and no one walks you past a rate card on the way out."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
					to: "/visit",
					variant: "brass",
					children: "Book a trial"
				})]
			})]
		})
	});
}
function Missing({ title, body }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl px-5 py-24 md:px-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Not on the book" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-5xl font-semibold leading-none",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-xl text-lg text-muted",
				children: body
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex flex-col gap-3 sm:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
					to: "/",
					variant: "ink",
					children: "Back home"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
					to: "/programs",
					variant: "outline",
					children: "Browse programs"
				})]
			})
		]
	});
}
//#endregion
export { Footer as a, PageHeader as c, defaultSiteConfig as d, getPublicMembershipPlans as f, useSiteConfig as h, Eyebrow as i, SiteConfigProvider as l, submitPublicEnquiry as m, ButtonLink as n, Header as o, getPublicSiteConfig as p, DeskCta as r, Missing as s, Button as t, cn as u };
