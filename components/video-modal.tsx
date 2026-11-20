"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { X } from "lucide-react";
import { siteConfig } from "@/lib/content-data";

type VideoModalContextValue = {
  openVideo: () => void;
  closeVideo: () => void;
};

// Nilai bawaan jika provider belum dipasang (tidak menyebabkan crash)
const VideoModalContext = createContext<VideoModalContextValue>({
  openVideo: () => {
    console.warn("VideoModalProvider belum dipasang di app/layout.tsx");
  },
  closeVideo: () => {},
});

// Hook untuk membuka pop up video dari komponen mana pun
export function useVideoModal() {
  return useContext(VideoModalContext);
}

// Ambil ID video dari berbagai bentuk link YouTube
function getYouTubeId(input: string): string | null {
  const value = input.trim();
  if (!value) return null;

  const isValidId = (id: string | null | undefined): id is string =>
    typeof id === "string" && /^[\w-]{11}$/.test(id);

  // Jika yang diisi langsung ID video
  if (isValidId(value)) return value;

  try {
    const url = new URL(value);
    const host = url.hostname.replace(/^www\./, "");

    if (host === "youtu.be") {
      const id = url.pathname.split("/").filter(Boolean)[0];
      return isValidId(id) ? id : null;
    }

    if (host === "youtube.com" || host === "m.youtube.com" || host === "youtube-nocookie.com") {
      const v = url.searchParams.get("v");
      if (isValidId(v)) return v;

      const parts = url.pathname.split("/").filter(Boolean);
      if (["embed", "shorts", "live", "v"].includes(parts[0])) {
        return isValidId(parts[1]) ? parts[1] : null;
      }
    }
  } catch {
    return null;
  }

  return null;
}

export function VideoModalProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  const openVideo = useCallback(() => setOpen(true), []);
  const closeVideo = useCallback(() => setOpen(false), []);
  const value = useMemo(() => ({ openVideo, closeVideo }), [openVideo, closeVideo]);

  return (
    <VideoModalContext.Provider value={value}>
      {children}
      {/* Dirender hanya saat terbuka, sehingga video berhenti saat pop up ditutup */}
      {open && <VideoModal onClose={closeVideo} />}
    </VideoModalContext.Provider>
  );
}

function VideoModal({ onClose }: { onClose: () => void }) {
  const data = siteConfig.video;
  const closeRef = useRef<HTMLButtonElement>(null);
  const videoId = getYouTubeId(data.url);

  // Kunci scroll halaman, tutup dengan Escape, dan fokus ke tombol tutup
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    closeRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="myerp-video-overlay fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <style>{`
        @keyframes myerp-video-overlay-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes myerp-video-card-in {
          from { opacity: 0; transform: scale(0.96); }
          to { opacity: 1; transform: scale(1); }
        }
        .myerp-video-overlay { animation: myerp-video-overlay-in 0.2s ease-out both; }
        .myerp-video-card { animation: myerp-video-card-in 0.25s ease-out both; }
        @media (prefers-reduced-motion: reduce) {
          .myerp-video-overlay, .myerp-video-card { animation: none; }
        }
      `}</style>

      {/* Tombol tutup di pojok kanan atas layar */}
      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        aria-label={data.closeLabel}
        className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
      >
        <X className="h-5 w-5" />
      </button>

      <div
        role="dialog"
        aria-modal="true"
        aria-label={data.title}
        className="myerp-video-card w-full max-w-4xl"
      >
        {videoId ? (
          <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black shadow-2xl shadow-black/50">
            <iframe
              className="absolute inset-0 h-full w-full"
              src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
              title={data.title}
              allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
            />
          </div>
        ) : (
          <div className="rounded-2xl bg-white p-8 text-center shadow-2xl">
            <p className="text-sm text-slate-600">{data.invalidText}</p>
            <button
              type="button"
              onClick={onClose}
              className="mt-5 rounded-lg bg-blue-600 px-5 py-2.5 text-xs font-bold text-white hover:bg-blue-700"
            >
              {data.closeLabel}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}