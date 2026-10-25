"use client";

import React from "react";
import Image from "next/image";
import { GUIDE_STEPS } from "@/data/content";
import { useLanguage } from "@/components/LanguageContext";

export default function GuidePage() {
  const { locale, t } = useLanguage();

  return (
    <div className="mx-auto max-w-[1200px] px-6 py-10 space-y-14">
      <header className="text-center space-y-4">
        <div className="purple-pill-badge inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-[11px] font-semibold tracking-[0.06em] text-[#c8b4cb] uppercase">
          <span>{t.guidePage.badge}</span>
        </div>
        <h1 className="text-display-block text-[40px] sm:text-[56px] text-[#ffffff]">
          {t.guidePage.title}
        </h1>
        <p className="mx-auto max-w-[600px] text-[16px] leading-[1.55] text-[#918d8d]">
          {t.guidePage.subtitle}
        </p>
      </header>

      {/* Step-by-Step Workspace Panels with Designer Visual Placeholders (No SPEC-01/02/03/04) */}
      <div className="space-y-10">
        {GUIDE_STEPS.map((step) => (
          <section
            key={step.stepNumber}
            className="overflow-hidden rounded-[16px] border border-[#33284d] bg-[#21222b] shadow-[0_16px_44px_rgba(0,0,0,0.5),inset_0_1px_0_0_rgba(200,180,203,0.14)]"
          >
            {/* Top Workspace Bar */}
            <div className="flex flex-wrap items-center justify-between border-b border-[#272626] bg-[#191919] px-5 py-3 text-[13px] font-semibold">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-[6px] bg-[#5c478a] text-[12px] font-semibold text-[#ffffff] tabular-nums shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2)]">
                  {step.stepNumber}
                </span>
                <span className="text-[#ffffff]">{step.phaseLabel[locale]}</span>
              </div>
              <span className="text-[12px] font-medium text-[#c8b4cb]">
                {step.visualSlot.aspect}
              </span>
            </div>

            <div className="grid lg:grid-cols-12">
              {/* Left Column: Rules Copy (#111111) */}
              <div className="border-b border-[#272626] bg-[#111111] p-6 sm:p-8 lg:col-span-7 lg:border-b-0 lg:border-r space-y-5 text-left flex flex-col justify-center">
                <h2 className="text-heading-block text-[24px] sm:text-[28px] text-[#ffffff]">
                  {step.title[locale]}
                </h2>
                <p className="max-w-[62ch] text-[15px] leading-[1.6] text-[#edecee]">
                  {step.summary[locale]}
                </p>

                <ul className="space-y-3 border-t border-[#272626] pt-4 text-[14px] leading-[1.55] text-[#d1d3d4]">
                  {step.bullets[locale].map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8870b6] shadow-[0_0_8px_#8870b6]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column: Dedicated Game Designer Visual Placeholder (#141716) */}
              <div className="bg-[#141716] p-6 sm:p-8 lg:col-span-5 flex flex-col justify-center">
                <div className="relative flex aspect-video flex-col items-center justify-center rounded-[12px] border border-dashed border-[#5c478a]/60 bg-[#111111] p-6 text-center">
                  <span className="purple-pill-badge rounded-full px-3 py-1 text-[11px] font-semibold text-[#c8b4cb]">
                    {step.visualSlot.aspect}
                  </span>
                  <p className="mt-3 text-[16px] font-semibold text-[#ffffff]">
                    {step.visualSlot.annotation[locale]}
                  </p>
                  <p className="mt-2 text-[13px] leading-[1.55] text-[#918d8d]">
                    {step.visualSlot.spec[locale]}
                  </p>
                  <p className="mt-2 text-[12px] text-[#6d6e71]">
                    {t.guidePage.visualSlotNote}
                  </p>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Victory Conditions Summary */}
      <section className="space-y-6">
        <h2 className="text-heading-block text-[28px] sm:text-[32px] text-[#ffffff] text-center">
          {t.guidePage.winCondHeading}
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="obsidian-panel rounded-[16px] p-8 text-left">
            <div className="flex items-center gap-2 text-[12px] font-semibold tracking-[0.04em] text-[#c8b4cb] uppercase">
              <Image
                src="/cards/Dark%20Element.svg"
                alt=""
                width={16}
                height={16}
                unoptimized
                className="h-4 w-4"
              />
              <span>Elemen Dark • Babi Ngepet</span>
            </div>
            <h3 className="mt-3 text-[20px] font-semibold text-[#ffffff]">
              {t.guidePage.babiWinTitle}
            </h3>
            <p className="mt-2 text-[14px] leading-[1.6] text-[#918d8d]">
              {t.guidePage.babiWinDesc}
            </p>
          </div>

          <div className="obsidian-panel rounded-[16px] p-8 text-left">
            <div className="flex items-center gap-2 text-[12px] font-semibold tracking-[0.04em] text-[#e8dda8] uppercase">
              <Image
                src="/cards/Fire%20Element.svg"
                alt=""
                width={16}
                height={16}
                unoptimized
                className="h-4 w-4"
              />
              <span>Elemen Fire • Warga Desa</span>
            </div>
            <h3 className="mt-3 text-[20px] font-semibold text-[#ffffff]">
              {t.guidePage.wargaWinTitle}
            </h3>
            <p className="mt-2 text-[14px] leading-[1.6] text-[#918d8d]">
              {t.guidePage.wargaWinDesc}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
