import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { DemoModalProvider } from "@/components/demo-modal";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "MyERP Plus",
    template: "%s - MyERP Plus",
  },
  description: "Solusi ERP cloud untuk bisnis, manufaktur, dan distributor di Indonesia.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${inter.variable} font-sans h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <DemoModalProvider>{children}</DemoModalProvider>
      </body>
    </html>
  );
}
