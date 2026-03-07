"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const MOCK_COLLEGES = [
  {
    logo: "/assets/rec.png",
    name: "Alagappa University's Directorate of Distance Education",
    location: "Noida, Uttar Pradesh",
    approved: "#134 NIRF Rank",
    courses: "12",
    award: "UGC...",
    fees: "125000-200000",
    placement: "25 LPA",
    established: "2005",
  },
  {
    logo: "/assets/lpu.png",
    name: "NMIMS Distance Education",
    location: "Mumbai, Maharashtra",
    approved: "#134 NIRF Rank",
    courses: "15",
    award: "UGC...",
    fees: "125000-200000",
    placement: "25 LPA",
    established: "1981",
  },
  {
    logo: "/assets/rec.png",
    name: "Alagappa University's Directorate of Distance Education",
    location: "Noida, Uttar Pradesh",
    approved: "#134 NIRF Rank",
    courses: "12",
    award: "UGC...",
    fees: "125000-200000",
    placement: "25 LPA",
    established: "2005",
  },
  {
    logo: "/assets/lpu.png",
    name: "NMIMS Distance Education",
    location: "Mumbai, Maharashtra",
    approved: "#134 NIRF Rank",
    courses: "15",
    award: "UGC...",
    fees: "125000-200000",
    placement: "25 LPA",
    established: "1981",
  },
  {
    logo: "/assets/rec.png",
    name: "Alagappa University's Directorate of Distance Education",
    location: "Noida, Uttar Pradesh",
    approved: "#134 NIRF Rank",
    courses: "12",
    award: "UGC...",
    fees: "125000-200000",
    placement: "25 LPA",
    established: "2005",
  },
  {
    logo: "/assets/lpu.png",
    name: "NMIMS Distance Education",
    location: "Mumbai, Maharashtra",
    approved: "#134 NIRF Rank",
    courses: "15",
    award: "UGC...",
    fees: "125000-200000",
    placement: "25 LPA",
    established: "1981",
  },
  {
    logo: "/assets/rec.png",
    name: "Alagappa University's Directorate of Distance Education",
    location: "Noida, Uttar Pradesh",
    approved: "#134 NIRF Rank",
    courses: "12",
    award: "UGC...",
    fees: "125000-200000",
    placement: "25 LPA",
    established: "2005",
  },
  {
    logo: "/assets/lpu.png",
    name: "NMIMS Distance Education",
    location: "Mumbai, Maharashtra",
    approved: "#134 NIRF Rank",
    courses: "15",
    award: "UGC...",
    fees: "125000-200000",
    placement: "25 LPA",
    established: "1981",
  },
  {
    logo: "/assets/rec.png",
    name: "Alagappa University's Directorate of Distance Education",
    location: "Noida, Uttar Pradesh",
    approved: "#134 NIRF Rank",
    courses: "12",
    award: "UGC...",
    fees: "125000-200000",
    placement: "25 LPA",
    established: "2005",
  },
  {
    logo: "/assets/lpu.png",
    name: "NMIMS Distance Education",
    location: "Mumbai, Maharashtra",
    approved: "#134 NIRF Rank",
    courses: "15",
    award: "UGC...",
    fees: "125000-200000",
    placement: "25 LPA",
    established: "1981",
  }
];

