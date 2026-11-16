"use client";

import React from "react";
import Link from "next/link";
import {
  CheckCircle2,
  ThumbsUp,
  Lock,
  ArrowRight,
  TrendingUp,
  FileSpreadsheet,
  Boxes,
  ShoppingCart,
  Building2,
  Check,
  AlertCircle,
  FileText,
  DollarSign,
  ArrowUpRight,
  Star,
} from "lucide-react";

export interface FeatureItem {
  id: string;
  badge: string;
  title: string;
  description: string;
  bullets: string[];
  mockupType: "finance" | "inventory" | "sales" | "lainnya";
}

const featuresData: FeatureItem[] = [
  {
    id: "finance",
    badge: "ERP Keuangan",
    title: "ERP Keuangan",
    description:
      "MyERPPlus menghadirkan Finance & Accounting sebagai pusat kekuatan finansial perusahaan untuk mengelola arus uang masuk dan keluar melalui Kas dan Bank, Jurnal Memorial, hingga Piutang Karyawan.",
    bullets: [
      "Transaksi Kas dan Bank serta Jurnal Memorial yang transparan",
      "Pengelolaan kewajiban pembayaran Piutang Karyawan yang tepat waktu",
      "Data master yang solid untuk analisis, laporan, statistik, dan pengendalian keuangan",
    ],
    mockupType: "finance",
  },
  {
    id: "inventory",
    badge: "ERP Pabrik",
    title: "ERP Pabrik",
    description:
     "Pastikan tim produksi, persediaan, dan manajer pembelian Anda terhubung dengan mudah ke informasi yang paling up-to-date untuk memaksimalkan produksi.",
    bullets: [
      "Menghubungkan tim produksi, persediaan, dan manajer pembelian dengan informasi yang up-to-date",
      "Memastikan semua pihak berada di tempat dan sistem yang sama untuk kelancaran operasional",
      "Membantu setiap orang untuk fokus penuh dalam memaksimalkan kapasitas produksi",
    ],
    mockupType: "inventory",
  },
  {
    id: "sales",
    badge: "ERP Dagang",
    title: "ERP Dagang",
    description:
      "Bagian penjualan Anda mendapatkan laporan yang lengkap dan informasi up-to-date di ujung jari untuk menjawab setiap pertanyaan pelanggan secara akurat.",
    bullets: [
      "Menyediakan informasi ketersediaan unit tertentu dalam persediaan secara real-time",
      "Menampilkan detail data harga, harga kuantitas, biaya, batas kredit, hingga informasi deposito",
      "Memfasilitasi menu Sales lengkap mulai dari order penjualan, pengecekan barang, invoice, packing list, retur, hingga penagihan dan pembayaran",
    ],
    mockupType: "sales",
  },
];

/**
 * Mini-UI Graphic 1: Finance, Cashflow & Auto-Journaling Ledger
 */
