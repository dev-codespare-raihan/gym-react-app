import { i as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/@hookform/resolvers+[...].mjs";
import { J as notFound, _ as lazyRouteComponent, d as Scripts, f as HeadContent, g as Outlet, h as createRouter, v as createFileRoute, x as useRouter, y as createRootRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { g as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as object, i as number, o as string, r as literal, s as union } from "../_libs/zod.mjs";
import { n as TriangleAlert } from "../_libs/lucide-react.mjs";
import { a as Footer, d as defaultSiteConfig, f as getPublicMembershipPlans, l as SiteConfigProvider, o as Header, p as getPublicSiteConfig, s as Missing } from "./chrome-Ch5YLfDf.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/data-D9sZ1awb.js
var club = {
	name: "Halden Athletic Club",
	short: "Halden",
	street: "418 Mercer Street",
	city: "New York, NY 10013",
	phone: "(212) 555-0148",
	phoneHref: "tel:+12125550148",
	email: "desk@halden.club",
	emailHref: "mailto:desk@halden.club",
	hours: [{
		label: "Monday – Friday",
		value: "5:00 – 23:00"
	}, {
		label: "Saturday – Sunday",
		value: "7:00 – 20:00"
	}]
};
var disciplines = [
	"Strength",
	"Conditioning",
	"Studio",
	"Recovery"
];
var days = [
	"Mon",
	"Tue",
	"Wed",
	"Thu",
	"Fri",
	"Sat",
	"Sun"
];
var dayNames = {
	Mon: "Monday",
	Tue: "Tuesday",
	Wed: "Wednesday",
	Thu: "Thursday",
	Fri: "Friday",
	Sat: "Saturday",
	Sun: "Sunday"
};
var coaches = [
	{
		slug: "mara-ellison",
		name: "Mara Ellison",
		role: "Director of Strength",
		focus: "Strength",
		years: 14,
		image: "/club/coach-mara.jpg",
		short: "Builds barbell cycles that people can actually finish.",
		bio: ["Mara ran college strength rooms before she opened the Halden floor. She still writes every Barbell block herself — squat, pull, press — and she will change the plan if your sleep or your knee says to.", "Members know her for quiet coaching and exact standards. If the bar path is off, the set ends. If the plan is working, she leaves you alone."],
		credentials: [
			"CSCS",
			"USAW L2",
			"Former collegiate strength staff"
		],
		approach: "Load you can repeat. Positions you can own. No max-out theater on a Tuesday."
	},
	{
		slug: "julian-voss",
		name: "Julian Voss",
		role: "Head of Conditioning",
		focus: "Conditioning",
		years: 11,
		image: "/club/coach-julian.jpg",
		short: "Keeps Engine honest: hard, measured, and over before it gets sloppy.",
		bio: ["Julian came up coaching field sport in the off-season, then spent four years writing mixed aerobic work for people who already lift. Engine is his room.", "He times the pieces, posts the intent on the board, and stops a session when form goes. The point is a bigger engine next month, not a ruined Thursday."],
		credentials: [
			"CSCS",
			"Precision Nutrition L2",
			"Former sport performance staff"
		],
		approach: "A clear dose. A clock you can see. Enough rest that the next interval is still the same interval."
	},
	{
		slug: "nia-okonkwo",
		name: "Nia Okonkwo",
		role: "Studio Lead",
		focus: "Studio",
		years: 9,
		image: "/club/coach-nia.jpg",
		short: "Teaches strength shapes with the patience of a practice, not a playlist.",
		bio: ["Nia trained as a dancer and then left choreography behind. Floor is what she built instead: carries, hinges, splits, and long ranges, coached for people who want to feel organized in their body.", "She will not ask you to keep up with a front row. She will ask you to stay with the shape until it is yours."],
		credentials: [
			"NASM CPT",
			"FRC mobility",
			"500 hours of studio instruction"
		],
		approach: "Range first, then load. Breathing you can hear. No routine you have to memorize."
	},
	{
		slug: "elias-cho",
		name: "Elias Cho",
		role: "Barbell Coach",
		focus: "Strength",
		years: 8,
		image: "/club/coach-elias.jpg",
		short: "Runs Density — shorter rest, same standards, no junk volume.",
		bio: ["Elias apprenticed on this floor under Mara. He coaches the midday and early strength sessions, and he writes Density for members who already own the lifts and want more work in less time.", "He is particular about bracing and about the clock. Both are on purpose."],
		credentials: [
			"CSCS",
			"Starting Strength staff alumni",
			"CPR / AED"
		],
		approach: "Own the first rep. Earn the shorter rest. Leave when the work is done, not when you are empty."
	},
	{
		slug: "sloan-adler",
		name: "Sloan Adler",
		role: "Recovery Lead",
		focus: "Recovery",
		years: 12,
		image: "/club/coach-sloan.jpg",
		short: "Holds the quiet room: breath, tissue, and ranges you skip when you are rushing.",
		bio: ["Sloan spent a decade in clinical pilates and breath work before Halden built the recovery suite around her schedule. Restore is not a stretch class you half-attend.", "She also sets the house rules for the plunge and the sauna — times, order, and who should skip a day."],
		credentials: [
			"NASM CES",
			"Pilates comprehensive",
			"Breath coach"
		],
		approach: "Downshift the nervous system, then ask the joint for an honest range. No performance."
	},
	{
		slug: "owen-hart",
		name: "Owen Hart",
		role: "Sprint Coach",
		focus: "Conditioning",
		years: 10,
		image: "/club/coach-owen.jpg",
		short: "Teaches acceleration on a 40-meter lane, eight athletes at a time.",
		bio: ["Owen coached prep sprinters, then got tired of treadmills that face a television. The lane at Halden is his: starts, flys, and the mechanics in between.", "Sprint Lab is capped at eight so he can see every shin angle. If you want a casual jog, this is the wrong hour."],
		credentials: [
			"USATF Level 2",
			"CSCS",
			"Former prep sprint coach"
		],
		approach: "Quality contacts. Full rest. Speed is a skill, and skills get sloppy when you rush the next rep."
	}
];
var programs = [
	{
		slug: "barbell",
		name: "Barbell",
		discipline: "Strength",
		level: "All levels, coached",
		length: "55–60 min",
		image: "/club/strength.jpg",
		summary: "Squat, pull, and press on a real bar, progressed in twelve-week blocks.",
		outcome: "You leave with numbers you can trust and positions you can repeat without a spotter hovering.",
		suited: [
			"New to the barbell and done guessing from an app",
			"Returning after a layoff and wanting a conservative ramp",
			"Already strong and ready for a written cycle, not a random heavy day"
		],
		session: [
			"One primary lift, worked to a prescribed top set",
			"A secondary pattern — usually the opposite of yesterday",
			"A short accessory that serves the main lift",
			"Notes in the log before you leave the rack"
		],
		block: [
			{
				week: "Weeks 1–4",
				title: "Positions",
				detail: "Groove the setup. Loads stay moderate so the brace and the bar path become boring, in the right way."
			},
			{
				week: "Weeks 5–8",
				title: "Density of practice",
				detail: "More quality sets at the same positions. Rest is timed. The top set moves only when the last one was clean."
			},
			{
				week: "Weeks 9–12",
				title: "Express",
				detail: "A short peak, then a deload. You test a weight you have already earned, not a weight you hope for."
			}
		],
		coach: "mara-ellison"
	},
	{
		slug: "density",
		name: "Density",
		discipline: "Strength",
		level: "Intermediate",
		length: "40–45 min",
		image: "/club/racks.jpg",
		summary: "Strength work for people who already know the lifts and have forty minutes.",
		outcome: "More hard sets inside a lunch hour, without turning the session into a conditioning piece.",
		suited: [
			"You can squat, hinge, and press without a tutorial",
			"Midday is when you can train, and the clock is real",
			"You want strength endurance, not a second max-out"
		],
		session: [
			"Two lifts, paired, with rest you can see on the clock",
			"Loads set off your Barbell numbers, not off ego",
			"A finisher only if the main work was sharp",
			"Out of the rack before the next class needs it"
		],
		block: [
			{
				week: "Weeks 1–3",
				title: "Find the pace",
				detail: "Rest windows are generous. The goal is to hit every set at the same speed."
			},
			{
				week: "Weeks 4–7",
				title: "Tighten",
				detail: "Rest drops by small steps. If a set breaks down, the rest goes back up. The log decides."
			},
			{
				week: "Weeks 8–10",
				title: "Hold",
				detail: "Keep the pace. Add a little load only where every set still matches the first."
			}
		],
		coach: "elias-cho"
	},
	{
		slug: "engine",
		name: "Engine",
		discipline: "Conditioning",
		level: "All levels",
		length: "45–50 min",
		image: "/club/engine.jpg",
		summary: "Mixed aerobic work with a dose written on the board before you start.",
		outcome: "You can do more work at the same effort, and you know what that effort was supposed to be.",
		suited: [
			"Lifters who neglect easy and moderate conditioning",
			"Anyone whose hard days all feel the same kind of hard",
			"Members who want a class, not a free-for-all"
		],
		session: [
			"A posted intent: easy, moderate, or hard — never a surprise",
			"Row, ski, carry, or lane-adjacent runs, rotated so tissues survive",
			"Intervals with rest long enough to repeat the pace",
			"A cool-down that is actually a cool-down"
		],
		block: [
			{
				week: "Weeks 1–4",
				title: "Base",
				detail: "Most pieces are moderate. You learn the machines and the effort scale we actually use."
			},
			{
				week: "Weeks 5–8",
				title: "Repeat",
				detail: "The same formats return so you can see the pace move, not just feel busy."
			},
			{
				week: "Weeks 9–12",
				title: "Spice, then settle",
				detail: "Two harder weeks, then a quieter one. Engine is a season, not a dare."
			}
		],
		coach: "julian-voss"
	},
	{
		slug: "sprint-lab",
		name: "Sprint Lab",
		discipline: "Conditioning",
		level: "Intermediate",
		length: "40 min",
		image: "/club/sprint.jpg",
		summary: "Acceleration on the 40-meter lane. Eight athletes. Full rest.",
		outcome: "Cleaner starts and faster contacts, without turning speed day into a conditioning grind.",
		suited: [
			"You can absorb a sprint without a current injury nagging the hamstring",
			"You want mechanics, not a leaderboard",
			"You are willing to wait the full rest even when you feel ready"
		],
		session: [
			"Prep that is specific: ankle, hip, and two build-up runs",
			"A small number of timed or marked reps",
			"Coaching on the shin, the arm, and the first ten meters",
			"Done when the reps are done — no extra 'one more'"
		],
		block: [
			{
				week: "Weeks 1–3",
				title: "Contacts",
				detail: "Short accelerations. The win is a repeatable setup, not a personal record."
			},
			{
				week: "Weeks 4–6",
				title: "Lengthen",
				detail: "Reps grow slightly. Rest stays honest. We film a start if it will teach you something."
			},
			{
				week: "Weeks 7–8",
				title: "Fresh",
				detail: "Volume comes down. The reps you keep should be the best of the block."
			}
		],
		coach: "owen-hart"
	},
	{
		slug: "floor",
		name: "Floor",
		discipline: "Studio",
		level: "All levels",
		length: "50 min",
		image: "/club/studio.jpg",
		summary: "Strength shapes, carries, and long ranges. Athletic, not choreographed.",
		outcome: "You move with more options — hips, shoulders, and a trunk that can organize under load.",
		suited: [
			"Lifters who feel strong and also stiff",
			"Anyone who wants a studio hour without a dance count",
			"Members using Floor as the second session of the week"
		],
		session: [
			"A slow opening that tells you what the hour is for",
			"Shapes held long enough to matter, then loaded simply",
			"Carries or splits that ask for a quiet trunk",
			"A finish you could repeat at home in six minutes"
		],
		block: [
			{
				week: "Month 1",
				title: "Own the shape",
				detail: "Ranges are explored, not forced. Load is a dowel, a bell, or nothing."
			},
			{
				week: "Month 2",
				title: "Add a demand",
				detail: "The same shapes return with a slower tempo or a slightly heavier bell."
			},
			{
				week: "Month 3",
				title: "Combine",
				detail: "Sequences get longer. You should still be able to explain what each part is for."
			}
		],
		coach: "nia-okonkwo"
	},
	{
		slug: "restore",
		name: "Restore",
		discipline: "Recovery",
		level: "All levels",
		length: "45–50 min",
		image: "/club/restore.jpg",
		summary: "Breath, tissue, and the ranges you skip when the week gets loud.",
		outcome: "You leave downshifted, with one or two ranges that actually changed, not a vague sense of having stretched.",
		suited: [
			"The day after a heavy lower session",
			"Members who train a lot and recover on accident",
			"Anyone Sloan has asked to skip the plunge and come here first"
		],
		session: [
			"Breathing you can measure — longer exhales, quieter effort",
			"Supported positions before anything active",
			"A small menu of ranges chosen for the week’s lifting",
			"A clear end. Restore does not run long to feel valuable"
		],
		block: [
			{
				week: "Any week",
				title: "Match the floor",
				detail: "Sloan reads what Barbell and Sprint loaded and biases the hour toward those tissues."
			},
			{
				week: "Heavy blocks",
				title: "Less, better",
				detail: "When the strength cycle peaks, Restore gets simpler, not more ambitious."
			},
			{
				week: "Deload",
				title: "Open the range",
				detail: "This is when we ask for a little more motion, because the load has stepped back."
			}
		],
		coach: "sloan-adler"
	}
];
var book = {
	Mon: [
		{
			time: "06:00",
			program: "barbell",
			coach: "mara-ellison",
			room: "Strength floor",
			minutes: 60,
			spots: 10
		},
		{
			time: "07:15",
			program: "engine",
			coach: "julian-voss",
			room: "Studio North",
			minutes: 45,
			spots: 16
		},
		{
			time: "09:30",
			program: "restore",
			coach: "sloan-adler",
			room: "Recovery suite",
			minutes: 50,
			spots: 10
		},
		{
			time: "12:10",
			program: "density",
			coach: "elias-cho",
			room: "Strength floor",
			minutes: 40,
			spots: 12
		},
		{
			time: "17:30",
			program: "engine",
			coach: "julian-voss",
			room: "Studio North",
			minutes: 45,
			spots: 16
		},
		{
			time: "18:40",
			program: "barbell",
			coach: "mara-ellison",
			room: "Strength floor",
			minutes: 60,
			spots: 10
		},
		{
			time: "19:45",
			program: "floor",
			coach: "nia-okonkwo",
			room: "Studio South",
			minutes: 50,
			spots: 14
		}
	],
	Tue: [
		{
			time: "06:00",
			program: "engine",
			coach: "julian-voss",
			room: "Studio North",
			minutes: 45,
			spots: 16
		},
		{
			time: "07:00",
			program: "sprint-lab",
			coach: "owen-hart",
			room: "Sprint lane",
			minutes: 40,
			spots: 8
		},
		{
			time: "09:30",
			program: "floor",
			coach: "nia-okonkwo",
			room: "Studio South",
			minutes: 50,
			spots: 14
		},
		{
			time: "12:10",
			program: "restore",
			coach: "sloan-adler",
			room: "Recovery suite",
			minutes: 45,
			spots: 10
		},
		{
			time: "17:15",
			program: "density",
			coach: "elias-cho",
			room: "Strength floor",
			minutes: 45,
			spots: 12
		},
		{
			time: "18:30",
			program: "sprint-lab",
			coach: "owen-hart",
			room: "Sprint lane",
			minutes: 40,
			spots: 8
		},
		{
			time: "19:30",
			program: "barbell",
			coach: "mara-ellison",
			room: "Strength floor",
			minutes: 60,
			spots: 10
		}
	],
	Wed: [
		{
			time: "06:00",
			program: "barbell",
			coach: "elias-cho",
			room: "Strength floor",
			minutes: 55,
			spots: 10
		},
		{
			time: "07:15",
			program: "floor",
			coach: "nia-okonkwo",
			room: "Studio South",
			minutes: 50,
			spots: 14
		},
		{
			time: "09:30",
			program: "engine",
			coach: "julian-voss",
			room: "Studio North",
			minutes: 45,
			spots: 16
		},
		{
			time: "12:10",
			program: "restore",
			coach: "sloan-adler",
			room: "Recovery suite",
			minutes: 50,
			spots: 10
		},
		{
			time: "17:30",
			program: "barbell",
			coach: "mara-ellison",
			room: "Strength floor",
			minutes: 60,
			spots: 10
		},
		{
			time: "18:45",
			program: "engine",
			coach: "julian-voss",
			room: "Studio North",
			minutes: 50,
			spots: 16
		},
		{
			time: "19:45",
			program: "density",
			coach: "elias-cho",
			room: "Strength floor",
			minutes: 40,
			spots: 12
		}
	],
	Thu: [
		{
			time: "06:00",
			program: "sprint-lab",
			coach: "owen-hart",
			room: "Sprint lane",
			minutes: 40,
			spots: 8
		},
		{
			time: "07:10",
			program: "density",
			coach: "elias-cho",
			room: "Strength floor",
			minutes: 45,
			spots: 12
		},
		{
			time: "09:30",
			program: "restore",
			coach: "sloan-adler",
			room: "Recovery suite",
			minutes: 50,
			spots: 10
		},
		{
			time: "12:10",
			program: "floor",
			coach: "nia-okonkwo",
			room: "Studio South",
			minutes: 45,
			spots: 14
		},
		{
			time: "17:30",
			program: "sprint-lab",
			coach: "owen-hart",
			room: "Sprint lane",
			minutes: 40,
			spots: 8
		},
		{
			time: "18:30",
			program: "barbell",
			coach: "mara-ellison",
			room: "Strength floor",
			minutes: 60,
			spots: 10
		},
		{
			time: "19:45",
			program: "engine",
			coach: "julian-voss",
			room: "Studio North",
			minutes: 45,
			spots: 16
		}
	],
	Fri: [
		{
			time: "06:00",
			program: "engine",
			coach: "julian-voss",
			room: "Studio North",
			minutes: 45,
			spots: 16
		},
		{
			time: "07:00",
			program: "barbell",
			coach: "elias-cho",
			room: "Strength floor",
			minutes: 55,
			spots: 10
		},
		{
			time: "09:30",
			program: "floor",
			coach: "nia-okonkwo",
			room: "Studio South",
			minutes: 50,
			spots: 14
		},
		{
			time: "12:10",
			program: "density",
			coach: "elias-cho",
			room: "Strength floor",
			minutes: 40,
			spots: 12
		},
		{
			time: "17:00",
			program: "restore",
			coach: "sloan-adler",
			room: "Recovery suite",
			minutes: 50,
			spots: 10
		},
		{
			time: "18:00",
			program: "sprint-lab",
			coach: "owen-hart",
			room: "Sprint lane",
			minutes: 40,
			spots: 8
		}
	],
	Sat: [
		{
			time: "08:00",
			program: "barbell",
			coach: "mara-ellison",
			room: "Strength floor",
			minutes: 60,
			spots: 12
		},
		{
			time: "09:15",
			program: "engine",
			coach: "julian-voss",
			room: "Studio North",
			minutes: 50,
			spots: 16
		},
		{
			time: "10:30",
			program: "floor",
			coach: "nia-okonkwo",
			room: "Studio South",
			minutes: 50,
			spots: 14
		},
		{
			time: "12:00",
			program: "restore",
			coach: "sloan-adler",
			room: "Recovery suite",
			minutes: 50,
			spots: 12
		}
	],
	Sun: [
		{
			time: "08:30",
			program: "sprint-lab",
			coach: "owen-hart",
			room: "Sprint lane",
			minutes: 45,
			spots: 8
		},
		{
			time: "09:30",
			program: "density",
			coach: "elias-cho",
			room: "Strength floor",
			minutes: 50,
			spots: 12
		},
		{
			time: "11:00",
			program: "floor",
			coach: "nia-okonkwo",
			room: "Studio South",
			minutes: 55,
			spots: 14
		},
		{
			time: "16:00",
			program: "restore",
			coach: "sloan-adler",
			room: "Recovery suite",
			minutes: 50,
			spots: 10
		}
	]
};
var sessions = days.flatMap((day) => book[day].map((item) => ({
	...item,
	day,
	id: `${day}-${item.time}-${item.program}`
})));
var faqs = [
	{
		q: "What does the plan price cover?",
		a: "The plan page shows the price and duration entered by the club. Ask the desk which facilities and services are included before you join."
	},
	{
		q: "Can I visit before joining?",
		a: "Yes. Send a visit request and the club team will follow up to arrange a time."
	},
	{
		q: "How do I choose a plan?",
		a: "Compare the active plans and durations, then contact the desk with questions about access, classes, or services."
	},
	{
		q: "Can I request a class time?",
		a: "Use the schedule to send the club a request. A team member will confirm availability; the request itself does not reserve a place."
	},
	{
		q: "Can I ask about private coaching?",
		a: "Choose private coaching in the visit form and the desk will share the current options."
	},
	{
		q: "Who can answer questions about a plan?",
		a: "The club desk can explain the current plan terms and help you decide which one fits."
	}
];
var notes = [
	{
		quote: "I stopped collecting programs. Mara wrote twelve weeks and I just showed up.",
		name: "Priya N.",
		detail: "Resident, SoHo"
	},
	{
		quote: "The lane is why I stayed. Forty meters, and nobody walking across your rep.",
		name: "Andre K.",
		detail: "Atelier, Jersey City"
	},
	{
		quote: "Restore after heavy lower days is the difference between training and grinding.",
		name: "Helen V.",
		detail: "Resident, Tribeca"
	}
];
var facilities = [
	{
		title: "Strength floor",
		copy: "Calibrated bars, bumper plates, and enough racks that a class of ten is not a queue.",
		image: "/club/floor.jpg"
	},
	{
		title: "Sprint lane",
		copy: "Forty meters, indoor, marked. Sprint Lab lives here. So do build-up runs before a heavy day.",
		image: "/club/sprint.jpg"
	},
	{
		title: "Two studios",
		copy: "North runs Engine. South runs Floor. Both are sprung, both are capped, neither has a mirror wall for company.",
		image: "/club/studio.jpg"
	},
	{
		title: "Recovery suite",
		copy: "An 8° plunge, an 80° sauna, compression, and Sloan’s hour. Order matters. The card on the door says so.",
		image: "/club/restore.jpg"
	}
];
function getProgram(slug) {
	return programs.find((item) => item.slug === slug);
}
function getCoach(slug) {
	return coaches.find((item) => item.slug === slug);
}
function formatTime(value) {
	const [hourPart, minutePart] = value.split(":");
	const hour = Number(hourPart);
	const suffix = hour >= 12 ? "PM" : "AM";
	return `${hour % 12 || 12}:${minutePart} ${suffix}`;
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/site-seo-D69xGb3y.js
function publicSiteFromMatches(matches) {
	const rootLoaderData = matches.find((match) => match.routeId === "__root__")?.loaderData;
	if (typeof rootLoaderData !== "object" || rootLoaderData === null || !("gym" in rootLoaderData)) return defaultSiteConfig;
	return rootLoaderData;
}
function publicSeoMeta(matches, pageTitle, description) {
	const { gym } = publicSiteFromMatches(matches);
	const location = [
		gym.city,
		gym.state,
		gym.country
	].filter(Boolean).join(", ");
	return [{ title: `${pageTitle} | ${gym.name}` }, {
		name: "description",
		content: `${description.replaceAll(":gym", gym.name).replaceAll(":location", location || "India")} Contact the gym for current availability and enquiries.`
	}];
}
function siteColorVariables(config) {
	return {
		"--color-brass": config.colors.primary,
		"--color-brass-hot": config.colors.accent,
		"--color-brass-bright": config.colors.accent,
		"--color-bone": config.colors.surface,
		"--color-bone-2": `color-mix(in srgb, ${config.colors.surface} 88%, ${config.colors.text})`,
		"--color-ink": config.colors.text,
		"--color-ink-soft": config.colors.text,
		"--color-muted": `color-mix(in srgb, ${config.colors.text} 72%, ${config.colors.surface})`,
		"--color-line": `color-mix(in srgb, ${config.colors.text} 18%, ${config.colors.surface})`,
		"--color-dark": config.colors.dark,
		"--color-char": config.colors.dark,
		"--color-char-2": config.colors.dark
	};
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-Ccus8lty.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: errorMessage(error)
			})
		]
	});
}
/**
* Path-based preview hosts serve the dev server under `/{port_id}/` and strip
* that prefix before forwarding, so SSR sees `/` while the browser URL keeps the
* prefix. TanStack Start resets `basepath` on hydration, so a `rewrite` keeps
* client routing and generated links aligned with the public URL.
*/
var PATH_BASED_PREVIEW_HOSTS = /* @__PURE__ */ new Set([
	"preview.grok.genai.mil",
	"preview.grok.mil",
	"preview.grokgsac.com"
]);
var PORT_ID_PREFIX = /^\/hds-[a-z0-9]+-\d+-[a-z0-9]+(?=\/|$)/i;
function previewPathPrefix(hostname, pathname) {
	if (!PATH_BASED_PREVIEW_HOSTS.has(hostname.toLowerCase())) return void 0;
	return PORT_ID_PREFIX.exec(pathname)?.[0];
}
function prefixRewrite(prefix) {
	return {
		input: ({ url }) => {
			if (url.pathname === prefix) url.pathname = "/";
			else if (url.pathname.startsWith(`${prefix}/`)) url.pathname = url.pathname.slice(prefix.length);
			return url;
		},
		output: ({ url }) => {
			url.pathname = `${prefix}${url.pathname}`;
			return url;
		}
	};
}
function previewPathRewrite() {
	if (typeof window === "undefined") return void 0;
	const prefix = previewPathPrefix(window.location.hostname, window.location.pathname);
	return prefix ? prefixRewrite(prefix) : void 0;
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var styles_default = "/assets/styles-Dk0HhT7I.css";
var Route$9 = createRootRoute({
	loader: () => getPublicSiteConfig(),
	head: ({ loaderData }) => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: loaderData?.gym.name ?? "Gym" },
			{
				name: "description",
				content: `${loaderData?.gym.name ?? "Your Gym"} in ${[
					loaderData?.gym.city,
					loaderData?.gym.state,
					loaderData?.gym.country
				].filter(Boolean).join(", ") || "India"}. Explore fitness services and current membership plans, or contact the gym team.`
			},
			{
				name: "theme-color",
				content: loaderData?.colors.dark ?? "#121110"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@500;600;700&family=Roboto:ital,wght@0,400;0,500;0,700;1,400&display=swap"
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			}
		]
	}),
	component: RootComponent,
	notFoundComponent: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Missing, {
		title: "That page isn’t on the floor.",
		body: "The address doesn’t match a room at Halden. Try the programs, the schedule, or the desk."
	})
});
function RootComponent() {
	const siteConfig = Route$9.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: "bg-bone font-sans text-ink antialiased",
			style: siteColorVariables(siteConfig),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteConfigProvider, {
					config: siteConfig,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#main",
							className: "sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-bone focus:px-4 focus:py-3",
							children: "Skip to content"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
							id: "main",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
					]
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
			]
		})]
	});
}
var $$splitComponentImporter$8 = () => import("./routes-C-hITmOe.mjs");
var Route$8 = createFileRoute("/")({
	loader: () => getPublicMembershipPlans(),
	head: ({ matches }) => ({ meta: publicSeoMeta(matches, "Gym & Fitness", "Explore gym memberships and fitness services at :gym in :location.") }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./club-WqKWkNQi.mjs");
var Route$7 = createFileRoute("/club")({
	head: ({ matches }) => ({ meta: publicSeoMeta(matches, "About the Gym", "Learn about the facilities and fitness experience at :gym in :location.") }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./coaches-QfTnbMU5.mjs");
var Route$6 = createFileRoute("/coaches")({
	head: ({ matches }) => ({ meta: publicSeoMeta(matches, "Fitness Coaches", "Meet the coaching team at :gym in :location.") }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./membership-BvFnpQaP.mjs");
var Route$5 = createFileRoute("/membership")({
	loader: () => getPublicMembershipPlans(),
	head: ({ matches }) => ({ meta: publicSeoMeta(matches, "Gym Membership Plans", "Compare current gym membership prices and plan durations at :gym in :location.") }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./programs-WB54xflj.mjs");
var Route$4 = createFileRoute("/programs")({
	head: ({ matches }) => ({ meta: publicSeoMeta(matches, "Fitness Programs", "Browse fitness and training programs at :gym in :location.") }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./schedule-U_Pr5AIj.mjs");
var Route$3 = createFileRoute("/schedule")({
	head: ({ matches }) => ({ meta: publicSeoMeta(matches, "Sample Gym Schedule", "Browse a sample weekly class schedule at :gym in :location.") }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./visit-QUHClH5z.mjs");
var Route$2 = createFileRoute("/visit")({
	head: ({ matches }) => ({ meta: publicSeoMeta(matches, "Contact the Gym", "Contact :gym about membership, training services, or a visit in :location.") }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitNotFoundComponentImporter$1 = () => import("./coaches._slug-A3NsN_sC.mjs");
var $$splitComponentImporter$1 = () => import("./coaches._slug-jRYc-Eo3.mjs");
var Route$1 = createFileRoute("/coaches/$slug")({
	beforeLoad: ({ params }) => {
		if (!getCoach(params.slug)) throw notFound();
	},
	head: ({ params, matches }) => {
		const coach = getCoach(params.slug);
		return { meta: publicSeoMeta(matches, coach?.name ?? "Fitness Coach", coach?.short ?? "Meet a coach at :gym in :location.") };
	},
	component: lazyRouteComponent($$splitComponentImporter$1, "component"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter$1, "notFoundComponent")
});
var $$splitNotFoundComponentImporter = () => import("./programs._slug-91ihTNXU.mjs");
var $$splitComponentImporter = () => import("./programs._slug-46bhlxeR.mjs");
var Route = createFileRoute("/programs/$slug")({
	beforeLoad: ({ params }) => {
		if (!getProgram(params.slug)) throw notFound();
	},
	head: ({ params, matches }) => {
		const program = getProgram(params.slug);
		return { meta: publicSeoMeta(matches, program?.name ?? "Training Program", program?.summary ?? "Explore a training program at :gym in :location.") };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent")
});
var IndexRoute = Route$8.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$9
});
var ClubRoute = Route$7.update({
	id: "/club",
	path: "/club",
	getParentRoute: () => Route$9
});
var CoachesRoute = Route$6.update({
	id: "/coaches",
	path: "/coaches",
	getParentRoute: () => Route$9
});
var MembershipRoute = Route$5.update({
	id: "/membership",
	path: "/membership",
	getParentRoute: () => Route$9
});
var ProgramsRoute = Route$4.update({
	id: "/programs",
	path: "/programs",
	getParentRoute: () => Route$9
});
var ScheduleRoute = Route$3.update({
	id: "/schedule",
	path: "/schedule",
	getParentRoute: () => Route$9
});
var VisitRoute = Route$2.update({
	id: "/visit",
	path: "/visit",
	getParentRoute: () => Route$9
});
var CoachesSlugRoute = Route$1.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => CoachesRoute
});
var ProgramsSlugRoute = Route.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => ProgramsRoute
});
var CoachesRouteChildren = { CoachesSlugRoute };
var CoachesRouteWithChildren = CoachesRoute._addFileChildren(CoachesRouteChildren);
var ProgramsRouteChildren = { ProgramsSlugRoute };
var rootRouteChildren = {
	IndexRoute,
	ClubRoute,
	CoachesRoute: CoachesRouteWithChildren,
	MembershipRoute,
	ProgramsRoute: ProgramsRoute._addFileChildren(ProgramsRouteChildren),
	ScheduleRoute,
	VisitRoute
};
var routeTree = Route$9._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		rewrite: previewPathRewrite(),
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { programs as _, Route$8 as a, dayNames as c, facilities as d, faqs as f, notes as g, getProgram as h, Route$5 as i, days as l, getCoach as m, Route as n, club as o, formatTime as p, Route$1 as r, coaches as s, router_exports as t, disciplines as u, sessions as v };
