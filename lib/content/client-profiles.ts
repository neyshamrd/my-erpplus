export const clientProfiles = {
  backLabel: "Kembali ke Daftar Klien",
  modulesSectionTitle: "Modul MyERP yang Digunakan",
  profileSectionTitle: "Tentang Perusahaan",
  ctaTitle: "Ingin Menerapkan Alur Serupa di Perusahaan Anda?",
  ctaText:
    "Diskusikan kebutuhan modul dan proses bisnis Anda bersama tim PT You profit Indonesia.",
  ctaButton: "Jadwalkan Live Demo",

  //BARU: konten dummy perbandingan Sebelum vs Sesudah (default semua klien)
  defaultBeforeAfter: {
    sectionTitle: "Sebelum vs Sesudah Menggunakan MyERP Plus",
    sectionSubtitle:
      "Perbandingan langsung dampak efisiensi operasional sebelum dan sesudah perusahaan mengintegrasikan MyERP Plus ke alur kerja.",
    beforeBadge: "Sebelum MyERP Plus",
    afterBadge: "Sesudah MyERP Plus",
    hint: "Geser garis tengah untuk membandingkan",
    rows: [
      {
        icon: "document",
        label: "Pencatatan Transaksi",
        before: "Input manual berulang di banyak file Excel",
        after: "Satu sistem, jurnal tercatat otomatis",
      },
      {
        icon: "stock",
        label: "Akurasi Stok",
        before: "Selisih stok sering ditemukan saat opname",
        after: "Saldo stok real-time & akurat",
      },
      {
        icon: "clock",
        label: "Waktu Closing Bulanan",
        before: "5 - 7 hari kerja setiap akhir bulan",
        after: "1 - 2 hari, laporan siap",
      },
      {
        icon: "team",
        label: "Koordinasi Antar Divisi",
        before: "Rekap manual, data sering tidak sinkron",
        after: "Data terpusat & dapat diakses lintas divisi",
      },
      {
        icon: "report",
        label: "Pelaporan Manajemen",
        before: "Laporan disusun manual & sering terlambat",
        after: "Dashboard & laporan tersedia real-time",
      },
    ],
  },

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
      highlights: [
        { value: "Terintegrasi", label: "Produksi, Stok & Akuntansi" },
        { value: "Real-Time", label: "Monitoring Saldo & Jurnal" },
      ],
      aboutCompany: [
        "PT Kawata Indonesia beroperasi di bidang manufaktur dengan kebutuhan pengelolaan material, jadwal kerja produksi, serta pelaporan operasional yang terstruktur.",
        "Melalui implementasi MyERP Plus, proses pencatatan transaksi dari gudang dan lantai produksi terhubung langsung ke pembukuan sehingga meminimalkan input berulang.",
      ],
      // Contoh override khusus klien (opsional). Hapus jika ingin memakai default.
      beforeAfterRows: [
        {
          icon: "document",
          label: "Pencatatan Produksi",
          before: "Laporan produksi dicatat manual di kertas & Excel",
          after: "Work Order & hasil produksi tercatat langsung di sistem",
        },
        {
          icon: "stock",
          label: "Stok Bahan Baku",
          before: "Saldo bahan baku sulit dipantau saat produksi berjalan",
          after: "Saldo stok & pemakaian material real-time",
        },
        {
          icon: "finance",
          label: "Biaya Produksi",
          before: "Kalkulasi biaya dihitung manual di akhir bulan",
          after: "Biaya produksi terhitung otomatis & masuk jurnal",
        },
        {
          icon: "report",
          label: "Pelaporan Keuangan",
          before: "Rekonsiliasi stok dan jurnal memakan waktu berhari-hari",
          after: "Laporan keuangan terpusat siap kapan saja",
        },
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
      location: "Kawasan Industri, Jl. Mm 2100 Jl. Sulawesi III No.2-37 Blok M 28, Gandamekar, Cikarang Barat, Kabupaten Bekasi, Jawa Barat.",
      logoSrc: "/logos/topla.png",
      headline:
        "PT Topla Abadi Jaya Meningkatkan Ketertiban Produksi & Stok dengan MyERP Plus",
      summary:
        "Profil perusahaan dan penggunaan modul MyERP Plus untuk mendukung operasional plastik injeksi, pengendalian stok, dan akuntansi.",
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
      location: "Kawasan Greenland, Batavia, Blok AB No. 48-49, Kota Deltamas, Sukamahi, Kec. Cikarang Pusat, Kabupaten Bekasi, Jawa Barat.",
      logoSrc: "/logos/ikuyo.png",
      headline:
        "PT Ikuyo Indonesia Menyelaraskan Pengadaan, Gudang & Produksi di MyERP Plus",
      summary:
        "Profil perusahaan dan modul MyERP Plus yang digunakan untuk mendukung rantai pasok, gudang, dan pelaporan.",
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
      location: "Jl. A. Yani, Wonosari, Sumbertanggul, Kec. Mojosari, Kabupaten Mojokerto, Jawa Timur.",
      logoSrc: "/logos/motasa.png",
      headline:
        "PT Motasa Indonesia Memperkuat Koordinasi PPIC, Stok & Keuangan dengan MyERP Plus",
      summary:
        "Profil perusahaan dan penerapan modul MyERP Plus untuk mendukung kelancaran operasional manufaktur.",
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
      location: "EJIP Industrial Park Plot 7L-1 (dan Plot 7K-2 / Jl. Citanduy 6 No. Plot 7K-2), Desa Sukaresmi, Cikarang Selatan, Kabupaten Bekasi, Jawa Barat.",
      logoSrc: "/logos/narumi.png",
      headline:
        "PT Narumi Indonesia Mfg Meningkatkan Visibilitas Produksi & Keuangan dengan MyERP Plus",
      summary:
        "Profil perusahaan dan modul MyERP Plus yang digunakan untuk mendukung proses manufaktur dan akuntansi.",
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
      location: "Jl. Halim Perdana Kusuma No. 88, Batuceper, Tangerang, Banten, Indonesia",
      logoSrc: "/logos/pci.jpg",
      headline:
        "PT Prima Copper Industri Mengoptimalkan Stok, Penjualan & Akuntansi di MyERP Plus",
      summary:
        "Profil perusahaan dan pemanfaatan modul MyERP Plus untuk mendukung operasional pengolahan logam dan distribusi.",
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
      location: "Jl. K.H. Ahmad Dahlan No. 205, Samborejo, Kec. Tirto, Kota Pekalongan, Jawa Tengah.",
      logoSrc: "/logos/ujs.jpg",
      headline:
        "PT Unggul Jaya Sejahtera Menata Distribusi, Inventaris & Keuangan dengan MyERP Plus",
      summary:
        "Profil perusahaan dan modul MyERP Plus yang digunakan untuk mendukung operasional alat kesehatan dan distribusi.",
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
      location: "Jl. Raya Bekasi KM. 18, No. 08, Jatinegara Kaum, Pulogadung, East Jakarta, DKI Jakarta.",
      logoSrc: "/logos/npt.png",
      headline:
        "PT Nanda Persada Transport Menyederhanakan Operasional & Keuangan dengan MyERP Plus",
      summary:
        "Profil perusahaan dan modul MyERP Plus yang digunakan untuk mendukung operasional ekspedisi dan akuntansi.",
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
};