function FinanceMockupGraphic() {
  return (
    <div className="w-full h-full bg-gradient-to-b from-blue-50/40 via-white to-slate-50/80 rounded-xl border border-slate-200/70 p-3 select-none flex flex-col justify-between overflow-hidden relative shadow-inner">
      {/* Mini Window Bar */}
      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-red-400" />
          <span className="w-2 h-2 rounded-full bg-amber-400" />
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span className="text-[10px] font-bold text-slate-700 ml-1.5 flex items-center gap-1">
            <FileSpreadsheet className="w-3 h-3 text-blue-600" /> Buku Kas & Jurnal Umum
          </span>
        </div>
        <span className="text-[9px] font-bold text-emerald-700 bg-emerald-100/90 px-1.5 py-0.5 rounded-full">
          Balance OK
        </span>
      </div>

      {/* Mini Table Rows */}
      <div className="space-y-1.5 my-2">
        {/* Row 1 */}
        <div className="flex items-center justify-between bg-white px-2.5 py-1.5 rounded-lg border border-slate-100 shadow-[0_1px_3px_rgba(0,0,0,0.02)] text-[10px]">
          <div className="flex flex-col">
            <span className="font-semibold text-slate-800 truncate max-w-[110px]">
              INV/2026/0491
            </span>
            <span className="text-[8.5px] text-slate-400">Penjualan Retail</span>
          </div>
          <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[8.5px] font-semibold bg-emerald-50 text-emerald-700">
            Lunas
          </span>
          <span className="font-bold text-slate-900">+Rp 14.500.000</span>
        </div>

        {/* Row 2 */}
        <div className="flex items-center justify-between bg-white px-2.5 py-1.5 rounded-lg border border-slate-100 shadow-[0_1px_3px_rgba(0,0,0,0.02)] text-[10px]">
          <div className="flex flex-col">
            <span className="font-semibold text-slate-800 truncate max-w-[110px]">
              PO/RAW/883
            </span>
            <span className="text-[8.5px] text-slate-400">Bahan Baku Katun</span>
          </div>
          <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[8.5px] font-semibold bg-blue-50 text-blue-700">
            Posted
          </span>
          <span className="font-bold text-slate-700">-Rp 8.200.000</span>
        </div>

        {/* Row 3 */}
        <div className="flex items-center justify-between bg-white px-2.5 py-1.5 rounded-lg border border-slate-100 shadow-[0_1px_3px_rgba(0,0,0,0.02)] text-[10px]">
          <div className="flex flex-col">
            <span className="font-semibold text-slate-800 truncate max-w-[110px]">
              BIAYA/OPR/12
            </span>
            <span className="text-[8.5px] text-slate-400">Listrik & Internet</span>
          </div>
          <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[8.5px] font-semibold bg-amber-50 text-amber-700">
            Pending
          </span>
          <span className="font-bold text-slate-700">-Rp 1.450.000</span>
        </div>
      </div>

      {/* Floating Mini Modal: Auto Reconciliation */}
      <div className="bg-white/95 backdrop-blur-xs border border-blue-200/90 rounded-xl px-2.5 py-1.5 shadow-md flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <div className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center">
            <Check className="w-2.5 h-2.5 stroke-[3]" />
          </div>
          <span className="text-[9.5px] font-bold text-slate-800">
            Rekonsiliasi Bank: 99.8% Cocok
          </span>
        </div>
        <span className="text-[9px] font-extrabold text-blue-600 flex items-center gap-0.5">
          Sync <ArrowUpRight className="w-2.5 h-2.5" />
        </span>
      </div>
    </div>
  );
}

/**
 * Mini-UI Graphic 2: Multi-Warehouse Inventory & Real-time Stock Tracking
 */
function InventoryMockupGraphic() {
  return (
    <div className="w-full h-full bg-gradient-to-b from-blue-50/40 via-white to-slate-50/80 rounded-xl border border-slate-200/70 p-3 select-none flex flex-col justify-between overflow-hidden relative shadow-inner">
      {/* Top Header & Warehouse Selector */}
      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
        <div className="flex items-center gap-1.5">
          <Boxes className="w-3.5 h-3.5 text-blue-600" />
          <span className="text-[10px] font-bold text-slate-800">
            Multi-Gudang Terintegrasi
          </span>
        </div>
        <div className="flex items-center gap-1 text-[9px] font-semibold bg-slate-100 px-2 py-0.5 rounded text-slate-700">
          <Building2 className="w-2.5 h-2.5 text-blue-600" /> Gudang Utama
        </div>
      </div>

      {/* SKU Progress Bars */}
      <div className="space-y-2 my-2">
        {/* SKU 1 */}
        <div className="bg-white p-2 rounded-lg border border-slate-100 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
          <div className="flex items-center justify-between text-[9.5px] font-semibold text-slate-800 mb-1">
            <span className="truncate max-w-[120px]">Kain Katun Premium (Roll)</span>
            <span className="text-emerald-700 font-bold bg-emerald-50 px-1.5 py-0.2 rounded">
              450 Unit (Aman)
            </span>
          </div>
          <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
            <div className="w-[85%] h-full bg-blue-600 rounded-full" />
          </div>
        </div>

        {/* SKU 2 - Low Stock Alert */}
        <div className="bg-white p-2 rounded-lg border border-amber-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
          <div className="flex items-center justify-between text-[9.5px] font-semibold text-slate-800 mb-1">
            <span className="truncate max-w-[120px]">Resleting Logam 15cm</span>
            <span className="text-amber-700 font-bold bg-amber-50 px-1.5 py-0.2 rounded flex items-center gap-0.5">
              <AlertCircle className="w-2.5 h-2.5" /> 18 Unit (Restock!)
            </span>
          </div>
          <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
            <div className="w-[20%] h-full bg-amber-500 rounded-full" />
          </div>
        </div>
      </div>

      {/* Floating Stock Alert Pill */}
      <div className="bg-white/95 backdrop-blur-xs border border-blue-200/90 rounded-xl px-2.5 py-1.5 shadow-md flex items-center justify-between text-[9.5px]">
        <div className="flex items-center gap-1.5 text-slate-700 font-medium">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Metode Penilaian Stok:</span>
        </div>
        <span className="font-bold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-100">
          FIFO & Rata-Rata
        </span>
      </div>
    </div>
  );
}

