import { i as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/@hookform/resolvers+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { g as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as DialogOverlay, i as DialogDescription, n as DialogClose, o as DialogPortal, r as DialogContent, s as DialogTitle, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { c as PageHeader, m as submitPublicEnquiry, t as Button, u as cn } from "./chrome-Ch5YLfDf.mjs";
import { c as dayNames, h as getProgram, l as days, m as getCoach, p as formatTime, u as disciplines, v as sessions } from "./router-Ccus8lty.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/schedule-U_Pr5AIj.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ScheduleBoard() {
	const [day, setDay] = (0, import_react.useState)("Mon");
	const [filter, setFilter] = (0, import_react.useState)("All");
	const [active, setActive] = (0, import_react.useState)(null);
	const [name, setName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)("");
	const [isSubmitting, setIsSubmitting] = (0, import_react.useState)(false);
	const [requestedSessionId, setRequestedSessionId] = (0, import_react.useState)(null);
	const list = (0, import_react.useMemo)(() => sessions.filter((session) => {
		if (session.day !== day) return false;
		if (filter === "All") return true;
		return getProgram(session.program)?.discipline === filter;
	}), [day, filter]);
	function closeDialog(open) {
		if (!open) {
			setActive(null);
			setError("");
			setEmail("");
			setPhone("");
			setName("");
		}
	}
	async function submitHold(event) {
		event.preventDefault();
		if (!active) return;
		const trimmed = name.trim();
		if (trimmed.length < 2) {
			setError("Enter the name the desk should use.");
			return;
		}
		if (!/^\S+@\S+\.\S+$/.test(email.trim())) {
			setError("Enter a valid email so the desk can confirm the request.");
			return;
		}
		if (phone.trim().length > 20 || phone.replace(/\D/g, "").length < 7) {
			setError("Enter a valid phone number with at least 7 digits.");
			return;
		}
		const program = getProgram(active.program);
		setIsSubmitting(true);
		try {
			const result = await submitPublicEnquiry({ data: {
				name: trimmed,
				email: email.trim(),
				contact: phone.trim(),
				interest: "class",
				note: `${program?.name ?? "Class"} · ${dayNames[active.day]} at ${formatTime(active.time)} · ${activeCoach?.name ?? "Coach"}`
			} });
			if (!result.success) {
				setError(result.message);
				return;
			}
			setRequestedSessionId(active.id);
			setActive(null);
			setEmail("");
			setPhone("");
			setName("");
			setError("");
		} finally {
			setIsSubmitting(false);
		}
	}
	const activeProgram = active ? getProgram(active.program) : void 0;
	const activeCoach = active ? getCoach(active.coach) : void 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "sticky top-16 z-30 border-b border-line bg-bone md:top-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-7xl flex-col gap-4 px-5 py-4 md:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex gap-2 overflow-x-auto",
					role: "tablist",
					"aria-label": "Day",
					children: days.map((item) => {
						const count = sessions.filter((session) => session.day === item).length;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							role: "tab",
							"aria-selected": day === item,
							onClick: () => setDay(item),
							className: cn("btn min-h-11 shrink-0 px-3 font-display text-sm font-semibold uppercase tracking-brand", day === item ? "bg-ink text-bone" : "text-ink hover:bg-bone-2"),
							children: [item, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn("tabular-nums", day === item ? "text-bone/70" : "text-muted"),
								children: count
							})]
						}, item);
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2",
					role: "radiogroup",
					"aria-label": "Discipline",
					children: ["All", ...disciplines].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						role: "radio",
						"aria-checked": filter === item,
						onClick: () => setFilter(item),
						className: cn("btn min-h-11 px-3 font-display text-xs font-semibold uppercase tracking-brand", filter === item ? "bg-brass text-bone" : "border border-line text-ink"),
						children: item
					}, item))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 py-8 md:px-8 md:py-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted",
				children: [
					dayNames[day],
					" · ",
					list.length,
					" ",
					list.length === 1 ? "class" : "classes",
					filter !== "All" ? ` · ${filter}` : ""
				]
			}), list.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8 max-w-md text-lg",
				children: "Nothing on the book for that mix. Try another day, or clear the discipline."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 divide-y divide-line border-y border-line",
				children: list.map((session) => {
					const program = getProgram(session.program);
					const coach = getCoach(session.coach);
					if (!program || !coach) return null;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "grid gap-4 py-5 lg:grid-cols-[6.5rem_1.4fr_1fr_0.8fr_auto] lg:items-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-xl font-semibold tabular-nums",
								children: formatTime(session.time)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/programs/$slug",
								params: { slug: program.slug },
								className: "font-display text-2xl font-semibold leading-none hover:text-brass",
								children: program.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs font-semibold uppercase tracking-brand text-brass",
								children: program.discipline
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/coaches/$slug",
									params: { slug: coach.slug },
									className: "font-medium hover:text-brass",
									children: coach.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted",
									children: session.room
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm tabular-nums text-muted",
								children: [
									session.minutes,
									" min · ",
									session.spots,
									" places"
								]
							}),
							requestedSessionId === session.id ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "button",
								variant: "outline",
								disabled: true,
								children: "Request sent"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "button",
								variant: "ink",
								onClick: () => {
									setActive(session);
									setError("");
								},
								"aria-label": `Ask about ${program.name} on ${dayNames[session.day]} at ${formatTime(session.time)}`,
								children: "Ask the desk"
							})
						]
					}, session.id);
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
			open: Boolean(active),
			onOpenChange: closeDialog,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fixed inset-0 z-50 flex items-center justify-center p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, { className: "absolute inset-0 bg-ink/60" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "relative w-full max-w-md border border-line bg-bone p-6 text-ink",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
							className: "font-display text-3xl font-semibold leading-none",
							children: "Ask about a place"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, {
							className: "mt-3 text-sm leading-relaxed text-muted",
							children: [
								activeProgram?.name,
								" · ",
								active ? dayNames[active.day] : "",
								" · ",
								active ? formatTime(active.time) : "",
								activeCoach ? ` · ${activeCoach.name}` : "",
								" · ",
								active?.room,
								". The desk will confirm availability by email."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: submitHold,
							className: "mt-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									htmlFor: "hold-name",
									className: "mb-2 block text-sm font-medium",
									children: "Name"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "hold-name",
									className: "field",
									value: name,
									onChange: (event) => setName(event.target.value),
									autoComplete: "name",
									placeholder: "Alex Rivera"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									htmlFor: "hold-email",
									className: "mb-2 mt-4 block text-sm font-medium",
									children: "Email"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "hold-email",
									className: "field",
									type: "email",
									value: email,
									onChange: (event) => setEmail(event.target.value),
									autoComplete: "email",
									placeholder: "alex@example.com",
									required: true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									htmlFor: "hold-phone",
									className: "mb-2 mt-4 block text-sm font-medium",
									children: "Phone"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "hold-phone",
									className: "field",
									type: "tel",
									value: phone,
									onChange: (event) => setPhone(event.target.value),
									autoComplete: "tel",
									inputMode: "tel",
									maxLength: 20,
									placeholder: "+91 98765 43210",
									required: true
								}),
								error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-brass",
									role: "alert",
									children: error
								}) : null,
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 flex flex-col gap-3 sm:flex-row",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										type: "submit",
										variant: "brass",
										className: "flex-1",
										disabled: isSubmitting,
										children: isSubmitting ? "Sending…" : "Send request"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose, {
										className: "btn min-h-12 flex-1 border border-ink px-5 font-display text-sm font-semibold uppercase tracking-brand",
										children: "Cancel"
									})]
								})
							]
						})
					]
				})]
			}) })
		})
	] });
}
function SchedulePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pt-16 md:pt-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "Schedule",
			title: "A sample week on the floor.",
			lede: "Browse an example timetable, then send an enquiry about a class time. The desk will confirm the current schedule and availability."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScheduleBoard, {})]
	});
}
//#endregion
export { SchedulePage as component };
