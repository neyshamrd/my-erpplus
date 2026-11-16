"use client";

import React, { useState } from "react";
import { Star } from "lucide-react";
import {
  IndoManufakturLogo,
  CentralDistribusiLogo,
  SastroBogaLogo,
  NusantaraMedikaLogo,
  KaryaMultiNiagaLogo,
} from "./brand-logos";

interface Testimonial {
  id: string;
  company: string;
  logo: React.ReactNode;
  title: string;
  quote: string; // TODO: replace with real testimonial
  name: string;
  role: string;
  rating: number; // 1-5
}

const testimonials: Testimonial[] = [
  {
    id: "manufaktur",
    company: "Prima Manufaktur",
    logo: <IndoManufakturLogo className="h-8 w-auto" />, // adjust size as needed
    title: "Manufaktur & Fabrikasi Komponen",
    quote: "“Dulu kami sering overstock bahan baku dan selisih laporan produksi. Sejak menggunakan MyERP Plus, perencanaan produksi dan HPP menjadi sangat presisi.”",
    name: "Budi Santoso",
    role: "Direktur Operasional",
    rating: 5,
  },
  {
    id: "distribusi",
    company: "Central Mega Distribusi",
    logo: <CentralDistribusiLogo className="h-8 w-auto" />, 
    title: "Distribusi FMCG & Multi‑Cabang",
    quote: "“Manajemen tidak perlu menunggu laporan rekap bulanan lagi. Data stok dan piutang toko terlihat langsung dalam satu dashboard cloud.”",
    name: "Rani Pertiwi",
    role: "Manajer Keuangan",
    rating: 5,
  },
  {
    id: "sastro",
    company: "Sastro Boga Foods",
    logo: <SastroBogaLogo className="h-8 w-auto" />, 
    title: "Pengolahan Makanan & F&B Retail",
    quote: "“Proses tutup buku akhir bulan yang biasanya memakan waktu berminggu‑minggu kini selesai dalam 2 hari kerja berkat auto‑journaling MyERP Plus.”",
    name: "Andi Kurniawan",
    role: "Chief Accounting Officer",
    rating: 5,
  },
  {
    id: "medika",
    company: "Nusantara Medika Farma",
    logo: <NusantaraMedikaLogo className="h-8 w-auto" />, 
    title: "Alat Medis & Produk Farmasi",
    quote: "“Audit eksternal dan pelaporan pajak tahunan berjalan mulus tanpa temuan selisih faktur pajak berkat validasi otomatis sistem.”",
    name: "Dr. Siti Rahma",
    role: "Head of Compliance",
    rating: 5,
  },
  {
    id: "karya",
    company: "Karya Multi Supply & Logistics",
    logo: <KaryaMultiNiagaLogo className="h-8 w-auto" />, 
    title: "Rantai Pasok & Pengadaan Logistik",
    quote: "“Persetujuan pembelian barang dapat dilakukan pimpinan via smartphone di mana saja tanpa menunggu dokumen fisik bertumpuk.”",
    name: "Hendra Wijaya",
    role: "VP Supply Chain",
    rating: 5,
  },
];

export function TestimonialSection() {
  const [activeId, setActiveId] = useState<string>(testimonials[0].id);

  const active = testimonials.find((t) => t.id === activeId) ?? testimonials[0];

  return (
    <section id="testimoni" className="w-full bg-[#153E86] py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-left mb-10 lg:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Testimoni Klien MyERP Plus
          </h2>
          <p className="mt-3 text-base md:text-lg text-slate-200 max-w-2xl">
            Dengarkan langsung apa yang dikatakan para pemimpin industri tentang bagaimana MyERP Plus meningkatkan operasi mereka.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8" role="tablist" aria-label="Testimonial tabs">
          {testimonials.map((t) => (
            <button
              key={t.id}
              role="tab"
              aria-selected={t.id === activeId}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                t.id === activeId
                  ? "bg-white text-[#153E86]"
                  : "bg-white/20 text-white hover:bg-white/30"
              }`}
              onClick={() => setActiveId(t.id)}
            >
              {t.company}
            </button>
          ))}
        </div>

        {/* Testimonial Card */}
        <div className="animate-testimonial-fade bg-white rounded-2xl shadow-lg p-8 md:p-10 max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-shrink-0">{active.logo}</div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900">{active.title}</h3>
              <p className="text-sm text-slate-600">{active.company}</p>
            </div>
          </div>
          <p className="italic text-slate-800 mb-6">{active.quote}</p>
          <div className="flex items-center space-x-2 mb-4">
            {Array.from({ length: active.rating }).map((_, i) => (
              <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
            ))}
          </div>
          <p className="font-medium text-slate-900">{active.name}</p>
          <p className="text-sm text-slate-600">{active.role}</p>
        </div>
      </div>
    </section>
  );
}
