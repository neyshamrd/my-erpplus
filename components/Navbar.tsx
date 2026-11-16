"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  Globe,
  Menu,
  X,
  Building2,
  ShieldCheck,
  Award,
  Wallet,
  Boxes,
  ShoppingCart,
  Factory,
  Layers,
  HelpCircle,
  Headphones,
  FileText,
} from "lucide-react";
import { MyErpPlusLogo } from "./BrandLogos";
import { buttonVariants } from "@/components/ui/button";

interface NavDropdownItem {
  title: string;
  icon: React.ElementType;
}

const perusahaanItems: NavDropdownItem[] = [
  {
    title: "Tentang MyERP Plus",
    icon: Building2,
  },
  {
    title: "Portofolio",
    icon: Award,
  },
];

const layananItems: NavDropdownItem[] = [
  {
    title: "ERP Keuangan",
    icon: Wallet,
  },
  {
    title: "ERP Dagang",
    icon: Boxes,
  },
  {
    title: "ERP Pabrik",
    icon: ShoppingCart,
  },
  {
    title: "Layanan Lainnya",
    icon: Layers,
  },
];

const supportItems: NavDropdownItem[] = [
  {
    title: "Tutorial",
    icon: HelpCircle,
  },
  {
    title: "FAQ",
    icon: Headphones,
  },
];

