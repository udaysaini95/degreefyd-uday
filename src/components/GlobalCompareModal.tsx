"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { College, CollegeModal } from "@/components/CollegeComparator";

export default function GlobalCompareModal({ onClose }: { onClose: () => void }) {
    const [college1, setCollege1] = useState<College | null>(null);
    const [college2, setCollege2] = useState<College | null>(null);
    const [modalFor, setModalFor] = useState<1 | 2 | null>(null);
    const router = useRouter();

    const handleSelect = (college: College) => {
        if (modalFor === 1) setCollege1(college);
        else if (modalFor === 2) setCollege2(college);
        setModalFor(null);
    };

    const handleCompare = () => {
        // Navigate to compare page, passing the college IDs via query parameters.
        // We will update CollegeComparator.tsx to read these if provided.
        const url = `/?view=compare&c1=${college1?.id}&c2=${college2?.id}&compare=true`;
        router.push(url);
        onClose();
    };

    const bothSelected = college1 !== null && college2 !== null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 overflow-y-auto">
            {modalFor !== null && (
                <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
                    <CollegeModal
                        onSelect={handleSelect}
                        onClose={() => setModalFor(null)}
                    />
                </div>
            )}

            {/* The Main Modal */}
            <div className={`bg-white rounded-xl shadow-2xl w-full max-w-[650px] overflow-hidden relative m-4 ${modalFor !== null ? "hidden" : "block"}`}>
                <div className="flex items-center justify-between p-4 px-6 border-b border-gray-100">
                    <h2 className="text-[14px] font-bold text-[#1a2e4a]">
                        Select 2 colleges to Compare
                    </h2>
                    <button onClick={onClose} className="p-1 border border-gray-200 rounded hover:bg-gray-50 flex items-center justify-center shrink-0">
                        <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className="p-6 md:px-10 md:py-8 flex flex-col items-center">
                    <div className="flex flex-col sm:flex-row gap-6 relative items-center justify-center w-full mb-8">
                        {/* College 1 */}
                        <div className="flex-1 w-full sm:max-w-[260px] h-[190px]">
                            {college1 ? (
                                <ModalFilledCollegeCard college={college1} onEdit={() => setModalFor(1)} />
                            ) : (
                                <ModalEmptyCollegeCard onAdd={() => setModalFor(1)} />
                            )}
                        </div>

                        {/* VS badge */}
                        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 flex w-8 h-8 rounded-full items-center justify-center shadow-sm border-[2px] border-white bg-[#FF8C00]">
                            <span className="text-white font-bold text-[11px]">Vs</span>
                        </div>

                        {/* College 2 */}
                        <div className="flex-1 w-full sm:max-w-[260px] h-[190px]">
                            {college2 ? (
                                <ModalFilledCollegeCard college={college2} onEdit={() => setModalFor(2)} />
                            ) : (
                                <ModalEmptyCollegeCard onAdd={() => setModalFor(2)} />
                            )}
                        </div>
                    </div>

                    <button
                        onClick={handleCompare}
                        disabled={!bothSelected}
                        className={`font-semibold px-8 py-2.5 rounded-md flex items-center gap-1.5 transition-all text-[13px] ${bothSelected ? "bg-[#113654] text-white hover:bg-[#0D2A43]" : "bg-[#c8cfd5] text-white cursor-not-allowed"}`}
                    >
                        Compare
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

function ModalEmptyCollegeCard({ onAdd }: { onAdd: () => void }) {
    return (
        <div
            onClick={onAdd}
            className="w-full h-full flex flex-col items-center justify-center border border-dashed border-[#d1d5db] rounded-lg cursor-pointer hover:bg-gray-50 transition-colors bg-white gap-2"
        >
            <div className="w-9 h-9 rounded-full border border-[#1a2e4a] text-[#1a2e4a] flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
            </div>
            <span className="text-[13px] font-semibold text-[#1a2e4a]">Add College</span>
        </div>
    );
}

function ModalFilledCollegeCard({ college, onEdit }: { college: College, onEdit: () => void }) {
    return (
        <div className="w-full h-full flex flex-col items-center p-5 border border-gray-200 rounded-lg bg-white shadow-[0_2px_8px_-4px_rgba(0,0,0,0.05)]">
            <div className="w-[100px] h-[50px] border border-gray-100 rounded-md flex items-center justify-center p-1.5 mb-3 bg-white">
                <div className="relative w-full h-full">
                    <img
                        src={college.logo}
                        alt={college.name}
                        className="w-full h-full object-contain"
                        onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
                    />
                </div>
            </div>

            <div className="flex flex-col items-center gap-1 w-full px-2 mb-auto">
                <h3 className="text-center font-bold text-[#1a2e4a] text-[13px] leading-tight line-clamp-2 h-8">
                    {college.name}
                </h3>
                <div className="flex items-center gap-1 text-gray-500 text-[11px]">
                    <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="truncate">{college.location}</span>
                </div>
            </div>

            <button
                onClick={onEdit}
                className="w-full mt-4 py-1.5 border border-[#8e9caf] text-[#1a2e4a] rounded-[4px] text-[12px] font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-1.5"
            >
                Edit
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
            </button>
        </div>
    );
}
