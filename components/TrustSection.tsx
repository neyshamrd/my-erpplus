"use client";

import React, { useState, useEffect } from "react";
import {
  IndoManufakturLogo,
  CentralDistribusiLogo,
  SastroBogaLogo,
  NusantaraMedikaLogo,
  KaryaMultiNiagaLogo,
} from "./BrandLogos";
import { X, ArrowRight, TrendingUp } from "lucide-react";

interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  metrics: string;
  description: string;
  quote: string;
}

const caseStudiesData: Record<string, CaseStudy> = {
  manufaktur: {
    id: "manufaktur",
    client: "PT. Prima Manufaktur Solusindo",
    industry: "Manufaktur & Fabrikasi Komponen",
    metrics: "Hemat 35% Biaya Overstock Bahan Baku",
    description:
      "Menerapkan modul Bill of Materials (BOM) dan Work Order MyERP Plus untuk menghitung kebutuhan bahan baku secara akurat dan mengontrol waste produksi.",
    quote:
      "“Dulu kami sering overstock bahan baku dan selisih laporan produksi. Sejak menggunakan MyERP Plus, perencanaan produksi dan HPP menjadi sangat presisi.”",
  },
  distribusi: {
    id: "distribusi",
    client: "Central Mega Distribusi",
    industry: "Distribusi FMCG & Multi-Cabang",
    metrics: "Sinkronisasi 14 Gudang Real-time",
    description:
      "Mengintegrasikan pencatatan mutasi barang antar gudang, surat jalan otomatis, dan penagihan piutang pelanggan di 14 titik distribusi nasional.",
    quote:
      "“Manajemen tidak perlu menunggu laporan rekap bulanan lagi. Data stok dan piutang toko terlihat langsung dalam satu dashboard cloud.”",
  },
  sastro: {
    id: "sastro",
    client: "Sastro Boga Foods Enterprise",
    industry: "Pengolahan Makanan & F&B Retail",
    metrics: "Closing Buku Finansial 4x Lebih Cepat",
    description:
      "Otomasi pencatatan jurnal kas keluar-masuk, rekonsiliasi bank otomatis, dan laporan laba rugi per divisi operasional.",
    quote:
      "“Proses tutup buku akhir bulan yang biasanya memakan waktu berminggu-minggu kini selesai dalam 2 hari kerja berkat auto-journaling MyERP Plus.”",
  },
  medika: {
    id: "medika",
    client: "Nusantara Medika Farma",
    industry: "Alat Medis & Produk Farmasi",
    metrics: "100% Kepatuhan Pajak & E-Faktur",
    description:
      "Integrasi perhitungan PPN, PPh, dan penomoran faktur pajak otomatis langsung dari invoice penjualan barang medis berstandar BPOM.",
    quote:
      "“Audit eksternal dan pelaporan pajak tahunan berjalan mulus tanpa temuan selisih faktur pajak berkat validasi otomatis sistem.”",
  },
  karya: {
    id: "karya",
    client: "Karya Multi Supply & Logistics",
    industry: "Rantai Pasok & Pengadaan Logistik",
    metrics: "Percepatan Siklus Order hingga 60%",
    description:
      "Digitalisasi proses Purchase Requisition (PR), Purchase Order (PO), hingga penerimaan barang di gudang dengan approval bertingkat.",
    quote:
      "“Persetujuan pembelian barang dapat dilakukan pimpinan via smartphone di mana saja tanpa menunggu dokumen fisik bertumpuk.”",
  },
};

interface PartnerItem {
  id: string;
  name: string;
  category: string;
  logo: React.ReactNode;
  caseStudyKey: string;
}

const partnerCompanies: PartnerItem[] = [
  {
    id: "manufaktur",
    name: "Prima Manufaktur",
    category: "Manufaktur & Fabrikasi",
    logo: <IndoManufakturLogo className="scale-95" />,
    caseStudyKey: "manufaktur",
  },
  {
    id: "distribusi",
    name: "Central Mega Distribusi",
    category: "Distribusi FMCG & Cabang",
    logo: <CentralDistribusiLogo className="scale-95" />,
    caseStudyKey: "distribusi",
  },
  {
    id: "sastro",
    name: "Sastro Boga Foods",
    category: "Pengolahan Makanan & F&B",
    logo: <SastroBogaLogo className="scale-95" />,
    caseStudyKey: "sastro",
  },
  {
    id: "medika",
    name: "Nusantara Medika Farma",
    category: "Alat Medis & Farmasi",
    logo: <NusantaraMedikaLogo className="scale-95" />,
    caseStudyKey: "medika",
  },
  {
    id: "karya",
    name: "Karya Multi Supply & Logistics",
    category: "Rantai Pasok & Logistik",
    logo: <KaryaMultiNiagaLogo className="scale-95" />,
    caseStudyKey: "karya",
  },
];

