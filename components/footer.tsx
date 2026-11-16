"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Globe, ChevronDown, MapPin } from "lucide-react";
import { MyErpPlusLogo } from "./BrandLogos";

export function Footer() {
  const [currentLang, setCurrentLang] = useState<"ID" | "EN">("ID");

  return (
    <footer className="w-full bg-[#f8fbff] border-t border-slate-200/90 text-slate-600 text-xs sm:text-[13px] pt-16 pb-12 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================
            1. TOP NAVIGATION COLUMNS (4 MAIN COLS)
           ======================================================== */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 pb-12 border-b border-slate-200/80">
          
          {/* Column 1: Solusi & Fitur */}
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-slate-900 text-xs tracking-wider uppercase mb-3.5">
                Solusi
              </h3>
              <ul className="space-y-2.5">
                {["MyERP Broadcast", "MyERP Sales Suite", "MyERP Finance & Accounting", "MyERP Inventory"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="hover:text-blue-600 transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-slate-900 text-xs tracking-wider uppercase mb-3.5">
                Fitur
              </h3>
              <ul className="space-y-2.5">
                {[
                  "Aplikasi Akuntansi",
                  "Manajemen Stok Gudang",
                  "Point of Sales (POS)",
                  "Integrasi WhatsApp API",
                  "Laporan Laba Rugi Real-Time",
                  "Manajemen Invoice & PO",
                  "Workflow Automation",
                ].map((item) => (
                  <li key={item}>
                    <Link href="#" className="hover:text-blue-600 transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 2: Industri & Roles */}
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-slate-900 text-xs tracking-wider uppercase mb-3.5">
                Industri
              </h3>
              <ul className="space-y-2.5">
                {[
                  "Ritel & Multi-Cabang",
                  "Manufaktur & Keuangan",
                  "Kesehatan & Hospital",
                  "Pendidikan",
                  "Perhotelan",
                  "Tour & Travel",
                  "Logistik & FMCG",
                  "Outsourcing & IT",
                ].map((item) => (
                  <li key={item}>
                    <Link href="#" className="hover:text-blue-600 transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-slate-900 text-xs tracking-wider uppercase mb-3.5">
                Roles
              </h3>
              <ul className="space-y-2.5">
                {[
                  "Pemilik Bisnis / CEO",
                  "Tim Keuangan & Akuntan",
                  "Manajer Gudang & Logistik",
                  "Tim Sales & Marketing",
                ].map((item) => (
                  <li key={item}>
                    <Link href="#" className="hover:text-blue-600 transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 3: Service & Resources */}
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-slate-900 text-xs tracking-wider uppercase mb-3.5">
                Service & Bantuan
              </h3>
              <ul className="space-y-2.5">
                {["Pusat Bantuan", "Hubungi Support", "Program Partnership", "Komunitas ERP"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="hover:text-blue-600 transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-slate-900 text-xs tracking-wider uppercase mb-3.5">
                Resources
              </h3>
              <ul className="space-y-2.5">
                {[
                  "Blog & Wawasan Bisnis",
                  "Studi Kasus Pelanggan",
                  "Ebook & Guidebook ERP",
                  "Kalkulator ROI ERP",
                  "Template Keuangan Gratis",
                  "Sitemap",
                ].map((item) => (
                  <li key={item}>
                    <Link href="#" className="hover:text-blue-600 transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 4: Perusahaan & Legal */}
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-slate-900 text-xs tracking-wider uppercase mb-3.5">
                Perusahaan
              </h3>
              <ul className="space-y-2.5">
                {[
                  "Tentang MyERP Plus",
                  "Produk & Modul",
                  "Mengapa MyERP Plus?",
                  "Harga & Paket",
                  "Integrasi API",
                  "Trust Center",
                  "Keamanan Data Enterprise",
                  "Karir",
                  "Syarat & Ketentuan",
                  "Kebijakan Privasi",
                ].map((item) => (
                  <li key={item}>
                    <Link href="#" className="hover:text-blue-600 transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* ========================================================
            2. REGIONAL OFFICES GRID (4 LOCATIONS)
           ======================================================== */}
        <div className="py-10 border-b border-slate-200/80">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-[12px] text-slate-500">
            {/* Malang */}
            <div>
              <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-blue-600" /> Kota Malang
              </h4>
              <p className="leading-relaxed">
                Ruko Modern Kav A16-A17, Jl. Loncat Indah, Tasikmadu, Kec. Lowokwaru, Kota Malang, Jawa Timur 65143
              </p>
            </div>
          </div>
        </div>

        {/* ========================================================
            3. TRUST BADGES, CERTIFICATION & LEGAL DISCLAIMER
           ======================================================== */}
        <div className="py-8 border-b border-slate-200/80 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          {/* Badges Row */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-slate-700">
            {/* Komdigi Badge */}
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-white border border-slate-200/90 shadow-2xs">
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 shrink-0 text-slate-900" stroke="currentColor">
                <rect x="3" y="3" width="7" height="7" rx="1.5" strokeWidth="2" />
                <rect x="14" y="3" width="7" height="7" rx="1.5" strokeWidth="2" />
                <rect x="3" y="14" width="7" height="7" rx="1.5" strokeWidth="2" />
                <circle cx="17.5" cy="17.5" r="3.5" fill="currentColor" />
              </svg>
              <span className="text-[10px] font-black tracking-wider text-slate-900 uppercase">
                KOMDIGI
              </span>
            </div>

            {/* Meta Partner */}
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-white border border-slate-200/90 shadow-2xs">
              <span className="text-base font-bold text-blue-600">∞</span>
              <div className="flex flex-col text-left leading-none">
                <span className="text-[10px] font-bold text-slate-900">Meta</span>
                <span className="text-[7px] text-slate-500 font-medium">Business Partner</span>
              </div>
            </div>

            {/* ISO 27001 */}
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-white border border-slate-200/90 shadow-2xs">
              <div className="w-4 h-4 rounded-full border border-slate-400 flex items-center justify-center text-[7px] font-bold">
                ✓
              </div>
              <span className="text-[9.5px] font-bold text-slate-800">ISO 27001:2022</span>
            </div>

            {/* ISO 9001 */}
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-white border border-slate-200/90 shadow-2xs">
              <div className="w-4 h-4 rounded-full border border-slate-400 flex items-center justify-center text-[7px] font-bold">
                ★
              </div>
              <span className="text-[9.5px] font-bold text-slate-800">ISO 9001:2015</span>
            </div>

            {/* DMCA Protected */}
            <div className="flex items-center gap-1 px-2 py-1 rounded bg-slate-900 text-white text-[9px] font-extrabold tracking-wider">
              <span>DMCA</span>
              <span className="text-amber-400">PROTECTED</span>
            </div>
          </div>

          {/* Legal Certification Text */}
          <div className="max-w-xl text-[11px] text-slate-400 leading-normal">
            MyERP Plus telah bersertifikasi ISO/IEC 27001:2022 dan ISO 9001:2015 oleh BSI Group, terdaftar sebagai Penyelenggara Sistem Elektronik (PSE) Resmi di bawah naungan Komdigi, dan merupakan Mitra Bisnis resmi Meta WhatsApp.
          </div>
        </div>

        {/* ========================================================
            4. BOTTOM BAR: LOGO, COPYRIGHT, SOCIALS & LANGUAGE
           ======================================================== */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Left: Brand Logo & Copyright */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
            <MyErpPlusLogo className="scale-90 origin-left" />
            <span className="text-[12px] text-slate-400">
              Copyright © 2026 MyERP Plus. All rights reserved.
            </span>
          </div>

          {/* Right: Social Links & Language Dropdown */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-[12px] text-slate-500">
            <div className="flex items-center gap-2">
              <span className="font-medium text-slate-400">Ikuti kami:</span>
              <Link href="#" className="hover:text-blue-600 transition-colors">Facebook</Link>
              <span>•</span>
              <Link href="#" className="hover:text-blue-600 transition-colors">X</Link>
              <span>•</span>
              <Link href="#" className="hover:text-blue-600 transition-colors">Instagram</Link>
              <span>•</span>
              <Link href="#" className="hover:text-blue-600 transition-colors">LinkedIn</Link>
              <span>•</span>
              <Link href="#" className="hover:text-blue-600 transition-colors">YouTube</Link>
              <span>•</span>
              <Link href="#" className="hover:text-blue-600 transition-colors">TikTok</Link>
            </div>

            {/* Language Selector */}
            <button
              type="button"
              onClick={() => setCurrentLang(currentLang === "ID" ? "EN" : "ID")}
              className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-700 font-semibold text-xs hover:border-slate-300 transition-colors cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5 text-slate-500" />
              <span>{currentLang}</span>
              <ChevronDown className="w-3 h-3 text-slate-400" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
