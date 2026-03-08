"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ExamDetail() {
  const [activeTab, setActiveTab] = useState("Overview");

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -100;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden w-full max-w-[100vw] font-sans">
      {/* --- ZONE 1: TOP HEADER (F8F9FA) --- */}
      <div className="w-full bg-[#f8f9fa] pt-4 lg:pt-6 pb-4">
        <div className="max-w-[1240px] mx-auto px-4 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-[12px] text-[#595959] mb-4 lg:mb-6 font-medium overflow-x-auto no-scrollbar">
            <Link
              href="/"
              className="hover:text-[#3B82B1] flex items-center gap-1.5 shrink-0"
            >
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </Link>
            <span className="text-gray-400 shrink-0">›</span>
            <Link href="/courses" className="hover:text-[#3B82B1] shrink-0">
              Exams
            </Link>
            <span className="text-gray-400 shrink-0">›</span>
            <span className="text-[#3B82B1] font-normal truncate">
              CAT Exam 2025: Result Out, Response Sheet, Eligibility
            </span>
          </nav>

          {/* Header Title and Actions */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <h1 className="text-[22px] md:text-[32px] font-extrabold leading-tight">
              <span className="text-[#f28c28]">CAT Exam 2025:</span>
              <span className="text-[#111827]">
                {" "}
                Result Out, Response Sheet, Eligibility
              </span>
            </h1>

            {/* Action Buttons – stack on mobile */}
            <div className="flex items-center gap-2 shrink-0">
              <button className="flex items-center gap-1.5 px-3 lg:px-5 py-2 lg:py-2.5 bg-white border border-[#3B82B1] text-[#3B82B1] rounded-lg font-bold text-[12px] lg:text-[14px] shadow-sm hover:bg-gray-50 transition-all">
                Sample Papers
                <svg
                  className="w-3.5 h-3.5 lg:w-4 lg:h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
              </button>
              <button className="flex items-center gap-1.5 px-3 lg:px-6 py-2 lg:py-2.5 bg-[#0D3B59] text-white rounded-lg font-bold text-[12px] lg:text-[14px] shadow-sm hover:bg-[#092a40] transition-all">
                Set Alerts
                <svg
                  className="w-3.5 h-3.5 lg:w-4 lg:h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* --- ZONE 2: TAB STRIP (#E7EBEE) --- */}
      <div className="w-full bg-[#E7EBEE] py-2 border-b border-gray-200">
        <div className="max-w-[1240px] mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1.5">
            {[
              { label: "Overview", active: true },
              { label: "Admit Card" },
              { label: "Answer Key" },
              { label: "Result" },
              { label: "Dates" },
              { label: "Counselling" },
              { label: "Cut of Marks" },
            ].map((tab, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(tab.label)}
                className={`px-4 lg:px-6 py-2 rounded-md text-[12px] lg:text-[13px] font-bold whitespace-nowrap transition-all border
                  ${tab.label === activeTab || (idx === 0 && activeTab === "Overview")
                    ? "bg-[#0D3B59] text-white border-[#0D3B59] shadow-md"
                    : "bg-white text-[#111827] border-gray-100 hover:bg-gray-50"
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* --- ZONE 3: MAIN BODY SEPARATOR (WHITE) --- */}
      <div className="w-full h-4 lg:h-8 bg-white" />

      {/* --- ZONE 4: MAIN CONTENT (#E7EBEE) --- */}
      <div className="w-full bg-[#E7EBEE] min-h-screen pt-4 pb-16">
        <div className="max-w-[1240px] mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-5 lg:gap-6 items-start lg:justify-between">

            {/* Main Content Column */}
            <div className="w-full lg:w-[912px] flex-shrink-0 flex flex-col gap-5 lg:gap-6">
              <div className="flex-1 min-w-0 flex flex-col gap-5 lg:gap-6">

                {/* --- Latest News & Updates --- */}
                <div className="bg-white rounded-[8px] border border-gray-100 shadow-[0_2px_15px_rgba(0,0,0,0.02)] flex flex-col pt-4 pb-4 pl-4 pr-4 lg:pt-5 lg:pb-5 lg:pl-6 lg:pr-6 gap-4 lg:gap-5">
                  {/* Author Metadata Row */}
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-full overflow-hidden relative border border-gray-100 shrink-0">
                      <Image
                        src="/assets/p.png"
                        alt="Author"
                        fill
                        className="object-cover bg-gray-200"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[12px] lg:text-[13px] font-bold text-[#111827]">
                        Updated on December 26, 2025
                      </span>
                      <span className="text-[11px] lg:text-[12px] text-gray-500 font-medium">
                        By{" "}
                        <span className="text-[#3B82B1] underline hover:underline cursor-pointer">
                          Jiya Tyagi
                        </span>
                        , Content Manager
                      </span>
                    </div>
                  </div>

                  {/* Section Header */}
                  <h2 className="text-[20px] lg:text-[24px] font-bold text-[#121212] leading-tight">
                    Latest News &amp; Updates-
                  </h2>

                  {/* Content Summary */}
                  <div className="flex flex-col gap-3 lg:gap-4">
                    <p className="text-[13px] lg:text-[14px] text-[#121212] leading-[1.6] font-normal">
                      Candidates are advised to regularly visit the official
                      website for announcements including admit card release,
                      guidelines, and further exam instructions. Below are the
                      latest updates for CAT 2025:
                    </p>

                    {/* Bulleted News List */}
                    <ul className="flex flex-col gap-2.5 lg:gap-3 pl-2">
                      {[
                        "IIM CAT result 2025 has been released online today on 24 December, 2025.",
                        "Candidates must keep their login credentials handy to download CAT scorecard.",
                        "IIM Kozhikode has already released the CAT 2025 response sheet and provisional answer key on December 3, 2025.",
                        "CAT 2025 notification released by IIM Kozhikode.",
                        "CAT 2025 exam was conducted on 30 November 2025.",
                      ].map((news, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-[13px] lg:text-[14px] text-[#121212] leading-relaxed"
                        >
                          <span className="mt-2 w-1 h-1 rounded-full bg-[#111827] shrink-0" />
                          <span className="font-normal">{news}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* --- Table of Contents --- */}
                <div className="bg-white rounded-[8px] border border-[#e5e7eb] shadow-sm flex flex-col pt-4 pb-3 pl-4 pr-4 lg:pt-5 lg:pb-4 lg:pl-6 lg:pr-6 gap-4">
                  <h2 className="text-[18px] lg:text-[20px] font-bold text-[#121212] leading-tight">
                    Table of contents-
                  </h2>

                  <div className="flex flex-col gap-3 lg:gap-4 pl-1">
                    {[
                      { label: "CAT Exam 2025", id: "highlights" },
                      { label: "CAT 2025 Toppers list", id: "toppers" },
                      { label: "CAT Result 2025 out", id: "result" },
                      {
                        label: "CAT Previous Year Question Paper- Free PDF Download",
                        id: "pyq",
                      },
                      {
                        label: "CAT 2025 Eligibility Criteria",
                        id: "eligibility",
                      },
                    ].map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => scrollToSection(item.id)}
                        className="flex items-center gap-3 text-[#3B82B1] hover:text-[#0D3B59] transition-colors group text-left"
                      >
                        <svg
                          className="w-2.5 h-2.5 shrink-0 fill-[#0D3B59]"
                          viewBox="0 0 24 24"
                        >
                          <path d="M3 22v-20l18 10-18 10z" />
                        </svg>
                        <span className="text-[13px] lg:text-[14.5px] font-normal leading-tight underline-offset-4 hover:underline">
                          {item.label}
                        </span>
                      </button>
                    ))}
                  </div>

                  <div className="pt-2 border-t border-gray-50 flex items-center justify-start">
                    <button className="flex items-center gap-2 text-[#3B82B1] text-[13px] font-bold hover:text-[#0D3B59] transition-all">
                      View more
                      <svg
                        className="w-4 h-4 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
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

                {/* --- Exam Overview & Banner --- */}
                <div className="flex flex-col gap-4 lg:gap-6">
                  <div className="bg-white rounded-[8px] border border-[#e5e7eb] shadow-sm flex flex-col pt-4 pb-4 pl-4 pr-4 lg:pt-5 lg:pb-5 lg:pl-6 lg:pr-6 gap-3">
                    <h2 className="text-[18px] lg:text-[20px] font-bold text-[#121212] leading-tight">
                      CAT Exam 2025-
                    </h2>
                    <p className="text-[13px] lg:text-[14px] text-[#121212] leading-[1.6] font-normal">
                      IIM Kozhikode will release the IIM CAT result 2025 on
                      December 24, 2025, at 6 PM. The latest update regarding
                      the release of the CAT result PDF was announced on{" "}
                      <span className="text-[#3B82B1] hover:underline cursor-pointer">
                        iimcat.nic.in
                      </span>
                      . Candidates who have appeared for the CAT exam 2025 on
                      November 30, 2025, must keep their login credentials
                      handy. The provisional answer key was released on 4
                      December 2025 by IIM Kozhikode. The objection window
                      remains open until 10 December 2025, after which the final
                      result will be announced.
                    </p>
                  </div>

                  {/* Banner */}
                  <div className="h-[180px] lg:h-[320px] rounded-[8px] overflow-hidden border border-[#e5e7eb] shadow-sm relative bg-gray-100">
                    <Image
                      src="/assets/catban.png"
                      alt="CAT 2025 Exam Overview Banner"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* --- CAT 2025 Toppers List --- */}
                <div className="bg-white rounded-[8px] border border-[#e5e7eb] shadow-sm flex flex-col pt-4 pb-4 pl-4 pr-4 lg:pt-5 lg:pb-5 lg:pl-6 lg:pr-6 gap-4 lg:gap-5">
                  <div className="flex flex-col gap-3">
                    <h2 className="text-[18px] lg:text-[20px] font-bold text-[#121212] leading-tight">
                      CAT 2025 Toppers List-
                    </h2>
                    <p className="text-[13px] lg:text-[14px] text-[#595959] leading-[1.6] font-normal">
                      The CAT 2025 Toppers List highlights candidates who
                      secured exceptional percentiles through strong conceptual
                      clarity, consistent practice, and smart exam strategy.
                      These toppers set benchmarks by achieving near-perfect
                      accuracy across all sections—VARC, DILR, and Quant.
                    </p>
                  </div>

                  {/* Toppers Table with horizontal scroll on mobile */}
                  <div className="overflow-x-auto">
                    <div className="overflow-hidden border border-[#e5e7eb] rounded-[8px] min-w-[280px]">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="bg-[#0D3B59] text-white">
                            <th className="py-3 px-4 lg:py-[12px] lg:px-[20px] text-[#FFFFFF] text-[13px] lg:text-[14px] font-semibold border-r border-[#ffffff33] w-1/2">
                              Candidate Name
                            </th>
                            <th className="py-3 px-4 lg:py-[12px] lg:px-[20px] text-[13px] lg:text-[14px] font-semibold">
                              CAT Percentage
                            </th>
                          </tr>
                        </thead>
                        <tbody className="text-[13px] lg:text-[14px] text-[#111827]">
                          {[
                            { name: "Swaraj Pal Kesari", value: "100%" },
                            { name: "Vinayak Agarwal", value: "99.99%" },
                            { name: "Deepak M", value: "99.98%" },
                            { name: "Anmol Gupta", value: "99.96%" },
                            { name: "Lakshya Khandelwal", value: "99.56%" },
                            { name: "Naitiki Singhal", value: "99.45%" },
                            { name: "Priyansh Jain", value: "99.25%" },
                            { name: "Aditi Dindorkar", value: "99.04%" },
                            { name: "Swati Jhunjhunwala", value: "99.03%" },
                            { name: "Nitya Gupta", value: "99%" },
                          ].map((topper, idx) => (
                            <tr
                              key={idx}
                              className="border-t border-[#e5e7eb] hover:bg-gray-50 transition-colors"
                            >
                              <td className="py-3 px-4 lg:py-[12px] lg:px-[20px] font-normal border-r text-[#121212] border-[#e5e7eb]">
                                {topper.name}
                              </td>
                              <td className="py-3 px-4 lg:py-[12px] lg:px-[20px] font-normal text-[#121212]">
                                {topper.value}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                {/* --- CAT Result 2025 Out --- */}
                <div className="bg-white rounded-[8px] border border-[#e5e7eb] shadow-sm flex flex-col pt-4 pb-4 pl-4 pr-4 lg:pt-5 lg:pb-5 lg:pl-6 lg:pr-6 gap-4 lg:gap-5">
                  <div className="flex flex-col gap-3">
                    <h2 className="text-[18px] lg:text-[20px] font-bold text-[#121212] leading-tight">
                      CAT Result 2025 Out-
                    </h2>
                    <p className="text-[13px] lg:text-[14px] text-[#121212] leading-[1.6] font-normal">
                      CAT 2025 scorecard has been released available in PDF
                      format on the official website iimcat.ac.in on December
                      24, 2025. Candidates have to use the CAT result 2025 login
                      link from 6 PM onwards.
                    </p>
                  </div>

                  <ul className="flex flex-col gap-[10px] pl-[8px]">
                    {[
                      "Go to the official CAT website (iimcat.ac.in)",
                      "Click on the 'Login' tab",
                      "Type in your CAT application number and password",
                      "Click on the scorecard section",
                      "Once there, click on 'Download' to obtain your CAT 2025 scorecard in PDF",
                    ].map((step, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-[13px] lg:text-[14px] text-[#111827] leading-relaxed"
                      >
                        <span className="mt-[10px] w-[4px] h-[4px] rounded-full bg-[#121212] shrink-0" />
                        <span className="font-normal">{step}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="text-[13px] lg:text-[14px] text-[#121212] leading-[1.6] font-normal">
                    CAT is valid for one admission cycle only, which means a
                    candidate can use a CAT score for one year for admission to
                    IIMs, or other top business schools.
                  </p>

                  <div className="flex justify-start">
                    <button className="flex items-center gap-2 px-4 lg:px-[16px] py-2 lg:py-[10px] bg-[#0D3B59] text-white rounded-[6px] font-semibold text-[13px] lg:text-[14px] hover:bg-[#092a40] transition-all shadow-sm">
                      Cat result 2025 out
                      <svg
                        className="w-4 h-4 lg:w-[18px] lg:h-[18px]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* --- CAT 2025 Highlights --- */}
                <div className="bg-white rounded-[8px] border border-[#e5e7eb] shadow-sm flex flex-col pt-4 pb-4 pl-4 pr-4 lg:pt-5 lg:pb-5 lg:pl-6 lg:pr-6 gap-4 lg:gap-5">
                  <div className="flex flex-col gap-3">
                    <h2 className="text-[18px] lg:text-[20px] font-bold text-[#121212] leading-tight">
                      CAT 2025 Highlights-
                    </h2>
                    <p className="text-[13px] lg:text-[14px] text-[#121212] leading-[1.6] font-normal">
                      <span className="font-semibold text-[#121212]">
                        CAT Exam
                      </span>{" "}
                      is conducted by Indian Institute of Management for
                      admission to MBA and postgraduate management courses.
                      Below table contains{" "}
                      <span className="font-semibold text-[#121212]">
                        CAT 2025 highlights
                      </span>
                      , including exam mode, frequency, conducting body, and
                      other essential details:
                    </p>
                  </div>

                  {/* Highlights Table – horizontal scroll on mobile */}
                  <div className="overflow-x-auto">
                    <div className="overflow-hidden border border-[#e5e7eb] rounded-[8px] min-w-[320px]">
                      <table className="w-full text-left border-collapse table-fixed">
                        <thead>
                          <tr className="bg-[#0D3B59] text-white">
                            <th className="py-3 px-4 lg:py-[12px] lg:px-[20px] text-[13px] lg:text-[14px] font-semibold border-r border-[#ffffff33] w-1/2">
                              CAT Exam Particulars
                            </th>
                            <th className="py-3 px-4 lg:py-[12px] lg:px-[20px] text-[13px] lg:text-[14px] font-semibold w-1/2">
                              CAT 2025 Details
                            </th>
                          </tr>
                        </thead>
                        <tbody className="text-[13px] lg:text-[14px] text-[#111827]">
                          {[
                            {
                              label: "CAT Full Form",
                              value: "Common Admission Test (CAT)",
                            },
                            {
                              label: "Conducting Institute for 2025",
                              value: "IIM Kozhikode",
                            },
                            { label: "Exam Level", value: "National" },
                            {
                              label: "CAT Entrance Exam Frequency",
                              value: "Once a year",
                            },
                            {
                              label: "CAT Exam Date 2025",
                              value: "November 30, 2025",
                            },
                            {
                              label: "CAT Exam Timings",
                              value: (
                                <ul className="list-disc pl-4 space-y-1">
                                  <li>Session 1: 8:30 AM to 10:30 AM</li>
                                  <li>Session 2: 12:30 PM to 2:30 PM</li>
                                  <li>Session 3: 4:30 PM to 6:30 PM</li>
                                </ul>
                              ),
                            },
                            {
                              label: "CAT Exam Fees",
                              value:
                                "INR 2,600 (General) and INR 1,300 (Reserved)",
                            },
                            {
                              label: "Eligibility Criteria",
                              value:
                                "Graduation with 50% aggregate (45% for SC/ST/PwD)",
                            },
                            {
                              label: "Number of Applications",
                              value: "2.95 lakh (in 2025)",
                            },
                            {
                              label: "Number of Test Takers",
                              value: "2.93 lakh (in 2024)",
                            },
                            {
                              label: "Exam Purpose",
                              value:
                                "Admission to IIMs, SPJIMR, FMS, MDI, IMT and over 1,300 B-Schools in India",
                            },
                            { label: "Courses Offered", value: "MBA/PGDM" },
                            {
                              label: "CAT syllabus",
                              value: (
                                <ul className="list-disc pl-4 space-y-1">
                                  <li>Verbal Ability &amp; Reading Comprehension (VARC)</li>
                                  <li>Data Interpretation &amp; Logical Reasoning (DILR)</li>
                                  <li>Quantitative Ability (QA)</li>
                                </ul>
                              ),
                            },
                            {
                              label: "CAT exam mode",
                              value:
                                "Computer Based Test (CBT) with MCQs and non-MCQs",
                            },
                            { label: "No. of test cities", value: "170" },
                            {
                              label: "CAT exam website",
                              value: (
                                <span className="text-[#3B82B1] hover:underline cursor-pointer">
                                  https://iimcat.ac.in
                                </span>
                              ),
                            },
                            {
                              label: "Exam helpdesk no.",
                              value: (
                                <span className="text-[#3B82B1]">
                                  1-800-210-1088{" "}
                                  <span className="text-gray-500 font-normal">
                                    (Toll Free)
                                  </span>
                                </span>
                              ),
                            },
                          ].map((row, idx) => (
                            <tr
                              key={idx}
                              className="border-t border-[#e5e7eb] hover:bg-gray-50 transition-colors"
                            >
                              <td className="py-3 px-4 lg:py-[12px] lg:px-[20px] font-normal text-[#121212] border-r border-[#e5e7eb] align-top bg-white">
                                {row.label}
                              </td>
                              <td className="py-3 px-4 lg:py-[12px] lg:px-[20px] font-normal align-top bg-white">
                                {row.value}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                {/* --- EXPLORE COLLEGES (visible on all, replaces sidebar content on mobile) --- */}
                <div className="bg-white rounded-[8px] border border-[#e5e7eb] shadow-sm flex flex-col pt-4 pb-4 pl-4 pr-4 lg:pt-5 lg:pb-5 lg:pl-6 lg:pr-6 gap-4">
                  <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                    <h2 className="text-[16px] lg:text-[18px] font-bold text-[#111827]">
                      Explore Colleges-
                    </h2>
                    <button className="text-[12px] lg:text-[13px] text-[#3B82B1]">
                      View All
                    </button>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-4">
                    {[
                      {
                        name: "Alagappa University's Directorate of Distance Education",
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
                    ].map((col, i) => (
                      <div
                        key={i}
                        className="group cursor-pointer border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all bg-white flex flex-col"
                      >
                        <div className="w-full h-20 lg:h-28 bg-gray-100 relative overflow-hidden">
                          <Image
                            src={col.img}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            alt="college"
                          />
                        </div>
                        <div className="p-2.5 lg:p-4 flex flex-col flex-1">
                          <h3 className="text-[11px] lg:text-[13px] font-normal underline text-[#3B82B1] mb-1.5 leading-[1.4] line-clamp-2">
                            {col.name}
                          </h3>
                          <div className="flex items-center gap-1 mt-auto">
                            <svg
                              className="w-3 h-3 text-gray-400 shrink-0"
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
                            <span className="text-[10px] lg:text-[11px] font-normal text-[#717171] leading-tight">
                              {col.loc}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* --- FAQ Section --- */}
                <div className="bg-white rounded-[8px] border border-[#e5e7eb] shadow-sm flex flex-col pt-4 pb-4 pl-4 pr-4 lg:pt-5 lg:pb-5 lg:pl-6 lg:pr-6 gap-4">
                  <h2 className="text-[16px] lg:text-[18px] font-bold text-[#121212] border-b border-gray-100 pb-3">
                    FAQs on Exams-
                  </h2>

                  <div className="flex flex-col gap-3">
                    {/* Expanded FAQ */}
                    <div className="border border-gray-100 rounded-xl bg-white overflow-hidden shadow-sm">
                      <div className="flex justify-between items-center cursor-pointer p-3 lg:p-4 group">
                        <h3 className="text-[12px] lg:text-[14px] font-normal text-[#121212] group-hover:text-[#3B82B1] transition-colors pr-2">
                          1. What is CAT exam 2025 date?
                        </h3>
                        <svg
                          className="w-4 h-4 lg:w-5 lg:h-5 text-[#0D3B59] shrink-0"
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
                      "How many attempts are allowed in CAT?",
                      "Is CAT exam 2025 going to be held online, if the percentage is below 50%?",
                    ].map((question, idx) => (
                      <div
                        key={idx}
                        className="border border-gray-100 rounded-xl p-3 lg:p-4 cursor-pointer hover:bg-gray-50 transition-all flex justify-between items-center group shadow-sm"
                      >
                        <h3 className="text-[12px] lg:text-[14px] font-normal text-[#121212] group-hover:text-[#3B82B1] pr-2">
                          {idx + 2}. {question}
                        </h3>
                        <svg
                          className="w-4 h-4 lg:w-5 lg:h-5 text-gray-400 group-hover:text-[#0D3B59] transition-colors shrink-0"
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
                    <div className="flex justify-center mt-2">
                      <button className="text-[12px] lg:text-[13px] font-normal text-[#121212] border border-[#d1d5db] px-6 py-2 rounded-xl hover:bg-gray-50 flex items-center gap-2 transition-all shadow-sm">
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

              </div>
            </div>

            {/* --- SIDEBAR COLUMN (Desktop only) --- */}
            <aside className="hidden lg:flex w-[292px] flex-shrink-0 flex-col gap-6">
              {/* Essential Info */}
              <div
                style={{ height: "140px" }}
                className="bg-white rounded-[8px] border border-[#e5e7eb] shadow-sm flex flex-col items-center justify-center p-4 gap-4"
              >
                <h3 className="text-[16px] font-bold text-[#111827] leading-[1.3] text-center px-2">
                  Discover All Essential Exam Information
                </h3>
                <button className="w-[180px] bg-[#0D3B59] text-white py-2.5 rounded-[6px] font-bold text-[13px] hover:bg-[#092a40] transition-colors shadow-sm">
                  View Exams Details
                </button>
              </div>

              {/* Get Exam Notifications */}
              <div className="bg-white rounded-[8px] border border-[#e5e7eb] shadow-sm overflow-hidden flex flex-col">
                <div className="bg-[#2D546E] py-2.5 text-center text-white font-bold text-[15px]">
                  Get Exam Notifications
                </div>
                <div className="p-6 flex flex-col gap-5 items-center">
                  <p className="text-[14px] text-[#111827] font-medium leading-snug text-center">
                    Enter your details to receive instant alerts for CAT Exam
                    updates.
                  </p>
                  <div className="flex flex-col gap-3 w-full">
                    <input
                      placeholder="Enter your full name"
                      className="w-full px-4 py-2.5 rounded-[8px] text-[#D0D0D0] border border-[#d1d5db] text-[13px] focus:outline-none focus:ring-1 focus:ring-[#0D3B59]"
                    />
                    <input
                      placeholder="Enter your email"
                      className="w-full px-4 py-2.5 rounded-[8px] text-[#D0D0D0] border border-[#d1d5db] text-[13px] focus:outline-none focus:ring-1 focus:ring-[#0D3B59]"
                    />
                    <input
                      placeholder="Enter your number"
                      className="w-full px-4 py-2.5 rounded-[8px] text-[#D0D0D0] border border-[#d1d5db] text-[13px] focus:outline-none focus:ring-1 focus:ring-[#0D3B59]"
                    />
                  </div>
                  <button className="px-10 py-2.5 bg-[#0D3B59] text-white rounded-[8px] font-bold text-[14px] hover:bg-[#092a40] transition-all">
                    Notify Me
                  </button>
                </div>
              </div>

              {/* Upcoming Exams */}
              <div className="flex flex-col gap-4">
                <h3 className="text-[16px] font-bold text-[#121212]">
                  Explore more exams with upcoming dates-
                </h3>
                <div className="flex flex-col gap-3">
                  {[
                    {
                      title:
                        "NMAT Exam 2025: Application, Dates, Eligibility, Pattern, Syllabus",
                      date: "Dates Not Available",
                    },
                    {
                      title:
                        "XAT Exam 2026: Admit Card (Out), Dates, Eligibility, Pattern, Syllabus",
                      date: "Dates Not Available",
                    },
                    {
                      title:
                        "CMAT 2026: Application, Dates, Eligibility, Pattern, Syllabus",
                      date: "25 Nov '25 - 27 Nov '25",
                    },
                  ].map((exam, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-[8px] border border-[#e5e7eb] p-4 flex flex-col gap-2"
                    >
                      <h4 className="text-[13px] font-normal text-[#3B82B1] underline leading-snug">
                        {exam.title}
                      </h4>
                      <div className="flex items-center gap-2 text-[12px] text-gray-500 font-normal">
                        <svg
                          className="w-3.5 h-3.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {exam.date}
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
