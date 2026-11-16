"use client";

import React, { useState } from "react";
import { WhatsAppIcon } from "./BrandLogos";
import { X } from "lucide-react";

export function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Floating Tooltip Pill */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white text-slate-800 text-xs font-semibold py-2 px-3.5 rounded-full shadow-lg border border-slate-200/80 animate-in fade-in slide-in-from-right-4 duration-300">
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
          <span>Konsultasi ERP Gratis dengan Tim MyERP Plus</span>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              setShowTooltip(false);
            }}
            className="text-slate-400 hover:text-slate-600 ml-1 p-0.5 rounded-full"
            aria-label="Tutup pesan bantuan"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating WhatsApp Action Button */}
      <a
        href="https://wa.me/6281212122388?text=Halo%20MyERP%20Plus%2C%20saya%20ingin%20berkonsultasi%20mengenai%20implementasi%20sistem%20ERP%20untuk%20perusahaan%20saya"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-[0_8px_24px_rgba(37,211,102,0.4)] hover:shadow-[0_12px_28px_rgba(37,211,102,0.5)] transform hover:scale-108 active:scale-95 transition-all duration-300"
        aria-label="Hubungi WhatsApp Sales MyERP Plus"
      >
        {/* Radar ping ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />

        <WhatsAppIcon className="w-7 h-7 text-white drop-shadow-xs relative z-10" />
      </a>
    </div>
  );
}
