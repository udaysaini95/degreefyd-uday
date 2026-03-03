"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const COURSES = [
    {
        title: "Master of Business Administration (MBA)",
        desc: "Kamala Nehru College is a Public Institute, located in New Delhi, Delhi. Established in 1964, Kamala Nehru College offers 4 programs such as MA, BA, B.Com, BSc in multiple",
        duration: "2 Years",
        fee: "₹40400-104000",
    },
    {
        title: "BA in Journalism and Mass Communication (BAJMC)",
        desc: "Kamala Nehru College is a Public Institute, located in New Delhi, Delhi. Established in 1964, Kamala Nehru College offers 4 programs such as MA, BA, B.Com, BSc in multiple",
        duration: "3 Years",
        fee: "₹40400-104000",
    },
    {
        title: "Master of Business Administration (MBA)",
        desc: "Kamala Nehru College is a Public Institute, located in New Delhi, Delhi. Established in 1964, Kamala Nehru College offers 4 programs such as MA, BA, B.Com, BSc in multiple",
        duration: "2 Years",
        fee: "₹40400-104000",
    },
    {
        title: "BA in Journalism and Mass Communication (BAJMC)",
        desc: "Kamala Nehru College is a Public Institute, located in New Delhi, Delhi. Established in 1964, Kamala Nehru College offers 4 programs such as MA, BA, B.Com, BSc in multiple",
        duration: "2 Years",
        fee: "₹40400-104000",
    },
    {
        title: "Master of Business Administration (MBA)",
        desc: "Kamala Nehru College is a Public Institute, located in New Delhi, Delhi. Established in 1964, Kamala Nehru College offers 4 programs such as MA, BA, B.Com, BSc in multiple",
        duration: "2 Years",
        fee: "₹40400-104000",
    },
];

const EXAMS = [
    { name: "CAT 2023", desc: "An online test of which a 2-year post-graduate degree course in Business..." },
    { name: "JEE Main 2023", desc: "An online test of which a 4-year post-graduate degree course in Business..." },
    { name: "XAT 2023", desc: "An online test of which a 2-year post-graduate degree course in Business..." },
];

