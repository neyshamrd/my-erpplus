"use client";

import React, { useCallback, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeftRight,
  ArrowRight,
  BarChart3,
  Building2,
  CheckCircle2,
  Clock,
  FileText,
  Layers,
  MapPin,
  Package,
  Users,
  Wallet,
  XCircle,
} from "lucide-react";
import { siteConfig } from "@/lib/content-data";
import { useDemoModal } from "./demo-modal";

type ClientUsedModule = {
  title: string;
  description: string;
  href: string;
};

type ClientNarrativeSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

type BeforeAfterRow = {
  /** Kunci ikon: clock | document | stock | finance | report | team */
  icon?: string;
  label: string;
  before: string;
  after: string;
};

type BeforeAfterConfig = {
  sectionTitle: string;
  sectionSubtitle: string;
  beforeBadge: string;
  afterBadge: string;
  hint: string;
  rows: BeforeAfterRow[];
};

type ClientProfileItem = {
  slug: string;
  companyName: string;
  shortName: string;
  industry: string;
  location: string;
  logoSrc?: string;
  headline: string;
  summary: string;
  highlights: { value: string; label: string }[];
  aboutCompany?: string[];
  sections?: ClientNarrativeSection[];
  /** Opsional: isi baris perbandingan khusus klien. Jika kosong, memakai default. */
  beforeAfterRows?: BeforeAfterRow[];
  usedModules: ClientUsedModule[];
};

const profileConfig = siteConfig.clientProfiles;
const profileItems = profileConfig.items as Record<
  string,
  ClientProfileItem | undefined
>;
const defaultBeforeAfter = (
  profileConfig as { defaultBeforeAfter?: BeforeAfterConfig }
).defaultBeforeAfter;

const monoFont =
  "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace";

const RELATED_TITLE = "Baca Profile Pelanggan Kami Lainnya";
const RELATED_LINK_LABEL = "Baca profil";
const RELATED_COUNT = 3;

const rowIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  clock: Clock,
  document: FileText,
  stock: Package,
  finance: Wallet,
  report: BarChart3,
  team: Users,
};

/* -------------------------------------------------------------------------- */
/*  Komponen Slider Perbandingan Sebelum / Sesudah (versi minimalis)          */
/* -------------------------------------------------------------------------- */

