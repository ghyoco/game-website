"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CARDS_DATA } from "@/data/cards";
import { useLanguage } from "@/components/LanguageContext";

export default function DemoPage() {
  const { t } = useLanguage();
  const activeBabi = CARDS_DATA[0];
  const benchSumi = CARDS_DATA[3];
  const activeWarga = CARDS_DATA[7];
  const handSpells = [CARDS_DATA[4], CARDS_DATA[8], CARDS_DATA[9]];

  return (
    <div className="mx-auto max-w-[1200px] px-6 py-10 space-y-14">
      {/* TBA Header & Constraint Telemetry */}
      <header className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#a892c4] px-3.5 py-1 font-mono text-[11px] tracking-[0.025em] text-[#a892c4]">
          <span>{t.demoPage.badge}</span>
        </div>
        <h1 className="text-display-block text-[40px] sm:text-[56px] text-[#ffffff]">
          {t.demoPage.title}
        </h1>
        <p className="mx-auto max-w-[620px] text-[16px] leading-[1.5] text-[#918d8d]">
          {t.demoPage.subtitle}
        </p>

        <div className="mx-auto mt-8 grid max-w-[920px] gap-4 sm:grid-cols-3 text-left">
          {t.demoPage.constraints.map((item) => (
            <div
              key={item.label}
              className="rounded-[8px] border border-[#272626] bg-[#111111] p-4"
            >
              <span className="block font-mono text-[10px] tracking-[0.12em] text-[#918d8d]">
                {item.label}
              </span>
              <span className="mt-1.5 block font-mono text-[13px] font-medium text-[#ffffff]">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </header>

      {/* Dark Workspace Tabletop Mockup (#21222b shell per design.md Section 6.11) */}
      <section className="overflow-hidden rounded-[8px] border border-[#272626] bg-[#21222b]">
        <div className="flex flex-wrap items-center justify-between border-b border-[#272626] bg-[#191919] px-5 py-3">
          <div className="flex items-center gap-2">
            <div className="inline-flex items-center gap-2 rounded-[4px] border border-[#272626] bg-[#111111] px-3 py-1 text-[12px] font-medium text-[#ffffff]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#8870b6]" />
              <span>{t.demoPage.boardPreviewTitle}</span>
            </div>
          </div>
          <span className="font-mono text-[11px] tracking-[0.025em] text-[#a892c4]">
            STATELESS 1-GAME SANDBOX // TBA
          </span>
        </div>

        <div className="grid lg:grid-cols-12">
          {/* Left Match Sidebar (#111111) */}
          <aside className="border-b border-[#272626] bg-[#111111] p-5 lg:col-span-3 lg:border-b-0 lg:border-r space-y-5 text-left">
            <div>
              <span className="font-mono text-[10px] tracking-[0.12em] text-[#918d8d] uppercase">
                {t.demoPage.benchZoneLabel}
              </span>
              <div className="mt-3 rounded-[6px] border border-[#272626] bg-[#141716] p-3 text-center">
                <Image
                  src={benchSumi.svgPath}
                  alt={benchSumi.name}
                  width={630}
                  height={880}
                  unoptimized
                  className="mx-auto w-28 aspect-[630/880] object-contain"
                />
                <span className="mt-2 block font-mono text-[11px] text-[#a892c4]">
                  {benchSumi.name} (50 HP)
                </span>
                <span className="block font-mono text-[10px] text-[#918d8d]">
                  [Bench Support Active]
                </span>
              </div>
            </div>

            <div className="border-t border-[#272626] pt-4 font-mono text-[11px] leading-[1.5] text-[#918d8d]">
              {t.demoPage.defaultDeckNote}
            </div>
          </aside>

          {/* Main Tabletop Canvas (#141716) */}
          <div className="bg-[#141716] p-6 lg:col-span-9 space-y-6">
            {/* Opponent Top Bar */}
            <div className="rounded-[6px] border border-dashed border-[#414042] bg-[#111111] p-3 text-center font-mono text-[11px] tracking-[0.025em] text-[#918d8d]">
              {t.demoPage.opponentZone}
            </div>

            {/* Active 1v1 Combat Slot */}
            <div className="rounded-[8px] border border-[#272626] bg-[#111111] p-6">
              <div className="mb-4 flex items-center justify-between font-mono text-[11px] text-[#918d8d]">
                <span>{t.demoPage.activeArenaLabel}</span>
                <span className="text-[#a892c4]">{"TURN 03 // JUMAT LEGI"}</span>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 items-center">
                <div className="flex flex-col items-center rounded-[6px] border border-[#272626] bg-[#141716] p-4">
                  <Image
                    src={activeBabi.svgPath}
                    alt={activeBabi.name}
                    width={630}
                    height={880}
                    unoptimized
                    className="w-40 aspect-[630/880] object-contain"
                  />
                  <span className="mt-2 font-mono text-[12px] text-[#ffffff]">
                    {activeBabi.name} • 100 HP
                  </span>
                </div>

                <div className="flex flex-col items-center rounded-[6px] border border-[#272626] bg-[#141716] p-4">
                  <Image
                    src={activeWarga.svgPath}
                    alt={activeWarga.name}
                    width={630}
                    height={880}
                    unoptimized
                    className="w-40 aspect-[630/880] object-contain"
                  />
                  <span className="mt-2 font-mono text-[12px] text-[#ffffff]">
                    {activeWarga.name} • 220 HP
                  </span>
                </div>
              </div>
            </div>

            {/* Player Hand Preview */}
            <div className="rounded-[8px] border border-[#272626] bg-[#111111] p-4">
              <span className="block font-mono text-[11px] tracking-[0.025em] text-[#918d8d] mb-3">
                {t.demoPage.playerHand}
              </span>
              <div className="grid grid-cols-3 gap-3 max-w-[460px]">
                {handSpells.map((card) => (
                  <div
                    key={card.id}
                    className="rounded-[4px] border border-[#272626] bg-[#141716] p-1.5"
                  >
                    <Image
                      src={card.svgPath}
                      alt={card.name}
                      width={630}
                      height={880}
                      unoptimized
                      className="w-full aspect-[630/880] object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Default Deck 12-Card Roster */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-[20px] font-medium text-[#ffffff]">
            {t.demoPage.defaultDeckTitle}
          </h2>
          <Link
            href="/cards"
            className="font-mono text-[12px] text-[#a892c4] hover:text-[#ffffff]"
          >
            {t.nav.cards} -&gt;
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-6">
          {CARDS_DATA.map((card) => (
            <Link
              key={card.id}
              href="/cards"
              className="rounded-[8px] border border-[#272626] bg-[#111111] p-3 hover:border-[#8870b6] transition-colors"
            >
              <span className="font-mono text-[10px] text-[#a892c4]">
                {card.code}
              </span>
              <p className="mt-1 text-[13px] font-medium text-[#ffffff] truncate">
                {card.name}
              </p>
              <span className="mt-0.5 block font-mono text-[11px] text-[#918d8d]">
                {card.faction}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
