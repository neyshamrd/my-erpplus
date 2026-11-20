import React from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";

export default function StudiKasusLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900 font-sans antialiased">
      <Navbar />

      <div className="flex-1">{children}</div>

      <Footer />

      <FloatingWhatsApp />
    </div>
  );
}