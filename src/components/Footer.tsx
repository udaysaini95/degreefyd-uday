"use client";

import Link from "next/link";
import Image from "next/image";

const FOOTER_LINKS = {
    Universities: [
        { label: "LPU Online", href: "#" },
        { label: "Amity Online", href: "#" },
        { label: "Jain Online", href: "#" },
        { label: "Manipal", href: "#" },
        { label: "CU Online", href: "#" },
        { label: "IGNOU", href: "#" },
    ],
    Degrees: [
        { label: "MBA", href: "#" },
        { label: "BCA", href: "#" },
        { label: "MCA", href: "#" },
        { label: "BBA", href: "#" },
        { label: "B.Com", href: "#" },
        { label: "M.Com", href: "#" },
    ],
    Company: [
        { label: "About Us", href: "#" },
        { label: "Contact Us", href: "#" },
        { label: "Blogs", href: "#" },
        { label: "Terms & Conditions", href: "#" },
        { label: "Privacy Policy", href: "#" },
    ],
};

const SOCIAL_LINKS = [
    {
        label: "Facebook",
        href: "#",
        icon: (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
        ),
    },
    {
        label: "Instagram",
        href: "#",
        icon: (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="17.5" cy="6.5" r="1" />
            </svg>
        ),
    },
    {
        label: "LinkedIn",
        href: "#",
        icon: (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
            </svg>
        ),
    },
    {
        label: "YouTube",
        href: "#",
        icon: (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
                <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
            </svg>
        ),
    },
];

export default function Footer() {
    return (
        <footer style={{ backgroundColor: "#051020" }}>
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

                    <div className="flex flex-col gap-5">
                        <div className="flex items-center gap-2">
                            <div className="relative w-8 h-8">
                                <Image src="/logo.png" alt="DegreeFYD" fill className="object-contain"
                                    onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }} />
                            </div>
                            <span className="font-extrabold text-lg">
                                <span className="text-blue-400">Degree</span>
                                <span className="text-orange-400">FYD</span>
                            </span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Find and compare top online colleges in India. Make informed decisions about your education with real data.
                        </p>
                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-gray-500 text-xs">Contact Us</p>
                                <p className="text-white text-sm font-semibold">+91 99999 99999</p>
                            </div>
                        </div>
                    </div>

                    {(Object.keys(FOOTER_LINKS) as (keyof typeof FOOTER_LINKS)[]).map((section) => (
                        <div key={section} className="flex flex-col gap-4">
                            <h4 className="text-white font-bold text-[15px]">{section}</h4>
                            <ul className="flex flex-col gap-2.5">
                                {FOOTER_LINKS[section].map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-gray-400 text-sm hover:text-white transition-colors duration-200"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <div className="border-t border-white/10">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-gray-500 text-sm">
                        Copyright © 2024 Degreefyd. All rights reserved.
                    </p>
                    <div className="flex items-center gap-3">
                        {SOCIAL_LINKS.map((s) => (
                            <Link
                                key={s.label}
                                href={s.href}
                                aria-label={s.label}
                                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/50 transition-all duration-200"
                            >
                                {s.icon}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
