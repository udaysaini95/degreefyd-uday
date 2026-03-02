"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ComparisonTable from "@/components/ComparisonTable";
import PopularComparisons from "@/components/PopularComparisons";

// Types
interface College {
    id: number;
    name: string;
    location: string;
    logo: string;
}

// Sample popular colleges for sidebar
const popularColleges: College[] = [
    {
        id: 1,
        name: "Alagappa University's Directorate of Distance Education",
        location: "Karaikudi, Tamil Nadu",
        logo: "/assets/all.png",
    },
    {
        id: 2,
        name: "Amity School of Distance Education",
        location: "Noida, New Delhi",
        logo: "/assets/amity.png",
    },
    {
        id: 3,
        name: "Amity School of Distance Education",
        location: "Noida, New Delhi",
        logo: "/assets/amity.png",
    },
];

// Pin Icon
const PinIcon = () => (
    <svg
        className="w-4 h-4 text-gray-400 flex-shrink-0"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
    </svg>
);

// Edit Icon
const EditIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
        />
    </svg>
);

// Filled College Card
function FilledCollegeCard({
    college,
    onEdit,
}: {
    college: College;
    onEdit: () => void;
}) {
    return (
        <div className="flex flex-col items-center gap-2 sm:gap-3 p-3 sm:p-5 w-full h-full">
            {/* Logo Box — taller on desktop, visible on mobile */}
            <div className="w-full flex items-center justify-center bg-white border border-gray-200 rounded-xl p-2 sm:p-3 h-[100px] sm:h-[130px] flex-shrink-0">
                <div className="relative w-16 h-16 sm:w-24 sm:h-24">
                    <Image
                        src={college.logo}
                        alt={college.name}
                        fill
                        className="object-contain"
                        onError={(e) => {
                            (e.target as HTMLImageElement).style.display = "none";
                        }}
                    />
                </div>
            </div>

            {/* Middle: name + location */}
            <div className="flex flex-col items-center gap-1 sm:gap-2 flex-1 w-full">
                {/* College Name */}
                <h3
                    className="text-center font-bold text-[#1a2e4a] text-[12px] sm:text-[15px] leading-snug w-full"
                    style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                    }}
                >
                    {college.name}
                </h3>

                {/* Location */}
                <div className="flex items-center gap-0.5 sm:gap-1">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-gray-500 text-[10px] sm:text-xs text-center leading-tight">{college.location}</span>
                </div>
            </div>

            {/* Edit Button */}
            <button
                onClick={onEdit}
                className="flex items-center gap-1.5 px-3 sm:px-6 py-1.5 sm:py-2 border border-[#1a2e4a] text-[#1a2e4a] rounded-md text-[11px] sm:text-sm font-medium hover:bg-[#1a2e4a] hover:text-white transition-all duration-200 w-full justify-center flex-shrink-0"
            >
                Edit
                <EditIcon />
            </button>
        </div>
    );
}

// Empty College Card
function EmptyCollegeCard({ onAdd }: { onAdd: () => void }) {
    return (
        <div className="flex flex-col w-full h-full p-2 sm:p-3 gap-2 sm:gap-3">
            {/* Dashed placeholder — fixed height to match FilledCard logo box */}
            <div
                onClick={onAdd}
                className="w-full flex items-center justify-center rounded-xl cursor-pointer hover:bg-gray-50 transition-colors duration-200"
                style={{
                    border: "2px dashed #c8d0dc",
                    backgroundColor: "#f8fafc",
                    minHeight: "100px",
                    flex: 1,
                }}
            >
                <div className="flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 rounded-full border-2 border-gray-300 text-gray-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                </div>
            </div>

            {/* Add College Button */}
            <button
                onClick={onAdd}
                className="w-full py-1.5 sm:py-2.5 text-white font-semibold text-[11px] sm:text-[14px] rounded-md flex items-center justify-center gap-1 hover:opacity-90 transition-opacity duration-200 flex-shrink-0"
                style={{ backgroundColor: "#1a2e4a" }}
            >
                Add College
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
            </button>
        </div>
    );
}

