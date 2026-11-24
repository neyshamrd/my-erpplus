"use client";

import React, { useEffect, useRef, useState } from "react"; //update trus section
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, FileCheck2 } from "lucide-react";
import { siteConfig } from "@/lib/content-data";

type ClientPopupData = {
  reviewerName: string;
  reviewerRole: string;
  avatarSrc?: string;
  quote: string;
  ctaLabel?: string;
};

type Client = {
  id: string;
  slug: string;
  name: string;
  industry: string;
  logoSrc?: string;
  popup: ClientPopupData;
};

type ActivePopupState = {
  client: Client;
  rect: DOMRect;
  pinnedByClick: boolean;
};

const { title: trustTitle, notes: trustNotes } = siteConfig.trust;
const clients: Client[] = siteConfig.trust.clients as Client[];

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

function ClientMark({ id }: { id: string }) {
  switch (id) {
    case "kawata":
      return (
        <svg viewBox="0 0 120 36" className="h-8 w-auto" aria-hidden="true">
          <path d="M4 30 L16 6 L22 6 L10 30 Z" fill="#DC2626" />
          <path d="M14 30 L26 6 L32 6 L20 30 Z" fill="#DC2626" opacity="0.85" />
          <text
            x="34"
            y="20"
            fontSize="15"
            fontWeight="800"
            fontStyle="italic"
            fill="#1D4ED8"
            fontFamily="Arial, sans-serif"
          >
            KAWATA
          </text>
          <rect x="34" y="25" width="80" height="2" fill="#1D4ED8" />
        </svg>
      );
    case "topla":
      return (
        <svg viewBox="0 0 40 40" className="h-9 w-9" aria-hidden="true">
          <circle cx="20" cy="20" r="18" fill="#1D4ED8" />
          <circle cx="20" cy="20" r="14" fill="none" stroke="#FFFFFF" strokeWidth="1.5" />
          <text
            x="20"
            y="27"
            textAnchor="middle"
            fontSize="20"
            fontWeight="800"
            fill="#FFFFFF"
            fontFamily="Arial, sans-serif"
          >
            P
          </text>
        </svg>
      );
    case "ikuyo":
      return (
        <svg viewBox="0 0 48 32" className="h-7 w-auto" aria-hidden="true">
          <ellipse
            cx="24"
            cy="16"
            rx="18"
            ry="11"
            fill="#2563EB"
            transform="rotate(-20 24 16)"
          />
          <ellipse
            cx="26"
            cy="15"
            rx="8"
            ry="4"
            fill="#FFFFFF"
            transform="rotate(-20 26 15)"
          />
          <circle cx="14" cy="22" r="3" fill="#0EA5E9" />
        </svg>
      );
    case "motasa":
      return (
        <svg viewBox="0 0 40 40" className="h-9 w-9" aria-hidden="true">
          <path d="M20 4 C32 8 36 20 20 36 C4 20 8 8 20 4 Z" fill="#16A34A" />
          <path d="M20 10 L20 30" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
          <path
            d="M20 18 L14 13 M20 23 L26 18"
            stroke="#FFFFFF"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case "narumi":
      return (
        <svg viewBox="0 0 90 36" className="h-8 w-auto" aria-hidden="true">
          <circle cx="16" cy="18" r="12" fill="none" stroke="#B91C1C" strokeWidth="3" />
          <circle cx="16" cy="18" r="4" fill="#B91C1C" />
          <text
            x="34"
            y="25"
            fontSize="20"
            fontWeight="800"
            fill="#0F172A"
            fontFamily="Arial, sans-serif"
          >
            NIM
          </text>
        </svg>
      );
    case "pci":
      return (
        <svg viewBox="0 0 40 40" className="h-9 w-9" aria-hidden="true">
          <defs>
            <linearGradient id="pciGold" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#D6B28F" />
              <stop offset="100%" stopColor="#A9794F" />
            </linearGradient>
          </defs>
          <rect x="2" y="2" width="36" height="36" rx="2" fill="url(#pciGold)" />
          <rect x="6" y="6" width="28" height="28" fill="none" stroke="#F5E6D6" strokeWidth="1.5" />
          <text
            x="20"
            y="26"
            textAnchor="middle"
            fontSize="14"
            fontWeight="700"
            fill="#FFF7ED"
            fontFamily="Georgia, serif"
          >
            PCI
          </text>
        </svg>
      );
    case "ujs":
      return (
        <svg viewBox="0 0 40 40" className="h-9 w-9" aria-hidden="true">
          <circle cx="20" cy="20" r="18" fill="#FFFFFF" stroke="#1F2937" strokeWidth="2" />
          <path d="M20 6 L34 20 L20 34 L6 20 Z" fill="#DC2626" />
          <path d="M20 12 L28 20 L20 28 L12 20 Z" fill="#FFFFFF" />
          <path d="M20 16 L24 20 L20 24 L16 20 Z" fill="#DC2626" />
        </svg>
      );
    case "npt":
      return (
        <svg viewBox="0 0 90 40" className="h-8 w-auto" aria-hidden="true">
          {["N", "P", "T"].map((letter, i) => (
            <g key={letter}>
              <rect
                x={4 + i * 28}
                y="4"
                width="24"
                height="24"
                fill="#FFFFFF"
                stroke="#0F172A"
                strokeWidth="2"
              />
              <text
                x={16 + i * 28}
                y="23"
                textAnchor="middle"
                fontSize="18"
                fontWeight="800"
                fill="#DC2626"
                fontFamily="Georgia, serif"
              >
                {letter}
              </text>
            </g>
          ))}
          <text
            x="45"
            y="37"
            textAnchor="middle"
            fontSize="6"
            fontWeight="700"
            fill="#0F172A"
            fontFamily="Arial, sans-serif"
          >
            EKSPEDISI DARAT
          </text>
        </svg>
      );
    default:
      return null;
  }
}

function ClientPopupCard({
  active,
  onMouseEnter,
  onMouseLeave,
  onClose,
}: {
  active: ActivePopupState;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClose: () => void;
}) {
  const cardWidth = 320;
  const margin = 12;
  const viewportW = typeof window !== "undefined" ? window.innerWidth : 1200;
  const viewportH = typeof window !== "undefined" ? window.innerHeight : 800;

  const centerX = active.rect.left + active.rect.width / 2;
  const left = Math.min(
    Math.max(margin, centerX - cardWidth / 2),
    viewportW - cardWidth - margin
  );

  const estimatedHeight = 250;
  const showAbove = active.rect.top > estimatedHeight + 16;
  const top = showAbove
    ? Math.max(margin, active.rect.top - estimatedHeight - 10)
    : Math.min(viewportH - estimatedHeight - margin, active.rect.bottom + 10);

  return (
    <div
      role="dialog"
      aria-label={`Review ${active.client.name}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{ width: cardWidth, left, top }}
      className="myerp-popup-enter fixed z-50 rounded-2xl border border-slate-200/90 bg-white p-5 shadow-[0_20px_50px_rgba(15,23,42,0.16)]"
    >
      <div className="flex items-start gap-3">
        {active.client.popup.avatarSrc ? (
          <Image
            src={active.client.popup.avatarSrc}
            alt={active.client.popup.reviewerName}
            width={44}
            height={44}
            className="h-11 w-11 shrink-0 rounded-full object-cover ring-2 ring-slate-100"
          />
        ) : (
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-50 text-xs font-extrabold text-blue-700 ring-1 ring-blue-200">
            {getInitials(active.client.popup.reviewerName)}
          </div>
        )}

        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-bold text-slate-900">
            {active.client.popup.reviewerName}
          </p>
          <p className="mt-0.5 line-clamp-2 text-[11px] leading-snug text-slate-500">
            {active.client.popup.reviewerRole}
          </p>
        </div>
      </div>

      <blockquote className="mt-3.5 text-xs leading-relaxed text-slate-700">
        &ldquo;{active.client.popup.quote}&rdquo;
      </blockquote>

      <div className="mt-4 border-t border-slate-100 pt-3">
        <Link
          href={`/profil-klien/${active.client.slug}`}
          onClick={onClose}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 underline decoration-slate-400 underline-offset-4 transition-colors hover:text-blue-600 hover:decoration-blue-600"
        >
          <span>{active.client.popup.ctaLabel ?? "Baca profil & studi kasus"}</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
}

function ClientCard({
  client,
  isActive,
  onTriggerEnter,
  onTriggerLeave,
  onTriggerClick,
}: {
  client: Client;
  isActive: boolean;
  onTriggerEnter: (el: HTMLDivElement) => void;
  onTriggerLeave: () => void;
  onTriggerClick: (el: HTMLDivElement) => void;
}) {
  const cardRef = useRef<HTMLDivElement | null>(null);

  return (
    <div
      ref={cardRef}
      role="button"
      tabIndex={0}
      aria-expanded={isActive}
      onMouseEnter={() => cardRef.current && onTriggerEnter(cardRef.current)}
      onMouseLeave={onTriggerLeave}
      onClick={() => cardRef.current && onTriggerClick(cardRef.current)}
      onKeyDown={(e) => {
        if ((e.key === "Enter" || e.key === " ") && cardRef.current) {
          e.preventDefault();
          onTriggerClick(cardRef.current);
        }
      }}
      className={`group flex h-[116px] w-[208px] shrink-0 cursor-pointer flex-col items-center justify-center gap-1.5 rounded-2xl border bg-white px-3 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/40 ${
        isActive
          ? "-translate-y-0.5 border-blue-300 shadow-md"
          : "border-slate-200 shadow-[0_1px_4px_rgba(15,23,42,0.04)] hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
      }`}
    >
      <div className="flex h-9 items-center justify-center">
        {client.logoSrc ? (
          <Image
            src={client.logoSrc}
            alt={client.name}
            width={120}
            height={36}
            className="h-9 w-auto object-contain"
          />
        ) : (
          <ClientMark id={client.id} />
        )}
      </div>

      <span className="w-full truncate text-center text-[11px] font-semibold text-slate-800">
        {client.name}
      </span>

      {/* Bidang industri perusahaan tepat di bawah nama */}
      <span className="inline-flex max-w-full items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-medium text-slate-600 transition-colors group-hover:bg-blue-50 group-hover:text-blue-700">
        <span className="truncate">{client.industry}</span>
      </span>
    </div>
  );
}

export function TrustSection() {
  const [mounted, setMounted] = useState(false);
  const [activePopup, setActivePopup] = useState<ActivePopupState | null>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setMounted(true);
    return () => {
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    if (!activePopup) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActivePopup(null);
    };
    const handleScroll = () => {
      if (!activePopup.pinnedByClick) setActivePopup(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activePopup]);

  const cancelClose = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const scheduleClose = () => {
    cancelClose();
    closeTimeoutRef.current = setTimeout(() => {
      setActivePopup((prev) => (prev?.pinnedByClick ? prev : null));
    }, 160);
  };

  const handleCardEnter = (client: Client, el: HTMLDivElement) => {
    cancelClose();
    const rect = el.getBoundingClientRect();
    setActivePopup((prev) =>
      prev?.pinnedByClick && prev.client.id !== client.id
        ? prev
        : { client, rect, pinnedByClick: prev?.pinnedByClick ?? false }
    );
  };

  const handleCardClick = (client: Client, el: HTMLDivElement) => {
    cancelClose();
    const rect = el.getBoundingClientRect();
    setActivePopup((prev) => {
      if (prev && prev.client.id === client.id && prev.pinnedByClick) {
        return null;
      }
      return { client, rect, pinnedByClick: true };
    });
  };

  const isMarqueePaused = Boolean(activePopup);

  return (
    <section
      id="trust"
      className="w-full select-none overflow-hidden bg-white py-10 sm:py-12"
    >
      <style>{`
        @keyframes myerp-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-33.3333%); }
        }
        @keyframes myerp-popup-in {
          from {
            opacity: 0;
            transform: translateY(8px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .myerp-marquee-track {
          animation: myerp-marquee 40s linear infinite;
          will-change: transform;
        }
        .myerp-marquee-wrap:hover .myerp-marquee-track,
        .myerp-marquee-track.is-paused {
          animation-play-state: paused;
        }
        .myerp-popup-enter {
          animation: myerp-popup-in 180ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @media (prefers-reduced-motion: reduce) {
          .myerp-marquee-track,
          .myerp-popup-enter { animation: none; }
          .myerp-marquee-wrap { overflow-x: auto; }
        }
      `}</style>

      <div className="mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-8">
        <h2 className="mb-7 text-center text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400 sm:text-xs">
          {trustTitle}
        </h2>

        <div className="myerp-marquee-wrap relative w-full overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-white to-transparent sm:w-16" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-white to-transparent sm:w-16" />

          <div
            className={`myerp-marquee-track flex w-max py-1 ${
              isMarqueePaused ? "is-paused" : ""
            }`}
          >
            {[0, 1, 2].map((setIndex) => (
              <div
                key={`set-${setIndex}`}
                className="flex shrink-0 items-center gap-4 pr-4"
                aria-hidden={setIndex > 0 ? true : undefined}
              >
                {clients.map((client) => (
                  <ClientCard
                    key={`${client.id}-${setIndex}`}
                    client={client}
                    isActive={activePopup?.client.id === client.id}
                    onTriggerEnter={(el) => handleCardEnter(client, el)}
                    onTriggerLeave={scheduleClose}
                    onTriggerClick={(el) => handleCardClick(client, el)}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 border-t border-slate-100 pt-6 sm:flex-row sm:gap-10">
          {trustNotes.map((note) => (
            <div
              key={note.id}
              className="flex items-center gap-2 text-center sm:text-left"
            >
              {note.id === "security" ? (
                <ShieldCheck className="h-4 w-4 shrink-0 text-emerald-600" />
              ) : (
                <FileCheck2 className="h-4 w-4 shrink-0 text-indigo-600" />
              )}
              <p className="text-[11px] text-slate-500 sm:text-xs">
                <span className="font-bold text-slate-800">{note.label}</span>{" "}
                {note.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {mounted &&
        activePopup &&
        createPortal(
          <ClientPopupCard
            active={activePopup}
            onMouseEnter={cancelClose}
            onMouseLeave={scheduleClose}
            onClose={() => setActivePopup(null)}
          />,
          document.body
        )}
    </section>
  );
}