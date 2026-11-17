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
import { CalendarDays, CheckCircle2, X } from "lucide-react";
import { siteConfig } from "@/lib/content-data";

type DemoModalContextValue = {
  openDemo: () => void;
  closeDemo: () => void;
};

// Nilai bawaan jika provider belum dipasang (tidak menyebabkan crash)
const DemoModalContext = createContext<DemoModalContextValue>({
  openDemo: () => {
    console.warn("DemoModalProvider belum dipasang di app/layout.tsx");
  },
  closeDemo: () => {},
});

// Hook untuk membuka pop up dari komponen mana pun
export function useDemoModal() {
  return useContext(DemoModalContext);
}

export function DemoModalProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  const openDemo = useCallback(() => setOpen(true), []);
  const closeDemo = useCallback(() => setOpen(false), []);
  const value = useMemo(() => ({ openDemo, closeDemo }), [openDemo, closeDemo]);

  return (
    <DemoModalContext.Provider value={value}>
      {children}
      {/* Dirender hanya saat terbuka, jadi isian form otomatis kosong setiap dibuka */}
      {open && <DemoModal onClose={closeDemo} />}
    </DemoModalContext.Provider>
  );
}

const inputClass =
  "w-full rounded-2xl border border-[#c7d3e3] bg-white px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500/25";

const labelClass = "mb-1.5 block text-xs font-bold text-slate-900";

function DemoModal({ onClose }: { onClose: () => void }) {
  const data = siteConfig.demo;
  const firstFieldRef = useRef<HTMLInputElement>(null);

  const [status, setStatus] = useState<"form" | "success">("form");
  const [values, setValues] = useState({
    name: "",
    company: "",
    phone: "",
    focus: data.focusOptions[0],
  });

  // Kunci scroll halaman, tutup dengan Escape, dan fokus ke kolom pertama
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    firstFieldRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  const update =
    (key: keyof typeof values) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setValues((prev) => ({ ...prev, [key]: e.target.value }));
    };

  // Kirim: buka WhatsApp konsultan dengan pesan terisi otomatis
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const message = [
      data.messageIntro,
      "",
      `Nama: ${values.name.trim()}`,
      `Perusahaan: ${values.company.trim()}`,
      `WhatsApp/Telepon: ${values.phone.trim()}`,
      `Fokus Proses Bisnis: ${values.focus}`,
    ].join("\n");

    const url = `https://wa.me/${data.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setStatus("success");
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-slate-900/50 p-4 backdrop-blur-sm myerp-demo-overlay"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <style>{`
        @keyframes myerp-demo-overlay-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes myerp-demo-card-in {
          from { opacity: 0; transform: translateY(12px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .myerp-demo-overlay { animation: myerp-demo-overlay-in 0.2s ease-out both; }
        .myerp-demo-card { animation: myerp-demo-card-in 0.25s ease-out both; }
        @media (prefers-reduced-motion: reduce) {
          .myerp-demo-overlay, .myerp-demo-card { animation: none; }
        }
      `}</style>

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="demo-modal-title"
        className="myerp-demo-card relative my-auto w-full max-w-[440px] rounded-3xl bg-white p-6 shadow-2xl sm:p-7"
      >
        {/* Tombol tutup */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Tutup formulir"
          className="absolute right-5 top-5 rounded-lg p-1 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700"
        >
          <X className="h-5 w-5" />
        </button>

        {status === "form" ? (
          <>
            {/* Badge */}
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-700">
              <CalendarDays className="h-3.5 w-3.5" />
              {data.badge}
            </span>

            <h2
              id="demo-modal-title"
              className="mt-4 text-2xl font-extrabold leading-tight tracking-tight text-[#0B132B]"
            >
              {data.title}
            </h2>
            <p className="mt-1.5 text-[13px] leading-relaxed text-slate-500">
              {data.subtitle}
            </p>

            <form onSubmit={handleSubmit} className="mt-5 space-y-4">
              <div>
                <label htmlFor="demo-name" className={labelClass}>
                  {data.nameLabel}
                </label>
                <input
                  ref={firstFieldRef}
                  id="demo-name"
                  type="text"
                  required
                  autoComplete="name"
                  value={values.name}
                  onChange={update("name")}
                  placeholder={data.namePlaceholder}
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="demo-company" className={labelClass}>
                  {data.companyLabel}
                </label>
                <input
                  id="demo-company"
                  type="text"
                  required
                  autoComplete="organization"
                  value={values.company}
                  onChange={update("company")}
                  placeholder={data.companyPlaceholder}
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="demo-phone" className={labelClass}>
                  {data.phoneLabel}
                </label>
                <input
                  id="demo-phone"
                  type="tel"
                  inputMode="tel"
                  required
                  autoComplete="tel"
                  pattern="[0-9+ \-]{8,20}"
                  title="Masukkan nomor yang valid, contoh: 0812-3456-7890"
                  value={values.phone}
                  onChange={update("phone")}
                  placeholder={data.phonePlaceholder}
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="demo-focus" className={labelClass}>
                  {data.focusLabel}
                </label>
                <select
                  id="demo-focus"
                  value={values.focus}
                  onChange={update("focus")}
                  className={`${inputClass} cursor-pointer`}
                >
                  {data.focusOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                className="w-full rounded-2xl bg-blue-600 px-4 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/25 transition-colors hover:bg-blue-700"
              >
                {data.submitText}
              </button>
            </form>
          </>
        ) : (
          <div className="py-6 text-center">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
              <CheckCircle2 className="h-7 w-7" />
            </span>
            <h2
              id="demo-modal-title"
              className="mt-5 text-xl font-extrabold tracking-tight text-[#0B132B]"
            >
              {data.successTitle}
            </h2>
            <p className="mx-auto mt-2 max-w-xs text-[13px] leading-relaxed text-slate-500">
              {data.successText}
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-6 w-full rounded-2xl bg-blue-600 px-4 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/25 transition-colors hover:bg-blue-700"
            >
              {data.closeText}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}