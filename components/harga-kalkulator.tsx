"use client";

import React, { useRef, useState } from "react";
import {
  Check,
  CheckCircle2,
  ChevronDown,
  MessageCircle,
  Minus,
  Plus,
} from "lucide-react";
import { siteConfig } from "@/lib/content-data";
import { useDemoModal } from "./demo-modal";

type Cycle = {
  id: string;
  label: string;
  badge: string;
  discount: number;
  summary: string;
  short: string;
};

type Plan = {
  id: string;
  tag: string;
  name: string;
  description: string;
  priceType: string;
  monthlyPrice: number;
  headline: string;
  priceNote: string;
  stepPrice: string;
  seatLabel: string;
  userBase: number | null;
  warehouseBase: number | null;
  moduleScope: string;
  features: string[];
  addOnsEnabled: boolean;
  addOnNote: string;
  pill: string;
  estimateNote: string;
  estimateValue: string;
  waButton: string;
  popular: boolean;
};

type WarehouseOption = { count: number; label: string; price: number };
type Extension = { id: string; name: string; price: number };

// Font monospace untuk angka (sama dengan testimoni.tsx)
const monoFont =
  "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace";
const monoStyle = { fontFamily: monoFont };

// Format rupiah dengan titik pemisah ribuan (hasil sama di server dan browser)
const formatRupiah = (value: number) =>
  "Rp " + Math.round(value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

export function HargaKalkulator() {
  const { openDemo } = useDemoModal();
  const data = siteConfig.harga;
  const plans: Plan[] = data.plans;
  const cycles: Cycle[] = data.cycles;
  const warehouses: WarehouseOption[] = data.addOns.warehouses;
  const extensions: Extension[] = data.addOns.extensions;
  const userAddOn = data.addOns.user;
  const summaryText = data.summary;
  const faq = data.faq;

  const [planId, setPlanId] = useState<string>(data.defaultPlan);
  const [cycleId, setCycleId] = useState<string>(data.defaultCycle);
  const [extraUsers, setExtraUsers] = useState<number>(0);
  const [extraWarehouses, setExtraWarehouses] = useState<number>(0);
  const [selectedExt, setSelectedExt] = useState<string[]>([]);
  const calculatorRef = useRef<HTMLDivElement>(null);

  // Data turunan dari pilihan saat ini
  const plan = plans.find((p) => p.id === planId) ?? plans[0];
  const cycle = cycles.find((c) => c.id === cycleId) ?? cycles[0];
  const isPaid = plan.priceType === "paid";
  const addOnsOn = plan.addOnsEnabled;

  // Harga bulanan paket setelah diskon siklus
  const priceFor = (p: Plan) => Math.round(p.monthlyPrice * (1 - cycle.discount));
  const packagePrice = isPaid ? priceFor(plan) : 0;

  // Add-on hanya dihitung untuk edisi yang mendukung (pilihan tetap tersimpan)
  const usersExtra = addOnsOn ? extraUsers : 0;
  const warehouseExtra = addOnsOn ? extraWarehouses : 0;
  const activeExt = addOnsOn
    ? extensions.filter((e) => selectedExt.includes(e.id))
    : [];

  const userCost = usersExtra * userAddOn.price;
  const warehouseCost =
    warehouses.find((w) => w.count === warehouseExtra)?.price ?? 0;
  const extCost = activeExt.reduce((sum, e) => sum + e.price, 0);
  const addOnTotal = userCost + warehouseCost + extCost;
  const total = packagePrice + addOnTotal;

  // Label kapasitas di ringkasan
  const totalUsersLabel =
    plan.userBase === null ? "Unlimited" : `${plan.userBase + usersExtra} Pengguna`;
  const warehouseLabel =
    plan.warehouseBase === null
      ? warehouseExtra > 0
        ? `Multi-Gudang +${warehouseExtra}`
        : "Multi-Gudang"
      : `${plan.warehouseBase + warehouseExtra} Lokasi`;

  // Link WhatsApp membawa seluruh hasil perhitungan
  let waText: string;
  if (plan.priceType === "free") {
    waText = `Halo PT You profit Indonesia, saya ingin mencoba ${plan.name} MyERP Plus (14 hari). Mohon informasi akses dan panduan awalnya.`;
  } else if (plan.priceType === "custom") {
    waText = `Halo PT You profit Indonesia, saya tertarik dengan paket ${plan.name} MyERP Plus. Mohon dijadwalkan konsultasi untuk kebutuhan perusahaan kami.`;
  } else {
    const lines = [
      "Halo PT You profit Indonesia, saya tertarik dengan paket MyERP Plus:",
      `- Edisi: ${plan.name}`,
      `- Siklus: ${cycle.id}`,
      `- Extra User: +${usersExtra}`,
      `- Extra Gudang: +${warehouseExtra}`,
    ];
    if (activeExt.length > 0) {
      lines.push(`- Modul Ekstensi: ${activeExt.map((e) => e.name).join(", ")}`);
    }
    lines.push(`- Estimasi: ${formatRupiah(total)} per bulan`);
    lines.push("Mohon informasi penawaran resminya.");
    waText = lines.join("\n");
  }
  const waParams = new URLSearchParams({
    phone: data.whatsapp,
    text: waText,
    type: "phone_number",
    app_absent: "0",
  });
  const waUrl = `https://api.whatsapp.com/send/?${waParams.toString()}`;

  // Aksi
  const choosePlan = (id: string) => setPlanId(id);

  // Dari kartu perbandingan: pilih paket lalu gulir ke kalkulator
  const chooseAndScroll = (id: string) => {
    setPlanId(id);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    calculatorRef.current?.scrollIntoView({
      behavior: reduce ? "auto" : "smooth",
      block: "start",
    });
  };

  const toggleExt = (id: string) =>
    setSelectedExt((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );

  const resetAll = () => {
    setPlanId(data.defaultPlan);
    setCycleId(data.defaultCycle);
    setExtraUsers(0);
    setExtraWarehouses(0);
    setSelectedExt([]);
  };

  return (
    <>
      {/* Kalkulator */}
      <section className="w-full bg-[#f8fafc]">
        <div className="mx-auto w-full max-w-[1090px] px-4 pb-16 pt-12 sm:px-6 sm:pt-14 lg:px-8">
          {/* Judul */}
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-[10px] font-bold uppercase tracking-wide text-blue-600 sm:text-[11px]">
              {data.badge}
            </span>
            <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-[#0B132B] sm:text-4xl lg:text-[44px]">
              {data.title}
            </h1>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
              {data.subtitle}
            </p>
          </div>

          <div ref={calculatorRef} className="scroll-mt-28">
            {/* Pilihan siklus tagihan */}
            <div className="mt-8 flex flex-col items-center gap-2">
              <div
                role="group"
                aria-label="Siklus tagihan"
                className="inline-flex max-w-full flex-wrap items-center justify-center gap-1 rounded-2xl border border-slate-200 bg-white p-1"
              >
                {cycles.map((c) => {
                  const active = c.id === cycle.id;
                  return (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => setCycleId(c.id)}
                      disabled={!isPaid}
                      aria-pressed={active}
                      className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-semibold disabled:cursor-not-allowed disabled:opacity-60 ${
                        active
                          ? "bg-blue-600 text-white"
                          : "text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      <span>{c.label}</span>
                      {c.badge && (
                        <span
                          className={`rounded px-1.5 py-0.5 text-[9px] font-bold ${
                            active
                              ? "bg-white/20 text-white"
                              : "bg-emerald-100 text-emerald-700"
                          }`}
                        >
                          {c.badge}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
              {!isPaid && (
                <p className="text-[11px] text-slate-500">{data.cycleNote}</p>
              )}
            </div>

            <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_330px] lg:items-start">
              {/* Kolom kiri: langkah 1 dan 2 */}
              <div className="space-y-5">
                {/* Langkah 1: pilih edisi */}
                <div className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-6">
                  <div className="flex items-center gap-3">
                    <span className="rounded-md bg-blue-600 px-2 py-1 text-[10px] font-bold text-white">
                      {data.step1Badge}
                    </span>
                    <h2 className="text-base font-extrabold tracking-tight text-[#0B132B]">
                      {data.step1Title}
                    </h2>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {plans.map((p) => {
                      const selected = p.id === plan.id;
                      const priceText =
                        p.priceType === "paid"
                          ? formatRupiah(priceFor(p))
                          : p.stepPrice;
                      return (
                        <button
                          key={p.id}
                          type="button"
                          onClick={() => choosePlan(p.id)}
                          aria-pressed={selected}
                          className={`flex flex-col rounded-xl border p-3 text-left ${
                            selected
                              ? "border-blue-600 bg-blue-600 text-white shadow-lg shadow-blue-600/25"
                              : "border-slate-200 bg-white text-slate-900 hover:border-blue-300"
                          }`}
                        >
                          <span
                            className={`text-[9px] font-bold uppercase tracking-wide ${
                              selected ? "text-blue-100" : "text-blue-600"
                            }`}
                          >
                            {p.tag}
                          </span>
                          <span className="mt-1 text-sm font-bold leading-tight">
                            {p.name}
                          </span>
                          <span
                            className={`mt-3 block border-t pt-2 ${
                              selected ? "border-white/20" : "border-slate-100"
                            }`}
                          >
                            <span
                              className="block text-xs font-bold"
                              style={monoStyle}
                            >
                              {priceText}
                            </span>
                            <span
                              className={`block text-[10px] ${
                                selected ? "text-blue-100" : "text-slate-400"
                              }`}
                            >
                              {p.seatLabel}
                            </span>
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Langkah 2: add-on */}
                <div className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-6">
                  <div className="flex items-center gap-3">
                    <span className="rounded-md bg-indigo-600 px-2 py-1 text-[10px] font-bold text-white">
                      {data.step2Badge}
                    </span>
                    <h2 className="text-base font-extrabold tracking-tight text-[#0B132B]">
                      {data.step2Title}
                    </h2>
                  </div>
                  <p className="mt-1.5 text-xs text-slate-500">
                    {data.step2Subtitle}
                  </p>

                  {!addOnsOn && (
                    <p className="mt-4 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-xs leading-relaxed text-amber-800">
                      {plan.addOnNote}
                    </p>
                  )}

                  <div className={`mt-4 space-y-3 ${addOnsOn ? "" : "opacity-50"}`}>
                    {/* 1. Tambah pengguna */}
                    <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-slate-50/60 p-4">
                      <div>
                        <p className="text-xs font-bold text-slate-900">
                          {userAddOn.title}
                        </p>
                        <p className="mt-0.5 text-[11px] text-slate-500">
                          {formatRupiah(userAddOn.price)} / user / bulan •{" "}
                          {userAddOn.hintSuffix}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => setExtraUsers((v) => Math.max(0, v - 1))}
                          disabled={!addOnsOn || extraUsers === 0}
                          aria-label="Kurangi pengguna"
                          className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span
                          className="min-w-[78px] rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-center text-xs font-bold text-blue-600"
                          style={monoStyle}
                          aria-live="polite"
                        >
                          +{usersExtra} User
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            setExtraUsers((v) => Math.min(userAddOn.max, v + 1))
                          }
                          disabled={!addOnsOn || extraUsers >= userAddOn.max}
                          aria-label="Tambah pengguna"
                          className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                    </div>

                    {/* 2. Ekspansi gudang */}
                    <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-4">
                      <p className="text-xs font-bold text-slate-900">
                        {data.addOns.warehouseTitle}
                      </p>
                      <p className="mt-0.5 text-[11px] text-slate-500">
                        {data.addOns.warehouseHint}
                      </p>
                      <div className="mt-3 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                        {warehouses.map((w) => {
                          const active = warehouseExtra === w.count;
                          return (
                            <button
                              key={w.count}
                              type="button"
                              onClick={() => setExtraWarehouses(w.count)}
                              disabled={!addOnsOn}
                              aria-pressed={active}
                              className={`rounded-xl border p-3 text-left disabled:cursor-not-allowed ${
                                active
                                  ? "border-blue-600 bg-blue-600 text-white"
                                  : "border-slate-200 bg-white text-slate-900 hover:border-blue-300"
                              }`}
                            >
                              <span className="block text-xs font-bold">
                                {w.label}
                              </span>
                              <span
                                className={`mt-0.5 block text-[10px] ${
                                  active ? "text-blue-100" : "text-slate-500"
                                }`}
                                style={monoStyle}
                              >
                                {w.price === 0
                                  ? data.addOns.warehouseIncluded
                                  : `${formatRupiah(w.price)}/bln`}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* 3. Modul ekstensi */}
                    <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-4">
                      <p className="text-xs font-bold text-slate-900">
                        {data.addOns.extensionTitle}
                      </p>
                      <p className="mt-0.5 text-[11px] text-slate-500">
                        {data.addOns.extensionHint}
                      </p>
                      <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
                        {extensions.map((ext) => {
                          const checked = addOnsOn && selectedExt.includes(ext.id);
                          return (
                            <label
                              key={ext.id}
                              className={`flex items-start gap-2.5 rounded-xl border p-3 ${
                                addOnsOn ? "cursor-pointer" : "cursor-not-allowed"
                              } ${
                                checked
                                  ? "border-blue-500 bg-blue-50/70"
                                  : "border-slate-200 bg-white"
                              }`}
                            >
                              <input
                                type="checkbox"
                                checked={checked}
                                disabled={!addOnsOn}
                                onChange={() => toggleExt(ext.id)}
                                className="mt-0.5 h-4 w-4 shrink-0 accent-blue-600"
                              />
                              <span className="flex flex-col">
                                <span className="text-xs font-semibold text-slate-900">
                                  {ext.name}
                                </span>
                                <span
                                  className="mt-0.5 text-[10px] text-blue-600"
                                  style={monoStyle}
                                >
                                  +{formatRupiah(ext.price)}/bln
                                </span>
                              </span>
                            </label>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Kolom kanan: ringkasan paket */}
              <aside
                aria-label={summaryText.label}
                className="rounded-3xl bg-[#0B132B] p-5 text-white shadow-xl shadow-slate-900/20 lg:sticky lg:top-28"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-wider text-blue-400">
                      {summaryText.label}
                    </p>
                    <p className="mt-1 text-lg font-extrabold leading-tight">
                      {plan.name}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={resetAll}
                    className="text-[11px] text-slate-300 underline underline-offset-2 hover:text-white"
                  >
                    {summaryText.reset}
                  </button>
                </div>

                <p className="mt-4 rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-[11px] text-slate-200">
                  {isPaid ? cycle.summary : plan.pill}
                </p>

                <div className="mt-3 grid grid-cols-2 gap-2.5">
                  <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2.5">
                    <p className="text-[9px] text-slate-400">
                      {summaryText.usersLabel}
                    </p>
                    <p
                      className="mt-1 text-xs font-bold"
                      style={monoStyle}
                      aria-live="polite"
                    >
                      {totalUsersLabel}
                    </p>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2.5">
                    <p className="text-[9px] text-slate-400">
                      {summaryText.warehouseLabel}
                    </p>
                    <p
                      className="mt-1 text-xs font-bold"
                      style={monoStyle}
                      aria-live="polite"
                    >
                      {warehouseLabel}
                    </p>
                  </div>
                </div>

                <dl className="mt-5 space-y-2 border-t border-white/10 pt-4 text-[11px]">
                  <div className="flex items-start justify-between gap-3">
                    <dt className="text-slate-400">{summaryText.scopeLabel}</dt>
                    <dd className="text-right font-bold">{plan.moduleScope}</dd>
                  </div>
                  <div className="flex items-start justify-between gap-3">
                    <dt className="text-slate-400">{summaryText.packageLabel}</dt>
                    <dd className="text-right font-bold" style={monoStyle}>
                      {isPaid ? formatRupiah(packagePrice) : plan.headline}
                    </dd>
                  </div>
                  <div className="flex items-start justify-between gap-3">
                    <dt className="text-slate-400">{summaryText.addOnLabel}</dt>
                    <dd
                      className="text-right font-bold text-emerald-400"
                      style={monoStyle}
                    >
                      {addOnsOn
                        ? formatRupiah(addOnTotal)
                        : summaryText.addOnUnavailable}
                    </dd>
                  </div>
                </dl>

                <div className="mt-5 border-t border-white/10 pt-4">
                  <p className="text-[10px] text-slate-400">
                    {summaryText.estimateLabel}
                  </p>
                  <p
                    className="mt-1 break-words text-3xl font-bold text-blue-400"
                    style={monoStyle}
                    aria-live="polite"
                  >
                    {isPaid ? formatRupiah(total) : plan.estimateValue}
                  </p>
                  <p className="mt-1.5 text-[10px] text-slate-400">
                    {isPaid
                      ? `${cycle.short} • ${plan.estimateNote}`
                      : plan.estimateNote}
                  </p>
                </div>

                <div className="mt-5 space-y-2.5">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 text-xs font-bold text-white hover:bg-emerald-700"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>{plan.waButton}</span>
                  </a>
                  <button
                    type="button"
                    onClick={openDemo}
                    className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-xs font-bold text-white hover:bg-white/10"
                  >
                    {summaryText.demoButton}
                  </button>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      {/* Perbandingan paket */}
      <section
        id="perbandingan"
        className="w-full border-t border-slate-100 bg-white py-14 sm:py-16"
      >
        <div className="mx-auto w-full max-w-[1480px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-[#0B132B] sm:text-3xl lg:text-4xl">
              {data.compareTitle}
            </h2>
            <p className="mt-3 text-sm text-slate-600 sm:text-base">
              {data.compareSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {plans.map((p) => {
              const selected = p.id === plan.id;
              const dark = p.popular;
              return (
                <div
                  key={p.id}
                  className={`flex flex-col rounded-3xl border p-6 ${
                    dark
                      ? "border-blue-500 bg-[#0B132B] text-white shadow-2xl shadow-blue-900/20"
                      : "border-slate-200 bg-white text-slate-900"
                  } ${selected ? "ring-2 ring-blue-500 ring-offset-2" : ""}`}
                >
                  <span
                    className={`inline-flex w-fit items-center rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wide ${
                      dark ? "bg-blue-600 text-white" : "bg-slate-100 text-blue-700"
                    }`}
                  >
                    {p.tag}
                  </span>
                  <h3 className="mt-4 text-xl font-extrabold tracking-tight">
                    {p.name}
                  </h3>
                  <p
                    className={`mt-2 min-h-[72px] text-xs leading-relaxed ${
                      dark ? "text-slate-300" : "text-slate-500"
                    }`}
                  >
                    {p.description}
                  </p>

                  <div
                    className={`mt-3 min-h-[104px] border-t pt-4 ${
                      dark ? "border-white/10" : "border-slate-100"
                    }`}
                  >
                    {p.priceType === "paid" ? (
                      <>
                        <p
                          className={`min-h-[16px] text-[11px] line-through ${
                            dark ? "text-slate-400" : "text-slate-400"
                          }`}
                          style={monoStyle}
                        >
                          {cycle.discount > 0
                            ? `${formatRupiah(p.monthlyPrice)}/bln`
                            : ""}
                        </p>
                        <p
                          className={`text-2xl font-bold ${
                            dark ? "text-blue-400" : "text-[#0B132B]"
                          }`}
                          style={monoStyle}
                        >
                          {formatRupiah(priceFor(p))}
                        </p>
                        <p
                          className={`mt-1 text-[11px] ${
                            dark ? "text-slate-400" : "text-slate-500"
                          }`}
                        >
                          {data.perMonth}
                        </p>
                      </>
                    ) : (
                      <>
                        <p className="min-h-[16px]" />
                        <p
                          className="text-2xl font-bold text-[#0B132B]"
                          style={monoStyle}
                        >
                          {p.headline}
                        </p>
                        <p className="mt-1 text-[11px] text-slate-500">
                          {p.priceNote}
                        </p>
                      </>
                    )}
                  </div>

                  <ul className="mt-4 flex-1 space-y-2.5">
                    {p.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <CheckCircle2
                          className={`mt-0.5 h-4 w-4 shrink-0 ${
                            dark ? "text-emerald-400" : "text-blue-600"
                          }`}
                        />
                        <span
                          className={`text-xs leading-snug ${
                            dark ? "text-slate-100" : "text-slate-700"
                          }`}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    onClick={() => chooseAndScroll(p.id)}
                    aria-pressed={selected}
                    className={`mt-6 inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-xs font-bold ${
                      dark
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "bg-slate-100 text-slate-900 hover:bg-slate-200"
                    }`}
                  >
                    {selected && <Check className="h-3.5 w-3.5" />}
                    <span>
                      {selected
                        ? `${data.chosenLabel}: ${p.name}`
                        : `${data.chooseLabel} ${p.name}`}
                    </span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        id="faq-harga"
        className="w-full border-t border-slate-100 bg-[#f8fafc] py-14 sm:py-16"
      >
        <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-[10px] font-bold uppercase tracking-wide text-blue-600 sm:text-[11px]">
              {faq.badge}
            </span>
            <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-[#0B132B] sm:text-3xl">
              {faq.title}
            </h2>
          </div>

          <div className="mt-8 space-y-3">
            {faq.items.map((item) => (
              <details
                key={item.question}
                className="group rounded-2xl border border-slate-200 bg-white px-5 py-4"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-bold text-slate-900 [&::-webkit-details-marker]:hidden">
                  <span>{item.question}</span>
                  <ChevronDown className="h-4 w-4 shrink-0 text-slate-400 group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}