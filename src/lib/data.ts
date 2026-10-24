export const club = {
  name: "Halden Athletic Club",
  short: "Halden",
  street: "418 Mercer Street",
  city: "New York, NY 10013",
  phone: "(212) 555-0148",
  phoneHref: "tel:+12125550148",
  email: "desk@halden.club",
  emailHref: "mailto:desk@halden.club",
  hours: [
    { label: "Monday – Friday", value: "5:00 – 23:00" },
    { label: "Saturday – Sunday", value: "7:00 – 20:00" },
  ],
} as const;

export const disciplines = ["Strength", "Conditioning", "Studio", "Recovery"] as const;
export type Discipline = (typeof disciplines)[number];

export const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] as const;
export type Day = (typeof days)[number];

export const dayNames: Record<Day, string> = {
  Mon: "Monday",
  Tue: "Tuesday",
  Wed: "Wednesday",
  Thu: "Thursday",
  Fri: "Friday",
  Sat: "Saturday",
  Sun: "Sunday",
};

export type Coach = {
  slug: string;
  name: string;
  role: string;
  focus: Discipline;
  years: number;
  image: string;
  short: string;
  bio: string[];
  credentials: string[];
  approach: string;
};

export type Program = {
  slug: string;
  name: string;
  discipline: Discipline;
  level: string;
  length: string;
  image: string;
  summary: string;
  outcome: string;
  suited: string[];
  session: string[];
  block: { week: string; title: string; detail: string }[];
  coach: string;
};

export type Session = {
  id: string;
  day: Day;
  time: string;
  program: string;
  coach: string;
  room: string;
  minutes: number;
  spots: number;
};

export const coaches: Coach[] = [
  {
    slug: "mara-ellison",
    name: "Mara Ellison",
    role: "Director of Strength",
    focus: "Strength",
    years: 14,
    image: "/club/coach-mara.jpg",
    short: "Builds barbell cycles that people can actually finish.",
    bio: [
      "Mara ran college strength rooms before she opened the Halden floor. She still writes every Barbell block herself — squat, pull, press — and she will change the plan if your sleep or your knee says to.",
      "Members know her for quiet coaching and exact standards. If the bar path is off, the set ends. If the plan is working, she leaves you alone.",
    ],
    credentials: ["CSCS", "USAW L2", "Former collegiate strength staff"],
    approach: "Load you can repeat. Positions you can own. No max-out theater on a Tuesday.",
  },
  {
    slug: "julian-voss",
    name: "Julian Voss",
    role: "Head of Conditioning",
    focus: "Conditioning",
    years: 11,
    image: "/club/coach-julian.jpg",
    short: "Keeps Engine honest: hard, measured, and over before it gets sloppy.",
    bio: [
      "Julian came up coaching field sport in the off-season, then spent four years writing mixed aerobic work for people who already lift. Engine is his room.",
      "He times the pieces, posts the intent on the board, and stops a session when form goes. The point is a bigger engine next month, not a ruined Thursday.",
    ],
    credentials: ["CSCS", "Precision Nutrition L2", "Former sport performance staff"],
    approach: "A clear dose. A clock you can see. Enough rest that the next interval is still the same interval.",
  },
  {
    slug: "nia-okonkwo",
    name: "Nia Okonkwo",
    role: "Studio Lead",
    focus: "Studio",
    years: 9,
    image: "/club/coach-nia.jpg",
    short: "Teaches strength shapes with the patience of a practice, not a playlist.",
    bio: [
      "Nia trained as a dancer and then left choreography behind. Floor is what she built instead: carries, hinges, splits, and long ranges, coached for people who want to feel organized in their body.",
      "She will not ask you to keep up with a front row. She will ask you to stay with the shape until it is yours.",
    ],
    credentials: ["NASM CPT", "FRC mobility", "500 hours of studio instruction"],
    approach: "Range first, then load. Breathing you can hear. No routine you have to memorize.",
  },
  {
    slug: "elias-cho",
    name: "Elias Cho",
    role: "Barbell Coach",
    focus: "Strength",
    years: 8,
    image: "/club/coach-elias.jpg",
    short: "Runs Density — shorter rest, same standards, no junk volume.",
    bio: [
      "Elias apprenticed on this floor under Mara. He coaches the midday and early strength sessions, and he writes Density for members who already own the lifts and want more work in less time.",
      "He is particular about bracing and about the clock. Both are on purpose.",
    ],
    credentials: ["CSCS", "Starting Strength staff alumni", "CPR / AED"],
    approach: "Own the first rep. Earn the shorter rest. Leave when the work is done, not when you are empty.",
  },
  {
    slug: "sloan-adler",
    name: "Sloan Adler",
    role: "Recovery Lead",
    focus: "Recovery",
    years: 12,
    image: "/club/coach-sloan.jpg",
    short: "Holds the quiet room: breath, tissue, and ranges you skip when you are rushing.",
    bio: [
      "Sloan spent a decade in clinical pilates and breath work before Halden built the recovery suite around her schedule. Restore is not a stretch class you half-attend.",
      "She also sets the house rules for the plunge and the sauna — times, order, and who should skip a day.",
    ],
    credentials: ["NASM CES", "Pilates comprehensive", "Breath coach"],
    approach: "Downshift the nervous system, then ask the joint for an honest range. No performance.",
  },
  {
    slug: "owen-hart",
    name: "Owen Hart",
    role: "Sprint Coach",
    focus: "Conditioning",
    years: 10,
    image: "/club/coach-owen.jpg",
    short: "Teaches acceleration on a 40-meter lane, eight athletes at a time.",
    bio: [
      "Owen coached prep sprinters, then got tired of treadmills that face a television. The lane at Halden is his: starts, flys, and the mechanics in between.",
      "Sprint Lab is capped at eight so he can see every shin angle. If you want a casual jog, this is the wrong hour.",
    ],
    credentials: ["USATF Level 2", "CSCS", "Former prep sprint coach"],
    approach: "Quality contacts. Full rest. Speed is a skill, and skills get sloppy when you rush the next rep.",
  },
];

