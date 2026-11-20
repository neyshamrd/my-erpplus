import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { ModulDetail } from "@/components/modul-detail";
import { Footer } from "@/components/footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";

export const metadata: Metadata = {
  title: "Finansial & Akuntansi | MyERP Plus",
  description:
    "General Ledger otomatis, laporan keuangan real-time, dan kepatuhan pajak Indonesia dalam satu modul MyERP Plus.",
};

export default function FinansialPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900 font-sans antialiased">
      {/* Navbar, tetap sama */}
      <Navbar />

      {/* Isi halaman modul */}
      <div className="flex-1">
        <ModulDetail slug="finansial" />
      </div>

      {/* Footer, tetap sama */}
      <Footer />

      {/* Tombol WhatsApp dan back to top, tetap sama */}
      <FloatingWhatsApp />
    </div>
  );
}