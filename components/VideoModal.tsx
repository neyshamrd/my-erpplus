"use client";

import React from "react";
import { X, Play, Volume2, Maximize2, Sparkles, CheckCircle2 } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function VideoModal({ isOpen, onClose }: VideoModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-700 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-800/80 border-b border-slate-700/80">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span className="ml-2 text-sm font-semibold text-white">
              MyERP Plus: Solusi ERP Berbasis Cloud Yang Menciptakan Keunggulan Bisnis
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
            aria-label="Tutup video demo"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Display */}
        <div className="relative aspect-video bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 flex flex-col items-center justify-center p-8 text-center select-none overflow-hidden">
          {/* Ambient light glow */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-sky-500/20 rounded-full blur-3xl pointer-events-none" />

          {/* Central Play Badge */}
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center shadow-xl shadow-blue-500/30 cursor-pointer transform hover:scale-105 active:scale-95 transition-all mb-4">
              <Play className="w-8 h-8 fill-white ml-1" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Atur Keuangan & Operasional Bisnis Secara Praktis
            </h3>
            <p className="text-sm text-slate-300 max-w-lg mb-6">
              Pelajari bagaimana MyERP Plus mengintegrasikan pencatatan kas, persediaan multi-gudang, invoice penjualan, dan siklus produksi dalam 1 sistem cloud yang intuitif.
            </p>

            {/* Feature Bullets */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-blue-200">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Jurnal & Neraca Otomatis
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Multi-Gudang & Barcode
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> E-Faktur & Multi-Cabang
              </span>
            </div>
          </div>

          {/* Simulated Player Controls Bar */}
          <div className="absolute bottom-0 inset-x-0 h-14 bg-gradient-to-t from-black/90 to-transparent flex items-center justify-between px-6 z-20">
            <div className="flex items-center gap-4 text-white text-xs">
              <Play className="w-4 h-4 fill-white cursor-pointer" />
              <span>02:18 / 04:05</span>
            </div>
            <div className="flex-1 mx-6 h-1.5 bg-slate-700/80 rounded-full overflow-hidden">
              <div className="w-3/5 h-full bg-blue-500 rounded-full" />
            </div>
            <div className="flex items-center gap-4 text-white text-xs">
              <Volume2 className="w-4 h-4 cursor-pointer" />
              <Maximize2 className="w-4 h-4 cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-slate-800/90 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-slate-300">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Mulai uji coba gratis atau jadwalkan sesi konsultasi dengan konsultan MyERP Plus</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition"
          >
            Mulai Uji Coba Gratis
          </button>
        </div>
      </div>
    </div>
  );
}
