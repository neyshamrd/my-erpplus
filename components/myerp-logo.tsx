import React, { useId } from "react";

type MyErpLogoProps = {
  // Atur ukuran lewat tinggi, lebar otomatis. Contoh: "h-9 w-auto"
  className?: string;
};

export function MyErpLogo({ className = "h-9 w-auto" }: MyErpLogoProps) {
  // ID unik per logo agar mask tidak bentrok saat logo dipakai di beberapa tempat
  const rawId = useId();
  const maskId = `myerp-cutout-${rawId.replace(/:/g, "")}`;

  return (
    <svg
      className={className}
      viewBox="0 0 430 82"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="MyERP Plus Logo"
    >
      {/* M (hitam) */}
      <path
        d="M12 72V16C12 12.5 16.2 10.8 18.6 13.3L42 38L65.4 13.3C67.8 10.8 72 12.5 72 16V72"
        stroke="#0B0F19"
        strokeWidth="11"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Y (hitam) */}
      <path
        d="M90 15L114 43M138 15L114 43M114 43V72"
        stroke="#0B0F19"
        strokeWidth="11"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* E (abu-abu) */}
      <path
        d="M214 14H162C158.7 14 156 16.7 156 20V66C156 69.3 158.7 72 162 72H214M156 43H206"
        stroke="#64686D"
        strokeWidth="11"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* R (abu-abu) */}
      <path
        d="M234 72V20C234 16.7 236.7 14 240 14H272C281.9 14 290 20.5 290 28.5C290 36.5 281.9 43 272 43H234M268 43L291 72"
        stroke="#64686D"
        strokeWidth="11"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* P (abu-abu) */}
      <path
        d="M310 72V20C310 16.7 312.7 14 316 14H348C357.9 14 366 20.7 366 29C366 37.3 357.9 44 348 44H310"
        stroke="#64686D"
        strokeWidth="11"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Lingkaran merah dengan tanda + putih (dilubangi lewat mask) */}
      <mask id={maskId}>
        <rect width="430" height="82" fill="white" />
        <rect x="394" y="10" width="9" height="62" fill="black" />
        <rect x="367" y="38.5" width="62" height="9" fill="black" />
      </mask>
      <circle cx="398.5" cy="43" r="30.5" fill="#FF0000" mask={`url(#${maskId})`} />
    </svg>
  );
}