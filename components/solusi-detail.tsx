"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Briefcase, Factory, Truck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { siteConfig } from "@/lib/content-data";
import { useDemoModal } from "./demo-modal";

type SolusiDetailData = {
  eyebrow: string;
  title: string;
  sectorName: string;
  description: string;
  configText: string;
  image: string;
  imageCaption: string;
  challenges: string[];
  workflow: string[];
  features: { title: string; description: string }[];
};

// Data detail semua solusi industri, dicari berdasarkan slug
const detailItems: Record<string, SolusiDetailData | undefined> =
  siteConfig.solusiDetail.items;

// Ikon kecil di baris konfigurasi pada hero
const iconMap: Record<string, LucideIcon> = {
  manufaktur: Factory,
  distribusi: Truck,
  jasa: Briefcase,
};

// Lebar sama dengan navbar agar tepi kiri-kanan sejajar
const containerClass = "mx-auto w-full max-w-[1480px] px-4 sm:px-6 lg:px-8";

export function SolusiDetail({ slug }: { slug: string }) {
  const { openDemo } = useDemoModal();
  const labels = siteConfig.solusiDetail;
  const groups = siteConfig.industry.items;
  const detail = detailItems[slug];

  if (!detail) return null;

  const ConfigIcon = iconMap[slug] ?? Factory;

  return (
    <main className="relative isolate w-full overflow-hidden bg-white">
       {/* Animasi latar: cahaya biru tipis bergerak pelan */}
      <style>{`
        @keyframes myerp-modul-blob-1 {
          0% { transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(60px, 40px, 0) scale(1.12); }
          100% { transform: translate3d(20px, 80px, 0) scale(0.95); }
        }
        @keyframes myerp-modul-blob-2 {
          0% { transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(-70px, 50px, 0) scale(1.1); }
          100% { transform: translate3d(-20px, -20px, 0) scale(0.96); }
        }
        @keyframes myerp-modul-blob-3 {
          0% { transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(80px, -40px, 0) scale(1.15); }
          100% { transform: translate3d(-60px, -10px, 0) scale(1); }
        }
        .myerp-modul-blob-1 { animation: myerp-modul-blob-1 18s ease-in-out infinite alternate; will-change: transform; }
        .myerp-modul-blob-2 { animation: myerp-modul-blob-2 22s ease-in-out infinite alternate; will-change: transform; }
        .myerp-modul-blob-3 { animation: myerp-modul-blob-3 26s ease-in-out infinite alternate; will-change: transform; }
        @media (prefers-reduced-motion: reduce) {
          .myerp-modul-blob-1, .myerp-modul-blob-2, .myerp-modul-blob-3 {
            animation: none;
          }
        }
      `}</style>

      {/* Lapisan latar (di belakang konten) */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#f6f9ff] via-white to-white">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(rgba(148,163,184,0.2) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="myerp-modul-blob-1 absolute -left-24 -top-32 h-[420px] w-[420px] rounded-full bg-blue-500/15 blur-3xl sm:h-[520px] sm:w-[520px]" />
        <div className="myerp-modul-blob-2 absolute -right-28 -top-16 h-[380px] w-[380px] rounded-full bg-sky-400/15 blur-3xl sm:h-[480px] sm:w-[480px]" />
        <div className="myerp-modul-blob-3 absolute left-1/3 top-[30%] h-[360px] w-[360px] rounded-full bg-indigo-400/10 blur-3xl sm:h-[460px] sm:w-[460px]" />
      </div>

      {/* Navigasi antar kelompok industri */}
      <div className="w-full border-b border-slate-200 bg-white">
        <div className={`${containerClass} flex items-center gap-3 py-3`}>
          <span className="shrink-0 text-[10px] font-bold uppercase tracking-wider text-slate-400">
            {labels.subNavLabel}
          </span>
          <div className="flex gap-2 overflow-x-auto">
            {groups.map((group, index) => {
              const isActive = group.id === slug;
              return (
                <Link
                  key={group.id}
                  href={group.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`shrink-0 whitespace-nowrap rounded-md px-3 py-1.5 text-[11px] font-semibold ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {index + 1}. {group.title}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <div className={`${containerClass} space-y-8 pb-16 pt-8 sm:space-y-10`}>
        {/* Hero */}
        <section className="grid overflow-hidden rounded-2xl border border-slate-200 bg-white lg:grid-cols-[58fr_42fr]">
          <div className="flex flex-col justify-center p-6 sm:p-8">
            <p className="mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-slate-500">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
              {detail.eyebrow}
            </p>
            <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-[#0B132B] sm:text-4xl">
              {detail.title}
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
              {detail.description}
            </p>

            <div className="mt-6 flex items-center gap-2.5 border-t border-slate-100 pt-5 text-xs">
              <ConfigIcon className="h-4 w-4 shrink-0 text-blue-600" />
              <p className="leading-relaxed text-slate-500">
                {detail.configText}{" "}
                <span className="font-bold text-slate-900">
                  {detail.sectorName}
                </span>
              </p>
            </div>
          </div>

          {/* Foto dengan keterangan di bawah */}
          <div className="relative min-h-[220px] bg-gradient-to-br from-slate-200 to-slate-300">
            <Image
              src={detail.image}
              alt=""
              fill
              priority
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover"
            />
            <p className="absolute inset-x-3 bottom-3 rounded-lg bg-white/90 px-3 py-2 text-[11px] leading-snug text-slate-700 backdrop-blur-sm">
              {detail.imageCaption}
            </p>
          </div>
        </section>

        {/* Tantangan operasional dan alur proses bisnis */}
        <section className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7">
            <h2 className="flex items-center gap-2 text-sm font-extrabold tracking-tight text-[#0B132B]">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-rose-500" />
              {labels.challengesTitle}
            </h2>
            <ul className="mt-5 space-y-4">
              {detail.challenges.map((challenge, index) => (
                <li key={index} className="flex gap-3">
                  <span className="mt-0.5 shrink-0 font-mono text-[10px] font-bold text-rose-500">
                    {String(index + 1).padStart(2, "0")}.
                  </span>
                  <p className="text-xs leading-relaxed text-slate-600">
                    {challenge}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7">
            <h2 className="flex items-center gap-2 text-sm font-extrabold tracking-tight text-[#0B132B]">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
              {labels.workflowTitle}
            </h2>
            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {detail.workflow.map((step, index) => (
                <div
                  key={step}
                  className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3.5"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-slate-300 bg-white font-mono text-[11px] font-bold text-slate-600">
                    {index + 1}
                  </span>
                  <span className="text-xs font-semibold leading-snug text-slate-800">
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Kapabilitas utama */}
        <section>
          <h2 className="text-xl font-extrabold tracking-tight text-[#0B132B] sm:text-2xl">
            {labels.capabilitiesTitle} {detail.sectorName}
          </h2>
          <p className="mt-1 text-xs text-slate-500">
            {labels.capabilitiesSubtitle} {detail.sectorName}.
          </p>

          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {detail.features.map((feature, index) => (
              <div
                key={feature.title}
                className="rounded-xl border border-slate-200 bg-white p-5"
              >
                <div className="flex gap-3">
                  <span className="mt-0.5 shrink-0 font-mono text-[10px] font-bold text-slate-400">
                    {String(index + 1).padStart(2, "0")}.
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      {feature.title}
                    </h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-slate-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Ajakan diskusi */}
        <section className="flex flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-base font-extrabold tracking-tight text-[#0B132B] sm:text-lg">
              {labels.ctaTitle} {detail.sectorName} {labels.ctaTitleSuffix}
            </h2>
            <p className="mt-1 text-xs text-slate-500">{labels.ctaText}</p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={openDemo}
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-xs font-bold text-white hover:bg-blue-700"
            >
              {labels.demoButton}
            </button>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-lg bg-slate-100 px-5 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-200"
            >
              {labels.backButton}
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}