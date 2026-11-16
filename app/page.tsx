import React from "react";
import { AnnouncementBanner } from "@/components/announcement-banner";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { TrustSection } from "@/components/trust-section";
import { TestimonialSection } from "@/components/testimonial-section";
import { FeaturesSection } from "@/components/features-section";
import { IndustrySolutions } from "@/components/industry-solutions";
import { FaqSection } from "@/components/faq-section";
import { CtaBanner } from "@/components/cta-banner";
import { Footer } from "@/components/footer";
import { ScrollingTrustBar } from "@/components/scrolling-trust-bar";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900 font-sans antialiased">
      {/* 1. Top Security & Official Partner Announcement Bar */}
      <AnnouncementBanner />

      {/* 2. Main Sticky Navigation Bar */}
      <Navbar />

      {/* 3. Hero Section (Split Screen: High-Converting Copy + Floating UI Mockups) */}
      <main className="flex-1">
        <HeroSection />

        {/* 4. Trust Bar / Enterprise Social Proof Section */}
        <TrustSection />

        {/* 5. Features Section (Fitur Lengkap MyERP Plus) */}
        <FeaturesSection />

        {/* 6. Solusi Berbagai Industri (Industry Solutions Section) */}
        <IndustrySolutions />
          {/* 7. Testimoni Klien Section */}
          <TestimonialSection />

        {/* 7. Pertanyaan yang Sering Diajukan (FAQ Section) */}
        <FaqSection />

        {/* 8. Pre-Footer High-Converting CTA Banner */}
        <CtaBanner />

        {/* 9. Dynamic Scroll-Triggered Full-Width Trust-Badge Banner */}
        <ScrollingTrustBar />
      </main>

      {/* 10. Comprehensive Footer with Multi-Column Nav, Offices, and Trust Badges */}
      <Footer />

      {/* 11. Persistent Floating WhatsApp Conversion Trigger */}
      <FloatingWhatsApp />
    </div>
  );
}
