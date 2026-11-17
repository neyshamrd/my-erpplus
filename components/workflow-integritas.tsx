import React from "react";
import { FileText, ShieldCheck, SlidersVertical, UserCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { siteConfig } from "@/lib/content-data";

// Ikon tiap pilar
const iconMap: Record<string, LucideIcon> = {
  validasi: ShieldCheck,
  role: UserCheck,
  laporan: FileText,
  custom: SlidersVertical,
};

// Class ditulis lengkap agar tidak dihapus Tailwind saat build
const accentMap: Record<string, string> = {
  blue: "bg-blue-600",
  indigo: "bg-indigo-600",
  emerald: "bg-emerald-600",
  amber: "bg-amber-600",
};

export function WorkflowIntegritas() {
  const data = siteConfig.workflow;

  return (
    <section
      id="workflow"
      className="w-full border-t border-slate-100 bg-white py-14 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
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

        {/* Grid 4 pilar (statis, tanpa hover) */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {data.items.map((item) => {
            const Icon = iconMap[item.id] ?? ShieldCheck;
            const iconBg = accentMap[item.accent] ?? accentMap.blue;

            return (
              <div
                key={item.id}
                className="flex flex-col rounded-3xl border border-slate-200 bg-slate-50/70 p-6"
              >
                <span
                  className={`mb-5 flex h-11 w-11 items-center justify-center rounded-xl text-white ${iconBg}`}
                >
                  <Icon className="h-5 w-5" />
                </span>

                <h3 className="mb-3 text-base font-bold leading-snug tracking-tight text-slate-900 sm:text-[17px]">
                  {item.title}
                </h3>

                <p className="text-xs leading-relaxed text-slate-600 sm:text-[13px]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}