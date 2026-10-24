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
        <div className="inline-flex items-center gap-2 rounded-full border border-[#a892c4] px-3.5 py-1 font-mono text-[11px] tracking-[0.025em] text-[#a892c4]">
          <span>{t.guidePage.badge}</span>
        </div>
        <h1 className="text-display-block text-[40px] sm:text-[56px] text-[#ffffff]">
          {t.guidePage.title}
        </h1>
        <p className="mx-auto max-w-[600px] text-[16px] leading-[1.5] text-[#918d8d]">
          {t.guidePage.subtitle}
        </p>
      </header>

      {/* Step-by-Step Workspace Panels with Designer Visual Placeholders */}
      <div className="space-y-10">
        {GUIDE_STEPS.map((step) => (
          <section
            key={step.stepNumber}
            className="overflow-hidden rounded-[8px] border border-[#272626] bg-[#21222b]"
          >
            {/* Top Workspace Bar */}
            <div className="flex flex-wrap items-center justify-between border-b border-[#272626] bg-[#191919] px-5 py-3 font-mono text-[12px] tracking-[0.025em]">
              <div className="flex items-center gap-2.5">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-[4px] bg-[#5c478a] text-[11px] font-medium text-[#ffffff]">
                  {step.stepNumber}
                </span>
                <span className="text-[#ffffff]">{step.phaseCode}</span>
              </div>
              <span className="text-[#918d8d]">{step.visualSlot.id}</span>
            </div>

            <div className="grid lg:grid-cols-12">
              {/* Left Column: Rules Copy + Rule Telemetry Code Block (#111111) */}
              <div className="border-b border-[#272626] bg-[#111111] p-6 sm:p-8 lg:col-span-7 lg:border-b-0 lg:border-r space-y-5 text-left">
                <h2 className="text-heading-block text-[24px] sm:text-[28px] text-[#ffffff]">
                  {step.title[locale]}
                </h2>
                <p className="max-w-[62ch] text-[15px] leading-[1.55] text-[#edecee]">
                  {step.summary[locale]}
                </p>

                <ul className="space-y-2.5 border-t border-[#272626] pt-4 text-[14px] leading-[1.5] text-[#d1d3d4]">
                  {step.bullets[locale].map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8870b6]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Rule Logic Block (design.md Section 6.13) */}
                <div className="rounded-[8px] border border-[#272626] bg-[#141716] p-4 font-mono text-[12px] leading-[1.55] tracking-[0.025em]">
                  {step.telemetryCode.map((line, idx) => (
                    <div key={idx} className="flex items-baseline gap-4">
                      <span className="w-4 select-none text-right text-[10px] text-[#424242]">
                        {idx + 1}
                      </span>
                      <span className="text-[#a892c4]">{line}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Dedicated Game Designer Visual Placeholder (#141716) */}
              <div className="bg-[#141716] p-6 sm:p-8 lg:col-span-5 flex flex-col justify-center">
                <div className="relative flex aspect-video flex-col items-center justify-center rounded-[8px] border border-dashed border-[#414042] bg-[#111111] p-6 text-center">
                  {/* Hand-drawn Caveat Annotation */}
                  <span className="font-annotation text-[20px] text-[#ffffff]">
                    {step.visualSlot.annotation}
                  </span>
                  <span className="mt-2 rounded-[4px] border border-[#272626] bg-[#191919] px-2.5 py-1 font-mono text-[11px] tracking-[0.025em] text-[#a892c4]">
                    {`${step.visualSlot.id} // ${step.visualSlot.aspect}`}
                  </span>
                  <p className="mt-3 font-mono text-[11px] leading-[1.5] text-[#918d8d]">
                    {step.visualSlot.spec}
                  </p>
                  <p className="mt-2 text-[12px] text-[#58595b]">
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
          <div className="rounded-[8px] border border-[#272626] bg-[#111111] p-8 text-left">
            <div className="flex items-center gap-2 font-mono text-[11px] text-[#a892c4]">
              <Image
                src="/cards/Dark%20Element.svg"
                alt=""
                width={16}
                height={16}
                unoptimized
                className="h-4 w-4"
              />
              <span>{"DARK ELEMENT // BABI NGEPET"}</span>
            </div>
            <h3 className="mt-3 text-[20px] font-medium text-[#ffffff]">
              {t.guidePage.babiWinTitle}
            </h3>
            <p className="mt-2 text-[14px] leading-[1.55] text-[#918d8d]">
              {t.guidePage.babiWinDesc}
            </p>
          </div>

          <div className="rounded-[8px] border border-[#272626] bg-[#111111] p-8 text-left">
            <div className="flex items-center gap-2 font-mono text-[11px] text-[#e8dda8]">
              <Image
                src="/cards/Fire%20Element.svg"
                alt=""
                width={16}
                height={16}
                unoptimized
                className="h-4 w-4"
              />
              <span>{"FIRE ELEMENT // WARGA DESA"}</span>
            </div>
            <h3 className="mt-3 text-[20px] font-medium text-[#ffffff]">
              {t.guidePage.wargaWinTitle}
            </h3>
            <p className="mt-2 text-[14px] leading-[1.55] text-[#918d8d]">
              {t.guidePage.wargaWinDesc}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
