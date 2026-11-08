import Link from "next/link";

const features = [
  {
    number: "01",
    title: "Easy Job Search",
    description:
      "Find relevant opportunities quickly with simple job search and filtering options.",
  },
  {
    number: "02",
    title: "Career Opportunities",
    description:
      "Discover opportunities across different industries and take the next step in your career.",
  },
  {
    number: "03",
    title: "Employer Connections",
    description:
      "Connect talented professionals with companies looking for the right people.",
  },
  {
    number: "04",
    title: "Simple Applications",
    description:
      "Explore job details and apply for positions through a straightforward process.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-white text-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-blue-50 to-white">
        <div
          aria-hidden="true"
          className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-6 py-24 text-center">
          <span className="inline-block rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-blue-600 shadow-sm">
            About NextHire
          </span>

          <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Connecting talent with{" "}
            <span className="text-blue-600">opportunity</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
            We believe finding the right job should be simple. NextHire helps
            job seekers discover opportunities and helps employers connect
            with talented professionals.
          </p>

          <Link
            href="/jobs"
            className="mt-9 inline-flex items-center rounded-xl bg-blue-600 px-8 py-3.5 font-semibold text-white transition hover:bg-blue-700"
          >
            Explore Jobs
          </Link>
        </div>
      </section>

      {/* Our Story */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-10 py-20 lg:grid-cols-2">
        <div>
          <p className="text-sm font-bold uppercase tracking-wider text-blue-600">
            Who We Are
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Making career opportunities easier to discover
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            NextHire is a job portal designed to make the connection between
            job seekers and employers easier. We bring job opportunities and
            hiring needs together in one accessible platform.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            Whether you are starting your career, looking for a new challenge,
            or searching for talented people to join your team, NextHire aims
            to make the process more convenient.
          </p>
        </div>

        <div className="rounded-3xl border border-blue-100 bg-blue-50 p-8 sm:p-12">
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600 text-2xl font-bold text-white">
              N
            </div>

            <h3 className="mt-6 text-2xl font-bold">Your Next Step Starts Here</h3>

            <p className="mt-4 leading-7 text-slate-600">
              Discover opportunities, connect with employers, and move
              confidently toward your career goals.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-slate-50 p-4">
                <p className="text-2xl font-bold text-blue-600">Talent</p>
                <p className="mt-1 text-sm text-slate-500">Meets opportunity</p>
              </div>

              <div className="rounded-xl bg-slate-50 p-4">
                <p className="text-2xl font-bold text-blue-600">Careers</p>
                <p className="mt-1 text-sm text-slate-500">Move forward</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="border-y border-slate-200 bg-slate-50 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 sm:p-10">

            <h2 className="mt-6 text-2xl font-bold">Our Mission</h2>

            <p className="mt-4 leading-8 text-slate-600">
              Our mission is to simplify the job search and hiring process by
              creating an accessible platform where people and businesses
              can discover meaningful opportunities.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white px-10 sm:p-10">
            <h2 className="mt-6 text-2xl font-bold">Our Vision</h2>

            <p className="mt-4 leading-8 text-slate-600">
              We envision a world where finding the right career opportunity
              and discovering the right talent are easier, faster, and more
              accessible to everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mx-auto max-w-7xl px-10 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-wider text-blue-600">
            Why NextHire
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need to move forward
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            We focus on making job discovery and recruitment simple and
            convenient.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <article
              key={feature.number}
              className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
            >
              <span className="text-sm font-bold text-blue-600">
                {feature.number}
              </span>

              <h3 className="mt-5 text-lg font-bold">{feature.title}</h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Who We Help */}
      <section className="border-y border-slate-200 bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-blue-600">
              Who We Help
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Built for both sides of the hiring process
            </h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-bold">For Job Seekers</h3>

              <p className="mt-4 leading-7 text-slate-600">
                Explore job listings, discover career opportunities, and
                apply for positions that match your skills and interests.
              </p>

              <Link
                href="/jobs"
                className="mt-6 inline-flex font-semibold text-blue-600 hover:text-blue-700"
              >
                Find a Job →
              </Link>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-bold">For Employers</h3>

              <p className="mt-4 leading-7 text-slate-600">
                Create job listings, share opportunities, and connect with
                professionals who can help your organization grow.
              </p>

              <Link
                href="/register"
                className="mt-6 inline-flex font-semibold text-blue-600 hover:text-blue-700"
              >
                Join as an Employer →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-3xl bg-slate-900 px-8 py-16 text-center sm:px-16">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready for your next opportunity?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">
            Start exploring jobs or join NextHire to take the next step
            in your professional journey.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/jobs"
              className="rounded-xl bg-blue-600 px-8 py-3.5 font-semibold text-white transition hover:bg-blue-700"
            >
              Browse Jobs
            </Link>

            <Link
              href="/register"
              className="rounded-xl border border-slate-600 px-8 py-3.5 font-semibold text-white transition hover:bg-slate-800"
            >
              Create Account
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}