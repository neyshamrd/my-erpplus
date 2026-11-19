"use client";

import React from "react";
import Link from "next/link";
import { Activity, AlertCircle, Check, CheckCircle2, Factory } from "lucide-react";
import { siteConfig } from "@/lib/content-data";
import { useDemoModal } from "./demo-modal";

type StudiKasusData = {
  sectorName: string;
  badge: string;
  title: string;
  description: string;
  capacityText: string;
  stats: { value: string; label: string }[];
  challenges: string[];
  solutions: string[];
  modules: string[];
};

// Data detail semua studi kasus, dicari berdasarkan slug
const detailItems: Record<string, StudiKasusData | undefined> =
  siteConfig.studiKasusDetail.items;

// Daftar 11 sektor untuk bar "Pilih Sektor", diambil dari dropdown navbar
const studiNav = siteConfig.nav.mainNav.find((item) => item.title === "Studi Kasus");
const sectors: { title: string; href: string }[] = studiNav?.items ?? [];

// Font monospace untuk angka (sama dengan testimoni.tsx)
const monoFont =
  "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace";

// Lebar konten mengikuti mockup (sekitar 1026px)
const containerClass = "mx-auto w-full max-w-[1090px] px-4 sm:px-6 lg:px-8";

export function StudiKasusDetail({ slug }: { slug: string }) {
  const { openDemo } = useDemoModal();
  const labels = siteConfig.studiKasusDetail;
  const detail = detailItems[slug];

  if (!detail) return null;

  return (
    <main className="w-full bg-[#f8fafc]">
      {/* Pilih sektor */}
      <div className="w-full border-b border-slate-200 bg-white">
        <div className={`${containerClass} flex flex-col gap-2 py-3 sm:flex-row sm:items-start sm:gap-3`}>
          <span className="shrink-0 pt-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400">
            {labels.sectorBarLabel}
          </span>
          <div className="flex flex-wrap gap-2">
            {sectors.map((sector) => {
              const isActive = sector.href === `/studi-kasus/${slug}`;
              return (
                <Link
                  key={sector.href}
                  href={sector.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`rounded-md px-3 py-1.5 text-[11px] font-semibold ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {sector.title}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <div className={`${containerClass} space-y-5 pb-16 pt-8`}>
        {/* Hero gelap */}
        <section className="rounded-3xl bg-[#0B132B] p-6 sm:p-10">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1 text-[11px] font-semibold text-blue-200">
            <Factory className="h-3 w-3" />
            {detail.badge}
          </span>

          <h1 className="mt-4 max-w-3xl text-3xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-[42px]">
            {detail.title}
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-200">
            {detail.description}
          </p>

          <p className="mt-6 flex items-center gap-2 text-xs text-slate-300">
            <Activity className="h-3.5 w-3.5 shrink-0 text-slate-300" />
            {detail.capacityText}
          </p>
        </section>

        {/* Tiga metrik: font monospace seperti testimoni.tsx */}
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {detail.stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 py-6 text-center"
            >
              <p
                className="text-3xl font-bold tracking-tight text-blue-600 sm:text-4xl"
                style={{ fontFamily: monoFont }}
              >
                {stat.value}
              </p>
              <p className="mt-2 text-[11px] font-semibold text-slate-800">
                {stat.label}
              </p>
            </div>
          ))}
        </section>

        {/* Bottleneck dan solusi */}
        <section className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <div className="rounded-2xl border border-rose-200 bg-rose-50/70 p-6">
            <h2 className="flex items-center gap-2 text-sm font-extrabold tracking-tight text-rose-900">
              <AlertCircle className="h-4 w-4 shrink-0 text-rose-600" />
              {labels.challengesTitle}
            </h2>
            <ul className="mt-4 space-y-3">
              {detail.challenges.map((item, index) => (
                <li key={index} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-500" />
                  <p className="text-xs leading-relaxed text-rose-900">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-emerald-200 bg-emerald-50/70 p-6">
            <h2 className="flex items-center gap-2 text-sm font-extrabold tracking-tight text-emerald-900">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
              {labels.solutionsTitle}
            </h2>
            <ul className="mt-4 space-y-3">
              {detail.solutions.map((item, index) => (
                <li key={index} className="flex gap-3">
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" />
                  <p className="text-xs leading-relaxed text-emerald-900">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Modul inti dan ajakan diskusi */}
        <section className="flex flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
              {labels.modulesLabel}
            </p>
            <div className="mt-2.5 flex flex-wrap gap-2">
              {detail.modules.map((mod) => (
                <span
                  key={mod}
                  className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-[11px] font-semibold text-blue-700"
                >
                  {mod}
                </span>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={openDemo}
            className="inline-flex shrink-0 items-center justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-xs font-bold text-white hover:bg-blue-700"
          >
            {labels.ctaButton}
          </button>
        </section>
      </div>
    </main>
  );
}