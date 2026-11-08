import Link from "next/link";
import type { ReactNode } from "react";

/* ---------- SVG icon set (stroke icons, 24x24) ---------- */

type IconName =
  | "code"
  | "layout"
  | "trending"
  | "dollar"
  | "headphones"
  | "users"
  | "server"
  | "pin"
  | "briefcase"
  | "search"
  | "arrow"
  | "clock"
  | "check"
  | "userPlus"
  | "fileText"
  | "building";

const iconPaths: Record<IconName, ReactNode> = {
  code: (
    <>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </>
  ),
  layout: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="9" y1="21" x2="9" y2="9" />
    </>
  ),
  trending: (
    <>
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </>
  ),
  dollar: (
    <>
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </>
  ),
  headphones: (
    <>
      <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
    </>
  ),
  users: (
    <>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </>
  ),
  server: (
    <>
      <rect x="2" y="2" width="20" height="8" rx="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" />
      <line x1="6" y1="6" x2="6.01" y2="6" />
      <line x1="6" y1="18" x2="6.01" y2="18" />
    </>
  ),
  pin: (
    <>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
  briefcase: (
    <>
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </>
  ),
  arrow: (
    <>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </>
  ),
  check: (
    <>
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </>
  ),
  userPlus: (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="8.5" cy="7" r="4" />
      <line x1="20" y1="8" x2="20" y2="14" />
      <line x1="23" y1="11" x2="17" y2="11" />
    </>
  ),
  fileText: (
    <>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </>
  ),
  building: (
    <>
      <rect x="4" y="2" width="16" height="20" rx="2" />
      <path d="M9 22v-4h6v4" />
      <line x1="8" y1="6" x2="8.01" y2="6" />
      <line x1="12" y1="6" x2="12.01" y2="6" />
      <line x1="16" y1="6" x2="16.01" y2="6" />
      <line x1="8" y1="10" x2="8.01" y2="10" />
      <line x1="12" y1="10" x2="12.01" y2="10" />
      <line x1="16" y1="10" x2="16.01" y2="10" />
    </>
  ),
};

function Icon({
  name,
  className = "h-5 w-5",
}: {
  name: IconName;
  className?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {iconPaths[name]}
    </svg>
  );
}

/* ---------- Data ---------- */

const categories: { name: string; icon: IconName; jobs: string }[] = [
  { name: "Development", icon: "code", jobs: "120+ open roles" },
  { name: "Design", icon: "layout", jobs: "85+ open roles" },
  { name: "Marketing", icon: "trending", jobs: "65+ open roles" },
  { name: "Finance", icon: "dollar", jobs: "45+ open roles" },
  { name: "Customer Support", icon: "headphones", jobs: "50+ open roles" },
  { name: "Human Resources", icon: "users", jobs: "30+ open roles" },
];

const jobs: {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  icon: IconName;
  accent: string;
  tags: string[];
}[] = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Tech Solutions",
    location: "Islamabad, Pakistan",
    type: "Full Time",
    salary: "$1,200 - $2,000",
    icon: "code",
    accent: "bg-blue-50 text-blue-600",
    tags: ["React", "TypeScript", "Tailwind"],
  },
  {
    id: 2,
    title: "UI/UX Designer",
    company: "Creative Studio",
    location: "Remote",
    type: "Remote",
    salary: "$900 - $1,500",
    icon: "layout",
    accent: "bg-violet-50 text-violet-600",
    tags: ["Figma", "Prototyping", "Research"],
  },
  {
    id: 3,
    title: "Backend Developer",
    company: "Digital Systems",
    location: "Lahore, Pakistan",
    type: "Full Time",
    salary: "$1,500 - $2,500",
    icon: "server",
    accent: "bg-emerald-50 text-emerald-600",
    tags: ["Node.js", "PostgreSQL", "AWS"],
  },
];

const steps: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "userPlus",
    title: "Create your account",
    text: "Sign up in a minute and build a profile that highlights your strengths.",
  },
  {
    icon: "search",
    title: "Find the right role",
    text: "Search and filter by category, location and job type to narrow down fast.",
  },
  {
    icon: "fileText",
    title: "Apply with confidence",
    text: "Submit your application directly and track every step of the process.",
  },
];

const stats = [
  { value: "10K+", label: "Job listings" },
  { value: "500+", label: "Hiring companies" },
  { value: "20K+", label: "Active job seekers" },
];

/* ---------- Page ---------- */

