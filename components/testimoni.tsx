import React from "react";
import { siteConfig } from "@/lib/content-data";

// Class ditulis lengkap agar tidak dihapus Tailwind saat build
const accentMap: Record<string, string> = {
  emerald: "text-emerald-400",
  blue: "text-blue-400",
  cyan: "text-cyan-400",
  amber: "text-amber-400",
  purple: "text-purple-400",
};

// Font monospace untuk angka
const monoFont =
  "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace";

export function TestimoniSection() {
  const data = siteConfig.impact;

  return (
    <section
      id="testimoni"
      className="w-full bg-gradient-to-br from-[#0B132B] via-[#0B132B] to-[#10265c] py-14 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <span className="mb-4 inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1 text-[10px] font-bold uppercase tracking-wide text-blue-400 sm:text-[11px]">
            {data.badge}
          </span>
          <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
            {data.title}
          </h2>
        </div>

        {/* Kartu metrik (statis, tanpa link dan tanpa hover) */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-5">
          {data.items.map((item) => {
            const valueColor = accentMap[item.accent] ?? accentMap.blue;

            return (
              <div
                key={item.id}
                className="flex flex-col items-center justify-center rounded-3xl border border-white/10 bg-white/5 px-4 py-6 text-center last:col-span-2 lg:last:col-span-1"
              >
                <p
                  className={`text-3xl font-bold tracking-tight sm:text-4xl ${valueColor}`}
                  style={{ fontFamily: monoFont }}
                >
                  {item.value}
                </p>
                <p className="mt-3 text-[11px] font-semibold leading-snug text-white sm:text-xs">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}