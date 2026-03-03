"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function CourseDetail() {
    const tabs = [
        { id: "overview", label: "Overview" },
        { id: "universities", label: "Top universities" },
        { id: "syllabus", label: "Subject/Syllabus" },
        { id: "specializations", label: "Top specialization" },
        { id: "fees", label: "Fee structure" },
        { id: "eligibility", label: "Eligibility & Duration" },
        { id: "recruiters", label: "Admission process" },
        { id: "faqs", label: "Which course" }
    ];

    const [activeTab, setActiveTab] = useState("overview");

    const scrollToSection = (id: string) => {
        setActiveTab(id);
        const el = document.getElementById(id);
        if (el) {
            const yOffset = -80;
            const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <div className="bg-white min-h-screen pb-16 pt-6 overflow-x-hidden w-full max-w-[100vw] text-[#1a2e4a]">
            <div className="max-w-[1240px] mx-auto px-4 lg:px-8">

                <div className="flex items-center gap-2 text-[12px] text-gray-500 mb-6 font-medium flex-wrap">
                    <Link href="/" className="hover:text-blue-600 flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                    </Link>
                    <span className="text-gray-300">&gt;</span>
                    <Link href="/?view=courses" className="hover:text-blue-600">Courses</Link>
                    <span className="text-gray-300">&gt;</span>
                    <span className="text-blue-600">Online MBA Degree Course</span>
                </div>

                <div className="flex flex-col md:flex-row mb-6 w-full gap-8 relative items-center">
                    <div className="flex-1 w-full text-left">
                        <h1 className="text-[28px] md:text-[32px] font-bold text-[#1a2e4a] leading-tight mb-4">
                            Online <span className="text-[#f59e0b]">MBA</span> Degree Course-
                        </h1>
                        <p className="text-[13px] text-gray-700 leading-snug mb-6 w-full text-justify font-medium">
                            An Online MBA in India is a 2-year postgraduate degree course in Business Administration. It is tailored for entrepreneurs, remote learners, working professionals and graduates keen to grow and enhance their skill in the business world. An Online MBA offers freedom to study at one's own pace and from anywhere. The Master of Business Administration programs are provided by UGC-recognized and NAAC-accredited universities, ensuring its academic credibility and industry acceptance. The Online MBA degree opens the door to better job opportunities, career transitions, leadership roles and global exposure in today's fast-evolving business landscape.
                        </p>
                        <div className="flex flex-row gap-4">
                            <button className="px-6 py-2 bg-white text-[#124b6d] border border-[#124b6d] text-[13px] rounded hover:bg-gray-50 transition-colors shadow-sm font-medium">
                                Demo text
                            </button>
                            <button className="px-6 py-2 bg-[#124b6d] text-white text-[13px] rounded hover:bg-[#0c3149] transition-colors shadow-sm font-medium">
                                Apply now
                            </button>
                        </div>
                    </div>
                    <div className="w-[380px] h-[220px] relative shrink-0 hidden md:block mt-4 md:mt-0">
                        <Image src="/assets/123.png" fill className="object-contain drop-shadow-sm" alt="MBA Program Illustration" onError={(e) => { (e.currentTarget as HTMLImageElement).src = "/assets/logo.png" }} />
                    </div>
                </div>

                <div className="w-full mb-6 rounded-lg overflow-hidden border border-gray-300 shadow-sm mt-8">
                    <table className="w-full text-center border-collapse">
                        <thead>
                            <tr className="bg-[#124b6d] text-white">
                                <th className="py-2.5 px-3 text-[12px] font-medium border-r border-[#1a5b82] w-1/5 whitespace-nowrap">No. of Universities</th>
                                <th className="py-2.5 px-3 text-[12px] font-medium border-r border-[#1a5b82] w-1/5">Eligibility</th>
                                <th className="py-2.5 px-3 text-[12px] font-medium border-r border-[#1a5b82] w-1/5">Duration</th>
                                <th className="py-2.5 px-3 text-[12px] font-medium border-r border-[#1a5b82] w-1/5 whitespace-nowrap">Learning Mode</th>
                                <th className="py-2.5 px-3 text-[12px] font-medium w-1/5 whitespace-nowrap">EMI Facility</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white text-[12.5px] text-[#1a2e4a] font-medium">
                            <tr className="border-b border-gray-300">
                                <td className="py-3 px-3 border-r border-gray-300">37</td>
                                <td className="py-3 px-3 border-r border-gray-300">Graduation or Equivalent</td>
                                <td className="py-3 px-3 border-r border-gray-300">2 years</td>
                                <td className="py-3 px-3 border-r border-gray-300">Online</td>
                                <td className="py-3 px-3">Available</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>

            <div className="border-y border-gray-200 sticky top-[72px] z-20 bg-white shadow-sm w-full">
                <div className="max-w-[1240px] mx-auto relative flex items-center px-4">
                    <button className="text-gray-400 hover:text-gray-600 px-2 hidden md:block">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    <div className="flex overflow-x-auto hide-scrollbar flex-1 w-full justify-between lg:justify-start gap-4 lg:gap-8 px-2 items-center">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => scrollToSection(tab.id)}
                                className={`py-4 text-[13px] font-bold whitespace-nowrap transition-colors border-b-2 ${activeTab === tab.id ? 'border-[#124b6d] text-[#124b6d]' : 'border-transparent text-gray-700 hover:text-[#124b6d]'}`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                    <button className="text-gray-400 hover:text-gray-600 px-2 hidden md:block">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </button>
                </div>
            </div>

            <div className="max-w-[1240px] mx-auto px-4 lg:px-8 mt-6">

                <div id="overview" className="scroll-mt-32 pt-4">
                    <div className="bg-gray-50/50 -mx-4 lg:-mx-8 px-4 lg:px-8 py-6 mb-6">
                        <h2 className="text-[18px] md:text-[20px] font-bold text-[#1a2e4a] mb-2">
                            Online MBA Courses <span className="text-[#124b6d]">Overview-</span>
                        </h2>
                        <p className="text-[12.5px] text-gray-700 font-medium leading-relaxed text-justify">
                            An Online MBA curriculum equips learners with hard and soft skills that can help them achieve higher earning potential, career advancement, enhanced skills and a global perspective and more. You study through recorded lessons, live sessions, e-learning materials, and real case discussions. Starting an online MBA isn't just about academics; it is a milestone in professional growth. The skills gained throughout the course help to open new business opportunities and strengthen strategic thinking. Exploring this page reveals why an Online MBA is worth pursuing today. So, let's take a closer look at how an Online Masters degree shapes confident leaders in today's dynamic business environment in India and abroad.
                        </p>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-[18px] md:text-[20px] font-bold text-[#1a2e4a] mb-2">
                            Online MBA Program <span className="text-[#124b6d]">Highlights-</span>
                        </h2>
                        <p className="text-[12.5px] text-gray-700 font-medium leading-relaxed mb-4 text-justify">
                            In today's evolving education system, students are presented with multiple academic and professional courses and skill-based programs. Among these, the Online MBA stands out as a smart and future-ready choice for learners who want depth in commerce and finance. Therefore it is required to understand the course, what it can offer to the aspirants before choosing this path it is essential to understand and move ahead with a clear and confident decision.
                        </p>

                        <h3 className="text-[14px] font-bold text-[#1a2e4a] mb-2">Key Features of Online MBA-</h3>
                        <ul className="list-none flex flex-col gap-1.5 text-[12.5px] text-gray-700 font-medium">
                            <li className="flex items-start gap-2"><span className="w-1 h-1 rounded-full bg-gray-700 mt-2 shrink-0"></span> Strengthen Entrepreneurial skills, development with valuable insight and tools.</li>
                            <li className="flex items-start gap-2"><span className="w-1 h-1 rounded-full bg-gray-700 mt-2 shrink-0"></span> Networking opportunities for alumni and industry professionals.</li>
                            <li className="flex items-start gap-2"><span className="w-1 h-1 rounded-full bg-gray-700 mt-2 shrink-0"></span> Encouraging Personal Development.</li>
                            <li className="flex items-start gap-2"><span className="w-1 h-1 rounded-full bg-gray-700 mt-2 shrink-0"></span> Higher earning potential after completing an online MBA course or any specialization.</li>
                            <li className="flex items-start gap-2"><span className="w-1 h-1 rounded-full bg-gray-700 mt-2 shrink-0"></span> Get in-depth industry knowledge of the business operations of diverse industries.</li>
                            <li className="flex items-start gap-2"><span className="w-1 h-1 rounded-full bg-gray-700 mt-2 shrink-0"></span> Create opportunities for higher-level leadership or managerial positions.</li>
                        </ul>
                    </div>
                </div>

                <div className="bg-[#2a4e6b] rounded-lg p-6 md:p-8 flex items-center justify-between mb-8 overflow-hidden relative shadow-sm max-w-[850px] mx-auto">
                    <div className="relative z-10 flex-1 max-w-[450px]">
                        <h3 className="text-white text-[20px] leading-snug font-normal mb-8">Get Personalized Guidance to Pick the Right Online MBA Degree Program</h3>
                        <button className="bg-white text-[#2a4e6b] px-6 py-2 rounded text-[13px] font-bold shadow hover:bg-gray-100 transition-colors">
                            Explore Courses
                        </button>
                    </div>
                    <div className="relative z-10 w-[140px] h-[140px] shrink-0 hidden md:block">
                        <Image src="/assets/123.png" fill className="object-contain" alt="Support" onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }} />
                    </div>
                </div>

                <div id="universities" className="scroll-mt-32 pt-2 mb-8">
                    <h3 className="text-[14px] font-bold text-[#1a2e4a] mb-2">What does the Online MBA course offer?</h3>
                    <p className="text-[12.5px] text-gray-700 font-medium leading-relaxed mb-6 text-justify">
                        Online MBA delivers more than just a degree. It gives you a powerful tool for modern business challenges. Aspirants pursuing the Online MBA degree in India gain access to business practical skills, analytical abilities, real-world exposure, valuable networking and professional growth, essential for thriving in today's competitive financial and business sectors.
                    </p>

                    <h2 className="text-[16px] md:text-[18px] font-bold text-[#1a2e4a] mb-2">Where should I pursue an Online MBA Course?</h2>
                    <p className="text-[12.5px] text-gray-700 font-medium leading-relaxed mb-4 text-justify">
                        Before enrolling in an online MBA course in India make sure to check important details like UGC-DEB, NAAC, AICTE accreditation, fee structure, course quality, experienced faculty, student support and placement assistance. Considering these factors ensures that a student earns a credible degree and better job opportunities in the future.
                    </p>

                    <h3 className="text-[14px] font-bold text-[#1a2e4a] mb-4">Top Affordable Universities for Online MBA Courses-</h3>
                    <p className="text-[13px] font-bold text-[#1a2e4a] text-center mb-2">Top Universities for MBA Courses</p>

                    <div className="overflow-x-auto border border-gray-300 rounded-lg shadow-sm w-full">
                        <table className="w-full text-left border-collapse min-w-[600px]">
                            <thead>
                                <tr className="bg-[#124b6d] text-white">
                                    <th className="py-3 px-4 text-[12.5px] font-medium border-r border-[#1a5b82] w-1/2">University</th>
                                    <th className="py-3 px-4 text-[12.5px] font-medium">Accreditation / Recognition</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white text-[12.5px] text-gray-700 font-medium">
                                <tr className="border-b border-gray-200">
                                    <td className="py-3 px-4 border-r border-gray-200">Chandigarh University</td>
                                    <td className="py-3 px-4">UGC-DEB, NAAC A+, AICTE</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="py-3 px-4 border-r border-gray-200">Jain University Online</td>
                                    <td className="py-3 px-4">UGC-DEB, NAAC A++, AICTE</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="py-3 px-4 border-r border-gray-200">Amity University Online</td>
                                    <td className="py-3 px-4">UGC, NAAC A+, AIU, WES</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="py-3 px-4 border-r border-gray-200">Lovely Professional University</td>
                                    <td className="py-3 px-4">UGC, NAAC A++, AICTE</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="py-3 px-4 border-r border-gray-200">IGNOU</td>
                                    <td className="py-3 px-4">UGC, NAAC A++, AICTE, Government-recognized national open university</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="py-3 px-4 border-r border-gray-200">Manipal University Jaipur Online</td>
                                    <td className="py-3 px-4">UGC-DEB, NAAC A+, AICTE</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="py-3 px-4 border-r border-gray-200">Dr. D.Y. Patil Vidyapeeth Pune (Online)</td>
                                    <td className="py-3 px-4">UGC-DEB, NAAC A++, AIU</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="py-3 px-4 border-r border-gray-200">Suresh Gyan Vihar University (SGVU Online)</td>
                                    <td className="py-3 px-4">UGC-DEB, NAAC A, AICTE</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="py-3 px-4 border-r border-gray-200">Shoolini University Online</td>
                                    <td className="py-3 px-4">UGC, NAAC A++, QS ranking</td>
                                </tr>
                                <tr>
                                    <td className="py-3 px-4 border-r border-gray-200">DY Patil University Online (Navi Mumbai)</td>
                                    <td className="py-3 px-4">UGC-DEB, NAAC A++, AICTE</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div id="syllabus" className="scroll-mt-32 pt-2 mb-8">
                    <h2 className="text-[18px] md:text-[20px] font-bold text-[#1a2e4a] mb-2">
                        Online MBA Subjects and Syllabus-
                    </h2>
                    <p className="text-[12.5px] text-gray-700 font-medium leading-relaxed mb-4 text-justify">
                        Before diving into the Online Master of Commerce syllabus, it is important to understand its structure and objectives. Below is the general syllabus, which highlights the course topics and the skills that will be strengthened by the end of the program MBA courses start with the basics of business concepts and then progress into advanced and real-world business skills.
                    </p>

                    <h3 className="text-[14px] font-bold text-[#1a2e4a] mb-4">Online MBA Course Syllabus-</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div className="border border-gray-300 rounded-lg bg-white overflow-hidden shadow-sm">
                            <div className="border-b border-gray-200 px-4 py-3 flex items-center gap-2">
                                <svg className="w-4 h-4 text-[#124b6d]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                                <span className="text-[13px] font-bold text-[#124b6d]">Semester 1</span>
                            </div>
                            <div className="p-4">
                                <p className="text-[13px] font-bold text-[#1a2e4a] mb-2">Core subjects</p>
                                <ul className="list-disc pl-5 flex flex-col gap-1 text-[12.5px] text-gray-700 font-medium">
                                    <li>Entrepreneurial Practice</li>
                                    <li>Business Communication (WAC)</li>
                                    <li>Managerial Economics</li>
                                    <li>Financial Accounting</li>
                                    <li>Data Visualisation (Excel/Tableau)</li>
                                    <li>Organizational Behaviour</li>
                                    <li>Marketing Management</li>
                                </ul>
                            </div>
                        </div>

                        <div className="border border-gray-300 rounded-lg bg-white overflow-hidden shadow-sm">
                            <div className="border-b border-gray-200 px-4 py-3 flex items-center gap-2">
                                <svg className="w-4 h-4 text-[#124b6d]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                                <span className="text-[13px] font-bold text-[#124b6d]">Semester 2</span>
                            </div>
                            <div className="p-4">
                                <p className="text-[13px] font-bold text-[#1a2e4a] mb-2">Core subjects</p>
                                <ul className="list-disc pl-5 flex flex-col gap-1 text-[12.5px] text-gray-700 font-medium">
                                    <li>Entrepreneurial Practice</li>
                                    <li>Business Communication (WAC)</li>
                                    <li>Managerial Economics</li>
                                    <li>Financial Accounting</li>
                                    <li>Data Visualisation (Excel/Tableau)</li>
                                    <li>Organizational Behaviour</li>
                                    <li>Marketing Management</li>
                                </ul>
                            </div>
                        </div>

                        <div className="border border-gray-300 rounded-lg bg-white overflow-hidden shadow-sm">
                            <div className="border-b border-gray-200 px-4 py-3 flex items-center gap-2">
                                <svg className="w-4 h-4 text-[#124b6d]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                                <span className="text-[13px] font-bold text-[#124b6d]">Semester 3</span>
                            </div>
                            <div className="p-4">
                                <p className="text-[13px] font-bold text-[#1a2e4a] mb-2">Core subjects</p>
                                <ul className="list-disc pl-5 flex flex-col gap-1 text-[12.5px] text-gray-700 font-medium mb-4">
                                    <li>Entrepreneurial Practice</li>
                                    <li>Business Communication (WAC)</li>
                                    <li>Managerial Economics</li>
                                    <li>Financial Accounting</li>
                                    <li>Data Visualisation (Excel/Tableau)</li>
                                    <li>Organizational Behaviour</li>
                                    <li>Marketing Management</li>
                                </ul>
                                <details className="group border border-gray-200 rounded text-[12.5px]" open>
                                    <summary className="font-bold text-[#1a2e4a] flex items-center justify-between p-2 cursor-pointer bg-white">
                                        Electives/Specializations Subjects
                                        <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                    </summary>
                                    <div className="p-3 pt-1 text-[12px] text-gray-700 font-medium bg-white">
                                        <p className="mb-2">13 Electives are there; get through the list.</p>
                                        <ul className="list-disc pl-5 flex flex-col gap-0.5">
                                            <li>Digital Marketing</li>
                                            <li>Finance</li>
                                            <li>Marketing</li>
                                            <li>Human Resources</li>
                                            <li>Analytics & DS</li>
                                            <li>BFSI</li>
                                            <li>FinTech</li>
                                            <li>Operations management</li>
                                            <li>International Business</li>
                                            <li>Information System Management</li>
                                            <li>Project Management</li>
                                            <li>Supply Chain Management</li>
                                            <li>Retail Management</li>
                                        </ul>
                                    </div>
                                </details>
                            </div>
                        </div>

                        <div className="border border-gray-300 rounded-lg bg-white overflow-hidden shadow-sm">
                            <div className="border-b border-gray-200 px-4 py-3 flex items-center gap-2">
                                <svg className="w-4 h-4 text-[#124b6d]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                                <span className="text-[13px] font-bold text-[#124b6d]">Semester 4</span>
                            </div>
                            <div className="p-4">
                                <p className="text-[13px] font-bold text-[#1a2e4a] mb-2">Core subjects</p>
                                <ul className="list-disc pl-5 flex flex-col gap-1 text-[12.5px] text-gray-700 font-medium mb-4">
                                    <li>Entrepreneurial Practice</li>
                                    <li>Business Communication (WAC)</li>
                                    <li>Managerial Economics</li>
                                    <li>Financial Accounting</li>
                                    <li>Data Visualisation (Excel/Tableau)</li>
                                    <li>Organizational Behaviour</li>
                                    <li>Marketing Management</li>
                                </ul>
                                <details className="group border border-gray-200 rounded text-[12.5px]">
                                    <summary className="font-bold text-[#1a2e4a] flex items-center justify-between p-2 cursor-pointer bg-white">
                                        Electives/Specializations Subjects
                                        <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                    </summary>
                                    <div className="p-3 pt-1 text-[12px] text-gray-700 font-medium bg-white">
                                        <p className="mb-2">Electives list specific to Sem 4.</p>
                                    </div>
                                </details>
                            </div>
                        </div>
                    </div>

                    <h3 className="text-[14px] font-bold text-[#1a2e4a] mb-4">Skills developed in MBA Course-</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-y-3 gap-x-4 mb-8">
                        {[
                            "Leadership & Management", "Strategic Thinking", "Decision Making", "Team Management",
                            "Budgeting", "Consumer Behavior", "Operations Management", "Data-Driven Decision Making",
                            "Communication", "Statistical Analysis", "Recruitment & Talent Management", "Self discipline",
                            "Time management", "Networking", "Ethics & Corporate Governance", "Corporate Responsibility"
                        ].map((skill, i) => (
                            <div key={i} className="flex items-center gap-2 text-[12px] text-gray-700 font-medium">
                                <div className="w-[14px] h-[14px] rounded-full bg-green-500 text-white flex items-center justify-center shrink-0">
                                    <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                </div>
                                {skill}
                            </div>
                        ))}
                    </div>

                    <div className="bg-[#2a4e6b] rounded-lg p-6 md:p-8 flex items-center justify-between overflow-hidden relative shadow-sm max-w-[850px] mx-auto text-white">
                        <div className="relative z-10 flex-1 max-w-[400px]">
                            <h3 className="text-[20px] leading-snug font-normal mb-8">Check Online MBA Fees, EMI Options & Eligibility Before You Apply</h3>
                            <button className="bg-white text-[#2a4e6b] px-6 py-2 rounded text-[13px] font-bold shadow hover:bg-gray-100 transition-colors">
                                Explore Courses
                            </button>
                        </div>
                        <div className="relative z-10 w-[140px] h-[140px] shrink-0 hidden md:block mt-6">
                            <Image src="/assets/123.png" fill className="object-contain" alt="Apply" onError={(e) => { (e.currentTarget as HTMLImageElement).src = "/assets/logo.png" }} />
                        </div>
                    </div>
                </div>

                <div id="specializations" className="scroll-mt-32 pt-2 mb-8 mt-10">
                    <h2 className="text-[18px] md:text-[20px] font-bold text-[#1a2e4a] mb-2">
                        Top Specializations for Online <span className="text-[#124b6d]">MBA in 2026-</span>
                    </h2>
                    <p className="text-[12.5px] text-gray-700 font-medium leading-relaxed mb-6 text-justify">
                        Choosing the right specialization helps learners build domain expertise and compete effectively in the ever-evolving job market. The key strength of the Online MBA program is the wide range of specialization options that allow learners to plan their career direction to align with evolving industry needs.
                    </p>
                    <h3 className="text-[14px] font-bold text-[#1a2e4a] mb-4">Top Specializations for Online MBA in 2026-</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3 gap-x-4 mb-8">
                        {[
                            "Advertising and Branding (Dual)", "Agri-Business Management", "AI and Machine Learning (Dual)", "Aviation Management", "Banking & Finance Management", "Banking and Insurance", "Banking Financial Services & Insurance-BFSI", "Big Data", "Biotechnology Management",
                            "Blockchain Management", "Business Analytics", "Business Intelligence & AI (Dual)", "Business Intelligence And Analytics (Dual)", "Business Management", "Customer Relationship Management", "Cyber Security", "Data Analytics", "Data Science",
                            "Data Science and Analytics (Dual)", "Digital Entrepreneurship", "Digital Finance", "Digital Marketing", "Digital Marketing E Commerce (Dual)", "Direct Selling Management", "Disaster Management", "Educational Administration", "Energy Management"
                        ].map((spec, i) => (
                            <div key={i} className="flex items-center gap-2 text-[12px] text-gray-700 font-medium">
                                <span className="w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[5px] border-l-[#124b6d] shrink-0"></span>
                                {spec}
                            </div>
                        ))}
                    </div>

                    <h3 className="text-[14px] font-bold text-[#1a2e4a] mb-4">Fee Structure and EMI Plans for Online MBA Courses-</h3>
                    <div className="overflow-x-auto border border-gray-300 rounded-lg shadow-sm w-full mb-8">
                        <table className="w-full text-left border-collapse min-w-[700px]">
                            <thead>
                                <tr className="bg-[#124b6d] text-white">
                                    <th className="py-3 px-4 text-[12.5px] font-medium border-r border-[#1a5b82] w-[35%]">University / Institution</th>
                                    <th className="py-3 px-4 text-[12.5px] font-medium border-r border-[#1a5b82] w-[30%]">Approx. Total / Program Fee (INR)</th>
                                    <th className="py-3 px-4 text-[12.5px] font-medium">Payment / EMI / Fee-Breakdown Info</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white text-[12.5px] text-gray-700 font-medium">
                                <tr className="border-b border-gray-200">
                                    <td className="py-3 px-4 border-r border-gray-200">Amity University Online</td>
                                    <td className="py-3 px-4 border-r border-gray-200">~ ₹ 1.99 lakhs</td>
                                    <td className="py-3 px-4">Semester-wise: ₹ 49,750</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="py-3 px-4 border-r border-gray-200">NMIMS Global (Online MBA)</td>
                                    <td className="py-3 px-4 border-r border-gray-200">~ ₹ 2.20 lakhs total</td>
                                    <td className="py-3 px-4">Semester-wise fee: ₹ 55,000</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="py-3 px-4 border-r border-gray-200">Dr. D.Y. Patil University (Online MBA)</td>
                                    <td className="py-3 px-4 border-r border-gray-200">~ ₹ 1.89 lakhs</td>
                                    <td className="py-3 px-4">Semester 1&2: ₹ 50,000 each; Semester 3: ₹ 45,000; Semester 4: ₹ 44,000</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="py-3 px-4 border-r border-gray-200">UPES Online</td>
                                    <td className="py-3 px-4 border-r border-gray-200">~ ₹ 1.75 lakhs total</td>
                                    <td className="py-3 px-4">Semester-wise fee: ₹ 43,75</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="py-3 px-4 border-r border-gray-200">Lovely Professional University Online (LPU Online)</td>
                                    <td className="py-3 px-4 border-r border-gray-200">~ ₹ 1.31 lakhs total</td>
                                    <td className="py-3 px-4">Semester-wise fee: ~ ₹ 36,400; one-time registration fee: ₹ 600</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="py-3 px-4 border-r border-gray-200">BIMTECH Online</td>
                                    <td className="py-3 px-4 border-r border-gray-200">~ ₹ 2.75 lakhs total</td>
                                    <td className="py-3 px-4">EMI plans available (for example, over monthly installments)</td>
                                </tr>
                                <tr>
                                    <td className="py-3 px-4 border-r border-gray-200">Generic Online MBA / Online-Mode Courses</td>
                                    <td className="py-3 px-4 border-r border-gray-200">₹ 1.5 - 2.6 lakhs (typical fee-range for many universities)</td>
                                    <td className="py-3 px-4">Some programs offer EMI or installment options</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div id="eligibility" className="scroll-mt-32 pt-2 mb-8 mt-10">
                    <h2 className="text-[18px] md:text-[20px] font-bold text-[#1a2e4a] mb-2">
                        Online MBA Eligibility and Duration-
                    </h2>
                    <p className="text-[12.5px] text-gray-700 font-medium leading-relaxed mb-4 text-justify">
                        An Online MBA is ideal for graduates and working professionals. A 2-year degree course of 4 semesters, who want to take a big step forward in their business and managerial careers. The program is designed to help learners grow into confident leaders, decision-makers, and business strategists, no matter whether they are starting out or already in a job.
                    </p>
                    <h3 className="text-[14px] font-bold text-[#1a2e4a] mb-4">Eligibility Requirements for Online MBA courses-</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6 mb-8 text-[12.5px] text-gray-700 font-medium">
                        <div className="flex items-start gap-3">
                            <div className="w-[18px] h-[18px] rounded-full bg-green-500 text-white flex items-center justify-center shrink-0 mt-0.5">
                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                            </div>
                            A bachelor's degree in any discipline from a recognized university.
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-[18px] h-[18px] rounded-full bg-green-500 text-white flex items-center justify-center shrink-0 mt-0.5">
                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                            </div>
                            No age limit for applying
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-[18px] h-[18px] rounded-full bg-green-500 text-white flex items-center justify-center shrink-0 mt-0.5">
                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                            </div>
                            Candidates with degrees in Business, Management, Commerce, Engineering, IT, or Humanities are eligible.
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-[18px] h-[18px] rounded-full bg-green-500 text-white flex items-center justify-center shrink-0 mt-0.5">
                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                            </div>
                            Work experience is preferred but not mandatory for most universities
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-[18px] h-[18px] rounded-full bg-green-500 text-white flex items-center justify-center shrink-0 mt-0.5">
                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                            </div>
                            Minimum aggregate percentage typically required is 45-50% (varies by university)
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-[18px] h-[18px] rounded-full bg-green-500 text-white flex items-center justify-center shrink-0 mt-0.5">
                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                            </div>
                            Admission requires basic documentation such as marksheets, ID proof, and an Online MBA application form.
                        </div>
                    </div>

                    <div className="bg-[#2a4e6b] rounded-lg p-6 md:p-8 flex items-center justify-between overflow-hidden relative shadow-sm max-w-[850px] mx-auto text-white">
                        <div className="relative z-10 flex-1 max-w-[400px]">
                            <h3 className="text-[20px] leading-snug font-normal mb-8">Check Online MBA Fees, EMI Options and Eligibility Before You Apply</h3>
                            <button className="bg-white text-[#2a4e6b] px-6 py-2 rounded text-[13px] font-bold shadow hover:bg-gray-100 transition-colors">
                                Check Details
                            </button>
                        </div>
                        <div className="relative z-10 w-[140px] h-[140px] shrink-0 hidden md:block mt-6">
                            <Image src="/assets/123.png" fill className="object-contain" alt="Apply" onError={(e) => { (e.currentTarget as HTMLImageElement).src = "/assets/logo.png" }} />
                        </div>
                    </div>
                </div>

                <div id="recruiters" className="scroll-mt-32 pt-2 mb-8 mt-10">
                    <h3 className="text-[16px] md:text-[18px] font-bold text-[#1a2e4a] mb-4">Top Recruiters for Online MBA-</h3>
                    <div className="overflow-x-auto border border-gray-300 rounded-lg shadow-sm w-full mb-8">
                        <table className="w-full text-left border-collapse min-w-[500px]">
                            <thead>
                                <tr className="bg-[#124b6d] text-white">
                                    <th className="py-3 px-4 text-[12.5px] font-medium border-r border-[#1a5b82] w-1/2">Recruiters hire the online MBAs in</th>
                                    <th className="py-3 px-4 text-[12.5px] font-medium">Salary Packages (yearly) (in INR)</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white text-[12.5px] text-gray-700 font-medium">
                                <tr className="border-b border-gray-200">
                                    <td className="py-3 px-4 border-r border-gray-200">ICICI Lombard</td>
                                    <td className="py-3 px-4">39 lakhs to 44.2 lakhs</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="py-3 px-4 border-r border-gray-200">Mphasis</td>
                                    <td className="py-3 px-4">2 lakhs to 106 lakhs</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="py-3 px-4 border-r border-gray-200">Airtel</td>
                                    <td className="py-3 px-4">4.5 lakhs to 22.2 lakhs</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="py-3 px-4 border-r border-gray-200">IndiaMART</td>
                                    <td className="py-3 px-4">3.2 lakhs to 16.9 lakhs</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="py-3 px-4 border-r border-gray-200">NIIT</td>
                                    <td className="py-3 px-4">2.5 lakhs to 39.3 lakhs</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="py-3 px-4 border-r border-gray-200">Coforge</td>
                                    <td className="py-3 px-4">24.5 lakhs to 44.2 lakhs</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="py-3 px-4 border-r border-gray-200">InfoTech</td>
                                    <td className="py-3 px-4">10 lakhs to 31.6 lakhs</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="py-3 px-4 border-r border-gray-200">Maruti Suzuki</td>
                                    <td className="py-3 px-4">2.2 lakhs to 11.7 lakhs</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="py-3 px-4 border-r border-gray-200">EY</td>
                                    <td className="py-3 px-4">0.7 lakhs to 29 lakhs</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="py-3 px-4 border-r border-gray-200">Teleperformance</td>
                                    <td className="py-3 px-4">1.2 lakhs to 8 lakhs</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="py-3 px-4 border-r border-gray-200">Genpact</td>
                                    <td className="py-3 px-4">1.5 lakhs to 12 lakhs</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="py-3 px-4 border-r border-gray-200">Amazon</td>
                                    <td className="py-3 px-4">1.5 lakhs to 34 lakhs</td>
                                </tr>
                                <tr>
                                    <td className="py-3 px-4 border-r border-gray-200">Accenture</td>
                                    <td className="py-3 px-4">2 lakhs to 10.6 lakhs</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h3 className="text-[16px] md:text-[18px] font-bold text-[#1a2e4a] mb-4">Student Testimonials-</h3>
                    <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-6 mb-2 pt-2 -mx-4 px-4 lg:-mx-8 lg:px-8">
                        {[1, 2, 3].map((card, i) => (
                            <div key={i} className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm min-w-[280px] max-w-[320px] flex-shrink-0 flex flex-col justify-between hover:shadow-md transition-shadow">
                                <p className="text-[12px] text-gray-700 leading-relaxed font-medium mb-4">
                                    The Online MBA allowed me to continue working without compromising my education. The learning platform easy to use, the live classes were excellent.
                                </p>
                                <div className="flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-full bg-gray-200 overflow-hidden shrink-0">
                                        <Image src="/assets/p.png" width={36} height={36} className="object-cover w-full h-full" alt="Neha" onError={(e) => { (e.currentTarget as HTMLImageElement).src = "/assets/logo.png" }} />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[12.5px] font-bold text-[#1a2e4a]">Neha</span>
                                        <span className="text-[11px] text-gray-400 font-medium">Marketing manager</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center justify-center gap-1.5 mb-10">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#124b6d]"></div>
                        <div className="w-1.5 h-1.5 rounded-full border border-gray-300"></div>
                        <div className="w-1.5 h-1.5 rounded-full border border-gray-300"></div>
                    </div>

                    <div className="bg-[#2a4e6b] rounded-lg p-6 md:p-8 flex items-center justify-between overflow-hidden relative shadow-sm max-w-[850px] mx-auto text-white">
                        <div className="relative z-10 flex-1 max-w-[400px]">
                            <h3 className="text-[20px] leading-snug font-normal mb-8">Find the Best Online MBA Specialization Aligned With Your Career Goals</h3>
                            <button className="bg-white text-[#2a4e6b] px-6 py-2 rounded text-[13px] font-bold shadow hover:bg-gray-100 transition-colors">
                                View Options
                            </button>
                        </div>
                        <div className="relative z-10 w-[140px] h-[140px] shrink-0 hidden md:block mt-6">
                            <Image src="/assets/123.png" fill className="object-contain" alt="Apply" onError={(e) => { (e.currentTarget as HTMLImageElement).src = "/assets/logo.png" }} />
                        </div>
                    </div>
                </div>

                <div id="faqs" className="scroll-mt-32 pt-2 mb-10 mt-10">
                    <h2 className="text-[18px] md:text-[20px] font-bold text-[#1a2e4a] mb-6">
                        Frequently Asked Questions about Online MBA-
                    </h2>
                    <div className="flex flex-col gap-3">
                        <details className="group border border-gray-200 rounded-lg bg-white overflow-hidden shadow-sm" open>
                            <summary className="flex justify-between items-center p-4 cursor-pointer list-none text-[13px] text-gray-800 font-medium">
                                1. What is an Online MBA program?
                                <span className="text-gray-500 group-open:rotate-180 transition-transform duration-300">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" /></svg>
                                </span>
                            </summary>
                            <div className="px-4 pb-4 text-[12.5px] text-gray-700 leading-relaxed border-t border-gray-50 pt-3 font-medium">
                                An online Master program is a 2-year postgraduate degree in Business Administration, recognized by UGC, AICTE and accredited universities.
                            </div>
                        </details>

                        <details className="group border border-gray-200 rounded-lg bg-white overflow-hidden shadow-sm">
                            <summary className="flex justify-between items-center p-4 cursor-pointer list-none text-[13px] text-gray-800 font-medium">
                                2. What is the course duration of an Online MBA?
                                <span className="text-gray-500 group-open:rotate-180 transition-transform duration-300">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" /></svg>
                                </span>
                            </summary>
                            <div className="px-4 pb-4 text-[12.5px] text-gray-700 leading-relaxed border-t border-gray-50 pt-3 font-medium">
                                It is typically a 2-year program spanning 4 semesters, similar to a regular MBA.
                            </div>
                        </details>

                        <details className="group border border-gray-200 rounded-lg bg-white overflow-hidden shadow-sm">
                            <summary className="flex justify-between items-center p-4 cursor-pointer list-none text-[13px] text-gray-800 font-medium">
                                3. What is the course duration of an Online MBA?
                                <span className="text-gray-500 group-open:rotate-180 transition-transform duration-300">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" /></svg>
                                </span>
                            </summary>
                            <div className="px-4 pb-4 text-[12.5px] text-gray-700 leading-relaxed border-t border-gray-50 pt-3 font-medium">
                                It is typically a 2-year program spanning 4 semesters.
                            </div>
                        </details>

                        <details className="group border border-gray-200 rounded-lg bg-white overflow-hidden shadow-sm">
                            <summary className="flex justify-between items-center p-4 cursor-pointer list-none text-[13px] text-gray-800 font-medium">
                                4. What is the course duration of an Online MBA?
                                <span className="text-gray-500 group-open:rotate-180 transition-transform duration-300">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" /></svg>
                                </span>
                            </summary>
                            <div className="px-4 pb-4 text-[12.5px] text-gray-700 leading-relaxed border-t border-gray-50 pt-3 font-medium">
                                2 years across 4 semesters.
                            </div>
                        </details>

                        <details className="group border border-gray-200 rounded-lg bg-white overflow-hidden shadow-sm">
                            <summary className="flex justify-between items-center p-4 cursor-pointer list-none text-[13px] text-gray-800 font-medium">
                                5. What is the course duration of an Online MBA?
                                <span className="text-gray-500 group-open:rotate-180 transition-transform duration-300">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" /></svg>
                                </span>
                            </summary>
                            <div className="px-4 pb-4 text-[12.5px] text-gray-700 leading-relaxed border-t border-gray-50 pt-3 font-medium">
                                The minimum duration to complete is 2 years.
                            </div>
                        </details>
                    </div>

                    <div className="flex justify-center mt-6">
                        <button className="flex items-center gap-2 border border-[#1a2e4a] text-[#1a2e4a] px-6 py-2 rounded font-medium text-[13px] hover:bg-gray-50 transition-colors">
                            View more
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" /></svg>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}
