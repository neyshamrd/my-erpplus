"use client";

import { useState } from "react";
import Link from "next/link";
import { MyErpLogo } from "./myerp-logo";
import { siteConfig } from "@/lib/content-data";
import * as Lucide from "lucide-react";
import { useDemoModal } from "./demo-modal";

// Helper warna agar class Tailwind tidak terhapus saat build
const getColorClasses = (colorName?: string) => {
  if (colorName?.startsWith("text-")) {
    return {
      bg: "bg-slate-50",
      text: colorName,
    };
  }

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

// Render icon Lucide berdasarkan nama string
const Icon = ({ name, className }: { name: string; className?: string }) => {
  // @ts-ignore
  const Comp = (Lucide as any)[name];
  return Comp ? <Comp className={className} /> : <Lucide.Box className={className} />;
};

export function Navbar() {
  // -1 = semua tertutup, >=0 = dropdown desktop terbuka, -2 = menu mobile terbuka
  const [open, setOpen] = useState<number>(-1);
  const { openDemo } = useDemoModal();

  const toggleDropdown = (idx: number) => setOpen(open === idx ? -1 : idx);
  const closeAll = () => setOpen(-1);
  const isMobileOpen = open === -2;

  // Logo SVG, ukuran lebih besar dari mockup
  const BrandLogo = (
    <Link href="/" onClick={closeAll} className="flex items-center group shrink-0">
      <MyErpLogo className="h-9 sm:h-11 lg:h-12 w-auto transition-transform group-hover:scale-[1.02]" />
    </Link>
  );

  // Navigasi desktop (tampil mulai lg)
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
            {hasDropdown ? (
              <button
                type="button"
                onClick={() => toggleDropdown(idx)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-semibold whitespace-nowrap transition-all duration-150 ${
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
                className="block px-3 py-2 rounded-xl text-sm font-semibold whitespace-nowrap text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-all duration-150"
              >
                {item.title}
              </Link>
            )}

            {hasDropdown && (
              <div
                className={`absolute left-0 top-full pt-2 z-35 transition-all duration-200 origin-top-left ${
                  isOpen
                    ? "opacity-100 scale-100 pointer-events-auto translate-y-0"
                    : "opacity-0 scale-95 pointer-events-none -translate-y-2"
                }`}
              >
                <div
                  className={`bg-white shadow-2xl shadow-slate-900/10 rounded-2xl border border-slate-100 p-3.5 ${
                    item.sectionTitle
                      ? "w-[680px]" // ukuran dropdown menu
                      : item.items!.length > 3
                      ? "w-[700px]"
                      : "w-[460px]"
                  }`}
                  role="menu"
                  aria-label={item.title}
                >
                  {item.sectionTitle && (
                    <div className="text-[10px] font-bold tracking-wider text-slate-400 uppercase mb-2 px-2">
                      {item.sectionTitle}
                    </div>
                  )}

                  <div
                    className={`grid gap-1 ${
                      item.sectionTitle
                        ? "grid-flow-col grid-rows-6 grid-cols-2"
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
                          className="group flex items-center gap-2 p-1.5 rounded-lg hover:bg-slate-50 transition-all duration-150"
                        >
                          <div
                            className={`flex items-center justify-center shrink-0 h-6 w-6 rounded-md ${colors.bg} ${colors.text} transition-transform duration-150 group-hover:scale-105`}
                          >
                            <Icon name={sub.iconName} className="h-3.5 w-3.5 stroke-[2.2]" />
                          </div>

                          <div className="flex flex-col min-w-0 flex-1">
                            <span className="text-[11.5px] font-semibold text-slate-700 truncate group-hover:text-blue-600 transition-colors">
                              {sub.title}
                            </span>
                            {"description" in sub && sub.description && (
                              <span className="text-[10.5px] text-slate-400 truncate">
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

  // Menu mobile: panel dropdown di bawah navbar, semua section langsung terlihat
  const mobileMenu = (
    <div
      className={`lg:hidden absolute left-0 right-0 top-full bg-white border-b border-slate-200 shadow-xl overflow-y-auto transition-all duration-200 ${
        isMobileOpen
          ? "opacity-100 visible max-h-[calc(100dvh-5rem)]"
          : "opacity-0 invisible max-h-0"
      }`}
    >
      <div className="max-w-[1480px] mx-auto px-5 sm:px-6 py-4">
        {siteConfig.nav.mainNav.map((item) => {
          const hasDropdown = Array.isArray(item.items) && item.items.length > 0;

          if (!hasDropdown) {
            return (
              <div key={item.title} className="py-3">
                <Link
                  href={item.href || "#"}
                  onClick={closeAll}
                  className="block text-base font-semibold text-slate-800 hover:text-blue-600 transition-colors"
                >
                  {item.title}
                </Link>
              </div>
            );
          }

          return (
            <div key={item.title} className="py-3 border-b border-slate-100">
              <div className="text-[11px] font-bold tracking-wider text-slate-400 uppercase mb-2">
                {item.sectionTitle || item.title}
              </div>
              <ul className="flex flex-col">
                {item.items!.map((sub) => (
                  <li key={sub.title}>
                    <Link
                      href={sub.href}
                      onClick={closeAll}
                      className="block py-2 pl-2 text-sm text-slate-700 hover:text-blue-600 transition-colors"
                    >
                      {sub.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <nav className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-[1480px] mx-auto flex items-center justify-between gap-3 px-4 sm:px-6 lg:px-8 py-3">
        {BrandLogo}

        {desktopNav}

        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            type="button"
            onClick={() => {
              closeAll();
              openDemo();
            }}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold whitespace-nowrap px-3.5 sm:px-4 py-2.5 rounded-xl shadow-md shadow-blue-500/20 hover:shadow-blue-500/30 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>{siteConfig.nav.ctaButton.text}</span>
            <Lucide.ArrowRight className="h-4 w-4 stroke-[2.5]" />
          </button>

          <button
            type="button"
            className="lg:hidden flex items-center justify-center h-10 w-10 rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 transition"
            onClick={() => setOpen(isMobileOpen ? -1 : -2)}
            aria-label="Toggle menu"
            aria-expanded={isMobileOpen}
          >
            {isMobileOpen ? <Lucide.X className="h-5 w-5" /> : <Lucide.Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileMenu}
    </nav>
  );
}