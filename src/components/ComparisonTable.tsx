"use client";

import Image from "next/image";

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

/* ─── Static data ─────────────────────────────────────── */
const RECRUITERS: string[] = [
  "/assets/tech.png",
  "/assets/cog.png",
  "/assets/apolo.png",
  "/assets/tech.png",
  "/assets/apolo.png",
  "/assets/cog.png",
  "/assets/tech.png",
  "/assets/apolo.png",
  "/assets/cog.png",
  "/assets/apolo.png",
  "/assets/tech.png",
];

interface RowData { label: string; v1: string; v2: string }

const INSTITUTE_ROWS: RowData[] = [
  { label: "College Type-", v1: "Private", v2: "Private" },
  { label: "Established Year-", v1: "2008", v2: "2008" },
  { label: "Total Students-", v1: "21205", v2: "21205" },
  { label: "Courses Offered-", v1: "19", v2: "19" },
  { label: "Location Type-", v1: "Urban", v2: "Urban" },
  { label: "Affiliated University-", v1: "Autonomous", v2: "Autonomous" },
];

const PLACEMENT_ROWS: RowData[] = [
  { label: "Average Package-", v1: "6.86 LPA", v2: "9.54 LPA" },
  { label: "Highest Package-", v1: "20 LPA", v2: "34.4 LPA" },
];

const RANKING_ROWS: RowData[] = [
  { label: "NIRF Rank-", v1: "#34", v2: "#35" },
  { label: "Accreditations-", v1: "NAAC Grade A+, UGC,DRF, AICTE", v2: "NAAC Grade A+, UGC,DRF, AICTE" },
];

/* ─── Helpers ─────────────────────────────────────────── */

function SectionBanner({ title }: { title: string }) {
  return (
    <div
      className="text-center font-bold text-[#111827] text-[18px] sm:text-[24px] py-[10px] tracking-wide border-b border-gray-200"
      style={{ backgroundColor: "#e9ecf0" }}
    >
      {title}
    </div>
  );
}

/** One table row: two cells separated by a vertical border.
 *  Each cell: label (small gray left) + value (bold right-aligned right). */
function TableRow({ row }: { row: RowData }) {
  // Removes the trailing dash from labels like "College Type-"
  const cleanLabel = row.label.replace(/-$/, "");

  // Applying Segoe UI via inline style for consistency
  const segoeStyle = {
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
  };

  return (
    <div
      className="flex bg-white border-b border-gray-100 last:border-b-0"
      style={segoeStyle}
    >
      {/* Left Cell (College 1) */}
      <div className="flex-1 flex flex-col sm:flex-row items-start sm:items-center justify-center sm:justify-between px-3 sm:px-5 py-3 border-r border-gray-200 gap-1 sm:gap-0">
        <span className="text-[12px] sm:text-[14px] text-gray-500 font-normal order-2 sm:order-1 leading-tight sm:leading-normal">
          {cleanLabel}
        </span>
        <span className="text-[13px] sm:text-[14px] font-bold text-[#111827] order-1 sm:order-2 leading-tight sm:leading-normal">{row.v1}</span>
      </div>

      {/* Right Cell (College 2) */}
      <div className="flex-1 flex flex-col sm:flex-row items-start sm:items-center justify-center sm:justify-between px-3 sm:px-5 py-3 gap-1 sm:gap-0">
        <span className="text-[12px] sm:text-[14px] text-gray-500 font-normal order-2 sm:order-1 leading-tight sm:leading-normal">
          {cleanLabel}
        </span>
        <span className="text-[13px] sm:text-[14px] font-bold text-[#111827] order-1 sm:order-2 leading-tight sm:leading-normal">{row.v2}</span>
      </div>
    </div>
  );
}

/* ─── Main export ─────────────────────────────────────── */

