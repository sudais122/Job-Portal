
"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Find Jobs", href: "/jobs" },
    { name: "About Us", href: "/Aboutus" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-10 py-4">

        {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold tracking-tight">
          Next<span className="text-blue-600">Hire</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-medium text-gray-600 transition hover:text-blue-600"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Authentication Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/login"
            className="rounded-lg px-4 py-2 font-semibold text-gray-700 hover:text-blue-600"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="rounded-lg bg-blue-600 px-5 py-2.5 font-semibold text-white transition hover:bg-blue-700"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl text-gray-700 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-gray-200 bg-white px-6 py-5 md:hidden">
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-medium text-gray-700 hover:text-blue-600"
              >
                {link.name}
              </Link>
            ))}

            <hr />

            <Link
              href="/login"
              onClick={() => setMenuOpen(false)}
              className="font-semibold text-gray-700"
            >
              Login
            </Link>

            <Link
              href="/register"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg bg-blue-600 px-5 py-3 text-center font-semibold text-white"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
