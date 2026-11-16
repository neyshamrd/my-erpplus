"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/content-data";
import * as Lucide from "lucide-react";

/* -------------------------------------------------------------
   Helper: Color Mapper untuk Tailwind class (mencegah JIT purge)
   ------------------------------------------------------------- */
const getColorClasses = (colorName?: string) => {
  // Jika warna berupa kelas Tailwind langsung (misal: "text-orange-500")
  if (colorName?.startsWith("text-")) {
    return {
      bg: "bg-slate-50",
      text: colorName,
    };
  }

  // Pemetaan warna soft background & icon text
  switch (colorName) {
    case "emerald":
      return { bg: "bg-emerald-50", text: "text-emerald-600" };
    case "indigo":
      return { bg: "bg-indigo-50", text: "text-indigo-600" };
    case "amber":
      return { bg: "bg-amber-50", text: "text-amber-600" };
    case "cyan":
      return { bg: "bg-cyan-50", text: "text-cyan-600" };
    case "purple":
      return { bg: "bg-purple-50", text: "text-purple-600" };
    case "blue":
      return { bg: "bg-blue-50", text: "text-blue-600" };
    case "teal":
      return { bg: "bg-teal-50", text: "text-teal-600" };
    case "rose":
      return { bg: "bg-rose-50", text: "text-rose-600" };
    default:
      return { bg: "bg-slate-100", text: "text-slate-600" };
  }
};

/* -------------------------------------------------------------
   Utility: Render Lucide Icon by string name
   ------------------------------------------------------------- */
const Icon = ({ name, className }: { name: string; className?: string }) => {
  // @ts-ignore – dynamic access
  const Comp = (Lucide as any)[name];
  return Comp ? <Comp className={className} /> : <Lucide.Box className={className} />;
};

/* -------------------------------------------------------------
   Navbar Component
   ------------------------------------------------------------- */
