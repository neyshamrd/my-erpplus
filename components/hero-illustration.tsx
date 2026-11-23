"use client";

import React from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { siteConfig } from "@/lib/content-data";
import { useVideoModal } from "./video-modal";

type HeroIllustrationProps = {
  // Opsional: jika diisi, menggantikan pop up video bawaan
  onPlayVideo?: () => void;
};

// Posisi tiap kartu: kartu pertama di kiri atas, kartu kedua di kanan bawah (menimpa kartu pertama)
const cardPosition = ["left-0 top-0 z-0", "right-0 bottom-0 z-10"];

export function HeroIllustration({ onPlayVideo }: HeroIllustrationProps) {
  const { openVideo } = useVideoModal();
  const visual = siteConfig.heroVisual;

  return (
    // Ukuran: max-w-[760px] dan aspect-[100/80] (versi lebih besar: 840px dan 100/84)
    <div className="relative isolate mx-auto aspect-[100/80] w-full max-w-[760px]">
      {/* Cahaya biru lembut di belakang kartu (statis) */}
      <div
        aria-hidden="true"
        className="absolute inset-[6%] -z-10 rounded-full bg-blue-400/15 blur-3xl"
      />

      {/* Kartu screenshot antarmuka (lebar w-[86%], versi lebih besar: w-[90%]) */}
      {visual.images.map((image, index) => (
        <div
          key={image.id}
          className={`absolute w-[86%] rounded-2xl border border-slate-200/80 bg-white p-1.5 shadow-[0_18px_50px_-12px_rgba(15,23,42,0.18)] ${
            cardPosition[index] ?? ""
          }`}
        >
          <div className="relative aspect-[2/1] overflow-hidden rounded-xl bg-white">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 95vw"
              className="object-contain"
            />
          </div>
        </div>
      ))}

      {/* Tombol Putar Video di tengah, membuka pop up video */}
      <button
        type="button"
        onClick={onPlayVideo ?? openVideo}
        aria-label={visual.videoAria}
        className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2"
      >
        <span className="flex items-center gap-3 rounded-full bg-white py-2 pl-2 pr-5 shadow-xl shadow-slate-900/15 ring-1 ring-slate-900/5 transition-transform hover:scale-105 motion-reduce:transition-none">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600">
            <Play className="ml-0.5 h-4 w-4 fill-white text-white" />
          </span>
          <span className="flex flex-col text-left leading-tight">
            <span className="whitespace-nowrap text-[13px] font-bold text-slate-900">
              {visual.videoLabel}
            </span>
            <span className="whitespace-nowrap text-[11px] text-slate-500">
              {visual.videoSub}
            </span>
          </span>
        </span>
      </button>
    </div>
  );
}