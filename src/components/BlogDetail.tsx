"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function BlogDetail() {
  return (
    <div className="bg-[#f8f9fa] min-h-screen pb-16 pt-6 overflow-x-hidden w-full max-w-[100vw]">
      <div className="max-w-[1240px] mx-auto px-4 lg:px-8">
        {/* --- SECTION 1: BREADCRUMBS --- */}
        <div className="flex items-center gap-1.5 text-[12px] text-[#1a2e4a] mb-4 md:mb-6 font-medium overflow-hidden">
          <Link
            href="/"
            className="hover:text-blue-600 flex items-center gap-1"
          >
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
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </Link>
          <span className="text-gray-300">&gt;</span>
          <Link href="/?view=courses" className="hover:text-blue-600">
            Courses
          </Link>
          <span className="text-gray-300">›</span>
          <span className="text-[#0D3B59] font-normal truncate">
            How to Become a Marketing Manager with a Specialization in Online
            MBA (Marketing)
          </span>
        </div>

        {/* --- MAIN LAYOUT WRAPPER (Content + Sidebar) --- */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start relative">
          {/* --- LEFT COLUMN: ARTICLE CONTENT --- */}
          <div className="flex-1 w-full max-w-full min-w-0 flex flex-col gap-6">
            {/* 1.1 Article Header & Featured Image */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 md:p-8">
              <h1 className="text-[20px] md:text-[34px] font-bold text-[#1a2e4a] leading-tight mb-2 md:mb-3">
                How to Become a{" "}
                <span className="text-[#f59e0b]">Marketing Manager</span> with a
                Specialization in Online MBA (Marketing)-
              </h1>

              <div className="flex items-center gap-3 text-[11px] md:text-[12px] text-gray-500 font-medium mb-4 md:mb-6">
                <div className="flex items-center gap-1.5">
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
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span>3 Sep, 2025</span>
                </div>
                <div className="flex items-center gap-1.5">
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
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                  <span>23 Views</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100 shrink-0">
                    <Image
                      src="/assets/p.png"
                      width={40}
                      height={40}
                      alt="Yogita Sharma"
                      className="object-cover w-full h-full"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src =
                          "/assets/logo.png";
                      }}
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[13px] font-bold text-[#1a2e4a]">
                      Yogita Sharma
                    </span>
                    <span className="text-[11px] text-gray-500 font-medium tracking-wide">
                      Content manager at Degreefyd
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-[13.5px] text-[#1a2e4a] leading-relaxed mb-6 font-normal">
                An Online MBA will teach you how to be a great leader and
                marketer. Learn how to become a Marketing Manager with a focus
                on this important area.
              </p>

              <div className="w-full h-[250px] md:h-[400px] bg-gray-100 rounded-xl overflow-hidden relative">
                <Image
                  src="/assets/blog.png"
                  fill
                  alt="Online MBA Cover"
                  className="object-cover"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src =
                      "/assets/logo.png";
                  }}
                />
              </div>
            </div>

            {/* 1.2 Table of Contents */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 md:p-8">
              <h2 className="text-[16px] md:text-[22px] font-bold text-[#1a2e4a] mb-4 md:mb-5">
                Table of contents-
              </h2>
              <ul className="flex flex-col gap-3">
                <li className="flex items-center gap-2 text-[#3B82B1] text-[14px] cursor-pointer hover:underline">
                  <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  Introduction
                </li>
                <li className="flex items-center gap-2 text-[#3B82B1] text-[14px] cursor-pointer hover:underline">
                  <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  Why Choose a Career as a Marketing Manager?
                </li>
                <li className="flex items-center gap-2 text-[#3B82B1] text-[14px] cursor-pointer hover:underline">
                  <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  How Does an Online MBA in Marketing Help?
                </li>
                <li className="flex items-center gap-2 text-[#3B82B1] text-[14px] cursor-pointer hover:underline">
                  <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  Steps to Become a Marketing Manager with an Online MBA
                  (Marketing)
                </li>
                <li className="flex items-center gap-2 text-[#3B82B1] text-[14px] cursor-pointer hover:underline">
                  <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  What You'll Learn in an Online MBA (Marketing)
                </li>
              </ul>
              <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-start">
                <button className="text-[13px] text-[#3B82B1] font-medium flex items-center gap-1 hover:underline">
                  View more{" "}
                  <svg
                    className="w-3 h-3"
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
              </div>
            </div>

            {/* 1.3 Article Body Sections (Prose) */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 md:p-8">
              <div className="prose prose-blue max-w-none relative">
                {/* Introduction Section */}
                <h2 className="text-[20px] md:text-[24px] font-bold text-[#1a2e4a] mb-4 flex items-center gap-2">
                  Introduction-
                </h2>
                <p className="text-[14px] text-gray-700 leading-relaxed mb-4 text-justify">
                  Marketing roles are growing fast in India because every brand
                  wants a stronger customer reach. Many learners now search for
                  an <strong>online MBA in Marketing</strong> to build a stable
                  marketing career. The marketing field offers strong demand,
                  good salaries, and clear growth paths. A well-planned MBA
                  marketing specialization online helps learners gain skills
                  required for modern business roles.
                  <br />
                  <br />
                  Many professionals also want to understand{" "}
                  <strong>how to become a marketing manager</strong> with the
                  right training. This role needs creativity, planning skills,
                  and good knowledge of business decisions. A structured online
                  degree helps learners build these abilities in a flexible way.
                  The demand for skilled managers is rising in India, and
                  companies need trained talent.
                </p>

                <div className="border-t border-gray-100 my-8"></div>

                {/* --- SECTION: MARKETING MANAGER ROLES --- */}
                <div className="flex flex-col gap-4">
                  <h2 className="text-[22px] font-bold text-[#121212] leading-tight">
                    What Is the Role of a Marketing Manager in a Company?
                  </h2>

                  <p className="text-[14px] text-[#595959] leading-[1.6] font-normal">
                    The role of a marketing manager covers many tasks that help
                    a brand grow. Here are the main responsibilities:
                  </p>

                  {/* Responsibility List with Custom Polygon Bullets */}
                  <ul className="flex flex-col gap-3.5 pl-1.5 mt-1 font-normal">
                    {[
                      "Create marketing strategies based on customer study",
                      "Manage online and offline campaigns",
                      "Guide teams in branding and promotions",
                      "Track marketing data and report outcomes",
                      "Work with product, sales, and design teams",
                      "Improve communication between customers and the brand",
                      "Handle ads, digital content, events, and promotions",
                      "Maintain brand reputation across channels",
                    ].map((text, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3.5 text-[14.5px] text-[#111827] font-normal leading-relaxed group"
                      >
                        {/* Dark Navy Polygon Bullet (#0D3B59) */}
                        <svg
                          className="w-2.5 h-2.5 mt-1.5 shrink-0 fill-[#0D3B59]"
                          viewBox="0 0 24 24"
                        >
                          <path d="M3 22v-20l18 10-18 10z" />
                        </svg>
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="text-[14px] text-[#595959] leading-[1.6] font-normal mt-2">
                    These duties match the industry's demand for marketing
                    manager roles and responsibilities. Companies expect
                    managers to drive growth through strong planning and data
                    use.
                  </p>

                  {/* Embedded Graphic Image Container */}
                  <div className="w-full h-auto bg-gray-100 rounded-[12px] overflow-hidden relative border border-[#e5e7eb] mt-4 shadow-sm">
                    <Image
                      src="/assets/mobile1.png"
                      width={800}
                      height={533}
                      alt="Marketing Funnel Graphic"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>

                {/* --- SECTION: KEY RESPONSIBILITIES TABLE --- */}
                <div className="flex flex-col gap-4 mt-8">
                  <h2 className="text-[20px] font-semibold text-[#111827] leading-tight">
                    Key Responsibilities of a Marketing Manager-
                  </h2>

                  {/* Responsibilities Table — horizontally scrollable on mobile */}
                  <div className="overflow-x-auto -mx-4 md:mx-0">
                    <div className="min-w-[500px] md:min-w-0 px-4 md:px-0 overflow-hidden border border-[#e5e7eb] rounded-[12px] shadow-sm">
                      <table className="w-full text-left border-collapse table-fixed">
                        <thead>
                          <tr className="bg-[#0D3B59] text-white">
                            <th className="py-[14px] px-[20px] text-[14.5px] font-medium border-r border-[#ffffff33] w-[40%]">
                              Responsibility
                            </th>
                            <th className="py-[14px] px-[20px] text-[14.5px] font-medium">
                              Description
                            </th>
                          </tr>
                        </thead>
                        <tbody className="text-[14px] text-[#111827] bg-white">
                          {[
                            {
                              label: "Campaign Planning",
                              desc: "Design campaigns for product or service growth",
                            },
                            {
                              label: "Market Study",
                              desc: "Track trends, behavior, and customer needs",
                            },
                            {
                              label: "Team Guidance",
                              desc: "Support teams during execution",
                            },
                            {
                              label: "Budget Control",
                              desc: "Manage marketing funds",
                            },
                            {
                              label: "Performance Study",
                              desc: "Check results of all campaigns",
                            },
                          ].map((row, idx) => (
                            <tr
                              key={idx}
                              className="border-t border-[#e5e7eb] hover:bg-gray-50 transition-colors"
                            >
                              <td className="py-[14px] px-[20px] font-normal border-r border-[#e5e7eb]">
                                {row.label}
                              </td>
                              <td className="py-[14px] px-[20px] font-normal text-[#595959]">
                                {row.desc}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                {/* --- SECTION: CAREER CTA BANNER --- */}
                <div className="mt-8 md:mt-10 mb-6 md:mb-8 bg-[#2D546E] rounded-[8px] overflow-hidden relative shadow-md md:flex md:flex-row md:items-center md:justify-between md:p-10 md:gap-6">
                  {/* Mobile: image on top | Desktop: image on right */}
                  <div className="relative w-full h-[160px] md:hidden">
                    <Image
                      src="/assets/3d.png"
                      fill
                      alt="Career guidance illustration"
                      className="object-contain"
                    />
                  </div>
                  {/* Banner Content */}
                  <div className="flex-1 flex flex-col gap-4 z-10 p-6 md:p-0">
                    <h3 className="text-white text-[18px] md:text-[24px] font-bold leading-[1.3] max-w-sm">
                      Lost about your career options? Let's map out your
                      success, step by step.
                    </h3>
                    <button className="w-fit bg-white text-[#0D3B59] px-6 py-2.5 rounded-[6px] font-extrabold text-[14px] shadow-sm hover:bg-gray-50 transition-all">
                      Connect Now
                    </button>
                  </div>

                  {/* Desktop-only image on right */}
                  <div className="hidden md:block relative w-[220px] h-[220px] shrink-0 z-10 p-10">
                    <Image
                      src="/assets/3d.png"
                      fill
                      alt="Career guidance illustration"
                      className="object-contain"
                    />
                  </div>

                  {/* Decorative Background */}
                  <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-black/10 to-transparent pointer-events-none" />
                </div>

                {/* --- SECTION: FAQ - PIXEL PERFECT --- */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-8 flex flex-col gap-6 mt-8">
                  <h2 className="text-[22px] font-bold text-[#121212] leading-tight">
                    Frequently Asked Questions about Online MBA-
                  </h2>

                  <div className="flex flex-col gap-3">
                    {[
                      {
                        q: "1. What qualifications are needed to become a marketing manager?",
                        a: "A marketing manager role needs a bachelor's degree in any stream. An Online MBA in Marketing adds strong management skills. Basic marketing knowledge and project exposure also support the role.",
                        isOpen: true,
                      },
                      {
                        q: "2. Is an Online MBA in Marketing enough to become a marketing manager?",
                        a: "Yes, an Online MBA in Marketing provides essential skills like brand management and consumer behavior analysis.",
                        isOpen: false,
                      },
                      {
                        q: "3. Is an Online MBA in Marketing enough to become a marketing manager?",
                        a: "Most universities offer comprehensive digital marketing and leadership modules within their online MBA programs.",
                        isOpen: false,
                      },
                      {
                        q: "4. Is an Online MBA in Marketing enough to become a marketing manager?",
                        a: "Industry-aligned curricula ensure you are job-ready for manager-level roles.",
                        isOpen: false,
                      },
                      {
                        q: "5. Is an Online MBA in Marketing enough to become a marketing manager?",
                        a: "Networking opportunities and placement support often accompany high-quality online programs.",
                        isOpen: false,
                      },
                    ].map((faq, idx) => (
                      <details
                        key={idx}
                        className="group border border-gray-200 rounded-lg bg-white overflow-hidden transition-all"
                        open={faq.isOpen}
                      >
                        <summary className="flex justify-between items-center p-4 cursor-pointer list-none text-[14.5px] text-[#111827] font-normal hover:bg-gray-50 transition-colors">
                          {faq.q}
                          <span
                            className={`transition-transform duration-300 group-open:rotate-180 ${faq.isOpen ? "text-[#3B82B1]" : "text-gray-400"}`}
                          >
                            <svg
                              className="w-5 h-5"
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
                          </span>
                        </summary>
                        <div className="px-4 pb-4 text-[14px] text-[#595959] leading-relaxed font-normal border-t border-gray-50 pt-3">
                          {faq.a}
                        </div>
                      </details>
                    ))}
                  </div>

                  {/* View More Button */}
                  <div className="flex justify-center mt-2">
                    <button className="flex items-center gap-2 px-6 py-2 border border-[#3B82B1] text-[#3B82B1] rounded-[6px] font-bold text-[14px] hover:bg-gray-50 transition-all">
                      View more
                      <svg
                        className="w-4 h-4"
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
              </div>
            </div>
          </div>

          {/* --- RIGHT COLUMN: SIDEBAR — hidden on mobile --- */}
          <div className="hidden lg:flex w-full lg:w-[320px] xl:w-[350px] shrink-0 flex-col gap-6">
            {/* 2.1 STICKY PROMO BANNER */}
            <div className="bg-white rounded-[8px] border border-[#e5e7eb] overflow-hidden flex flex-col shadow-sm text-center">
              {/* Header Strip (#2D546E) */}
              <div className="bg-[#2D546E] py-2.5 text-center">
                <h3 className="text-white font-semibold text-[15px]">
                  Lorem ipsum
                </h3>
              </div>
              <div className="p-6 flex flex-col items-center gap-5">
                <p className="text-[13px] text-[#111827] font-normal leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </p>
                <button className="bg-[#0D3B59] text-white px-8 py-2.5 rounded-[6px] font-semibold text-[14px] shadow-sm hover:bg-[#092a40] transition-colors uppercase tracking-wide">
                  Apply now
                </button>
              </div>
            </div>

            {/* 2.2 RELATED ARTICLES SECTION */}
            <div className="flex flex-col gap-4 mt-2">
              <h3 className="text-[18px] font-semibold text-[#111827]">
                Related Articles-
              </h3>

              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="bg-white rounded-[12px] border border-[#e5e7eb] overflow-hidden flex flex-col group cursor-pointer shadow-sm hover:shadow-md transition-shadow"
                >
                  {/* Article Thumbnail */}
                  <div className="w-full h-[140px] bg-gray-100 relative">
                    <Image
                      src="/assets/blog.png"
                      fill
                      alt="Article Preview"
                      className="object-cover"
                    />
                  </div>
                  {/* Article Details */}
                  <div className="p-4 flex flex-col gap-2">
                    <h4 className="text-[13.5px] font-normal text-[#3B82B1] underline leading-snug group-hover:text-[#3B82B1] transition-colors line-clamp-2">
                      Top 5 online Universities in India 2025: Ranks, Courses
                      &...
                    </h4>
                    <div className="flex items-center gap-1.5 text-[11px] text-gray-400 font-bold">
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
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      23 Dec, 2025
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