// College Selection Modal
function CollegeModal({
    onSelect,
    onClose,
}: {
    onSelect: (college: College) => void;
    onClose: () => void;
}) {
    const [search, setSearch] = useState("");
    const [selectedId, setSelectedId] = useState<number | null>(null);

    const allColleges: College[] = [
        { id: 1, name: "Anna Distance Education", location: "Phagwara, Punjab", logo: "/assets/anna.png" },
        { id: 2, name: "Amrita University Online", location: "Phagwara, Punjab", logo: "/assets/amrita.png" },
        { id: 3, name: "Sastra University Online", location: "Phagwara, Punjab", logo: "/assets/sastra.png" },
        { id: 4, name: "Chandigarh University (CU) Online", location: "Phagwara, Punjab", logo: "/assets/cu.png" },
        { id: 5, name: "NMIMS Online Courses & Admissions 2026", location: "Mumbai, Maharashtra", logo: "/assets/NMIMS.png" },
    ];

    const filtered = allColleges.filter((c) =>
        c.name.toLowerCase().includes(search.toLowerCase())
    );

    const selectedCollege = allColleges.find((c) => c.id === selectedId) ?? null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center"
            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 overflow-hidden flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between px-6 pt-5 pb-4">
                    <h3 className="text-[17px] font-bold text-[#1a2e4a]">Select another College</h3>
                    <button
                        type="button"
                        onClick={onClose}
                        className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors text-gray-500"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Search */}
                <div className="px-6 pb-3">
                    <div className="flex items-center gap-3 border border-gray-200 rounded-xl px-4 py-2.5 bg-white focus-within:border-blue-400 transition-colors">
                        <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <input
                            type="text"
                            placeholder="Search college..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="bg-transparent outline-none text-sm w-full text-gray-700 placeholder-gray-400"
                            autoFocus
                        />
                    </div>
                </div>

                {/* College List */}
                <div className="overflow-y-auto flex-1 px-4 pb-2" style={{ maxHeight: "320px" }}>
                    {filtered.map((college) => {
                        const isSelected = college.id === selectedId;
                        return (
                            <button
                                key={college.id}
                                type="button"
                                onClick={() => setSelectedId(college.id)}
                                className="w-full flex items-center gap-4 px-4 py-3 rounded-xl mb-1 transition-all text-left"
                                style={{
                                    border: isSelected ? "1.5px solid #1a2e4a" : "1.5px solid #e5e7eb",
                                    backgroundColor: isSelected ? "#f0f4ff" : "white",
                                }}
                            >
                                {/* Logo badge */}
                                <div
                                    className="flex-shrink-0 flex items-center justify-center rounded-lg overflow-hidden bg-white"
                                    style={{ width: 64, height: 40, border: "1px solid #e5e7eb" }}
                                >
                                    <div className="relative w-14 h-8">
                                        <Image
                                            src={college.logo}
                                            alt={college.name}
                                            fill
                                            className="object-contain"
                                            onError={(e) => {
                                                (e.currentTarget as HTMLImageElement).style.display = "none";
                                            }}
                                        />
                                    </div>
                                </div>

                                {/* Info */}
                                <div className="flex-1 min-w-0">
                                    <p className="font-semibold text-[#1a2e4a] text-sm leading-snug truncate">
                                        {college.name}
                                    </p>
                                    <p className="text-gray-400 text-xs flex items-center gap-1 mt-0.5">
                                        <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        {college.location}
                                    </p>
                                </div>
                            </button>
                        );
                    })}
                    {filtered.length === 0 && (
                        <p className="text-center text-gray-400 py-8 text-sm">No colleges found</p>
                    )}
                </div>

                {/* Add Selection Button */}
                <div className="px-4 pb-5 pt-3">
                    <button
                        type="button"
                        disabled={!selectedCollege}
                        onClick={() => {
                            if (selectedCollege) {
                                onSelect(selectedCollege);
                                onClose();
                            }
                        }}
                        className="w-full py-3.5 text-white font-bold text-sm rounded-xl transition-opacity disabled:opacity-40"
                        style={{ backgroundColor: "#1a2e4a" }}
                    >
                        Add Selection
                    </button>
                </div>
            </div>
        </div>
    );
}

