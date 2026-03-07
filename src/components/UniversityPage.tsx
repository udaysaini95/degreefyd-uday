"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function UniversityPage() {
  const [activeSubTab, setActiveSubTab] = useState("Overview");

  const subTabs = [
    "Overview",
    "Admit Card",
    "Answer Key",
    "Result",
    "Dates",
    "Counselling",
    "Cut of Marks",
  ];

  return (
    <div className="bg-[#ffffff] min-h-screen font-sans antialiased text-[#111827]">
      {/* Upper White Section */}
      <div className="max-w-[1280px] mx-auto px-4 lg:px-6 py-4">
        {/* 1. Breadcrumb */}
        <nav className="flex items-center gap-2 text-[13px] mb-6">
          <Link href="/">
            <svg
              className="w-4 h-4 text-gray-700"
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
          </Link>
          <span className="text-gray-300">›</span>
          <Link href="/colleges" className="text-gray-600 hover:text-blue-600">
            Colleges
          </Link>
          <span className="text-gray-300">›</span>
          <span className="text-[#0D3B59] font-medium truncate">
            Indira Gandhi National Open University
          </span>
          <div className="ml-auto">
            <button className="p-2 border border-gray-200 rounded-lg text-gray-500 hover:bg-white shadow-sm transition-all">
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
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                />
              </svg>
            </button>
          </div>
        </nav>

        {/* 2. Hero Section Card */}
        <div className="bg-white rounded-2xl p-6 relative mb-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 shrink-0 border border-gray-100 rounded-xl bg-white p-2 flex items-center justify-center shadow-sm">
                  <Image
                    src="/assets/amity1.png"
                    alt="Logo"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <span className="bg-[#e7f3f0] text-[#007B2D] text-[12px] font-semibold px-2 py-0.5 rounded border border-[#d1e9e2]">
                  #134 NIRF Rank
                </span>
              </div>
              <h1 className="text-[32px] font-bold text-[#f28c28] leading-tight mb-4">
                Amity University{" "}
                <span className="text-black font-extrabold">Bengaluru</span>
              </h1>
              <div className="flex items-center gap-2 mb-8">
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 border border-gray-100 rounded-lg text-[13px] text-[#595959]">
                  <img
                    src="/assets/loc.png"
                    alt=""
                    className="w-3.5 h-3.5 opacity-40"
                  />
                  New Delhi, Delhi
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 border border-gray-100 rounded-lg text-[13px] text-[#595959]">
                  <img
                    src="/assets/cap.png"
                    alt=""
                    className="w-3.5 h-3.5 opacity-40"
                  />
                  Distance
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button className="px-5 py-2.5 border border-[#1a2e4a] text-[#1a2e4a] font-semibold rounded-lg flex items-center gap-2 hover:bg-gray-50 text-[14px]">
                  Brochure{" "}
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </button>
                <button className="px-6 py-2.5 bg-[#0D3B59] text-white font-semibold rounded-lg flex items-center gap-2 hover:bg-[#092a40] text-[14px]">
                  Apply now{" "}
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="w-full lg:w-[460px] h-[260px] relative rounded-2xl overflow-hidden shadow-sm">
              <Image
                src="/assets/amity2.png"
                alt="Campus"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* 3. Description Section */}
        <div className="px-1 mb-5">
          <p className="text-[15px] leading-relaxed text-[#121212] font-normal">
            Indira Gandhi National Open University (IGNOU) is a central
            university established in 1985 by an Act of Parliament.  It started
            functioning academically in 1987, with two programs and around 4,500
            students. As of now, IGNOU supports well over 4 million learners in
            India and abroad through 21 schools, 56 regional centres, and 29
            overseas partner institutions. It is one of the largest open
            universities in the world, offering education through Open and
            Distance Learning (ODL) and online mode. The University Grants
            Commission (UGC) recognises IGNOU, and it is a member of the
            Association of Indian Universities (AIU).
          </p>
        </div>
      </div>

      {/* 4. The Color Strip Menu Line */}
      <div className="bg-[#f3f4f6] w-full">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-6 py-3">
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            {subTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveSubTab(tab)}
                className={`px-5 py-2 rounded-lg text-[13px] font-bold transition-colors whitespace-nowrap
                  ${activeSubTab === tab ? "bg-[#1a2e4a] text-white shadow-md" : "bg-white border border-gray-100 text-gray-500 hover:bg-gray-50"}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 5. The White Divider Strip */}
      <div className="bg-white h-4 w-full border-b border-[#e5e7eb]"></div>

      {/* 6. Whole Page Content Background Section */}
      {/* 6. Whole Page Content Background Section */}
      <div className="bg-[#f3f4f6] min-h-screen pt-6 pb-20">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-6">
          <div className="flex flex-col lg:flex-row gap-6 items-start">
            {/* LEFT COLUMN: Main Content */}
            <div className="flex-1 min-w-0 flex flex-col gap-6">
              {/* 1. Author and Update Meta Info */}
              <div className="flex items-center gap-3 px-1 mb-4">
                {/* Author Image */}
                <div className="w-10 h-10 rounded-full overflow-hidden relative border border-gray-200 shadow-sm shrink-0">
                  <Image
                    src="/assets/elip.png" // Insert author image path here
                    alt="Jiya Tyagi"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Update Details */}
                <div className="flex flex-col justify-center">
                  <p className="text-[13px] text-[#111827] font-bold leading-tight">
                    Updated on December 26, 2025
                  </p>
                  <p className="text-[11px] text-gray-500 mt-0.5">
                    By{" "}
                    <span className="text-[#3B82B1] font-semibold cursor-pointer hover:underline">
                      Jiya Tyagi
                    </span>
                    , Content Manager
                  </p>
                </div>
              </div>
              {/* Table of Contents Card */}
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <h3 className="text-[20px] font-bold text-[#111827]">
                    Table of contents-
                  </h3>
                </div>
                <div className="grid grid-cols-1 gap-y-4 gap-x-12">
                  {[
                    "Overview",
                    "Courses and Fee",
                    "Admission 2026",
                    "Rankings",
                    "Placements",
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 group cursor-pointer"
                    >
                      <svg
                        className="w-3 h-3 text-[#0D3B59]"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                      <span className="text-[#3B82B1] text-[15px] font-normal group-hover:underline">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
                <button className="mt-8 text-[#3B82B1] text-[14px] font-bold flex items-center gap-1 hover:underline">
                  View more{" "}
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>

              {/* University Highlights Section - Pixel Perfect */}
              <div className="flex-1 min-w-0 flex flex-col gap-6">
                <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_2px_15px_rgba(0,0,0,0.02)]">
                  <h2 className="text-[22px] font-bold text-[#111827] mb-4">
                    Amity University Mohali BBA Highlights 2026-
                  </h2>
                  <p className="text-[14px] text-[#595959] leading-[1.7] mb-8 font-normal">
                    Amity University Mohali provides a modern learning
                    environment for BBA students. This Punjab campus uses
                    advanced technology to deliver top-notch academic programs.
                    Students gain global exposure through study abroad programs.
                    The BBA curriculum follows the New Education Policy 2020.
                    Following are the key highlights of the BBA program at Amity
                    University Mohali:
                  </p>

                  {/* Table with 50% Column Widths */}
                  <div className="overflow-hidden rounded-xl border border-gray-200">
                    <table className="w-full text-left text-[14px] border-collapse table-fixed">
                      <thead>
                        <tr className="bg-[#0D3B59] text-white">
                          <th className="w-1/2 px-6 py-4.5 font-bold border-r border-white/10 uppercase tracking-wide">
                            Particulars
                          </th>
                          <th className="w-1/2 px-6 py-4.5 font-bold uppercase tracking-wide">
                            Details
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 text-[#111827]">
                        {[
                          {
                            p: "Course Name",
                            d: "Bachelor of Business Administration (BBA)",
                          },
                          {
                            p: "Duration",
                            d: "3 Years (General) / 4 Years (Research)",
                          },
                          { p: "Mode", d: "Full-time" },
                          {
                            p: "Eligibility",
                            d: "10+2 with minimum 60% marks",
                          },
                          {
                            p: "Selection Criteria",
                            d: "Merit-based / CUET / Personal Interview",
                          },
                          { p: "Entrance Exams Accepted", d: "CUET UG" },
                          {
                            p: "Fee Range",
                            d: "INR 6.93 Lakh – INR 10.5 Lakh",
                          },
                          { p: "Average Package", d: "INR 7.2 LPA" },
                          { p: "Highest Package", d: "INR 39.9 LPA" },
                        ].map((row, i) => (
                          <tr
                            key={i}
                            className="hover:bg-gray-50 transition-colors"
                          >
                            <td className="px-6 py-4 font-bold bg-[#fcfcfc] border-r border-gray-200 text-[#1a2e4a]">
                              {row.p}
                            </td>
                            <td className="px-6 py-4 font-medium text-[#4b5563]">
                              {row.d}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Insights Promo Banner */}
                <div className="bg-[#2D546E] rounded-2xl p-8 relative overflow-hidden flex flex-col md:flex-row items-center justify-between min-h-[180px] shadow-lg">
                  {/* Text Content */}
                  <div className="z-10 max-w-[60%]">
                    <h3 className="text-white text-[20px] md:text-[24px] font-bold leading-tight mb-6">
                      Unlock Full College Insights to Choose the Right Program
                      for Your Future
                    </h3>
                    <button className="bg-white text-[#0D3B59] px-6 py-2.5 rounded-lg font-bold text-[14px] hover:bg-gray-50 transition-all shadow-sm">
                      Know more
                    </button>
                  </div>

                  {/* Illustration Placeholder */}
                  <div className="absolute right-0 bottom-0 w-[180px] h-[160px] flex items-end justify-end pointer-events-none">
                    <Image
                      src="/assets/3d.png" // Insert 3D illustration image path here
                      alt="Promo Illustration"
                      width={220}
                      height={180}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              {/* --- Amity University Mohali BBA Popular Courses --- */}
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_2px_15px_rgba(0,0,0,0.02)] mb-6">
                <h2 className="text-[22px] font-bold text-[#111827] mb-4">
                  Amity University Mohali BBA Popular Courses-
                </h2>
                <p className="text-[14px] text-[#595959] leading-[1.7] mb-6 font-normal">
                  BBA program at Amity University Mohali provides multiple paths
                  which help students achieve their professional objectives. The
                  courses help students build their skills in specific business
                  and management study areas.
                </p>

                <div className="flex flex-col gap-4">
                  {[
                    {
                      title: "BBA (General)",
                      desc: "The program teaches students essential management skills through its core curriculum.",
                    },
                    {
                      title: "BBA (3 Continent)",
                      desc: "The program delivers worldwide educational opportunities through its three-country study program.",
                    },
                    {
                      title: "BBA (Honours / Research)",
                      desc: "The program offers students an extensive study of business research methods and data analysis techniques.",
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      {/* Play-button style bullet matching дизайн */}
                      <svg
                        className="w-3 h-3 text-[#0D3B59] mt-1.5 shrink-0"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                      <p className="text-[14px] leading-[1.6] text-[#595959]">
                        <span className="font-semibold text-[#121212]">
                          {item.title}:
                        </span>{" "}
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* --- Amity University Mohali BBA Fees Details 2026 --- */}
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_2px_15px_rgba(0,0,0,0.02)]">
                <h2 className="text-[22px] font-bold text-[#111827] mb-4">
                  Amity University Mohali BBA Fees Details 2026-
                </h2>
                <p className="text-[14px] text-[#595959] leading-[1.7] mb-8 font-normal">
                  Amity University Mohali offers a structured fee plan for BBA
                  aspirants in 2026. The costs include academic learning, global
                  curriculum, and modern campus facilities. Tuition fees vary by
                  the chosen BBA specialization which are Marketing, Finance,
                  and Digital Marketing.
                </p>

                {/* Fees Table: Exact Pixel Match */}
                <div className="overflow-hidden rounded-xl border border-gray-200">
                  <table className="w-full text-left text-[14px] border-collapse table-fixed">
                    <thead>
                      <tr className="bg-[#0D3B59] text-white">
                        <th className="w-1/2 px-6 py-4.5 font-bold border-r border-white/10 uppercase tracking-wide">
                          Fee Component
                        </th>
                        <th className="w-1/2 px-6 py-4.5 font-bold uppercase tracking-wide">
                          Amount (3-Year Total)
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 text-[#111827]">
                      {[
                        { c: "Tuition Fees", a: "INR 6,93,000 - INR 7,86,000" },
                        { c: "Hostel Fees", a: "INR 5,04,000 (Approx.)" },
                        { c: "One-time Security Deposit", a: "INR 20,000" },
                        {
                          c: "Total Fees",
                          a: "INR 12.17 Lakh - INR 13.10 Lakh",
                        },
                      ].map((row, i) => (
                        <tr
                          key={i}
                          className="hover:bg-gray-50 transition-colors"
                        >
                          <td className="px-6 py-4 font-normal text-[#121212] border-r border-gray-200">
                            {row.c}
                          </td>
                          <td className="px-6 py-4 font-normal text-[#121212]">
                            {row.a}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              {/* --- Amity University Mohali BBA Admission 2026: How to Apply? --- */}
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_2px_15px_rgba(0,0,0,0.02)]">
                <h2 className="text-[22px] font-bold text-[#111827] mb-4">
                  Amity University Mohali BBA Admission 2026: How to Apply?
                </h2>
                <p className="text-[14px] text-[#595959] leading-[1.7] mb-10 font-normal">
                  Amity University Mohali BBA admission process operates through
                  an online system which provides a student-friendly experience
                  for its applicants. The university uses a digital "Admission
                  Microsite" to help applicants track their status in real-time.
                  The 2026 session admissions process uses academic merit as its
                  main criteria while permitting applicants to submit CUET
                  entrance scores as additional evidence for their applications.
                </p>

                {/* --- Amity University Mohali BBA Admission 2026: How to Apply? --- */}
                <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_2px_15px_rgba(0,0,0,0.02)]">
                  <h2 className="text-[22px] font-bold text-[#111827] mb-4">
                    Amity University Mohali BBA Admission 2026: How to Apply?
                  </h2>
                  <p className="text-[14px] text-[#595959] leading-[1.7] mb-10 font-normal">
                    Amity University Mohali BBA admission process operates
                    through an online system which provides a student-friendly
                    experience for its applicants.
                  </p>

                  {/* Vertical Step Indicator with Unified Arrow Badges */}
                  <div className="relative flex flex-col gap-10 ml-4">
                    {/* Dashed Connecting Line aligned to flat edge of arrow */}
                    <div className="absolute left-[38px] top-6 bottom-6 w-px border-l-2 border-dashed border-gray-300 z-0"></div>

                    {[
                      {
                        step: "Step 1",
                        title: "Online Application:",
                        desc: "You need to go to the official Amity Mohali website and select the 'Apply Now 2026' option to begin your registration process.",
                        active: true,
                      },
                      {
                        step: "Step 2",
                        title: "Registration & Login:",
                        desc: "You need to create an account by using a valid email address and phone number to receive your individual Form Number and Password.",
                      },
                      {
                        step: "Step 3",
                        title: "Document Upload:",
                        desc: "Applicants need to upload scanned copies of their Class 10 and 12mark sheet and a recent color passport-size photograph (3.5 x 4.5 cm).",
                      },
                      {
                        step: "Step 4",
                        title: "Application Fee:",
                        desc: "The applicant must pay the application fee which is not refundable through credit card or debit card or net banking at an amount of INR 1,500.",
                      },
                      {
                        step: "Step 5",
                        title: "Selection Process:",
                        desc: "If you have 80% or more in Class 12 (CBSE/ISC), you may get direct admission without an interview; otherwise, a Personal Interview (PI) will be scheduled.",
                      },
                      {
                        step: "Step 6",
                        title: "Check Status:",
                        desc: "Regularly log in to your Admission Microsite to see if you have received an admission offer or if more documents are needed.",
                      },
                      {
                        step: "Step 7",
                        title: "Fee Payment:",
                        desc: "Once selected, download your admission letter from the microsite and pay the first-semester fee to secure your seat.",
                      },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="relative z-10 flex items-start gap-10"
                      >
                        {/* Step Arrow Badge Component Applied to All Steps */}
                        <div className="relative shrink-0">
                          <div
                            className={`relative w-[76px] h-[34px] flex items-center justify-center text-[12px] font-bold pr-2 transition-all
              ${
                item.active
                  ? "bg-[#0D3B59] text-white shadow-md"
                  : "bg-white text-[#0D3B59] border-y border-l border-gray-100"
              }`}
                            style={{
                              clipPath:
                                "polygon(0% 0%, 85% 0%, 100% 50%, 85% 100%, 0% 100%)",
                            }}
                          >
                            {item.step}
                          </div>
                          {/* Subtle Right Border for Inactive Arrows to define the point */}
                          {!item.active && (
                            <div
                              className="absolute inset-0 border-r border-gray-100 pointer-events-none"
                              style={{
                                clipPath:
                                  "polygon(85% 0%, 100% 50%, 85% 100%, 84% 100%, 99% 50%, 84% 0%)",
                              }}
                            />
                          )}
                        </div>

                        {/* Step Content */}
                        <div className="flex flex-col gap-1.5 pt-0.5">
                          <h3 className="text-[16px] font-bold text-[#111827]">
                            {item.title}
                          </h3>
                          <p className="text-[14px] text-[#595959] leading-[1.6]">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* --- Entrance Exams Accepted for BBA Section --- */}
                <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_2px_15px_rgba(0,0,0,0.02)] mb-6">
                  <h2 className="text-[22px] font-bold text-[#121212] mb-4">
                    Entrance Exams Accepted for BBA-
                  </h2>
                  <p className="text-[14px] text-[#595959] leading-[1.7] mb-6 font-normal">
                    BBA program at Amity University Mohali uses national
                    entrance exam results for admissions to discover exceptional
                    candidates. The university operates a merit-based system for
                    its undergraduate admissions process yet uses these test
                    results as a crucial element during candidate selection.
                  </p>

                  <div className="flex flex-col gap-4 mb-10">
                    {[
                      {
                        title: "CUET UG",
                        desc: "The Common University Entrance Test serves as the main national examination which universities accept for BBA admissions.",
                      },
                      {
                        title: "SAT",
                        desc: "The College Board SAT test results are valid for admission by both international and domestic students.",
                      },
                      {
                        title: "Personal Interview (PI)",
                        desc: "All students who fail to meet direct admission requirements must complete the Personal Interview (PI) assessment which serves as their mandatory evaluation.",
                      },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <svg
                          className="w-3 h-3 text-[#0D3B59] mt-1.5 shrink-0"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                        <p className="text-[14px] leading-[1.6] text-[#121212]">
                          <span className="font-normal text-[#121212]">
                            {item.title}:
                          </span>{" "}
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Expert Assist Banner */}
                  <div className="bg-[#2D546E] rounded-2xl p-8 relative overflow-hidden flex flex-col md:flex-row items-center justify-between min-h-[180px] shadow-lg">
                    <div className="z-10 max-w-[60%]">
                      <h3 className="text-white text-[22px] md:text-[26px] font-bold leading-tight mb-8">
                        Ready to apply? Let an Amity University expert assist
                        you.
                      </h3>
                      <button className="bg-white text-[#0D3B59] px-8 py-2.5 rounded-lg font-bold text-[14px] hover:bg-gray-50 transition-all shadow-sm">
                        Connect Now
                      </button>
                    </div>

                    {/* Illustration Placeholder */}
                    <div className="absolute right-0 bottom-0 w-[240px] h-[200px] flex items-end justify-end pointer-events-none py-3">
                      <img
                        src="/assets/3d.png"
                        alt="Expert Illustration"
                        className="object-contain w-[220px] h-[180px]"
                      />
                    </div>
                  </div>
                </div>

                {/* --- Amity University Mohali BBA Important Dates 2026 Section --- */}
                <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_2px_15px_rgba(0,0,0,0.02)]">
                  <h2 className="text-[22px] font-bold text-[#111827] mb-4">
                    Amity University Mohali BBA Important Dates 2026-
                  </h2>
                  <p className="text-[14px] text-[#595959] leading-[1.7] mb-8 font-normal">
                    Amity University Mohali BBA admission process operates
                    through established time periods which enable a successful
                    start of the academic year. Students need to monitor these
                    specific times because they help students to meet all
                    application deadlines.
                  </p>

                  {/* Important Dates Table: 50/50 Split */}
                  <div className="overflow-hidden rounded-xl border border-gray-200">
                    <table className="w-full text-left text-[14px] border-collapse table-fixed">
                      <thead>
                        <tr className="bg-[#0D3B59] text-white">
                          <th className="w-1/2 px-6 py-4.5 font-bold border-r border-white/10 uppercase tracking-wide">
                            Events
                          </th>
                          <th className="w-1/2 px-6 py-4.5 font-bold uppercase tracking-wide">
                            Dates (Tentative)
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 text-[#111827]">
                        {[
                          { e: "Application Start Date", d: "November 2025" },
                          { e: "Application Deadline", d: "January 30, 2026" },
                          {
                            e: "CUET UG Exam Dates",
                            d: "May 11 – May 31, 2026",
                          },
                          { e: "Merit List Release", d: "June 2026" },
                          { e: "Counselling Window", d: "July 2026" },
                        ].map((row, i) => (
                          <tr
                            key={i}
                            className="hover:bg-gray-50 transition-colors"
                          >
                            <td className="px-6 py-4 font-medium text-[#4b5563] border-r border-gray-200">
                              {row.e}
                            </td>
                            <td className="px-6 py-4 font-medium text-[#4b5563]">
                              {row.d}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Sidebar */}
            <aside className="w-full lg:w-[340px] flex flex-col gap-6 sticky top-4">
              {/* Ad/CTA Card */}
              {/* Lorem ipsum Sidebar Card - Pixel Perfect Match */}
              <div className="bg-white rounded-xl overflow-hidden shadow-[0_2px_15px_rgba(0,0,0,0.05)] border border-gray-100 w-full">
                {/* Header Section */}
                <div className="bg-[#2D546E] py-3 text-center">
                  <h4 className="text-white text-[15px] font-bold">
                    Lorem ipsum
                  </h4>
                </div>

                {/* Body Section */}
                <div className="p-6 flex flex-col items-center text-center">
                  <p className="text-[13px] text-[#4b5563] leading-relaxed mb-6 font-medium max-w-[200px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor
                  </p>

                  {/* Apply Now Button */}
                  <button className="bg-[#0D3B59] text-white px-8 py-2.5 rounded-lg font-bold text-[14px] hover:bg-[#092a40] transition-all active:scale-95 shadow-sm">
                    Apply now
                  </button>
                </div>
              </div>

              {/* Sidebar: Explore Other Colleges - Pixel Perfect Match */}
              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-[0_2px_15px_rgba(0,0,0,0.02)]">
                <h3 className="text-[16px] font-bold text-[#111827] mb-6">
                  Explore other colleges-
                </h3>

                <div className="flex flex-col gap-6">
                  {[
                    {
                      name: "Alagappa University's Directorate of Distance Education",
                      loc: "Karaikudi, Tamil Nadu",
                      img: "/assets/b1.png", // Insert image path
                      type: "location",
                    },
                    {
                      name: "Amity School of Distance Education",
                      loc: "Noida, New Delhi",
                      img: "/assets/b2.png", // Insert image path
                      type: "location",
                    },
                    {
                      name: "Amity University Bengaluru",
                      loc: "Bengaluru, Karnataka",
                      img: "/assets/b3.png", // Insert image path
                      type: "clock",
                    },
                    {
                      name: "Amity University Bengaluru",
                      loc: "Bengaluru, Karnataka",
                      img: "/assets/b3.png", // Insert image path
                      type: "clock",
                    },
                  ].map((col, i) => (
                    <div
                      key={i}
                      className="flex flex-col gap-3 group cursor-pointer border-b border-gray-50 pb-6 last:border-0 last:pb-0"
                    >
                      {/* Image Container with Exact Radius */}
                      <div className="relative w-full h-[150px] rounded-2xl overflow-hidden shadow-sm bg-gray-100">
                        <Image
                          src={col.img}
                          alt={col.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>

                      {/* Content Section */}
                      <div className="px-1">
                        <h4 className="text-[14px] font-bold text-[#3B82B1] hover:text-[#1a2e4a] leading-[1.4] transition-colors line-clamp-2">
                          {col.name}
                        </h4>

                        <div className="flex items-center gap-1.5 mt-2">
                          {/* Conditional Icon Logic */}
                          {col.type === "location" ? (
                            <svg
                              className="w-3.5 h-3.5 text-gray-400"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
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
                              className="w-3.5 h-3.5 text-gray-400"
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
                          )}
                          <span className="text-[12px] font-medium text-gray-400">
                            {col.loc}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
