import React from "react";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { TrustSection } from "@/components/trust-section";
import { WorkflowIntegritas } from "@/components/workflow-integritas";
import { ModulSection } from "@/components/modul";
import { IndustrySolutions } from "@/components/industry-solutions";
import { TestimoniSection } from "@/components/testimoni";
import { CtaBanner } from "@/components/cta-banner";
import { Footer } from "@/components/footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900 font-sans antialiased">

      {/* 2. Main Sticky Navigation Bar */}
      <Navbar />

      {/* 3. Hero Section (Split Screen: High-Converting Copy + Floating UI Mockups) */}
      <main className="flex-1">
        <HeroSection />

        {/* 4. Trust Bar / Enterprise Social Proof Section */}
        <TrustSection />

        {/* 5. Features Section (Fitur Lengkap MyERP Plus) */}
        <IndustrySolutions />

        {/* 6. Solusi Berbagai Industri (Industry Solutions Section) */}
        <ModulSection /> 
          {/* 7. Testimoni Klien Section */}
          <WorkflowIntegritas />

        {/* 7. Pertanyaan yang Sering Diajukan (FAQ Section) */}
        <TestimoniSection />

        {/* 8. Pre-Footer High-Converting CTA Banner */}
        <CtaBanner />

        {/* 9. Dynamic Scroll-Triggered Full-Width Trust-Badge Banner */}
      </main>

      {/* 10. Comprehensive Footer with Multi-Column Nav, Offices, and Trust Badges */}
      <Footer />

      {/* 11. Persistent Floating WhatsApp Conversion Trigger */}
      <FloatingWhatsApp />
    </div>
  );
}
