import React from "react";
import type { Metadata } from "next";
import { AnnouncementBanner } from "@/components/announcement-banner";
import { Navbar } from "@/components/navbar";
import { ModulDetail } from "@/components/modul-detail";
import { Footer } from "@/components/footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { siteConfig } from "@/lib/content-data";

const detail = siteConfig.modulDetail.items.inventaris;

export const metadata: Metadata = {
  title: `${detail.title} | MyERP Plus`,
  description: detail.description,
};

export default function InventarisPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900 font-sans antialiased">
      <AnnouncementBanner />
      <Navbar />
      <div className="flex-1">
        <ModulDetail slug="inventaris" />
      </div>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