// Main Exported Component
export default function CollegeComparator() {
    const [college1, setCollege1] = useState<College | null>({
        id: 1,
        name: "Anna Distance Education",
        location: "Phagwara, Punjab",
        logo: "/assets/anna.png",
    });
    const [college2, setCollege2] = useState<College | null>(null);
    const [modalFor, setModalFor] = useState<1 | 2 | null>(null);
    const [showComparison, setShowComparison] = useState(false);

    const handleSelect = (college: College) => {
        if (modalFor === 1) setCollege1(college);
        else if (modalFor === 2) setCollege2(college);
        setModalFor(null);
        // Reset comparison view when user changes a college
        setShowComparison(false);
    };

    const bothSelected = college1 !== null && college2 !== null;

    return (
        <div className="min-h-screen" style={{ backgroundColor: "#f4f7f9" }}>
            {/* Modal */}
            {modalFor !== null && (
                <CollegeModal
                    onSelect={handleSelect}
                    onClose={() => setModalFor(null)}
                />
            )}

            <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-6">
                {/* Breadcrumb */}
                <nav className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                    <Link href="/" className="hover:text-[#1a2e4a] transition-colors">
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                            />
                        </svg>
                    </Link>
                    <span className="text-gray-400">›</span>
                    <span className="text-[#1a2e4a] font-medium">Compare Colleges</span>
                </nav>

                {/* Hero Heading */}
                <div className="mb-8">
                    <h1 className="text-3xl lg:text-4xl font-extrabold mb-3 leading-tight">
                        <span style={{ color: "#FF8C00" }}>Compare </span>
                        <span style={{ color: "#1a2e4a" }}>Top Colleges in India</span>
                    </h1>
                    <p className="text-gray-600 text-sm lg:text-base max-w-3xl leading-relaxed">
                        Select any two colleges from the &quot;Add College&quot; section
                        below to begin your comparison. Once selected, you can evaluate
                        them side by side based on important factors such as fees, key
                        highlights, courses offered, rankings, approvals, placements, and
                        more.
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6 items-start">
                    {/* Left — Comparator */}
                    <div className="flex flex-col gap-4 min-w-0">
                        {/* Comparison Cards Container */}
                        <div className="bg-white rounded-2xl shadow-sm p-6 lg:p-8">
                            {/* Two Cards + Vs Badge */}
                            <div className="flex items-stretch gap-10 sm:gap-14 relative">
                                {/* College Card 1 */}
                                <div className="flex-1 min-w-0 border border-gray-200 rounded-xl overflow-hidden">
                                    {college1 ? (
                                        <FilledCollegeCard
                                            college={college1}
                                            onEdit={() => setModalFor(1)}
                                        />
                                    ) : (
                                        <EmptyCollegeCard onAdd={() => setModalFor(1)} />
                                    )}
                                </div>

                                {/* Vs Badge — absolutely centered on the logo box */}
                                <div
                                    className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 top-[62px] sm:top-[85px]"
                                >
                                    <div
                                        className="w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center shadow-md"
                                        style={{ backgroundColor: "#FF8C00" }}
                                    >
                                        <span className="text-white font-bold text-xs sm:text-sm">
                                            Vs
                                        </span>
                                    </div>
                                </div>

                                {/* College Card 2 */}
                                <div className="flex-1 min-w-0 border border-gray-200 rounded-xl overflow-hidden">
                                    {college2 ? (
                                        <FilledCollegeCard
                                            college={college2}
                                            onEdit={() => setModalFor(2)}
                                        />
                                    ) : (
                                        <EmptyCollegeCard onAdd={() => setModalFor(2)} />
                                    )}
                                </div>
                            </div>

                            {/* Compare Button — only shown when both selected */}
                            {bothSelected && (
                                <div className="mt-6 flex justify-center">
                                    <button
                                        onClick={() => setShowComparison(true)}
                                        className="px-10 py-3 text-white font-bold text-[16px] rounded-lg flex items-center gap-2 hover:opacity-90 transition-all duration-200 shadow-md"
                                        style={{ backgroundColor: "#1a2e4a" }}
                                    >
                                        Compare
                                        <svg
                                            className="w-5 h-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            )}

                            {/* Comparison Table — shown below cards after clicking Compare */}
                            {showComparison && college1 && college2 && (
                                <div className="mt-8 border-t border-gray-100 pt-6">
                                    <ComparisonTable
                                        college1={college1}
                                        college2={college2}
                                        onEdit={(slot) => {
                                            setShowComparison(false);
                                            setModalFor(slot);
                                        }}
                                    />
                                </div>
                            )}
                        </div>

                        {/* Expert CTA Banner — hide when comparison table is shown (it has its own CTA) */}
                        {!showComparison && (
                            <div
                                className="rounded-2xl p-6 lg:p-8 flex items-center justify-between gap-4 overflow-hidden relative"
                                style={{ backgroundColor: "#254F6A" }}
                            >
                                <div className="flex flex-col gap-4 z-10">
                                    <p className="text-white text-xl lg:text-2xl font-bold leading-snug max-w-xs">
                                        Not Sure about colleges.?{" "}
                                        <span className="font-semibold">
                                            Let&apos;s Connect with our Experts.
                                        </span>
                                    </p>
                                    <button className="bg-white text-[#1a3c5e] font-bold px-6 py-2.5 rounded-lg w-fit hover:bg-gray-100 transition-colors duration-200 text-sm">
                                        Connect Now
                                    </button>
                                </div>

                                {/* 3D Illustration */}
                                <div className="relative flex-shrink-0 w-36 h-32 lg:w-44 lg:h-40">
                                    <Image
                                        src="/assets/3d.png"
                                        alt="Expert advisor"
                                        fill
                                        className="object-contain object-bottom"
                                    />
                                </div>
                            </div>
                        )}

                        {/* Popular Comparisons + FAQ — renders in left column so sidebar stays sticky */}
                        <PopularComparisons />
                    </div>

                    {/* Right Sidebar — sticky, no internal scroll */}
                    <div className="w-full lg:w-[300px] flex-shrink-0 lg:sticky lg:top-20 lg:self-start">
                        <div className="bg-white rounded-2xl shadow-sm p-5">
                            <h2 className="text-[#1a2e4a] font-bold text-[17px] mb-4">
                                Explore Some Popular colleges-
                            </h2>

                            <div className="flex flex-col gap-4">
                                {popularColleges.map((college) => (
                                    <div
                                        key={college.id}
                                        className="border border-gray-100 rounded-xl overflow-hidden hover:shadow-md transition-shadow duration-200 cursor-pointer"
                                    >
                                        {/* College Image */}
                                        <div className="relative w-full h-[130px] bg-gray-100">
                                            {/* Fallback gradient — behind the image (z-0) */}
                                            <div
                                                className="absolute inset-0 flex items-center justify-center z-0"
                                                style={{
                                                    background:
                                                        "linear-gradient(135deg, #1a3c5e 0%, #2563eb 100%)",
                                                }}
                                            >
                                                <span className="text-white font-bold text-2xl opacity-30">
                                                    {college.name.charAt(0)}
                                                </span>
                                            </div>
                                            {/* Actual image — on top (z-10) */}
                                            <Image
                                                src={college.logo}
                                                alt={college.name}
                                                fill
                                                className="object-cover z-10"
                                                onError={(e) => {
                                                    (
                                                        e.currentTarget as HTMLImageElement
                                                    ).style.display = "none";
                                                }}
                                            />
                                        </div>

                                        {/* College Info */}
                                        <div className="p-3">
                                            <Link
                                                href="#"
                                                className="font-semibold text-[#1a2e4a] text-sm hover:text-blue-600 leading-snug block mb-1 transition-colors"
                                            >
                                                {college.name}
                                            </Link>
                                            <div className="flex items-center gap-1">
                                                <PinIcon />
                                                <span className="text-gray-400 text-xs">
                                                    {college.location}
                                                </span>
                                            </div>
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
