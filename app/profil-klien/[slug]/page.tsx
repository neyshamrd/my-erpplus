import React, { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProfilKlienDetail } from "@/components/profil-klien-detail";
import { siteConfig } from "@/lib/content-data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

type ClientProfileSummary = {
  companyName: string;
  industry: string;
  summary: string;
};

const clientItems = siteConfig.clientProfiles.items as Record<
  string,
  ClientProfileSummary | undefined
>;

export function generateStaticParams() {
  return Object.keys(clientItems).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = clientItems[slug];

  if (!item) return {};

  return {
    title: {
      absolute: `${item.companyName} (${item.industry}) | Profil Klien MyERP Plus`,
    },
    description: item.summary,
  };
}

async function ProfilKlienContent({ params }: PageProps) {
  const { slug } = await params;

  if (!clientItems[slug]) notFound();

  return <ProfilKlienDetail slug={slug} />;
}

export default function ProfilKlienPage({ params }: PageProps) {
  return (
    <Suspense
      fallback={<div className="min-h-[60vh] bg-[#f8fafc]" aria-hidden="true" />}
    >
      <ProfilKlienContent params={params} />
    </Suspense>
  );
}