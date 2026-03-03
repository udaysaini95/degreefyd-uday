"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const MOCK_COLLEGES = [
  {
    logo: "/assets/lpu.png",
    name: "Amity University Online",
    location: "Noida, Uttar Pradesh",
    approved: "#134 NIRF Rank",
    courses: "12",
    rating: "4.5/5",
    fees: "₹ 1.2 L",
    placement: "5.4 L",
  },
  {
    logo: "/assets/lpu.png",
    name: "NMIMS Distance Education",
    location: "Mumbai, Maharashtra",
    approved: "#134 NIRF Rank",
    courses: "15",
    rating: "4.8/5",
    fees: "₹ 1.5 L",
    placement: "8.2 L",
  },
  {
    logo: "/assets/lpu.png",
    name: "IGNOU New Delhi",
    location: "New Delhi, Delhi NCR",
    approved: "#134 NIRF Rank",
    courses: "40",
    rating: "4.2/5",
    fees: "₹ 30 K",
    placement: "N/A",
  },
  {
    logo: "/assets/lpu.png",
    name: "Chandigarh University Online",
    location: "Chandigarh",
    approved: "#134 NIRF Rank",
    courses: "24",
    rating: "4.4/5",
    fees: "₹ 1.1 L",
    placement: "4.5 L",
  },
  {
    logo: "/assets/lpu.png",
    name: "Symbiosis Centre for Distance Learning",
    location: "Pune, Maharashtra",
    approved: "#134 NIRF Rank",
    courses: "18",
    rating: "4.6/5",
    fees: "₹ 80 K",
    placement: "6.0 L",
  },
];

const POPULAR_UNIVERSITIES = [
  { name: "Amity University Online", location: "Noida, Uttar Pradesh" },
  { name: "NMIMS Distance Education", location: "Mumbai, Maharashtra" },
  { name: "Indira Gandhi National Open University (IGNOU)", location: "New Delhi, Delhi NCR" },
  { name: "Chandigarh University Online", location: "Chandigarh" },
  { name: "Symbiosis Centre for Distance Learning", location: "Pune, Maharashtra" },
  { name: "Sikkim Manipal University", location: "Gangtok, Sikkim" },
];

