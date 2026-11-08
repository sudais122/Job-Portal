import Link from "next/link";

const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Tech Solutions",
    location: "Islamabad, Pakistan",
    type: "Full Time",
    salary: "Rs. 80,000 - 120,000",
    category: "Development",
    description:
      "Build responsive and user-friendly web applications using React and Next.js.",
  },
  {
    id: 2,
    title: "UI/UX Designer",
    company: "Creative Studio",
    location: "Remote",
    type: "Remote",
    salary: "Rs. 60,000 - 90,000",
    category: "Design",
    description:
      "Create beautiful user interfaces and improve user experiences.",
  },
  {
    id: 3,
    title: "Backend Developer",
    company: "Digital Systems",
    location: "Lahore, Pakistan",
    type: "Full Time",
    salary: "Rs. 100,000 - 150,000",
    category: "Development",
    description:
      "Develop secure APIs and maintain scalable backend services.",
  },
  {
    id: 4,
    title: "Digital Marketing Executive",
    company: "Growth Agency",
    location: "Karachi, Pakistan",
    type: "Part Time",
    salary: "Rs. 40,000 - 60,000",
    category: "Marketing",
    description:
      "Manage digital campaigns and grow brand visibility across platforms.",
  },
  {
    id: 5,
    title: "React Developer",
    company: "Web Experts",
    location: "Remote",
    type: "Remote",
    salary: "Rs. 90,000 - 130,000",
    category: "Development",
    description:
      "Build modern frontend applications with React and reusable components.",
  },
  {
    id: 6,
    title: "Graphic Designer",
    company: "Pixel House",
    location: "Islamabad, Pakistan",
    type: "Part Time",
    salary: "Rs. 35,000 - 55,000",
    category: "Design",
    description:
      "Design marketing materials, social media graphics, and brand assets.",
  },
];

export default function JobsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <section className="bg-blue-700 px-6 py-16 text-center text-white">
        <h1 className="text-4xl font-bold md:text-5xl">
          Find Your Dream Job
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-blue-100">
          Explore thousands of opportunities and find the right career
          for your future.
        </p>

        {/* Search Form */}
        <form
          action="/jobs"
          method="GET"
          className="mx-auto mt-8 flex max-w-3xl flex-col gap-3 rounded-xl bg-white p-3 shadow-lg sm:flex-row"
        >
          <input
            type="text"
            name="keyword"
            placeholder="Job title or keyword"
            className="min-w-0 flex-1 rounded-lg px-4 py-3 text-gray-800 outline-none"
          />

          <input
            type="text"
            name="location"
            placeholder="Location"
            className="min-w-0 flex-1 rounded-lg px-4 py-3 text-gray-800 outline-none"
          />

          <button
            type="submit"
            className="rounded-lg bg-blue-600 px-7 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Search Jobs
          </button>
        </form>
      </section>

      {/* Jobs Section */}
      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">
            Latest Job Opportunities
          </h2>

          <p className="mt-2 text-gray-500">
            Explore the latest opportunities from top companies.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-4">
          {/* Sidebar Filters */}
          <aside className="h-fit rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-5 text-lg font-bold text-gray-900">
              Filter Jobs
            </h3>

            <div className="mb-6">
              <h4 className="mb-3 font-semibold text-gray-800">
                Job Category
              </h4>

              {["Development", "Design", "Marketing", "Finance"].map(
                (category) => (
                  <label
                    key={category}
                    className="mb-3 flex items-center gap-3 text-gray-600"
                  >
                    <input
                      type="checkbox"
                      name="category"
                      value={category}
                      className="h-4 w-4 accent-blue-600"
                    />
                    {category}
                  </label>
                )
              )}
            </div>

            <hr className="my-5 border-gray-200" />

            <div>
              <h4 className="mb-3 font-semibold text-gray-800">
                Job Type
              </h4>

              {["Full Time", "Part Time", "Remote", "Internship"].map(
                (type) => (
                  <label
                    key={type}
                    className="mb-3 flex items-center gap-3 text-gray-600"
                  >
                    <input
                      type="checkbox"
                      name="type"
                      value={type}
                      className="h-4 w-4 accent-blue-600"
                    />
                    {type}
                  </label>
                )
              )}
            </div>
          </aside>

          {/* Job Listings */}
          <div className="space-y-5 lg:col-span-3">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                Showing {jobs.length} jobs
              </p>

              <select className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 outline-none">
                <option>Most Recent</option>
                <option>Oldest First</option>
              </select>
            </div>

            {jobs.map((job) => (
              <div
                key={job.id}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex flex-col justify-between gap-4 sm:flex-row">
                  <div>
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
                      {job.category}
                    </span>

                    <h3 className="mt-3 text-xl font-bold text-gray-900">
                      {job.title}
                    </h3>

                    <p className="mt-1 font-medium text-gray-600">
                      {job.company}
                    </p>
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-xl font-bold text-blue-600">
                    {job.company.charAt(0)}
                  </div>
                </div>

                <p className="mt-4 text-sm leading-6 text-gray-500">
                  {job.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-3 text-sm text-gray-600">
                  <span>📍 {job.location}</span>
                  <span>💼 {job.type}</span>
                  <span>💰 {job.salary}</span>
                </div>

                <div className="mt-6 flex justify-end border-t border-gray-100 pt-4">
                  <Link
                    href={`/jobs/${job.id}`}
                    className="rounded-lg bg-blue-600 px-5 py-2.5 font-semibold text-white transition hover:bg-blue-700"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}