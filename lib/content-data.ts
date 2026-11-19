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
    // Menu navigasi utama
    mainNav: [
      {
        title: "Modul ERP",
        // Klik menu utama: gulir ke section modul.tsx (id="modul")
        href: "/#modul",
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
            href: "/modul/aset",
            iconName: "Building2",
            color: "purple",
          },
        ],
      },
      {
        title: "Solusi Industri",
        // Klik menu utama: gulir ke section industry-solutions.tsx (id="industri")
        href: "/#industri",
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
      title: "Dapatkan Assessment Alur Bisnis & Demo Sistem Gratis",
      placeholder: "Masukkan email korporat Anda...",
      buttonText: "Jadwalkan",
      checks: ["Migrasi Data Aman & Tervalidasi", "Konsultan On-Site"],
    },
  },
  trust: {
    title: "Dipercaya oleh perusahaan manufaktur Indonesia",
        clients: [
      { id: "kawata", name: "PT Kawata Indonesia", logoSrc: "/logos/kawata.png" },
      { id: "topla", name: "PT Topla Abadi Jaya", logoSrc: "/logos/topla.png" },
      { id: "ikuyo", name: "PT Ikuyo Indonesia", logoSrc: "/logos/ikuyo.png" },
      { id: "motasa", name: "PT Motasa Indonesia", logoSrc: "/logos/motasa.png" },
      { id: "narumi", name: "PT Narumi Indonesia Mfg (NIM)", logoSrc: "/logos/narumi.png" },
      { id: "pci", name: "PT Prima Copper Industri", logoSrc: "/logos/pci.jpg" },
      { id: "ujs", name: "PT Unggul Jaya Sejahtera", logoSrc: "/logos/ujs.jpg" },
      { id: "npt", name: "PT Nanda Persada Transport", logoSrc: "/logos/npt.png" },
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
    title: "6 Pilar Fondasi Sistem MyERP Plus",
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
  cta: {
    badge: "Konsultasi & Assessment Gratis",
    title: "Siap Mengintegrasikan Operasional Perusahaan Anda?",
    description:
      "Jadwalkan sesi demo langsung selama 45 menit bersama Solution Architect PT You profit Indonesia untuk memetakan alur kerja bisnis Anda.",
    demoText: "Jadwalkan Live Demo",
    flowchartText: "Download Flowchart ERP",
  },
  footer: {
    descBefore: "Solusi perangkat lunak Enterprise Resource Planning terintegrasi oleh",
    descBrand: "PT You profit Indonesia",
    descAfter: "untuk perusahaan manufaktur, distribusi, dan jasa profesional.",
    address: "Ruko Modern Kav A16-A17, Lowokwaru, Kota Malang 65143",
    columns: [
      {
        title: "Modul ERP",
        links: [
          { title: "1. Finansial & Akuntansi", href: "/modul/finansial" },
          { title: "2. Manufaktur & Produksi", href: "/modul/manufaktur" },
          { title: "3. Pembelian & Rantai Pasok", href: "/modul/pembelian" },
          { title: "4. Penjualan & Distribusi", href: "/modul/penjualan" },
          { title: "5. Inventaris & Gudang", href: "/modul/inventaris" },
          { title: "6. Manajemen Aset Tetap", href: "/modul/aset" },
        ],
      },
      {
        title: "Solusi Industri",
        links: [
          { title: "Manufaktur & Pabrikasi", href: "/solusi/manufaktur" },
          { title: "Distribusi dan Perdagangan", href: "/solusi/distribusi" },
          { title: "Jasa Profesional dan Layanan", href: "/solusi/jasa" },
          { title: "Studi Kasus 11 Sektor", href: "/studi-kasus/logam" },
        ],
      },
    ],
    companyTitle: "Perusahaan & Lisensi",
    companyLinks: [
      { title: "Beranda Utama", href: "/" },
      { title: "Paket Lisensi & Harga", href: "/harga" },
      { title: "Kontak", href: "/kontak" },
    ],
    demoText: "Jadwalkan Live Demo",
    copyright: "© 2026 PT You profit Indonesia. Seluruh Hak Cipta Dilindungi.",
    security: "Keamanan Database Terenkripsi",
  },
  demo: {
    badge: "Sesi Demo 45 Menit",
    title: "Jadwalkan Live Demo MyERP Plus",
    subtitle:
      "Isi data singkat di bawah ini untuk terhubung dengan Solution Architect kami.",
    nameLabel: "Nama Lengkap",
    namePlaceholder: "Contoh: Hendra Wijaya",
    companyLabel: "Nama Perusahaan",
    companyPlaceholder: "Contoh: PT Maju Jaya Manufaktur",
    phoneLabel: "Nomor WhatsApp / Telepon",
    phonePlaceholder: "0812-xxxx-xxxx",
    focusLabel: "Fokus Proses Bisnis",
    focusOptions: [
      "Manufaktur & Produksi",
      "Distribusi dan Perdagangan",
      "Jasa Profesional dan Layanan (Services)",
    ],
    submitText: "Kirim Permintaan Jadwal Demo",
    // Nomor tujuan WhatsApp konsultan (kode negara tanpa +, spasi, atau tanda hubung)
    whatsapp: "6281212122388",
    messageIntro: "Halo MyERP Plus, saya ingin menjadwalkan live demo.",
    successTitle: "Satu langkah lagi",
    successText:
      "WhatsApp sudah terbuka dengan pesan yang terisi otomatis. Tekan tombol kirim di WhatsApp untuk menyelesaikan permintaan jadwal demo Anda.",
    closeText: "Tutup",
  },
  modulDetail: {
    subNavLabel: "Modul ERP:",
    featuresTitle: "Ruang Lingkup & Fitur Utama",
    featuresSubtitle: "Fungsionalitas standar yang tersedia di dalam modul",
    workflowTitle: "Alur Kerja & Siklus Dokumen",
    ctaTitle: "Diskusikan Kebutuhan Modul",
    ctaText: "Jadwalkan sesi demonstrasi langsung bersama tim konsultan PT You profit Indonesia.",
    demoButton: "Jadwalkan Demo Modul",
    backButton: "Kembali ke Beranda",
    items: {
      finansial: {
        number: 1,
        eyebrow: "01 • Akuntansi & Keuangan",
        title: "Finansial & Akuntansi",
        description:
          "General Ledger otomatis tanpa input ganda. Penyajian laporan keuangan terpusat (Laba Rugi, Neraca, Arus Kas) secara real-time & kepatuhan regulasi pajak Indonesia.",
        image: "/modul/finansial.jpg",
        imageCaption:
          "Rekonsiliasi buku besar, laporan laba rugi, dan kepatuhan perpajakan korporat dalam satu sistem.",
        integrationLabel: "Integrasi Lintas Modul:",
        integration: [
          { text: "Terhubung otomatis ke " },
          { text: "Pembelian", highlight: true },
          { text: ", " },
          { text: "Gudang", highlight: true },
          { text: ", & " },
          { text: "Penjualan", highlight: true },
          { text: " (Jurnal Otomatis dari DO & GRN)" },
        ],
        features: [
          {
            title: "General Ledger & Jurnal Otomatis",
            description:
              "Setiap transaksi operasional dari gudang, pembelian, dan penjualan langsung membentuk jurnal akuntansi secara seketika.",
          },
          {
            title: "Laporan Keuangan Real-Time",
            description:
              "Neraca, Laba Rugi, Arus Kas, dan Buku Besar dapat ditarik kapan saja tanpa menunggu proses posting manual akhir bulan.",
          },
          {
            title: "Kepatuhan Pajak Indonesia",
            description:
              "Mendukung ekspor faktur pajak keluaran/masukan standar e-Faktur serta pencatatan bukti potong PPh (e-Bupot).",
          },
          {
            title: "Manajemen Hutang & Piutang (AP/AR)",
            description:
              "Pemantauan umur piutang (Aging Schedule), pelunasan multi-invoice, hingga pengingat jatuh tempo tagihan.",
          },
          {
            title: "Multi-Currency & Selisih Kurs",
            description:
              "Pencatatan transaksi valuta asing lengkap dengan perhitungan otomatis selisih kurs terealisasi maupun belum terealisasi.",
          },
          {
            title: "Audit Trail Lengkap",
            description:
              "Mencatat rekam jejak waktu, pengguna, dan nilai sebelum-sesudah untuk setiap perubahan dokumen keuangan.",
          },
        ],
        workflow: [
          "Transaksi Operasional (GRN / DO / Invoice)",
          "Validasi Mapping Akun Otomatis",
          "Posting Jurnal Buku Besar Real-Time",
          "Laporan Keuangan & Pajak Siap Audit",
        ],
      },
            manufaktur: {
        number: 2,
        eyebrow: "02 • Produksi & Manufaktur",
        title: "Manufaktur & Produksi",
        description:
          "Kelola alur produksi dari Multi-level BOM, Work in Progress (WIP) hingga Finished Goods (FG) beserta kalkulasi HPP aktual yang akurat.",
        image: "/modul/manufaktur.jpg",
        imageCaption:
          "Dari perencanaan bahan baku hingga hasil produksi dengan biaya aktual yang terukur.",
        integrationLabel: "Integrasi Lintas Modul:",
        integration: [
          { text: "Terhubung otomatis ke " },
          { text: "Stok Bahan Baku", highlight: true },
          { text: " & " },
          { text: "Jurnal Biaya Produksi Akuntansi", highlight: true },
        ],
        features: [
          {
            title: "Multi-Level BOM",
            description:
              "Susunan bahan baku bertingkat dari barang jadi, barang setengah jadi, hingga komponen dasar dalam satu struktur terpadu.",
          },
          {
            title: "Work Order & Routing",
            description:
              "Perintah produksi dengan urutan proses dan work center yang jelas, lengkap dengan status pengerjaan tiap tahap.",
          },
          {
            title: "Monitoring Work in Progress (WIP)",
            description:
              "Pantau nilai dan posisi barang dalam proses produksi secara real-time tanpa rekap manual.",
          },
          {
            title: "Kalkulasi HPP Aktual per Batch",
            description:
              "Harga pokok produksi dihitung otomatis dari pemakaian bahan, tenaga kerja, dan biaya overhead aktual.",
          },
          {
            title: "Pengendalian Scrap & Susut",
            description:
              "Pencatatan sisa dan susut produksi untuk membandingkan pemakaian bahan terhadap standar BOM.",
          },
          {
            title: "Hasil Produksi ke Finished Goods",
            description:
              "Hasil produksi masuk ke persediaan barang jadi secara otomatis dan siap dijual atau didistribusikan.",
          },
        ],
        workflow: [
          "Bill of Materials & Routing",
          "Work Order & Pemakaian Bahan Baku",
          "Pencatatan WIP & Hasil Produksi (FG)",
          "HPP Aktual & Jurnal Biaya Otomatis",
        ],
      },
      pembelian: {
        number: 3,
        eyebrow: "03 • Pengadaan & Rantai Pasok",
        title: "Pembelian & Rantai Pasok",
        description:
          "Alur Purchase Request (PR), Purchase Order (PO), Goods Receipt Note (GRN), dan Purchase Invoice (PI). Terhubung langsung dengan stok persediaan dan hutang usaha (AP).",
        image: "/modul/pembelian.jpg",
        imageCaption:
          "Proses pengadaan terdokumentasi dari permintaan hingga pembayaran hutang.",
        integrationLabel: "Integrasi Lintas Modul:",
        integration: [
          { text: "Terhubung otomatis ke " },
          { text: "Hutang Dagang (AP)", highlight: true },
          { text: " & " },
          { text: "Penerimaan Barang Gudang (GRN)", highlight: true },
        ],
        features: [
          {
            title: "Purchase Request (PR)",
            description:
              "Permintaan pembelian dari tiap divisi tercatat rapi dan dapat dilacak statusnya sampai disetujui.",
          },
          {
            title: "Purchase Order (PO)",
            description:
              "Penerbitan PO ke pemasok dengan harga, kuantitas, dan syarat pembayaran yang terdokumentasi.",
          },
          {
            title: "Penerimaan Barang (GRN)",
            description:
              "Barang yang diterima langsung menambah stok gudang dan dicocokkan dengan PO terkait.",
          },
          {
            title: "Purchase Invoice & Hutang (AP)",
            description:
              "Faktur pembelian membentuk hutang usaha otomatis lengkap dengan jadwal jatuh tempo.",
          },
          {
            title: "3-Way Matching",
            description:
              "Validasi otomatis kecocokan antara PO, GRN, dan faktur pemasok sebelum hutang diakui.",
          },
          {
            title: "Approval Bertingkat",
            description:
              "Persetujuan pembelian berjenjang sesuai batas kewenangan dan matriks otorisasi perusahaan.",
          },
        ],
        workflow: [
          "Purchase Request (PR)",
          "Purchase Order (PO)",
          "Goods Receipt Note (GRN)",
          "Purchase Invoice (PI) & Hutang",
        ],
      },
      penjualan: {
        number: 4,
        eyebrow: "04 • Penjualan & Distribusi",
        title: "Penjualan & Distribusi",
        description:
          "Alur Sales Quotation (SQ), Sales Order (SO), Delivery Order (DO), dan Sales Invoice (SI). Terhubung langsung dengan persediaan barang dan piutang usaha (AR).",
        image: "/modul/penjualan.jpg",
        imageCaption:
          "Dari penawaran hingga penagihan, semua terhubung ke stok dan piutang secara real-time.",
        integrationLabel: "Integrasi Lintas Modul:",
        integration: [
          { text: "Terhubung otomatis ke " },
          { text: "Piutang Dagang (AR)", highlight: true },
          { text: " & " },
          { text: "Reservasi Stok Gudang", highlight: true },
        ],
        features: [
          {
            title: "Sales Quotation (SQ)",
            description:
              "Penawaran harga ke pelanggan yang dapat langsung dikonversi menjadi pesanan penjualan.",
          },
          {
            title: "Sales Order (SO) & Reservasi Stok",
            description:
              "Pesanan penjualan otomatis mengunci stok gudang agar tidak terjual ganda.",
          },
          {
            title: "Delivery Order (DO) & Surat Jalan",
            description:
              "Penerbitan surat jalan cepat yang langsung mengurangi stok dan menjadi dasar jurnal otomatis.",
          },
          {
            title: "Sales Invoice (SI)",
            description:
              "Faktur penjualan terbit dari DO dan membentuk piutang usaha tanpa input ulang.",
          },
          {
            title: "Piutang & Aging (AR)",
            description:
              "Pemantauan umur piutang pelanggan beserta pengingat penagihan saat jatuh tempo.",
          },
          {
            title: "Harga, Diskon & Batas Kredit",
            description:
              "Pengaturan harga bertingkat, diskon, dan batas kredit pelanggan yang divalidasi saat transaksi.",
          },
        ],
        workflow: [
          "Sales Quotation (SQ)",
          "Sales Order (SO) & Reservasi Stok",
          "Delivery Order (DO) & Surat Jalan",
          "Sales Invoice (SI) & Piutang",
        ],
      },
      inventaris: {
        number: 5,
        eyebrow: "05 • Persediaan & Gudang",
        title: "Inventaris & Gudang",
        description:
          "Pelacakan stok multi-gudang, pengelolaan nomor lot/batch produksi, mutasi antar cabang/gudang, serta stock opname fisik untuk sinkronisasi fisik vs sistem.",
        image: "/modul/inventaris.jpg",
        imageCaption:
          "Saldo stok akurat di setiap gudang dan cabang, diperbarui pada setiap transaksi.",
        integrationLabel: "Integrasi Lintas Modul:",
        integration: [
          { text: "Terhubung otomatis ke " },
          { text: "Manufaktur", highlight: true },
          { text: " & " },
          { text: "Pengadaan", highlight: true },
          { text: " (Update Saldo Stok Real-Time)" },
        ],
        features: [
          {
            title: "Stok Multi-Gudang",
            description:
              "Saldo stok terpisah per gudang dan cabang, dapat dilihat secara terpusat maupun per lokasi.",
          },
          {
            title: "Lot / Batch",
            description:
              "Pelacakan nomor lot atau batch produksi dari penerimaan hingga pengeluaran barang.",
          },
          {
            title: "Mutasi Antar Gudang",
            description:
              "Perpindahan barang antar cabang atau gudang tercatat lengkap dengan status pengiriman.",
          },
          {
            title: "Stock Opname",
            description:
              "Pencocokan stok fisik dengan stok sistem, dengan selisih yang langsung tercatat dan dijurnal.",
          },
          {
            title: "Metode Penilaian Stok",
            description:
              "Valuasi persediaan dengan metode FIFO atau rata-rata sesuai kebijakan akuntansi perusahaan.",
          },
          {
            title: "Kartu Stok & Saldo Real-Time",
            description:
              "Riwayat keluar masuk barang dan saldo terkini tersedia kapan saja tanpa rekap manual.",
          },
        ],
        workflow: [
          "Penerimaan Barang (GRN) & Hasil Produksi",
          "Pencatatan Lot/Batch per Gudang",
          "Mutasi Antar Gudang & Pengeluaran (DO)",
          "Stock Opname & Sinkronisasi Saldo",
        ],
      },
      aset: {
        number: 6,
        eyebrow: "06 • Aset & Depresiasi",
        title: "Manajemen Aset Tetap",
        description:
          "Kelola register mesin, kendaraan, dan bangunan dengan jadwal depresiasi otomatis serta pemeliharaan berkala untuk menjaga valuasi aset.",
        image: "/modul/aset.jpg",
        imageCaption:
          "Seluruh aset perusahaan tercatat, tersusutkan otomatis, dan terpantau nilainya.",
        integrationLabel: "Integrasi Lintas Modul:",
        integration: [
          { text: "Terhubung otomatis ke " },
          { text: "Jurnal Akuntansi Penyusutan", highlight: true },
          { text: " & " },
          { text: "Modul Depresiasi Aset", highlight: true },
        ],
        features: [
          {
            title: "Asset Register",
            description:
              "Daftar induk mesin, kendaraan, dan bangunan lengkap dengan nilai perolehan, lokasi, dan penanggung jawab.",
          },
          {
            title: "Jadwal Depresiasi Otomatis",
            description:
              "Penyusutan dihitung otomatis per periode sesuai metode dan umur ekonomis yang ditetapkan.",
          },
          {
            title: "Jurnal Penyusutan Otomatis",
            description:
              "Beban penyusutan terposting ke buku besar tiap periode tanpa input jurnal manual.",
          },
          {
            title: "Pemeliharaan Berkala",
            description:
              "Jadwal dan riwayat perawatan aset tercatat untuk menjaga kondisi dan umur pakai.",
          },
          {
            title: "Valuasi & Nilai Buku",
            description:
              "Nilai buku aset terkini tersedia kapan saja untuk kebutuhan laporan dan audit.",
          },
          {
            title: "Mutasi & Pelepasan Aset",
            description:
              "Perpindahan lokasi, penjualan, atau penghapusan aset tercatat lengkap dengan dampaknya pada jurnal.",
          },
        ],
        workflow: [
          "Registrasi Aset (Mesin, Kendaraan, Bangunan)",
          "Penetapan Metode & Jadwal Depresiasi",
          "Jurnal Penyusutan Otomatis Bulanan",
          "Pemeliharaan & Valuasi Aset",
        ],
      },
    },
  },
    solusiDetail: {
    subNavLabel: "Kelompok Industri:",
    challengesTitle: "Tantangan Operasional Umum",
    workflowTitle: "Alur Proses Bisnis Terintegrasi",
    capabilitiesTitle: "Kapabilitas Utama MyERP Plus untuk",
    capabilitiesSubtitle:
      "Fitur operasional yang dirancang untuk mengendalikan proses bisnis",
    ctaTitle: "Konsultasikan Alur",
    ctaTitleSuffix: "Perusahaan Anda",
    ctaText:
      "Dapatkan pemetaan proses bisnis langsung bersama Solution Architect PT You profit Indonesia.",
    demoButton: "Jadwalkan Live Demo",
    backButton: "Kembali ke Beranda",
    items: {
      manufaktur: {
        eyebrow: "01 • Pabrikasi & Proses Produksi Terpadu",
        title: "Manufaktur",
        sectorName: "Manufaktur",
        description:
          "Multi-Level BOM bertingkat, alur work order presisi, pengelolaan bahan baku, serta kalkulasi HPP aktual otomatis hingga per unit produk.",
        configText: "Konfigurasi alur operasional siap pakai untuk sektor",
        image: "/industri/manufaktur.jpg",
        imageCaption:
          "Pengendalian lantai pabrik, struktur Multi-Level BOM bertingkat, dan kalkulasi HPP aktual per unit produksi.",
        challenges: [
          "Perhitungan Harga Pokok Produksi (HPP) sering meleset karena biaya overhead dan susut bahan baku tidak tercatat per batch.",
          "Keterlambatan pemenuhan pesanan akibat jadwal pembelian bahan baku tidak sinkron dengan kapasitas lini produksi.",
          "Sulit melacak posisi barang setengah jadi (Work in Progress) di lantai pabrik.",
        ],
        workflow: [
          "Production Formula & Material Order",
          "Penerbitan Work Order (WO)",
          "Material Slip & Proses Produksi",
          "Material Return & Production Slip",
        ],
        features: [
          {
            title: "Production Formula",
            description:
              "Penyusunan resep dan komposisi bahan baku bertingkat (Bill of Materials) beserta standar kebutuhan material dan rasio rendemen per produk.",
          },
          {
            title: "Material Order",
            description:
              "Pengajuan permintaan kebutuhan bahan baku (MRP) secara terstruktur berdasarkan jadwal produksi untuk memastikan ketersediaan stok material tepat waktu.",
          },
          {
            title: "Work Order",
            description:
              "Penerbitan surat perintah kerja produksi per lini atau mesin guna mengendalikan jadwal pengerjaan, target output, dan status proses di lantai pabrik.",
          },
          {
            title: "Material Slip",
            description:
              "Pencatatan pengeluaran bahan baku dari gudang menuju lantai produksi secara akurat sehingga mutasi dan pemakaian material terpantau real-time.",
          },
          {
            title: "Material Return",
            description:
              "Pengelolaan pengembalian sisa bahan baku yang tidak terpakai dari lantai produksi kembali ke gudang untuk menjaga akurasi saldo stok dan HPP batch.",
          },
          {
            title: "Production Slip",
            description:
              "Pelaporan hasil penyelesaian barang jadi (Finished Goods) maupun setengah jadi dari lini produksi yang langsung memperbarui stok gudang dan jurnal HPP aktual.",
          },
        ],
      },
      distribusi: {
        eyebrow: "02 • Rantai Pasok & Grosir",
        title: "Distribusi dan Perdagangan",
        sectorName: "Distribusi dan Perdagangan",
        description:
          "Manajemen multi-gudang antar cabang, penerbitan surat jalan cepat, hingga pemantauan penagihan piutang dagang.",
        configText: "Konfigurasi alur operasional siap pakai untuk sektor",
        image: "/industri/distribusi.jpg",
        imageCaption:
          "Manajemen multi-gudang antar cabang, penerbitan surat jalan cepat, hingga pemantauan penagihan piutang dagang terintegrasi.",
        challenges: [
          "Selisih stok antara gudang pusat, gudang cabang, dan barang dalam perjalanan pengiriman.",
          "Kebocoran piutang tak tertagih akibat pesanan tetap diproses meski pelanggan melewati batas kredit.",
          "Keterlambatan penerbitan tagihan karena dokumen surat jalan (Delivery Order) tidak terintegrasi dengan faktur.",
        ],
        workflow: [
          "Sales Quotation & SO",
          "Multi-Warehouse Transfer",
          "Delivery Order & Potong Stok",
          "Sales Invoice & Aging AR",
        ],
        features: [
          {
            title: "Multi-Warehouse Transfer",
            description:
            "Pengelolaan mutasi barang antar cabang lengkap dengan kontrol barang dalam transit.",
          },
          {
            title: "Surat Jalan (DO) Otomatis",
            description:
            "Penerbitan dokumen pengiriman langsung dari Sales Order yang seketika memotong saldo stok.",
          },
          {
            title: "Aging Piutang Dagang & Credit Limit",
            description:
            "Pemblokiran otomatis SO jika pelanggan melampaui batas plafon kredit atau jatuh tempo.",
          },
          {
            title: "Konversi Multi-Satuan",
            description:
            "Transaksi fleksibel dalam satuan karton, dus, maupun eceran tanpa selisih konversi.",
          },
          {
            title: "Siklus SQ → SO → DO → SI",
            description:
            "Alur penjualan berantai yang memastikan setiap pengiriman tertagih akurat.",
          },
          {
            title: "Analisis Profitabilitas Pelanggan & Wilayah",
            description:
            "Laporan margin penjualan per cabang, kategori produk, dan tenaga penjual.",
          },
        ],
      },
      jasa: {
        eyebrow: "03 • Jasa Umum & Layanan Bisnis",
        title: "Jasa Profesional dan Layanan (Services)",
        sectorName: "Jasa Profesional dan Layanan (Services)",
        description:
          "Dirancang fleksibel untuk industri jasa dan layanan umum dengan kendali manajemen hutang piutang berbasis aging, analisis laporan laba rugi per jenis jasa atau pelanggan, serta pembukuan buku besar tersegragasi secara akurat.",
        configText: "Konfigurasi alur operasional siap pakai untuk sektor",
        image: "/industri/jasa.jpg",
        imageCaption:
          "Kendali hutang piutang berbasis aging, analisis laporan laba rugi per jenis jasa, serta pembukuan buku besar terpadu.",
        challenges: [
          "Sulit mengetahui profitabilitas bersih dari masing-masing jenis jasa atau kontrak pelanggan secara terpisah.",
          "Penagihan termin jasa dan pemantauan umur piutang/hutang usaha tersebar di banyak file manual.",
          "Pencatatan biaya operasional per klien tercampur dalam satu buku besar umum.",
        ],
        workflow: [
          "Penawaran & Kontrak Jasa",
          "Aging Hutang & Piutang",
          "Penagihan Invoice & Termin",
          "Laba Rugi & Buku Besar per Jasa",
        ],
        features: [
          {
            title: "Manajemen Hutang Piutang dengan Aging",
            description:
            "Pemantauan jadwal jatuh tempo tagihan pelanggan dan kewajiban pemasok berdasarkan kelompok umur hari.",
          },
          {
            title: "Laba Rugi per Jasa atau Pelanggan",
            description:
            "Penyajian laporan pendapatan, biaya langsung, dan margin laba bersih terperinci per jenis layanan atau klien.",
          },
          {
            title: "Buku Besar per Jasa atau Pelanggan",
            description:
            "Segregasi mutasi akun buku besar yang memudahkan penelusuran transaksi per segmen layanan maupun pelanggan."
          },
          {
            title: "Penagihan Termin & Berulang",
            description:
            "Penerbitan invoice jasa berdasarkan progres penyelesaian layanan maupun jadwal kontrak berkala.",
          },
          {
            title: "Kontrol Biaya Operasional & Pengadaan",
            description:
            "Alur persetujuan pembelian dan pembebanan biaya langsung ke masing-masing layanan.",
          },
          {
            title: "Laporan Keuangan Standar Audit",
            description:
            "Konsolidasi otomatis seluruh segmen jasa menjadi laporan keuangan perusahaan yang siap diaudit.",
          },
        ],
      },
    },
  },
    studiKasusDetail: {
    sectorBarLabel: "Pilih Sektor:",
    challengesTitle: "Titik Kritis Operasional (Bottleneck)",
    solutionsTitle: "Solusi Terintegrasi MyERP Plus",
    modulesLabel: "Modul Inti yang Diimplementasikan",
    ctaButton: "Diskusikan Studi Kasus Ini",
    items: {
      logam: {
        sectorName: "Manufaktur Pengolahan Logam",
        badge: "Smelting, Casting, Extrusion & Wire Drawing",
        title: "Manufaktur Pengolahan Logam (seperti besi, baja, aluminium, tembaga, dan timah)",
        description:
          "Smelting, Casting, Extrusion & Wire Drawing (Bahan baku Ingot, Billet, Katoda & Scrap Logam -> Wire, Batangan, Plat & Profil Logam). Mengelola volatilitas harga pasar bursa logam (LME) dan rendemen peleburan terpadu.",
        capacityText:
          "Kapasitas output harian 120+ Ton olahan logam dengan siklus peleburan tungku kontinu 24 jam non-stop.",
        stats: [
          { value: "99.1%", label: "Akurasi Metal Balance & Susut Tungku" },
          { value: "Harian", label: "Presisi Kalkulasi HPP per Batch Logam" },
          { value: "-18%", label: "Efisiensi Biaya Dies & Refractory" },
        ],
        challenges: [
          "Fluktuasi harga komoditas logam (LME & bursa lokal) harian menyulitkan penetapan harga jual dan valuasi stok.",
          "Rendemen peleburan scrap serta susut pembakaran (melting loss) tidak terpantau real-time per batch.",
          "Konsumsi energi tungku peleburan (furnace) dan biaya cetakan (dies) belum teralokasi akurat ke HPP.",
        ],
        solutions: [
          "BOM peleburan dinamis yang mengakomodasi campuran ingot, katoda, dan scrap daur ulang.",
          "Alokasi biaya energi listrik furnace dan penyusutan dies/cetakan langsung ke perhitungan HPP batch.",
          "Pencatatan berat timbangan riil di setiap tahap casting, rolling, hingga wire drawing.",
        ],
        modules: [
          "Manufaktur & Produksi",
          "Inventaris & Gudang",
          "Finansial & Akuntansi",
          "Pembelian & Rantai Pasok",
          "Manajemen Aset Tetap",
        ],
      },
      plastik: {
        sectorName: "Manufaktur Plastik Injeksi",
        badge: "Injection Moulding & Rigid Packaging",
        title: "Manufaktur Plastik Injeksi",
        description:
          "Precision Injection Moulding & Tooling untuk komponen otomotif dan elektronik.",
        capacityText: "32 mesin injeksi dengan clamp force 50-650T.",
        stats: [
          { value: "-30%", label: "Pemborosan Biji Plastik" },
          { value: "100%", label: "Visibilitas Depresiasi Mould ke Unit Produk" },
          { value: "+22%", label: "OEE Mesin Injeksi" },
          { value: "Per Cavity", label: "Presisi Kalkulasi HPP" },
        ],
        challenges: [
          "Kerusakan mould mendadak hentikan lini produksi.",
          "Pencampuran virgin vs regrind/crusher tidak terkontrol.",
          "Cacat produk (flash, short shot) kaburkan HPP.",
        ],
        solutions: [
          "BOM rasio resin virgin + masterbatch + regrind.",
          "Shot-count mould otomatis & depresiasi cetakan per ketukan.",
          "Work order tracking mesin & toleransi scrap runner/sprue.",
        ],
        modules: [
          "Manufaktur & Produksi",
          "Inventaris & Gudang",
          "Manajemen Aset Tetap",
          "Finansial & Akuntansi",
        ],
      },
      tembakau: {
        sectorName: "Manufaktur Olahan Tembakau (Rokok)",
        badge: "SKT & SKM • Pita Cukai & Saus Rahasia",
        title: "Manufaktur Olahan Tembakau (Rokok)",
        description:
          "SKT & SKM dengan serialisasi pita cukai nasional dan pengelolaan saus rahasia.",
        capacityText: "Kapasitas produksi 35 juta batang per bulan.",
        stats: [
          { value: "100%", label: "Akurasi Rekonsiliasi Pita Cukai (Zero Selisih Audit)" },
          { value: "Konsisten", label: "Rasa Konsisten & Resep Saus Rahasia Terproteksi" },
          { value: "Per Pack", label: "Presisi HPP hingga per Pack Rokok" },
          { value: "+24%", label: "Efisiensi Maker" },
        ],
        challenges: [
          "Risiko selisih stok & audit ketat pita cukai fisik.",
          "Formula saus rahasia rentan bocor/inkonsisten.",
          "Susut tembakau krosok ke rajangan.",
          "Keausan pisau rajang & maker.",
        ],
        solutions: [
          "Enkripsi resep saus & auto weighing dispenser.",
          "Serialisasi mutasi pita cukai (masuk, pasang, sisa, rusak).",
          "Perhitungan susut bertahap krosok ke rajangan.",
          "Monitoring jam jalan pisau & suku cadang maker.",
        ],
        modules: [
          "Manufaktur & Produksi",
          "Inventaris & Gudang",
          "Finansial & Akuntansi",
          "Manajemen Aset Tetap",
          "Penjualan & Distribusi",
        ],
      },
      tekstil: {
        sectorName: "Industri Manufaktur Tekstil Terpadu",
        badge: "Weaving, Dyeing, Printing & Finishing",
        title: "Industri Manufaktur Tekstil Terpadu",
        description:
          "Weaving, Dyeing, Printing & Finishing dalam satu rantai produksi terpadu.",
        capacityText: "Kapasitas weaving 850.000 meter per bulan dengan 48 dyeing vat.",
        stats: [
          { value: "-40%", label: "Cacat Warna (Re-dyeing Rate)" },
          { value: "100%", label: "Akurasi Konversi Kg ke Meter tanpa Selisih Opname" },
          { value: "Per Meter", label: "Presisi HPP hingga Desimal Rupiah" },
          { value: "-22%", label: "Downtime Mesin" },
        ],
        challenges: [
          "Belang warna (shade variation) resep celup meleset.",
          "Selisih stok konversi Kg ke Meter/Yard.",
          "Biaya energi boiler/uap tidak masuk HPP.",
          "Putus benang mendadak di mesin tenun (loom).",
        ],
        solutions: [
          "Penguncian formula celup & liquor ratio otomatis.",
          "Konversi Kg ke Meter dengan toleransi susut rajut/tenun.",
          "Alokasi biaya uap boiler & listrik ke batch kain.",
          "Preventive maintenance jarum & sisir mesin tenun.",
        ],
        modules: [
          "Manufaktur & Produksi",
          "Inventaris & Gudang",
          "Finansial & Akuntansi",
          "Manajemen Aset Tetap",
          "Penjualan & Distribusi",
        ],
      },
      bangunan: {
        sectorName: "Distributor Bahan Bangunan",
        badge: "Grosir Semen, Besi, Keramik & Pipa",
        title: "Distributor Bahan Bangunan",
        description:
          "Grosir semen, besi, keramik, dan pipa untuk ritel dan proyek.",
        capacityText: "Melayani 1.200+ ritel & proyek dengan 45 armada truk harian.",
        stats: [
          { value: "-32%", label: "Piutang Macet (Bad Debt)" },
          { value: "99.4%", label: "Akurasi Stok Multi-Satuan Gudang" },
          { value: "+20%", label: "Efisiensi Muatan Armada & Rute" },
          { value: "Nol", label: "Keterlambatan Uji KIR/STNK Armada" },
        ],
        challenges: [
          "Jebolnya plafon kredit toko & piutang macet (AR).",
          "Satuan ganda rumit (Ton/Zak, Dus/m², Ikat/Batang).",
          "Semen mengeras & barang pecah di gudang.",
          "Kendala KIR/servis truk di perjalanan.",
        ],
        solutions: [
          "Credit Limit Control otomatis (kunci SO jika overlimit/menunggak).",
          "Konversi multi-satuan otomatis pada SO & stok.",
          "Karantina barang rusak & klaim pabrikan.",
          "Reminder servis armada truk & optimasi tonase rute.",
        ],
        modules: [
          "Penjualan & Distribusi",
          "Inventaris & Gudang",
          "Pembelian & Rantai Pasok",
          "Finansial & Akuntansi",
          "Manajemen Aset Tetap",
        ],
      },
            "general-dist": {
        sectorName: "General Distributor",
        badge: "Distribusi Multi-Cabang",
        title: "General Distributor",
        description:
          "Distribusi multi-cabang untuk mitra ritel dengan jaringan hub regional.",
        capacityText: "Melayani 1.800+ mitra ritel melalui 6 hub regional.",
        stats: [
          { value: "-35%", label: "Durasi Billing Cycle Penagihan" },
          { value: "Nol", label: "Selisih Stok Mutasi Antar Cabang/Kanvas" },
          { value: "99.6%", label: "Ketepatan Pemenuhan DO Tepat Waktu" },
          { value: "Real-Time", label: "Aging Piutang Sinkron ke Neraca" },
        ],
        challenges: [
          "Stok gantung antar cabang & transit kanvas tidak terlacak.",
          "Kebocoran penagihan piutang tanpa batas kredit otomatis.",
          "Lambatnya konsolidasi order sales ke jadwal gudang.",
        ],
        solutions: [
          "Otomatisasi alur SQ -> SO -> DO -> SI terhubung stok & piutang.",
          "Multi-Warehouse Transfer dengan barcode & status in-transit.",
          "Matriks batas kredit & laporan aging piutang dinamis.",
        ],
        modules: [
          "Penjualan & Distribusi",
          "Inventaris & Gudang",
          "Finansial & Akuntansi",
          "Pembelian & Rantai Pasok",
        ],
      },
      alkes: {
        sectorName: "Distributor Alat Kesehatan",
        badge: "PBF & Alkes • Regulasi CDAKB",
        title: "Distributor Alat Kesehatan",
        description:
          "PBF / Alkes (BMHP, reagen, elektromedik) dengan kepatuhan regulasi CDAKB.",
        capacityText: "Melayani 85 fasilitas kesehatan dan rumah sakit.",
        stats: [
          { value: "< 1 Menit", label: "Penelusuran Batch untuk Recall" },
          { value: "-85%", label: "Kerugian Barang Expired" },
          { value: "-25 Hari", label: "Siklus Penagihan RS Lebih Cepat (Hari Kerja)" },
          { value: "100%", label: "Transparansi Stok Konsinyasi RS" },
        ],
        challenges: [
          "Lambatnya audit recall batch penarikan produk.",
          "Reagen kedaluwarsa akibat langgar alur FEFO.",
          "Stok konsinyasi di RS tidak terkontrol.",
          "Penagihan RS tertunda karena berkas BAST tercecer.",
        ],
        solutions: [
          "Alur ketat Lot, Serial Number & picking FEFO otomatis.",
          "Pelacakan lokasi stok konsinyasi & unit demo RS.",
          "Lampiran izin edar AKL/AKD & BAST otomatis di faktur.",
          "Penjadwalan kalibrasi berkala unit elektromedik.",
        ],
        modules: [
          "Inventaris & Gudang",
          "Penjualan & Distribusi",
          "Pembelian & Rantai Pasok",
          "Finansial & Akuntansi",
          "Manajemen Aset Tetap",
        ],
      },
      rempah: {
        sectorName: "Manufaktur Bahan Rempah",
        badge: "Pengolahan Rempah & Bumbu",
        title: "Manufaktur Bahan Rempah",
        description:
          "Pengolahan jahe, lada, kayu manis, dan cengkeh menjadi powder, flakes, dan ekstrak bumbu.",
        capacityText: "Kapasitas pengolahan 250 ton per bulan.",
        stats: [
          { value: "99%", label: "Presisi HPP hingga Level Mesh Size" },
          { value: "Menit", label: "Traceability Lot Mutu Ekspor Selesai" },
          { value: "-30%", label: "Rework Akibat Kehalusan Non-Standar" },
          { value: "Terjaga", label: "Minyak Atsiri di Gudang Suhu Kontrol (Cegah Degradasi)" },
        ],
        challenges: [
          "Susut rendemen bertahap tidak transparan.",
          "HPP bias akibat harga bahan basah fluktuatif.",
          "Ketertelusuran lot mikroba/kebun sulit dilacak manual.",
          "Saringan mesh mesin pin mill robek tanpa terdeteksi.",
        ],
        solutions: [
          "Multi-step BOM (Cuci, Kering, Giling, Ayak).",
          "Penyerapan biaya susut & energi oven langsung ke HPP.",
          "Pencatatan Lot kebun, tanggal sterilisasi & status QC.",
          "Warning jam jalan penggantian saringan mesh pin mill.",
        ],
        modules: [
          "Manufaktur & Produksi",
          "Inventaris & Gudang",
          "Finansial & Akuntansi",
          "Pembelian & Rantai Pasok",
          "Manajemen Aset Tetap",
        ],
      },
      ekspedisi: {
        sectorName: "Ekspedisi",
        badge: "Kargo Darat FTL/LTL",
        title: "Jasa Ekspedisi & Logistik",
        description:
          "Kargo darat FTL/LTL Jawa-Bali-Sumatera dengan armada tronton dan wingbox B2B.",
        capacityText: "Mengoperasikan 120 armada tronton/wingbox untuk rute Jawa-Bali-Sumatera.",
        stats: [
          { value: "-45%", label: "Durasi Billing Penagihan" },
          { value: "98%", label: "Akurasi Pengendalian Biaya Jalan" },
          { value: "-35%", label: "Angka Mogok Armada di Jalan" },
          { value: "Per Nopol", label: "Transparansi Laba Rugi Bersih per Armada" },
        ],
        challenges: [
          "Kebocoran uang jalan supir, BBM, dan biaya tol.",
          "Invoice tertunda akibat Surat Jalan Balik (POD) lambat.",
          "Truk mogok di jalan karena servis berkala terlewat.",
          "Stok ban dan sparepart pool bengkel bocor.",
        ],
        solutions: [
          "Standarisasi plafon uang jalan & verifikasi nota riil.",
          "Monitoring kepulangan POD & penerbitan invoice instan.",
          "Jadwal servis & ganti ban berbasis odometer/KM.",
          "Alokasi part/ban bengkel per nomor polisi truk.",
        ],
        modules: [
          "Penjualan & Distribusi",
          "Finansial & Akuntansi",
          "Manajemen Aset Tetap",
          "Inventaris & Gudang",
          "Pembelian & Rantai Pasok",
        ],
      },
      mesin: {
        sectorName: "Manufaktur Mesin Produksi",
        badge: "Fabrikasi Mesin Industri ETO & MTO",
        title: "Manufaktur Mesin Produksi",
        description:
          "Fabrikasi mesin industri ETO & MTO dengan komponen mekanikal, elektrikal, dan subkontraktor.",
        capacityText: "Mengelola lebih dari 2.500 komponen mekanikal, elektrikal, dan subkon.",
        stats: [
          { value: "100%", label: "Visibilitas Biaya Proyek & Margin Laba Real-Time" },
          { value: "-38%", label: "Rework Perakitan" },
          { value: "+30%", label: "Ketepatan Pengiriman Mesin (OTD)" },
          { value: "Presisi", label: "Toleransi Sesuai Standar Gambar Teknik" },
        ],
        challenges: [
          "Biaya proyek membengkak (project cost overrun).",
          "Revisi desain (Engineering Change Order) kacau di bengkel.",
          "Komponen impor elektrikal terlambat tiba (lead time panjang).",
          "Penurunan akurasi mesin CNC karena kalibrasi terlewat.",
        ],
        solutions: [
          "Multi-level BOM ETO bertingkat & kontrol revisi desain.",
          "Sinkronisasi PO komponen impor dengan perakitan.",
          "Reservasi stok material per nomor proyek/SPK.",
          "Akumulasi biaya WIP real-time (bahan, subkon, tenaga kerja).",
        ],
        modules: [
          "Manufaktur & Produksi",
          "Pembelian & Rantai Pasok",
          "Inventaris & Gudang",
          "Finansial & Akuntansi",
          "Manajemen Aset Tetap",
        ],
      },
      jasa: {
        sectorName: "Jasa & Layanan",
        badge: "Konsultan Bisnis, IT & Teknis",
        title: "Jasa Profesional & Layanan",
        description:
          "Konsultan bisnis, IT/teknis, dan maintenance berbasis kontrak termin dan SLA.",
        capacityText: "Pengelolaan layanan berbasis kontrak termin & SLA.",
        stats: [
          { value: "Nol", label: "Invoice Termin Terlewat atau Telat Ditagihkan" },
          { value: "100%", label: "Transparansi Profitabilitas per Kontrak/Klien" },
          { value: "-28%", label: "Days Sales Outstanding (DSO)" },
          { value: "Audit-Ready", label: "Laporan Keuangan tanpa Rekap Manual" },
        ],
        challenges: [
          "Penagihan termin terlewat & piutang aging menumpuk.",
          "Margin laba rugi per jenis layanan/klien tidak jelas.",
          "Beban operasional tercecer tanpa buku besar tersegregasi.",
        ],
        solutions: [
          "Manajemen AR/AP dengan aging dinamis (30/60/90+ hari).",
          "Laporan Laba Rugi terpusat per jenis jasa atau pelanggan.",
          "General Ledger tersegregasi otomatis per kontrak/klien.",
        ],
        modules: [
          "Finansial & Akuntansi",
          "Penjualan & Distribusi",
          "Pembelian & Rantai Pasok",
        ],
      },
    },
  },
    harga: {
    badge: "Kalkulator Lisensi & Harga",
    title: "Hitung Estimasi Biaya ERP Bisnis Anda",
    subtitle:
      "Sesuaikan edisi paket modul, siklus berlangganan, serta kapasitas pengguna dan gudang sesuai kebutuhan operasional perusahaan.",
    // Nomor WhatsApp tujuan (kode negara tanpa +, spasi, atau tanda hubung)
    whatsapp: "6281192838899",
    defaultPlan: "enterprise",
    defaultCycle: "annual",
    cycleNote: "Siklus tagihan hanya berlaku untuk edisi berbayar.",
    cycles: [
      {
        id: "monthly",
        label: "1 Bulan",
        badge: "",
        discount: 0,
        summary: "Siklus Tagihan Bulanan",
        short: "Siklus Tagihan Bulanan",
      },
      {
        id: "semiannual",
        label: "6 Bulan",
        badge: "Hemat 10%",
        discount: 0.1,
        summary: "Siklus Tagihan 6 Bulan (Hemat 10%)",
        short: "Siklus Tagihan 6 Bulan",
      },
      {
        id: "annual",
        label: "1 Tahun",
        badge: "Paling Hemat 20%",
        discount: 0.2,
        summary: "Siklus Tagihan Tahunan (Paling Hemat 20%)",
        short: "Siklus Tagihan Tahunan",
      },
    ],
    step1Badge: "Langkah 1",
    step1Title: "Pilih Edisi Paket Lisensi ERP",
    step2Badge: "Langkah 2",
    step2Title: "Add-On Kapasitas & Ekstensi Modul",
    step2Subtitle:
      "Tambahkan kuota pengguna, cabang gudang, atau konektor integrasi tanpa perlu mengganti paket utama.",
    addOns: {
      user: {
        title: "1. Tambah Akun Pengguna (User Seat)",
        hintSuffix: "Hak akses berbasis jabatan (Role Based)",
        price: 250000,
        max: 50,
      },
      warehouseTitle: "2. Ekspansi Lokasi Gudang (Multi-Warehouse)",
      warehouseHint: "Tambah lokasi gudang fisik maupun gudang konsinyasi lintas cabang",
      warehouseIncluded: "Bawaan Paket",
      warehouses: [
        { count: 0, label: "+0 Gudang", price: 0 },
        { count: 1, label: "+1 Gudang", price: 350000 },
        { count: 3, label: "+3 Gudang", price: 900000 },
        { count: 5, label: "+5 Gudang", price: 1400000 },
      ],
      extensionTitle: "3. Modul Ekstensi & Integrasi Khusus",
      extensionHint: "Pilih ekstensi tambahan untuk otomasi lintas gudang & perpajakan",
      extensions: [
        { id: "wms", name: "WMS Barcode Scanner", price: 450000 },
        { id: "efaktur", name: "Konektor e-Faktur & e-Bupot", price: 300000 },
        { id: "wa", name: "Notifikasi Approval WA", price: 250000 },
      ],
    },
    summary: {
      label: "Ringkasan Paket",
      reset: "Reset",
      usersLabel: "Total Pengguna",
      warehouseLabel: "Kapasitas Gudang",
      scopeLabel: "Cakupan Modul:",
      packageLabel: "Paket Utama:",
      addOnLabel: "Total Add-On:",
      addOnUnavailable: "Tidak tersedia",
      estimateLabel: "Estimasi Investasi Bulanan:",
      demoButton: "Jadwalkan Presentasi & Demo",
    },
    perMonth: "per bulan (sesuai siklus dipilih)",
    compareTitle: "Perbandingan Lengkap Paket Lisensi ERP",
    compareSubtitle:
      "Pilih edisi yang paling selaras dengan kompleksitas alur transaksi dan jumlah departemen Anda.",
    chooseLabel: "Pilih",
    chosenLabel: "Terpilih",
    plans: [
      {
        id: "trial",
        tag: "Uji Coba 14 Hari",
        name: "Trial Sandbox",
        description:
          "Eksplorasi alur PR-PO-GRN, SQ-SO-DO, dan jurnal akuntansi otomatis selama 14 hari.",
        priceType: "free",
        monthlyPrice: 0,
        headline: "Gratis 14 Hari",
        priceNote: "Sesuai kesepakatan implementasi",
        stepPrice: "Gratis",
        seatLabel: "3 Pengguna",
        userBase: 3,
        warehouseBase: 1,
        moduleScope: "Simulasi 6 Modul Utama",
        features: [
          "3 Akun Pengguna Aktif",
          "1 Lokasi Gudang",
          "Simulasi 6 Modul Utama",
          "Panduan Konsultan ERP",
        ],
        addOnsEnabled: false,
        addOnNote:
          "Add-on tidak tersedia pada edisi uji coba. Pilih edisi berbayar untuk menambah pengguna, gudang, atau ekstensi modul.",
        pill: "Uji Coba Gratis 14 Hari",
        estimateNote: "Tanpa biaya selama 14 hari uji coba",
        estimateValue: "Rp 0",
        waButton: "Minta Akses Trial via WA",
        popular: false,
      },
      {
        id: "growth",
        tag: "Operasional Standar",
        name: "Growth Edition",
        description:
          "Ideal untuk perusahaan berkembang yang beralih dari software akuntansi sederhana ke sistem terintegrasi.",
        priceType: "paid",
        monthlyPrice: 3625000,
        headline: "",
        priceNote: "",
        stepPrice: "",
        seatLabel: "5 Pengguna",
        userBase: 5,
        warehouseBase: 2,
        moduleScope: "Finansial & Siklus Transaksi",
        features: [
          "Hingga 5 Pengguna Aktif",
          "Finansial & Buku Besar Otomatis",
          "2 Lokasi Gudang Multi-Satuan",
          "Siklus PR-PO-GRN & SQ-SO-DO",
        ],
        addOnsEnabled: true,
        addOnNote: "",
        pill: "",
        estimateNote: "Termasuk Server Cloud Tier-3",
        estimateValue: "",
        waButton: "Minta Penawaran Resmi via WA",
        popular: false,
      },
      {
        id: "enterprise",
        tag: "Paling Populer",
        name: "Enterprise Foundation",
        description:
          "Solusi lengkap manufaktur & distribusi dengan Multi-Level BOM, HPP aktual, dan depresiasi aset tetap.",
        priceType: "paid",
        monthlyPrice: 7187500,
        headline: "",
        priceNote: "",
        stepPrice: "",
        seatLabel: "10 Pengguna",
        userBase: 10,
        warehouseBase: null,
        moduleScope: "Semua 6 Modul Inti",
        features: [
          "Hingga 10 Pengguna Bebas Akses",
          "Semua 6 Pilar Modul Inti ERP",
          "Manufaktur Multi-BOM & HPP Aktual",
          "Dedicated Implementation Specialist",
        ],
        addOnsEnabled: true,
        addOnNote: "",
        pill: "",
        estimateNote: "Termasuk Server Cloud Tier-3",
        estimateValue: "",
        waButton: "Minta Penawaran Resmi via WA",
        popular: true,
      },
      {
        id: "custom",
        tag: "Multi-Holding & Pabrik",
        name: "Corporate Custom",
        description:
          "Arsitektur khusus untuk grup perusahaan dengan kebutuhan alur approval kompleks dan opsi On-Premise.",
        priceType: "custom",
        monthlyPrice: 0,
        headline: "Hubungi Kami",
        priceNote: "Sesuai kesepakatan implementasi",
        stepPrice: "Custom",
        seatLabel: "Unlimited Seats",
        userBase: null,
        warehouseBase: null,
        moduleScope: "Kustom Sesuai Kebutuhan",
        features: [
          "Unlimited User Seats",
          "Multi-Company & Konsolidasi",
          "Customizable Business Process",
          "Opsi Private Cloud / On-Premise",
        ],
        addOnsEnabled: false,
        addOnNote:
          "Kapasitas dan ekstensi untuk Corporate Custom disesuaikan melalui sesi konsultasi.",
        pill: "Penawaran Harga Custom",
        estimateNote: "Dihitung setelah konsultasi kebutuhan",
        estimateValue: "Custom",
        waButton: "Konsultasi Harga via WA",
        popular: false,
      },
    ],
    faq: {
      badge: "Pertanyaan Umum (FAQ)",
      title: "Pertanyaan Seputar Lisensi & Harga",
      items: [
        {
          question: "1. Bagaimana cara kerja masa uji coba Trial 14 Hari?",
          answer:
          "Anda dapat mencoba lingkungan sandbox MyERP Plus selama 14 hari penuh dengan 3 akun pengguna untuk menguji alur PR-PO-GRN-PI, SQ-SO-DO-SI, dan laporan keuangan otomatis didampingi panduan konsultan kami tanpa komitmen biaya.",
        },
        {
          question: "2. Apakah seluruh 6 modul inti ERP sudah termasuk dalam paket Enterprise?",
          answer:
          "Ya. Paket Enterprise Foundation mencakup seluruh 6 pilar modul: Finansial & Akuntansi, Manufaktur & Produksi (Multi-Level BOM & HPP Aktual), Pembelian & Rantai Pasok, Penjualan & Distribusi, Inventaris & Gudang, serta Manajemen Aset Tetap & Depresiasi.",
        },
        {
          question: "3. Bagaimana jika jumlah pengguna atau cabang gudang bertambah di tengah periode?",
          answer:
          "Anda dapat menambahkan kuota pengguna (+1 User Seat) atau lokasi gudang baru kapan saja melalui skema Add-On secara prorata tanpa perlu menghentikan operasional maupun mengganti paket utama.",
        },
        {
          question: "4. Apakah tersedia opsi server On-Premise atau kustomisasi alur kerja khusus?",
          answer:
          "Tersedia pada edisi Corporate Custom. Tim Solution Architect PT You profit Indonesia dapat menyesuaikan alur persetujuan (approval matrix), format dokumen cetak, hingga opsi deployment di server lokal (On-Premise) maupun Private Cloud perusahaan Anda",
        },
      ],
    },
  },
  kontak: {
    badge: "HUBUNGI KONSULTAN KAMI",
    titleLine1: "Kunjungi Kantor Kami atau",
    titleLine2: "Konsultasi Online",
    subtitle:
      "Tim spesialis solusi ERP kami siap membantu analisis alur kerja dan implementasi sistem di perusahaan Anda.",
    company: {
      badge: "Kantor Pusat Operasional",
      name: "PT You profit Indonesia",
      tagline: "Enterprise Solution Center & Technical Hub",
      addressTitle: "Alamat Kantor:",
      address:
        "Ruko Modern Kav A16 - A17, Tasikmadu, Kec. Lowokwaru, Kota Malang, Jawa Timur 65143",
      hoursTitle: "Jam Operasional:",
      hoursWeekdays: "Senin - Jumat: 08.30 - 17.00 WIB",
      hoursWeekend: "Sabtu & Minggu: Layanan Darurat On-Call Enterprise",
      serviceTitle: "Layanan Cepat & Email:",
      whatsapp: "WhatsApp: +62 811-9283-8899",
      whatsappNumber: "+62 811-9283-8899",
      whatsappRaw: "6281192838899",
      whatsappLink:
        "https://wa.me/6281192838899?text=Halo%20PT%20You%20profit%20Indonesia%2C%20saya%20ingin%20berkonsultasi%20mengenai%20implementasi%20ERP",
      email: "Email: info@youprofit.co.id",
      emailRaw: "info@youprofit.co.id",
      mapsUrl: "https://maps.app.goo.gl/9R7JGkvZmHn8ae8D9",
      mapsButtonText: "Buka di Google Maps",
      chatButtonText: "Chat WA Sekarang",
    },
    map: {
      title: "Peta Lokasi Kantor PT You profit Indonesia",
      routeText: "Rute Langsung",
      mapsUrl: "https://maps.app.goo.gl/9R7JGkvZmHn8ae8D9",
      pinLabel: "Ruko Modern Kav A16-A17, Kota Malang",
    },
    form: {
      title: "Kirim Pesan atau Pertanyaan Teknis ERP",
      responseTime: "Dibalas dalam < 2 jam kerja",
      namePlaceholder: "Nama Lengkap...",
      companyPlaceholder: "Nama Perusahaan...",
      buttonText: "Kirim Pertanyaan",
      successMessage:
        "Pesan Anda telah diteruskan ke tim konsultan PT You profit Indonesia. Kami akan segera menghubungi Anda.",
    },
  },
};