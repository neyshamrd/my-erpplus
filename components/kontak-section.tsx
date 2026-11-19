"use client";

import React, { useState } from "react";
import {
  ArrowUpRight,
  Clock,
  Compass,
  MapPin,
  MessageCircle,
  PhoneCall,
  SendHorizontal,
} from "lucide-react";
import { siteConfig } from "@/lib/content-data";

export function KontakSection() {
  const data = siteConfig.kontak;
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim()) return;

    setSubmitted(true);

    const waText = `Halo PT You profit Indonesia, saya ${name.trim()}${
      company.trim() ? ` dari ${company.trim()}` : ""
    } ingin berkonsultasi mengenai solusi sistem MyERP Plus.`;

    const waUrl = `https://wa.me/${data.company.whatsappRaw}?text=${encodeURIComponent(
      waText
    )}`;

    // Buka WhatsApp di tab baru secara langsung
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="w-full bg-[#f8fafc] py-14 sm:py-20">
      <div className="mx-auto w-full max-w-[1480px] px-4 sm:px-6 lg:px-8">
        {/* Header Bagian Atas */}
        <div className="text-center">
          <span className="inline-flex items-center rounded-full border border-blue-200/70 bg-blue-50 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-blue-600">
            {data.badge}
          </span>
          <h1 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-[#0B132B] sm:text-4xl lg:text-[40px]">
            {data.titleLine1} <br className="hidden sm:inline" />
            {data.titleLine2}
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-500 sm:text-base">
            {data.subtitle}
          </p>
        </div>

        {/* Grid 2 Kolom Konten */}
        <div className="mt-10 grid grid-cols-1 items-stretch gap-6 lg:mt-12 lg:grid-cols-12">
          {/* Kolom Kiri: Informasi Kantor Pusat Operasional */}
          <div className="flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-8 lg:col-span-5">
            <div>
              {/* Badge Kantor Pusat */}
              <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-emerald-200/70 bg-emerald-50 px-3 py-1 text-[11px] font-semibold text-emerald-700">
                <Compass className="h-3.5 w-3.5 text-emerald-600" />
                {data.company.badge}
              </span>

              {/* Nama Perusahaan & Sub-judul */}
              <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                {data.company.name}
              </h2>
              <p className="mb-8 mt-1 text-xs font-medium text-slate-400">
                {data.company.tagline}
              </p>

              {/* Daftar Informasi Kontak */}
              <div className="space-y-6">
                {/* 1. Alamat Kantor */}
                <div className="flex items-start gap-3.5">
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-800">
                      {data.company.addressTitle}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-slate-600">
                      {data.company.address}
                    </p>
                  </div>
                </div>

                {/* 2. Jam Operasional */}
                <div className="flex items-start gap-3.5">
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-800">
                      {data.company.hoursTitle}
                    </p>
                    <p className="mt-1 text-xs font-medium text-slate-600">
                      {data.company.hoursWeekdays}
                    </p>
                    <p className="mt-0.5 text-[11px] text-slate-400">
                      {data.company.hoursWeekend}
                    </p>
                  </div>
                </div>

                {/* 3. Layanan Cepat & Email */}
                <div className="flex items-start gap-3.5">
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
                    <PhoneCall className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-800">
                      {data.company.serviceTitle}
                    </p>
                    <p className="mt-1 text-xs font-semibold text-slate-700">
                      {data.company.whatsapp}
                    </p>
                    <p className="mt-0.5 text-xs text-slate-600">
                      {data.company.email}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tombol Aksi di Bawah Card Kiri */}
            <div className="mt-8 grid grid-cols-1 gap-3 pt-6 sm:grid-cols-2">
              <a
                href={data.company.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#059669] px-4 py-3 text-center text-xs font-semibold text-white shadow-sm transition-all hover:bg-[#047857]"
              >
                <Compass className="h-4 w-4" />
                <span>{data.company.mapsButtonText}</span>
              </a>

              <a
                href={data.company.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0B132B] px-4 py-3 text-center text-xs font-semibold text-white shadow-sm transition-all hover:bg-slate-800"
              >
                <MessageCircle className="h-4 w-4" />
                <span>{data.company.chatButtonText}</span>
              </a>
            </div>
          </div>

          {/* Kolom Kanan: Peta Lokasi + Form Pertanyaan Teknis */}
          <div className="flex flex-col gap-4 lg:col-span-7">
            {/* Card Peta Lokasi */}
            <div className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between pb-3">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  <span>{data.map.title}</span>
                </div>
                <a
                  href={data.map.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs font-semibold text-blue-600 transition-colors hover:text-blue-700"
                >
                  <span>{data.map.routeText}</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>

              {/* Tampilan Peta Interaktif OpenStreetMap */}
              <div className="relative h-[280px] w-full overflow-hidden rounded-2xl border border-slate-200/70 bg-slate-100 sm:h-[320px]">
                <iframe
                  title="Peta Lokasi Kantor PT You profit Indonesia"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=112.5950%2C-7.9460%2C112.6320%2C-7.9250&layer=mapnik&marker=-7.9355%2C112.6180"
                  className="h-full w-full border-0"
                  loading="lazy"
                />

                {/* Floating Pill Marker di Kiri Bawah Peta */}
                <a
                  href={data.map.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-3 left-3 z-10 flex items-center gap-1.5 rounded-lg border border-slate-200/80 bg-white/95 px-3 py-1.5 text-[11px] font-semibold text-slate-700 shadow-md backdrop-blur-sm transition-colors hover:bg-white hover:text-blue-600"
                >
                  <MapPin className="h-3.5 w-3.5 text-rose-500 shrink-0" />
                  <span>{data.map.pinLabel}</span>
                </a>
              </div>
            </div>

            {/* Card Kirim Pesan atau Pertanyaan Teknis ERP */}
            <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm sm:p-6">
              <div className="flex flex-col justify-between gap-1 pb-3 sm:flex-row sm:items-center">
                <h3 className="text-sm font-bold text-slate-900">
                  {data.form.title}
                </h3>
                <span className="text-[11px] font-medium text-slate-400">
                  {data.form.responseTime}
                </span>
              </div>

              <form onSubmit={handleSubmit} className="mt-2">
                <div className="flex flex-col items-center gap-3 sm:flex-row">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={data.form.namePlaceholder}
                    required
                    className="w-full flex-1 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs text-slate-800 placeholder:text-slate-400 transition-colors focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder={data.form.companyPlaceholder}
                    className="w-full flex-1 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs text-slate-800 placeholder:text-slate-400 transition-colors focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                  <button
                    type="submit"
                    className="inline-flex w-full shrink-0 cursor-pointer items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-2.5 text-xs font-semibold text-white shadow-sm transition-all hover:bg-blue-700 sm:w-auto"
                  >
                    <span>{data.form.buttonText}</span>
                    <SendHorizontal className="h-3.5 w-3.5" />
                  </button>
                </div>

                {/* Feedback status jika telah dikirim */}
                {submitted && (
                  <p className="mt-3 text-xs font-medium text-emerald-600">
                    {data.form.successMessage}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
