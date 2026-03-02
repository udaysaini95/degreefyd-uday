"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Universities", href: "#" },
  { label: "Courses", href: "#" },
  { label: "About us", href: "#" },
  { label: "More", href: "#" },
];

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <header className="w-full bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex items-center justify-between h-[87px]">
        
      
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
         <Image src="/assets/logo.png" alt="Degree FYD Logo" width={180} height={50} />
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <div key={link.label} className="relative">
              <button
                onClick={() => toggleDropdown(link.label)}
                className="flex items-center gap-1 px-4 py-2 text-[15px] font-medium text-gray-700 hover:text-[#1a2e4a] rounded-md transition-colors duration-200 hover:bg-gray-50"
              >
                {link.label}
                {/* Chevron Icon */}
                <svg
                  className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                    openDropdown === link.label ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Dropdown placeholder */}
              {openDropdown === link.label && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
                  <p className="px-4 py-2 text-sm text-gray-400 italic">
                    Dropdown items...
                  </p>
                </div>
              )}
            </div>
          ))}
        </nav>

        
        <div className="hidden lg:flex items-center gap-3">
          
          <Link
            href="/signup"
            className="px-5 py-2 text-[15px] font-semibold border-2 rounded-md transition-all duration-200 hover:bg-blue-50"
            style={{
              borderColor: "#2563eb",
              color: "#2563eb",
              backgroundColor: "transparent",
            }}
          >
            Sign up
          </Link>

          
          <Link
            href="/login"
            className="px-5 py-2 text-[15px] font-semibold text-white rounded-md transition-all duration-200 hover:opacity-90"
            style={{ backgroundColor: "#1a2e4a" }}
          >
            Login
          </Link>
        </div>

        {/* Mobile View */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2 rounded-md hover:bg-gray-100"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <span
            className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
              mobileMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
              mobileMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
              mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 px-6 py-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="flex items-center justify-between py-2 text-[15px] font-medium text-gray-700 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
              <svg
                className="w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          ))}
          <div className="flex flex-col gap-2 pt-3">
            <Link
              href="/signup"
              className="w-full text-center py-2 text-[15px] font-semibold border-2 rounded-md"
              style={{ borderColor: "#2563eb", color: "#2563eb" }}
            >
              Sign up
            </Link>
            <Link
              href="/login"
              className="w-full text-center py-2 text-[15px] font-semibold text-white rounded-md"
              style={{ backgroundColor: "#1a2e4a" }}
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
