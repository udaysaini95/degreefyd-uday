"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const COURSES = [
  {
    title: "Master of Business Administration (MBA)",
    desc: "Kamala Nehru College is a Public Institute, located in New Delhi, Delhi. Established in 1964, Kamala Nehru College offers 4 programs such as MA, BA, B.Com, BSc in multiple",
    duration: "2 Years",
    fee: "100000-124089",
  },
  {
    title: "BA in Journalism and Mass Communication (BAJMC)",
    desc: "Kamala Nehru College is a Public Institute, located in New Delhi, Delhi. Established in 1964, Kamala Nehru College offers 4 programs such as MA, BA, B.Com, BSc in multiple",
    duration: "3 Years",
    fee: "100000-124000",
  },
  {
    title: "Master of Business Administration (MBA)",
    desc: "Kamala Nehru College is a Public Institute, located in New Delhi, Delhi. Established in 1964, Kamala Nehru College offers 4 programs such as MA, BA, B.Com, BSc in multiple",
    duration: "2 Years",
    fee: "100000-124000",
  },
  {
    title: "BA in Journalism and Mass Communication (BAJMC)",
    desc: "Kamala Nehru College is a Public Institute, located in New Delhi, Delhi. Established in 1964, Kamala Nehru College offers 4 programs such as MA, BA, B.Com, BSc in multiple",
    duration: "2 Years",
    fee: "100000-124000",
  },
  {
    title: "Master of Business Administration (MBA)",
    desc: "Kamala Nehru College is a Public Institute, located in New Delhi, Delhi. Established in 1964, Kamala Nehru College offers 4 programs such as MA, BA, B.Com, BSc in multiple",
    duration: "2 Years",
    fee: "100000-124000",
  },
];

const EXAMS = [
  { name: "CAT 2023", desc: "An online test of which a 2-year post-graduate degree course in Business..." },
  { name: "JEE Main 2023", desc: "An online test of which a 4-year post-graduate degree course in Business..." },
  { name: "XAT 2023", desc: "An online test of which a 2-year post-graduate degree course in Business..." },
];

const LEVEL_OPTIONS = [
  { label: "UG", count: 95 },
  { label: "PG", count: 71 },
  { label: "Diploma", count: 34 },
  { label: "Certificate", count: 23 },
  { label: "Dip", count: 11 },
];

const MODE_OPTIONS = [
  { label: "Online", count: 35 },
  { label: "Distance", count: 56 },
  { label: "Regular", count: 85 },
];

