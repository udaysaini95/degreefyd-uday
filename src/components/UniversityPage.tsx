"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function UniversityPage() {
    const [activeTab, setActiveTab] = useState("Info");

    const tabs = ["Info", "Course & Fees", "Review", "Admission", "Placement", "Ranking", "Gallery"];

    const tableOfContents = [
        "Amity University Online",
        "Amity University Online MBA Review & Fees",
        "Amity University Online MCA Review & Fees",
        "Amity University Online BBA Review & Fees",
        "Amity University Online BCA Review & Fees",
        "Amity University Online Scholarship",
        "Amity University Online Admission",
        "Students Review at Amity Online",
        "Amity University Online Placement",
        "Amity University Online Top Recruiters",
        "Amity University Online Distance Education",
        "FAQs at Amity Online"
    ];

    return (
        <div className="bg-[#f8f9fa] min-h-screen pb-16 pt-6">
            <div className="max-w-[1240px] mx-auto px-4 lg:px-8">

                <div className="flex items-center gap-2 text-[12px] text-gray-500 mb-6 font-medium">
                    <span className="cursor-pointer hover:text-blue-600">Home</span>
                    <span className="text-gray-400">&gt;</span>
                    <span className="cursor-pointer hover:text-blue-600">Universities in India</span>
                    <span className="text-gray-400">&gt;</span>
                    <span className="text-gray-800">Amity University</span>
                </div>

                <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm mb-6">
                    <div className="flex flex-col md:flex-row items-center md:items-stretch h-auto md:h-[180px]">

                        <div className="flex-1 p-5 md:p-8 flex flex-col justify-center relative w-full">
                            <div className="flex flex-col md:flex-row items-start gap-4 md:gap-5 w-full">
                                <div className="flex items-start gap-4 w-full md:w-auto">
                                    <div className="w-16 h-16 md:w-20 md:h-20 shrink-0 border border-gray-100 rounded-xl bg-white flex items-center justify-center p-2 shadow-sm">
                                        <Image src="/assets/lpu.png" alt="Amity Univ" width={60} height={60} className="object-contain" onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }} />
                                    </div>
                                    <div className="flex flex-col min-w-0 flex-1">
                                        <h1 className="text-[22px] md:text-[28px] font-bold text-[#1a2e4a] leading-tight mb-1.5 md:mb-2 break-words">Amity University</h1>
                                        <div className="flex flex-col md:flex-row md:items-center gap-1.5 md:gap-3 text-[12px] md:text-[13px] text-gray-500 mb-2 md:mb-4 font-medium">
                                            <span className="flex items-center gap-1.5">
                                                <svg className="w-3.5 h-3.5 md:w-4 md:h-4 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                                <span className="truncate">Noida, Uttar Pradesh</span>
                                            </span>
                                            <span className="hidden md:block w-1 h-1 bg-gray-300 rounded-full shrink-0"></span>
                                            <span className="bg-green-50 text-green-600 px-2 py-0.5 rounded text-[11px] font-bold w-fit mt-0.5 md:mt-0">#134 NIRF</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 md:gap-3 w-full md:w-auto mt-2 md:mt-0 md:ml-auto md:self-end md:mb-4">
                                    <button className="flex-1 md:flex-none justify-center px-4 md:px-5 py-2.5 md:py-2 text-[13px] font-bold text-[#1a2e4a] border border-gray-200 rounded-lg hover:bg-gray-50 flex items-center gap-2 transition-colors">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                                        Brochure
                                    </button>
                                    <button className="flex-1 md:flex-none justify-center px-4 md:px-6 py-2.5 md:py-2 text-[13px] font-bold text-white bg-[#1a2e4a] rounded-lg hover:bg-[#111e30] transition-colors shadow-sm focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                                        Apply Now
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="w-full md:w-[480px] h-[200px] md:h-full relative shrink-0 bg-[#1a2e4a]">
                            <Image src="/assets/amity.png" alt="Amity Cover" fill className="object-cover" />
                        </div>
                    </div>

                    <div className="px-6 md:px-8 py-4 border-t border-gray-50 bg-gray-50/50">
                        <p className="text-[13px] text-gray-600 leading-relaxed font-medium">
                            It is an institution renowned for its academic excellence, offering a diverse array of programs across multiple disciplines. With state-of-the-art facilities and a commitment to holistic education, the university fosters innovation, leadership, and personal growth among its students.
                        </p>
                    </div>

                    <div className="border-t border-gray-200 bg-white px-2 md:px-8 flex overflow-x-auto hide-scrollbar">
                        {tabs.map((tab, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveTab(tab)}
                                className={`px-5 py-4 text-[13px] font-bold whitespace-nowrap transition-colors border-b-2 ${activeTab === tab ? 'text-blue-600 border-blue-600' : 'text-gray-500 border-transparent hover:text-gray-700'}`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="flex-1 min-w-0 flex flex-col gap-6">

                        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 md:p-8">
                            <div className="flex flex-col lg:flex-row gap-10">

                                <div className="w-full lg:w-[240px] shrink-0 order-2 lg:order-1">
                                    <div className="sticky top-24">
                                        <div className="flex items-center gap-2 mb-4 bg-gray-50 py-2 px-3 rounded-lg border border-gray-100">
                                            <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" /></svg>
                                            <span className="font-bold text-[13px] text-gray-800 uppercase tracking-wide">Table of Contents</span>
                                        </div>
                                        <ul className="flex flex-col gap-1 border-l-2 border-gray-100 ml-2">
                                            {tableOfContents.map((item, i) => (
                                                <li key={i}>
                                                    <a href="#" className={`block px-4 py-1.5 text-[12px] font-medium transition-all ${i === 0 ? 'text-blue-600 border-l-2 border-blue-600 -ml-[2px] bg-blue-50/50' : 'text-gray-500 hover:text-gray-800 hover:border-l-2 hover:border-gray-300 hover:-ml-[2px]'}`}>
                                                        {item}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="flex-1 min-w-0 order-1 lg:order-2 article-content">
                                    <h2 className="text-[20px] font-bold text-[#1a2e4a] mb-4">Amity University Online Fees Structure 2024</h2>
                                    <p className="text-[14px] text-gray-600 leading-relaxed mb-6">
                                        Amity University Online offers UG and PG programs. Students who wish to pursue a bachelor&apos;s or master&apos;s degree can easily apply for admission to the university, and there is no need to take an entrance exam.
                                    </p>

                                    <div className="overflow-x-auto mb-8 rounded-xl border border-gray-200 shadow-sm">
                                        <table className="w-full text-left text-[13px]">
                                            <thead className="bg-[#1a2e4a] text-white">
                                                <tr>
                                                    <th className="px-6 py-3.5 font-bold uppercase tracking-wider">Courses</th>
                                                    <th className="px-6 py-3.5 font-bold uppercase tracking-wider">Fees</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-100 text-gray-600 font-medium">
                                                <tr className="hover:bg-gray-50 transition-colors">
                                                    <td className="px-6 py-4">BBA Online (Bachelor of Business Administration)</td>
                                                    <td className="px-6 py-4 text-[#1a2e4a] font-bold">1,80,000/-</td>
                                                </tr>
                                                <tr className="hover:bg-gray-50 transition-colors bg-gray-50/50">
                                                    <td className="px-6 py-4">B.Com Online (Bachelor of Commerce)</td>
                                                    <td className="px-6 py-4 text-[#1a2e4a] font-bold">1,20,000/-</td>
                                                </tr>
                                                <tr className="hover:bg-gray-50 transition-colors">
                                                    <td className="px-6 py-4">BA Online</td>
                                                    <td className="px-6 py-4 text-[#1a2e4a] font-bold">90,000/-</td>
                                                </tr>
                                                <tr className="hover:bg-gray-50 transition-colors bg-gray-50/50">
                                                    <td className="px-6 py-4">MBA Online (Master of Business Administration)</td>
                                                    <td className="px-6 py-4 text-[#1a2e4a] font-bold">1,60,000/-</td>
                                                </tr>
                                                <tr className="hover:bg-gray-50 transition-colors">
                                                    <td className="px-6 py-4">MCA Online</td>
                                                    <td className="px-6 py-4 text-[#1a2e4a] font-bold">1,20,000/-</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="bg-gradient-to-r from-[#1a2e4a] to-blue-900 rounded-xl p-6 text-white flex flex-col sm:flex-row items-center justify-between gap-6 mb-8 shadow-md relative overflow-hidden">
                                        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>

                                        <div className="relative z-10 text-center sm:text-left">
                                            <h3 className="text-[18px] font-bold mb-1">Looking for expert advice?</h3>
                                            <p className="text-[13px] text-blue-100">Get free counseling from our career experts.</p>
                                        </div>
                                        <div className="relative z-10 shrink-0 flex items-center gap-4">
                                            <Image src="/assets/counselor.png" alt="counselor" width={80} height={80} className="hidden sm:block rounded-full bg-white/10 p-1" onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }} />
                                            <button className="px-6 py-3 bg-white text-[#1a2e4a] font-bold text-[13px] rounded-lg shadow-sm hover:bg-gray-50 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#1a2e4a] transition-all">
                                                Get Contact Details
                                            </button>
                                        </div>
                                    </div>

                                    <h2 className="text-[20px] font-bold text-[#1a2e4a] mb-4">Amity University Online Admission Process</h2>
                                    <p className="text-[14px] text-gray-600 leading-relaxed mb-6">
                                        Admission to Amity University Online programs is completely merit-based. Students just have to fulfill the basic eligibility criteria. No entrance test is mandatory to secure a seat at JAIN University Online.
                                    </p>

                                    <h2 className="text-[20px] font-bold text-[#1a2e4a] mb-5 mt-10">Amity University Online Top Recruiters</h2>
                                    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4 mb-8">
                                        {Array(5).fill(null).map((_, i) => (
                                            <div key={i} className="border border-gray-100 bg-white rounded-lg p-4 flex items-center justify-center h-16 shadow-sm hover:shadow-md transition-shadow">
                                                <div className="text-gray-400 font-bold text-[15px]">
                                                    <Image src={"/assets/cog.png"} width={100} height={100} alt={""}></Image>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <p className="text-[14px] text-gray-600 leading-relaxed">
                                        The university has an excellent placement cell that operates vigorously to provide exciting employment opportunities. Over 100+ global recruiters visit the campus every year to handpick the best talents.
                                    </p>
                                </div>

                            </div>
                        </div>

                    </div>

                    <div className="w-full lg:w-[320px] shrink-0 flex flex-col gap-6">

                        <div className="bg-white border text-center border-gray-200 rounded-xl p-6 shadow-sm">
                            <h3 className="font-bold text-[#1a2e4a] text-[16px] mb-2 leading-tight">Interested in Amity University Online?</h3>
                            <p className="text-[12px] text-gray-500 mb-5">Admissions are closing soon for the 2024 batch.</p>

                            <button className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold text-[14px] rounded-lg shadow-sm transition-colors mb-3">
                                Apply Now
                            </button>
                            <button className="w-full py-3 bg-white text-[#1a2e4a] border border-[#1a2e4a] hover:bg-gray-50 font-bold text-[14px] rounded-lg transition-colors">
                                Download Brochure
                            </button>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                            <h3 className="font-bold text-[#1a2e4a] text-[15px] mb-4 pb-3 border-b border-gray-100">Top Courses at Amity Online</h3>
                            <div className="flex flex-col gap-3">
                                {[
                                    { name: "MBA (Finance)", fee: "₹1,60,000" },
                                    { name: "MCA (General)", fee: "₹1,20,000" },
                                    { name: "BBA", fee: "₹1,80,000" },
                                    { name: "BCA", fee: "₹1,20,000" }
                                ].map((course, i) => (
                                    <div key={i} className="flex justify-between items-center group cursor-pointer p-2 -mx-2 rounded-lg hover:bg-gray-50 transition-colors">
                                        <div className="flex flex-col">
                                            <span className="text-[13px] font-bold text-gray-800 group-hover:text-blue-600">{course.name}</span>
                                            <span className="text-[11px] text-gray-400 font-medium">2 Years Program</span>
                                        </div>
                                        <span className="text-[13px] font-bold text-orange-500 bg-orange-50 px-2 py-1 rounded">{course.fee}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                            <h3 className="font-bold text-[#1a2e4a] text-[15px] mb-4 pb-3 border-b border-gray-100">Similar Universities</h3>
                            <div className="flex flex-col gap-4">
                                {Array(3).fill(null).map((_, i) => (
                                    <div key={i} className="flex items-start gap-3 group cursor-pointer">
                                        <div className="w-12 h-12 shrink-0 border border-gray-100 rounded-lg p-1.5 bg-white">
                                            <div className="w-full h-full bg-gray-100 rounded"></div>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-[13px] font-bold text-gray-800 group-hover:text-blue-600 transition-colors leading-tight">NMIMS Distance Education</span>
                                            <span className="text-[11px] text-gray-500 mt-1">Mumbai, Maharashtra</span>
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