/**
 * Mini-UI Graphic 3: Sales Pipeline, Purchase Orders & Auto Invoicing
 */
function SalesMockupGraphic() {
  return (
    <div className="w-full h-full bg-gradient-to-b from-blue-50/40 via-white to-slate-50/80 rounded-xl border border-slate-200/70 p-3 select-none flex flex-col justify-between overflow-hidden relative shadow-inner">
      {/* Header Bar */}
      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
        <div className="flex items-center gap-1.5">
          <ShoppingCart className="w-3.5 h-3.5 text-blue-600" />
          <span className="text-[10px] font-bold text-slate-800">
            Pipeline Penjualan & PO
          </span>
        </div>
        <span className="text-[9px] font-bold text-blue-700 bg-blue-100/90 px-1.5 py-0.5 rounded-full">
          Auto-Approval
        </span>
      </div>

      {/* Mini Kanban Columns */}
      <div className="grid grid-cols-3 gap-1.5 my-2 text-[9px]">
        {/* Column 1: Order Masuk */}
        <div className="bg-slate-100/70 p-1.5 rounded-lg flex flex-col justify-between">
          <span className="font-bold text-slate-600 block mb-1">SO Masuk</span>
          <div className="bg-white p-1 rounded shadow-2xs border border-slate-200/60 font-semibold text-slate-800 text-[8px]">
            SO #2041
            <span className="block text-slate-400 font-normal">Rp 5.2 M</span>
          </div>
        </div>

        {/* Column 2: Pengiriman */}
        <div className="bg-blue-50/70 p-1.5 rounded-lg flex flex-col justify-between border border-blue-100">
          <span className="font-bold text-blue-700 block mb-1">Surat Jalan</span>
          <div className="bg-white p-1 rounded shadow-2xs border border-blue-200 font-semibold text-slate-800 text-[8px]">
            SJ #9910
            <span className="block text-blue-600 font-bold">OTW Gudang</span>
          </div>
        </div>

        {/* Column 3: Faktur / Lunas */}
        <div className="bg-emerald-50/70 p-1.5 rounded-lg flex flex-col justify-between border border-emerald-100">
          <span className="font-bold text-emerald-700 block mb-1">Faktur Pajak</span>
          <div className="bg-white p-1 rounded shadow-2xs border border-emerald-200 font-semibold text-slate-800 text-[8px]">
            INV #882
            <span className="block text-emerald-600 font-bold">Terbayar</span>
          </div>
        </div>
      </div>

      {/* Floating Auto-Generate Pill */}
      <div className="bg-white/95 backdrop-blur-xs border border-blue-200/90 rounded-xl px-2.5 py-1.5 shadow-md flex items-center justify-between text-[9.5px]">
        <div className="flex items-center gap-1.5">
          <FileText className="w-3 h-3 text-blue-600" />
          <span className="font-bold text-slate-800">Cetak E-Faktur & PO 1-Klik</span>
        </div>
        <span className="text-[8.5px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
          Tersinkronisasi
        </span>
      </div>
    </div>
  );
}