export default function CourseListing() {
  // Desktop filter state
  const [levelFilters, setLevelFilters] = useState({
    ug: false, pg: false, diploma: false, certificate: false, phd: false,
  });
  const [modeFilters, setModeFilters] = useState({
    online: true, distance: true, regular: false,
  });

  // Mobile filter state
  const [activeMobileSheet, setActiveMobileSheet] = useState<"level" | "mode" | null>(null);
  const [selectedLevels, setSelectedLevels] = useState<string[]>([]);
  const [selectedModes, setSelectedModes] = useState<string[]>([]);

  // Lock body scroll when any bottom sheet is open
  useEffect(() => {
    if (activeMobileSheet) {
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
  }, [activeMobileSheet]);

  const toggleLevel = (label: string) => {
    setSelectedLevels((prev) =>
      prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label]
    );
  };

  const toggleMode = (label: string) => {
    setSelectedModes((prev) =>
      prev.includes(label) ? prev.filter((m) => m !== label) : [...prev, label]
    );
  };

  // Label shown on the level pill
  const levelPillLabel =
    selectedLevels.length === 1
      ? selectedLevels[0]
      : selectedLevels.length > 1
        ? `Level (${selectedLevels.length})`
        : "Choose Level";

  // Label shown on the mode pill
  const modePillLabel =
    selectedModes.length === 1
      ? selectedModes[0]
      : selectedModes.length > 1
        ? `Mode (${selectedModes.length})`
        : "Choose Mode";

  return (
    <div className="bg-[#f8f9fa] min-h-screen pb-16 pt-8 overflow-x-hidden">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-8">

        {/* Breadcrumb */}
        <div className="mb-4">
          <div className="flex items-center gap-2 text-[13px] text-gray-500 mb-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <span>&gt; Courses</span>
          </div>
          <h1 className="text-[22px] lg:text-[24px] font-bold text-[#1a2e4a] leading-snug">
            Top Online &amp; Distance{" "}
            <span className="text-orange-500">Degree Programs</span> in India
          </h1>
        </div>

        {/* ===== MOBILE FILTER PILL ROW (mobile only) ===== */}
        <div className="flex lg:hidden items-center gap-2 mb-3">
          {/* Level pill */}
          <button
            onClick={() => setActiveMobileSheet("level")}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-[12px] font-medium border whitespace-nowrap transition-all
              ${selectedLevels.length > 0
                ? "bg-[#0D3B59] text-white border-[#0D3B59]"
                : "bg-white text-[#111827] border-gray-300"
              }`}
          >
            {levelPillLabel}
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Mode pill */}
          <button
            onClick={() => setActiveMobileSheet("mode")}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-[12px] font-medium border whitespace-nowrap transition-all
              ${selectedModes.length > 0
                ? "bg-[#0D3B59] text-white border-[#0D3B59]"
                : "bg-white text-[#111827] border-gray-300"
              }`}
          >
            {modePillLabel}
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">

          {/* ===== DESKTOP SIDEBAR (hidden on mobile) ===== */}
          <div className="hidden lg:flex w-[260px] flex-shrink-0 flex-col gap-4">
            <div className="bg-white border border-gray-200 rounded-xl p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-[14px] text-[#121212]">All Filters</h3>
                <button className="text-[#3B82B1] text-[12px] hover:underline font-normal">Reset</button>
              </div>

              {/* Level */}
              <div className="mb-6">
                <h4 className="text-[13px] font-semibold text-gray-700 mb-3">Level</h4>
                <div className="flex flex-col gap-2.5">
                  {[
                    { label: "UG (85)" },
                    { label: "PG (72)" },
                    { label: "Diploma (54)" },
                    { label: "Certificate (25)" },
                    { label: "Ph. D. (12)" },
                  ].map((item, i) => (
                    <label key={i} className="flex items-center justify-between group cursor-pointer">
                      <span className="text-[13px] text-gray-600">{item.label}</span>
                      <input type="checkbox" className="w-4 h-4 rounded border-gray-300"
                        style={{ accentColor: "#0D3B59" }} />
                    </label>
                  ))}
                </div>
              </div>

              {/* Mode */}
              <div>
                <h4 className="text-[13px] font-semibold text-gray-700 mb-3">Mode</h4>
                <div className="flex flex-col gap-2.5">
                  {[
                    { label: "Online (120)", checked: true },
                    { label: "Distance (85)", checked: true },
                    { label: "Regular (24)" },
                  ].map((item, i) => (
                    <label key={i} className="flex items-center justify-between group cursor-pointer">
                      <span className="text-[13px] text-gray-600">{item.label}</span>
                      <input type="checkbox" defaultChecked={item.checked}
                        className="w-4 h-4 rounded border-gray-300"
                        style={{ accentColor: "#0D3B59" }} />
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ===== MAIN CONTENT COLUMN ===== */}
          <div className="flex-1 flex flex-col gap-4">

            {/* Search bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search courses..."
                className="w-full bg-white border border-gray-200 rounded-xl py-3 pl-11 pr-4 text-[14px] focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <svg className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2"
                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            {/* Course Cards */}
            <div className="flex flex-col gap-4">
              {COURSES.map((course, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-xl p-4 lg:p-5 hover:shadow-md transition-shadow">
                  {/* Title */}
                  <h3 className="font-bold text-[15px] lg:text-[16px] text-[#1a2e4a] mb-1.5 hover:text-blue-600 transition-colors">
                    <Link href="/?view=course-detail">{course.title}</Link>
                  </h3>
                  {/* Description */}
                  <p className="text-[12px] lg:text-[13px] text-gray-600 mb-3 leading-relaxed">
                    {course.desc.substring(0, 100)}{" "}
                    <span className="text-blue-500 cursor-pointer hover:underline">read more...</span>
                  </p>

                  {/* Stats + Buttons */}
                  <div className="flex flex-col gap-3 border-t border-gray-100 pt-3">
                    {/* Duration & Fee row */}
                    <div className="flex items-center gap-6">
                      <div className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div>
                          <p className="text-[10px] lg:text-[11px] text-gray-400">Duration</p>
                          <p className="text-[12px] lg:text-[13px] font-semibold text-gray-800">{course.duration}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                            d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <div>
                          <p className="text-[10px] lg:text-[11px] text-gray-400">Fee Range</p>
                          <p className="text-[12px] lg:text-[13px] font-semibold text-gray-800">{course.fee}</p>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons — full width on mobile */}
                    <div className="flex items-center gap-2 lg:gap-3">
                      <button className="flex-1 lg:flex-none px-4 lg:px-5 py-2 text-[12px] lg:text-[13px] font-semibold text-[#1a2e4a] border border-[#1a2e4a] rounded-lg hover:bg-gray-50 transition-colors text-center">
                        Ask an Expert
                      </button>
                      <Link href="/?view=course-detail"
                        className="flex-1 lg:flex-none px-4 lg:px-5 py-2 text-[12px] lg:text-[13px] font-semibold text-white bg-[#1a2e4a] rounded-lg hover:bg-[#111e30] transition-colors text-center">
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-2">
              <div className="flex items-center gap-1 bg-white border border-gray-200 rounded-lg p-1">
                <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:bg-gray-50 rounded-md">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button className="w-8 h-8 flex items-center justify-center text-white bg-[#1a2e4a] rounded-md text-[13px] font-medium">1</button>
                <button className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-50 rounded-md text-[13px] font-medium">2</button>
                <span className="w-8 h-8 flex items-center justify-center text-gray-400">...</span>
                <button className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-50 rounded-md text-[13px] font-medium">6</button>
                <button className="px-3 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-50 rounded-md text-[13px] font-medium gap-1">
                  Next
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Popular Exams */}
            <div className="mt-6 flex flex-col gap-6">
              <div className="bg-white border border-gray-200 rounded-xl p-4 lg:p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-[15px] lg:text-[16px] text-[#1a2e4a]">Explore some popular exams-</h3>
                  <Link href="#" className="text-blue-500 text-[13px] hover:underline">View All</Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {EXAMS.map((exam, i) => (
                    <div key={i} className="border border-gray-100 rounded-lg p-3 lg:p-4 hover:shadow-sm">
                      <Link href="#" className="text-[#3B82B1] text-[13px] lg:text-[14px] font-semibold hover:underline border-b border-[#3B82B1] inline-block mb-2">
                        {exam.name}
                      </Link>
                      <p className="text-[11px] lg:text-[12px] text-[#121212] underline leading-relaxed">{exam.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Popular Colleges */}
              <div className="bg-white border border-gray-200 rounded-xl p-4 lg:p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-[15px] lg:text-[16px] text-[#1a2e4a]">Explore some popular Colleges-</h3>
                  <Link href="#" className="text-[#3B82B1] text-[13px] hover:underline">View All</Link>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-4">
                  {[1, 2, 3].map((_, i) => (
                    <div key={i} className="border border-gray-100 rounded-lg overflow-hidden hover:shadow-sm">
                      <Image src="/assets/amity.png" alt="Amity Institute of Technology"
                        width={300} height={150} className="w-full h-20 lg:h-24 object-cover" />
                      <div className="p-2 lg:p-3">
                        <p className="text-[#3B82B1] text-[12px] lg:text-[13px] font-normal mb-1">
                          Amity Institute of Technology
                        </p>
                        <p className="text-gray-400 text-[10px] lg:text-[11px] flex items-center gap-1">
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          New Delhi
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQs */}
              <div className="bg-white border border-gray-200 rounded-xl p-4 lg:p-6 mb-8">
                <h3 className="font-bold text-[15px] lg:text-[16px] text-[#1a2e4a] mb-4">FAQs on Courses-</h3>
                <div className="flex flex-col gap-3">
                  <div className="border border-gray-200 rounded-lg p-3 lg:p-4">
                    <div className="flex items-center justify-between cursor-pointer">
                      <p className="text-[13px] lg:text-[14px] font-normal text-gray-800 pr-2">
                        1. What is the eligibility for BBA?
                      </p>
                      <svg className="w-4 h-4 text-gray-500 transform rotate-180 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                    <p className="text-[12px] lg:text-[13px] text-gray-600 mt-3 pt-3 border-t border-gray-100 leading-relaxed font-normal">
                      Candidates must have completed Class 12 from a recognized board with a minimum of 50%-60% aggregate.
                    </p>
                  </div>
                  {[
                    "2. Is an entrance exam required for a BBA course?",
                    "3. What is the total fee for BBA?",
                  ].map((q, i) => (
                    <div key={i} className="border border-gray-200 rounded-lg p-3 lg:p-4 flex items-center justify-between cursor-pointer">
                      <p className="text-[13px] lg:text-[14px] font-normal text-gray-800 pr-2">{q}</p>
                      <svg className="w-4 h-4 text-gray-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center mt-4">
                  <button className="flex items-center gap-1 text-[13px] font-medium text-gray-600 border border-gray-200 px-4 py-2 rounded-lg hover:bg-gray-50">
                    View more
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== MOBILE BOTTOM SHEETS ===== */}
      {activeMobileSheet && (
        <>
          {/* Backdrop — viewport-anchored to prevent drift */}
          <div
            style={{
              position: "fixed", top: 0, left: 0,
              width: "100vw", height: "100vh",
              background: "rgba(0,0,0,0.5)", zIndex: 40,
            }}
            onClick={() => setActiveMobileSheet(null)}
          />

          {/* Bottom Sheet — viewport-anchored */}
          <div
            style={{
              position: "fixed", bottom: 0, left: 0,
              width: "100vw", zIndex: 50, maxHeight: "75vh",
            }}
            className="bg-white rounded-t-2xl shadow-2xl flex flex-col lg:hidden"
          >
            {/* Handle */}
            <div className="flex justify-center pt-3 pb-1">
              <div className="w-10 h-1 bg-gray-300 rounded-full" />
            </div>

            {/* Sheet Header */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100">
              <span className="font-bold text-[16px] text-[#111827]">
                {activeMobileSheet === "level" ? "Level" : "Mode"}
              </span>
              <button
                onClick={() => {
                  if (activeMobileSheet === "level") setSelectedLevels([]);
                  else setSelectedModes([]);
                }}
                className="text-[13px] font-medium text-[#3B82B1]"
              >
                Reset
              </button>
            </div>

            {/* Filter Options */}
            <div className="overflow-y-auto flex-1 px-5 py-4 flex flex-col gap-3">
              {activeMobileSheet === "level"
                ? LEVEL_OPTIONS.map((item, i) => (
                  <label key={i} className="flex items-center justify-between cursor-pointer py-0.5">
                    <span className="text-[14px] text-[#121212] font-normal">
                      {item.label}({item.count})
                    </span>
                    <input
                      type="checkbox"
                      checked={selectedLevels.includes(item.label)}
                      onChange={() => toggleLevel(item.label)}
                      className="w-4 h-4 rounded border-gray-300 cursor-pointer"
                      style={{ accentColor: "#0D3B59" }}
                    />
                  </label>
                ))
                : MODE_OPTIONS.map((item, i) => (
                  <label key={i} className="flex items-center justify-between cursor-pointer py-0.5">
                    <span className="text-[14px] text-[#121212] font-normal">
                      {item.label}({item.count})
                    </span>
                    <input
                      type="checkbox"
                      checked={selectedModes.includes(item.label)}
                      onChange={() => toggleMode(item.label)}
                      className="w-4 h-4 rounded border-gray-300 cursor-pointer"
                      style={{ accentColor: "#0D3B59" }}
                    />
                  </label>
                ))}
            </div>

            {/* View Results Button */}
            <div className="px-5 py-4 border-t border-gray-100">
              <button
                onClick={() => setActiveMobileSheet(null)}
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
