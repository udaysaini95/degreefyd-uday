"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

// --- SECTION 1: DATA MOCK (EXAM CONFIGURATION) ---
const EXAMS = [
  {
    name: "CAT Exam 2026",
    fullName: "Common Admission Test",
    mode: "Online exam",
    applicationFrom: "4 Aug, 2025",
    applicationTo: "20 Sep, 2025",
    examDate: "24 Nov, 2025",
    resultDate: "21 Dec, 2025",
    logo: "/assets/c.png",
  },
  {
    name: "WBJEE",
    fullName: "West Bengal Joint Entrance Exam",
    mode: "Offline exam",
    applicationFrom: "04 Aug, 2024",
    applicationTo: "20 Sep, 2024",
    examDate: "13 Apr, 2025",
    resultDate: "05 Jun, 2025",
    logo: "/assets/a.png",
  },
  {
    name: "JEE Main 2026",
    fullName: "Joint Entrance Examination Main",
    mode: "Online exam",
    applicationFrom: "01 Nov, 2025",
    applicationTo: "30 Nov, 2025",
    examDate: "24 Jan, 2026",
    resultDate: "12 Feb, 2026",
    logo: "/assets/j.png",
    verified: true,
  },
  {
    name: "NEET Exam 2025",
    fullName: "National Eligibility Cum Entrance Test",
    mode: "Offline exam",
    applicationFrom: "01 Mar, 2025",
    applicationTo: "04 Apr, 2025",
    examDate: "05 May, 2025",
    resultDate: "14 Jun, 2025",
    logo: "/assets/j.png",
    verified: true,
  },
  {
    name: "GATE Exam 2026",
    fullName: "Graduate Aptitude Test in Engineering",
    mode: "Online exam",
    applicationFrom: "30 Aug, 2025",
    applicationTo: "29 Sep, 2025",
    examDate: "03 Feb, 2026",
    resultDate: "16 Mar, 2026",
    logo: "/assets/g.png",
  },
  {
    name: "CAT Exam 2025",
    fullName: "Common Admission Test",
    mode: "Online exam",
    applicationFrom: "01 Aug, 2025",
    applicationTo: "20 Sep, 2025",
    examDate: "24 Nov, 2025",
    resultDate: "21 Dec, 2025",
    logo: "/assets/c.png",
  },
];

const CATEGORY_FILTERS = [
  { label: "Entrance Exams", count: 207, checked: true },
  { label: "Board Exams", count: 37 },
  { label: "Govt Exams", count: 47 },
];

const STREAM_FILTERS = [
  { label: "Engineering", count: 23, checked: true },
  { label: "Medical", count: 12, checked: true },
  { label: "Management", count: 11, checked: true },
  { label: "Design", count: 12 },
  { label: "Science", count: 12 },
  { label: "Arts", count: 12 },
  { label: "Hotel management", count: 10 },
  { label: "Nursing", count: 9 },
  { label: "IT and Software", count: 9 },
  { label: "Education", count: 9 },
  { label: "Architecture", count: 8 },
  { label: "Aviation", count: 7 },
];

