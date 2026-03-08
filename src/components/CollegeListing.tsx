"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const LOCATION_OPTIONS = [
  "Bilaspur, Chhattisgarh",
  "Chennai, Tamil Nadu",
  "Meerut, Uttar Pradesh",
  "Phagwara, Punjab",
  "West Bengal, Kolkata",
  "Ahmedabad, Gujarat",
  "Aizawl, Mizoram",
  "Aligarh, Uttar Pradesh",
  "Amarkantak, Anuppur",
];

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

  // Mobile Filter Drawer States
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);

  const toggleLocation = (loc: string) => {
    setSelectedLocations((prev) =>
      prev.includes(loc) ? prev.filter((l) => l !== loc) : [...prev, loc]
    );
  };

  return (
    <div className="bg-[#f8f9fa] min-h-screen pb-16 pt-3 lg:pt-8 font-sans">
      <div className="max-w-[1240px] mx-auto px-4 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-1 text-[11px] lg:text-[13px] text-gray-500 mb-2 lg:mb-3">
          <span>Home</span> <span>&gt;</span>{" "}
          <span className="text-gray-800">Colleges</span>
        </div>

        {/* Heading */}
        <div className="mb-4 lg:mb-6">
          <h1 className="text-[20px] lg:text-[26px] font-bold text-[#1a2e4a] mb-1.5 lg:mb-2 leading-tight">
            <span className="text-orange-500">Online & Distance</span> Degree
            Colleges in India-
          </h1>
          <p className="text-[12px] lg:text-[13px] text-gray-600 leading-relaxed lg:max-w-5xl">
            Top colleges in India include Alagappa University Distance, Amity School of Distance Education, Amity University Bengaluru, Amity University Gurugram, Amity University Gwalior and others. Get complete information on rankings, placements, fees, admission process, cut-off trends, eligibility criteria, and student reviews to help you compare top universities in India.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
          {/* Sidebar Filters - Exact Match */}
          <div className="hidden lg:flex w-[260px] flex-shrink-0 flex-col gap-3">
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
                  {LOCATION_OPTIONS.slice(0, 5).map((loc, i) => (
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
          <div className="flex-1 flex flex-col gap-3 lg:gap-4 w-full">
            {/* Mobile Filters Area (Screenshots) */}
            <div className="flex lg:hidden gap-3 mb-1">
              <button
                onClick={() => setIsLocationModalOpen(true)}
                className={`flex-1 border rounded-lg py-2.5 px-3 flex items-center justify-between shadow-sm text-[13px] font-medium transition-colors ${selectedLocations.length > 0
                  ? "bg-[#1a2e4a] border-[#1a2e4a] text-white"
                  : "bg-white border-gray-200 text-gray-700"
                  }`}
              >
                <div className="flex items-center gap-2">
                  {selectedLocations.length > 0 && (
                    <span className="bg-white text-[#1a2e4a] text-[10px] font-bold px-1.5 py-0.5 rounded-[4px] leading-none">
                      {selectedLocations.length}
                    </span>
                  )}
                  <span>
                    {selectedLocations.length > 0
                      ? "Location"
                      : "Choose Location"}
                  </span>
                </div>
                <svg
                  className={`w-4 h-4 ${selectedLocations.length > 0
                    ? "text-white"
                    : "text-gray-400"
                    }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <button className="flex-1 bg-white border border-gray-200 rounded-lg py-2.5 px-3 flex items-center justify-between shadow-sm text-[13px] font-medium text-gray-700">
                Choose Degree
                <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            {/* Search Bar */}
            <div className="bg-white border border-gray-200 rounded-xl px-4 py-3 flex items-center justify-between shadow-sm mb-1 lg:mb-0">
              <div className="flex items-center gap-2 text-gray-400 w-full">
                <svg
                  className="w-4 h-4 lg:w-4 lg:h-4"
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
                  className="outline-none text-gray-700 bg-transparent w-full text-sm placeholder-gray-400"
                />
              </div>
              <span className="hidden lg:block text-gray-400 text-xs whitespace-nowrap">
                Showing {MOCK_COLLEGES.length} Colleges
              </span>
            </div>

            {/* NEW COLLEGE BOX LAYOUT */}
            <div className="flex flex-col gap-4 lg:gap-5 lg:w-[912px]">
              {MOCK_COLLEGES.map((college, i) => (
                <div
                  key={i}
                  className="bg-white border border-gray-100 rounded-lg lg:rounded-xl p-4 lg:p-6 shadow-sm hover:shadow-md transition-shadow relative group h-auto lg:h-[281px] flex flex-col overflow-hidden"
                >
                  {/* Row 1: Logo, NIRF, and Top Icons */}
                  <div className="flex justify-between items-start mb-3 lg:mb-4">
                    <div className="flex items-center gap-3 lg:gap-4">
                      <Link
                        href="/?view=university"
                        className="w-12 h-12 lg:w-16 lg:h-16 relative flex-shrink-0 border border-gray-100 rounded-lg p-1 bg-white hover:border-[#1a2e4a] transition-colors cursor-pointer"
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
                        <span className="bg-[#e7f3f0] text-[#007B2D] text-[10px] lg:text-[14px] font-medium lg:font-normal px-2 py-0.5 rounded w-fit border border-[#d1e9e2]">
                          {college.approved}
                        </span>
                        <div className="flex items-center gap-1 text-gray-500 lg:text-gray-400 text-[11px] lg:text-[12px]">
                          {/* Placeholder for Pin Icon */}
                          <img
                            src="/assets/loc.png"
                            alt=""
                            className="w-3 h-3 lg:w-3.5 lg:h-3.5"
                          />
                          {college.location}
                        </div>
                      </div>
                    </div>
                    {/* Share/Bookmark Icons */}
                    <div className="flex gap-3 lg:gap-4 text-gray-300">
                      <img
                        src="/assets/share.png"
                        alt=""
                        className="w-4 h-4 lg:w-5 lg:h-5 cursor-pointer hover:opacity-70"
                      />
                      <img
                        src="/assets/two.png"
                        alt=""
                        className="w-4 h-4 lg:w-5 lg:h-5 cursor-pointer hover:opacity-70"
                      />
                    </div>
                  </div>

                  {/* University Title */}
                  <Link href="/?view=university" className="w-fit">
                    <h2 className="text-[15px] lg:text-[20px] font-semibold text-[#111827] hover:text-[#0D3B59] transition-colors mb-0.5 lg:mb-0 leading-tight">
                      {college.name}
                    </h2>
                  </Link>
                  <p className="text-[11px] lg:text-[13px] text-gray-500 mb-3 lg:mb-0 font-regular leading-relaxed mt-0 lg:mt-1">
                    Kamala Nehru College is a Public Institu <span className="text-[#3B82B1] cursor-pointer">read more...</span>
                  </p>

                  {/* Data Grid: 2 Columns Mobile, 4 Columns Desktop */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-b lg:border-none lg:border-t-0 border-gray-100 py-3 lg:py-1 mb-4 lg:mb-1 gap-y-4 lg:gap-y-0 relative">
                    <div className="px-0 lg:px-2 border-r border-gray-100 flex flex-col items-start lg:block">
                      <div className="flex items-center gap-1 lg:gap-2 mb-1">
                        <img src="/assets/cap.png" alt="" className="w-3.5 h-3.5 lg:w-4 lg:h-4 opacity-70 lg:opacity-100" />{" "}
                        <span className="text-[12px] lg:text-[14px] font-bold text-gray-800">
                          {college.courses}
                        </span>
                      </div>
                      <p className="text-[10px] lg:text-[11px] text-gray-400 pl-4 lg:pl-6">
                        Courses available
                      </p>
                    </div>
                    <div className="px-3 lg:px-4 border-none lg:border-r border-gray-100 flex flex-col items-start lg:block">
                      <div className="flex items-center gap-1 lg:gap-2 mb-1">
                        <img
                          src="/assets/rup1.png"
                          alt=""
                          className="w-3.5 h-3.5 lg:w-4 lg:h-4 opacity-70 lg:opacity-100"
                        />{" "}
                        <span className="text-[12px] lg:text-[14px] font-bold text-gray-800">
                          {college.fees}
                        </span>
                      </div>
                      <p className="text-[10px] lg:text-[11px] text-gray-400 pl-4 lg:pl-6">
                        Fee range
                      </p>
                    </div>
                    <div className="px-0 lg:px-4 border-r border-gray-100 flex flex-col items-start lg:block pt-3 lg:pt-0 border-t border-gray-100 lg:border-t-0 -mt-3 lg:mt-0">
                      <div className="flex items-center gap-1 lg:gap-2 mb-1">
                        <img
                          src="/assets/award.png"
                          alt=""
                          className="w-3.5 h-3.5 lg:w-4 lg:h-4 opacity-70 lg:opacity-100"
                        />{" "}
                        <span className="text-[12px] lg:text-[14px] font-bold text-gray-800">
                          {college.award}
                        </span>
                      </div>
                      <p className="text-[10px] lg:text-[11px] text-gray-400 pl-4 lg:pl-6">
                        Accreditations
                      </p>
                    </div>
                    <div className="px-3 lg:px-4 flex flex-col items-start lg:block pt-3 lg:pt-0 border-t border-gray-100 lg:border-t-0 -mt-3 lg:mt-0">
                      <div className="flex items-center gap-1 lg:gap-2 mb-1">
                        <img
                          src="/assets/grow.png"
                          alt=""
                          className="w-3.5 h-3.5 lg:w-4 lg:h-4 opacity-70 lg:opacity-100"
                        />{" "}
                        <span className="text-[12px] lg:text-[14px] font-bold text-gray-800">
                          {college.placement}
                        </span>
                      </div>
                      <p className="text-[10px] lg:text-[11px] text-gray-400 pl-4 lg:pl-6">
                        Highest Package
                      </p>
                    </div>
                  </div>

                  {/* Footer: Established and Action Buttons */}
                  <div className="flex flex-col lg:flex-row items-center justify-between mt-auto pt-0 lg:pt-4 border-none lg:border-t border-gray-50">
                    <div className="hidden lg:flex items-center gap-2 text-[#595959] text-[16px] font-regular">
                      <img src="/assets/clock.png" alt="" className="w-4 h-4" />{" "}
                      Established in {college.established}
                    </div>
                    <div className="flex items-center gap-2 lg:gap-3 w-full lg:w-auto">
                      <button className="flex-shrink-0 p-2 lg:p-2.5 border border-gray-300 lg:border-gray-200 rounded-lg text-gray-500 hover:bg-gray-50 shadow-sm flex items-center justify-center">
                        <svg className="w-4 h-4 lg:w-5 lg:h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                      </button>
                      <button className="flex-1 lg:px-6 py-2 pb-2.5 lg:py-2.5 text-[13px] lg:text-[14px] font-bold text-[#1a2e4a] border border-[#1a2e4a] rounded-lg hover:bg-gray-50">
                        Compare
                      </button>
                      <button className="flex-1 lg:px-8 py-2 pb-2.5 lg:py-2.5 text-[13px] lg:text-[14px] font-bold text-white bg-[#0D3B59] rounded-lg hover:bg-[#111e30] shadow-sm">
                        Shortlist
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Pagination UI - Exact Match */}
            <div className="flex justify-center mt-6 lg:mt-12 mb-8">
              <div className="flex items-center gap-1.5 lg:gap-2 bg-white border border-gray-100 rounded-xl p-2 lg:p-3 shadow-sm overflow-x-auto max-w-full hide-scrollbar">
                {/* Previous Button */}
                <button className="w-8 h-8 lg:w-10 lg:h-10 flex-shrink-0 flex items-center justify-center border border-gray-200 text-gray-400 rounded-lg hover:bg-gray-50 transition-colors">
                  <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Active Page */}
                <button className="w-8 h-8 lg:w-10 lg:h-10 flex-shrink-0 flex items-center justify-center text-white bg-[#0D3B59] rounded-lg font-bold shadow-md text-[13px] lg:text-[15px]">
                  1
                </button>

                {/* Inactive Pages */}
                {[2, 3].map((num) => (
                  <button
                    key={num}
                    className="w-8 h-8 lg:w-10 lg:h-10 flex-shrink-0 flex items-center justify-center border border-[#0D3B59] text-[#0D3B59] rounded-lg font-semibold hover:bg-blue-50 transition-colors text-[13px] lg:text-[15px]"
                  >
                    {num}
                  </button>
                ))}

                {/* Ellipsis */}
                <span className="px-1 text-gray-400 font-bold self-end pb-1 lg:pb-2 tracking-widest text-[12px] lg:text-[16px]">
                  ...
                </span>

                {/* End Pages */}
                {[199].map((num) => (
                  <button
                    key={num}
                    className="w-8 h-8 lg:w-10 lg:h-10 flex-shrink-0 flex items-center justify-center border border-[#0D3B59] text-[#0D3B59] rounded-lg font-semibold hover:bg-blue-50 transition-colors text-[13px] lg:text-[15px]"
                  >
                    {num}
                  </button>
                ))}

                {/* Next Button with Chevron */}
                <button className="px-3 lg:px-4 h-8 lg:h-10 flex-shrink-0 border border-gray-200 text-gray-600 rounded-lg font-semibold flex items-center gap-1 lg:gap-2 hover:bg-gray-50 transition-colors text-[12px] lg:text-[14px]">
                  Next
                  <svg className="w-3 h-3 lg:w-4 lg:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* --- Explore Other Popular Universities Section --- */}
            <div className="mt-8 lg:mt-12 mb-8">
              <h2 className="text-[#121212] font-bold text-[18px] lg:text-[24px] mb-4 lg:mb-6">
                Explore Other Popular Universities-
              </h2>

              <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-5">
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
                    className="bg-white border border-gray-100 rounded-lg lg:rounded-xl hover:shadow-md transition-shadow flex flex-col items-start lg:items-center text-left lg:text-center overflow-hidden"
                  >
                    <Link
                      href="/?view=university"
                      className="w-full flex-row lg:flex-col flex items-center p-3 lg:p-5 cursor-pointer flex-1 gap-3 lg:gap-0"
                    >
                      {/* University Logo Container */}
                      <div className="w-auto lg:w-full h-auto lg:h-14 flex items-center justify-center lg:mb-4 flex-shrink-0 border border-gray-100 lg:border-none rounded-md p-1 bg-white">
                        <div className="relative w-12 h-12 lg:w-32 lg:h-10">
                          <Image
                            src={univ.logo}
                            alt={univ.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>

                      {/* Info Side for Mobile */}
                      <div className="flex flex-col flex-1 min-w-0 w-full overflow-hidden">
                        {/* University Name */}
                        <h3 className="text-[#121212] font-semibold text-[13px] lg:text-[18px] leading-snug mb-1 lg:mb-3 min-h-[0px] lg:min-h-[40px] flex items-center justify-start lg:justify-center underline hover:text-[#0D3B59] transition-colors truncate lg:whitespace-normal">
                          {univ.name}
                        </h3>

                        {/* Location and Course Count */}
                        <div className="flex items-center justify-between w-full pt-1 lg:pt-3 border-t-0 lg:border-t border-gray-50 text-[10px] lg:text-[11px] text-gray-400 mt-0 lg:mt-auto gap-2">
                          <div className="flex items-center gap-1 truncate w-[50%]">
                            <img
                              src="/assets/loc.png"
                              alt=""
                              className="w-3 h-3 opacity-60 flex-shrink-0"
                            />
                            <span className="text-[#595959] truncate">
                              Phagwara, Punjab
                            </span>
                          </div>
                          <div className="flex items-center gap-1 flex-shrink-0 w-[50%] justify-start lg:justify-end">
                            <img
                              src="/assets/cap.png"
                              alt=""
                              className="w-3 h-3 opacity-60 flex-shrink-0"
                            />
                            <span className="text-[#595959] truncate">19 Courses</span>
                          </div>
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

      {/* Mobile Location Bottom Sheet Modal */}
      {isLocationModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-end justify-center lg:hidden">
          {/* Backdrop overlay */}
          <div
            className="absolute inset-0 bg-black/40 transition-opacity"
            onClick={() => setIsLocationModalOpen(false)}
          />

          {/* Bottom Sheet Modal Container */}
          <div className="w-full max-h-[85vh] flex flex-col relative z-50 bg-white rounded-t-[20px] pb-0 animate-slide-up shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between px-6 pt-6 pb-4">
              <h3 className="text-[16px] font-bold text-[#111827]">Location</h3>
              <button
                onClick={() => setSelectedLocations([])}
                className="text-[#3B82B1] text-[14px] font-medium hover:underline"
              >
                Reset
              </button>
            </div>

            {/* Search Input */}
            <div className="px-6 pb-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search exam.."
                  className="w-full border border-gray-200 rounded-lg py-3 px-4 text-[13px] focus:outline-none focus:ring-1 focus:ring-[#0D3B59] placeholder-gray-400 pl-10"
                />
                <svg
                  className="absolute w-4 h-4 text-gray-400 left-3.5 top-3.5"
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
            </div>

            {/* Checklist items area */}
            <div className="flex-1 overflow-y-auto px-6 pt-2 pb-6 border-gray-100">
              <div className="flex flex-col gap-6">
                {LOCATION_OPTIONS.map((loc, i) => {
                  const isChecked = selectedLocations.includes(loc);
                  return (
                    <label
                      key={i}
                      className="flex items-center justify-between group cursor-pointer select-none"
                    >
                      <span className="text-[14px] font-medium text-[#4b5563]">
                        {loc}
                      </span>
                      <div className="relative flex items-center">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => toggleLocation(loc)}
                          className={`peer appearance-none w-[22px] h-[22px] border ${isChecked ? "border-[#1a2e4a] bg-[#1a2e4a]" : "border-gray-300 bg-white"
                            } rounded flex items-center justify-center transition-all cursor-pointer shadow-sm`}
                        />
                        {/* Checkmark SVG */}
                        <svg
                          className={`absolute w-3.5 h-3.5 left-[4px] pointer-events-none transition-opacity duration-200 ${isChecked ? "opacity-100 text-white" : "opacity-0"
                            }`}
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Sticky "View Results" Button */}
            <div className="px-5 pb-5 pt-3 bg-white border-t border-gray-50 flex-shrink-0">
              <button
                onClick={() => setIsLocationModalOpen(false)}
                className="w-full bg-[#1a2e4a] text-white py-3.5 rounded-lg font-medium text-[14px] flex items-center justify-center gap-2 hover:bg-[#0f1d30] transition-colors shadow-sm"
              >
                View Results
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
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
