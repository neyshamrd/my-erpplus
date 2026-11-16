// components/announcement-banner.tsx
import { siteConfig } from "@/lib/content-data";
import { Play } from "lucide-react";

export function AnnouncementBanner() {
  return (
    <div className="w-full bg-[#0d1527] text-white text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-2 gap-x-4">
        
        {/* Sisi Kiri: Badge & Teks Utama */}
        <div className="flex items-center gap-3 flex-wrap">
          <span className="bg-[#132238] border border-blue-500/30 text-blue-400 px-3 py-1 rounded-full text-[11px] font-medium tracking-wide">
            Rilis v5.0 MRP II
          </span>
          <span className="text-slate-300">
            {siteConfig.hero.title || "Arsitektur Single Database Terintegrasi untuk Manufaktur & Distribusi Skala Nasional."}
          </span>
        </div>

        {/* Sisi Kanan: CTA, Pemisah, & Server Status */}
        <div className="flex items-center gap-3 flex-wrap">
          {/* Tombol Teks Biru dengan Ikon Play */}
          <a 
            href="#demo" 
            className="flex items-center gap-1.5 text-blue-400 hover:text-blue-300 font-medium transition-colors cursor-pointer"
          >
            <Play className="w-3.5 h-3.5 fill-blue-400/20" />
            <span>{siteConfig.announcement.ctaText}</span>
          </a>

          <span className="text-slate-600">|</span>

          {/* Status Server sesuai hasil inspect (Teks hijau terang + titik kedip hijau) */}
          <span className="hidden md:inline-flex items-center gap-1.5 text-emerald-400 text-[11px]" style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace' }}>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> 
            {siteConfig.announcement.serverStatus}
          </span>
        </div>

      </div>
    </div>
  );
}