import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { HargaKalkulator } from "@/components/harga-kalkulator";
import { Footer } from "@/components/footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";

export const metadata: Metadata = {
  // "absolute" mengabaikan template di layout.tsx, jadi judul tidak pernah dobel
  title: { absolute: "Kalkulator Lisensi & Harga | MyERP Plus" },
  description:
    "Hitung estimasi biaya lisensi ERP MyERP Plus: pilih edisi paket, siklus berlangganan, serta tambahan pengguna, gudang, dan ekstensi modul.",
};

export default function HargaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900 font-sans antialiased">
      <Navbar />

      <main className="flex-1">
        <HargaKalkulator />
      </main>

      <Footer />

      <FloatingWhatsApp />
    </div>
  );
}