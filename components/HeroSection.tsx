"use client";

import React from "react";
import Link from "next/link";
import { Star, Sparkles, ArrowRight } from "lucide-react";
import {
  CapterraIcon,
  SoftwareAdviceIcon,
  G2Icon,
} from "./BrandLogos";
import { HeroIllustration } from "./HeroIllustration";
import { buttonVariants } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#f7fbff] to-white pt-6 pb-12 sm:pt-10 sm:pb-16 lg:pt-14 lg:pb-20">
      {/* Background Soft Mesh Ambient Lighting */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-gradient-to-bl from-blue-200/40 via-sky-100/30 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-sky-100/20 via-blue-50/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ========================================================
              LEFT COLUMN: HERO COPY & CONVERSION ACTIONS
             ======================================================== */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-start text-left">
            
            {/* Pill Badge matching MyERP Plus screenshot */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF3FE] text-blue-700 text-xs sm:text-[13px] font-semibold border border-blue-200/70 shadow-xs mb-5 transition-transform hover:scale-102">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Solusi ERP Berbasis Cloud Yang Menciptakan Keunggulan Bisnis</span>
            </div>

            {/* Main Headline: Exact text requested */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[42px] xl:text-[46px] font-extrabold text-[#0B132B] tracking-tight leading-[1.16] mb-5">
              Atur Keuangan Bisnis Secara Praktis Dengan MyERP Plus
            </h1>

            {/* Subheadline / Description: Cloud ERP solution for finance, inventory, sales, and production */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mb-8 font-normal">
              MyERP Plus adalah sistem berbasis web yang dirancang untuk membantu bisnis dalam segala hal, mulai dari mengelola uang dan barang di gudang hingga menjalankan penjualan dan produksi dengan lebih efisien.
            </p>

            {/* Call To Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 w-full sm:w-auto mb-10">
              {/* Primary CTA: Coba Gratis */}
              <Link
                href="#trial"
                className={buttonVariants({
                  className:
                    "w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm sm:text-base px-7 h-12 rounded-lg shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-200 flex items-center justify-center gap-2",
                })}
              >
                <span>Coba Gratis</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              {/* Secondary CTA: Pelajari Layanan */}
              <Link
                href="#services"
                className={buttonVariants({
                  variant: "outline",
                  className:
                    "w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-800 border-slate-300 hover:border-slate-400 font-semibold text-sm sm:text-base px-6 h-12 rounded-lg shadow-xs transition-all duration-200 justify-center",
                })}
              >
                Pelajari Layanan
              </Link>
            </div>

            {/* Social Proof / Rating Badges for Cloud ERP */}
            <div className="w-full">
              <div className="grid grid-cols-3 gap-2.5 sm:gap-3.5 max-w-[430px]">
                
                {/* Capterra Review Card */}
                <div className="flex items-center gap-2.5 bg-white/95 backdrop-blur-xs border border-slate-200/90 rounded-xl p-2 sm:p-2.5 shadow-[0_2px_8px_rgba(15,23,42,0.04)] hover:shadow-md hover:border-slate-300 transition-all duration-200">
                  <CapterraIcon className="w-8 h-8 shrink-0 shadow-xs" />
                  <div className="flex flex-col min-w-0">
                    <div className="flex items-center gap-1 leading-none mb-1">
                      <Star className="w-3.5 h-3.5 fill-[#F59E0B] stroke-[#F59E0B]" />
                      <span className="text-xs sm:text-sm font-bold text-slate-900">
                        4.9
                      </span>
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-medium text-slate-500 truncate">
                      Capterra
                    </span>
                  </div>
                </div>

                {/* Software Advice Review Card */}
                <div className="flex items-center gap-2.5 bg-white/95 backdrop-blur-xs border border-slate-200/90 rounded-xl p-2 sm:p-2.5 shadow-[0_2px_8px_rgba(15,23,42,0.04)] hover:shadow-md hover:border-slate-300 transition-all duration-200">
                  <SoftwareAdviceIcon className="w-8 h-8 shrink-0 shadow-xs" />
                  <div className="flex flex-col min-w-0">
                    <div className="flex items-center gap-1 leading-none mb-1">
                      <Star className="w-3.5 h-3.5 fill-[#F59E0B] stroke-[#F59E0B]" />
                      <span className="text-xs sm:text-sm font-bold text-slate-900">
                        4.8
                      </span>
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-medium text-slate-500 truncate">
                      Soft Advice
                    </span>
                  </div>
                </div>

                {/* G2 Review Card */}
                <div className="flex items-center gap-2.5 bg-white/95 backdrop-blur-xs border border-slate-200/90 rounded-xl p-2 sm:p-2.5 shadow-[0_2px_8px_rgba(15,23,42,0.04)] hover:shadow-md hover:border-slate-300 transition-all duration-200">
                  <G2Icon className="w-8 h-8 shrink-0 shadow-xs" />
                  <div className="flex flex-col min-w-0">
                    <div className="flex items-center gap-1 leading-none mb-1">
                      <Star className="w-3.5 h-3.5 fill-[#F59E0B] stroke-[#F59E0B]" />
                      <span className="text-xs sm:text-sm font-bold text-slate-900">
                        4.8
                      </span>
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-medium text-slate-500 truncate">
                      G2 ERP
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* ========================================================
              RIGHT COLUMN: FLOATING SAAS VISUAL MOCKUPS
             ======================================================== */}
          <div className="lg:col-span-6 xl:col-span-6">
            <HeroIllustration />
          </div>

        </div>
      </div>
    </section>
  );
}
