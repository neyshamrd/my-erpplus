import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { DemoModalProvider } from "@/components/demo-modal";
import { VideoModalProvider } from "@/components/video-modal";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Alamat dasar website untuk membuat link gambar pratinjau yang lengkap.
// Urutan: NEXT_PUBLIC_SITE_URL (jika diisi) -> alamat produksi Vercel -> localhost
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

const siteTitle = "MyERP Plus | Solusi ERP Terintegrasi untuk Manufaktur & Distribusi";
const siteDescription =
  "Solusi ERP cloud untuk bisnis, manufaktur, dan distributor di Indonesia.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "MyERP Plus",
    template: "%s - MyERP Plus",
  },
  description: siteDescription,
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "MyERP Plus",
    title: siteTitle,
    description: siteDescription,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${inter.variable} font-sans h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <DemoModalProvider>
          <VideoModalProvider>{children}</VideoModalProvider>
        </DemoModalProvider>
      </body>
    </html>
  );
}