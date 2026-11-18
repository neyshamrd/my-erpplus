import React from "react";
import type { Metadata } from "next";
import { AnnouncementBanner } from "@/components/announcement-banner";
import { Navbar } from "@/components/navbar";
import { SolusiDetail } from "@/components/solusi-detail";
import { Footer } from "@/components/footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { siteConfig } from "@/lib/content-data";

const detail = siteConfig.solusiDetail.items.manufaktur;

export const metadata: Metadata = {
  // "absolute" mengabaikan template di layout.tsx, jadi judul tidak pernah dobel
  title: { absolute: `${detail.title} | MyERP Plus` },
  description: detail.description,
};

export default function SolusiManufakturPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900 font-sans antialiased">
      <AnnouncementBanner />

      <Navbar />

      <div className="flex-1">
        <SolusiDetail slug="manufaktur" />
      </div>

      <Footer />

      <FloatingWhatsApp />
    </div>
  );
}