export const programs: Program[] = [
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
      "Already strong and ready for a written cycle, not a random heavy day",
    ],
    session: [
      "One primary lift, worked to a prescribed top set",
      "A secondary pattern — usually the opposite of yesterday",
      "A short accessory that serves the main lift",
      "Notes in the log before you leave the rack",
    ],
    block: [
      { week: "Weeks 1–4", title: "Positions", detail: "Groove the setup. Loads stay moderate so the brace and the bar path become boring, in the right way." },
      { week: "Weeks 5–8", title: "Density of practice", detail: "More quality sets at the same positions. Rest is timed. The top set moves only when the last one was clean." },
      { week: "Weeks 9–12", title: "Express", detail: "A short peak, then a deload. You test a weight you have already earned, not a weight you hope for." },
    ],
    coach: "mara-ellison",
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
      "You want strength endurance, not a second max-out",
    ],
    session: [
      "Two lifts, paired, with rest you can see on the clock",
      "Loads set off your Barbell numbers, not off ego",
      "A finisher only if the main work was sharp",
      "Out of the rack before the next class needs it",
    ],
    block: [
      { week: "Weeks 1–3", title: "Find the pace", detail: "Rest windows are generous. The goal is to hit every set at the same speed." },
      { week: "Weeks 4–7", title: "Tighten", detail: "Rest drops by small steps. If a set breaks down, the rest goes back up. The log decides." },
      { week: "Weeks 8–10", title: "Hold", detail: "Keep the pace. Add a little load only where every set still matches the first." },
    ],
    coach: "elias-cho",
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
      "Members who want a class, not a free-for-all",
    ],
    session: [
      "A posted intent: easy, moderate, or hard — never a surprise",
      "Row, ski, carry, or lane-adjacent runs, rotated so tissues survive",
      "Intervals with rest long enough to repeat the pace",
      "A cool-down that is actually a cool-down",
    ],
    block: [
      { week: "Weeks 1–4", title: "Base", detail: "Most pieces are moderate. You learn the machines and the effort scale we actually use." },
      { week: "Weeks 5–8", title: "Repeat", detail: "The same formats return so you can see the pace move, not just feel busy." },
      { week: "Weeks 9–12", title: "Spice, then settle", detail: "Two harder weeks, then a quieter one. Engine is a season, not a dare." },
    ],
    coach: "julian-voss",
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
      "You are willing to wait the full rest even when you feel ready",
    ],
    session: [
      "Prep that is specific: ankle, hip, and two build-up runs",
      "A small number of timed or marked reps",
      "Coaching on the shin, the arm, and the first ten meters",
      "Done when the reps are done — no extra 'one more'",
    ],
    block: [
      { week: "Weeks 1–3", title: "Contacts", detail: "Short accelerations. The win is a repeatable setup, not a personal record." },
      { week: "Weeks 4–6", title: "Lengthen", detail: "Reps grow slightly. Rest stays honest. We film a start if it will teach you something." },
      { week: "Weeks 7–8", title: "Fresh", detail: "Volume comes down. The reps you keep should be the best of the block." },
    ],
    coach: "owen-hart",
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
      "Members using Floor as the second session of the week",
    ],
    session: [
      "A slow opening that tells you what the hour is for",
      "Shapes held long enough to matter, then loaded simply",
      "Carries or splits that ask for a quiet trunk",
      "A finish you could repeat at home in six minutes",
    ],
    block: [
      { week: "Month 1", title: "Own the shape", detail: "Ranges are explored, not forced. Load is a dowel, a bell, or nothing." },
      { week: "Month 2", title: "Add a demand", detail: "The same shapes return with a slower tempo or a slightly heavier bell." },
      { week: "Month 3", title: "Combine", detail: "Sequences get longer. You should still be able to explain what each part is for." },
    ],
    coach: "nia-okonkwo",
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
      "Anyone Sloan has asked to skip the plunge and come here first",
    ],
    session: [
      "Breathing you can measure — longer exhales, quieter effort",
      "Supported positions before anything active",
      "A small menu of ranges chosen for the week’s lifting",
      "A clear end. Restore does not run long to feel valuable",
    ],
    block: [
      { week: "Any week", title: "Match the floor", detail: "Sloan reads what Barbell and Sprint loaded and biases the hour toward those tissues." },
      { week: "Heavy blocks", title: "Less, better", detail: "When the strength cycle peaks, Restore gets simpler, not more ambitious." },
      { week: "Deload", title: "Open the range", detail: "This is when we ask for a little more motion, because the load has stepped back." },
    ],
    coach: "sloan-adler",
  },
];

