"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ComparisonTable from "@/components/ComparisonTable";
import PopularComparisons from "@/components/PopularComparisons";

export interface College {
  id: number;
  name: string;
  location: string;
  logo: string;
}

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

const PinIcon = () => (
  <svg
    className="w-3.5 h-3.5 text-gray-400 flex-shrink-0"
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

export function FilledCollegeCard({
  college,
  onEdit
}: {
  college: College;
  onEdit: () => void;
}) {
  return (
    <div className="flex flex-col justify-between p-2.5 sm:p-5 w-full h-full bg-white gap-3 border border-gray-100 sm:border-none rounded-xl sm:rounded-none">
      <div className="flex flex-col w-full gap-3 mt-1 sm:mt-0">
        <div className="w-full sm:w-[125px] flex items-center mx-auto justify-center bg-white border border-gray-200 rounded-sm  h-[74px] flex-shrink-0">
          <div className="relative w-full sm:w-[125px] h-[40px] px-2 mx-auto">
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

        <div className="flex flex-col gap-1 w-full sm:w-[125px] mx-auto items-start sm:items-center text-left sm:text-center mt-1 sm:mt-0 px-1 sm:px-0">
          <h3 className="font-bold text-[#111827] text-[12px] sm:text-[13px] leading-snug line-clamp-2">
            {college.name}
          </h3>

          <div className="flex items-center justify-start sm:justify-center gap-1 mt-0.5">
            <PinIcon />
            <span className="text-gray-500 text-[10px] sm:text-[11px] leading-tight">
              {college.location}
            </span>
          </div>
        </div>
      </div>

      <button
        onClick={onEdit}
        className="w-full sm:w-[205px] lg:w-full mx-auto py-2 sm:py-2 border border-[#8e9caf] text-[#113654] rounded-md sm:rounded-[6px] text-[12px] sm:text-[13px] font-medium hover:bg-gray-50 transition-all duration-200 flex items-center justify-center gap-1.5 flex-shrink-0 mb-1 sm:mb-0"
      >
        Edit
        <svg
          className="w-3.5 h-3.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
          />
        </svg>
      </button>
    </div>
  );
}

export function EmptyCollegeCard({ onAdd }: { onAdd: () => void }) {
  return (
    <div className="flex flex-col w-full h-full p-2.5 sm:p-5 bg-white sm:bg-transparent justify-between gap-3 sm:gap-4 rounded-xl sm:rounded-none border-none sm:border-none shadow-none sm:shadow-none">
      <div
        onClick={onAdd}
        className="w-full flex items-center justify-center rounded-[10px] sm:rounded-sm cursor-pointer transition-colors sm:hover:bg-gray-50 duration-200 flex-1 min-h-[140px] sm:min-h-[140px] relative mt-1 sm:mt-0"
        style={{
          border: "1.5px dashed #cbd5e1"
        }}
      >
        <div className="flex items-center justify-center w-8 h-8 sm:w-8 sm:h-8 rounded-full border border-gray-200 text-[#cbd5e1] sm:text-gray-300 bg-white shadow-sm absolute sm:relative">
          <svg className="w-4 h-4 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
          </svg>
        </div>
      </div>

      <button
        onClick={onAdd}
        className="w-full sm:w-[90%] lg:w-full mx-0 sm:mx-auto lg:mx-0 py-2.5 sm:py-2.5 text-white font-medium sm:font-semibold text-[13px] sm:text-[13px] rounded-[6px] sm:rounded-md flex items-center justify-center gap-1.5 hover:opacity-90 transition-opacity duration-200 flex-shrink-0 mb-1 sm:mb-0"
        style={{ backgroundColor: "#113654" }}
      >
        Add College <span className="text-[17px] sm:text-[16px] leading-none mb-[1.5px] font-normal">+</span>
      </button>
    </div>
  );
}


export const allColleges: College[] = [
  {
    id: 1,
    name: "Anna Distance Education",
    location: "Phagwara, Punjab",
    logo: "/assets/anna.png",
  },
  {
    id: 2,
    name: "Amrita University Online",
    location: "Phagwara, Punjab",
    logo: "/assets/amrita.png",
  },
  {
    id: 3,
    name: "Sastra University Online",
    location: "Phagwara, Punjab",
    logo: "/assets/sastra.png",
  },
  {
    id: 4,
    name: "Chandigarh University (CU) Online",
    location: "Phagwara, Punjab",
    logo: "/assets/cu.png",
  },
  {
    id: 5,
    name: "NMIMS Online Courses & Admissions 2026",
    location: "Mumbai, Maharashtra",
    logo: "/assets/NMIMS.png",
  },
];

export function CollegeModal({
  onSelect,
  onClose,
}: {
  onSelect: (college: College) => void;
  onClose: () => void;
}) {
  const [search, setSearch] = useState("");
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const filtered = allColleges.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  const selectedCollege = allColleges.find((c) => c.id === selectedId) ?? null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl w-full max-w-md mx-0 sm:mx-4 overflow-hidden flex flex-col max-h-[90vh] sm:max-h-[85vh]">
        <div className="flex items-center justify-between px-5 sm:px-6 pt-5 pb-4">
          <h3 className="text-[16px] sm:text-[17px] font-bold text-[#1a2e4a]">
            Select a College
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors text-gray-500"
          >
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="px-6 pb-3">
          <div className="flex items-center gap-3 border border-gray-200 rounded-xl px-4 py-2.5 bg-white focus-within:border-blue-400 transition-colors">
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
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
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

        <div
          className="overflow-y-auto flex-1 px-4 pb-2"
          style={{ maxHeight: "320px" }}
        >
          {filtered.map((college) => {
            const isSelected = college.id === selectedId;
            return (
              <button
                key={college.id}
                type="button"
                onClick={() => setSelectedId(college.id)}
                className="w-full flex items-center gap-4 px-4 py-3 rounded-xl mb-1 transition-all text-left"
                style={{
                  border: isSelected
                    ? "1.5px solid #0D3B59"
                    : "1px solid #e5e7eb",
                  backgroundColor: "white",
                }}
              >
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
                        (
                          e.currentTarget as HTMLImageElement
                        ).style.display = "none";
                      }}
                    />
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-[#1a2e4a] text-sm leading-snug truncate">
                    {college.name}
                  </p>
                  <p className="text-gray-400 text-xs flex items-center gap-1 mt-0.5">
                    <svg
                      className="w-3 h-3 flex-shrink-0"
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
                    {college.location}
                  </p>
                </div>
              </button>
            );
          })}
          {filtered.length === 0 && (
            <p className="text-center text-gray-400 py-8 text-sm">
              No colleges found
            </p>
          )}
        </div>

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
            style={{ backgroundColor: "#0D3B59" }}
          >
            Add Selection
          </button>
        </div>
      </div>
    </div>
  );
}

