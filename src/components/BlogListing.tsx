"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const CATEGORIES = ["All", "Engineering", "Medical", "Design", "Law", "Science", "Nursing"];

const FEATURED_BLOG = {
    title: "How to Become a Marketing Manager with a Specialization in Online MBA (Marketing)",
    desc: "Marketing roles are growing fast in India because every business needs a stronger customer reach. Many learners now search for an online MBA in Marketing to secure a stable marketing career. The marketing field offers this...",
    date: "12 Oct, 2024",
    readTime: "4 Mins Read",
    author: "Yogita Sharma",
    authorImg: "/assets/p.png", // placeholder
    img: "/assets/blog.png",  // updated image
};

const BLOGS = Array(9).fill({
    title: "How to Become a Marketing Manager with a Specialization in Online MBA (Marketing)...",
    date: "12 Oct, 2024",
    readTime: "4 min Read",
    author: "Yogita Sharma",
    authorImg: "/assets/p.png", // placeholder
    img: "/assets/blog.png",  // updated image
});

const EXAMS = [
    { name: "CAT 2025", desc: "An Online MBA includes a 2-year postgraduate degree course. It deals with..." },
    { name: "JEE Main 2025", desc: "An Online BBA includes a 3-year undergraduate degree course. It deals with..." },
    { name: "NEET 2025", desc: "An Online MCA includes a 2-year postgraduate degree course. It deals with..." },
    { name: "GATE 2025", desc: "An Online M.Tech includes a 2-year postgraduate degree course. It deals with..." },
];

const COLLEGES = [
    {
        name: "Avinashilingam Institute for Home Science and Higher Education",
        loc: "Coimbatore, Tamil Nadu",
        img: "/assets/amity.png",
    },
    {
        name: "Amity School of Distance Education",
        loc: "Noida, Uttar Pradesh",
        img: "/assets/amity.png",
    },
    {
        name: "Amrita University, Bengaluru",
        loc: "Bengaluru, Karnataka",
        img: "/assets/amity.png",
    },
    {
        name: "Amrita University, Coimbatore",
        loc: "Coimbatore, Tamil Nadu",
        img: "/assets/amity.png",
    },
];

const COURSES = [
    { name: "Online MBA degree course", desc: "An Online MBA includes a 2-year postgraduate degree course. It deals with..." },
    { name: "Online BBA degree course", desc: "An Online BBA includes a 3-year undergraduate degree course. It deals with..." },
    { name: "Online MCA degree course", desc: "An Online MCA includes a 2-year postgraduate degree course. It deals with..." },
    { name: "Online BCA degree course", desc: "An Online BCA includes a 3-year undergraduate degree course. It deals with..." },
];

