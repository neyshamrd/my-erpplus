export const siteConfig = {
  nav: {
    logo: {
      text: "MYERP",
      tag: "+",
    },
    // Menu navigasi Utama
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
  // Tambahkan / perbarui bagian berikut di dalam `export const siteConfig = { ... }` pada `lib/content-data.ts`

  trust: {
    title: "Dipercaya oleh 250 Perusahaan Di Indonesia",
    clients: [
      {
        id: "kawata",
        slug: "pt-kawata-indonesia",
        name: "PT Kawata Indonesia",
        industry: "Manufaktur",
        logoSrc: "/logos/kawata.png",
        popup: {
          reviewerName: "Budi Santoso",
          reviewerRole: "Operations Manager, PT Kawata Indonesia",
          avatarSrc: "",
          quote:
            "MyERP Plus membantu menyatukan alur produksi, stok bahan baku, dan pelaporan biaya secara lebih transparan dan terukur.",
          ctaLabel: "Baca profil & studi kasus",
        },
      },
      {
        id: "topla",
        slug: "pt-topla-abadi-jaya",
        name: "PT Topla Abadi Jaya",
        industry: "Plastik Injeksi",
        logoSrc: "/logos/topla.png",
        popup: {
          reviewerName: "Siti Rahmawati",
          reviewerRole: "Finance & Accounting Head, PT Topla Abadi Jaya",
          avatarSrc: "",
          quote:
            "Pemantauan work order, penggunaan bahan baku, serta rekonsiliasi stok dan jurnal menjadi jauh lebih tertib.",
          ctaLabel: "Baca profil & studi kasus",
        },
      },
      {
        id: "ikuyo",
        slug: "pt-ikuyo-indonesia",
        name: "PT Ikuyo Indonesia",
        industry: "Manufaktur Komponen",
        logoSrc: "/logos/ikuyo.png",
        popup: {
          reviewerName: "Andi Pratama",
          reviewerRole: "Supply Chain Lead, PT Ikuyo Indonesia",
          avatarSrc: "",
          quote:
            "Siklus pengadaan hingga penerimaan gudang dan kalkulasi biaya produksi kini terpantau dalam satu sistem terintegrasi.",
          ctaLabel: "Baca profil & studi kasus",
        },
      },
      {
        id: "motasa",
        slug: "pt-motasa-indonesia",
        name: "PT Motasa Indonesia",
        industry: "Manufaktur",
        logoSrc: "/logos/motasa.png",
        popup: {
          reviewerName: "Rina Kusuma",
          reviewerRole: "PPIC Supervisor, PT Motasa Indonesia",
          avatarSrc: "",
          quote:
            "Koordinasi jadwal produksi, kebutuhan material, dan stok barang jadi berjalan lebih cepat dengan data yang konsisten.",
          ctaLabel: "Baca profil & studi kasus",
        },
      },
      {
        id: "narumi",
        slug: "pt-narumi-indonesia-mfg",
        name: "PT Narumi Indonesia Mfg (NIM)",
        industry: "Manufaktur Keramik",
        logoSrc: "/logos/narumi.png",
        popup: {
          reviewerName: "Dedi Kurniawan",
          reviewerRole: "Plant Controller, PT Narumi Indonesia Mfg",
          avatarSrc: "",
          quote:
            "Transparansi proses produksi, pengendalian mutu/reject, dan pelaporan keuangan membantu pengambilan keputusan lebih akurat.",
          ctaLabel: "Baca profil & studi kasus",
        },
      },
      {
        id: "pci",
        slug: "pt-prima-copper-industri",
        name: "PT Prima Copper Industri",
        industry: "Pengolahan Logam",
        logoSrc: "/logos/pci.jpg",
        popup: {
          reviewerName: "Hendra Wijaya",
          reviewerRole: "Commercial & Inventory Lead, PT Prima Copper Industri",
          avatarSrc: "",
          quote:
            "Akurasi saldo stok, pelacakan batch/lot, serta integrasi penjualan dan akuntansi meningkatkan efisiensi operasional harian.",
          ctaLabel: "Baca profil & studi kasus",
        },
      },
      {
        id: "ujs",
        slug: "pt-unggul-jaya-sejahtera",
        name: "PT Unggul Jaya Sejahtera",
        industry: "Alat Kesehatan",
        logoSrc: "/logos/ujs.jpg",
        popup: {
          reviewerName: "Faradila Utami",
          reviewerRole: "Operational & Compliance Analyst, PT Unggul Jaya Sejahtera",
          avatarSrc: "",
          quote:
            "Pengelolaan distribusi multi-gudang, surat jalan, serta pelaporan stok dan piutang menjadi lebih terstruktur dan transparan.",
          ctaLabel: "Baca profil & studi kasus",
        },
      },
      {
        id: "npt",
        slug: "pt-nanda-persada-transport",
        name: "PT Nanda Persada Transport",
        industry: "Ekspedisi & Logistik",
        logoSrc: "/logos/npt.png",
        popup: {
          reviewerName: "Yusuf Hidayat",
          reviewerRole: "Fleet & Operations Head, PT Nanda Persada Transport",
          avatarSrc: "",
          quote:
            "Pemantauan operasional pengiriman, penagihan, dan buku besar keuangan lebih rapi tanpa rekap manual terpisah.",
          ctaLabel: "Baca profil & studi kasus",
        },
      },
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

  clientProfiles: {
    backLabel: "Kembali ke Daftar Klien",
    modulesSectionTitle: "Modul MyERP yang Digunakan",
    profileSectionTitle: "Tentang Perusahaan",
    ctaTitle: "Ingin Menerapkan Alur Serupa di Perusahaan Anda?",
    ctaText:
      "Diskusikan kebutuhan modul dan proses bisnis Anda bersama tim PT You profit Indonesia.",
    ctaButton: "Jadwalkan Live Demo",
    items: {
      "pt-kawata-indonesia": {
        slug: "pt-kawata-indonesia",
        companyName: "PT Kawata Indonesia",
        shortName: "Kawata",
        industry: "Manufaktur",
        location: "Jababeka Techno Park, Blok E No.2-C KIJ III, Pasirgombong, Kec. Cikarang Utara, Kabupaten Bekasi, Jawa Barat.",
        logoSrc: "/logos/kawata.png",
        headline:
          "PT Kawata Indonesia Menyatukan Alur Produksi, Stok & Keuangan dengan MyERP Plus",
        summary:
          "Profil perusahaan dan pemanfaatan modul MyERP Plus untuk menjaga ketertelusuran material, proses produksi, serta pelaporan keuangan.",
        picName: "Budi Santoso",
        picRole: "Operations Manager, PT Kawata Indonesia",
        quote:
          "MyERP Plus membantu menyatukan alur produksi, stok bahan baku, dan pelaporan biaya secara lebih transparan dan terukur.",
        highlights: [
          { value: "Terintegrasi", label: "Produksi, Stok & Akuntansi" },
          { value: "Real-Time", label: "Monitoring Saldo & Jurnal" },
        ],
        aboutCompany: [
          "PT Kawata Indonesia beroperasi di bidang manufaktur dengan kebutuhan pengelolaan material, jadwal kerja produksi, serta pelaporan operasional yang terstruktur.",
          "Melalui implementasi MyERP Plus, proses pencatatan transaksi dari gudang dan lantai produksi terhubung langsung ke pembukuan sehingga meminimalkan input berulang.",
        ],
        usedModules: [
          {
            title: "Manufaktur & Produksi",
            description:
              "Mengelola BOM, Work Order, alur proses produksi, serta kalkulasi biaya produksi.",
            href: "/modul/manufaktur",
          },
          {
            title: "Inventaris & Gudang",
            description:
              "Memantau saldo stok bahan baku, barang dalam proses, dan barang jadi secara real-time.",
            href: "/modul/inventaris",
          },
          {
            title: "Finansial & Akuntansi",
            description:
              "Menyajikan jurnal otomatis, buku besar, dan laporan keuangan terpusat.",
            href: "/modul/finansial",
          },
        ],
      },
      "pt-topla-abadi-jaya": {
        slug: "pt-topla-abadi-jaya",
        companyName: "PT Topla Abadi Jaya",
        shortName: "Topla",
        industry: "Plastik Injeksi",
        location: "Indonesia",
        logoSrc: "/logos/topla.png",
        headline:
          "PT Topla Abadi Jaya Meningkatkan Ketertiban Produksi & Stok dengan MyERP Plus",
        summary:
          "Profil perusahaan dan penggunaan modul MyERP Plus untuk mendukung operasional plastik injeksi, pengendalian stok, dan akuntansi.",
        picName: "Siti Rahmawati",
        picRole: "Finance & Accounting Head, PT Topla Abadi Jaya",
        quote:
          "Pemantauan work order, penggunaan bahan baku, serta rekonsiliasi stok dan jurnal menjadi jauh lebih tertib.",
        highlights: [
          { value: "Otomatis", label: "Jurnal Stok & Biaya Produksi" },
          { value: "Terpusat", label: "Data Operasional & Keuangan" },
        ],
        aboutCompany: [
          "PT Topla Abadi Jaya bergerak di sektor plastik injeksi yang menuntut ketepatan pemakaian bahan baku, penjadwalan work order, serta akurasi pencatatan persediaan.",
          "Dengan MyERP Plus, setiap pergerakan material dan hasil produksi tercatat secara konsisten dalam satu basis data.",
        ],
        usedModules: [
          {
            title: "Manufaktur & Produksi",
            description:
              "Menangani struktur BOM, Work Order, serta pencatatan hasil produksi.",
            href: "/modul/manufaktur",
          },
          {
            title: "Pembelian & Rantai Pasok",
            description:
              "Mengatur alur permintaan, order pembelian, penerimaan barang, dan hutang usaha.",
            href: "/modul/pembelian",
          },
          {
            title: "Finansial & Akuntansi",
            description:
              "Menyediakan buku besar, hutang/piutang, serta laporan keuangan.",
            href: "/modul/finansial",
          },
        ],
      },
      "pt-ikuyo-indonesia": {
        slug: "pt-ikuyo-indonesia",
        companyName: "PT Ikuyo Indonesia",
        shortName: "Ikuyo",
        industry: "Manufaktur Komponen",
        location: "Indonesia",
        logoSrc: "/logos/ikuyo.png",
        headline:
          "PT Ikuyo Indonesia Menyelaraskan Pengadaan, Gudang & Produksi di MyERP Plus",
        summary:
          "Profil perusahaan dan modul MyERP Plus yang digunakan untuk mendukung rantai pasok, gudang, dan pelaporan.",
        picName: "Andi Pratama",
        picRole: "Supply Chain Lead, PT Ikuyo Indonesia",
        quote:
          "Siklus pengadaan hingga penerimaan gudang dan kalkulasi biaya produksi kini terpantau dalam satu sistem terintegrasi.",
        highlights: [
          { value: "End-to-End", label: "Pengadaan hingga Pelaporan" },
          { value: "Akurat", label: "Kontrol Stok & Mutasi" },
        ],
        aboutCompany: [
          "PT Ikuyo Indonesia menjalankan operasional manufaktur komponen dengan kebutuhan koordinasi yang ketat antara pengadaan, penyimpanan gudang, dan produksi.",
          "MyERP Plus membantu menyatukan dokumen transaksi agar alur kerja tim lebih cepat dan terdokumentasi.",
        ],
        usedModules: [
          {
            title: "Pembelian & Rantai Pasok",
            description:
              "Menyusun alur PR, PO, GRN, dan PI yang terhubung ke persediaan.",
            href: "/modul/pembelian",
          },
          {
            title: "Inventaris & Gudang",
            description:
              "Mengelola multi-gudang, mutasi stok, serta stock opname.",
            href: "/modul/inventaris",
          },
          {
            title: "Manufaktur & Produksi",
            description:
              "Mendukung perencanaan produksi dan pemantauan WIP.",
            href: "/modul/manufaktur",
          },
        ],
      },
      "pt-motasa-indonesia": {
        slug: "pt-motasa-indonesia",
        companyName: "PT Motasa Indonesia",
        shortName: "Motasa",
        industry: "Manufaktur",
        location: "Indonesia",
        logoSrc: "/logos/motasa.png",
        headline:
          "PT Motasa Indonesia Memperkuat Koordinasi PPIC, Stok & Keuangan dengan MyERP Plus",
        summary:
          "Profil perusahaan dan penerapan modul MyERP Plus untuk mendukung kelancaran operasional manufaktur.",
        picName: "Rina Kusuma",
        picRole: "PPIC Supervisor, PT Motasa Indonesia",
        quote:
          "Koordinasi jadwal produksi, kebutuhan material, dan stok barang jadi berjalan lebih cepat dengan data yang konsisten.",
        highlights: [
          { value: "Terpadu", label: "PPIC, Gudang & Penjualan" },
          { value: "Transparan", label: "Status Dokumen & Stok" },
        ],
        aboutCompany: [
          "PT Motasa Indonesia merupakan perusahaan manufaktur yang mengandalkan sinkronisasi antara rencana produksi, ketersediaan material, dan pengiriman barang jadi.",
          "Penerapan MyERP Plus membantu mengurangi ketergantungan pada rekap manual antar divisi.",
        ],
        usedModules: [
          {
            title: "Manufaktur & Produksi",
            description:
              "Mengelola alur kerja produksi dan pemakaian material.",
            href: "/modul/manufaktur",
          },
          {
            title: "Penjualan & Distribusi",
            description:
              "Mengatur alur SQ, SO, DO, dan SI terhubung stok dan piutang.",
            href: "/modul/penjualan",
          },
          {
            title: "Finansial & Akuntansi",
            description:
              "Menyajikan laporan keuangan dan jurnal akuntansi terintegrasi.",
            href: "/modul/finansial",
          },
        ],
      },
      "pt-narumi-indonesia-mfg": {
        slug: "pt-narumi-indonesia-mfg",
        companyName: "PT Narumi Indonesia Mfg (NIM)",
        shortName: "Narumi (NIM)",
        industry: "Manufaktur Keramik",
        location: "Indonesia",
        logoSrc: "/logos/narumi.png",
        headline:
          "PT Narumi Indonesia Mfg Meningkatkan Visibilitas Produksi & Keuangan dengan MyERP Plus",
        summary:
          "Profil perusahaan dan modul MyERP Plus yang digunakan untuk mendukung proses manufaktur dan akuntansi.",
        picName: "Dedi Kurniawan",
        picRole: "Plant Controller, PT Narumi Indonesia Mfg",
        quote:
          "Transparansi proses produksi, pengendalian mutu/reject, dan pelaporan keuangan membantu pengambilan keputusan lebih akurat.",
        highlights: [
          { value: "Terkontrol", label: "Proses & Evaluasi Biaya" },
          { value: "Terstandar", label: "Jejak Audit & Laporan" },
        ],
        aboutCompany: [
          "PT Narumi Indonesia Mfg bergerak di bidang manufaktur keramik dengan tahapan proses dan kontrol kualitas yang terstruktur.",
          "Melalui MyERP Plus, data operasional dan keuangan dikelola secara terpusat untuk mendukung evaluasi kinerja pabrik.",
        ],
        usedModules: [
          {
            title: "Manufaktur & Produksi",
            description:
              "Mendukung pencatatan tahapan produksi, WIP, dan hasil akhir.",
            href: "/modul/manufaktur",
          },
          {
            title: "Inventaris & Gudang",
            description:
              "Memantau stok bahan baku, pendukung, dan produk jadi.",
            href: "/modul/inventaris",
          },
          {
            title: "Finansial & Akuntansi",
            description:
              "Menyusun jurnal otomatis dan pelaporan keuangan.",
            href: "/modul/finansial",
          },
        ],
      },
      "pt-prima-copper-industri": {
        slug: "pt-prima-copper-industri",
        companyName: "PT Prima Copper Industri",
        shortName: "Prima Copper",
        industry: "Pengolahan Logam",
        location: "Indonesia",
        logoSrc: "/logos/pci.jpg",
        headline:
          "PT Prima Copper Industri Mengoptimalkan Stok, Penjualan & Akuntansi di MyERP Plus",
        summary:
          "Profil perusahaan dan pemanfaatan modul MyERP Plus untuk mendukung operasional pengolahan logam dan distribusi.",
        picName: "Hendra Wijaya",
        picRole: "Commercial & Inventory Lead, PT Prima Copper Industri",
        quote:
          "Akurasi saldo stok, pelacakan batch/lot, serta integrasi penjualan dan akuntansi meningkatkan efisiensi operasional harian.",
        highlights: [
          { value: "Presisi", label: "Saldo Stok & Lot/Batch" },
          { value: "Terhubung", label: "Penjualan, Stok & Jurnal" },
        ],
        aboutCompany: [
          "PT Prima Copper Industri bergerak di sektor pengolahan logam dengan kebutuhan ketepatan pengelolaan stok, pemenuhan pesanan pelanggan, serta pencatatan akuntansi.",
          "MyERP Plus menyatukan alur transaksi agar informasi stok dan piutang selalu selaras.",
        ],
        usedModules: [
          {
            title: "Inventaris & Gudang",
            description:
              "Mengelola saldo stok, lot/batch, dan mutasi antar gudang.",
            href: "/modul/inventaris",
          },
          {
            title: "Penjualan & Distribusi",
            description:
              "Menangani pesanan pelanggan, surat jalan, invoice, dan piutang.",
            href: "/modul/penjualan",
          },
          {
            title: "Finansial & Akuntansi",
            description:
              "Menghubungkan transaksi operasional ke buku besar dan laporan keuangan.",
            href: "/modul/finansial",
          },
        ],
      },
      "pt-unggul-jaya-sejahtera": {
        slug: "pt-unggul-jaya-sejahtera",
        companyName: "PT Unggul Jaya Sejahtera",
        shortName: "Unggul Jaya",
        industry: "Alat Kesehatan",
        location: "Indonesia",
        logoSrc: "/logos/ujs.jpg",
        headline:
          "PT Unggul Jaya Sejahtera Menata Distribusi, Inventaris & Keuangan dengan MyERP Plus",
        summary:
          "Profil perusahaan dan modul MyERP Plus yang digunakan untuk mendukung operasional alat kesehatan dan distribusi.",
        picName: "Faradila Utami",
        picRole: "Operational & Compliance Analyst, PT Unggul Jaya Sejahtera",
        quote:
          "Pengelolaan distribusi multi-gudang, surat jalan, serta pelaporan stok dan piutang menjadi lebih terstruktur dan transparan.",
        highlights: [
          { value: "Terukur", label: "Distribusi & Piutang Dagang" },
          { value: "Tertib", label: "Dokumentasi & Pelaporan" },
        ],
        aboutCompany: [
          "PT Unggul Jaya Sejahtera bergerak di bidang alat kesehatan dengan kebutuhan ketertelusuran barang, ketepatan pengiriman, serta pelaporan administrasi yang rapi.",
          "Dengan MyERP Plus, alur pengadaan, penyimpanan, pengiriman, dan pencatatan keuangan berjalan saling terhubung.",
        ],
        usedModules: [
          {
            title: "Pembelian & Rantai Pasok",
            description:
              "Mengelola pengadaan barang hingga penerimaan dan pencatatan hutang.",
            href: "/modul/pembelian",
          },
          {
            title: "Inventaris & Gudang",
            description:
              "Memantau ketersediaan stok dan mutasi barang secara real-time.",
            href: "/modul/inventaris",
          },
          {
            title: "Penjualan & Distribusi",
            description:
              "Mengatur order, pengiriman, penagihan, dan aging piutang.",
            href: "/modul/penjualan",
          },
          {
            title: "Finansial & Akuntansi",
            description:
              "Menyediakan jurnal otomatis dan laporan keuangan terpusat.",
            href: "/modul/finansial",
          },
        ],
      },
      "pt-nanda-persada-transport": {
        slug: "pt-nanda-persada-transport",
        companyName: "PT Nanda Persada Transport",
        shortName: "Nanda Persada",
        industry: "Ekspedisi & Logistik",
        location: "Indonesia",
        logoSrc: "/logos/npt.png",
        headline:
          "PT Nanda Persada Transport Menyederhanakan Operasional & Keuangan dengan MyERP Plus",
        summary:
          "Profil perusahaan dan modul MyERP Plus yang digunakan untuk mendukung operasional ekspedisi dan akuntansi.",
        picName: "Yusuf Hidayat",
        picRole: "Fleet & Operations Head, PT Nanda Persada Transport",
        quote:
          "Pemantauan operasional pengiriman, penagihan, dan buku besar keuangan lebih rapi tanpa rekap manual terpisah.",
        highlights: [
          { value: "Terintegrasi", label: "Penagihan & Buku Besar" },
          { value: "Terpantau", label: "Aset & Biaya Operasional" },
        ],
        aboutCompany: [
          "PT Nanda Persada Transport bergerak di bidang ekspedisi dan logistik dengan kebutuhan pencatatan penagihan, biaya operasional, serta aset yang teratur.",
          "Melalui MyERP Plus, pencatatan transaksi dan laporan keuangan dapat dipantau lebih ringkas dalam satu sistem.",
        ],
        usedModules: [
          {
            title: "Penjualan & Distribusi",
            description:
              "Mendukung pencatatan layanan, penagihan, dan pemantauan piutang.",
            href: "/modul/penjualan",
          },
          {
            title: "Manajemen Aset Tetap",
            description:
              "Membantu pencatatan aset dan jadwal penyusutan.",
            href: "/modul/aset",
          },
          {
            title: "Finansial & Akuntansi",
            description:
              "Menyajikan buku besar, kas/bank, dan laporan keuangan.",
            href: "/modul/finansial",
          },
        ],
      },
    },
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
  flowchart: {
    // Pop up Flowchart ERP (dibuka dari tombol "Download Flowchart ERP" di cta-banner.tsx)
    badge: "ERP",
    title: "Flowchart Enterprise — MyERP Plus (5 Modul Terintegrasi)",
    subtitle: "Purchasing • Production • Sales & Distribution • Inventory & Warehouse • Finance & Accounting",
    downloadLabel: "Download Dokumen Lengkap",
    // Dokumen lengkap (HTML) dibuka di tab baru; file ada di public/
    downloadHref: "/flowchart-enterprise-myerp-plus.pdf",
    moduleBadge: "MYERP Enterprise Version",
    tablistLabel: "Pilih modul flowchart",
    closeLabel: "Tutup pop up flowchart",
    // Diagram berupa gambar SVG di public/flowcharts, penjelasan berupa kartu di bawah diagram
    modules: [
      {
        id: "purchasing",
        tab: "1. Purchasing",
        title: "1. Purchasing (Enterprise Version)",
        subtitle: "Alur Pengadaan Barang, Perbandingan Penawaran, QC Penerimaan hingga Pembayaran Hutang",
        image: "/flowcharts/purchasing.png",
        width: 960,
        height: 520,
        alt: "Diagram alur Purchasing MyERP Plus Enterprise",
        steps: [
          {
            tag: "START → PR",
            title: "Purchase Request (PR)",
            description: "Permintaan Pembelian dari departemen operasional.",
          },
          {
            tag: "DECISION",
            title: "Quotation from supplier?",
            description: "Jika Ya (Y) → Request for Quotation (RQ) → Comparing quotation? → Bidding Sheets (BS). Jika Tidak (N) → langsung ke PO.",
          },
          {
            tag: "PO → DP",
            title: "Purchase Order (PO) & Down Payment",
            description: "Terbit Order Pembelian. Jika ada Down payment? (Y) → Advance Purchase (AP / Uang Muka Pembelian).",
          },
          {
            tag: "GRN → RI",
            title: "Good Receipt Note (GRN) → Receive Invoice (RI)",
            description: "Penerimaan Barang di gudang lalu pencatatan Invoice Pembelian.",
          },
          {
            tag: "QC → RETUR",
            title: "Quality Control & Cek Reject",
            description: "Jika There are rejected? (Y) → Delivery Note Return (DNR / Pengiriman Barang Retur) → Purchase Return (PRT / Retur Pembelian).",
          },
          {
            tag: "VPP → VP",
            title: "Vendor Payment Plan (VPP) → Vendor Payment (VP) → FINISH",
            description: "Payment taken from AP, RI & PRT. Jika Planning payment? (Y) → Rencana Pembayaran Hutang (VPP) → Pembayaran Hutang (VP).",
          },
        ],
      },
      {
        id: "production",
        tab: "2. Production",
        title: "2. Production (Enterprise Version)",
        subtitle: "Alur Formula Produksi (BOM), Permintaan Produksi, Perintah Kerja (WO), Pengeluaran Bahan & QC Akhir",
        image: "/flowcharts/production.png",
        width: 960,
        height: 440,
        alt: "Diagram alur Production MyERP Plus Enterprise",
        steps: [
          {
            tag: "START → BOM",
            title: "Bill of Material (BOM)",
            description: "Penentuan Formula Produksi standar.",
          },
          {
            tag: "PDR → WO",
            title: "Production Request (PDR) → Work Order (WO)",
            description: "Permintaan Produksi diterbitkan menjadi Perintah Kerja (WO).",
          },
          {
            tag: "MRS → QC",
            title: "Material Release (MRS) → Material Quality Control",
            description: "Pengeluaran Bahan Baku dari gudang dilanjutkan pemeriksaan kualitas bahan.",
          },
          {
            tag: "REJECT → MRN",
            title: "There are rejected? → Material Return (MRN)",
            description: "Jika Ya (Y) → Retur Bahan Baku (MRN) kembali ke gudang/pengeluaran ulang. Jika Tidak (N) → lanjut ke Produksi.",
          },
          {
            tag: "PD → FINAL QC",
            title: "Production (PD) → Final Quality Control → FINISH",
            description: "Proses Production, Assembly & Disassembly selesai lalu pemeriksaan kualitas produk jadi (Final QC).",
          },
        ],
      },
      {
        id: "sales-distribution",
        tab: "3. Sales & Distribution",
        title: "3. Sales & Distribution (Enterprise Version)",
        subtitle: "Alur Penawaran, Order Penjualan, Uang Muka, Packing List, Surat Jalan, Retur hingga Pelunasan Piutang",
        image: "/flowcharts/sales-distribution.png",
        width: 960,
        height: 470,
        alt: "Diagram alur Sales & Distribution MyERP Plus Enterprise",
        steps: [
          {
            tag: "SQ → SO",
            title: "Sales Quotation (SQ) → Approved? → Sales Order (SO)",
            description: "Penawaran Penjualan disetujui menjadi Order Penjualan (SO).",
          },
          {
            tag: "DP → PI",
            title: "Down Payment (AS) & Proforma Invoice (PI)",
            description: "Jika Down payment? (Y) → Advance Sales (AS). Jika Proforma invoice? (Y) → Proforma Invoice (PI).",
          },
          {
            tag: "PL → DO → DR",
            title: "Packing List (PL) → Delivery Order (DO) → Delivery Report (DR)",
            description: "Pengepakan Barang (jika Packing? Y), Pengiriman Barang (DO), dan Laporan Pengiriman (DR).",
          },
          {
            tag: "SI → RETUR",
            title: "Sales Invoice (SI) → Receipt Note Return (RNR) → Sales Return (SR)",
            description: "Terbit Invoice Penjualan. Jika There are returned? (Y) → Penerimaan Barang Retur (RNR) & Retur Penjualan (SR).",
          },
          {
            tag: "IC → PV",
            title: "Invoice Collector (IC) → Payment Receipt (PV) → FINISH",
            description: "Payment taken from AS, SI & SR. Jika Collecting invoice? (Y) → Penagihan Piutang (IC) → Pembayaran Piutang (PV).",
          },
        ],
      },
      {
        id: "inventory-warehouse",
        tab: "4. Inventory & Warehouse",
        title: "4. Inventory & Warehouse (Enterprise Version)",
        subtitle: "Alur Permintaan & Mutasi Antar Gudang, Stock Opname, Penyesuaian Stok & Pengaturan Harga Jual",
        image: "/flowcharts/inventory-warehouse.png",
        width: 960,
        height: 430,
        alt: "Diagram alur Inventory & Warehouse MyERP Plus Enterprise",
        steps: [
          {
            tag: "TR → TS → RS",
            title: "Transfer Request (TR) → Transfer Stock (TS) → Receive Stock (RS)",
            description: "Permintaan Barang antar gudang, Mutasi Barang, dan Terima Mutasi.",
          },
          {
            tag: "INVENTORY",
            title: "Inventory control? & Checking stock?",
            description: "Jika Inventory control? (Y) → Checking stock? Jika Tidak (N) → Price List Adjustment (PA / Set Harga Jual).",
          },
          {
            tag: "SP → SA",
            title: "Stock Opname (SP) → Stock Adjustment (SA) → FINISH",
            description: "Jika Stock opname? (Y) → Stok Opname (SP) lalu Penyesuaian Stok (SA). Jika (N) → langsung Penyesuaian Stok (SA).",
          },
        ],
      },
      {
        id: "finance-accounting",
        tab: "5. Finance & Accounting",
        title: "5. Finance & Accounting (Enterprise Version)",
        subtitle: "Alur Transaksi Kas, Bank, Giro Masuk/Keluar, Jurnal Penyesuaian & Jurnal Umum",
        image: "/flowcharts/finance-accounting.png",
        width: 960,
        height: 470,
        alt: "Diagram alur Finance & Accounting MyERP Plus Enterprise",
        steps: [
          {
            tag: "CASH",
            title: "Cash Receipt (CR) & Cash Disbursements (CD)",
            description: "Pencatatan transaksi Kas Masuk (Incoming Y) dan Kas Keluar (Incoming N).",
          },
          {
            tag: "BANK",
            title: "Receive Money (RM) & Spend Money (SM)",
            description: "Pencatatan mutasi rekening Bank Masuk (Incoming Y) dan Bank Keluar (Incoming N).",
          },
          {
            tag: "GIRO",
            title: "Receive Giro (RG) & Spend Giro (SG)",
            description: "Pengelolaan Giro Masuk (Incoming Y) dan Giro Keluar (Incoming N).",
          },
          {
            tag: "JOURNAL",
            title: "Adjustment Journal (AJ) & General Journal (GJ) → FINISH",
            description: "Pencatatan Jurnal Penyesuaian (AJ) dan Jurnal Umum (GJ) terintegrasi ke Buku Besar.",
          },
        ],
      },
    ],
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
    whatsapp: "6281192838899",
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
        title: "Manufaktur Pengolahan Logam",
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
    title: "Susun paket MyERP+ Anda",
    subtitle:
      "Pilih paket dasar, lalu tambahkan menu dan kapasitas sesuai kebutuhan.",
    // Nomor WhatsApp tujuan (kode negara tanpa +, spasi, atau tanda hubung)
    whatsapp: "6281192838899",
    defaultPlan: "starter",
    defaultCycle: "monthly",
    // true: potongan siklus tahunan juga berlaku untuk menu tambahan dan tambahan user
    // false: potongan hanya berlaku untuk paket dasar
    discountAddOns: true,
    cycleNote: "Siklus tagihan hanya berlaku untuk edisi berbayar.",
    cycles: [
      {
        id: "monthly",
        label: "Bulanan",
        badge: "",
        discount: 0,
        summary: "Bulanan",
        short: "Siklus Tagihan Bulanan",
      },
      {
        id: "annual",
        label: "Tahunan",
        badge: "Hemat 20%",
        discount: 0.2,
        summary: "Tahunan, hemat 20%",
        short: "Siklus Tagihan Tahunan",
      },
    ],
    step1Badge: "Langkah 1",
    step1Title: "Paket dasar",
    step2Badge: "Langkah 2",
    step2Title: "Menu tambahan, kapasitas & layanan",
    step2Subtitle:
      "Menu dari alur versi lebih tinggi bisa dibeli satuan tanpa pindah paket.",
    addOns: {
      menuTitle: "1. Menu tambahan",
      menuHint: "Menu yang sudah termasuk paket ditandai hijau.",
      menuIncluded: "Sudah termasuk paket",
      // Harga menu sama untuk semua paket. Menu yang sudah termasuk ditentukan
      // per paket lewat plans[].includedMenus.
      menus: [
        {
          id: "siklus",
          name: "Siklus pembelian & penjualan",
          price: 350000,
          items: [
            { code: "PO", name: "Purchase Order" },
            { code: "GRN", name: "Good Receipt Note" },
            { code: "SO", name: "Sales Order" },
            { code: "DO", name: "Delivery Order" },
          ],
        },
        {
          id: "procurement",
          name: "Procurement lengkap",
          price: 650000,
          items: [
            { code: "PR", name: "Purchase Request" },
            { code: "RQ", name: "Request for Quotation" },
            { code: "AP", name: "Advance Purchase" },
            { code: "VPP", name: "Vendor Payment Plan" },
          ],
        },
        {
          id: "produksi",
          name: "Produksi terkontrol",
          price: 650000,
          items: [
            { code: "PDR", name: "Production Request" },
            { code: "WO", name: "Work Order" },
            { code: "MRS", name: "Material Release" },
            { code: "MRN", name: "Material Return" },
          ],
        },
        {
          id: "penjualan",
          name: "Penjualan lengkap",
          price: 650000,
          items: [
            { code: "SQ", name: "Sales Quotation" },
            { code: "PI", name: "Proforma Invoice" },
            { code: "AS", name: "Advance Sales" },
            { code: "IC", name: "Invoice Collector" },
          ],
        },
        {
          id: "inventori",
          name: "Kontrol inventori",
          price: 400000,
          items: [{ code: "SP", name: "Stock Opname" }],
        },
      ],
      user: {
        title: "2. Kapasitas",
        hint: "Tambah kapasitas bila kuota bawaan paket tidak mencukupi.",
        label: "Tambah user aktif",
        perUser: "per user / bulan",
        // Harga bawaan (cadangan). Harga sebenarnya per paket: plans[].userPrice
        price: 175000,
        max: 50,
        baseLabel: "Bawaan paket",
        baseUser: "User aktif",
        baseUnlimited: "Unlimited User Seats",
      },
      serviceTitle: "3. Layanan",
      serviceHint: "Biaya sekali bayar, tidak terpengaruh siklus tagihan.",
      // Teks untuk layanan yang sudah termasuk paket (sama dengan teks menu)
      serviceIncluded: "Sudah termasuk paket",
      // Harga di bawah adalah harga bawaan (cadangan).
      // Harga sebenarnya per paket: plans[].servicePrices dan plans[].includedServices
      services: [
        {
          id: "implementasi",
          name: "Implementasi & onboarding",
          description:
            "Pendampingan setup awal (Enterprise Edition sudah termasuk spesialis)",
          price: 4000000,
        },
        {
          id: "migrasi",
          name: "Migrasi data",
          description: "Master barang, pelanggan, pemasok, dan saldo awal",
          price: 2500000,
        },
        {
          id: "training",
          name: "Training pengguna",
          description: "Per sesi, hingga 10 peserta",
          price: 750000,
        },
      ],
    },
    summary: {
      label: "Ringkasan",
      reset: "Reset",
      usersLabel: "Total User Aktif",
      menuCountLabel: "Menu Tambahan",
      packageLabel: "Paket",
      menuLabel: "Menu tambahan",
      userLabel: "Tambahan user",
      serviceLabel: "Layanan sekali bayar",
      unavailable: "Tidak tersedia",
      estimateLabel: "Biaya berulang per bulan",
      waButton: "Minta penawaran",
      demoButton: "Jadwalkan Presentasi & Demo",
    },
    perMonth: "per bulan",
    compareTitle: "Perbandingan Lengkap Paket Lisensi ERP",
    compareSubtitle:
      "Setiap paket mengikuti alur kerja pada flowchart versi Simple, Medium, dan Enterprise.",
    chooseLabel: "Pilih",
    chosenLabel: "Terpilih",
    plans: [
      {
        id: "starter",
        tag: "",
        name: "Starter Edition",
        description: "2 user aktif sudah termasuk",
        priceType: "paid",
        monthlyPrice: 1750000,
        headline: "",
        priceNote: "",
        stepPrice: "",
        seatLabel: "2 user aktif",
        userBase: 2,
        // Harga & isi paket (BULANAN)
        userPrice: 175000,
        includedMenus: [],
        includedServices: [],
        servicePrices: {
          implementasi: 4000000,
          migrasi: 2500000,
          training: 750000,
        },
        inherits: null,
        inheritLabel: "",
        menuGroups: [
          {
            title: "Pembelian",
            items: [
              { code: "RI", name: "Receive Invoice" },
              { code: "PRT", name: "Purchase Return" },
              { code: "VP", name: "Vendor Payment" },
            ],
          },
          {
            title: "Penjualan",
            items: [
              { code: "SI", name: "Sales Invoice" },
              { code: "SR", name: "Sales Return" },
              { code: "PV", name: "Payment Receipt" },
            ],
          },
          {
            title: "Keuangan",
            items: [
              { code: "Kas/Bank", name: "Cash & Bank" },
              { code: "GJ", name: "General Journal" },
            ],
          },
        ],
        features: [],
        addOnsEnabled: true,
        addOnNote: "",
        pill: "",
        estimateNote: "Belum termasuk layanan sekali bayar",
        estimateValue: "",
        popular: false,
      },
      {
        id: "growth",
        tag: "",
        name: "Growth Edition",
        description: "5 user aktif sudah termasuk",
        priceType: "paid",
        monthlyPrice: 2900000,
        headline: "",
        priceNote: "",
        stepPrice: "",
        seatLabel: "5 user aktif",
        userBase: 5,
        // Harga & isi paket (BULANAN)
        userPrice: 150000,
        includedMenus: ["siklus"],
        includedServices: [],
        servicePrices: {
          implementasi: 6000000,
          migrasi: 3500000,
          training: 750000,
        },
        inherits: "starter",
        inheritLabel: "Semua menu Starter Edition",
        menuGroups: [
          {
            title: "Pembelian & Penjualan",
            items: [
              { code: "PO", name: "Purchase Order" },
              { code: "GRN", name: "Good Receipt Note" },
              { code: "SO", name: "Sales Order" },
              { code: "DO", name: "Delivery Order" },
            ],
          },
          {
            title: "Produksi",
            items: [
              { code: "BOM", name: "Bill of Material" },
              { code: "PD", name: "Production Slip" },
            ],
          },
          {
            title: "Kas & Bank",
            items: [
              { code: "CR", name: "Cash Receipt" },
              { code: "CD", name: "Cash Disbursement" },
              { code: "RM", name: "Receive Money" },
              { code: "SM", name: "Spend Money" },
            ],
          },
        ],
        features: [],
        addOnsEnabled: true,
        addOnNote: "",
        pill: "",
        estimateNote: "Belum termasuk layanan sekali bayar",
        estimateValue: "",
        popular: false,
      },
      {
        id: "enterprise",
        tag: "Paling Populer",
        name: "Enterprise Edition",
        description: "10 user aktif sudah termasuk",
        priceType: "paid",
        monthlyPrice: 5750000,
        headline: "",
        priceNote: "",
        stepPrice: "",
        seatLabel: "10 user aktif",
        userBase: 10,
        // Harga & isi paket (BULANAN)
        userPrice: 125000,
        includedMenus: [
          "siklus",
          "procurement",
          "produksi",
          "penjualan",
          "inventori",
        ],
        includedServices: ["implementasi"],
        servicePrices: {
          migrasi: 5000000,
          training: 750000,
        },
        inherits: "growth",
        inheritLabel: "Semua menu Growth Edition",
        menuGroups: [
          {
            title: "Pembelian",
            items: [
              { code: "PR", name: "Purchase Request" },
              { code: "RQ", name: "Request for Quotation" },
              { code: "AP", name: "Advance Purchase" },
            ],
          },
          {
            title: "Produksi",
            items: [{ code: "WO", name: "Work Order" }],
          },
          {
            title: "Penjualan",
            items: [
              { code: "SQ", name: "Sales Quotation" },
              { code: "AS", name: "Advance Sales" },
              { code: "IC", name: "Invoice Collector" },
            ],
          },
          {
            title: "Inventori & Keuangan",
            items: [
              { code: "SP", name: "Stock Opname" },
              { code: "RG", name: "Receive Giro" },
              { code: "SG", name: "Spend Giro" },
              { code: "AJ", name: "Adjustment Journal" },
            ],
          },
        ],
        features: [],
        addOnsEnabled: true,
        addOnNote: "",
        pill: "",
        estimateNote: "Belum termasuk layanan sekali bayar",
        estimateValue: "",
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
        stepPrice: "Hubungi Kami",
        seatLabel: "Unlimited User Seats",
        userBase: null,
        // Corporate Custom: tanpa add-on, harga disepakati lewat konsultasi.
        // userPrice null = pakai harga bawaan (hanya untuk tampilan kartu yang nonaktif).
        userPrice: null,
        includedMenus: [],
        includedServices: [],
        servicePrices: {},
        inherits: null,
        inheritLabel: "",
        menuGroups: [],
        features: [
          "Unlimited User Seats",
          "Multi-Company & Konsolidasi",
          "Customizable Business Process",
          "Opsi Private Cloud / On-Premise",
        ],
        addOnsEnabled: false,
        addOnNote:
          "Menu, kapasitas, dan layanan untuk Corporate Custom disesuaikan melalui sesi konsultasi.",
        pill: "Multi-Holding & Pabrik",
        estimateNote: "Sesuai kesepakatan implementasi",
        estimateValue: "Hubungi Kami",
        popular: false,
      },
    ],
    faq: {
      badge: "Pertanyaan Umum (FAQ)",
      title: "Pertanyaan Seputar Lisensi & Implementasi",
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
          "Tersedia pada edisi Corporate Custom. Tim Solution Architect PT You profit Indonesia dapat menyesuaikan alur persetujuan (approval matrix), format dokumen cetak, hingga opsi deployment di server lokal (On-Premise) maupun Private Cloud perusahaan Anda.",
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
      hoursWeekdays: "Senin - Jumat: 07.30 - 16.30 WIB",
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
  video: {
    url: "https://youtu.be/YNyfInLWsnc?si=Fd2mTjsNWbTH40zB",
    title: "Tour MyERP Plus",
    closeLabel: "Tutup video",
    invalidText:
    "Video belum tersedia. Periksa kembali link YouTube pada pengaturan video."
  },
    heroVisual: {
    videoLabel: "Putar Video",
    videoSub: "Tour ERP",
    videoAria: "Putar Video Tour ERP",
    images: [
      {
        id: "penjualan",
        src: "/hero/interface-penjualan.jpg",
        alt: "Antarmuka MyERP Plus: daftar Invoice Penjualan, grafik Top 10 Barang Penjualan Terbesar, dan form Pembayaran Piutang",
      },
      {
        id: "pembelian",
        src: "/hero/interface-pembelian.jpg",
        alt: "Antarmuka MyERP Plus: form Order Pembelian, daftar PO, cetak PO, dan grafik Order vs Pembelian",
      },
    ],
  },
};