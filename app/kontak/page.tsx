import React from "react";
import type { Metadata } from "next";
import { AnnouncementBanner } from "@/components/announcement-banner";
import { Navbar } from "@/components/navbar";
import { KontakSection } from "@/components/kontak-section";
import { Footer } from "@/components/footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { siteConfig } from "@/lib/content-data";

export const metadata: Metadata = {
  // "absolute" mengabaikan template di layout.tsx, jadi judul tidak pernah dobel
  title: { absolute: "Hubungi Kami & Kunjungi Kantor | MyERP Plus" },
  description: siteConfig.kontak.subtitle,
};

export default function KontakPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900 font-sans antialiased">
      <AnnouncementBanner />

      <Navbar />

      <main className="flex-1">
        <KontakSection />
      </main>

      <Footer />

      <FloatingWhatsApp />
    </div>
  );
}