export default function Home() {
  return (
    <main className="bg-white text-slate-900 antialiased">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -top-40 mx-auto h-80 max-w-3xl rounded-full bg-blue-200/40 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-24 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-1.5 text-sm font-medium text-blue-700 shadow-sm">
            <Icon name="briefcase" className="h-4 w-4" />
            Your career starts here
          </span>

          <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Find work that moves your{" "}
            <span className="text-blue-600">career forward</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
            Browse verified openings from leading companies and apply in
            minutes. Your next opportunity is a search away.
          </p>

          {/* Search */}
          <form
            action="/jobs"
            method="GET"
            role="search"
            className="mx-auto mt-10 flex max-w-4xl flex-col gap-2 rounded-2xl border border-slate-200 bg-white p-2 shadow-lg shadow-slate-200/60 md:flex-row md:items-center"
          >
            <div className="relative flex-1">
              <label htmlFor="keyword" className="sr-only">
                Job title or keyword
              </label>
              <Icon
                name="search"
                className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
              />
              <input
                id="keyword"
                type="text"
                name="keyword"
                placeholder="Job title or keyword"
                className="w-full rounded-xl border border-transparent bg-transparent py-3.5 pl-12 pr-4 text-slate-800 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-100"
              />
            </div>

            <div className="hidden h-8 w-px bg-slate-200 md:block" />

            <div className="relative flex-1">
              <label htmlFor="location" className="sr-only">
                City or location
              </label>
              <Icon
                name="pin"
                className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
              />
              <input
                id="location"
                type="text"
                name="location"
                placeholder="City or location"
                className="w-full rounded-xl border border-transparent bg-transparent py-3.5 pl-12 pr-4 text-slate-800 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-100"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-3.5 font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-200"
            >
              Search jobs
            </button>
          </form>

          <p className="mt-5 text-sm text-slate-500">
            Popular:{" "}
            {["React Developer", "UI Designer", "Marketing Manager"].map(
              (term, i, arr) => (
                <span key={term}>
                  <Link
                    href={`/jobs?keyword=${encodeURIComponent(term)}`}
                    className="font-medium text-slate-700 underline-offset-4 hover:text-blue-600 hover:underline"
                  >
                    {term}
                  </Link>
                  {i < arr.length - 1 && ", "}
                </span>
              )
            )}
          </p>

          {/* Stats */}
          <dl className="mx-auto mt-14 grid max-w-3xl grid-cols-3 divide-x divide-slate-200 rounded-2xl border border-slate-200 bg-white/80 py-6 shadow-sm backdrop-blur">
            {stats.map((stat) => (
              <div key={stat.label} className="px-4">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-2xl font-bold text-slate-900 sm:text-3xl">
                  {stat.value}
                </dd>
                <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-10 py-20">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Explore opportunities
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
              Popular categories
            </h2>
            <p className="mt-2 text-slate-600">
              Find roles in the industries you care about most.
            </p>
          </div>

          <Link
            href="/jobs"
            className="group inline-flex items-center gap-2 font-semibold text-blue-600 hover:text-blue-700"
          >
            Browse all jobs
            <Icon
              name="arrow"
              className="h-4 w-4 transition group-hover:translate-x-1"
            />
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              href={`/jobs?category=${encodeURIComponent(category.name)}`}
              key={category.name}
              className="group flex items-center gap-5 rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-blue-300 hover:shadow-lg hover:shadow-blue-100/60 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-100"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                <Icon name={category.icon} className="h-7 w-7" />
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="font-semibold text-slate-900">
                  {category.name}
                </h3>
                <p className="mt-1 text-sm text-slate-500">{category.jobs}</p>
              </div>

              <Icon
                name="arrow"
                className="h-5 w-5 text-slate-300 transition group-hover:translate-x-1 group-hover:text-blue-600"
              />
            </Link>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="border-y border-slate-200 bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-10">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              How it works
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
              Land your next role in three steps
            </h2>
          </div>

          <ol className="mt-12 grid gap-6 md:grid-cols-3">
            {steps.map((step, index) => (
              <li
                key={step.title}
                className="relative rounded-2xl border border-slate-200 bg-white p-8"
              >
                <span className="absolute right-6 top-6 text-sm font-semibold text-slate-300">
                  0{index + 1}
                </span>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white">
                  <Icon name={step.icon} className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-2 leading-relaxed text-slate-600">
                  {step.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Featured jobs */}
      <section className="mx-auto max-w-7xl px-10 py-20">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Latest opportunities
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
              Featured jobs
            </h2>
            <p className="mt-2 text-slate-600">
              Hand-picked openings from leading companies.
            </p>
          </div>

          <Link
            href="/jobs"
            className="group inline-flex items-center gap-2 font-semibold text-blue-600 hover:text-blue-700"
          >
            View all jobs
            <Icon
              name="arrow"
              className="h-4 w-4 transition group-hover:translate-x-1"
            />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job) => (
            <article
              key={job.id}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/60"
            >
              <div className="flex items-start justify-between">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${job.accent}`}
                >
                  <Icon name={job.icon} className="h-6 w-6" />
                </div>

                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                  {job.type}
                </span>
              </div>

              <h3 className="mt-5 text-xl font-semibold text-slate-900">
                {job.title}
              </h3>

              <p className="mt-1 inline-flex items-center gap-2 text-slate-600">
                <Icon name="building" className="h-4 w-4 text-slate-400" />
                {job.company}
              </p>

              <ul className="mt-4 flex flex-wrap gap-2">
                {job.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600"
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              <div className="mt-5 space-y-2.5 text-sm text-slate-600">
                <p className="flex items-center gap-2">
                  <Icon name="pin" className="h-4 w-4 text-slate-400" />
                  {job.location}
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="dollar" className="h-4 w-4 text-slate-400" />
                  {job.salary} / month
                </p>
              </div>

              <div className="mt-auto pt-6">
                <Link
                  href={`/jobs/${job.id}`}
                  className="group flex items-center justify-center gap-2 rounded-xl bg-slate-900 py-3 font-semibold text-white transition hover:bg-blue-600 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-200"
                >
                  View details
                  <Icon
                    name="arrow"
                    className="h-4 w-4 transition group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Employer CTA */}
      <section className="mx-auto max-w-7xl px-10 pb-20">
        <div className="relative overflow-hidden rounded-3xl bg-slate-900 px-8 py-16 text-center sm:px-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-600/30 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl"
          />

          <div className="relative">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white">
              <Icon name="users" className="h-6 w-6" />
            </div>

            <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Looking to hire top talent?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-300">
              Reach thousands of qualified professionals and build the team your
              company needs.
            </p>

            <ul className="mx-auto mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-300">
              {["Quick setup", "Qualified candidates", "Simple pricing"].map(
                (item) => (
                  <li key={item} className="inline-flex items-center gap-2">
                    <Icon name="check" className="h-4 w-4 text-blue-400" />
                    {item}
                  </li>
                )
              )}
            </ul>

            <Link
              href="/register"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 font-semibold text-slate-900 transition hover:bg-blue-50 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
            >
              Post a job
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}