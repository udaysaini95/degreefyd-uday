"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// --- MOCK DATA SECTION ---
const CATEGORIES = [
  "All",
  "Engineering",
  "Medical",
  "Design",
  "Law",
  "Science",
  "Nursing",
];

const FEATURED_BLOG = {
  title:
    "How to Become a Marketing Manager with a Specialization in Online MBA (Marketing)",
  desc: "Marketing roles are growing fast in India because every business needs a stronger customer reach. Many learners now search for an online MBA in Marketing to secure a stable marketing career. The marketing field offers this...",
  date: "12 Oct, 2024",
  readTime: "4 Mins Read",
  author: "Yogita Sharma",
  authorImg: "/assets/p.png",
  img: "/assets/blog.png",
};

const BLOGS = Array(9).fill({
  title:
    "How to Become a Marketing Manager with a Specialization in Online MBA (Marketing)...",
  date: "15 Dec, 2025",
  readTime: "2.4k Reads",
  author: "Yogita Sharma",
  authorImg: "/assets/p.png",
  img: "/assets/blog.png",
});

const EXAMS = [
  {
    name: "CAT 2025",
    desc: "IIM Kozhikode will release the IIM CAT result 2025 on December 24, 2025, at 6 PM. The...",
  },
  {
    name: "JEE Main 2025",
    desc: "IIM Kozhikode will release the IIM CAT result 2025 on December 24, 2025, at 6 PM. The...",
  },
  {
    name: "WBJEE 2025",
    desc: "IIM Kozhikode will release the IIM CAT result 2025 on December 24, 2025, at 6 PM. The...",
  },
  {
    name: "GATE 2025",
    desc: "IIM Kozhikode will release the IIM CAT result 2025 on December 24, 2025, at 6 PM. The...",
  },
];

const COLLEGES = [
  {
    name: "Alagappa University's Directorate of Distance...",
    loc: "Karaikudi, Tamil Nadu",
    img: "/assets/amity.png",
  },
  {
    name: "Amity School of Distance Education",
    loc: "Noida, New Delhi",
    img: "/assets/amity.png",
  },
  {
    name: "Amity University Bengaluru",
    loc: "Bengaluru, Karnataka",
    img: "/assets/amity.png",
  },
  {
    name: "Amity University Bengaluru",
    loc: "Bengaluru, Karnataka",
    img: "/assets/amity.png",
  },
];

const COURSES = [
  {
    name: "Online MBA degree course",
    desc: "An Online MBA includes a 2-year postgraduate degree course. It deals with...",
  },
  {
    name: "Online BBA degree course",
    desc: "An Online BBA includes a 3-year undergraduate degree course. It deals with...",
  },
  {
    name: "Online MCA degree course",
    desc: "An Online MCA includes a 2-year postgraduate degree course. It deals with...",
  },
  {
    name: "Online BCA degree course",
    desc: "An Online BCA includes a 3-year undergraduate degree course. It deals with...",
  },
];

