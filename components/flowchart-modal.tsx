"use client";

import { useEffect, useId, useRef, useState } from "react";
import type { KeyboardEvent as ReactKeyboardEvent } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { Download, X } from "lucide-react";
import { siteConfig } from "@/lib/content-data";

type FlowchartModalProps = {
  open: boolean;
  onClose: () => void;
};

// Elemen yang boleh menerima fokus (untuk menjaga fokus tetap di dalam pop up)
const FOCUSABLE =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function FlowchartModal({ open, onClose }: FlowchartModalProps) {
  const data = siteConfig.flowchart;
  const modules = data.modules;

  const [activeId, setActiveId] = useState<string>(modules[0].id);
  const dialogRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const onCloseRef = useRef(onClose);
  const uid = useId();

  const active = modules.find((m) => m.id === activeId) ?? modules[0];
  const panelId = `${uid}-panel`;
  const titleId = `${uid}-title`;

  // Simpan onClose terbaru tanpa memicu ulang efek di bawah
  useEffect(() => {
    onCloseRef.current = onClose;
  });

  // Saat terbuka: kunci scroll halaman, Escape menutup, fokus terjaga di dalam pop up
  useEffect(() => {
    if (!open) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const { overflow, paddingRight } = document.body.style;
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onCloseRef.current();
        return;
      }
      if (event.key !== "Tab") return;

      const root = dialogRef.current;
      if (!root) return;
      const focusable = Array.from(
        root.querySelectorAll<HTMLElement>(FOCUSABLE)
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const current = document.activeElement;
      const outside = !root.contains(current);

      if (event.shiftKey && (current === first || outside)) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && (current === last || outside)) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = overflow;
      document.body.style.paddingRight = paddingRight;
      previouslyFocused?.focus?.();
    };
  }, [open]);

  if (!open || typeof document === "undefined") return null;

  const selectTab = (id: string) => {
    setActiveId(id);
    bodyRef.current?.scrollTo({ top: 0 });
  };

  // Navigasi tab dengan keyboard: panah kiri/kanan, Home, End
  const onTabKeyDown = (
    event: ReactKeyboardEvent<HTMLButtonElement>,
    index: number
  ) => {
    let next = -1;
    if (event.key === "ArrowRight") next = (index + 1) % modules.length;
    else if (event.key === "ArrowLeft")
      next = (index - 1 + modules.length) % modules.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = modules.length - 1;
    if (next < 0) return;

    event.preventDefault();
    selectTab(modules[next].id);
    tabRefs.current[next]?.focus();
  };

  return createPortal(
    <div
      className="myerp-flow-backdrop fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/60 p-3 backdrop-blur-sm sm:p-6"
      onMouseDown={(event) => {
        // Klik di area gelap (di luar pop up) menutup pop up
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <style>{`
        @keyframes myerp-flow-backdrop {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes myerp-flow-dialog {
          from { opacity: 0; transform: translateY(10px) scale(0.98); }
          to { opacity: 1; transform: none; }
        }
        .myerp-flow-backdrop { animation: myerp-flow-backdrop 0.2s ease-out both; }
        .myerp-flow-dialog { animation: myerp-flow-dialog 0.24s ease-out both; }
        @media (prefers-reduced-motion: reduce) {
          .myerp-flow-backdrop, .myerp-flow-dialog { animation: none; }
        }
      `}</style>

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="myerp-flow-dialog flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl bg-white shadow-2xl shadow-slate-950/40"
      >
        {/* Header */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-3 bg-[#0B132B] px-5 py-4 sm:px-6">
          <span
            aria-hidden="true"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-500 text-xs font-extrabold tracking-wide text-white"
          >
            {data.badge}
          </span>

          <div className="min-w-0 flex-1 basis-56">
            <h2
              id={titleId}
              className="text-base font-extrabold leading-snug text-white sm:text-lg"
            >
              {data.title}
            </h2>
            <p className="mt-0.5 text-[11px] leading-snug text-slate-300">
              {data.subtitle}
            </p>
          </div>

          <a
            href={data.downloadHref}
            download="flowchart-enterprise-myerp-plus.pdf"
            rel="noopener noreferrer"
            className="order-last inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-bold text-white hover:bg-emerald-700 sm:order-none sm:w-auto"
          >
            <Download className="h-4 w-4" />
            <span>{data.downloadLabel}</span>
          </a>

          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label={data.closeLabel}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-slate-300 hover:bg-white/10 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Tab modul */}
        <div
          role="tablist"
          aria-label={data.tablistLabel}
          className="flex shrink-0 gap-2 overflow-x-auto border-b border-slate-200 bg-white px-5 py-3 sm:px-6"
        >
          {modules.map((m, index) => {
            const selected = m.id === active.id;
            return (
              <button
                key={m.id}
                ref={(el) => {
                  tabRefs.current[index] = el;
                }}
                id={`${uid}-tab-${m.id}`}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls={panelId}
                tabIndex={selected ? 0 : -1}
                onClick={() => selectTab(m.id)}
                onKeyDown={(event) => onTabKeyDown(event, index)}
                className={`shrink-0 whitespace-nowrap rounded-lg border px-3.5 py-2 text-xs font-bold ${
                  selected
                    ? "border-blue-600 bg-blue-600 text-white"
                    : "border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100"
                }`}
              >
                {m.tab}
              </button>
            );
          })}
        </div>

        {/* Isi: gulir di dalam pop up, header dan tab tetap di tempat */}
        <div
          ref={bodyRef}
          className="min-h-0 flex-1 overflow-y-auto bg-slate-100 p-4 sm:p-6"
        >
          <div
            role="tabpanel"
            id={panelId}
            aria-labelledby={`${uid}-tab-${active.id}`}
          >
            {/* Judul modul */}
            <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4">
              <div className="min-w-0">
                <h3 className="text-base font-extrabold tracking-tight text-slate-900 sm:text-lg">
                  {active.title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-500">
                  {active.subtitle}
                </p>
              </div>
              <span className="shrink-0 rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-[11px] font-bold text-orange-700">
                {data.moduleBadge}
              </span>
            </div>

            {/* Diagram (hanya gambar). Di layar sempit bisa digeser ke samping */}
            <div className="mt-4 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
              <Image
                key={active.id}
                src={active.image}
                alt={active.alt}
                width={active.width}
                height={active.height}
                unoptimized
                className="h-auto w-full min-w-[760px] md:min-w-0"
              />
            </div>

            {/* Penjelasan alur */}
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {active.steps.map((step) => (
                <div
                  key={step.tag + step.title}
                  className="rounded-2xl border border-slate-200 bg-white p-4"
                >
                  <span className="inline-block rounded bg-blue-50 px-1.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wide text-blue-700">
                    {step.tag}
                  </span>
                  <h4 className="mt-2 text-[13px] font-bold leading-snug text-slate-900">
                    {step.title}
                  </h4>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-500">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}