export default function CollegeComparator({
  searchParams
}: {
  searchParams?: { [key: string]: string | string[] | undefined }
} = {}) {
  const defaultC1 = searchParams?.c1 ? allColleges.find(c => c.id === Number(searchParams.c1)) || null : null;
  const defaultC2 = searchParams?.c2 ? allColleges.find(c => c.id === Number(searchParams.c2)) || null : null;
  const defaultCompare = searchParams?.compare === 'true';

  const [college1, setCollege1] = useState<College | null>(defaultC1);
  const [college2, setCollege2] = useState<College | null>(defaultC2);
  const [modalFor, setModalFor] = useState<1 | 2 | null>(null);
  const [isComparing, setIsComparing] = useState(defaultCompare);

  const handleSelect = (college: College) => {
    if (modalFor === 1) setCollege1(college);
    else if (modalFor === 2) setCollege2(college);
    setModalFor(null);
  };

  const bothSelected = college1 !== null && college2 !== null;
  const isComparingView = bothSelected && isComparing;

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f4f7f9" }}>
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

        {/* Page heading */}
        <div className="mb-6">
          {isComparingView ? (
            <>
              <h1 className="text-[24px] lg:text-[28px] font-extrabold mb-2 leading-tight">
                <span style={{ color: "#1a2e4a" }}>{college1!.name} </span>
                <span style={{ color: "#FF8C00" }}>Vs </span>
                <span style={{ color: "#1a2e4a" }}>{college2!.name}</span>
              </h1>
              <p className=" font-segoe text-gray-600 text-[13px] lg:text-[16px] max-w-7xl leading-relaxed">
                Select any two colleges from the &quot;Add College&quot;
                section below to begin your comparison. Once selected, you can
                evaluate them side by side based on important factors such as
                fees, key highlights, courses offered, rankings, approvals,
                placements, and more.
              </p>
            </>
          ) : (
            <>
              <h1 className="text-[28px] lg:text-[32px] font-extrabold mb-2 leading-tight">
                <span style={{ color: "#FF8C00" }}>Compare </span>
                <span style={{ color: "#1a2e4a" }}>
                  Top Colleges in India-
                </span>
              </h1>
              <p className=" font-segoe text-gray-600 text-[13px] lg:text-[16px] max-w-7xl leading-relaxed">
                Select any two colleges from the &quot;Add College&quot;
                section below to begin your comparison. Once selected, you can
                evaluate them side by side based on important factors such as
                fees, key highlights, courses offered, rankings, approvals,
                placements, and more.
              </p>
            </>
          )}
        </div>

        {/* Main 2-col layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-6 items-start">
          {/* Left col */}
          <div className="flex flex-col gap-6 min-w-0 w-full px-4 lg:px-0">
            {/* College selector card wrapper */}
            <div className="bg-transparent lg:bg-white lg:border lg:border-gray-200 lg:rounded-xl lg:shadow-sm lg:p-6 overflow-visible w-full min-h-[260px] relative px-0">
              <div className="flex flex-row gap-4 sm:gap-6 relative items-stretch h-full">
                {/* College 1 */}
                <div className="flex-1 min-w-0 flex lg:border lg:border-gray-200 lg:rounded-lg lg:bg-white flex-col h-full overflow-hidden lg:overflow-visible">
                  {college1 ? (
                    <FilledCollegeCard
                      college={college1}
                      onEdit={() => setModalFor(1)}
                    />
                  ) : (
                    <EmptyCollegeCard onAdd={() => setModalFor(1)} />
                  )}
                </div>

                {/* VS badge */}
                <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 flex w-7 h-7 sm:w-9 sm:h-9 rounded-full items-center justify-center shadow-sm border-[2px] sm:border-[3px] border-white ring-1 ring-gray-100 bg-[#f29339]">
                  <span className="text-white font-bold text-[10px] sm:text-[12px]">
                    Vs
                  </span>
                </div>

                {/* College 2 */}
                <div className="flex-1 min-w-0 flex lg:border lg:border-gray-200 lg:rounded-lg lg:bg-white flex-col h-full overflow-hidden lg:overflow-visible">
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

              {/* Compare Button (Shown only when not comparing yet) */}
              {!isComparingView && bothSelected && (
                <div className="mt-5 sm:mt-6 flex justify-center w-full">
                  <button
                    onClick={() => setIsComparing(true)}
                    className="flex flex-row items-center justify-center gap-1.5 w-full sm:w-auto px-6 py-3 sm:py-2 text-white font-medium rounded-lg hover:opacity-90 transition-opacity text-[15px] sm:text-[13px]"
                    style={{ backgroundColor: "#113654" }}
                  >
                    Compare
                    <svg
                      className="w-4 h-4 text-white"
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

              {/* Comparison table */}
              {isComparingView && college1 && college2 && (
                <div className="mt-6">
                  <ComparisonTable
                    college1={college1}
                    college2={college2}
                    onEdit={(slot) => setModalFor(slot)}
                  />
                </div>
              )}
            </div>

            {/* Expert Connect Banner - Shown below the main blocks */}
            <div
              className="mt-6 sm:mt-0 -mx-6 sm:mx-0 rounded-none sm:rounded-lg px-6 sm:px-8 py-8 sm:py-7 flex items-center justify-between overflow-hidden relative"
              style={{ backgroundColor: "#284f67" }}
            >
              <div className="flex flex-col gap-4 sm:gap-5 z-10 w-[60%] sm:w-full max-w-md">
                <h3 className="text-white text-[13.5px] sm:text-[21px] font-medium leading-[1.6] tracking-wide">
                  Still Confused...? Let&apos;s Connect With
                  <br className="block sm:hidden" /> Our Experts.
                </h3>
                <button className="bg-white text-[#254F6A] font-semibold sm:font-bold px-4 sm:px-5 py-2 sm:py-2.5 rounded-md w-fit hover:bg-gray-100 transition-colors text-[13px] shadow-sm mt-1 sm:mt-0">
                  Connect Now
                </button>
              </div>
              <div className="absolute right-[-10px] bottom-0 w-[160px] h-[145px] sm:w-[220px] sm:h-[180px] z-10">
                <Image
                  src="/assets/3d.png"
                  alt="Expert advisor"
                  fill
                  className="object-contain object-bottom scale-[1.10] sm:scale-110 origin-bottom"
                />
              </div>
            </div>

            {/* Popular Comparisons & FAQ */}
            {isComparingView && <PopularComparisons />}
            {!isComparingView && <PopularComparisons />}
          </div>

          {/* Right sidebar: Explore Popular colleges */}
          <div className="w-full lg:w-[280px] flex-shrink-0 lg:sticky lg:top-20 lg:self-start">
            <div className="bg-white rounded-2xl shadow-sm p-5">
              <h2 className="text-[#1a2e4a] font-bold text-[15px] mb-4">
                Explore Some Popular colleges-
              </h2>

              <div className="flex flex-col gap-4">
                {popularColleges.map((college) => (
                  <div
                    key={college.id}
                    className="border border-gray-100 rounded-xl overflow-hidden hover:shadow-md transition-shadow duration-200 cursor-pointer"
                  >
                    <div className="relative w-full h-[120px] bg-gray-100">
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

                    <div className="p-3">
                      <Link
                        href="#"
                        className="font-semibold text-[#1a2e4a] text-[13px] hover:text-blue-600 leading-snug block mb-1 transition-colors"
                      >
                        {college.name}
                      </Link>
                      <div className="flex items-center gap-1">
                        <PinIcon />
                        <span className="text-gray-400 text-[11px]">
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
