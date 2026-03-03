"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Universities", href: "#" },
  { label: "Courses", href: "#" },
  { label: "About us", href: "#" },
  { label: "More", href: "#" },
];

function MapPinIcon() { return <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>; }
function AcademicCapIcon() { return <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" /></svg>; }
function StarIcon() { return <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>; }
function TrophyIcon() { return <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>; }
function ScaleIcon() { return <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1v10h-1v2h1v2h2v-2h1v-2h-1V7l3-1V4H3v2zm12 0l3 1v10h-1v2h1v2h2v-2h1v-2h-1V7l3-1V4h-8v2z" /></svg>; }

const UNIV_CATEGORIES = [
  { id: "location", label: "Universities by Location", desc: "Top states & cities", icon: <MapPinIcon /> },
  { id: "degree", label: "Universities by Degree", desc: "MBA, BTech, MCA, BBA", icon: <AcademicCapIcon /> },
  { id: "popular", label: "Popular Universities", desc: "Most sought after colleges", icon: <StarIcon /> },
  { id: "top", label: "Top Universities", desc: "Highly ranked institutions", icon: <TrophyIcon /> },
  { id: "compare", label: "Compare Colleges", desc: "Side-by-side analysis", icon: <ScaleIcon /> },
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
  ]
};

const LOCATION_LINKS = [
  { label: "Chennai", img: "/assets/che.png" },
  { label: "Bangalore", img: "/assets/ban.png" },
  { label: "Delhi", img: "/assets/jai.png" },
  { label: "Hyderabad", img: "/assets/kol.png" },
  { label: "Mumbai", img: "/assets/ban.png" },
  { label: "Pune", img: "/assets/che.png" },
  { label: "Ahmedabad", img: "/assets/ahem.png" },
  { label: "Noida", img: "/assets/kol.png" },
  { label: "Jaipur", img: "/assets/jai.png" },
  { label: "Dehradun", img: "/assets/ban.png" },
  { label: "Coimbatore", img: "/assets/ahem.png" },
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

function BookOpenIcon() { return <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>; }
function LibraryIcon() { return <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" /></svg>; }
function DocumentCheckIcon() { return <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>; }
function BadgeCheckIcon() { return <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>; }
function LightBulbIcon() { return <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>; }

const COURSE_CATEGORIES = [
  { id: "ug", label: "UG", desc: "Undergraduate Programs", icon: <BookOpenIcon /> },
  { id: "pg", label: "PG", desc: "Postgraduate Programs", icon: <LibraryIcon /> },
  { id: "diploma", label: "Diploma", desc: "Short term specializations", icon: <DocumentCheckIcon /> },
  { id: "certificate", label: "Certificate", desc: "Skill based courses", icon: <BadgeCheckIcon /> },
  { id: "phd", label: "Ph. D", desc: "Doctoral research", icon: <AcademicCapIcon /> },
  { id: "popular", label: "Popular Courses", desc: "Trending among students", icon: <LightBulbIcon /> },
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
  ]
};

function UniversitiesMegaMenu({ closeMenu }: { closeMenu: () => void }) {
  const [activeTab, setActiveTab] = useState("degree");

  return (
    <div
      className="absolute top-full left-0 mt-0 w-[920px] bg-white rounded-2xl shadow-[0_15px_40px_-10px_rgba(0,0,0,0.1)] border border-gray-100 flex overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200"
    >
      <div className="w-[310px] bg-[#fcfdfd] border-r border-gray-100 p-4 flex flex-col gap-1 shrink-0">
        <h3 className="text-[13px] font-bold text-gray-400 px-3 pb-2 uppercase tracking-wider">Discover Universities</h3>

        {UNIV_CATEGORIES.map(cat => {
          const isActive = activeTab === cat.id;

          if (cat.id === "compare") {
            return (
              <Link
                key={cat.id}
                href="/?view=compare"
                onClick={() => {
                  setActiveTab(cat.id);
                  closeMenu();
                }}
                onMouseEnter={() => setActiveTab(cat.id)}
                className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl transition-all text-left group ${isActive ? 'bg-[#f0f7ff] shadow-sm' : 'hover:bg-gray-50'}`}
              >
                <div className={`w-10 h-10 shrink-0 rounded-[10px] flex items-center justify-center transition-colors ${isActive ? 'bg-blue-100 text-blue-600' : 'bg-white text-gray-400 border border-gray-200 shadow-[0_2px_4px_rgba(0,0,0,0.02)] group-hover:text-gray-600'}`}>
                  {cat.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className={`text-[14px] font-semibold truncate ${isActive ? 'text-blue-700' : 'text-gray-700'}`}>{cat.label}</div>
                  <div className="text-[11px] text-gray-500 truncate mt-0.5">{cat.desc}</div>
                </div>
                <svg className={`w-4 h-4 shrink-0 transition-transform ${isActive ? 'text-blue-600 translate-x-1' : 'text-gray-300'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            )
          }

          return (
            <button
              key={cat.id}
              onMouseEnter={() => setActiveTab(cat.id)}
              onClick={() => setActiveTab(cat.id)}
              className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl transition-all text-left group ${isActive ? 'bg-[#f0f7ff] shadow-sm' : 'hover:bg-gray-50'}`}
            >
              <div className={`w-10 h-10 shrink-0 rounded-[10px] flex items-center justify-center transition-colors ${isActive ? 'bg-blue-100 text-blue-600' : 'bg-white text-gray-400 border border-gray-200 shadow-[0_2px_4px_rgba(0,0,0,0.02)] group-hover:text-gray-600'}`}>
                {cat.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className={`text-[14px] font-semibold truncate ${isActive ? 'text-blue-700' : 'text-gray-700'}`}>{cat.label}</div>
                <div className="text-[11px] text-gray-500 truncate mt-0.5">{cat.desc}</div>
              </div>
              <svg className={`w-4 h-4 shrink-0 transition-transform ${isActive ? 'text-blue-600 translate-x-1' : 'text-gray-300'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )
        })}
      </div>

      <div className="flex-1 p-8 bg-white max-h-[480px] overflow-y-auto">
        {activeTab === "degree" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-[#1a2e4a] text-[15px] border-b border-gray-100 pb-2">Online Degree</h4>
              <ul className="flex flex-col gap-3.5">
                {DEGREE_LINKS.online.map((link, i) => (
                  <li key={i}>
                    <Link href="/?view=colleges" className="group flex flex-col items-start" onClick={closeMenu}>
                      <span className="text-[13px] text-gray-600 group-hover:text-blue-600 font-medium transition-colors">{link.label}</span>
                      <span className="text-[11px] text-gray-400 mt-0.5">{link.count}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <Link href="/?view=colleges" className="text-blue-600 text-[13px] font-bold mt-2 hover:underline flex items-center gap-1" onClick={closeMenu}>
                View All <span className="text-[10px]">&rarr;</span>
              </Link>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-[#1a2e4a] text-[15px] border-b border-gray-100 pb-2">Colleges By Level</h4>
              <ul className="flex flex-col gap-3.5">
                {DEGREE_LINKS.levels.map((link, i) => (
                  <li key={i}>
                    <Link href="/?view=colleges" className="group flex flex-col items-start" onClick={closeMenu}>
                      <span className="text-[13px] text-gray-600 group-hover:text-blue-600 font-medium transition-colors">{link.label}</span>
                      <span className="text-[11px] text-gray-400 mt-0.5">{link.count}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <Link href="/?view=colleges" className="text-blue-600 text-[13px] font-bold mt-2 hover:underline flex items-center gap-1" onClick={closeMenu}>
                View All <span className="text-[10px]">&rarr;</span>
              </Link>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-[#1a2e4a] text-[15px] border-b border-gray-100 pb-2">Study Abroad</h4>
              <ul className="flex flex-col gap-3.5">
                {DEGREE_LINKS.abroad.map((link, i) => (
                  <li key={i}>
                    <Link href="/?view=colleges" className="group flex flex-col items-start" onClick={closeMenu}>
                      <span className="text-[13px] text-gray-600 group-hover:text-blue-600 font-medium transition-colors">{link.label}</span>
                      <span className="text-[11px] text-gray-400 mt-0.5">{link.count}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <Link href="/?view=colleges" className="text-blue-600 text-[13px] font-bold mt-2 hover:underline flex items-center gap-1" onClick={closeMenu}>
                View All <span className="text-[10px]">&rarr;</span>
              </Link>
            </div>
          </div>
        )}

        {activeTab === "location" && (
          <div className="flex flex-col h-full gap-5">
            <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
              {LOCATION_LINKS.map((loc, i) => (
                <Link key={i} href="#" onClick={closeMenu} className="group border border-gray-200 rounded-[12px] bg-white hover:border-blue-400 hover:shadow-sm transition-all overflow-hidden flex flex-col items-center">
                  <div className="w-full aspect-[4/3] bg-[#f8f9fa] flex items-center justify-center relative object-contain">
                    <Image src={loc.img} alt={loc.label} fill className="object-contain p-4 transition-transform duration-300 group-hover:scale-110" onError={(e) => { (e.currentTarget as HTMLImageElement).src = "/assets/logo.png"; }} />
                  </div>
                  <div className="w-full text-center py-2.5 px-1 bg-white">
                    <span className="text-gray-700 font-medium text-[13px] group-hover:text-blue-600 transition-colors">{loc.label}</span>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-auto flex justify-center py-2">
              <Link href="#" onClick={closeMenu} className="border border-gray-200 text-blue-500 font-medium text-[13px] rounded-lg px-6 py-2.5 hover:bg-gray-50 hover:border-gray-300 transition-colors">
                View All Location
              </Link>
            </div>
          </div>
        )}

        {activeTab === "popular" && (
          <div className="flex flex-col gap-5">
            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <h4 className="font-bold text-[#1a2e4a] text-[16px]">Trending Now</h4>
              <Link href="#" className="text-blue-600 text-[13px] font-bold hover:underline flex items-center gap-1" onClick={closeMenu}>
                View All Universities <span className="text-[10px]">&rarr;</span>
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {POPULAR_UNIV.map((univ, i) => (
                <Link key={i} href="#" onClick={closeMenu} className="group flex items-center gap-3 bg-gray-50/50 border border-gray-100 p-3 rounded-xl hover:bg-white hover:border-blue-100 hover:shadow-sm transition-all">
                  <div className="w-12 h-12 bg-white border border-gray-100 rounded-lg flex items-center justify-center shrink-0 shadow-sm overflow-hidden relative p-1 group-hover:border-blue-100 transition-colors">
                    <Image src={univ.logo} alt={univ.name} fill className="object-contain p-1" onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }} />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[13px] font-bold text-[#1a2e4a] group-hover:text-blue-600 transition-colors truncate">{univ.name}</span>
                    <span className="text-[11px] text-gray-500 truncate flex items-center gap-1 mt-0.5">
                      <svg className="w-3 h-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {univ.location}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {activeTab !== "degree" && activeTab !== "location" && activeTab !== "popular" && (
          <div className="h-full min-h-[300px] w-full flex items-center justify-center flex-col gap-4 text-gray-400 bg-gray-50/50 rounded-2xl border border-dashed border-gray-200">
            <svg className="w-16 h-16 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
            <p className="text-sm font-medium">Content for {activeTab} coming soon.</p>
          </div>
        )}
      </div>
    </div>
  );
}

function CoursesMegaMenu({ closeMenu }: { closeMenu: () => void }) {
  const [activeTab, setActiveTab] = useState("ug");

  return (
    <div
      className="absolute top-full left-0 mt-0 w-[700px] bg-white rounded-2xl shadow-[0_15px_40px_-10px_rgba(0,0,0,0.1)] border border-gray-100 flex overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200"
    >
      <div className="w-[280px] bg-[#fcfdfd] border-r border-gray-100 p-4 flex flex-col gap-1 shrink-0">
        <h3 className="text-[13px] font-bold text-gray-400 px-3 pb-2 uppercase tracking-wider">Discover Courses</h3>

        {COURSE_CATEGORIES.map(cat => {
          const isActive = activeTab === cat.id;
          return (
            <button
              key={cat.id}
              onMouseEnter={() => setActiveTab(cat.id)}
              onClick={() => setActiveTab(cat.id)}
              className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl transition-all text-left group ${isActive ? 'bg-[#f0f7ff] shadow-sm' : 'hover:bg-gray-50'}`}
            >
              <div className={`w-10 h-10 shrink-0 rounded-[10px] flex items-center justify-center transition-colors ${isActive ? 'bg-blue-100 text-blue-600' : 'bg-white text-gray-400 border border-gray-200 shadow-[0_2px_4px_rgba(0,0,0,0.02)] group-hover:text-gray-600'}`}>
                {cat.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className={`text-[14px] font-semibold truncate ${isActive ? 'text-blue-700' : 'text-gray-700'}`}>{cat.label}</div>
                <div className="text-[11px] text-gray-500 truncate mt-0.5">{cat.desc}</div>
              </div>
              <svg className={`w-4 h-4 shrink-0 transition-transform ${isActive ? 'text-blue-600 translate-x-1' : 'text-gray-300'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )
        })}
      </div>

      <div className="flex-1 p-6 bg-white min-h-[350px]">
        {activeTab === "ug" && (
          <div className="flex flex-col h-full">
            <h4 className="font-bold text-[#1a2e4a] text-[16px] border-b border-gray-100 pb-3 mb-5">UG Courses</h4>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-5 flex-1 content-start">
              {COURSE_LINKS.ug.map((link, i) => (
                <Link key={i} href="/?view=courses" onClick={closeMenu} className="group flex flex-col items-start text-left">
                  <span className="text-[14px] font-bold text-gray-700 group-hover:text-blue-600 transition-colors">{link.label}</span>
                  <span className="text-[11px] text-gray-400 mt-0.5">{link.duration}</span>
                </Link>
              ))}
            </div>

            <div className="mt-8 pt-4 border-t border-gray-50">
              <Link href="/?view=courses" className="text-blue-600 text-[13px] font-bold hover:underline flex items-center gap-1" onClick={closeMenu}>
                View All Courses <span className="text-[10px]">&rarr;</span>
              </Link>
            </div>
          </div>
        )}

        {activeTab !== "ug" && (
          <div className="h-full min-h-[250px] w-full flex items-center justify-center flex-col gap-4 text-gray-400 bg-gray-50/50 rounded-2xl border border-dashed border-gray-200">
            <svg className="w-16 h-16 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
            <p className="text-sm font-medium">Content for {activeTab} coming soon.</p>
          </div>
        )}
      </div>
    </div>
  );
}
function MoreMegaMenu({ closeMenu }: { closeMenu: () => void }) {
  return (
    <div
      className="absolute top-full right-0 mt-0 w-[420px] bg-white rounded-2xl shadow-[0_15px_40px_-10px_rgba(0,0,0,0.1)] border border-gray-100 flex overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200"
    >
      <div className="flex-1 bg-white border-r border-dotted border-gray-300 p-6 flex flex-col gap-3">
        <h3 className="text-[14px] font-bold text-[#1a2e4a] pb-2 border-b border-gray-100 mb-2 whitespace-nowrap">Quick Links</h3>
        <Link href="/?view=blogs" className="text-[13px] text-gray-600 hover:text-blue-600 transition-colors" onClick={closeMenu}>Blogs</Link>
        <Link href="/?view=exams" className="text-[13px] text-gray-600 hover:text-blue-600 transition-colors" onClick={closeMenu}>Exams</Link>
        <Link href="#" className="text-[13px] text-gray-600 hover:text-blue-600 transition-colors" onClick={closeMenu}>About us</Link>
        <Link href="#" className="text-[13px] text-gray-600 hover:text-blue-600 transition-colors" onClick={closeMenu}>Contact us</Link>
        <Link href="#" className="text-[13px] text-gray-600 hover:text-blue-600 transition-colors" onClick={closeMenu}>Careers</Link>
        <Link href="/?view=compare" className="text-[13px] text-gray-600 hover:text-blue-600 transition-colors" onClick={closeMenu}>Compare Colleges</Link>
      </div>

      <div className="flex-1 bg-white p-6 flex flex-col gap-3">
        <h3 className="text-[14px] font-bold text-[#1a2e4a] pb-2 border-b border-gray-100 mb-2 whitespace-nowrap">Services</h3>
        <Link href="#" className="text-[13px] text-gray-600 hover:text-blue-600 transition-colors" onClick={closeMenu}>Write a Review</Link>
        <Link href="#" className="text-[13px] text-gray-600 hover:text-blue-600 transition-colors" onClick={closeMenu}>Career Counselling</Link>
        <Link href="#" className="text-[13px] text-gray-600 hover:text-blue-600 transition-colors" onClick={closeMenu}>Scholarship Assistance</Link>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);
  const [mobileCatOpen, setMobileCatOpen] = useState<string | null>(null);

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <header className="w-full bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex items-center justify-between h-[87px]">


        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <Image src="/assets/logo.png" alt="Degree FYD Logo" width={180} height={50} />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => setOpenDropdown(link.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                onClick={() => toggleDropdown(link.label)}
                className="flex items-center gap-1 px-4 py-6 text-[15px] font-medium text-black hover:text-black transition-colors duration-200"
              >
                {link.label}
                <svg
                  className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${openDropdown === link.label ? "rotate-180 text-black" : ""
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

              {/* Invisible bridge to prevent gap from breaking hover */}
              {openDropdown === link.label && (
                <div className="absolute top-full left-0 w-full h-3" />
              )}

              {openDropdown === link.label && link.label === "Universities" && (
                <div className="absolute top-[calc(100%+3px)] left-0">
                  <UniversitiesMegaMenu closeMenu={() => setOpenDropdown(null)} />
                </div>
              )}
              {openDropdown === link.label && link.label === "Courses" && (
                <div className="absolute top-[calc(100%+3px)] left-0">
                  <CoursesMegaMenu closeMenu={() => setOpenDropdown(null)} />
                </div>
              )}
              {openDropdown === link.label && link.label === "More" && (
                <div className="absolute top-[calc(100%+3px)] right-0">
                  <MoreMegaMenu closeMenu={() => setOpenDropdown(null)} />
                </div>
              )}
              {openDropdown === link.label && link.label !== "Universities" && link.label !== "Courses" && link.label !== "More" && (
                <div className="absolute top-[calc(100%+3px)] left-0">
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

          <Link
            href="/signup"
            className="px-5 py-2 text-[15px] font-semibold border-2 rounded-md transition-all duration-200 hover:bg-blue-50"
            style={{
              borderColor: "#2563eb",
              color: "#2563eb",
              backgroundColor: "transparent",
            }}
          >
            Sign up
          </Link>


          <Link
            href="/login"
            className="px-5 py-2 text-[15px] font-semibold text-white rounded-md transition-all duration-200 hover:opacity-90"
            style={{ backgroundColor: "#1a2e4a" }}
          >
            Login
          </Link>
        </div>

        <div className="lg:hidden flex items-center gap-2">
          <button
            className="p-2 rounded-md hover:bg-gray-100 text-gray-700"
            aria-label="Search"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
            </svg>
          </button>
          <button
            className="flex flex-col gap-1.5 p-2 rounded-md hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 flex flex-col max-h-[80vh] overflow-y-auto">
          {navLinks.map((link) => (
            <div key={link.label} className="border-b border-gray-100 flex flex-col">
              <button
                onClick={() => {
                  if (link.label === "Universities" || link.label === "Courses" || link.label === "More") {
                    setMobileDropdownOpen(mobileDropdownOpen === link.label ? null : link.label);
                    setMobileCatOpen(null);
                  } else {
                    setMobileMenuOpen(false);
                  }
                }}
                className="flex items-center justify-between px-5 py-4 text-[15px] font-semibold text-black text-left w-full"
              >
                {link.label}
                {(link.label === "Universities" || link.label === "Courses" || link.label === "More") && (
                  <svg
                    className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${mobileDropdownOpen === link.label ? 'rotate-180' : ''}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </button>

              {mobileDropdownOpen === link.label && link.label === "Universities" && (
                <div className="bg-gray-50/60 flex flex-col">
                  <p className="px-6 pt-3 pb-1 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Discover Universities</p>

                  {UNIV_CATEGORIES.map(cat => (
                    <div key={cat.id} className="border-t border-gray-100">
                      {cat.id === "compare" ? (
                        <Link
                          href="/?view=compare"
                          onClick={() => setMobileMenuOpen(false)}
                          className={`w-full flex items-center gap-3 px-5 py-3 text-left transition-colors ${mobileCatOpen === `univ-${cat.id}` ? 'bg-blue-50' : 'hover:bg-gray-100'
                            }`}
                        >
                          <div className={`w-9 h-9 rounded-[8px] flex items-center justify-center shrink-0 ${mobileCatOpen === `univ-${cat.id}` ? 'bg-blue-100 text-blue-600' : 'bg-white text-gray-400 border border-gray-200'
                            }`}>
                            {cat.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className={`text-[14px] font-semibold ${mobileCatOpen === `univ-${cat.id}` ? 'text-blue-700' : 'text-gray-700'}`}>{cat.label}</div>
                            <div className="text-[11px] text-gray-500 mt-0.5">{cat.desc}</div>
                          </div>
                          <svg className={`w-4 h-4 shrink-0 transition-transform duration-200 ${mobileCatOpen === `univ-${cat.id}` ? 'rotate-90 text-blue-500' : 'text-gray-300'
                            }`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      ) : (
                        <button
                          onClick={() => setMobileCatOpen(mobileCatOpen === `univ-${cat.id}` ? null : `univ-${cat.id}`)}
                          className={`w-full flex items-center gap-3 px-5 py-3 text-left transition-colors ${mobileCatOpen === `univ-${cat.id}` ? 'bg-blue-50' : 'hover:bg-gray-100'
                            }`}
                        >
                          <div className={`w-9 h-9 rounded-[8px] flex items-center justify-center shrink-0 ${mobileCatOpen === `univ-${cat.id}` ? 'bg-blue-100 text-blue-600' : 'bg-white text-gray-400 border border-gray-200'
                            }`}>
                            {cat.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className={`text-[14px] font-semibold ${mobileCatOpen === `univ-${cat.id}` ? 'text-blue-700' : 'text-gray-700'}`}>{cat.label}</div>
                            <div className="text-[11px] text-gray-500 mt-0.5">{cat.desc}</div>
                          </div>
                          <svg className={`w-4 h-4 shrink-0 transition-transform duration-200 ${mobileCatOpen === `univ-${cat.id}` ? 'rotate-90 text-blue-500' : 'text-gray-300'
                            }`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      )}

                      {mobileCatOpen === `univ-${cat.id}` && (
                        <div className="bg-white px-5 pb-4 pt-2 animate-in slide-in-from-top-1 duration-150">

                          {cat.id === 'location' && (
                            <>
                              <div className="grid grid-cols-3 gap-2 mt-1">
                                {LOCATION_LINKS.map((loc, i) => (
                                  <Link key={i} href="#" onClick={() => setMobileMenuOpen(false)}
                                    className="flex flex-col items-center gap-1 border border-gray-200 rounded-xl p-2 hover:border-blue-300 hover:bg-blue-50 transition-all">
                                    <div className="w-12 h-10 relative">
                                      <Image src={loc.img} alt={loc.label} fill className="object-contain" onError={(e) => { (e.currentTarget as HTMLImageElement).src = "/assets/logo.png"; }} />
                                    </div>
                                    <span className="text-[11px] text-gray-600 font-medium text-center leading-tight">{loc.label}</span>
                                  </Link>
                                ))}
                              </div>
                              <Link href="#" onClick={() => setMobileMenuOpen(false)}
                                className="mt-3 block text-center text-blue-600 text-[13px] font-semibold border border-gray-200 rounded-lg py-2 hover:bg-gray-50">
                                View All Locations
                              </Link>
                            </>
                          )}

                          {cat.id === 'degree' && (
                            <div className="flex flex-col gap-4">
                              <div>
                                <h5 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">Online Degree</h5>
                                <div className="flex flex-col gap-2">
                                  {DEGREE_LINKS.online.map((l, i) => (
                                    <Link key={i} href="/?view=colleges" onClick={() => setMobileMenuOpen(false)}
                                      className="flex justify-between items-center py-1.5 border-b border-gray-50 hover:text-blue-600 transition-colors">
                                      <span className="text-[13px] text-gray-700 font-medium">{l.label}</span>
                                      <span className="text-[11px] text-gray-400">{l.count}</span>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                              <div>
                                <h5 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">Colleges By Level</h5>
                                <div className="flex flex-col gap-2">
                                  {DEGREE_LINKS.levels.map((l, i) => (
                                    <Link key={i} href="/?view=colleges" onClick={() => setMobileMenuOpen(false)}
                                      className="flex justify-between items-center py-1.5 border-b border-gray-50 hover:text-blue-600 transition-colors">
                                      <span className="text-[13px] text-gray-700 font-medium">{l.label}</span>
                                      <span className="text-[11px] text-gray-400">{l.count}</span>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                              <div>
                                <h5 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">Study Abroad</h5>
                                <div className="flex flex-col gap-2">
                                  {DEGREE_LINKS.abroad.map((l, i) => (
                                    <Link key={i} href="/?view=colleges" onClick={() => setMobileMenuOpen(false)}
                                      className="flex justify-between items-center py-1.5 border-b border-gray-50 hover:text-blue-600 transition-colors">
                                      <span className="text-[13px] text-gray-700 font-medium">{l.label}</span>
                                      <span className="text-[11px] text-gray-400">{l.count}</span>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            </div>
                          )}

                          {cat.id === 'popular' && (
                            <div className="flex flex-col gap-2 mt-1">
                              {POPULAR_UNIV.map((u, i) => (
                                <Link key={i} href="#" onClick={() => setMobileMenuOpen(false)}
                                  className="flex items-center gap-3 p-2.5 border border-gray-100 rounded-xl hover:bg-blue-50 hover:border-blue-200 transition-all">
                                  <div className="w-10 h-10 bg-white border border-gray-100 rounded-lg flex items-center justify-center shrink-0 shadow-sm overflow-hidden relative p-1">
                                    <Image src={u.logo} alt={u.name} fill className="object-contain p-1" onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }} />
                                  </div>
                                  <div className="flex flex-col min-w-0">
                                    <span className="text-[13px] font-bold text-[#1a2e4a] truncate">{u.name}</span>
                                    <span className="text-[11px] text-gray-500">{u.location}</span>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          )}

                          {(cat.id === 'top' || cat.id === 'compare') && (
                            <p className="text-[13px] text-gray-400 italic py-2">Content coming soon…</p>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {mobileDropdownOpen === link.label && link.label === "Courses" && (
                <div className="bg-gray-50/60 flex flex-col">
                  <p className="px-6 pt-3 pb-1 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Discover Courses</p>

                  {COURSE_CATEGORIES.map(cat => (
                    <div key={cat.id} className="border-t border-gray-100">
                      <button
                        onClick={() => setMobileCatOpen(mobileCatOpen === `course-${cat.id}` ? null : `course-${cat.id}`)}
                        className={`w-full flex items-center gap-3 px-5 py-3 text-left transition-colors ${mobileCatOpen === `course-${cat.id}` ? 'bg-blue-50' : 'hover:bg-gray-100'
                          }`}
                      >
                        <div className={`w-9 h-9 rounded-[8px] flex items-center justify-center shrink-0 ${mobileCatOpen === `course-${cat.id}` ? 'bg-blue-100 text-blue-600' : 'bg-white text-gray-400 border border-gray-200'
                          }`}>
                          {cat.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className={`text-[14px] font-semibold ${mobileCatOpen === `course-${cat.id}` ? 'text-blue-700' : 'text-gray-700'}`}>{cat.label}</div>
                          <div className="text-[11px] text-gray-500 mt-0.5">{cat.desc}</div>
                        </div>
                        <svg className={`w-4 h-4 shrink-0 transition-transform duration-200 ${mobileCatOpen === `course-${cat.id}` ? 'rotate-90 text-blue-500' : 'text-gray-300'
                          }`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>

                      {mobileCatOpen === `course-${cat.id}` && (
                        <div className="bg-white px-5 pb-4 pt-2 animate-in slide-in-from-top-1 duration-150">
                          {cat.id === 'ug' && (
                            <>
                              <div className="grid grid-cols-2 gap-x-4 gap-y-3 mt-1">
                                {COURSE_LINKS.ug.map((l, i) => (
                                  <Link key={i} href="/?view=courses" onClick={() => setMobileMenuOpen(false)}
                                    className="flex flex-col hover:text-blue-600 transition-colors group">
                                    <span className="text-[13px] font-bold text-gray-700 group-hover:text-blue-600">{l.label}</span>
                                    <span className="text-[11px] text-gray-400">{l.duration}</span>
                                  </Link>
                                ))}
                              </div>
                              <Link href="/?view=courses" onClick={() => setMobileMenuOpen(false)}
                                className="mt-4 block text-center text-blue-600 text-[13px] font-semibold border border-gray-200 rounded-lg py-2 hover:bg-gray-50">
                                View All Courses
                              </Link>
                            </>
                          )}
                          {cat.id !== 'ug' && (
                            <p className="text-[13px] text-gray-400 italic py-2">Content coming soon…</p>
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
                    <h3 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">Quick Links</h3>
                    <Link href="/?view=blogs" className="text-[14px] font-semibold text-gray-700 hover:text-blue-600 transition-colors" onClick={() => setMobileMenuOpen(false)}>Blogs</Link>
                    <Link href="/?view=exams" className="text-[14px] font-semibold text-gray-700 hover:text-blue-600 transition-colors" onClick={() => setMobileMenuOpen(false)}>Exams</Link>
                    <Link href="#" className="text-[14px] font-semibold text-gray-700 hover:text-blue-600 transition-colors" onClick={() => setMobileMenuOpen(false)}>About us</Link>
                    <Link href="#" className="text-[14px] font-semibold text-gray-700 hover:text-blue-600 transition-colors" onClick={() => setMobileMenuOpen(false)}>Contact us</Link>
                    <Link href="#" className="text-[14px] font-semibold text-gray-700 hover:text-blue-600 transition-colors" onClick={() => setMobileMenuOpen(false)}>Careers</Link>
                    <Link href="/?view=compare" className="text-[14px] font-semibold text-gray-700 hover:text-blue-600 transition-colors" onClick={() => setMobileMenuOpen(false)}>Compare Colleges</Link>
                  </div>
                  <div className="flex flex-col gap-3">
                    <h3 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">Services</h3>
                    <Link href="#" className="text-[14px] font-semibold text-gray-700 hover:text-blue-600 transition-colors" onClick={() => setMobileMenuOpen(false)}>Write a Review</Link>
                    <Link href="#" className="text-[14px] font-semibold text-gray-700 hover:text-blue-600 transition-colors" onClick={() => setMobileMenuOpen(false)}>Career Counselling</Link>
                    <Link href="#" className="text-[14px] font-semibold text-gray-700 hover:text-blue-600 transition-colors" onClick={() => setMobileMenuOpen(false)}>Scholarship Assistance</Link>
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
    </header>
  );
}
