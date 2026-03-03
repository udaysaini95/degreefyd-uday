"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const EXAMS = [
    {
        name: "CAT Exam 2025",
        fullName: "Common Admission Test",
        mode: "Online exam",
        applicationFrom: "01 Aug, 2025",
        applicationTo: "20 Sep, 2025",
        examDate: "24 Nov, 2025",
        resultDate: "21 Dec, 2025",
        logo: "/assets/c.png", // reusing logo for now
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
    }
];

export default function ExamListing() {
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <div className="bg-[#f8f9fa] min-h-screen pb-16 pt-6">
            <div className="max-w-[1240px] mx-auto px-4 lg:px-8">

                <div className="flex items-center gap-2 text-[12px] text-gray-500 mb-6 font-medium">
                    <span className="cursor-pointer hover:text-blue-600">Home</span>
                    <span className="text-gray-400">&gt;</span>
                    <span className="text-gray-800">Exams</span>
                </div>

                <div className="mb-6">
                    <h1 className="text-[24px] font-bold text-[#1a2e4a] mb-1">
                        <span className="text-orange-500 text-[20px] mr-1">Top Exams</span> - Rankings, Courses & Admission 2024-
                    </h1>
                </div>

                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">

                    <div className="w-full lg:w-[260px] shrink-0 flex flex-col gap-4">
                        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                            <div className="p-4 border-b border-gray-100 flex items-center justify-between">
                                <span className="font-bold text-[14px] text-gray-800">All filters</span>
                                <button className="text-[12px] font-medium text-blue-600 hover:text-blue-800">Reset</button>
                            </div>

                            <div className="p-4 border-b border-gray-100">
                                <h3 className="font-bold text-[13px] text-[#1a2e4a] mb-3">Category</h3>
                                <div className="flex flex-col gap-2.5">
                                    <label className="flex items-center justify-between cursor-pointer group">
                                        <div className="flex items-center gap-2.5">
                                            <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" defaultChecked />
                                            <span className="text-[13px] font-medium text-gray-600 group-hover:text-gray-800">Entrance Exam</span>
                                        </div>
                                        <span className="text-[11px] text-gray-400 font-bold bg-gray-50 px-1.5 py-0.5 rounded">24</span>
                                    </label>
                                    <label className="flex items-center justify-between cursor-pointer group">
                                        <div className="flex items-center gap-2.5">
                                            <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                                            <span className="text-[13px] font-medium text-gray-600 group-hover:text-gray-800">Board Exam</span>
                                        </div>
                                        <span className="text-[11px] text-gray-400 font-bold bg-gray-50 px-1.5 py-0.5 rounded">12</span>
                                    </label>
                                    <label className="flex items-center justify-between cursor-pointer group">
                                        <div className="flex items-center gap-2.5">
                                            <input type="radio" name="level" className="w-4 h-4 border-gray-300 text-blue-600 focus:ring-blue-500" />
                                            <span className="text-[13px] font-medium text-gray-600 group-hover:text-gray-800">Level (State/M...)</span>
                                        </div>
                                    </label>
                                </div>
                            </div>

                            <div className="p-4 border-b border-gray-100">
                                <h3 className="font-bold text-[13px] text-[#1a2e4a] mb-3">Mode</h3>
                                <div className="flex flex-col gap-2.5">
                                    <label className="flex items-center justify-between cursor-pointer group">
                                        <div className="flex items-center gap-2.5">
                                            <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" defaultChecked />
                                            <span className="text-[13px] font-medium text-gray-600 group-hover:text-gray-800">Online/CBT (34)</span>
                                        </div>
                                    </label>
                                    <label className="flex items-center justify-between cursor-pointer group">
                                        <div className="flex items-center gap-2.5">
                                            <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                                            <span className="text-[13px] font-medium text-gray-600 group-hover:text-gray-800">Offline/Pen&Paper (18)</span>
                                        </div>
                                    </label>
                                </div>
                            </div>

                            <div className="p-4 border-b border-gray-100">
                                <h3 className="font-bold text-[13px] text-[#1a2e4a] mb-3">Level</h3>
                                <div className="flex flex-col gap-2.5">
                                    <label className="flex items-center justify-between cursor-pointer group">
                                        <div className="flex items-center gap-2.5">
                                            <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" defaultChecked />
                                            <span className="text-[13px] font-medium text-gray-600 group-hover:text-gray-800">UG (22)</span>
                                        </div>
                                    </label>
                                    <label className="flex items-center justify-between cursor-pointer group">
                                        <div className="flex items-center gap-2.5">
                                            <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                                            <span className="text-[13px] font-medium text-gray-600 group-hover:text-gray-800">PG (15)</span>
                                        </div>
                                    </label>
                                    <label className="flex items-center justify-between cursor-pointer group">
                                        <div className="flex items-center gap-2.5">
                                            <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                                            <span className="text-[13px] font-medium text-gray-600 group-hover:text-gray-800">Ph.D (8)</span>
                                        </div>
                                    </label>
                                    <label className="flex items-center justify-between cursor-pointer group">
                                        <div className="flex items-center gap-2.5">
                                            <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                                            <span className="text-[13px] font-medium text-gray-600 group-hover:text-gray-800">Diploma (4)</span>
                                        </div>
                                    </label>
                                </div>
                            </div>

                            <div className="p-4 border-b border-gray-100">
                                <h3 className="font-bold text-[13px] text-[#1a2e4a] mb-3">Stream</h3>
                                <div className="flex flex-col gap-2.5">
                                    {[
                                        { label: "Engineering", count: "25" },
                                        { label: "Medical", count: "12" },
                                        { label: "Management", count: "18", checked: true },
                                        { label: "Design", count: "8" },
                                        { label: "Science", count: "15" },
                                        { label: "Arts", count: "9" },
                                        { label: "Hotel management", count: "5" },
                                        { label: "Nursing", count: "6" },
                                        { label: "IT and Software", count: "14" },
                                        { label: "Education", count: "7" },
                                        { label: "Architecture", count: "4" },
                                        { label: "Aviation", count: "2" },
                                    ].map((stream, i) => (
                                        <label key={i} className="flex items-center justify-between cursor-pointer group">
                                            <div className="flex items-center gap-2.5">
                                                <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" defaultChecked={stream.checked} />
                                                <span className="text-[13px] font-medium text-gray-600 group-hover:text-gray-800">{stream.label} ({stream.count})</span>
                                            </div>
                                        </label>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="flex-1 min-w-0 flex flex-col gap-5">

                        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-2 flex items-center">
                            <div className="w-10 h-10 flex items-center justify-center text-gray-400 shrink-0">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </div>
                            <input
                                type="text"
                                placeholder="Search exams..."
                                className="w-full bg-transparent border-none focus:ring-0 text-[14px] text-gray-800 placeholder-gray-400 outline-none pr-4"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>

                        <div className="flex flex-col gap-4">
                            {EXAMS.map((exam, i) => (
                                <div key={i} className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow">

                                    <div className="flex items-start justify-between gap-4 mb-4">
                                        <div className="flex items-start gap-4">
                                            <div className="w-14 h-14 shrink-0 border border-gray-100 rounded-lg p-2 flex items-center justify-center relative bg-white">
                                                <Image src={exam.logo} alt={exam.name} width={40} height={40} className="object-contain" onError={(e) => { (e.currentTarget as HTMLImageElement).src = "/assets/logo.png"; }} />
                                                {exam.verified && (
                                                    <div className="absolute -top-1.5 -right-1.5 bg-white rounded-full">
                                                        <svg className="w-5 h-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                        </svg>
                                                    </div>
                                                )}
                                            </div>
                                            <div className="flex flex-col">
                                                <Link href="/?view=exam-detail">
                                                    <h2 className="text-[18px] font-bold text-[#1a2e4a] group/title cursor-pointer leading-tight mb-1 hover:text-blue-600 transition-colors">
                                                        {exam.name}
                                                    </h2>
                                                </Link>
                                                <p className="text-[12px] text-gray-500">{exam.fullName}</p>
                                            </div>
                                        </div>
                                        <span className={`text-[11px] font-bold px-2 py-1 rounded w-fit capitalize shrink-0 ${exam.mode.includes('Online') ? 'text-green-600 bg-green-50' : 'text-orange-600 bg-orange-50'}`}>
                                            {exam.mode}
                                        </span>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 mt-6 pt-4 border-t border-gray-50 relative">
                                        <div className="flex-1">
                                            <span className="text-[11px] text-gray-400 font-medium tracking-wide uppercase block mb-1">Application Form Date</span>
                                            <span className="text-[13px] font-semibold text-gray-800">{exam.applicationFrom} - {exam.applicationTo}</span>
                                        </div>
                                        <div className="flex-1">
                                            <span className="text-[11px] text-gray-400 font-medium tracking-wide uppercase block mb-1">Exam Date</span>
                                            <span className="text-[13px] font-semibold text-gray-800">{exam.examDate}</span>
                                        </div>
                                        <div className="flex-1">
                                            <span className="text-[11px] text-gray-400 font-medium tracking-wide uppercase block mb-1">Result Date</span>
                                            <span className="text-[13px] font-semibold text-gray-800">{exam.resultDate}</span>
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 pt-4 border-t border-gray-100">
                                        <div className="flex items-center flex-wrap gap-x-4 gap-y-2 lg:gap-5 w-full sm:w-auto">
                                            {["Admit Card", "Answer Key", "Result", "Exam", "Counselling", "Cut off marks"].map((link, idx) => (
                                                <a href="#" key={idx} className="text-[12px] font-medium text-blue-600 hover:text-blue-800 hover:underline transition-all">
                                                    {link}
                                                </a>
                                            ))}
                                        </div>

                                        <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto mt-2 sm:mt-0">
                                            <Link href="/?view=exam-detail" className="flex-1 sm:flex-none">
                                                <button className="w-full px-4 py-2 text-[12px] font-semibold text-gray-600 border border-gray-200 bg-white rounded-lg hover:bg-gray-50 hover:text-blue-600 transition-colors">
                                                    View Details
                                                </button>
                                            </Link>
                                            <button className="flex-1 sm:flex-none px-5 py-2 text-[12px] font-semibold text-white bg-[#1a2e4a] rounded-lg hover:bg-[#111e30] transition-colors shadow-sm">
                                                Apply Now
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            ))}
                        </div>

                        <div className="flex items-center justify-center gap-1.5 mt-8 mb-6">
                            <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-200 text-gray-400 hover:bg-gray-50 transition-colors disabled:opacity-50" disabled>
                                &lt;
                            </button>
                            {[1, 2, 3, 4, '...', 97, 98, 99].map((page, i) => (
                                <button key={i} className={`font-bold text-[13px] flex items-center justify-center w-8 h-8 rounded border transition-colors ${page === 1 ? 'bg-[#1a2e4a] text-white border-[#1a2e4a]' : page === '...' ? 'border-transparent text-gray-400 cursor-default' : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'}`}>
                                    {page}
                                </button>
                            ))}
                            <button className="w-auto px-3 h-8 flex items-center justify-center rounded border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors text-[13px] font-bold gap-1">
                                Next &gt;
                            </button>
                        </div>

                        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 mt-4">
                            <div className="flex justify-between items-center mb-5 border-b border-gray-100 pb-3">
                                <h2 className="text-[16px] font-bold text-[#1a2e4a]">Explore our blogs-</h2>
                                <button className="text-[12px] font-bold text-blue-600 hover:text-blue-800">View All</button>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                                {Array(3).fill(null).map((_, i) => (
                                    <div key={i} className="group cursor-pointer">
                                        <div className="w-full h-[120px] rounded-lg bg-gray-100 relative mb-3 overflow-hidden">
                                            <Image src="/assets/counselor.png" fill className="object-cover group-hover:scale-105 transition-transform duration-300 opacity-60 mix-blend-multiply" alt="blog" />
                                            <div className="absolute top-2 left-2 bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded">Admission</div>
                                        </div>
                                        <h3 className="text-[13px] font-bold text-blue-600 mb-1.5 leading-tight group-hover:text-blue-800 transition-colors">Top 10 online universities in india 2024: Ranks, Courses &...</h3>
                                        <p className="text-[11px] text-gray-400 font-medium">15 Aug 2024</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 mt-4">
                            <div className="flex justify-between items-center mb-4 pb-2">
                                <h2 className="text-[16px] font-bold text-[#1a2e4a]">Explore some courses which are best for you-</h2>
                                <button className="text-[12px] font-bold text-blue-600 hover:text-blue-800">View All</button>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {Array(3).fill(null).map((_, i) => (
                                    <div key={i} className="bg-gray-50 border border-gray-100 rounded-lg p-4 group cursor-pointer hover:bg-blue-50/50 hover:border-blue-100 transition-colors">
                                        <h3 className="text-[13px] font-bold text-blue-600 mb-2 leading-tight group-hover:text-blue-800 transition-colors underline underline-offset-2 decoration-blue-200">Online BBA degree course</h3>
                                        <p className="text-[11px] text-gray-500 leading-relaxed font-medium">Top Colleges offering BBA online in the latest fields...</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 mt-4">
                            <div className="flex justify-between items-center mb-5 border-b border-gray-100 pb-3">
                                <h2 className="text-[16px] font-bold text-[#1a2e4a]">Explore Colleges-</h2>
                                <button className="text-[12px] font-bold text-blue-600 hover:text-blue-800">View All</button>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                                {[
                                    { name: "Amity School of Distance Education", loc: "Noida, UP" },
                                    { name: "Lovely Professional University", loc: "Jalandhar, Punjab" },
                                    { name: "Jain University", loc: "Bangalore, Karnataka" },
                                ].map((col, i) => (
                                    <div key={i} className="group cursor-pointer border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all bg-white">
                                        <div className="w-full h-24 bg-gray-100 relative">
                                            <Image src="/assets/amity.png" fill className="object-cover" alt="college" />
                                        </div>
                                        <div className="p-4">
                                            <h3 className="text-[13px] font-bold text-gray-800 mb-2 leading-tight group-hover:text-blue-600 transition-colors h-9">{col.name}</h3>
                                            <p className="text-[11px] text-gray-500 font-medium flex items-center gap-1.5">
                                                <svg className="w-3.5 h-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                                {col.loc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 mt-4 mb-8">
                            <h2 className="text-[16px] font-bold text-[#1a2e4a] mb-5 border-b border-gray-100 pb-3">FAQs on Exams-</h2>
                            <div className="flex flex-col gap-3">
                                <div className="border border-gray-100 rounded-lg bg-gray-50 p-4">
                                    <div className="flex justify-between items-center cursor-pointer">
                                        <h3 className="text-[13px] font-bold text-gray-800">1. When CAT exam 2025 date?</h3>
                                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg>
                                    </div>
                                    <p className="text-[12px] text-gray-600 mt-2 leading-relaxed">CAT 2025 is scheduled to be held on 24 November 2025. The official schedule will be announced by the conducting IIM.</p>
                                </div>
                                <div className="border border-gray-100 rounded-lg p-4 cursor-pointer hover:bg-gray-50 transition-colors flex justify-between items-center group">
                                    <h3 className="text-[13px] font-medium text-gray-700 group-hover:text-[#1a2e4a]">2. How can I apply for JEE Main 2026?</h3>
                                    <svg className="w-4 h-4 text-gray-400 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                </div>
                                <div className="border border-gray-100 rounded-lg p-4 cursor-pointer hover:bg-gray-50 transition-colors flex justify-between items-center group">
                                    <h3 className="text-[13px] font-medium text-gray-700 group-hover:text-[#1a2e4a]">3. Is NEET Exam pattern changed for 2025?</h3>
                                    <svg className="w-4 h-4 text-gray-400 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                </div>
                                <div className="flex justify-center mt-2">
                                    <button className="text-[12px] font-bold text-gray-500 border border-gray-200 px-4 py-1.5 rounded-lg hover:bg-gray-50 flex items-center gap-1.5">
                                        View more
                                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
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
