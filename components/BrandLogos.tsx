import React from "react";

/**
 * Official MyERP Plus Brand Logo
 * Styled with bold geometric uppercase typography and signature "+" symbol
 */
export function MyErpPlusLogo({ className = "h-8" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 select-none group ${className}`}>
      {/* MyERP Plus Brand Icon / Mark */}
      <div className="flex items-center tracking-tight font-sans">
        <span className="text-2xl font-black tracking-tighter text-slate-900 group-hover:text-blue-600 transition-colors">
          MYERP
        </span>
        <span className="text-2xl font-black text-blue-600 ml-0.5 flex items-center">
          +
        </span>
      </div>
    </div>
  );
}

/**
 * Cloud ERP Security Badges (ISO 27001, SOC 2, Bank-grade Encryption)
 */
export function SecurityCertBadges({ className = "h-5" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 opacity-90 ${className}`}>
      {/* ISO 27001 Information Security Seal */}
      <div className="flex items-center gap-1 text-slate-300">
        <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-emerald-400" stroke="currentColor">
          <path
            d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="m9 12 2 2 4-4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="text-[10px] font-bold tracking-tight text-white uppercase">
          ISO 27001
        </span>
      </div>

      <span className="text-slate-600">•</span>

      {/* Cloud SOC 2 & 256-bit SSL */}
      <div className="flex items-center gap-1 text-slate-300">
        <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-blue-400" stroke="currentColor">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" strokeWidth="1.8" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" strokeWidth="1.8" />
        </svg>
        <span className="text-[10px] font-bold tracking-tight text-white uppercase">
          256-bit SSL
        </span>
      </div>
    </div>
  );
}

/**
 * Cloud Uptime Guarantee Badge
 */
export function CloudUptimeBadge({ className = "h-4" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-1.5 text-white ${className}`}>
      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
      <span className="text-[11px] font-medium text-slate-300">
        Uptime Server: <strong className="text-white font-bold">99.9%</strong>
      </span>
    </div>
  );
}

/**
 * Capterra Review Badge (Top Cloud ERP)
 */
export function CapterraIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <div className={`bg-[#FF5A00] text-white rounded-lg flex items-center justify-center font-bold text-xs tracking-tighter ${className}`}>
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
        <path d="M12 2L1 21h22L12 2zm0 4.5l7.5 13H4.5L12 6.5z" />
      </svg>
    </div>
  );
}

/**
 * Software Advice Review Badge
 */
export function SoftwareAdviceIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <div className={`bg-[#003B5C] text-[#00A4E4] rounded-lg flex items-center justify-center font-bold text-xs ${className}`}>
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
        <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <path d="M12 7v5l3 3" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    </div>
  );
}

/**
 * G2 Enterprise ERP Badge
 */
export function G2Icon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <div className={`bg-[#FF492C] text-white rounded-lg flex items-center justify-center font-bold text-xs tracking-tighter ${className}`}>
      G<span className="text-[10px]">2</span>
    </div>
  );
}

/**
 * WhatsApp Glyph Icon for Direct Sales Chat
 */
export function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

/**
 * Enterprise Client Logos for MyERP Plus Trust Bar
 */
export function IndoManufakturLogo({ className = "h-8" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 font-sans ${className}`}>
      <svg viewBox="0 0 28 28" fill="none" className="w-7 h-7 text-slate-700">
        <rect x="3" y="3" width="10" height="10" rx="2" fill="currentColor" />
        <rect x="15" y="3" width="10" height="10" rx="2" fill="currentColor" opacity="0.6" />
        <rect x="3" y="15" width="10" height="10" rx="2" fill="currentColor" opacity="0.6" />
        <rect x="15" y="15" width="10" height="10" rx="2" fill="#0284C7" />
      </svg>
      <div className="flex flex-col leading-none">
        <span className="text-base font-extrabold tracking-tight text-slate-800">PRIMA</span>
        <span className="text-[9px] font-bold text-slate-500 tracking-wider">MANUFAKTUR</span>
      </div>
    </div>
  );
}

export function CentralDistribusiLogo({ className = "h-7" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center justify-center text-slate-700 ${className}`}>
      <svg viewBox="0 0 32 18" fill="none" className="w-6 h-3 text-slate-600">
        <polygon points="16 1 30 7 16 17 2 7" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <line x1="8" y1="7" x2="24" y2="7" stroke="currentColor" strokeWidth="1" />
      </svg>
      <span className="text-[9.5px] font-extrabold tracking-widest uppercase text-slate-700 mt-0.5">
        CENTRAL MEGA DISTRIBUSI
      </span>
    </div>
  );
}

export function SastroBogaLogo({ className = "h-8" }: { className?: string }) {
  return (
    <div className={`border-2 border-slate-700 rounded-lg px-2 py-0.5 flex flex-col items-center justify-center text-slate-700 ${className}`}>
      <span className="text-[8px] font-serif uppercase tracking-widest leading-none font-semibold">
        SASTRO
      </span>
      <span className="text-[11px] font-serif font-black tracking-tighter leading-none italic">
        BOGA FOODS
      </span>
    </div>
  );
}

export function NusantaraMedikaLogo({ className = "h-7" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-1.5 text-slate-800 font-sans ${className}`}>
      <span className="text-xl font-black text-blue-700 tracking-tight">NM</span>
      <div className="flex flex-col leading-none">
        <span className="text-xs font-bold text-slate-900 tracking-tight">NUSANTARA</span>
        <span className="text-[9px] font-medium text-slate-500">MEDIKA FARMA</span>
      </div>
    </div>
  );
}

export function KaryaMultiNiagaLogo({ className = "h-8" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center justify-center text-slate-800 font-sans ${className}`}>
      <div className="flex items-center gap-1">
        <svg viewBox="0 0 24 14" fill="none" className="w-5 h-3 text-slate-700">
          <path d="M1 7C4 1 20 1 23 7C20 13 4 13 1 7Z" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="12" cy="7" r="2.5" fill="currentColor" />
        </svg>
        <span className="text-base font-black tracking-tight text-slate-900">KARYA MULTI</span>
      </div>
      <span className="text-[9px] font-semibold text-slate-600 tracking-wider -mt-0.5 uppercase">
        SUPPLY & LOGISTICS
      </span>
    </div>
  );
}
