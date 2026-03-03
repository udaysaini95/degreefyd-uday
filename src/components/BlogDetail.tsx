"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function BlogDetail() {
    return (
        <div className="bg-[#f8f9fa] min-h-screen pb-16 pt-6 overflow-x-hidden w-full max-w-[100vw]">
            <div className="max-w-[1240px] mx-auto px-4 lg:px-8">

                <div className="flex items-center gap-2 text-[12px] text-[#1a2e4a] mb-6 font-medium flex-wrap">
                    <Link href="/" className="hover:text-blue-600 flex items-center gap-1"><svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg></Link>
                    <span className="text-gray-300">&gt;</span>
                    <Link href="/?view=courses" className="hover:text-blue-600">Courses</Link>
                    <span className="text-gray-300">&gt;</span>
                    <span className="text-blue-600">How to Become a Marketing Manager with a Specialization in Online MBA (Marketing)</span>
                </div>

                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start relative">

                    <div className="flex-1 w-full max-w-full min-w-0 flex flex-col gap-6">
                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-8">
                            <h1 className="text-[24px] md:text-[34px] font-bold text-[#1a2e4a] leading-tight mb-3">
                                How to Become a <span className="text-[#f59e0b]">Marketing Manager</span> with a Specialization in Online MBA (Marketing)-
                            </h1>

                            <div className="flex items-center gap-4 text-[12px] text-gray-500 font-medium mb-6">
                                <div className="flex items-center gap-1.5">
                                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                    <span>3 Sep, 2025</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                                    <span>23 Views</span>
                                </div>
                            </div>

                            <div className="flex flex-wrap items-center gap-4 mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100 shrink-0">
                                        <Image src="/assets/p.png" width={40} height={40} alt="Yogita Sharma" className="object-cover w-full h-full" onError={(e) => { (e.currentTarget as HTMLImageElement).src = "/assets/logo.png" }} />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[13px] font-bold text-[#1a2e4a]">Yogita Sharma</span>
                                        <span className="text-[11px] text-gray-500 font-medium tracking-wide">Content manager at Degreefyd</span>
                                    </div>
                                </div>
                            </div>

                            <p className="text-[13.5px] text-[#1a2e4a] leading-relaxed mb-6 font-medium">
                                An Online MBA will teach you how to be a great leader and marketer. Learn how to become a Marketing Manager with a focus on this important area.
                            </p>

                            <div className="w-full h-[250px] md:h-[400px] bg-gray-100 rounded-xl overflow-hidden relative">
                                <Image src="/assets/blog.png" fill alt="Online MBA Cover" className="object-cover" onError={(e) => { (e.currentTarget as HTMLImageElement).src = "/assets/logo.png" }} />
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-8">
                            <h2 className="text-[18px] md:text-[22px] font-bold text-[#1a2e4a] mb-5">
                                Table of contents-
                            </h2>
                            <ul className="flex flex-col gap-3">
                                <li className="flex items-center gap-2 text-blue-500 text-[14px] cursor-pointer hover:underline">
                                    <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                                    Introduction
                                </li>
                                <li className="flex items-center gap-2 text-blue-500 text-[14px] cursor-pointer hover:underline">
                                    <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                                    Why Choose a Career as a Marketing Manager?
                                </li>
                                <li className="flex items-center gap-2 text-blue-500 text-[14px] cursor-pointer hover:underline">
                                    <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                                    How Does an Online MBA in Marketing Help?
                                </li>
                                <li className="flex items-center gap-2 text-blue-500 text-[14px] cursor-pointer hover:underline">
                                    <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                                    Steps to Become a Marketing Manager with an Online MBA (Marketing)
                                </li>
                                <li className="flex items-center gap-2 text-blue-500 text-[14px] cursor-pointer hover:underline">
                                    <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                                    What You'll Learn in an Online MBA (Marketing)
                                </li>
                            </ul>
                            <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-start">
                                <button className="text-[13px] text-blue-500 font-medium flex items-center gap-1 hover:underline">
                                    View more <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                </button>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-8">
                            <div className="prose prose-blue max-w-none relative">
                                <h2 className="text-[20px] md:text-[24px] font-bold text-[#1a2e4a] mb-4 flex items-center gap-2">
                                    Introduction-
                                </h2>
                                <p className="text-[14px] text-gray-700 leading-relaxed mb-4 text-justify">
                                    Marketing roles are growing fast in India because every brand wants a stronger customer reach. Many learners now search for an <strong>online MBA in Marketing</strong> to build a stable marketing career. The marketing field offers strong demand, good salaries, and clear growth paths. A well-planned MBA marketing specialization online helps learners gain skills required for modern business roles.<br /><br />
                                    Many professionals also want to understand <strong>how to become a marketing manager</strong> with the right training. This role needs creativity, planning skills, and good knowledge of business decisions. A structured online degree helps learners build these abilities in a flexible way. The demand for skilled managers is rising in India, and companies need trained talent.<br />
                                    Online learning now supports many careers, including marketing management. Several top online <strong>MBA marketing colleges</strong> offer programs designed for real job needs. Most programs include digital marketing, branding, leadership, and communication training. These subjects help learners enter the field with strong preparation.<br />
                                    Marketing is one of the most popular career paths because the field offers wide options. This includes branding, digital ads, sales planning, product marketing, and research. The skills gained during an online program open many roles.<br />
                                    This guide explains the <strong>marketing manager career path</strong> after an MBA. It covers key roles and required skills. It also highlights program costs, job options, salaries, and admission eligibility.
                                </p>

                                <div className="border-t border-gray-100 my-8"></div>

                                <h2 className="text-[20px] md:text-[24px] font-bold text-[#1a2e4a] mb-4 mt-8 flex items-center gap-2">
                                    What Is the Role of a Marketing Manager in a Company?
                                </h2>
                                <p className="text-[14px] text-gray-700 leading-relaxed mb-4">
                                    The role of a marketing manager covers many tasks that help a brand grow.<br />
                                    Here are the main responsibilities:
                                </p>
                                <ul className="list-none pl-0 mb-6 text-[14px] text-gray-700 font-medium flex flex-col gap-3">
                                    <li className="flex items-start gap-2 relative pl-5"><span className="absolute left-0 top-[6px] w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[6px] border-l-[#1a2e4a]"></span> Create marketing strategies based on customer study</li>
                                    <li className="flex items-start gap-2 relative pl-5"><span className="absolute left-0 top-[6px] w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[6px] border-l-[#1a2e4a]"></span> Manage online and offline campaigns</li>
                                    <li className="flex items-start gap-2 relative pl-5"><span className="absolute left-0 top-[6px] w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[6px] border-l-[#1a2e4a]"></span> Guide teams in branding and promotions</li>
                                    <li className="flex items-start gap-2 relative pl-5"><span className="absolute left-0 top-[6px] w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[6px] border-l-[#1a2e4a]"></span> Track marketing data and report outcomes</li>
                                    <li className="flex items-start gap-2 relative pl-5"><span className="absolute left-0 top-[6px] w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[6px] border-l-[#1a2e4a]"></span> Work with product, sales, and design teams</li>
                                    <li className="flex items-start gap-2 relative pl-5"><span className="absolute left-0 top-[6px] w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[6px] border-l-[#1a2e4a]"></span> Improve communication between customers and the brand</li>
                                    <li className="flex items-start gap-2 relative pl-5"><span className="absolute left-0 top-[6px] w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[6px] border-l-[#1a2e4a]"></span> Handle ads, digital content, events, and promotions</li>
                                    <li className="flex items-start gap-2 relative pl-5"><span className="absolute left-0 top-[6px] w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[6px] border-l-[#1a2e4a]"></span> Maintain brand reputation across channels</li>
                                </ul>
                                <p className="text-[14px] text-gray-700 leading-relaxed mb-6">
                                    These duties match the industry's demand for marketing manager roles and responsibilities. Companies expect managers to drive growth through strong planning and data use.
                                </p>

                                <div className="w-full h-[250px] md:h-[300px] bg-gray-100 rounded-xl overflow-hidden mb-8 relative border border-gray-200">
                                    <Image src="/assets/blog.png" fill alt="Marketing Funnel Graphic" className="object-cover" onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }} />
                                </div>


                                <h2 className="text-[20px] md:text-[22px] font-bold text-[#1a2e4a] mb-4 pb-1 inline-block">
                                    Key Responsibilities of a Marketing Manager-
                                </h2>

                                <div className="overflow-x-auto w-full flex-col mb-8 border border-gray-300 rounded-xl">
                                    <table className="w-full border-collapse rounded-lg overflow-hidden border border-gray-300">
                                        <thead>
                                            <tr className="bg-[#124b6d] text-white text-left">
                                                <th className="py-3.5 px-5 text-[14px] font-medium w-[35%] border-r border-[#1e618a]">Responsibility</th>
                                                <th className="py-3.5 px-5 text-[14px] font-medium">Description</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-[13.5px] text-gray-700 font-medium bg-white">
                                            <tr className="border-b border-gray-200">
                                                <td className="py-4 px-5 border-r border-gray-200">Campaign Planning</td>
                                                <td className="py-4 px-5">Design campaigns for product or service growth</td>
                                            </tr>
                                            <tr className="border-b border-gray-200">
                                                <td className="py-4 px-5 border-r border-gray-200">Market Study</td>
                                                <td className="py-4 px-5">Track trends, behavior, and customer needs</td>
                                            </tr>
                                            <tr className="border-b border-gray-200">
                                                <td className="py-4 px-5 border-r border-gray-200">Team Guidance</td>
                                                <td className="py-4 px-5">Support teams during execution</td>
                                            </tr>
                                            <tr className="border-b border-gray-200">
                                                <td className="py-4 px-5 border-r border-gray-200">Budget Control</td>
                                                <td className="py-4 px-5">Manage marketing funds</td>
                                            </tr>
                                            <tr>
                                                <td className="py-4 px-5 border-r border-gray-200">Performance Study</td>
                                                <td className="py-4 px-5">Check results of all campaigns</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="mb-12">
                                    <div className="bg-[#1a3a4e] rounded-xl p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden">
                                        <div className="flex flex-col z-10 w-full sm:w-[60%]">
                                            <h3 className="text-white text-[18px] md:text-[20px] font-medium leading-tight mb-4 max-w-sm">
                                                Lost about your career options? Let's map out your success, step by step.
                                            </h3>
                                            <button className="bg-white text-[#1a2e4a] w-fit px-5 py-2.5 rounded shadow text-[14px] font-bold hover:bg-gray-50 transition-colors">
                                                Connect Now
                                            </button>
                                        </div>
                                        <div className="w-[140px] h-[140px] relative z-10 shrink-0 hidden sm:block">
                                            <Image src="/assets/123.png" fill className="object-contain" alt="Connect" onError={(e) => { (e.currentTarget as HTMLImageElement).src = "/assets/logo.png" }} />
                                        </div>
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
                                    </div>
                                </div>

                                <h2 className="text-[20px] md:text-[22px] font-bold text-[#1a2e4a] leading-snug mb-4 mt-8">
                                    How to Become a Marketing Manager with a Specialization in Online MBA (Marketing)-
                                </h2>
                                <p className="text-[14px] text-gray-700 leading-relaxed mb-6">
                                    You cA marketing manager handles brand growth, campaign planning, customer engagement, and sales alignment. A structured path helps candidates move faster into this role, especially with an <Link href="#" className="text-[#3b82f6] underline">Online MBA in Marketing.</Link>
                                </p>

                                <div className="flex flex-col gap-5 text-[14px] text-gray-700 leading-relaxed font-medium mb-10">
                                    <div>
                                        <div className="flex items-center gap-2 font-bold text-gray-800 mb-1">
                                            <span className="w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[6px] border-l-[#1a2e4a]"></span>
                                            Step 1- Complete Graduation in Any Stream
                                        </div>
                                        <p className="pl-4">Graduation builds basic communication and analytical skills needed for marketing roles. Most universities accept applicants from all academic backgrounds for an MBA in marketing specialization online.</p>
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2 font-bold text-gray-800 mb-1">
                                            <span className="w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[6px] border-l-[#1a2e4a]"></span>
                                            Step 2- Meet the Eligibility Requirement for the Online MBA in Marketing
                                        </div>
                                        <p className="pl-4">Eligibility for an online MBA in marketing generally includes a recognized bachelor's degree. Some universities consider work experience, but it remains optional for many programs.</p>
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2 font-bold text-gray-800 mb-1">
                                            <span className="w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[6px] border-l-[#1a2e4a]"></span>
                                            Step 3- Select a Government-Recognized Online MBA in Marketing
                                        </div>
                                        <p className="pl-4">A marketing manager's career path after an MBA grows faster when the degree is approved. AICTE or UGC approval ensures strong credibility in the job market.</p>
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2 font-bold text-gray-800 mb-1">
                                            <span className="w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[6px] border-l-[#1a2e4a]"></span>
                                            Step 4- Learn Key Marketing Tools During the Program
                                        </div>
                                        <p className="pl-4">Online MBA in Marketing covers digital tools, brand frameworks, media planning systems, and data dashboards. This develops practical skills needed for campaign execution and market research.</p>
                                    </div>
                                </div>

                                <div className="border-t border-gray-100 my-8 w-full block"></div>

                                <h2 className="text-[20px] md:text-[22px] font-bold text-[#1a2e4a] leading-snug mb-4 mt-8">
                                    Skills Required to Pursue a Career as a Marketing Manager-
                                </h2>
                                <p className="text-[14px] text-gray-700 leading-relaxed mb-4">
                                    Marketing managers need a broad skill set to handle diverse tasks. These skills influence daily operations and long-term brand success.
                                </p>
                                <p className="text-[14px] font-bold text-gray-800 mb-2">Core Skills Needed</p>
                                <ul className="list-none pl-0 mb-6 text-[14px] text-gray-700 font-medium flex flex-col gap-2">
                                    <li className="flex items-center gap-2 relative pl-5"><span className="absolute left-0 top-[6px] w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[6px] border-l-[#1a2e4a]"></span> Strong communication for campaign planning</li>
                                    <li className="flex items-center gap-2 relative pl-5"><span className="absolute left-0 top-[6px] w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[6px] border-l-[#1a2e4a]"></span> Analytical skills for market research</li>
                                    <li className="flex items-center gap-2 relative pl-5"><span className="absolute left-0 top-[6px] w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[6px] border-l-[#1a2e4a]"></span> Creativity for brand development</li>
                                    <li className="flex items-center gap-2 relative pl-5"><span className="absolute left-0 top-[6px] w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[6px] border-l-[#1a2e4a]"></span> Leadership for cross-team coordination</li>
                                    <li className="flex items-center gap-2 relative pl-5"><span className="absolute left-0 top-[6px] w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[6px] border-l-[#1a2e4a]"></span> Digital marketing knowledge</li>
                                    <li className="flex items-center gap-2 relative pl-5"><span className="absolute left-0 top-[6px] w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[6px] border-l-[#1a2e4a]"></span> Budget planning skills</li>
                                </ul>

                                <p className="text-[14px] font-bold text-gray-800 mb-4 mt-6">Essential Skills for Marketing Management-</p>
                                <div className="overflow-x-auto w-full flex-col mb-8 border border-gray-300 rounded-xl">
                                    <table className="w-full border-collapse rounded-lg overflow-hidden relative">
                                        <thead>
                                            <tr className="bg-[#124b6d] text-white text-left">
                                                <th className="py-3.5 px-5 text-[14px] font-medium w-[30%] border-r border-[#1e618a]">Skill Category</th>
                                                <th className="py-3.5 px-5 text-[14px] font-medium w-[25%] border-r border-[#1e618a]">Importance</th>
                                                <th className="py-3.5 px-5 text-[14px] font-medium">Why It Matters</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-[13.5px] text-gray-700 font-medium bg-white">
                                            <tr className="border-b border-gray-200">
                                                <td className="py-4 px-5 border-r border-gray-200">Communication</td>
                                                <td className="py-4 px-5 border-r border-gray-200">High</td>
                                                <td className="py-4 px-5">Helps explain ideas to teams and clients</td>
                                            </tr>
                                            <tr className="border-b border-gray-200">
                                                <td className="py-4 px-5 border-r border-gray-200">Analytics</td>
                                                <td className="py-4 px-5 border-r border-gray-200">High</td>
                                                <td className="py-4 px-5">Supports data-driven decisions</td>
                                            </tr>
                                            <tr className="border-b border-gray-200">
                                                <td className="py-4 px-5 border-r border-gray-200">Creativity</td>
                                                <td className="py-4 px-5 border-r border-gray-200">Medium</td>
                                                <td className="py-4 px-5">Helps build strong brand identity</td>
                                            </tr>
                                            <tr className="border-b border-gray-200">
                                                <td className="py-4 px-5 border-r border-gray-200">Leadership</td>
                                                <td className="py-4 px-5 border-r border-gray-200">High</td>
                                                <td className="py-4 px-5">Needed for team handling</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="bg-[#244f68] rounded-xl p-8 md:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden text-left mb-8">
                                    <div className="flex flex-col z-10 w-full sm:w-[60%] lg:w-[70%]">
                                        <h3 className="text-white text-[20px] md:text-[22px] font-normal leading-relaxed mb-6">
                                            Flexible learning, global opportunities — learn from anywhere.
                                        </h3>
                                        <button className="bg-white text-[#1a2e4a] w-fit px-6 py-2.5 rounded shadow text-[14px] font-bold hover:bg-gray-50 transition-colors">
                                            See Details
                                        </button>
                                    </div>
                                    <div className="w-[180px] h-[180px] relative z-10 shrink-0 hidden sm:block">
                                        <Image src="/assets/123.png" fill className="object-contain" alt="Learn" onError={(e) => { (e.currentTarget as HTMLImageElement).src = "/assets/logo.png" }} />
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-8">
                                <h2 className="text-[20px] md:text-[22px] font-bold text-[#1a2e4a] mb-2">
                                    Eligibility for Online MBA in Marketing-
                                </h2>
                                <p className="text-[14px] text-gray-700 leading-relaxed mb-4">
                                    Eligibility for an online MBA in marketing remains simple and accessible for most degree holders.
                                </p>
                                <p className="text-[14px] font-bold text-[#1a2e4a] mb-3">
                                    General Eligibility Criteria
                                </p>
                                <ul className="flex flex-col gap-3 mb-4">
                                    <li className="flex items-center gap-3 text-[14px] text-gray-700 font-medium">
                                        <div className="w-5 h-5 rounded-full bg-green-500 text-white flex items-center justify-center shrink-0">
                                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                        </div>
                                        Bachelor's degree from a recognized institution
                                    </li>
                                    <li className="flex items-center gap-3 text-[14px] text-gray-700 font-medium">
                                        <div className="w-5 h-5 rounded-full bg-green-500 text-white flex items-center justify-center shrink-0">
                                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                        </div>
                                        English communication ability
                                    </li>
                                    <li className="flex items-center gap-3 text-[14px] text-gray-700 font-medium">
                                        <div className="w-5 h-5 rounded-full bg-green-500 text-white flex items-center justify-center shrink-0">
                                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                        </div>
                                        Basic understanding of business subjects
                                    </li>
                                    <li className="flex items-center gap-3 text-[14px] text-gray-700 font-medium">
                                        <div className="w-5 h-5 rounded-full bg-green-500 text-white flex items-center justify-center shrink-0">
                                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                        </div>
                                        Optional work experience for some universities
                                    </li>
                                </ul>
                                <p className="text-[14px] text-gray-700 leading-relaxed">
                                    These requirements support the demand for marketing manager qualifications across business sectors.
                                </p>
                            </div>

                            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-8">
                                <h2 className="text-[20px] md:text-[22px] font-bold text-[#1a2e4a] mb-2">
                                    Conclusion-
                                </h2>
                                <p className="text-[14px] text-gray-700 leading-relaxed text-justify">
                                    The demand for skilled marketing managers is rising across many industries. An <strong>Online MBA in Marketing</strong> builds practical skills and supports better career growth. The program covers brand strategy, digital marketing, and market research in a flexible format. Most universities offer strong programs and industry-recognized degrees. These features help candidates build a clear <strong>marketing manager career path</strong> after an MBA. The field offers stable growth, strong salaries, and diverse opportunities. <strong>An Online MBA in Marketing</strong> remains a reliable option for long-term career development.
                                </p>
                            </div>

                            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-8">
                                <h2 className="text-[20px] md:text-[22px] font-bold text-[#1a2e4a] mb-6">
                                    Frequently Asked Questions about Online MBA-
                                </h2>
                                <div className="flex flex-col gap-3">
                                    <details className="group border border-gray-200 rounded-lg bg-white overflow-hidden" open>
                                        <summary className="flex justify-between items-center p-4 cursor-pointer list-none text-[14px] text-gray-800 font-medium">
                                            1. What qualifications are needed to become a marketing manager?
                                            <span className="text-blue-500 group-open:rotate-180 transition-transform duration-300 group-open:text-blue-600">
                                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                            </span>
                                        </summary>
                                        <div className="px-4 pb-4 text-[13.5px] text-gray-700 leading-relaxed border-t border-gray-50 pt-3">
                                            A marketing manager role needs a bachelor's degree in any stream. An Online MBA in Marketing adds strong management skills. Basic marketing knowledge and project exposure also support the role.
                                        </div>
                                    </details>

                                    <details className="group border border-gray-200 rounded-lg bg-white overflow-hidden">
                                        <summary className="flex justify-between items-center p-4 cursor-pointer list-none text-[14px] text-gray-800 font-medium">
                                            2. Is an Online MBA in Marketing enough to become a marketing manager?
                                            <span className="text-gray-500 group-open:rotate-180 transition-transform duration-300">
                                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                            </span>
                                        </summary>
                                        <div className="px-4 pb-4 text-[13.5px] text-gray-700 leading-relaxed border-t border-gray-50 pt-3">
                                            Yes, an online MBA provides the necessary management and business skills required to excel in a marketing manager position.
                                        </div>
                                    </details>

                                    <details className="group border border-gray-200 rounded-lg bg-white overflow-hidden">
                                        <summary className="flex justify-between items-center p-4 cursor-pointer list-none text-[14px] text-gray-800 font-medium">
                                            3. Is an Online MBA in Marketing enough to become a marketing manager?
                                            <span className="text-gray-500 group-open:rotate-180 transition-transform duration-300">
                                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                            </span>
                                        </summary>
                                        <div className="px-4 pb-4 text-[13.5px] text-gray-700 leading-relaxed border-t border-gray-50 pt-3">
                                            Yes, it is widely accepted by employers and provides the same standard of education as a regular MBA program.
                                        </div>
                                    </details>

                                    <details className="group border border-gray-200 rounded-lg bg-white overflow-hidden">
                                        <summary className="flex justify-between items-center p-4 cursor-pointer list-none text-[14px] text-gray-800 font-medium">
                                            4. Is an Online MBA in Marketing enough to become a marketing manager?
                                            <span className="text-gray-500 group-open:rotate-180 transition-transform duration-300">
                                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                            </span>
                                        </summary>
                                        <div className="px-4 pb-4 text-[13.5px] text-gray-700 leading-relaxed border-t border-gray-50 pt-3">
                                            Yes, the curriculum is designed to equip you with the practical knowledge to manage teams and market products effectively.
                                        </div>
                                    </details>

                                    <details className="group border border-gray-200 rounded-lg bg-white overflow-hidden">
                                        <summary className="flex justify-between items-center p-4 cursor-pointer list-none text-[14px] text-gray-800 font-medium">
                                            5. Is an Online MBA in Marketing enough to become a marketing manager?
                                            <span className="text-gray-500 group-open:rotate-180 transition-transform duration-300">
                                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                            </span>
                                        </summary>
                                        <div className="px-4 pb-4 text-[13.5px] text-gray-700 leading-relaxed border-t border-gray-50 pt-3">
                                            Yes, many top executives hold an online degree as it demonstrates time management and a commitment to continuous learning.
                                        </div>
                                    </details>
                                </div>

                                <div className="flex justify-center mt-6">
                                    <button className="flex items-center gap-2 border border-[#1a2e4a] text-[#1a2e4a] px-6 py-2 rounded-md font-medium text-[14px] hover:bg-gray-50 transition-colors">
                                        View more
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="w-full lg:w-[320px] xl:w-[350px] shrink-0 flex flex-col gap-6">

                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col relative text-center">
                            <div className="bg-[#3b597c] text-white py-3 font-semibold text-[15px]">
                                Lorem ipsum
                            </div>
                            <div className="p-6">
                                <p className="text-[13px] text-gray-700 leading-relaxed mb-6">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                </p>
                                <button className="bg-[#1a2e4a] text-white px-6 py-2.5 rounded-md font-bold text-[14px] shadow hover:bg-[#111e30] transition-colors">
                                    Apply now
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 mt-2">
                            <h3 className="text-[18px] font-bold text-[#1a2e4a]">Related Articles-</h3>

                            {[1, 2, 3].map((item) => (
                                <div key={item} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col relative group cursor-pointer">
                                    <div className="w-full h-[120px] bg-gray-100 relative">
                                        <Image src="/assets/blog.png" fill alt="Article" className="object-cover opacity-80 group-hover:opacity-100 transition-opacity" onError={(e) => { (e.currentTarget as HTMLImageElement).src = "/assets/logo.png" }} />
                                    </div>
                                    <div className="p-4 flex flex-col bg-white z-10">
                                        <h4 className="text-[13px] font-medium text-blue-500 group-hover:underline leading-snug mb-2">
                                            Top 5 online Universities in India 2025: Ranks, Courses &...
                                        </h4>
                                        <span className="text-[11px] text-gray-400 flex items-center gap-1 font-medium">
                                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                            23 Dec, 2025
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                            <h3 className="bg-gray-50 px-5 py-4 text-[15px] font-bold text-[#1a2e4a] border-b border-gray-200 uppercase tracking-wide flex items-center gap-2">
                                <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg>
                                Categories
                            </h3>
                            <div className="flex flex-col p-2">
                                {[
                                    { name: "Management", count: 18 },
                                    { name: "Cyber Security", count: 1 },
                                    { name: "Data Science", count: 8 },
                                    { name: "Technology", count: 12 },
                                    { name: "Marketing", count: 6 },
                                    { name: "Healthcare", count: 4 }
                                ].map((cat, i) => (
                                    <Link key={i} href="#" className="flex justify-between items-center px-4 py-2.5 hover:bg-gray-50 rounded-lg group transition-colors">
                                        <span className="text-[14px] font-medium text-gray-700 group-hover:text-blue-600 transition-colors">{cat.name}</span>
                                        <span className="text-[12px] font-bold text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">({cat.count})</span>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                            <h3 className="bg-gray-50 px-5 py-4 text-[15px] font-bold text-[#1a2e4a] border-b border-gray-200 uppercase tracking-wide flex items-center gap-2">
                                <svg className="w-4 h-4 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                                Top Degree Courses
                            </h3>
                            <div className="flex flex-col p-4 gap-4">
                                {[
                                    { title: "Online MBA", duration: "2 Years", icon: "briefcase" },
                                    { title: "Online MCA", duration: "2 Years", icon: "desktop-computer" },
                                    { title: "Online BBA", duration: "3 Years", icon: "chart-bar" },
                                    { title: "Online BCA", duration: "3 Years", icon: "code" }
                                ].map((course, i) => (
                                    <div key={i} className="flex gap-3 items-center p-3 border border-gray-100 rounded-lg hover:border-blue-200 hover:shadow-sm transition-all cursor-pointer group bg-gray-50/50">
                                        <div className="w-10 h-10 rounded bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                                        </div>
                                        <div className="flex flex-col">
                                            <h4 className="font-bold text-[14px] text-[#1a2e4a] group-hover:text-blue-600 transition-colors">{course.title}</h4>
                                            <span className="text-[11px] text-gray-500 font-medium tracking-wide uppercase">{course.duration} Duration</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                            <h3 className="bg-gray-50 px-5 py-4 text-[15px] font-bold text-[#1a2e4a] border-b border-gray-200 uppercase tracking-wide flex items-center gap-2">
                                <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2" /></svg>
                                Latest Blog Posts
                            </h3>
                            <div className="flex flex-col p-4 gap-4">
                                {[
                                    { title: "Is Online MBA Worth It in 2025?", date: "Nov 4, 2024", img: "/assets/blog.png" },
                                    { title: "Top 10 Emerging Technologies to learn", date: "Oct 28, 2024", img: "/assets/blog.png" },
                                    { title: "How to Choose the Right Specialization", date: "Oct 15, 2024", img: "/assets/blog.png" }
                                ].map((post, i) => (
                                    <div key={i} className="flex gap-3 hover:bg-gray-50 p-2 -mx-2 rounded-lg transition-colors cursor-pointer group">
                                        <div className="w-16 h-16 rounded overflow-hidden shrink-0 border border-gray-200">
                                            <Image src={post.img} width={64} height={64} alt={post.title} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300" onError={(e) => { (e.currentTarget as HTMLImageElement).src = "/assets/logo.png" }} />
                                        </div>
                                        <div className="flex flex-col justify-center">
                                            <h4 className="font-bold text-[13px] text-[#1a2e4a] mb-1 leading-snug group-hover:text-blue-600 transition-colors line-clamp-2">{post.title}</h4>
                                            <span className="text-[11px] text-gray-500 flex items-center gap-1 font-medium">
                                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                                {post.date}
                                            </span>
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
