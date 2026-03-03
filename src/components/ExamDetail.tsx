"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ExamDetail() {
    const [activeTab, setActiveTab] = useState("Info");

    const tableOfContents = [
        { id: "highlights", label: "CAT 2025 Highlights" },
        { id: "dates", label: "CAT 2025 Important Dates" },
        { id: "eligibility", label: "CAT 2025 Eligibility Criteria" },
        { id: "registration", label: "CAT 2025 Registration Process" },
        { id: "exam-pattern", label: "CAT 2025 Exam Pattern" },
        { id: "syllabus", label: "CAT 2025 Syllabus" },
        { id: "preparation", label: "CAT Preparation 2025 Tips" },
        { id: "colleges", label: "Top Colleges Accepting CAT" },
        { id: "faqs", label: "CAT EXAM FAQs" }
    ];

    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            const yOffset = -100; // offset for sticky header
            const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <div className="bg-[#f8f9fa] min-h-screen pb-16 pt-6 overflow-x-hidden w-full max-w-[100vw]">
            <div className="max-w-[1240px] mx-auto px-4 lg:px-8">

                <div className="flex items-center gap-2 text-[12px] text-gray-500 mb-6 font-medium flex-wrap">
                    <Link href="/" className="hover:text-blue-600 flex items-center gap-1"><svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg> Home</Link>
                    <span className="text-gray-400">&gt;</span>
                    <Link href="/?view=exams" className="hover:text-blue-600">Exams</Link>
                    <span className="text-gray-400">&gt;</span>
                    <span className="text-gray-800">CAT 2025</span>
                </div>

                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start relative">

                    <div className="hidden lg:block w-[240px] shrink-0 sticky top-[110px]">
                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                            <div className="p-3 bg-gray-50 border-b border-gray-100 flex items-center gap-2">
                                <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" /></svg>
                                <span className="font-bold text-[13px] text-gray-800 uppercase tracking-wide">Contents</span>
                            </div>
                            <div className="flex flex-col py-2">
                                {tableOfContents.map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => scrollToSection(item.id)}
                                        className="text-left px-4 py-2 text-[13px] font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50/50 transition-colors border-l-2 border-transparent hover:border-blue-600"
                                    >
                                        {item.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 w-full max-w-full min-w-0 bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden overflow-x-hidden">

                        <div className="p-4 md:p-8 flex items-start justify-between border-b border-gray-100 flex-col md:flex-row gap-5 md:gap-0">
                            <div className="flex items-start gap-4 md:gap-5 w-full md:w-auto">
                                <div className="w-14 h-14 md:w-20 md:h-20 shrink-0 border border-gray-100 rounded-xl flex items-center justify-center p-2 bg-white">
                                    <Image src="/assets/c.png" alt="CAT Logo" width={50} height={50} className="object-contain" onError={(e) => { (e.currentTarget as HTMLImageElement).src = "/assets/logo.png"; }} />
                                </div>
                                <div className="flex flex-col pt-0.5">
                                    <h1 className="text-[20px] md:text-[28px] font-extrabold text-[#1a2e4a] leading-tight mb-1">CAT 2025</h1>
                                    <p className="text-[13px] md:text-[14px] text-gray-500 font-medium mb-2.5">Common Admission Test</p>

                                    <div className="flex items-center gap-2 flex-wrap">
                                        <span className="text-[11px] font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded inline-flex items-center gap-1 border border-green-100">
                                            <svg className="w-3.5 h-3.5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            Online Exam
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-1 gap-3 shrink-0 w-full md:w-auto justify-end mt-1 md:mt-0">
                                <button className="px-3 py-2.5 bg-white text-[#1a2e4a] md:bg-blue-50 md:text-blue-600 text-[13px] font-bold rounded-lg border border-gray-200 md:border-blue-100 hover:bg-gray-50 md:hover:bg-blue-100 transition-colors shadow-sm md:shadow-none text-center">
                                    <span className="md:hidden">Syllabus</span>
                                    <span className="hidden md:inline">Download Syllabus</span>
                                </button>
                                <button className="px-3 py-2.5 bg-[#1a2e4a] text-white text-[13px] font-bold rounded-lg hover:bg-[#111e30] transition-colors shadow-sm text-center">
                                    Apply Now
                                </button>
                            </div>
                        </div>

                        <div className="bg-gray-50/50 p-5 md:p-8 flex flex-col md:flex-row md:justify-between gap-5 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-200 border-b border-gray-100">
                            <div className="flex flex-col pt-0 md:pt-0 md:pr-6 md:pl-0 w-full md:w-auto">
                                <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1 flex items-center gap-1.5"><svg className="w-3.5 h-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg> Application Date</span>
                                <span className="text-[14px] md:text-[13px] font-bold text-[#1a2e4a] leading-tight">01 Aug, 2025 - 20 Sep, 2025</span>
                            </div>
                            <div className="flex flex-col pt-4 md:pt-0 md:px-6 w-full md:w-auto">
                                <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1 flex items-center gap-1.5"><svg className="w-3.5 h-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg> Exam Date</span>
                                <span className="text-[14px] md:text-[13px] font-bold text-[#1a2e4a] leading-tight">24 Nov, 2025</span>
                            </div>
                            <div className="flex flex-col pt-4 md:pt-0 md:px-6 w-full md:w-auto">
                                <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1 flex items-center gap-1.5"><svg className="w-3.5 h-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg> Result Date</span>
                                <span className="text-[14px] md:text-[13px] font-bold text-[#1a2e4a] leading-tight">21 Dec, 2025</span>
                            </div>
                            <div className="flex flex-col pt-4 md:pt-0 md:pl-6 w-full md:w-auto">
                                <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1 flex items-center gap-1.5"><svg className="w-3.5 h-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg> Top Colleges</span>
                                <Link href="#colleges" className="text-[14px] md:text-[13px] font-bold text-blue-600 hover:underline leading-tight">IIM Ahmedabad, IIM Bangalore...</Link>
                            </div>
                        </div>

                        <div className="flex overflow-x-auto hide-scrollbar border-b border-gray-100 px-4 md:px-8 bg-white sticky top-0 z-10 lg:static">
                            {["Overview", "Dates", "Eligibility", "Syllabus", "Pattern", "Results", "Cutoffs", "Colleges"].map((tab, i) => (
                                <button
                                    key={i}
                                    className={`px-4 py-4 text-[13px] font-semibold whitespace-nowrap border-b-2 transition-colors ${i === 0 ? 'border-orange-500 text-orange-600' : 'border-transparent text-gray-500 hover:text-[#1a2e4a] hover:border-gray-300'}`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>

                        <div className="p-5 md:p-8 flex flex-col gap-10">

                            <article className="prose prose-sm max-w-none prose-headings:text-[#1a2e4a] prose-a:text-blue-600">
                                <p className="text-[14.5px] text-gray-600 leading-relaxed">
                                    The Common Admission Test (CAT) is a computer-based test for admission in a graduate management program. The test consists of three sections: Verbal Ability and Reading Comprehension (VARC), Data Interpretation and Logical Reasoning (DILR), and Quantitative Ability (QA).
                                </p>
                                <p className="text-[14.5px] text-gray-600 leading-relaxed mt-4">
                                    Conducted annually by one of the older IIMs on a rotational basis, CAT 2025 is expected to be conducted by IIM Calcutta. Over 3.3 lakh students apply for the exam every year, making it one of the most competitive entrance exams in India for MBA admissions.
                                </p>
                            </article>

                            <div className="w-full rounded-xl overflow-hidden shadow-sm border border-gray-100">
                                <Image src="/assets/cat.png" alt="CAT 2025 Cover" width={1200} height={300} className="w-full h-auto block" priority />
                            </div>

                            <div id="highlights" className="scroll-mt-24">
                                <h2 className="text-[18px] md:text-[20px] font-bold text-[#1a2e4a] mb-4 flex items-center gap-2">
                                    <span className="w-1.5 h-6 bg-blue-600 rounded-full inline-block"></span>
                                    CAT 2025 Highlights
                                </h2>
                                <div className="overflow-x-auto rounded-lg border border-gray-200 w-full">
                                    <table className="w-full text-left border-collapse min-w-[500px]">
                                        <thead>
                                            <tr className="bg-[#1a2e4a] text-white">
                                                <th className="py-3 px-4 text-[13px] font-bold border-r border-[#264168] w-1/3">Features</th>
                                                <th className="py-3 px-4 text-[13px] font-bold">Details</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-[13px] text-gray-700">
                                            <tr className="border-b border-gray-100 hover:bg-gray-50">
                                                <td className="py-3 px-4 font-semibold border-r border-gray-100 bg-gray-50/50">Exam Name</td>
                                                <td className="py-3 px-4">Common Admission Test (CAT)</td>
                                            </tr>
                                            <tr className="border-b border-gray-100 hover:bg-gray-50">
                                                <td className="py-3 px-4 font-semibold border-r border-gray-100 bg-gray-50/50">Conducting Body</td>
                                                <td className="py-3 px-4">IIM (Rotational Basis)</td>
                                            </tr>
                                            <tr className="border-b border-gray-100 hover:bg-gray-50">
                                                <td className="py-3 px-4 font-semibold border-r border-gray-100 bg-gray-50/50">Exam Level</td>
                                                <td className="py-3 px-4">National Level</td>
                                            </tr>
                                            <tr className="border-b border-gray-100 hover:bg-gray-50">
                                                <td className="py-3 px-4 font-semibold border-r border-gray-100 bg-gray-50/50">Exam Frequency</td>
                                                <td className="py-3 px-4">Once a year</td>
                                            </tr>
                                            <tr className="border-b border-gray-100 hover:bg-gray-50">
                                                <td className="py-3 px-4 font-semibold border-r border-gray-100 bg-gray-50/50">Exam Mode</td>
                                                <td className="py-3 px-4 font-semibold text-blue-600">Online (CBT)</td>
                                            </tr>
                                            <tr className="border-b border-gray-100 hover:bg-gray-50">
                                                <td className="py-3 px-4 font-semibold border-r border-gray-100 bg-gray-50/50">Exam Duration</td>
                                                <td className="py-3 px-4">120 Minutes (40 Mins per section)</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div id="dates" className="scroll-mt-24">
                                <h2 className="text-[18px] md:text-[20px] font-bold text-[#1a2e4a] mb-4 flex items-center gap-2">
                                    <span className="w-1.5 h-6 bg-blue-600 rounded-full inline-block"></span>
                                    CAT 2025 Important Dates
                                </h2>
                                <div className="overflow-x-auto rounded-lg border border-gray-200 w-full">
                                    <table className="w-full text-left border-collapse min-w-[500px]">
                                        <thead>
                                            <tr className="bg-[#1a2e4a] text-white">
                                                <th className="py-3 px-4 text-[13px] font-bold border-r border-[#264168] w-2/3">CAT Exam Events</th>
                                                <th className="py-3 px-4 text-[13px] font-bold">Tentative Dates</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-[13px] text-gray-700">
                                            <tr className="border-b border-gray-100 hover:bg-gray-50">
                                                <td className="py-3 px-4 font-semibold border-r border-gray-100">CAT 2025 Notification Release</td>
                                                <td className="py-3 px-4">Last week of July 2025</td>
                                            </tr>
                                            <tr className="border-b border-gray-100 hover:bg-gray-50">
                                                <td className="py-3 px-4 font-semibold border-r border-gray-100">Registrations Start</td>
                                                <td className="py-3 px-4">First week of August 2025</td>
                                            </tr>
                                            <tr className="border-b border-gray-100 hover:bg-gray-50">
                                                <td className="py-3 px-4 font-semibold border-r border-gray-100">Registrations End</td>
                                                <td className="py-3 px-4 text-red-600 font-bold">Third week of September 2025</td>
                                            </tr>
                                            <tr className="border-b border-gray-100 hover:bg-gray-50">
                                                <td className="py-3 px-4 font-semibold border-r border-gray-100">Admit Card Release</td>
                                                <td className="py-3 px-4">First week of November 2025</td>
                                            </tr>
                                            <tr className="border-b border-gray-100 hover:bg-gray-50">
                                                <td className="py-3 px-4 font-semibold border-r border-gray-100">CAT 2025 Exam Date</td>
                                                <td className="py-3 px-4 font-bold text-orange-600">24th November 2025</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div id="eligibility" className="scroll-mt-24">
                                <h2 className="text-[18px] md:text-[20px] font-bold text-[#1a2e4a] mb-4 flex items-center gap-2">
                                    <span className="w-1.5 h-6 bg-blue-600 rounded-full inline-block"></span>
                                    CAT 2025 Eligibility Criteria
                                </h2>
                                <ul className="list-disc pl-5 text-[14.5px] text-gray-600 leading-relaxed flex flex-col gap-2.5">
                                    <li>Candidates must hold a Bachelor's Degree, with at least <strong className="text-gray-800">50% marks or equivalent CGPA</strong>.</li>
                                    <li>For Scheduled Caste (SC), Scheduled Tribe (ST) and Persons with Disability (PwD) candidates, the minimum required marks are <strong className="text-gray-800">45%</strong>.</li>
                                    <li>Candidates appearing for the final year of Bachelor's degree/equivalent qualification examination can also apply.</li>
                                    <li>There is no upper age limit for applying for the CAT exam.</li>
                                    <li>Work experience is not mandatory but highly preferred by top IIMs during the interview round.</li>
                                </ul>
                            </div>

                            <div id="colleges" className="scroll-mt-24">
                                <h2 className="text-[18px] md:text-[20px] font-bold text-[#1a2e4a] mb-4 flex items-center gap-2">
                                    <span className="w-1.5 h-6 bg-blue-600 rounded-full inline-block"></span>
                                    Top Colleges Accepting CAT Scores
                                </h2>
                                <div className="overflow-x-auto rounded-lg border border-gray-200 w-full flex-col">
                                    <table className="w-full text-left border-collapse min-w-[600px]">
                                        <thead>
                                            <tr className="bg-[#1a2e4a] text-white">
                                                <th className="py-3 px-4 text-[13px] font-bold border-r border-[#264168]">College Name</th>
                                                <th className="py-3 px-4 text-[13px] font-bold border-r border-[#264168]">Expected CAT Percentile</th>
                                                <th className="py-3 px-4 text-[13px] font-bold">First Year Fees (Approx.)</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-[13px] text-gray-700">
                                            <tr className="border-b border-gray-100 hover:bg-gray-50">
                                                <td className="py-3 px-4 font-semibold border-r border-gray-100 text-blue-600 hover:underline cursor-pointer">IIM Ahmedabad</td>
                                                <td className="py-3 px-4 border-r border-gray-100">99+ Percentile</td>
                                                <td className="py-3 px-4">₹ 12,50,000</td>
                                            </tr>
                                            <tr className="border-b border-gray-100 hover:bg-gray-50">
                                                <td className="py-3 px-4 font-semibold border-r border-gray-100 text-blue-600 hover:underline cursor-pointer">IIM Bangalore</td>
                                                <td className="py-3 px-4 border-r border-gray-100">99+ Percentile</td>
                                                <td className="py-3 px-4">₹ 12,25,000</td>
                                            </tr>
                                            <tr className="border-b border-gray-100 hover:bg-gray-50">
                                                <td className="py-3 px-4 font-semibold border-r border-gray-100 text-blue-600 hover:underline cursor-pointer">IIM Calcutta</td>
                                                <td className="py-3 px-4 border-r border-gray-100">99+ Percentile</td>
                                                <td className="py-3 px-4">₹ 13,50,000</td>
                                            </tr>
                                            <tr className="border-b border-gray-100 hover:bg-gray-50">
                                                <td className="py-3 px-4 font-semibold border-r border-gray-100 text-blue-600 hover:underline cursor-pointer">FMS Delhi</td>
                                                <td className="py-3 px-4 border-r border-gray-100">98.5+ Percentile</td>
                                                <td className="py-3 px-4 text-green-600 font-bold">₹ 1,00,000</td>
                                            </tr>
                                            <tr className="border-b border-gray-100 hover:bg-gray-50">
                                                <td className="py-3 px-4 font-semibold border-r border-gray-100 text-blue-600 hover:underline cursor-pointer">SPJIMR Mumbai</td>
                                                <td className="py-3 px-4 border-r border-gray-100">85+ (Profile Based)</td>
                                                <td className="py-3 px-4">₹ 10,20,000</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="mt-4 text-center">
                                    <button className="text-[13px] font-bold text-blue-600 border border-blue-200 px-6 py-2.5 rounded-lg hover:bg-blue-50 transition-colors w-full sm:w-auto">
                                        View All 1000+ Colleges
                                    </button>
                                </div>
                            </div>

                            <div id="faqs" className="scroll-mt-24 pt-4 border-t border-dashed border-gray-200">
                                <h2 className="text-[18px] md:text-[20px] font-bold text-[#1a2e4a] mb-5">Frequently Asked Questions</h2>
                                <div className="flex flex-col gap-3">
                                    <div className="border border-gray-100 rounded-lg bg-gray-50 p-4">
                                        <div className="flex justify-between items-center cursor-pointer">
                                            <h3 className="text-[14px] font-bold text-gray-800">Is CAT exam tough?</h3>
                                            <svg className="w-4 h-4 text-blue-600 shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg>
                                        </div>
                                        <p className="text-[13px] text-gray-600 mt-2.5 leading-relaxed">Yes, CAT is considered one of the toughest entrance exams in India due to high competition and the analytical nature of the questions. However, with consistent preparation of 6-8 months, cracking it becomes manageable.</p>
                                    </div>
                                    <div className="border border-gray-100 rounded-lg p-4 cursor-pointer hover:bg-gray-50 transition-colors flex justify-between items-center group">
                                        <h3 className="text-[14px] font-medium text-gray-700 group-hover:text-[#1a2e4a]">Can I prepare for CAT without coaching?</h3>
                                        <svg className="w-4 h-4 text-gray-400 group-hover:text-blue-600 shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                    </div>
                                    <div className="border border-gray-100 rounded-lg p-4 cursor-pointer hover:bg-gray-50 transition-colors flex justify-between items-center group">
                                        <h3 className="text-[14px] font-medium text-gray-700 group-hover:text-[#1a2e4a]">How many times can I attempt CAT?</h3>
                                        <svg className="w-4 h-4 text-gray-400 group-hover:text-blue-600 shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
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