function LainnyaMockupGraphic() {
  return (
    <div className="w-full h-full bg-gradient-to-b from-blue-50/40 via-white to-slate-50/80 rounded-xl border border-slate-200/70 p-3 select-none flex flex-col justify-between overflow-hidden relative shadow-inner">
      {/* Header Bar */}
      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
        <div className="flex items-center gap-1.5">
          <ShoppingCart className="w-3.5 h-3.5 text-blue-600" />
          <span className="text-[10px] font-bold text-slate-800">
            Pipeline Penjualan & PO
          </span>
        </div>
        <span className="text-[9px] font-bold text-blue-700 bg-blue-100/90 px-1.5 py-0.5 rounded-full">
          Auto-Approval
        </span>
      </div>

      {/* Mini Kanban Columns */}
      <div className="grid grid-cols-3 gap-1.5 my-2 text-[9px]">
        {/* Column 1: Order Masuk */}
        <div className="bg-slate-100/70 p-1.5 rounded-lg flex flex-col justify-between">
          <span className="font-bold text-slate-600 block mb-1">SO Masuk</span>
          <div className="bg-white p-1 rounded shadow-2xs border border-slate-200/60 font-semibold text-slate-800 text-[8px]">
            SO #2041
            <span className="block text-slate-400 font-normal">Rp 5.2 M</span>
          </div>
        </div>

        {/* Column 2: Pengiriman */}
        <div className="bg-blue-50/70 p-1.5 rounded-lg flex flex-col justify-between border border-blue-100">
          <span className="font-bold text-blue-700 block mb-1">Surat Jalan</span>
          <div className="bg-white p-1 rounded shadow-2xs border border-blue-200 font-semibold text-slate-800 text-[8px]">
            SJ #9910
            <span className="block text-blue-600 font-bold">OTW Gudang</span>
          </div>
        </div>

        {/* Column 3: Faktur / Lunas */}
        <div className="bg-emerald-50/70 p-1.5 rounded-lg flex flex-col justify-between border border-emerald-100">
          <span className="font-bold text-emerald-700 block mb-1">Faktur Pajak</span>
          <div className="bg-white p-1 rounded shadow-2xs border border-emerald-200 font-semibold text-slate-800 text-[8px]">
            INV #882
            <span className="block text-emerald-600 font-bold">Terbayar</span>
          </div>
        </div>
      </div>

      {/* Floating Auto-Generate Pill */}
      <div className="bg-white/95 backdrop-blur-xs border border-blue-200/90 rounded-xl px-2.5 py-1.5 shadow-md flex items-center justify-between text-[9.5px]">
        <div className="flex items-center gap-1.5">
          <FileText className="w-3 h-3 text-blue-600" />
          <span className="font-bold text-slate-800">Cetak E-Faktur & PO 1-Klik</span>
        </div>
        <span className="text-[8.5px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
          Tersinkronisasi
        </span>
      </div>
    </div>
  );
}

export function FeaturesSection() {
  return (
    <section id="services" className="w-full bg-[#fbfdff] py-16 sm:py-20 lg:py-24 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Title & Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold mb-3.5 border border-blue-100 shadow-xs">
            <span>Fitur Lengkap MyERP Plus</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Fitur lengkap untuk segala kebutuhan operasional & keuangan bisnis
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Optimalkan pencatatan finansial, manajemen multi-gudang, dan alur transaksi secara scalable dalam sistem cloud ERP modern yang terintegrasi.
          </p>
        </div>

        {/* 3. 3-Column Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuresData.map((feature) => (
            <div
              key={feature.id}
              className="group relative bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-7 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(37,99,235,0.08)] hover:border-blue-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Top Mockup Area: Tailored for Each Module */}
                <div className="w-full h-48 sm:h-52 rounded-2xl overflow-hidden mb-6">
                  {feature.mockupType === "finance" && <FinanceMockupGraphic />}
                  {feature.mockupType === "inventory" && <InventoryMockupGraphic />}
                  {feature.mockupType === "sales" && <SalesMockupGraphic />}
                  {feature.mockupType === "lainnya" && <LainnyaMockupGraphic />}
                </div>

                {/* Feature Title */}
                <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-2.5 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>

                {/* Feature Description */}
                <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                  {feature.description}
                </p>
              </div>

              {/* Sub-bullet List with Circle Checkmarks */}
              <div className="pt-4 border-t border-slate-100 space-y-2.5">
                {feature.bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0 stroke-[2.2]" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