export function Navbar() {
  // -1 = no dropdown, >=0 = index of opened dropdown, -2 = mobile sheet open
  const [open, setOpen] = useState<number>(-1);

  const toggleDropdown = (idx: number) => setOpen(open === idx ? -1 : idx);
  const closeAll = () => setOpen(-1);

  /* ---------------------------------------------------------
     Logo MYERP+
   --------------------------------------------------------- */
  const BrandLogo = (
    <Link href="/" className="flex items-center gap-0.5 group">
      <span className="text-2xl font-black tracking-tight text-slate-900">
        {siteConfig.nav.logo.text}
      </span>
      {/* Red circle '+' badge */}
      <div className="relative ml-0.5 flex items-center justify-center w-6 h-6 rounded-full bg-red-600 text-white font-bold text-sm shadow-sm transition-transform group-hover:scale-105">
        <span>{siteConfig.nav.logo.tag}</span>
      </div>
    </Link>
  );

  /* ---------------------------------------------------------
     Desktop Navigation & Dropdowns
   --------------------------------------------------------- */
  const desktopNav = (
    <ul className="hidden lg:flex items-center gap-1 xl:gap-2">
      {siteConfig.nav.mainNav.map((item, idx) => {
        const hasDropdown = Array.isArray(item.items) && item.items.length > 0;
        const isOpen = open === idx;

        return (
          <li
            key={item.title}
            className="relative"
            onMouseEnter={() => hasDropdown && setOpen(idx)}
            onMouseLeave={() => hasDropdown && setOpen(-1)}
          >
            {/* Main Link / Trigger */}
            {hasDropdown ? (
              <button
                type="button"
                onClick={() => toggleDropdown(idx)}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-150 ${
                  isOpen
                    ? "bg-slate-100/80 text-slate-900"
                    : "text-slate-700 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                <span>{item.title}</span>
                <Lucide.ChevronDown
                  className={`h-4 w-4 text-slate-400 transition-transform duration-200 ${
                    isOpen ? "rotate-180 text-slate-700" : ""
                  }`}
                />
              </button>
            ) : (
              <Link
                href={item.href || "#"}
                className="block px-3.5 py-2 rounded-xl text-sm font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-all duration-150"
              >
                {item.title}
              </Link>
            )}

            {/* Dropdown Menu Box */}
            {hasDropdown && (
              <div
                className={`absolute left-0 top-full pt-2 z-30 transition-all duration-200 origin-top-left ${
                  isOpen
                    ? "opacity-100 scale-100 pointer-events-auto translate-y-0"
                    : "opacity-0 scale-95 pointer-events-none -translate-y-2"
                }`}
              >
                <div
                  className={`bg-white shadow-2xl shadow-slate-900/10 rounded-2xl border border-slate-100 p-5 ${
                    item.sectionTitle ? "w-[560px]" : item.items!.length > 3 ? "w-[620px]" : "w-[440px]"
                  }`}
                  role="menu"
                  aria-label={item.title}
                >
                  {/* Optional Section Title (misal: "STUDI KASUS 11 SEKTOR INDUSTRI") */}
                  {item.sectionTitle && (
                    <div className="text-[11px] font-bold tracking-wider text-slate-400 uppercase mb-3 px-2">
                      {item.sectionTitle}
                    </div>
                  )}

                  {/* Grid Layout untuk Item Dropdown */}
                  <div
                    className={`grid gap-2 ${
                      item.sectionTitle
                        ? "grid-cols-2"
                        : item.items!.length > 3
                        ? "grid-cols-2"
                        : "grid-cols-1"
                    }`}
                  >
                    {item.items!.map((sub) => {
                      const colors = getColorClasses(sub.color);

                      return (
                        <Link
                          key={sub.title}
                          href={sub.href}
                          onClick={closeAll}
                          className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50/80 transition-all duration-150"
                        >
                          {/* Icon Container */}
                          <div
                            className={`flex items-center justify-center shrink-0 h-9 w-9 rounded-xl ${colors.bg} ${colors.text} transition-transform duration-150 group-hover:scale-105`}
                          >
                            <Icon name={sub.iconName} className="h-4 w-4 stroke-[2.2]" />
                          </div>

                          {/* Content */}
                          <div className="flex flex-col pt-0.5">
                            <span className="text-[13px] font-bold text-slate-800 leading-snug group-hover:text-blue-600 transition-colors">
                              {sub.title}
                            </span>
                            {'description' in sub && sub.description && (
                              <span className="mt-0.5 text-xs text-slate-500 leading-relaxed line-clamp-2">
                                {sub.description}
                              </span>
                            )}
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );

  /* ---------------------------------------------------------
     Mobile Navigation Sheet
   --------------------------------------------------------- */
  const mobileMenu = (
    <div
      className={`fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 transition-opacity duration-300 ${
        open === -2 ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      onClick={closeAll}
    >
      <aside
        className={`fixed inset-y-0 right-0 w-80 bg-white p-6 overflow-y-auto shadow-2xl transition-transform duration-300 ease-out ${
          open === -2 ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Mobile Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
          {BrandLogo}
          <button
            onClick={closeAll}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
          >
            <Lucide.X className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Menu List */}
        <ul className="flex flex-col gap-2">
          {siteConfig.nav.mainNav.map((item, idx) => {
            const hasDropdown = Array.isArray(item.items) && item.items.length > 0;
            const isOpen = open === idx;

            return (
              <li key={item.title} className="border-b border-slate-50 pb-2">
                {hasDropdown ? (
                  <>
                    <button
                      type="button"
                      onClick={() => toggleDropdown(idx)}
                      className="w-full flex justify-between items-center py-2 text-sm font-bold text-slate-800"
                    >
                      <span>{item.title}</span>
                      <Lucide.ChevronDown
                        className={`h-4 w-4 text-slate-400 transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Submenu Items */}
                    {isOpen && (
                      <div className="mt-1 ml-2 space-y-1 pl-2 border-l-2 border-slate-100">
                        {item.items!.map((sub) => {
                          const colors = getColorClasses(sub.color);
                          return (
                            <Link
                              key={sub.title}
                              href={sub.href}
                              onClick={closeAll}
                              className="flex items-center gap-2.5 p-2 rounded-lg text-xs font-medium text-slate-700 hover:bg-slate-50"
                            >
                              <div
                                className={`flex items-center justify-center h-6 w-6 rounded-md ${colors.bg} ${colors.text}`}
                              >
                                <Icon name={sub.iconName} className="h-3.5 w-3.5" />
                              </div>
                              <span>{sub.title}</span>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href || "#"}
                    onClick={closeAll}
                    className="block py-2 text-sm font-bold text-slate-800 hover:text-blue-600"
                  >
                    {item.title}
                  </Link>
                )}
              </li>
            );
          })}

          {/* CTA Mobile Button */}
          <li className="pt-4">
            <Link
              href={siteConfig.nav.ctaButton.href}
              onClick={closeAll}
              className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-3 rounded-xl shadow-lg shadow-blue-500/20 transition"
            >
              <span>{siteConfig.nav.ctaButton.text}</span>
              <Lucide.ArrowRight className="w-4 h-4" />
            </Link>
          </li>
        </ul>
      </aside>
    </div>
  );

  return (
    <nav className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3.5">
        {/* Left: Brand Logo */}
        {BrandLogo}

        {/* Center: Desktop Navigation */}
        {desktopNav}

        {/* Right: CTA Button */}
        <div className="hidden lg:flex items-center">
          <Link
            href={siteConfig.nav.ctaButton.href}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-md shadow-blue-500/20 hover:shadow-blue-500/30 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>{siteConfig.nav.ctaButton.text}</span>
            <Lucide.ArrowRight className="h-4 w-4 stroke-[2.5]" />
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="lg:hidden flex items-center justify-center p-2 rounded-xl text-slate-700 hover:bg-slate-100"
          onClick={() => setOpen(open === -2 ? -1 : -2)}
          aria-label="Toggle menu"
        >
          <Lucide.Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Sheet Overlay */}
      {mobileMenu}
    </nav>
  );
}