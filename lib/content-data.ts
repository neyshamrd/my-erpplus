// lib/content-data.ts

import { title } from "process";

export const siteConfig = {
  announcement: {
    realese: "Rilis v5.0 MRP II",
    title: "Aritektur Single Database Terintegrasi untuk Manufaktur & Distribusi Skala Nasional.",
    ctaText: "Jadwalkan Demo Sistem",
    serverStatus: "Tier-3 Cloud Jakarta Online",
  },
  hero: {
    badge: "MyERP+ Solution",
    title: "Kendali Penuh Seluruh Rantai Operasional Bisnis dalam Satu Layanan",
    description: "Sistem ERP terintegrasi untuk manufaktur, distribusi, dan perdagangan dengan kustomisasi tingkat tinggi.",
    ctaPrimary: "Booking Demo (45 Menit)",
    ctaSecondary: "Download Flowchart Enterprise",
  },
  trustBar: {
    title: "DIPERCAYA OLEH PERUSAHAAN MANUFAKTUR INDONESIA",
    clients: [
      "PT Motasa Indonesia",
      "PT Narumi Indonesia Mfg",
      "PT Nanda Persada Transport",
      "UJS",
    ],
  },
  industries: [
    { id: "manufaktur", name: "Pengolahan Logam & Plastik Injeksi" },
    { id: "distributor", name: "General Distributor & Bahan Rempah" },
    { id: "logistik", name: "Jasa Komersial & Transportasi" },
  ],
  modules: [
    { title: "Finansial & Akuntansi", desc: "Kartu Financial Ledger, Approval, & Tutup Buku 1 Hari" },
    { title: "Manufaktur & Produksi", desc: "Perencanaan MRP II & WO (Work Order)" },
    { title: "Pembelian & Inventaris", desc: "Akurasi Stok 99.8% & Siklus Pengadaan -40%" },
    { title: "Manajemen Aset Tetap", desc: "Depresiasi Aset 100% terotomatisasi" },
  ],
};