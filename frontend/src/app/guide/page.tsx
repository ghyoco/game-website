"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/components/LanguageContext";

export default function GuidePage() {
  const { t } = useLanguage();

  return (
    <div className="mx-auto max-w-[1120px] px-6 py-10">
      {/* Top Hero Banner with bg.png as Background + Redirect Link to KISATARA Guide Book PDF in a New Tab */}
      <section className="relative overflow-hidden rounded-[20px] border border-[#33284d] bg-[#111111] shadow-[0_24px_64px_rgba(0,0,0,0.75),inset_0_1px_0_0_rgba(200,180,203,0.18)]">
        {/* Background Image (bg.png) */}
        <div className="absolute inset-0">
          <Image
            src="/bg.png"
            alt="KISATARA Buku Aturan Background"
            fill
            unoptimized
            priority
            className="object-cover object-center opacity-45"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg in oklab, rgba(12, 8, 19, 0.58) 0%, rgba(17, 17, 17, 0.86) 65%, rgba(17, 17, 17, 0.96) 100%)",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 flex min-h-[420px] flex-col items-center justify-center px-6 py-16 text-center sm:px-12 sm:py-24">
          <h1 className="text-display-block text-[40px] sm:text-[56px] text-[#ffffff]">
            {t.guidePage.title}
          </h1>
          <p className="mx-auto mt-5 max-w-[600px] text-[16px] sm:text-[18px] leading-[1.6] text-[#d1d3d4]">
            {t.guidePage.subtitle}
          </p>

          <div className="mt-8">
            <a
              href="/KISATARA_Buku_Aturan_ID-2.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="press-scale inline-flex items-center gap-2.5 rounded-full bg-[#ffffff] px-7 py-3.5 text-[15px] font-semibold text-[#000000] shadow-[0_8px_28px_rgba(255,255,255,0.2)] hover:opacity-90"
            >
              <span>{t.guidePage.openPdfCta}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
