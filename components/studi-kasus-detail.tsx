"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  AlertCircle,
  ArrowUpRight,
  Building2,
  Check,
  CheckCircle2,
  Factory,
} from "lucide-react";
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

type TrustClientItem = {
  id: string;
  slug: string;
  name: string;
  industry: string;
  logoSrc?: string;
  caseStudySlugs?: string[];
};

// Data detail semua studi kasus, dicari berdasarkan slug
const detailItems: Record<string, StudiKasusData | undefined> =
  siteConfig.studiKasusDetail.items;

// Daftar klien dari siteConfig
const trustClients = (siteConfig.trust.clients ?? []) as TrustClientItem[];

// Daftar 11 sektor untuk topbar "Pilih Sektor", diambil dari dropdown navbar
const studiNav = siteConfig.nav.mainNav.find((item) => item.title === "Studi Kasus");
const sectors: { title: string; href: string }[] = studiNav?.items ?? [];

// Font monospace untuk angka (sama dengan testimoni.tsx)
const monoFont =
  "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace";

// Lebar konten utama
const containerClass = "mx-auto w-full max-w-[1090px] px-4 sm:px-6 lg:px-8";

// Hanya mengambil klien yang eksplisit terdaftar pada caseStudySlugs studi kasus ini
function getMatchingClients(slug: string): TrustClientItem[] {
  return trustClients.filter((client) =>
    client.caseStudySlugs?.includes(slug)
  );
}

export function StudiKasusDetail({ slug }: { slug: string }) {
  const { openDemo } = useDemoModal();
  const labels = siteConfig.studiKasusDetail;
  const detail = detailItems[slug];

  if (!detail) return null;

  const matchingClients = getMatchingClients(slug);

  // 4 kartu: 4 kolom di desktop; 3 kartu: 3 kolom
  const statCols =
    detail.stats.length >= 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-3";
  const statSize =
    detail.stats.length >= 4 ? "text-2xl sm:text-3xl" : "text-3xl sm:text-4xl";

  return (
    <main className="relative isolate w-full overflow-x-clip bg-white">
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
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#f6f9ff] via-white to-white"
      >
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

      {/* Topbar Pilih Sektor */}
      <div className="w-full border-b border-slate-200 bg-white/95 backdrop-blur-sm">
        <div
          className={`${containerClass} flex flex-col gap-2 py-3 sm:flex-row sm:items-start sm:gap-3`}
        >
          <span className="shrink-0 pt-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400">
            {labels.sectorBarLabel}
          </span>
          <nav aria-label={labels.sectorBarLabel} className="flex flex-wrap gap-2">
            {sectors.map((sector) => {
              const isActive = sector.href === `/studi-kasus/${slug}`;
              return (
                <Link
                  key={sector.href}
                  href={sector.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`cursor-pointer rounded-md px-3 py-1.5 text-[11px] font-semibold transition-colors ${
                    isActive
                      ? "bg-blue-600 text-white shadow-sm"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                  }`}
                >
                  {sector.title}
                </Link>
              );
            })}
          </nav>
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

        {/* Metrik: font monospace seperti testimoni.tsx */}
        <section className={`grid grid-cols-1 gap-4 ${statCols}`}>
          {detail.stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 py-6 text-center"
            >
              <p
                className={`font-bold tracking-tight text-blue-600 ${statSize}`}
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
            className="inline-flex shrink-0 cursor-pointer items-center justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-xs font-bold text-white transition-colors hover:bg-blue-700"
          >
            {labels.ctaButton}
          </button>
        </section>

        {/* Industri Klien yang Sesuai dengan Studi Kasus */}
        {matchingClients.length > 0 && (
          <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2">
                <Building2 className="h-4 w-4 text-blue-600" />
                <h2 className="text-sm font-extrabold tracking-tight text-slate-900">
                  Klien Pengguna di Sektor {detail.sectorName}
                </h2>
              </div>
              <p className="text-[11px] text-slate-500">
                Klik kartu perusahaan untuk melihat profil lengkap
              </p>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {matchingClients.map((client) => (
                <Link
                  key={client.id}
                  href={`/klien/${client.slug}`}
                  className="group flex cursor-pointer flex-col justify-between rounded-2xl border border-slate-200/90 bg-slate-50/50 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:bg-white hover:shadow-md"
                >
                  <div className="flex h-14 items-center justify-center rounded-xl border border-slate-100 bg-white px-3">
                    {client.logoSrc ? (
                      <Image
                        src={client.logoSrc}
                        alt={client.name}
                        width={140}
                        height={44}
                        className="h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
                      />
                    ) : (
                      <span className="text-xs font-extrabold text-slate-800">
                        {client.name}
                      </span>
                    )}
                  </div>

                  <div className="mt-3.5">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-xs font-extrabold text-slate-900 group-hover:text-blue-700">
                        {client.name}
                      </h3>
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-blue-600" />
                    </div>

                    <span className="mt-2 inline-flex items-center rounded-full bg-blue-50 px-2.5 py-0.5 text-[10px] font-semibold text-blue-700">
                      {client.industry}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}