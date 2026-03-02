"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Types
interface CollegePair {
    college1: { name: string; location: string; logo: string };
    college2: { name: string; location: string; logo: string };
}

// Pin icon
const PinIcon = () => (
    <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

// Popular comparison pairs (2 groups matching the Figma)
const GROUPS: { heading: string; pairs: CollegePair[] }[] = [
    {
        heading: "Popular Comparison with Anna Distance Education-",
        pairs: [
            {
                college1: {
                    name: "Indira Gandhi National Open University",
                    location: "New Delhi, Delhi",
                    logo: "/assets/igu.png",
                },
                college2: {
                    name: "Lovely Professional University Online",
                    location: "New Delhi, Delhi",
                    logo: "/assets/lpu.png",
                },
            },
            {
                college1: {
                    name: "Indira Gandhi National Open University",
                    location: "New Delhi, Delhi",
                    logo: "/assets/igu.png",
                },
                college2: {
                    name: "Lovely Professional University Online",
                    location: "New Delhi, Delhi",
                    logo: "/assets/lpu.png",
                },
            },
            {
                college1: {
                    name: "Indira Gandhi National Open University",
                    location: "New Delhi, Delhi",
                    logo: "/assets/igu.png",
                },
                college2: {
                    name: "Lovely Professional University Online",
                    location: "New Delhi, Delhi",
                    logo: "/assets/lpu.png",
                },
            },
        ],
    },
    {
        heading: "Popular Comparison with CU Online-",
        pairs: [
            {
                college1: {
                    name: "Indira Gandhi National Open University",
                    location: "New Delhi, Delhi",
                    logo: "/assets/igu.png",
                },
                college2: {
                    name: "Lovely Professional University Online",
                    location: "New Delhi, Delhi",
                    logo: "/assets/lpu.png",
                },
            },
            {
                college1: {
                    name: "Indira Gandhi National Open University",
                    location: "New Delhi, Delhi",
                    logo: "/assets/igu.png",
                },
                college2: {
                    name: "Lovely Professional University Online",
                    location: "New Delhi, Delhi",
                    logo: "/assets/lpu.png",
                },
            },
        ],
    },
];

// FAQ data
const FAQ_ITEMS = [
    {
        q: "1. What programs does IGNOU offer?",
        a: "IGNOU offers a wide range of programs including undergraduate, postgraduate, diploma, and certificate courses across multiple disciplines such as arts, science, management, IT, and healthcare. Popular programs include BCA, MCA, MBA, B.Com, BA, M.A., and various professional certificate courses.",
    },
    {
        q: "2. Can working professionals pursue IGNOU programs?",
        a: "Yes, IGNOU programs are specifically designed for working professionals. Classes are conducted on weekends and through online resources, and the flexible structure allows students to study at their own pace. This makes it one of the most popular choices for distance education in India.",
    },
    {
        q: "3. Is an Online MBA in Marketing enough to become a marketing manager?",
        a: "An Online MBA in Marketing provides you with strong theoretical knowledge and practical skills in areas like brand management, digital marketing, consumer behavior, and market research. Combined with relevant work experience and internships, it can certainly qualify you for a marketing manager role at many companies.",
    },
    {
        q: "4. What is the difference between distance education and regular college?",
        a: "Distance education allows students to learn from home through study materials, online lectures, and periodic contact programs, without attending college daily. Regular college requires physical attendance. Distance education is typically more affordable, flexible, and ideal for those who cannot relocate or have work commitments.",
    },
    {
        q: "5. Are degrees from distance learning universities recognized by employers?",
        a: "Yes, degrees from UGC (University Grants Commission) approved distance learning universities are fully recognized by employers and government bodies across India. Universities like IGNOU, Amity, LPU Online, and others are accredited and their degrees carry the same value as regular mode degrees.",
    },
];

// ---- Single comparison card ----
function ComparisonCard({ pair }: { pair: CollegePair }) {
    return (
        <div
            className="flex-none bg-white border border-gray-100 rounded-2xl p-3 flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow"
            style={{ width: "calc(50% - 8px)" }}
        >
            {/* Logos row */}
            <div className="flex items-center gap-0">
                {/* College 1 logo */}
                <div className="flex-1 flex items-center justify-center bg-white border border-gray-200 rounded-xl h-[100px] relative">
                    <div className="relative w-16 h-16">
                        <Image
                            src={pair.college1.logo}
                            alt={pair.college1.name}
                            fill
                            className="object-contain"
                            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
                        />
                    </div>
                </div>

                {/* Vs badge */}
                <div className="flex-shrink-0 flex items-center justify-center w-9 z-10">
                    <div
                        className="w-7 h-7 rounded-full flex items-center justify-center shadow-sm"
                        style={{ backgroundColor: "#FF8C00" }}
                    >
                        <span className="text-white font-bold text-[9px]">Vs</span>
                    </div>
                </div>

                {/* College 2 logo */}
                <div className="flex-1 flex items-center justify-center bg-white border border-gray-200 rounded-xl h-[100px] relative">
                    <div className="relative w-16 h-16">
                        <Image
                            src={pair.college2.logo}
                            alt={pair.college2.name}
                            fill
                            className="object-contain"
                            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
                        />
                    </div>
                </div>
            </div>

            {/* Names + locations row */}
            <div className="flex gap-1">
                {/* College 1 info */}
                <div className="flex-1 min-w-0">
                    <p
                        className="text-[#1a2e4a] font-extrabold text-[11px] leading-tight"
                        style={{
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                        }}
                    >
                        {pair.college1.name}
                    </p>
                    <div className="flex items-center gap-0.5 mt-1 text-gray-400">
                        <PinIcon />
                        <span className="text-[9px] truncate">{pair.college1.location}</span>
                    </div>
                </div>
                {/* Spacer matching the Vs badge width */}
                <div className="w-9 flex-shrink-0" />
                {/* College 2 info */}
                <div className="flex-1 min-w-0">
                    <p
                        className="text-[#1a2e4a] font-extrabold text-[11px] leading-tight"
                        style={{
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                        }}
                    >
                        {pair.college2.name}
                    </p>
                    <div className="flex items-center gap-0.5 mt-1 text-gray-400">
                        <PinIcon />
                        <span className="text-[9px] truncate">{pair.college2.location}</span>
                    </div>
                </div>
            </div>

            {/* Compare button — centered, not full-width */}
            <div className="flex justify-center">
                <Link
                    href="#"
                    className="px-8 py-2 text-white font-bold text-xs rounded-lg flex items-center gap-1.5 hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: "#1a2e4a" }}
                >
                    Compare
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </Link>
            </div>
        </div>
    );
}

// ---- Horizontal carousel for a group ----
function ComparisonCarousel({ group }: { group: (typeof GROUPS)[0] }) {
    return (
        <div className="mb-8">
            <h2 className="text-[#1a2e4a] font-extrabold text-[17px] sm:text-[19px] mb-4">
                {group.heading}
            </h2>
            {/* Overflow hidden wrapper — ensures only 2 cards are visible */}
            <div className="overflow-hidden">
                <div
                    className="flex gap-4 overflow-x-auto pb-3"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                    {group.pairs.map((pair, i) => (
                        <ComparisonCard key={i} pair={pair} />
                    ))}
                </div>
            </div>
            {/* Pagination dots */}
            <div className="flex items-center justify-center gap-1.5 mt-3">
                {group.pairs.map((_, i) => (
                    <span
                        key={i}
                        className={`block rounded-full transition-all ${i === 0 ? "w-3 h-2 bg-gray-400" : "w-2 h-2 bg-gray-200"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}

// ---- FAQ Section ----
function FAQSection() {
    const [openIndex, setOpenIndex] = useState(-1);
    const [showAll, setShowAll] = useState(false);
    const visible = showAll ? FAQ_ITEMS : FAQ_ITEMS.slice(0, 5);

    return (
        <div className="mb-8" style={{ overflowAnchor: "none" }}>
            <h2 className="text-[#1a2e4a] font-extrabold text-[17px] sm:text-[19px] mb-4">
                Frequently Asked Questions-
            </h2>
            <div className="flex flex-col divide-y divide-gray-100 border border-gray-100 rounded-2xl overflow-hidden bg-white">
                {visible.map((item, i) => (
                    <div key={i}>
                        <button
                            type="button"
                            onClick={(e) => {
                                (e.currentTarget as HTMLButtonElement).blur();
                                setOpenIndex(openIndex === i ? -1 : i);
                            }}
                            className="w-full flex items-center justify-between px-4 py-3.5 text-left hover:bg-gray-50 transition-colors"
                        >
                            <span className="text-[#1a2e4a] font-semibold text-sm pr-4">{item.q}</span>
                            <svg
                                className={`w-4 h-4 flex-shrink-0 text-gray-400 transition-transform ${openIndex === i ? "rotate-180" : ""}`}
                                fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <div
                            className="overflow-hidden transition-all duration-300 ease-in-out"
                            style={{ maxHeight: openIndex === i ? "400px" : "0px" }}
                        >
                            {item.a && (
                                <div className="px-4 pb-4 pt-1">
                                    <p className="text-gray-500 text-sm leading-relaxed">{item.a}</p>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            {/* View more button */}
            <div className="flex justify-center mt-4">
                <button
                    onClick={() => setShowAll(!showAll)}
                    className="flex items-center gap-2 px-5 py-2 border border-gray-300 rounded-lg text-[#1a2e4a] font-semibold text-sm hover:bg-gray-50 transition-colors"
                >
                    {showAll ? "View less" : "View more"}
                    <svg
                        className={`w-4 h-4 transition-transform ${showAll ? "rotate-180" : ""}`}
                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
            </div>
        </div>
    );
}

// ---- Main export ----
export default function PopularComparisons() {
    return (
        <section className="pt-6 pb-8">
            {GROUPS.map((group, i) => (
                <ComparisonCarousel key={i} group={group} />
            ))}
            <FAQSection />
        </section>
    );
}
