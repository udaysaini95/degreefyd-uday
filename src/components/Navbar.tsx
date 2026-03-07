"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { Poppins, Inter } from "next/font/google";
import GlobalCompareModal from "./GlobalCompareModal";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
});

const navLinks = [
  { label: "Universities", href: "#" },
  { label: "Courses", href: "#" },
  { label: "More", href: "#" },
  { label: "Regular", href: "#" },
];

const UNIV_CATEGORIES = [
  { id: "location", label: "Universities by Location", desc: "Lorem ipsum" },
  { id: "degree", label: "Universities by Degree", desc: "Lorem ipsum" },
  { id: "popular", label: "Popular Universities", desc: "Lorem ipsum" },
  { id: "top", label: "Top Universities", desc: "Lorem ipsum" },
  { id: "compare", label: "Compare Colleges", desc: "Lorem ipsum" },
];

const DEGREE_LINKS = {
  online: [
    { label: "Online MBA Colleges", count: "202 Colleges" },
    { label: "Online BBA Colleges", count: "96 Colleges" },
    { label: "Online MCA Colleges", count: "60 Colleges" },
    { label: "Online BCA Colleges", count: "55 Colleges" },
    { label: "Online M.Com Colleges", count: "40 Colleges" },
    { label: "Online B.Com Colleges", count: "35 Colleges" },
  ],
  levels: [
    { label: "Post Graduate Colleges", count: "3,245 Colleges" },
    { label: "Graduation Colleges", count: "2,840 Colleges" },
    { label: "Ph.D Colleges", count: "1,120 Colleges" },
    { label: "Diploma Colleges", count: "890 Colleges" },
    { label: "Certification Courses", count: "450 Courses" },
  ],
  abroad: [
    { label: "MBA Abroad", count: "120 Colleges" },
    { label: "MS Abroad", count: "150 Colleges" },
    { label: "BBA Abroad", count: "80 Colleges" },
    { label: "B.Tech Abroad", count: "110 Colleges" },
  ],
};

const LOCATION_LINKS = [
  { label: "Chennai", img: "/assets/che.png" },
  { label: "Bangalore", img: "/assets/ban.png" },
  { label: "Delhi", img: "/assets/kol.png" },
  { label: "Hyderabad", img: "/assets/jai.png" },
  { label: "Mumbai", img: "/assets/ban.png" },
  { label: "Pune", img: "/assets/kol.png" },
  { label: "Ahmedabad", img: "/assets/ahem.png" },
  { label: "Noida", img: "/assets/che.png" },
  { label: "Jaipur", img: "/assets/jai.png" },
  { label: "Dehradun", img: "/assets/ban.png" },
  { label: "Coimbatore", img: "/assets/che.png" },
  { label: "Kolkata", img: "/assets/kol.png" },
];

const POPULAR_UNIV = [
  {
    name: "Lovely Professional University",
    location: "Jalandhar, Punjab",
    logo: "/assets/lpu.png",
  },
  {
    name: "Amity University Online",
    location: "Noida, UP",
    logo: "/assets/cu.png",
  },
  {
    name: "Chandigarh University",
    location: "Chandigarh",
    logo: "/assets/cu.png",
  },
  {
    name: "Sikkim Manipal Univ.",
    location: "Gangtok, Sikkim",
    logo: "/assets/lpu.png",
  },
  {
    name: "Jain University",
    location: "Bangalore, Karnataka",
    logo: "/assets/lpu.png",
  },
  {
    name: "UPES Online",
    location: "Dehradun, Uttarakhand",
    logo: "/assets/upes-logo.png",
  },
];

const POPULAR_UNIV_LIST = [
  "LPU Online",
  "CU Online",
  "Manipal Online",
  "Amity Online",
  "Sikkim Manipal Online",
  "VGU Online",
  "Jain Online",
  "NMIMS Online",
  "Mangalyaan Online",
  "Sharda Online",
  "Shoolini Online",
  "Symbiosis Online",
  "Mangalyaan Online",
  "Shoolini Online",
  "Symbiosis Online"
];

