"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Briefcase, Factory, Truck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { siteConfig } from "@/lib/content-data";

// Ikon tiap kelompok industri
const iconMap: Record<string, LucideIcon> = {
  manufaktur: Factory,
  distribusi: Truck,
  jasa: Briefcase,
};

// Class ditulis lengkap agar tidak dihapus Tailwind saat build
const accentMap: Record<string, { icon: string; tag: string; button: string }> = {
  indigo: {
    icon: "bg-indigo-600",
    tag: "text-indigo-200",
    button: "bg-indigo-600 hover:bg-indigo-700",
  },
  cyan: {
    icon: "bg-cyan-500",
    tag: "text-cyan-200",
    button: "bg-cyan-600 hover:bg-cyan-700",
  },
  emerald: {
    icon: "bg-emerald-500",
    tag: "text-emerald-200",
    button: "bg-emerald-600 hover:bg-emerald-700",
  },
};

export function IndustrySolutions() {
  const data = siteConfig.industry;
  const [activeId, setActiveId] = useState<string>(data.items[0].id);

  return (
    <section
      id="industri"
      className="w-full bg-gradient-to-b from-white via-[#f5f8ff] to-white py-12 sm:py-14 lg:py-16"
    >
      <div className="mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 grid grid-cols-1 gap-4 lg:mb-10 lg:grid-cols-2 lg:items-end lg:gap-12">
          <div>
            <span className="mb-3 inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-blue-600 sm:text-[11px]">
              {data.badge}
            </span>
            <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-[#0B132B] sm:text-3xl lg:text-[34px]">
              {data.title}
            </h2>
          </div>

          <p className="text-sm leading-relaxed text-slate-500 lg:max-w-md lg:justify-self-end">
            {data.introBefore}{" "}
            <span className="font-semibold text-slate-700">{data.introBrand}</span>{" "}
            {data.introAfter}
          </p>
        </div>

        {/* Galeri akordeon: horizontal di desktop, vertikal di mobile */}
        <div className="flex flex-col gap-3 lg:flex-row lg:gap-4">
          {data.items.map((item) => {
            const isActive = item.id === activeId;
            const Icon = iconMap[item.id] ?? Factory;
            const accent = accentMap[item.accent] ?? accentMap.indigo;

            // Panel selalu dirender sebagai elemen yang sama agar lebar bisa beranimasi mulus
            const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
              if (!isActive && (e.key === "Enter" || e.key === " ")) {
                e.preventDefault();
                setActiveId(item.id);
              }
            };

            return (
              <div
                key={item.id}
                role={isActive ? undefined : "button"}
                tabIndex={isActive ? -1 : 0}
                aria-label={isActive ? undefined : item.title}
                aria-expanded={isActive}
                onClick={() => {
                  if (!isActive) setActiveId(item.id);
                }}
                onKeyDown={handleKeyDown}
                className={`group relative overflow-hidden rounded-3xl bg-[#0B132B] transition-[flex-grow,height,box-shadow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  isActive
                    ? "h-[560px] sm:h-[500px] lg:h-[430px] lg:flex-[10_1_0%] shadow-xl shadow-slate-900/15"
                    : "h-[76px] cursor-pointer lg:h-[430px] lg:flex-[1_1_0%] lg:min-w-[88px] shadow-none"
                }`}
              >
                {/* Gambar: zoom out saat aktif, zoom in saat tidak aktif */}
                <div
                  className={`absolute inset-0 transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isActive ? "scale-100 group-hover:scale-110 group-active:scale-110" : "scale-125 group-hover:scale-[1.18]"
                  }`}
                >
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 80vw, 100vw"
                    className="object-cover"
                  />
                </div>

                {/* Lapisan gelap panel aktif (tipis) */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent transition-opacity duration-700 ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                />

                {/* Lapisan gelap panel tidak aktif (pekat) */}
                <div
                  className={`absolute inset-0 bg-gradient-to-b from-[#0B132B]/85 via-[#0B132B]/92 to-[#0B132B] transition-opacity duration-700 ${
                    isActive ? "opacity-0" : "opacity-100"
                  }`}
                />

                {/* Label panel tidak aktif: ikon + judul vertikal */}
                <div
                  className={`absolute inset-0 z-10 flex flex-row items-center gap-3 px-4 transition-opacity duration-500 lg:flex-col lg:gap-0 lg:px-0 lg:py-5 ${
                    isActive
                      ? "pointer-events-none opacity-0 delay-0"
                      : "opacity-100 delay-300"
                  }`}
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white transition-colors group-hover:bg-white/20">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="flex lg:flex-1 lg:items-center">
                    <span className="whitespace-nowrap text-sm font-bold text-white lg:[writing-mode:vertical-rl] lg:rotate-180">
                      {item.title}
                    </span>
                  </span>
                </div>

                {/* Kartu kaca panel aktif: fade + naik pelan, muncul setelah panel melebar */}
                <div
                  aria-hidden={!isActive}
                  className={`absolute inset-x-3 bottom-3 z-10 rounded-2xl border border-white/20 bg-slate-900/45 p-4 text-white backdrop-blur-md transition-all duration-700 ease-out sm:inset-x-4 sm:bottom-4 sm:p-5 lg:inset-x-auto lg:bottom-7 lg:left-7 lg:w-[min(620px,calc(100%-3.5rem))] ${
                    isActive
                      ? "translate-y-0 opacity-100 delay-300"
                      : "pointer-events-none translate-y-6 opacity-0 delay-0"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white ${accent.icon}`}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <p
                        className={`text-[10px] font-bold uppercase tracking-wide ${accent.tag}`}
                      >
                        {item.tag}
                      </p>
                      <h3 className="text-lg font-extrabold leading-tight sm:text-xl">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <p className="mt-3 text-[13px] leading-relaxed text-white/90 sm:text-sm">
                    {item.description}
                  </p>

                  <p className="mt-4 text-[10px] font-bold uppercase tracking-wide text-white/80">
                    {data.capabilityLabel}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {item.capabilities.map((cap) => (
                      <span
                        key={cap}
                        className="rounded-full border border-white/15 bg-slate-950/70 px-3 py-1 text-[11px] font-semibold text-white"
                      >
                        {cap}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={item.href}
                    tabIndex={isActive ? 0 : -1}
                    onClick={(e) => e.stopPropagation()}
                    className={`mt-4 inline-flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-semibold text-white shadow-md transition-colors ${accent.button}`}
                  >
                    <span>{item.ctaText}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}