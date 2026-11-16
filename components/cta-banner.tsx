"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-8 select-none">
      <div className="max-w-6xl mx-auto relative rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-r from-[#0052cc] via-[#085ee6] to-[#1d4ed8] shadow-[0_16px_40px_rgba(0,82,204,0.22)] p-8 sm:p-10 lg:p-12">
        {/* Ambient Glows & Decorative Corner Cutouts */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-sky-300/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-indigo-500/20 rounded-full blur-2xl pointer-events-none" />

        {/* Decorative Geometric Corner Swoosh matching reference screenshot */}
        <div className="absolute -bottom-1 right-0 w-48 sm:w-64 h-12 sm:h-16 bg-gradient-to-l from-amber-400 via-sky-400 to-transparent opacity-90 rounded-tl-3xl pointer-events-none -z-0" />

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8">
          {/* Left Column: Heading & Subheadline */}
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold text-white tracking-tight leading-snug">
              Kelola manajemen operasional & keuangan bisnis lebih cerdas dengan MyERP Plus
            </h2>
            <p className="text-sm sm:text-base text-blue-100 font-normal mt-2.5 leading-relaxed">
              Mulai akselerasikan pertumbuhan bisnis Anda bersama 55.000+ bisnis lainnya di Asia Tenggara.
            </p>
          </div>

          {/* Right Column: CTA Button */}
          <div className="shrink-0 w-full sm:w-auto">
            <Link
              href="#trial"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-[#0052cc] font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>Coba gratis</span>
              <ArrowRight className="w-4 h-4 text-[#0052cc]" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