type Draft = Omit<Session, "id" | "day">;

const book: Record<Day, Draft[]> = {
  Mon: [
    { time: "06:00", program: "barbell", coach: "mara-ellison", room: "Strength floor", minutes: 60, spots: 10 },
    { time: "07:15", program: "engine", coach: "julian-voss", room: "Studio North", minutes: 45, spots: 16 },
    { time: "09:30", program: "restore", coach: "sloan-adler", room: "Recovery suite", minutes: 50, spots: 10 },
    { time: "12:10", program: "density", coach: "elias-cho", room: "Strength floor", minutes: 40, spots: 12 },
    { time: "17:30", program: "engine", coach: "julian-voss", room: "Studio North", minutes: 45, spots: 16 },
    { time: "18:40", program: "barbell", coach: "mara-ellison", room: "Strength floor", minutes: 60, spots: 10 },
    { time: "19:45", program: "floor", coach: "nia-okonkwo", room: "Studio South", minutes: 50, spots: 14 },
  ],
  Tue: [
    { time: "06:00", program: "engine", coach: "julian-voss", room: "Studio North", minutes: 45, spots: 16 },
    { time: "07:00", program: "sprint-lab", coach: "owen-hart", room: "Sprint lane", minutes: 40, spots: 8 },
    { time: "09:30", program: "floor", coach: "nia-okonkwo", room: "Studio South", minutes: 50, spots: 14 },
    { time: "12:10", program: "restore", coach: "sloan-adler", room: "Recovery suite", minutes: 45, spots: 10 },
    { time: "17:15", program: "density", coach: "elias-cho", room: "Strength floor", minutes: 45, spots: 12 },
    { time: "18:30", program: "sprint-lab", coach: "owen-hart", room: "Sprint lane", minutes: 40, spots: 8 },
    { time: "19:30", program: "barbell", coach: "mara-ellison", room: "Strength floor", minutes: 60, spots: 10 },
  ],
  Wed: [
    { time: "06:00", program: "barbell", coach: "elias-cho", room: "Strength floor", minutes: 55, spots: 10 },
    { time: "07:15", program: "floor", coach: "nia-okonkwo", room: "Studio South", minutes: 50, spots: 14 },
    { time: "09:30", program: "engine", coach: "julian-voss", room: "Studio North", minutes: 45, spots: 16 },
    { time: "12:10", program: "restore", coach: "sloan-adler", room: "Recovery suite", minutes: 50, spots: 10 },
    { time: "17:30", program: "barbell", coach: "mara-ellison", room: "Strength floor", minutes: 60, spots: 10 },
    { time: "18:45", program: "engine", coach: "julian-voss", room: "Studio North", minutes: 50, spots: 16 },
    { time: "19:45", program: "density", coach: "elias-cho", room: "Strength floor", minutes: 40, spots: 12 },
  ],
  Thu: [
    { time: "06:00", program: "sprint-lab", coach: "owen-hart", room: "Sprint lane", minutes: 40, spots: 8 },
    { time: "07:10", program: "density", coach: "elias-cho", room: "Strength floor", minutes: 45, spots: 12 },
    { time: "09:30", program: "restore", coach: "sloan-adler", room: "Recovery suite", minutes: 50, spots: 10 },
    { time: "12:10", program: "floor", coach: "nia-okonkwo", room: "Studio South", minutes: 45, spots: 14 },
    { time: "17:30", program: "sprint-lab", coach: "owen-hart", room: "Sprint lane", minutes: 40, spots: 8 },
    { time: "18:30", program: "barbell", coach: "mara-ellison", room: "Strength floor", minutes: 60, spots: 10 },
    { time: "19:45", program: "engine", coach: "julian-voss", room: "Studio North", minutes: 45, spots: 16 },
  ],
  Fri: [
    { time: "06:00", program: "engine", coach: "julian-voss", room: "Studio North", minutes: 45, spots: 16 },
    { time: "07:00", program: "barbell", coach: "elias-cho", room: "Strength floor", minutes: 55, spots: 10 },
    { time: "09:30", program: "floor", coach: "nia-okonkwo", room: "Studio South", minutes: 50, spots: 14 },
    { time: "12:10", program: "density", coach: "elias-cho", room: "Strength floor", minutes: 40, spots: 12 },
    { time: "17:00", program: "restore", coach: "sloan-adler", room: "Recovery suite", minutes: 50, spots: 10 },
    { time: "18:00", program: "sprint-lab", coach: "owen-hart", room: "Sprint lane", minutes: 40, spots: 8 },
  ],
  Sat: [
    { time: "08:00", program: "barbell", coach: "mara-ellison", room: "Strength floor", minutes: 60, spots: 12 },
    { time: "09:15", program: "engine", coach: "julian-voss", room: "Studio North", minutes: 50, spots: 16 },
    { time: "10:30", program: "floor", coach: "nia-okonkwo", room: "Studio South", minutes: 50, spots: 14 },
    { time: "12:00", program: "restore", coach: "sloan-adler", room: "Recovery suite", minutes: 50, spots: 12 },
  ],
  Sun: [
    { time: "08:30", program: "sprint-lab", coach: "owen-hart", room: "Sprint lane", minutes: 45, spots: 8 },
    { time: "09:30", program: "density", coach: "elias-cho", room: "Strength floor", minutes: 50, spots: 12 },
    { time: "11:00", program: "floor", coach: "nia-okonkwo", room: "Studio South", minutes: 55, spots: 14 },
    { time: "16:00", program: "restore", coach: "sloan-adler", room: "Recovery suite", minutes: 50, spots: 10 },
  ],
};

