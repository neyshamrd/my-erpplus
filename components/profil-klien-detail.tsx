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
  aboutCompany: string[];
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

  return (
    <main className="min-h-screen bg-[#f8fafc] pb-16 pt-8">
      <div className="mx-auto w-full max-w-[1120px] px-4 sm:px-6 lg:px-8">
        {/* Bar navigasi atas & switcher slug klien */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <Link
            href="/#trust"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 transition-colors hover:text-blue-600"
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
                  className={`rounded-full px-3 py-1 text-[11px] font-semibold transition-colors ${
                    isCurrent
                      ? "bg-blue-600 text-white"
                      : "border border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-blue-700"
                  }`}
                >
                  {item.shortName}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Bagian atas ala lampiran 2: Judul, ringkasan & kutipan di kiri; kartu logo di kanan */}
        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-[11px] font-bold text-blue-700">
                <Building2 className="h-3.5 w-3.5" />
                <span>{profile.industry}</span>
              </div>

              <h1 className="mt-4 text-2xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl">
                {profile.headline}
              </h1>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {profile.summary}
              </p>

              <div className="mt-5 rounded-2xl border border-slate-100 bg-slate-50/80 p-4">
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
              <div className="flex min-h-[210px] flex-col items-center justify-center rounded-2xl border border-slate-200/80 bg-gradient-to-br from-blue-50/70 via-white to-indigo-50/70 p-6 text-center">
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

          {/* Kartu metrik ringkas */}
          <div className="mt-8 grid grid-cols-1 gap-4 border-t border-slate-100 pt-7 sm:grid-cols-2">
            {profile.highlights.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-slate-200/80 bg-slate-50/60 p-5 text-center"
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

        {/* Bagian bawah ala lampiran 2: Metadata di kiri, Profil Perusahaan & Modul MyERP di kanan */}
        <section className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12">
          <aside className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 lg:col-span-4 lg:self-start">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Perusahaan
              </p>
              <p className="mt-1 text-xs font-bold text-slate-900">
                {profile.companyName}
              </p>
            </div>

            <div className="border-t border-slate-100 pt-3.5">
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Lokasi
              </p>
              <p className="mt-1 inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700">
                <MapPin className="h-3.5 w-3.5 text-slate-400" />
                <span>{profile.location}</span>
              </p>
            </div>

            <div className="border-t border-slate-100 pt-3.5">
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Industri
              </p>
              <p className="mt-1 text-xs font-semibold text-slate-700">
                {profile.industry}
              </p>
            </div>
          </aside>

          <div className="space-y-6 lg:col-span-8">
            <article className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
              <h2 className="text-xl font-extrabold tracking-tight text-slate-900">
                {profileConfig.profileSectionTitle} {profile.companyName}
              </h2>
              <div className="mt-4 space-y-3.5">
                {profile.aboutCompany.map((paragraph, idx) => (
                  <p
                    key={idx}
                    className="text-sm leading-relaxed text-slate-600"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
              <div className="flex items-center gap-2">
                <Layers className="h-4 w-4 text-blue-600" />
                <h2 className="text-lg font-extrabold tracking-tight text-slate-900">
                  {profileConfig.modulesSectionTitle}
                </h2>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                {profile.usedModules.map((mod) => (
                  <Link
                    key={mod.title}
                    href={mod.href}
                    className="group rounded-xl border border-slate-200/90 bg-slate-50/50 p-4 transition-all hover:border-blue-300 hover:bg-blue-50/40"
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

              <div className="mt-6 flex flex-col justify-between gap-4 rounded-2xl bg-slate-900 p-5 text-white sm:flex-row sm:items-center">
                <div>
                  <p className="text-sm font-bold">{profileConfig.ctaTitle}</p>
                  <p className="mt-0.5 text-xs text-slate-300">
                    {profileConfig.ctaText}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={openDemo}
                  className="shrink-0 rounded-lg bg-blue-600 px-4 py-2.5 text-xs font-bold text-white transition-colors hover:bg-blue-500"
                >
                  {profileConfig.ctaButton}
                </button>
              </div>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
}    //profile klien data