export function TrustSection() {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  // Lock body scroll and listen for Escape key when modal is open
  useEffect(() => {
    if (!selectedCase) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedCase(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedCase]);

  return (
    <section className="w-full overflow-hidden py-16 bg-white border-t border-slate-100 select-none">
      <div className="w-full">
        {/* Section Title */}
        <h2 className="text-center text-sm sm:text-base font-semibold text-slate-700 tracking-tight mb-10 sm:mb-12 px-4">
          Dipercaya oleh 10,000+ Bisnis, Manufaktur & Distributor di Indonesia
        </h2>

        {/* Marquee Outer Container with Edge Fades */}
        <div className="relative w-full overflow-hidden marquee-outer-container motion-reduce:overflow-x-auto">
          {/* Subtle Gradient Fade Masks at Left and Right Edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-white via-white/80 to-transparent z-10 motion-reduce:hidden" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-white via-white/80 to-transparent z-10 motion-reduce:hidden" />

          {/* Marquee Track: Tripled sets for a seamless 33.33% continuous loop */}
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused] will-change-transform motion-reduce:animate-none motion-reduce:transform-none">
            {[0, 1, 2].map((setIndex) => (
              <div
                key={`marquee-set-${setIndex}`}
                className="flex shrink-0 items-center gap-6 pr-6"
                aria-hidden={setIndex > 0 ? true : undefined}
              >
                {partnerCompanies.map((partner) => (
                  <div
                    key={`${partner.id}-set-${setIndex}`}
                    className="bg-white border border-slate-200/80 rounded-2xl p-6 min-w-[240px] shadow-sm hover:shadow-md transition-shadow flex flex-col items-center justify-between gap-4 text-center shrink-0"
                  >
                    {/* Logo Display */}
                    <div className="h-12 flex items-center justify-center grayscale hover:grayscale-0 opacity-80 hover:opacity-100 transition-all duration-300">
                      {partner.logo}
                    </div>

                    {/* Company Name & Sector */}
                    <div className="space-y-1">
                      <h3 className="font-bold text-slate-800 text-sm tracking-tight">
                        {partner.name}
                      </h3>
                      <p className="text-[11px] text-slate-500 font-medium">
                        {partner.category}
                      </p>
                    </div>

                    {/* Case Study Pill Action Button */}
                    <button
                      type="button"
                      onClick={() => setSelectedCase(caseStudiesData[partner.caseStudyKey])}
                      className="rounded-full bg-slate-900 text-white text-xs font-semibold px-4 py-1.5 hover:bg-blue-600 transition-colors cursor-pointer"
                    >
                      Studi kasus
                    </button>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Case Study Modal Drawer */}
      {selectedCase && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-study-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-modal-overlay-in"
          onClick={() => setSelectedCase(null)}
        >
          <div
            className="relative w-full max-w-lg bg-white rounded-2xl p-6 sm:p-7 shadow-2xl border border-slate-100 animate-modal-card-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                  Studi Kasus MyERP Plus
                </span>
                <h3 id="case-study-title" className="text-lg font-bold text-slate-900">
                  {selectedCase.client}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedCase(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Tutup studi kasus"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-50 text-blue-700 font-bold text-sm border border-blue-100">
                <TrendingUp className="w-4 h-4" />
                <span>Dampak Bisnis: {selectedCase.metrics}</span>
              </div>

              <div>
                <span className="text-xs font-medium text-slate-400">Industri</span>
                <p className="text-sm font-semibold text-slate-800">
                  {selectedCase.industry}
                </p>
              </div>

              <div>
                <span className="text-xs font-medium text-slate-400">Implementasi Solusi Cloud</span>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {selectedCase.description}
                </p>
              </div>

              <blockquote className="bg-slate-50 p-4 rounded-xl border-l-4 border-blue-600 text-xs sm:text-sm italic text-slate-700">
                {selectedCase.quote}
              </blockquote>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setSelectedCase(null)}
                className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 cursor-pointer"
              >
                Tutup
              </button>
              <a
                href="#trial"
                onClick={() => setSelectedCase(null)}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-xs"
              >
                <span>Konsultasikan Kebutuhan ERP Anda</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