export const sessions: Session[] = days.flatMap((day) =>
  book[day].map((item) => ({
    ...item,
    day,
    id: `${day}-${item.time}-${item.program}`,
  })),
);

export const plans = [
  {
    id: "daylight",
    name: "Daylight",
    kicker: "Off-peak",
    monthly: 165,
    annual: 150,
    blurb: "The floor and four classes a week, while the building is quiet.",
    note: "Weekdays 9:00–16:00. Evenings and weekends are not included.",
    features: [
      "Training floor, weekdays 9:00–16:00",
      "Four class reservations each week",
      "Locker, towel, filtered water",
      "One coached check-in at the start",
      "Recovery suite à la carte",
    ],
    featured: false,
  },
  {
    id: "resident",
    name: "Resident",
    kicker: "The house standard",
    monthly: 245,
    annual: 220,
    blurb: "All open hours, unlimited classes, and a floor that still has a cap.",
    note: "What most members hold. Guest passes included.",
    features: [
      "Floor, studios, and lane at all open hours",
      "Unlimited classes, subject to the cap",
      "Recovery suite, four visits a month",
      "Two guest passes a month",
      "Members’ lounge and espresso",
      "Four-week freeze each year",
    ],
    featured: true,
  },
  {
    id: "atelier",
    name: "Atelier",
    kicker: "Private",
    monthly: 590,
    annual: 530,
    blurb: "Resident access, plus four private hours and the recovery suite without a tally.",
    note: "The book is small. We only open a place when a coach has the hour.",
    features: [
      "Everything in Resident",
      "Four private sessions each month",
      "Unlimited recovery suite",
      "Four guest passes a month",
      "Priority on the lane and the racks",
      "Written training, reviewed monthly",
    ],
    featured: false,
  },
] as const;

