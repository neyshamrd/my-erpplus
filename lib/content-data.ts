// lib/content-data.ts

export const siteConfig = {
  announcement: {
    realese: "Rilis v5.0 MRP II",
    title: "Arsitektur Single Database Terintegrasi untuk Manufaktur & Distribusi Skala Nasional.",
    ctaText: "Jadwalkan Demo Sistem",
    serverStatus: "Tier-3 Cloud Jakarta Online",
  },
  nav: {
    logo: {
      text: "MYERP",
      tag: "+",
    },
    // Menu Navigasi Utama
    mainNav: [
      {
        title: "Modul ERP",
        href: "#modul",
        // Punya dropdown menu
        items: [
          {
            title: "1. Finansial & Akuntansi",
            description: "General Ledger, Laporan Keuangan Real-Time & Pajak.",
            href: "/modul/finansial",
            iconName: "Calculator",
            color: "emerald",
          },
          {
            title: "2. Manufaktor & Produksi",
            description: "Routing, Multi-level BOM & HPP Otomatis.",
            href: "/modul/manufaktur",
            iconName: "Factory",
            color: "indigo",
          },
          {
            title: "3. Pembelian & Rantai Pasok",
            description: "Alur PR, PO, GRN, PI terhubung stok & hutang.",
            href: "/modul/pembelian",
            iconName: "ShoppingCart",
            color: "amber",
          },
          {
            title: "4. Penjualan & Distribusi",
            description: "Alur SQ, SO, DO, SI terhubung stok & piutang.",
            href: "/modul/penjualan",
            iconName: "Truck",
            color: "cyan",
          },
          {
            title: "5. Inventaris & Gudang",
            description: "Multi-warehouse, Lot/Batch & Stock Opname.",
            href: "/modul/inventaris",
            iconName: "Package",
            color: "purple",
          },
          {
            title: "6. Manajemen Aset Tetap",
            description: "Asset Register, jadwal depresiasi & valuasi",
            href: "modul/aset",
            iconName: "Building2",
            color: "purple",
          },
        ],
      },
      {
        title: "Solusi Industri",
        href: "#solusi",
        items: [
          {
            title: "1. Manufaktur ",
            description: "Pabrikasi, Multi-Level BOM & HPP Aktual.",
            href: "/solusi/manufaktur",
            iconName: "Factory",
            color: "purple",
          },
          {
            title: "2. Distribusi dan Perdagangan",
            description: "Multi-gudang, Surat Jalan & Piutang Dagang.",
            href: "/solusi/distribusi",
            iconName: "Truck",
            color: "emerald",
          },
          {
            title: "3. Jasa Profesional dan Layanan (Services)",
            description: "Aging Hutang Piutang, Laba Rugi & Buku Besar per Jasa.",
            href: "/solusi/jasa",
            iconName: "Briefcase",
            color: "cyan",
          },
        ],
      },
      {
        title: "Studi Kasus",
        href: "#studi-kasus",
        sectionTitle: "STUDI KASUS 11 SEKTOR INDUSTRI",
        items: [
          {
            title: "Manufaktur Pengolahan Logam",
            href: "/studi-kasus/logam",
            iconName: "Flame",
            color: "text-orange-500",
          },
          {
            title: "Manufaktur Plastik Injeksi",
            href: "/studi-kasus/plastik",
            iconName: "Box",
            color: "text-blue-500",
          },
          {
            title: "Manufaktur Olahan Tembakau (Rokok)",
            href: "/studi-kasus/tembakau",
            iconName: "ShieldAlert",
            color: "text-rose-500",
          },
          {
            title: "Industri Manufaktur Tekstil Terpadu",
            href: "/studi-kasus/tekstil",
            iconName: "Scissors",
            color: "text-indigo-500",
          },
          {
            title: "Distributor Bahan Bangunan",
            href: "/studi-kasus/bangunan",
            iconName: "Building",
            color: "text-slate-600",
          },
          {
            title: "General Distributor",
            href: "/studi-kasus/general-dist",
            iconName: "Store",
            color: "text-teal-500",
          },
          {
            title: "Distributor Alat Kesehatan",
            href: "/studi-kasus/alkes",
            iconName: "Activity",
            color: "text-emerald-500",
          },
          {
            title: "Manufaktur Bahan Rempah",
            href: "/studi-kasus/rempah",
            iconName: "Sprout",
            color: "text-amber-600",
          },
          {
            title: "Ekspedisi",
            href: "/studi-kasus/ekspedisi",
            iconName: "Truck",
            color: "text-blue-600",
          },
          {
            title: "Manufaktur Mesin Produksi",
            href: "/studi-kasus/mesin",
            iconName: "Cpu",
            color: "text-purple-500",
          },
          {
            title: "Jasa & Layanan",
            href: "/studi-kasus/jasa",
            iconName: "Briefcase",
            color: "text-amber-500",
          },
        ],
      },
      {
        title: "Harga",
        href: "/harga",
      },
      {
        title: "Kontak",
        href: "/kontak",
      },
    ],
    ctaButton: {
      text: "Minta Live Demo",
      href: "/demo",
    },
  },
  hero: {
    badge: "Single Source of Truth untuk Operasional Korporasi",
    titleLine1: "Kendali Penuh",
    tittleLine2: "Seluruh",
    titleHighlight: "Rantai Operasional Bisnis",
    titleLine3: "di Satu Layar ERP",
    description: 
        "Satukan manufaktur, inventaris multi-lokasi, siklus pengadaan, dan buku besar akuntansi real-time dalam satu arsitektur terintegrasi tanpa rekonsiliasi manual.",
    form: {
        title: "Dapatkan Assesment Alur Bisnis & Demo Sistem Gratis",
        placeholder: "Masukkan email korporat Anda...",
        buttonText: "Jadwalkan",
        checks: ["Migrasi Data Aman & Tervalidasi", "Konsultan On-Site"],
    },
  },
    trust: {
    title: "Dipercaya oleh perusahaan manufaktur Indonesia",
    clients: [
      { id: "kawata", name: "PT Kawata Indonesia", logoSrc: "" },
      { id: "topla", name: "PT Topla Abadi Jaya", logoSrc: "" },
      { id: "ikuyo", name: "PT Ikuyo Indonesia", logoSrc: "" },
      { id: "motasa", name: "PT Motasa Indonesia", logoSrc: "" },
      { id: "narumi", name: "PT Narumi Indonesia Mfg (NIM)", logoSrc: "" },
      { id: "pci", name: "PT Prima Copper Industri", logoSrc: "" },
      { id: "ujs", name: "PT Unggul Jaya Sejahtera", logoSrc: "" },
      { id: "npt", name: "PT Nanda Persada Transport", logoSrc: "" },
    ],
    notes: [
      {
        id: "security",
        label: "Keamanan Terproteksi:",
        text: "Hak Akses Bertingkat & Enkripsi Data",
      },
      {
        id: "regulation",
        label: "Sesuai Regulasi:",
        text: "e-Faktur Pajak, e-Bupot & TER PPh 21 2026",
      },
    ],
  },
    industry: {
    badge: "Spesialisasi Operasional Industri",
    title: "Dirancang Khusus untuk Kompleksitas Proses Bisnis Sektor Riil",
    introBefore: "Setiap industri memiliki alur bisnis yang unik.",
    introBrand: "MyERP Plus",
    introAfter:
      "menyediakan parameter proses teruji yang disederhanakan ke dalam 3 kelompok proses bisnis utama.",
    capabilityLabel: "Kapabilitas Sistem:",
    items: [
      {
        id: "manufaktur",
        accent: "indigo",
        tag: "Pabrikasi & Proses Produksi",
        title: "Manufaktur",
        description:
          "Multi-Level BOM bertingkat, alur work order presisi, pengelolaan bahan baku, serta kalkulasi HPP aktual otomatis hingga per unit produk.",
        capabilities: ["Multi-Level BOM", "Routing & Work Center", "Kalkulasi HPP Aktual"],
        ctaText: "Pelajari Alur Manufaktur",
        href: "/solusi/manufaktur",
        image: "/industri/manufaktur.jpg",
      },
      {
        id: "distribusi",
        accent: "cyan",
        tag: "Rantai Pasok & Grosir",
        title: "Distribusi dan Perdagangan",
        description:
          "Manajemen multi-gudang antar cabang, penerbitan surat jalan cepat, hingga pemantauan penagihan piutang dagang terintegrasi.",
        capabilities: ["Multi-Warehouse Transfer", "Surat Jalan Otomatis", "Aging Piutang Dagang"],
        ctaText: "Pelajari Distribusi & Perdagangan",
        href: "/solusi/distribusi",
        image: "/industri/distribusi.jpg",
      },
      {
        id: "jasa",
        accent: "emerald",
        tag: "Layanan Profesional",
        title: "Jasa Profesional dan Layanan (Services)",
        description:
          "Penagihan jasa, aging hutang piutang, serta laporan laba rugi dan buku besar per layanan tersaji real-time dalam satu sistem.",
        capabilities: ["Aging Hutang Piutang", "Laba Rugi per Jasa", "Buku Besar per Layanan"],
        ctaText: "Pelajari Jasa & Layanan",
        href: "/solusi/jasa",
        image: "/industri/jasa.jpg",
      },
    ],
  },
  modul: {
    badge: "Ekosistem Modular Terpadu",
    title: "6 Pilar Fonddasi Sistem MyERP Plus",
    subtitle:
      "Setiap modul terhubung langsung ke buku besar akuntansi dan persediaan dalam satu database tunggal tanpa input ulang.",
    ctaText: "Pelajari Detail Modul",
        items: [
      {
        id: "finansial",
        accent: "emerald",
        title: "Finansial & Akuntansi",
        description:
          "General Ledger otomatis tanpa input ganda. Penyajian laporan keuangan terpusat (Laba Rugi, Neraca, Arus Kas) secara real-time & kepatuhan regulasi pajak Indonesia.",
        chips: ["General Ledger Otomatis", "Laporan Keuangan Real-Time", "e-Faktur & e-Bupot"],
        integration: "Terhubung ke Pembelian, Gudang & Penjualan",
        href: "/modul/finansial",
      },
      {
        id: "manufaktur",
        accent: "indigo",
        title: "Manufaktur & Produksi",
        description:
          "Kelola alur produksi dari BOM, Work in Progress (WIP) hingga Finished Goods (FG) beserta kalkulasi HPP aktual yang akurat.",
        chips: ["Multi-Level BOM", "Work Order & Routing", "HPP Aktual per Batch"],
        integration: "Terhubung ke Stok Bahan Baku & Jurnal Biaya",
        href: "/modul/manufaktur",
      },
      {
        id: "pembelian",
        accent: "amber",
        title: "Pembelian & Rantai Pasok",
        description:
          "Mencakup alur Purchase Request (PR), Purchase Order (PO), Goods Receipt Note (GRN), dan Purchase Invoice (PI). Terhubung langsung dengan persediaan dan hutang usaha, sehingga stok dan hutang tercatat otomatis.",
        chips: ["PR → PO → GRN → PI", "3-Way Matching", "Approval Bertingkat"],
        integration: "Terhubung ke Hutang Dagang (AP) & GRN Gudang",
        href: "/modul/pembelian",
      },
      {
        id: "penjualan",
        accent: "cyan",
        title: "Penjualan & Distribusi",
        description:
          "Alur Sales Quotation (SQ), Sales Order (SO), Delivery Order (DO), dan Sales Invoice (SI). Terhubung langsung dengan persediaan barang dan piutang usaha (AR).",
        chips: ["SQ → SO → DO → SI", "Reservasi Stok", "Aging Piutang (AR)"],
        integration: "Terhubung ke Piutang Dagang (AR) & Reservasi Stok Gudang",
        href: "/modul/penjualan",
      },
      {
        id: "inventaris",
        accent: "blue",
        title: "Inventaris & Gudang",
        description:
          "Pelacakan stok multi-gudang, pengelolaan nomor lot/batch produksi, mutasi antar cabang/gudang, serta stock opname fisik untuk sinkronisasi fisik vs sistem.",
        chips: ["Multi-Gudang", "Lot/Batch", "Mutasi Antar Gudang", "Stock Opname"],
        integration: "Terhubung ke Manufaktur & Pengadaan (Saldo Stok Real-Time)",
        href: "/modul/inventaris",
      },
      {
        id: "aset",
        accent: "purple",
        title: "Manajemen Aset Tetap",
        description:
          "Kelola register mesin, kendaraan, dan bangunan dengan jadwal depresiasi otomatis serta pemeliharaan berkala untuk menjaga valuasi aset.",
        chips: ["Asset Register", "Jadwal Depresiasi", "Pemeliharaan Berkala"],
        integration: "Terhubung ke Jurnal Penyusutan & Modul Depresiasi Aset",
        href: "/modul/aset",
      },
    ],
  },
    workflow: {
    badge: "Arsitektur & Tata Kelola Sistem",
    title: "4 Pilar Integritas Proses Bisnis",
    subtitle:
      "Fondasi kontrol internal yang menjaga validitas setiap transaksi dari lantai operasional hingga laporan keuangan standar audit.",
    items: [
      {
        id: "validasi",
        accent: "blue",
        title: "Validasi dan Monitoring Transaksi",
        description:
          "Sistem memvalidasi setiap proses bisnis secara otomatis lintas dokumen untuk memastikan data operasional, persediaan, dan keuangan tercatat akurat tanpa selisih.",
      },
      {
        id: "role",
        accent: "indigo",
        title: "Role Based User",
        description:
          "Pengaturan hak akses pengguna berdasarkan jabatan dan tanggung jawab, meliputi akses menu, laporan, serta kewenangan approval sesuai matriks otorisasi.",
      },
      {
        id: "laporan",
        accent: "emerald",
        title: "Laporan Keuangan Standar Audit Akuntan Publik",
        description:
          "Laporan keuangan terbentuk otomatis dari setiap aktivitas operasional dengan jejak audit lengkap serta mendukung kepatuhan perpajakan Indonesia.",
      },
      {
        id: "custom",
        accent: "amber",
        title: "Customizable Business Process",
        description:
          "Alur kerja, pengaturan modul, dan format dokumen dapat dikonfigurasi secara fleksibel mengikuti prosedur operasional dan kebijakan unik perusahaan Anda.",
      },
    ],
  },
    impact: {
    badge: "Dampak Implementasi Terukur",
    title: "Peningkatan Performa Operasional Nyata",
    items: [
      {
        id: "stok",
        accent: "emerald",
        value: "99.8%",
        label: "Akurasi Saldo Stok Multi-Gudang",
      },
      {
        id: "pengadaan",
        accent: "blue",
        value: "-40%",
        label: "Pemangkasan Siklus Pengadaan",
      },
      {
        id: "tutup-buku",
        accent: "cyan",
        value: "1 Hari",
        label: "Proses Tutup Buku Akhir Bulan",
      },
      {
        id: "scrap",
        accent: "amber",
        value: "-35%",
        label: "Reduksi Scrap & Susut Produksi",
      },
      {
        id: "depresiasi",
        accent: "purple",
        value: "100%",
        label: "Otomatisasi Depresiasi Aset Tetap",
      },
    ],
  },
};