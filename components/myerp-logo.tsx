import React from "react";
import Image from "next/image";

type MyErpLogoProps = {
  // Atur ukuran lewat tinggi, lebar otomatis. Contoh: "h-7 w-auto"
  className?: string;
};

// Nama file logo di folder public. Jika logo diganti lagi, beri nama file baru
// (misalnya my-erp-logo-v3.png) lalu ubah di sini agar tidak terkena cache.
const LOGO_SRC = "/my-erp-logo-v2.png";

// Ukuran asli file logo (piksel), dipakai untuk menjaga rasio gambar.
const LOGO_WIDTH = 862;
const LOGO_HEIGHT = 115;

export function MyErpLogo({ className = "h-7 w-auto" }: MyErpLogoProps) {
  return (
    <Image
      src={LOGO_SRC}
      alt="MyERP Plus Logo"
      width={LOGO_WIDTH}
      height={LOGO_HEIGHT}
      priority
      className={`object-contain ${className}`}
    />
  );
}