export default function CollegeListing() {
  const [states] = useState([
    "Assam",
    "Bihar",
    "Chandigarh",
    "Chhattisgarh",
    "Delhi NCR",
    "Goa",
  ]);
  const [degrees] = useState([
    "B.P.Ed",
    "B.A",
    "B.Arch",
    "B.A (Hons)",
    "B.A + B.Ed(intg)",
  ]);

  return (
    <div className="bg-[#f8f9fa] min-h-screen pb-16 pt-8 font-sans">
      <div className="max-w-[1240px] mx-auto px-4 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-[13px] text-gray-500 mb-3">
          <span>Home</span> <span>&gt;</span>{" "}
          <span className="text-gray-800">Colleges</span>
        </div>

        {/* Heading */}
        <div className="mb-6">
          <h1 className="text-[26px] font-bold text-[#1a2e4a] mb-2">
            <span className="text-orange-500">Online & Distance</span> Degree
            Colleges in India-
          </h1>
          <p className="text-[13px] text-gray-600 leading-relaxed max-w-5xl">
            Our platform provides a comprehensive list of the best online and
            distance learning universities...
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar Filters - Exact Match */}
          <div className="w-full lg:w-[260px] flex-shrink-0 flex flex-col gap-3">
            {/* Header Card */}
            <div className="bg-white border border-gray-100 rounded-xl px-5 py-4 flex items-center justify-between shadow-sm">
              <h3 className="font-semibold text-[15px] text-[#1a2e4a]">
                All Filters
              </h3>
              <button className="text-[#3B82B1] text-[13px] font-medium hover:underline">
                Reset
              </button>
            </div>

            {/* Location Filter Card */}
            <div className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm">
              <div className="px-5 py-3 border-b border-gray-50">
                <h4 className="text-[13px] font-bold text-[#111827]">
                  Location
                </h4>
              </div>
              <div className="p-5">
                <div className="relative mb-4">
                  <input
                    type="text"
                    placeholder="Search Location..."
                    className="w-full bg-white border border-gray-200 rounded-lg py-2.5 px-4 text-[13px] focus:outline-none focus:ring-1 focus:[#0D3B59] placeholder-gray-300"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  {[
                    "Bilaspur, Chhattisgarh",
                    "Chennai, Tamil Nadu",
                    "Meerut, Uttar Pradesh",
                    "Phagwara, Punjab",
                    "West Bengal, Kolkata",
                  ].map((loc, i) => (
                    <label
                      key={i}
                      className="flex items-center justify-between group cursor-pointer"
                    >
                      <span className="text-[13px] text-[#121212] group-hover:text-gray-900">
                        {loc}
                      </span>
                      <input
                        type="checkbox"
                        defaultChecked={i === 0}
                        className=" w-4 h-4 rounded border-gray-300 text-[#0D3B59] focus:ring-[#0D3B59]"
                        style={{ accentColor: "#0D3B59" }}
                      />
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Degree Filter Card */}
            <div className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm">
              <div className="px-5 py-3 border-b border-gray-50">
                <h4 className="text-[13px] font-bold text-[#111827]">Degree</h4>
              </div>
              <div className="p-5">
                <div className="relative mb-4">
                  <input
                    type="text"
                    placeholder="Search Degree..."
                    className="w-full bg-white border border-gray-200 rounded-lg py-2.5 px-4 text-[13px] focus:outline-none focus:ring-1 focus:ring-[#0D3B59] placeholder-gray-300"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  {[
                    "B. Pharma",
                    "B. A",
                    "B. A LLB",
                    "B. Com",
                    "B. Sc Medical",
                  ].map((deg, i) => (
                    <label
                      key={i}
                      className="flex items-center justify-between group cursor-pointer"
                    >
                      <span className="text-[13px] text-[#121212] group-hover:text-gray-900">
                        {deg}
                      </span>
                      <input
                        type="checkbox"
                        defaultChecked={i === 0}
                        className="w-4 h-4 rounded border-gray-300 text-[#0D3B59] focus:ring-[#0D3B59]"
                        style={{ accentColor: "#0D3B59" }}
                      />
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 flex flex-col gap-4">
            {/* Search Bar */}
            <div className="bg-white border border-gray-200 rounded-xl px-4 py-3 flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-2 text-gray-400 w-full">
                <svg
                  className="w-4 h-4"
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
                  placeholder="Search Colleges..."
                  className="outline-none text-gray-700 bg-transparent w-full text-sm"
                />
              </div>
              <span className="text-gray-400 text-xs whitespace-nowrap">
                Showing {MOCK_COLLEGES.length} Colleges
              </span>
            </div>

            {/* NEW COLLEGE BOX LAYOUT */}
            <div className="flex flex-col gap-5 lg:w-[912px]">
              {MOCK_COLLEGES.map((college, i) => (
                <div
                  key={i}
                  className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow relative group h-[281px] flex flex-col overflow-hidden"
                >
                  {/* Row 1: Logo, NIRF, and Top Icons */}
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-4">
                      <Link
                        href="/?view=university"
                        className="w-16 h-16 relative flex-shrink-0 border border-gray-100 rounded-lg p-1 bg-white hover:border-[#1a2e4a] transition-colors cursor-pointer"
                      >
                        <Image
                          src={college.logo}
                          alt="Logo"
                          fill
                          className="object-contain"
                        />
                      </Link>
                      <div className="flex flex-col gap-1">
                        {/* NIRF Badge */}
                        <span className="bg-[#e7f3f0] text-[#007B2D] text-[14px] font-normal px-2 py-0.5 rounded w-fit border border-[#d1e9e2]">
                          {college.approved}
                        </span>
                        <div className="flex items-center gap-1 text-gray-400 text-[12px]">
                          {/* Placeholder for Pin Icon */}
                          <img
                            src="/assets/loc.png"
                            alt=""
                            className="w-3.5 h-3.5"
                          />
                          {college.location}
                        </div>
                      </div>
                    </div>
                    {/* Share/Bookmark Icons */}
                    <div className="flex gap-4 text-gray-300">
                      <img
                        src="/assets/share.png"
                        alt=""
                        className="w-5 h-5 cursor-pointer hover:opacity-70"
                      />
                      <img
                        src="/assets/two.png"
                        alt=""
                        className="w-5 h-5 cursor-pointer hover:opacity-70"
                      />
                    </div>
                  </div>

                  {/* University Title */}
                  <Link href="/?view=university" className="w-fit">
                    <h2 className="text-[20px] font-semibold text-[#111827] hover:text-[#0D3B59] transition-colors mb-0 leading-tight">
                      {college.name}
                    </h2>
                  </Link>
                  <p className="text-[13px] text-gray-500 mb-0 font-regular leading-relaxed">
                    Kamala Nehru College is a Public Institute, located in New
                    Delhi, Delhi. Established in 1964...{" "}
                    <span className="text-[#3B82B1] cursor-pointer">
                      read more...
                    </span>
                  </p>

                  {/* Data Grid: 4 Columns with vertical dividers */}
                  <div className="grid grid-cols-4 border-t border-none border-gray-100 py-1 mb-1">
                    <div className="px-2 border-r border-gray-100">
                      <div className="flex items-center gap-2 mb-1">
                        <img src="/assets/cap.png" alt="" className="w-4 h-4" />{" "}
                        {/* Courses Icon */}
                        <span className="text-[14px] font-bold text-gray-800">
                          {college.courses}
                        </span>
                      </div>
                      <p className="text-[11px] text-gray-400 pl-6">
                        Courses Available
                      </p>
                    </div>
                    <div className="px-4 border-r border-gray-100">
                      <div className="flex items-center gap-2 mb-1">
                        <img
                          src="/assets/rup1.png"
                          alt=""
                          className="w-4 h-4"
                        />{" "}
                        {/* Rating Icon */}
                        <span className="text-[14px] font-bold text-gray-800">
                          {college.fees}
                        </span>
                      </div>
                      <p className="text-[11px] text-gray-400 pl-6">
                        Fee Range
                      </p>
                    </div>
                    <div className="px-4 border-r border-gray-100">
                      <div className="flex items-center gap-2 mb-1">
                        <img
                          src="/assets/rup1.png"
                          alt=""
                          className="w-4 h-4"
                        />{" "}
                        {/* Fees Icon */}
                        <span className="text-[14px] font-bold text-gray-800">
                          {college.award}
                        </span>
                      </div>
                      <p className="text-[11px] text-gray-400 pl-6">
                        Accreditation
                      </p>
                    </div>
                    <div className="px-4">
                      <div className="flex items-center gap-2 mb-1">
                        <img
                          src="/assets/grow.png"
                          alt=""
                          className="w-4 h-4"
                        />{" "}
                        {/* Placement Icon */}
                        <span className="text-[14px] font-bold text-gray-800">
                          {college.placement}
                        </span>
                      </div>
                      <p className="text-[11px] text-gray-400 pl-6">
                        Highest Package
                      </p>
                    </div>
                  </div>

                  {/* Footer: Established and Action Buttons */}
                  <div className="flex items-center justify-between mt-2 pt-4 border-t border-gray-50">
                    <div className="flex items-center gap-2 text-[#595959] text-[16px] font-regular">
                      <img src="/assets/clock.png" alt="" className="w-4 h-4" />{" "}
                      {/* Clock Icon */}
                      Established in {college.established}
                    </div>
                    <div className="flex items-center gap-3">
                      {/* Download Button Icon */}
                      <button className="p-2.5 border border-gray-200 rounded-lg text-[#1a2e4a] hover:bg-gray-50 shadow-sm">
                        <img src="/assets/one.png" alt="" className="w-5 h-5" />
                      </button>
                      <button className="px-6 py-2 text-[14px] font-bold text-[#1a2e4a] border border-[#1a2e4a] rounded-lg hover:bg-gray-50">
                        Compare
                      </button>
                      <button className="px-8 py-2 text-[14px] font-bold text-white bg-[#0D3B59] rounded-lg hover:bg-[#111e30] shadow-sm">
                        Shortlist
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Pagination UI - Exact Match */}
            <div className="flex justify-center mt-12 mb-8">
              <div className="flex items-center gap-2 bg-white border border-gray-100 rounded-xl p-3 shadow-sm">
                {/* Previous Button */}
                <button className="w-10 h-10 flex items-center justify-center border border-gray-200 text-gray-400 rounded-lg hover:bg-gray-50 transition-colors">
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
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                {/* Active Page */}
                <button className="w-10 h-10 flex items-center justify-center text-white bg-[#0D3B59] rounded-lg font-bold shadow-md">
                  1
                </button>

                {/* Inactive Pages */}
                {[2, 3, 4, 5].map((num) => (
                  <button
                    key={num}
                    className="w-10 h-10 flex items-center justify-center border border-[#0D3B59] text-[#0D3B59] rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                  >
                    {num}
                  </button>
                ))}

                {/* Ellipsis */}
                <span className="px-1 text-gray-400 font-bold self-end pb-2 tracking-widest">
                  ....
                </span>

                {/* End Pages */}
                {[197, 198, 199].map((num) => (
                  <button
                    key={num}
                    className="w-10 h-10 flex items-center justify-center border border-[#0D3B59] text-[#0D3B59] rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                  >
                    {num}
                  </button>
                ))}

                {/* Next Button with Chevron */}
                <button className="px-4 h-10 border border-gray-200 text-gray-600 rounded-lg font-semibold flex items-center gap-2 hover:bg-gray-50 transition-colors">
                  Next
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* --- Explore Other Popular Universities Section --- */}
            <div className="mt-12 mb-8">
              <h2 className="text-[#121212] font-bold text-[24px] mb-6">
                Explore Other Popular Universities-
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {/* Use your POPULAR_UNIVERSITIES array or mock data below */}
                {[
                  {
                    name: "Lovely Professional University Online-",
                    logo: "/assets/lpu.png",
                  },
                  {
                    name: "GLA University Online Courses & Admission 2025",
                    logo: "/assets/lpu.png",
                  },
                  {
                    name: "Uttaranchal University Online Courses & Admissio...",
                    logo: "/assets/sastra.png",
                  },
                  {
                    name: "Jain University Distance Education",
                    logo: "/assets/lpu.png",
                  },
                  {
                    name: "Sharda University Online Education Programs 2025",
                    logo: "/assets/lpu.png",
                  },
                  {
                    name: "Sastra University Online",
                    logo: "/assets/sastra.png",
                  },
                  {
                    name: "NMIMS Online Courses & Admissions 2026",
                    logo: "/assets/nmims.png",
                  },
                  {
                    name: "Amrita University Online",
                    logo: "/assets/amrita.png",
                  },
                  {
                    name: "Amritsar Group of colleges",
                    logo: "/assets/lpu.png",
                  },
                ].map((univ, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-gray-100 rounded-xl hover:shadow-md transition-shadow flex flex-col items-center text-center overflow-hidden"
                  >
                    <Link
                      href="/?view=university"
                      className="w-full flex-col flex items-center p-5 cursor-pointer flex-1"
                    >
                      {/* University Logo Container */}
                      <div className="w-full h-14 flex items-center justify-center mb-4">
                        <div className="relative w-32 h-10">
                          <Image
                            src={univ.logo}
                            alt={univ.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>

                      {/* University Name */}
                      <h3 className="text-[#121212] font-semibold text-[18px] leading-snug mb-3 min-h-[40px] flex items-center justify-center underline hover:text-[#0D3B59] transition-colors">
                        {univ.name}
                      </h3>

                      {/* Location and Course Count */}
                      <div className="flex items-center justify-between w-full pt-3 border-t border-gray-50 text-[11px] text-gray-400 mt-auto">
                        <div className="flex items-center gap-1">
                          <img
                            src="/assets/loc.png"
                            alt=""
                            className="w-3 h-3 opacity-60"
                          />
                          <span className="text-[#595959]">
                            Phagwara, Punjab
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <img
                            src="/assets/cap.png"
                            alt=""
                            className="w-3 h-3 opacity-60"
                          />
                          <span className="text-[#595959]">19 Courses</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* --- Top Courses Interest Section --- */}
            <div className="mt-12 mb-10">
              <h2 className="text-[#1a2e4a] font-bold text-[20px] mb-6">
                Top courses which may interest you-
              </h2>

              <div className="flex flex-col gap-5">
                {[
                  {
                    title: "Online MBA in Human Resource Management",
                    colleges: [
                      "Uttaranchal University Online",
                      "GLA University Online",
                      "Jain University Online",
                      "Shoolini University Online",
                      "Amity University Online",
                      "IU International University Online",
                      "Sharda University Online",
                      "DMIMS University Online",
                      "LPU Online",
                      "VOU Distance Education",
                      "Kurukshetra University Online",
                      "DAVV Distance Education",
                    ],
                  },
                  {
                    title: "Online MA in English",
                    colleges: [
                      "Uttaranchal University Online",
                      "GLA University Online",
                      "Jain University Online",
                      "Shoolini University Online",
                      "Amity University Online",
                      "IU International University Online",
                      "Sharda University Online",
                      "DMIMS University Online",
                      "LPU Online",
                      "VOU Distance Education",
                      "Kurukshetra University Online",
                      "DAVV Distance Education",
                    ],
                  },
                  {
                    title: "Online MBA in Marketing",
                    colleges: [
                      "Uttaranchal University Online",
                      "GLA University Online",
                      "Jain University Online",
                      "Shoolini University Online",
                      "Amity University Online",
                      "IU International University Online",
                      "Sharda University Online",
                      "DMIMS University Online",
                      "LPU Online",
                      "VOU Distance Education",
                      "Kurukshetra University Online",
                      "DAVV Distance Education",
                    ],
                  },
                ].map((course, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm"
                  >
                    {/* Course Header with Blue Accent Bar */}
                    <div className="flex items-center gap-3 mb-4 border-l-[3px] border-[#1a2e4a] pl-3">
                      <h3 className="text-[#121212] font-semibold text-[15px]">
                        {course.title}
                      </h3>
                    </div>

                    {/* Sub-heading with Green Check */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-4 h-4 rounded-full bg-[#22c55e] flex items-center justify-center">
                        <svg
                          className="w-2.5 h-2.5 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={4}
                        >
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-[#595959] text-[13px] font-medium">
                        Colleges offering this course-
                      </p>
                    </div>

                    {/* Two-Column Links Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-2.5">
                      {course.colleges.map((college, cIdx) => (
                        <div
                          key={cIdx}
                          className="flex items-center gap-2 group cursor-pointer"
                        >
                          {/* Play-button style bullet */}
                          <svg
                            className="w-2.5 h-2.5 text-[#1a2e4a]"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                          <span className="text-[#3B82B1] text-[13px] hover:underline truncate underline">
                            {college}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
