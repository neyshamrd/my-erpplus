"use client";

import React, { useState } from "react";
import {
  Play,
  Check,
  TrendingUp,
  Clock,
  Star,
  Layers,
  ArrowUpRight,
  ShieldCheck,
  Wallet,
  Boxes,
} from "lucide-react";
import { VideoModal } from "./VideoModal";

export function HeroIllustration() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <>
      <div className="relative w-full max-w-[620px] mx-auto select-none lg:ml-auto">
        {/* Soft Ambient Mesh Glows behind Mockups */}
        <div className="absolute -top-12 -right-12 w-80 h-80 bg-blue-200/40 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-1/2 -left-10 w-72 h-72 bg-sky-200/30 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute -bottom-10 right-10 w-64 h-64 bg-indigo-100/50 rounded-full blur-3xl pointer-events-none -z-10" />

        {/* Main Composition Canvas */}
        <div className="relative min-h-[540px] sm:min-h-[580px] lg:min-h-[600px] flex items-center justify-center">
          
          {/* ========================================================
              1. TOP-LEFT CARD: FINANCIAL & CASHFLOW REPORT
             ======================================================== */}
          <div className="absolute top-2 left-0 sm:left-2 z-20 w-[225px] sm:w-[250px] bg-white/95 backdrop-blur-md rounded-2xl p-3.5 sm:p-4 border border-slate-100 shadow-[0_12px_32px_rgba(15,23,42,0.08)] transform -rotate-1 hover:rotate-0 hover:scale-102 transition-all duration-300">
            {/* Header */}
            <div className="flex items-center justify-between pb-2.5 border-b border-slate-100 mb-3">
              <span className="text-xs font-bold text-slate-800 tracking-tight flex items-center gap-1.5">
                <Wallet className="w-3.5 h-3.5 text-blue-600" /> Laporan Kas & Finansial
              </span>
              <span className="text-[9.5px] font-semibold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                Real-time
              </span>
            </div>

            {/* 2x2 Metrics Grid */}
            <div className="grid grid-cols-2 gap-2 text-center mb-3">
              <div className="bg-slate-50/80 rounded-xl p-2 border border-slate-100/60">
                <span className="block text-[9px] font-medium text-slate-500">
                  Total Pendapatan
                </span>
                <span className="text-sm sm:text-base font-extrabold text-blue-600">
                  Rp 4.85 M
                </span>
              </div>
              <div className="bg-slate-50/80 rounded-xl p-2 border border-slate-100/60">
                <span className="flex items-center justify-center gap-1 text-[9px] font-medium text-slate-500">
                  <TrendingUp className="w-2.5 h-2.5 text-emerald-600" /> Laba Bersih
                </span>
                <span className="text-sm sm:text-base font-extrabold text-emerald-600">
                  +28.4%
                </span>
              </div>
              <div className="bg-slate-50/80 rounded-xl p-2 border border-slate-100/60">
                <span className="flex items-center justify-center gap-1 text-[9px] font-medium text-slate-500">
                  <Check className="w-2.5 h-2.5 text-blue-500" /> Piutang Tertagih
                </span>
                <span className="text-sm sm:text-base font-extrabold text-slate-800">
                  98.2%
                </span>
              </div>
              <div className="bg-slate-50/80 rounded-xl p-2 border border-slate-100/60">
                <span className="flex items-center justify-center gap-1 text-[9px] font-medium text-slate-500">
                  <Clock className="w-2.5 h-2.5 text-amber-500" /> Arus Kas Masuk
                </span>
                <span className="text-sm sm:text-base font-extrabold text-amber-600">
                  Rp 1.45 M
                </span>
              </div>
            </div>

            {/* Status Footer */}
            <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-[10px]">
              <span className="inline-flex items-center px-2 py-0.5 rounded-full font-semibold bg-blue-100 text-blue-700">
                Q1 2026 Closed
              </span>
              <span className="font-semibold text-slate-600 flex items-center gap-1">
                Kondisi Sehat <ArrowUpRight className="w-3 h-3 text-emerald-600" />
              </span>
            </div>
          </div>

          {/* ========================================================
              2. TOP-RIGHT CARD: TOTAL PENJUALAN & DEALS (DONUT CHART)
             ======================================================== */}
          <div className="absolute top-6 right-0 sm:right-2 z-20 w-[190px] sm:w-[215px] bg-white/95 backdrop-blur-md rounded-2xl p-3.5 sm:p-4 border border-slate-100 shadow-[0_12px_32px_rgba(15,23,42,0.08)] transform rotate-2 hover:rotate-0 hover:scale-102 transition-all duration-300">
            <div className="text-center mb-2">
              <span className="text-xs font-bold text-slate-800 tracking-tight">
                Penjualan & Pesanan
              </span>
            </div>

            {/* Donut Chart with Metrics */}
            <div className="relative flex items-center justify-center my-2">
              <svg viewBox="0 0 100 100" className="w-24 h-24 transform -rotate-90">
                {/* Background Ring */}
                <circle
                  cx="50"
                  cy="50"
                  r="38"
                  fill="transparent"
                  stroke="#F1F5F9"
                  strokeWidth="11"
                />
                {/* Segment 1: B2B Purchase Orders (Blue) 65% */}
                <circle
                  cx="50"
                  cy="50"
                  r="38"
                  fill="transparent"
                  stroke="#2563EB"
                  strokeWidth="11"
                  strokeDasharray="238.76"
                  strokeDashoffset="65"
                  strokeLinecap="round"
                />
                {/* Segment 2: Delivery Orders (Teal) 22% */}
                <circle
                  cx="50"
                  cy="50"
                  r="38"
                  fill="transparent"
                  stroke="#0284C7"
                  strokeWidth="11"
                  strokeDasharray="238.76"
                  strokeDashoffset="175"
                  strokeLinecap="round"
                />
                {/* Segment 3: Invoiced (Amber) 13% */}
                <circle
                  cx="50"
                  cy="50"
                  r="38"
                  fill="transparent"
                  stroke="#F59E0B"
                  strokeWidth="11"
                  strokeDasharray="238.76"
                  strokeDashoffset="210"
                  strokeLinecap="round"
                />
              </svg>

              {/* Center Stat */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="text-sm font-extrabold text-slate-900 leading-none">
                  Rp 9.1 M
                </span>
                <span className="text-[8.5px] font-bold tracking-widest text-slate-400 uppercase mt-0.5">
                  TOTAL SALES
                </span>
              </div>
            </div>

            {/* Legend */}
            <div className="flex items-center justify-between text-[9px] font-medium text-slate-600 px-1 pt-1 border-t border-slate-100">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-blue-600" /> B2B PO
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-sky-600" /> Terkirim
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-amber-500" /> Lunas
              </span>
            </div>
          </div>

          {/* ========================================================
              3. CENTER VISUAL: MODERN ENTERPRISE ERP WORKSPACE
             ======================================================== */}
          <div className="relative z-10 w-full max-w-[340px] sm:max-w-[390px] h-[340px] sm:h-[390px] flex items-center justify-center">
            {/* Visual Persona Backdrop Ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-slate-100/50 via-blue-50/40 to-sky-50/50 border border-white/60 shadow-inner -z-10" />

            {/* Enterprise Desk & Laptop Workspace Visual */}
            <div className="relative w-full h-full flex items-center justify-center pt-8">
              <svg
                viewBox="0 0 320 340"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full object-contain drop-shadow-xl"
              >
                {/* Modern Workspace Desk Background */}
                <ellipse cx="160" cy="290" rx="130" ry="25" fill="#E2E8F0" opacity="0.6" />
                <rect x="50" y="270" width="220" height="24" rx="4" fill="#CBD5E1" />

                {/* Professional Laptop Base */}
                <polygon points="90,270 230,270 245,295 75,295" fill="#94A3B8" />
                <polygon points="95,270 225,270 238,290 82,290" fill="#CBD5E1" />
                {/* Trackpad */}
                <rect x="140" y="278" width="40" height="10" rx="2" fill="#94A3B8" opacity="0.8" />

                {/* Laptop Display Screen (Showing MyERP Plus Financial Dashboard) */}
                <rect x="85" y="145" width="150" height="125" rx="6" fill="#0F172A" />
                <rect x="90" y="150" width="140" height="115" rx="4" fill="#1E293B" />

                {/* ERP Software UI on Screen */}
                {/* Header bar */}
                <rect x="90" y="150" width="140" height="14" fill="#0F172A" />
                <circle cx="98" cy="157" r="2" fill="#EF4444" />
                <circle cx="104" cy="157" r="2" fill="#F59E0B" />
                <circle cx="110" cy="157" r="2" fill="#10B981" />
                <rect x="125" y="155" width="40" height="4" rx="2" fill="#3B82F6" />

                {/* Left sidebar on screen */}
                <rect x="90" y="164" width="28" height="101" fill="#111827" />
                <line x1="94" y1="172" x2="114" y2="172" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" />
                <line x1="94" y1="180" x2="110" y2="180" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
                <line x1="94" y1="188" x2="112" y2="188" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
                <line x1="94" y1="196" x2="108" y2="196" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />

                {/* Dashboard Widgets on Screen */}
                {/* Revenue Chart Widget */}
                <rect x="122" y="168" width="102" height="42" rx="3" fill="#0F172A" />
                <path
                  d="M126 198 L140 190 L155 194 L170 180 L185 186 L205 174 L218 178"
                  stroke="#3B82F6"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <circle cx="205" cy="174" r="2" fill="#60A5FA" />

                {/* Inventory & Cash Widgets */}
                <rect x="122" y="214" width="48" height="24" rx="2" fill="#0F172A" />
                <rect x="126" y="218" width="20" height="3" rx="1.5" fill="#10B981" />
                <rect x="126" y="224" width="36" height="5" rx="1.5" fill="#E2E8F0" />

                <rect x="176" y="214" width="48" height="24" rx="2" fill="#0F172A" />
                <rect x="180" y="218" width="20" height="3" rx="1.5" fill="#F59E0B" />
                <rect x="180" y="224" width="36" height="5" rx="1.5" fill="#E2E8F0" />

                {/* Desk Accessories matching myerpplus.com */}
                {/* Coffee Mug on right */}
                <rect x="250" y="260" width="16" height="22" rx="3" fill="#E2E8F0" />
                <path d="M266 265C270 265 272 268 272 271C272 274 270 277 266 277" stroke="#94A3B8" strokeWidth="2" />
                {/* Smartphone on left */}
                <rect x="42" y="266" width="18" height="30" rx="3" fill="#1E293B" transform="rotate(-15 42 266)" />
                <rect x="44" y="268" width="14" height="24" rx="2" fill="#3B82F6" opacity="0.6" transform="rotate(-15 44 268)" />
              </svg>

              {/* Signature MyERP Plus Badge Overlay */}
              <div className="absolute -bottom-2 -left-2 sm:left-2 z-20">
                <div className="bg-blue-600 text-white rounded-xl p-3 shadow-lg border border-blue-400/40 max-w-[190px] backdrop-blur-md transform hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
                    <span className="text-[10px] font-bold tracking-tight uppercase text-blue-100">
                      Solusi Cloud ERP
                    </span>
                  </div>
                  <p className="text-[11px] font-bold leading-snug">
                    Menciptakan Keunggulan Bisnis Secara Terintegrasi
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================
              4. CENTER FLOATING VIDEO BUTTON ("Putar video")
             ======================================================== */}
          <div className="absolute top-[48%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
            <button
              type="button"
              onClick={() => setVideoOpen(true)}
              className="group inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/95 hover:bg-white text-slate-900 font-semibold text-xs sm:text-sm shadow-[0_10px_28px_rgba(37,99,235,0.18)] border border-slate-200/90 backdrop-blur-md hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <span className="w-7 h-7 rounded-full bg-blue-600 group-hover:bg-blue-700 text-white flex items-center justify-center shadow-sm transition-colors">
                <Play className="w-3.5 h-3.5 fill-white ml-0.5" />
              </span>
              <span>Putar video</span>
            </button>
          </div>

          {/* ========================================================
              5. CENTER-LEFT CARD: INVENTORY & MULTI-GUDANG WORKFLOW
             ======================================================== */}
          <div className="absolute bottom-6 left-0 sm:-left-3 z-20 w-[235px] sm:w-[265px] bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-3.5 border border-slate-100 shadow-[0_12px_32px_rgba(15,23,42,0.08)] transform -rotate-2 hover:rotate-0 hover:scale-102 transition-all duration-300">
            {/* Header */}
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100">
              <div className="flex items-center gap-1.5">
                <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                  <Boxes className="w-3 h-3" />
                </div>
                <span className="text-[11px] font-bold text-slate-800">
                  Otomasi Alur Gudang
                </span>
              </div>
              <span className="text-[9.5px] font-semibold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded">
                FIFO Aktif
              </span>
            </div>

            {/* Workflow Steps */}
            <div className="space-y-2 text-[10.5px]">
              {/* Step 1: PO Received */}
              <div className="bg-slate-100/90 text-slate-800 p-2 rounded-xl rounded-tl-none leading-snug">
                PO Masuk: <strong>500 Unit Raw Material</strong>
              </div>

              {/* Step 2: Auto Jurnal & Stock Adjustment */}
              <div className="bg-blue-600 text-white p-2 rounded-xl rounded-tr-none ml-auto text-right leading-snug">
                Auto Jurnal: Persediaan & Utang Usaha
              </div>

              {/* Step 3: Production Ready */}
              <div className="relative pl-3 border-l-2 border-blue-400 mt-1">
                <div className="bg-blue-50/90 text-slate-800 p-2 rounded-xl rounded-tl-none text-[10px] leading-snug border border-blue-100">
                  Status: Siap Dialokasikan ke Lini Produksi
                </div>
              </div>
            </div>

            {/* Quick Tag */}
            <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[9px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100">
                MULTI-CABANG TERINTEGRASI
              </span>
            </div>
          </div>

          {/* ========================================================
              6. BOTTOM-RIGHT CARD: AUDIT, TAX & REPORT SCORECARD
             ======================================================== */}
          <div className="absolute bottom-2 right-0 sm:right-2 z-20 w-[205px] sm:w-[230px] bg-white/95 backdrop-blur-md rounded-2xl p-3.5 border border-slate-100 shadow-[0_12px_32px_rgba(15,23,42,0.08)] transform rotate-1 hover:rotate-0 hover:scale-102 transition-all duration-300">
            {/* Header */}
            <div className="flex items-start justify-between pb-1.5 border-b border-slate-100">
              <div>
                <span className="block text-xs font-bold text-slate-800">
                  Compliance Scorecard
                </span>
                <span className="block text-[9px] text-slate-400 font-medium">
                  Audit & Pajak Real-time
                </span>
              </div>
              <div className="text-right">
                <span className="block text-xs font-black text-emerald-600">
                  100%
                </span>
                <span className="block text-[8px] text-slate-400">
                  Siap Audit
                </span>
              </div>
            </div>

            {/* Checklist Parameters */}
            <div className="space-y-1.5 py-2 text-[10px] text-slate-600">
              <div className="flex items-center justify-between">
                <span>Rekonsiliasi Bank</span>
                <span className="flex text-amber-400 text-[10px]">★★★★</span>
              </div>
              <div className="flex items-center justify-between">
                <span>E-Faktur & PPN/PPh</span>
                <span className="flex text-amber-400 text-[10px]">★★★★</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Neraca & Laba Rugi</span>
                <span className="flex text-amber-400 text-[10px]">★★★★</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Stok Opname Digital</span>
                <span className="flex text-amber-400 text-[10px]">★★★★</span>
              </div>
            </div>

            {/* Overall Rating Footer */}
            <div className="pt-1.5 border-t border-slate-100 flex items-center justify-center gap-1 text-amber-400">
              <Star className="w-3.5 h-3.5 fill-amber-400 stroke-amber-400" />
              <Star className="w-3.5 h-3.5 fill-amber-400 stroke-amber-400" />
              <Star className="w-3.5 h-3.5 fill-amber-400 stroke-amber-400" />
              <Star className="w-3.5 h-3.5 fill-amber-400 stroke-amber-400" />
              <Star className="w-3.5 h-3.5 fill-amber-400 stroke-amber-400" />
            </div>
          </div>

        </div>
      </div>

      {/* Interactive Video Modal */}
      <VideoModal isOpen={videoOpen} onClose={() => setVideoOpen(false)} />
    </>
  );
}
