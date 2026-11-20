import React, { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { StudiKasusDetail } from "@/components/studi-kasus-detail";
import { siteConfig } from "@/lib/content-data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

// Ringkasan data untuk judul dan deskripsi tab browser
const detailItems = siteConfig.studiKasusDetail.items as Record<
  string,
  { sectorName: string; description: string } | undefined
>;

// Daftar slug yang dibuat saat build (diambil dari kunci data)
export function generateStaticParams() {
  return Object.keys(detailItems).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const detail = detailItems[slug];

  if (!detail) return {};

  return {
    // "absolute" mengabaikan template di layout.tsx, jadi judul tidak pernah dobel
    title: { absolute: `${detail.sectorName} | MyERP Plus` },
    description: detail.description,
  };
}

// Komponen anak: satu-satunya bagian yang membaca params, dibungkus Suspense di bawah
async function StudiKasusContent({ params }: PageProps) {
  const { slug } = await params;

  // Slug yang tidak ada di data menampilkan halaman 404
  if (!detailItems[slug]) notFound();

  return <StudiKasusDetail slug={slug} />;
}

export default function StudiKasusPage({ params }: PageProps) {
  return (
    <Suspense
      fallback={<div className="min-h-[60vh] bg-[#f8fafc]" aria-hidden="true" />}
    >
      <StudiKasusContent params={params} />
    </Suspense>
  );
}