export const comparison: { label: string; cells: [string, string, string] }[] = [
  { label: "Floor hours", cells: ["Weekdays 9:00–16:00", "All open hours", "All open hours"] },
  { label: "Classes", cells: ["4 / week", "Unlimited", "Unlimited"] },
  { label: "Guests", cells: ["—", "2 / month", "4 / month"] },
  { label: "Recovery suite", cells: ["À la carte", "4 visits / month", "Unlimited"] },
  { label: "Private sessions", cells: ["—", "Booked separately", "4 / month"] },
  { label: "Lounge", cells: ["—", "Included", "Included"] },
  { label: "Freeze", cells: ["2 weeks / year", "4 weeks / year", "8 weeks / year"] },
  { label: "Joining fee", cells: ["None", "None", "None"] },
];

export const faqs = [
  {
    q: "What does the plan price cover?",
    a: "The plan page shows the price and duration entered by the club. Ask the desk which facilities and services are included before you join.",
  },
  {
    q: "Can I visit before joining?",
    a: "Yes. Send a visit request and the club team will follow up to arrange a time.",
  },
  {
    q: "How do I choose a plan?",
    a: "Compare the active plans and durations, then contact the desk with questions about access, classes, or services.",
  },
  {
    q: "Can I request a class time?",
    a: "Use the schedule to send the club a request. A team member will confirm availability; the request itself does not reserve a place.",
  },
  {
    q: "Can I ask about private coaching?",
    a: "Choose private coaching in the visit form and the desk will share the current options.",
  },
  {
    q: "Who can answer questions about a plan?",
    a: "The club desk can explain the current plan terms and help you decide which one fits.",
  },
];

export const notes = [
  {
    quote: "I stopped collecting programs. Mara wrote twelve weeks and I just showed up.",
    name: "Priya N.",
    detail: "Resident, SoHo",
  },
  {
    quote: "The lane is why I stayed. Forty meters, and nobody walking across your rep.",
    name: "Andre K.",
    detail: "Atelier, Jersey City",
  },
  {
    quote: "Restore after heavy lower days is the difference between training and grinding.",
    name: "Helen V.",
    detail: "Resident, Tribeca",
  },
];

export const facilities = [
  {
    title: "Strength floor",
    copy: "Calibrated bars, bumper plates, and enough racks that a class of ten is not a queue.",
    image: "/club/floor.jpg",
  },
  {
    title: "Sprint lane",
    copy: "Forty meters, indoor, marked. Sprint Lab lives here. So do build-up runs before a heavy day.",
    image: "/club/sprint.jpg",
  },
  {
    title: "Two studios",
    copy: "North runs Engine. South runs Floor. Both are sprung, both are capped, neither has a mirror wall for company.",
    image: "/club/studio.jpg",
  },
  {
    title: "Recovery suite",
    copy: "An 8° plunge, an 80° sauna, compression, and Sloan’s hour. Order matters. The card on the door says so.",
    image: "/club/restore.jpg",
  },
];

export function getProgram(slug: string) {
  return programs.find((item) => item.slug === slug);
}

export function getCoach(slug: string) {
  return coaches.find((item) => item.slug === slug);
}

export function formatTime(value: string) {
  const [hourPart, minutePart] = value.split(":");
  const hour = Number(hourPart);
  const suffix = hour >= 12 ? "PM" : "AM";
  const normalized = hour % 12 || 12;
  return `${normalized}:${minutePart} ${suffix}`;
}

export function money(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}
