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
      {/* TBA Header & Constraint Cards */}
      <header className="text-center space-y-4">
        <div className="purple-pill-badge inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-[11px] font-semibold tracking-[0.06em] text-[#c8b4cb] uppercase">
          <span>{t.demoPage.badge}</span>
        </div>
        <h1 className="text-display-block text-[40px] sm:text-[56px] text-[#ffffff]">
          {t.demoPage.title}
        </h1>
        <p className="mx-auto max-w-[620px] text-[16px] leading-[1.55] text-[#918d8d]">
          {t.demoPage.subtitle}
        </p>

        <div className="mx-auto mt-8 grid max-w-[920px] gap-4 sm:grid-cols-3 text-left">
          {t.demoPage.constraints.map((item) => (
            <div
              key={item.label}
              className="obsidian-panel rounded-[12px] p-4"
            >
              <span className="block text-[11px] font-semibold tracking-[0.06em] text-[#a892c4] uppercase">
                {item.label}
              </span>
              <span className="mt-1.5 block text-[14px] font-semibold text-[#ffffff]">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </header>

      {/* Dark Workspace Tabletop Mockup (#21222b shell per design.md Section 6.11) */}
      <section className="overflow-hidden rounded-[16px] border border-[#33284d] bg-[#21222b] shadow-[0_20px_56px_rgba(0,0,0,0.6),inset_0_1px_0_0_rgba(200,180,203,0.14)]">
        <div className="flex flex-wrap items-center justify-between border-b border-[#272626] bg-[#191919] px-5 py-3">
          <div className="flex items-center gap-2">
            <div className="inline-flex items-center rounded-[6px] border border-[#33284d] bg-[#111111] px-3 py-1 text-[12px] font-semibold text-[#ffffff]">
              <span>{t.demoPage.boardPreviewTitle}</span>
            </div>
          </div>
          <span className="text-[12px] font-semibold text-[#c8b4cb]">
            Simulasi 1 Pertandingan • TBA
          </span>
        </div>

        <div className="grid lg:grid-cols-12">
          {/* Left Match Sidebar (#111111) */}
          <aside className="border-b border-[#272626] bg-[#111111] p-5 lg:col-span-3 lg:border-b-0 lg:border-r space-y-5 text-left">
            <div>
              <span className="text-[11px] font-semibold tracking-[0.06em] text-[#918d8d] uppercase">
                {t.demoPage.benchZoneLabel}
              </span>
              <div className="mt-3 rounded-[10px] border border-[#272626] bg-[#141716] p-3 text-center">
                <Image
                  src={benchSumi.svgPath}
                  alt={benchSumi.name}
                  width={630}
                  height={880}
                  unoptimized
                  className="mx-auto w-28 aspect-[630/880] object-contain"
                />
                <span className="mt-2 block text-[12px] font-semibold text-[#c8b4cb] tabular-nums">
                  {benchSumi.name} (50 HP)
                </span>
                <span className="block text-[11px] text-[#918d8d]">
                  Pasif Bench Aktif
                </span>
              </div>
            </div>

            <div className="border-t border-[#272626] pt-4 text-[12px] leading-[1.55] text-[#918d8d]">
              {t.demoPage.defaultDeckNote}
            </div>
          </aside>

          {/* Main Tabletop Canvas (#141716) */}
          <div className="bg-[#141716] p-6 lg:col-span-9 space-y-6">
            {/* Opponent Top Bar */}
            <div className="rounded-[10px] border border-dashed border-[#5c478a]/55 bg-[#111111] p-3 text-center text-[12px] font-medium text-[#918d8d]">
              {t.demoPage.opponentZone}
            </div>

            {/* Active 1v1 Combat Slot */}
            <div className="obsidian-panel rounded-[12px] p-6">
              <div className="mb-4 flex items-center justify-between text-[12px] font-semibold text-[#918d8d]">
                <span>{t.demoPage.activeArenaLabel}</span>
                <span className="text-[#c8b4cb] tabular-nums">Giliran 03 • Jumat Legi</span>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 items-center">
                <div className="flex flex-col items-center rounded-[10px] border border-[#272626] bg-[#141716] p-4">
                  <Image
                    src={activeBabi.svgPath}
                    alt={activeBabi.name}
                    width={630}
                    height={880}
                    unoptimized
                    className="w-40 aspect-[630/880] object-contain"
                  />
                  <span className="mt-2 text-[13px] font-semibold text-[#ffffff] tabular-nums">
                    {activeBabi.name} • 100 HP
                  </span>
                </div>

                <div className="flex flex-col items-center rounded-[10px] border border-[#272626] bg-[#141716] p-4">
                  <Image
                    src={activeWarga.svgPath}
                    alt={activeWarga.name}
                    width={630}
                    height={880}
                    unoptimized
                    className="w-40 aspect-[630/880] object-contain"
                  />
                  <span className="mt-2 text-[13px] font-semibold text-[#ffffff] tabular-nums">
                    {activeWarga.name} • 220 HP
                  </span>
                </div>
              </div>
            </div>

            {/* Player Hand Preview */}
            <div className="obsidian-panel rounded-[12px] p-4">
              <span className="block text-[12px] font-semibold text-[#918d8d] mb-3">
                {t.demoPage.playerHand}
              </span>
              <div className="grid grid-cols-3 gap-3 max-w-[460px]">
                {handSpells.map((card) => (
                  <div
                    key={card.id}
                    className="rounded-[8px] border border-[#272626] bg-[#141716] p-1.5"
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
          <h2 className="text-[20px] font-semibold text-[#ffffff]">
            {t.demoPage.defaultDeckTitle}
          </h2>
          <Link
            href="/cards"
            className="press-scale text-[13px] font-semibold text-[#c8b4cb] hover:text-[#ffffff]"
          >
            {t.nav.cards}
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-6">
          {CARDS_DATA.map((card) => (
            <Link
              key={card.id}
              href="/cards"
              className="obsidian-panel press-scale rounded-[10px] p-3 hover:border-[#8870b6]"
            >
              <span className="text-[11px] font-semibold text-[#c8b4cb] tabular-nums">
                {card.code}
              </span>
              <p className="mt-1 text-[13px] font-semibold text-[#ffffff] truncate">
                {card.name}
              </p>
              <span className="mt-0.5 block text-[11px] text-[#918d8d]">
                {card.faction}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
