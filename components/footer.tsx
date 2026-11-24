"use client";

import React from "react";
import Link from "next/link";
import { MyErpLogo } from "./myerp-logo";
import { useDemoModal } from "./demo-modal";
import { siteConfig } from "@/lib/content-data";

type FooterProps = {
  // Dipanggil saat "Jadwalkan Live Demo" diklik (opsional, fallback ke useDemoModal)
  onOpenDemo?: () => void;
};

export function Footer({ onOpenDemo }: FooterProps) {
  const { openDemo } = useDemoModal();
  const data = siteConfig.footer;

  const handleOpenDemo = () => {
    if (onOpenDemo) {
      onOpenDemo();
      return;
    }
    openDemo();
  };

  return (
    <footer className="w-full bg-[#0B132B] text-slate-300">
      <div className="mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-8">
        {/* Kolom utama */}
        <div className="grid grid-cols-1 gap-10 pb-12 pt-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Kolom 1: logo + deskripsi + alamat */}
          <div className="max-w-xs">
            <Link
              href="/"
              className="inline-flex rounded-xl bg-white px-4 py-2.5"
              aria-label="MyERP Plus"
            >
              <MyErpLogo className="h-7 w-auto" />
            </Link>

            <p className="mt-5 text-[13px] leading-relaxed text-slate-300">
              {data.descBefore}{" "}
              <span className="font-bold text-white">{data.descBrand}</span>{" "}
              {data.descAfter}
            </p>

            <p className="mt-4 text-[13px] leading-snug text-slate-300">
              <Link
                href="/kontak"
                className="transition-colors hover:text-white"
                title="Kunjungi Kantor Kami"
              >
                {data.address}
              </Link>
            </p>
          </div>

          {/* Kolom 2 dan 3: Modul ERP, Solusi Industri */}
          {data.columns.map((col) => (
            <div key={col.title}>
              <h3 className="mb-4 text-[13px] font-bold uppercase tracking-wide text-white">
                {col.title}
              </h3>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.href}
                      className="text-[13px] text-slate-300 transition-colors hover:text-white"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Kolom 4: Perusahaan & Lisensi */}
          <div>
            <h3 className="mb-4 text-[13px] font-bold uppercase tracking-wide text-white">
              {data.companyTitle}
            </h3>
            <ul className="space-y-2.5">
              {data.companyLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-slate-300 transition-colors hover:text-white"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={handleOpenDemo}
                  className="text-left text-[13px] font-semibold text-blue-400 transition-colors hover:text-blue-300"
                >
                  {data.demoText}
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Baris bawah */}
        <div className="flex flex-col gap-2 border-t border-white/10 py-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>{data.copyright}</p>
          <p>{data.security}</p>
        </div>
      </div>
    </footer>
  );
}