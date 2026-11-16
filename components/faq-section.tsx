"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronRight, MessageCircle, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    id: "faq-1",
    question: "Apa itu MyERP Plus?",
    answer:
      "MyERP Plus adalah solusi Enterprise Resource Planning (ERP) berbasis web untuk mengelola berbagai aspek operasional bisnis, seperti keuangan, persediaan, pembelian, penjualan, distribusi, aset tetap, dan produksi.",
  },
  {
    id: "faq-2",
    question: "Apa manfaat utama menggunakan MyERP Plus?",
    answer:
      "MyERP Plus membantu meningkatkan efisiensi pencatatan dan perhitungan transaksi, mempermudah akses informasi, memantau keuangan, menghemat biaya, mengoptimalkan sumber daya manusia, serta mengotomatisasi proses bisnis.",
  },
  {
    id: "faq-3",
    question: "Apakah pengguna MyERP Plus harus memiliki pengetahuan akuntansi yang mendalam?",
    answer:
      "Tidak. MyERP Plus dirancang dengan antarmuka yang mudah digunakan dan proses otomatisasi sehingga dapat digunakan oleh pemilik bisnis maupun tim tanpa harus memiliki keahlian akuntansi mendalam.",
  },
  {
    id: "faq-4",
    question: "Bagaimana MyERP Plus membantu analisis data dan statistik bisnis?",
    answer:
      "MyERP Plus menyediakan fasilitas analisis data dan statistik yang membantu pengguna memahami kinerja bisnis serta memperoleh informasi untuk mendukung pengambilan keputusan.",
  },
  {
    id: "faq-5",
    question: "Apa saja fasilitas yang ditawarkan MyERP Plus?",
    answer:
      "MyERP Plus menyediakan fasilitas statistik dan analisis data, transaksi multi-currency (berbagai mata uang), multi-warehouse (pengelolaan banyak gudang), multi-user (akses banyak pengguna), pengelompokan proyek, divisi, dan pusat biaya, serta pembuatan dan pembongkaran paket produk.",
  },
  {
    id: "faq-6",
    question: "Apakah MyERP Plus menyediakan layanan kustomisasi?",
    answer:
      "Ya. MyERP Plus menyediakan layanan kustomisasi berupa pembuatan modul dan laporan khusus yang dapat disesuaikan dengan kebutuhan bisnis pelanggan.",
  },
  {
    id: "faq-7",
    question: "Bagaimana fitur multi-user mendukung kolaborasi tim?",
    answer:
     "Fitur multi-user memungkinkan beberapa anggota tim mengakses informasi yang relevan dan berkolaborasi sesuai dengan peran masing-masing dalam organisasi.",
  },
  {
    id: "faq-8",
    question: "Bagaimana MyERP Plus membantu menghemat biaya sistem akuntansi?",
    answer:
     "MyERP Plus membantu mengurangi biaya tenaga kerja dan waktu yang dibutuhkan untuk proses manual melalui otomatisasi dan pengelolaan transaksi yang lebih efisien.",
  },
  {
    id:"faq-9",
    question:"Apa saja modul yang tersedia di MyERP Plus?",
    answer: 
    "MyERP Plus menyediakan modul Finance & Accounting, Inventory & Warehouse, Purchase Management, Sales & Distribution Management, Fixed Asset, Production, Klinik & Rumah Sakit, Sekolah & Perguruan Tinggi, serta Point of Sales (POS)."
  }
];

export function FaqSection() {
  // Store open item IDs (supports multiple open or single accordion)
  const [openItems, setOpenItems] = useState<string[]>(["faq-1"]);

  const toggleItem = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="faq" className="w-full bg-white py-16 sm:py-20 lg:py-24 border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Left-aligned matching reference image) */}
        <div className="mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-slate-900 tracking-tight leading-[1.25]">
            Pertanyaan yang sering diajukan (FAQ) seputar MyERP Plus
          </h2>
        </div>

        {/* Accordion List with Minimalist Dividers */}
        <div className="border-t border-slate-200/90 divide-y divide-slate-200/80">
          {faqData.map((item) => {
            const isOpen = openItems.includes(item.id);
            return (
              <div key={item.id} className="py-1">
                {/* Accordion Trigger */}
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  className="w-full flex items-start sm:items-center gap-3.5 py-4 text-left group cursor-pointer transition-colors"
                >
                  {/* Left Chevron Indicator (Matching Reference Image) */}
                  <span
                    className={`shrink-0 mt-0.5 sm:mt-0 transition-transform duration-200 ${
                      isOpen
                        ? "rotate-90 text-blue-600"
                        : "text-slate-400 group-hover:text-slate-700"
                    }`}
                  >
                    <ChevronRight className="w-4 h-4 stroke-[2.5]" />
                  </span>

                  {/* Question Text */}
                  <span
                    className={`text-base sm:text-[17px] font-semibold tracking-tight transition-colors ${
                      isOpen
                        ? "text-blue-600"
                        : "text-slate-900 group-hover:text-blue-600"
                    }`}
                  >
                    {item.question}
                  </span>
                </button>

                {/* Accordion Content with Smooth Transition */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{
                        opacity: 1,
                        height: "auto",
                        transition: {
                          height: { duration: 0.28, ease: "easeOut" },
                          opacity: { duration: 0.24, ease: "easeOut" },
                        },
                      }}
                      exit={{
                        opacity: 0,
                        height: 0,
                        transition: {
                          height: { duration: 0.2, ease: "easeIn" },
                          opacity: { duration: 0.15 },
                        },
                      }}
                      className="overflow-hidden"
                    >
                      <div className="pl-7 pr-2 pb-5 pt-1">
                        <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom Support Callout */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-7 rounded-2xl bg-[#f8fbff] border border-blue-100/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100/80 text-blue-600 flex items-center justify-center shrink-0">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">
                Masih memiliki pertanyaan lain tentang MyERP Plus?
              </h4>
              <p className="text-xs text-slate-500 mt-0.5">
                Konsultan spesialis kami siap membantu menganalisis kebutuhan sistem bisnis Anda.
              </p>
            </div>
          </div>

          <Link
            href="https://wa.me/6281212122388?text=Halo%20MyERP%20Plus%2C%20saya%20ingin%20berkonsultasi%20mengenai%20implementasi%20sistem%20ERP%20untuk%20perusahaan%20saya"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-xs transition-colors shrink-0"
          >
            <span>Hubungi Konsultan</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
