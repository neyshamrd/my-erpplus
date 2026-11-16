"use client";

import React from "react";
import { CheckCircle2, FileText, Play } from "lucide-react";

type HeroIllustrationProps = {
  // Dipanggil saat tombol "Putar Video" diklik
  onPlayVideo?: () => void;
};

export function HeroIllustration({ onPlayVideo }: HeroIllustrationProps) {
  return (
    // Digeser ke kanan di layar lg ke atas
    <div className="relative w-full lg:translate-x-6 xl:translate-x-8">
      {/* Keyframes animasi naik turun */}
      <style>{`
        @keyframes myerp-float-a {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes myerp-float-b {
          0%, 100% { transform: translateY(-5px); }
          50% { transform: translateY(7px); }
        }
        @keyframes myerp-float-c {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(8px); }
        }
        .myerp-float-a { animation: myerp-float-a 6s ease-in-out infinite; }
        .myerp-float-b { animation: myerp-float-b 7s ease-in-out infinite; }
        .myerp-float-c { animation: myerp-float-c 8s ease-in-out infinite; }
        .myerp-float-d { animation: myerp-float-a 9s ease-in-out infinite 1s; }
        .myerp-float-bot { animation: myerp-float-b 5s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .myerp-float-a, .myerp-float-b, .myerp-float-c, .myerp-float-d, .myerp-float-bot {
            animation: none;
          }
        }
      `}</style>

      <div className="grid grid-cols-2 gap-4 lg:block lg:relative lg:h-[520px]">
        {/* Karakter + tombol video (tengah) */}
        <div className="col-span-2 order-first flex justify-center py-4 lg:py-0 lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 z-10">
          <div className="myerp-float-bot relative flex flex-col items-center">
            {/* Kepala */}
            <div className="relative z-10">
              <div className="absolute -left-3 top-6 h-7 w-3.5 rounded-md bg-blue-500" />
              <div className="absolute -right-3 top-6 h-7 w-3.5 rounded-md bg-blue-500" />
              <div className="relative h-[72px] w-[84px] rounded-[26px] bg-[#0B132B] flex items-center justify-center">
                <div className="h-[46px] w-[60px] rounded-2xl bg-[#FDEBDD] flex items-center justify-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#0B132B]" />
                  <span className="h-2 w-2 rounded-full bg-[#0B132B]" />
                </div>
                <span className="absolute -left-1 bottom-3 h-[3px] w-6 -rotate-12 rounded-full bg-amber-400" />
              </div>
            </div>

            {/* Badan */}
            <div className="relative -mt-3 h-[92px] w-[106px] rounded-[26px] bg-[#0B132B]" />

            {/* Tombol Putar Video */}
            <button
              type="button"
              onClick={onPlayVideo}
              aria-label="Putar Video Tour ERP"
              className="absolute top-[74px] z-20 flex items-center"
            >
              <span className="h-[52px] w-3 rounded-l-xl bg-slate-600/80" />
              <span className="flex items-center gap-3 bg-white rounded-xl px-3.5 py-2.5 shadow-xl shadow-slate-900/15 hover:scale-105 transition-transform">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600">
                  <Play className="h-3.5 w-3.5 fill-white text-white ml-0.5" />
                </span>
                <span className="flex flex-col text-left leading-tight pr-1">
                  <span className="text-[13px] font-bold text-slate-900 whitespace-nowrap">
                    Putar Video
                  </span>
                  <span className="text-[11px] text-slate-500 whitespace-nowrap">
                    Tour ERP
                  </span>
                </span>
              </span>
              <span className="h-[52px] w-3 rounded-r-xl bg-slate-600/80" />
            </button>
          </div>
        </div>

        {/* Kartu: Financial Ledger (kiri atas) */}
        <div className="lg:absolute lg:left-0 lg:top-0 lg:w-[205px]">
          <div className="myerp-float-a bg-white rounded-xl border border-slate-100 p-3.5 shadow-[0_8px_30px_rgba(15,23,42,0.08)]">
            <div className="flex items-center justify-between mb-2.5">
              <span className="text-xs font-bold text-slate-900">Financial Ledger</span>
              <span className="text-[9px] font-semibold text-emerald-600 bg-emerald-50 border border-emerald-200 rounded px-1.5 py-0.5">
                e-Faktur OK
              </span>
            </div>
            <div className="flex justify-between mb-2.5">
              <div>
                <p className="text-[10px] text-slate-400">Kas & Piutang</p>
                <p className="text-xs font-mono font-semibold text-slate-800">Rp 4.82 M</p>
              </div>
              <div>
                <p className="text-[10px] text-slate-400">Gross Margin</p>
                <p className="text-xs font-mono font-semibold text-emerald-600">↗ 31.4%</p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 rounded-md border border-slate-200 px-2 py-1.5">
              <CheckCircle2 className="h-3 w-3 text-blue-600" />
              <span className="text-[10px] text-slate-600">Tutup Buku: Otomatis 1 Hari</span>
            </div>
          </div>
        </div>

        {/* Kartu: Inventaris Gudang (kanan atas, sedikit lebih turun) */}
        <div className="lg:absolute lg:right-0 lg:top-[7%] lg:w-[175px]">
          <div className="myerp-float-b bg-white rounded-xl border border-slate-100 p-3.5 shadow-[0_8px_30px_rgba(15,23,42,0.08)]">
            <div className="flex items-center justify-between mb-2.5">
              <span className="text-xs font-bold text-slate-900">Inventaris Gudang</span>
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
            </div>
            <div className="flex justify-center mb-2.5">
              <div
                className="relative h-14 w-14 rounded-full"
                style={{
                  background:
                    "conic-gradient(#2563eb 0 70%, #10b981 70% 90%, #f59e0b 90% 100%)",
                }}
              >
                <div className="absolute inset-[4px] rounded-full bg-white flex flex-col items-center justify-center">
                  <span className="text-[11px] font-bold text-slate-900 leading-none">99.8%</span>
                  <span className="text-[6px] font-semibold text-slate-400 mt-0.5">AKURASI</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 text-[8px] text-slate-500">
              <span className="flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                Ready
              </span>
              <span className="flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Transit
              </span>
              <span className="flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                Reorder
              </span>
            </div>
          </div>
        </div>

        {/* Kartu: Work Order (kiri bawah, sedikit lebih naik) */}
        <div className="lg:absolute lg:left-0 lg:bottom-[5%] lg:w-[215px]">
          <div className="myerp-float-c bg-white rounded-xl border border-slate-100 p-3.5 shadow-[0_8px_30px_rgba(15,23,42,0.08)]">
            <div className="flex items-center justify-between mb-2">
              <span className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-indigo-600">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
                WO #WO-8910
              </span>
              <span className="text-[9px] font-semibold text-emerald-600 bg-emerald-50 border border-emerald-200 rounded px-1.5 py-0.5">
                Running
              </span>
            </div>
            <p className="text-[10px] text-slate-400 mb-2">
              Item Produksi:{" "}
              <span className="font-bold text-slate-800">Gear Box Assembly V2</span>
            </p>
            <div className="h-1.5 w-full rounded-full bg-slate-100 mb-2.5">
              <div className="h-1.5 w-[82%] rounded-full bg-blue-600" />
            </div>
            <div className="flex items-end justify-between">
              <div>
                <p className="text-[9px] font-mono text-slate-400">Output:</p>
                <p className="text-[10px] font-mono font-semibold text-slate-700">8.200/10.000</p>
              </div>
              <div className="bg-blue-50 rounded px-2 py-1">
                <p className="text-[8px] font-mono font-bold text-blue-600">HPP Rp</p>
                <p className="text-[10px] font-mono font-semibold text-blue-600">42.500</p>
              </div>
            </div>
          </div>
        </div>

        {/* Kartu: PO Approval (kanan bawah) */}
        <div className="lg:absolute lg:right-0 lg:bottom-0 lg:w-[215px]">
          <div className="myerp-float-d bg-white rounded-xl border border-slate-100 p-3.5 shadow-[0_8px_30px_rgba(15,23,42,0.08)]">
            <div className="flex items-center justify-between mb-2.5">
              <span className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
                <FileText className="h-3.5 w-3.5 text-slate-500" />
                PO Approval
              </span>
              <span className="text-[9px] font-mono font-semibold text-blue-600 bg-blue-50 border border-blue-200 rounded px-1.5 py-0.5">
                PO-9921
              </span>
            </div>
            <div className="space-y-1.5 text-[10px]">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Pengadaan Bahan:</span>
                <span className="font-mono font-semibold text-slate-800">Rp 320.000.000</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Otoritas:</span>
                <span className="font-semibold text-emerald-600 bg-emerald-50 rounded px-1.5 py-0.5">
                  ✓ Disetujui Direksi
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Plafon Vendor:</span>
                <span className="font-semibold text-blue-600">Valid & Limit OK</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}