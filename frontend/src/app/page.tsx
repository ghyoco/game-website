"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/components/LanguageContext";
import { CARDS_DATA } from "@/data/cards";

function HeroWorkspaceMockup({ annotation }: { annotation: string }) {
  const babiCard = CARDS_DATA[0];
  const sumiCard = CARDS_DATA[3];
  const wargaCard = CARDS_DATA[7];

  return (
    <div className="relative mx-auto mt-14 max-w-[1120px]">
      {/* Natural bg.png Purple Radial Cloud Backdrop */}
      <div
        className="pointer-events-none absolute -inset-x-8 -inset-y-10 opacity-90 blur-2xl"
        style={{ background: "var(--gradient-hero-cloud)" }}
      />

      {/* Hand-drawn Caveat Annotation Overlay per design.md Section 4.3 & 6.15 */}
      <div className="hidden lg:flex items-center gap-2 absolute -top-9 right-8 z-20">
        <span className="font-annotation text-[21px] text-[#ffffff]">
          {annotation}
        </span>
        <svg
          width="42"
          height="28"
          viewBox="0 0 42 28"
          fill="none"
          className="text-[#a892c4] translate-y-2"
        >
          <path
            d="M2 4C18 4 30 10 36 24M36 24L29 20M36 24L39 16"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Product Editor Panel (#21222b shell, 8px radius, 1px #272626 border) */}
      <div className="relative z-10 overflow-hidden rounded-[8px] border border-[#272626] bg-[#21222b]">
        {/* Top Tab Bar */}
        <div className="flex flex-wrap items-center justify-between border-b border-[#272626] bg-[#191919] px-4 py-2.5">
          <div className="flex items-center gap-2">
            <div className="inline-flex items-center gap-2 rounded-[4px] border border-[#272626] bg-[#111111] px-3 py-1 text-[12px] font-medium text-[#ffffff]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#8870b6]" />
              <span>arena-preview.tcg</span>
            </div>
            <span className="px-3 py-1 font-mono text-[12px] tracking-[0.025em] text-[#918d8d]">
              deck-manifest.json
            </span>
          </div>
          <span className="font-mono text-[11px] tracking-[0.025em] text-[#918d8d]">
            BABI NGEPET VS WARGA // PROTOTYPE BUILD
          </span>
        </div>

        {/* Inner Workspace Grid: Left Sidebar (#111111) + Main Canvas (#141716) */}
        <div className="grid lg:grid-cols-12">
          <aside className="border-b border-[#272626] bg-[#111111] p-4 lg:col-span-3 lg:border-b-0 lg:border-r space-y-4 text-left">
            <div>
              <span className="font-mono text-[10px] tracking-[0.12em] text-[#918d8d] uppercase">
                ACTIVE TELEMETRY
              </span>
              <div className="mt-2 space-y-1.5 font-mono text-[12px]">
                <div className="flex items-center justify-between rounded-[4px] bg-[#191919] px-2.5 py-1.5 text-[#ffffff]">
                  <span>Babi Ngepet</span>
                  <span className="text-[#a892c4]">100 HP</span>
                </div>
                <div className="flex items-center justify-between rounded-[4px] bg-[#191919] px-2.5 py-1.5 text-[#ffffff]">
                  <span>Amukan Warga</span>
                  <span className="text-[#e8dda8]">220 HP</span>
                </div>
              </div>
            </div>

            <div className="border-t border-[#272626] pt-3">
              <span className="font-mono text-[10px] tracking-[0.12em] text-[#918d8d] uppercase">
                BENCH SUPPORT
              </span>
              <div className="mt-2 rounded-[4px] border border-[#272626] bg-[#141716] p-2.5 font-mono text-[11px] text-[#d1d3d4]">
                <span className="block text-[#a892c4]">Mbok Sumi (50 HP)</span>
                <span className="mt-0.5 block text-[#918d8d]">
                  Pasif: Lilin Aktif
                </span>
              </div>
            </div>

            <div className="border-t border-[#272626] pt-3">
              <span className="font-mono text-[10px] tracking-[0.12em] text-[#918d8d] uppercase">
                ELEMENTS
              </span>
              <div className="mt-2 flex items-center gap-3">
                <div className="flex items-center gap-1.5 font-mono text-[11px] text-[#d1d3d4]">
                  <Image
                    src="/cards/Dark%20Element.svg"
                    alt="Dark"
                    width={16}
                    height={16}
                    unoptimized
                    className="h-4 w-4"
                  />
                  <span>Dark</span>
                </div>
                <div className="flex items-center gap-1.5 font-mono text-[11px] text-[#d1d3d4]">
                  <Image
                    src="/cards/Fire%20Element.svg"
                    alt="Fire"
                    width={16}
                    height={16}
                    unoptimized
                    className="h-4 w-4"
                  />
                  <span>Fire</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Canvas (#141716) */}
          <div className="bg-[#141716] p-5 sm:p-6 lg:col-span-9">
            <div className="grid gap-5 md:grid-cols-12 md:items-center">
              {/* Official bg.png Key Art Panel */}
              <div className="md:col-span-7 overflow-hidden rounded-[8px] border border-[#272626] bg-[#000000]">
                <Image
                  src="/bg.png"
                  alt="Babi Ngepet vs Warga Key Art"
                  width={1024}
                  height={576}
                  unoptimized
                  className="aspect-video w-full object-cover"
                />
                <div className="flex items-center justify-between border-t border-[#272626] bg-[#111111] px-3.5 py-2 font-mono text-[11px] text-[#918d8d]">
                  <span>{"KEY ART // BABI NGEPET VS WARGA"}</span>
                  <span className="text-[#a892c4]">1v1 DUEL</span>
                </div>
              </div>

              {/* Live SVG Card Trio */}
              <div className="md:col-span-5 grid grid-cols-3 gap-2.5">
                {[babiCard, sumiCard, wargaCard].map((card) => (
                  <Link
                    key={card.id}
                    href="/cards"
                    className="tcg-card-pop rounded-[6px] border border-[#272626] bg-[#111111] p-1.5 block"
                  >
                    <Image
                      src={card.svgPath}
                      alt={card.name}
                      width={630}
                      height={880}
                      unoptimized
                      className="w-full aspect-[630/880] object-contain"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LandingPage() {
  const { t } = useLanguage();
  const [activeTabId, setActiveTabId] = useState("shifter");

  const currentTab =
    t.landing.tabs.find((tab) => tab.id === activeTabId) ?? t.landing.tabs[0];
  const showcaseCards = CARDS_DATA.filter((c) =>
    currentTab.cardIds.includes(c.id)
  );

  return (
    <div className="mx-auto max-w-[1200px] px-6">
      {/* 1. Hero Block (design.md Section 5 & 8.1) */}
      <section className="pt-8 pb-20 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#a892c4] bg-transparent px-3.5 py-1.5 text-[12px] font-medium text-[#a892c4]">
          <span>{t.landing.badge}</span>
          <span className="font-mono">-&gt;</span>
        </div>

        <h1 className="mx-auto mt-6 max-w-[920px] text-display-block text-[44px] sm:text-[64px] lg:text-[76px]">
          <span className="block text-[#ffffff]">{t.landing.titleLine1}</span>
          <span className="block text-[#8870b6]">{t.landing.titleLine2}</span>
        </h1>

        <p className="mx-auto mt-6 max-w-[580px] text-[16px] sm:text-[18px] leading-[1.55] text-[#918d8d]">
          {t.landing.lead}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
          {/* High-Contrast White Primary CTA */}
          <Link
            href="/cards"
            className="rounded-[30px] bg-[#ffffff] px-6 py-3 text-[14px] font-medium text-[#000000] transition-opacity hover:opacity-90"
          >
            {t.landing.ctaCards}
          </Link>
          {/* Secondary Outlined Violet CTA */}
          <Link
            href="/guide"
            className="rounded-[30px] border border-[#8870b6] bg-transparent px-6 py-3 text-[14px] font-medium text-[#a892c4] transition-colors hover:bg-[#5c478a]/20 hover:text-[#ffffff]"
          >
            {t.landing.ctaGuide}
          </Link>
          {/* Tertiary Arrow Text Link */}
          <Link
            href="/demo"
            className="px-3 py-2 text-[14px] font-medium text-[#edecee] hover:text-[#ffffff] transition-colors"
          >
            {t.landing.ctaDemo}
          </Link>
        </div>

        <HeroWorkspaceMockup annotation={t.landing.annotationHero} />
      </section>

      {/* 2. Monochrome Telemetry Strip (design.md Section 6.16) */}
      <section className="border-y border-[#272626] py-8">
        <p className="text-center font-mono text-[11px] tracking-[0.14em] text-[#918d8d] uppercase">
          {t.landing.stripLabel}
        </p>
        <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-5 text-center font-mono text-[12px] tracking-[0.025em] text-[#a3a3a3]">
          <div className="rounded-[4px] border border-[#272626] bg-[#111111] py-2.5">
            ACTIVE SLOT 1v1
          </div>
          <div className="rounded-[4px] border border-[#272626] bg-[#111111] py-2.5">
            BENCH SUPPORT
          </div>
          <div className="rounded-[4px] border border-[#272626] bg-[#111111] py-2.5">
            3-STAGE EVOLUTION
          </div>
          <div className="rounded-[4px] border border-[#272626] bg-[#111111] py-2.5">
            DARK &amp; FIRE ENERGY
          </div>
          <div className="col-span-2 sm:col-span-1 rounded-[4px] border border-[#272626] bg-[#111111] py-2.5">
            12 SVG PROTOTYPES
          </div>
        </div>
      </section>

      {/* 3. What the Game Is About — Segmented Tab Control + 2-Column Showcase */}
      <section className="py-24 space-y-12">
        <div className="text-center space-y-3">
          <span className="font-mono text-[11px] tracking-[0.14em] text-[#a892c4] uppercase">
            {t.landing.aboutTag}
          </span>
          <h2 className="text-heading-block text-[32px] sm:text-[42px] text-[#ffffff]">
            {t.landing.aboutHeading}
          </h2>
          <p className="mx-auto max-w-[580px] text-[16px] text-[#918d8d]">
            {t.landing.aboutSubheading}
          </p>

          {/* Segmented Tab Pill (30px radius per design.md Section 6.10) */}
          <div className="pt-4 flex justify-center">
            <div
              role="tablist"
              className="inline-flex flex-wrap items-center gap-1 rounded-[30px] border border-white/[0.1] bg-[#191919] p-1.5"
            >
              {t.landing.tabs.map((tab) => {
                const active = tab.id === currentTab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setActiveTabId(tab.id)}
                    className={`inline-flex items-center gap-2 rounded-[30px] px-5 py-2 text-[14px] transition-colors cursor-pointer ${
                      active
                        ? "bg-[#111111] text-[#ffffff] font-medium border border-[#272626]"
                        : "text-[#d1d3d4] hover:text-[#ffffff]"
                    }`}
                  >
                    {active ? (
                      <span className="h-1.5 w-1.5 rounded-full bg-[#8870b6]" />
                    ) : null}
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* 2-Column Feature Copy (Left) + Product/Card Panel (Right) */}
        <div className="grid gap-8 rounded-[8px] border border-[#272626] bg-[#111111] p-6 sm:p-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6 space-y-5 text-left">
            <h3 className="text-heading-block text-[24px] sm:text-[28px] text-[#ffffff]">
              {currentTab.heading}
            </h3>
            <p className="max-w-[60ch] text-[15px] leading-[1.55] text-[#edecee]">
              {currentTab.body}
            </p>
            <ul className="space-y-3 border-t border-[#272626] pt-4 text-[14px] leading-[1.5] text-[#d1d3d4]">
              {currentTab.bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8870b6]" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6 rounded-[8px] border border-[#272626] bg-[#141716] p-5">
            <div className="grid grid-cols-3 gap-3">
              {showcaseCards.map((card) => (
                <Link
                  key={card.id}
                  href="/cards"
                  className="tcg-card-pop rounded-[6px] border border-[#272626] bg-[#111111] p-2 block"
                >
                  <Image
                    src={card.svgPath}
                    alt={card.name}
                    width={630}
                    height={880}
                    unoptimized
                    className="w-full aspect-[630/880] object-contain"
                  />
                  <span className="mt-2 block text-center font-mono text-[11px] text-[#edecee] truncate">
                    {card.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. What the Project Is For — 3-Column Resource Card Grid (design.md Section 6.14) */}
      <section className="py-12 space-y-10">
        <div className="text-center space-y-2">
          <span className="font-mono text-[11px] tracking-[0.14em] text-[#a892c4] uppercase">
            {t.landing.purposeTag}
          </span>
          <h2 className="text-heading-block text-[32px] sm:text-[40px] text-[#ffffff]">
            {t.landing.purposeHeading}
          </h2>
          <p className="mx-auto max-w-[560px] text-[16px] text-[#918d8d]">
            {t.landing.purposeSubheading}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {t.landing.purposeCards.map((card) => (
            <article
              key={card.code}
              className="flex flex-col justify-between rounded-[8px] border border-[#272626] bg-[#111111] p-8 text-left"
            >
              <div>
                <div className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.025em] text-[#a892c4]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#8870b6]" />
                  <span>{card.code}</span>
                </div>
                <h3 className="mt-4 text-[20px] font-medium tracking-[-0.01em] text-[#ffffff] leading-[1.3]">
                  {card.title}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.55] text-[#918d8d]">
                  {card.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