export function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState<"ID" | "EN">("ID");

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-100 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Left: Brand Logo & Navigation Links */}
        <div className="flex items-center gap-7 xl:gap-9">
          <Link href="/" className="hover:opacity-90 transition-opacity">
            <MyErpPlusLogo />
          </Link>

          {/* Desktop Navigation matching MyERP Plus: Beranda, Perusahaan, Layanan, Studi Kasus, Support, Trial, Kontak */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-6">
            
            {/* 1. Beranda */}
            <Link
              href="/"
              className="text-sm font-semibold text-blue-600 py-2 transition-colors"
            >
              Beranda
            </Link>

            {/* 2. Perusahaan (Dropdown) */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("perusahaan")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                type="button"
                className="flex items-center gap-1.5 text-sm font-medium text-slate-700 hover:text-blue-600 py-2 transition-colors cursor-pointer"
              >
                <span>Perusahaan</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    activeDropdown === "perusahaan" ? "rotate-180 text-blue-600" : "text-slate-400"
                  }`}
                />
              </button>

              {activeDropdown === "perusahaan" && (
                <div className="absolute top-full left-0 w-80 pt-2 shadow-2xl animate-in fade-in-50 zoom-in-95 duration-150">
                  <div className="bg-white rounded-xl border border-slate-100 p-2 shadow-lg ring-1 ring-black/5">
                    {perusahaanItems.map((item, idx) => (
                      <Link
                        key={idx}
                        href="#company"
                        className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-50 transition-colors group"
                      >
                        <div className="p-2 rounded-md bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                          <item.icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-slate-800 group-hover:text-blue-600">
                            {item.title}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 3. Layanan (Dropdown) */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("layanan")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                type="button"
                className="flex items-center gap-1.5 text-sm font-medium text-slate-700 hover:text-blue-600 py-2 transition-colors cursor-pointer"
              >
                <span>Layanan</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    activeDropdown === "layanan" ? "rotate-180 text-blue-600" : "text-slate-400"
                  }`}
                />
              </button>

              {activeDropdown === "layanan" && (
                <div className="absolute top-full -left-12 w-88 pt-2 shadow-2xl animate-in fade-in-50 zoom-in-95 duration-150">
                  <div className="bg-white rounded-xl border border-slate-100 p-2 shadow-lg ring-1 ring-black/5">
                    {layananItems.map((item, idx) => (
                      <Link
                        key={idx}
                        href="#services"
                        className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-50 transition-colors group"
                      >
                        <div className="p-2 rounded-md bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                          <item.icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-slate-800 group-hover:text-blue-600">
                            {item.title}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 4. Studi Kasus */}
            <Link
              href="#case-studies"
              className="text-sm font-medium text-slate-700 hover:text-blue-600 py-2 transition-colors"
            >
              Studi Kasus
            </Link>

            {/* 5. Support (Dropdown) */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("support")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                type="button"
                className="flex items-center gap-1.5 text-sm font-medium text-slate-700 hover:text-blue-600 py-2 transition-colors cursor-pointer"
              >
                <span>Support</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    activeDropdown === "support" ? "rotate-180 text-blue-600" : "text-slate-400"
                  }`}
                />
              </button>

              {activeDropdown === "support" && (
                <div className="absolute top-full left-0 w-80 pt-2 shadow-2xl animate-in fade-in-50 zoom-in-95 duration-150">
                  <div className="bg-white rounded-xl border border-slate-100 p-2 shadow-lg ring-1 ring-black/5">
                    {supportItems.map((item, idx) => (
                      <Link
                        key={idx}
                        href="#support"
                        className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-50 transition-colors group"
                      >
                        <div className="p-2 rounded-md bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                          <item.icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-slate-800 group-hover:text-blue-600">
                            {item.title}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 6. Trial */}
            <Link
              href="#trial"
              className="text-sm font-medium text-slate-700 hover:text-blue-600 py-2 transition-colors"
            >
              Trial
            </Link>

            {/* 7. Kontak */}
            <Link
              href="#contact"
              className="text-sm font-medium text-slate-700 hover:text-blue-600 py-2 transition-colors"
            >
              Kontak
            </Link>
          </nav>
        </div>

        {/* Right: Language Selector & Clean CTA Layout */}
        <div className="hidden lg:flex items-center gap-3.5 xl:gap-4">
          {/* Language Selector */}
          <button
            type="button"
            onClick={() => setCurrentLang(currentLang === "ID" ? "EN" : "ID")}
            className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-blue-600 px-2 py-1.5 rounded-md hover:bg-slate-100/60 transition-colors cursor-pointer"
            title="Ganti Bahasa"
          >
            <Globe className="w-3.5 h-3.5 text-slate-500" />
            <span>{currentLang}</span>
            <ChevronDown className="w-3 h-3 text-slate-400" />
          </button>

          {/* Secondary Action: Jadwalkan Demo */}
          <Link
            href="#demo"
            className={buttonVariants({
              variant: "outline",
              className:
                "border-slate-300 text-slate-800 hover:bg-slate-50 hover:border-slate-400 font-semibold text-sm px-4 h-10 rounded-lg transition-all",
            })}
          >
            Jadwalkan Demo
          </Link>

          {/* Primary Action: Coba Gratis */}
          <Link
            href="#trial"
            className={buttonVariants({
              className:
                "bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-5 h-10 rounded-lg shadow-sm hover:shadow transition-all",
            })}
          >
            Coba Gratis
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3 lg:hidden">
          <Link
            href="#trial"
            className={buttonVariants({
              size: "sm",
              className:
                "bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs px-3.5 h-8 rounded-md",
            })}
          >
            Coba Gratis
          </Link>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-blue-600 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-6 space-y-4 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-2.5 font-medium text-slate-700 text-sm">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg text-blue-600 font-semibold bg-blue-50/60"
            >
              Beranda
            </Link>
            <Link
              href="#company"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-slate-50 flex items-center justify-between"
            >
              <span>Perusahaan</span>
              <ChevronDown className="w-4 h-4 text-slate-400" />
            </Link>
            <Link
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-slate-50 flex items-center justify-between"
            >
              <span>Layanan</span>
              <ChevronDown className="w-4 h-4 text-slate-400" />
            </Link>
            <Link
              href="#case-studies"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-slate-50"
            >
              Studi Kasus
            </Link>
            <Link
              href="#support"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-slate-50 flex items-center justify-between"
            >
              <span>Support</span>
              <ChevronDown className="w-4 h-4 text-slate-400" />
            </Link>
            <Link
              href="#trial"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-slate-50"
            >
              Trial
            </Link>
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-slate-50"
            >
              Kontak
            </Link>
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-3">
            <div className="flex items-center justify-between px-3 py-1 text-sm text-slate-600">
              <span className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-slate-400" /> Bahasa
              </span>
              <span className="font-semibold text-slate-900">ID (Bahasa Indonesia)</span>
            </div>

            <Link
              href="#demo"
              onClick={() => setMobileMenuOpen(false)}
              className={buttonVariants({
                variant: "outline",
                className: "w-full border-slate-300 text-slate-800 hover:bg-slate-50 font-semibold justify-center",
              })}
            >
              Jadwalkan Demo
            </Link>

            <Link
              href="#trial"
              onClick={() => setMobileMenuOpen(false)}
              className={buttonVariants({
                className: "w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold justify-center",
              })}
            >
              Coba Gratis Sekarang
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
