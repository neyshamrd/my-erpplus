import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Calculator,
  Factory,
  Package,
  Repeat,
  ShoppingCart,
  Truck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { siteConfig } from "@/lib/content-data";

// Ikon tiap modul
const iconMap: Record<string, LucideIcon> = {
  finansial: Calculator,
  manufaktur: Factory,
  pembelian: ShoppingCart,
  penjualan: Truck,
  inventaris: Package,
  aset: Building2,
};

// Class ditulis lengkap agar tidak dihapus Tailwind saat build
// highlight: border berwarna + bayangan lembut saat hover, klik (active), atau fokus keyboard
const accentMap: Record<
  string,
  { iconBox: string; link: string; highlight: string }
> = {
  emerald: {
    iconBox: "bg-emerald-50 text-emerald-600",
    link: "text-emerald-600",
    highlight:
      "hover:border-emerald-300 active:border-emerald-300 focus-visible:border-emerald-300 hover:shadow-lg hover:shadow-emerald-500/10 active:shadow-lg active:shadow-emerald-500/10 focus-visible:shadow-lg focus-visible:shadow-emerald-500/10",
  },
  indigo: {
    iconBox: "bg-indigo-50 text-indigo-600",
    link: "text-indigo-600",
    highlight:
      "hover:border-indigo-300 active:border-indigo-300 focus-visible:border-indigo-300 hover:shadow-lg hover:shadow-indigo-500/10 active:shadow-lg active:shadow-indigo-500/10 focus-visible:shadow-lg focus-visible:shadow-indigo-500/10",
  },
  amber: {
    iconBox: "bg-amber-50 text-amber-600",
    link: "text-amber-600",
    highlight:
      "hover:border-amber-300 active:border-amber-300 focus-visible:border-amber-300 hover:shadow-lg hover:shadow-amber-500/10 active:shadow-lg active:shadow-amber-500/10 focus-visible:shadow-lg focus-visible:shadow-amber-500/10",
  },
  cyan: {
    iconBox: "bg-cyan-50 text-cyan-600",
    link: "text-cyan-600",
    highlight:
      "hover:border-cyan-300 active:border-cyan-300 focus-visible:border-cyan-300 hover:shadow-lg hover:shadow-cyan-500/10 active:shadow-lg active:shadow-cyan-500/10 focus-visible:shadow-lg focus-visible:shadow-cyan-500/10",
  },
  blue: {
    iconBox: "bg-blue-50 text-blue-600",
    link: "text-blue-600",
    highlight:
      "hover:border-blue-300 active:border-blue-300 focus-visible:border-blue-300 hover:shadow-lg hover:shadow-blue-500/10 active:shadow-lg active:shadow-blue-500/10 focus-visible:shadow-lg focus-visible:shadow-blue-500/10",
  },
  purple: {
    iconBox: "bg-purple-50 text-purple-600",
    link: "text-purple-600",
    highlight:
      "hover:border-purple-300 active:border-purple-300 focus-visible:border-purple-300 hover:shadow-lg hover:shadow-purple-500/10 active:shadow-lg active:shadow-purple-500/10 focus-visible:shadow-lg focus-visible:shadow-purple-500/10",
  },
};

export function ModulSection() {
  const data = siteConfig.modul;

  return (
    <section
      id="modul"
      className="w-full border-t border-slate-100 bg-white py-14 sm:py-16 lg:py-20"
    >
      {/* Container sedikit lebih lebar agar kartu lebih lebar */}
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          <span className="mb-4 inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-[10px] font-bold uppercase tracking-wide text-blue-600 sm:text-[11px]">
            {data.badge}
          </span>
          <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-[#0B132B] sm:text-3xl lg:text-4xl">
            {data.title}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            {data.subtitle}
          </p>
        </div>

        {/* Grid 6 modul */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {data.items.map((item, index) => {
            const Icon = iconMap[item.id] ?? Package;
            const accent = accentMap[item.accent] ?? accentMap.blue;
            const number = String(index + 1).padStart(2, "0");

            return (
              // Seluruh kartu adalah link, tanpa efek naik/pop up
              <Link
                key={item.id}
                href={item.href}
                className={`flex flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_2px_12px_rgba(15,23,42,0.03)] outline-none transition-[border-color,box-shadow] duration-200 sm:p-7 ${accent.highlight}`}
              >
                {/* Ikon + nomor modul */}
                <div className="mb-5 flex items-start justify-between">
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${accent.iconBox}`}
                  >
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Modul {number}
                  </span>
                </div>

                {/* Judul + deskripsi */}
                <h3 className="mb-2.5 text-xl font-bold tracking-tight text-slate-900">
                  {index + 1}. {item.title}
                </h3>
                <p className="mb-5 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>

                {/* Chip kapabilitas */}
                <div className="mb-5 flex flex-wrap gap-2">
                  {item.chips.map((chip) => (
                    <span
                      key={chip}
                      className="rounded-lg bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-700"
                    >
                      {chip}
                    </span>
                  ))}
                </div>

                {/* Footer: integrasi + teks link (selalu rata di bawah kartu) */}
                <div className="mt-auto border-t border-slate-100 pt-4">
                  <p className="mb-3 flex items-center gap-1.5 text-[11px] text-slate-500">
                    <Repeat className="h-3.5 w-3.5 shrink-0 text-emerald-500" />
                    <span>{item.integration}</span>
                  </p>
                  <div
                    className={`flex items-center justify-between text-xs font-bold ${accent.link}`}
                  >
                    <span>{data.ctaText}</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}