function BeforeAfterSlider({
  config,
  rows,
}: {
  config: BeforeAfterConfig;
  rows: BeforeAfterRow[];
}) {
  const [pos, setPos] = useState<number>(50);
  const [dragging, setDragging] = useState<boolean>(false);
  const areaRef = useRef<HTMLDivElement | null>(null);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = areaRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    if (rect.width <= 0) return;
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(95, Math.max(5, next)));
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      // abaikan jika pointer capture tidak didukung
    }
    setDragging(true);
    updateFromClientX(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging) return;
    updateFromClientX(e.clientX);
  };

  const handlePointerEnd = () => {
    setDragging(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      setPos((p) => Math.max(5, p - 5));
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      setPos((p) => Math.min(95, p + 5));
    } else if (e.key === "Home") {
      e.preventDefault();
      setPos(5);
    } else if (e.key === "End") {
      e.preventDefault();
      setPos(95);
    }
  };

  const beforeClip = `inset(0 ${100 - pos}% 0 0)`;
  const afterClip = `inset(0 0 0 ${pos}%)`;

  return (
    <div className="overflow-hidden rounded-xl border border-slate-200/70 bg-slate-50/50">
      {/* Header ringkas */}
      <div className="flex items-center justify-between gap-2 border-b border-slate-200/60 px-3 py-2">
        <span className="inline-flex items-center gap-1 rounded-full bg-rose-50 px-2 py-0.5 text-[10px] font-bold text-rose-600">
          <span className="h-1 w-1 rounded-full bg-rose-500" />
          {config.beforeBadge}
        </span>

        <span className="hidden items-center gap-1 text-[10px] font-medium text-slate-400 sm:inline-flex">
          <ArrowLeftRight className="h-2.5 w-2.5" />
          {config.hint}
        </span>

        <span className="inline-flex items-center gap-1 rounded-full bg-sky-50 px-2 py-0.5 text-[10px] font-bold text-blue-700">
          <span className="h-1 w-1 rounded-full bg-blue-600" />
          {config.afterBadge}
        </span>
      </div>

      {/* Area interaktif */}
      <div
        className="touch-pan-y select-none px-3 py-3"
        style={{ cursor: dragging ? "grabbing" : "ew-resize" }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerEnd}
        onPointerCancel={handlePointerEnd}
      >
        <div ref={areaRef} className="relative">
          <div className="space-y-1.5">
            {rows.map((row, idx) => {
              const Icon = (row.icon && rowIconMap[row.icon]) || Layers;
              return (
                <div key={`${row.label}-${idx}`} className="grid">
                  {/* Lapisan SEBELUM (terlihat di kiri garis) */}
                  <div
                    className="col-start-1 row-start-1 flex flex-col gap-0.5 rounded-lg border border-rose-100/80 bg-white px-3 py-2 sm:flex-row sm:items-center sm:gap-2"
                    style={{ clipPath: beforeClip }}
                  >
                    <div className="flex shrink-0 items-center gap-1.5 sm:w-[38%]">
                      <Icon className="h-3 w-3 shrink-0 text-slate-400" />
                      <span className="text-[11px] font-semibold text-slate-700">
                        {row.label}
                      </span>
                    </div>
                    <div className="flex min-w-0 flex-1 items-center gap-1.5 text-[11px] font-semibold text-rose-600">
                      <XCircle className="h-3 w-3 shrink-0" />
                      <span>{row.before}</span>
                    </div>
                  </div>

                  {/* Lapisan SESUDAH (terlihat di kanan garis) */}
                  <div
                    className="col-start-1 row-start-1 flex flex-col gap-0.5 rounded-lg border border-sky-100 bg-white px-3 py-2 sm:flex-row sm:items-center sm:gap-2"
                    style={{ clipPath: afterClip }}
                  >
                    <div className="flex shrink-0 items-center gap-1.5 sm:w-[38%]">
                      <Icon className="h-3 w-3 shrink-0 text-slate-400" />
                      <span className="text-[11px] font-semibold text-slate-700">
                        {row.label}
                      </span>
                    </div>
                    <div className="flex min-w-0 flex-1 items-center gap-1.5 text-[11px] font-semibold text-emerald-700">
                      <CheckCircle2 className="h-3 w-3 shrink-0" />
                      <span>{row.after}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Garis pembagi + handle */}
          <div
            className="pointer-events-none absolute -bottom-1.5 -top-1.5 w-px -translate-x-1/2 bg-blue-600"
            style={{ left: `${pos}%` }}
          >
            <div
              role="slider"
              tabIndex={0}
              aria-label="Geser untuk membandingkan sebelum dan sesudah"
              aria-orientation="horizontal"
              aria-valuemin={5}
              aria-valuemax={95}
              aria-valuenow={Math.round(pos)}
              onKeyDown={handleKeyDown}
              className="pointer-events-auto absolute left-1/2 top-1/2 flex h-7 w-7 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full border-2 border-white bg-blue-600 text-white shadow-md outline-none transition-transform hover:scale-105 focus-visible:ring-2 focus-visible:ring-blue-300"
            >
              <ArrowLeftRight className="h-3 w-3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Section: Baca Profile Pelanggan Kami Lainnya                              */
/* -------------------------------------------------------------------------- */

function RelatedClients({
  currentSlug,
  profiles,
}: {
  currentSlug: string;
  profiles: ClientProfileItem[];
}) {
  const currentIndex = profiles.findIndex((item) => item.slug === currentSlug);
  const others = profiles.filter((item) => item.slug !== currentSlug);

  // Urutan berputar: mulai dari klien setelah klien yang sedang dibuka
  const start = currentIndex >= 0 ? currentIndex : 0;
  const rotated = [...others.slice(start), ...others.slice(0, start)];
  const related = rotated.slice(0, RELATED_COUNT);

  if (related.length === 0) return null;

  return (
    <section className="mt-10">
      <h2 className="text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl">
        {RELATED_TITLE}
      </h2>

      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {related.map((item) => (
          <Link
            key={item.slug}
            href={`/klien/${item.slug}`}
            className="group flex cursor-pointer flex-col rounded-2xl border border-transparent bg-slate-100/70 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-200 hover:bg-white hover:shadow-md"
          >
            {/* Panel gambar (logo perusahaan) */}
            <div className="flex h-40 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-white via-slate-50 to-blue-50 px-6">
              {item.logoSrc ? (
                <Image
                  src={item.logoSrc}
                  alt={item.companyName}
                  width={200}
                  height={80}
                  className="h-16 w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              ) : (
                <span className="text-center text-lg font-extrabold text-slate-800">
                  {item.companyName}
                </span>
              )}
            </div>

            {/* Badge industri */}
            <div className="mt-4">
              <span className="inline-flex max-w-full items-center rounded-full border border-rose-300 bg-white/60 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-rose-600">
                <span className="truncate">{item.industry}</span>
              </span>
            </div>

            {/* Nama perusahaan */}
            <p className="mt-3 text-[11px] font-semibold text-slate-500">
              {item.companyName}
            </p>

            {/* Judul */}
            <h3 className="mt-1.5 line-clamp-3 text-sm font-bold leading-snug text-slate-900">
              {item.headline}
            </h3>

            {/* Tautan */}
            <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-xs font-medium text-blue-600">
              <span>{RELATED_LINK_LABEL}</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Halaman Detail Profil Klien                                               */
/* -------------------------------------------------------------------------- */

export function ProfilKlienDetail({ slug }: { slug: string }) {
  const { openDemo } = useDemoModal();
  const profile = profileItems[slug];

  if (!profile) return null;

  const allProfiles = Object.values(profileItems).filter(
    (item): item is ClientProfileItem => Boolean(item)
  );

  // Mendukung struktur `sections` dinamis sekaligus tetap kompatibel dengan `aboutCompany`
  const narrativeSections: ClientNarrativeSection[] =
    profile.sections && profile.sections.length > 0
      ? profile.sections
      : [
          {
            title: `${profileConfig.profileSectionTitle} ${profile.companyName}`,
            paragraphs: profile.aboutCompany ?? [],
          },
        ];

  // Data perbandingan sebelum/sesudah: pakai milik klien jika ada, jika tidak pakai default
  const beforeAfterRows: BeforeAfterRow[] =
    profile.beforeAfterRows && profile.beforeAfterRows.length > 0
      ? profile.beforeAfterRows
      : defaultBeforeAfter?.rows ?? [];

  return (
    <main className="min-h-screen bg-white pb-16 pt-8">
      <div className="mx-auto w-full max-w-[1140px] px-4 sm:px-6 lg:px-8">
        {/* Bagian atas: Judul & ringkasan di kiri; kartu logo di kanan */}
        <section className="rounded-3xl bg-white p-6 shadow-[0_4px_24px_rgba(15,23,42,0.04)] sm:p-10">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50/90 px-3 py-1 text-[11px] font-bold text-blue-700">
                <Building2 className="h-3.5 w-3.5" />
                <span>{profile.industry}</span>
              </div>

              <h1 className="mt-4 text-2xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl">
                {profile.headline}
              </h1>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {profile.summary}
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="flex min-h-[210px] flex-col items-center justify-center rounded-2xl bg-slate-50/60 p-6 text-center">
                {profile.logoSrc ? (
                  <Image
                    src={profile.logoSrc}
                    alt={profile.companyName}
                    width={180}
                    height={72}
                    className="h-16 w-auto object-contain"
                  />
                ) : (
                  <span className="text-xl font-extrabold text-slate-900">
                    {profile.companyName}
                  </span>
                )}
                <p className="mt-4 text-sm font-bold text-slate-900">
                  {profile.companyName}
                </p>
                <p className="mt-1 text-xs text-slate-500">{profile.industry}</p>
              </div>
            </div>
          </div>

          {/* Kartu metrik ringkas (tanpa garis pemisah) */}
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {profile.highlights.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl bg-slate-50/70 p-5 text-center"
              >
                <p
                  className="text-2xl font-bold text-blue-600 sm:text-3xl"
                  style={{ fontFamily: monoFont }}
                >
                  {item.value}
                </p>
                <p className="mt-1.5 text-xs font-semibold text-slate-700">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Bagian tengah: Kolom kiri (Perusahaan, Lokasi, Industri + Modul MyERP di bawahnya) & Kolom kanan (Konten profil dinamis + Before/After) */}
        <section className="mt-7 grid grid-cols-1 gap-7 lg:grid-cols-12 lg:items-start">
          {/* Kolom kiri: Metadata perusahaan + Modul yang digunakan di bawahnya */}
          <div className="space-y-6 lg:col-span-4">
            <aside className="space-y-5 rounded-3xl bg-white p-6 shadow-[0_4px_24px_rgba(15,23,42,0.04)]">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Perusahaan
                </p>
                <p className="mt-1 text-xs font-bold text-slate-900">
                  {profile.companyName}
                </p>
              </div>

              <div className="pt-1">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Lokasi
                </p>
                <div className="mt-1.5 flex items-start gap-2 text-xs font-semibold leading-relaxed text-slate-700">
                  <MapPin
                    className="mt-0.5 h-4 w-4 shrink-0 text-blue-600"
                    strokeWidth={2.25}
                    aria-hidden="true"
                  />
                  <span className="min-w-0 flex-1">{profile.location}</span>
                </div>
              </div>

              <div className="pt-1">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Industri
                </p>
                <p className="mt-1 text-xs font-semibold text-slate-700">
                  {profile.industry}
                </p>
              </div>
            </aside>

            {/* Section Modul yang digunakan diletakkan di bawah informasi perusahaan */}
            <article className="rounded-3xl bg-white p-6 shadow-[0_4px_24px_rgba(15,23,42,0.04)]">
              <div className="flex items-center gap-2">
                <Layers className="h-4 w-4 text-blue-600" />
                <h2 className="text-sm font-extrabold tracking-tight text-slate-900">
                  {profileConfig.modulesSectionTitle}
                </h2>
              </div>

              <div className="mt-4 space-y-3">
                {profile.usedModules.map((mod) => (
                  <Link
                    key={mod.title}
                    href={mod.href}
                    className="group block cursor-pointer rounded-2xl bg-slate-50/75 p-4 transition-all duration-200 hover:bg-blue-50/60"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-xs font-extrabold text-slate-900 group-hover:text-blue-700">
                        {mod.title}
                      </h3>
                      <ArrowRight className="h-3.5 w-3.5 shrink-0 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:text-blue-600" />
                    </div>
                    <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                      {mod.description}
                    </p>
                  </Link>
                ))}
              </div>
            </article>
          </div>

          {/* Kolom kanan: Konten profil & narasi dinamis + card perbandingan Before/After */}
          <div className="space-y-6 lg:col-span-8">
            <article className="rounded-3xl bg-white p-6 shadow-[0_4px_24px_rgba(15,23,42,0.04)] sm:p-8">
              <div className="space-y-8">
                {narrativeSections.map((section, sectionIdx) => (
                  <div key={`${section.title}-${sectionIdx}`} className="space-y-3.5">
                    <h2 className="text-xl font-extrabold tracking-tight text-slate-900">
                      {section.title}
                    </h2>

                    {section.paragraphs && section.paragraphs.length > 0 && (
                      <div className="space-y-3.5">
                        {section.paragraphs.map((paragraph, pIdx) => (
                          <p
                            key={pIdx}
                            className="text-sm leading-relaxed text-slate-600"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    )}

                    {section.bullets && section.bullets.length > 0 && (
                      <ul className="space-y-2.5 pt-1">
                        {section.bullets.map((bullet, bIdx) => (
                          <li
                            key={bIdx}
                            className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-600"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </article>

            {/* Card perbandingan Sebelum vs Sesudah memakai MyERP Plus */}
            {defaultBeforeAfter && beforeAfterRows.length > 0 && (
              <article className="rounded-3xl bg-white p-5 shadow-[0_4px_24px_rgba(15,23,42,0.04)] sm:p-6">
                <h2 className="text-base font-extrabold tracking-tight text-slate-900">
                  {defaultBeforeAfter.sectionTitle}
                </h2>
                <p className="mt-1 text-xs leading-relaxed text-slate-500">
                  {defaultBeforeAfter.sectionSubtitle}
                </p>

                <div className="mt-4">
                  <BeforeAfterSlider
                    config={defaultBeforeAfter}
                    rows={beforeAfterRows}
                  />
                </div>
              </article>
            )}
          </div>
        </section>

        {/* Baca profile pelanggan kami lainnya */}
        <RelatedClients currentSlug={slug} profiles={allProfiles} />

        {/* Card Banner CTA tersendiri di paling bawah */}
        <section className="mt-10 rounded-3xl bg-[#0B132B] p-6 text-white shadow-[0_8px_30px_rgba(11,19,43,0.12)] sm:p-8">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
            <div className="max-w-2xl">
              <h2 className="text-lg font-extrabold tracking-tight text-white sm:text-xl">
                {profileConfig.ctaTitle}
              </h2>
              <p className="mt-1 text-xs leading-relaxed text-slate-300 sm:text-sm">
                {profileConfig.ctaText}
              </p>
            </div>

            <button
              type="button"
              onClick={openDemo}
              className="inline-flex shrink-0 cursor-pointer items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-xs font-bold text-white transition-colors hover:bg-blue-500"
            >
              {profileConfig.ctaButton}
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}