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
          { title: "Studi Kasus 11 Sektor", href: "#studi-kasus" },
        ],
      },
    ],
    companyTitle: "Perusahaan & Lisensi",
    companyLinks: [
      { title: "Beranda Utama", href: "/" },
      { title: "Paket Lisensi & Harga", href: "/harga" },
      { title: "Hubungi Kami", href: "/kontak" },
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
        eyebrow: "Modul Inti 01 • Akuntansi & Keuangan",
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
        eyebrow: "Modul Inti 02 • Produksi & Manufaktur",
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
        eyebrow: "Modul Inti 03 • Pengadaan & Rantai Pasok",
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
        eyebrow: "Modul Inti 04 • Penjualan & Distribusi",
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
        eyebrow: "Modul Inti 05 • Persediaan & Gudang",
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
        eyebrow: "Modul Inti 06 • Aset & Depresiasi",
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
};