export default function BlogListing() {
  const [activeCat, setActiveCat] = useState("All");

  return (
    <div className="bg-[#f8f9fa] min-h-screen pb-16 pt-6 md:pt-10">
      <div className="max-w-[1240px] mx-auto px-4 lg:px-6 flex flex-col gap-6 md:gap-10">

        {/* --- SECTION 1: HEADER & DISCLAIMER --- */}
        <div className="flex flex-col gap-3 md:gap-4">
          {/* Breadcrumbs Row */}
          <nav className="flex items-center gap-2 text-[12px] text-[#595959] font-medium">
            <Link href="/" className="hover:text-[#3B82B1]">
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </Link>
            <span className="text-gray-400">›</span>
            <span className="text-[#3B82B1]">Blogs</span>
          </nav>

          {/* Main Title */}
          <h1 className="text-[24px] md:text-[32px] font-extrabold text-[#111827] leading-tight">
            <span className="text-[#f28c28] font-bold">DegreeFYD</span>{" "}
            <span className="font-bold">Blogs-</span>
          </h1>

          {/* Disclaimer Text */}
          <p className="text-[12px] md:text-[13px] text-[#595959] italic leading-relaxed max-w-[1200px]">
            [ Disclaimer: These blogs are for informational purposes only. Some
            data, figures, examples, or statements may be approximate, simplified,
            or subject to change. While we aim for accuracy and relevance, minor
            inconsistencies or updates may occur over time. ]
          </p>
        </div>

        {/* --- SECTION 2: FEATURED HERO SLIDER --- */}
        <div className="relative w-full">
          {/* Side Navigation Arrows — desktop only */}
          <button className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full items-center justify-center shadow-lg border border-gray-100 z-20 text-[#3B82B1]">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full items-center justify-center shadow-lg border border-gray-100 z-20 text-[#3B82B1]">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Featured Card */}
          <Link href="/?view=blog-detail" className="block bg-white rounded-[12px] border border-[#e5e7eb] shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
            {/* Mobile: stacked layout | Desktop: side-by-side */}
            <div className="flex flex-col md:flex-row md:p-4 md:gap-8">
              {/* Image */}
              <div className="w-full md:w-[480px] h-[200px] md:h-[300px] relative md:rounded-[10px] overflow-hidden shrink-0">
                <Image
                  src="/assets/blog.png"
                  alt="Hero Image"
                  fill
                  className="object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0D3B59]/40 to-[#0D3B59]/80 flex items-center justify-end pr-6">
                 
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-start md:justify-center gap-3 md:gap-4 p-4 md:py-4 md:pr-4 md:pl-0">
                {/* Mobile: title then author row */}
                <h2 className="text-[16px] md:text-[26px] font-semibold text-[#111827] leading-snug">
                  How to Become a Marketing Manager with a Specialization in
                  Online MBA (Marketing)
                </h2>
                <p className="text-[13px] md:text-[14px] text-[#717171] leading-[1.6] line-clamp-3 italic">
                  Marketing roles are growing fast in India because every brand
                  wants a stronger customer reach. Man...
                </p>
                {/* Author + date row */}
                <div className="flex items-center gap-3 mt-1">
                  <div className="w-8 h-8 rounded-full overflow-hidden relative bg-gray-100">
                    <Image src="/assets/p.png" alt="Author" fill className="object-cover" />
                  </div>
                  <span className="text-[13px] font-medium text-[#121212]">Yogita Sharma</span>
                  <span className="text-[12px] text-[#717171] ml-auto md:ml-0">15 Dec, 2025 | 2.4k Reads</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Pagination Dots */}
          <div className="flex items-center justify-center gap-2 mt-4">
            <span className="w-2.5 h-2.5 bg-[#0D3B59] rounded-full cursor-pointer"></span>
            {[...Array(4)].map((_, i) => (
              <span key={i} className="w-2 h-2 border border-gray-300 rounded-full cursor-pointer hover:bg-gray-100 transition-colors"></span>
            ))}
          </div>
        </div>

        {/* --- SECTION 3: CATEGORY FILTER & SEARCH BAR --- */}
        <div className="flex flex-col gap-3 md:gap-4">
          <h2 className="text-[16px] md:text-[18px] font-bold text-[#1a2e4a]">
            Explore blogs by Category-
          </h2>
          {/* Scrollable pills row on mobile */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCat(cat)}
                className={`px-4 py-1.5 text-[13px] font-bold rounded-md border transition-all whitespace-nowrap flex-shrink-0 ${activeCat === cat
                  ? "bg-[#1a2e4a] text-white border-[#1a2e4a]"
                  : "bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
          {/* Search Input */}
          <div className="relative w-full">
            <svg
              className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search exam..."
              className="w-full bg-white border border-gray-200 rounded-lg pl-11 pr-4 py-3 text-[13px] md:text-[14px] focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all shadow-sm"
            />
          </div>
        </div>

        {/* --- SECTION 4: BLOG CARDS --- */}
        {/* Mobile: single column stacked | Desktop: 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {BLOGS.map((blog, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all group flex flex-col cursor-pointer"
            >
              {/* Card Image */}
              <div className="h-[160px] md:h-[180px] w-full relative overflow-hidden bg-[#1a2e4a]">
                <Image
                  src="/assets/blog.png"
                  alt={blog.title}
                  fill
                  className="object-cover opacity-70 group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay badge on mobile */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0D3B59]/30 to-[#0D3B59]/70 flex items-center justify-end pr-4">
                 
                </div>
              </div>
              {/* Card Content */}
              <div className="p-4 flex flex-col flex-1">
                <h3 className="text-[14px] md:text-[15px] font-semibold text-[#1a2e4a] leading-snug mb-3 group-hover:text-[#0D3B59] transition-colors line-clamp-2">
                  <Link href="/?view=blog-detail">{blog.title}</Link>
                </h3>
                <div className="mt-auto flex items-center justify-between pt-3 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-gray-100 overflow-hidden relative border border-gray-200">
                      <Image
                        src={blog.authorImg}
                        alt={blog.author}
                        fill
                        className="object-cover"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).src =
                            "/assets/logo.png";
                        }}
                      />
                    </div>
                    <span className="text-[12px] font-normal text-gray-700">
                      {blog.author}
                    </span>
                  </div>
                  <span className="text-[11px] text-[#595959]">
                    {blog.date} | {blog.readTime}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- SECTION 5: PAGINATION --- */}
        {/* Mobile: numbered pagination | Desktop: dots */}
        <div className="flex items-center justify-center gap-1.5 mt-2">
          {/* Previous — mobile hidden, same on desktop */}
          <button className="hidden md:flex w-8 h-8 items-center justify-center text-[13px] text-gray-500 hover:text-gray-800">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Page 1 - active */}
          <button className="w-8 h-8 flex items-center justify-center text-[13px] font-bold rounded bg-[#0D3B59] text-white">
            1
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-[13px] rounded hover:bg-gray-100 text-gray-700">
            2
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-[13px] rounded hover:bg-gray-100 text-gray-700">
            3
          </button>
          <span className="text-gray-400 px-1">...</span>
          <button className="w-8 h-8 flex items-center justify-center text-[13px] rounded hover:bg-gray-100 text-gray-700">
            199
          </button>

          {/* Next */}
          <button className="flex items-center gap-1 px-3 h-8 text-[13px] rounded hover:bg-gray-100 text-gray-700 font-medium">
            Next
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* --- SECTION 6: FOOTER CAROUSELS (EXAMS, COLLEGES, COURSES) --- */}
        <div className="flex flex-col gap-8 md:gap-10 mt-2 bg-white -mx-4 lg:-mx-6 px-4 md:px-6 lg:px-8 py-8 md:py-10">

          {/* Popular Exams */}
          <div className="flex flex-col gap-4 md:gap-5">
            <h2 className="text-[16px] md:text-[18px] font-bold text-[#1a2e4a]">
              Explore some popular exams-
            </h2>
            {/* Mobile: stacked list | Desktop: 4-column grid */}
            <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
              {EXAMS.map((exam, i) => (
                <div
                  key={i}
                  className="flex flex-col gap-1.5"
                >
                  <h3 className="text-[14px] font-semibold text-[#3B82B1] underline cursor-pointer">
                    {exam.name}
                  </h3>
                  <p className="text-[12px] text-gray-500 line-clamp-2 leading-relaxed">
                    {exam.desc}
                  </p>
                </div>
              ))}
            </div>
            {/* View All — centered on mobile */}
            <div className="flex justify-center md:justify-start mt-1">
              <button className="px-8 py-2 border border-gray-300 rounded-md text-[13px] font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                View All
              </button>
            </div>
          </div>

          {/* Colleges */}
          <div className="flex flex-col gap-4 md:gap-5">
            <h2 className="text-[16px] md:text-[18px] font-bold text-[#1a2e4a]">
              Explore Colleges-
            </h2>
            {/* Mobile: 2-column grid with image left + text right | Desktop: 4-column cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
              {COLLEGES.map((col, i) => (
                <div
                  key={i}
                  className="flex md:flex-col border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow bg-white"
                >
                  {/* Mobile: left image thumbnail | Desktop: top image */}
                  <div className="w-[90px] h-[70px] md:w-full md:h-[100px] relative shrink-0">
                    <Image
                      src={col.img}
                      alt={col.name}
                      fill
                      className="object-cover"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src =
                          "/assets/logo.png";
                      }}
                    />
                  </div>
                  <div className="p-3 flex flex-col gap-1 flex-1 justify-center">
                    <h3 className="text-[12px] md:text-[13px] font-semibold text-[#3B82B1] leading-tight underline cursor-pointer line-clamp-2">
                      {col.name}
                    </h3>
                    <p className="text-[11px] text-gray-500 flex items-center gap-1">
                      <svg className="w-3 h-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {col.loc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {/* View All — centered on mobile */}
            <div className="flex justify-center md:justify-start mt-1">
              <button className="px-8 py-2 border border-gray-300 rounded-md text-[13px] font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                View All
              </button>
            </div>
          </div>

          {/* Recommended Courses */}
          <div className="flex flex-col gap-4 md:gap-5">
            <div className="flex items-center justify-between">
              <h2 className="text-[16px] md:text-[18px] font-bold text-[#1a2e4a]">
                Explore some courses which are best for you-
              </h2>
              <button className="text-[12px] font-normal text-[#3B82B1] hover:underline hidden md:block">
                View All
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {COURSES.map((course, i) => (
                <div
                  key={i}
                  className="border border-gray-200 p-4 rounded-xl hover:shadow-md transition-shadow bg-white flex flex-col gap-2"
                >
                  <h3 className="text-[14px] font-normal text-[#3B82B1] underline cursor-pointer">
                    {course.name}
                  </h3>
                  <p className="text-[12px] text-gray-500 line-clamp-2 leading-relaxed">
                    {course.desc}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex justify-center md:hidden mt-1">
              <button className="px-8 py-2 border border-gray-300 rounded-md text-[13px] font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                View All
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Hide scrollbar utility */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}