export default function ComparisonTable({
  college1,
  college2,
}: ComparisonTableProps) {

  return (
    <div className="w-full">
      {/* ── Institute Information ── */}
      <div className="mb-4 border border-gray-200 overflow-hidden">
        <SectionBanner title="Institute Information" />
        {INSTITUTE_ROWS.map((row, i) => (
          <TableRow key={row.label} row={row} />
        ))}
      </div>

      {/* ── Placements ── */}
      <div className="mb-4 border border-gray-200 overflow-hidden">
        <SectionBanner title="Placements" />
        {PLACEMENT_ROWS.map((row, i) => (
          <TableRow key={row.label} row={row} />
        ))}
      </div>

      {/* ── Top Recruiters ── */}
      <div className="mb-4 border border-gray-200 overflow-hidden">
        <SectionBanner title="Top Recruiters" />
        <div className="flex bg-white flex-row">
          {/* col 1 */}
          <div className="flex-1 px-2 sm:px-4 py-3 sm:py-4 border-r border-gray-200">
            <div className="flex flex-wrap gap-[4px] sm:gap-[6px] justify-center sm:justify-start">
              {RECRUITERS.map((src, i) => (
                <div key={i} className="w-[30px] h-[28px] sm:w-[38px] sm:h-[36px] bg-white border border-gray-200 rounded flex items-center justify-center overflow-hidden p-[2px] sm:p-[3px]">
                  <img src={src} alt="" className="w-full h-full object-contain" />
                </div>
              ))}
            </div>
          </div>
          {/* col 2 */}
          <div className="flex-1 px-2 sm:px-4 py-3 sm:py-4">
            <div className="flex flex-wrap gap-[4px] sm:gap-[6px] justify-center sm:justify-start">
              {RECRUITERS.slice(0, 8).map((src, i) => (
                <div key={i} className="w-[30px] h-[28px] sm:w-[38px] sm:h-[36px] bg-white border border-gray-200 rounded flex items-center justify-center overflow-hidden p-[2px] sm:p-[3px]">
                  <img src={src} alt="" className="w-full h-full object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Rankings & Accreditations ── */}
      <div className="mb-4 border border-gray-200 overflow-hidden">
        <SectionBanner title="Rankings & Accreditations" />
        {RANKING_ROWS.map((row, i) => (
          <TableRow key={row.label} row={row} />
        ))}
      </div>

      {/* ── Fee Range ── */}
      <div className="mb-5 border border-gray-200 overflow-hidden">
        <SectionBanner title="Fee Range" />
        <div className="flex bg-white flex-row">
          {/* left */}
          <div className="flex-1 flex flex-col px-3 sm:px-4 py-3 border-r border-gray-200 gap-0.5 sm:gap-0.5 min-w-0 items-center sm:items-start text-center sm:text-left">
            <span className="text-[10px] sm:text-[12px] text-gray-500 whitespace-nowrap overflow-hidden text-ellipsis order-2 sm:order-1 leading-tight sm:leading-normal">Total Fee Range (Approx.)</span>
            <span className="text-[12px] sm:text-[13px] font-bold text-[#111827] order-1 sm:order-2 leading-tight sm:leading-normal">₹31,180 – ₹1,00,000</span>
          </div>
          {/* right */}
          <div className="flex-1 flex flex-col px-3 sm:px-4 py-3 gap-0.5 sm:gap-0.5 min-w-0 items-center sm:items-start text-center sm:text-left">
            <span className="text-[10px] sm:text-[12px] text-gray-500 whitespace-nowrap overflow-hidden text-ellipsis order-2 sm:order-1 leading-tight sm:leading-normal">Average Package (Approx.)</span>
            <span className="text-[12px] sm:text-[13px] font-bold text-[#111827] order-1 sm:order-2 leading-tight sm:leading-normal">₹31,180 – ₹1,25,000</span>
          </div>
        </div>
      </div>

      {/* ── Shortlist Buttons ── */}
      <div className="flex gap-2 sm:gap-4 mb-4 mt-6 items-center px-0 sm:px-4">
        <div className="flex-1 flex justify-center w-full">
          <button
            className="w-full sm:w-[300px] py-2 sm:py-2.5 text-white font-semibold text-[13px] sm:text-[14px] rounded-[6px] sm:rounded-md hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#113654" }}
          >
            Shortlist
          </button>
        </div>
        <div className="flex-1 flex justify-center w-full">
          <button
            className="w-full sm:w-[300px] py-2 sm:py-2.5 text-white font-semibold text-[13px] sm:text-[14px] rounded-[6px] sm:rounded-md hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#f29339" }}
          >
            Shortlist
          </button>
        </div>
      </div>

    </div>
  );
}
