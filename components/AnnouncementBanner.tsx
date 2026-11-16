import React from "react";
import { SecurityCertBadges, CloudUptimeBadge } from "./BrandLogos";

export function AnnouncementBanner() {
  return (
    <div className="w-full bg-[#0d1527] text-white text-[11px] sm:text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-slate-800 select-none">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-2 gap-x-4">
        {/* Left: Security Standard Certification & ISO Badges */}
        <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap">
          <span className="text-slate-300 font-normal hidden xs:inline">
            Sistem ERP Berbasis Cloud Aman & Tersertifikasi
          </span>
          <span className="text-slate-300 font-normal xs:hidden">
            Cloud ERP Aman
          </span>
          <SecurityCertBadges />
        </div>

        {/* Right: Cloud Uptime & Multi-Branch Ready */}
        <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
          <span className="text-slate-300 font-normal hidden md:inline">
            Solusi Manajemen Bisnis Terintegrasi
          </span>
          <div className="flex items-center gap-3">
            <div className="h-3 w-px bg-slate-700 hidden sm:block" />
            <CloudUptimeBadge />
          </div>
        </div>
      </div>
    </div>
  );
}
