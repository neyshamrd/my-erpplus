"use client";

import React, { useState } from "react";
import { Download } from "lucide-react";
import { siteConfig } from "@/lib/content-data";
import { useDemoModal } from "./demo-modal";
import { FlowchartModal } from "./flowchart-modal";

type CtaBannerProps = {
  // Opsional: ikut dipanggil saat tombol "Download Flowchart ERP" diklik.
  // Pop up flowchart sudah ditangani langsung oleh komponen ini.
  onOpenFlowchart?: () => void;
};

export function CtaBanner({ onOpenFlowchart }: CtaBannerProps) {
  const data = siteConfig.cta;
  const { openDemo } = useDemoModal();
  const [flowchartOpen, setFlowchartOpen] = useState(false);

  const handleOpenFlowchart = () => {
    setFlowchartOpen(true);
    onOpenFlowchart?.();
  };

  return (
    <section
      id="demo"
      className="w-full bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16"
    >
      <div className="mx-auto max-w-[1480px]">
        <div className="flex flex-col gap-8 rounded-3xl bg-gradient-to-r from-[#2563eb] via-[#1e3a8a] to-[#0B132B] px-6 py-8 shadow-[0_24px_50px_-12px_rgba(15,23,42,0.35)] sm:px-10 sm:py-10 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:px-12">
          {/* Kiri: teks */}
          <div className="max-w-xl">
            <span className="mb-3 inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-[11px] font-bold text-white">
              {data.badge}
            </span>
            <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl lg:text-[34px]">
              {data.title}
            </h2>
            <p className="mt-3 max-w-lg text-xs leading-relaxed text-blue-100 sm:text-sm">
              {data.description}
            </p>
          </div>

          {/* Kanan: dua tombol */}
          <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto sm:flex-row">
            <button
              type="button"
              onClick={openDemo}
              className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-slate-900 shadow-lg shadow-slate-900/10 transition-colors hover:bg-slate-100"
            >
              {data.demoText}
            </button>

            <button
              type="button"
              onClick={handleOpenFlowchart}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-[#0B132B]/50 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#0B132B]/80"
            >
              <Download className="h-4 w-4" />
              <span>{data.flowchartText}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Pop up flowchart (dirender lewat portal ke document.body) */}
      <FlowchartModal
        open={flowchartOpen}
        onClose={() => setFlowchartOpen(false)}
      />
    </section>
  );
}