"use client";

import React, { useEffect, useState } from "react";
import { ThumbsUp, Lock, Star } from "lucide-react";

export function ScrollingTrustBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Target the "Fitur Lengkap MyERP Plus" section
      const targetElement = document.getElementById("services");

      if (targetElement) {
        const rect = targetElement.getBoundingClientRect();
        // Becomes visible once the top of the features section enters the upper viewport
        // and stays visible as the user scrolls downwards throughout the page
        if (rect.top <= 140) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      } else {
        // Fallback based on scroll distance (past Hero and Trust Bar)
        setIsVisible(window.scrollY > 650);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Trigger initial evaluation on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      aria-hidden={!isVisible}
      className={`fixed top-20 inset-x-0 z-40 w-full px-2 sm:px-4 lg:px-6 transition-all duration-300 ease-out ${
        isVisible
          ? "opacity-100 translate-y-2.5 pointer-events-auto"
          : "opacity-0 -translate-y-6 pointer-events-none"
      }`}
    >
      {/* Full-width stretch container with rounded pill border */}
      <div className="w-full bg-white/95 backdrop-blur-md rounded-full border border-slate-200/90 shadow-[0_10px_35px_rgba(0,0,0,0.09)] py-3 px-4 sm:px-8 flex items-center justify-between overflow-x-auto no-scrollbar gap-4 sm:gap-6 select-none">
        
        {/* Item 1: Trust Metric */}
        <div className="flex items-center gap-2 shrink-0">
          <ThumbsUp className="w-4 h-4 text-blue-600 stroke-[2.2]" />
          <span className="text-xs sm:text-[13px] font-semibold text-slate-800 whitespace-nowrap">
            Dipercaya 10.000+ bisnis
          </span>
        </div>

        {/* Divider 1 */}
        <div className="h-4.5 w-px bg-slate-200/90 shrink-0 hidden sm:block" />

        {/* Item 2: Google / Gartner Rating */}
        <div className="flex items-center gap-2 shrink-0">
          <span className="w-5 h-5 rounded-full bg-[#0A192F] text-white flex items-center justify-center font-bold text-[10px] shadow-2xs">
            G
          </span>
          <div className="flex items-center gap-1 leading-none text-xs sm:text-[13px]">
            <span className="font-bold text-slate-900">4.8</span>
            <span className="text-slate-500 font-medium">Rating</span>
            <Star className="w-3.5 h-3.5 fill-amber-400 stroke-amber-400" />
          </div>
        </div>

        {/* Divider 2 */}
        <div className="h-4.5 w-px bg-slate-200/90 shrink-0 hidden md:block" />

        {/* Item 3: G2 Rating */}
        <div className="flex items-center gap-2 shrink-0">
          <span className="w-5 h-5 rounded-full bg-[#FF492C] text-white flex items-center justify-center font-bold text-[9px] shadow-2xs">
            G2
          </span>
          <div className="flex items-center gap-1 leading-none text-xs sm:text-[13px]">
            <span className="font-bold text-slate-900">4.8</span>
            <span className="text-slate-500 font-medium">Rating</span>
            <Star className="w-3.5 h-3.5 fill-amber-400 stroke-amber-400" />
          </div>
        </div>

        {/* Divider 3 */}
        <div className="h-4.5 w-px bg-slate-200/90 shrink-0 hidden sm:block" />

        {/* Item 4: Capterra / GetApp Rating */}
        <div className="flex items-center gap-2 shrink-0">
          <span className="w-5 h-5 rounded-full bg-[#FF5A00] text-white flex items-center justify-center font-bold text-[10px] shadow-2xs">
            ★
          </span>
          <div className="flex items-center gap-1 leading-none text-xs sm:text-[13px]">
            <span className="font-bold text-slate-900">4.9</span>
            <span className="text-slate-500 font-medium">Rating</span>
            <Star className="w-3.5 h-3.5 fill-amber-400 stroke-amber-400" />
          </div>
        </div>

        {/* Divider 4 */}
        <div className="h-4.5 w-px bg-slate-200/90 shrink-0 hidden lg:block" />

        {/* Item 5: Enterprise Security */}
        <div className="flex items-center gap-2 shrink-0">
          <Lock className="w-4 h-4 text-emerald-600 stroke-[2.2]" />
          <span className="text-xs sm:text-[13px] font-semibold text-slate-800 whitespace-nowrap">
            Keamanan data enterprise & ISO 27001
          </span>
        </div>

      </div>
    </div>
  );
}