export default function ExamListing() {
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Mobile filter state
  const [selectedCategory, setSelectedCategory] = useState("Entrance Exams");
  const [selectedStreams, setSelectedStreams] = useState<string[]>([
    "Engineering",
    "Medical",
    "Management",
  ]);

  // Lock body scroll & horizontal overflow when filter sheet is open
  useEffect(() => {
    if (mobileFilterOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflowX = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflowX = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflowX = "";
    };
  }, [mobileFilterOpen]);

  const toggleStream = (label: string) => {
    setSelectedStreams((prev) =>
      prev.includes(label) ? prev.filter((s) => s !== label) : [...prev, label]
    );
  };

  return (
    <div className="bg-[#f8f9fa] min-h-screen pb-16 pt-6 overflow-x-hidden">
      <div className="max-w-[1240px] mx-auto px-4 lg:px-8">
        {/* --- SECTION 2: BREADCRUMBS --- */}
        <div className="flex items-center gap-2 text-[12px] text-gray-500 mb-4 font-medium">
          <span className="cursor-pointer hover:text-blue-600">Home</span>
          <span className="text-gray-400">&gt;</span>
          <span className="text-gray-800">Exams</span>
        </div>
        {/* --- SECTION 3: PAGE HEADER TITLE --- */}
        <div className="mb-4">
          <h1 className="text-[20px] lg:text-[24px] font-bold text-[#1a2e4a] mb-1 leading-snug">
            <span className="text-orange-500 text-[18px] lg:text-[20px] mr-1">
              Top Exams
            </span>{" "}
            - Rankings, Courses &amp; Admission 2026
          </h1>
        </div>

        {/* --- SECTION 4: MAIN CONTENT WRAPPER (SIDEBAR + FEED) --- */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* --- SECTION 4A: SIDEBAR FILTERS (DESKTOP ONLY) --- */}
          <div className="hidden lg:flex w-[260px] shrink-0 flex-col gap-4">
            {/* All Filters Header Card */}
            <div className="bg-white rounded-xl border border-gray-100 px-5 py-3.5 flex items-center justify-between shadow-sm">
              <span className="font-semibold text-[15px] text-[#111827]">
                All Filters
              </span>
              <button className="text-[13px] font-medium text-[#3B82B1] hover:underline">
                Reset
              </button>
            </div>

            {/* Category Filter Group (Radio Style) */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="px-5 py-3 border-b border-gray-50 bg-gray-50/30">
                <h3 className="font-bold text-[13px] text-[#111827]">
                  Category
                </h3>
              </div>
              <div className="p-5 flex flex-col gap-4">
                {CATEGORY_FILTERS.map((item, i) => (
                  <label
                    key={i}
                    className="flex items-center justify-between cursor-pointer group"
                  >
                    <span className="text-[13px] text-[#121212] group-hover:text-[#111827] font-normal">
                      {item.label}({item.count})
                    </span>
                    <input
                      type="radio"
                      name="category"
                      className="w-4 h-4 border-gray-300 text-[#0D3B59] focus:ring-[#0D3B59] cursor-pointer"
                      defaultChecked={item.checked}
                      style={{ accentColor: "#0D3B59" }}
                    />
                  </label>
                ))}
              </div>
            </div>

            {/* Sort by Filter Group */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="px-5 py-3 border-b border-gray-50 bg-gray-50/30">
                <h3 className="font-semibold text-[13px] text-[#121212]">
                  Sort by
                </h3>
              </div>
              <div className="p-5 flex flex-col gap-4">
                {[
                  { label: "Upcoming Exams", checked: true },
                  { label: "Recommended Exams" },
                ].map((item, i) => (
                  <label
                    key={i}
                    className="flex items-center justify-between cursor-pointer group"
                  >
                    <span className="text-[13px] text-[#121212] group-hover:text-[#111827] font-normal">
                      {item.label}
                    </span>
                    <input
                      type="radio"
                      name="sort"
                      className="w-4 h-4 border-gray-300 text-[#0D3B59] focus:ring-[#0D3B59] cursor-pointer"
                      defaultChecked={item.checked}
                      style={{ accentColor: "#0D3B59" }}
                    />
                  </label>
                ))}
              </div>
            </div>

            {/* Level Filter Group (Checkbox Style) */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="px-5 py-3 border-b border-gray-50 bg-gray-50/30">
                <h3 className="font-semibold text-[13px] text-[#121212]">
                  Level
                </h3>
              </div>
              <div className="p-5 flex flex-col gap-4">
                {[
                  { label: "PG", count: 23, checked: true },
                  { label: "UG", count: 15 },
                  { label: "12th", count: 12 },
                  { label: "10th", count: 11 },
                ].map((item, i) => (
                  <label
                    key={i}
                    className="flex items-center justify-between cursor-pointer group"
                  >
                    <span className="text-[13px] text-[#121212] group-hover:text-[#111827] font-normal">
                      {item.label}({item.count})
                    </span>
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-gray-300 text-[#0D3B59] focus:ring-[#0D3B59] cursor-pointer"
                      defaultChecked={item.checked}
                      style={{ accentColor: "#0D3B59" }}
                    />
                  </label>
                ))}
              </div>
            </div>

            {/* Stream Filter Group (Scrollable Checkbox Style) */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="px-5 py-3 border-b border-gray-50 bg-gray-50/30">
                <h3 className="font-semibold text-[13px] text-[#121212]">
                  Stream
                </h3>
              </div>
              <div className="p-5 flex flex-col gap-4 max-h-[400px] overflow-y-auto no-scrollbar">
                {STREAM_FILTERS.map((stream, i) => (
                  <label
                    key={i}
                    className="flex items-center justify-between cursor-pointer group"
                  >
                    <span className="text-[13px] text-[#121212] group-hover:text-[#111827] font-normal">
                      {stream.label}({stream.count})
                    </span>
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-gray-300 text-[#0D3B59] focus:ring-[#0D3B59] cursor-pointer"
                      defaultChecked={stream.checked}
                      style={{ accentColor: "#0D3B59" }}
                    />
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* --- SECTION 4B: MAIN CONTENT COLUMN --- */}
          <div className="flex-1 min-w-0 flex flex-col gap-5">
            {/* --- COMPONENT: SEARCH BAR --- */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-2 flex items-center gap-2">
              <div className="w-10 h-10 flex items-center justify-center text-gray-400 shrink-0">
                <svg
                  className="w-5 h-5"
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
              </div>
              <input
                type="text"
                placeholder="Search exams..."
                className="w-full bg-transparent border-none focus:ring-0 text-[14px] text-gray-800 placeholder-gray-400 outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {/* Mobile Filter Icon Button */}
              <button
                onClick={() => setMobileFilterOpen(true)}
                className="lg:hidden w-10 h-10 flex items-center justify-center text-[#0D3B59] shrink-0 rounded-lg hover:bg-gray-50"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 4h18M7 12h10M11 20h2"
                  />
                </svg>
              </button>
            </div>

            {/* --- MOBILE FILTER PILL ROW (mobile only) --- */}
            <div className="flex lg:hidden items-center gap-2 overflow-x-auto no-scrollbar pb-1">
              {/* Category pill */}
              <button
                onClick={() => setMobileFilterOpen(true)}
                className="flex items-center gap-1 px-3 py-1.5 bg-[#0D3B59] text-white rounded-full text-[12px] font-medium whitespace-nowrap shrink-0 shadow-sm"
              >
                Entrance
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <button
                onClick={() => setMobileFilterOpen(true)}
                className="flex items-center gap-1 px-3 py-1.5 bg-white border border-gray-200 text-[#111827] rounded-full text-[12px] font-medium whitespace-nowrap shrink-0"
              >
                Stream
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <button
                onClick={() => setMobileFilterOpen(true)}
                className="flex items-center gap-1 px-3 py-1.5 bg-white border border-gray-200 text-[#111827] rounded-full text-[12px] font-medium whitespace-nowrap shrink-0"
              >
                Level
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            {/* --- SECTION: EXAM CARDS FEED --- */}
            <div className="flex flex-col gap-4">
              {EXAMS.map((exam, i) => (
                <div
                  key={i}
                  className="bg-white border border-[#e5e7eb] rounded-lg pt-4 pb-4 pl-4 pr-4 lg:pl-6 lg:pr-6 shadow-sm transition-all hover:shadow-md flex flex-col gap-3"
                >
                  {/* 1. Card Header: Logo, Mode and Title */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      {/* Exam Logo with Verified Badge */}
                      <div className="w-12 h-12 lg:w-14 lg:h-14 shrink-0 border border-gray-100 rounded-lg p-1.5 lg:p-2 flex items-center justify-center relative bg-white shadow-sm">
                        <Image
                          src={exam.logo}
                          alt={exam.name}
                          width={36}
                          height={36}
                          className="object-contain"
                        />
                        {exam.verified && (
                          <div className="absolute -top-1.5 -right-1.5 bg-white rounded-full">
                            <svg
                              className="w-5 h-5 text-[#007B2D]"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        )}
                      </div>

                      <div className="flex flex-col pt-0.5 min-w-0">
                        <Link href="/?view=exam-detail">
                          <h2 className="text-[16px] lg:text-[20px] font-bold text-[#111827] cursor-pointer leading-tight mb-0.5 hover:text-[#0D3B59] transition-colors">
                            {exam.name}
                          </h2>
                        </Link>
                        <p className="text-[11px] lg:text-[13px] text-[#121212] font-normal">
                          {exam.fullName}
                        </p>
                      </div>
                    </div>

                    {/* Exam Mode Badge */}
                    <span className="bg-[#e7f3f0] text-[#007B2D] text-[10px] lg:text-[11px] font-normal px-2 py-1 rounded-md border border-[#d1e9e2] h-fit whitespace-nowrap shrink-0 ml-2">
                      {exam.mode}
                    </span>
                  </div>

                  {/* 2. Card Middle: Dates Container */}
                  <div className="bg-white border border-[#f3f4f6] rounded-xl px-3 lg:px-6 py-3 lg:py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 lg:gap-6 my-1">
                    <div className="flex-1 w-full sm:w-auto">
                      <span className="text-[10px] text-[#121212] font-normal uppercase tracking-wider block mb-0.5">
                        Application form date :
                      </span>
                      <span className="text-[12px] lg:text-[14px] font-semibold text-[#121212]">
                        {exam.applicationFrom} to {exam.applicationTo}
                      </span>
                    </div>
                    <div className="flex-1 w-full sm:w-auto sm:text-center border-t sm:border-t-0 sm:border-l border-gray-100 pt-2 sm:pt-0 sm:pl-4">
                      <span className="text-[10px] text-[#121212] font-normal uppercase tracking-wider block mb-0.5">
                        Exam Date :
                      </span>
                      <span className="text-[12px] lg:text-[14px] font-semibold text-[#121212]">
                        {exam.examDate}
                      </span>
                    </div>
                    <div className="flex-1 w-full sm:w-auto sm:text-right border-t sm:border-t-0 sm:border-l border-gray-100 pt-2 sm:pt-0 sm:pl-4">
                      <span className="text-[10px] text-[#121212] font-normal uppercase tracking-wider block mb-0.5">
                        Result Date :
                      </span>
                      <span className="text-[12px] lg:text-[14px] font-semibold text-[#121212]">
                        {exam.resultDate}
                      </span>
                    </div>
                  </div>

                  {/* 3. Card Footer: Quick Links and Actions */}
                  <div className="flex flex-col gap-3 mt-1">
                    {/* Quick Links */}
                    <div className="flex items-center flex-wrap gap-x-3 gap-y-1.5">
                      {[
                        "Admit card",
                        "Answer key",
                        "Result",
                        "Dates",
                        "Courses",
                      ].map((link, idx) => (
                        <a
                          href="#"
                          key={idx}
                          className="text-[12px] lg:text-[13px] font-normal text-[#3B82B1] hover:underline hover:text-[#0D3B59] transition-all"
                        >
                          {link}
                        </a>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-3">
                      <button className="flex-1 lg:flex-none px-4 lg:px-6 py-2 text-[12px] lg:text-[13px] font-bold text-[#0D3B59] border border-[#d1d5db] bg-white rounded-xl hover:bg-gray-50 transition-all">
                        View Details
                      </button>
                      <button className="flex-1 lg:flex-none px-4 lg:px-8 py-2 text-[12px] lg:text-[13px] font-bold text-white bg-[#0D3B59] rounded-xl hover:bg-[#092a40] transition-all shadow-sm">
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* --- COMPONENT: PAGINATION CONTROLS --- */}
            <div className="flex items-center justify-center gap-2 mt-8 mb-10 bg-white border border-gray-100 rounded-2xl p-4 w-fit mx-auto shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
              {/* Previous Button */}
              <button
                className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 text-gray-400 hover:bg-gray-50 transition-colors disabled:opacity-50"
                disabled
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              {/* Page Numbers */}
              {[1, 2, 3, 4, 5].map((page, i) => (
                <button
                  key={i}
                  className={`w-9 h-9 flex items-center justify-center rounded-lg text-[14px] font-bold transition-all
        ${page === 1
                      ? "bg-[#0D3B59] text-white shadow-sm"
                      : "bg-white border border-[#0D3B59] text-[#0D3B59] hover:bg-blue-50"
                    }`}
                >
                  {page}
                </button>
              ))}

              {/* Ellipsis */}
              <span className="px-1 text-gray-400 font-bold self-end pb-2 tracking-widest text-[16px]">
                ....
              </span>

              {/* High Page Numbers */}
              {[197, 198, 199].map((page, i) => (
                <button
                  key={i}
                  className="w-9 h-9 flex items-center justify-center rounded-lg border border-[#0D3B59] text-[#0D3B59] text-[14px] font-bold hover:bg-blue-50 transition-all"
                >
                  {page}
                </button>
              ))}

              {/* Next Button */}
              <button className="h-9 px-4 flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white text-[#111827] text-[14px] font-bold hover:bg-gray-50 transition-all">
                Next
                <svg
                  className="w-4 h-4 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            {/* --- SECTION 5: BLOGS RECOMMENDATION GRID --- */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_15px_rgba(0,0,0,0.02)] p-4 lg:p-6 mt-4">
              <div className="flex justify-between items-center mb-6 border-b border-gray-100 pb-4">
                <h2 className="text-[16px] lg:text-[18px] font-bold text-[#111827]">
                  Explore our blogs-
                </h2>
                <button className="text-[13px] font-normal text-[#3B82B1] hover:text-[#0D3B59] transition-colors">
                  View All
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
                {Array(3)
                  .fill(null)
                  .map((_, i) => (
                    <div key={i} className="group cursor-pointer flex flex-col">
                      <div className="w-full h-[130px] lg:h-[140px] rounded-xl bg-gray-100 relative mb-3 lg:mb-4 overflow-hidden shadow-sm">
                        <Image
                          src="/assets/main.png"
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          alt="blog"
                        />
                      </div>

                      <h3 className="text-[13px] lg:text-[14px] font-normal underline text-[#3B82B1] mb-2 leading-[1.4] group-hover:text-[#0D3B59] transition-colors line-clamp-2">
                        Top 5 online Universities in India 2025: Ranks, Courses
                        &...
                      </h3>

                      <div className="flex items-center gap-1.5 text-gray-400">
                        <svg
                          className="w-3.5 h-3.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <p className="text-[11px] text-[#717171] font-regular uppercase tracking-tight">
                          23 Dec, 2025
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* --- SECTION 6: RECOMMENDED COURSES --- */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_15px_rgba(0,0,0,0.02)] p-4 lg:p-6 mt-4">
              <div className="flex justify-between items-center mb-4 lg:mb-6">
                <h2 className="text-[16px] lg:text-[18px] font-bold text-[#111827] leading-snug">
                  Explore some courses which are best for you-
                </h2>
                <button className="text-[13px] font-normal text-[#3B82B1] hover:text-[#0D3B59] transition-colors shrink-0 ml-2">
                  View All
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
                {Array(3)
                  .fill(null)
                  .map((_, i) => (
                    <div
                      key={i}
                      className="bg-white border border-gray-100 rounded-xl p-4 lg:p-5 group cursor-pointer hover:bg-gray-50 transition-all shadow-sm"
                    >
                      <h3 className="text-[13px] lg:text-[14px] font-normal text-[#3B82B1] mb-2 leading-tight underline underline-offset-4 decoration-[#3B82B1]/30 group-hover:text-[#0D3B59] transition-colors">
                        Online MBA degree course
                      </h3>
                      <p className="text-[12px] text-[#595959] leading-relaxed font-normal line-clamp-2 underline underline-offset-2 decoration-[#595959]/20">
                        An Online MBA in India is a 2-year postgraduate degree
                        course in Busi...
                      </p>
                    </div>
                  ))}
              </div>
            </div>

            {/* --- SECTION 7: EXPLORE COLLEGES --- */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_15px_rgba(0,0,0,0.02)] p-4 lg:p-6 mt-4">
              <div className="flex justify-between items-center mb-4 lg:mb-6 border-b border-gray-100 pb-4">
                <h2 className="text-[16px] lg:text-[18px] font-bold text-[#111827]">
                  Explore Colleges-
                </h2>
                <button className="text-[13px] font-normal text-[#3B82B1] hover:text-[#3B82B1] transition-colors">
                  View All
                </button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-6">
                {[
                  {
                    name: "Alagappa University's Directorate of Distance Education",
                    loc: "Karaikudi, Tamil Nadu",
                    img: "/assets/amity.png",
                    type: "location",
                  },
                  {
                    name: "Amity School of Distance Education",
                    loc: "Noida, New Delhi",
                    img: "/assets/amity.png",
                    type: "location",
                  },
                  {
                    name: "Amity University Bengaluru",
                    loc: "Bengaluru, Karnataka",
                    img: "/assets/amity.png",
                    type: "clock",
                  },
                ].map((col, i) => (
                  <div
                    key={i}
                    className="group cursor-pointer border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all bg-white flex flex-col"
                  >
                    <div className="w-full h-20 lg:h-28 bg-gray-100 relative overflow-hidden">
                      <Image
                        src={col.img}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        alt="college"
                      />
                    </div>

                    <div className="p-3 lg:p-4 flex flex-col flex-1">
                      <h3 className="text-[12px] lg:text-[14px] font-normal underline text-[#3B82B1] mb-2 leading-[1.4] group-hover:text-[#0D3B59] transition-colors line-clamp-2 min-h-[32px] lg:min-h-[40px]">
                        {col.name}
                      </h3>

                      <div className="flex items-center gap-1.5 mt-auto">
                        {col.type === "location" ? (
                          <svg
                            className="w-3 h-3 lg:w-3.5 lg:h-3.5 text-gray-400 shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2.5}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                        ) : (
                          <svg
                            className="w-3 h-3 lg:w-3.5 lg:h-3.5 text-gray-400 shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2.5}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        )}
                        <span className="text-[10px] lg:text-[11px] font-normal text-[#717171]">
                          {col.loc}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* --- SECTION 8: FAQ ACCORDION --- */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_15px_rgba(0,0,0,0.02)] p-4 lg:p-6 mt-4 mb-10">
              <h2 className="text-[16px] lg:text-[18px] font-bold text-[#121212] mb-4 lg:mb-6 border-b border-gray-100 pb-4">
                FAQs on Exams-
              </h2>

              <div className="flex flex-col gap-3 lg:gap-4">
                {/* Expanded FAQ Item */}
                <div className="border border-gray-100 rounded-xl bg-[#ffffff] overflow-hidden shadow-sm">
                  <div className="flex justify-between items-center cursor-pointer p-3 lg:p-4 group">
                    <h3 className="text-[13px] lg:text-[14px] font-normal text-[#121212] group-hover:text-[#3B82B1] transition-colors pr-2">
                      1. What is CAT exam 2025 date?
                    </h3>
                    <svg
                      className="w-5 h-5 text-[#0D3B59] shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 15l7-7 7 7"
                      />
                    </svg>
                  </div>
                  <div className="px-3 lg:px-4 pb-3 lg:pb-4">
                    <p className="text-[12px] lg:text-[13px] text-[#121212] leading-relaxed font-normal bg-gray-50/50 p-3 rounded-lg border border-gray-50">
                      CAT 2025 was held on 30 November 2025. The official
                      schedule will be announced by the conducting IIM.
                    </p>
                  </div>
                </div>

                {/* Collapsed FAQ Items */}
                {[
                  "Is CAT exam going to be difficult in 2025?",
                  "Is JEE Main difficult exam?",
                  "How many attempts are allowed in CAT?",
                  "Is CAT exam 2025 going to be held online, if the percentage is below 50%?",
                ].map((question, idx) => (
                  <div
                    key={idx}
                    className="border border-gray-100 rounded-xl p-3 lg:p-4 cursor-pointer hover:bg-gray-50 transition-all flex justify-between items-center group shadow-sm"
                  >
                    <h3 className="text-[13px] lg:text-[14px] font-normal text-[#121212] group-hover:text-[#3B82B1] pr-2">
                      {idx + 2}. {question}
                    </h3>
                    <svg
                      className="w-5 h-5 text-gray-400 group-hover:text-[#0D3B59] transition-colors shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                ))}

                {/* View More Button */}
                <div className="flex justify-center mt-2 lg:mt-4">
                  <button className="text-[13px] font-normal text-[#121212] border border-[#d1d5db] px-6 py-2 rounded-xl hover:bg-gray-50 flex items-center gap-2 transition-all shadow-sm">
                    View more
                    <svg
                      className="w-4 h-4 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>{/* End Content Column */}
        </div>{/* End Layout Container */}
      </div>

      {/* ===== MOBILE FILTER BOTTOM SHEET ===== */}
      {mobileFilterOpen && (
        <>
          {/* Backdrop — anchored to viewport using 100vw/100vh to avoid horizontal drift */}
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              background: "rgba(0,0,0,0.5)",
              zIndex: 40,
            }}
            onClick={() => setMobileFilterOpen(false)}
          />

          {/* Bottom Sheet — width: 100vw + left: 0 anchors to viewport, not page */}
          <div
            style={{
              position: "fixed",
              bottom: 0,
              left: 0,
              width: "100vw",
              zIndex: 50,
              maxHeight: "85vh",
            }}
            className="bg-white rounded-t-2xl shadow-2xl flex flex-col lg:hidden">
            {/* Handle */}
            <div className="flex justify-center pt-3 pb-1">
              <div className="w-10 h-1 bg-gray-300 rounded-full" />
            </div>

            {/* Header */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100">
              <span className="font-bold text-[16px] text-[#111827]">
                All Filters
              </span>
              <button
                onClick={() => {
                  setSelectedCategory("Entrance Exams");
                  setSelectedStreams(["Engineering", "Medical", "Management"]);
                }}
                className="text-[13px] font-medium text-[#3B82B1]"
              >
                Reset
              </button>
            </div>

            {/* Scrollable Filter Content */}
            <div className="overflow-y-auto flex-1 px-5 py-4 flex flex-col gap-5">
              {/* Category Section */}
              <div>
                <h3 className="font-bold text-[13px] text-[#111827] mb-3">
                  Category
                </h3>
                <div className="flex flex-col gap-3">
                  {CATEGORY_FILTERS.map((item, i) => (
                    <label
                      key={i}
                      className="flex items-center justify-between cursor-pointer"
                    >
                      <span className="text-[13px] text-[#121212] font-normal">
                        {item.label}({item.count})
                      </span>
                      <input
                        type="radio"
                        name="mobile-category"
                        checked={selectedCategory === item.label}
                        onChange={() => setSelectedCategory(item.label)}
                        className="w-4 h-4 border-gray-300 cursor-pointer"
                        style={{ accentColor: "#0D3B59" }}
                      />
                    </label>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-100" />

              {/* Stream Section */}
              <div>
                <h3 className="font-bold text-[13px] text-[#111827] mb-3">
                  Stream
                </h3>
                <div className="flex flex-col gap-3">
                  {STREAM_FILTERS.map((stream, i) => (
                    <label
                      key={i}
                      className="flex items-center justify-between cursor-pointer"
                    >
                      <span className="text-[13px] text-[#121212] font-normal">
                        {stream.label}({stream.count})
                      </span>
                      <input
                        type="checkbox"
                        checked={selectedStreams.includes(stream.label)}
                        onChange={() => toggleStream(stream.label)}
                        className="w-4 h-4 rounded border-gray-300 cursor-pointer"
                        style={{ accentColor: "#0D3B59" }}
                      />
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* View Results Button */}
            <div className="px-5 py-4 border-t border-gray-100">
              <button
                onClick={() => setMobileFilterOpen(false)}
                className="w-full py-3 bg-[#0D3B59] text-white font-bold text-[14px] rounded-xl flex items-center justify-center gap-2 hover:bg-[#092a40] transition-all"
              >
                View Results
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
