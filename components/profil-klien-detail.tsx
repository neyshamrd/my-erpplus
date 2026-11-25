"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  Layers,
  MapPin,
  Quote,
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

type ClientProfileItem = {
  slug: string;
  companyName: string;
  shortName: string;
  industry: string;
  location: string;
  logoSrc?: string;
  headline: string;
  summary: string;
  picName: string;
  picRole: string;
  quote: string;
  highlights: { value: string; label: string }[];
  aboutCompany?: string[];
  sections?: ClientNarrativeSection[];
  usedModules: ClientUsedModule[];
};

const profileConfig = siteConfig.clientProfiles;
const profileItems = profileConfig.items as Record<
  string,
  ClientProfileItem | undefined
>;

const monoFont =
  "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace";

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

  return (
    <main className="min-h-screen bg-white pb-16 pt-8">
      <div className="mx-auto w-full max-w-[1140px] px-4 sm:px-6 lg:px-8">
        {/* Bar navigasi atas & switcher slug klien */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <Link
            href="/#trust"
            className="inline-flex cursor-pointer items-center gap-1.5 text-xs font-semibold text-slate-600 transition-colors hover:text-blue-600"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>{profileConfig.backLabel}</span>
          </Link>

          <div className="flex flex-wrap gap-1.5">
            {allProfiles.map((item) => {
              const isCurrent = item.slug === slug;
              return (
                <Link
                  key={item.slug}
                  href={`/profil-klien/${item.slug}`}
                  className={`cursor-pointer rounded-full px-3 py-1 text-[11px] font-semibold transition-colors ${
                    isCurrent
                      ? "bg-blue-600 text-white"
                      : "bg-slate-100/80 text-slate-600 hover:bg-blue-50 hover:text-blue-700"
                  }`}
                >
                  {item.shortName}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Bagian atas: Judul, ringkasan & kutipan di kiri; kartu logo di kanan (tanpa garis batas antar blok) */}
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

              <div className="mt-5 rounded-2xl bg-slate-50/70 p-4">
                <div className="flex items-start gap-2.5">
                  <Quote className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                  <div>
                    <p className="text-xs italic leading-relaxed text-slate-700">
                      &ldquo;{profile.quote}&rdquo;
                    </p>
                    <p className="mt-2 text-xs font-bold text-slate-900">
                      {profile.picName}{" "}
                      <span className="font-normal text-slate-500">
                        — {profile.picRole}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
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

        {/* Bagian tengah: Kolom kiri (Perusahaan, Lokasi, Industri + Modul MyERP di bawahnya) & Kolom kanan (Konten profil dinamis) */}
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

          {/* Kolom kanan: Konten profil & narasi dinamis (profil umum, before/after memakai MyERP, dll.) */}
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
          </div>
        </section>

        {/* Card Banner CTA tersendiri di paling bawah */}
        <section className="mt-8 rounded-3xl bg-[#0B132B] p-6 text-white shadow-[0_8px_30px_rgba(11,19,43,0.12)] sm:p-8">
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