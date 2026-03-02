"use client";

import Image from "next/image";
import Link from "next/link";

// Types
interface College {
    id: number;
    name: string;
    location: string;
    logo: string;
}

interface ComparisonTableProps {
    college1: College;
    college2: College;
    onEdit: (slot: 1 | 2) => void;
}

// ---------- Recruiter logos — fill in src with your own logo paths ----------
const RECRUITERS: { name: string; src: string }[] = [
    { name: "", src: "/assets/tech.png" },
    { name: "", src: "/assets/cog.png" },
    { name: "", src: "/assets/apolo.png" },
    { name: "", src: "/assets/tech.png" },
    { name: "", src: "/assets/apolo.png" },
    { name: "", src: "/assets/cog.png" },
];

// ---------- Comparison Data ----------
const getCollegeData = (college: College) => ({
    instituteInfo: {
        "College Type": "Private",
        "Established": "2008",
        "Total Students": "21205",
        "Courses Offered": "19",
        "Location Type": "Urban",
        "Affiliated University": "Autonomous",
    },
    placements: {
        "Avg. Package": "₹6.86 LPA",
        "Highest Package": "₹20 LPA",
    },
    rankings: {
        "NIRF Rank": "#34",
        "NAAC Grade": "A+",
        "UGC Recognised": "Yes",
        "AICTE Approved": "Yes",
    },
    feeRange: {
        "Total Fee (Approx.)": "₹31180 – ₹1,00,000",
    },
});

// ---------- Sub-components ----------

/** A grouping section with two value columns */
function ComparisonSection({
    title,
    rows,
    data1,
    data2,
}: {
    title: string;
    rows: string[];
    data1: Record<string, string>;
    data2: Record<string, string>;
}) {
    return (
        <div className="mb-4">
            <div
                className="text-center font-bold text-[#1a2e4a] text-[15px] py-2.5 rounded-t-xl"
                style={{ backgroundColor: "#e8eef4" }}
            >
                {title}
            </div>
            <div className="border border-gray-100 rounded-b-xl overflow-hidden">
                {rows.map((label, i) => (
                    <div key={label} className={`flex ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                        <div className="flex-1 px-4 py-3 border-r border-gray-100">
                            <p className="text-xs text-gray-400 mb-0.5">{label}</p>
                            <p className="text-sm font-semibold text-[#1a2e4a]">{data1[label] ?? "—"}</p>
                        </div>
                        <div className="flex-1 px-4 py-3">
                            <p className="text-xs text-gray-400 mb-0.5">{label}</p>
                            <p className="text-sm font-semibold text-[#1a2e4a]">{data2[label] ?? "—"}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

/** Top Recruiters — logo images with empty src for user to fill in */
function RecruitersSection() {
    return (
        <div className="mb-4">
            <div
                className="text-center font-bold text-[#1a2e4a] text-[15px] py-2.5 rounded-t-xl"
                style={{ backgroundColor: "#e8eef4" }}
            >
                Top Recruiters
            </div>
            <div className="border border-gray-100 rounded-b-xl overflow-hidden">
                <div className="flex bg-white">
                    {[RECRUITERS, RECRUITERS].map((list, side) => (
                        <div
                            key={side}
                            className={`flex-1 px-3 py-3 ${side === 0 ? "border-r border-gray-100" : ""}`}
                        >
                            <div className="flex flex-wrap gap-2">
                                {list.map((r) => (
                                    <div
                                        key={r.name}
                                        className="flex flex-col items-center gap-1"
                                        title={r.name}
                                    >
                                        {/* Logo tile — add your image path to src */}
                                        <div className="w-12 h-12 bg-white border border-gray-200 rounded-lg flex items-center justify-center overflow-hidden p-1 hover:shadow-sm transition-shadow">
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img
                                                src={r.src}
                                                alt={r.name}
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                        {/* Company name label */}
                                        <span className="text-[9px] text-gray-500 font-medium text-center leading-tight max-w-[48px] truncate">
                                            {r.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

// ---------- Main Component ----------
export default function ComparisonTable({ college1, college2, onEdit }: ComparisonTableProps) {
    const data1 = getCollegeData(college1);
    const data2 = getCollegeData(college2);

    return (
      <div className="w-full">
        {/* Title — "College1 Vs College2" heading */}
        <div className="mb-5">
          <h2 className="text-base sm:text-xl lg:text-2xl font-extrabold text-[#1a2e4a] mb-1 leading-snug">
            <span>{college1.name}</span>
            <span className="mx-2" style={{ color: "#FF8C00" }}>
              Vs
            </span>
            <span>{college2.name}</span>
          </h2>
          <p className="text-gray-500 text-sm">
            Evaluate them side by side based on fees, rankings, placements,
            courses, and more.
          </p>
        </div>

        {/* -------- Comparison Sections -------- */}

        {/* 1. Institute Information */}
        <ComparisonSection
          title="Institute Information"
          rows={Object.keys(data1.instituteInfo)}
          data1={data1.instituteInfo}
          data2={data2.instituteInfo}
        />

        {/* 2. Placements */}
        <ComparisonSection
          title="Placements"
          rows={Object.keys(data1.placements)}
          data1={data1.placements}
          data2={data2.placements}
        />

        {/* 3. Top Recruiters */}
        <RecruitersSection />

        {/* 4. Rankings & Accreditations */}
        <ComparisonSection
          title="Rankings & Accreditations"
          rows={Object.keys(data1.rankings)}
          data1={data1.rankings}
          data2={data2.rankings}
        />

        {/* 5. Fee Range */}
        <ComparisonSection
          title="Fee Range"
          rows={Object.keys(data1.feeRange)}
          data1={data1.feeRange}
          data2={data2.feeRange}
        />

        {/* Shortlist Buttons */}
        <div className="flex gap-3 mt-6">
          <button
            className="flex-1 py-3 text-white font-bold text-sm rounded-xl hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#1a2e4a" }}
          >
            Shortlist {college1.name.split(" ")[0]}
          </button>
          <button
            className="flex-1 py-3 text-white font-bold text-sm rounded-xl hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#FF8C00" }}
          >
            Shortlist {college2.name.split(" ")[0]}
          </button>
        </div>

        {/* Expert CTA Banner */}
        <div
          className="mt-6 rounded-2xl p-5 sm:p-6 flex items-center justify-between gap-4 overflow-hidden"
          style={{ backgroundColor: "#254F6A" }}
        >
          <div className="flex flex-col gap-3">
            <p className="text-white text-sm sm:text-base lg:text-lg font-bold leading-snug max-w-xs">
              Still not Sure about colleges?{" "}
              <span className="font-semibold">
                Let&apos;s Connect with our Experts.
              </span>
            </p>
            <button className="bg-white text-[#1a3c5e] font-bold px-5 py-2 rounded-lg w-fit hover:bg-gray-100 transition-colors text-sm">
              Connect Now
            </button>
          </div>
          <div className="flex-shrink-0 w-28 h-28 sm:w-36 sm:h-36">
            <div className="relative w-full h-full">
              <Image
                src="/assets/3d.png"
                alt="Expert advisor"
                fill
                className="object-contain object-bottom"
              />
            </div>
          </div>
        </div>
      </div>
    );
}
