"use client";

import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

// Ikon WhatsApp (SVG langsung, tanpa impor dari brand-logos)
function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

// Link WhatsApp langsung ke konsultan
const WA_LINK =
  "https://wa.me/6281212122388?text=Halo%20MyERP%20Plus%2C%20saya%20ingin%20berkonsultasi%20mengenai%20implementasi%20sistem%20ERP%20untuk%20perusahaan%20saya";

export function FloatingWhatsApp() {
  // Tombol back to top muncul setelah halaman digulir
  const [showTop, setShowTop] = useState(false);
  // Label "Hubungi Kami" terbuka saat kursor menyentuh atau tombol difokus
  const [expanded, setExpanded] = useState(false);

  // Pantau posisi scroll
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Gulir halus ke atas (mengikuti pengaturan reduce motion pengguna)
  const scrollToTop = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {/* Tombol back to top: fade dan naik saat muncul */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Kembali ke atas"
        aria-hidden={!showTop}
        tabIndex={showTop ? 0 : -1}
        className={`flex h-12 w-12 items-center justify-center rounded-full bg-[#0B132B] text-white shadow-lg shadow-slate-900/25 transition-all duration-300 motion-reduce:transition-none ${
          showTop
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-3 opacity-0"
        }`}
      >
        <ArrowUp className="h-5 w-5" />
      </button>

      {/* Tombol WhatsApp: ikon bulat + pill ramping "Hubungi Kami" yang slide keluar dari belakang ikon */}
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Hubungi konsultan MyERP Plus lewat WhatsApp"
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
        onFocus={() => setExpanded(true)}
        onBlur={() => setExpanded(false)}
        className="relative flex items-center"
      >
        {/* Ikon bulat dengan cincin putih */}
        <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_6px_18px_rgba(37,211,102,0.4)] ring-4 ring-white">
          <WhatsAppGlyph className="h-6 w-6 text-white" />
        </span>

        {/* Pill ramping: menyelip di belakang ikon, slide terbuka ke kanan */}
        <span
          className={`relative z-0 overflow-hidden transition-all duration-500 ease-out motion-reduce:transition-none ${
            expanded ? "-ml-6 max-w-[180px] opacity-100" : "ml-0 max-w-0 opacity-0"
          }`}
        >
          <span className="flex h-9 items-center whitespace-nowrap rounded-full bg-[#25D366] pl-8 pr-5 text-[13px] font-bold text-white shadow-md shadow-emerald-500/20">
            Hubungi Kami
          </span>
        </span>
      </a>
    </div>
  );
}