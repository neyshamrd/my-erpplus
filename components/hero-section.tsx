"use client";

import React, { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { siteConfig } from "@/lib/content-data";
import { HeroIllustration } from "./hero-illustration";

// Pesan sukses setelah form dikirim
const SUCCESS_MESSAGE =
  "Terima kasih! Tim konsultan kami akan segera mengirimkan jadwal sesi demonstrasi ke email Anda.";

export function HeroSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const { hero } = siteConfig;

  // Setelah dikirim: tampilkan pesan hijau, kosongkan kolom email, tanpa pindah halaman
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section
      className="relative overflow-hidden bg-white border-b border-slate-100"
      style={{
        backgroundImage:
          "radial-gradient(rgba(148,163,184,0.25) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }}
    >
      <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-12 sm:pt-16 sm:pb-14 lg:pt-20 lg:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-0 items-center">
          {/* Kolom kiri */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
              <span className="text-[11px] sm:text-xs font-semibold text-slate-800">
                {hero.badge}
              </span>
            </div>

            {/* Judul */}
            <h1 className="text-3xl sm:text-4xl xl:text-[50px] font-extrabold text-[#0B132B] tracking-tight leading-[1.1] mb-5">
              <span className="block">{hero.titleLine1}</span>
              <span className="block">{hero.tittleLine2}</span>
              <span className="block text-blue-600">{hero.titleHighlight}</span>
              <span className="block">{hero.titleLine3}</span>
            </h1>

            {/* Deskripsi */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-md mb-6">
              {hero.description}
            </p>

            {/* Kotak form */}
            <div className="w-full max-w-[580px] bg-white border border-slate-200 rounded-xl p-4 shadow-[0_4px_16px_rgba(15,23,42,0.05)]">
              <p className="text-xs font-bold text-slate-900 mb-3">
                {hero.form.title}
              </p>

              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-2.5"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    // Pesan sukses hilang saat pengunjung mengetik ulang
                    if (submitted) setSubmitted(false);
                  }}
                  placeholder={hero.form.placeholder}
                  className="flex-1 min-w-0 h-10 px-3.5 rounded-lg border border-slate-200 bg-slate-50 text-[13px] text-slate-800 placeholder:text-slate-400 outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20 transition"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-1.5 h-10 px-5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-[13px] font-semibold whitespace-nowrap shadow-md shadow-blue-500/20 transition"
                >
                  <span>{hero.form.buttonText}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </form>

              {/* Pesan sukses (hijau) */}
              {submitted && (
                <p
                  role="status"
                  aria-live="polite"
                  className="mt-3 text-[13px] font-medium leading-relaxed text-emerald-600"
                >
                  {SUCCESS_MESSAGE}
                </p>
              )}

              <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 mt-3">
                {hero.form.checks.map((text) => (
                  <div
                    key={text}
                    className="flex items-center gap-1.5 text-[11px] text-slate-600"
                  >
                    <Check className="h-3 w-3 text-emerald-500" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Kolom kanan: digeser ke kanan lewat padding kiri */}
          <div className="lg:col-span-6 lg:pl-12 xl:pl-20">
            <HeroIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}