export default function CollegeListing() {
  const [states] = useState(["Assam", "Bihar", "Chandigarh", "Chhattisgarh", "Delhi NCR", "Goa"]);
  const [degrees] = useState(["B.P.Ed", "B.A", "B.Arch", "B.A (Hons)", "B.A + B.Ed(intg)"]);

  return (
    <div className="bg-[#f8f9fa] min-h-screen pb-16 pt-8">
      <div className="max-w-[1240px] mx-auto px-4 lg:px-8">
        <div className="flex items-center gap-2 text-[13px] text-gray-500 mb-3">
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          <span className="cursor-pointer hover:text-blue-600">Home</span>
          <span>&gt;</span>
          <span className="text-gray-800">Colleges</span>
        </div>

        <div className="mb-6">
          <h1 className="text-[26px] font-bold text-[#1a2e4a] mb-2">
            <span className="text-orange-500">Online & Distance</span> Degree
            Colleges in India-
          </h1>
          <p className="text-[13px] text-gray-600/90 leading-relaxed max-w-5xl">
            Our platform provides a comprehensive list of the best online and
            distance learning universities and colleges offering various
            courses. Whether you&apos;re looking for undergraduate,
            postgraduate, diploma, or certificate programs, we have it all.
            Navigate our platform to find your dream college with complete
            info regarding fee structures, approvals, duration, courses
            offered, user reviews, and top rankings. Compare your preferred
            options to make an informed decision for a successful academic
            career.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-[260px] flex-shrink-0 flex flex-col gap-4">
            <div className="bg-white border border-gray-200 rounded-xl p-4">
              <div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-3">
                <h3 className="font-bold text-[14px] text-gray-800">
                  All Filters
                </h3>
                <button className="text-blue-500 text-[12px] font-semibold hover:underline">
                  Reset
                </button>
              </div>

              <div className="mb-6 border-b border-gray-100 pb-5">
                <h4 className="text-[12px] font-bold text-gray-500 uppercase tracking-wide mb-3">
                  STATE
                </h4>
                <div className="relative mb-3">
                  <input
                    type="text"
                    placeholder="Search State"
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg py-2 pl-8 pr-3 text-[12px] focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                  <svg
                    className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2"
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
                <div className="flex flex-col gap-2.5 max-h-[160px] overflow-y-auto pr-2 custom-scrollbar">
                  {states.map((state, index) => (
                    <label
                      key={index}
                      className="flex items-center justify-between group cursor-pointer"
                    >
                      <span className="text-[13px] text-gray-600 group-hover:text-blue-600 truncate mr-2">
                        {state}
                      </span>
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 shrink-0"
                      />
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-[12px] font-bold text-gray-500 uppercase tracking-wide mb-3">
                  DEGREE
                </h4>
                <div className="relative mb-3">
                  <input
                    type="text"
                    placeholder="Search Degree"
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg py-2 pl-8 pr-3 text-[12px] focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                  <svg
                    className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2"
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
                <div className="flex flex-col gap-2.5 max-h-[160px] overflow-y-auto pr-2 custom-scrollbar">
                  {degrees.map((degree, index) => (
                    <label
                      key={index}
                      className="flex items-center justify-between group cursor-pointer"
                    >
                      <span className="text-[13px] text-gray-600 group-hover:text-blue-600 truncate mr-2">
                        {degree}
                      </span>
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 shrink-0"
                      />
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-4">
            <div className="bg-white border text-sm border-gray-200 rounded-xl px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2 text-gray-400">
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
                  className="outline-none text-gray-700 bg-transparent w-full"
                />
              </div>
              <span className="text-gray-400 font-medium whitespace-nowrap text-xs">
                Showing {MOCK_COLLEGES.length} Colleges
              </span>
            </div>

            <div className="flex flex-col gap-4">
              {MOCK_COLLEGES.map((college, i) => (
                <div
                  key={i}
                  className="bg-white border border-gray-200 rounded-xl p-4 md:p-5 hover:shadow-lg transition-shadow relative group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 md:w-20 md:h-20 shrink-0 border border-gray-100 rounded-xl p-2 bg-white flex items-center justify-center shadow-sm">
                      <Image
                        src={college.logo}
                        alt={college.name}
                        width={60}
                        height={60}
                        className="object-contain"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).src =
                            "/assets/logo.png";
                        }}
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex flex-col min-w-0">
                          <Link href="/?view=university" className="group/link">
                            <h2 className="text-[16px] md:text-[18px] font-bold text-[#1a2e4a] group-hover/link:text-blue-600 transition-colors truncate">
                              {college.name}
                            </h2>
                          </Link>
                          <p className="text-[12px] md:text-[13px] text-gray-500 mt-0.5 md:mt-1 truncate flex items-center gap-1.5">
                            {college.location} <span className="hidden md:inline text-gray-300 mx-1">|</span> <span className="hidden md:inline bg-green-50 text-green-600 px-1.5 py-0.5 rounded text-[10px] font-bold">{college.approved}</span>
                          </p>
                        </div>

                        <div className="flex items-center gap-1.5 md:gap-2 shrink-0">
                          <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-50 text-gray-400 hover:text-blue-600 hover:bg-blue-50 transition-colors">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                            </svg>
                          </button>
                          <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-50 text-gray-400 hover:text-orange-500 hover:bg-orange-50 transition-colors">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                            </svg>
                          </button>
                        </div>
                      </div>

                      <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-x-8 md:gap-y-3 md:flex-wrap bg-[#fafafa] rounded-xl p-4 md:p-3 mt-4 md:mt-5">
                        <div className="flex flex-col gap-0.5 md:gap-1">
                          <span className="text-[10px] md:text-[11px] text-gray-400 font-medium tracking-wide uppercase">
                            Courses
                          </span>
                          <span className="text-[14px] md:text-[13px] font-bold text-gray-800">
                            {college.courses}
                          </span>
                        </div>
                        <div className="flex flex-col gap-0.5 md:gap-1">
                          <span className="text-[10px] md:text-[11px] text-gray-400 font-medium tracking-wide uppercase">
                            Rating
                          </span>
                          <div className="flex items-center gap-1.5">
                            <svg className="w-3.5 h-3.5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <span className="text-[14px] md:text-[13px] font-bold text-gray-800">
                              {college.rating}
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-col gap-0.5 md:gap-1">
                          <span className="text-[10px] md:text-[11px] text-gray-400 font-medium tracking-wide uppercase">
                            Avg. Fees
                          </span>
                          <span className="text-[14px] md:text-[13px] font-bold text-gray-800">
                            {college.fees}
                          </span>
                        </div>
                        <div className="flex flex-col gap-0.5 md:gap-1">
                          <span className="text-[10px] md:text-[11px] text-gray-400 font-medium tracking-wide uppercase">
                            Top Placement
                          </span>
                          <span className="text-[14px] md:text-[13px] font-bold text-gray-800">
                            {college.placement}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 pt-5 border-t border-gray-100 flex items-center justify-between gap-2">
                    <label className="flex items-center gap-2.5 cursor-pointer group shrink-0 w-[80px] md:w-auto">
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded border-gray-300 text-gray-400 focus:ring-[#1a2e4a]"
                      />
                      <span className="text-[12px] font-medium text-gray-500 group-hover:text-gray-800 leading-tight">
                        Add to<br className="md:hidden" /> <span className="hidden md:inline"> </span>Compare
                      </span>
                    </label>

                    <div className="flex items-center gap-2 md:gap-3 flex-1 justify-end">
                      <button className="px-2 md:px-5 py-2.5 md:py-2.5 text-[13px] md:text-[12px] font-bold text-[#1a2e4a] md:text-gray-600 border border-gray-200 bg-white rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-1.5 flex-1 md:flex-none">
                        <svg
                          className="w-4 h-4 shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                          />
                        </svg>
                        Compare
                      </button>
                      <button className="px-4 py-2.5 md:py-2.5 font-bold text-white bg-[#1a2e4a] rounded-lg hover:bg-[#111e30] hover:shadow-md transition-all flex items-center justify-center gap-2 flex-1 md:flex-none">
                        <span className="hidden md:flex items-center gap-1.5 text-[12px]">
                          Apply Now
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </span>
                        <span className="md:hidden flex items-center justify-between w-full text-[13px] text-left leading-[1.1]">
                          <span className="flex flex-col"><span>Apply</span><span>Now</span></span>
                          <span className="font-light text-lg ml-1">&rarr;</span>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-4 mb-4">
              <div className="flex items-center gap-1 bg-white border border-gray-200 rounded-lg p-1.5">
                <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:bg-gray-50 rounded-md">
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
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button className="w-8 h-8 flex items-center justify-center text-white bg-[#1a2e4a] rounded-md text-[13px] font-medium shadow-sm">
                  1
                </button>
                <button className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-50 rounded-md text-[13px] font-medium">
                  2
                </button>
                <span className="w-8 h-8 flex items-center justify-center text-gray-400">
                  ...
                </span>
                <button className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-50 rounded-md text-[13px] font-medium">
                  5
                </button>
                <button className="px-3 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-50 rounded-md text-[13px] font-medium gap-1">
                  Next{" "}
                  <svg
                    className="w-3.5 h-3.5"
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

            <div className="bg-white border border-gray-200 rounded-xl p-6 mt-4">
              <h3 className="font-bold text-[16px] text-[#1a2e4a] mb-5 border-b border-gray-100 pb-3">
                Explore Other Popular Universities-
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {POPULAR_UNIVERSITIES.map((univ, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 border border-gray-100 rounded-xl hover:shadow-sm hover:border-blue-100 transition-all cursor-pointer"
                  >
                    <div className="w-10 h-10 shrink-0 border border-gray-50 rounded bg-gray-50 flex items-center justify-center">
                      <Image
                        src="/assets/lpu.png"
                        alt="logo"
                        width={30}
                        height={30}
                        className="object-contain"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).src =
                            "/assets/logo.png";
                        }}
                      />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-[12px] font-bold text-gray-800 truncate hover:text-blue-600">
                        {univ.name}
                      </span>
                      <span className="text-[10px] text-gray-400 truncate">
                        {univ.location}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 mt-2">
              <h3 className="font-bold text-[16px] text-[#1a2e4a] mb-5 border-b border-gray-100 pb-3">
                Top courses which may interests you:
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                <div>
                  <h4 className="text-[13px] font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>{" "}
                    B.A(Hons) in various disciplines
                  </h4>
                  <ul className="text-[12px] text-blue-500 flex flex-col gap-2 pl-3">
                    <li className="hover:underline cursor-pointer">
                      B.A (Hons) History
                    </li>
                    <li className="hover:underline cursor-pointer">
                      B.A (Hons) English
                    </li>
                    <li className="hover:underline cursor-pointer">
                      B.A (Hons) Political Science
                    </li>
                    <li className="hover:underline cursor-pointer">
                      B.A (Hons) Psychology
                    </li>
                    <li className="hover:underline cursor-pointer">
                      B.A (Hons) Economics
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-[13px] font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>{" "}
                    B.B.A in various disciplines
                  </h4>
                  <ul className="text-[12px] text-blue-500 flex flex-col gap-2 pl-3">
                    <li className="hover:underline cursor-pointer">
                      BBA in HR Management
                    </li>
                    <li className="hover:underline cursor-pointer">
                      BBA in Marketing
                    </li>
                    <li className="hover:underline cursor-pointer">
                      BBA in Finance
                    </li>
                    <li className="hover:underline cursor-pointer">
                      BBA in International Business
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white border text-[#1a2e4a] border-gray-200 rounded-xl p-6 mt-2">
              <h3 className="font-bold text-[16px] mb-5 border-b border-gray-100 pb-3">
                Top Entrance Exams for College Admissions:
              </h3>
              <div className="flex flex-col gap-4">
                <div className="border border-gray-100 rounded-xl p-4 hover:shadow-sm">
                  <h4 className="font-bold text-[14px] mb-2 text-blue-600 hover:underline cursor-pointer">
                    CAT (Common Admission Test)
                  </h4>
                  <p className="text-[12px] text-gray-500 leading-relaxed mb-3">
                    Conducted by IIMs for admission into MBA and PGDM programs
                    across India. Known for testing quantitative, verbal, and
                    logical reasoning.
                  </p>
                  <div className="flex gap-2 text-[11px] text-gray-400 font-medium overflow-x-auto pb-1 custom-scrollbar">
                    <span className="bg-gray-50 px-2 py-1 rounded whitespace-nowrap">
                      Accepted by 1200+ Colleges
                    </span>
                    <span className="bg-gray-50 px-2 py-1 rounded whitespace-nowrap">
                      Computer Based Test
                    </span>
                  </div>
                </div>
                <div className="border border-gray-100 rounded-xl p-4 hover:shadow-sm">
                  <h4 className="font-bold text-[14px] mb-2 text-blue-600 hover:underline cursor-pointer">
                    MAT (Management Aptitude Test)
                  </h4>
                  <p className="text-[12px] text-gray-500 leading-relaxed mb-3">
                    Conducted by AIMA for admission to MBA and allied programs
                    in over 600 B-Schools.
                  </p>
                  <div className="flex gap-2 text-[11px] text-gray-400 font-medium overflow-x-auto pb-1 custom-scrollbar">
                    <span className="bg-gray-50 px-2 py-1 rounded whitespace-nowrap">
                      Accepted by 600+ Colleges
                    </span>
                    <span className="bg-gray-50 px-2 py-1 rounded whitespace-nowrap">
                      Multiple Modi (CBT, PBT, IBT)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