export default function CourseListing() {
    const [levelFilters, setLevelFilters] = useState({
        ug: false,
        pg: false,
        diploma: false,
        certificate: false,
        phd: false,
    });

    const [modeFilters, setModeFilters] = useState({
        online: true,
        distance: true,
        regular: false,
    });

    return (
        <div className="bg-[#f8f9fa] min-h-screen pb-16 pt-8">
            <div className="max-w-[1200px] mx-auto px-4 lg:px-8">
                <div className="mb-6">
                    <div className="flex items-center gap-2 text-[13px] text-gray-500 mb-2">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        <span>&gt; Courses</span>
                    </div>
                    <h1 className="text-[24px] font-bold text-[#1a2e4a]">
                        Top Online & Distance <span className="text-orange-500">Degree Programs</span> in India
                    </h1>
                </div>

                <div className="flex flex-col lg:flex-row gap-6">
                    <div className="w-full lg:w-[260px] flex-shrink-0 flex flex-col gap-4">
                        <div className="bg-white border border-gray-200 rounded-xl p-4">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-bold text-[14px]">All Filters</h3>
                                <button className="text-blue-500 text-[12px] hover:underline">Reset</button>
                            </div>

                            <div className="mb-6">
                                <h4 className="text-[13px] font-semibold text-gray-700 mb-3">Level</h4>
                                <div className="flex flex-col gap-2.5">
                                    <label className="flex items-center justify-between group cursor-pointer">
                                        <span className="text-[13px] text-gray-600 group-hover:text-blue-600">UG (85)</span>
                                        <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                                    </label>
                                    <label className="flex items-center justify-between group cursor-pointer">
                                        <span className="text-[13px] text-gray-600 group-hover:text-blue-600">PG (72)</span>
                                        <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                                    </label>
                                    <label className="flex items-center justify-between group cursor-pointer">
                                        <span className="text-[13px] text-gray-600 group-hover:text-blue-600">Diploma (54)</span>
                                        <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                                    </label>
                                    <label className="flex items-center justify-between group cursor-pointer">
                                        <span className="text-[13px] text-gray-600 group-hover:text-blue-600">Certificate (25)</span>
                                        <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                                    </label>
                                    <label className="flex items-center justify-between group cursor-pointer">
                                        <span className="text-[13px] text-gray-600 group-hover:text-blue-600">Ph. D. (12)</span>
                                        <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                                    </label>
                                </div>
                            </div>

                            <div>
                                <h4 className="text-[13px] font-semibold text-gray-700 mb-3">Mode</h4>
                                <div className="flex flex-col gap-2.5">
                                    <label className="flex items-center justify-between group cursor-pointer">
                                        <span className="text-[13px] text-gray-600 group-hover:text-blue-600">Online (120)</span>
                                        <input type="checkbox" defaultChecked className="w-4 h-4 rounded border-gray-300 text-[#1a2e4a] focus:ring-[#1a2e4a]" />
                                    </label>
                                    <label className="flex items-center justify-between group cursor-pointer">
                                        <span className="text-[13px] text-gray-600 group-hover:text-blue-600">Distance (85)</span>
                                        <input type="checkbox" defaultChecked className="w-4 h-4 rounded border-gray-300 text-[#1a2e4a] focus:ring-[#1a2e4a]" />
                                    </label>
                                    <label className="flex items-center justify-between group cursor-pointer">
                                        <span className="text-[13px] text-gray-600 group-hover:text-blue-600">Regular (24)</span>
                                        <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#1a2e4a] focus:ring-[#1a2e4a]" />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 flex flex-col gap-4">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search courses..."
                                className="w-full bg-white border border-gray-200 rounded-xl py-3 pl-11 pr-4 text-[14px] focus:outline-none focus:ring-1 focus:ring-blue-500"
                            />
                            <svg className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>

                        <div className="flex flex-col gap-4">
                            {COURSES.map((course, i) => (
                                <div key={i} className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow">
                                    <h3 className="font-bold text-[16px] text-[#1a2e4a] mb-2 hover:text-blue-600 transition-colors">
                                        <Link href="/?view=course-detail">{course.title}</Link>
                                    </h3>
                                    <p className="text-[13px] text-gray-600 mb-4 leading-relaxed">
                                        {course.desc} <span className="text-blue-500 cursor-pointer hover:underline">read more...</span>
                                    </p>

                                    <div className="flex flex-wrap items-center justify-between gap-4 border-t border-gray-100 pt-4">
                                        <div className="flex items-center gap-8">
                                            <div className="flex items-start gap-2">
                                                <svg className="w-4 h-4 text-orange-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <div>
                                                    <p className="text-[11px] text-gray-400">Duration</p>
                                                    <p className="text-[13px] font-semibold text-gray-800">{course.duration}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <svg className="w-4 h-4 text-orange-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                                                </svg>
                                                <div>
                                                    <p className="text-[11px] text-gray-400">Fee Range</p>
                                                    <p className="text-[13px] font-semibold text-gray-800">{course.fee}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <button className="px-5 py-2 text-[13px] font-semibold text-[#1a2e4a] border border-[#1a2e4a] rounded-lg hover:bg-gray-50 transition-colors">
                                                Ask an Expert
                                            </button>
                                            <Link href="/?view=course-detail" className="px-5 py-2 text-[13px] font-semibold text-white bg-[#1a2e4a] rounded-lg hover:bg-[#111e30] transition-colors">
                                                View Details
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex justify-center mt-2">
                            <div className="flex items-center gap-1 bg-white border border-gray-200 rounded-lg p-1">
                                <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:bg-gray-50 rounded-md">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                                </button>
                                <button className="w-8 h-8 flex items-center justify-center text-white bg-[#1a2e4a] rounded-md text-[13px] font-medium">1</button>
                                <button className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-50 rounded-md text-[13px] font-medium">2</button>
                                <span className="w-8 h-8 flex items-center justify-center text-gray-400">...</span>
                                <button className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-50 rounded-md text-[13px] font-medium">6</button>
                                <button className="px-3 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-50 rounded-md text-[13px] font-medium gap-1">
                                    Next <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                </button>
                            </div>
                        </div>

                        <div className="mt-8 flex flex-col gap-6">
                            <div className="bg-white border border-gray-200 rounded-xl p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="font-bold text-[16px] text-[#1a2e4a]">Explore some popular exams-</h3>
                                    <Link href="#" className="text-blue-500 text-[13px] hover:underline">View All</Link>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {EXAMS.map((exam, i) => (
                                        <div key={i} className="border border-gray-100 rounded-lg p-4 hover:shadow-sm">
                                            <Link href="#" className="text-blue-600 text-[14px] font-semibold hover:underline border-b border-blue-600 inline-block mb-2">{exam.name}</Link>
                                            <p className="text-[12px] text-gray-500 leading-relaxed">{exam.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-white border border-gray-200 rounded-xl p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="font-bold text-[16px] text-[#1a2e4a]">Explore some popular Colleges-</h3>
                                    <Link href="#" className="text-blue-500 text-[13px] hover:underline">View All</Link>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {[1, 2, 3].map((_, i) => (
                                        <div key={i} className="border border-gray-100 rounded-lg overflow-hidden hover:shadow-sm">
                                            <Image src="/assets/amity.png" alt="Amity Institute of Technology" width={300} height={150} className="w-full h-24 object-cover" />                                            <div className="p-3">
                                                <p className="text-blue-600 text-[13px] font-semibold mb-1">Amity Institute of Technology</p>
                                                <p className="text-gray-400 text-[11px] flex items-center gap-1">
                                                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                                    New Delhi
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8">
                                <h3 className="font-bold text-[16px] text-[#1a2e4a] mb-4">FAQs on Courses-</h3>
                                <div className="flex flex-col gap-3">
                                    <div className="border border-gray-200 rounded-lg p-4">
                                        <div className="flex items-center justify-between cursor-pointer">
                                            <p className="text-[14px] font-medium text-gray-800">1. What is the eligibility for BBA?</p>
                                            <svg className="w-4 h-4 text-gray-500 transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                        </div>
                                        <p className="text-[13px] text-gray-600 mt-3 pt-3 border-t border-gray-100 leading-relaxed">
                                            Candidates must have completed Class 12 from a recognized board with a minimum of 50%-60% aggregate. The percentage requirements may change based on the particular college or university.
                                        </p>
                                    </div>
                                    <div className="border border-gray-200 rounded-lg p-4 flex items-center justify-between cursor-pointer">
                                        <p className="text-[14px] font-medium text-gray-800">2. Is an entrance exam required for a BBA course?</p>
                                        <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                    </div>
                                    <div className="border border-gray-200 rounded-lg p-4 flex items-center justify-between cursor-pointer">
                                        <p className="text-[14px] font-medium text-gray-800">3. What is the total fee for BBA?</p>
                                        <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                    </div>
                                </div>
                                <div className="flex justify-center mt-4">
                                    <button className="flex items-center gap-1 text-[13px] font-medium text-gray-600 border border-gray-200 px-4 py-2 rounded-lg hover:bg-gray-50">
                                        View more <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