export default function BlogListing() {
    const [activeCat, setActiveCat] = useState("All");

    return (
        <div className="bg-[#f8f9fa] min-h-screen pb-16 pt-10">
            <div className="max-w-[1240px] mx-auto px-4 lg:px-6 flex flex-col gap-10">

                <div className="bg-white p-6 md:p-8 rounded-xl flex flex-col gap-2 relative shadow-sm overflow-hidden mb-2">
                    <div className="absolute top-0 right-0 p-4 opacity-5">
                        <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24"><path d="M12 14l9-5-9-5-9 5 9 5z" /></svg>
                    </div>
                    <p className="text-[12px] font-bold text-blue-500 uppercase tracking-widest">Global Degree Mart</p>
                    <h1 className="text-[28px] md:text-[32px] font-extrabold text-[#1a2e4a]">
                        <span className="text-orange-500">DegreeFYD</span> Blogs & Articles-
                    </h1>
                    <p className="text-[13px] text-gray-500 max-w-4xl relative z-10">
                        Disclaimer: The content published on this blog is for informational purposes only. Course data, figures, examples, or statements may be approximate, simplified, or subject to change, and we strictly recommend you to individually verify or confirm prior to taking any actions entirely relying on such given information.
                    </p>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row overflow-hidden relative group">
                    <button className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center shadow-md z-10 text-gray-400 hover:text-blue-600 transition-colors">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    <button className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center shadow-md z-10 text-gray-400 hover:text-blue-600 transition-colors">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </button>

                    <div className="w-full md:w-[45%] lg:w-[40%] h-[240px] md:h-auto relative shrink-0">
                        <Image src={FEATURED_BLOG.img} alt="Featured" fill className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#1a2e4a]/90"></div>
                    </div>

                    <div className="p-6 md:p-8 flex flex-col justify-center flex-1 min-w-0">
                        <div className="text-[12px] text-gray-400 font-medium mb-3 flex items-center gap-2">
                            <span>{FEATURED_BLOG.date}</span>
                            <span>|</span>
                            <span>{FEATURED_BLOG.readTime}</span>
                        </div>
                        <h2 className="text-[20px] md:text-[24px] font-bold text-[#1a2e4a] leading-tight mb-3 hover:text-blue-600 cursor-pointer transition-colors">
                            <Link href="/?view=blog-detail">{FEATURED_BLOG.title}</Link>
                        </h2>
                        <p className="text-[14px] text-gray-500 leading-relaxed mb-6 line-clamp-3">
                            {FEATURED_BLOG.desc}
                        </p>
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-gray-100 overflow-hidden relative">
                                <Image src={FEATURED_BLOG.authorImg} alt={FEATURED_BLOG.author} fill className="object-cover" onError={(e) => { (e.currentTarget as HTMLImageElement).src = "/assets/logo.png"; }} />
                            </div>
                            <span className="text-[13px] font-bold text-gray-700">{FEATURED_BLOG.author}</span>
                        </div>
                    </div>

                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10">
                        <span className="w-4 h-1.5 bg-blue-600 rounded-full"></span>
                        <span className="w-1.5 h-1.5 bg-gray-300 rounded-full"></span>
                        <span className="w-1.5 h-1.5 bg-gray-300 rounded-full"></span>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <h2 className="text-[18px] font-bold text-[#1a2e4a]">Explore blogs by Category-</h2>
                    <div className="flex items-center gap-2 flex-wrap">
                        {CATEGORIES.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCat(cat)}
                                className={`px-5 py-2 text-[13px] font-bold rounded-md border transition-all ${activeCat === cat
                                    ? "bg-[#1a2e4a] text-white border-[#1a2e4a]"
                                    : "bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                    <div className="relative w-full mt-2">
                        <svg className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        <input
                            type="text"
                            placeholder="Search blogs..."
                            className="w-full bg-white border border-gray-200 rounded-lg pl-11 pr-4 py-3.5 text-[14px] focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all shadow-sm"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {BLOGS.map((blog, i) => (
                        <div key={i} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all group flex flex-col cursor-pointer">
                            <div className="h-[180px] w-full relative overflow-hidden bg-[#1a2e4a]">
                                <Image src="/assets/blog.png" alt={blog.title} fill className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="p-5 flex flex-col flex-1">
                                <h3 className="text-[15px] font-extrabold text-[#1a2e4a] leading-snug mb-4 group-hover:text-blue-600 transition-colors line-clamp-2">
                                    <Link href="/?view=blog-detail">{blog.title}</Link>
                                </h3>
                                <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-4">
                                    <div className="flex items-center gap-2">
                                        <div className="w-7 h-7 rounded-full bg-gray-100 overflow-hidden relative border border-gray-200">
                                            <Image src={blog.authorImg} alt={blog.author} fill className="object-cover" onError={(e) => { (e.currentTarget as HTMLImageElement).src = "/assets/logo.png"; }} />
                                        </div>
                                        <span className="text-[12px] font-bold text-gray-700">{blog.author}</span>
                                    </div>
                                    <span className="text-[11px] text-gray-400">{blog.date} | {blog.readTime}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex items-center justify-center gap-1.5 mt-8 border-b border-gray-200 pb-12">
                    <button className="w-8 h-8 rounded border border-gray-200 bg-white text-gray-400 flex items-center justify-center hover:bg-gray-50 text-[13px]">&lt;</button>
                    <button className="w-8 h-8 rounded bg-[#1a2e4a] text-white font-bold flex items-center justify-center text-[13px]">1</button>
                    <button className="w-8 h-8 rounded border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 flex items-center justify-center text-[13px]">2</button>
                    <button className="w-8 h-8 rounded border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 flex items-center justify-center text-[13px]">3</button>
                    <button className="w-8 h-8 rounded border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 flex items-center justify-center text-[13px]">4</button>
                    <button className="w-8 h-8 rounded border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 flex items-center justify-center text-[13px]">5</button>
                    <span className="text-gray-400 px-1">...</span>
                    <button className="w-9 h-8 rounded border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 flex items-center justify-center text-[13px]">112</button>
                    <button className="w-9 h-8 rounded border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 flex items-center justify-center text-[13px]">113</button>
                    <button className="w-9 h-8 rounded border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 flex items-center justify-center text-[13px]">114</button>
                    <button className="px-3 h-8 rounded border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 flex items-center justify-center text-[13px] gap-1">Next &gt;</button>
                </div>

                <div className="flex flex-col gap-10 mt-6 bg-white -mx-4 lg:-mx-6 px-4 md:px-6 lg:px-8 py-10">

                    <div className="flex flex-col gap-5">
                        <div className="flex items-center justify-between">
                            <h2 className="text-[18px] font-bold text-[#1a2e4a]">Explore some popular exams-</h2>
                            <button className="text-[12px] font-bold text-blue-600 hover:underline">View All</button>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                            {EXAMS.map((exam, i) => (
                                <div key={i} className="border border-gray-200 p-4 rounded-xl hover:shadow-md transition-shadow bg-white flex flex-col gap-2">
                                    <h3 className="text-[14px] font-bold text-blue-600 underline cursor-pointer">{exam.name}</h3>
                                    <p className="text-[12px] text-gray-500 line-clamp-2 leading-relaxed">{exam.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-5">
                        <div className="flex items-center justify-between">
                            <h2 className="text-[18px] font-bold text-[#1a2e4a]">Explore Colleges-</h2>
                            <button className="text-[12px] font-bold text-blue-600 hover:underline">View All</button>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                            {COLLEGES.map((col, i) => (
                                <div key={i} className="border border-gray-200 rounded-xl hover:shadow-md transition-shadow bg-white overflow-hidden flex flex-col">
                                    <div className="h-[100px] w-full relative">
                                        <Image src={col.img} alt={col.name} fill className="object-cover" onError={(e) => { (e.currentTarget as HTMLImageElement).src = "/assets/logo.png"; }} />
                                    </div>
                                    <div className="p-4 flex flex-col gap-2 flex-1">
                                        <h3 className="text-[13px] font-bold text-blue-600 leading-tight underline cursor-pointer">{col.name}</h3>
                                        <p className="text-[11px] text-gray-500 mt-auto flex items-center gap-1">
                                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                            {col.loc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-5">
                        <div className="flex items-center justify-between">
                            <h2 className="text-[18px] font-bold text-[#1a2e4a]">Explore some courses which are best for you-</h2>
                            <button className="text-[12px] font-bold text-blue-600 hover:underline">View All</button>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                            {COURSES.map((course, i) => (
                                <div key={i} className="border border-gray-200 p-4 rounded-xl hover:shadow-md transition-shadow bg-white flex flex-col gap-2">
                                    <h3 className="text-[14px] font-bold text-blue-600 underline cursor-pointer">{course.name}</h3>
                                    <p className="text-[12px] text-gray-500 line-clamp-2 leading-relaxed">{course.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}
