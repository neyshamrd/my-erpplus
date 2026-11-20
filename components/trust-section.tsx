"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck, FileCheck2 } from "lucide-react";
import { siteConfig } from "@/lib/content-data";

type Client = {
  id: string;
  name: string;
  logoSrc?: string;
};

// Data diambil dari lib/content-data.ts
const { title: trustTitle, notes: trustNotes } = siteConfig.trust;
const clients: Client[] = siteConfig.trust.clients;

// Logo placeholder berbentuk SVG, diganti otomatis jika logoSrc diisi
function ClientMark({ id }: { id: string }) {
  switch (id) {
    case "kawata":
      return (
        <svg viewBox="0 0 120 36" className="h-9 w-auto" aria-hidden="true">
          <path d="M4 30 L16 6 L22 6 L10 30 Z" fill="#DC2626" />
          <path d="M14 30 L26 6 L32 6 L20 30 Z" fill="#DC2626" opacity="0.85" />
          <text x="34" y="20" fontSize="15" fontWeight="800" fontStyle="italic" fill="#1D4ED8" fontFamily="Arial, sans-serif">
            KAWATA
          </text>
          <rect x="34" y="25" width="80" height="2" fill="#1D4ED8" />
        </svg>
      );
    case "topla":
      return (
        <svg viewBox="0 0 40 40" className="h-10 w-10" aria-hidden="true">
          <circle cx="20" cy="20" r="18" fill="#1D4ED8" />
          <circle cx="20" cy="20" r="14" fill="none" stroke="#FFFFFF" strokeWidth="1.5" />
          <text x="20" y="27" textAnchor="middle" fontSize="20" fontWeight="800" fill="#FFFFFF" fontFamily="Arial, sans-serif">
            P
          </text>
        </svg>
      );
    case "ikuyo":
      return (
        <svg viewBox="0 0 48 32" className="h-8 w-auto" aria-hidden="true">
          <ellipse cx="24" cy="16" rx="18" ry="11" fill="#2563EB" transform="rotate(-20 24 16)" />
          <ellipse cx="26" cy="15" rx="8" ry="4" fill="#FFFFFF" transform="rotate(-20 26 15)" />
          <circle cx="14" cy="22" r="3" fill="#0EA5E9" />
        </svg>
      );
    case "motasa":
      return (
        <svg viewBox="0 0 40 40" className="h-10 w-10" aria-hidden="true">
          <path d="M20 4 C32 8 36 20 20 36 C4 20 8 8 20 4 Z" fill="#16A34A" />
          <path d="M20 10 L20 30" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
          <path d="M20 18 L14 13 M20 23 L26 18" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "narumi":
      return (
        <svg viewBox="0 0 90 36" className="h-9 w-auto" aria-hidden="true">
          <circle cx="16" cy="18" r="12" fill="none" stroke="#B91C1C" strokeWidth="3" />
          <circle cx="16" cy="18" r="4" fill="#B91C1C" />
          <text x="34" y="25" fontSize="20" fontWeight="800" fill="#0F172A" fontFamily="Arial, sans-serif">
            NIM
          </text>
        </svg>
      );
    case "pci":
      return (
        <svg viewBox="0 0 40 40" className="h-10 w-10" aria-hidden="true">
          <defs>
            <linearGradient id="pciGold" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#D6B28F" />
              <stop offset="100%" stopColor="#A9794F" />
            </linearGradient>
          </defs>
          <rect x="2" y="2" width="36" height="36" rx="2" fill="url(#pciGold)" />
          <rect x="6" y="6" width="28" height="28" fill="none" stroke="#F5E6D6" strokeWidth="1.5" />
          <text x="20" y="26" textAnchor="middle" fontSize="14" fontWeight="700" fill="#FFF7ED" fontFamily="Georgia, serif">
            PCI
          </text>
        </svg>
      );
    case "ujs":
      return (
        <svg viewBox="0 0 40 40" className="h-10 w-10" aria-hidden="true">
          <circle cx="20" cy="20" r="18" fill="#FFFFFF" stroke="#1F2937" strokeWidth="2" />
          <path d="M20 6 L34 20 L20 34 L6 20 Z" fill="#DC2626" />
          <path d="M20 12 L28 20 L20 28 L12 20 Z" fill="#FFFFFF" />
          <path d="M20 16 L24 20 L20 24 L16 20 Z" fill="#DC2626" />
        </svg>
      );
    case "npt":
      return (
        <svg viewBox="0 0 90 40" className="h-9 w-auto" aria-hidden="true">
          {["N", "P", "T"].map((letter, i) => (
            <g key={letter}>
              <rect x={4 + i * 28} y="4" width="24" height="24" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2" />
              <text x={16 + i * 28} y="23" textAnchor="middle" fontSize="18" fontWeight="800" fill="#DC2626" fontFamily="Georgia, serif">
                {letter}
              </text>
            </g>
          ))}
          <text x="45" y="37" textAnchor="middle" fontSize="6" fontWeight="700" fill="#0F172A" fontFamily="Arial, sans-serif">
            EKSPEDISI DARAT
          </text>
        </svg>
      );
    default:
      return null;
  }
}

function ClientCard({ client }: { client: Client }) {
  return (
    <div className="flex h-[96px] w-[192px] shrink-0 flex-col items-center justify-center gap-2.5 rounded-2xl border border-slate-200 bg-white px-3 shadow-[0_1px_4px_rgba(15,23,42,0.04)] transition-shadow duration-200 hover:shadow-md">
      <div className="flex h-10 items-center justify-center">
        {client.logoSrc ? (
          <Image
            src={client.logoSrc}
            alt={client.name}
            width={120}
            height={40}
            className="h-10 w-auto object-contain"
          />
        ) : (
          <ClientMark id={client.id} />
        )}
      </div>
      <span className="w-full truncate text-center text-[11px] font-semibold text-slate-700">
        {client.name}
      </span>
    </div>
  );
}

export function TrustSection() {
  return (
    <section
      id="trust"
      className="w-full select-none overflow-hidden bg-white py-10 sm:py-12"
    >
      {/* Keyframes marquee: 3 set berurutan, geser 1/3 lalu ulang agar mulus */}
      <style>{`
        @keyframes myerp-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-33.3333%); }
        }
        .myerp-marquee-track {
          animation: myerp-marquee 40s linear infinite;
          will-change: transform;
        }
        .myerp-marquee-wrap:hover .myerp-marquee-track {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .myerp-marquee-track { animation: none; }
          .myerp-marquee-wrap { overflow-x: auto; }
        }
      `}</style>

      {/* Semua konten dibatasi lebar yang sama dengan hero section */}
      <div className="mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-8">
        <h2 className="mb-7 text-center text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400 sm:text-xs">
          {trustTitle}
        </h2>

        {/* Marquee dibatasi: tidak full kiri-kanan layar */}
        <div className="myerp-marquee-wrap relative w-full overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-white to-transparent sm:w-16" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-white to-transparent sm:w-16" />

          <div className="myerp-marquee-track flex w-max py-1">
            {[0, 1, 2].map((setIndex) => (
              <div
                key={`set-${setIndex}`}
                className="flex shrink-0 items-center gap-4 pr-4"
                aria-hidden={setIndex > 0 ? true : undefined}
              >
                {clients.map((client) => (
                  <ClientCard key={`${client.id}-${setIndex}`} client={client} />
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 border-t border-slate-100 pt-6 sm:flex-row sm:gap-10">
          {trustNotes.map((note) => (
            <div key={note.id} className="flex items-center gap-2 text-center sm:text-left">
              {note.id === "security" ? (
                <ShieldCheck className="h-4 w-4 shrink-0 text-emerald-600" />
              ) : (
                <FileCheck2 className="h-4 w-4 shrink-0 text-indigo-600" />
              )}
              <p className="text-[11px] text-slate-500 sm:text-xs">
                <span className="font-bold text-slate-800">{note.label}</span>{" "}
                {note.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}