function BookOpenIcon() {
  return (
    <svg
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
      />
    </svg>
  );
}
function LibraryIcon() {
  return (
    <svg
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
      />
    </svg>
  );
}
function DocumentCheckIcon() {
  return (
    <svg
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}
function BadgeCheckIcon() {
  return (
    <svg
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
      />
    </svg>
  );
}
function LightBulbIcon() {
  return (
    <svg
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
      />
    </svg>
  );
}
function AcademicCapIcon() {
  return (
    <svg
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path d="M12 14l9-5-9-5-9 5 9 5z" />
      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
      />
    </svg>
  );
}

const COURSE_CATEGORIES = [
  { id: "ug", label: "UG", desc: "Lorem ipsum" },
  { id: "pg", label: "PG", desc: "Lorem ipsum" },
  { id: "diploma", label: "Diploma", desc: "Lorem ipsum" },
  { id: "certificate", label: "Certificate", desc: "Lorem ipsum" },
  { id: "phd", label: "Ph. D", desc: "Lorem ipsum" },
  { id: "popular", label: "Popular Courses", desc: "Lorem ipsum" },
];

const COURSE_LINKS = {
  ug: [
    { label: "Online BBA", duration: "3 Years" },
    { label: "Online MBA", duration: "2 Years" },
    { label: "Online BA.JMC", duration: "3 Years" },
    { label: "Online BA", duration: "3 Years" },
    { label: "Online PGDM", duration: "2 Years" },
    { label: "Online MA.JMC", duration: "2 Years" },
    { label: "Online BCA", duration: "3 Years" },
    { label: "Online MA", duration: "2 Years" },
    { label: "Online BBA + MBA", duration: "5 Years" },
    { label: "Online M.Com", duration: "2 Years" },
    { label: "Online BCA + MCA", duration: "5 Years" },
    { label: "Online B.Sc", duration: "3 Years" },
  ],
};

function UniversitiesMegaMenu({ closeMenu, onOpenCompare }: { closeMenu: () => void, onOpenCompare: () => void }) {
  const [activeTab, setActiveTab] = useState("location");
  const [locationView, setLocationView] = useState<"list" | "grid">("grid");
  const [degreeView, setDegreeView] = useState<"grid" | "list">("grid");

  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2  w-[1144px] bg-[#fafafa] rounded shadow-[0_15px_40px_-10px_rgba(0,0,0,0.1)] border border-gray-100 flex overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
      <div className="w-[300px] bg-white border-r border-gray-200 py-6 flex flex-col gap-0 shrink-0">
        <h3 className="text-[13px] font-bold text-gray-800 px-6 pb-2 mb-2 border-b border-gray-300">
          Discover Top Universities
        </h3>

        {UNIV_CATEGORIES.map((cat) => {
          const isActive = activeTab === cat.id;

          if (cat.id === "compare") {
            return (
              <button
                key={cat.id}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab(cat.id);
                  onOpenCompare();
                  closeMenu();
                }}
                onMouseEnter={() => setActiveTab(cat.id)}
                className={`w-full flex justify-between items-center px-6 py-3 transition-all text-left group ${isActive ? "bg-[#f0f4f8] border-l-2 border-[#1a3c5e]" : "hover:bg-gray-50 border-l-2 border-transparent"}`}
              >
                <div className="flex-1 min-w-0">
                  <div
                    className={`text-[13px] font-medium ${isActive ? "text-[#1a4b71]" : "text-gray-700 group-hover:text-gray-900"}`}
                  >
                    {cat.label}
                  </div>
                  <div
                    className={`text-[11px] mt-0.5 ${isActive ? "text-[#3B82B1]" : "text-[#3B82B1]"}`}
                  >
                    {cat.desc}
                  </div>
                </div>
                <svg
                  className={`w-3.5 h-3.5 shrink-0 transition-transform ${isActive ? "text-[#1a4b71] translate-x-1" : "text-gray-400"}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            );
          }

          return (
            <button
              key={cat.id}
              onMouseEnter={() => setActiveTab(cat.id)}
              onClick={() => setActiveTab(cat.id)}
              className={`w-full flex justify-between items-center px-6 py-3 transition-all text-left group ${isActive ? "bg-[#f0f4f8] border-l-2 border-[#1a3c5e]" : "hover:bg-gray-50 border-l-2 border-transparent"}`}
            >
              <div className="flex-1 min-w-0">
                <div
                  className={`text-[13px] font-medium ${isActive ? "text-[#1a4b71]" : "text-gray-700 group-hover:text-gray-900"}`}
                >
                  {cat.label}
                </div>
                <div
                  className={`text-[11px] mt-0.5 ${isActive ? "text-[#3B82B1]" : "text-[#3B82B1]"}`}
                >
                  {cat.desc}
                </div>
              </div>
              <svg
                className={`w-3.5 h-3.5 shrink-0 transition-transform ${isActive ? "text-[#1a4b71] translate-x-1" : "text-gray-400"}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          );
        })}
      </div>

      <div className="flex-1 p-6 bg-[#fafafa] max-h-[480px] overflow-y-auto">
        {activeTab === "location" && locationView === "list" && (
          <div className="flex flex-col h-full gap-5">
            <h4 className="font-bold text-[#1a2e4a] text-[15px] border-b border-gray-100 pb-2">
              Universities by Locations
            </h4>

            {/* The two columns style */}
            <div className="grid grid-cols-2 gap-8 lg:gap-12 mt-2">
              <div className="flex flex-col gap-3.5">
                <h5 className="text-[13px] font-bold text-[#0D3B59] mb-1">
                  Colleges by States
                </h5>
                <Link
                  href="/?view=colleges"
                  className="text-[12px] text-gray-600 hover:text-[#3B82B1]"
                  onClick={closeMenu}
                >
                  Colleges in Delhi
                </Link>
                <Link
                  href="/?view=colleges"
                  className="text-[12px] text-gray-600 hover:text-[#3B82B1]"
                  onClick={closeMenu}
                >
                  Colleges in Uttar Pradesh
                </Link>
                <Link
                  href="/?view=colleges"
                  className="text-[12px] text-gray-600 hover:text-[#3B82B1]"
                  onClick={closeMenu}
                >
                  Colleges in Rajasthan
                </Link>
                <Link
                  href="/?view=colleges"
                  className="text-[12px] text-gray-600 hover:text-[#3B82B1]"
                  onClick={closeMenu}
                >
                  Colleges in Madhya Pradesh
                </Link>
                <Link
                  href="/?view=colleges"
                  className="text-[12px] text-gray-600 hover:text-[#3B82B1]"
                  onClick={closeMenu}
                >
                  Colleges in Tamil Nadu
                </Link>
                <Link
                  href="/?view=colleges"
                  className="text-[12px] text-gray-600 hover:text-[#3B82B1]"
                  onClick={closeMenu}
                >
                  Colleges in Himachal pradesh
                </Link>
                <Link
                  href="/?view=colleges"
                  className="text-[12px] text-gray-600 hover:text-[#3B82B1]"
                  onClick={closeMenu}
                >
                  Colleges in Maharashtra
                </Link>

                <button
                  onClick={() => setLocationView("grid")}
                  className="text-[#3B82B1] text-[13px] font-medium mt-2 text-left hover:underline"
                >
                  View Less
                </button>
              </div>

              <div className="flex flex-col gap-3.5">
                <h5 className="text-[13px] font-bold text-[#0D3B59] mb-1">
                  Colleges by Cities
                </h5>
                <div className="grid grid-cols-2 gap-x-6 gap-y-3.5">
                  <Link
                    href="/?view=colleges"
                    className="text-[12px] text-gray-600 hover:text-[#3B82B1]"
                    onClick={closeMenu}
                  >
                    Bangalore
                  </Link>
                  <Link
                    href="/?view=colleges"
                    className="text-[12px] text-gray-600 hover:text-[#3B82B1]"
                    onClick={closeMenu}
                  >
                    Noida
                  </Link>
                  <Link
                    href="/?view=colleges"
                    className="text-[12px] text-gray-600 hover:text-[#3B82B1]"
                    onClick={closeMenu}
                  >
                    Delhi
                  </Link>
                  <Link
                    href="/?view=colleges"
                    className="text-[12px] text-gray-600 hover:text-[#3B82B1]"
                    onClick={closeMenu}
                  >
                    Dehradun
                  </Link>
                  <Link
                    href="/?view=colleges"
                    className="text-[12px] text-gray-600 hover:text-[#3B82B1]"
                    onClick={closeMenu}
                  >
                    Hyderabad
                  </Link>
                  <Link
                    href="/?view=colleges"
                    className="text-[12px] text-gray-600 hover:text-[#3B82B1]"
                    onClick={closeMenu}
                  >
                    Coimbatore
                  </Link>
                  <Link
                    href="/?view=colleges"
                    className="text-[12px] text-gray-600 hover:text-[#3B82B1]"
                    onClick={closeMenu}
                  >
                    Pune
                  </Link>
                  <Link
                    href="/?view=colleges"
                    className="text-[12px] text-gray-600 hover:text-[#3B82B1]"
                    onClick={closeMenu}
                  >
                    Kolkata
                  </Link>
                  <Link
                    href="/?view=colleges"
                    className="text-[12px] text-gray-600 hover:text-[#3B82B1]"
                    onClick={closeMenu}
                  >
                    Mumbai
                  </Link>
                  <Link
                    href="/?view=colleges"
                    className="text-[12px] text-gray-600 hover:text-[#3B82B1]"
                    onClick={closeMenu}
                  >
                    Chandigarh
                  </Link>
                  <Link
                    href="/?view=colleges"
                    className="text-[12px] text-gray-600 hover:text-[#3B82B1]"
                    onClick={closeMenu}
                  >
                    Ahmadabad
                  </Link>
                  <Link
                    href="/?view=colleges"
                    className="text-[12px] text-gray-600 hover:text-[#3B82B1]"
                    onClick={closeMenu}
                  >
                    Indore
                  </Link>
                  <Link
                    href="/?view=colleges"
                    className="text-[12px] text-gray-600 hover:text-[#3B82B1]"
                    onClick={closeMenu}
                  >
                    Jaipur
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "location" && locationView === "grid" && (
          <div className="flex flex-col h-full gap-5">
            <div className="grid grid-cols-6 gap-[16px]">
              {LOCATION_LINKS.map((loc, i) => (
                <Link
                  key={i}
                  href="/?view=colleges"
                  onClick={closeMenu}
                  className="group w-[117px] h-[95px] border border-gray-200 rounded-[8px] bg-white hover:border-[#3B82B1] hover:shadow-sm transition-all flex flex-col items-center pt-[8px] pb-[8px] px-[12px] gap-[4px]"
                >
                  <div className="p-0 w-full h-1 flex-1 relative flex items-center justify-center">
                    <Image
                      src={loc.img}
                      alt={loc.label}
                      fill
                      className="w-[100px] h-[74px] object-contain transition-transform duration-300 opacity-80 group-hover:opacity-100 group-hover:scale-105"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src =
                          "/assets/logo.png";
                      }}
                    />
                  </div>
                  <span className="text-gray-800 font-normal text-[14px] group-hover:text-[#1a3c5e] whitespace-nowrap leading-tight">
                    {loc.label}
                  </span>
                </Link>
              ))}
            </div>
            <div className="mt-1 flex justify-center py-0">
              <button
                onClick={() => setLocationView("list")}
                className="border border-gray-200 text-[#3B82B1] font-medium text-[12px] rounded px-4 py-2 hover:bg-blue-50 transition-colors"
              >
                View All Location
              </button>
            </div>
          </div>
        )}

        {activeTab === "degree" && degreeView === "grid" && (
          <div className="flex flex-col h-full gap-5">
            <div className="grid grid-cols-4 gap-4 mt-2">
              {[
                { title: "Online MBA", count: "20 Universities" },
                { title: "Online B.com+MBA", count: "10 Universities" },
                { title: "MCA", count: "20 Universities" },
                { title: "BCA", count: "13 Universities" },
                { title: "BA", count: "10 Universities" },
                { title: "Online Global MBA", count: "19 Universities" },
                { title: "Online MBA", count: "10 Universities" },
                { title: "Online MBA", count: "14 Universities" },
                { title: "Online BCA", count: "40 Universities" },
                { title: "Online MBA", count: "60 Universities" },
                { title: "Online MSc", count: "20 Universities" },
                { title: "Online BSc", count: "40 Universities" },
              ].map((item, i) => (
                <Link
                  key={i}
                  href="/?view=colleges"
                  onClick={closeMenu}
                  className="group flex flex-col justify-center border border-gray-200 rounded-[6px] bg-white hover:border-[#1a4b71] hover:shadow-sm transition-all p-3.5 px-4 gap-2.5 h-[80px]"
                >
                  <span className="text-[#202020] font-normal text-[13px] group-hover:text-[#1a4b71] tracking-tight">
                    {item.title}
                  </span>
                  <div className="flex items-center gap-1.5 bg-[#f4f6f8] px-2.5 py-[5px] rounded border border-gray-100/50 text-[#2C5282] text-[11px] font-medium w-full">
                    <svg
                      className="w-3.5 h-3.5 shrink-0 opacity-80"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                    {item.count}
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-1 flex justify-center py-0 pb-2">
              <button
                onClick={() => setDegreeView("list")}
                className="border border-gray-200 text-[#3B82B1] font-medium text-[13px] rounded px-5 py-2 hover:bg-[#f8fafc] transition-colors"
              >
                View All Universities
              </button>
            </div>
          </div>
        )}

        {activeTab === "degree" && degreeView === "list" && (
          <div className="flex flex-col h-full gap-5 animate-in fade-in slide-in-from-right-4 duration-300">
            <h4 className="font-bold text-[#1a2e4a] text-[15px] border-b border-gray-100 pb-2">
              Universities by Degree
            </h4>

            <div className="grid grid-cols-3 gap-8 lg:gap-12 mt-2">
              <div className="flex flex-col gap-4">
                <Link
                  href="/?view=colleges"
                  className="text-[13px] text-gray-700 hover:text-[#3B82B1] font-normal"
                  onClick={closeMenu}
                >
                  Online MBA Colleges
                </Link>
                <Link
                  href="/?view=colleges"
                  className="text-[13px] text-gray-700 hover:text-[#3B82B1] font-normal"
                  onClick={closeMenu}
                >
                  Online BA Colleges
                </Link>
                <Link
                  href="/?view=colleges"
                  className="text-[13px] text-gray-700 hover:text-[#3B82B1] font-normal"
                  onClick={closeMenu}
                >
                  Online BBA Colleges
                </Link>
                <Link
                  href="/?view=colleges"
                  className="text-[13px] text-gray-700 hover:text-[#3B82B1] font-normal"
                  onClick={closeMenu}
                >
                  Online BCA Colleges
                </Link>
                <Link
                  href="/?view=colleges"
                  className="text-[13px] text-gray-700 hover:text-[#3B82B1] font-normal"
                  onClick={closeMenu}
                >
                  Online BA Colleges
                </Link>
                <Link
                  href="/?view=colleges"
                  className="text-[13px] text-gray-700 hover:text-[#3B82B1] font-normal"
                  onClick={closeMenu}
                >
                  Online MA Colleges
                </Link>

                <button
                  onClick={() => setDegreeView("grid")}
                  className="text-[#3B82B1] text-[13px] font-medium mt-2 text-left hover:underline"
                >
                  View Less
                </button>
              </div>

              <div className="flex flex-col gap-4">
                <Link
                  href="/?view=colleges"
                  className="text-[13px] text-gray-700 hover:text-[#3B82B1] font-normal"
                  onClick={closeMenu}
                >
                  Online BBA Colleges
                </Link>
                <Link
                  href="/?view=colleges"
                  className="text-[13px] text-gray-700 hover:text-[#3B82B1] font-normal"
                  onClick={closeMenu}
                >
                  Online MCA Colleges
                </Link>
                <Link
                  href="/?view=colleges"
                  className="text-[13px] text-gray-700 hover:text-[#3B82B1] font-normal"
                  onClick={closeMenu}
                >
                  Online MA Colleges
                </Link>
                <Link
                  href="/?view=colleges"
                  className="text-[13px] text-gray-700 hover:text-[#3B82B1] font-normal"
                  onClick={closeMenu}
                >
                  Online BA Colleges
                </Link>
              </div>

              <div className="flex flex-col gap-4">
                <h5 className="text-[14px] font-bold text-[#0D3B59] mb-1">
                  Colleges by Level
                </h5>
                <Link
                  href="/?view=colleges"
                  className="text-[13px] text-gray-700 hover:text-[#3B82B1] font-normal"
                  onClick={closeMenu}
                >
                  Under Graduation Colleges
                </Link>
                <Link
                  href="/?view=colleges"
                  className="text-[13px] text-gray-700 hover:text-[#3B82B1] font-normal"
                  onClick={closeMenu}
                >
                  Post Graduation Colleges
                </Link>
                <Link
                  href="/?view=colleges"
                  className="text-[13px] text-gray-700 hover:text-[#3B82B1] font-normal"
                  onClick={closeMenu}
                >
                  Diploma Colleges
                </Link>
                <Link
                  href="/?view=colleges"
                  className="text-[13px] text-gray-700 hover:text-[#3B82B1] font-normal"
                  onClick={closeMenu}
                >
                  Certificate Colleges
                </Link>
                <Link
                  href="/?view=colleges"
                  className="text-[13px] text-gray-700 hover:text-[#3B82B1] font-normal"
                  onClick={closeMenu}
                >
                  Ph.D Colleges
                </Link>
              </div>
            </div>
          </div>
        )}

        {activeTab === "popular" && (
          <div className="flex flex-col gap-5">
            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <h4 className="font-bold text-[#1a2e4a] text-[16px]">
                Trending Now
              </h4>
              <Link
                href="#"
                className="text-[#3B82B1] text-[13px] font-bold hover:underline flex items-center gap-1"
                onClick={closeMenu}
              >
                View All Universities{" "}
                <span className="text-[10px]">&rarr;</span>
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {POPULAR_UNIV.map((univ, i) => (
                <Link
                  key={i}
                  href="#"
                  onClick={closeMenu}
                  className="group flex items-center gap-3 bg-gray-50/50 border border-gray-100 p-3 rounded-xl hover:bg-white hover:border-blue-100 hover:shadow-sm transition-all"
                >
                  <div className="w-12 h-12 bg-white border border-gray-100 rounded-lg flex items-center justify-center shrink-0 shadow-sm overflow-hidden relative p-1 group-hover:border-blue-100 transition-colors">
                    <Image
                      src={univ.logo}
                      alt={univ.name}
                      fill
                      className="object-contain p-1"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display =
                          "none";
                      }}
                    />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[13px] font-bold text-[#1a2e4a] group-hover:text-[#3B82B1] transition-colors truncate">
                      {univ.name}
                    </span>
                    <span className="text-[11px] text-gray-500 truncate flex items-center gap-1 mt-0.5">
                      <svg
                        className="w-3 h-3 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      {univ.location}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {activeTab !== "degree" &&
          activeTab !== "location" &&
          activeTab !== "popular" && (
            <div className="h-full min-h-[300px] w-full flex items-center justify-center flex-col gap-4 text-gray-400 bg-gray-50/50 rounded-2xl border border-dashed border-gray-200">
              <svg
                className="w-16 h-16 opacity-30"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
              <p className="text-sm font-medium">
                Content for {activeTab} coming soon.
              </p>
            </div>
          )}
      </div>
    </div>
  );
}

function CoursesMegaMenu({ closeMenu }: { closeMenu: () => void }) {
  const [activeTab, setActiveTab] = useState("ug");

  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 w-[1144px] bg-[#fafafa] rounded shadow-[0_15px_40px_-10px_rgba(0,0,0,0.1)] border border-gray-100 flex overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
      <div className="w-[300px] bg-white border-r border-gray-200 py-6 flex flex-col gap-0 shrink-0">
        <h3 className="text-[13px] font-bold text-gray-800 px-6 pb-2 mb-2 border-b border-gray-300">
          Discover Courses
        </h3>

        {COURSE_CATEGORIES.map((cat) => {
          const isActive = activeTab === cat.id;

          return (
            <Link
              href="#"
              key={cat.id}
              onClick={(e) => {
                e.preventDefault();
                setActiveTab(cat.id);
                // closeMenu(); // Don't close immediately on tab click in desktop
              }}
              onMouseEnter={() => setActiveTab(cat.id)}
              className={`w-full flex justify-between items-center px-6 py-2 transition-all text-left group ${isActive ? "bg-[#f0f4f8] border-l-2 border-[#1a3c5e]" : "hover:bg-gray-50 border-l-2 border-transparent"}`}
            >
              <div className="flex-1 min-w-0">
                <div
                  className={`text-[13px] font-medium ${isActive ? "text-[#1a4b71]" : "text-gray-700 group-hover:text-gray-900"}`}
                >
                  {cat.label}
                </div>
                <div
                  className={`text-[11px] ${isActive ? "text-[#3B82B1]" : "text-[#3B82B1]"}`}
                >
                  {cat.desc}
                </div>
              </div>
              <svg
                className={`w-3.5 h-3.5 shrink-0 transition-transform ${isActive ? "text-[#1a4b71] translate-x-1" : "text-gray-400"}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          );
        })}
      </div>

      <div className="flex-1 p-6 bg-[#fafafa] max-h-[480px] overflow-y-auto">
        {activeTab === "ug" && (
          <div className="flex flex-col h-full gap-5 animate-in fade-in slide-in-from-right-4 duration-300">
            <h4 className="font-bold text-[#1a2e4a] text-[15px] border-b border-gray-100 pb-2">
              UG Courses
            </h4>

            <div className="grid grid-cols-3 gap-y-6 gap-x-12 mt-2">
              {[
                { title: "Online BBA", sub: "3 Years" },
                { title: "Online MBA", sub: "2 Years" },
                { title: "Online BA.JMC", sub: "3 Years" },
                { title: "Online BA", sub: "3 Years" },
                { title: "Online PGDM", sub: "2 Years" },
                { title: "Online MA.JMC", sub: "2 Years" },
                { title: "Online BCA", sub: "3 Years" },
                { title: "Online MA", sub: "2 Years" },
                { title: "Online BBA + MBA", sub: "5 Years" },
                { title: "Online M.Com", sub: "2 Years" },
                { title: "Online BCA + MCA", sub: "5 Years" },
                { title: "Online B.Sc", sub: "3 Years" },
              ].map((course, i) => (
                <Link
                  key={i}
                  href="/?view=course-detail"
                  className="flex flex-col gap-0 group cursor-pointer"
                  onClick={closeMenu}
                >
                  <span className="font-normal text-[14px] text-gray-800  group-hover:text-[#3B82B1] transition-colors">
                    {course.title}
                  </span>
                  <span className="text-[11px] text-gray-400">
                    {course.sub}
                  </span>
                </Link>
              ))}
            </div>

            <div className="mt-2">
              <Link
                href="/?view=courses"
                className="text-[#3B82B1] text-[13px] font-medium hover:underline"
                onClick={closeMenu}
              >
                View More
              </Link>
            </div>
          </div>
        )}

        {activeTab !== "ug" && (
          <div className="h-full min-h-[250px] w-full flex items-center justify-center flex-col gap-4 text-gray-400 bg-gray-50/50 rounded-2xl border border-dashed border-gray-200">
            <svg
              className="w-16 h-16 opacity-30"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
            <p className="text-sm font-medium">
              Content for {activeTab} coming soon.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
function MoreMegaMenu({ closeMenu, onOpenCompare }: { closeMenu: () => void, onOpenCompare: () => void }) {
  return (
    <div className="absolute top-full left-[60%] -translate-x-1/2 mt-0 w-[400px] bg-white rounded shadow-[0_15px_40px_-10px_rgba(0,0,0,0.1)] border border-gray-100 p-8 flex gap-8 z-50 animate-in fade-in slide-in-from-top-2 duration-200 my-0 ">
      <div className="flex-1 flex flex-col">
        <h4 className="font-bold text-[#0D3B59] text-[14px] pb-2 border-b border-gray-200 w-[80%] mb-4">
          Quick Links
        </h4>
        <div className="flex flex-col gap-3.5">
          <Link
            href="/?view=blogs"
            className="text-[12px] text-[#333333] hover:text-[#3B82B1] font-normal transition-colors"
            onClick={closeMenu}
          >
            Blogs
          </Link>
          <Link
            href="/?view=exams"
            className="text-[12px] text-[#333333] hover:text-[#3B82B1] font-normal transition-colors"
            onClick={closeMenu}
          >
            Exams
          </Link>
          <Link
            href="#"
            className="text-[12px] text-[#333333] hover:text-[#3B82B1] font-normal transition-colors"
            onClick={closeMenu}
          >
            About us
          </Link>
          <Link
            href="#"
            className="text-[12px] text-[#333333] hover:text-[#3B82B1] font-normal transition-colors"
            onClick={closeMenu}
          >
            Contact us
          </Link>
          <Link
            href="#"
            className="text-[12px] text-[#333333] hover:text-[#3B82B1] font-normal transition-colors"
            onClick={closeMenu}
          >
            Careers
          </Link>
          <button
            className="text-[12px] text-[#333333] hover:text-[#3B82B1] font-normal transition-colors text-left"
            onClick={() => {
              onOpenCompare();
              closeMenu();
            }}
          >
            Compare Colleges
          </button>
        </div>
      </div>

      <div className="flex-1 flex flex-col">
        <h4 className="font-bold text-[#0D3B59] text-[14px] pb-2 border-b border-gray-200 w-[80%] mb-4">
          Services
        </h4>
        <div className="flex flex-col gap-3.5">
          <Link
            href="#"
            className="text-[12px] text-[#333333] hover:text-[#3B82B1] font-normal transition-colors"
            onClick={closeMenu}
          >
            Write a Review
          </Link>
          <Link
            href="#"
            className="text-[12px] text-[#333333] hover:text-[#3B82B1] font-normal transition-colors"
            onClick={closeMenu}
          >
            Career Counselling
          </Link>
          <Link
            href="#"
            className="text-[12px] text-[#333333] hover:text-[#3B82B1] font-normal transition-colors"
            onClick={closeMenu}
          >
            Scholarship Assistence
          </Link>
        </div>
      </div>
    </div>
  );
}

function RegularMegaMenu({ closeMenu }: { closeMenu: () => void }) {
  const [activeTab, setActiveTab] = useState("colleges");

  const TABS = [
    { id: "colleges", label: "Top Colleges", desc: "Lorem ipsum" },
    { id: "exams", label: "Top Exams", desc: "Lorem ipsum" },
    { id: "news", label: "News", desc: "Lorem ipsum" },
  ];

  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 w-[1144px] bg-[#fafafa] rounded shadow-[0_15px_40px_-10px_rgba(0,0,0,0.1)] border border-gray-100 flex overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
      <div className="w-[300px] bg-white border-r border-gray-200 py-6 flex flex-col gap-0 shrink-0">
        <h3 className="text-[13px] font-bold text-gray-800 px-6 pb-2 mb-2 border-b border-gray-300">
          Discover Regular Colleges and more
        </h3>

        {TABS.map((cat) => {
          const isActive = activeTab === cat.id;

          return (
            <Link
              href="#"
              key={cat.id}
              onClick={(e) => {
                e.preventDefault();
                setActiveTab(cat.id);
              }}
              onMouseEnter={() => setActiveTab(cat.id)}
              className={`w-full flex justify-between items-center px-6 py-2 transition-all text-left group ${isActive ? "bg-[#f0f4f8] border-l-2 border-[#1a3c5e]" : "hover:bg-gray-50 border-l-2 border-transparent"}`}
            >
              <div className="flex-1 min-w-0">
                <div
                  className={`text-[13px] font-medium ${isActive ? "text-[#1a4b71]" : "text-gray-700 group-hover:text-gray-900"}`}
                >
                  {cat.label}
                </div>
                <div
                  className={`text-[11px] ${isActive ? "text-[#3B82B1]" : "text-[#3B82B1]"}`}
                >
                  {cat.desc}
                </div>
              </div>
              <svg
                className={`w-3.5 h-3.5 shrink-0 transition-transform ${isActive ? "text-[#1a4b71] translate-x-1" : "text-gray-400"}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          );
        })}
      </div>

      <div className="flex-1 p-6 bg-[#fafafa] max-h-[600px] overflow-y-auto">
        {activeTab === "colleges" && (
          <div className="flex flex-col h-full gap-5 animate-in fade-in slide-in-from-right-4 duration-300">
            <h4 className="font-bold text-[#1a2e4a] text-[15px] border-b border-gray-100 pb-2">
              Top Colleges
            </h4>

            <div className="grid grid-cols-3 gap-8 lg:gap-12 mt-2">
              <div className="flex flex-col gap-3.5">
                <h5 className="text-[14px] font-bold text-[#0D3B59] mb-1">
                  Colleges by Degree
                </h5>
                {[
                  "BTech Colleges in India",
                  "MCA Colleges in India",
                  "BCA Colleges in India",
                  "BCom Colleges in India",
                  "BBA Colleges in India",
                  "MBA Colleges in India",
                ].map((link) => (
                  <Link
                    key={link}
                    href="#"
                    className="text-[13px] text-gray-700 hover:text-[#3B82B1] font-normal"
                    onClick={closeMenu}
                  >
                    {link}
                  </Link>
                ))}

                <h5 className="text-[14px] font-bold text-[#0D3B59] mt-2 mb-1">
                  Colleges by Location
                </h5>
                {[
                  "Top Colleges in Chandigarh",
                  "Top Colleges in Mohali",
                  "Top Colleges in Gurugram",
                  "Top Colleges in Delhi",
                  "MBA Colleges in Lucknow",
                  "MBA Colleges in Jaipur",
                ].map((link) => (
                  <Link
                    key={link}
                    href="#"
                    className="text-[13px] text-gray-700 hover:text-[#3B82B1] font-normal"
                    onClick={closeMenu}
                  >
                    {link}
                  </Link>
                ))}

                <Link
                  href="#"
                  className="text-[#3B82B1] text-[13px] font-medium mt-1 hover:underline"
                  onClick={closeMenu}
                >
                  View More
                </Link>
              </div>

              <div className="flex flex-col gap-3.5">
                <h5 className="text-[14px] font-bold text-[#0D3B59] mb-0">
                  Popular Colleges
                </h5>
                {[
                  "Amity University",
                  "Shoolini University",
                  "Manipal University",
                  "Jain University",
                  "GLA University",
                  "CGC Chandigarh",
                ].map((link) => (
                  <Link
                    key={link}
                    href="#"
                    className="text-[13px] text-gray-700 hover:text-[#3B82B1] font-normal"
                    onClick={closeMenu}
                  >
                    {link}
                  </Link>
                ))}
              </div>

              <div className="flex flex-col gap-3.5">
                <h5 className="text-[14px] font-bold text-[#0D3B59] mb-1">
                  Top Colleges
                </h5>
                {[
                  "IIT Delhi",
                  "IIT Mumbai",
                  "IIT Guwahati",
                  "IIT Kanpur",
                  "IIT Roorkee",
                  "IIT BHU",
                ].map((link) => (
                  <Link
                    key={link}
                    href="#"
                    className="text-[13px] text-gray-700 hover:text-[#3B82B1] font-normal"
                    onClick={closeMenu}
                  >
                    {link}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Popular Universities View */}
        {activeTab === "popular" && (
          <div className="flex flex-col h-full gap-5 animate-in fade-in slide-in-from-right-4 duration-300">
            <h4 className="font-bold text-[#333] text-[15px] border-b border-[#E5E7EB] pb-[18px]">
              Popular Universities
            </h4>

            <div className="grid grid-cols-3 gap-y-[18px] gap-x-12 mt-1">
              {[
                "LPU Online",
                "Jain Online",
                "Mangalyaan Online",
                "CU Online",
                "NMIMS Online",
                "Shoolini Online",
                "Manipal Online",
                "Mangalyaan Online", // screenshot has duplicate names in different columns
                "Symbiosis Online",
                "Amity Online",
                "Sharda Online",
                "",
                "Sikkim Manipal Online",
                "Shoolini Online", // duplicate
                "",
                "VGU Online",
                "Symbiosis Online", // duplicate
                "",
              ].map((uni, i) => (
                <div key={i} className="flex">
                  {uni ? (
                    <Link
                      href="#"
                      className="text-[13px] text-[#4B5563] hover:text-[#3B82B1] font-medium transition-colors"
                      onClick={closeMenu}
                    >
                      {uni}
                    </Link>
                  ) : (
                    <div />
                  )}
                </div>
              ))}
            </div>

            <div className="mt-2">
              <Link
                href="#"
                className="text-[#3B82B1] text-[13px] font-medium hover:underline"
                onClick={closeMenu}
              >
                View More
              </Link>
            </div>
          </div>
        )}

        {activeTab !== "colleges" &&
          activeTab !== "exams" &&
          activeTab !== "news" && (
            <div className="h-full min-h-[300px] w-full flex items-center justify-center flex-col gap-4 text-gray-400 bg-gray-50/50 rounded-2xl border border-dashed border-gray-200">
              <svg
                className="w-16 h-16 opacity-30"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
              <p className="text-sm font-medium">
                Content for {activeTab} coming soon.
              </p>
            </div>
          )}
      </div>
    </div>
  );
}

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(
    null,
  );
  const [mobileCatOpen, setMobileCatOpen] = useState<string | null>(null);
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <header className="w-full top-0 z-50 sticky flex flex-col">
      {/* Top Bar */}
      <div className="w-full  hidden md:block bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex items-center justify-between h-[45px] text-[13px] text-gray-600 font-medium">
          <div className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            example@degreefyd.com
          </div>
          <div className="flex items-center gap-3">
            <span>Connect with us on your Favorite Socials -</span>
            <div className="flex items-center gap-3.5">
              <Link
                href="#"
                className="text-gray-500 hover:text-gray-800 transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </Link>
              <Link
                href="#"
                className="text-gray-500 hover:text-gray-800 transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </Link>
              <Link
                href="#"
                className="text-gray-500 hover:text-gray-800 transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </Link>
              <Link
                href="#"
                className="text-gray-500 hover:text-gray-800 transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Bar */}
      <div className="w-full bg-white  shadow- shadow-sm relative z-40">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex items-center justify-between h-[80px] relative">
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <Image
              src="/assets/logo.png"
              alt="Degree FYD Logo"
              width={180}
              height={50}
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-1 h-full">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className={
                  link.label === "More"
                    ? "relative h-full flex items-center"
                    : "static h-full flex items-center"
                }
                onMouseEnter={() => setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  onClick={() => toggleDropdown(link.label)}
                  className={`${poppins.className} flex items-center gap-1 px-4 h-full text-[15px] font-normal text-black hover:text-black transition-colors duration-200`}
                >
                  {link.label}
                  <svg
                    className={`${poppins.className}  w-4 h-4 text-gray-500 transition-transform duration-200 ${openDropdown === link.label ? "rotate-180 text-black" : ""
                      }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {openDropdown === link.label &&
                  link.label === "Universities" && (
                    <UniversitiesMegaMenu
                      closeMenu={() => setOpenDropdown(null)}
                      onOpenCompare={() => setIsCompareModalOpen(true)}
                    />
                  )}
                {openDropdown === link.label && link.label === "Courses" && (
                  <CoursesMegaMenu closeMenu={() => setOpenDropdown(null)} />
                )}
                {openDropdown === link.label && link.label === "More" && (
                  <div className="absolute top-[calc(100%+0px)] right-0">
                    <MoreMegaMenu
                      closeMenu={() => setOpenDropdown(null)}
                      onOpenCompare={() => setIsCompareModalOpen(true)}
                    />
                  </div>
                )}
                {openDropdown === link.label && link.label === "Regular" && (
                  <RegularMegaMenu closeMenu={() => setOpenDropdown(null)} />
                )}
                {openDropdown === link.label &&
                  link.label !== "Universities" &&
                  link.label !== "Courses" &&
                  link.label !== "More" &&
                  link.label !== "Regular" && (
                    <div className="absolute top-[calc(100%+0px)] left-0">
                      <div className="w-48 bg-white border border-gray-100 rounded-xl shadow-lg py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                        <p className="px-4 py-3 text-sm text-gray-400 italic">
                          More options for {link.label}...
                        </p>
                      </div>
                    </div>
                  )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <button className="border border-[#CBD5E1] rounded-[10px] w-[42px] h-[42px] flex items-center justify-center hover:bg-gray-50 transition-colors text-gray-500">
              <svg
                className="w-[18px] h-[18px]"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M17 11A6 6 0 115 11a6 6 0 0112 0z"
                />
              </svg>
            </button>

            <Link
              href="/login"
              className="flex items-center gap-2 px-[22px] py-[10px] text-[14px] font-medium text-white rounded-[10px] transition-all duration-200 hover:opacity-90 ml-1"
              style={{ backgroundColor: "#0D3B59" }}
            >
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
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              Sign In
            </Link>
          </div>

          <div className="lg:hidden flex items-center gap-2">
            <button
              className="p-2 rounded-md hover:bg-gray-100 text-gray-700"
              aria-label="Search"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
                />
              </svg>
            </button>
            <button
              className="flex flex-col gap-1.5 p-2 rounded-md hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <span
                className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 flex flex-col max-h-[80vh] overflow-y-auto">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="border-b border-gray-100 flex flex-col"
            >
              <button
                onClick={() => {
                  if (
                    link.label === "Universities" ||
                    link.label === "Courses" ||
                    link.label === "More"
                  ) {
                    setMobileDropdownOpen(
                      mobileDropdownOpen === link.label ? null : link.label,
                    );
                    setMobileCatOpen(null);
                  } else {
                    setMobileMenuOpen(false);
                  }
                }}
                className="flex items-center justify-between px-5 py-4 text-[15px] font-semibold text-black text-left w-full"
              >
                {link.label}
                {(link.label === "Universities" ||
                  link.label === "Courses" ||
                  link.label === "More") && (
                    <svg
                      className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${mobileDropdownOpen === link.label ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
              </button>

              {mobileDropdownOpen === link.label &&
                link.label === "Universities" && (
                  <div className="bg-gray-50/60 flex flex-col">
                    <p className="px-6 pt-3 pb-1 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                      Discover Universities
                    </p>

                    {UNIV_CATEGORIES.map((cat) => (
                      <div key={cat.id} className="border-t border-gray-100">
                        {cat.id === "compare" ? (
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              setIsCompareModalOpen(true);
                              setMobileMenuOpen(false);
                            }}
                            className={`w-full flex items-center gap-3 px-5 py-3 text-left transition-colors ${mobileCatOpen === `univ-${cat.id}`
                              ? "bg-blue-50"
                              : "hover:bg-gray-100"
                              }`}
                          >
                            <div className="flex-1 min-w-0">
                              <div
                                className={`text-[14px] font-semibold ${mobileCatOpen === `univ-${cat.id}` ? "text-blue-700" : "text-gray-700"}`}
                              >
                                {cat.label}
                              </div>
                              <div className="text-[11px] text-gray-500 mt-0.5">
                                {cat.desc}
                              </div>
                            </div>
                          </button>
                        ) : (
                          <button
                            onClick={() =>
                              setMobileCatOpen(
                                mobileCatOpen === `univ-${cat.id}`
                                  ? null
                                  : `univ-${cat.id}`,
                              )
                            }
                            className={`w-full flex items-center gap-3 px-5 py-3 text-left transition-colors ${mobileCatOpen === `univ-${cat.id}`
                              ? "bg-blue-50"
                              : "hover:bg-gray-100"
                              }`}
                          >
                            <div className="flex-1 min-w-0">
                              <div
                                className={`text-[14px] font-semibold ${mobileCatOpen === `univ-${cat.id}` ? "text-[#3B82B1]" : "text-gray-700"}`}
                              >
                                {cat.label}
                              </div>
                              <div className="text-[11px] text-gray-500 mt-0.5">
                                {cat.desc}
                              </div>
                            </div>
                            <svg
                              className={`w-4 h-4 shrink-0 transition-transform duration-200 ${mobileCatOpen === `univ-${cat.id}`
                                ? "rotate-90 text-[#3B82B1]"
                                : "text-gray-300"
                                }`}
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </button>
                        )}

                        {mobileCatOpen === `univ-${cat.id}` && (
                          <div className="bg-white px-5 pb-4 pt-2 animate-in slide-in-from-top-1 duration-150">
                            {cat.id === "location" && (
                              <>
                                <div className="grid grid-cols-3 gap-2 mt-1">
                                  {LOCATION_LINKS.map((loc, i) => (
                                    <Link
                                      key={i}
                                      href="#"
                                      onClick={() => setMobileMenuOpen(false)}
                                      className="flex flex-col items-center gap-1 border border-gray-200 rounded-xl p-2 hover:border-[#3B82B1] hover:bg-blue-50 transition-all"
                                    >
                                      <div className="w-12 h-10 relative">
                                        <Image
                                          src={loc.img}
                                          alt={loc.label}
                                          fill
                                          className="object-contain"
                                          onError={(e) => {
                                            (
                                              e.currentTarget as HTMLImageElement
                                            ).src = "/assets/logo.png";
                                          }}
                                        />
                                      </div>
                                      <span className="text-[11px] text-gray-600 font-medium text-center leading-tight">
                                        {loc.label}
                                      </span>
                                    </Link>
                                  ))}
                                </div>
                                <Link
                                  href="#"
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="mt-3 block text-center text-[#3B82B1] text-[13px] font-semibold border border-gray-200 rounded-lg py-2 hover:bg-gray-50"
                                >
                                  View All Locations
                                </Link>
                              </>
                            )}

                            {cat.id === "degree" && (
                              <div className="flex flex-col gap-4">
                                <div>
                                  <h5 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">
                                    Online Degree
                                  </h5>
                                  <div className="flex flex-col gap-2">
                                    {DEGREE_LINKS.online.map((l, i) => (
                                      <Link
                                        key={i}
                                        href="/?view=colleges"
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="flex justify-between items-center py-1.5 border-b border-gray-50 hover:text-[#3B82B1] transition-colors"
                                      >
                                        <span className="text-[13px] text-gray-700 font-medium">
                                          {l.label}
                                        </span>
                                        <span className="text-[11px] text-gray-400">
                                          {l.count}
                                        </span>
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                                <div>
                                  <h5 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">
                                    Colleges By Level
                                  </h5>
                                  <div className="flex flex-col gap-2">
                                    {DEGREE_LINKS.levels.map((l, i) => (
                                      <Link
                                        key={i}
                                        href="/?view=colleges"
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="flex justify-between items-center py-1.5 border-b border-gray-50 hover:text-[#3B82B1] transition-colors"
                                      >
                                        <span className="text-[13px] text-gray-700 font-medium">
                                          {l.label}
                                        </span>
                                        <span className="text-[11px] text-gray-400">
                                          {l.count}
                                        </span>
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                                <div>
                                  <h5 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">
                                    Study Abroad
                                  </h5>
                                  <div className="flex flex-col gap-2">
                                    {DEGREE_LINKS.abroad.map((l, i) => (
                                      <Link
                                        key={i}
                                        href="/?view=colleges"
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="flex justify-between items-center py-1.5 border-b border-gray-50 hover:text-[#3B82B1] transition-colors"
                                      >
                                        <span className="text-[13px] text-gray-700 font-medium">
                                          {l.label}
                                        </span>
                                        <span className="text-[11px] text-gray-400">
                                          {l.count}
                                        </span>
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            )}

                            {cat.id === "popular" && (
                              <div className="flex flex-col gap-2 mt-1">
                                {POPULAR_UNIV.map((u, i) => (
                                  <Link
                                    key={i}
                                    href="#"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="flex items-center gap-3 p-2.5 border border-gray-100 rounded-xl hover:bg-blue-50 hover:border-blue-200 transition-all"
                                  >
                                    <div className="w-10 h-10 bg-white border border-gray-100 rounded-lg flex items-center justify-center shrink-0 shadow-sm overflow-hidden relative p-1">
                                      <Image
                                        src={u.logo}
                                        alt={u.name}
                                        fill
                                        className="object-contain p-1"
                                        onError={(e) => {
                                          (
                                            e.currentTarget as HTMLImageElement
                                          ).style.display = "none";
                                        }}
                                      />
                                    </div>
                                    <div className="flex flex-col min-w-0">
                                      <span className="text-[13px] font-bold text-[#1a2e4a] truncate">
                                        {u.name}
                                      </span>
                                      <span className="text-[11px] text-gray-500">
                                        {u.location}
                                      </span>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            )}

                            {(cat.id === "top" || cat.id === "compare") && (
                              <p className="text-[13px] text-gray-400 italic py-2">
                                Content coming soon…
                              </p>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}

              {mobileDropdownOpen === link.label &&
                link.label === "Courses" && (
                  <div className="bg-gray-50/60 flex flex-col">
                    <p className="px-6 pt-3 pb-1 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                      Discover Courses
                    </p>

                    {COURSE_CATEGORIES.map((cat) => (
                      <div key={cat.id} className="border-t border-gray-100">
                        <button
                          onClick={() =>
                            setMobileCatOpen(
                              mobileCatOpen === `course-${cat.id}`
                                ? null
                                : `course-${cat.id}`,
                            )
                          }
                          className={`w-full flex items-center gap-3 px-5 py-3 text-left transition-colors ${mobileCatOpen === `course-${cat.id}`
                            ? "bg-blue-50"
                            : "hover:bg-gray-100"
                            }`}
                        >
                          <div className="flex-1 min-w-0">
                            <div
                              className={`text-[14px] font-semibold ${mobileCatOpen === `course-${cat.id}` ? "text-blue-700" : "text-gray-700"}`}
                            >
                              {cat.label}
                            </div>
                            <div className="text-[11px] text-gray-500 mt-0.5">
                              {cat.desc}
                            </div>
                          </div>
                          <svg
                            className={`w-4 h-4 shrink-0 transition-transform duration-200 ${mobileCatOpen === `course-${cat.id}`
                              ? "rotate-90 text-blue-500"
                              : "text-gray-300"
                              }`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </button>

                        {mobileCatOpen === `course-${cat.id}` && (
                          <div className="bg-white px-5 pb-4 pt-2 animate-in slide-in-from-top-1 duration-150">
                            {cat.id === "ug" && (
                              <>
                                <div className="grid grid-cols-2 gap-x-4 gap-y-3 mt-1">
                                  {COURSE_LINKS.ug.map((l, i) => (
                                    <Link
                                      key={i}
                                      href="/?view=courses"
                                      onClick={() => setMobileMenuOpen(false)}
                                      className="flex flex-col hover:text-[#3B82B1] transition-colors group"
                                    >
                                      <span className="text-[13px] font-bold text-gray-700 group-hover:text-[#3B82B1]">
                                        {l.label}
                                      </span>
                                      <span className="text-[11px] text-gray-400">
                                        {l.duration}
                                      </span>
                                    </Link>
                                  ))}
                                </div>
                                <Link
                                  href="/?view=courses"
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="mt-4 block text-center text-[#3B82B1] text-[13px] font-semibold border border-gray-200 rounded-lg py-2 hover:bg-gray-50"
                                >
                                  View All Courses
                                </Link>
                              </>
                            )}
                            {cat.id !== "ug" && (
                              <p className="text-[13px] text-gray-400 italic py-2">
                                Content coming soon…
                              </p>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}

              {mobileDropdownOpen === link.label && link.label === "More" && (
                <div className="bg-gray-50/60 flex flex-col p-5 gap-6">
                  <div className="flex flex-col gap-3">
                    <h3 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">
                      Quick Links
                    </h3>
                    <Link
                      href="/?view=blogs"
                      className="text-[14px] font-semibold text-gray-700 hover:text-[#3B82B1] transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Blogs
                    </Link>
                    <Link
                      href="/?view=exams"
                      className="text-[14px] font-semibold text-gray-700 hover:text-[#3B82B1] transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Exams
                    </Link>
                    <Link
                      href="#"
                      className="text-[14px] font-semibold text-gray-700 hover:text-[#3B82B1] transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      About us
                    </Link>
                    <Link
                      href="#"
                      className="text-[14px] font-semibold text-gray-700 hover:text-[#3B82B1] transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Contact us
                    </Link>
                    <Link
                      href="#"
                      className="text-[14px] font-semibold text-gray-700 hover:text-[#3B82B1] transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Careers
                    </Link>
                    <button
                      className="text-[14px] text-left font-semibold text-gray-700 hover:text-[#3B82B1] transition-colors"
                      onClick={() => {
                        setIsCompareModalOpen(true);
                        setMobileMenuOpen(false);
                      }}
                    >
                      Compare Colleges
                    </button>
                  </div>
                  <div className="flex flex-col gap-3">
                    <h3 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">
                      Services
                    </h3>
                    <Link
                      href="#"
                      className="text-[14px] font-semibold text-gray-700 hover:text-[#3B82B1] transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Write a Review
                    </Link>
                    <Link
                      href="#"
                      className="text-[14px] font-semibold text-gray-700 hover:text-[#3B82B1] transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Career Counselling
                    </Link>
                    <Link
                      href="#"
                      className="text-[14px] font-semibold text-gray-700 hover:text-[#3B82B1] transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Scholarship Assistance
                    </Link>
                  </div>
                </div>
              )}
            </div>
          ))}

          <div className="flex flex-col gap-2 px-5 py-4">
            <Link
              href="/signup"
              className="w-full text-center py-2.5 text-[15px] font-semibold border-2 rounded-md"
              style={{ borderColor: "#2563eb", color: "#2563eb" }}
            >
              Sign up
            </Link>
            <Link
              href="/login"
              className="w-full text-center py-2.5 text-[15px] font-semibold text-white rounded-md"
              style={{ backgroundColor: "#1a2e4a" }}
            >
              Login
            </Link>
          </div>
        </div>
      )}
      {isCompareModalOpen && <GlobalCompareModal onClose={() => setIsCompareModalOpen(false)} />}
    </header>
  );
}
