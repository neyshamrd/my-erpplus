"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Maximize2,
  CheckCircle2,
  Sparkles,
  Building2,
  Check,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export interface IndustryItem {
  id: string;
  name: string;
  shortName: string;
  imageUrl: string;
  description: string;
  solutions: string[];
  metrics: string;
}

const industriesData: IndustryItem[] = [
  {
    id: "finance",
    name: "Finance & Accounting",
    shortName: "Finance & Accounting",
    imageUrl:
      "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&w=1200&q=80",
    description:
    "MyERPPlus menghadirkan Finance & Accounting sebagai pusat kekuatan finansial perusahaan untuk mengelola arus uang masuk dan keluar melalui Kas dan Bank, Jurnal Memorial, hingga Piutang Karyawan secara transparan.",
    solutions: [
      "Kas dan Bank",
      "Jurnal Memorial",
      "Piutang Karyawan",
      "Data master keuangan",
      "Analisis, laporan, dan statistik",
      "Pengaturan keuangan",
    ],
    metrics: "Hemat 40% Waktu Rekap Tagihan Klien",
  },
  {
    id: "inventory",
    name: "Inventory & Warehouse",
    shortName: "Inventory & Warehouse",
    imageUrl:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    description:
    "Kelola barang di gudang dan pantau ketersediaan persediaan secara up-to-date, sehingga informasi stok, harga barang, dan harga kuantitas selalu siap diakses tim Anda.",
    solutions: [
      "Pengelolaan barang di gudang",
      "Informasi ketersediaan unit dalam persediaan",
      "Informasi harga barang dan harga kuantitas",
      "Pengecekan barang dan packing list",
    ],
    metrics: "100% Billing Otomatis Tanpa Tertinggal",
  },
  {
    id: "purchase",
    name: "Purchase Management",
    shortName: "Purchase Management",
    imageUrl:
      "https://images.unsplash.com/photo-1763872011479-aa293bf083a8?auto=format&fit=crop&w=1200&q=80",
    description:
    "Kelola proses pembelian dari pemesanan ke supplier hingga barang diterima di gudang dan pembayaran dicatat. Terintegrasi dengan modul Inventory & Warehouse dan Finance & Accounting dalam satu sistem berbasis web.",
    solutions: [
      "Pesanan pembelian ke supplier",
      "Penerimaan barang ke gudang",
      "Retur pembelian",
      "Pencatatan utang dan pembayaran supplier",
    ],
    metrics: "0 Kasus Selisih Obat Kedaluwarsa",
  },
  {
    id: "sales",
    name: "Sales Distribution",
    shortName: "Sales Distribution",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1661302828763-4ec9b91d9ce3?auto=format&fit=crop&w=1200&q=80",
    description:
    "Kelola seluruh transaksi penjualan, dari order hingga pembayaran. Tim sales mendapat laporan lengkap dan informasi up-to-date tentang ketersediaan stok, harga, data pelanggan, dan batas kredit untuk menjawab pertanyaan pelanggan.",
    solutions: [
      "Order Penjualan",
      "Invoice dan packing list",
      "Retur penjualan",
      "Penagihan dan penerimaan pembayaran",
      "Informasi stok, harga, dan batas kredit pelanggan",
    ],
    metrics: "Closing Harian Resto & Kamar Real-time",
  },
  {
    id: "asset",
    name: "Fixed Asset",
    shortName: "Fixed Asset",
    imageUrl:
      "https://images.unsplash.com/photo-1626178793926-22b28830aa30?auto=format&fit=crop&w=1200&q=80",
    description:
    "Catat dan kelola aset tetap perusahaan dalam satu sistem yang terhubung dengan Finance & Accounting.",
    solutions: [
      "Pencatatan aset tetap",
      "Penyusutan aset",
      "Laporan aset",
    ],
    metrics: "Sinkronisasi Stok 50+ Cabang Otomatis",
  },
  {
    id: "production",
    name: "Production",
    shortName: "Production",
    imageUrl:
      "	https://images.unsplash.com/photo-1717386255773-1e3037c81788?auto=format&fit=crop&w=1200&q=80",
    description:
    "Jalankan proses produksi dengan lebih efisien, dari pengadaan bahan baku hingga pengemasan, dengan formula produksi (BOM) dan terhubung ke modul Inventory & Warehouse, Purchasing, serta Sales & Distribution.",
    solutions: [
      "Formula produksi (BOM)",
      "Pengadaan bahan baku",
      "Proses produksi hingga pengemasan",
    ],
    metrics: "-80% Tunggakan Administrasi SPP",
  },
  {
    id: "kesehatan",
    name: "Klinik & Rumah Sakit",
    shortName: "Klinik & Rumah Sakit",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1681843129112-f7d11a2f17e3?auto=format&fit=crop&w=1200&q=80",
    description:
    "Kelola keuangan, persediaan barang, dan pembelian klinik dalam satu sistem berbasis web yang terintegrasi.",
    solutions: [
      "Kas dan Bank",
      "Persediaan barang di gudang",
      "Pembelian ke supplier",
      "Pencatatan aset tetap dan peralatan",
    ],
    metrics: "Kalkulasi Profit Margin Tour Instan",
  },
  {
    id: "pendidikan",
    name: "Sekolah & Perguruan tinggi",
    shortName: "Sekolah & Perguruan Tinggi",
    imageUrl:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=80",
    description:
    "Kelola keuangan, aset, dan pengadaan barang institusi pendidikan dalam satu sistem berbasis web yang terintegrasi.",
    solutions: [
      "Kas dan Bank",
      "Jurnal Memorial",
      "Pencatatan aset tetap",
      "Pembelian dan persediaan perlengkapan",
    ],
    metrics: "Pengiriman & Faktur 3x Lebih Cepat",
  },
  {
    id: "pos",
    name: "Point of Sales",
    shortName: "Point Of Sales",
    imageUrl:
      "https://images.unsplash.com/photo-1647427017067-8f33ccbae493?auto=format&fit=crop&w=1200&q=80",
    description:
      "Catat transaksi penjualan langsung dengan informasi stok dan harga barang yang up-to-date. Terhubung dengan modul Inventory & Warehouse serta Finance & Accounting dalam satu sistem berbasis web.",
    solutions: [
      "Transaksi penjualan langsung",
      "Informasi stok dan harga barang",
      "Penerimaan pembayaran",
      "Terintegrasi dengan persediaan dan keuangan",
    ],
    metrics: "Pemantauan lebih mudah 7x lipat"
  },
];

