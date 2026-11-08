import Link from "next/link";

const footerLinks = {
  "For Job Seekers": [
    { name: "Browse Jobs", href: "/jobs" },
    { name: "Career Advice", href: "/career-advice" },
    { name: "My Applications", href: "/seeker/applications" },
    { name: "Create Account", href: "/register" },
  ],
  "For Employers": [
    { name: "Post a Job", href: "/register" },
    { name: "Browse Candidates", href: "/candidates" },
    { name: "Employer Dashboard", href: "/employer/dashboard" },
    { name: "Pricing", href: "/pricing" },
  ],
  Company: [
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms & Conditions", href: "/terms" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="text-3xl font-extrabold tracking-tight text-white"
            >
              Next<span className="text-blue-500">Hire</span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              Find your next opportunity with NextHire. Connect with leading
              companies, discover exciting jobs, and take the next step in
              your career.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex gap-3">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 text-sm font-bold transition hover:border-blue-500 hover:bg-blue-600 hover:text-white"
              >
                in
              </a>

              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 text-sm font-bold transition hover:border-blue-500 hover:bg-blue-600 hover:text-white"
              >
                f
              </a>

              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 text-sm font-bold transition hover:border-blue-500 hover:bg-blue-600 hover:text-white"
              >
                ◎
              </a>

              <a
                href="https://www.x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 text-sm font-bold transition hover:border-blue-500 hover:bg-blue-600 hover:text-white"
              >
                X
              </a>
            </div>
          </div>

          {/* Navigation Columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">
                {heading}
              </h3>

              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 transition hover:text-blue-400"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} NextHire. All rights reserved.
          </p>

          <p className="text-sm text-slate-500">
            Built to connect talent with opportunity.
          </p>
        </div>
      </div>
    </footer>
  );
}