// Smooth sliding animation variants with directional slide & scale
const slideVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "40%" : "-40%",
    opacity: 0,
    scale: 0.96,
  }),
  center: {
    x: "0%",
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: "spring" as const, stiffness: 300, damping: 30, duration: 0.38 },
      opacity: { duration: 0.32, ease: "easeOut" },
      scale: { duration: 0.38, ease: "easeOut" },
    },
  },
  exit: (direction: number) => ({
    x: direction < 0 ? "40%" : "-40%",
    opacity: 0,
    scale: 0.96,
    transition: {
      x: { type: "spring" as const, stiffness: 300, damping: 30, duration: 0.32 },
      opacity: { duration: 0.22, ease: "easeIn" },
      scale: { duration: 0.32 },
    },
  }),
};

export function IndustrySolutions() {
  const [[selectedIndex, direction], setPage] = useState<[number, number]>([0, 0]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const activeItem = industriesData[selectedIndex];

  const handleSelect = (newIndex: number) => {
    if (newIndex === selectedIndex) return;
    const newDirection = newIndex > selectedIndex ? 1 : -1;
    setPage([newIndex, newDirection]);
    scrollToCard(newIndex);
  };

  const handlePrev = () => {
    const newIndex =
      selectedIndex === 0 ? industriesData.length - 1 : selectedIndex - 1;
    setPage([newIndex, -1]);
    scrollToCard(newIndex);
  };

  const handleNext = () => {
    const newIndex =
      selectedIndex === industriesData.length - 1 ? 0 : selectedIndex + 1;
    setPage([newIndex, 1]);
    scrollToCard(newIndex);
  };

  const scrollToCard = (index: number) => {
    if (scrollContainerRef.current) {
      const cardWidth = 140;
      scrollContainerRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24 border-t border-slate-100 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================
            1. SECTION HEADER (SPLIT: TITLE LEFT, SUBTITLE RIGHT)
           ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-10 sm:mb-12">
          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-[1.2]">
              Modul Lengkap, <br/>
              Solusi Tanpa Batasan
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              MyERP Plus lebih dari sekadar software ERP tradisional yang menawarkan
              solusi manajemen bisnis cloud fleksibel dan dapat dikustomisasi sesuai
              alur kerja spesifik industri Anda.
            </p>
          </div>
        </div>

        {/* ========================================================
            2. CARDS ROW: LARGE ACTIVE CARD + HORIZONTAL THUMBNAILS
           ======================================================== */}
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-5 items-stretch">
          
          {/* Active Featured Large Card (Left) with Smooth Sliding Image */}
          <div
            onClick={() => setLightboxOpen(true)}
            className="group relative w-full lg:w-[420px] xl:w-[460px] h-[340px] sm:h-[390px] rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300 shrink-0 border border-slate-200/80 bg-slate-950"
            title="Klik untuk melihat foto lebih besar (Lightbox Preview)"
          >
            {/* Sliding Image Animation Container */}
            <div className="relative w-full h-full overflow-hidden">
              <AnimatePresence initial={false} custom={direction} mode="popLayout">
                <motion.div
                  key={activeItem.id}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="absolute inset-0 w-full h-full"
                >
                  <img
                    src={activeItem.imageUrl}
                    alt={activeItem.name}
                    className="w-full h-full object-cover brightness-95"
                  />
                  {/* Gradient Shadow Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent pointer-events-none" />

                  {/* Bottom Title inside Active Card */}
                  <div className="absolute bottom-6 left-6 right-6 z-10">
                    <span className="inline-block text-[11px] font-bold text-blue-300 uppercase tracking-wider mb-1">
                      Industri Terpilih
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                      {activeItem.shortName}
                    </h3>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Top Prompt Badge (Fixed on top of active card) */}
            <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md text-white/90 text-xs font-semibold border border-white/20 group-hover:bg-blue-600 group-hover:border-blue-500 transition-colors pointer-events-none">
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Perbesar</span>
            </div>
          </div>

          {/* Horizontal Scrollable Thumbnails Track (Right) */}
          <div
            ref={scrollContainerRef}
            className="flex-1 flex items-center gap-3.5 sm:gap-4 overflow-x-auto no-scrollbar scroll-smooth py-1"
          >
            {industriesData.map((item, index) => {
              const isActive = index === selectedIndex;
              return (
                <div
                  key={item.id}
                  onClick={() => handleSelect(index)}
                  className={`group relative w-[105px] sm:w-[125px] h-[340px] sm:h-[390px] rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer shrink-0 transition-all duration-300 ${
                    isActive
                      ? "ring-4 ring-blue-600 shadow-lg scale-[1.02]"
                      : "opacity-80 hover:opacity-100 hover:shadow-md hover:scale-[1.01]"
                  }`}
                >
                  {/* Thumbnail Image: Grayscale when inactive, full color when active */}
                  <img
                    src={item.imageUrl}
                    alt={item.shortName}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
                      isActive
                        ? "grayscale-0 brightness-105 scale-105"
                        : "grayscale contrast-125 brightness-90 group-hover:grayscale-0 group-hover:brightness-100"
                    }`}
                  />

                  {/* Gradient Shadow Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                  {/* Active Indicator Top Pill */}
                  {isActive && (
                    <div className="absolute top-3 inset-x-2 z-10 flex justify-center">
                      <span className="w-2 h-2 rounded-full bg-blue-500 ring-4 ring-blue-500/30 animate-pulse" />
                    </div>
                  )}

                  {/* Title Label at the bottom */}
                  <div className="absolute bottom-5 inset-x-3 z-10 text-center sm:text-left">
                    <span
                      className={`block text-xs sm:text-sm font-bold tracking-tight leading-tight drop-shadow-md transition-colors ${
                        isActive ? "text-white font-extrabold" : "text-white/90 group-hover:text-white"
                      }`}
                    >
                      {item.shortName}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* ========================================================
            3. BOTTOM DETAILS & NAVIGATION ARROWS BAR
           ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-8 pt-4">
          
          {/* Left Details: Smooth fading active description & "Pelajari Lebih Lanjut" */}
          <div className="lg:col-span-5 flex flex-col items-start min-h-[90px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
                className="w-full"
              >
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {activeItem.description}
                </p>

                <Link
                  href="#contact"
                  className="mt-3.5 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors group"
                >
                  <span>Pelajari lebih lanjut</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Details: Smooth fading "Solusi Kami" pills & Carousel Controls */}
          <div className="lg:col-span-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
            
            {/* Solutions Tags with Fluid Transition */}
            <div className="flex-1">
              <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2.5">
                Solusi Kami
              </span>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeItem.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="flex flex-wrap gap-2"
                >
                  {activeItem.solutions.map((solution, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-100/90 shadow-2xs transition-colors hover:bg-blue-100"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                      <span>{solution}</span>
                    </span>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Carousel Navigation Buttons (Left & Right Arrows) */}
            <div className="flex items-center gap-2.5 shrink-0 self-end sm:self-center">
              <button
                type="button"
                onClick={handlePrev}
                className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 text-slate-700 flex items-center justify-center transition-all shadow-xs cursor-pointer active:scale-95"
                aria-label="Industri sebelumnya"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 text-slate-700 flex items-center justify-center transition-all shadow-xs cursor-pointer active:scale-95"
                aria-label="Industri berikutnya"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>

      {/* ========================================================
          4. INTERACTIVE LIGHTBOX MODAL DIALOG (SHADCN UI)
         ======================================================== */}
      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent
          showCloseButton={true}
          className="sm:max-w-3xl p-0 overflow-hidden bg-slate-950 border-slate-800 text-white rounded-3xl"
        >
          {/* Large High-Resolution Image Container */}
          <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
            <img
              src={activeItem.imageUrl}
              alt={activeItem.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/30 pointer-events-none" />

            {/* Floating Metric Pill */}
            <div className="absolute bottom-4 left-6 z-10 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-600 text-white text-xs font-bold shadow-lg">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>{activeItem.metrics}</span>
            </div>
          </div>

          {/* Modal Header & Content */}
          <div className="p-6 sm:p-7 space-y-4">
            <DialogHeader>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-400">
                <Building2 className="w-4 h-4 text-blue-400" />
                <span>Solusi Industri MyERP Plus</span>
              </div>
              <DialogTitle className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
                {activeItem.name}
              </DialogTitle>
              <DialogDescription className="text-sm text-slate-300 leading-relaxed pt-1">
                {activeItem.description}
              </DialogDescription>
            </DialogHeader>

            {/* Solutions Checklist inside Modal */}
            <div className="pt-2 border-t border-slate-800">
              <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                Fitur Unggulan untuk {activeItem.shortName}:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeItem.solutions.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-xs font-medium text-slate-200 bg-slate-900/80 px-3 py-2 rounded-xl border border-slate-800"
                  >
                    <Check className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-slate-800">
              <button
                type="button"
                onClick={() => setLightboxOpen(false)}
                className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-400 hover:text-white transition-colors"
              >
                Tutup
              </button>
              <Link
                href="#contact"
                onClick={() => setLightboxOpen(false)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all shadow-md"
              >
                <span>Konsultasikan Kebutuhan {activeItem.shortName}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
